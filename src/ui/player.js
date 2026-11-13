let hls = null ;

export function playStream(url){
    const video = document.getElementById('preview-video');

    //détruire l'ancien lecteur avant de creer le nouveau 

    if(hls){
        hls.destroy();
        hls = null ;
    }
    //verifier si la bibiotheque hls est bien chargé et supporté par le navigateur 
    if(window.Hls && Hls.isSupported()){
        //créer nouvelle instance
        hls = new Hls();
        //recevoir l url 
        hls.loadSource(url);
        //connecter à la balise html video
        hls.attachMedia(video);
        //des que le flux est pret Manifest_parsed demarre la lecture auto
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
        });
        //si la lecture n est pas supporté il utilise src.url
    }else if (video.canPlayType('application/vnd.apple.mpegurl')){
        video.src = url ;
        video.play().catch(()=> {})
    }
}                                                               