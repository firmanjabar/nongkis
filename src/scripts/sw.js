/* eslint-disable no-restricted-globals */
import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'nongkis-app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url:
        'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Unica+One&display=swap',
      revision: 1,
    },
    {
      url: 'https://fonts.gstatic.com/s/comfortaa/v29/1Ptsg8LJRfWJmhDAuUs4TYFqL_KWxQ.woff2',
      revision: 1,
    },
    {
      url: 'https://fonts.gstatic.com/s/unicaone/v7/DPEuYwWHyAYGVTSmalsRcd3emkUrFQ.woff2',
      revision: 1,
    },
    {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

cleanupOutdatedCaches();
