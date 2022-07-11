window.addEventListener('DOMContentLoaded', function() {
    function fetchData() {
        fetch('cards.json')
            .then((res) => res.json())
            .then((data) => {
    
                const cardListEl = document.querySelector(".cards-wrapper")
            
                data.forEach(function (card) {

                    cardListEl.innerHTML += `
                        <div data-aos="fade-up" data-aos-duration="2000" class="cards-wrapper__item">
                            <div class="cards-wrapper__item--img">
                            <img src="images/cards/${card.img}" alt="${card.altImg}">
                            </div>
                            <p class="cards-wrapper__item--descr">${card.descr}</p>
                            <a href="#" class="cards-wrapper__item--link">
                                ${card.link}
                            </a>
                        </div>
                    `;
                });
            })
    };
    
    fetchData();

    function ToggleText() {
        document.querySelectorAll('.blog-cards__item--link').forEach((item) => 
            item.addEventListener('click', () => {
                item.parentNode.classList.add('blog-cards__item--active');
            })
        )

        document.querySelectorAll('.blog-cards__item--text').forEach((hidde) => 
            hidde.addEventListener('click', () => {
                hidde.parentNode.classList.remove('blog-cards__item--active');
            })
        )
    }

    ToggleText();

    function burger() {
        let burger = document.querySelector('.header-wrapper__menu');
        let menu = document.querySelector('.header-wrapper__mobile--menu');
        
        burger.onclick = function() {
            burger.classList.toggle('header-wrapper__menu--active');
            menu.classList.toggle('header-wrapper__mobile--menu__active');
        }
    }

    burger();
});

    