<?php
include "accesdonnees.php";
$hote='localhost';    // le chemin vers le serveur
$port='3306';
$nom_bd='tchat';        // le nom de votre base de données
$utilisateur='root';  // nom d'utilisateur pour se connecter
$mot_passe='';  // mot de passe
// ceation du Data Source Name, ou DSN, qui contient les infos
// requises pour se connecter à la base.
//$dsn='mysql:host='.$hote.';port='.$port.';dbname='.$nom_bd;
try{
	$connexion=connexion($hote, $port, $nom_bd, $utilisateur, $mot_passe);
	//mysql_set_charset('utf8');
}catch (Exception $e){
	echo "Echec de connexion a la base de données ".$nom_bd."<br/>";
	$e->getMessage();
}

?>