/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// assets/js/app.js
const $ = require('jquery');
// global.$=global.jQuery=$;
$(document).ready(function() {
    
    

    
    $("#user-menu-button").click(function() {
        
        // $("$menuBar").addClass("display-block");
        // $("$menuBar").css("display", "block");
        $("#menuBar").toggle();

    });




    $("#myFormSign").submit(function(event) {

                let isValid = true;
                let errorMessage = "";

                // Validation for the name field
                const name = $("#name_sign").val();
                if (name.trim() === "") {
                    errorMessage += "Name is required.\n";
                    isValid = false;
                }

                // Validation for the email field
                const email = $("#email_sign").val();
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailPattern.test(email)) {
                    errorMessage += "Invalid email address.\n";
                    isValid = false;
                }

                // Validation for the password field
                const password = $("#password_sign").val();
                if (password.length < 6) {
                    errorMessage += "Password must be at least 6 characters long.\n";
                    isValid = false;
                }

                 // Validation for the passwordConfirmation field
                 const passwordConfirmation = $("#password_confirmation_sign").val();
                 if (passwordConfirmation.length < 6) {
                     errorMessage += "PasswordConfirmation must be at least 6 characters long.\n";
                     isValid = false;
                 }

                // Display alerts if validation fails
                if (!isValid) {
                    alert(errorMessage);
                    event.preventDefault(); // Prevent form submission
                }else{
                    alert('validate');
                }



    });



    $("#myFormLog").submit(function() {
        alert('Enter');
    });

    })












