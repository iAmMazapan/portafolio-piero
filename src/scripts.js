// ============================================
// CONFIGURACIÓN INICIAL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENÚ MÓVIL
    // ============================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle del menú móvil
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú al hacer clic en un link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    
    // ============================================
    // BOTÓN SCROLL TO TOP
    // ============================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // ============================================
    // NAVBAR: CAMBIO DE ESTILO AL HACER SCROLL
    // ============================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    
    // ============================================
    // NAVEGACIÓN: RESALTAR SECCIÓN ACTIVA
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-white');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    
    // ============================================
    // ANIMACIONES DE ENTRADA (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
    
    
    // ============================================
    // LOG DE INICIALIZACIÓN
    // ============================================
    console.log('🚀 Portfolio cargado correctamente');
    console.log('📍 Secciones detectadas:', sections.length);
    // ============================================
    // EFECTO DE ESCRITURA EN EL NOMBRE
    // ============================================
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    const textToType = 'Piero Nieto';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 150);
        } else {
            // Cursor parpadeante al terminar
            cursor.classList.add('animate-pulse');
        }
    }

    // Iniciar el efecto después de un pequeño delay
    setTimeout(typeWriter, 500);

    // ============================================
    // PESTAÑAS DE CÓDIGO
    // ============================================
    const codeTabs = document.querySelectorAll('.code-tab');
    const codeContents = document.querySelectorAll('.code-content');

    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            
            // Remover active de todas las pestañas
            codeTabs.forEach(t => t.classList.remove('active'));
            codeContents.forEach(c => c.classList.remove('active'));
            
            // Activar la pestaña seleccionada
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});