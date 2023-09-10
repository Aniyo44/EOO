<script lang="ts">
import full_left from "../images/right-four.webp"
import Install from "$lib/install.svelte";
let show:boolean=false


function reveal(){
    show=true
}

</script>
<div class="flex  justify-center mt-28"><h1>Even or Odd</h1>
</div>
<div class="flex justify-center items-center flex-col mt-20">
{#if show}
<div class="flex flex-row space-x-2">
<a href="/offline" class="text-white text-3xl border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-3 rounded-full">offline</a>
<a href="/online" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-3 text-3xl rounded-full">online</a>
</div>
{:else}
<button on:click={reveal}  class="text-5xl text-white border-2 
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500
  p-3 rounded-full">PLAY</button>
<a href="/records" style="background: var(--custom-gradient);" class="mt-10 text-2xl
p-2 text-white
 border-2 
 border-gray-500
  p-1 rounded-full">records</a>
{/if}




</div>
<div class="absolute bottom-1  right-1/2 translate-x-1/2 ">
    <div>
      <Install/>
      
</div>
</div>


