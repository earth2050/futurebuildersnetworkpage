document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the email input value
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        // Log the email to the console (for now)
        console.log(`Email submitted: ${email}`);

        // You could add a simple visual confirmation here, e.g.,
        // alert(`Thank you for signing up, ${email}!`);

        // Clear the form field after submission
        emailInput.value = '';
    });
});
