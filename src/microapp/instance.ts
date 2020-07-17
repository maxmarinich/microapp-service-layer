import { loadBundle } from '../api/methods/loadBundle';
import { loadTemplate } from '../api/methods/loadTemplate';
import { microappNamespace, microappCreateOptions } from '../constants';
import { Context, ContextInstance, CreateOptions, Options, Result } from './types';

const success = { ok: true };
const failed = { ok: false };

const context: Context = {
  [microappNamespace]: null,
};

const getInstance = (): ContextInstance => context[microappNamespace];

const getInstanceOptions = (): CreateOptions => {
  const instance = getInstance();
  return instance ? instance[microappCreateOptions] : {};
};

const isRegistered = (): boolean => Boolean(getInstance());

const unregister = (): void => {
  context[microappNamespace] = null;
};

const register = async (): Promise<Result> => {
  try {
    const data = await loadBundle();
    new Function('return' + data).apply(context);
  } catch (error) {
    throw error;
  }
  return isRegistered() ? success : failed;
};

const mount = async (options: Options): Promise<Result> => {
  const instance = getInstance();

  if (instance) {
    try {
      const { mount = true } = options;
      await instance.createApp({ ...options, mount });
      return success;
    } catch (error) {
      throw error;
    }
  }
  return failed;
};

export default function getMicroappInstance() {
  return {
    isRegistered,
    loadTemplate,
    mount,
    register,
    unregister,
    getInstanceOptions,
  };
}
