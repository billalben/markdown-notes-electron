import { contextBridge } from 'electron';

if (!process.contextIsolated) {
  throw new Error('contextIsolation is disabled');
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  });
} catch (error) {
  console.error(error);
}
