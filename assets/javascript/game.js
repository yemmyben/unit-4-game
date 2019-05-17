var random_result;
var lost = 0;
var win = 0;
var previous = 0;

function resetAndStart() {

$('.crystals').empty();

$('#previous').empty();
var images = [
    'assets/images/agatemeaning.jpg',
    'assets/images/cams-crystals-etsy.jpg',
    'assets/images/HEA-0002.jpg',
    'assets/images/rsqs231-rose-quartz.jpg'
];

random_result = Math.floor(Math.random() * 101) + 19;

$('#result').html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
console.log(random);
    var crystal = $('<div>');
        crystal.attr({
            'class': 'crystal',
            'data-random': random
        });

        crystal.css({
            'background-image':"url('" + images[i] + "'",
            'background-size':'cover'
        });

    $(".crystals").append(crystal);

    }
    $('#previous').html(previous);
}

resetAndStart();

$(document).on('click', '.crystal', function() {
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $('#previous').html(previous);
    
    if (previous > random_result) {

        lost++;

        $('#loss').html('Losses: ' + lost);

        previous = 0;

        resetAndStart();

    } else if (previous === random_result) {
        win++;

        $('#win').html('Wins: ' + win);

        previous = 0;

        resetAndStart();
    }
});