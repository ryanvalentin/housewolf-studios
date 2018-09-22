/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8e96913494fcd43399b8.js"
  },
  {
    "url": "app-8997a4e96bad2fe1ec3c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2733a93dc7bddf27f93b.js"
  },
  {
    "url": "index.html",
    "revision": "9cdc32fad1587ad5301bce15d7e3c402"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "686572e67f8505036dec10688dea7ff8"
  },
  {
    "url": "0.3cc061b25f5344a69f2e.css"
  },
  {
    "url": "component---src-pages-index-js.9d81227b6683ba8b54d0.css"
  },
  {
    "url": "component---src-pages-index-js-0d572d47ffdc20a7f782.js"
  },
  {
    "url": "8-0a74dbe6ece2d8d4ab5e.js"
  },
  {
    "url": "0-527ed31d1063dc4f5762.js"
  },
  {
    "url": "static/d/62/path---index-6a9-OiGTbDImIWHpl0tdLnWUOlpKyyk.json",
    "revision": "04b5a07a53ca710292e51e38ddf5e8af"
  },
  {
    "url": "component---src-pages-404-js.9d81227b6683ba8b54d0.css"
  },
  {
    "url": "component---src-pages-404-js-2da8942d14958d25ea42.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});