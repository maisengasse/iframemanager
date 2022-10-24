"use strict";

// get module
var iframemanager = iframemanager();

iframemanager.run({
  currLang: document.documentElement.getAttribute("lang"),
  // autoLang: true,
  services: {
    youtube: {
      embedUrl: "https://www.youtube-nocookie.com/embed/{data-id}",
      iframe: {
        allow:
          "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
      },
      cookie: {
        name: "cc_youtube",
      },
      languages: {
        de: {
          notice:
            'Dieser Inhalt wird von einem Drittanbieter gehostet. Durch das Laden der externen Inhalte akzeptieren Sie die <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Nutzungsbedingungen" target="_blank">Nutzungsbedingungen</ a> von youtube.com.',
          loadBtn: "Video laden",
          loadAllBtn: "Nicht erneut fragen",
        },
        en: {
          notice:
            'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Terms and conditions" target="_blank">terms and conditions</a> of youtube.com.',
          loadBtn: "Load video",
          loadAllBtn: "Don't ask again",
        },
      },
    },
  },
});
