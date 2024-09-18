function Click(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Get values from form inputs
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const education = document.getElementById("eduaction").value;

    // Get all checked checkboxes for hobbies using map
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
                         .map(hobby => hobby.value);

    const comment = document.getElementById("comment").value;

    // Display the values in the second form-div
    document.getElementById("nameResult").innerHTML = `<strong>Name:</strong> ${name}`;
    document.getElementById("passwordResult").innerHTML = `<strong>Password:</strong> ${password}`;
    document.getElementById("genderResult").innerHTML = `<strong>Gender:</strong> ${gender}`;
    document.getElementById("educationResult").innerHTML = `<strong>Education:</strong> ${education}`;
    document.getElementById("hobbyResult").innerHTML = `<strong>Hobbies:</strong> ${hobbies.join(", ")}`;
    document.getElementById("commentResult").innerHTML = `<strong>Comment:</strong> ${comment}`;
}
