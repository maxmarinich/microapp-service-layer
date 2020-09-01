import { EventBus, Events, UpdateTypes, Handler } from './types';

export default class Instance implements EventBus {
  protected eventsQueue: Handler[] = [];

  constructor(eventsQueue: Handler[] = []) {
    this.eventsQueue = eventsQueue;
  }

  on(event: Events, handler: Function, context?: unknown) {
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
const Eventbus = new Instance();

export { Eventbus, Events, UpdateTypes, EventBus };
