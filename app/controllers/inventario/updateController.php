<?php 

include_once '../../DBconexion/DB.class.php';
/*Incluimos el fichero de la clase Conf*/
include_once '../../DBconexion/Conf.class.php';

$data = json_decode(file_get_contents("php://input"));
$bd=Db::getInstance();
$sql="UPDATE inventario SET mount='".$data[1]->mount."' WHERE id='".$data[0]->id."'";
$respon=$bd->ejecutar($sql);
if($respon)
$array['mensaje']= "success";
else
$array['mensaje']= "failed";

echo json_encode($array);
 ?>