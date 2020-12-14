$(function () {
  //header
  $.fn.acs = function (options) {
    var elements = this;
    var defaults = {
      screenPos: 0.8,
      className: 'is-show'
    };
    var setting = $.extend(defaults, options);
    $(window).on('load scroll', function () {
      add_class_in_scrolling();
    });
    function add_class_in_scrolling() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * setting.screenPos);

      if (elements.offset().top < scrollPos) {
        elements.addClass(setting.className);
      }
    }
  }
});


/* ========================================================================
 * スクロールトップ
 * ======================================================================== */

    var topBtn = $('#page_top');
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

/* ========================================================================
 * sp menu
 * ======================================================================== */
$('header .menu_sp').on('click', function () {
  if ($(this).hasClass('is-open')) {
    $(this).removeClass('is-open');
    $(this).children('.menu-trigger').removeClass('active');
    $('header .header_box .right').slideUp();
  } else {
    $(this).addClass('is-open');
    $(this).children('.menu-trigger').addClass('active');
    $('header .header_box .right').slideDown();
  }
});
$('header .header_box .right a').on('click', function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('header .menu_sp').removeClass('is-open');
    $('header .menu_sp .menu-trigger').removeClass('active');
    $('header .header_box .right').slideUp();
  }
});
/* ========================================================================
 * ボタン関連
 * ======================================================================== */
$(function () {
  var topBtn = $('#fixbtn');
  var footer = $('footer').offset().top;
  var h = $(window).height();
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop()  > footer - h) {
      topBtn.fadeOut();
    } else if($(this).scrollTop() > 300) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});
/* ========================================================================
 * スクロール関連
 * ======================================================================== */
$(function () {
  var headerHeight = $('header').height();
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
});
});
/* ========================================================================
 * フェードインエフェクト
 * ======================================================================== */
$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.fadein_zero').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.fadein_top').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.fadein_right').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.fadein_bottom').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.fadein_left').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});
