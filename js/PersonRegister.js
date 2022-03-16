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
    let zipError = document.querySelector('#errorzipCode');
    ziptext.addEventListener('input', function() {
        if (phone.value.length == 0) {
            zipError.textContent = '';
            return;
        }
        try {
            (new ContactPerson()).zip = ziptext.value;
            setTextValue("#errorzipCode", "");
        } catch (e) {
            setTextValue("#errorzipCode", e);
        }
    });

});

//Create contact object on submit(UC5)
const save = () => {
    try {

        let contactPersonDetails = onSubmit();
        if (contactPersonDetails.length != 0) {
            createAndUpdateStorage(contactPersonDetails);
            alert("Added the data into local storage succesfully")
        }
    } catch (e) {
        return;
    }
}

//Storing contact object in local storage
function createAndUpdateStorage(contactPersonDetails) {
    let ContactList = JSON.parse(localStorage.getItem("ContactList"));
    if (ContactList != undefined) {
        ContactList.push(contactPersonDetails);
    } else {
        ContactList = [contactPersonDetails];
    }
    alert(ContactList.toString());
    localStorage.setItem("ContactList", JSON.stringify(ContactList));
}

//Validating Name phone number and zip code
const onSubmit = () => {
    let contactPersonDetails = new ContactPerson();
    try {
        contactPersonDetails.fullName = getInputValueById("#fullName");
        setTextValue("#errorName", "");
    } catch (e) {
        setTextValue("#errorName", e);
    }
    const phone = document.querySelector('#phoneNumber');
    const countryCode = document.querySelector('#countryCode');
    try {
        let phoneNum = countryCode.value + " " + phone.value;
        contactPersonDetails.phoneNumber = phoneNum;
        setTextValue("#errorPhoneNumber", "");
    } catch (e) {
        setTextValue("#errorPhoneNumber", e);
    }
    contactPersonDetails.state = getInputValueById('#state');
    contactPersonDetails.city = getInputValueById('#city');
    try {
        contactPersonDetails.zip = getInputValueById('#zip');;
        setTextValue("#errorzipCode", "");
    } catch (e) {
        setTextValue("#errorzipCode", e);
    }
    contactPersonDetails.address = getInputValueById("#address");
    alert(contactPersonDetails.toString());
    return contactPersonDetails;
}

//Getting the contact details by given id(UC5)
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//Seeting the contact field using id and value(UC5)
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

//Arrow function to reset the form by initializing the values to default or null(UC13)
const resetForm = () => {
    setValue('#fullName', '');
    setTextValue('#errorName', '');
    setValue('#phoneNumber', '');
    setTextValue('#errorPhoneNumber', '');
    setValue('#zip', '');
    setTextValue('#errorzipCode', '');
}

//Arrow function for reset the values(UC13)
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}