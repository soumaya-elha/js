class Person{
    constructor(name, lastName, birthday, birthplace, phone, adress){
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.birthplace = birthplace;
        this.phone = phone;
        this.adress = adress;
    }
}

function addRow(){
    let row = "<tr>";
    let person = new Person(
        document.getElementById("name").value,
        document.getElementById("lastName").value,
        document.getElementById("birthday").value,
        document.getElementById("birthplace").value,
        document.getElementById("phone").value,        
        document.getElementById("adress").value
    )
    row += "<td>"+person.name+"</td>";
    row += "<td>"+person.lastName+"</td>";
    row += "<td>"+person.birthday+"</td>";
    row += "<td>"+person.birthplace+"</td>";
    row += "<td>"+person.phone+"</td>";
    row += "<td>"+person.adress+"</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML += row;
}