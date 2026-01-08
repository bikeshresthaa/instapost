import { Controller } from "@hotwired/stimulus"
import { displayError, clearError } from "./error_display"

// Connects to data-controller="comment-validation"
export default class extends Controller {
  static targets = [ "commentInput", "commentError" ]

  validateComment(event) {
    const comment = this.commentInputTarget.value.trim();
    const errorDisplay = this.commentErrorTarget;

    if(comment === "" && event.type === "submit") {
      event.preventDefault();
      displayError(this.commentInputTarget, errorDisplay, "Comment cannot be empty.");
    } else {
      clearError(this.commentInputTarget, errorDisplay);
    }
  }
}
