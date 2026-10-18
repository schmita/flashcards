(() => {
'use strict';
const words = [
{l:1,zh:'你好',py:'nǐ hǎo',en:'hello'},{l:1,zh:'谢谢',py:'xièxie',en:'thank you'},{l:1,zh:'再见',py:'zàijiàn',en:'goodbye'},{l:1,zh:'朋友',py:'péngyou',en:'friend'},{l:1,zh:'学生',py:'xuésheng',en:'student'},{l:1,zh:'老师',py:'lǎoshī',en:'teacher'},{l:1,zh:'中国',py:'Zhōngguó',en:'China'},{l:1,zh:'今天',py:'jīntiān',en:'today'},{l:1,zh:'明天',py:'míngtiān',en:'tomorrow'},{l:1,zh:'喜欢',py:'xǐhuan',en:'to like'},{l:1,zh:'吃',py:'chī',en:'to eat'},{l:1,zh:'喝',py:'hē',en:'to drink'},
{l:2,zh:'觉得',py:'juéde',en:'to feel; to think'},{l:2,zh:'一起',py:'yìqǐ',en:'together'},{l:2,zh:'已经',py:'yǐjīng',en:'already'},{l:2,zh:'因为',py:'yīnwèi',en:'because'},{l:2,zh:'所以',py:'suǒyǐ',en:'so; therefore'},{l:2,zh:'时间',py:'shíjiān',en:'time'},{l:2,zh:'问题',py:'wèntí',en:'question; problem'},{l:2,zh:'帮助',py:'bāngzhù',en:'to help'},{l:2,zh:'旅游',py:'lǚyóu',en:'to travel'},{l:2,zh:'准备',py:'zhǔnbèi',en:'to prepare'},{l:2,zh:'考试',py:'kǎoshì',en:'exam; test'},
{l:3,zh:'当然',py:'dāngrán',en:'of course'},{l:3,zh:'认真',py:'rènzhēn',en:'serious; conscientious'},{l:3,zh:'习惯',py:'xíguàn',en:'habit; to get used to'},{l:3,zh:'参加',py:'cānjiā',en:'to participate'},{l:3,zh:'发现',py:'fāxiàn',en:'to discover; to notice'},{l:3,zh:'需要',py:'xūyào',en:'to need'},{l:3,zh:'终于',py:'zhōngyú',en:'finally'},{l:3,zh:'提高',py:'tígāo',en:'to improve; to raise'},{l:3,zh:'影响',py:'yǐngxiǎng',en:'influence; effect'},{l:3,zh:'选择',py:'xuǎnzé',en:'to choose'},{l:3,zh:'附近',py:'fùjìn',en:'nearby'},{l:3,zh:'放心',py:'fàngxīn',en:'to feel relieved'},
{l:4,zh:'安排',py:'ānpái',en:'to arrange; arrangement'},{l:4,zh:'按照',py:'ànzhào',en:'according to'},{l:4,zh:'保护',py:'bǎohù',en:'to protect'},{l:4,zh:'成功',py:'chénggōng',en:'success; to succeed'},{l:4,zh:'复杂',py:'fùzá',en:'complicated'},{l:4,zh:'经验',py:'jīngyàn',en:'experience'},{l:4,zh:'适合',py:'shìhé',en:'to suit; to be suitable'},{l:4,zh:'提前',py:'tíqián',en:'in advance'},{l:4,zh:'不仅',py:'bùjǐn',en:'not only'},{l:4,zh:'由于',py:'yóuyú',en:'because of; due to'},{l:4,zh:'负责',py:'fùzé',en:'to be responsible for'},{l:4,zh:'坚持',py:'jiānchí',en:'to persist; to keep at it'}
];
const sentences = [
{l:1,zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',en:'What is your name?'},{l:1,zh:'我喜欢喝茶。',py:'Wǒ xǐhuan hē chá.',en:'I like drinking tea.'},{l:1,zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',en:'What day of the week is it today?'},{l:1,zh:'他是我的朋友。',py:'Tā shì wǒ de péngyou.',en:'He is my friend.'},{l:1,zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.',en:'There are four people in my family.'},{l:1,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',en:'What time is it now?'},
{l:2,zh:'你为什么不去？',py:'Nǐ wèishénme bú qù?',en:'Why aren’t you going?'},{l:2,zh:'我们一起去吃饭吧。',py:'Wǒmen yìqǐ qù chīfàn ba.',en:'Let’s go eat together.'},{l:2,zh:'我已经做完作业了。',py:'Wǒ yǐjīng zuò wán zuòyè le.',en:'I have already finished my homework.'},{l:2,zh:'这个问题不太难。',py:'Zhège wèntí bú tài nán.',en:'This question is not too difficult.'},{l:2,zh:'请你帮我一下。',py:'Qǐng nǐ bāng wǒ yíxià.',en:'Please help me for a moment.'},{l:2,zh:'明天我们去旅游。',py:'Míngtiān wǒmen qù lǚyóu.',en:'We are going traveling tomorrow.'},
{l:3,zh:'我终于找到我的手机了。',py:'Wǒ zhōngyú zhǎodào wǒ de shǒujī le.',en:'I finally found my phone.'},{l:3,zh:'每天练习可以提高你的中文。',py:'Měitiān liànxí kěyǐ tígāo nǐ de Zhōngwén.',en:'Practicing every day can improve your Chinese.'},{l:3,zh:'我已经习惯了这里的生活。',py:'Wǒ yǐjīng xíguàn le zhèlǐ de shēnghuó.',en:'I have already gotten used to life here.'},{l:3,zh:'你可以参加明天的活动。',py:'Nǐ kěyǐ cānjiā míngtiān de huódòng.',en:'You can participate in tomorrow’s activity.'},{l:3,zh:'这家饭馆就在学校附近。',py:'Zhè jiā fànguǎn jiù zài xuéxiào fùjìn.',en:'This restaurant is right near the school.'},{l:3,zh:'别担心，我会帮助你。',py:'Bié dānxīn, wǒ huì bāngzhù nǐ.',en:'Don’t worry; I will help you.'},
{l:4,zh:'请按照老师的要求完成作业。',py:'Qǐng ànzhào lǎoshī de yāoqiú wánchéng zuòyè.',en:'Please complete the homework according to the teacher’s requirements.'},{l:4,zh:'提前准备可以减少压力。',py:'Tíqián zhǔnbèi kěyǐ jiǎnshǎo yālì.',en:'Preparing in advance can reduce stress.'},{l:4,zh:'她不仅工作认真，而且很有经验。',py:'Tā bùjǐn gōngzuò rènzhēn, érqiě hěn yǒu jīngyàn.',en:'She is not only conscientious at work but also very experienced.'},{l:4,zh:'这个计划比较复杂，需要大家一起讨论。',py:'Zhège jìhuà bǐjiào fùzá, xūyào dàjiā yìqǐ tǎolùn.',en:'This plan is rather complicated and needs everyone to discuss it together.'},{l:4,zh:'我们应该保护环境。',py:'Wǒmen yīnggāi bǎohù huánjìng.',en:'We should protect the environment.'},{l:4,zh:'只要坚持练习，你就会取得成功。',py:'Zhǐyào jiānchí liànxí, nǐ jiù huì qǔdé chénggōng.',en:'As long as you keep practicing, you will succeed.'}
];
const $ = id => document.getElementById(id);
const level = $('level'), mode = $('mode'), board = $('gameBoard');
let selected = [], matched = new Set(), attempts = 0, pairs = [], locked = false;
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
function pickItems() {
 const wanted = level.value === 'all' ? [1,2,3,4] : [Number(level.value)];
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