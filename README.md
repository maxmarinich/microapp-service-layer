# microapp-service-layer

### Methods
```typescript
getInstance: () => MicroappInstance;
loadBundle: () => Promise<string>;
loadTemplate: () => Promise<Template>;
isRegistered: () => boolean;
register: () => Promise<Result>;
unregister: () => void;
mount: (options: Options) => Promise<Result>;
```
 

### Types
```typescript
type MicroappInstance = {
  createApp: (options: Options) => Promise<void>;
  getInitialOptions?: () => Record<string, unknown>;
};

type Options = {
  elementOrSelector: Element | string;
};

type Result = {
  ok: boolean;
};

type Template = {
  html: string;
  state: string;
  styles: string;
};
```
.envs
```
MICROAPP_API_URL || http://localhost:5000
```

