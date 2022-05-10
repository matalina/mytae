<script lang="ts">
import { activeMenu } from '../stores';
import Character from "./Character.svelte";
import Inventory from "./Inventory.svelte";
import Room from "./Room.svelte";
import Settings from './Settings.svelte';


function close() {
  $activeMenu = null;
}
</script>

{#if $activeMenu}
  <aside class="flex flex-col pane bg-white">
    {#if $activeMenu === 'character'}
      <Character />
    {/if}
    {#if $activeMenu === 'inventory'}
      <Inventory />
    {/if}
    {#if $activeMenu === 'room'}
      <Room />
    {/if}
    {#if $activeMenu === 'settings'}
      <Settings />
    {/if}
    <button class="p-3" on:click={close}>
      <i class="fa-solid fa-times"></i> close 
    </button>
  </aside>
{/if}

<style>
  aside {
    @apply absolute md:w-2/5 w-full h-full;
    top: 0;
    right: 0;
  }
</style>