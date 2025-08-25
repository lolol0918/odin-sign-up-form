const inputs = document.querySelectorAll(".form-item input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        // Remove previous error
        input.classList.remove("error");

        // Example: email validation
        if (input.type === "email") {
            if (!input.value.includes("@") || !input.value.includes(".")) {
                input.classList.add("error");
            }
        }

        // Example: required text field
        if (input.required && input.value.trim() === "") {
            input.classList.add("error");
        }
    });
});