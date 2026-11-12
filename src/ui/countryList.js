const names = {
    FR : "France",
    MA : "Maroc",
    ES : "Espagne",
    GB : "Royaume-Uni"
};

export function renderCountries(channels){
    const list = document.getElementById('country-list');

    list.innerHTML = "";

    const countries = [];

    channels.forEach((channel) =>{
        if(!countries.includes(channel.country)){
            countries.push(channel.country);
        }
    });

    list.innerHTML += `
        <button data-country="all" data-name="Tous les pays" 
        class="text-left text-[#E8ECF5] border border-[#26314D] rounded-xl p-3">
        Tous les pays</button>
    `;

    countries.forEach((count)=>{
        const name = names[count] || count ;

        list.innerHTML += `
            <button data-country="${count}" data-name="${name}" 
            class="text-left text-[#E8ECF5] border border-[#26314D] rounded-xl p-3">
            <span class="text-[#6A4BF0]">${count}</span>${name}
            </button>
        `;
    })
}