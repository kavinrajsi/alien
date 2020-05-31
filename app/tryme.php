<?php
/* at the top of 'tryme.php' */
if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
  /*
     Up to you which header to send, some prefer 404 even if
     the files does exist for security
  */
  header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );

  /* choose the appropriate page to redirect users */
  die( header( 'location: /' ) );

}

// the message
$services = ($_POST['service']);
$name = ($_POST['name']);
$email = ($_POST['email']);
$mobile = ($_POST['phoneNumber']);
$projectDetails = ($_POST['projectDetails']);
$hearAboutus = ($_POST['hearAboutus']);

foreach( $services as $servicesValue )
  $service .= "$servicesValue, \n";


 $to = "business@thealien.design";


$subject = "[thealigndesign.com] form Enquire by ". $name." for $service";

$msg = "<html><body style='font-family:Lato,sans-serif;'>";
$msg .="<img width='46' height='46' src='https://thealien.design/apple-touch-icon.png'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Enquire for theAlien.design</h2>\r\n";
$msg .= "<table width='600' border='0' align='left' cellpadding='0' cellspacing='0' bgcolor='#FFF' style='font-weight: 700;font-size: 12px;color: #666;font-family:Arial, Helvetica, sans-serif; background-color:#FFFFFF;'>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Name</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $name . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-bottom:none; border-right:none; padding:10px;'>Email</td><td width='250' style='border: 1px solid #CCC; border-bottom:none; padding:10px;'> " . $email . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>Phone Number</td><td width='250' style='border: 1px solid #CCC; padding:10px;'><a href='tel:".$mobile."'>" . $mobile . "</a></td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>Service</td><td width='250' style='border: 1px solid #CCC; padding:10px;'>" .  $service  . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>Project Detail</td><td width='250' style='border: 1px solid #CCC; padding:10px;'>" . $projectDetails . "</td></tr>";
$msg .= " <tr><td width='250' style='border: 1px solid #CCC; border-right:none; padding:10px;'>How did you hear about us</td><td width='250' style='border: 1px solid #CCC; padding:10px;'>" . $hearAboutus . "</td></tr>";
$msg .= "</table>";
$msg .= "</body></html>";


$header = "From:alphvvvm@premium59.web-hosting.com\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$retval = mail ($to,$subject,$msg,$header);

if( $retval == true ) {
  print "<p class='success'>Thank you, we will get back to you soon</p>";
}else {
  print "<p class='error'>Problem in Sending Mail</p>";
}

?>
