export function displayError(input, error, message) {
  input.classList.add("border-red-500");
  error.textContent = message;
  error.classList.remove("hidden");
}

export function clearError(input, error) {
  input.classList.remove("border-red-500");
  error.textContent = "";
  error.classList.add("hidden");
}