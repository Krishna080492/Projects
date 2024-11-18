
var user = [
    {
        name: "Krishna Desai",
        email: "kdesai@gmail.com",
        pass: 1234,
        gender: "female",
        hobby: "Reading",
        course: "FSD",
        address: "Surat",
    },
];
var addBtn = document.querySelector("#add-btn");
var form = document.querySelector("#form1");
var cancelBtn = document.querySelector("#cancel");

addBtn.onclick = function () {
    form.classList.add("active");
};

cancelBtn.onclick = function (e) {
    e.preventDefault();
    form.classList.remove("active");
    form.reset();
};

let idx = -1;
class UserClass {

    Add() {
        idx = -1;
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('pass').value = "";
        document.getElementById('address').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('hobby').value = "";
        document.getElementById('course').value = "";
    }

    Edit(index) {
        idx = index;
        document.getElementById('name').value = user[index].name;
        document.getElementById('email').value = user[index].email;
        document.getElementById('pass').value = user[index].pass;
        document.getElementById('address').value = user[index].address;
        document.getElementById('course').value = user[index].course;
        // hobby
        let hobbies = user[index].hobby.split(', ');
        let hobbyCheckboxes = document.querySelectorAll("#hobby input[type=checkbox]");

        hobbyCheckboxes.forEach(checkbox => {
            checkbox.checked = hobbies.includes(checkbox.value);
        });

        // gender
        if (user[index].gender == "male") {
            document.getElementById('btn-male').checked = true;
        } else if (user[index].gender == "female") {
            document.getElementById('btn-female').checked = true;
        } else {
            document.getElementById('btn-other').checked = true;
        }
        form.classList.add("active");
    }

    AddUpdate() {
        if (validateForm()) {

            let index = idx;
            if (index > -1) {
                user[index].name = document.getElementById("name").value
                user[index].email = document.getElementById("email").value
                user[index].pass = document.getElementById("pass").value
                user[index].course = document.getElementById("course").value
                user[index].address = document.getElementById("address").value
                user[index].gender = document.querySelector('input[name="gender"]:checked').value
                user[index].hobby = Array.from(document.querySelectorAll("#hobby input:checked")).map(hobby => hobby.value).join(', ');
            } else {
                var newUser = {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    pass: document.getElementById("pass").value,
                    gender: document.querySelector('input[name="gender"]:checked').value,
                    hobby: Array.from(document.querySelectorAll("#hobby input:checked")).map(hobby => hobby.value),
                    course: document.getElementById("course").value,
                    address: document.getElementById("address").value,
                };
                user.push(newUser);

            }
            this.list();
            form.reset(); 
            form.classList.remove("active");
        }
    }
    Delete(index) {
        user.splice(index, 1);
        this.list();
    }

    list() {
        var html = "";
        var i = 0;
        user.forEach((users) => {
            var tr = `
            <tr>
            <td>${users.name}</td>
            <td>${users.email}</td>
            <td>${users.pass}</td>
            <td>${users.gender}</td>
            <td>${users.hobby}</td>
            <td>${users.course}</td>
            <td>${users.address}</td>

            <td style="border-right: 0;">
                <button class = "edit-btn" style="background-color: rgb(248, 150, 23);" onclick="new UserClass().Edit(${i});"><i class="ri-eye-fill"></i></button>
                <button class = "delete-btn" style="background-color: rgb(255, 0, 0);" onclick="new UserClass().Delete(${i});"><i class="ri-delete-bin-fill"></i></button>
            </td>
            </tr>
            `;
            html = html + tr;
            i++
        });
        document.getElementById('table-data').innerHTML = html;
    }
}

var user1 = new UserClass();
user1.list();

function validateForm() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("All filled are Compulsary");
        return false;
    }
    return true;
}