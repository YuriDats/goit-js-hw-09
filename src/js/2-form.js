let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");


const STORAGE_KEY = "feedback-form-state";

const textarea = form.querySelector("textarea");
const input = form.querySelector("input");
form.addEventListener("input", onTextarea);
someText();
function onTextarea (event) {

    const messageName = event.target.name;
    const messageValue = event.target.value;

    if (messageName === "email")
        formData.email = messageValue;
    else
        formData.message = messageValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));


    
}

function someText () {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
    const parsedData = JSON.parse(savedMessage);
    form.elements.email.value = parsedData.email || "";
    form.elements.message.value = parsedData.message || "";
    formData = parsedData;
    }
}



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {email, message } = formData;

    if(email === "" || message === ""){
        alert("Fill please all fields");
    return;
    }

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };

})
