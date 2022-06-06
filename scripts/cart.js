let cartArr = JSON.parse(localStorage.getItem("cart"));

function displayDishes(data){

    let cart = document.getElementById("cart")
    cart.innerHTML = null;
    data.map(function(elem){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem.strMealThumb;

        let title = document.createElement("p");
        title.innerHTML = elem.strMeal;

        let price = document.createElement("p");
        price.innerText = "Rs. "+elem.price;

        let btn = document.createElement("button");
        btn.innerText = "remove";
        btn.id = "remove";
        btn.addEventListener("click", function(){
            remove(elem);
        })

        div.append(img, title, price, btn);
        cart.append(div)
    })
}

displayDishes(cartArr)

function totalPrice(data) {
    let total = data.reduce(function(acc, elem){
        return acc+elem.price;
    },0)

    document.getElementById("total-price").innerText = total
}

totalPrice(cartArr);


function remove(data){
    cartArr = cartArr.filter(function(elem){
        return elem.idMeal != data.idMeal
    })

    localStorage.setItem("cart", JSON.stringify(cartArr));
    displayDishes(cartArr)
    totalPrice(cartArr);

}

function checkout(){
    window.location.href ="checkout.html";
}