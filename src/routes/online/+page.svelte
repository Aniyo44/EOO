<script>
	import Slice from "$lib/slice.svelte";

  
</script>
<div class="flex ">
<div class="mt-20 w-full h-40 flex m-5"> 
  <div class="bg-blue-600 basis-1/5">blue side</div>
<div class="basis-3/5">
  <Slice/>
</div>
  <div class=" basis-1/5 bg-green-500 flex justify-end">red side</div>

</div>
</div>