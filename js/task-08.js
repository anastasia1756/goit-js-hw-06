const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const elements = {
      email: email,
      password: password,
  }

  if (email === "" || password === "") {
    return alert('Все поля должны быть заполнены');
  }

  console.log(elements);
  event.currentTarget.reset();
}


