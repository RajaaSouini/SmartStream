export function renderPreview(channel){
    document.getElementById('preview-image').src = channel.previewImage ;
    document.getElementById('preview-title').textContent =
    channel.channelNumber + "-" + channel.name;
}