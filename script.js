document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product-item .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});