let faqs = {
    elements: {
        item: document.querySelectorAll('.faqs .faq'),
        title: document.querySelectorAll('.faqs .faq .question'),
        content: document.querySelectorAll('.faqs .faq .answer')
    },
    init: () => {
        console.log('init!');
        faqs.titleListener();
    },
    titleListener: () => {
        faqs.elements.title.forEach( title => {
            title.addEventListener('click', event => {
                console.log(event.target.parentElement.classList.toggle('open'));
            });
        });
    }
}
faqs.init();

jQuery(document).ready(function($) {
    let reviews = {
        elements: {
            container: ''
        },
        init: () => {
            reviews.slickInit();
        },
        slickInit: () => {
            $('.reviews .block-content').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 479,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false
                        }
                    },
                ]
            });
        }
    }
    reviews.init();
});
