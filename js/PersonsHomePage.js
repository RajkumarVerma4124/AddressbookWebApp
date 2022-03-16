//Added javascript to view employee payroll details in a tabular format from jS file using template literals(UC17)
let contactDetailsList;
window.addEventListener('DOMContentLoaded', (event) => {
    contactDetailsList = getPersonsDetailsFromStorage();
    createTableContents();
});

//Arrow function to get the data from local storage(UC19)
const getPersonsDetailsFromStorage = () => {
    return localStorage.getItem("ContactList") ? JSON.parse(localStorage.getItem("ContactList")) : [];
}

//Template literal
const createTableContents = () => {
    const tableHeader = `
        <tr>
            <th>FullName</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone No.</th>
            <th>Actions</th>
        </tr>`;
    if (contactDetailsList.length == 0)
        return;
    let tableContents = `${tableHeader}`;
    for (let contact of contactDetailsList) {
        tableContents = `${tableContents}
        <tr>
            <td>${contact._fullName}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td class="td-icon">
                <img id="${contact._fullName}" src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)" alt="delete" id="icon"/>
                <img id="${contact._fullName}" src="../assets/icons/create-black-18dp.svg" onclick="update(this)" alt="create" id="icon"/>
            </td>
        </tr>`;
    }
    document.querySelector('#display-table').innerHTML = tableContents;
}

//Remove employee from Local Storage
var remove = (employee) => {
    let employeePayrollData = contactDetailsList.find(empData => empData._fullName == employee.id);
    if (!employeePayrollData) return;
    var index = contactDetailsList.map(empData => empData._fullName)
        .indexOf(employeePayrollData._fullName);
    contactDetailsList.splice(index, 1);
    localStorage.setItem("ContactList", JSON.stringify(contactDetailsList));
    createTableContents();
}