<script lang="ts">
    export let blue_side:string=""
    export let red_side:string=""
    export let score:number=0
    export let score2:number=0
    export let choice:string=""
    export let otherChoice:string=""
    export let round:number=1
    export let showRound:boolean=true

</script>


<div class="flex mt-2 ">
    <div class=" w-full  
    h-20 rounded 
     border-gray-600 border-x border-t bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 flex m-5 mb-0"> 
      <div class="text-rose-700  flex-col flex justify-center text-center basis-1/4">
        <p class="text-2xl ml-1 font-bold">{blue_side}<p>
     <p class="italic text-1xl font-extrabold text-white"> {choice}<p/></div>
    <div class="basis-2/4 flex justify-center items-center">
    
      
      {#if score>0||score2>0}
      <p class="text-5xl text-white"> <span class="text-rose-700">{score} </span> vs <span class="text-indigo-700"> {score2}</span></p>
      {/if}
    </div>

    
      <div class=" basis-1/4  flex flex-col text-center  justify-center">
      <p class="text-2xl mr-1 text-indigo-700  font-bold"> {red_side} </p>
      <p class="text-white  italic text-1xl font-extrabold" >{otherChoice} </p>
    </div>
    
    </div>
    </div>
    {#if showRound}
    <div class="flex justify-center">
      <p class=" w-fit h-fit  
      text-2xl border-gray-600 border-x border-b  bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 text-white 
      italic font-light p-2 rounded"> Round:<span class="font-bold">{round} </span>
      </p>
      </div>
      {/if}