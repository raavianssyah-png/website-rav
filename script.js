document.addEventListener('DOMContentLoaded', function() {
    // JavaScript untuk efek fade-in saat menggulir
    const fadeElements = document.querySelectorAll('.fade-in');
    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    
    // Logika Modal Galeri (Lightbox)
    var modal = document.getElementById("modal");
    var gambarBesar = document.getElementById("gambar-besar");
    var galeriLinks = document.getElementsByClassName("gallery-link");

    for (var i = 0; i < galeriLinks.length; i++) {
        galeriLinks[i].onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
            gambarBesar.src = this.href;
        }
    }

    var tutup = document.getElementsByClassName("modal-tutup")[0];
    if (tutup) { // Perbaikan: Cek apakah modal ada di halaman, untuk menghindari error JS
        tutup.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- LOGIKA FORM KONTAK LAMA DIHAPUS ---
    // Sekarang Formspree di kontak.html yang akan menangani pengiriman pesan.
    
});