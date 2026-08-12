const player=document.querySelector(".player");
const arrow=document.querySelector(".arrow")
let arrowX=850;
let arrowY=100;
let playerY=0;
let playerX=0;
let score=0;

setInterval(movearrow, 19);

function movearrow()
{
    arrowX-=10;
    arrow.style.left=arrowX+ "px";

    const a=arrow.getBoundingClientRect();
    const p=player.getBoundingClientRect();
    if(p.left<a.right &&
        p.right>a.left &&
        a.top<p.bottom &&
        a.bottom>p.top
    ){
        console.log("collision");
    }

    if(arrowX<-50)
    {
        score+=1;
        arrowX=850;
        arrowY=Math.random(900)*200;
}
    arrow.style.left = arrowX+"px";
    arrow.style.top = arrowY+"px";
}

document.addEventListener("keydown",(Event)=>{
    console.log(Event.key);
    if(event.key==="ArrowDown"){
        playerY +=10;
    }
    if(event.key==="ArrowUp"){
        playerY -=10;
    }
    player.style.top= playerY+"px";

});