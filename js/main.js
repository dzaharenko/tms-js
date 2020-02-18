const productsData = [
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

class Products {
    constructor ({ products }) {
        this.defaultData = [...products];
        this.currentData = [...products];
    }
}

const products = new Products({
    products: productsData,
});
const shop = document.getElementById('shop');
const search = document.getElementById('search');

document.querySelector('#sort-asc').onClick = mySort;
document.querySelector('#sort-desc').onClick = mySortDesc;

function clear(wrapper) {
    wrapper.innerHTML = '';
}
// let contents = [...products];
const cart = {};

function showItems(productsArr){
    clear(shop);
    productsArr.forEach(function (product) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("card");
        newDiv.classList.add("_indent1");
        newDiv.dataset.id = product.id;

        newDiv.innerHTML = `
			<div class="wrap">
			<div class="img"><img src="${product.imageLink}" class="cart__image" /></div>
			<div class="info">
			<h3>${product.title}</h3><br>
			${product.description}
		</div>
		<div class="price_info">
			<p class="pr"><span class="dollar">$</span>${product.price.value.toFixed(2)}</p>
		<input data-state=0 value="Add to Basket" onclick = "dawn(this)" type = "button" class="bt1">
			</div>
			</div>`

        shop.appendChild(newDiv);

    });
}

showItems(productsData);

function mySort() {
    this.currentData.sort(function(a, b){
        return a.price.value - b.price.value
    });
    showItems(this.currentData);
    console.log(this.currentData);
}

function mySortDesc() {
    this.currentData.sort(function(a, b){
        return b.price.value - a.price.value
    });
    showItems(this.currentData);
    console.log(this.currentData);
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
        for(elem of productsData){
            if(id === elem.id){
                amount += elem.price.value;
            }
        }
    }

    countSpan.innerHTML = Object.keys(cart).length;
    amountSpan.innerHTML = amount.toFixed(2);
}

search.addEventListener( 'input', (event) => {
    event.preventDefault();
    if (event.target.value.length > 2) {
        const reg = new RegExp(`^${event.target.value}`, 'i');
        this.currentData = productsData.filter(function (product) {
            return reg.test(product.title);
        });
        if (this.currentData.length) {
            showItems(this.currentData);
        } else {
            shop.innerHTML = '<div class="_indent1">No results</div>';
        }
    } if (event.target.value === '') {
        showItems(productsData); // clear search
    }
});