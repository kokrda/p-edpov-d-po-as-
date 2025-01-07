document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        // Přidání třídy pro animaci
        this.classList.add('clicked');

        // Získání cílové adresy
        const target = this.getAttribute('data-target');
        
        // Po skončení animace přesměrování na stránku
        setTimeout(() => {
            window.location.href = target;
        }, 1000); // Čas odpovídá délce animace (1 sekunda)
    });
});


