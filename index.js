const submitData = (userNameString, userEmailString) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userNameString,
      email: userEmailString,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      const element = document.createElement("div");
      element.innerHTML = result.id;
      document.body.appendChild(element);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      const element = document.createElement("div");
      element.innerHTML = error;
      document.body.appendChild(element);
    });
};

submitData("Grethanie", "danyoung91@gmail.com");
