const dataScienceQuestions = {

easy: [

{ question: "What is Data Science?", keywords: ["data","analysis","insights"] },

{ question: "What is data?", keywords: ["information","facts","records"] },

{ question: "What is a dataset?", keywords: ["collection","data","records"] },

{ question: "What is data analysis?", keywords: ["examine","data","insights"] },

{ question: "What is statistics?", keywords: ["data","analysis","probability"] },

{ question: "What is mean?", keywords: ["average","sum","count"] },

{ question: "What is median?", keywords: ["middle","sorted","data"] },

{ question: "What is mode?", keywords: ["frequent","value","data"] },

{ question: "What is standard deviation?", keywords: ["spread","variation","data"] },

{ question: "What is variance?", keywords: ["dispersion","spread","statistics"] },

{ question: "What is data visualization?", keywords: ["charts","graphs","data"] },

{ question: "What is Python in data science?", keywords: ["programming","analysis","libraries"] },

{ question: "What is pandas?", keywords: ["dataframe","analysis","python"] },

{ question: "What is NumPy?", keywords: ["arrays","math","python"] },

{ question: "What is a dataframe?", keywords: ["table","rows","columns"] },

{ question: "What is machine learning?", keywords: ["models","learning","data"] },

{ question: "What is training data?", keywords: ["model","learning","dataset"] },

{ question: "What is testing data?", keywords: ["evaluation","model","dataset"] },

{ question: "What is feature?", keywords: ["variable","input","data"] },

{ question: "What is label?", keywords: ["target","output","prediction"] },

{ question: "What is data cleaning?", keywords: ["remove","errors","prepare"] },

{ question: "What is missing data?", keywords: ["null","values","dataset"] },

{ question: "What is outlier?", keywords: ["extreme","value","data"] },

{ question: "What is normalization?", keywords: ["scale","values","data"] },

{ question: "What is standardization?", keywords: ["mean","variance","scaling"] },

{ question: "What is correlation?", keywords: ["relationship","variables","data"] },

{ question: "What is regression?", keywords: ["prediction","continuous","model"] },

{ question: "What is classification?", keywords: ["categories","prediction","model"] },

{ question: "What is clustering?", keywords: ["groups","similar","data"] },

{ question: "What is supervised learning?", keywords: ["labeled","training","model"] },

{ question: "What is unsupervised learning?", keywords: ["patterns","unlabeled","data"] },

{ question: "What is deep learning?", keywords: ["neural","networks","layers"] },

{ question: "What is big data?", keywords: ["large","volume","data"] },

{ question: "What is data mining?", keywords: ["discover","patterns","data"] },

{ question: "What is ETL?", keywords: ["extract","transform","load"] },

{ question: "What is SQL?", keywords: ["query","database","data"] },

{ question: "What is database?", keywords: ["storage","data","system"] },

{ question: "What is feature engineering?", keywords: ["create","features","model"] },

{ question: "What is model training?", keywords: ["learn","parameters","data"] },

{ question: "What is prediction?", keywords: ["model","output","future"] },

{ question: "What is accuracy?", keywords: ["correct","predictions","metric"] },

{ question: "What is precision?", keywords: ["positive","predictions","accuracy"] },

{ question: "What is recall?", keywords: ["true","positives","rate"] },

{ question: "What is F1 score?", keywords: ["precision","recall","metric"] },

{ question: "What is confusion matrix?", keywords: ["tp","fp","classification"] },

{ question: "What is data pipeline?", keywords: ["process","flow","data"] },

{ question: "What is model evaluation?", keywords: ["performance","metrics","testing"] },

{ question: "What is cross validation?", keywords: ["split","training","validation"] },

{ question: "What is A/B testing?", keywords: ["experiment","compare","results"] },

{ question: "What is dashboard?", keywords: ["visualization","metrics","data"] }

],

medium: [

{ question: "Explain the data science lifecycle.", keywords: ["collection","analysis","model"] },

{ question: "What is exploratory data analysis?", keywords: ["explore","visualization","patterns"] },

{ question: "Explain feature selection.", keywords: ["important","features","model"] },

{ question: "What is dimensionality reduction?", keywords: ["reduce","features","data"] },

{ question: "Explain PCA.", keywords: ["components","variance","reduction"] },

{ question: "What is bias in data?", keywords: ["systematic","error","data"] },

{ question: "What is variance in models?", keywords: ["sensitivity","data","model"] },

{ question: "Explain bias variance tradeoff.", keywords: ["overfitting","underfitting","balance"] },

{ question: "What is overfitting?", keywords: ["memorize","training","poor"] },

{ question: "What is underfitting?", keywords: ["simple","model","poor"] },

{ question: "Explain regularization.", keywords: ["penalty","overfitting","model"] },

{ question: "What is L1 regularization?", keywords: ["lasso","penalty","features"] },

{ question: "What is L2 regularization?", keywords: ["ridge","penalty","weights"] },

{ question: "Explain decision trees.", keywords: ["splits","nodes","classification"] },

{ question: "What is random forest?", keywords: ["trees","ensemble","bagging"] },

{ question: "Explain gradient boosting.", keywords: ["boosting","trees","optimization"] },

{ question: "What is KNN?", keywords: ["neighbors","distance","classification"] },

{ question: "Explain logistic regression.", keywords: ["classification","probability","sigmoid"] },

{ question: "What is support vector machine?", keywords: ["hyperplane","margin","classification"] },

{ question: "Explain k-means clustering.", keywords: ["clusters","centroids","distance"] },

{ question: "What is hierarchical clustering?", keywords: ["tree","clusters","groups"] },

{ question: "Explain anomaly detection.", keywords: ["outliers","patterns","data"] },

{ question: "What is time series analysis?", keywords: ["temporal","data","forecast"] },

{ question: "Explain ARIMA.", keywords: ["time","series","forecast"] },

{ question: "What is feature scaling?", keywords: ["normalize","standardize","data"] },

{ question: "Explain hyperparameter tuning.", keywords: ["parameters","optimization","model"] },

{ question: "What is grid search?", keywords: ["parameters","search","optimization"] },

{ question: "Explain ROC curve.", keywords: ["true","false","rate"] },

{ question: "What is AUC?", keywords: ["curve","performance","metric"] },

{ question: "Explain ensemble learning.", keywords: ["multiple","models","combine"] },

{ question: "What is bagging?", keywords: ["bootstrap","models","ensemble"] },

{ question: "What is boosting?", keywords: ["sequential","learning","models"] },

{ question: "Explain feature importance.", keywords: ["impact","features","model"] },

{ question: "What is data imbalance?", keywords: ["classes","unequal","dataset"] },

{ question: "Explain SMOTE.", keywords: ["oversampling","minority","data"] },

{ question: "What is NLP?", keywords: ["text","language","analysis"] },

{ question: "Explain sentiment analysis.", keywords: ["emotion","text","classification"] },

{ question: "What is recommender system?", keywords: ["suggest","items","users"] },

{ question: "Explain collaborative filtering.", keywords: ["users","preferences","recommendation"] },

{ question: "What is deep neural network?", keywords: ["layers","neurons","learning"] },

{ question: "Explain CNN.", keywords: ["images","filters","convolution"] },

{ question: "Explain RNN.", keywords: ["sequence","memory","data"] },

{ question: "What is transfer learning?", keywords: ["pretrained","model","reuse"] },

{ question: "Explain feature embedding.", keywords: ["vectors","representation","data"] },

{ question: "What is big data analytics?", keywords: ["large","data","analysis"] },

{ question: "Explain Spark.", keywords: ["distributed","processing","data"] },

{ question: "What is Hadoop?", keywords: ["storage","distributed","data"] },

{ question: "Explain data warehousing.", keywords: ["storage","analytics","data"] },

{ question: "What is data governance?", keywords: ["policies","management","data"] },

{ question: "Explain model deployment.", keywords: ["production","api","prediction"] }

],

hard: [

{ question: "Design an end to end data science pipeline.", keywords: ["data","model","deployment"] },

{ question: "How would you detect fraud using data science?", keywords: ["anomaly","patterns","models"] },

{ question: "Explain advanced feature engineering techniques.", keywords: ["transformation","features","data"] },

{ question: "Design recommendation system architecture.", keywords: ["users","items","prediction"] },

{ question: "Explain scalable machine learning pipelines.", keywords: ["distributed","data","models"] },

{ question: "How would you optimize a machine learning model?", keywords: ["parameters","performance","tuning"] },

{ question: "Explain advanced ensemble techniques.", keywords: ["stacking","boosting","models"] },

{ question: "Design real time analytics system.", keywords: ["stream","data","processing"] },

{ question: "Explain distributed machine learning.", keywords: ["parallel","training","systems"] },

{ question: "How would you handle extremely large datasets?", keywords: ["bigdata","processing","scaling"] },

{ question: "Explain deep learning model optimization.", keywords: ["training","loss","parameters"] },

{ question: "Design data warehouse architecture.", keywords: ["storage","analytics","etl"] },

{ question: "Explain causal inference in data science.", keywords: ["cause","effect","analysis"] },

{ question: "Explain reinforcement learning applications.", keywords: ["agents","rewards","policy"] },

{ question: "Explain Bayesian statistics in modeling.", keywords: ["probability","prior","posterior"] },

{ question: "Design A/B testing framework.", keywords: ["experiment","metrics","analysis"] },

{ question: "Explain large scale feature engineering.", keywords: ["pipeline","features","data"] },

{ question: "Explain advanced time series forecasting.", keywords: ["temporal","models","forecast"] },

{ question: "Design anomaly detection system.", keywords: ["outliers","monitoring","models"] },

{ question: "Explain graph analytics.", keywords: ["nodes","edges","relationships"] },

{ question: "Explain graph neural networks.", keywords: ["graphs","nodes","learning"] },

{ question: "Explain explainable AI methods.", keywords: ["interpretability","models","features"] },

{ question: "Explain fairness in machine learning.", keywords: ["bias","ethics","models"] },

{ question: "Explain adversarial machine learning.", keywords: ["attacks","security","models"] },

{ question: "Design data governance strategy.", keywords: ["policies","security","management"] },

{ question: "Explain scalable feature store.", keywords: ["features","storage","pipeline"] },

{ question: "Explain automated machine learning.", keywords: ["automl","models","optimization"] },

{ question: "Explain ML model monitoring.", keywords: ["performance","drift","metrics"] },

{ question: "Explain concept drift.", keywords: ["data","change","models"] },

{ question: "Design production ML system.", keywords: ["deployment","scaling","monitoring"] },

{ question: "Explain distributed deep learning.", keywords: ["gpu","parallel","training"] },

{ question: "Explain self supervised learning.", keywords: ["labels","representation","data"] },

{ question: "Explain generative models.", keywords: ["generate","data","models"] },

{ question: "Explain GANs.", keywords: ["generator","discriminator","training"] },

{ question: "Explain transformer models.", keywords: ["attention","sequence","learning"] },

{ question: "Explain LLM training pipeline.", keywords: ["data","training","models"] },

{ question: "Explain advanced NLP pipelines.", keywords: ["text","processing","models"] },

{ question: "Explain multi modal learning.", keywords: ["images","text","data"] },

{ question: "Explain federated learning.", keywords: ["distributed","privacy","training"] },

{ question: "Explain privacy preserving ML.", keywords: ["data","security","models"] },

{ question: "Explain reinforcement learning systems.", keywords: ["agents","environment","rewards"] },

{ question: "Explain deep reinforcement learning.", keywords: ["neural","policy","training"] },

{ question: "Explain large scale recommendation systems.", keywords: ["users","items","ranking"] },

{ question: "Explain search ranking algorithms.", keywords: ["relevance","ranking","models"] },

{ question: "Explain knowledge graphs.", keywords: ["entities","relations","graph"] },

{ question: "Explain semantic search systems.", keywords: ["embeddings","search","nlp"] },

{ question: "Explain large scale anomaly detection.", keywords: ["monitoring","patterns","models"] },

{ question: "Explain ML infrastructure architecture.", keywords: ["pipelines","deployment","scaling"] },

{ question: "Explain future trends in data science.", keywords: ["ai","automation","data"] }

]

};

export default dataScienceQuestions;