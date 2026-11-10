import { getChannels } from "./services/api.js";
import { showLoader , hideLoader } from "./ui/loader.js";
import { showError , hideError } from "./ui/error.js";
import { renderChannels } from "./ui/channelList.js";
async function init() {
    hideError();
    showLoader();

    try{
        const channels = await getChannels();
        renderChannels(channels)
        console.log(channels);
    }catch (error){
        showError(error , init);
        console.log("Erreur :" , error.message);
    }finally{
        hideLoader();
    }
}

init();