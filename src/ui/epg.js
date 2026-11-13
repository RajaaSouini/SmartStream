export function renderEpg(epg){
    document.querySelector('#en-direct').textContent = epg.currentProgram ;
    document.querySelector('#time').textContent = epg.startTime + "-" + epg.endTime ;
    document.querySelector('#pourcentege').textContent = epg.progressPercentage ;
    document.getElementById('barre').style.width = epg.progressPercentage + '%' ;
}