import { Controller } from "@hotwired/stimulus"
import { displayError, clearError } from "./error_display"

// Connects to data-controller="user-auth-validation"
export default class extends Controller {
  static targets = [ "emailInput", "passwordInput", "passwordConfirmationInput" ]

  validateEmail() {
    const email = this.emailInputTarget.value;
    const emailError = this.emailInputTarget.nextElementSibling;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
      displayError(this.emailInputTarget, emailError, "Please enter a valid email address!");
      return false;
    }else{
      clearError(this.emailInputTarget, emailError);
    }
  }

  validatePassword() {
    const password = this.passwordInputTarget.value;
    const passwordError = this.passwordInputTarget.nextElementSibling;

    if (password.length < 8) {
      displayError(this.passwordInputTarget, passwordError, "Password must be at least 8 characters long!");
      return false;
    } else {
      clearError(this.passwordInputTarget, passwordError);
    }
  }

  validatePasswordConfirmation() {
    const password = this.passwordInputTarget.value;
    const passwordConfirmation = this.passwordConfirmationInputTarget.value;
    const confirmationError = this.passwordConfirmationInputTarget.nextElementSibling;

    if (password !== passwordConfirmation) {
      displayError(this.passwordConfirmationInputTarget, confirmationError, "Passwords do not match!");
      return false;
    } else {
      clearError(this.passwordConfirmationInputTarget, confirmationError);
    }
  }

  validateSignup(event){
    let emailValid = this.validateEmail();
    let passwordValid = this.validatePassword();
    let passwordConfirmationValid = this.validatePasswordConfirmation();

    if (!emailValid || !passwordValid || !passwordConfirmationValid) {
      event.preventDefault();
    }
  }

  validateLogin(event) {
    let emailValid = this.validateEmail();
    let passwordValid = this.validatePassword();

    if (!emailValid || !passwordValid) {
      event.preventDefault();
    }
  }
  
}
