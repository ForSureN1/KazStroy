$('.basic__slider').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    // nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    prevArrow: $('.basic-prev'),
    nextArrow: $('.basic-next'),
})

$('.projectmain__slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    focusOnHover: true,
    // prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    // nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    prevArrow: $('.projectmain-prev'),
    nextArrow: $('.projectmain-next'),
    responsive: [{
        breakpoint: 1160,
        settings: {
            slidesToShow: 1,
        }
    }]
})

$('.project__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    focusOnHover: false,
})

$('.project-prev').click(function() {
    $(this).parents('.project__item').find('.project__slider').slick('slickPrev')
        // console.log($(this).parents('.project__item'))
})
$('.project-next').click(function() {
    $(this).parents('.project__item').find('.project__slider').slick('slickNext')
        // console.log($(this).parents('.project__item'))
})

let sliderContainer = document.querySelector('.project__items')

function countSlide() {
    let sliders = document.querySelectorAll('.project__slider')
    sliders.forEach(slider => {
        countSlider = slider.querySelector('.slick-dots').childElementCount
        totalHTMLElement = slider.closest('.project__item').querySelector('.countSlide')
        totalHTMLElement.innerText = countSlider;
    })
}

if (sliderContainer) {
    countSlide();
}




$('.project__slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
    // console.log($(this).parents('.project__item').find('.currentSlide'))
    // console.log(currentSlide)
    // $('.currentSlide').text(currentSlide + 1)
    // $('.countSlide').text(countSlide)
    const parent = e.target.closest('.project__item')
        // console.log(currentSlide + 1)
        // console.log(e.target.closest('.project__item'))
        // console.log($(this).next())
        // console.log(slick.countSlide)
        // console.log(slick.slideCount)
        // console.log(parent.children[0].children[0].children[0].children[1].children[0].children[2].value = currentSlide)
        // parent.children[0].children[0].children[0].children[1].children[0].children[1].textContent = currentSlide + 1

    if (parent) {
        totalCurr = parseInt(currentSlide + 1)
        if (totalCurr <= 9) {
            parent.querySelector('.currentSlide').innerText = '0' + totalCurr
        } else {
            parent.querySelector('.currentSlide').innerText = totalCurr
        }
    }
    // parent.childNodes('.project__arrow').innerHtml = currentSlide
    // console.log(currentSlide)
})




document.addEventListener('DOMContentLoaded', () => {

    let hamb = document.querySelector('.hamb')

    hamb.addEventListener('click', function() {
        hamb.classList.toggle('active')
        if (hamb.classList.contains('active')) {
            $('.header__menu').slideDown();
        }
        if (!hamb.classList.contains('active')) {
            $('.header__menu').slideUp();
        }
    });

    let preloader = document.querySelector('.preloader')
    if (preloader) {
        preloader.classList.add('remove')
    }
    setTimeout(() => {
        document.querySelector('body').classList.remove('hidden')
    }, 800);


    let headerBg = document.querySelector('.header__bg')

    if (headerBg) {
        autoPaddingHeader();
        window.addEventListener('resize', autoPaddingHeader)
        window.addEventListener('scroll', autoPaddingHeader)
    }

    function autoPaddingHeader() {
        setTimeout(() => {
            headerBg.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';
        }, 110)
    }

    //lang
    let lang = document.querySelectorAll('.lang__selected');
    if (lang) {
        lang.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.target.nextElementSibling.classList.toggle('active')
            })
        })

    }


    //Header
    window.addEventListener('scroll', addClassHeader);
    addClassHeader();

    function addClassHeader() {
        let header = document.querySelector('.header')
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    //tabs
    //Tabs internet
    let listinner = document.querySelector('.tabs')

    if (listinner) {
        productTabs();
        productItemTabs();
    }

    function productTabs() {
        let btn = document.querySelectorAll('.tab');
        let block = document.querySelectorAll('.tab-content')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    $('.project__slider').slick('setPosition')
                })
            })
        })
    }

    function productItemTabs() {
        let list = document.querySelector('.tabs')
        let items = document.querySelectorAll('.tab')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('tab')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }

    let project__form = document.querySelector('.project__form')
    let form = document.querySelector('.project-form')
    let timer;
    if (project__form) {
        let checkMarks = document.querySelectorAll('.js-check')
        checkMarks.forEach(check => {
            check.addEventListener('change', () => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    form.submit();
                }, 1200)
            })
        })
    }

})