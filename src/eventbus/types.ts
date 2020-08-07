export enum Events {
  LOGIN_REQUIRED = 'MICROAPP_LOGIN_REQUIRED',
  DID_UPDATE = 'MICROAPP_DID_UPDATE',
}

export type Handler = {
  event: Events,
  handler: Function,
}
