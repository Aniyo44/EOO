<script lang="ts">
import Install from "$lib/install.svelte";
import logo from '../images/eoo logo.webp'
import { db } from "../database/db";
let show:boolean=false
let myscore:number=0
async function fetch(){
  try{
    const data= await db.scores.get(6)
    if(data){
      myscore =data.score

    }
  }
  catch(err){
    console.log(err)
  }

}

function reveal(){
    show=true
}
fetch()

</script>

<div class="flex justify-center items-center flex-col ">
{#if show}
<div class="  absolute top-40 portrait-only" > 
  <p class="text-yellow-900 font-light 
  italic bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100
   to-gray-900 rounded-3xl p-4 text-3xl" >your local score:<span class="text-rose-700 font-medium">{myscore}</span>  </p>
</div>
<div class="  absolute top-24 landscape-only" > 
  <p class="text-yellow-900 font-light 
  italic bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100
   to-gray-900 rounded-3xl p-4 text-3xl" >your local score:<span class="text-rose-700 font-medium">{myscore}</span>  </p>
</div>

<div class="flex  min-h-screen justify-center items-center  ">
 
<div class="flex flex-row space-x-2 ">
<a href="/offline" class="text-white text-3xl border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-3 rounded-full">offline</a>
<a href="/online" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-3 text-3xl rounded-full">online</a>
</div>
</div>

{:else}
<div class="flex  justify-center mt-5"><img class="w-30 h-36" src={logo} alt="even or odd logo"/>
</div>
<button on:click={reveal}  class="text-5xl text-white border-2 
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500 mt-7
  p-3 rounded-full">PLAY</button>
<a href="/records" style="background: var(--custom-gradient);" class="mt-10 text-3xl md:text-4xl text-white
 border-2 
 border-gray-500
  p-2 rounded-full">records</a>
  <div class="absolute bottom-1  right-1/2 translate-x-1/2 ">
    <div>
      <Install/>
      
</div>
</div>

{/if}



</div>



