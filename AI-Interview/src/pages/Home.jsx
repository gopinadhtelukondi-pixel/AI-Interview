import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startInterview = () => {
    navigate("/interview");
  };

  return (
    <div>
      <h1>AI Interview Simulator</h1>
      <button onClick={startInterview}>
        Start Interview
      </button>
    </div>
  );
}

export default Home;