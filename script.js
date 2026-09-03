function ajustador(link) {
    const mapa = {
        ";": "/",
        ":": "?",
        "Ç": ":"
    };

    // Procura por ;, : ou Ç e substitui de acordo com o mapa acima
    return link.replace(/[;:Ç]/g, match => mapa[match]);
}

function formatar() {
    const link = document.getElementById("link").value;

    const resultado = ajustador(link);

    document.getElementById("resultado").value = resultado;
}
