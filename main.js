const submit = document.getElementById("submit");
const list = document.getElementById("contact-list");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

submit.addEventListener("click", () => {
  let contact = {
    name: document.getElementById("name").value,
    last: document.getElementById("lastname").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    };
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    addContact();
});

function addContact() {
  list.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");

      li.innerHTML = `
    <div style="display: flex; align-items: center;">
      <p style="margin-right: 100px">${contact.name}, ${contact.last}, #${contact.phone}, ${contact.email}   </p>
      <button onclick="deleteC(${index})">X</button>
      </div>
    `;

    list.appendChild(li);
  });
}


function deleteC(index) {
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  addContact();
}

addContact();
