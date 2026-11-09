import { API_URL } from "../config.js";
//verifier que la res est bonne
export async function getChannels(){
    try{
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error('Erreur  :' + response.status);
        }

        return await response.json();
    }catch (error){
        throw error ; 
    }
}