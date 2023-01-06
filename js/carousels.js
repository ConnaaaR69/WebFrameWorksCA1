var concerts = new Splide('#concerts', {
    type: 'loop',
    perPage: 3,
    
    rewind: true,
    breakpoints: {
        1024: {
        perPage: 2,
        },
        600: {
        perPage: 1,
        },
},
});
var sports = new Splide('#sports', {
    type: 'loop',
    
    perPage: 3,
    rewind: true,
    breakpoints: {
        1024: {
        perPage: 2,
        },
        600: {
        perPage: 1,
        },
    },
});
var festivals = new Splide('#festivals', {
    type: 'loop',
    perPage: 3,
    rewind: true,
    breakpoints: {
        1024: {
        perPage: 2
        },
        600: {
        perPage: 1,
        },
    },
});

concerts.mount();
sports.mount();
festivals.mount();