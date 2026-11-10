import { groupByCategory } from "../utils/groupBy.js";

export function renderChannels(channels){
    const container = document.getElementById('channel-list');
    const groups = groupByCategory(channels);

    container.innerHTML = "";

    groups.forEach((group) => {
        const div = document.createElement('div');
        div.className = 'flex flex-col gap-4';

        div.innerHTML = ` <p class="text-[#A3ADC2] flex justify-between">${group.category} <span class="text-[#A3ADC2]">${group.items.length}</span></p>`;

        group.items.forEach((channel) =>{
            div.innerHTML += ` <button class="flex gap-8 border border-[#26314D] rounded-xl p-2 w-full items-center">
                    <p class="text-[#A3ADC2]">${channel.channelNumber}</p>
                    <img src="${channel.logo}" class="size-12" alt="imgCh">
                    <div>
                        <h2 class="text-[#E8ECF5]">${channel.name}</h2>
                        <p class="text-[#A3ADC2]">${channel.epg.currentProgram}</p>
                    </div>
                </button>`;
        });

        container.appendChild(div);
    })
}