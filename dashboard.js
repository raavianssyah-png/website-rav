document.addEventListener('DOMContentLoaded', function() {
    // Logic untuk mengganti konten di dashboard (Tab Navigation)
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.admin-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            const targetId = this.getAttribute('data-target');
            
            // Cek apakah ini tautan Logout
            if (targetId === null) {
                // Biarkan browser melakukan navigasi (Logout ke index.html)
                return;
            }
            
            e.preventDefault();

            // 1. Dapatkan target ID
            const targetSectionId = this.getAttribute('href').split('#')[1];
            
            // 2. Sembunyikan semua section
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 3. Tampilkan section yang sesuai
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // 4. Atur status active di sidebar
            navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // --- Simulasi Submit Form Jurnal ---
    document.getElementById('jurnalForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("SIMULASI BERHASIL: Jurnal sudah disimpan. Karena ini website statis, file tidak benar-benar terunggah.");
        this.reset();
    });

    // --- Simulasi Submit Form Galeri ---
    document.getElementById('galeriForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("SIMULASI BERHASIL: Foto Galeri sudah diunggah. Anda perlu CMS untuk implementasi nyata.");
        this.reset();
    });
});