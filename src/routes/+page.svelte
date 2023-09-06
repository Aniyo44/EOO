<script lang="ts">
let show:boolean=false

function reveal(){
    show=true
}
</script>
<div class="flex justify-center items-center flex-col mt-10">
<h1>Even or Odd</h1>
{#if show}
<a href="/offline">offline</a>
<a href="/online">online</a>
{:else}
<button on:click={reveal}>Play</button>
{/if}
</div>
