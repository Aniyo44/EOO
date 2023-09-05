<script lang="ts">
let modeChoice:string=""
let numberChoice:number=1
let random:number=0
let thridScreen:boolean=false
let numberScreen:boolean=false

let winner:boolean=false
let round:number=1
let score:number=0
let score2:number=0

function changeMode(s:string){
    modeChoice=s
    numberScreen=true
}
function changeNumber(n:number){
    numberChoice=n
    thridScreen=true
    numberScreen=false
    random=Math.floor(Math.random() * 5)+1
    check()
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

}

</script>
<div class="flex justify-center items-center flex-col">
    <!-- the last screen the one with won or lost the game-->

{#if score ===3 || score2 ===3}
<p>last round </p>
<p>{modeChoice}</p>
<p>{numberChoice}</p>
<p>{random}</p>
<p>game over</p>
<p>blue :{score} vs red: {score2}</p>
{#if score===3}
<p>blue side win</p>
{:else}
<p>red side win</p>
{/if}
<button on:click={restart}>Restart</button>
<!-- thrid screen the one with the lost or won the round -->
{:else}
{#if thridScreen}
<p>Round:{round}</p>
    {#if winner}
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
      <button on:click={next}>go next round</button>

    {:else}
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

      <button on:click={next}>go next round</button>


    {/if}
    <!-- second screen the one with numbers and we keep looping over it -->
  {:else}
 {#if modeChoice.length >0 && numberScreen}   
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


