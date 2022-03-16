//Javascript to validate the contact details(UC4)
window.addEventListener("DOMContentLoaded", (event) => {
    //Checking whether contact details is proper using regex(UC4)
    const name = document.querySelector('#fullName');
    const nameError = document.querySelector('#errorName');
    name.addEventListener('input', () => {
        if (name.value.length == 0) {
            nameError.textContent = '';
            return;
        }
        try {
            (new ContactPerson()).fullName = name.value;
            setTextValue("#errorName", "");
        } catch (e) {
            setTextValue("#errorName", e);
        }
    });

    let phone = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('#errorPhoneNumber');
    const countryCode = document.querySelector('#countryCode');
    phone.addEventListener('input', function() {
        if (phone.value.length == 0) {
            phoneError.textContent = '';
            return;
        }
        try {
            let phoneNum = countryCode.value + " " + phone.value;
            (new ContactPerson()).phoneNumber = phoneNum;
            setTextValue("#errorPhoneNumber", "");
        } catch (e) {
            setTextValue("#errorPhoneNumber", e);
        }
    });

    let ziptext = document.querySelector('#zip');
    ziptext.addEventListener('input', function() {
        try {
            (new ContactPerson()).zip = ziptext.value;
            setTextValue("#errorzipCode", "");
        } catch (e) {
            setTextValue("#errorzipCode", e);
        }
    });

});

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}