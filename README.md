# microapp-service-layer

### Api
```typescript
interface MicroappServiceLayer {
  microappInstance: MicroappInstance | null;

  isMicroappInstanceRegistered: boolean;

  registerMicroappInstance(): Promise<Result>;

  unregisterMicroappInstance(): void;

  createTemplate(options: CreateTemplateOptions): Promise<Template>;

  createApp(options: CreateAppOptions): Promise<Result>;
}

type MicroappInstance = {
  createApp: (options: CreateAppOptions) => Promise<void>;
  getInitialOptions?: () => Record<string, unknown>;
};

type CreateAppOptions = {
  appId?: string;
  mount?: boolean;
  elementOrSelector: Element | string;
  state?: Record<string, any>;
  beforeCreate?: (...args: unknown[]) => void;
};

type CreateTemplateOptions = {
  path: string;
  [key: string]: any;
};

type Template = {
  html: string;
  state: string;
  styles: string;
  template?: string;
};

type Result = {
  ok: boolean;
};
```

.envs
```
MSL_API_URL || http://localhost:5000
```

