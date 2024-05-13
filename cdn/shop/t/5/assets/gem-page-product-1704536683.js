

(function( jQuery ){
  var $module = jQuery('#m-1616492280852').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1616492280852-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
(function(jQuery) {
var $module = jQuery('#m-1616492308477').children('.module');
$module.gfV4ProductImageList({
  onImageClicked: function(imageUrl, imageZoomUrl) {}
});

var style = $module.attr('data-style');
switch(style) {
  case 'slider':
      var navspeed = $module.data('navspeed'),
          navlg = $module.data('navlg'),
          navmd = $module.data('navmd'),
          navsm = $module.data('navsm'),
          navxs = $module.data('navxs'),
          collg = $module.data('collg'),
          colmd = $module.data('colmd'),
          colsm = $module.data('colsm'),
          colxs = $module.data('colxs'),
          dotslg = $module.data('dotslg'),
          dotsmd = $module.data('dotsmd'),
          dotssm = $module.data('dotssm'),
          dotsxs = $module.data('dotsxs'),

          marginlg = parseInt($module.data('mlg')),
          marginmd = parseInt($module.data('mmd')),
          marginsm = parseInt($module.data('msm')),
          marginxs = parseInt($module.data('mxs'));

      var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
      if(mode == 'production') {
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        jQuery(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
          autoWidth: !1,
          loop: loop,
          responsiveClass:true,
          responsive:{
              0:{
                  items:colxs,
                  nav: navxs,
                  dots:dotsxs,
                  margin: marginxs
              },
              768:{
                  items:colsm,
                  nav: navsm,
                  dots:dotssm,
                  margin: marginsm
              },
              992:{
                  items:colmd,
                  nav: navmd,
                  dots:dotsmd,
                  margin: marginmd
              },
              1200:{
                  items:collg,
                  nav: navlg,
                  dots:dotslg,
                  margin: marginlg
              }
          },
          onInitialized: function(){
            $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
          }
      }); 
      break;
}
})(window.GemQuery || jQuery); 
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1707480670060').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1705038803954').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
  
    
    
(function( jQuery ){
    var $module = jQuery('#m-1616491681690').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
    var $module = jQuery('#m-1616492131751').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1616492152440').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
    var $module = jQuery('#m-1616492152435').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1706372258690').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
    
    
    
    
  
    
    
jQuery(function() {
  var $module = jQuery('#m-1706603519082').children('.module');
}); 
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1706266677076').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    (function( jQuery ){
  var $module = jQuery('#m-1705478683886').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1706267087679').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1706517075172').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
  
    
    
    
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1707446842473').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if (mode == 'production') {
    jQuery(window).ready(function() {
      $module.gfVideoBg();
    })
  } else {
    $module.gfVideoBg();
  }
})( window.GemQuery || jQuery );
  
    
    
    
    
  
    
    
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1616646209995').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932547').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1706596932547-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1706596932547-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932547-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932494').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1706596932494-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1706596932494-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932494-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932478').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1706596932478-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1706596932478-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  var $module = jQuery('#m-1706596932478-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
    
  
    
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1705386621004').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1705386621004');
      } catch(err) {}
    });
    
    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#r-1669083444866"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"lt","percentage":"20","runtime":"infinite"}}],"targets":[{"id":"#r-1669083444866","actions":[{"key":"hide","type":2,"data":{"delay":0,"duration":"50"}}]}]},{"source":{"id":"#r-1669083444866"},"events":[{"key":"scrolling-to-percentage","data":{"condition":"gte","percentage":"20","runtime":"infinite"}}],"targets":[{"id":"#r-1669083444866","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":"50"}}]}]}]); window.__gfV1FlowActions.init();