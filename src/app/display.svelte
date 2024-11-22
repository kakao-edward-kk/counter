<script lang="ts">
  import { useContext } from "../stores/context.svelte";

  const { countStore } = useContext();
</script>

<p>Counter {countStore.count}</p>
