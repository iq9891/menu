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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dfe96fb0139d9afafd67df0a56ac86c5"
  },
  {
    "url": "assets/css/0.styles.119be5c5.css",
    "revision": "f28773f9de65962a37b2c40731dccead"
  },
  {
    "url": "assets/img/event.6f106569.svg",
    "revision": "6f106569242dfa7f15270dc76ab7c55f"
  },
  {
    "url": "assets/img/light.3a0c5cf8.svg",
    "revision": "3a0c5cf8ce37c647e43f2f5fc3e3275c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4cbf58b3.js",
    "revision": "db7c3d7df1cdac454e2c325783a46049"
  },
  {
    "url": "assets/js/3.b115414e.js",
    "revision": "0357b5da0be4c79825afa7538e36f442"
  },
  {
    "url": "assets/js/4.94c54f50.js",
    "revision": "229ee6522e46089fd716dd3e84aed69f"
  },
  {
    "url": "assets/js/5.22533894.js",
    "revision": "19d6bfbc62b1ef2c6eabc00e9ef4ada2"
  },
  {
    "url": "assets/js/6.3c5f2f7b.js",
    "revision": "28fb77f6fbc29720636835f98dfa449a"
  },
  {
    "url": "assets/js/app.66c41c68.js",
    "revision": "41ab2454c17b7d9c63c83f08746758cb"
  },
  {
    "url": "bar.html",
    "revision": "84030ec9f8757e8a659c47b6b689fdb5"
  },
  {
    "url": "index.html",
    "revision": "e0aaea29c2d4cf237d36283ca8cdfc4f"
  },
  {
    "url": "layout.html",
    "revision": "a32bc47ab7d52defa01af81bbf2d5b98"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "menu.html",
    "revision": "d87e267c39651cc7b93e9a1a2af76b20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
