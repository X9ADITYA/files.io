const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for validation
  try {
    let valid = true;
    const name = document.getElementById("name");
    const age = document.getElementById("age");

    if (!name.value) {
      document.getElementById("nameError").textContent = "Name is required";
      document.getElementById("nameError").style.display = "inline";
      valid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    if (!age.value || isNaN(age.value) || age.value <= 0) {
      document.getElementById("ageError").textContent = "Please enter a valid age";
      document.getElementById("ageError").style.display = "inline";
      valid = false;
    } else {
      document.getElementById("ageError").style.display = "none";
    }

    if (valid) {
      alert("Form submitted successfully!");
    }
  } catch (error) {
    console.error("Form validation error:", error);
  }
});
