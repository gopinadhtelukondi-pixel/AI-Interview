import { getKeywordVariants, hasTerm } from "./keywordUtils";

export function evaluateAnswer(answer, keywords) {
  let score = 0;

  keywords.forEach((word) => {
    const variants = getKeywordVariants(word);
    const matched = variants.some((variant) => hasTerm(answer, variant));

    if (matched) {
      score++;
    }
  });

  return score;
}
