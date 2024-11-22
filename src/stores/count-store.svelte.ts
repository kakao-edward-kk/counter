export class CountStore {
  initCount = 0;
  count = $state(0);

  constructor(initCount: typeof this.count) {
    this.initCount = initCount;
    this.count = initCount;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = this.initCount;
  }
}
