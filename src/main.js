import { getChannels } from "./services/api.js";
import { showLoader , hideLoader } from "./ui/loader.js";
import { showError , hideError } from "./ui/error.js";
async function init() {
    hideError();
    showLoader();

    try{
        const channels = await getChannels();
        console.log(channels);
    }catch (error){
        showError(error , init);
        console.log("Erreur :" , error.message);
    }finally{
        hideLoader();
    }
}

init();