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
    "url": "webpack-runtime-9c956237f10ef7f21da7.js"
  },
  {
    "url": "app-ec5ad16f1774e17919f7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7c0ca4c6d39bea8a2781.js"
  },
  {
    "url": "index.html",
    "revision": "5556aac9ab84fb0b11a6f55ae9e7518f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9b108a6bd2126413bfa3bd46982c2e00"
  },
  {
    "url": "0.bbad59135e3c57275552.css"
  },
  {
    "url": "component---src-pages-index-js.e4997bd3a3ce82c71f5d.css"
  },
  {
    "url": "component---src-pages-index-js-db85f4bd625142e523fe.js"
  },
  {
    "url": "1-87e6f607e1c58f0eec4f.js"
  },
  {
    "url": "0-a79bf10b06d0eaff400f.js"
  },
  {
    "url": "static/d/640/path---index-6a9-orokBZq8dPQkHhkfUOJOJSKNRM.json",
    "revision": "f0e2f81b9d0fb6589edaaab3d2f33ab9"
  },
  {
    "url": "component---src-pages-404-js.e4997bd3a3ce82c71f5d.css"
  },
  {
    "url": "component---src-pages-404-js-6b2443c9a16a18fc1ce7.js"
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