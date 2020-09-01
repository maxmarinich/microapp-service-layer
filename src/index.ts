import MicroappServiceLayer from './service';
import { configureApi } from './api/configure';
import EventbusInstance, { Events, UpdateTypes } from './eventbus';

const Eventbus = new EventbusInstance();

export * from './constants';
export default MicroappServiceLayer;
export { Eventbus, Events, UpdateTypes, configureApi };
