// script.js

// Example functionality: you can add more JavaScript to enhance interactivity
console.log("Car rental website loaded successfully!");

function submitForm() {
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Format email content
  const emailContent = `
                <h2>New Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

  // Display formatted content
  document.getElementById("email-output").innerHTML = emailContent;

  // Optionally, you can also send the data to a server using fetch or XMLHttpRequest here
}
