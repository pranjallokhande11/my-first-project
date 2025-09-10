// A simple script to handle the contact form submission.
// Note: This is a front-end script only. A real contact form requires a back-end server to process the submission.
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            // Here you would typically send the form data to a back-end server
            // using fetch() or a similar method.

            // For demonstration purposes, we'll just show a success message.
            formStatus.textContent = 'Thank you! Your message has been sent.';
            formStatus.style.color = '#27ae60';
            contactForm.reset(); // Clear the form fields
        });
    }
});