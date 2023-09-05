<script lang="ts">
let modeChoice:string=""
let numberChoice:number=1
let random:number=0
let lastScreen:boolean=false
let numberScreen:boolean=false

let winner:boolean=false
let round:number=1
let score:number=0
let score2:number=0

console.log("initaliy",random)
function changeMode(s:string){
    modeChoice=s
    numberScreen=true
}
function changeNumber(n:number){
    numberChoice=n
    lastScreen=true
    numberScreen=false
    random=Math.floor(Math.random() * 5)+1
    console.log(random)
    check()
}
function next(){
    lastScreen=false
    numberScreen=true
}
function check(){
    console.log(random)
    const sum=numberChoice+random
    console.log(sum)
    if((modeChoice==="even"&& sum % 2 === 0)||(modeChoice==="odd"&& sum % 2 !== 0)){
        winner=true
        score ++
    }else{
        score2 ++
    }
   
}


</script>
<div class="flex justify-center items-center flex-col">
<p>choose</p>
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
{:else}
{#if lastScreen}
    {#if winner}
      <p>You're a Winner!</p>
      <p>{modeChoice}</p>

      <p>{numberChoice}</p>
      <p>{random}</p>
      <button on:click={next}>go next round</button>

    {:else}
      <p>Sorry, You Lost.</p>
      <p>{modeChoice}</p>

      <p>{numberChoice}</p>
      <p>{random}</p>

      <button on:click={next}>go next round</button>


    {/if}
  {:else}
 {#if modeChoice.length >0 && numberScreen}   
 <p>{modeChoice}</p>
 {#if score>0||score2>0}
 <p>blue:{score} vs red:{score2}</p>
 {/if}
 <div class="flex justify-center flex-row space-x-2">
<button on:click={()=>changeNumber(1)}>1</button>
<button on:click={()=>changeNumber(2)}>2</button>
<button on:click={()=>changeNumber(3)}>3</button>
<button on:click={()=>changeNumber(4)}>4</button>
<button on:click={()=>changeNumber(5)}>5</button>
 </div>
{:else}
 <div class="flex flex-row space-x-2">
<button on:click={()=>changeMode("even")} >Even</button>
<button on:click={()=>changeMode("odd")} >Odd</button>
</div>
{/if}
{/if}
{/if}
</div>


