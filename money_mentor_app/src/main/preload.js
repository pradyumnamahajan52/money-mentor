const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    send(channel, arg) {
      const validChannels = ['send:checktabledb', 'send:restartapp'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.send(channel, arg);
      }
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    invoke(channel, args) {
      const validChannels = ['send:authentication', 'receive:authentication'];
      if (validChannels.includes(channel)) {
        // return ipcRenderer.invoke(channel, (event, ...args) => func(...args));
        return ipcRenderer.invoke(channel, args);
      }
      return 'Invalid Channels';
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
