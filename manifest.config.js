/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Manifest da extensão
 *
 * ==========================================================
 */


import { defineManifest } from "@crxjs/vite-plugin";



export default defineManifest({

  manifest_version: 3,


  name: "LIBRASTUBE",


  description:
    "Plataforma de acessibilidade em Libras para vídeos online.",


  version:
    "0.1.0",



  permissions: [

    "scripting"

  ],



  host_permissions: [

    "https://www.youtube.com/*"

  ],



  background: {

    service_worker:
      "src/background/index.js"

  },



  content_scripts: [

    {

      matches: [

        "https://www.youtube.com/*"

      ],


      js: [

        "src/content.js"

      ]

    }

  ]

});