
alert("hello");
var random=Math.random();
random = (random*6);
random=Math.floor(random)+1;
if(random==1){
    document.querySelector("img1").setAttribute("src","images/dice1.png");

}
if(random==2){
    document.querySelector("img1").setAttribute("src","images/dice2.png");

}
if(random==3){
    document.querySelector("img1").setAttribute("src","images/dice3.png");

}
if(random==4){
    document.querySelector("img1").setAttribute("src","images/dice4.png");

}
if(random==5){
    document.querySelector("img1").setAttribute("src","images/dice5.png");

}
if(random==6){
    document.querySelector("img1").setAttribute("src","images/dice6.png");

}
var random1=Math.random();
random1 = (random1*6);
random1=Math.floor(random1)+1;
if(random1==1){
    document.querySelector("img2").setAttribute("src","images/dice1.png");

}
if(random1==2){
    document.querySelector("img2").setAttribute("src","images/dice2.png");

}
if(random1==3){
    document.querySelector("img2").setAttribute("src","images/dice3.png");

}
if(random1==4){
    document.querySelector("img2").setAttribute("src","images/dice4.png");

}
if(random1==5){
    document.querySelector("img2").setAttribute("src","images/dice5.png");

}
if(random1==6){
    document.querySelector("img2").setAttribute("src","images/dice6.png");

}
if(random>random1){
    document.querySelector("h1").setAttribute("h1","Player 1 Wims");
}
else{
    document.querySelector("h1").setAttribute("h1","Player 2 wins");
}