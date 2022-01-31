// Get the modal
var modal = document.getElementById("myModal");
var img = document.getElementById("image1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var pimg1 = document.getElementById("image01")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
img.onclick = first;

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
// Get the modal
var img = document.getElementById("image2");
var pimg2 = document.getElementById("image02")
img.onclick = second;

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
// Get the modal
var img = document.getElementById("image3");
var pimg3 = document.getElementById("image03")
img.onclick = third;

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
// Get the modal
var img = document.getElementById("image4");
var pimg = document.getElementById("image04")
img.onclick = four;

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
next.onclick = function() {
var x = document.getElementsByClassName("image0");
var i=0;
while(x[i].style.opacity != 0.2){
  i++;
}

switch(i){
  case 0:
    second();
    break;
  case 1:
    third();
    break;
  case 2:
    four();
    // next.addEventListener('mouseover',next.style.opacity=1)
    break;
    
}
}

prev.onclick = function() {
  
  var x = document.getElementsByClassName("image0");
  var i=0;
  while(x[i].style.opacity != 0.2){
    i++;
  }
 
  switch(i){
    case 2:
      second();
      break;
    case 3:
      third();
      break;
    case 1:
      first();
      // prev.addEventListener('mouseover',next.style.opacity=1)
      break; 
      

  }
  }
  
function second (){
  modal.style.display = "block";
  modalImg.src = "./images/image-product-2.jpg";
  
  pimg2.style.border="2px solid rgb(255, 125, 26,1)"
  pimg2.style.backgroundColor="white"
  pimg2.style.opacity=0.2;
  pimg1.style.opacity=1;
  pimg1.style.border="none"
  pimg3.style.opacity=1;
  pimg3.style.border="none"
  pimg.style.opacity=1;
  pimg.style.border="none"
}
function first(){
  modal.style.display = "block";
  modalImg.src = "./images/image-product-1.jpg";
  pimg1.style.backgroundColor="white"
  pimg1.style.opacity=0.2;
  pimg1.style.border="2px solid rgb(255, 125, 26,1)"
  pimg2.style.opacity=1;
  pimg2.style.border="none"
  pimg3.style.opacity=1;
  pimg3.style.border="none"
  pimg.style.opacity=1;
  pimg.style.border="none"
}
function third(){
  modal.style.display = "block";
  modalImg.src = "./images/image-product-3.jpg";
  pimg3.style.backgroundColor="white"
  pimg3.style.border="2px solid rgb(255, 125, 26,1)"
  pimg3.style.opacity=0.2;
  pimg1.style.opacity=1;
  pimg1.style.border="none"
  pimg2.style.opacity=1;
  pimg2.style.border="none"
  pimg.style.opacity=1;
  pimg.style.border="none"
}
function four(){
  modal.style.display = "block";
  modalImg.src = "./images/image-product-4.jpg";
  pimg.style.backgroundColor="white"
  pimg.style.border="2px solid rgb(255, 125, 26,1)"
  pimg.style.opacity=0.2;
  pimg1.style.opacity=1;
  pimg1.style.border="none"
  pimg2.style.opacity=1;
  pimg2.style.border="none"
  pimg3.style.opacity=1;
  pimg3.style.border="none"
}
var z=0;
var y=0;
var plus= document.getElementsByClassName("tree")[1];
var moins = document.getElementById("plus");
var res=document.getElementById("trf");

plus.onclick=ajout;
function ajout(){
  y++;
  res.textContent=y;
  
}
moins.onclick=function(){
  if(y>0)
   y--;
  res.textContent=y;
 
}
var initial=document.getElementById("initial");
var bass=document.getElementById("bass")
var trm=document.getElementById("trm")
var term=document.getElementById("term")
var bz=document.getElementById("bs");
var nom =document.getElementById("nomb");
bz.onclick=function(){
  nom.style.display="none";
  bass.style.display="none";
    trm.style.display="none"
    term.style.display="none"
    initial.style.display="none";
  z=z+y;
  if(y>0){
  nom.textContent=z;
  nom.style.display="flex";
  y=0;
  res.textContent=y;
  }
  // else{
  //   nom.textContent=y;
  //   nom.style.display="none";
  // }
}
var sdr=document.getElementById("sdr");


var ktiba=document.getElementById("ktiba");
var somme=document.getElementById("somme");
var clo=document.getElementById("clo");
clo.onclick=function(){
  bass.style.display="none";
    trm.style.display="none"
    term.style.display="none"
    initial.style.display="none";

}
sdr.onclick=function(){
  if(bass.style.display="none"){
  if(z>0){
   
    bass.style.display="block";
    trm.style.display="flex"
    term.style.display="block"
    ktiba.innerHTML="Fall Limited Edition sneakers</br>$125.00 * "+z;
    somme.innerHTML=" $"+z*125.00+".00";

  }
  else{
   
    bass.style.display="block";
     initial.style.display="block";
  }
 }
 
 
 
}
var corb=document.getElementById("corb");
corb.onclick=function(){
  z=0;
  if(bass.style.display="block"){
  nom.style.display="none";
  bass.style.display="none";
    trm.style.display="none"
    term.style.display="none"
  }

}
var t=new Array();
// {0:"./images/image-product-1.jpg",1:"./images/image-product-2.jpg",2:"./images/image-product-3.jpg",3:"./images/image-product-4.jpg"}
t[0] = "./images/image-product-1.jpg";
t[1] = "./images/image-product-2.jpg";
t[2] = "./images/image-product-3.jpg";
t[3] = "./images/image-product-4.jpg";
var pr1=document.getElementById("pr1");
var nx=document.getElementById("nx");
var spo=document.getElementById("spo");

console.log(spo.alt);
var p=0;
pr1.onclick=function(){
  
p=0;
while(spo.alt!=p){
  
  p++;
}

if(p==3){
  spo.src=t[0];
  spo.alt=0;
}
else{
spo.src=t[p+1];
spo.alt=p+1;
}
}
nx.onclick=function(){
  
  p=0;
  while(spo.alt!=p){
    
    p++;
  }
  
  if(p==0){
    spo.src=t[3];
    spo.alt=3;
  }
  else{
  spo.src=t[p-1];
  spo.alt=p-1;
  }
  }
  var pos9=document.getElementById("pos9");
  var pass6=document.getElementById("pass6");
  var pass7=document.getElementById("pass7");
  var meun=document.getElementById("menu");
  pos9.onclick=function(){
    pass6.style.display="none";
    pass7.style.display="none";
  }
  menu.onclick=function(){
    pass6.style.display="inline";
    pass7.style.display="inline";
  }


  



