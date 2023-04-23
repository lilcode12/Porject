// Step 1: Find the element
var submitButton = document.getElementById("submit-button");

// Step 2: Write the behavior
function submitButtonClicked() {
    alert("Your Contact Information Has Been Submitted");
}

// Step 3: Link the event handler
submitButton.addEventListener('click', submitButtonClicked);
