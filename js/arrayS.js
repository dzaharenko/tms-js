(async function () {
    const products = await fetch('http://localhost:5000/api/catalog')
        .then(response => response.json())
        .then(data => data)
        .catch(err => {
            console.log(err.message);
            return [];
        });

    let contents = [...products];
    const cart = {};
    const shop = document.getElementById('shop');
    const search = document.getElementById('search');

    document.querySelector('#sort-asc').onClick = mySort;
    document.querySelector('#sort-desc').onClick = mySortDesc;

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

    showItems(products);

    function mySort() {
        contents.sort(function(a, b){
            return a.price.value - b.price.value
        });
        showItems(contents);
        console.log(contents);
    }

    function mySortDesc() {
        contents.sort(function(a, b){
            return b.price.value - a.price.value
        });
        showItems(contents);
        console.log(contents);
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
        amountSpan.innerHTML = amount.toFixed(2);
    }

    search.addEventListener( 'input', (event) => {
        event.preventDefault();
        if (event.target.value.length > 2) {
            const reg = new RegExp(`^${event.target.value}`, 'i');
            contents = products.filter(function (product) {
                return reg.test(product.title);
            });
            if (contents.length) {
                showItems(contents);
            } else {
                shop.innerHTML = '<div class="_indent1">No results</div>';
            }
        } if (event.target.value === '') {
            showItems(products); // clear search
        }
    });
})();