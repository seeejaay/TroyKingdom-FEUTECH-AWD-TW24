document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('_btnCartL');
    const cartWindow = document.getElementById('cartWindow');

    cartButton.addEventListener('click', function() {
        cartWindow.classList.toggle('active');
    });

    // Close cart window if clicked outside
    document.addEventListener('click', function(event) {
        if (!cartWindow.contains(event.target) && event.target !== cartButton) {
            cartWindow.classList.remove('active');
        }
    });
});
