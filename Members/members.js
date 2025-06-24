const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Member data
const memberData = [
    {
      id: 1,
      name: "Atanu Jana",
      class: "atanu",
      position: "Chairperson",
      description: "A visionary leader, Atanu steers Eklavya with passion, fostering teamwork and driving impactful social initiatives for community transformation.",
      image: "cp.jpg",
      style: "",
      link: "https://www.linkedin.com/in/atanu-jana-5b616123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 2,
      name: "Ankush Panja",
      class: "ankush",
      position: "Vice Chairperson",
      description: "Dynamic and supportive, Ankush ensures seamless execution of Eklavya’s mission, empowering teams and amplifying outreach with strategic dedication.",
      image: "Vcp.jpg",
      style: "",
      link: "https://www.linkedin.com/in/ankush-panja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 3,
      name: "Lably Giri",
      class: "Lably",
      position: "Secretary",
      description: "Efficient and organized, Lably orchestrates Eklavya’s operations with precision, ensuring smooth coordination and timely execution of all initiatives.",
      image: "lably.jpg",
      style: "height: 270px ;",
      link: "https://www.linkedin.com/in/lably-giri-6007bb248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 4,
      name: "Rajeswari Kundu",
      class: "Rajeswari",
      position: "Joint Secretary",
      description: "Diligent and detail-oriented, Rajeswari bridges communication gaps, maintaining records and fostering synergy within Eklavya’s passionate team.",
      image: "rajeswari.jpg",
      style: "",
      link: "https://www.linkedin.com/in/rajeswari-kundu-72087a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 5,
      name: "Triyasa Das",
      class: "triyasha",
      position: "Treasurer",
      description: "Meticulous and trustworthy, Triyasa manages Eklavya's resources with transparency, ensuring optimal utilization for every social welfare initiative.",
      image: "triyasa.jpg",
      style: "",
      link: "https://www.linkedin.com/in/triyasa-das-67b454278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 5.1,
      name: "Sruti Choubey Mohanta",
      class: "sruti",
      position: "Joint Treasurer",
      description: "Strategic and accountable, Sruti oversees finances with expertise, balancing budgets to maximize Eklavya’s community-driven impact sustainably.",
      image: "sruti.jpg",
      style: "height: 320px;",
      link: "https://www.linkedin.com/in/sruti-choubey-mohanta-460046219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 5,
      name: "Pratham Das",
      class: "pratham",
      position: "Teaching Head",
      description: " Innovative and empathetic, Pratham bridges students and educators, fostering mentorship to amplify Eklavya’s educational outreach with creativity.",
      image: "teaching_1.jpg",
      style: "height: 250px;",
      link: "https://www.linkedin.com/in/pratham-das?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 6,
      name: "Samriddha Hazra",
      class: "samriddha",
      position: "Teaching Head",
      description: "Dedicated and approachable, Samriddha designs impactful learning programs, empowering underprivileged youth through Eklavya’s educational initiatives.",
      image: "samriddha.jpg",
      style: "height: 250px;",
      link: ""
    },
    {
      id: 6.1,
      name: "Dipanwita Pattanayak",
      class: "dipanwita",
      position: "Teaching Head",
      description: "Passionate and insightful, Dipanwita champions inclusive education, guiding volunteers to nurture potential in every child Eklavya serves.",
      image: "dipanwita.jpg",
      style: "object-fit: contain; height: 300px;",
      link: "https://www.linkedin.com/in/dipanwita-pattanayak-3761822a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
   },
    {
      id: 7,
      name: "Sovana Majhi",
      class: "sovana",
      position: "Volunteer Head",
      description: "A natural motivator, Sovana energizes Eklavya's volunteers with infectious enthusiasm while ensuring seamless coordination for grassroots initiatives.",
      image: "sovana.jpg",
      style: "object-fit: contain;",
      link: "https://www.linkedin.com/in/sovana-majhi-5s9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 8,
      name: "Surajit Biswas",
      class: "surojit",
      position: "Volunteer Head",
      description: " A strategic organizer, Surajit optimizes volunteer potential through structured training and on-ground leadership for maximum community impact.",
      image: "surajit.png",
      style: "object-fit: contain; height: 350px;",
      link: ""
    },
    {
      id: 9,
      name: "Snega Biswas",
      class: "snega",
      position: "Content Writer Head",
      description: "Creative storyteller Snega crafts compelling narratives that amplify Eklavya's social impact through powerful words and strategic communication.",
      image: "snega.jpg",
      style: "object-fit: contain;",
      link: "https://www.linkedin.com/in/snega-biswas-01b977266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 10,
      name: "Soumik Bagchi",
      class: "james",
      position: "Content Writer Head",
      description: "Strategic content architect Soumik transforms ideas into impactful messaging, strengthening Eklavya's digital presence and community engagement.",
      image: "SOUMIK BAGCHI_CW HEAD.jpg",
      style: "object-fit: contain;",
      link: "https://www.linkedin.com/in/soumik-bagchi-6418a7260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

    },
    {
      id: 11,
      name: "Lata Pattanayak",
      class: "lata",
      position: "Graphic Designer Head",
      description: " Visual storyteller Lata transforms ideas into striking designs, crafting Eklavya’s identity with creative precision and impactful aesthetics.",
      image: "lata.png",
      style: "object-fit: contain; height: 320px;",
      link: ""

    },
    {
      id: 12,
      name: "Dipayan Nath",
      class: "dipayan",
      position: "Photography Head",
      description: "Through his lens, Dipayan captures Eklavya's soul, framing impactful moments that tell our story with authenticity and emotional resonance.",
      image: "dipayan.jpg",
      style: "",
      link: "https://www.linkedin.com/in/dipayan-nath-307453269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 13,
      name: "Suswagata Ghosh",
      class: "suswagata",
      position: "Editor in-chief",
      description: " A wordsmith with razor-sharp precision, Suswagata polishes Eklavya's narratives to perfection while maintaining authenticity and impactful storytelling.",
      image: "suswagata.jpg",
      style: "height: 310px;",
      link: "https://www.linkedin.com/in/suswagata-ghosh-318242252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 14,
      name: "Ritika Kuila",
      class: "ritika",
      position: "Editor in-chief",
      description: " With an eagle eye for detail, Ritika elevates every publication, ensuring clarity, consistency and compelling communication of Eklavya's mission.",
      image: "ritika.jpg",
      style: "height: 300px;",
      link: "https://www.linkedin.com/in/ritika-kuila-70bb44268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 15,
      name: "Anuska Kuila",
      class: "anushka",
      position: "Animal Welfare Head",
      description: "Compassionate advocate Anuska spearheads Eklavya's animal welfare initiatives with innovative solutions and hands-on rescue missions for vulnerable creatures.",
      image: "anuska.jpg",
      style: "height: 300px;",
      link: "https://www.linkedin.com/in/anuska-kuila-557528285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 16,
      name: "Aditi Bera",
      class: "aditi",
      position: "Animal Welfare Head",
      description: " Dedicated protector Aditi drives awareness campaigns and community engagement to create sustainable impact in animal welfare through Eklavya.",
      image: "aditi.jpg",
      style: "object-fit: contain; height: 400px;",
      link: "https://www.linkedin.com/in/aditi-bera-2176a6293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 17,
      name: "Triyasa Das",
      class: "triyasa",
      position: "Public Relation & Event Heads",
      description: " Strategic connector Triyasa builds powerful partnerships and orchestrates memorable events that amplify Eklavya's reach and community influence.",
      image: "triyasa.jpg",
      style: "",
      link: "https://www.linkedin.com/in/triyasa-das-67b454278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 18,
      name: "Sruti Choubry Mohanta",
      class: "sruti",
      position: "Public Relation & Event Heads",
      description: " Creative event architect Sruti designs impactful experiences while strengthening Eklavya's public image through innovative engagement strategies.",
      image: "sruti.jpg",
      style: "height: 320px;",
      link: "https://www.linkedin.com/in/sruti-choubey-mohanta-460046219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"    },
    {
      id: 19,
      name: "Anisha Sarkar",
      class: "anisha",
      position: "Recruitment in-charge",
      description: " Talent-spotter Anisha identifies passionate members, building Eklavya’s dream team through strategic outreach and thoughtful selection processes.",
      image: "anisha.jpg",
      style: "height: 250px;",
      link: "https://www.linkedin.com/in/anisha-sarkar-b9a162250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 20,
      name: "Dipasha Mehta",
      class: "dipasha",
      position: "Recruitment in-charge",
      description: "Dynamic evaluator Dipasha curates dedicated squads, matching skills to missions while fostering an inclusive culture for new members.",
      image: "dipasha.jpg",
      style: "object-fit: contain;",
      link: "https://www.linkedin.com/in/dipasha-mehta-0433b32b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];
  
  // Create and render member cards
  function renderMembers() {
    const membersContainer = document.getElementById('membersContainer');
  
    memberData.forEach((member, index) => {
      // Add custom class for Snega's image
      const customImageClass = member.id === 7 ? 'member-image pratham-img' : 'member-image';
      
      // Create card element
      const memberCard = document.createElement('div');
      memberCard.className = 'col';
      memberCard.innerHTML = `
        <div class="member-card" id="${member.id}">
          <div class="member-image-container">
            <img
              src="${member.image}" 
              alt="${member.name} - ${member.position}"
              class="${member.class}" style= "${member
              .style}"
            />

          </div>
          <div class="member-info">
            <h3 class="member-name"><a href="${member.link}" style="text-decoration: none;">${member.name}</a></h3>
            <p class="member-position">${member.position}</p>
            <p class="member-description">${member.description}</p>
          </div>
        </div>
      `;
  
      membersContainer.appendChild(memberCard);
  
      // Staggered animation
      setTimeout(() => {
        const card = memberCard.querySelector('.member-card');
        card.classList.add('visible');
      }, 100 * index);
    });
  }
  // Set current year in footer
  function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    yearElement.textContent = new Date().getFullYear().toString();
  }
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', function() {
    renderMembers();
    setCurrentYear();
  });
  