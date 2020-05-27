let open = false;

$('i').click(() => {
  if (open === false) {
    $('#main').toggle();
    $('#alternate').toggle();
    open = !open;
  } else {
    $('#main').toggle();
    $('#alternate').toggle();
    $('#third').toggle();
    setTimeout(() => { $('#third').toggle(); }, 300);
    open = !open;
  }
});
