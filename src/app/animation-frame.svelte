<script lang="ts">
  import { fade } from "svelte/transition";
  import { useContext } from "../stores/context.svelte";

  const { children } = $props();
  const { eventStore } = useContext();
</script>

<div
  transition:fade={{ duration: 150 }}
  ontransitionstart={() => eventStore.emit("beforeOpen", {})}
  ontransitionend={() => eventStore.emit("afterOpen", {})}
>
  {@render children()}
</div>
