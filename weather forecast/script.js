// script.js
document.getElementById('confirmBtn').addEventListener('click', function() {
    // Získání hodnoty z inputu
    const address = document.getElementById('address').value;

    // Kontrola, jestli uživatel zadal nějaké místo
    if (address.trim() === '') {
        alert('Zadejte prosím své místo bydliště!');
        return;
    }

    // Skrytí formuláře a tlačítka pro potvrzení
    document.querySelector('h1').style.display = 'none';
    document.querySelector('label').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('confirmBtn').style.display = 'none';

    // Zobrazení načítacího baru
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simulace načítání (například 3 sekundy)
    setTimeout(function() {
        // Skrytí načítacího baru
        loader.style.display = 'none';

        // Zobrazení zprávy
        document.getElementById('message').style.display = 'block';
    },5000); // Po 5 sekundách se zobrazí zpráva
});
