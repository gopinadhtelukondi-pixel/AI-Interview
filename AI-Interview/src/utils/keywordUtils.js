const KEYWORD_SYNONYMS = {
  ai: ["artificial intelligence", "intelligent systems"],
  ml: ["machine learning", "predictive modeling"],
  model: ["algorithm", "predictive model"],
  models: ["algorithms", "predictive models"],
  data: ["information", "dataset", "records"],
  analysis: ["analytics", "examination", "evaluation"],
  insights: ["findings", "observations"],
  prediction: ["forecast", "estimate", "project"],
  predictions: ["forecasts", "estimates"],
  classification: ["categorization", "class prediction"],
  regression: ["numeric prediction", "continuous prediction"],
  clustering: ["segmentation", "grouping"],
  features: ["attributes", "variables", "inputs"],
  feature: ["attribute", "variable", "input"],
  label: ["target", "output class"],
  labels: ["targets", "output classes"],
  training: ["learning", "fitting"],
  testing: ["validation", "evaluation"],
  metrics: ["measures", "indicators"],
  performance: ["effectiveness", "efficiency"],
  optimization: ["tuning", "improvement"],
  pipeline: ["workflow", "processing flow"],
  deployment: ["production release", "go live"],
  nlp: ["natural language processing", "text processing"],
  cnn: ["convolutional neural network", "convnet"],
  rnn: ["recurrent neural network"],
  etl: ["extract transform load", "data integration"],
  sql: ["structured query language", "database querying"],
  bigdata: ["big data", "large scale data"],
  deep: ["neural", "deep learning"],
  transform: ["convert", "reshape"],
  dashboard: ["reporting dashboard", "visual report"],

  strategy: ["plan", "approach", "roadmap"],
  competition: ["competitive landscape", "rivalry"],
  market: ["industry", "business environment"],
  customers: ["clients", "users", "consumers"],
  revenue: ["income", "sales"],
  profit: ["earnings", "net income"],
  cost: ["expense", "spend"],
  costs: ["expenses", "operating costs"],
  growth: ["expansion", "scale-up"],
  risk: ["uncertainty", "exposure"],
  framework: ["structure", "methodology"],
  efficiency: ["productivity", "effectiveness"],
  operations: ["processes", "execution"],
  pricing: ["price strategy", "price setting"],
  branding: ["brand positioning", "brand identity"],
  stakeholders: ["interested parties", "decision makers"],

  finance: ["financial management", "money management"],
  investment: ["capital allocation", "asset investment"],
  portfolio: ["investment mix", "asset portfolio"],
  diversification: ["risk spreading", "asset spreading"],
  bond: ["fixed income security", "debt security"],
  stock: ["equity", "shares"],
  return: ["gain", "yield"],
  returns: ["gains", "yields"],
  valuation: ["pricing", "appraisal"],
  liquidity: ["cash availability", "marketability"],
  leverage: ["debt financing", "borrowed capital"],
  derivatives: ["derivative contracts", "options and futures"],
  hedging: ["risk protection", "downside protection"],
  arbitrage: ["price mismatch trading", "risk free profit"],
  volatility: ["price fluctuation", "market variability"],

  accounting: ["financial accounting", "bookkeeping"],
  audit: ["financial audit", "assurance review"],
  taxation: ["tax compliance", "taxation policy"],
  tax: ["levy", "government tax"],
  gst: ["goods and services tax", "indirect tax"],
  assets: ["resources", "owned resources"],
  liabilities: ["obligations", "debts"],
  equity: ["owners equity", "net worth"],
  receivable: ["accounts receivable", "customer dues"],
  payable: ["accounts payable", "vendor dues"],
  depreciation: ["asset wear and tear", "value reduction"],
  reconciliation: ["matching records", "account matching"],
  compliance: ["regulatory adherence", "rule adherence"],
};

function normalize(text) {
  return String(text || "").toLowerCase().trim();
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function singularize(word) {
  if (word.endsWith("ies") && word.length > 3) return `${word.slice(0, -3)}y`;
  if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) {
    return word.slice(0, -1);
  }
  return word;
}

function pluralize(word) {
  if (word.endsWith("y") && word.length > 2) return `${word.slice(0, -1)}ies`;
  if (word.endsWith("s")) return word;
  return `${word}s`;
}

export function getKeywordVariants(keyword) {
  const base = normalize(keyword);
  if (!base) return [];

  const variants = new Set([base]);

  if (base.includes(" ")) {
    variants.add(base.replace(/\s+/g, ""));
    variants.add(base.replace(/\s+/g, "-"));
  } else {
    variants.add(base.replace(/-/g, " "));
  }

  variants.add(singularize(base));
  variants.add(pluralize(base));

  const mapped = KEYWORD_SYNONYMS[base] || KEYWORD_SYNONYMS[singularize(base)] || [];
  mapped.forEach((item) => variants.add(normalize(item)));

  return [...variants].filter(Boolean);
}

export function hasTerm(answerText, term) {
  const normalizedAnswer = normalize(answerText);
  const normalizedTerm = normalize(term);

  if (!normalizedAnswer || !normalizedTerm) return false;

  if (normalizedTerm.includes(" ")) {
    return normalizedAnswer.includes(normalizedTerm);
  }

  return new RegExp(`\\b${escapeRegExp(normalizedTerm)}\\b`, "i").test(normalizedAnswer);
}
