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
global.$=global.jQuery=$;
$(document).ready(function() {
    
    $("#user-menu-button").click(function() {
        
        // $("$menuBar").addClass("display-block");
        // $("$menuBar").css("display", "block");
        $("#menuBar").toggle();

    });


    $("#myFormSign").submit(function(event) {

                let isValid = true;
                // Validation for the name field
                const name = $("#name_sign").val();
                if (name.trim() === "") {
                    isValid = false;
                    $("#text_name_sign").addClass("block").removeClass("hidden")
                    $("#name_sign").addClass("bg-red-50  border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_name_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")
                }else{
                    $("#text_name_sign").addClass("hidden").removeClass("block")
                    $("#name_sign").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_name_sign").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")

                }

                // Validation for the email field
                const email = $("#email_sign").val();
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                
                if (email.trim() === "") {
                    isValid = false;
                    $("#text_email_sign1").addClass("block").removeClass("hidden")
                    $("#email_sign").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_email_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

                }
                
                if (!emailPattern.test(email) && email.trim() !== "" ) {
                    isValid = false;
                    $("#text_email_sign2").addClass("block").removeClass("hidden")
                    $("#text_email_sign1").addClass("hidden").removeClass("block")
                    $("#email_sign").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_email_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

                }else if (emailPattern.test(email) ) {
                    $("#text_email_sign1").addClass("hidden").removeClass("block")
                    $("#text_email_sign2").addClass("hidden").removeClass("block")
                    $("#email_sign").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_email_sign").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")
                }

                // Validation for the password field
                const password = $("#password_sign").val();
                if (password.length < 6) {
                    isValid = false;
                    $("#text_password_sign").addClass("block").removeClass("hidden")
                    $("#password_sign").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_password_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

                }else{
                    $("#text_password_sign").addClass("hidden").removeClass("block")
                    $("#password_sign").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_password_sign").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")

                }

                 // Validation for the passwordConfirmation field
                 const passwordConfirmation = $("#password_confirmation_sign").val();
                 if (passwordConfirmation.length < 6 ) {
                     isValid = false;
                     $("#text_passwordConfirmation_sign1").addClass("block").removeClass("hidden")
                     $("#text_passwordConfirmation_sign2").addClass("hidden").removeClass("block")
                     $("#password_confirmation_sign").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                     $("#label_passwordConfirmation_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

                 }else{
                    $("#text_passwordConfirmation_sign1").addClass("hidden").removeClass("block")
                    $("#text_passwordConfirmation_sign2").addClass("hidden").removeClass("block")
                    $("#password_confirmation_sign").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_passwordConfirmation_sign").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")

                 }

                 if (passwordConfirmation !== password && passwordConfirmation.length >= 6 ) {
                     isValid = false;
                    $("#text_passwordConfirmation_sign2").addClass("block").removeClass("hidden")
                    $("#text_passwordConfirmation_sign1").addClass("hidden").removeClass("block")
                    $("#password_confirmation_sign").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
                    $("#label_passwordConfirmation_sign").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

                }

                // Display alerts if validation fails
                if (!isValid) {
                    event.preventDefault(); // Prevent form submission
                }else{
                    alert('validate');
                }
    });


    $("#myFormLog").submit(function(event) {

        let isValid = true;
 
        // Validation for the email field
        const email = $("#email_log").val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.trim() === "") {
             isValid = false;
            $("#text_email_log1").addClass("block").removeClass("hidden")
            $("#email_log").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
            $("#label_email_log").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

        }
        
        if (!emailPattern.test(email) && email.trim() !== "" ) {
             isValid = false;
            $("#text_email_log2").addClass("block").removeClass("hidden")
            $("#text_email_log1").addClass("hidden").removeClass("block")
            $("#email_log").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
            $("#label_email_log").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

        }else if (emailPattern.test(email) ) {
            $("#text_email_log1").addClass("hidden").removeClass("block")
            $("#text_email_log2").addClass("hidden").removeClass("block")
            $("#email_log").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
            $("#label_email_log").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")

        }
        // Validation for the password field
        const password = $("#password_log").val();

        if (password.length < 6) {
             isValid = false;
            $("#text_password_log").addClass("block").removeClass("hidden")
            $("#password_log").addClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").removeClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
            $("#label_password_log").removeClass("text-green-700 dark:text-green-500 text-gray-700").addClass("text-red-700 dark:text-red-500")

        }else{
            $("#text_password_log").addClass("hidden").removeClass("block")
            $("#password_log").removeClass("bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500").addClass("bg-green-50   border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500  focus:ring-green-500 focus:border-green-500 block  dark:bg-gray-700 dark:border-green-500")
            $("#label_password_log").addClass("text-green-700 dark:text-green-500 ").removeClass("text-red-700 dark:text-red-500 text-gray-700")

        }

         // Display alerts if validation fails
         if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }else{
            alert('Enter');
        }


    });
    








    })












