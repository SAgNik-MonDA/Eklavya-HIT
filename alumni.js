// Alumni data
const alumniData = [
    {
      id: 1,
      name: "Diti Saha",
      role: "Computer Science & Engineering",
      company: "Batch of 2020 - 2024",
      quote: "Team Eklavya will always be my root.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"
    },
    {
      id: 2,
      name: "Swagata Jana",
      role: "Computer Science & Engineering",
      company: "Batch of 2020 - 2024",
      quote: "The values I learned at Eklavya shaped my professional journey.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 3,
      name: "Shila Mitre",
      role: "Computer Science & Engineering",
      company: "Batch of 2020 - 2024",
      quote: "Forever grateful for the foundation Eklavya provided me.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 4,
      name: "Sayan Santra",
      role: "Chemical Engineering",
      company: "Batch of 2020 - 2024",
      quote: "Eklavya taught me to dream big and pursue excellence.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 5,
      name: "Sayak Das",
     role: "Information Technology",
      company: "Batch of 2020 - 2024",
      quote: "My time at Eklavya was truly transformative.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 6,
      name: "Adi Nath Bhawani",
      role: "Computer Science & Engineering - AIML",
      company: "Batch of 2021 - 2025",
      quote: "Eklavya's mentorship program changed my life.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 7,
      name: "Anirban Roy Chowdhury",
      role: "Electronics & Communication Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The scientific temperament I developed at Eklavya guides me every day.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 8,
      name: "Ushnish Santra",
      role: "Electronics & Communication Engineering",
      company: "Batch of 2021 - 2025",
      quote: "Eklavya instilled in me a passion for building sustainable infrastructure.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
    {
      id: 9,
      name: "Soumen Dutta",
      role: "Electronics & Communication Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
       {
      id: 10,
      name: "Soumyajit Baidya",
      role: "Electrical Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
       {
      id: 11,
      name: "Sanjana Jana",
      role: "Computer Science & Engineering - CS",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
      {
      id: 12,
      name: "Debanshoo Mitra",
      role: "Electronics & Communication Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
      {
      id: 12.1,
      name: "Pritam Pramanik",
      role: "Electronics & Communication Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
      {
      id: 13,
      name: "Kuntal Pramanik",
      role: "Chemical Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    },
       {
      id: 14,
      name: "Sayan Haldar",
      role: "Applied Electronics & Instrumentation Engineering",
      company: "Batch of 2021 - 2025",
      quote: "The leadership skills I gained at Eklavya helped me build my company.",
      style: "object-fit: contain;",  
      image: "basic-profile-pic.jpg"    }

  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Render all alumni cards
    renderAlumniCards(alumniData);
    
    // Handle search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Add animation to header when page loads
    setTimeout(() => {
      document.querySelector('.alumni-header').classList.add('animate');
    }, 200);
    
    // Detect when elements enter viewport for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe cards as they're added
    document.querySelectorAll('.alumni-card').forEach(card => {
      observer.observe(card);
    });
  });
  
  function renderAlumniCards(alumni) {
    const alumniContainer = document.getElementById('alumniCards');
    alumniContainer.innerHTML = '';
    
    if (alumni.length === 0) {
      document.getElementById('noResultsMessage').classList.remove('d-none');
      return;
    }
    
    document.getElementById('noResultsMessage').classList.add('d-none');
    
    alumni.forEach((alumnus, index) => {
      const card = createAlumniCard(alumnus, index);
      alumniContainer.appendChild(card);
    });
  }
  
  function createAlumniCard(alumnus, index) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-6 col-lg-4';
    
    // Set animation delay based on index
    const delay = index * 0.1;
    colDiv.style.animationDelay = `${delay}s`;
    
    const cardHTML = `
      <div class="card alumni-card h-100 shadow-sm overflow-hidden">
        <div class="position-relative overflow-hidden" style="height: 240px;">
          <img src="${alumnus.image}" style="${alumnus.style}" alt="${alumnus.name}" class="alumni-image w-100">
          ${alumnus.quote ? `
            <div class="quote-container">
              <p class="text-white text-center fst-italic mb-0">"${alumnus.quote}"</p>
            </div>
          ` : ''}
        </div>
        <div class="card-body">
          <h3 class="card-title text-primary">${alumnus.name}</h3>
          <p class="card-text text-dark mb-1">${alumnus.role}</p>
          <p class="card-text text-muted small">${alumnus.company}</p>
          ${alumnus.quote ? `
            <button class="btn btn-link btn-sm p-0 text-decoration-none quote-toggle">
              Show Quote
            </button>
          ` : ''}
        </div>
      </div>
    `;
    
    colDiv.innerHTML = cardHTML;
    
    // Add event listener for quote toggle button if quote exists
    if (alumnus.quote) {
      const quoteButton = colDiv.querySelector('.quote-toggle');
      const cardElement = colDiv.querySelector('.card');
      
      quoteButton.addEventListener('click', () => {
        const isShowing = cardElement.classList.toggle('show-quote');
        quoteButton.textContent = isShowing ? 'Hide Quote' : 'Show Quote';
      });
    }
    
    return colDiv;
  }
  
  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredAlumni = alumniData.filter(alumnus => 
      alumnus.name.toLowerCase().includes(searchTerm) ||
      alumnus.company.toLowerCase().includes(searchTerm) ||
      alumnus.role.toLowerCase().includes(searchTerm)
    );
    
    renderAlumniCards(filteredAlumni);
  }
  