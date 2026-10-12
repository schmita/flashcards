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
  }
,

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
  }
];
const STORAGE_KEY = "study-bloom-progress-v1";
let cards = [...initialCards];
let order = cards.map((_, i) => i);
let current = 0, flipped = false, filter = "";
let progress = loadProgress();
function loadProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{mastered:[],review:[]}}catch{return {mastered:[],review:[]}}}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify(progress))}
const $ = id => document.getElementById(id);
function visibleOrder(){return order.filter(i => (cards[i].term+" "+cards[i].definition).toLowerCase().includes(filter.toLowerCase()));}
function activeIndex(){const list=visibleOrder();if(!list.length)return -1;return list[Math.min(current,list.length-1)];}
function renderCard(){
 const list=visibleOrder(), idx=activeIndex();
 if(idx<0){$("cardText").textContent="No matching terms";$("sideLabel").textContent="SEARCH";$("cardIndex").textContent="—";$("progressText").textContent="0 cards found";$("flipHint").textContent="Try another search";$("flashcard").classList.remove("flipped");$("flashcard").setAttribute("aria-pressed","false");return;}
 const card=cards[idx];$("cardText").textContent=flipped?card.definition:card.term;$("sideLabel").textContent=flipped?"DEFINITION":"TERM";$("cardIndex").textContent=String(current+1).padStart(2,"0")+" / "+list.length;$("progressText").textContent=`Card ${current+1} of ${list.length}`;$("flipHint").textContent=flipped?"Tap to see term":"Tap to reveal definition";$("flashcard").classList.toggle("flipped",flipped);$("flashcard").setAttribute("aria-pressed",String(flipped));
}
function renderProgress(){
 const total=cards.length, mastered=progress.mastered.length;
 $("knownCount").textContent=mastered;$("percent").textContent=Math.round(mastered/total*100)+"% mastered";$("progressBar").style.width=(mastered/total*100)+"%";
}
function renderList(){
 const list=visibleOrder();$("listCount").textContent=list.length+" terms";const host=$("termList");host.innerHTML="";
 if(!list.length){host.innerHTML='<div class="empty">No terms match your search.</div>';return;}
 list.forEach((idx,n)=>{const card=cards[idx], row=document.createElement("button");row.className="term-row"+(progress.mastered.includes(idx)?" mastered":"")+(idx===activeIndex()?" selected":"");row.innerHTML=`<span class="number">${String(n+1).padStart(2,"0")}</span><span class="term-name"></span><span class="status">${progress.mastered.includes(idx)?"♡":progress.review.includes(idx)?"↻":"›"}</span>`;row.querySelector(".term-name").textContent=card.term;row.addEventListener("click",()=>{current=n;flipped=false;renderAll();window.scrollTo({top:0,behavior:"smooth"});});host.appendChild(row);});
}
function renderAll(){renderCard();renderProgress();renderList();}
function go(delta){const list=visibleOrder();if(!list.length)return;current=(current+delta+list.length)%list.length;flipped=false;renderAll();}
$("flashcard").addEventListener("click",()=>{if(activeIndex()<0)return;flipped=!flipped;renderCard();});
$("prev").addEventListener("click",()=>go(-1));$("next").addEventListener("click",()=>go(1));
$("shuffle").addEventListener("click",()=>{for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}current=0;flipped=false;renderAll();});
$("reset").addEventListener("click",()=>{if(confirm("Reset your mastered/review progress for this deck?")){progress={mastered:[],review:[]};saveProgress();current=0;flipped=false;renderAll();}});
$("search").addEventListener("input",e=>{filter=e.target.value;current=0;flipped=false;renderAll();});
$("mastered").addEventListener("click",()=>{const idx=activeIndex();if(idx<0)return;progress.mastered=[...new Set([...progress.mastered,idx])];progress.review=progress.review.filter(x=>x!==idx);saveProgress();go(1);});
$("review").addEventListener("click",()=>{const idx=activeIndex();if(idx<0)return;progress.review=[...new Set([...progress.review,idx])];progress.mastered=progress.mastered.filter(x=>x!==idx);saveProgress();go(1);});
document.addEventListener("keydown",e=>{if(e.target.matches("input"))return;if(e.code==="Space"){e.preventDefault();$("flashcard").click();}if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1);});
renderAll();
