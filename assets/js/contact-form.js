/* ================================================
Template Name: ARCHEN - CREATIVE MULTIPURPOSE TEMPLATE
Description: A creative multipurpose website template
Version: 1.0
Author: Code & Square
Author URI: codeandsquare.com
================================================ */

$(document).ready(function() {
	'use strict';
    
    //	CONTACT FORM
    function initContactForm() {
        var scrollElement = $('html,body'),
            contactForm = $('.contact-form');

        contactForm.on('submit', function() {

            var requiredFields = $(this).find('.required'),
                formData = contactForm.serialize(),
                formAction = $(this).attr('action'),
                formSubmitMessage = $('.response-message');

            requiredFields.each(function() {

                if( $(this).val() === "" ) {
                        
                    $(this).addClass('input-error');

                } else {

                    $(this).removeClass('input-error');
                }

            });

            function validateEmail(email) { 
                var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return exp.test(email);
            }
            
            var emailField = $('.contact-form-email');

            if( !validateEmail(emailField.val()) ) {

                emailField.addClass("input-error");

            }

            if ($(".contact-form :input").hasClass("input-error")) {
                return false;
            } else {

                $.post(formAction, formData, function(data) {
                    formSubmitMessage.text(data);

                    requiredFields.val("");
                    
                    setTimeout(function() {
                        formSubmitMessage.slideUp();
                    }, 5000);
                });
                
            }

            return false;
        });

    }
    initContactForm();
    
});