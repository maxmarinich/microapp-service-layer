import { EventBus, Events, Handler } from './types';

class Eventbus implements EventBus {
  protected eventsQueue: Handler[] = [];

  constructor(eventsQueue: Handler[] = []) {
    this.eventsQueue = eventsQueue;
  }

  on(event: Events, handler: Function, context: unknown) {
    if (typeof context === 'undefined') {
      context = handler;
    }
    this.eventsQueue.push({ event, handler: handler.bind(context) });
  }

  off(event?: Events) {
    if (event) {
      this.eventsQueue = this.eventsQueue.filter((item) => {
        return item.event !== event;
      });
    } else {
      this.eventsQueue = [];
    }
  }

  emit(event: Events, params?: unknown) {
    this.eventsQueue.forEach((handler) => {
      if (handler.event === event) {
        handler.handler(params);
      }
    });
  }
}

export { Events, EventBus };
export default new Eventbus();