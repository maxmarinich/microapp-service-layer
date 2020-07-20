import { loadBundle } from '../api/methods/loadBundle';
import { loadTemplate } from '../api/methods/loadTemplate';
import { microappNamespace } from '../constants';
import { Context, MicroappInstance, Options, Result } from './types';

const success = { ok: true };
const failed = { ok: false };

const context: Context = {
  [microappNamespace]: null,
};

const getInstance = (): MicroappInstance => {
  return context[microappNamespace];
};

const isRegistered = (): boolean => {
  return Boolean(getInstance());
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
      await instance.createApp(options);
      return success;
    } catch (error) {
      throw error;
    }
  }
  return failed;
};

const unregister = (): void => {
  context[microappNamespace] = null;
};

export default function getMicroappInstance() {
  return {
    getInstance,
    loadBundle,
    loadTemplate,
    isRegistered,
    register,
    unregister,
    mount,
  };
}
