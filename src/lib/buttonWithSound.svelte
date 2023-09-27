<script lang="ts">
    import { onMount } from "svelte";
    import buble from "../audio/458906__matrixxx__retro-bubble-shot.wav"
  
    
    let audio: HTMLAudioElement;

    // Load the sound effect when the component mounts
    onMount(() => {
        audio = new Audio(buble);
    });
  
    // Function to play the sound effect and trigger the button's action
    function playSoundAndAction() {
      audio.play(); // Play the sound effect
      // Trigger the button's action (you can pass this action as a prop)
      if ($$props.onClick) {
        $$props.onClick();
      }
    }
  </script>
  
  <button on:click={playSoundAndAction} {...$$props}>
    <slot />
  </button>
  
  <style>
    /* Add your button styling here */
  </style>
  