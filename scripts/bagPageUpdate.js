// Dynamically injects content into bag page based on
// user selections
const populateBagItems = () => {
    const bagContent = JSON.parse(window.localStorage.getItem('bagContent')) || []

    const bagContentEl = document.getElementById("a6-bag-content")
    let totalPrice = 0;

    if (bagContent.length) {
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

            const itemRemoveLink = document.createElement("a");
            itemRemoveLink.innerHTML = 'Delete Item'
            itemRemoveLink.classList.add("remove-item-link")
            itemRemoveLink.onclick = onRemoveItem.bind(this, item);

            const individualBunDetailsEl = document.createElement("div");
            individualBunDetailsEl.classList.add("individual-bun-details");
            individualBunDetailsEl.appendChild(selectedItemTitleEl);
            individualBunDetailsEl.appendChild(selectedItemDetailsEl);
            individualBunDetailsEl.appendChild(itemRemoveLink);

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

const populateFavoritesList = () => {
    const favoritesList = JSON.parse(window.localStorage.getItem('favorites'))

    const favoritesEl = document.getElementById("favorites-list")

    if (favoritesList.length) {
        favoritesList.forEach((favoriteItem) => {
            const favoriteItemParentDivEl = document.createElement("div");
            favoriteItemParentDivEl.classList.add("favorite-item")

            const favoriteItemImageEl = document.createElement("img");
            favoriteItemImageEl.classList.add("favorite-item-image")
            favoriteItemImageEl.src = favoriteItem.image;

            const favoriteItemLinkEl = document.createElement("a");
            favoriteItemLinkEl.innerHTML = favoriteItem.type;
            favoriteItemLinkEl.classList.add("favorite-item-link")
            favoriteItemLinkEl.href = favoriteItem.url

            favoriteItemParentDivEl.appendChild(favoriteItemImageEl);
            favoriteItemParentDivEl.appendChild(favoriteItemLinkEl);

            favoritesEl.appendChild(favoriteItemParentDivEl)
        })
    }
    else {
        const noFavoritesMessageEl = document.createElement("p");
        noFavoritesMessageEl.innerHTML = "No items in favorites yet!"
        bagContentEl.appendChild(noFavoritesMessageEl)
    }
}

// Handles removal of item from bag
const onRemoveItem = (selectedItem) => {
    const currentBagContent = JSON.parse(window.localStorage.getItem('bagContent'))
    const newBagContent = currentBagContent.filter((item) => item.type !== selectedItem.type)
    window.localStorage.setItem('bagContent', JSON.stringify(newBagContent));
    location.reload();
}

populatePageContent = () => {
    populateBagItems();
    populateFavoritesList();
}