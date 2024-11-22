import { getContext, setContext } from "svelte";

import { CountStore } from "./count-store.svelte";
import { OptionStore, type Options } from "./option-store.svelte";
import { OpenStore } from "./open-store.svelte";
import { EventStore } from "./event-store.svelte";

const CONTEXT_KEY = Symbol();

export function createContext(initOptions: Partial<Options>) {
  const optionStore = new OptionStore(initOptions);
  const openStore = new OpenStore();
  const countStore = new CountStore(0);
  const eventStore = new EventStore();

  return setContext(CONTEXT_KEY, {
    optionStore,
    openStore,
    countStore,
    eventStore,
  });
}

export const useContext = () => {
  return getContext<ReturnType<typeof createContext>>(CONTEXT_KEY);
};
