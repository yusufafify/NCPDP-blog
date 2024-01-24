// Define a QuickSubscribe class to handle the subscription form behavior
class QuickSubscribe {

  // Constructor for creating an instance of the QuickSubscribe class
  constructor(element) {
    this._element = element;
    this._button = element.querySelector('.subscribe-button');
    this._field = element.querySelector('.subscribe-field');
    this._input = element.querySelector('#subscribe-input');

    // Call the _bindEventListeners method to add event listeners to the form elements
    this._bindEventListeners();
  }

  // Method to bind event listeners to the form elements
  _bindEventListeners() {

    // Add a submit event listener to the form element
    this._element.addEventListener('submit', (e) => {
      e.preventDefault();

      // Call the _submit method to handle form submission
      this._submit();
    });

    // Add a click event listener to the subscribe button
    this._button.addEventListener('click', (e) => {
      e.preventDefault();

      // Call the _showField method to show the subscription field
      this._showField();
    });

    // Add focus and blur event listeners to the subscription input field
    this._input.addEventListener('focus', (e) => {
      this._inputFocused(true);  
    });

    this._input.addEventListener('blur', (e) => {
      this._inputFocused(false);  
    });

    // Add an input event listener to the subscription input field
    this._input.addEventListener('input', (e) => {
      this._inputHandleInput();  
    });
  }

  // Method to show the subscription field
  _showField() {
    this._element.classList.add('show-field');
  }

  // Method to hide the subscription field
  _hideField() {
    this._element.classList.remove('show-field'); 
  }

  // Method to handle form submission
  _submit() {
    this._element.classList.add('submitted');
    this._hideField();
  }

  // Method to handle changes in the subscription input field focus
  _inputFocused(focused = true) {
    this._field.classList.toggle('focused', focused);
  }

  // Method to handle changes in the subscription input field input
  _inputHandleInput() {
    this._field.classList.toggle('has-value', this._input.value.length > 0);  
  }
}

// Create a new instance of the QuickSubscribe class with a specific element passed as an argument
new QuickSubscribe(document.querySelector('.quick-subscribe'));
