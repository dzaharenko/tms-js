$(function () {
    $.getJSON('http://www.nbrb.by/API/ExRates/Rates?Periodicity=0', function(data) {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            let el = document.getElementById(obj.Cur_Abbreviation);
            if (el) {
                el.innerHTML = el.innerHTML.replace('00,00', obj.Cur_Name + ' ' + obj.Cur_OfficialRate);
            }
        }
    }).fail( function(d, textStatus, error) {
        console.error("Request failed, status: " + textStatus + ", error: " + error)
    });

});

/*
const products = [
    {
        id: '7df3f04b-0ee0-4a8a-bda8-e2931e68860d',
        title: 'MacBook Pro 16-inch',
        description: '2.3GHz 8-Core Processor<br>1TB Storage<br>AMD Radeon Pro 5500M',
        price: {
            value: 2799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '69d8b82e-1bc6-45a7-bcb0-ba205c91b8bd',
        title: 'MacBook Pro 13-inch',
        description: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz<br>256GB Storage<br>Touch Bar and Touch ID',
        price: {
            value: 1799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '9c56a489-5581-4552-802a-6e56249b0056',
        title: 'Mac Pro',
        description: '3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz<br>256GB Storage<br>Radeon Pro 580X with 8GB of GDDR5 memory',
        price: {
            value: 5999.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/mac_pro__bn92faz71k6a_large.jpg'
    },
    {
        id: 'e325ae53-ba9b-4b9e-b443-20db05f95c2e',
        title: 'MacBook Air',
        description: '2-core Intel Core i5 processor<br>1TB storage<br>12 hours battery life',
        price: {
            value: 1099.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/compare/macbook_air__csdfieli984m_large.jpg'
    },
    {
        id: '4f50005d-b422-4adf-b1f6-3b6551862500',
        title: 'iPhone 11 Pro Max',
        description: 'Midnight Green<br>521GB Storage<br>20 hours of video playback',
        price: {
            value: 1449.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/iphone/home/af/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg'
    }
];

const cart = {};
const shop = document.getElementById('shop');

function clear(wrapper) {
    wrapper.innerHTML = '';
}

function showItems(productsArr){
    clear(shop);
    productsArr.forEach(function (product) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("card");
        newDiv.classList.add("_indent1");
        newDiv.dataset.id = product.id;

        newDiv.innerHTML = `
			<div class="wrap">
			<div class="img"><img src="${product.imageLink}" style="height:113px; width: 173px; " /></div>
			<div class="info">
			${product.title} <br><br>
			${product.description}
		</div>
		<div class="price_info">
			<p class="pr"><span class="dollar">${product.price.currency} </span>${product.price.value}</p>
		<input data-state=0 value="Add to Basket" onclick = "dawn(this)" type = "button" class="bt1">
			</div>
			</div>`

        shop.appendChild(newDiv);

    });
}

showItems(products);

function myEvent() {
    document.getElementById("sort-desc").style.background = "lightgreen";
}

document.querySelector('#sort-asc').onClick = mySort;
document.querySelector('#sort-desc').onClick = mySortDesc;

function mySort() {
    products.sort(function(a, b){
        return a.price.value - b.price.value
    });
    showItems(products);
    console.log(products);
}

function mySortDesc() {
    products.sort(function(a, b){
        return b.price.value - a.price.value
    });
    showItems(products);
    console.log(products);
}

function dawn(input)
{
    let elemId = input.closest("div.card").dataset.id;
    if (input.dataset.state === '0'){
        input.dataset.state = 1;
        input.setAttribute("style", "background: grey; border: 2px solid grey;");
        input.value = 'Remove from Basket';
        if (!cart[elemId]){
            cart[elemId] = 0;
        }
        cart[elemId]++;
    } else {
        input.dataset.state = 0;
        input.value = 'Add to Basket';
        input.setAttribute("style", "background: #ff8b38; border: 2px solid #ff8b38;");
        cart[elemId]--;
        if (cart[elemId] < 1) {
            delete cart[elemId];
        }
    }
    updateHeader();
}

function updateHeader(){
    const countSpan = document.querySelector('#count span');
    const amountSpan = document.querySelector('#amount span');

    let amount = 0;
    for(id in cart){
        for(elem of products){
            if(id === elem.id){
                amount += elem.price.value;
            }
        }
    }

    countSpan.innerHTML = Object.keys(cart).length;
    amountSpan.innerHTML = amount;
}
*/



/*document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('.info');
    if (val != '' ) {
        searchItems.forEach((function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        }))
    }
};*/
/*

document.getElementById("shop").innerHTML = products.price.value;

function myFunction() {
    products.price.value.sort(function(a, b){return a - b});
    document.getElementById("shop").innerHTML = products.price.value;
}*/