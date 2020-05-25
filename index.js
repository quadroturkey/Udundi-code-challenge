const mainDiv = document.getElementById('main');
const exploreDiv = document.createElement('div');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  closedExplore();
});

function closedExplore() {
  mainDiv.innerHTML = '';
  exploreDiv.setAttribute('class', 'container');
  exploreDiv.innerHTML = '<h1 class="explore">Explore</h1>';

  mainDiv.append(exploreDiv);

  closedDetails();
}

function closedDetails() {
  const moreDetails = document.createElement('div');
  moreDetails.setAttribute('class', 'more-details');

  const iconSpan = document.createElement('span');
  iconSpan.setAttribute('class', 'iconSpan');
  iconSpan.innerHTML = '<i class="fas fa-plus-circle"></i>';

  iconSpan.addEventListener('click', () => { openModal() });

  const iconText = document.createElement('p');
  iconText.setAttribute('class', 'iconText');
  iconText.innerText = 'More Details';

  iconSpan.append(iconText);
  moreDetails.append(iconSpan);
  mainDiv.append(moreDetails);
}

function openModal() {
  console.log('span clicked');

  mainDiv.innerHTML = '';

  const modal = document.createElement('div');
  modal.innerHTML = `class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Explore</h5>
        <button id="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
      </div>
    </div>
  </div>`;
  mainDiv.append(modal);

  const closeModal = document.getElementById('closeModal');
  closeModal.addEventListener('click', () => {closedExplore()});

}
