<!-- FriendList.svelte -->
<script>
    import { liveQuery } from "dexie";
    import { db } from "../database/db";
    let friends = liveQuery(
      () => db.scores.toArray()
    );
  
  </script>
  <ul>
    {#if $friends}
      {#each $friends as friend (friend.id)}
        <li>{friend.name}, {friend.score}</li>
      {/each}
    {/if}
  </ul>
  