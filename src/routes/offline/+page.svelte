<script lang="ts">
    import { db } from "../../database/db";
    import { onMount } from "svelte";
let modeChoice:string=""
let numberChoice:number=1
let random:number=0
let myname:string=""
let name:string=""
let myscore:number=0
let scoredb2:number=0
let thridScreen:boolean=false
let numberScreen:boolean=false
let randomId:number=Math.floor(Math.random()*5)+1
let winner:boolean=false
let round:number=1
let score:number=0
let score2:number=0
let gameover:boolean=false
async function fetch(){
    try {
     const data = await db.scores.get(6);
     const data2 = await db.scores.get(randomId);

    if (data) {
      myname = data.name; 
      myscore =data.score
    }
    if (data2) {
      name = data2.name; 
      scoredb2 =data2.score
    }  
  } catch (error) {
    console.error("Error fetching idea:", error);
    
  }
}
function changeMode(s:string){
    modeChoice=s
    numberScreen=true
    fetch()
}
function changeNumber(n:number){
    numberChoice=n
    thridScreen=true
    numberScreen=false
    random=Math.floor(Math.random() * 5)+1
    check()
    setTimeout(next, 3000); // 5000 milliseconds = 5 seconds
    if(score===3||score2===3){
        setTimeout(checkandupdate, 3000); // 5000 milliseconds = 5 seconds
   }



}
function next(){
    thridScreen=false
    numberScreen=true
    winner=false
    round++
}
function check(){
    const sum=numberChoice+random
    if((modeChoice==="even"&& sum % 2 === 0)||(modeChoice==="odd"&& sum % 2 !== 0)){
        winner=true
        score ++
    }else{
        score2 ++
    }
   
}
function restart(){
 modeChoice=""
 numberChoice=1
 random=0
 thridScreen=false
 numberScreen=false
 winner=false
 round=1
 score=0
 score2=0
 randomId=Math.floor(Math.random()*5)+1
 gameover=false


}

function checkandupdate(){
    let sum=0
    if (score==3){
        sum=score-score2

        myscore=myscore+sum
        console.log(myscore)
        db.scores.update(6, { score: myscore})
        
        if(scoredb2!=0){

        scoredb2=scoredb2-sum
        db.scores.update(randomId, { score: scoredb2 })
        }
    }else{
        sum=score2-score
        if(myscore!=0){
        myscore=myscore-sum
        db.scores.update(6, { score: myscore})
        }
        scoredb2=scoredb2+sum
        db.scores.update(randomId, { score: scoredb2 })
        
       
        

    }
    gameover= true;

}
</script>
<div class="flex justify-center items-center flex-col">
    <!-- the last screen the one with won or lost the game-->
    

{#if gameover}

<p>{modeChoice}</p>

<p>game over</p>
<p>{myname} :{score} vs {name}: {score2}</p>
{#if score===3}
<p>blue side win</p>
{:else}
<p>red side win</p>
{/if}
<p>your total score:{myscore}</p>
<p>{name} total score:{scoredb2}</p>
<button on:click={restart}>Restart</button>
<!-- thrid screen the one with the lost or won the round -->
{:else}
{#if thridScreen}
<p>Round:{round}</p>
    {#if winner}
    <p>blue side:{myname}</p>
    <p>red side: {name}</p>
    <p>{modeChoice}</p>

      <p>You're a Winner!</p>


      <div class="flex justify-center flex-row space-x-5"> 
        <div>
            <p>blue  side</p><p>{numberChoice}</p></div>
        <div>
            <p>red side</p>
            <p>{random}</p></div>
      </div>
      {#if score>0||score2>0}
      <p>blue:{score} vs red:{score2}</p>
      {/if}

    {:else}
    <p>blue side:{myname}</p>
    <p>red side: {name}</p>
    <p>{modeChoice}</p>

      <p>Sorry, You Lost.</p>

      <div class="flex justify-center flex-row"> 
        <div>
            <p>blue  side</p><p>{numberChoice}</p></div>
        <div>
            <p>red side</p>
            <p>{random}</p></div>
      </div>
      {#if score>0||score2>0}
      <p>blue:{score} vs red:{score2}</p>
      {/if}



    {/if}
    <!-- second screen the one with numbers and we keep looping over it -->
  {:else}
 {#if modeChoice.length >0 && numberScreen}  
 <p>blue side:{myname}</p>
    <p>red side: {name}</p> 
 <p>{modeChoice}</p>
 {#if score>0||score2>0}
 <p>blue:{score} vs red:{score2}</p>
 {/if}
 <p>Round:{round}</p>

 <div class="flex justify-center flex-row space-x-2">
<button on:click={()=>changeNumber(1)}>1</button>
<button on:click={()=>changeNumber(2)}>2</button>
<button on:click={()=>changeNumber(3)}>3</button>
<button on:click={()=>changeNumber(4)}>4</button>
<button on:click={()=>changeNumber(5)}>5</button>
 </div>
{:else}
<!-- the first screen where you choose even or odd it pop up once -->
<p>choose</p>
 <div class="flex flex-row space-x-2">
<button on:click={()=>changeMode("even")} >Even</button>
<button on:click={()=>changeMode("odd")} >Odd</button>
</div>
{/if}
{/if}
{/if}
</div>


