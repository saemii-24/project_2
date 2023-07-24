/*한국어<->영어*/
const english = document.getElementById('language-english');
const korean = document.getElementById('language-korean');

english.addEventListener('click', () => {
    if (english.innerText === "English") {
        english.innerText = "한국어";
        korean.innerText = "English"
    } else {
        english.innerText = "English";
        korean.innerText = "한국어"
    }
});

/*MAIN SECTION*/
$(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 400) {
        $('#img_box').css({
            'width': 500 + (scroll * 1.2),
            'height': 500 + (scroll * 1.2),
            'border-radius': '50%'
        });
        $('#howl').css({
            'bottom': '0%',
            'left': '-25%',
            'width': '150%'
        });
        $('#studioGhibli_write').css({
            'opacity': '1',
        });

    } else if (scroll > 400 && scroll <= 1200) {
        $('#img_box').css({
            'width': + (scroll * 1.2),
            'height': + (scroll * 1.2),
            'border-radius': '50%',
            'backgroundSize': 'cover'
        });
        $('#studioGhibli_write').css({
            'opacity': '0',
            'transition-delay': '0'
        });
        $('#scroll_info, #logo_img_white').css({
            'opacity': '0',
        });
        $('#howl').css({
            'bottom': '0%',
            'left': '-25%',
            'width': '150%'
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#00B6FF'
        });
        $('#logo_img').attr(
            'src', 'img/main/ghibli_logo_blue.png'
        );
        $('#logo_img_blue').css({
            'opacity': '1'
        });
    } else if (scroll > 1200 && scroll <= 3000) {
        $('#img_box').css({
            'width': '100vw',
            'height': '100vh',
            'border-radius': '0',
            'backgroundSize': 'cover'
        });
        $('#howl').css({
            'top': '20%',
            'left': '0%',
            'width': '100%'
        });

        $('#scroll_info,#logo_img_white,#img_box').css({
            'opacity': '1',
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#ffffff'
        });
        $('#logo_img_blue, #change_img_box, #change_img_text').css({
            'opacity': '0'
        });
        $('header').removeClass('header_blur');
    } else {
        $('#change_img_box').css({
            'opacity': '1',
        });
        $('#change_img_text').css({
            'opacity': '1',
            'fontSize': 30 + scroll / 600 + 'px'
        });
        $('#scroll_info,#logo_img_blue').css({
            'opacity': '1',
        });
        $('#logo_img_white, #img_box').css({
            'opacity': '0',
        });
        $('.first_category,#language_icon,#language-korean,#logo_text').css({
            'color': '#00B6FF'
        });
        $('header').addClass('header_blur');
    }
});

/*ghibli_animation*/
window.addEventListener('scroll', imgChange);

function imgChange() {
    const article1 = document.getElementById('ghibli_animation_article1_all');
    const articleHaku = document.getElementById('ghibli_animation_article1_haku');
    const articleBackground = document.getElementById('ghibli_animation_article1_img_background_first');

    let windowHeight = window.innerHeight;
    let article1Top = article1.getBoundingClientRect().top;
    let trigger = windowHeight / 3;

    if (article1Top < trigger) {
        article1.classList.add('opacityToggle');
        articleHaku.classList.remove('opacityToggle');
        articleBackground.classList.add('opacityToggle');
    } else {
        article1.classList.remove('opacityToggle');
        articleHaku.classList.add('opacityToggle');
        articleBackground.classList.remove('opacityToggle');
    }
}



/*others scroll slide*/
const flipRoute = document.querySelector('.others-flip-all');
const flipRouteTop = window.scrollY + flipRoute.getBoundingClientRect().top;
const nowScroll = window.scrollY - flipRoute.getBoundingClientRect().top;

document.addEventListener('scroll', slideLeft);
function slideLeft() {
    let leftRoute = window.scrollY - 14500;
    // console.log(leftRoute);
    if(leftRoute < 0){
        flipRoute.style.transform = 'translateX(' + (-leftRoute) + 'px)';
    }else if (leftRoute >= 0 && leftRoute < 600) {
        flipRoute.style.transform = 'translateX(0px)';
    } else if (leftRoute>= 600 && leftRoute< 1800) {
        flipRoute.style.transform = 'translateX(' + (-leftRoute+600) + 'px)';
    } else {
        flipRoute.style.transform = 'translateX(-1200px)';
    }
}

/*notice_slider*/
//왜 부드럽게 안움직이지? prev
function prev() {
    $('#notice_article .notice:last').prependTo('#notice_article');
    $('#notice_article').css('margin-left', -1200);  
    $('#notice_article').stop().animate({ marginLeft: -1200 }, 800); 
  }
  function next() {
    $('#notice_article').stop().animate({ marginLeft: -1200 }, 800, function () {
      $('#notice_article .notice:first').appendTo('#notice_article');
      $('#notice_article').css({ marginLeft: 0 });
    });
  }

  setInterval(next, 5000);  

  $('#prev').click(function () {
    prev();
  });

  $('#next').click(function () {
    next();
  });

  
/*ghibli_animation / toggle*/
const aniArticles = document.querySelectorAll('.ghibli_animation_article');
const paginations = document.querySelectorAll('#pagination a');
console.log(paginations);

const paginationLocate = paginations[0].getBoundingClientRect().top +  document.documentElement.scrollTop;
const articleTop = aniArticles[0].getBoundingClientRect().top+  document.documentElement.scrollTop;
const articleBottom = aniArticles[0].getBoundingClientRect().bottom+  document.documentElement.scrollTop;

/*pagination의 위치
paginations[0].getBoundingClientRect().top +  document.documentElement.scrollTop;

article의 위치
aniArticles[0].getBoundingClientRect().top+  document.documentElement.scrollTop;
aniArticles[0].getBoundingClientRect().bottom+  document.documentElement.scrollTop;
*/

console.log(aniArticles[0].getBoundingClientRect().top)
console.log(window.innerHeight);
//     article.getBoundingClientRect().bottom>0)
console.log(window.innerHeight>aniArticles[0].getBoundingClientRect().top+80+window.innerHeight&&
aniArticles[0].getBoundingClientRect().bottom+80>0);

