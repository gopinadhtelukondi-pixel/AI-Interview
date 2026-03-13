import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetupInterview from "./pages/SetupInterview";
import InterviewRoom from "./pages/InterviewRoom";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<SetupInterview />} />

        <Route path="/interview" element={<InterviewRoom />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;