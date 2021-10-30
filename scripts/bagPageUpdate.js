// Dynamically injects content into bag page based on
// user selections
const populateBagItems = () => {
    const bagContent = JSON.parse(window.localStorage.getItem('bagContent'))

    const bagContentEl = document.getElementById("a6-bag-content")
    let totalPrice = 0;

    if (bagContent) {
        bagContent.forEach((item) => {
            const selectedItemParentDivEl = document.createElement("div");
            selectedItemParentDivEl.classList.add("bun-selections")

            const selectedItemImageEl = document.createElement("img");
            selectedItemImageEl.classList.add("bun-image")
            selectedItemImageEl.src = item.image;

            const selectedItemTitleEl = document.createElement("h4");
            selectedItemTitleEl.classList.add("bun-name")
            selectedItemTitleEl.innerHTML = item.type;

            const selectedItemDetailsEl = document.createElement("p");
            selectedItemDetailsEl.classList.add("bun-extra-info")
            selectedItemDetailsEl.innerHTML = 'Quantity: ' + item.qtyString + ' • Glaze: ' + item.glaze

            const individualBunDetailsEl = document.createElement("div");
            individualBunDetailsEl.classList.add("individual-bun-details");
            individualBunDetailsEl.appendChild(selectedItemTitleEl);
            individualBunDetailsEl.appendChild(selectedItemDetailsEl);

            const selectedItemPriceBreakup = document.createElement("div");
            selectedItemPriceBreakup.classList.add("bun-price")
            selectedItemPriceBreakup.innerHTML = '$' + item.price + ' X ' + item.qtyValue;

            selectedItemParentDivEl.appendChild(selectedItemImageEl);
            selectedItemParentDivEl.appendChild(individualBunDetailsEl);
            selectedItemParentDivEl.appendChild(selectedItemPriceBreakup);

            bagContentEl.appendChild(selectedItemParentDivEl)

            totalPrice += item.qtyValue * item.price
        })
    }
    else {
        const noItemsAddedMessageEl = document.createElement("p");
        noItemsAddedMessageEl.innerHTML = "No items in bag yet!"
        bagContentEl.appendChild(noItemsAddedMessageEl)
    }

    document.getElementById("total-amount-value").innerHTML = '$' + totalPrice;

    const proceedToPaymentBtnEl = document.getElementById("proceed-to-payment-btn")
    if (totalPrice) {
        proceedToPaymentBtnEl.classList.add("proceed-to-payment-btn-active")
    }
    else {
        proceedToPaymentBtnEl.classList.add("proceed-to-payment-btn-inactive")
    }
}