<script lang="ts">
    import "../tailwind.css";
    import wonrof from '../images/logo-v2.webp'
    import no_sound from '../images/no sound.webp'
    import sound_img from '../images/sound.webp'
    import logo from '../images/eoo logo.webp'
    let sound:Boolean=true
    function sound_no_sound(){
      sound=!sound
    }
  </script>
  <main style="background: var(--custom-gradient);" class="min-h-screen" > 

    <nav>
<div > <a  href="/"><img class="w-14 h-14" src={logo} alt="even or odd logo"/></a> </div>
<div class="absolute top-0 right-3 ">
   <img  class="w-20 h-16" src={wonrof} alt="wonrof logo"/>

  
</div>
<div class="absolute top-9 right-9">
  <button on:click={sound_no_sound}>
    {#if sound}
    <img class="w-6 h-6" src={sound_img} alt="sound-button">
  {:else}
  <img  class="w-6 h-6" src={no_sound} alt="no_sound-button"/>
  {/if}
  </button>
</div>


    </nav> 
  <slot />
 
</main>
  