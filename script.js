function ajustador(link) {
    return link
        .replaceAll(";", "/")
        .replaceAll(":", "?")
        .replaceAll("Ç", ":");
}

function formatar() {
    const link = document.getElementById("link").value;

    const resultado = ajustador(link);

    document.getElementById("resultado").value = resultado;
}
