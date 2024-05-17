document.getElementById('mobile-menu').addEventListener('click', function() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
  });
document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
      title.addEventListener('click', function() {
        const details = this.nextElementSibling.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
      });
    });
  });  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const message = document.getElementById('message').value;
    
    const subject = `Inquiry from ${name}`;
    const body = `Hi Siva,\n\n${message}\n\nBest regards,\n${name}`;
    
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Attempt to open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    document.getElementById('success-message').style.display = 'block';

  });
  
