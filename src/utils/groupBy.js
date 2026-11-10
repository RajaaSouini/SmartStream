//objet sous forme [{categ :"" , items : [nom1 , nom2 ...]}]
export function groupByCategory(channels){
    const groups = [];

    channels.forEach((channel) => {
        let trouver = groups.find((g) => g.category === channel.category);

        if(!trouver){
            trouver = {category : channel.category , items : []};
            groups.push(trouver);
        }
        trouver.items.push(channel);
    });
    return groups ;
    
}