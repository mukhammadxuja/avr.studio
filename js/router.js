const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  window.scrollTo({ top: 0, behavior: "smooth" });
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/coming-soon": "/pages/comingSoon.html",
  "/works": "/pages/works.html",
  "/contact": "/pages/contact.html",
  "/project/dotsoft": "/pages/projects/dotsoftuz.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.querySelector("#main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
