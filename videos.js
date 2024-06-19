document.addEventListener('DOMContentLoaded', function() {
    const videos = [
        { name: 'Artur Meme', video: 'Display_Videos/Artur_Meme.mp4' },
        { name: 'Diana Meme', video: 'Display_Videos/Diana_Meme.mp4' },
        { name: 'Duarte Meme', video: 'Display_Videos/Duarte_meme.mp4' },
        { name: 'Miguel Yasmin Meme', video: 'Display_Videos/Miguel_Yasmin_Meme.mp4' },
    ];

    const carouselInner = document.getElementById('videos-carousel-inner');
    
    videos.forEach((video, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active');
        
        carouselItem.innerHTML = `
            <video class="d-block w-100" controls>
                <source src="${video.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="carousel-caption d-none d-md-block">
                <h5>${video.name}</h5>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
});
