<script lang="ts">
import full_left from "../images/right-four.webp"
let show:boolean=false
let deferredPrompt:any;

        // Listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            showInstallButton();
        });

        // Show the install button
        function showInstallButton() {
            const installButton:any = document.getElementById('installButton');
            installButton.style.display = 'block';
            installButton.addEventListener('click', () => {
                hideInstallButton();
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult:any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                });
            });
        }

        // Hide the install button
        function hideInstallButton() {
            const installButton:any = document.getElementById('installButton');
            installButton.style.display = 'none';
        }

        // Detect when the PWA was successfully installed
        window.addEventListener('appinstalled', () => {
            hideInstallButton();
            deferredPrompt = null;
            console.log('PWA was installed');
        });


function reveal(){
    show=true
}

</script>
<div class="flex justify-center items-center flex-col mt-10">
<h1>Even or Odd</h1>
{#if show}
<a href="/offline" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-2 rounded-full">offline</a>
<a href="/online" class="text-white border-2 
bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
 from-amber-200 via-violet-600 to-sky-900 border-gray-500
  p-2 rounded-full">online</a>
{:else}
<button on:click={reveal}  class="text-white border-2 
bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-gray-300 via-fuchsia-600 to-orange-600 border-gray-500
  p-2 rounded-full">PLAY</button>
<a href="/records" style="background: var(--custom-gradient);" class="text-white border-2 
 border-gray-500
  p-1 rounded-full">records</a>
{/if}
<img src={full_left} class="w-40 h-40" />




</div>
<div class="absolute bottom-16  right-1/2 translate-x-1/2 ">
    <div>
    <button class="animate-bounce text-white p-2 rounded text-5xl animated-border 
    bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">install</button>
</div>
</div>


<button id="installButton">Install App</button>
