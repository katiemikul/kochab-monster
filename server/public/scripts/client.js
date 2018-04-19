console.log('Monster is working');

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded.');
    monsterList();
}

function monsterList(){
    console.log('pulling monster list');
    $.ajax({
    type: 'GET',
    url: '/monsterArray'
})
    .then(function(response){
        for (let i=0; i<response.length; i++){
            $('monsterArray').append(`<li> ${response[i].monster} </li>`);
        }
        });
}