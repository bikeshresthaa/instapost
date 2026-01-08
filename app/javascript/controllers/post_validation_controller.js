import { Controller } from "@hotwired/stimulus"
import { displayError, clearError } from "./error_display"

// Connects to data-controller="post-validation"
export default class extends Controller {
  static targets = [ "photoInput", "descriptionInput", "photoError", "descriptionError"  ]

  validatePhoto() {
    const photoField = this.photoInputTarget;
    const photoError = this.photoErrorTarget;

    if (photoField.files.length === 0) {
      displayError(photoField, photoError, "Please select a photo to upload.");
      return false;
    }else{
      clearError(photoField, photoError);
      return true;
    }
  }

  validateDescription() {
    const descriptionField = this.descriptionInputTarget;
    const descriptionError = this.descriptionErrorTarget;
    const descriptionValue = descriptionField.value.trim();

    if (descriptionValue === "") {
      displayError(descriptionField, descriptionError, "Description cannot be empty.");
      return false;
    }else if (descriptionValue.length > 300) {
      displayError(descriptionField, descriptionError, "Description cannot exceed 300 characters.");
      return false;
    }else{
      clearError(descriptionField, descriptionError);
      return true;
    }
  }

  validatePost(event) {
    let photoValid = this.validatePhoto();
    let descriptionValid = this.validateDescription();

    if (!photoValid || !descriptionValid) {
      event.preventDefault();
    }
  }
}
