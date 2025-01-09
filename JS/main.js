// Interactividad de la página EduNext Academy

// Cambio de fondo al pasar el ratón sobre los cursos
document.querySelectorAll('.course-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = '#ffefeb'
    card.style.transform = 'translateY(-5px)'
  })

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '#f9f9f9'
    card.style.transform = 'translateY(0)'
  })
})

// Animación del botón CTA
const ctaButton = document.querySelector('.cta-button')
ctaButton.addEventListener('mouseenter', () => {
  ctaButton.style.backgroundColor = '#ff4a3d'
  ctaButton.style.color = '#fff'
  ctaButton.style.transform = 'scale(1.1)'
  ctaButton.style.transition = 'all 0.3s ease'
})

ctaButton.addEventListener('mouseleave', () => {
  ctaButton.style.backgroundColor = '#fff'
  ctaButton.style.color = '#ff6f61'
  ctaButton.style.transform = 'scale(1)'
})

// Animación del botón "Explorar Cursos"
const exploreButton = document.querySelector('.explore-button')
exploreButton.addEventListener('mouseenter', () => {
  exploreButton.style.backgroundColor = '#ff4a3d'
  exploreButton.style.transform = 'scale(1.1)'
  exploreButton.style.transition = 'all 0.3s ease'
})

exploreButton.addEventListener('mouseleave', () => {
  exploreButton.style.backgroundColor = '#ff6f61'
  exploreButton.style.transform = 'scale(1)'
})

// Manejo del formulario de contacto
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault() // Evitar el envío por defecto
  alert('¡Gracias por contactarnos! Responderemos lo antes posible.')
  e.target.reset() // Limpiar el formulario
})
