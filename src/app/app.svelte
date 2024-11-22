<script lang="ts">
  import { createContext } from "../stores/context.svelte";
  import Controller from "./controller.svelte";
  import Display from "./display.svelte";
  import type { Options } from "../stores/option-store.svelte";
  import AnimationFrame from "./animation-frame.svelte";
  import type { CounterEventParams } from "../stores/event-store.svelte";

  interface Props {
    options?: Partial<Options>;
  }

  const props: Props = $props();
  const ctx = createContext(props.options ?? {});

  export const method = {
    open: () => {
      // TODO: openStore.open 와 eventStore.emit 연동
      ctx.openStore.open();
      ctx.eventStore.emit("open", {});
    },
  };

  export const on = (...props: CounterEventParams) => {
    return ctx.eventStore.on(...props);
  };

  export const off = (...props: CounterEventParams) => {
    return ctx.eventStore.off(...props);
  };
</script>

{#if ctx.openStore.isOpen}
  <AnimationFrame>
    <Display />
    <Controller />
  </AnimationFrame>
{/if}
