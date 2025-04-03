// Show about section by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showAboutSection();
});

function showContactForm() {
    document.getElementById('contact-section').style.display = 'block';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
    document.getElementById('single-project').style.display = 'none';
    document.querySelector('.resume-download').style.display = 'none'; // Hide resume button
    window.scrollTo(0, 0);
}

function showAboutSection() {
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
    document.getElementById('single-project').style.display = 'none';
    document.querySelector('.resume-download').style.display = 'block'; // Show resume button
    window.scrollTo(0, 0);
}

function showProjects() {
    document.getElementById('projects-section').style.display = 'block';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('single-project').style.display = 'none';
    document.querySelector('.resume-download').style.display = 'none'; // Hide resume button
    window.scrollTo(0, 0);
}

function showSingleProject(projectId) {
    // Hide all project details first
    document.querySelectorAll('.project-detail').forEach(project => {
        project.style.display = 'none';
    });
    
    // Show the selected project
    document.getElementById(projectId).style.display = 'block';
    
    // Show the single project view
    document.getElementById('single-project').style.display = 'block';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
    document.querySelector('.resume-download').style.display = 'none'; // Hide resume button
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function clearForm(event) {
    event.preventDefault();
    let form = document.getElementById('contact-form');
    form.reset();
    alert("Message sent! I'll get back to you soon.");
}

function zoomImage(img) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
        
        const modalImg = document.createElement('img');
        modalImg.className = 'modal-content';
        modalImg.id = 'zoomedImage';
        
        modal.appendChild(modalImg);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
    }
    
    // Display the modal
    modal.style.display = 'block';
    const modalImg = document.getElementById('zoomedImage');
    modalImg.src = img.getAttribute('data-fullsize') || img.src;
    
    // Close when clicking outside image
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const email = document.querySelector('input[type="email"]');
        if (!email.value.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address');
            email.focus();
        }
    });
}