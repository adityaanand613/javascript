let plus = document.querySelector('.plus-btn');
let minus = document.querySelector('.minus-btn');
let counter_div = document.querySelectorAll('.counter');
let p1_counter = document.querySelector('.p1-counter');
let p2_counter = document.querySelector('.p2-counter') 
let p3_counter = document.querySelector('.p3-counter') 
let cart = document.querySelector('.Cart-container');
let total = document.querySelector('#total-price');
let cart_total = document.querySelector('.Cart-total')

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;

counter_div.forEach(ele => {
    ele.addEventListener('click', (e) => {
        let btn_clicked = e.target.id;
        if (btn_clicked === 'p1') {
            counter_1++;
            p1_counter.innerText = counter_1;
        }

        else if (btn_clicked === 'p2') {
            counter_2++;
            p2_counter.innerText = counter_2;
        }

        else if (btn_clicked === 'p3') {
            counter_3++;
            p3_counter.innerText = counter_3;
        }

        if(btn_clicked === 'm1' && counter_1 > 0)
        {
            counter_1--;
            p1_counter.innerText = counter_1;
        }
        if(btn_clicked === 'm2' && counter_2 > 0)
        {
            counter_2--;
            p2_counter.innerText = counter_2;
        }
        if(btn_clicked === 'm3' && counter_3 > 0)
        {
            counter_3--;
            p3_counter.innerText = counter_3;
        }

        cart.innerHTML = ''; 
        if (counter_1 > 0) {
            cart.innerHTML += `<div class = "Carts">
                <p>Product-1</p>
                <p>${counter_1} X 100</p>
                </div>`;
            
        }
        if (counter_2 > 0) {
            cart.innerHTML += `<div class = "Carts">
                <p>Product-2</p>
                <p>${counter_2} X 200</p>
                </div>`;
                
        }
        if (counter_3 > 0) {
            cart.innerHTML += `<div class = "Carts">
                <p>Product-3</p>
                <p>${counter_3} X 300</p>
                </div>`;
                
        }

        if(counter_1 > 0 || counter_2 > 0 || counter_3 > 0)
        {
            let ans = counter_1*100;
            ans += counter_2 * 200;
            ans += counter_3 * 300;

            total.innerText = ans;
            cart_total.innerHTML = `<h1>Total Price:</h1>
            <h1>${ans}</h1>`;
        }
        else{
            cart_total.innerHTML = `<h2>No Product added to the cart</h2>`;
        }
    });
});