import { Controller } from "@hotwired/stimulus"
import { displayError, clearError } from "./error_display"

// Connects to data-controller="user-auth-validation"
export default class extends Controller {
  static targets = [ "emailInput", "passwordInput", "passwordConfirmation" ]

  validateEmail() {
    const email = this.emailInputTarget.value;
    const emailError = this.emailInputTarget.nextElementSibling;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
      displayError(this.emailInputTarget, emailError, "Please enter a valid email address!");
    }else{
      clearError(this.emailInputTarget, emailError);
    }
  }

  validatePassword() {
    const password = this.passwordInputTarget.value;
    const passwordError = this.passwordInputTarget.nextElementSibling;

    if (password.length < 8) {
      displayError(this.passwordInputTarget, passwordError, "Password must be at least 8 characters long!");
    } else {
      clearError(this.passwordInputTarget, passwordError);
    }
  }

  validatePasswordConfirmation() {
    const password = this.passwordInputTarget.value;
    const passwordConfirmation = this.passwordConfirmationTarget.value;
    const confirmationError = this.passwordConfirmationTarget.nextElementSibling;

    if (password !== passwordConfirmation) {
      displayError(this.passwordConfirmationTarget, confirmationError, "Passwords do not match!");
    } else {
      clearError(this.passwordConfirmationTarget, confirmationError);
    }
  }
  
}
