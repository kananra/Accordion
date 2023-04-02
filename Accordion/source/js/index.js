const ac1 = document.querySelector(".ac-1");
const ac2 = document.querySelector(".ac-2");
const ac3 = document.querySelector(".ac-3");
const sc1=document.querySelector(".sc-1");
const sc2=document.querySelector(".sc-2");
const sc3=document.querySelector(".sc-3");


ac1.addEventListener("click",()=>{
  if (sc1.style.display==="block") {
    sc1.style.display="none";
  }else{
    sc1.style.display="block";
    sc2.style.display="none";
    sc3.style.display="none";

  }
});

ac2.addEventListener("click",()=>{
  if (sc2.style.display==="block") {
    sc2.style.display="none";
  }else{
    sc2.style.display="block";
    sc1.style.display="none";
    sc3.style.display="none";
  }
});

ac3.addEventListener("click",()=>{
  if (sc3.style.display==="block") {
    sc3.style.display="none";
  }else{
    sc3.style.display="block";
    sc1.style.display="none";
    sc2.style.display="none";
  }
});



$(document).ready(function(){
$(".acc-1").click(function(){
if ($(".sct-1").css("display")==="block") {
  $(".sct-1").hide()
}else{
  $(".sct-1").show()
  $(".sct-2").hide()
  $(".sct-3").hide()
}
});

$(".acc-2").click(function(){
if ($(".sct-2").css("display")==="block") {
  $(".sct-2").hide()
}else{
  $(".sct-2").show()
  $(".sct-1").hide()
  $(".sct-3").hide()
}
});

$(".acc-3").click(function(){
if ($(".sct-3").css("display")==="block") {
  $(".sct-3").hide()
}else{
  $(".sct-3").show()
  $(".sct-1").hide()
  $(".sct-2").hide()
}
});

});

