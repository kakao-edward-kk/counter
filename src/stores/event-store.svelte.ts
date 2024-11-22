export type OpenEventCallback = (params: unknown) => void;
export type CloseEventCallback = (params: unknown) => void;
export type DestroyEventCallback = (params: unknown) => void;

export type CounterEventMap = {
  open: OpenEventCallback;
  beforeOpen: OpenEventCallback;
  afterOpen: OpenEventCallback;
  close: CloseEventCallback;
  beforeClose: CloseEventCallback;
  afterClose: CloseEventCallback;
};

export type CounterEventParams = [
  eventName: keyof CounterEventMap,
  callback: CounterEventMap[keyof CounterEventMap]
];

export class EventStore {
  listeners: Record<string, Function[]> = {};

  getListeners(eventName: string): Function[] {
    return this.listeners[eventName] ?? [];
  }

  emit<K extends keyof CounterEventMap>(
    eventName: K,
    payload: Parameters<CounterEventMap[K]>[0]
  ) {
    this.getListeners(eventName).forEach((cb) => cb(payload));
    return this;
  }

  on<K extends keyof CounterEventMap>(
    eventName: K,
    callback: CounterEventMap[K]
  ) {
    this.listeners[eventName] = this.getListeners(eventName).concat(callback);
    return this;
  }

  off<K extends keyof CounterEventMap>(
    eventName: K,
    callback: CounterEventMap[K]
  ) {
    this.listeners[eventName] = this.getListeners(eventName).filter(
      (cb) => cb !== callback
    );
    return this;
  }

  offAll() {
    this.listeners = {};
    return this;
  }
}
