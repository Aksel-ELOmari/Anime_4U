// Start Activate the function after the DOM has been loaded
window.addEventListener('DOMContentLoaded',()=>{

// ? => function to toggle the display of the elements
function toogleDisplay_Flex(Ele){
   if(Ele.style.display == 'none'){
      Ele.style.display = 'flex';
   }else{
      Ele.style.display = 'none';
   }
} 
// ? <= function to toggle the display of the elements

// ? => function to toggle the scroll behavier of the sliders
function scroller(rightBtn, leftBtn, Scroller) {
   rightBtn.addEventListener('click', () => {
       Scroller.scrollLeft += 300;  // Use numeric values
   });
   leftBtn.addEventListener('click', () => {
       Scroller.scrollLeft -= 300;
   });
}


//! Declaring the btns
let scrollBtns = [
   {
       right: document.getElementById('TrendRight-btn'),
       left: document.getElementById('TrendLeft-btn'),
       Scroller: document.querySelector('#section-1 .carousel--inner')
   },
   {
       right: document.getElementById('PopRight-btn'),
       left: document.getElementById('PopLeft-btn'),
       Scroller: document.querySelector('#section-2 .carousel--inner')
   }
];

//Activat the functionality
scrollBtns.forEach(el =>{
   let {right,left,Scroller} = el;
   scroller(right,left,Scroller);
})


// * => function to toggle the display of the elements
function toggleIframePlayPause(isPlaying) {
   const iframe = document.querySelector('iframe');
   if (isPlaying) {
       iframe.setAttribute('play', 'true');  // Assuming the iframe can handle this attribute
   } else {
       iframe.setAttribute('pause', 'true');
   }
}

const VideosCarousel = document.querySelector('.VideosPlayer')
const watchbtn = document.getElementById('watchbtn');
const hideVideoPlayer = document.getElementById('hideCarousel');
watchbtn.addEventListener('click',()=>{
   toogleDisplay_Flex(VideosCarousel);
   toggleIframePlayPause(isPlaying);
});
hideVideoPlayer.addEventListener('click',()=>{
   toogleDisplay_Flex(VideosCarousel);
   toggleIframePlayPause(isPlaying);
});
// * <= function to toggle the display of the elements
      
// ? => function to toggle the scroll behavier of the sliders
const Videos = document.querySelectorAll('.Video');
let rightBtn = document.querySelector('#VideoCarousel-rightbtn');
let LeftBtn = document.querySelector('#VideoCarousel-leftbtn');
const Scroller = document.querySelector('.VideosPlayer .Videos--inner');
Videos.forEach(Video =>{
      let VideoWidth = Video.offsetWidth;
      rightBtn.addEventListener('click',()=>{
         Scroller.scrollLeft += VideoWidth;
      });
      LeftBtn.addEventListener('click',()=>{
         Scroller.scrollLeft -= VideoWidth;
      }); 
})






// End Activate the function after the DOM has been loaded
});

