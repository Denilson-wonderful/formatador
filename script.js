function ajustador(link) {
    return link.replace(/[;:Ç]/g, caractere => {
        switch (caractere) {
            case ";":
                return "/";
            case ":":
                return "?";
            case "Ç":
                return ":";
        }
    });
}

function formatar() {
    const link = document.getElementById("link").value;

    const resultado = ajustador(link);

    document.getElementById("resultado").value = resultado;
}
