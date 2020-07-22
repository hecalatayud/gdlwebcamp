(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

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
        let sum = document.querySelector('#total-sum');

        name.addEventListener('blur', validate);
        lastName.addEventListener('blur', validate);
        email.addEventListener('blur', validate);

        email.addEventListener('blur', function() {
            if (this.value.indexOf('@') == -1) {
                error.innerHTML = 'Debe contener al menos un "@"';
                error.style.border = '1px solid red';
                error.style.display = 'block';
    
                this.style.border = '1px solid red';
            } else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        });

        calculate.addEventListener('click', function() {
            event.preventDefault();

            if (gift.value === '') {
                alert('Debes elegir un regalo');
                gift.focus();

                return;
            }

            let productList = [];

            products.innerHTML = '';
            products.style.display = 'none';

            if (oneDayPass.value > 0)
                productList.push(`${oneDayPass.value} Pases por día`);

            if (twoDayPass.value > 0)
                productList.push(`${twoDayPass.value} Pases por dos días`);

            if (fullPass.value > 0)
                productList.push(`${fullPass.value} Pases completos`);

            if (shirts.value > 0)
                productList.push(`${shirts.value} Camisas`);

            if (tags.value > 0)
                productList.push(`${tags.value} Etiquetas`);

            for (let product of productList)
                products.innerHTML += `${product}<br>`;

            if (productList.length > 0)
                products.style.display = 'block';

            sum.innerHTML = `$ ${(oneDayPass.value * 30 + twoDayPass.value * 45 + fullPass.value * 50 + (shirts.value * 10) * .93 + tags.value * 2).toFixed(2)}`
        });

        oneDayPass.addEventListener('blur', showDays);
        twoDayPass.addEventListener('blur', showDays);
        fullPass.addEventListener('blur', showDays);

        function showDays() {
            let days = [];

            for (let content of document.querySelectorAll('.day-content'))
                content.style.display = 'none';

            if (fullPass.value > 0)
                days.push('friday', 'saturday', 'sunday');
            else if (twoDayPass.value > 0)
                days.push('friday', 'saturday');

            if (oneDayPass.value > 0)
                days.push('friday');

            for (let day of days)
                document.querySelector(`#${day}`).style.display = 'block';
        }

        function validate() {
            if (this.value == '') {
                error.innerHTML = 'Este campo es obligatorio';
                error.style.border = '1px solid red';
                error.style.display = 'block';
    
                this.style.border = '1px solid red';
            } else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }
    })
})();