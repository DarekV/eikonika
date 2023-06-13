const carouselContainer = document.querySelector(".carousel-container");
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

// setInterval(nextItem, 3000);
