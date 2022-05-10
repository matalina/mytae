<style global lang="postcss">
  @tailwind base;

  html, body { 
    @apply p-0 m-0 max-w-full max-h-full; 
  }

  @tailwind components;
  @tailwind utilities;

  .pane {
    @apply p-3 border rounded-md mb-3;
  }

  .pane.sidebar {
    @apply bg-white h-full;
    top: 0;
    right: 0;
  }
</style>