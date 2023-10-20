document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('survey-form');
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    const popup = document.getElementById('popup');
    const submittedValuesList = document.getElementById('submitted-values');
    const closePopupButton = document.getElementById('close-popup');

    submitButton.addEventListener('click', function () {
        
        const submittedValues = [];
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const genderCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        if (firstName.trim() === '') {
            alert('Please enter your First Name.');
            return;
        }
        if (lastName.trim() === '') {
            alert('Please enter your Last Name.');
            return;
        }
        if (dob.trim() === '') {
            alert('Please enter your Date of Birth.');
            return;
        }
        if (country === '') {
            alert('Please select your Country.');
            return;
        }
        if (genderCheckboxes.length === 0) {
            alert('Please select your Gender.');
            return;
        }
        if (profession.trim() === '') {
            alert('Please enter your Profession.');
            return;
        }
        if (email.trim() === '') {
            alert('Please enter your Email.');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid Email address.');
            return;
        }
        if (mobile.trim() === '') {
            alert('Please enter your Mobile Number.');
            return;
        }
        if (!isValidMobile(mobile)) {
            alert('Please enter a valid Mobile Number.');
            return;
        }


        submittedValues.push(`First Name: ${firstName}`);
        submittedValues.push(`Last Name: ${lastName}`);
        submittedValues.push(`Date of Birth: ${dob}`);
        submittedValues.push(`Country: ${country}`);
        submittedValues.push(`Gender: ${Array.from(genderCheckboxes).map(cb => cb.value).join(', ')}`);
        submittedValues.push(`Profession: ${profession}`);
        submittedValues.push(`Email: ${email}`);
        submittedValues.push(`Mobile Number: ${mobile}`);

        submittedValuesList.innerHTML = submittedValues.map(value => `<li>${value}</li>`).join('');
        popup.style.display = 'block';

        form.reset();
    });

    resetButton.addEventListener('click', function () {
        form.reset();
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    function isValidEmail(email) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    function isValidMobile(mobile) {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    }
});
