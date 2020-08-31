export interface EventBus {
  on: (event: Events, cb: Function, ctx?: unknown) => void;
  off: (event?: Events) => void;
  emit: (event: Events, params?: unknown) => void;
}

export enum Events {
  LOGIN_REQUIRED = 'MICROAPP_LOGIN_REQUIRED',
  DID_UPDATE = 'MICROAPP_DID_UPDATE',
  BEFORE_DESTROY = 'MICROAPP_BEFORE_DESTROY',
}

export enum UpdateTypes {
  USER = 'USER',
}

export type Handler = {
  event: Events,
  handler: Function,
}
