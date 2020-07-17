const DEV_API_API = 'http://localhost:5000';

export const microappId = 'microapp';
export const microappNamespace = 'Microapp';
export const microappContext = '__MICROAPP_CONTEXT__';
export const microappCreateOptions = 'createOptions';

export const microappBaseUrl = process.env.MICROAPP_BASE_URL || '';
export const microappApiUrl = process.env.MICROAPP_API_URL || DEV_API_API;
