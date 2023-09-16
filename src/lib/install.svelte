<script lang="ts">
  import { onMount } from 'svelte';

  let deferredPrompt: any;

  // Add the event listener onMount
  const beforeInstallPromptHandler = (e: any) => {
      deferredPrompt = e;
  };

  onMount(() => {
      window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

      // Create a return function to remove the event listener when the component is unmounted
      return () => {
          window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
      };
  });

  $: showInstallButton = !!deferredPrompt;

  const installApp = async () => {
      if (deferredPrompt !== null) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
              deferredPrompt = null;
          }
      }
  };
</script>

<div>
  {#if showInstallButton}
  <button class="animate-bounce text-white p-2 rounded text-5xl animated-border 
  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400
  to-indigo-900" on:click={installApp}>Install</button>
  {/if}
</div>
