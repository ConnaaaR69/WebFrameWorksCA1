import { Splide } from "/@splidejs/splide/dist/js/splide.min.js";
document.addEventListener('DOMContentLoaded', function() {
    var concerts = new Splide('#concerts', {
        type: 'loop',
        perPage: 3,
        rewind: true,
    });
    var sports = new Splide('#sports', {
        type: 'loop',
        perPage: 3,
        rewind: true,
    });
    var festivals = new Splide('#festivals', {
        type: 'loop',
        perPage: 3,
        rewind: true,
    });

    concerts.mount();
    sports.mount();
    festivals.mount();
})