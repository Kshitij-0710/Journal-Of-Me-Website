document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('waitlistModal');
    const btns = document.querySelectorAll('.cta-button, .waitlist-button');
    const span = document.getElementsByClassName('close')[0];
    
    btns.forEach((btn) => {
      btn.onclick = function () {
        modal.style.display = 'block';
      };
    });
  
    span.onclick = function () {
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  });
  