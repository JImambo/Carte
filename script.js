// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------
    // 1. Logique pour la personnalisation du Header
    // ------------------------------------
    
    // SÉLECTION DES ÉLÉMENTS :
    const cardHeader = document.querySelector('.card-header');
    const btnSquare = document.getElementById('btn-square');
    const btnRounded = document.getElementById('btn-rounded');

    // CONTRÔLE DE SÉCURITÉ : Vérifie si tous les éléments nécessaires ont été trouvés
    if (cardHeader && btnSquare && btnRounded) {
        
        // --- ÉTAPE 1: Initialisation (applique le style arrondi au chargement) ---
        // Le header de la carte aura un style arrondi par défaut
        cardHeader.classList.add('header-rounded'); 

        // --- ÉTAPE 2: Gérer le clic sur le bouton 'Carré' ---
        btnSquare.addEventListener('click', () => {
            console.log("Carré cliqué : Ajout de header-square"); // Ajout d'un log pour vérifier
            
            // Ajoute la classe pour les coins droits
            cardHeader.classList.add('header-square'); 
            // Supprime la classe opposée
            cardHeader.classList.remove('header-rounded');
        });

        // --- ÉTAPE 3: Gérer le clic sur le bouton 'Arrondi' ---
        btnRounded.addEventListener('click', () => {
            console.log("Arrondi cliqué : Ajout de header-rounded"); // Ajout d'un log pour vérifier
            
            // Ajoute la classe pour les coins arrondis
            cardHeader.classList.add('header-rounded');
            // Supprime la classe opposée
            cardHeader.classList.remove('header-square'); 
        });
        
    } else {
        console.error("ERREUR JS : Impossible de trouver les boutons ou le header. Vérifiez les IDs/Classes dans l'HTML.");
    }

    // ------------------------------------
    // 2. Logique pour le téléchargement de la photo de profil (conservée)
    // ------------------------------------
    const fileInput = document.getElementById('file-upload');
    const profileImg = document.getElementById('editable-img');

    if (fileInput && profileImg) {
        fileInput.addEventListener('change', (event) => {
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImg.src = e.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
});