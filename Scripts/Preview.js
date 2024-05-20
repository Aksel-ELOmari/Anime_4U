// Start Activate the function after the DOM has been loaded
window.addEventListener('DOMContentLoaded',()=>{

   const anime_data = window.location.search;
   const Url_params = new URLSearchParams(anime_data);
   const anime_id = Url_params.get('id');
   // console.log(`${anime_id}`)
   // console.log('</hr>')
   const key = Url_params.get('q');
    //! function to fetch the anime
    trackanime();
    function trackanime(){
      const ref = `https://api.jikan.moe/v4/anime?`;
      fetch(ref)
        .then(response => response.json())
        .then(res => {
            const data = res.data;
            data.forEach(anime => {
                  if(anime.mal_id == anime_id){
                        // console.log(anime);
                            let {score,title,title_english,title_japanese,aired,images,mal_id,genres,synopsis,type,trailer,studios,producers,status,url,source,episodes,airing,duration,rating,scored_by,popularity,favorites,season} = anime;
                            let {jpg,webp} = images;
                            let {image_url,large_image_url,small_image_url} = jpg // && webp;
                            document.getElementById('headerCover').src = large_image_url;
                            let {day,month,year} = aired.prop.from;
                            let {from,to} = aired.prop;

                            let PreviewCard = document.createElement('div');
                            PreviewCard.id = anime_id;
                            PreviewCard.classList.add('PreviewCard--inner','flex');
                            PreviewCard.innerHTML =
                            `
                                    <div class="Col-1 CardCover">
                                      <img src="${image_url?image_url:large_image_url}" id="PreviewCard-poster" alt="">
                                    </div>
                                    <div class="Col-2 CardData">
                                        <h1 class="Card--title">${title?title:title_english},<span class="media-type">${type}</span><span class="date">(${year})</span></h1>
                                        <h3 class="originalName orangered">${title_japanese !== title?title_japanese:''},</h2>
                                        <div class="Genres-tags flex"></div>
                                        <div class="wraper flex">
                                            <span id="MovieRate" class="flex-center ratesvg">${score}<i class="fa-solid fa-star"></i></span>
                                            <a href="#VideosPlayer"><span id="watchbtn" class="flex-center watchsvg"><i class="fa-solid fa-play"></i></span></a>
                                            <a href="${url}" title="link" id="originalSite">Watch Movie</a>
                                        </div>
                                        <div class="Overview">
                                          <h4 class="orangered">Overview</h4>
                                          <p class="Overview-desc">${synopsis}</p>
                                        </div>
                                        <div class="Catalog my-1">
                                            <div class="catalog--row flex my--5">
                                                <span class="source"><em class="Property">Source :</em> ${source}</span>
                                                <span class="episodes"><em class="Property">Episodes :</em> ${episodes}</span>
                                                <span class="status"><em class="Property">status :</em> ${status}</span>
                                                <span class="airing"><em class="Property">steal Airing :</em> ${airing==false?'No':'Yes'}</span>
                                            </div><hr>
                                            <div class="catalog--row flex my--5">
                                                <span class="string"><em class="Property">Aired </em>${'from' +from.day+'/'+from.month+'/'+from.year + ',to '+to.day?to.day:''+'/'+to.month?to.month:''+'/'+to.year?to.year:''}</span>
                                                <span class="dur"><em class="Property">Duration :</em> ${duration}</span>
                                                <span class="rating"><em class="Property">Rating :</em> ${rating}</span>
                                                <span class="scoredby"><em class="Property">Scored_by :</em> ${scored_by}</span>
                                            </div><hr>
                                            <div class="catalog--row flex my--5">
                                                <span class="popularity"><em class="Property">popularity :</em> ${popularity}</span>
                                                <span class="favourites"><em class="Property">favorites :</em>${favorites}('heart icon')</span>
                                                <span class="season"><em class="Property">Season :</em> ${season?season:'No Season'}</span>
                                            </div><hr>
                                            <div class="catalog--row flex my--5 producers">
                                                <em class="Property">Producers :</em>
                                                <ul></ul>
                                                <!-- producers Gos here ... -->
                                            </div><hr>
                                            <div class="catalog--row flex my--5 Studios">
                                                <em class="Property">Studios :</em>
                                                <ul></ul>
                                                <!-- Studios Gos here ... -->
                                            </div><hr>
                                        </div>
                                    </div>
                            
                            `;
                            document.querySelector('.Card--countainer').appendChild(PreviewCard);
                            // ! Multiply Elements
                            // Genres tags
                            for (let i = 0; i < genres.length; i++) {
                                // console.log(genres[i].mal_id);
                                let genre = genres[i];
                                let {mal_id,url,name,type} = genre;
                                let genreTag = document.createElement('a');
                                genreTag.id = mal_id;
                                genreTag.href = url;
                                genreTag.setAttribute('type',type);
                                genreTag.classList.add('genre-tag','active');
                                genreTag.innerHTML = name;
                                document.querySelector('.Genres-tags').append(genreTag);
                            }
                            
        
                            // geting the Trailers
                            (function(){
                                if(trailer)
                                {
                                    let {youtube_id,url,embed_url,img_url} = trailer;
                                    let Video = document.createElement('div');
                                    Video.id = youtube_id;
                                    Video.classList.add('Video','scroller-chil','activeVideo');
                                    Video.innerHTML = `<h4 class="video--title">${title}</h4><iframe muted pause silence src="${embed_url}" frameborder="0"></iframe>`;
                                    document.querySelector('.Videos--inner').append(Video);
                                }else{
                                    document.querySelector('.Videos--inner').style.display = 'none';
                                }
                            })();
                            // Producers 
                            producers.forEach(pro =>{
                                let Producer = document.createElement('span');
                                Producer.id = pro.mal_id;
                                Producer.classList.add('producer');
                                Producer.innerHTML = `<a href="${pro.url}">${pro.name}</a> (${pro.type})`;
                                document.querySelector('.producers ul').append(Producer);
                            })
                            // Studios
                            studios.forEach(std =>{
                              let {mal_id,type,name,url} = std;
                                let studio = document.createElement('li');
                                studio.id = mal_id;
                                studio.classList.add('Studio');
                                studio.innerHTML = `<a href="${url}">${name}</a> (${type})`;
                                document.querySelector('.Studios ul').append(studio);
                            })

                      }
                              
                });
          })
      }

      //! function to fetch the Casts
      getPeople(anime_id);
      function getPeople(id){
        fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
        .then(response => response.json())
        .then(res => {
            let data = res.data;
            console.log(data);
            const Voices = data.voices;
            Voices.forEach(voice =>{
                let {mal_id,url,images,name} = voice.person;
                let {jpg} = images;
                let {image_url} = jpg;
                let Cast = document.createElement('div');
                Cast.classList.add('Cast');
                Cast.id = mal_id;
                Cast.innerHTML =
                `
                    <img src="${image_url}" class="cast-profile" alt="img">
                    <div class="roleName"></div>
                    <div class="ActorName"><a href="${url}" title="link">${name}</a></div>
                `;
                document.querySelector('.casts--inner').append(Cast);  
            })
            
           
        })
      }

    // End Activate the function after the DOM has been loaded
});
    



 


