document.addEventListener('DOMContentLoaded', () => {

    // Logic untuk Hamburger Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Logic untuk animasi saat scroll
    const animatedElements = document.querySelectorAll('.animated-element');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Penanganan Error untuk Gambar
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Sembunyikan gambar yang rusak
            this.style.display = 'none';
            
            // Dapatkan parent dari gambar
            const parent = this.parentElement;

            // Cek apakah fallback sudah ada
            if (parent && !parent.querySelector('.fallback-icon')) {
                // Buat elemen fallback
                const fallback = document.createElement('div');
                fallback.classList.add('fallback-icon');
                fallback.innerHTML = '<i class="fas fa-image"></i>';
                
                // Tambahkan fallback ke dalam parent
                parent.prepend(fallback);
            }
        });
    });

});
