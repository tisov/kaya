"use strict";

/* eslint-disable no-undef */
(function ($) {
  var _this = this;

  var sportShop = {
    initialized: false,
    version: 1.0,
    mobile: false,
    _window: $(window),
    windowSize: null,
    init: function init() {
      if (!this.initialized) {
        this.initialized = true;
      } else {
        return;
      }
      /* functions initialization */


      this.mobileMenuBtn();
      this.getWindowSize();
      this.dropdownAnimate();
      this.categoriesDropdown();
      this.mobileMenu();
      this.mainSlider();
      this.sliderStyle_1();
      this.sliderStyle_2();
      this.sliderStyle_3();
      this.sliderStyle_4();
      this.sliderStyle_5();
      this.sliderStyle_6();
      this.sliderStyle_7();
      this.niceSelect();
      this.productViewSwitch();
      this.quantityChange();
      this.paymentMethodCollapse();
      this.priceFilter();
      this.headerCategoryMenu();
      this.googleMap();
      this.showCategoryMenu();
    },

    /* functions declaration */
    // get window width
    getWindowSize: function getWindowSize() {
      $(window).on('resize load', function () {
        sportShop.windowSize = $(_this).outerWidth();
      });
    },
    // if home page show category menu
    showCategoryMenu: function showCategoryMenu() {
      this._window.on('load', function () {
        if (this.location.pathname == '/' || this.location.pathname == '/index.html') {
          $('.category-menu').css('display', 'block');
        }
      });
    },
    // mobile menu button
    mobileMenuBtn: function mobileMenuBtn() {
      $('.mobile-menu-btn').on('click', function () {
        $(this).toggleClass('active');
      });
    },
    // dropdown slide toggle animate
    dropdownAnimate: function dropdownAnimate() {
      $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
      });
      $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
      });
    },
    // categories dropdown
    categoriesDropdown: function categoriesDropdown() {
      $('.categories').on('click', function () {
        $(this).children('.category-menu').slideToggle(300, function () {
          if ($(this).css('display') == 'none' && sportShop.windowSize <= 991) {
            $(this).removeAttr('style');
          }
        });
      });
    },
    // mobile menu
    mobileMenu: function mobileMenu() {
      var mobileMenu = $('.mobile-nav-menu');
      var self = this;
      var expandIcon = '<span class="fas fa-plus expand-btn"></span>';
      var mobileMenuBtn = $('.mobile-menu-btn');
      var categoriesMenu = $('.categories'); //let categoryExpandBtn = $('.categories .expand-btn, .categories .column > a i');

      this._window.on('resize load', function () {
        if (self.windowSize <= 991) {
          if (mobileMenu.children().length) {
            return;
          }

          $('.nav-menu > ul').clone().appendTo(mobileMenu).find('.column > ul > li').addClass('drop-menu').end().find('.drop-menu').parent().children('a').append(expandIcon);
          mobileMenu.find('.drop-menu').prev().children('span').on('click', function () {
            event.preventDefault();
            $(this).parent().next().slideToggle('fast', function () {
              if ($(this).css('display') == 'block' || $(this).css('display') == 'list-item') {
                $(this).prev().children('span').removeClass('fa-plus').addClass('fa-minus');
              } else {
                $(this).prev().children('span').removeClass('fa-minus').addClass('fa-plus');
              }
            });
          });
          mobileMenuBtn.on('click', function () {
            mobileMenu.slideToggle('fast');
          }); // categories menu
          // $('.category-menu').css('display', 'none !important');

          categoriesMenu.addClass('mobile').find('._dropdown-menu > li > a').append('<i class="fas fa-angle-down expand-btn"></i>'); // categories menu expand button

          $('.categories .expand-btn, .categories .column > a i').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().next().slideToggle('fast');
          });
        } else {
          $('.categories .expand-btn, .categories .column > a i').off('click'); // $('.category-menu').css('display', 'block');

          $('.category-menu ._dropdown-menu').removeAttr('style').find('li > ul').removeAttr('style');
          mobileMenuBtn.off('click');
          mobileMenu.children().remove();
          categoriesMenu.removeClass('mobile').find('._dropdown-menu > li > a i').remove();
        }
      });
    },
    // main slider
    mainSlider: function mainSlider() {
      $('.main-slider').slick({
        infinite: true,
        dots: true,
        swipeToSlide: true,
        arrows: false,
        fade: true,
        dotsClass: 'slick-dots slick-dots--rounded'
      });
    },
    // slider style 1
    sliderStyle_1: function sliderStyle_1() {
      $('.slider-style1').each(function () {
        var $arrowContainer = $(this).prev().find('.slider-arrows');
        var $slidesToShow = $(this).attr('data-show') ? parseInt($(this).attr('data-show')) : 1;
        $(this).slick({
          swipeToSlide: true,
          appendArrows: $arrowContainer,
          slidesToShow: $slidesToShow,
          prevArrow: '<div class="left"><i class="fas fa-angle-left"></i></div>',
          nextArrow: '<div class="right"><i class="fas fa-angle-right"></i></div>'
        });
      });
    },
    // slider style 2
    sliderStyle_2: function sliderStyle_2() {
      $('.slider-style2').each(function () {
        var arrowsContainer = $(this).parent().find('.slider-arrows2');
        $(this).slick({
          swipeToSlide: true,
          arrows: false,
          appendDots: arrowsContainer,
          dots: true
        });
      });
    },
    // slider style 3
    sliderStyle_3: function sliderStyle_3() {
      $('.slider-style3').each(function () {
        var $arrowsContainer = $(this).parent().find('.slider-arrows');
        $(this).slick({
          swipeToSlide: true,
          appendArrows: $arrowsContainer,
          slidesToShow: 5,
          prevArrow: '<div class="left"><i class="fas fa-angle-left"></i></div>',
          nextArrow: '<div class="right"><i class="fas fa-angle-right"></i></div>',
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      });
    },
    // slider style 4
    sliderStyle_4: function sliderStyle_4() {
      $('.slider-style4').each(function () {
        var $arrowContainer = $(this).prev().find('.slider-arrows');
        var $slidesToShow = $(this).attr('data-show') ? parseInt($(this).attr('data-show')) : 1;
        $(this).slick({
          swipeToSlide: true,
          appendArrows: $arrowContainer,
          slidesToShow: $slidesToShow,
          prevArrow: '<div class="left"><i class="fas fa-angle-left"></i></div>',
          nextArrow: '<div class="right"><i class="fas fa-angle-right"></i></div>',
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      });
    },
    // product slider 5
    sliderStyle_5: function sliderStyle_5() {
      $('.slider-style5').each(function () {
        $(this).slick({
          slidesToShow: 1,
          asNavFor: '.slider-style6',
          prevArrow: '<button type="button" class="slick-prev slick-arrow--style1"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next slick-arrow--style1"><i class="fas fa-angle-right"></i></button>'
        });
      });
    },
    // product slider 6
    sliderStyle_6: function sliderStyle_6() {
      $('.slider-style6').each(function () {
        $(this).slick({
          slidesToShow: 3,
          asNavFor: '.slider-style5',
          centerMode: true,
          centerPadding: 0,
          prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow--style1"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow--style1"><i class="fas fa-angle-right"></i></button>'
        });
      });
    },
    // product slider 7
    sliderStyle_7: function sliderStyle_7() {
      $('.slider-style7').each(function () {
        $(this).slick({
          slidesToShow: 1,
          dots: true,
          arrows: false,
          dotsClass: 'slick-dots slick-dots--rounded'
        });
      });
    },
    // product quantity change
    quantityChange: function quantityChange() {
      $('.js-quantity').on('click', '.c-quantity_btn', function () {
        var $qty_input = $(this).parent().find('.c-quantity_value');
        var $value = parseInt($qty_input.val(), 10);

        if ($(event.target).hasClass('c-quantity_add')) {
          $value++;
          $qty_input.val($value);
        } else if ($value > 0) {
          $value--;
          $qty_input.val($value);
        }
      });
    },
    // enable bs tooltip
    toolTip: function toolTip() {
      $('[data-toggle="tooltip"]').tooltip();
    },
    // shop product sort select
    niceSelect: function niceSelect() {
      $('.nice-select').niceSelect();
    },
    // product view switch
    productViewSwitch: function productViewSwitch() {
      var viewBtn = $('.c-shop_view-btn');
      viewBtn.on('click', function () {
        if ($(this).hasClass('active')) {
          return;
        }

        viewBtn.removeClass('active');
        $(this).addClass('active');
        var viewMode = $(this).attr('data-show');
        var shopProductList = $('.c-shop_list');

        if (viewMode == 'grid') {
          shopProductList.removeClass('c-shop_list--list').addClass('c-shop_list--grid');
        } else if (viewMode == 'list') {
          shopProductList.removeClass('c-shop_list--grid').addClass('c-shop_list--list');
        }
      });
    },
    // payment method collapse
    paymentMethodCollapse: function paymentMethodCollapse() {
      $('input[name=paymentMethod]').on('click', function () {
        var parent = $(this).closest('[data-parent="collapse-parent"]');
        $('.payment-method-detail').slideUp(100);
        parent.find('.payment-method-detail').slideDown(100);
      });
    },
    // shop page price filter
    priceFilter: function priceFilter() {
      var rangeSlider = $('.price-range'),
          amount = $('#amount'),
          minPrice = rangeSlider.data('min'),
          maxPrice = rangeSlider.data('max');
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function slide(event, ui) {
          amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
      });
      amount.val(' $' + rangeSlider.slider('values', 0) + ' - $' + rangeSlider.slider('values', 1));
    },
    // header categories dropdown - only show on main page
    headerCategoryMenu: function headerCategoryMenu() {
      $(window).on('load', function () {
        var location = window.location.pathname;

        if (location.includes('index')) {
          $('.category-menu').css('display', 'block');
        }
      });
    },
    // google map
    googleMap: function googleMap() {
      if ($('#map-content').length) {
        // eslint-disable-next-line no-unused-vars
        var map = new GMaps({
          el: '#map-content',
          lat: -12.043333,
          lng: -77.028333
        });
      }
    }
  };
  /* website functions init */

  sportShop.init();
  /* */
  // $('.dropdown-menu').on('click', function (e) {
  //    e.stopPropagation();
  //    if (e.target.className === 'nav-link') {
  //       $(e.target).tab('show');
  //    }
  // });
  // eslint-disable-next-line no-undef
})(jQuery);