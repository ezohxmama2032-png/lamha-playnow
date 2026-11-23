const $=id=>document.getElementById(id);
let people=[],round=0,current=null,hint=0,used=[];
const labels={actor:"ممثل / ممثلة",creator:"صانع محتوى",streamer:"ستريمر",singer:"مغني / موسيقي",athlete:"رياضي",presenter:"إعلامي",internet_personality:"شخصية إنترنت"};
async function loadData(){try{const r=await fetch("data/characters.json");const d=await r.json();people=(d.characters||[]).filter(x=>x.verified&&x.clues?.length);$("year").textContent=new Date().getFullYear()}catch(e){$("feedback").textContent="تعذر تحميل قاعدة البيانات. تأكد من رفع مجلد data."}}
function pick(){if(!people.length)return null;let choices=people.filter(p=>!used.includes(p.id));if(!choices.length){used=[];choices=people}const p=choices[Math.floor(Math.random()*choices.length)];used.push(p.id);return p}
function start(){current=pick();if(!current){alert("مفيش شخصيات متاحة في قاعدة البيانات.");return}round++;hint=0;$("game").classList.remove("hidden");$("category").textContent=labels[current.category]||"شخصية";$("progress").textContent="جولة "+round;$("clue").textContent=current.clues[0];$("hintCount").textContent="1 / "+current.clues.length;$("feedback").textContent="";$("feedback").className="feedback";$("answer").value="";$("answerForm").classList.remove("hidden");$("nextBtn").classList.add("hidden");$("hintBtn").disabled=current.clues.length<2;$("game").scrollIntoView({behavior:"smooth",block:"center"})}
function normalize(s){return s.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/[^\p{L}\p{N}]/gu,"")}
$("startBtn").addEventListener("click",start);
$("hintBtn").addEventListener("click",()=>{if(!current||hint>=current.clues.length-1)return;hint++;$("clue").textContent=current.clues[hint];$("hintCount").textContent=(hint+1)+" / "+current.clues.length;if(hint>=current.clues.length-1)$("hintBtn").disabled=true});
$("answerForm").addEventListener("submit",e=>{e.preventDefault();if(!current)return;const answer=normalize($("answer").value);const accepted=[current.name,...(current.aliases||[])].map(normalize);if(accepted.includes(answer)){ $("feedback").textContent="إجابة صحيحة! 👏";$("feedback").className="feedback good";$("answerForm").classList.add("hidden");$("nextBtn").classList.remove("hidden")}else{$("feedback").textContent="مش هي دي. جرّب تاني أو اطلب تلميح."; $("feedback").className="feedback bad"}});
$("nextBtn").addEventListener("click",start);
$("howBtn").addEventListener("click",()=>$("how").classList.remove("hidden"));
$("closeHow").addEventListener("click",()=>$("how").classList.add("hidden"));
loadData();
