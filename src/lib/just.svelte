<!-- FriendList.svelte -->
<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from "../database/db";
    let scores = liveQuery(
      () => db.scores.toArray()
    );
   // Create a computed property to sort the scores by score value
   let sortedScores:any[] = [];

$: if ($scores) {
  sortedScores = $scores.slice().sort((a, b) => b.score - a.score);
}

</script>
<div class="flex justify-center mt-5 ">
<div class="  border border-gray-600 text-3xl w-fit p-2 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 ">
<ul>
{#if sortedScores.length > 0}
  {#each sortedScores as score, index (score.id)}
    <li class="border-purple-500 border"> 
      <p class="inline  italic text-teal-300 border-r border-purple-500  p-1">{index + 1}</p> 

      <p class="inline text-white">{score.score}</p>

      <p class={(score.score<10 ?"inline text-yellow-900 p-1 ml-4 ":"inline text-yellow-900 p-1 ")}>{score.name}</p>

  </li>
  {/each}
{/if}
</ul>
</div>
</div>






  