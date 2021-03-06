<?php

/**
* Template Name: CONTACT FORM PHP FILE FOR AVIATOR HTML5/CSS3 TEMPLATE
* Description: A multipurpose & multi-featured HTML5/CSS3 website template with endless possibilities.
* Version: 1.0
* Author: Code & Square 
* Author URI: codeandsquare.com
* Subscription Form Configuration for PHP5
*
*/

/* ==============================================
Variables you can change
============================================== */

$mailto = 'yourcompany@yourcompany.com'; // Enter your mail addres here. 
$subject = 'yourcompany'; // Enter the subject here.

$error_message = 'Error sending your message, please, check your email and try again'; // Message displayed if an error occurs
$success_message = 'Message Sent'; // Message displayed id the email has been sent successfully

/* ==============================================
Do not modify anything below
============================================== */

$frm_name = stripcslashes($_POST['name']);
$frm_email = stripcslashes($_POST['email']);
$frm_message = stripcslashes($_POST['message']);


$message = "Name: $frm_name\r\nEmail: $frm_email\r\nMessage: $frm_message";

$headers = "From: $frm_name <$frm_email>" . "\r\n" . "Reply-To: $frm_email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

function validateEmail($email) {
   if(preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email))
	  return true;
   else
	  return false;
}

if((strlen($frm_name) < 1 ) || (strlen($frm_email) < 1 ) || (strlen($frm_message) < 1 ) || validateEmail($frm_email) == FALSE ) {

	echo($error_message);

} else {

	if( mail($mailto, $subject, $message, $headers) ) {
		
		echo($success_message);

	} else {

		echo($error_message);

	}

}

?>