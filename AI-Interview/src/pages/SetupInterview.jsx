
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

function SetupInterview() {

  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("Easy");
  const [domain, setDomain] = useState("Tech");
  const [topic, setTopic] = useState("");

  const topicsByDomain = {
    Tech: ["DSA","System Design","DevOps","AI","ML"],
    Data: ["Data Science","ML","AI"],
    Govt: ["UPSC","SSC"],
    Business: ["MBA","Consulting"],
    Finance: ["CA","CFA","Quant"],
    Research: ["GATE","NET","GRE"]
  };

  const optionStyle =
    "flex items-center justify-center px-4 py-3 rounded-xl border border-white/20 " +
    "bg-white/5 text-gray-200 font-medium " +
    "hover:bg-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 " +
    "hover:scale-105 transition duration-300 cursor-pointer";

  const activeStyle =
    "flex items-center justify-center px-4 py-3 rounded-xl " +
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold " +
    "shadow-lg shadow-purple-500/40 scale-105";

const startInterview = () => {

  console.log("Start Interview button clicked");  // 👈 add this line

  if(!topic) return;

  navigate("/interview", {
    state: {
      difficulty,
      domain,
      topic
    }
  });

};
  return (
    <MainLayout>

      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h2
          className="text-4xl font-bold text-center mb-10 
          bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent"
        >
          Setup Your AI Interview
        </h2>

        <Card>

          <div className="space-y-10">

            {/* Difficulty */}
            <div>
              <p className="mb-4 text-gray-300 font-medium">
                Interview Difficulty
              </p>

              <div className="grid grid-cols-3 gap-4">
                {["Easy","Medium","Hard"].map((item)=>(
                  <button
                    key={item}
                    onClick={()=>setDifficulty(item)}
                    className={difficulty === item ? activeStyle : optionStyle}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Domain */}
            <div>
              <p className="mb-4 text-gray-300 font-medium">
                Domain
              </p>

              <div className="grid grid-cols-3 gap-4">
                {["Tech","Data","Govt","Business","Finance","Research"].map((item)=>(
                  <button
                    key={item}
                    onClick={()=>{
                      setDomain(item);
                      setTopic("");
                    }}
                    className={domain === item ? activeStyle : optionStyle}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic */}
            <div>
              <p className="mb-4 text-gray-300 font-medium">
                Interview Topic
              </p>

              <div className="grid grid-cols-3 gap-4">

                {topicsByDomain[domain].map((item)=>(
                  <button
                    key={item}
                    onClick={()=>setTopic(item)}
                    className={topic === item ? activeStyle : optionStyle}
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            {/* Start Button */}
            <div className="pt-6">
              <Button
                disabled={!topic}
                onClick={startInterview}
              >
                Start AI Interview
              </Button>
            </div>

          </div>

        </Card>

      </div>

    </MainLayout>
  );
}

export default SetupInterview;

