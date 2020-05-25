const mainDiv = document.getElementById('main');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  closedDetails();
});

function closedDetails() {
  console.log('closed details func called');

  const welcomeDiv = document.createElement('div');
  welcomeDiv.setAttribute('class', 'container');
  welcomeDiv.innerHTML = '<h1 class="explore">Explore</h1>';

  console.log(welcomeDiv);
  console.log(mainDiv);

  mainDiv.append(welcomeDiv);
}