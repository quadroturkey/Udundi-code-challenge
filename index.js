const mainDiv = document.getElementById('main');
const exploreDiv = document.createElement('div');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  closedExplore();
  closedDetails();
});

function closedExplore() {

  exploreDiv.setAttribute('class', 'container');
  exploreDiv.innerHTML = '<h1 class="explore">Explore</h1>';

  mainDiv.append(exploreDiv);
}

function closedDetails() {
  const moreDetails = document.createElement('div');
  moreDetails.setAttribute('class', 'more-details');

  const iconSpan = document.createElement('span');
  iconSpan.setAttribute('class', 'iconSpan');
  iconSpan.innerHTML = '<i class="fas fa-plus-circle"></i>';

  const iconText = document.createElement('p');
  iconText.setAttribute('class', 'iconText');
  iconText.innerText = 'More Details';

  iconSpan.append(iconText);
  moreDetails.append(iconSpan);
  mainDiv.append(moreDetails);
}
