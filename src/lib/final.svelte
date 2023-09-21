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
<div class={( score ===3 ? 'flex rounded-2xl portrait-only mt-5 justify-center flex-col m-5 bg-gradient-to-r from-yellow-400 via-gray-300 to-purple-500 ':'flex rounded-2xl portrait-only mt-5 justify-center flex-col m-5 bg-gradient-to-r from-purple-500 via-gray-300 to-yellow-400 ')}>
    
   
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
 <div class="justify-center flex flex-row ">


   
    <div class=" flex-1 justify-center ml-1 items-center flex text-center">
        <p class="text-yellow-900 font-light italic bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-3xl p-1" >your total score:<span class="text-rose-700 font-medium">{myscore}</span>  <span class={(score-score2 >0 ?' text-green-700 font-bold':' text-red-500 font-bold ')}>{score-score2 >0 ?'+':''}{score-score2}</span></p>
    </div>
    <div class="flex flex-1 justify-center mb-1 ">
      {#if winner}
      <img src={happy} class="w-28" alt="happy goodie"/>
        {:else}
        <img src={sad} class="w-28" alt="sad goodie"/>
        {/if}
      </div>

    <div class=" flex justify-center items-center flex-1 mr-1 text-center">
        <p class="text-yellow-900 font-light bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-3xl p-1 italic">{name} total score:<span class="text-indigo-700 font-medium"> {scoredb2}  <span class={(score2-score >0 ?'text-green-700 font-bold ':'text-red-500 font-bold ')}>{score2-score >0 ?'+':''}{score2-score}</span></span></p>


    </div>

   
    </div>
 

</div>
    <!-- desktop -->
    <div class="flex justify-center">
    <div class={( score ===3 ? 'flex rounded-2xl landscape-only w-fit md:p-3  mt-5 justify-center flex-col m-5 bg-gradient-to-r from-yellow-400 via-gray-300 to-purple-500 ':'flex rounded-2xl  md:p-3 w-fit landscape-only mt-5 justify-center flex-col m-5 bg-gradient-to-r from-purple-500 via-gray-300 to-yellow-400 ')}>
    
   
      <div class="  flex justify-center   p-2">
          {#if score===3}
          <p class="text-2xl md:text-4xl italic font-bold text-white"> 
              <span 
              class="text-rose-700">{myname}</span> win !</p>
  {:else}
   <p class="text-2xl md:text-4xl italic font-bold text-white">
  <span class="text-indigo-700">{name} </span> win !</p>
  {/if}
   </div>
   <div class="justify-center flex flex-row ">
  
  
     
      <div class="  justify-center ml-1 items-center flex text-center">
          <p class="text-yellow-900 md:text-3xl md:p-3 p-2 font-light italic bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-3xl " >your total score:<span class="text-rose-700 font-medium">{myscore}</span>  <span class={(score-score2 >0 ?' text-green-700 font-bold':' text-red-500 font-bold ')}>{score-score2 >0 ?'+':''}{score-score2}</span></p>
      </div>
      <div class="flex  justify-center mb-1 ">
        {#if winner}
        <img src={happy} class="w-28 md:w-36" alt="happy goodie"/>
          {:else}
          <img src={sad} class="w-28 md:36" alt="sad goodie"/>
          {/if}
        </div>
  
      <div class=" flex justify-center items-center  mr-1 text-center">
          <p class="text-yellow-900 md:text-3xl md:p-3  p-2 font-light bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-3xl  italic">{name} total score:<span class="text-indigo-700 font-medium"> {scoredb2}  <span class={(score2-score >0 ?'text-green-700 font-bold ':'text-red-500 font-bold ')}>{score2-score >0 ?'+':''}{score2-score}</span></span></p>
  
  
      </div>
  
     
      </div>
   
  
  </div>
    </div>