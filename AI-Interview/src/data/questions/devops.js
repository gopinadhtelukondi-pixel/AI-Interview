const devopsQuestions = {

easy: [

{ question: "What is DevOps?", keywords: ["development","operations","automation"] },

{ question: "What is CI/CD?", keywords: ["continuous","integration","delivery"] },

{ question: "What is Continuous Integration?", keywords: ["code","build","automation"] },

{ question: "What is Continuous Deployment?", keywords: ["automatic","release","pipeline"] },

{ question: "What is a build pipeline?", keywords: ["automation","steps","deployment"] },

{ question: "What is Git?", keywords: ["version","control","repository"] },

{ question: "What is a repository?", keywords: ["code","storage","git"] },

{ question: "What is a branch in Git?", keywords: ["parallel","development","version"] },

{ question: "What is a commit?", keywords: ["save","changes","history"] },

{ question: "What is Docker?", keywords: ["container","image","runtime"] },

{ question: "What is a container?", keywords: ["lightweight","environment","isolated"] },

{ question: "What is a Docker image?", keywords: ["template","container","package"] },

{ question: "What is Kubernetes?", keywords: ["container","orchestration","cluster"] },

{ question: "What is Infrastructure as Code?", keywords: ["automation","infrastructure","scripts"] },

{ question: "What is Jenkins?", keywords: ["automation","CI","pipeline"] },

{ question: "What is monitoring?", keywords: ["observe","metrics","system"] },

{ question: "What is logging?", keywords: ["records","events","system"] },

{ question: "What is configuration management?", keywords: ["setup","automation","servers"] },

{ question: "What is Ansible?", keywords: ["automation","configuration","agentless"] },

{ question: "What is Terraform?", keywords: ["infrastructure","provision","cloud"] },

{ question: "What is cloud computing?", keywords: ["internet","servers","scalable"] },

{ question: "What is AWS?", keywords: ["cloud","services","amazon"] },

{ question: "What is Azure?", keywords: ["cloud","microsoft","platform"] },

{ question: "What is GCP?", keywords: ["google","cloud","services"] },

{ question: "What is scalability?", keywords: ["increase","load","resources"] },

{ question: "What is load balancing?", keywords: ["traffic","distribution","servers"] },

{ question: "What is a virtual machine?", keywords: ["virtual","hardware","isolation"] },

{ question: "What is automation in DevOps?", keywords: ["scripts","efficiency","tasks"] },

{ question: "What is deployment?", keywords: ["release","application","server"] },

{ question: "What is rollback?", keywords: ["revert","version","deployment"] },

{ question: "What is YAML?", keywords: ["configuration","file","format"] },

{ question: "What is containerization?", keywords: ["package","application","environment"] },

{ question: "What is artifact?", keywords: ["build","output","package"] },

{ question: "What is pipeline stage?", keywords: ["step","build","process"] },

{ question: "What is server?", keywords: ["host","application","network"] },

{ question: "What is uptime?", keywords: ["availability","system","running"] },

{ question: "What is downtime?", keywords: ["unavailable","failure","system"] },

{ question: "What is Dev environment?", keywords: ["development","testing","code"] },

{ question: "What is staging environment?", keywords: ["preproduction","testing","deployment"] },

{ question: "What is production environment?", keywords: ["live","users","system"] },

{ question: "What is SLA?", keywords: ["service","agreement","availability"] },

{ question: "What is monitoring tool?", keywords: ["observe","alerts","metrics"] },

{ question: "What is alerting?", keywords: ["notification","issue","monitoring"] },

{ question: "What is container registry?", keywords: ["store","docker","images"] },

{ question: "What is GitHub?", keywords: ["repository","code","collaboration"] },

{ question: "What is GitLab?", keywords: ["repository","ci","platform"] },

{ question: "What is Bitbucket?", keywords: ["git","repository","atlassian"] },

{ question: "What is DevOps culture?", keywords: ["collaboration","automation","team"] },

{ question: "What is deployment pipeline?", keywords: ["automation","release","stages"] },

{ question: "What is infrastructure provisioning?", keywords: ["setup","servers","automation"] }

],

medium: [

{ question: "Explain CI/CD pipeline workflow.", keywords: ["build","test","deploy"] },

{ question: "What is blue-green deployment?", keywords: ["two","environments","switch"] },

{ question: "What is canary deployment?", keywords: ["gradual","release","testing"] },

{ question: "Explain container orchestration.", keywords: ["manage","containers","automation"] },

{ question: "How does Kubernetes manage containers?", keywords: ["pods","cluster","scheduler"] },

{ question: "What is a Kubernetes pod?", keywords: ["container","group","unit"] },

{ question: "Explain Dockerfile.", keywords: ["instructions","build","image"] },

{ question: "What is microservices architecture?", keywords: ["services","independent","scalable"] },

{ question: "Explain Infrastructure as Code benefits.", keywords: ["automation","consistency","version"] },

{ question: "What is configuration drift?", keywords: ["difference","servers","state"] },

{ question: "What is immutable infrastructure?", keywords: ["replace","servers","nochange"] },

{ question: "Explain load balancer types.", keywords: ["layer4","layer7","traffic"] },

{ question: "What is autoscaling?", keywords: ["dynamic","resources","load"] },

{ question: "What is Kubernetes service?", keywords: ["network","access","pods"] },

{ question: "Explain rolling deployment.", keywords: ["update","gradual","availability"] },

{ question: "What is service discovery?", keywords: ["locate","services","network"] },

{ question: "Explain secrets management.", keywords: ["passwords","keys","secure"] },

{ question: "What is observability?", keywords: ["logs","metrics","traces"] },

{ question: "Explain container networking.", keywords: ["communication","network","pods"] },

{ question: "What is Helm in Kubernetes?", keywords: ["package","manager","charts"] },

{ question: "Explain Git branching strategies.", keywords: ["feature","develop","main"] },

{ question: "What is trunk based development?", keywords: ["single","branch","integration"] },

{ question: "Explain monitoring metrics.", keywords: ["cpu","memory","latency"] },

{ question: "What is log aggregation?", keywords: ["collect","logs","centralized"] },

{ question: "Explain CI pipeline failure handling.", keywords: ["retry","alerts","debug"] },

{ question: "What is artifact repository?", keywords: ["store","build","packages"] },

{ question: "Explain Docker networking modes.", keywords: ["bridge","host","overlay"] },

{ question: "What is container security?", keywords: ["scan","vulnerabilities","runtime"] },

{ question: "Explain Kubernetes node.", keywords: ["worker","container","host"] },

{ question: "What is persistent storage in Kubernetes?", keywords: ["volume","data","storage"] },

{ question: "Explain Terraform modules.", keywords: ["reuse","infrastructure","code"] },

{ question: "What is GitOps?", keywords: ["git","deployment","automation"] },

{ question: "Explain CI pipeline stages.", keywords: ["build","test","deploy"] },

{ question: "What is distributed tracing?", keywords: ["requests","microservices","tracking"] },

{ question: "Explain rate limiting.", keywords: ["requests","limit","traffic"] },

{ question: "What is health check?", keywords: ["status","application","monitor"] },

{ question: "Explain failover system.", keywords: ["backup","system","availability"] },

{ question: "What is service mesh?", keywords: ["communication","services","control"] },

{ question: "Explain sidecar pattern.", keywords: ["helper","container","pod"] },

{ question: "What is chaos engineering?", keywords: ["failure","testing","resilience"] },

{ question: "Explain infrastructure monitoring.", keywords: ["servers","metrics","alerts"] },

{ question: "What is container registry authentication?", keywords: ["login","security","images"] },

{ question: "Explain DevSecOps.", keywords: ["security","devops","automation"] },

{ question: "What is pipeline parallelism?", keywords: ["parallel","jobs","speed"] },

{ question: "Explain artifact versioning.", keywords: ["versions","build","packages"] },

{ question: "What is release management?", keywords: ["planning","deployment","versions"] },

{ question: "Explain environment parity.", keywords: ["same","dev","production"] },

{ question: "What is automated testing in CI?", keywords: ["unit","integration","automation"] },

{ question: "Explain log monitoring.", keywords: ["logs","alerts","analysis"] },

{ question: "What is container runtime?", keywords: ["run","containers","engine"] }

],

hard: [

{ question: "Design a highly available CI/CD pipeline.", keywords: ["availability","scalable","automation"] },

{ question: "Explain Kubernetes architecture.", keywords: ["master","node","cluster"] },

{ question: "How would you design multi-region deployment?", keywords: ["regions","latency","failover"] },

{ question: "Explain zero downtime deployment strategies.", keywords: ["rolling","bluegreen","canary"] },

{ question: "Design logging architecture for microservices.", keywords: ["centralized","logs","monitoring"] },

{ question: "Explain Kubernetes scheduler.", keywords: ["pods","nodes","placement"] },

{ question: "How does etcd work in Kubernetes?", keywords: ["keyvalue","store","cluster"] },

{ question: "Explain container runtime interface.", keywords: ["runtime","kubernetes","api"] },

{ question: "Design scalable monitoring system.", keywords: ["metrics","alerts","distributed"] },

{ question: "Explain Kubernetes operator pattern.", keywords: ["automation","custom","controller"] },

{ question: "What is cluster autoscaler?", keywords: ["nodes","scaling","kubernetes"] },

{ question: "Explain distributed CI systems.", keywords: ["parallel","agents","builds"] },

{ question: "Design artifact storage system.", keywords: ["storage","versioning","scalable"] },

{ question: "Explain API gateway in microservices.", keywords: ["routing","security","requests"] },

{ question: "How does service mesh improve reliability?", keywords: ["communication","control","observability"] },

{ question: "Explain Kubernetes networking model.", keywords: ["pods","network","ip"] },

{ question: "Design secrets management architecture.", keywords: ["vault","security","keys"] },

{ question: "Explain Kubernetes controller manager.", keywords: ["controllers","state","cluster"] },

{ question: "Explain distributed logging architecture.", keywords: ["aggregation","scalable","logs"] },

{ question: "Design auto scaling architecture.", keywords: ["load","metrics","scale"] },

{ question: "Explain rolling updates in Kubernetes.", keywords: ["update","pods","availability"] },

{ question: "How does Kubernetes handle failures?", keywords: ["restart","selfheal","pods"] },

{ question: "Explain Kubernetes RBAC.", keywords: ["roles","permissions","access"] },

{ question: "Design CI system for monorepo.", keywords: ["build","modules","pipeline"] },

{ question: "Explain container image scanning.", keywords: ["security","vulnerabilities","scan"] },

{ question: "Explain distributed tracing architecture.", keywords: ["requests","trace","services"] },

{ question: "Design resilient deployment system.", keywords: ["rollback","failover","availability"] },

{ question: "Explain GitOps workflow.", keywords: ["git","deployments","automation"] },

{ question: "Explain Kubernetes API server.", keywords: ["requests","cluster","control"] },

{ question: "Design infrastructure provisioning workflow.", keywords: ["terraform","automation","cloud"] },

{ question: "Explain immutable deployment strategy.", keywords: ["replace","servers","version"] },

{ question: "Explain container isolation mechanisms.", keywords: ["namespaces","cgroups","security"] },

{ question: "Design monitoring for distributed systems.", keywords: ["metrics","alerts","services"] },

{ question: "Explain Kubernetes ingress controller.", keywords: ["routing","http","services"] },

{ question: "Explain distributed configuration management.", keywords: ["config","services","consistency"] },

{ question: "Explain cluster federation.", keywords: ["multiple","clusters","management"] },

{ question: "Design high availability Kubernetes cluster.", keywords: ["replication","failover","nodes"] },

{ question: "Explain Kubernetes network policies.", keywords: ["security","traffic","rules"] },

{ question: "Design container security strategy.", keywords: ["scan","runtime","policy"] },

{ question: "Explain event driven pipelines.", keywords: ["trigger","automation","events"] },

{ question: "Explain self healing systems.", keywords: ["restart","recover","automation"] },

{ question: "Design CI/CD for microservices.", keywords: ["services","pipelines","deploy"] },

{ question: "Explain distributed system observability.", keywords: ["logs","metrics","traces"] },

{ question: "Explain infrastructure drift detection.", keywords: ["changes","config","monitor"] },

{ question: "Design deployment rollback system.", keywords: ["revert","version","automation"] },

{ question: "Explain Kubernetes admission controllers.", keywords: ["validation","policy","requests"] },

{ question: "Explain chaos engineering implementation.", keywords: ["failure","testing","resilience"] },

{ question: "Design scalable container registry.", keywords: ["images","storage","distribution"] },

{ question: "Explain site reliability engineering.", keywords: ["reliability","automation","availability"] },

{ question: "Explain multi cluster Kubernetes architecture.", keywords: ["clusters","management","scalability"] }

]

};

export default devopsQuestions;