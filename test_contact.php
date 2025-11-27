<?php
// Manual test for contact form behavior

// Simulate what the form sends via POST
$_POST['name'] = 'Test User';
$_POST['email'] = 'testuser@example.com';
$_POST['phone'] = '1234567890';
$_POST['message'] = 'This is a test message.';

// Capture the output from contact.php
ob_start();
include 'contact.php';
$output = ob_get_clean();

// Check the result and print test status
if (strpos($output, 'Message sent successfully') !== false) {
    echo " Test Passed: Message inserted successfully\n";
} else {
    echo " Test Failed: " . $output . "\n";
}
?>
