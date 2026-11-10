import { getChannels } from "./services/api.js";
import { showLoader , hideLoader } from "./ui/loader.js";
async function init() {
    showLoader();

    try{
        const channels = await getChannels();
        console.log(channels);
    }catch (error){
        console.log("Erreur :" , error.message);
    }finally{
        hideLoader();
    }
}

init();