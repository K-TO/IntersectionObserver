const $video = document.querySelector('#video')
$video.addEventListener('play', () => {
    console.log('Video is play')
});

$video.addEventListener('pause', () => {
    console.log('Video is pause')
});
const options = {
    // root: document.querySelector('body'),
    rootMargin: '0px 0px 0px 0px',
    threshold: .5
};
function callback(entries, observer) {
    if (entries[0].isIntersecting){
        $video.play();
    } else {
        $video.pause();
    }
}
const observer = new IntersectionObserver(
    callback, 
    options
);
observer.observe($video)