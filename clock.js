let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");




setInterval(()=>{
let isTime= new Date();
let hours= (isTime.getHours()<10?"0":"")+isTime.getHours();
let minutes= (isTime.getMinutes()<10?"0":"")+isTime.getMinutes();
let seconds=(isTime.getSeconds()<10?"0":"")+isTime.getSeconds();

hrs.innerText=hours;
min.innerText=minutes;
sec.innerText=seconds;
},1000);