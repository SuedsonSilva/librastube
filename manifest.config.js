import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "LIBRASTUBE",

  description: "Plataforma de acessibilidade em Libras para vídeos online.",

  version: "0.1.0",

  permissions: [],

  host_permissions: [
    "https://www.youtube.com/*"
  ],

  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ["src/content.js"]
    }
  ]
});