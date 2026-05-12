document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o mapa focado em uma coordenada central
    // O '13' é o nível de zoom
    const map = L.map('map').setView([-23.5505, -46.6333], 13);

    // Carrega as camadas de mapa do OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Adiciona um marcador personalizado para a farmácia
    const farmaciaIcon = L.icon({
        iconUrl: 'media/icon.png', // Usa o ícone que já existe no projeto
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -35]
    });

    const marker = L.marker([-23.5505, -46.6333], {icon: farmaciaIcon}).addTo(map);
    
    // Popup que aparece ao clicar no ícone
    marker.bindPopup("<b>Sua Farmácia</b><br>Área de entrega ativa.").openPopup();
});