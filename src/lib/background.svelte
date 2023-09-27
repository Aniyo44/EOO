<script>
  import no_sound from '../images/no sound.webp'
  import sound_img from '../images/sound.webp'

  let sound = true;

  // Function to toggle sound
  function toggleSound() {
    sound = !sound;
    
    // Get all audio elements
    
  }

  // Function to handle the unmute event
  
</script>



<button on:click={toggleSound}>
  {#if sound}
    <img class="w-6 h-6" src={sound_img} alt="sound-button" />
  {:else}
    <img class="w-6 h-6" src={no_sound} alt="no_sound-button" />
  {/if}
</button>
