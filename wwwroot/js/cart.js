document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const item = {
            name: this.parentElement.querySelector('h2').innerText,
            price: this.parentElement.querySelector('p:nth-of-type(2)').innerText,
            availability: this.parentElement.querySelector('p:nth-of-type(3)').innerText,
            action: 'Place Order',
            image: this.parentElement.querySelector('img').src
        };
        addToCart(item);
    });
});


    function addToCart(item) {
        // Extract only the numeric part of the price
        item.price = parseFloat(item.price.split(': ')[1]); // Split by colon and take the second part
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        modal.style.display = "block";
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                name: this.parentElement.querySelector('h2').innerText,
                price: this.parentElement.querySelector('p:nth-of-type(2)').innerText.split(': ')[1],
                availability: 'In Stock'
            };
            addToCart(item);
        });
    });

    if (cartTableBody) {
        cartTableBody.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-from-cart-btn')) {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            }
        });

        renderCart();
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
