const initialCards = [
  {
    "term": "Analyst/Investor Day",
    "definition": "A company-hosted event where executives explain the company’s strategy, business outlook, goals, and performance to financial analysts and investors. It often provides deeper detail than a routine earnings announcement."
  },
  {
    "term": "Blackout Period",
    "definition": "A restricted period when certain employees or insiders are prohibited from trading company securities, often before earnings announcements when they may possess material nonpublic information. Exact rules depend on company policy and applicable law."
  },
  {
    "term": "Chief Legal Officer (CLO)",
    "definition": "The senior executive responsible for a company’s legal affairs, legal risk, and legal strategy. The CLO often advises leadership and the board on compliance, governance, contracts, and regulatory matters."
  },
  {
    "term": "Consensus Analyst Estimate",
    "definition": "A combined estimate—often an average or other summary—of financial results predicted by analysts who cover a company. Investors compare actual results with consensus to assess whether the company beat, met, or missed expectations."
  },
  {
    "term": "Corporate Disclosure",
    "definition": "Information a company communicates to investors and the public about its business, finances, risks, and significant events. Disclosures may be required by securities laws or made voluntarily, and should be accurate and not misleading."
  },
  {
    "term": "The Dodd–Frank Act",
    "definition": "The Dodd–Frank Wall Street Reform and Consumer Protection Act, a U.S. law enacted in 2010 after the financial crisis. It introduced broad financial-regulatory reforms, including measures related to systemic risk, derivatives, consumer protection, and executive compensation and governance."
  },
  {
    "term": "Earnings Guidance",
    "definition": "A company’s forecast or outlook for future financial performance, such as expected revenue, earnings, or margins. Guidance is typically management’s estimate, not a guarantee of future results."
  },
  {
    "term": "Form 4",
    "definition": "An SEC filing that reports changes in beneficial ownership of a company’s securities by directors, executive officers, and certain major shareholders. It commonly reports insider purchases, sales, grants, or other transactions and is generally due within two business days of the transaction."
  },
  {
    "term": "Form 8-K",
    "definition": "An SEC current report used by public companies to announce certain material events between regular periodic reports. Examples can include major acquisitions, leadership changes, bankruptcy, or other specified events; filing deadlines depend on the event."
  },
  {
    "term": "Form 10-K",
    "definition": "A public company’s comprehensive annual report filed with the SEC. It includes audited financial statements and detailed information about the business, risks, management’s discussion and analysis, and controls."
  },
  {
    "term": "Form 10-Q",
    "definition": "A public company’s quarterly report filed with the SEC for the first three fiscal quarters of its year. It provides updated financial statements and information about results, risks, and operations; it is generally less comprehensive than Form 10-K."
  },
  {
    "term": "Forward-Looking Statement",
    "definition": "A statement about expected future events or performance, such as projected revenue, earnings, plans, or goals. These statements are based on current assumptions and are subject to risks and uncertainties that can cause actual results to differ."
  },
  {
    "term": "General Counsel",
    "definition": "The lawyer who leads an organization’s legal function and advises executives and the board on legal issues, compliance, contracts, litigation, and regulatory risks. In some companies, the General Counsel also serves as the Chief Legal Officer."
  },
  {
    "term": "Material Information",
    "definition": "Information that a reasonable investor would likely consider important when deciding whether to buy, sell, or hold a security, or that could significantly affect its market price. Whether information is material depends on the facts and circumstances."
  },
  {
    "term": "Non-Deal Road Show",
    "definition": "A series of meetings in which a company’s management meets with investors and analysts to discuss the business, strategy, and outlook, without a new securities offering being marketed. Companies must still follow applicable disclosure rules."
  },
  {
    "term": "Regulation Fair Disclosure (Reg FD)",
    "definition": "An SEC regulation intended to prevent public companies from selectively sharing material nonpublic information with certain market professionals or shareholders. When covered selective disclosure occurs, the company generally must make the information public simultaneously or promptly, depending on whether the disclosure was intentional."
  },
  {
    "term": "Quarterly Earnings Call",
    "definition": "A call, often held after a quarterly earnings release, where company executives discuss financial results and may answer questions from analysts and investors. It commonly includes prepared remarks and a question-and-answer session."
  },
  {
    "term": "Quiet Period",
    "definition": "A period when a company or certain participants limit communications about the company, often around an offering or before an earnings announcement. The meaning and restrictions depend on the context, securities rules, and company policy; it is not one universal prohibition on speaking."
  },
  {
    "term": "Safe Harbor Language",
    "definition": "Wording accompanying forward-looking statements that explains they are predictions subject to risks and uncertainties, often pointing readers to risk factors and cautioning that actual results may differ. Such language may support legal protections where statutory requirements are met, but it does not automatically shield every statement."
  },
  {
    "term": "The Sarbanes–Oxley Act (SOX)",
    "definition": "A U.S. law enacted in 2002 to strengthen corporate accountability, financial reporting, and auditor independence after major accounting scandals. Among other requirements, it established internal-control reporting obligations for many public companies and certification duties for certain executives."
  },
  {
    "term": "Schedule 13D",
    "definition": "An SEC filing generally required when a person or group beneficially owns more than 5% of a covered class of a public company’s voting equity securities and has an activist or otherwise non-passive purpose. It discloses ownership and relevant intentions; certain eligible passive investors may use Schedule 13G instead."
  },
  {
    "term": "The Securities Act of 1933",
    "definition": "A U.S. federal law that primarily governs the offer and sale of securities. It requires securities offerings to be registered with the SEC unless an exemption applies and aims to ensure investors receive important information."
  },
  {
    "term": "The Securities Exchange Act of 1934",
    "definition": "A U.S. federal law that regulates securities markets and secondary trading, established the SEC, and requires ongoing reporting by many public companies. It also addresses areas such as proxy solicitations, tender offers, and fraud in securities trading."
  },
  {
    "term": "Selective Disclosure",
    "definition": "Sharing important company information with only selected people—such as certain analysts or investors—instead of the market broadly. When the information is material and nonpublic, Regulation FD may require the company to disclose it publicly as well."
  },
  {
    "term": "Balance Sheet",
    "definition": "A financial statement showing a company’s assets, liabilities, and shareholders’ equity at a specific point in time. It follows the equation: Assets = Liabilities + Shareholders’ Equity."
  },
  {
    "term": "Book Value",
    "definition": "The value of a company’s net assets as recorded on its balance sheet, generally calculated as total assets minus total liabilities. Book value per share divides shareholders’ equity by common shares outstanding; it may differ substantially from market value."
  },
  {
    "term": "Bottom Line",
    "definition": "A common term for a company’s net income or net profit—the amount left after expenses, taxes, interest, and other costs are deducted from revenue."
  },
  {
    "term": "Burn Rate",
    "definition": "The rate at which a company spends its available cash, often used for startups or businesses that are not yet cash-flow positive. Net burn typically measures how much more cash goes out than comes in over a period."
  },
  {
    "term": "Cash Flow Statement",
    "definition": "A financial statement showing how cash and cash equivalents move into and out of a company during a period. It groups cash flows into operating, investing, and financing activities."
  },
  {
    "term": "Chief Financial Officer (CFO)",
    "definition": "The senior executive responsible for a company’s financial strategy and oversight, including financial reporting, budgeting, forecasting, capital management, and often investor relations."
  },
  {
    "term": "Chief Operating Officer (COO)",
    "definition": "A senior executive who oversees a company’s day-to-day operations and helps turn strategy into execution. Responsibilities vary but may include operational performance, processes, and coordination across business functions."
  },
  {
    "term": "Earnings per Share (EPS)",
    "definition": "A measure of profit allocated to each share of common stock, generally calculated as net income available to common shareholders divided by the weighted-average number of common shares outstanding. Diluted EPS also considers potentially dilutive securities."
  },
  {
    "term": "Enterprise Value (EV)",
    "definition": "A measure of a company’s total operating value often calculated as market capitalization plus debt and preferred equity, plus noncontrolling interests where applicable, minus cash and cash equivalents. It is commonly used alongside EBITDA to compare companies with different capital structures."
  },
  {
    "term": "Financial Statements",
    "definition": "Formal reports that summarize a company’s financial position and performance. The main statements are the balance sheet, income statement, cash flow statement, and statement of shareholders’ equity."
  },
  {
    "term": "Form 990",
    "definition": "An annual information return that most tax-exempt organizations file with the IRS. It reports information about an organization’s mission, programs, governance, revenue, expenses, and executive compensation; it is not the standard annual filing for publicly traded companies."
  },
  {
    "term": "Generally Accepted Accounting Principles (GAAP)",
    "definition": "A framework of accounting standards and conventions used to prepare financial statements. U.S. GAAP is established primarily by the Financial Accounting Standards Board for nongovernmental entities."
  },
  {
    "term": "Income Statement",
    "definition": "A financial statement reporting revenue, expenses, and profit or loss over a period of time. It shows how much a company earned and spent during that period."
  },
  {
    "term": "International Financial Reporting Standards (IFRS)",
    "definition": "A set of accounting standards issued by the International Accounting Standards Board and used in many countries, intended to improve comparability across organizations and jurisdictions."
  },
  {
    "term": "Market Capitalization",
    "definition": "The total market value of a company’s outstanding equity shares, commonly calculated as share price multiplied by shares outstanding. It measures equity value, not total enterprise value."
  },
  {
    "term": "Price-to-Earnings Ratio (P/E Ratio)",
    "definition": "A valuation ratio calculated by dividing a company’s share price by its earnings per share. It indicates how much investors are paying for each dollar of earnings; interpretation depends on growth expectations, risk, and accounting factors."
  },
  {
    "term": "Profit Margin",
    "definition": "A measure of how much profit a company earns relative to revenue, usually expressed as a percentage. Net profit margin is net income divided by revenue; gross and operating margins use different profit measures."
  },
  {
    "term": "Quarter-over-Quarter (QoQ)",
    "definition": "A comparison of a metric from one fiscal quarter with the previous fiscal quarter. QoQ changes can show short-term trends, but seasonality and period length can affect comparisons."
  },
  {
    "term": "Stock Chart",
    "definition": "A visual display of a stock’s price over time, often showing open, high, low, and closing prices, as well as trading volume. Charts can help users observe trends and volatility but do not guarantee future price movements."
  },
  {
    "term": "Top Line",
    "definition": "A common term for revenue or sales, which typically appears near the top of an income statement. Top-line growth means revenue is increasing before expenses are deducted."
  },
  {
    "term": "Valuation",
    "definition": "The process of estimating the economic or market value of a company, asset, or security. Methods include comparable-company analysis, discounted cash flow, and precedent transactions; results depend on assumptions and available information."
  },
  {
    "term": "Year-over-Year (YoY)",
    "definition": "A comparison of a metric with the same period one year earlier—for example, this quarter’s revenue compared with the same quarter last year. YoY comparisons help account for some seasonal patterns."
  },
  {
    "term": "Assets",
    "definition": "Resources a business owns or controls that are expected to provide future economic benefits."
  },
  {
    "term": "Liabilities",
    "definition": "Financial obligations or debts a person or company owes to another party."
  },
  {
    "term": "SEC Filing Dates",
    "definition": "Deadlines for required SEC reports and disclosures; timing varies by filing type and company status."
  },
  {
    "term": "Safe Harbor",
    "definition": "A legal provision that may protect qualifying forward-looking statements when applicable requirements are met."
  },
  {
    "term": "Accounts Payable (A/P)",
    "definition": "Money a company owes suppliers and other creditors for goods or services already received."
  },
  {
    "term": "Accounts Receivable (A/R)",
    "definition": "Money customers owe a company for goods or services already provided."
  },
  {
    "term": "Accrual Accounting",
    "definition": "Records revenue when earned and expenses when incurred, even if cash changes hands at another time."
  },
  {
    "term": "Cash-Basis Accounting",
    "definition": "Records revenue when cash is received and expenses when cash is paid."
  },
  {
    "term": "Going Concern",
    "definition": "The accounting assumption that a business will continue operating for the foreseeable future."
  },
  {
    "term": "Corporate Insolvency",
    "definition": "A situation in which a company cannot pay debts when due or fails another applicable insolvency test."
  },
  {
    "term": "Bankruptcy Types",
    "definition": "Legal bankruptcy processes can permit eligible debtors to reorganize debts or liquidate assets."
  },
  {
    "term": "Tangible Assets",
    "definition": "Physical resources with economic value, such as buildings, equipment, and inventory."
  },
  {
    "term": "Intangible Assets",
    "definition": "Nonphysical resources with economic value, such as patents, trademarks, and certain rights."
  },
  {
    "term": "Goodwill",
    "definition": "An intangible asset generally recognized in a business acquisition when price exceeds the fair value of identifiable net assets acquired."
  },
  {
    "term": "Goodwill Impairment",
    "definition": "A write-down when goodwill’s recorded amount is not supported under the applicable accounting impairment test."
  },
  {
    "term": "Materiality",
    "definition": "The importance of information to a reasonable investor’s decision or the total mix of available information."
  },
  {
    "term": "Material Disclosure Rules",
    "definition": "Requirements to disclose certain material information accurately and in a timely manner under applicable securities laws."
  },
  {
    "term": "Material Nonpublic Information",
    "definition": "Important company information that has not been broadly disclosed to the public."
  },
  {
    "term": "Insider Trading",
    "definition": "Trading securities in violation of applicable law or duties, including certain trades based on material nonpublic information."
  },
  {
    "term": "Shadow Trading",
    "definition": "Trading securities of a related company based on material nonpublic information about another company."
  },
  {
    "term": "Employee Stock Purchase Plan (ESPP)",
    "definition": "An employee benefit plan allowing eligible employees to purchase company shares, often at a discount."
  },
  {
    "term": "Blackout Period Exception",
    "definition": "A specific circumstance in which a trade may be permitted despite a blackout restriction; rules depend on law and company policy."
  },
  {
    "term": "Current Assets",
    "definition": "Assets expected to be converted into cash, sold, or used up within one year or the operating cycle, whichever is longer."
  },
  {
    "term": "Cash and Cash Equivalents",
    "definition": "Cash and highly liquid short-term investments readily convertible into known amounts of cash."
  },
  {
    "term": "Inventory",
    "definition": "Goods held for sale or materials used to produce goods for sale."
  },
  {
    "term": "Prepaid Expenses",
    "definition": "Payments made in advance for future benefits, such as insurance or rent; initially recorded as assets."
  },
  {
    "term": "Noncurrent Assets",
    "definition": "Assets not classified as current, generally held for long-term use or benefit."
  },
  {
    "term": "Property, Plant, and Equipment (PP&E)",
    "definition": "Long-term tangible assets used in operations, such as buildings, machinery, and vehicles."
  },
  {
    "term": "Accumulated Depreciation",
    "definition": "Total depreciation recorded against a depreciable asset; it reduces the asset’s carrying amount."
  },
  {
    "term": "Current Liabilities",
    "definition": "Obligations expected to be settled within one year or the operating cycle, whichever is longer."
  },
  {
    "term": "Accrued Expenses",
    "definition": "Expenses already incurred but not yet paid, such as wages or interest payable."
  },
  {
    "term": "Short-Term Debt",
    "definition": "Borrowings due within the short-term reporting period under applicable accounting rules."
  },
  {
    "term": "Long-Term Liabilities",
    "definition": "Obligations generally due beyond the next year or operating cycle."
  },
  {
    "term": "Long-Term Debt",
    "definition": "Borrowings such as bonds or loans due beyond the short-term period."
  },
  {
    "term": "Shareholders’ Equity",
    "definition": "The residual interest in a company’s assets after liabilities are deducted."
  },
  {
    "term": "Retained Earnings",
    "definition": "Cumulative net income retained in the business, less dividends and other applicable adjustments."
  },
  {
    "term": "Common Stock",
    "definition": "An equity account representing amounts attributable to common shares issued by a company."
  },
  {
    "term": "Additional Paid-In Capital (APIC)",
    "definition": "Amounts shareholders paid for stock above its stated par value."
  },
  {
    "term": "Treasury Stock",
    "definition": "A company’s own shares it has repurchased; generally reduces shareholders’ equity."
  },
  {
    "term": "Working Capital",
    "definition": "Current assets minus current liabilities; a measure related to short-term liquidity."
  },
  {
    "term": "Debt-to-Equity Ratio",
    "definition": "A leverage measure comparing debt with shareholders’ equity; calculation varies by definition."
  },
  {
    "term": "Liquidity",
    "definition": "A company’s ability to meet short-term financial obligations as they become due."
  }
];

const STORAGE_KEY = "study-bloom-progress-v1";
let cards = [...initialCards];
let order = cards.map((_, i) => i);
let current = 0, flipped = false, filter = "";
let progress = loadProgress();
function loadProgress(){
 try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (!saved || typeof saved !== "object") return {mastered:[], review:[]};
  const valid = values => Array.isArray(values) ? [...new Set(values.filter(i => Number.isInteger(i) && i >= 0 && i < initialCards.length))] : [];
  return {mastered:valid(saved.mastered), review:valid(saved.review).filter(i => !valid(saved.mastered).includes(i))};
 } catch { return {mastered:[], review:[]}; }
}
function saveProgress(){
 try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
 catch (error) { console.warn("Study progress could not be saved in this browser.", error); }
}
const $ = id => document.getElementById(id);
function visibleOrder(){return order.filter(i => (cards[i].term+" "+cards[i].definition).toLowerCase().includes(filter.toLowerCase()));}
function activeIndex(){const list=visibleOrder();if(!list.length)return -1;return list[Math.min(current,list.length-1)];}
function renderCard(){
 const list=visibleOrder(), idx=activeIndex();
 if(idx<0){$("cardText").textContent="No matching terms";$("sideLabel").textContent="SEARCH";$("cardIndex").textContent="—";$("progressText").textContent="0 cards found";$("flipHint").textContent="Try another search";$("flashcard").classList.remove("flipped");$("flashcard").setAttribute("aria-pressed","false");return;}
 const card=cards[idx];$("cardText").textContent=flipped?card.definition:card.term;$("sideLabel").textContent=flipped?"DEFINITION":"TERM";$("cardIndex").textContent=String(current+1).padStart(2,"0")+" / "+list.length;$("progressText").textContent=`Card ${current+1} of ${list.length}`;$("flipHint").textContent=flipped?"Tap to see term":"Tap to reveal definition";$("flashcard").classList.toggle("flipped",flipped);$("flashcard").setAttribute("aria-pressed",String(flipped));
}
function renderProgress(){
 const total=cards.length, mastered=progress.mastered.filter(i => Number.isInteger(i) && i >= 0 && i < total).length;
 $("knownCount").textContent=mastered;$("percent").textContent=Math.round(mastered/total*100)+"% mastered";$("progressBar").style.width=(mastered/total*100)+"%";
}
function renderList(){
 // Always show every card in Quick Review, regardless of the search filter above.
 const list=order;$("listCount").textContent=list.length+" terms";const host=$("termList");host.innerHTML="";
 if(!list.length){host.innerHTML='<div class="empty">No terms in this deck yet.</div>';return;}
 list.forEach((idx,n)=>{const card=cards[idx], row=document.createElement("button");row.className="term-row"+(progress.mastered.includes(idx)?" mastered":"")+(idx===activeIndex()?" selected":"");row.innerHTML=`<span class="number">${String(n+1).padStart(2,"0")}</span><span class="term-content"><span class="term-name"></span><span class="term-def"></span></span><span class="status">${progress.mastered.includes(idx)?"♡":progress.review.includes(idx)?"↻":"›"}</span>`;row.querySelector(".term-name").textContent=card.term;row.querySelector(".term-def").textContent=card.definition;row.addEventListener("click",()=>{filter="";$("search").value="";current=order.indexOf(idx);flipped=false;renderAll();window.scrollTo({top:0,behavior:"smooth"});});host.appendChild(row);});
}
function celebrateMastery(){
 // Brief, accessible confetti burst; no third-party library required.
 if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 const layer=document.createElement("div");
 layer.className="confetti-layer";
 layer.setAttribute("aria-hidden","true");
 const symbols=["✦","✧","♡","●","✿"];
 for(let i=0;i<42;i++){
  const piece=document.createElement("span");
  piece.className="confetti-piece";
  piece.textContent=symbols[i%symbols.length];
  piece.style.left=(Math.random()*100)+"%";
  piece.style.setProperty("--fall-distance",(110+Math.random()*70)+"vh");
  piece.style.setProperty("--spin",(Math.random()*900-450)+"deg");
  piece.style.setProperty("--delay",(Math.random()*180)+"ms");
  piece.style.setProperty("--drift",(Math.random()*180-90)+"px");
  layer.appendChild(piece);
 }
 document.body.appendChild(layer);
 window.setTimeout(()=>layer.remove(),2600);
}
function renderAll(){renderCard();renderProgress();renderList();const n=cards.length;const subjectCount=document.querySelector(".subject b");if(subjectCount)subjectCount.textContent=n;const subheading=document.querySelector(".subheading");if(subheading)subheading.textContent="Corporate Finance · "+n+" cards";}
function go(delta){const list=visibleOrder();if(!list.length)return;current=(current+delta+list.length)%list.length;flipped=false;renderAll();}
$("flashcard").addEventListener("click",()=>{if(activeIndex()<0)return;flipped=!flipped;renderCard();});
$("prev").addEventListener("click",()=>go(-1));$("next").addEventListener("click",()=>go(1));
$("shuffle").addEventListener("click",()=>{for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}current=0;flipped=false;renderAll();});
$("reset").addEventListener("click",()=>{if(confirm("Reset your mastered/review progress for this deck?")){progress={mastered:[],review:[]};saveProgress();current=0;flipped=false;renderAll();}});
$("search").addEventListener("input",e=>{filter=e.target.value;current=0;flipped=false;renderAll();});
$("mastered").addEventListener("click",()=>{const idx=activeIndex();if(idx<0)return;const newlyMastered=!progress.mastered.includes(idx);progress.mastered=[...new Set([...progress.mastered,idx])];progress.review=progress.review.filter(x=>x!==idx);saveProgress();if(newlyMastered)celebrateMastery();go(1);});
$("review").addEventListener("click",()=>{const idx=activeIndex();if(idx<0)return;progress.review=[...new Set([...progress.review,idx])];progress.mastered=progress.mastered.filter(x=>x!==idx);saveProgress();go(1);});
document.addEventListener("keydown",e=>{if(e.target.matches("input"))return;if(e.code==="Space"){e.preventDefault();$("flashcard").click();}if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1);});
renderAll();
