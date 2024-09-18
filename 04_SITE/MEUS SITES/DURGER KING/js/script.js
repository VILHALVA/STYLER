const tg = window.Telegram.WebApp;

const menu = [
    {
        name: "Burger",
        price: 4.99,
        image: "img/burger.png"
    },

    {
        name: "Fries",
        price: 1.49,
        image: "img/ff.png"
    },

    {
        name: "HotDog",
        price: 3.49,
        image: "img/hotdog.png"
    },

    {
        name: "Taco",
        price: 3.99,
        image: "img/taco.png"
    },

    {
        name: "Pizza",
        price: 7.99,
        image: "img/pizza.png"
    },

    {
        name: "Doughnut",
        price: 1.49,
        image: "img/doughnut.png"
    },

    {
        name: "Popcorn",
        price: 1.99,
        image: "img/popcorn.png"
    },

    {
        name: "Coke",
        price: 1.49,
        image: "img/coke.png"
    },

    {
        name: "Cake",
        price: 10.99,
        image: "img/cake.png"
    },

    {
        name: "Icecream",
        price: 5.99,
        image: "img/icecream.png"
    },

    {
        name: "Cookie",
        price: 3.99,
        image: "img/cookie.png"
    },

    {
        name: "Flan",
        price: 7.99,
        image: "img/flan.png"
    }
];

const menuDiv = document.querySelector(".menu");
const viewOrder = document.querySelector(".view-order");
const checkDiv = document.querySelector(".check");


let index = 0;
while (index < menu.length) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <div class="amount hide">
            <span id="amount">0</span>
        </div>
        <div class="image">
            <img src="${menu[index].image}" alt="">
        </div>
        <div>
            <span class="nameAndPrice">${menu[index].name} • <b>${menu[index].price}</b></span>
        </div>
        <div class="buttons">
            <button id="add" class="add">ADD</button>
            <button id="minus" class="minus hide">−</button>
            <button id="plus" class="plus hide">+</button>
        </div>
    `;
    menuDiv.appendChild(div);

    const amountDiv = div.querySelector(".amount");
    const amount = div.querySelector("#amount");
    const add = div.querySelector("#add");
    const minus = div.querySelector("#minus");
    const plus = div.querySelector("#plus");

    add.addEventListener("click", () => {
        amount.textContent = +amount.textContent + 1;
        amountDiv.classList.remove("hide");
        add.classList.add("hide");
        minus.classList.remove("hide");
        plus.classList.remove("hide");
        viewOrder.classList.remove("hide");
    });

    plus.addEventListener("click", () => {
        amount.textContent = +amount.textContent + 1;
        if (+amount.textContent > 99) {
            amount.textContent = 99;
        };
    });

    minus.addEventListener("click", () => {
        amount.textContent = +amount.textContent - 1;    
        if (+amount.textContent < 1) {
            amount.textContent = 0;
            amountDiv.classList.add("hide");
            add.classList.remove("hide");
            minus.classList.add("hide");
            plus.classList.add("hide");
        };

        if (getTotalAmount() == 0) {
            viewOrder.classList.add("hide");
        }
    });
    index++;
}


viewOrder.addEventListener("click", () => {
    const items = menuDiv.querySelectorAll(".item");  
    const check = [];
    let index = 0;
    while (index != items.length) {
        const item = items[index];
        const amount = +item.querySelector("#amount").textContent;
        const img = item.querySelector(".image > img").src;
        const nameAndPrice = item.querySelector(".nameAndPrice").textContent;
        const name = nameAndPrice.slice(0, nameAndPrice.indexOf("•")-1);
        const price = +nameAndPrice.slice(nameAndPrice.indexOf("•")+2, nameAndPrice.length);
        if (amount > 0) {
            check.push({
                name: name,
                price: price,
                amount: amount,
                sum: price * amount,
                img: img.slice(img.indexOf("img"), img.length)
            });
        }
        index++
    }


    let summa = 0;
    let check_index = 0;
    while (check_index < check.length) {  
        const div = document.createElement("div");
        div.classList.add("checkItem");
        div.innerHTML = `
            <div class="nameAndAmount">
                <img src="${check[check_index].img}" alt="">
                <span>${check[check_index].name} • <b>${check[check_index].amount}</b></span>
            </div>
            <div class="sum">
                <span>${check[check_index].sum}</span>
            </div>
        `;
        checkDiv.appendChild(div);
        summa += check[check_index].sum;
        check_index++;
    }

    const payBtn = document.createElement("button");
    payBtn.classList.add("payBtn");
    payBtn.textContent = `Pay: ${summa.toFixed(2)}`;
    checkDiv.appendChild(payBtn);

    payBtn.addEventListener("click", () => {
        const data = JSON.stringify(check);
        tg.sendData(data);
    });

    menuDiv.classList.add("hide");
    viewOrder.classList.add("hide");
});


function getTotalAmount() {
    const items = menuDiv.querySelectorAll(".item");  
    
    let totalAmount = 0;
    
    let index = 0;
    while (index != items.length) {
        const amount = +items[index].querySelector("#amount").textContent;
        totalAmount += amount;
        index++
    };

    return totalAmount;
}
