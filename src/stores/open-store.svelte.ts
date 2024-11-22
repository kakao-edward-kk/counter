import { useContext } from "./context.svelte";

export class OpenStore {
  isOpen = $state(false);

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
