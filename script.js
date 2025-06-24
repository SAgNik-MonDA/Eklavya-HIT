document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Event cards "See More" functionality
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    seeMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const extendedInfo = this.previousElementSibling;
        extendedInfo.classList.toggle('visible');
        extendedInfo.classList.toggle('hidden');
        this.textContent = extendedInfo.classList.contains('visible') ? 'See Less' : 'See More';
      });
    });
  
    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.event-card');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselTrack.style.transform = `translateX(${offset}%)`;
    }
    
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + cardCount) % cardCount;
      updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % cardCount;
      updateCarousel();
    });
  
    // Animate stats counters when they come into view
    const stats = document.querySelectorAll('.stat-value');
    const statsSection = document.querySelector('.stats-section');
    const animationDuration = 2000; // 2 seconds
    
    let statsAnimated = false;
    
   function animateStats() {
  if (statsAnimated) return;

  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const startTime = Date.now();

    function updateCount() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const currentValue = Math.floor(progress * target);

      stat.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = stat.dataset.plus === "true" ? target + "+" : target;
      }
    }

    updateCount();
  });

  statsAnimated = true;
}
  
    // Set up Intersection Observer for animations
    const observerOptions = {
      threshold: 0.2
    };
    
    // Fade-in elements when they enter viewport
    const fadeElements = document.querySelectorAll('.intro-container, .event-card, .stat-card, .rescue-container');
    fadeElements.forEach(element => {
      element.classList.add('fade-in');
    });
    
    const observeFade = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observeFade.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    fadeElements.forEach(element => {
      observeFade.observe(element);
    });
    
    // Observe stats section to trigger counter animation
    const observeStats = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observeStats.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    observeStats.observe(statsSection);
  
    // Initialize everything
    updateCarousel();
  });
  