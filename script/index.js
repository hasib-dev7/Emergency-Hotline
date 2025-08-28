// helper function
function getElement(id) {
  return document.getElementById(id);
}
// heart count update
getElement("card-content-box").addEventListener("click", (e) => {
  const heartIcon = e.target.className.includes("heart-icon");
  //   check heart icon class in the card box
  if (heartIcon) {
    const heartCoinElement = getElement("heart-coin");
    const updateCoin = parseInt(heartCoinElement.innerText) || 0;
    heartCoinElement.innerText = updateCoin + 1;
  }
});
