
function trackanime(placeholder,key='naruto'){
    let page = 1;
    const ref = `https://api.jikan.moe/v4/anime?page=${page}`;
    fetch(ref)
    .then(response => response.json())
    .then(res => {
        const data = res.data;
        console.log(data);
        data.forEach(anime => {
                console.log(anime);
                let {score,title,title_english,aired,images,mal_id} = anime;
                let {jpg,webp} = images;
                let {image_url,large_image_url,small_image_url} = jpg// && webp;
                let {day,month,year} = aired.prop.from;
                let animeCard = document.createElement('a');
                animeCard.classList.add('Card','CarouselCard');
                animeCard.href = `./Preview.html?id=${mal_id}`;
                animeCard.innerHTML =
                `
                    <img src="${image_url}" alt="Card Cover" class="Card--cover">
                    <h4 class="Card--title">${title}</h4>
                    <div class="date">${day},${month},${year}</div>
                    <div class="Card--rate flex-center">${score}</div>
                `;
                placeholder.appendChild(animeCard);
            });
    })
}
let place_1 = document.querySelector('#section-1 .carousel--inner');
let place_2 = document.querySelector('#section-2 .carousel--inner');
const placeHolders = [place_1,place_2];
placeHolders.forEach(plc =>{
   trackanime(plc);
})