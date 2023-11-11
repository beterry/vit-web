const isPrimaryRadios = document.querySelectorAll('input[name="is-primary"]');

const patientNameGroup = document.querySelector('#patient-name-group');
const patientNameInput = document.querySelector('#patient-name');

isPrimaryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        patientNameGroup.classList.toggle('hidden');
        patientNameInput.toggleAttribute('required');
    })
})

const contactTypeRadios = document.querySelectorAll('input[name="contact-type"]');

const emailGroup = document.querySelector('#email-group');
const phoneGroup = document.querySelector('#phone-group');
const emailInput = document.querySelector('#email');
const phoneImput = document.querySelector('#phone');

contactTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        emailGroup.classList.toggle('hidden');
        phoneGroup.classList.toggle('hidden');
        emailInput.toggleAttribute('required');
        phoneImput.toggleAttribute('required');
    })
})
