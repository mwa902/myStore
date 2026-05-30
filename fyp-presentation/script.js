(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const counter = document.getElementById("slide-counter");
  let index = 0;

  function renderBars() {
    const amounts = [6000, 8500, 11000, 6500];
    const max = Math.max(...amounts);
    document.querySelectorAll(".bar[data-amount]").forEach((bar) => {
      const amt = Number(bar.dataset.amount);
      const pct = (amt / max) * 100;
      bar.style.height = `${Math.max(pct, 18)}%`;
    });
  }

  function goTo(i) {
    if (i < 0 || i >= slides.length) return;
    slides[index].classList.remove("active", "prev");
    if (i > index) slides[index].classList.add("prev");
    index = i;
    slides[index].classList.add("active");
    slides[index].classList.remove("prev");
    counter.textContent = `${index + 1} / ${slides.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
    if (index === 12) renderBars();
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      goTo(index + 1);
    }
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goTo(index - 1);
    }
    if (e.key === "Home") goTo(0);
    if (e.key === "End") goTo(slides.length - 1);
    if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  });

  let touchX = 0;
  document.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].screenX;
  });
  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touchX;
    if (dx < -50) goTo(index + 1);
    if (dx > 50) goTo(index - 1);
  });

  goTo(0);
})();
