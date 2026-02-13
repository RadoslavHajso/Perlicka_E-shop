/* HOMEPAGE – poradie*/
(function () {
    function apply() {
      if (!document.querySelector('.type-index')) return;
  
      var adv = document.querySelector('.type-index .adv-banner__wrap');
      if (!adv) return;
  
      var videos = document.querySelectorAll('.type-index video.custom-banner__video, .type-index .custom-banner__video');
      if (!videos || !videos.length) return;
  
      var video = videos[videos.length - 1];
  
      var anchor = video;
      while (anchor && anchor.nodeType === 1) {
        if (anchor.classList && (anchor.classList.contains('banner-wrapper') || anchor.classList.contains('custom-banner'))) {
          break;
        }
        anchor = anchor.parentElement;
      }
      if (!anchor || !anchor.parentElement) return;
  
      if (anchor.nextElementSibling === adv) return;
  
      anchor.parentElement.insertBefore(adv, anchor.nextSibling);
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { setTimeout(apply, 150); });
    } else {
      setTimeout(apply, 150);
    }
    window.addEventListener('load', function () { setTimeout(apply, 300); });
  })();