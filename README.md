# microapp-service-layer

### Example
```typescript
import MSL, { microappId } from 'microapp-service-layer';
import MicroappEventBus, { Events } from 'microapp-service-layer/lib/eventbus';

MSL.createApp({ elementOrSelector: `#${microappId}` });
MicroappEventBus.emit(Events.DID_UPDATE, { created: true });
```

### Api
```typescript
interface MicroappServiceLayer {
  microappInstance: MicroappInstance | null;

  isMicroappInstanceRegistered: boolean;

  registerMicroappInstance(): Promise<Result>;

  unregisterMicroappInstance(): void;

  createTemplate(options: CreateTemplateOptions): Promise<Template>;

  createApp(options: CreateAppOptions): Promise<App | null>;
}

type MicroappInstance = {
  createApp: (options: CreateAppOptions) => Promise<App | null>;
  getInitialOptions?: () => Record<string, unknown>;
};

type CreateAppOptions = {
  appId?: string;
  elementOrSelector: Element | string;
  eventbus?: unknown;
  mount?: boolean;
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

export type App = {
  app: unknown;
  router: unknown;
  store: unknown;
};
```

.envs
```
MSL_API_URL || http://localhost:5000
```

