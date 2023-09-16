<script lang="ts">
    import { db } from "../../database/db";
    import one from "../../images/one.webp"
    import two from "../../images/two.webp"
    import three from "../../images/three.webp"
    import four from "../../images/four.webp"
    import five from "../../images/five.webp"
    import Board from "$lib/board.svelte";
    import full_left from '../../images/full-left.webp'
    import full_right from '../../images/full-right.webp'
    import one_left from "../../images/left-one.webp"
    import two_left from "../../images/left-two.webp"
    import three_left from "../../images/left-three.webp"
    import four_left from "../../images/left-four.webp"
    import five_left from "../../images/left-five.webp"
   import one_right from "../../images/right-one.webp"
   import two_right from "../../images/right-two.webp"
   import three_right from "../../images/right-three.webp"
   import four_right from "../../images/right-four.webp"
   import five_right from "../../images/right-five.webp"



let modeChoice:string=""
let otherChoice:string=""
let numberChoice:number=1
let random:number=0
let myname:string=""
let name:string=""
let myscore:number=0
let scoredb2:number=0
let thridScreen:boolean=false
let numberScreen:boolean=false
let randomId:number=0
let winner:boolean=false
let round:number=1
let score:number=0
let score2:number=0
let gameover:boolean=false
let clicked:boolean[]=[false,false,false,false,false]
let thumbsDonw:boolean=false
let leftImages:string[]=[one_left,two_left,three_left,four_left,five_left]
let rightImages:string[]=[one_right,two_right,three_right,four_right,five_right]

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
function resetClicked(n:number){
  clicked[n]=false
}
function changeMode(s:string){
    modeChoice=s
    if(s==="even"){
      otherChoice="odd"
    }else{
      otherChoice="even"
    }
    numberScreen=true
    randomId=Math.floor(Math.random()*5)+1
    fetch()
}
function waitingTonext(){
  thumbsDonw=false
  thridScreen=true
  numberScreen=false
  check()
    setTimeout(next, 2000); // 5000 milliseconds = 5 seconds
    if(score===3||score2===3){
        setTimeout(checkandupdate, 2000); // 5000 milliseconds = 5 seconds
   }
}
function changeNumber(n:number){
  if(!clicked[n] ){
    clicked[n]=true }else{ 
    numberChoice=n
   
    random=Math.floor(Math.random() * 5)+1
    thumbsDonw=true
   setTimeout(waitingTonext,1000)
  }



}
function next(){
    thridScreen=false
    numberScreen=true
    winner=false
    if (gameover===false) {
    round++
    }else{
      round=round
    }
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
 gameover=false
 thumbsDonw=false


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
<div >
    <!-- the last screen the one with won or lost the game-->
    

{#if gameover}
<Board blue_side={myname} showRound={false} choice={modeChoice}  otherChoice={otherChoice} score={score} score2={score2} red_side={name}/>

<div class="justify-center  mt-5 
flex flex-col   items-center">
{#if score===3}
<p class="text-white bg-yellow-400 p-2">{myname} win</p>
{:else}
<p class="text-white bg-yellow-400 p-2">{name} win</p>
{/if}
<div class="flex flex-col p-4 mt-3 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
text-white ">
<div class="flex flex-row space-x-2">
  <p class="text-gray-600 font-light italic" >your total score:{myscore}</p>
  <p class={(score-score2 >0 ?'text-white':'text-red-500')}>{score-score2 >0 ?'+':''}{score-score2}</p>

</div>
<div class="flex flex-row space-x-2 mt-10">
  <p class="text-gray-600 font-light italic">{name} total score:{scoredb2}</p>

  <p class={(score2-score >0 ?'text-white':'text-red-500')}>{score2-score >0 ?'+':''}{score2-score}</p>
</div>
</div>
<button class="text-white border-2 mt-20 text-3xl
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500
  p-2 rounded-full"on:click={restart}>Restart</button>
</div>

<!-- thrid screen the one with the lost or won the round -->
{:else}
{#if thridScreen}
<Board blue_side={myname} choice={modeChoice} round={round} otherChoice={otherChoice} score={score} score2={score2} red_side={name}/>



    <div class="flex justify-center flex-row space-x-5 mt-20"> 
      <div>
          <img class="w-40 scale-75"  src={leftImages[numberChoice-1]} alt="left hand result"/>
        </div>
      <div>
          <img class="w-40 scale-75" src={rightImages[random-1]} alt="right hand result"/>
        </div>
    </div>


     

   
    <!-- second screen the one with numbers and we keep looping over it -->
  {:else}
 {#if modeChoice.length >0 && numberScreen}  
 
 

 <Board blue_side={myname} choice={modeChoice} round={round} otherChoice={otherChoice} score={score} score2={score2} red_side={name}/>
 {#if thumbsDonw}
 <div class="flex justify-center flex-row items-center mt-20">
  <div>
  <img class="w-40 scale-75"  src={full_left} alt="closed left hand"/>
  </div>
  <div>
  <img class="w-40 scale-75" src={full_right} alt="closed left hand"/>
  </div>
  </div>
{:else}
 <div class="flex justify-center items-center flex-col">
  
<div class="m-5 absolute bottom-24">
 <div class="grid grid-cols-5 ">
<button on:blur={()=>resetClicked(1)} class="{( clicked[1] ?'scale-125' : 'scale-75')}" on:click={()=>changeNumber(1)}><img class="h-40" src={one} alt="hand with one finger"/></button>
<button on:blur={()=>resetClicked(2)}  class="{( clicked[2] ?'scale-125' : 'scale-75')}" on:click={()=>changeNumber(2)}><img class="h-40" src={two} alt="hand with two fingers"/></button>
<button on:blur={()=>resetClicked(3)} class="{( clicked[3] ?'scale-125' : 'scale-75')}"  on:click={()=>changeNumber(3)}><img class="h-40" src={three} alt="hand with three fingers"/></button>
<button on:blur={()=>resetClicked(4)} class="{( clicked[4] ?'scale-125' : 'scale-75')}" on:click={()=>changeNumber(4)}><img class="h-40" src={four} alt="hand with four fingers"/></button>
<button on:blur={()=>resetClicked(5)} class="{( clicked[5] ?'scale-125' : 'scale-75')}" on:click={()=>changeNumber(5)}><img class="h-40" src={five} alt="hand with five fingers"/></button>
 </div>
</div>
 </div>
 {/if}
{:else}
<!-- the first screen where you choose even or odd it pop up once -->
 
<div class="flex flex-row  justify-center space-x-2 mt-60">
  <button  class="text-white text-3xl border-2 
  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
   from-amber-200 via-violet-600 to-sky-900 border-gray-500
    p-3 rounded-full"  on:click={()=>changeMode("even")}>Even</button>
  <button class="text-white border-2 
  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
   from-amber-200 via-violet-600 to-sky-900 border-gray-500
    p-3 text-3xl rounded-full"  on:click={()=>changeMode("odd")}>Odd </button>
  </div>
{/if}
{/if}
{/if}
</div>


