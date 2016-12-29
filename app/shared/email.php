<?php 

    $array = json_decode(file_get_contents('php://input'), true);
    $name = $array['name'];
    $email = $array['email'];
    $phone = $array['phone'];
    $message = $array['message'];

    if (($name=="")||($email=="")) 
        { 
        printf("0"); 
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="elidesign önskar kontakt via formuläret"; 
		mail("ardnassandra13@gmail.com", $subject, "Telefonnummer: ".$phone." Meddelande: ".$message, $from);
        } 
?> 