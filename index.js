let open = false;

$('i').click(() => {
  if (open === false) {
    $('#main').toggle();
    $('#alternate').toggle();
    open = !open;
  } else {
    console.log('second part running, toggling all 3 divs');
    $('#main').toggle();
    $('#alternate').toggle();
    $('#third').toggle();
    setTimeout(() => { $('#third').toggle(); }, 300);
    open = !open;
  }
});
