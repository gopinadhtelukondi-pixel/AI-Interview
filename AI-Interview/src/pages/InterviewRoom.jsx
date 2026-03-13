import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data/questions";
import { evaluateAnswer } from "../utils/evaluateAnswer";
import { getKeywordVariants, hasTerm } from "../utils/keywordUtils";
import { Mic, Volume2, ArrowLeft } from "lucide-react";
import Avatar from "../components/Avatar";

function getRandomQuestions(questionArray, count) {
  const shuffled = [...questionArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function InterviewRoom() {

  const location = useLocation();
  const navigate = useNavigate();

  const { topic = "DSA", difficulty = "Easy" } = location.state || {};

  const difficultyKey = difficulty.toLowerCase();

  const matchedTopicKey = Object.keys(questions).find(
    (key) => key.toLowerCase() === topic.toLowerCase()
  );

  const allQuestions =
    questions[matchedTopicKey]?.[difficultyKey] || [];

  const introductionQuestion = {
    question: "Please introduce yourself.",
    keywords: []
  };

  const [topicQuestions] = useState(() => {
    const randomQuestions = getRandomQuestions(allQuestions, 5);
    return [introductionQuestion, ...randomQuestions];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [finalScore, setFinalScore] = useState(null);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);
  const [communicationScore, setCommunicationScore] = useState(null);
  const [isListening, setIsListening] = useState(false);

  // 🔹 Talking state for avatar lips
  const [talking, setTalking] = useState(false);

  const recognitionRef = useRef(null);
  const talkingTimeoutRef = useRef(null);
  const preferredVoiceRef = useRef(null);

  function clearTalkingTimeout() {
    if (talkingTimeoutRef.current) {
      clearTimeout(talkingTimeoutRef.current);
      talkingTimeoutRef.current = null;
    }
  }

  function estimateSpeechDurationMs(text, rate = 1) {
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const wordsPerSecond = 2.5 * rate;
    return Math.max(1400, Math.round((wordCount / wordsPerSecond) * 1000) + 450);
  }

  function pickPreferredVoice() {
    if (!("speechSynthesis" in window)) return null;

    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;

    const englishVoices = voices.filter((v) => /^en(-|_)/i.test(v.lang));
    const pool = englishVoices.length ? englishVoices : voices;

    const maleVoice =
      pool.find((v) => /male|david|daniel|george|fred|alex|james/i.test(v.name)) ||
      pool.find((v) => /male|david|daniel|george|fred|alex|james/i.test(v.voiceURI));

    return maleVoice || pool[0];
  }

  function speakWithLipSync(text, rate = 1) {
    if (!text) return;

    clearTalkingTimeout();
    setTalking(true);

    const fallbackDuration = estimateSpeechDurationMs(text, rate);
    talkingTimeoutRef.current = setTimeout(() => {
      setTalking(false);
      talkingTimeoutRef.current = null;
    }, fallbackDuration);

    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = rate;
    if (preferredVoiceRef.current) {
      speech.voice = preferredVoiceRef.current;
    }

    speech.onstart = () => setTalking(true);
    speech.onend = () => {
      clearTalkingTimeout();
      setTalking(false);
    };
    speech.onerror = () => {
      clearTalkingTimeout();
      setTalking(false);
    };

    window.speechSynthesis.speak(speech);
  }

  function getCompliment(scorePercent) {
    if (scorePercent >= 90) return "Outstanding performance. You communicated really well.";
    if (scorePercent >= 75) return "Great job. Your answers showed strong understanding.";
    if (scorePercent >= 60) return "Good effort. You have a solid base to build on.";
    return "Nice attempt. Keep practicing and you will improve quickly.";
  }

  function announceFinalScore(total, maxScore, commScore) {
    const safeMax = Math.max(maxScore, 1);
    const percent = Math.round((total / safeMax) * 100);
    const compliment = getCompliment(percent);
    const message =
      `Interview completed. Your final score is ${total} out of ${maxScore}. ` +
      `Your communication score is ${commScore} out of 100. ${compliment}`;

    speakWithLipSync(message, 0.95);
  }

  function calculateCommunicationScore(updatedAnswers) {
    const allTerms = new Set();
    const usedTerms = new Set();

    topicQuestions.forEach((q, index) => {
      if (index === 0) return;

      const userAnswer = (updatedAnswers[index] || "").toLowerCase();
      const terms = q.keywords || [];

      terms.forEach((term) => {
        const normalizedTerm = String(term || "").trim().toLowerCase();
        if (!normalizedTerm) return;

        allTerms.add(normalizedTerm);
        const variants = getKeywordVariants(normalizedTerm);
        const matched = variants.some((variant) => hasTerm(userAnswer, variant));

        if (matched) {
          usedTerms.add(normalizedTerm);
        }
      });
    });

    if (allTerms.size === 0) return 0;
    return Math.round((usedTerms.size / allTerms.size) * 100);
  }

  const currentQuestion = topicQuestions[currentIndex];

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    preferredVoiceRef.current = pickPreferredVoice();

    const handleVoicesChanged = () => {
      preferredVoiceRef.current = pickPreferredVoice();
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {

      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {

        let transcript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        setAnswer(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;

    }

  }, []);

  function toggleListening() {

    if (!recognitionRef.current) return;

    if (isListening) {

      recognitionRef.current.stop();
      setIsListening(false);

    } else {

      recognitionRef.current.start();
      setIsListening(true);

    }

  }

  // 🔹 Speak question with avatar lip sync
  function speakQuestion() {

    if (!currentQuestion?.question) return;
    speakWithLipSync(currentQuestion.question, 1);
  }

  useEffect(() => {
    speakQuestion();
    return () => {
      clearTalkingTimeout();
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setTalking(false);
    };
  }, [currentIndex]);

  function saveAnswer() {

    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = answer;

    setAnswers(updatedAnswers);
  }

  function nextQuestion() {

    saveAnswer();

    if (currentIndex < topicQuestions.length - 1) {

      setCurrentIndex(currentIndex + 1);
      setAnswer("");

    }

  }

  function calculateFinalScore() {

    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = answer;

    let total = 0;
    let maxScore = 0;

    topicQuestions.forEach((q, index) => {

      if (index === 0) return;

      const userAnswer = updatedAnswers[index] || "";

      total += evaluateAnswer(userAnswer, q.keywords);
      maxScore += q.keywords.length;

    });

    const commScore = calculateCommunicationScore(updatedAnswers);

    setFinalScore(total);
    setTotalPossibleScore(maxScore);
    setCommunicationScore(commScore);
    announceFinalScore(total, maxScore, commScore);
  }

  const progress =
    ((currentIndex + 1) / topicQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6 text-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-blue-400 text-center lg:text-left">
          AI Interview Room
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl shadow-2xl p-4 lg:sticky lg:top-6 flex flex-col items-center bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-950/90 border border-white/10 backdrop-blur-sm">
            <div className="w-full max-w-xl h-[520px] mx-auto flex items-center justify-center">
              <Avatar talking={talking} />
            </div>

            <div className="w-full max-w-xl mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Question {currentIndex + 1}</span>
                <span>{topicQuestions.length} Total</span>
              </div>

              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  style={{ width: `${progress}%` }}
                  className="bg-blue-500 h-3 rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full text-center">

        <p className="text-xl font-semibold mb-4 text-gray-200">
          {currentQuestion.question}
        </p>

        <button
          onClick={speakQuestion}
          className="mb-4 flex items-center gap-2 mx-auto bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
        >
          <Volume2 size={18} />
          Listen Question
        </button>

        <textarea
          className="w-full p-4 rounded-lg bg-gray-900 border border-gray-600 focus:border-blue-500 outline-none"
          rows="4"
          placeholder="Type or speak your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="flex justify-center mt-4">

          <button
            onClick={toggleListening}
            className={`p-4 rounded-full ${
              isListening
                ? "bg-red-500 animate-pulse"
                : "bg-blue-500"
            }`}
          >
            <Mic size={24} />
          </button>

        </div>

        <div className="flex justify-center gap-4 mt-6">

          {currentIndex < topicQuestions.length - 1 ? (

            <button
              onClick={nextQuestion}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
            >
              Next Question
            </button>

          ) : (

            <button
              onClick={calculateFinalScore}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
            >
              Check Result
            </button>

          )}

        </div>

        {finalScore !== null && (

          <div className="mt-8 space-y-2">
            <div className="text-green-400 text-2xl font-bold">
              Final Score: {finalScore} / {totalPossibleScore}
            </div>
            <div className="text-cyan-300 text-xl font-semibold">
              Communication Score: {communicationScore} / 100
            </div>
          </div>

        )}

          </div>
        </div>
      </div>
    </div>
  );

}

export default InterviewRoom;
