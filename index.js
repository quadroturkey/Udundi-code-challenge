let open = false;

function toggleEverything() {
  $('#main').toggle();
  $('#alternate').toggle();
  open = !open;
}

$('i').click(() => {
  if (open === false) {
    $('#card-status').removeClass('card-opened');
    $('#card-status').addClass('card-closed');
    toggleEverything();
  } else {
    $('#card-status').removeClass('card-closed');
    $('#card-status').addClass('card-opened');
    toggleEverything();
  }
});
