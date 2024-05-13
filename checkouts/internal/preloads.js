
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f3dfb5e50cb09c43e65b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/423.latest.en.a8995a6e4b916ce02f71.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/49.latest.en.e09a5108f509ef00751b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/180.latest.en.76349392f2a7bbeb2c64.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.9bed4fe8cf4dc7f66202.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/912.latest.en.41a63345ce3b8fab9650.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/467.latest.en.d283c59540419f8482f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.a026ef31c29fb326ed90.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/766.latest.en.0362c7314cf59cfee7d4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/397.latest.en.2b264cd4b49af78ba5cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/660.latest.en.54fc67c730a2c5760da3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.bb5a0e3183613d49a963.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/423.latest.en.cb154a7c71144c8a82fc.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.7b5ddd7b6f0b80e0c96b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.73e7aee17ac8ed57abcc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  