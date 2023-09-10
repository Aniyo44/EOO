<!-- InstallPrompt.svelte -->
<script>
    let deferredPrompt;

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });

    // Show the install button when deferredPrompt is available
    $: showInstallButton = !!deferredPrompt;

    // Handle install button click
    function installApp() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        }
    }

    // Hide the install button when the PWA is installed
    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
    });
</script>

<div>
    {#if showInstallButton}
        <button on:click={installApp}>Install App</button>
    {/if}
</div>
