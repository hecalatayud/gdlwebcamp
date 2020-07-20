(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        let name = document.querySelector('#name');
        let lastName = document.querySelector('#last-name');
        let email = document.querySelector('#email');
        let oneDayPass = document.querySelector('#one-day-pass');
        let twoDayPass = document.querySelector('#two-day-pass');
        let fullPass = document.querySelector('#full-pass');
        let calculate = document.querySelector('#calculate');
        let error = document.querySelector('#error');
        let register = document.querySelector('#button-register');
        let products = document.querySelector('#product-list');
        let gift = document.querySelector('#gift');
        let shirts = document.querySelector('#event-shirt');
        let tags = document.querySelector('#tags');

        calculate.addEventListener('click', getAmount)

        function getAmount(event) {
            event.preventDefault();

            if (gift.value === '') {
                alert('Debes elegir un regalo');
                gift.focus();

                return;
            }

            let total = oneDayPass.value * 30 + twoDayPass.value * 45 + fullPass.value * 50 + (shirts.value * 10) * .93 + tags.value * 2;

            console.log(total);
        }
    })
})();