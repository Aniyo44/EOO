<!-- FriendList.svelte -->
<script>
    import { liveQuery } from "dexie";
    import { db } from "../database/db";
    let scores = liveQuery(
      () => db.scores.toArray()
    );
  
  </script>
  <ul>
    {#if $scores}
      {#each $scores as score (score.id)}
        <li>{score.name}, {score.score}</li>
      {/each}
    {/if}
  </ul>
  