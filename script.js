const container=document.querySelector(".container");
const question=document.querySelector(".bx");
const info=document.querySelector('.info');
const ybtn=document.querySelector(".ybtn");
const nbtn=document.querySelector(".nbtn");

const containerReact=container.getBoundingClientRect();
const noBtnReact=nbtn.getBoundingClientRect();

ybtn.addEventListener('click', ()=>{
    info.innerHTML='I Love You Too :)';
    info.style.color="tomato";
    question.style.display="none";
    ybtn.style.display="none";
    nbtn.style.display="none";
})
nbtn.addEventListener('mouseover', ()=>{
   const i = Math.floor(Math.random() * (containerReact.width - noBtnReact.width)) + 1;
   const j = Math.floor(Math.random() * (containerReact.height - noBtnReact.height)) + 1;

   nbtn.style.left = i + 'px';
   nbtn.style.top = j + 'px';
})
