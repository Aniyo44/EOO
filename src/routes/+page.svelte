<script lang="ts">
import full_left from "../images/right-four.webp"
import Install from "$lib/install.svelte";
let show:boolean=false


function reveal(){
    show=true
}

</script>
<div class="flex justify-center items-center flex-col mt-10">
<h1>Even or Odd</h1>
{#if show}
<a href="/offline" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-2 rounded-full">offline</a>
<a href="/online" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-2 rounded-full">online</a>
{:else}
<button on:click={reveal}  class="text-white border-2 
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500
  p-2 rounded-full">PLAY</button>
<a href="/records" style="background: var(--custom-gradient);" class="text-white border-2 
 border-gray-500
  p-1 rounded-full">records</a>
{/if}
<img src={full_left} class="w-40 h-40" />




</div>
<div class="absolute bottom-16  right-1/2 translate-x-1/2 ">
    <div>
    <button class="animate-bounce text-white p-2 rounded text-5xl animated-border 
    bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">install</button>
</div>
</div>


<Install/>