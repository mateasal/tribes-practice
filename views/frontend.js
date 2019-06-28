const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('http://localhost:8080/login', {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(
        {
          "username":event.target.elements.username.value,
          "password":event.target.elements.password.value
        }
      )
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
});