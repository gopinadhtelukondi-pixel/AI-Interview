const gateQuestions = {

easy: [

{ question: "What is an algorithm?", keywords: ["steps","problem","solution"] },

{ question: "What is time complexity?", keywords: ["time","algorithm","performance"] },

{ question: "What is space complexity?", keywords: ["memory","algorithm","space"] },

{ question: "What is Big O notation?", keywords: ["complexity","upper","bound"] },

{ question: "What is a data structure?", keywords: ["organize","store","data"] },

{ question: "What is an array?", keywords: ["index","contiguous","elements"] },

{ question: "What is a linked list?", keywords: ["nodes","pointer","list"] },

{ question: "What is a stack?", keywords: ["LIFO","push","pop"] },

{ question: "What is a queue?", keywords: ["FIFO","enqueue","dequeue"] },

{ question: "What is recursion?", keywords: ["function","call","itself"] },

{ question: "What is a binary tree?", keywords: ["nodes","children","tree"] },

{ question: "What is a graph?", keywords: ["vertices","edges","connections"] },

{ question: "What is BFS?", keywords: ["breadth","queue","traversal"] },

{ question: "What is DFS?", keywords: ["depth","stack","traversal"] },

{ question: "What is operating system?", keywords: ["hardware","software","management"] },

{ question: "What is a process?", keywords: ["program","execution","memory"] },

{ question: "What is a thread?", keywords: ["execution","process","lightweight"] },

{ question: "What is CPU scheduling?", keywords: ["process","priority","execution"] },

{ question: "What is deadlock?", keywords: ["waiting","resources","processes"] },

{ question: "What is virtual memory?", keywords: ["memory","paging","storage"] },

{ question: "What is a database?", keywords: ["storage","data","system"] },

{ question: "What is SQL?", keywords: ["query","database","data"] },

{ question: "What is normalization?", keywords: ["database","reduce","redundancy"] },

{ question: "What is a primary key?", keywords: ["unique","identifier","table"] },

{ question: "What is a foreign key?", keywords: ["reference","table","relationship"] },

{ question: "What is computer network?", keywords: ["devices","communication","data"] },

{ question: "What is IP address?", keywords: ["identifier","network","device"] },

{ question: "What is TCP?", keywords: ["protocol","connection","reliable"] },

{ question: "What is UDP?", keywords: ["protocol","datagram","connectionless"] },

{ question: "What is bandwidth?", keywords: ["capacity","data","network"] },

{ question: "What is latency?", keywords: ["delay","network","communication"] },

{ question: "What is compiler?", keywords: ["translate","code","machine"] },

{ question: "What is interpreter?", keywords: ["execute","code","line"] },

{ question: "What is machine learning?", keywords: ["models","learning","data"] },

{ question: "What is artificial intelligence?", keywords: ["machines","intelligence","automation"] },

{ question: "What is linear regression?", keywords: ["prediction","line","model"] },

{ question: "What is probability?", keywords: ["chance","events","statistics"] },

{ question: "What is mean?", keywords: ["average","sum","count"] },

{ question: "What is median?", keywords: ["middle","sorted","data"] },

{ question: "What is variance?", keywords: ["spread","statistics","data"] },

{ question: "What is standard deviation?", keywords: ["variation","spread","data"] },

{ question: "What is Boolean algebra?", keywords: ["logic","binary","operations"] },

{ question: "What is digital logic?", keywords: ["gates","circuits","binary"] },

{ question: "What is a logic gate?", keywords: ["and","or","not"] },

{ question: "What is flip flop?", keywords: ["memory","circuit","storage"] },

{ question: "What is register?", keywords: ["storage","cpu","data"] },

{ question: "What is cache memory?", keywords: ["fast","memory","cpu"] },

{ question: "What is pipeline in CPU?", keywords: ["stages","execution","performance"] },

{ question: "What is parallel computing?", keywords: ["multiple","processors","tasks"] },

{ question: "What is distributed system?", keywords: ["nodes","network","system"] }

],

medium: [

{ question: "Explain dynamic programming.", keywords: ["subproblem","optimization","memoization"] },

{ question: "Explain divide and conquer.", keywords: ["divide","combine","algorithm"] },

{ question: "What is greedy algorithm?", keywords: ["local","optimal","choice"] },

{ question: "Explain Dijkstra algorithm.", keywords: ["shortest","path","graph"] },

{ question: "Explain Kruskal algorithm.", keywords: ["minimum","spanning","tree"] },

{ question: "Explain Prim algorithm.", keywords: ["spanning","tree","graph"] },

{ question: "What is AVL tree?", keywords: ["balanced","tree","rotation"] },

{ question: "What is red black tree?", keywords: ["balanced","tree","colors"] },

{ question: "Explain heap data structure.", keywords: ["priority","tree","heap"] },

{ question: "What is hashing?", keywords: ["key","index","table"] },

{ question: "Explain collision handling.", keywords: ["hash","collision","resolution"] },

{ question: "Explain page replacement algorithms.", keywords: ["fifo","lru","memory"] },

{ question: "What is segmentation in memory?", keywords: ["memory","segments","management"] },

{ question: "Explain paging system.", keywords: ["pages","memory","management"] },

{ question: "Explain producer consumer problem.", keywords: ["synchronization","threads","buffer"] },

{ question: "What is semaphore?", keywords: ["synchronization","process","lock"] },

{ question: "Explain mutex.", keywords: ["mutual","exclusion","lock"] },

{ question: "Explain deadlock prevention.", keywords: ["resources","allocation","avoidance"] },

{ question: "Explain TCP three way handshake.", keywords: ["connection","synchronization","protocol"] },

{ question: "Explain routing algorithms.", keywords: ["network","path","packets"] },

{ question: "What is congestion control?", keywords: ["network","traffic","control"] },

{ question: "Explain OSI model.", keywords: ["layers","communication","network"] },

{ question: "Explain relational algebra.", keywords: ["operations","tables","queries"] },

{ question: "Explain transaction management.", keywords: ["database","ACID","operations"] },

{ question: "What is indexing in database?", keywords: ["search","speed","data"] },

{ question: "Explain query optimization.", keywords: ["database","performance","execution"] },

{ question: "Explain compiler phases.", keywords: ["lexical","syntax","semantic"] },

{ question: "Explain lexical analysis.", keywords: ["tokens","compiler","code"] },

{ question: "Explain syntax analysis.", keywords: ["grammar","parsing","structure"] },

{ question: "Explain semantic analysis.", keywords: ["meaning","validation","compiler"] },

{ question: "Explain pipelining hazards.", keywords: ["data","control","structural"] },

{ question: "Explain cache coherence.", keywords: ["consistency","memory","processors"] },

{ question: "Explain distributed algorithms.", keywords: ["nodes","communication","coordination"] },

{ question: "Explain MapReduce.", keywords: ["distributed","processing","data"] },

{ question: "Explain neural networks.", keywords: ["neurons","layers","learning"] },

{ question: "Explain backpropagation.", keywords: ["training","weights","gradient"] },

{ question: "Explain clustering algorithms.", keywords: ["groups","data","similarity"] },

{ question: "Explain k-means clustering.", keywords: ["clusters","centroids","distance"] },

{ question: "Explain decision tree algorithm.", keywords: ["nodes","splits","classification"] },

{ question: "Explain support vector machine.", keywords: ["margin","classification","hyperplane"] },

{ question: "Explain Bayesian probability.", keywords: ["prior","posterior","probability"] },

{ question: "Explain Markov chains.", keywords: ["states","probability","transitions"] },

{ question: "Explain graph traversal algorithms.", keywords: ["dfs","bfs","graph"] },

{ question: "Explain shortest path algorithms.", keywords: ["dijkstra","graph","paths"] },

{ question: "Explain minimum spanning tree.", keywords: ["graph","edges","tree"] },

{ question: "Explain parallel algorithms.", keywords: ["processors","tasks","performance"] },

{ question: "Explain distributed databases.", keywords: ["data","nodes","replication"] },

{ question: "Explain cloud computing.", keywords: ["servers","internet","scalable"] },

{ question: "Explain virtualization.", keywords: ["virtual","machines","resources"] },

{ question: "Explain containerization.", keywords: ["docker","environment","deployment"] }

],

hard: [

{ question: "Design scalable distributed system architecture.", keywords: ["nodes","scalability","communication"] },

{ question: "Explain NP completeness.", keywords: ["complexity","polynomial","problems"] },

{ question: "Explain P vs NP problem.", keywords: ["complexity","theory","algorithms"] },

{ question: "Explain advanced graph algorithms.", keywords: ["flows","paths","optimization"] },

{ question: "Explain max flow algorithms.", keywords: ["network","flow","capacity"] },

{ question: "Explain min cut theorem.", keywords: ["graph","flow","cut"] },

{ question: "Explain advanced dynamic programming.", keywords: ["optimization","states","transitions"] },

{ question: "Explain distributed consensus algorithms.", keywords: ["paxos","raft","nodes"] },

{ question: "Explain Byzantine fault tolerance.", keywords: ["fault","distributed","consensus"] },

{ question: "Explain advanced CPU architecture.", keywords: ["pipeline","execution","performance"] },

{ question: "Explain superscalar processors.", keywords: ["parallel","instructions","cpu"] },

{ question: "Explain GPU computing.", keywords: ["parallel","processors","graphics"] },

{ question: "Explain advanced cache optimization.", keywords: ["memory","latency","performance"] },

{ question: "Explain advanced operating system design.", keywords: ["kernel","process","management"] },

{ question: "Explain real time operating systems.", keywords: ["timing","scheduling","systems"] },

{ question: "Explain advanced scheduling algorithms.", keywords: ["priority","real","time"] },

{ question: "Explain distributed file systems.", keywords: ["storage","nodes","replication"] },

{ question: "Explain advanced network protocols.", keywords: ["communication","protocols","layers"] },

{ question: "Explain software defined networking.", keywords: ["control","network","virtualization"] },

{ question: "Explain blockchain consensus algorithms.", keywords: ["blocks","nodes","consensus"] },

{ question: "Explain advanced database optimization.", keywords: ["queries","indexes","performance"] },

{ question: "Explain distributed transaction management.", keywords: ["ACID","consistency","nodes"] },

{ question: "Explain advanced compiler optimization.", keywords: ["code","performance","analysis"] },

{ question: "Explain register allocation algorithms.", keywords: ["compiler","registers","optimization"] },

{ question: "Explain advanced machine learning pipelines.", keywords: ["data","training","deployment"] },

{ question: "Explain deep learning architectures.", keywords: ["layers","neurons","models"] },

{ question: "Explain reinforcement learning systems.", keywords: ["agents","rewards","policy"] },

{ question: "Explain advanced graph neural networks.", keywords: ["nodes","edges","learning"] },

{ question: "Explain scalable big data architecture.", keywords: ["distributed","storage","processing"] },

{ question: "Explain Hadoop ecosystem.", keywords: ["hdfs","mapreduce","data"] },

{ question: "Explain Spark architecture.", keywords: ["distributed","processing","memory"] },

{ question: "Explain large scale recommendation systems.", keywords: ["users","items","ranking"] },

{ question: "Explain anomaly detection systems.", keywords: ["outliers","models","patterns"] },

{ question: "Explain advanced time series forecasting.", keywords: ["temporal","models","prediction"] },

{ question: "Explain distributed machine learning.", keywords: ["parallel","training","clusters"] },

{ question: "Explain privacy preserving machine learning.", keywords: ["security","data","models"] },

{ question: "Explain advanced cryptographic protocols.", keywords: ["security","encryption","communication"] },

{ question: "Explain quantum computing basics.", keywords: ["qubits","superposition","computation"] },

{ question: "Explain advanced algorithm design techniques.", keywords: ["optimization","complexity","algorithms"] },

{ question: "Explain large scale system reliability.", keywords: ["fault","tolerance","availability"] },

{ question: "Explain load balancing algorithms.", keywords: ["distribution","servers","traffic"] },

{ question: "Explain scalable microservices architecture.", keywords: ["services","scalability","communication"] },

{ question: "Explain container orchestration systems.", keywords: ["kubernetes","containers","clusters"] },

{ question: "Explain distributed logging systems.", keywords: ["logs","monitoring","systems"] },

{ question: "Explain advanced data pipelines.", keywords: ["etl","processing","data"] },

{ question: "Explain ML model deployment architecture.", keywords: ["serving","models","api"] },

{ question: "Explain concept drift in ML.", keywords: ["data","change","models"] },

{ question: "Explain large scale graph processing.", keywords: ["graphs","nodes","algorithms"] },

{ question: "Explain high performance computing.", keywords: ["clusters","parallel","computation"] },

{ question: "Explain future trends in computer engineering.", keywords: ["ai","systems","innovation"] }

]

};

export default gateQuestions;