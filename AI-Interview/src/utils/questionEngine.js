export function generateInterviewQuestions(topicQuestions) {

  const easy = topicQuestions.easy || [];
  const medium = topicQuestions.medium || [];
  const hard = topicQuestions.hard || [];

  const selectedQuestions = [

    ...easy.sort(() => Math.random() - 0.5).slice(0, 3),

    ...medium.sort(() => Math.random() - 0.5).slice(0, 4),

    ...hard.sort(() => Math.random() - 0.5).slice(0, 3)

  ];

  return selectedQuestions.sort(() => Math.random() - 0.5);
}