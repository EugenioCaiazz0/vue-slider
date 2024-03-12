const {createApp} = Vue;

createApp({

    data() {
        return {
                 carouselImgs: 
                 [
                    'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                    'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                    'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                    'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                    'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                ],

                carouselTitles:
                [
                    'Svezia', 'Perù','Chile','Argentina','Colombia',
                ],

                carouselDecription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',

                counter: 0
        }
    },
        methods: {
         
            nextSlide(direzione)
            {
                if (nextSlide) (this.counter++)
                else (this.counter--);
                
                if (this.counter == this.carouselImgs.length)
                {
                    this.counter = 0
                } else if (this.counter < 0) 
                {
                    this.counter = this.carouselImgs.length -1
                }
            }
        }   

}).mount(`#app`)

/*
let indexImg = 0;

{
    deactivateCarousel();
    indexImg++;
    if (indexImg > carousel.length-1) {
        indexImg = 0;
    }
    activateCarousel();
    console.log(`Siamo a pagina ${indexImg}`);
})

const prvsBtn = document.getElementById(`prvsBtn`);
prvsBtn.addEventListener(`click`, () => {
    deactivateCarousel();
    indexImg--;
    if (indexImg < 0) {
        indexImg = carousel.length-1;
    }
    activateCarousel();
    console.log(`Siamo a pagina ${indexImg}`);
}) 


function activateCarousel () {
            carouselImgs.innerHTML += 
            `<div class="my-carousel-item active">
                <img class="img-fluid" src="${carousel[indexImg].url}" alt="${carousel[indexImg].title} picture">
                <div class="item-description px-3">
                    <h2>${carousel[indexImg].title}</h2>
                    <p>${carousel[indexImg].description}</p>
                </div>
             </div>`
             console.log(`Slide attiva: ${carousel[indexImg].title}`);
             console.log(carousel[indexImg]);
        }

        function deactivateCarousel() {
            carouselImgs.innerHTML = ` `;
        }
*/
