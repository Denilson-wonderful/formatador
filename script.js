function ajustador(link) {
    return link
        .replaceAll("Ç", ":")
        .replaceAll(";", "/")
        .replaceAll(":", "?");
}

function formatar() {
    const link = document.getElementById("link").value;

    const resultado = ajustador(link);

    document.getElementById("resultado").value = resultado;
}
