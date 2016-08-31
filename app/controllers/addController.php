<?php 

include_once '../DBconexion/DB.class.php';
/*Incluimos el fichero de la clase Conf*/
include_once '../DBconexion/Conf.class.php';

$data = json_decode(file_get_contents("php://input"));
$bd=Db::getInstance();
$sql="INSERT INTO inventario (name,price,mount) VALUES ('".$data[0]->name."','".$data[1]->price."','".$data[2]->mount."')";
$respon=$bd->ejecutar($sql);
$sql="SELECT id FROM inventario WHERE name='".$data[0]->name."'";
$respon=$bd->ejecutar($sql);
$x=$bd->obtener_fila($respon,0);
if($respon){
$array['mensaje']= "success";
$array['id']=$x['id'];
}
else
$array['mensaje']= "failed";
echo json_encode($array);
 ?>