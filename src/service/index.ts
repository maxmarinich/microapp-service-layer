import EventBus from '../eventbus';
import { loadBundle } from '../api/methods/loadBundle';
import { loadTemplate } from '../api/methods/loadTemplate';
import { microappNamespace } from '../constants';
import {
  MicroappServiceLayer,
  MicroappInstance,
  CreateAppOptions,
  CreateTemplateOptions,
  Template,
  Result,
  App,
} from '../types';

const success = { ok: true };
const failed = { ok: false };

class MSL implements MicroappServiceLayer {
  private [microappNamespace]: MicroappInstance | null = null;

  get microappInstance(): MicroappInstance | null {
    return this[microappNamespace];
  }

  get isMicroappInstanceRegistered(): boolean {
    return Boolean(this.microappInstance);
  }

  unregisterMicroappInstance(): void {
    this[microappNamespace] = null;
  }

  async registerMicroappInstance(): Promise<Result> {
    try {
      const data = await loadBundle();
      new Function('return' + data).apply(this);
    } catch (error) {
      throw error;
    }
    return this.isMicroappInstanceRegistered ? success : failed;
  }

  createTemplate(options: CreateTemplateOptions): Promise<Template> {
    return loadTemplate({ eventbus: EventBus, ...options });
  }

  async createApp(options: CreateAppOptions): Promise<App | null> {
    const instance = this.microappInstance;

    if (instance) {
      try {
        return instance.createApp({ eventbus: EventBus, ...options });
      } catch (error) {
        throw error;
      }
    }
    return null;
  }
}

export default new MSL();
