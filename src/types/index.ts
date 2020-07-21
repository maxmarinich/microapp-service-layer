export interface MicroappServiceLayer {
  microappInstance: MicroappInstance | null;

  isMicroappInstanceRegistered: boolean;

  registerMicroappInstance(): Promise<Result>;

  unregisterMicroappInstance(): void;

  createTemplate(options: CreateTemplateOptions): Promise<Template>;

  createApp(options: CreateAppOptions): Promise<Result>;
}

export type MicroappInstance = {
  createApp: (options: CreateAppOptions) => Promise<void>;
  getInitialOptions?: () => Record<string, unknown>;
};

export type CreateAppOptions = {
  appId?: string;
  mount?: boolean;
  elementOrSelector: Element | string;
  state?: Record<string, any>;
  beforeCreate?: (...args: unknown[]) => void;
};

export type CreateTemplateOptions = {
  path?: string;
};

export type Template = {
  html?: string;
  state?: string;
  styles?: string;
  template?: string;
};

export type Result = {
  ok: boolean;
};
