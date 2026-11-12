export function showError(message , Ressayer){
    document.getElementById('error-message').textContent = message;
    document.getElementById('retry-button').onclick = Ressayer;
    document.getElementById('error').classList.remove('hidden');
}

export function hideError(){
    document.getElementById("error").classList.add('hidden');
}