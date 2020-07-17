export type Context = {
  [key: string]: ContextInstance;
};

export type ContextInstance = {
  createApp: (options: Options) => Promise<void>;
  createOptions: CreateOptions;
} | null;

export type Options = {
  mount?: boolean;
  elementOrSelector?: Element | string;
};

export type Result = {
  ok: boolean;
};

export type CreateOptions = Record<string, unknown>;
