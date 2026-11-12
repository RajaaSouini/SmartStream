import { playStream } from "./player.js"; 

export function renderPreview(channel){
    //document.getElementById('preview-image').src = channel.previewImage ;
    document.getElementById('preview-video').poster = channel.previewImage ;
    document.getElementById('preview-title').textContent =
    channel.channelNumber + "-" + channel.name;

    playStream(channel.streamUrl);
}