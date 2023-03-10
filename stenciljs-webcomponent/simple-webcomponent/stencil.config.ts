import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'simple-webcomponent',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, 
      copy: [

        { src: 'assets/fonts/*', dest: 'webfonts' }
      ]// disable service workers
    },
  ],
  
};
