
    
    //btn-openの記述
    $(function() {
        $('#js-header-btn').click(function() {
            $('.p-menu__btn--line').toggleClass('btn-open');
            $('.p-header__btn').toggleClass('btn-open');
            $('#js-right').toggleClass('btn-open')
        })
    });


//トップボタン クリックでトップへ戻る
const scroll_to_top_btn = document.querySelector('#to_top');
//クリックイベントを追加
scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};

// ヘッダーの高さ分を読み取りsectionへ移動

const header = $('#header');
$('a[href^="#"]').on('click', function() {
const gap = header.outerHeight();
const speed = 500;
const href = $(this).attr("href");
const target = $(href == "#" || href == "" ? "html" : href);
const position = target.offset().top - gap;

$("html, body").animate({ scrollTop: position }, speed, "swing");
return false;
});


// ローディングアニメーションが以前に表示されたかどうかをチェック
var animationShown = sessionStorage.getItem('animationShown');

// 最初の訪問時のみアニメーションを表示
if (!animationShown) {
  // ウィンドウの読み込み完了を待ってからアニメーションを表示
  $(window).on('load', function() {
    // アニメーションのフェードアウトを遅延させる
    $("#js_loading").delay(2000).fadeOut('slow'); // 2秒（2000ms）待機してからフェードアウト
    $("#js_loading").delay(1800).fadeOut('slow'); // 最初のフェードアウト後、1.8秒（1800ms）待機してからフェードアウト
  });

  // アニメーションが表示されたことを示すフラグを保存
  sessionStorage.setItem('animationShown', true);
} else {
  // アニメーションが以前に表示された場合は非表示にする
  $("#js_loading").hide();
}



