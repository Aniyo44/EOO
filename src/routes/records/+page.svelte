<script>
    import Just from "$lib/just.svelte";
    import { db } from "../../database/db";
      import { liveQuery } from "dexie";
      import Board from "$lib/board.svelte";
      import home from "../../images/home.webp"
	import Final from "$lib/final.svelte";
	import Install from "$lib/install.svelte";
      let records = liveQuery(
        () => db.records.toArray()
      );
  
  </script>
  <Just/>
  <div class="flex justify-center">   
  <a href="/"><img class="w-12 scale-75" src={home} alt="home button"/></a>
  </div>
          {#if $records}
            {#each $records as record (record.id)}
          
            <Board  showRound={false}  blue_side={record.name1} red_side={record.name2} score={record.score1} 
            score2={record.score2} choice={record.mode} otherChoice={record.otherMode}  />
            
            {/each}
          {/if}
        
  
  