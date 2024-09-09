const darkBtn = document.querySelector(".darkBtn");
const body = document.querySelector("body");

const darkMode = () => body.classList.toggle("darkmode");

darkBtn.addEventListener("click", darkMode);

const faqs = Array.from(document.querySelectorAll(".faq"));

const faqToggle = (event) => {
const faq = event.currentTarget;

  if (faq.classList.contains("active")) {
    faqs.map((faq) => faq.classList.remove("active"));
  } else {
    faqs.map((faq) => faq.classList.remove("active"));
    faq.classList.add("active");
  }
};

faqs.map((faq) => faq.addEventListener("click", faqToggle));

const galleryPopup = document.querySelector(".popupGallery");
const galleryImages = Array.from(document.querySelectorAll(".gallImage"));
const galleryPopupImage = galleryPopup.querySelector("img");
let currentPosition = 0;


const openGallery = (event, index) => {
  currentPosition = index;

  const image = event.currentTarget.src;
  galleryPopupImage.src = image;
  galleryPopup.classList.add("active");
};

galleryImages.map((gallImg, index) => {
  gallImg.addEventListener("click", () => openGallery(event, index));
});

const cancelBtn = document.querySelector(".cancelBtn");

const closeGallery = () => galleryPopup.classList.remove("active");

cancelBtn.addEventListener("click", closeGallery);

const nextArrow = document.querySelector(".rightArrow");
const prevArrow = document.querySelector(".leftArrow");

const galleryNext = () => {
  if (currentPosition == galleryImages.length - 1) {
    currentPosition = 0;
  } else {
    currentPosition += 1;
  }

  galleryPopupImage.src = galleryImages[currentPosition].src;
};

const galleryPrev = () => {
  if (currentPosition == 0) {
    currentPosition = galleryImages.length - 1;
  } else {
    currentPosition -= 1;
  }

    galleryPopupImage.src = galleryImages[currentPosition].src;

};

nextArrow.addEventListener("click", galleryNext);
prevArrow.addEventListener("click", galleryPrev);