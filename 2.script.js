let employees = [];

function addEmployee() {

    let emp = {

        name:
        document.getElementById("name").value,

        id:
        document.getElementById("id").value,

        salary:
        parseFloat(
        document.getElementById("salary").value),

        department:
        document.getElementById("department").value
    };

    employees.push(emp);

    alert("Employee Added Successfully");

}

function displayEmployees() {

    let text = "";

    for (let e of employees) {

        text +=
        "Name: " + e.name +
        " | Salary: " + e.salary +
        "<br>";
    }

    document.getElementById("output").innerHTML = text;

}