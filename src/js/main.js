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
const itemWidth = carouselItems[0].offsetWidth + 15;

function setActiveItem(index) {
  carouselContainer.style.transform = `translateX(-${index * itemWidth}px)`;

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

const accordionHeaders = document.querySelectorAll(".accordion-item");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
