window.addEventListener("load", () => {
  let loading = 0;
  gsap
    .to("#preloader", {
      duration: 4,
      easing: Power3.inOut,
      onUpdate: function () {
        loading = Math.floor(this.progress() * 100);
        document.querySelector("#percent").innerHTML = loading + "%";
      },
    })
    .to("#percent", {
      opacity: 0,
      duration: 0.5,
      delay: 5,
      onComplete: () => {
        document.querySelector("#percent").style.display = "none";
      },
    });
});
