export interface MicroappServiceLayer {
  microappInstance: MicroappInstance | null;

  isMicroappInstanceRegistered: boolean;

  registerMicroappInstance(): Promise<Result>;

  unregisterMicroappInstance(): void;

  createApp(options: CreateAppOptions): Promise<App | null>;

  createTemplate(options: CreateTemplateOptions): Promise<Template>;
}

export type MicroappInstance = {
  createApp: (options: CreateAppOptions) => Promise<App | null>;
  getInitialOptions?: () => Record<string, unknown>;
};

export type CreateAppOptions = {
  appId?: string;
  elementOrSelector: Element | string;
  eventbus?: unknown;
  mount?: boolean;
  state?: Record<string, any>;
  beforeCreate?: (...args: unknown[]) => void;
};

export type CreateTemplateOptions = {
  path: string;
  [key: string]: any;
};

export type Template = {
  html: string;
  state: any;
  styles: any;
  template?: string;
};

export type Result = {
  ok: boolean;
};

export type App = {
  app: unknown;
  router: unknown;
  store: unknown;
};
