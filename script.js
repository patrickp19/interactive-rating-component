submitBtn = document.getElementById("submit");
ratingState = document.getElementById("rating-state");
thankYouState = document.getElementById("thank-you-state");
ratingMessage = document.getElementById("rating-message");

function submit() {
  if (
    document.querySelector('input[name="rating-group"]:checked').value != null
  ) {
    console.log(
      document.querySelector('input[name="rating-group"]:checked').value
    );
    ratingMessage.innerText = document.querySelector(
      'input[name="rating-group"]:checked'
    ).value;
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
  }
}
