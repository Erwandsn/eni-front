<?php
$json = file_get_contents("http://www.omdbapi.com/?apikey=efdc2275&t=Game%20of%20Thrones&Season=1");
$tablo = json_decode($json);
print_r($tablo);
?>