// Programa principal:
function runApp() {

    // Monitora cliques nos links:
    $('a').click(routerLink);

}

// Processa clique em um link:
function routerLink() {

    // Captura valor do atributo 'href' do link clicado e armazena na variável 'href':
    var href = $(this).attr('href');

    // Se esta clicando em um link externo...
    if (
        href.substr(0, 8) == 'https://' ||
        href.substr(0, 7) == 'http://' ||
        href.substr(0, 1) == '#'
    ) {

        // Sai do programa retornando "true" para o HTML (processa o link):
        return true;
    }

    // Faz com que o HTML não processe o link:
    return false;
}












// Quando o documento estiver pronto, execute o programa 'runApp':
$(document).ready(runApp);