let hls = null ;

export function playStream(url){
    const video = document.getElementById('preview-video');

    //détruire l'ancien lecteur avant de creer le nouveau 

    if(hls){
        hls.destroy();
        hls = null ;
    }

    if(window.Hls && Hls.isSupported()){
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
        });
    }else if (video.canPlayType('application/vnd.apple.mpegurl')){
        video.src = url ;
        video.play().catch(()=> {})
    }
}