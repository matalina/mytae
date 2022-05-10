<script lang="ts">
  let command = '';

  function doCommand(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      // do command
      alert(command);
    }
  }

</script>

<div id="command-line" class="pane flex mb-0 w-full">
  <button disabled class="border-0 p-3"><i class="fa-solid fa-terminal"></i></button>
  <input 
    bind:value={command} 
    on:keydown={doCommand}
    class="input w-full p-3 rounded-md rounded-r-none" 
    placeholder="<verb> <noun> press Enter" 
  />
</div>