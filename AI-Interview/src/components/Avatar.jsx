import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { Box3, MathUtils, Vector3 } from "three";

function Robot({ talking }) {
  const { scene } = useGLTF("/models/business_man_standing.glb");
  const model = useMemo(() => scene.clone(true), [scene]);
  const robotRef = useRef(null);
  const baseFacingYRef = useRef(-Math.PI / 2 - 0.15);
  const baseScaleRef = useRef(new Vector3(1, 1, 1));
  const jawBonesRef = useRef([]);
  const fallbackTalkBonesRef = useRef([]);
  const lipMorphsRef = useRef([]);
  const smoothMouthOpenRef = useRef(0);

  useLayoutEffect(() => {
    // Normalize model size and center so it remains visible regardless of source GLB scale.
    const box = new Box3().setFromObject(model);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());

    model.position.sub(center);

    if (size.y > 0) {
      const targetHeight = 3.35;
      const uniformScale = targetHeight / size.y;
      model.scale.setScalar(uniformScale);
    }

    const fittedBox = new Box3().setFromObject(model);
    const fittedCenter = fittedBox.getCenter(new Vector3());
    // Keep avatar around vertical center of frame (instead of hugging the top).
    model.position.y -= fittedCenter.y;
    model.position.y -= 0.1;

    const jawBones = [];
    const fallbackTalkBones = [];
    const lipMorphs = [];

    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }

      if (
        node.isBone &&
        /jaw|mouth|lip|mandible|chin|tongue|teeth|lowerface|facial/i.test(node.name)
      ) {
        node.userData.baseRotationX = node.rotation.x;
        jawBones.push(node);
      }

      if (node.isBone && /head|neck/i.test(node.name)) {
        node.userData.baseRotationX = node.rotation.x;
        fallbackTalkBones.push(node);
      }

      if (node.morphTargetDictionary && node.morphTargetInfluences) {
        const dict = node.morphTargetDictionary;
        const influences = node.morphTargetInfluences;
        const keys = Object.keys(dict);

        keys.forEach((key) => {
          if (
            /jawopen|mouthopen|mouth|lips|viseme|phoneme|aa|ah|ee|ih|oh|ou|open|talk|speak/i.test(
              key
            )
          ) {
            lipMorphs.push({ influences, index: dict[key] });
          }
        });
      }
    });

    jawBonesRef.current = jawBones;
    fallbackTalkBonesRef.current = fallbackTalkBones;
    lipMorphsRef.current = lipMorphs;
  }, [model]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (robotRef.current) {
      const speechWave =
        0.22 +
        ((Math.sin(t * 9) + 1) / 2) * 0.22 +
        ((Math.sin(t * 13.5 + 0.7) + 1) / 2) * 0.12;
      const targetMouthOpen = talking ? speechWave : 0;
      const lerpFactor = 1 - Math.exp(-delta * (talking ? 12 : 16));
      smoothMouthOpenRef.current = MathUtils.lerp(
        smoothMouthOpenRef.current,
        targetMouthOpen,
        lerpFactor
      );

      const mouthOpen = MathUtils.clamp(smoothMouthOpenRef.current, 0, 0.55);
      const hasFaceRig = jawBonesRef.current.length > 0 || lipMorphsRef.current.length > 0;

      // Keep avatar static and front-facing.
      robotRef.current.rotation.y = baseFacingYRef.current;
      robotRef.current.rotation.x = 0;
      robotRef.current.position.y = 0;

      // Mouth/jaw movement while speaking question.
      jawBonesRef.current.forEach((jaw) => {
        jaw.rotation.x = (jaw.userData.baseRotationX || 0) + mouthOpen * 0.75;
      });

      lipMorphsRef.current.forEach(({ influences, index }) => {
        influences[index] = mouthOpen;
      });

      // Fallback when model has no jaw/lip rig: animate head/neck + subtle squash/stretch.
      if (!hasFaceRig) {
        fallbackTalkBonesRef.current.forEach((bone) => {
          const speechNod = talking ? Math.sin(t * 20) * 0.06 : 0;
          bone.rotation.x = (bone.userData.baseRotationX || 0) + speechNod;
        });

        const pulse = talking ? Math.sin(t * 16) * 0.012 : 0;
        robotRef.current.scale.set(
          baseScaleRef.current.x - pulse * 0.35,
          baseScaleRef.current.y + pulse,
          baseScaleRef.current.z - pulse * 0.35
        );
      } else {
        robotRef.current.scale.copy(baseScaleRef.current);
      }
    }
  });

  return (
    <group ref={robotRef} position={[0, -0.2, 0]}>
      <primitive object={model} />
    </group>
  );
}

export default function Avatar({ talking }) {
  return (
    <div className="w-full h-full min-h-[420px] rounded-2xl bg-gradient-to-b from-slate-800/60 via-slate-900/40 to-slate-950/70 border border-white/10 overflow-hidden flex items-center justify-center">
      <Canvas shadows camera={{ position: [0, 1.35, 4.2], fov: 30 }}>
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.5} groundColor="#1e293b" />
        <directionalLight
          castShadow
          position={[4, 8, 4]}
          intensity={2.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight position={[-3, 5, 5]} angle={0.4} penumbra={0.6} intensity={0.9} />

        <Suspense fallback={null}>
          <Robot talking={talking} />
        </Suspense>

        <ContactShadows position={[0, -1.3, 0]} opacity={0.45} scale={8} blur={1.8} far={2} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={[0, 0.8, 0]} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/business_man_standing.glb");
