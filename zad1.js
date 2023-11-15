document.addEventListener('DOMContentLoaded', function () {

    var nameInput = document.getElementById('inputField');
    var output = document.getElementById('output');
    var submitButton = document.getElementById('submitButton');
    var name;

    if (nameInput && output && submitButton) {
        nameInput.addEventListener('change', function (event) {
            name = event.target.value;
            output.textContent ="";
        });

        submitButton.addEventListener('click', function () {
            if (name && name.length) {
                window.location.href = 'zad2.html'; 
            } else {
                output.textContent = 'Please enter a valid name';
            }
        });
    }

});