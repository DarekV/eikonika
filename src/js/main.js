const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
const paginationItems = Array.from(
  document.querySelectorAll(".carousel-pagination-item")
);
const paginationContent = Array.from(
  document.querySelectorAll(".carousel-pagination-item-content")
);
const paginationContentArrow = Array.from(
  document.querySelectorAll(".carousel-pagination-item-content-arrow")
);

let activeIndex = 0;

function setActiveItem(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;

  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  paginationItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  paginationContent.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  paginationContentArrow.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  activeIndex = index;
}

paginationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    setActiveItem(index);
  });
});

setActiveItem(activeIndex);

function nextItem() {
  const newIndex = (activeIndex + 1) % carouselItems.length;
  setActiveItem(newIndex);
}

function previousItem() {
  const newIndex =
    (activeIndex - 1 + carouselItems.length) % carouselItems.length;
  setActiveItem(newIndex);
}

setInterval(nextItem, 10000);

const bandContainer = document.querySelector(".band-container");
const band = document.querySelector(".band");

const bandWidth = band.offsetWidth;
const containerWidth = bandContainer.offsetWidth;

function resetBandPosition() {
  band.style.transform = "translateX(0%)";
}

function startScrolling() {
  band.style.animation = `scroll ${bandWidth / 50}s linear infinite`;
}

function stopScrolling() {
  band.style.animation = "none";
}

bandContainer.addEventListener("mouseenter", stopScrolling);
bandContainer.addEventListener("mouseleave", startScrolling);
band.addEventListener("animationend", resetBandPosition);
