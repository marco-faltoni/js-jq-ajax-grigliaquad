
// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars :wink:


// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
$('.square').click(function() {
    $.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data){
            // recupero il numero restituito dall'api
            var numero_ajax = data.response;
            console.log(numero_ajax);
            colori(numero_ajax);
        },
        'error': function() {
            alert('si è verificato un errore');
        },
    });

});


function colori(numero) {
    var classe;
    if (numero > 5) {
        classe = 'green';
    } else {
        classe = 'yellow';
    }
    return classe;
}


// // genero la griglia con jQuery, aggiungendo le classi al div con ID Box
// do {
//     $('#box').append('<div class="square"></div>');
// } while ($('.square').length < 36);
// //
// // console.log(numeri_quadrati);



// ad ogni classe "square" cho ho generato sopra con JQuery vado ad aggiungergli del testo con un numero generato grazie alla funzione "genera_random"; inoltre gli aggiungo la classe giusta con la funzione "colori", assegnadogli quindi o quella "red"(numero pari), o quella "black"(numero dispari), o quella "green"(numero 0).
// $('.square').each(function(){
//     var numeri_casuali = genera_random(0, 10);
//     var classe = colori(numeri_casuali);
//     $(this).text(numeri_casuali).addClass(classe);
// });
