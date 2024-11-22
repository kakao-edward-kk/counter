export type OpenEventCallback = (params: unknown) => void;
export type CloseEventCallback = (params: unknown) => void;
export type DestroyEventCallback = (params: unknown) => void;

export interface CounterEventMap {
  open: OpenEventCallback;
  beforeOpen: OpenEventCallback;
  afterOpen: OpenEventCallback;
  close: CloseEventCallback;
  beforeClose: CloseEventCallback;
  afterClose: CloseEventCallback;
}

export function createEventHandler() {
  let listeners: Record<string, Function[]> = {};

  function getListeners(eventName: string): Function[] {
    return listeners[eventName] ?? [];
  }

  function emit<K extends keyof CounterEventMap>(
    eventName: K,
    payload: Parameters<CounterEventMap[K]>[0]
  ) {
    getListeners(eventName).forEach((cb) => cb(payload));
    return self;
  }

  function on<K extends keyof CounterEventMap>(
    eventName: K,
    callback: CounterEventMap[K]
  ) {
    listeners[eventName] = getListeners(eventName).concat(callback);
    return self;
  }

  function off<K extends keyof CounterEventMap>(
    eventName: K,
    callback: CounterEventMap[K]
  ) {
    listeners[eventName] = getListeners(eventName).filter(
      (cb) => cb !== callback
    );
    return self;
  }

  function offAll() {
    listeners = {};
    return self;
  }

  const self = {
    emit,
    off,
    offAll,
    on,
  };
  return self;
}
