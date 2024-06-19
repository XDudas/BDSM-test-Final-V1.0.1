document.addEventListener('DOMContentLoaded', function() {
    const games = [
        { name: 'Sonic Riders JP', img: 'Display_Games/Sonic_Riders_JP.webp' },
        { name: 'NEW Super Mario Bros Wii', img: 'Display_Games/NEW_Super_Mario_Bros_WII.jpg' },
        { name: 'Need for Speed Underground 2', img: 'Display_Games/Need_for_Speed_Underground2.jpg' },
    ];

    const carouselInner = document.getElementById('games-carousel-inner');
    
    games.forEach((game, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');
        
        carouselItem.innerHTML = `
            <img src="${game.img}" class="d-block w-100" alt="${game.name}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${game.name}</h5>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
});
