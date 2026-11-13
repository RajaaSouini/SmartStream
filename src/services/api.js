import { API_URL } from "../config.js";
//verifier que la res est bonne
export async function getChannels(){
    try{
        const response = await fetch(API_URL);

        if(response.ok){
            return await response.json();
        }

        if(response.status === 404){
            throw new Error('404 not found , vérifions lurl d API ');
        }

        if(response.status === 500){
            throw new Error('erreur 500 du serveur ');
        }
        
        throw new Error('Erreur  :' + response.status); 
    }catch (error){
        throw error ; 
    }
}