let url = " https://masai-food-api.herokuapp.com/api/meals/india"

async function getDish(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        let dishes = data[0].meals;
        console.log(dishes);

        displayDishes(dishes)
    }
    catch(error){
        console.log(error)
    }
}

getDish()

function displayDishes(data){

    let menu = document.getElementById("menu")
    data.map(function(elem){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem.strMealThumb;

        let title = document.createElement("p");
        title.innerHTML = elem.strMeal;
        title.style.textAlign="center"

        let price = document.createElement("p");
        price.innerText = "Rs. "+elem.price;
        price.style.textAlign="center"

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.style.marginLeft="100px";
        btn.style.color="red"
        btn.id = "addtocart";
        btn.addEventListener("click", function(){
            addToCart(elem);
        })

        div.append(img, title, price, btn);
        menu.append(div)
    })
}

cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(elem){
    cartArr.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    document.getElementById("count").innerText = cartArr.length;
}

document.getElementById("count").innerText = cartArr.length;