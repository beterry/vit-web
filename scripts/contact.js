const isPrimaryRadios = document.querySelectorAll('input[name="Is the primary patient"]');
const checkedIsPrimaryRadio = document.querySelector('input[name="Is the primary patient"]:checked');

const patientNameGroup = document.querySelector('#patient-name-group');
const patientNameInput = document.querySelector('#patient-name');

isPrimaryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        patientNameGroup.classList.toggle('hidden');
        patientNameInput.toggleAttribute('required');
    })
})

const contactTypeRadios = document.querySelectorAll('input[name="Contact type"]');
const checkedContactTypeRadio = document.querySelector('input[name="Contact type"]:checked')

const emailGroup = document.querySelector('#email-group');
const phoneGroup = document.querySelector('#phone-group');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

contactTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        emailGroup.classList.toggle('hidden');
        phoneGroup.classList.toggle('hidden');
        emailInput.toggleAttribute('required');
        phoneInput.toggleAttribute('required');
    })
})

// show success or error message on page load
const urlParams = new URLSearchParams(window.location.search);
for (const [key, value] of urlParams.entries()) {
    if (key === 'success') {
        document.querySelector('#success').classList.toggle('hidden');
    } 
    if (key === 'error') {
        document.querySelector('#error').classList.toggle('hidden');
    }
}