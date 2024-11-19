'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1d82c6561b3ea5ae614630481fd06571",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b5c048b884b29e807532e6f8e038c64",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67651eac89926b9920a7e602be479ffb",
".git/logs/refs/heads/master": "89a03f8906ca326f650471cbe191f207",
".git/objects/00/d1e477260c49af0ff63547de6f62d767b6895f": "8d0f924211f58f6b434e8f9e272b5687",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/0b/b8601d39e65ca48e5c4a9ff3a4a341723b89a3": "c771b5895cfeda79f8d2bcf46895c6b7",
".git/objects/0e/063d42575b1bc0c5fffe67f7c76f0fe1d749a3": "645340836facf1c50b7fc5dbed40fe95",
".git/objects/13/1cd46106538c4e0303a32f8113f0db4a84ebc0": "04d85cae5889269cc8a2a13d4aa92d43",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/18/8dd9b0b415b7436d3007525b11c7bf541ff01a": "d430cc460c71218a38029bde8032fb04",
".git/objects/19/762761af798a270fa3239b5eebcd4d7a399ee4": "aa45894aa57d3fc2085921001bc3778e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/81bcdc1d270e3cb743b5ed5cb144d9bc28d463": "fe550bfa54960ab24cdce6c90415213f",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/22/8891fe8a550a750162bf5dd9e04a2ab39e0340": "a4dfdfd7b56fd07eb2ad15d198aae026",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/2fbbf7794c6aa3a64cd13571267267446c3d3f": "4e9f70595f956919e5ea22a8d5e7bdbd",
".git/objects/2b/76b382288d16e76ef16789dd56f1d1ee394d69": "2c9c2944ec1c39db4770573cb86d9902",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/33/89130927268e1fac67285fe7f486eb7c9473ef": "7233e1124bd3b2c79c88ee5fa2d45101",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/3a/29150828cba6a00fecf828c51eb6cbbef7299d": "3b7dae8fc5aad6ddb73943ccb57a14d2",
".git/objects/3a/52780a1c539e43078e8fa900d0de1d08e79e8e": "56ca0acd1ca83c74b6d62c9d9385db48",
".git/objects/40/f8a2eeb263ab8023ce3849c7c27a32246e42df": "6800f2656d942f92f1cc51a689430fd2",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/bb50ecf03217c8dbf333fb67d86672cc1b6d42": "92478791c0121d1ac2a923decb81986f",
".git/objects/50/10da08f53792069dc5cb722b54be02759eeb7a": "3103fff97f700d8fbe2a8689a62531bf",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/5e50c113f15f7d434dcd64f133484c99533833": "6184e487e904d0903e748fbb98db0c75",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/18152ed6259baf95852e3081c1e92f5633a363": "34a66567b986b80c25b6ec96f0eb6954",
".git/objects/5d/53462a8c7487d4fdba79941b8dded5a7a15399": "96627f321fc150d8262d63913abecb2c",
".git/objects/5f/a3ec8badd18ae86be50c36d920a7ae7476705f": "e60027aed7bbcea415f084f2374f16e6",
".git/objects/62/0d4b4b41c3d75c755f2aed0baa323c86dde8fe": "8ac607d450397e91b3d76ce1107b1d05",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/97637d1fc48e2fd34a8831bf513a8053ce3083": "2413e71bf9b98222554dc5257ca440c4",
".git/objects/6d/bbaae2aed896bd8df099a458a09001e23bd788": "4aeb35f646a04ef7c0846a99dd37ae01",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/f846a0e9987f7d88e929344a6184291761cf4a": "f69ebfdc2ff6cebde7be1caa3c3c6c63",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8f/191c036d61f8ba0fd618093d88870151b28d77": "9ebf5783991e695f22b9efd2bda00342",
".git/objects/92/50fe77bf98d34567f56c59e5eb81dba2c8674f": "89f38913b4923d09a16e696d78f791ee",
".git/objects/92/8e0a505578e97457c99ed07b01b2d1f65278c5": "bfe08360685ba9c7071b3cd5f50fb8da",
".git/objects/94/471771dd7d111feb8115797776d8a6d02812fe": "55eebb5dff252c0348a739d101a03f73",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/e0ef2afdd2977e180365de1e6198bc86474b94": "060113a860a61f664ca9b61161a6b07a",
".git/objects/9e/d9147569277320b50d5f2f39393882e560bef0": "39212a432dd7df64d9d7bb64f250d6c0",
".git/objects/ab/0d4cf594c4975dbf81be469fd8a1857871d236": "5ced661f038d1e9245946d89567b13ff",
".git/objects/ab/abb0deaaf71a54f8001da1a414cc8124d6869c": "11b47a74207123ccc8b395570c817cbf",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/ad/bf223cae94633488bbefbc08857731a87d56c4": "8fec13627ae817a12549971e3a191d5e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/9a743dd8b9b4859506b2d239cbf270d67be3b8": "a53f8939a7d880eab2b3246c1ce6d6f6",
".git/objects/b3/e12789617d8772545c893c1ac09edaa4f34247": "a25cecadf6a756e8b8092051c2396ed4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/573a54b5d85b13c73fe0a9dcfd2af3aa10571a": "dab4441fd297145ef085c16610845e0c",
".git/objects/bc/e293bbc5a4df8bea5ce0e5c2f016e6dc6a22a5": "d667ddd45e76e3070679d730521277c2",
".git/objects/c3/9c2445fcd431427ded87e5061eff3bd6c0d23f": "4f8e27907b1c590ec1c2d133ed7e01a3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7239310ed4632fcf0a12b6c777b2368ffef70c": "9bf8bc943fd387dc5d33e19679b76323",
".git/objects/ca/1fd0a8db4646e4f6f7310dc15eddd30f835f9a": "06da25cf81f6a008a021ab80f6647dc4",
".git/objects/ca/774c98d08fe09f1cc778a88a3f249e05ffb0ca": "67454412fba302040b6ba7c9edc23300",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e1/aa4e51b4fb009eca0e713a1ed8bf8f1cdaeb7d": "c2d2e5899bbf3a5198db832a75bf80cb",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/12db336820d28b542a643e868a7573225a83cb": "d94f0a8f23812a9c84087768ea65a5d1",
".git/objects/f0/ae88b147e391c39bdd9fc763a9e29dcd36c64e": "d7afbae7d49cba46202c7759507bf110",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f7/24096fbbef2bea2f209a1231041be63abc8f89": "a33e7f8604d91c9a18b766e243527c38",
".git/objects/fc/87c084cf90b4379cdf60714306d805e51fe314": "f2d962024ccacf5ce40c782f9ed0da5f",
".git/objects/fc/bf7d996ec30615a865a114dc18133332bb0835": "4443e28d5df797ed8e9fcd43f4da1011",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/objects/ff/4d9ceb292cf16287d4babc17a304a84fd25fe8": "47f70db799dd2c92c4768e3f6ac8df0c",
".git/refs/heads/master": "48b74ab6867878c452b2a7e7bfcb0e78",
"assets/AssetManifest.bin": "ca8b7f747eb49d8fc34f0a4d4c7dc9d2",
"assets/AssetManifest.bin.json": "b58bb70b48e46a85bf2a8592e2fbc9c5",
"assets/AssetManifest.json": "217a55b7abaf7d395e225b301a3e403c",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/projects/draw_animation.png": "0e8943b0d71697e41c7a620c8fe43cbf",
"assets/assets/images/projects/filter.png": "175f5d34ddb6f41eff40cefcf29d1cb4",
"assets/assets/images/projects/translator.png": "2d9998300304b8da293b87e90e4a3bba",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/kotlin.png": "74c5851a145dcbbb5e54ec3cf8e8d3ac",
"assets/assets/svg/guy.svg": "384b0cd380b8ce087e170fe5b3dc7f6b",
"assets/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3b747a15b889dd34f7f95bc4afcde546",
"assets/NOTICES": "d8b14ca96fbcc128d877db1faf0c0766",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "895127e0f1b5ab9bac0024f4a6e26917",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9fbedf79fb0fc1c9c0b8c478352ec0a1",
"/": "9fbedf79fb0fc1c9c0b8c478352ec0a1",
"main.dart.js": "eadb03e41ea7037762f857b95f209aa4",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
