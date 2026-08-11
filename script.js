const menuBtn=document.getElementById("menuBtn");const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.textContent=nav.classList.contains("open")?"✕":"☰"});
document.querySelectorAll("nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.textContent="☰"}));
const progress=document.getElementById("progress");window.addEventListener("scroll",()=>{const height=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${height?(window.scrollY/height)*100:0}%`});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
