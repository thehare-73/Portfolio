
// Optional parameters ループ処理の実行化
const swiper = new Swiper('.swiper', {
  // direction: 'vertical', ←スライド形態（下）＊デフォ（右スライド）
  loop: true,

  // If we need pagination　ページネーションの設定
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows　ナビゲーションボタン設定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  //スライドの表示枚数：500px未満の場合
  // slidesPerView: 1;
  // breakpoints: {
    //スライドの表示枚数：500px以上の場合
  //   500: {
  //     slidersPerView: 3;
  //   }
  // }

});