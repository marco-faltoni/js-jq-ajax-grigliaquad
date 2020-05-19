
// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars :wink:





// BONUS: genero la griglia in jQuery utilizzando handlebars
var template_html = $('#template-handlebars').html();
var template = Handlebars.compile(template_html);

var data = {
    testo1 : 'container',
    testo2 : 'square',
};

var html = template(data);
$('body').append(html);

do {
    $('#box').append('<div class="square"></div>');
} while ($('.square').length < 36);


// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
$('.square').click(function() {
    // creo una variabile PRIMA dell'ajax in modo da poterla richiamare dentro l'ajax stesso
    var questo = $(this);
    $.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data){
            // recupero il numero restituito dall'api
            var numero_ajax = data.response;
            console.log(numero_ajax);
            // richiamo la funzione che mi permette sia di assegnare la classe giusta al quadrato selezionato, sia di mettergli dentro il numero recuperato dall'API
            colori(numero_ajax, questo);
        },
        'error': function() {
            alert('si è verificato un errore');
        },
    });

});

// funzione che mi permette sia di assegnare la classe giusta al quadrato selezionato, sia di mettergli dentro il numero recuperato dall'API
function colori(numero, quadrato) {
    // Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
    if (numero > 5) {
        quadrato.text(numero).addClass('green');
    } else {
        quadrato.text(numero).removeClass('green').addClass('yellow');
    }
}
