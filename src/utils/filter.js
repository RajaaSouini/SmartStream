export function filterChannels(channels){
    const search = document.getElementById('search-input');
    const searchValue = search.value.toLowerCase();

    return channels.filter((channel) =>{

        const searchBy = channel.name.toLowerCase().includes(searchValue) ||
        String(channel.channelNumber).includes(searchValue) ||
        channel.category.toLowerCase().includes(searchValue) || 
        channel.epg.currentProgram.toLowerCase().includes(searchValue);

        return searchBy ;
    })
}