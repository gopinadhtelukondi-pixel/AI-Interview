const caQuestions = {

easy: [

{ question: "What is accounting?", keywords: ["record","financial","transactions"] },

{ question: "What is a balance sheet?", keywords: ["assets","liabilities","equity"] },

{ question: "What is an income statement?", keywords: ["revenue","expenses","profit"] },

{ question: "What is a journal entry?", keywords: ["record","debit","credit"] },

{ question: "What is a ledger?", keywords: ["accounts","records","transactions"] },

{ question: "What is debit?", keywords: ["left","entry","account"] },

{ question: "What is credit?", keywords: ["right","entry","account"] },

{ question: "What is double entry system?", keywords: ["debit","credit","transactions"] },

{ question: "What is trial balance?", keywords: ["balances","check","accounts"] },

{ question: "What is capital?", keywords: ["investment","owner","business"] },

{ question: "What are assets?", keywords: ["resources","owned","value"] },

{ question: "What are liabilities?", keywords: ["obligations","debts","payments"] },

{ question: "What is equity?", keywords: ["ownership","capital","networth"] },

{ question: "What is revenue?", keywords: ["income","sales","earnings"] },

{ question: "What are expenses?", keywords: ["cost","outflow","operations"] },

{ question: "What is profit?", keywords: ["income","expenses","surplus"] },

{ question: "What is loss?", keywords: ["expenses","exceed","income"] },

{ question: "What is GST?", keywords: ["tax","goods","services"] },

{ question: "What is audit?", keywords: ["verify","financial","statements"] },

{ question: "What is bookkeeping?", keywords: ["record","transactions","accounts"] },

{ question: "What is depreciation?", keywords: ["asset","value","reduction"] },

{ question: "What is accrual accounting?", keywords: ["record","earned","incurred"] },

{ question: "What is cash accounting?", keywords: ["cash","received","paid"] },

{ question: "What is working capital?", keywords: ["current","assets","liabilities"] },

{ question: "What is inventory?", keywords: ["goods","stock","sale"] },

{ question: "What is cost accounting?", keywords: ["cost","analysis","control"] },

{ question: "What is financial accounting?", keywords: ["records","statements","reporting"] },

{ question: "What is management accounting?", keywords: ["planning","decision","analysis"] },

{ question: "What is taxation?", keywords: ["government","tax","payments"] },

{ question: "What is direct tax?", keywords: ["income","taxpayer","government"] },

{ question: "What is indirect tax?", keywords: ["goods","services","tax"] },

{ question: "What is a financial statement?", keywords: ["report","financial","performance"] },

{ question: "What is retained earnings?", keywords: ["profit","reinvest","business"] },

{ question: "What is goodwill?", keywords: ["intangible","value","reputation"] },

{ question: "What is bank reconciliation?", keywords: ["bank","records","matching"] },

{ question: "What is balance?", keywords: ["difference","accounts","totals"] },

{ question: "What is invoice?", keywords: ["bill","sales","payment"] },

{ question: "What is receivable?", keywords: ["money","owed","customers"] },

{ question: "What is payable?", keywords: ["money","owed","suppliers"] },

{ question: "What is ledger posting?", keywords: ["transfer","journal","ledger"] },

{ question: "What is capital expenditure?", keywords: ["longterm","asset","investment"] },

{ question: "What is revenue expenditure?", keywords: ["shortterm","expenses","operations"] },

{ question: "What is audit trail?", keywords: ["record","tracking","transactions"] },

{ question: "What is net profit?", keywords: ["income","expenses","final"] },

{ question: "What is gross profit?", keywords: ["sales","cost","difference"] },

{ question: "What is partnership?", keywords: ["business","partners","agreement"] },

{ question: "What is sole proprietorship?", keywords: ["owner","business","individual"] },

{ question: "What is company?", keywords: ["entity","shareholders","business"] },

{ question: "What is dividend?", keywords: ["profit","distribution","shareholders"] },

{ question: "What is financial year?", keywords: ["period","accounts","reporting"] }

],

medium: [

{ question: "Explain the accounting equation.", keywords: ["assets","liabilities","equity"] },

{ question: "What is the purpose of auditing?", keywords: ["verification","accuracy","financial"] },

{ question: "Explain depreciation methods.", keywords: ["straightline","reducing","asset"] },

{ question: "What is working capital management?", keywords: ["current","assets","liabilities"] },

{ question: "Explain bank reconciliation process.", keywords: ["bank","records","adjustments"] },

{ question: "What is cost control?", keywords: ["expenses","monitor","reduce"] },

{ question: "Explain break even analysis.", keywords: ["cost","revenue","profit"] },

{ question: "What is variance analysis?", keywords: ["difference","budget","actual"] },

{ question: "Explain internal auditing.", keywords: ["control","verification","process"] },

{ question: "What is ratio analysis?", keywords: ["financial","performance","comparison"] },

{ question: "Explain liquidity ratios.", keywords: ["current","quick","liquidity"] },

{ question: "Explain solvency ratios.", keywords: ["debt","equity","financial"] },

{ question: "What is capital budgeting?", keywords: ["investment","projects","evaluation"] },

{ question: "Explain cash flow statement.", keywords: ["operating","investing","financing"] },

{ question: "What is cost of capital?", keywords: ["funds","investment","return"] },

{ question: "Explain inventory valuation methods.", keywords: ["fifo","lifo","average"] },

{ question: "What is marginal costing?", keywords: ["variable","cost","decision"] },

{ question: "Explain budgeting process.", keywords: ["planning","expenses","forecast"] },

{ question: "What is financial leverage?", keywords: ["debt","capital","risk"] },

{ question: "Explain capital structure.", keywords: ["debt","equity","finance"] },

{ question: "What is tax planning?", keywords: ["reduce","liability","legal"] },

{ question: "Explain GST input tax credit.", keywords: ["credit","tax","adjustment"] },

{ question: "What is management audit?", keywords: ["performance","efficiency","review"] },

{ question: "Explain financial forecasting.", keywords: ["predict","future","finance"] },

{ question: "What is dividend policy?", keywords: ["profit","distribution","shareholders"] },

{ question: "Explain cost allocation.", keywords: ["assign","costs","departments"] },

{ question: "What is break even point?", keywords: ["revenue","cost","zero"] },

{ question: "Explain internal control system.", keywords: ["process","fraud","prevention"] },

{ question: "What is deferred tax?", keywords: ["timing","difference","tax"] },

{ question: "Explain financial risk.", keywords: ["loss","uncertainty","finance"] },

{ question: "What is capital gain?", keywords: ["profit","asset","sale"] },

{ question: "Explain tax evasion vs tax avoidance.", keywords: ["illegal","legal","tax"] },

{ question: "What is consolidated financial statement?", keywords: ["group","companies","combined"] },

{ question: "Explain goodwill valuation.", keywords: ["intangible","value","business"] },

{ question: "What is cost sheet?", keywords: ["cost","analysis","production"] },

{ question: "Explain zero based budgeting.", keywords: ["budget","justify","expenses"] },

{ question: "What is transfer pricing?", keywords: ["internal","pricing","divisions"] },

{ question: "Explain standard costing.", keywords: ["standard","cost","comparison"] },

{ question: "What is forensic accounting?", keywords: ["fraud","investigation","finance"] },

{ question: "Explain working capital cycle.", keywords: ["cash","inventory","receivables"] },

{ question: "What is tax audit?", keywords: ["compliance","tax","verification"] },

{ question: "Explain investment appraisal methods.", keywords: ["npv","irr","payback"] },

{ question: "What is financial restructuring?", keywords: ["debt","equity","reorganization"] },

{ question: "Explain profit margin.", keywords: ["profit","sales","percentage"] },

{ question: "What is cost variance?", keywords: ["difference","actual","standard"] },

{ question: "Explain activity based costing.", keywords: ["activities","cost","allocation"] },

{ question: "What is financial planning?", keywords: ["goals","budget","finance"] },

{ question: "Explain taxation structure in India.", keywords: ["direct","indirect","gst"] },

{ question: "What is compliance audit?", keywords: ["rules","laws","verification"] },

{ question: "Explain capital market.", keywords: ["shares","investment","trading"] }

],

hard: [

{ question: "Explain IFRS and its importance.", keywords: ["standards","international","reporting"] },

{ question: "How would you detect financial fraud?", keywords: ["audit","irregularities","investigation"] },

{ question: "Explain advanced financial ratio analysis.", keywords: ["profitability","liquidity","efficiency"] },

{ question: "Design internal control system for a company.", keywords: ["process","controls","risk"] },

{ question: "Explain consolidation of financial statements.", keywords: ["parent","subsidiary","combined"] },

{ question: "Explain mergers and acquisitions accounting.", keywords: ["valuation","assets","liabilities"] },

{ question: "Explain financial risk management.", keywords: ["risk","hedging","analysis"] },

{ question: "What are derivatives in finance?", keywords: ["options","futures","contracts"] },

{ question: "Explain forensic accounting investigation.", keywords: ["fraud","evidence","analysis"] },

{ question: "Explain international taxation.", keywords: ["crossborder","tax","laws"] },

{ question: "Explain transfer pricing regulations.", keywords: ["pricing","multinational","tax"] },

{ question: "Explain valuation of business.", keywords: ["assets","earnings","market"] },

{ question: "Explain corporate governance.", keywords: ["management","ethics","accountability"] },

{ question: "Explain financial statement manipulation.", keywords: ["fraud","misreporting","accounts"] },

{ question: "Explain advanced cost management.", keywords: ["cost","strategy","optimization"] },

{ question: "Explain tax litigation process.", keywords: ["disputes","law","tax"] },

{ question: "Explain international accounting standards.", keywords: ["ias","reporting","rules"] },

{ question: "Explain economic value added.", keywords: ["profit","capital","return"] },

{ question: "Explain corporate tax planning strategies.", keywords: ["optimization","tax","compliance"] },

{ question: "Explain advanced audit techniques.", keywords: ["sampling","evidence","analysis"] },

{ question: "Explain strategic financial management.", keywords: ["planning","investment","strategy"] },

{ question: "Explain hedge accounting.", keywords: ["risk","derivatives","finance"] },

{ question: "Explain insolvency resolution process.", keywords: ["bankruptcy","creditors","resolution"] },

{ question: "Explain cross border mergers.", keywords: ["international","companies","integration"] },

{ question: "Explain financial restructuring strategies.", keywords: ["debt","equity","reorganization"] },

{ question: "Explain advanced GST compliance.", keywords: ["returns","tax","regulation"] },

{ question: "Explain valuation of intangible assets.", keywords: ["goodwill","brand","value"] },

{ question: "Explain capital market regulations.", keywords: ["sebi","rules","investors"] },

{ question: "Explain enterprise risk management.", keywords: ["risk","strategy","control"] },

{ question: "Explain advanced budgeting techniques.", keywords: ["forecast","planning","finance"] },

{ question: "Explain audit risk model.", keywords: ["risk","detection","control"] },

{ question: "Explain financial statement fraud detection.", keywords: ["analysis","audit","irregularities"] },

{ question: "Explain multinational taxation challenges.", keywords: ["global","tax","regulation"] },

{ question: "Explain derivatives risk management.", keywords: ["hedging","options","futures"] },

{ question: "Explain financial crisis management.", keywords: ["liquidity","risk","recovery"] },

{ question: "Explain regulatory compliance framework.", keywords: ["rules","audit","governance"] },

{ question: "Explain advanced cost optimization.", keywords: ["efficiency","cost","strategy"] },

{ question: "Explain financial modeling.", keywords: ["forecast","valuation","analysis"] },

{ question: "Explain corporate restructuring.", keywords: ["reorganization","strategy","finance"] },

{ question: "Explain public sector accounting.", keywords: ["government","accounts","reporting"] },

{ question: "Explain tax treaty benefits.", keywords: ["international","tax","agreement"] },

{ question: "Explain accounting for leases.", keywords: ["assets","liabilities","contracts"] },

{ question: "Explain strategic tax planning.", keywords: ["optimization","tax","strategy"] },

{ question: "Explain digital auditing systems.", keywords: ["automation","audit","technology"] },

{ question: "Explain ESG reporting.", keywords: ["environment","social","governance"] },

{ question: "Explain financial compliance systems.", keywords: ["regulation","audit","monitoring"] },

{ question: "Explain advanced financial forecasting.", keywords: ["prediction","data","finance"] },

{ question: "Explain accounting analytics.", keywords: ["data","analysis","finance"] },

{ question: "Explain financial governance framework.", keywords: ["control","management","accountability"] },

{ question: "Explain future of accounting automation.", keywords: ["technology","ai","automation"] }

]

};

export default caQuestions;