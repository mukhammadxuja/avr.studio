fetch("../components/header.html")
  .then((response) => {
    console.log(response.text);
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("../components/navbar.html")
  .then((response) => {
    console.log(response.text);
    return response.text();
  })
  .then((data) => {
    document.querySelector("nav").innerHTML = data;
  });

fetch("../components/footer.html")
  .then((response) => {
    console.log(response.text);
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
