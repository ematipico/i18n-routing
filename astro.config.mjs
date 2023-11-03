 import { defineConfig } from "astro/config";
 // import node from "@astrojs/node"
 
 // https://astro.build/config
 export default defineConfig({
   // output: "server",
   // adapter: node({
   //   mode: "standalone"
   // }),
   experimental: {
       i18n :{
         defaultLocale: 'en',
         locales: [
             'en',
             'es',
             'it'
         ],
       }
   },
 });