let random=Math.floor(Math.random()*10)+1;
console.log(random);
let chances=1;
let b=true;
function checker(){
    if(chances==11){
        document.querySelector(".box2").innerHTML='<p style="font-size:100%;"> SORRY YOU LOSE THE GAME.THE CORRECT NUMBER WAS '+random+'</p'


    }

    if(chances<=10 && b==true){
        const un=document.getElementById("usernumber");
        const unv=un.value;
        if(unv==random){
            document.querySelector(".box2").innerHTML='<p style="font-size:30px;"> YOUR GUESS IS CORRECT.THANKS FOR PLAYING THE GAME</p>'

            b=false;
            

        }
        else{
            document.getElementById("displayer").textContent="\n Sorry Wrong Guess. Now only "+(10-chances)+" are left";
            
        }

    }
    chances=chances+1;
}
