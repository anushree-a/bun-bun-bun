// Handles click on original bun card
const onClickOriginalBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Original",
        "description": "Simple, delicious and best eaten when warm. You just can't go wrong with these! Best enjoyed with some butter on the side!",
        "price": 2,
        "imagePath": "./assets/bun8.jpeg"
    }))
}

// Handles click on walnut bun card
const onClickWalnutBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Walnut",
        "description": "Loaded with walnuts, this bun is best enjoyed toasted and with a warm coffee. Definitely worth the hype!",
        "price": 5.50,
        "imagePath": "./assets/bun6.jpeg"
    }))
}

// Handles click on blackberry bun card
const onClickBlackberryBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Blackberry",
        "description": "Sweet, decadent and laden with blueberries, this seasonal variety is worth the hype! People flock to the shop to get these during berry season!",
        "price": 8,
        "imagePath": "./assets/bun9.jpeg"
    }))
}

// Handles click on pumpkin spice bun card
const onClickPumpkinSpiceBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Pumpkin Spice",
        "description": "A fall favorite and something that’s always selling out, this cinnamon roll is now available all year round on popular demand! Best enjoyed warm with a hot cup of tea.",
        "price": 4,
        "imagePath": "./assets/bun5.jpeg"
    }))
}

// Handles click on gluten free bun card
const onClickGlutenFreeBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Original (Gluten Free)",
        "description": "Similar to our original bun, this one has just the same amount of goodness minus the gluten. Best enjoyed warm with a hot cup of tea.",
        "price": 6,
        "imagePath": "./assets/bun1.jpeg"
    }))
}

// Handles click on caramel bun card
const onClickCaramelBunCard = () => {
    window.localStorage.setItem("currentPageDetails", JSON.stringify({
        "name": "Caramel Pecan",
        "description": "Rich, creamy and with a hint of pecan nuts, this variety is our speciality. Whether you're hosting a party or just treating yourself - this is to die for!",
        "price": 12,
        "imagePath": "./assets/bun4.jpeg"
    }))
    const bunDetails = JSON.parse(window.localStorage.getItem("currentPageDetails"))
}

const onLoadDetailsPage = () => {
    const bunDetails = JSON.parse(window.localStorage.getItem("currentPageDetails"))
    document.getElementById("a5-details-title").innerHTML = bunDetails.name;
    document.getElementById("a5-details-oneliner").innerHTML = bunDetails.description;
    document.getElementById("a5-details-bun-detail-value").innerHTML = "$" + bunDetails.price + " X 1";
    document.getElementById("a5-details-bun-image").src = bunDetails.imagePath;
}

// Handles quantity selection for bun 
const onSelectQuantity = (context) => {
    context.blur()
    const bunDetails = JSON.parse(window.localStorage.getItem("currentPageDetails"))
    document.getElementById("a5-details-bun-detail-value").innerHTML = "$" + bunDetails.price + " X " + document.getElementById("a5-bun-quantity").value;
}