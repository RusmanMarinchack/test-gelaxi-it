"use strict"

const swiper = new Swiper('.banner__swiper', {
    pagination: {
        el: '.banner__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
      },
      spaceBetween: 20,
      slidesPerView: 1
});

// Перевірка на сенсорні екрани, і додаємо класс для body.
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBorry: function() {
        return navigator.userAgent.match(/BlackBorry/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBorry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

let events = document.body.classList.contains('_touch') ? 'click' : 'mousemove';

// Відкриваємо підменю в хедері.

function activeSubMenu() {
    let navItem = document.querySelectorAll('.nav__item')

    if(navItem.length >= 0) {
        navItem.forEach(item => {
            let subMenu = item.querySelector('.tabs')

            if(subMenu) {
                let btn = item.querySelector('.nav__link')
                
                if(btn) {
                    if(item.classList.contains('sub')) {
                        if (window.matchMedia("(min-width: 1027.98px)").matches) {
                            btn.addEventListener('click', (e) => {
                                e.preventDefault()
            
                                let heightSubMenu = subMenu.scrollHeight
    
                                if(item.classList.contains('active')) {
                                    item.classList.remove('active')
                                    subMenu.classList.remove('active')
                                    subMenu.style.height = `0px`
                                } else {
                                    item.classList.add('active')
                                    subMenu.classList.add('active')
                                    subMenu.style.height = `${heightSubMenu}px`
                                }
                            })
                        }
                    }
                }
            }
        })
    }
}

activeSubMenu()

// Робимо таби по сайту.
function tabs() {
    let tabs = document.querySelectorAll('.tabs')
    // console.log(tabs)
    if(tabs.length > 0) {
        tabs.forEach(item => {
            let btns = item.querySelectorAll('.tabs-header .section-catalog__item')
            
            if(btns.length > 0 ) {
                btns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        
                        let index = this.dataset.index
                        
                        let body = item.querySelector(`.tabs-body-${index}`)

                        if(body) {
                            removeClassActive()
                            this.classList.add('active')
                            body.classList.add('active')
                        }
                    })
                })
            }

            function removeClassActive() {
                let body = item.querySelectorAll('.tabs-body')
                let btn = item.querySelectorAll('.section-catalog__item')

                btn.forEach(b => {
                    b.classList.remove('active')
                })

                body.forEach(b => {
                    b.classList.remove('active')
                })
            }
        })
    }
}
tabs()


// Робимо меню бургер.

function menuBurger() {
    let burger = document.querySelector('.header__burger')

    if(burger) {
        let innerMenuBurger = document.querySelector('.header__inner')

        burger.addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                innerMenuBurger.classList.remove('active')
                document.body.classList.remove('look')
            } else {
                this.classList.add('active')
                innerMenuBurger.classList.add('active')
                document.body.classList.add('look')
            }
        })
    }
}
menuBurger()

// При скролі додаєми до Header класс.
function scrollHeader() {
    let header = document.querySelector('.header')

    if(header) {
        document.addEventListener('scroll', () => {
            if(window.scrollY >= 50) {
                header.classList.add("scroll")
            } else {
                header.classList.remove("scroll")
            }
        })
    }
}
scrollHeader()