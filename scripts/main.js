// Handles addition of item to cart
const addItemToBag = () => {
    const selectedQty = document.getElementById("a5-bun-quantity");
    const selectedGlaze = document.getElementById("a5-bun-glaze");
    const selectedBunType = JSON.parse(window.localStorage.getItem("currentPageDetails")).name

    const selectedItem = {
        "type": selectedBunType,
        "qtyString": selectedQty.options[selectedQty.selectedIndex].text,
        "glaze": selectedGlaze.options[selectedGlaze.selectedIndex].text,
        "price": JSON.parse(window.localStorage.getItem("currentPageDetails")).price,
        "image": JSON.parse(window.localStorage.getItem("currentPageDetails")).imagePath,
        "qtyValue": document.getElementById("a5-bun-quantity").value
    }

    const currentBagContent = JSON.parse(window.localStorage.getItem('bagContent')) || [];
    const filteredCurrentBagContent = currentBagContent.filter((item) => item.type != selectedBunType);
    const newBagContent = [...filteredCurrentBagContent, selectedItem]
    window.localStorage.setItem('bagContent', JSON.stringify(newBagContent));

    updateBagCount(JSON.parse(window.localStorage.getItem('bagContent')).length)
    showAddedToBagToast()
}

// Handles toast popup action when item added to bag
const showAddedToBagToast = () => {
    const toastEl = document.createElement('div')
    toastEl.classList.add('item-added-toast-msg');
    toastEl.innerHTML = "Added to bag!"
    setTimeout(function () {
        toastEl.remove()
    }, 4000);
    document.body.appendChild(toastEl);
}

// Updates total count of items in bag
const updateBagCount = (count) => {
    const bagCountEl = document.getElementById("bag-count");
    bagCountEl.innerHTML = " (" + count + ")";
}

updateBagCount(JSON.parse(window.localStorage.getItem('bagContent'))?.length || 0)

onAddToFavorites = () => {
    const selectedBunType = JSON.parse(window.localStorage.getItem("currentPageDetails")).name

    const itemAddedToFavorite = {
        "type": selectedBunType,
        "image": JSON.parse(window.localStorage.getItem("currentPageDetails")).imagePath,
        "url": window.location.href
    }

    const currentFavoritesList = JSON.parse(window.localStorage.getItem('favorites')) || [];
    if (!currentFavoritesList.some((item) => item.type === itemAddedToFavorite.type)) {
        const newFavoritesList = [...currentFavoritesList, itemAddedToFavorite]
        window.localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
    }
    showAddedToFavoritesToast();
}

// Handles toast popup action when item added to favorites
const showAddedToFavoritesToast = () => {
    const toastEl = document.createElement('div')
    toastEl.classList.add('item-added-toast-msg');
    toastEl.innerHTML = "Added to favorites!"
    setTimeout(function () {
        toastEl.remove()
    }, 4000);
    document.body.appendChild(toastEl);
}