const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();

const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const formData = {
    name: name,
    email: email,
    password: password,
  };

  // Send POST request with form data
  fetch("https://api.example.com/register", {
    // Replace with your API endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle response from the server
      console.log(data);
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });

  // Clear form inputs
  registrationForm.reset();
});





