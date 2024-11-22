<script lang="ts">
  import { useContext } from "../stores/context.svelte";

  const { countStore, openStore } = useContext();
</script>

<button onclick={() => countStore.decrement()}>-</button>
<button onclick={() => countStore.increment()}>+</button>
<button onclick={() => countStore.reset()}>reset</button>
<button onclick={() => openStore.close()}>close</button>
