const nameInput = document.querySelector("#name"),
proffessionInput = document.querySelector("#proffession"),
ageInput = document.querySelector("#age"),
button = document.querySelector("#submit"),
details = document.querySelector(".details-list"),
messageDiv = document.querySelector("#message");



button.addEventListener("click", (e) => {
    e.preventDefault();
    let nameValue = nameInput.value;
    let proffessionValue = proffessionInput.value;
    let ageValue = ageInput.value;
     

    if(nameValue == "" || proffessionValue == "" || ageValue == "") {
        messageDiv.innerHTML=`Error : Please Make sure All the fields are filled before adding in an employee !`;
        messageDiv.style.color="red";
    }
    else {
        const element = document.createElement("li")
        element.style.marginBottom = "20px";
        element.innerHTML= `<div class="container-list">
                                <ul class="details">
                                    <li>Name : ${nameValue}</li>
                                    <li>Proffession : ${proffessionValue}</li>
                                    <li>Age: ${ageValue}</li>
                                </ul> 
                                <button class="delete-btn delete">Delete User</button>
                            </div>`;

        details.appendChild(element);
        messageDiv.innerHTML = `Success : Employee Added!`;
        messageDiv.style.color="green";  
    }
})

details.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
        messageDiv.innerHTML = `Success : Employee Deleted!`;
        messageDiv.style.color="orange";
    }
})   