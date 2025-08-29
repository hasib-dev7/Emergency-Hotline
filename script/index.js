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
// call button on clik
getElement("card-content-box").addEventListener("click", (e) => {
  const coinIcon = getElement("coin-icon");
  let coinValue = parseInt(coinIcon.innerText) || 0;
  const callButton = e.target.className.includes("call-btn");
  // checkin coin number
  if (coinValue < 20) {
    alert("no calling");
    return;
  }

  //
  if (callButton) {
    const cardBox = e.target.closest(".card-box");
    const cardTitle = cardBox.querySelector(".card-title").innerText;
    const hotlineNumber = cardBox.querySelector(".hotline-number").innerText;
    //coin - 20 when call button click
    coinValue = coinValue - 20;
    coinIcon.innerText = coinValue;
    //  function
    const timeNow = new Date();
    const formateTime = timeNow.toLocaleTimeString();
    // calling show alert
    alert(`📞 calling ${cardTitle} ${hotlineNumber}...`);
    // crate nwe div element
    const sectionContainer = getElement("card-container");
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `
              <div class="bg-gray-100 p-3 rounded-md shadow-sm mt-5 flex justify-between items-center">
                <div>
                  <h2 class="card-title text-xl font-medium text-[#111111db]">
                  ${cardTitle}
                  </h2>
                  <p class="card-paragraph text-lg font-normal text-[#5C5C5C]">
                    ${hotlineNumber}
                  </p>
                </div>
                <!-- date -->
                <div>
                  <p>${formateTime}</p>
                </div>
              </div>
    `;
    sectionContainer.append(divContainer);
  }
});
// div container clear
const clearButton = getElement("clear-button");
clearButton.addEventListener("click", () => {
  const sectionContainer = getElement("card-container");
  sectionContainer.innerHTML = "";
});
// copy button
getElement("card-content-box").addEventListener("click", (e) => {
  const copyButton = e.target.className.includes("copy-btn");
  if (copyButton) {
    const copyCoin = getElement("copy-coin");
    const cardBox = e.target.closest(".card-box");
    const hotlineNumberText =
      cardBox.querySelector(".hotline-number").innerText;
    // copy count update
    let copyCount = parseInt(copyCoin.innerText) || 0;
    copyCount += 1;
    copyCoin.innerText = copyCount;

    // copy number alert show
    alert(`number copy ${hotlineNumberText}`);

    // copy to clipboard
    navigator.clipboard.writeText(hotlineNumberText);
  }
});
