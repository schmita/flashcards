(() => {
'use strict';
const words = [
{l:1,zh:'你好',py:'nǐ hǎo',en:'hello'},{l:1,zh:'谢谢',py:'xièxie',en:'thank you'},{l:1,zh:'再见',py:'zàijiàn',en:'goodbye'},{l:1,zh:'朋友',py:'péngyou',en:'friend'},{l:1,zh:'学生',py:'xuésheng',en:'student'},{l:1,zh:'老师',py:'lǎoshī',en:'teacher'},{l:1,zh:'中国',py:'Zhōngguó',en:'China'},{l:1,zh:'今天',py:'jīntiān',en:'today'},{l:1,zh:'明天',py:'míngtiān',en:'tomorrow'},{l:1,zh:'喜欢',py:'xǐhuan',en:'to like'},{l:1,zh:'吃',py:'chī',en:'to eat'},{l:1,zh:'喝',py:'hē',en:'to drink'},
{l:2,zh:'觉得',py:'juéde',en:'to feel; to think'},{l:2,zh:'一起',py:'yìqǐ',en:'together'},{l:2,zh:'已经',py:'yǐjīng',en:'already'},{l:2,zh:'因为',py:'yīnwèi',en:'because'},{l:2,zh:'所以',py:'suǒyǐ',en:'so; therefore'},{l:2,zh:'时间',py:'shíjiān',en:'time'},{l:2,zh:'问题',py:'wèntí',en:'question; problem'},{l:2,zh:'帮助',py:'bāngzhù',en:'to help'},{l:2,zh:'旅游',py:'lǚyóu',en:'to travel'},{l:2,zh:'准备',py:'zhǔnbèi',en:'to prepare'},{l:2,zh:'考试',py:'kǎoshì',en:'exam; test'},
{l:3,zh:'当然',py:'dāngrán',en:'of course'},{l:3,zh:'认真',py:'rènzhēn',en:'serious; conscientious'},{l:3,zh:'习惯',py:'xíguàn',en:'habit; to get used to'},{l:3,zh:'参加',py:'cānjiā',en:'to participate'},{l:3,zh:'发现',py:'fāxiàn',en:'to discover; to notice'},{l:3,zh:'需要',py:'xūyào',en:'to need'},{l:3,zh:'终于',py:'zhōngyú',en:'finally'},{l:3,zh:'提高',py:'tígāo',en:'to improve; to raise'},{l:3,zh:'影响',py:'yǐngxiǎng',en:'influence; effect'},{l:3,zh:'选择',py:'xuǎnzé',en:'to choose'},{l:3,zh:'附近',py:'fùjìn',en:'nearby'},{l:3,zh:'放心',py:'fàngxīn',en:'to feel relieved'},
{l:4,zh:'安排',py:'ānpái',en:'to arrange; arrangement'},{l:4,zh:'按照',py:'ànzhào',en:'according to'},{l:4,zh:'保护',py:'bǎohù',en:'to protect'},{l:4,zh:'成功',py:'chénggōng',en:'success; to succeed'},{l:4,zh:'复杂',py:'fùzá',en:'complicated'},{l:4,zh:'经验',py:'jīngyàn',en:'experience'},{l:4,zh:'适合',py:'shìhé',en:'to suit; to be suitable'},{l:4,zh:'提前',py:'tíqián',en:'in advance'},{l:4,zh:'不仅',py:'bùjǐn',en:'not only'},{l:4,zh:'由于',py:'yóuyú',en:'because of; due to'},{l:4,zh:'负责',py:'fùzé',en:'to be responsible for'},{l:4,zh:'坚持',py:'jiānchí',en:'to persist; to keep at it'},
{l:6,zh:'阐述',py:'chǎnshù',en:'to expound; to elaborate'},{l:6,zh:'弊端',py:'bìduān',en:'drawback; malpractice'},{l:6,zh:'濒临',py:'bīnlín',en:'to be on the verge of'},{l:6,zh:'筹备',py:'chóubèi',en:'to prepare; to make arrangements'},{l:6,zh:'诧异',py:'chàyì',en:'to be astonished'},{l:6,zh:'繁荣',py:'fánróng',en:'prosperous; prosperity'},{l:6,zh:'分歧',py:'fēnqí',en:'difference of opinion'},{l:6,zh:'恍然大悟',py:'huǎngrán dà wù',en:'to suddenly understand'},{l:6,zh:'坚韧',py:'jiānrèn',en:'tough; resilient'},{l:6,zh:'履行',py:'lǚxíng',en:'to fulfill; to perform'},{l:6,zh:'潜移默化',py:'qián yí mò huà',en:'to influence gradually and imperceptibly'},{l:6,zh:'权衡',py:'quánhéng',en:'to weigh; to balance'},
{l:7,zh:'博大精深',py:'bó dà jīng shēn',en:'broad and profound'},{l:7,zh:'层出不穷',py:'céng chū bù qióng',en:'to emerge endlessly'},{l:7,zh:'触类旁通',py:'chù lèi páng tōng',en:'to infer by analogy'},{l:7,zh:'大刀阔斧',py:'dà dāo kuò fǔ',en:'bold and decisive'},{l:7,zh:'独树一帜',py:'dú shù yī zhì',en:'to be distinctive; to stand alone'},{l:7,zh:'各抒己见',py:'gè shū jǐ jiàn',en:'for everyone to express their views'},{l:7,zh:'举足轻重',py:'jǔ zú qīng zhòng',en:'to be pivotal; to be of great importance'},{l:7,zh:'理所当然',py:'lǐ suǒ dāng rán',en:'as a matter of course'},{l:7,zh:'迫在眉睫',py:'pò zài méi jié',en:'imminent; pressing'},{l:7,zh:'取长补短',py:'qǔ cháng bǔ duǎn',en:'to learn from others’ strengths'},{l:7,zh:'相辅相成',py:'xiāng fǔ xiāng chéng',en:'to complement one another'},{l:7,zh:'循序渐进',py:'xún xù jiàn jìn',en:'to progress step by step'},
{l:8,zh:'百折不挠',py:'bǎi zhé bù náo',en:'indomitable; never give up despite setbacks'},{l:8,zh:'不言而喻',py:'bù yán ér yù',en:'self-evident'},{l:8,zh:'沧海一粟',py:'cāng hǎi yī sù',en:'a drop in the ocean'},{l:8,zh:'耳濡目染',py:'ěr rú mù rǎn',en:'to be influenced by what one hears and sees'},{l:8,zh:'画龙点睛',py:'huà lóng diǎn jīng',en:'to add the finishing touch'},{l:8,zh:'见微知著',py:'jiàn wēi zhī zhù',en:'to infer the whole from a small clue'},{l:8,zh:'名副其实',py:'míng fù qí shí',en:'to live up to one’s reputation'},{l:8,zh:'逆水行舟',py:'nì shuǐ xíng zhōu',en:'to sail against the current'},{l:8,zh:'融会贯通',py:'róng huì guàn tōng',en:'to thoroughly assimilate and synthesize'},{l:8,zh:'深谋远虑',py:'shēn móu yuǎn lǜ',en:'to plan carefully for the future'},{l:8,zh:'无独有偶',py:'wú dú yǒu ǒu',en:'it is not the only case; similar cases exist'},{l:8,zh:'卓有成效',py:'zhuó yǒu chéng xiào',en:'remarkably effective'}
];
const sentences = [
{l:1,zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',en:'What is your name?'},{l:1,zh:'我喜欢喝茶。',py:'Wǒ xǐhuan hē chá.',en:'I like drinking tea.'},{l:1,zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',en:'What day of the week is it today?'},{l:1,zh:'他是我的朋友。',py:'Tā shì wǒ de péngyou.',en:'He is my friend.'},{l:1,zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.',en:'There are four people in my family.'},{l:1,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',en:'What time is it now?'},
{l:2,zh:'你为什么不去？',py:'Nǐ wèishénme bú qù?',en:'Why aren’t you going?'},{l:2,zh:'我们一起去吃饭吧。',py:'Wǒmen yìqǐ qù chīfàn ba.',en:'Let’s go eat together.'},{l:2,zh:'我已经做完作业了。',py:'Wǒ yǐjīng zuò wán zuòyè le.',en:'I have already finished my homework.'},{l:2,zh:'这个问题不太难。',py:'Zhège wèntí bú tài nán.',en:'This question is not too difficult.'},{l:2,zh:'请你帮我一下。',py:'Qǐng nǐ bāng wǒ yíxià.',en:'Please help me for a moment.'},{l:2,zh:'明天我们去旅游。',py:'Míngtiān wǒmen qù lǚyóu.',en:'We are going traveling tomorrow.'},
{l:3,zh:'我终于找到我的手机了。',py:'Wǒ zhōngyú zhǎodào wǒ de shǒujī le.',en:'I finally found my phone.'},{l:3,zh:'每天练习可以提高你的中文。',py:'Měitiān liànxí kěyǐ tígāo nǐ de Zhōngwén.',en:'Practicing every day can improve your Chinese.'},{l:3,zh:'我已经习惯了这里的生活。',py:'Wǒ yǐjīng xíguàn le zhèlǐ de shēnghuó.',en:'I have already gotten used to life here.'},{l:3,zh:'你可以参加明天的活动。',py:'Nǐ kěyǐ cānjiā míngtiān de huódòng.',en:'You can participate in tomorrow’s activity.'},{l:3,zh:'这家饭馆就在学校附近。',py:'Zhè jiā fànguǎn jiù zài xuéxiào fùjìn.',en:'This restaurant is right near the school.'},{l:3,zh:'别担心，我会帮助你。',py:'Bié dānxīn, wǒ huì bāngzhù nǐ.',en:'Don’t worry; I will help you.'},
{l:4,zh:'请按照老师的要求完成作业。',py:'Qǐng ànzhào lǎoshī de yāoqiú wánchéng zuòyè.',en:'Please complete the homework according to the teacher’s requirements.'},{l:4,zh:'提前准备可以减少压力。',py:'Tíqián zhǔnbèi kěyǐ jiǎnshǎo yālì.',en:'Preparing in advance can reduce stress.'},{l:4,zh:'她不仅工作认真，而且很有经验。',py:'Tā bùjǐn gōngzuò rènzhēn, érqiě hěn yǒu jīngyàn.',en:'She is not only conscientious at work but also very experienced.'},{l:4,zh:'这个计划比较复杂，需要大家一起讨论。',py:'Zhège jìhuà bǐjiào fùzá, xūyào dàjiā yìqǐ tǎolùn.',en:'This plan is rather complicated and needs everyone to discuss it together.'},{l:4,zh:'我们应该保护环境。',py:'Wǒmen yīnggāi bǎohù huánjìng.',en:'We should protect the environment.'},{l:4,zh:'只要坚持练习，你就会取得成功。',py:'Zhǐyào jiānchí liànxí, nǐ jiù huì qǔdé chénggōng.',en:'As long as you keep practicing, you will succeed.'},
{l:6,zh:'报告详细阐述了这项政策的潜在弊端。',py:'Bàogào xiángxì chǎnshù le zhè xiàng zhèngcè de qiánzài bìduān.',en:'The report elaborates on the potential drawbacks of this policy.'},{l:6,zh:'双方经过讨论，终于解决了意见上的分歧。',py:'Shuāngfāng jīngguò tǎolùn, zhōngyú jiějué le yìjiàn shàng de fēnqí.',en:'After discussion, both sides finally resolved their differences of opinion.'},{l:6,zh:'她意识到自己应该履行当初作出的承诺。',py:'Tā yìshí dào zìjǐ yīnggāi lǚxíng dāngchū zuòchū de chéngnuò.',en:'She realized she should fulfill the promise she made.'},{l:6,zh:'这座城市正处于转型发展的关键时期。',py:'Zhè zuò chéngshì zhèng chǔyú zhuǎnxíng fāzhǎn de guānjiàn shíqī.',en:'The city is at a critical stage of transformation and development.'},{l:6,zh:'长期的阅读在不知不觉中影响了他的思维方式。',py:'Chángqī de yuèdú zài bù zhī bù jué zhōng yǐngxiǎng le tā de sīwéi fāngshì.',en:'Long-term reading gradually influenced his way of thinking.'},{l:6,zh:'做决定之前，我们需要权衡各种利弊。',py:'Zuò juédìng zhīqián, wǒmen xūyào quánhéng gè zhǒng lìbì.',en:'Before making a decision, we need to weigh the pros and cons.'},
{l:7,zh:'面对复杂的问题，我们应该循序渐进地寻找答案。',py:'Miànduì fùzá de wèntí, wǒmen yīnggāi xúnxù jiànjìn de xúnzhǎo dá’àn.',en:'Faced with a complex problem, we should look for answers step by step.'},{l:7,zh:'这项研究成果对整个项目的成功举足轻重。',py:'Zhè xiàng yánjiū chéngguǒ duì zhěnggè xiàngmù de chénggōng jǔzúqīngzhòng.',en:'These research findings are pivotal to the project’s success.'},{l:7,zh:'讨论时请大家各抒己见，不必担心意见不同。',py:'Tǎolùn shí qǐng dàjiā gè shū jǐ jiàn, bú bì dānxīn yìjiàn bù tóng.',en:'Please share your views during the discussion; don’t worry about disagreeing.'},{l:7,zh:'新技术层出不穷，社会也因此不断变化。',py:'Xīn jìshù céng chū bù qióng, shèhuì yě yīncǐ búduàn biànhuà.',en:'New technologies emerge endlessly, and society keeps changing as a result.'},{l:7,zh:'两种方法各有优势，实际上可以相辅相成。',py:'Liǎng zhǒng fāngfǎ gè yǒu yōushì, shíjì shàng kěyǐ xiāngfǔxiāngchéng.',en:'The two methods each have strengths and can actually complement each other.'},{l:7,zh:'这位学者的研究领域广泛，学术造诣博大精深。',py:'Zhè wèi xuézhě de yánjiū lǐngyù guǎngfàn, xuéshù zàoyì bódàjīngshēn.',en:'This scholar’s research is broad, and their academic knowledge is profound.'},
{l:8,zh:'面对挫折，她始终百折不挠，继续追求目标。',py:'Miànduì cuòzhé, tā shǐzhōng bǎizhé bù náo, jìxù zhuīqiú mùbiāo.',en:'In the face of setbacks, she remained indomitable and continued pursuing her goal.'},{l:8,zh:'虽然每个人的贡献很小，但汇集起来并非沧海一粟。',py:'Suīrán měi gèrén de gòngxiàn hěn xiǎo, dàn huìjí qǐlái bìngfēi cānghǎi yī sù.',en:'Although each person’s contribution is small, together they are not insignificant.'},{l:8,zh:'多年的合作使他们耳濡目染，逐渐理解彼此的文化。',py:'Duōnián de hézuò shǐ tāmen ěrrú mùrǎn, zhújiàn lǐjiě bǐcǐ de wénhuà.',en:'Years of collaboration exposed them to each other’s cultures, which they gradually came to understand.'},{l:8,zh:'最后一段话为整篇文章画龙点睛。',py:'Zuìhòu yí duàn huà wèi zhěng piān wénzhāng huàlóngdiǎnjīng.',en:'The final paragraph adds the finishing touch to the whole article.'},{l:8,zh:'这个团队的改革措施卓有成效，值得推广。',py:'Zhège tuánduì de gǎigé cuòshī zhuóyǒuchéngxiào, zhídé tuīguǎng.',en:'The team’s reforms have been highly effective and are worth promoting.'},{l:8,zh:'他能从细微的变化中发现趋势，真正做到了见微知著。',py:'Tā néng cóng xìwēi de biànhuà zhōng fāxiàn qūshì, zhēnzhèng zuòdào jiànwēizhīzhù.',en:'He can spot trends in subtle changes, truly inferring the larger picture from small clues.'}
];
const $ = id => document.getElementById(id);
const level = $('level'), mode = $('mode'), board = $('gameBoard');
let selected = [], matched = new Set(), attempts = 0, pairs = [], locked = false;
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
function pickItems() {
 const wanted = level.value === 'all' ? [1,2,3,4,6,7,8] : level.value === 'advanced' ? [6,7,8] : [Number(level.value)];
 const source = (mode.value === 'words' ? words : sentences).filter(x=>wanted.includes(x.l));
 return shuffle(source).slice(0, Math.min(8, source.length));
}
function start() {
 selected=[]; matched=new Set(); attempts=0; locked=false; pairs=pickItems();
 $('matchedCount').textContent='0'; $('pairTotal').textContent=String(pairs.length); $('attemptCount').textContent='0';
 $('instructions').textContent = mode.value === 'words' ? 'Match each Chinese word with its pinyin and English meaning.' : 'Match each Chinese sentence with its English translation.';
 $('gameMessage').textContent='Ready when you are! 加油！'; board.replaceChildren();
 const cards = [];
 pairs.forEach((item,i)=>{
  cards.push({id:i,side:'a',main:item.zh,sub: mode.value==='words' ? '汉字 · HSK '+item.l : '中文句子 · HSK '+item.l});
  cards.push({id:i,side:'b',main:mode.value==='words' ? item.py : item.en,sub:mode.value==='words' ? item.en : item.py});
 });
 shuffle(cards).forEach(card=>{
  const btn=document.createElement('button'); btn.type='button'; btn.className='match-card'; btn.dataset.id=String(card.id); btn.dataset.side=card.side;
  const main=document.createElement('span'); main.className='match-main'; main.textContent=card.main;
  const sub=document.createElement('span'); sub.className='match-sub'; sub.textContent=card.sub;
  btn.append(main,sub); btn.addEventListener('click',()=>choose(btn)); board.append(btn);
 });
}
function choose(btn) {
 if(locked || btn.classList.contains('matched') || selected.includes(btn)) return;
 btn.classList.add('chosen'); selected.push(btn);
 if(selected.length<2) return;
 attempts++; $('attemptCount').textContent=String(attempts);
 const [a,b]=selected;
 if(a.dataset.id===b.dataset.id && a.dataset.side!==b.dataset.side) {
  a.classList.remove('chosen'); b.classList.remove('chosen'); a.classList.add('matched'); b.classList.add('matched');
  matched.add(a.dataset.id); $('matchedCount').textContent=String(matched.size);
  const item=pairs[Number(a.dataset.id)];
  $('gameMessage').textContent='太棒了！ '+item.zh+' — '+(mode.value==='words' ? item.py+' · '+item.en : item.en);
  selected=[];
  if(matched.size===pairs.length) $('gameMessage').textContent='🎉 全部配对成功！ Perfect match — '+attempts+' attempts. Try another round!';
 } else {
  locked=true; $('gameMessage').textContent='Not quite — try another pair!';
  window.setTimeout(()=>{a.classList.remove('chosen');b.classList.remove('chosen');selected=[];locked=false;},850);
 }
}
$('newGame').addEventListener('click',start); $('restart').addEventListener('click',start);
level.addEventListener('change',start); mode.addEventListener('change',start);
start();
})();