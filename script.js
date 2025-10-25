
  
    
    const toggleBtn = document.getElementById('menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');
  
    toggleBtn.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });

document.addEventListener("DOMContentLoaded", function () {
      const dropbtn = document.querySelector(".dropbtn");
      const dropdown = document.querySelector(".dropdown");
  
      dropbtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      });
  
      // Optional: Close dropdown when clicking outside
      window.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
    });
  


    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
      const slidesContainer = document.querySelector('.slides');
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Next slide
    document.querySelector('.next').addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });

    // Previous slide
    document.querySelector('.prev').addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);



    

