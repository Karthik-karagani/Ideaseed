<?php
   $dbhost = 'localhost:7080';
   $dbuser = 'root';
   $dbpass = '5723';
   
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn ) {
      die('Could not connect: ' . mysql_error());
   }
   
   $sql = 'SELECT * FROM textbox';
   mysql_select_db('test_db');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
   while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
      echo "EMP ID :{$row['ideabox']}  <br> ";
         

   }
   
   echo "Fetched data successfully\n";
   
   mysql_close($conn);
?>
