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

  async createTemplate(options: CreateTemplateOptions): Promise<Template> {
    return await loadTemplate(options);
  }

  async createApp(options: CreateAppOptions): Promise<Result> {
    const instance = this.microappInstance;

    if (instance) {
      try {
        await instance.createApp(options); // { app, router, store }
        return success;
      } catch (error) {
        throw error;
      }
    }
    return failed;
  }
}

export default new MSL();
