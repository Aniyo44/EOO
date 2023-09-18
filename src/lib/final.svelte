<script lang="ts">
import sad from "../images/Goodies Face Sad.png"
import happy from "../images/Goodies Face Happy.png"
export let name:string=""
export let myname:string=""
export let myscore:number=0
export let scoredb2:number=0
export let score:number=0
export let score2:number=0
export let winner:boolean=false

</script>
<div class={( score===3 ? 'flex rounded-2xl mt-5 justify-center flex-col bg-gradient-to-r from-yellow-200 to-yellow-500 border-gray-500 border m-2' : 
'flex rounded-2xl mt-5 justify-center flex-col border-gray-500 border m-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400')}>
    
   
    <div class="  flex justify-center   p-2">
        {#if score===3}
        <p class="text-2xl italic font-bold text-white"> 
            <span 
            class="text-rose-700">{myname}</span> win !</p>
{:else}
 <p class="text-2xl italic font-bold text-white">
<span class="text-indigo-700">{name} </span> win !</p>
{/if}
 </div>
   <div class="flex flex-row justify-center space-x-6">
   
    <div class=" flex justify-center items-center flex-row space-x-1 ">
        <p class="text-gray-600 font-light italic" >your score: <span class="text-rose-700 font-medium"> {myscore} </span></p>
  <p class={(score-score2 >0 ?'text-white ':'text-rose-700 ')}>{score-score2 >0 ?'+':''}{score-score2}</p>
    </div>
    <div class=" flex justify-center items-center flex-row space-x-1">
        <p class="text-gray-600 font-light italic">{name} score: <span class="text-indigo-700 font-medium">{scoredb2}</span></p>

        <p class={(score2-score >0 ?'text-white ':'text-indigo-700 ')}>{score2-score >0 ?'+':''}{score2-score}</p>

    </div>

   </div>
   <div class="flex justify-center m-2">
   {#if winner}
   <img src={happy} class="w-28" alt="happy goodie"/>
     {:else}
     <img src={sad} class="w-28" alt="sad goodie"/>
     {/if}
   </div>

</div>