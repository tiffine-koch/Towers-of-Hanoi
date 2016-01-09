$(document).ready(init);

    function init () {
    console.log('loaded');
    $disc = $('.disc');
    $tower = $('.tower');
    $message = $('#message');

    // $('#playAgain').on('click', playAgain);

    $('#t1').on('click', gameControl);
    $('#t2').on('click', gameControl);
    $('#t3').on('click', gameControl);

  //   $('#t1').on('click', moveDisc);
  //   $('#t2').on('click', moveDisc);
}

var discSelected;
var $selected;
var $clickedTower;

function gameControl(event) {
  if(!discSelected) {
    selectDisc(event)
  } else if (discSelected) {
    moveDisc(event)
  }
}

function selectDisc(event) {
  var $selected = $(event.target).parent(':first-child');
  console.log('loaded');
  discSelected = true;
  return $selected
}

function moveDisc() {
  var $clickedTower = $(event.target).hasClass('tower');

  discSelected = false;

  $($clickedTower).html(function() {
  $('<div>').prepend($selected);
  });
}

//use .text() to grab numbers for 'rules' and to find winner
// event.stopProprogation();
  // event.stopDefault();
// function foundWinner() {
//   if A === 0 in disc.length &&
//   //find disc length children of parent(tower)
//   B === disc.length || C === disc.length
//   } $message.text('You Win!');
// };
//
// function playAgain() {
//   $towers.on('click');
//   $message.text('Play Again');
// }
