//Creating getter and setter for all person form properties(UC4)
class ContactPerson {

    //Getter and setter methods for property of id
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    //Getter and setter methods for property of fullname
    get fullName() { return this._fullName; }
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}([ ]?[A-Za-z]{1,})*$');
        if (nameRegex.test(fullName)) {
            this._fullName = fullName;
        } else {
            throw 'Name Is Incorrect';
        }

    }

    //Getter and setter methods for property of phone number
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^\\+?[0-9]+[ ]?[1-9]{1}[0-9]{9}$');
        if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw 'Phone Number Is Incorrect';
        }
    }

    //Getter and setter methods for property of zip
    get zip() { return this._zip; }
    set zip(zip) {
        {
            let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
            if (zipRegex.test(zip)) {
                this._zip = zip;
            } else {
                throw 'ZIpcode Is Incorrect';
            }
        }

    }

    //Getter and setter methods for property of address
    get address() { return this._address; }
    set address(address) {
        this._address = address;
    }

    //Getter and setter methods for property of city
    get city() { return this._city; }
    set city(city) {
        this._city = city;
    }

    //Getter and setter methods for property of state
    get state() { return this._state; }
    set state(state) {
        this._state = state;
    }

    //Function to print the contact details
    toString() {
        return `Contact name : ${this._fullName} \nPhone Number : ${this.phoneNumber} \nAddress : ${this.address} \nCity : ${this.city} \nState : ${this.state} \nZip Code : ${this.zip}`;
    }
}