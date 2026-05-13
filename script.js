// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// Hero slider
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById("nextSlide")?.addEventListener("click", nextSlide);
document.getElementById("prevSlide")?.addEventListener("click", prevSlide);

setInterval(nextSlide, 4500);

// Enquiry box
const enquiryBox = document.getElementById("enquiryBox");
const openEnquiry = document.getElementById("openEnquiry");
const closeEnquiry = document.getElementById("closeEnquiry");

openEnquiry?.addEventListener("click", () => enquiryBox.classList.add("open"));
closeEnquiry?.addEventListener("click", () => enquiryBox.classList.remove("open"));

setTimeout(() => {
  enquiryBox?.classList.add("open");
}, 1200);

// Testimonial slider
const reviews = document.querySelectorAll(".review");
let reviewIndex = 0;

setInterval(() => {
  if (!reviews.length) return;
  reviews.forEach((review) => review.classList.remove("active"));
  reviewIndex = (reviewIndex + 1) % reviews.length;
  reviews[reviewIndex].classList.add("active");
}, 3500);

// Counter animation
const counters = document.querySelectorAll("[data-count]");
let counterStarted = false;

function runCounters() {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    let value = 0;
    const increment = Math.max(1, Math.ceil(target / 80));

    const timer = setInterval(() => {
      value += increment;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      counter.textContent = target === 95 ? value + "%" : value + "+";
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  const counterSection = document.querySelector(".counter-section");
  if (!counterSection || counterStarted) return;

  const rect = counterSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    counterStarted = true;
    runCounters();
  }
});

// Form demo
document.querySelectorAll("button").forEach((btn) => {
  const text = btn.textContent.toLowerCase();
  if (text.includes("submit") || text.includes("download") || text.includes("send")) {
    btn.addEventListener("click", () => {
      alert("Thank you! IEC admissions team will contact you soon.");
    });
  }
});

const playVideo = document.getElementById("playVideo");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const iecVideo = document.getElementById("iecVideo");

playVideo?.addEventListener("click", () => {
  videoModal.classList.add("open");
  iecVideo.play();
});

closeVideo?.addEventListener("click", () => {
  videoModal.classList.remove("open");
  iecVideo.pause();
  iecVideo.currentTime = 0;
});

videoModal?.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.classList.remove("open");
    iecVideo.pause();
    iecVideo.currentTime = 0;
  }
});
