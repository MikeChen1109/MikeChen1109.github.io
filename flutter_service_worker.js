'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "129f3c5f277b870e670495cb80237851",
"version.json": "6da48eaa0234c30817feb2bc4fda3702",
"index.html": "92002c8d0c19d4b4a2d22486ce406621",
"/": "92002c8d0c19d4b4a2d22486ce406621",
"main.dart.js": "1b54d93312dc7e10d84d76e849e25821",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "24f18594381be93ef7a4fe9b47938687",
".git/ORIG_HEAD": "7b3ab94340d33f16e85e21f7d50400d5",
".git/config": "c811a07bd2e560c7af8c5447b0f6a16c",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/68/61d6acd3cfc30210d6f50ac1811e09dcff9812": "231cd1c982467028b0769d4ea50623fe",
".git/objects/3b/c3b7935a26f24d50390690c4835e5ee7b337f7": "95a42397f0efd42fa82407adb3af38db",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/d0/b6c4d6541ad7b13f2a7500dfb241a2df2bb60b": "d6a6181dc91d65dd18ad46dbb204415e",
".git/objects/a2/e7324e03e55b71458dabfd436a978b249b3b79": "55716864fc5adaac59cfda5731031d5b",
".git/objects/bd/985ba02af67f1c67c1a52cc8da154451d6aa98": "5968b5ee8b21279480ae363b7bd1b9c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/4ec3d0fd70d0d6480ef7f34ce8cc1f43116b56": "ed382d942efbbf709396b9f0a23b616c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/0b90f54f7ba50f8d186d5a1aa97a2f9e8f0837": "e59a9078fe8c0165b06ceb7ffc566e86",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/11f5c1f56902fbd2d25560f363eac197c9f847": "59805bf447063972d84445613c4fa52c",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/45/717745d89e32b5c8afc91f264918a37534e70a": "39149765b7fd4cd7682b7058d6436792",
".git/objects/45/2d3eb3d95421beaa263235c2576f2b8970152d": "8fbe5ba4b8257b451e79c1e9eb33bca2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/eff3847512ad50ffb3ee1cc63749980c299c04": "c84c70e15d1eb6bad15fce17d7ec1ec7",
".git/objects/28/d6f672e072c2932d2661cd936a8a94aaecf308": "d6aaa4d735f28233c258b30745cc27c2",
".git/objects/17/2babd0306c2b417280837448f3f0448094dcf9": "b388a9246f2a769672d20121c30d00ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ab165c1407c6e1041fa98776b946dc7afa4d71": "2dd014d3d25e26038c5c6b5dc7d0f5f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/30/d92d926c9c5fa0946526c767dcc378574db3fc": "03da2de7a8741711009dee80a5727dc7",
".git/objects/08/bc5ad8b8c8dff443f07dc7029f1d61d65cfce0": "80bd77836e00fb7678b2eb90fbd49b03",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/0fac170f62e21a75cb9b5e5588601da0e724a5": "c18a0872c06946b2297462e86247d2e6",
".git/objects/97/8c450459e9860f92ebb407131e8d175760c5b6": "c61b7a10400b1f4d29e08bcbf59c8b14",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/3cc36a1614b4c4cd7371c2dc506980e1ecfafa": "980e453ce3d46e7306c6c77d1830be90",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/6288180fa577976e95b166d2762f66ee51f105": "d07e873cb29ab6c78c615f6e815e001c",
".git/objects/b6/aaa9647d4dc4ca174f40e2e4a8c8e6db7bbce6": "0288ffee49cdd127d1fda373bfb9d09b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/490efc95640b467e0c03d5b23b1ad40b4d3b01": "60b0006f00e5940477e615cf204d1c6f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ff/938bd9932c2579aef34759a9f31adb41a36c7d": "87ac65cb7a9831f2cf85d36f002dbcff",
".git/objects/f6/2add187e6e1900e86118bbbdb9447807b1a74f": "83ce08dab02cc8f89e44e5fe54e44739",
".git/objects/f8/dcbf4e4eafbaee58365c24fe6eacf8e0537c4f": "65cc950691ad918279bd8e0f46d10b79",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/e0/5a1a7ebc2d7ec0c98b7f0944ee05d63148a0f9": "729ca8a6ae57142d8013b59f7f9ab5b3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/7172a73b7eef8435f699148e93dea05b9fda13": "bd8625a1414d1b7c89d0eabda8de1903",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/bdda170ad3a57327db03ed88288f135a062ffc": "4ec8f8f4fea8d88a8cf9edf5de57ca40",
".git/objects/1e/4aa322e861ca49e1a4ff04601f7e4bbc82892c": "dcca89b01713116b28858eed7205c922",
".git/objects/84/0ff2c97549f124b502460f7ce969e2dc0167cb": "78486cc22453aeacdc113b2691914d3d",
".git/objects/84/dee31d469a18ab3772e7d72471565eeae0e8e3": "5e14c27f238146d8d8fffb9ec9a91792",
".git/objects/23/380166e4da785345c17a68693a69c50860a8e0": "055bc7f6c09d879156e5b7e43b2335e1",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/85e77ed1c9b9b1e0545518dd01e7017d8fafc0": "464f504b1c13d3b836646ee480a8ac37",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/5c7ae3f4b7a1f0e1e4561d96cc11bc7dd71f6a": "ea364bbd3a0bb29c7e16e48c884e5a25",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70cf99b28e14d96859069938a1c9e39a",
".git/logs/refs/heads/main": "f36a3cd8c5bff71646d67ae5797f19ed",
".git/logs/refs/remotes/origin/main": "e870f2e09f4f6aa819646500886b176e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7b3ab94340d33f16e85e21f7d50400d5",
".git/refs/remotes/origin/main": "7b3ab94340d33f16e85e21f7d50400d5",
".git/index": "5948867da275af3e671ee4c5cfcf3e27",
".git/COMMIT_EDITMSG": "170bd16e6088d22a86a161248b76679f",
".git/FETCH_HEAD": "6a1e5dec9f934563fafb1fa1619e466b",
"assets/AssetManifest.json": "f36aa4532d79da251e44026f19b4e637",
"assets/NOTICES": "26bff27ff3fb509803bb593db320e857",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3a4907c1a63f751e995d196373b3b7d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "60378065d89cae93f20184e9875e6343",
"assets/fonts/MaterialIcons-Regular.otf": "eeeb59320ef9b36e4c16934c87a16925",
"assets/assets/images/go-8.svg": "99edf746b91cb234e985aef4d98bc8d4",
"assets/assets/images/flutter-logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
