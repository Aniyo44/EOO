<script lang="ts">
    import { onMount } from 'svelte';
  
    let deferredPrompt:any;
  
    onMount(() => {
      window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
      });
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
    <button on:click={installApp}>Install App</button>
{/if}
  </div>
  