<script lang="ts">
    import "../tailwind.css";
    import wonrof from '../images/logo-v2.webp'
    import logo from '../images/eoo logo.webp'
   
  </script>
  <main style="background: var(--custom-gradient);" class="min-h-screen" > 

    <nav>
<div > <a  href="/"><img class="w-14 h-14" src={logo} alt="even or odd logo"/></a> </div>
<div class="absolute top-0 right-3 ">
   <img  class="w-20 h-16" src={wonrof} alt="wonrof logo"/>

  
</div>



    </nav> 
  <slot />
 
</main>
  