export type Context = {
  [key: string]: MicroappInstance;
};

export type MicroappInstance = {
  createApp: (options: Options) => Promise<void>;
  getInitialOptions?: () => Record<string, unknown>;
} | null;

export type Options = {
  elementOrSelector: Element | string;
};

export type Result = {
  ok: boolean;
};
