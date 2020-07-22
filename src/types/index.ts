export interface MicroappServiceLayer {
  microappInstance: MicroappInstance | null;

  isMicroappInstanceRegistered: boolean;

  registerMicroappInstance(): Promise<Result>;

  unregisterMicroappInstance(): void;

  createApp(options: CreateAppOptions): Promise<Result>;

  createTemplate(options: CreateTemplateOptions): Promise<Template>;
}

export type MicroappInstance = {
  createApp: (options: CreateAppOptions) => Promise<void>;
  getInitialOptions?: () => Record<string, unknown>;
};

export type CreateAppOptions = {
  elementOrSelector: Element | string;
  appId?: string;
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
  state: string;
  styles: string;
  template?: string;
};

export type Result = {
  ok: boolean;
};
