<script lang="ts">
	import { activeMenu } from '../stores';

  function toggleMenu(active: string) {
    if($activeMenu === active) {
      $activeMenu = null;
    } else {
      $activeMenu = active;
    }
  }
</script>

<nav class="pane flex mb-0 w-full md:w-min">
  <button on:click={() => toggleMenu('character')}>
    <i class="fa-solid fa-address-card"></i>
  </button>
  <button on:click={() => toggleMenu('inventory')}>
    <i class="fa-solid fa-sack"></i> 
  </button>
  <button on:click={() => toggleMenu('room')}>
    <i class="fa-solid fa-location-crosshairs"></i>
  </button>
  <button on:click={() => toggleMenu('settings')}>
    <i class="fa-solid fa-gear"></i>
  </button>
</nav>

<style>
  nav { 
    @apply p-3;
  }
  button {
    @apply p-3;
  }
</style>