<script lang="ts">
import Install from "$lib/install.svelte";
import logo from '../images/eoo logo.webp'
let show:boolean=false


function reveal(){
    show=true
}

</script>

<div class="flex justify-center items-center flex-col mt-7">
{#if show}
<div class="flex flex-row space-x-2 mt-60">
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
<div class="flex  justify-center mt-5"><img class="w-30 h-36" src={logo} alt="even or odd logo"/>
</div>
<button on:click={reveal}  class="text-5xl text-white border-2 
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500 mt-7
  p-3 rounded-full">PLAY</button>
<a href="/records" style="background: var(--custom-gradient);" class="mt-10 text-2xl text-white
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


