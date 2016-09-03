<?php ob_start();require_once("../../lib/dompdf/dompdf_config.inc.php");?>
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
			<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Roboto:400|Lato:300,400' rel='stylesheet' type='text/css'>
			<style type="text/css" media="screen">
			@import 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto';
				.center-text{
					text-align: center;
				}
				body{
					/*		background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2000px-Samsung_Logo.svg.png');*/
				/*font-family: times, serif; font-size:14pt; font-style:italic; 
*/
font-family: 'Roboto', sans-serif;

				}
				.factura > table{
					width: 100%;
					text-align: center;
					margin-bottom: 10px;
				}
				.border{
					border-collapse: collapse;
					border: 0.7px solid #114C98;
				}
				.factura > h1,h5,h6{
					margin: 0px auto;
				}
				.none-margin{
					margin: 0px!important;
				}
				.none-padding{
					padding: 0px!important;
				}
				.no-mp{
					margin: 0px!important;
					padding: 0px!important;
					margin-bottom: 10px !important;
				}
				.top{
					margin-top: 0px !important;
					margin-bottom: 10px !important;
				}
				.mid{
					margin-top: 100px !important;
					margin-bottom: 0px !important;

				}
				.garantia{
					width: 80%;
					margin: 0px;
					padding: 0px;
				}
				.pago{
					width: 15%;
					padding: 0px;
					padding: 0px;
				}
			</style>
		</head>
		<body>
		<?php $data = json_decode(file_get_contents("php://input")); ?>
		<!-- <u></u> -->
			<div class="border" style="padding: 6px">
				<div class="top">
					<div class="" style="width: 20%; float: left">
					</div>
					<div class="" style="width: 20%; float: right">
							<div style="margin: 10px">
								<table >
									<thead class="border">
										<tr>
											<th class="border">DIA</th>
											<th class="border">MES</th>
											<th class="border">AÑO</th>
										</tr>
									</thead>
									<tbody class="border">
										<tr>
											<td class="center-text border"><span>10</span></u></b></td>
											<td class="center-text border"><span>10</span></u></b></td>
											<td class="center-text border"><span>10</span></u></b></td>
										</tr>
										<tr >
											<th colspan="3" class="center-text border"><span style="font-size:12px">ORDEN DE REPARACION</span></th>
										</tr>
										<tr>
											<td colspan="3" class="center-text border"><span>2000</span></u></b></td>
										</tr>
									</tbody>
								</table>
							</div>
					</div>
					<div class="center-text" style="width: 60%; float: right">
						<h1 style="margin:0px;font-weight:	800">SERVI CELL FAST, F-P</h1>
						<h6>LUIS EDUARDO TERAN ESCALANTE</h6>
						<h6>RIF: V-2016129-0</h6>
						<h5>Urb. La Granja Centro Comercial Free Market,</h5>
						<h5>Nivel PB Local Mini Tienda Nº Q02 Modulo 16 (M16-P.B.)</h5>
						<h5>Tlf: (0424) 433.82.91 Naguangua Edo.Carabobo</h5>
						<p></p>
					</div>
				</div>
				<div class="mid border" style="clear: both; margin-top: 100px">
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Cliente:</u></b></td>
								<td><b><u>C.I:</u></b></td>
								<td><b><u>Telefono:</u></b></td>
								<td><b><u>Cel:</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Equipo:</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Otro:</u></b></td>
								<td><b><u>Modelo:</u></b></td>
								<td><b><u>Serial:</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Bateria:</u></b></td>
								<td><b><u>SI:</u></b></td>
								<td><b><u>NO:</u></b></td>
								<td><b><u>Sim:</u></b></td>
								<td><b><u>SI:</u></b></td>
								<td><b><u>NO:</u></b></td>
								<td><b><u>Tapa:</u></b></td>
								<td><b><u>SI:</u></b></td>
								<td><b><u>NO:</u></b></td>
								<td><b><u>Reclama garantia:</u></b></td>
								<td><b><u>SI:</u></b></td>
								<td><b><u>NO:</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Otros:</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Falla de el Equipo: No Inicia:</u></b></td>
								<td><b><u>No Transmite: </u></b></td>
								<td><b><u>Audio: </u></b></td>
								<td><b><u>Se Apaga: </u></b></td>
								<td><b><u>Señal: </u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Otro:</u></b></td>
								<td><b><u>Descripcion de la falla: </u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td style="width: 400px">'</u></b></td>
								<td><b><u>Interminente </u></b></td>
								<td><b><u>Permanente </u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td><b><u>Estado de la Carcasa y/o Pantalla: Rota:</u></b></td>
								<td><b><u>Regular:</u></b></td>
								<td><b><u>Ratada:</u></b></td>
								<td><b><u>Buena: </u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%">
						<tbody>
							<tr>
								<td style="width: 500px">
									<h4 style="margin: 0px; padding: 0px">NO TIENE GARANTIA</h4>
									<ul style="list-style: none; padding: 0px; margin: 0px; margin-left: 10px">
										<li>* Para validar alguna garantía el cliente debe conservar el comprobante.</li>
										<li>* No damos garantia de la pantalla en cambio de micas, equipos mojados, puertos de cargas, reconstrucción de pistas ni soldaduras.</li>
										<li>* No entregamos equipos sin el comprobante.</li>
										<li>* Equipos afectados por sulfatacion no disfruta de garantia en la reparación.</li>
									</ul>
								</u></b></td>
								<td style="">
									<ul style="list-style: none; padding: 0px; margin: 0px;" >
										<li class="border">Total: </li>
										<li class="border">Abono: </li>
										<li class="border">Resta: </li>
									</ul>
								</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%" class="center-text">
						<tbody>
							<tr>
								<td><b><u>
									<span>_______________________________________________</span>
								</u></b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%" class="center-text">
						<tbody>
							<tr>
								<td><b><u>
									<label class="center-text" style="margin: px auto"><span class="center-text">Firma Cliente</span></label>
								</u></b></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</body>
	</html>
<?php  
	# Instanciamos un objeto de la clase DOMPDF.
		spl_autoload_register('DOMPDF_autoload');
		$dompdf = new DOMPDF();
		/*
		$paper_size = array(0,0,701,1400);
		$dompdf->set_paper($paper_size);
		*/
		$dompdf->set_paper("A4", "portrait");
		$dompdf ->load_html(ob_get_clean());
		$dompdf ->render();
		/*	   
		*/
		$dompdf->stream("descargar_mi_pdf.pdf", array("Attachment" => false));
		exit(0);
		$pdf =$dompdf->output();
		$filename = "index.pdf";
	# Enviamos el fichero PDF al navegador.
		/*
		$dompdf ->stream($filename, array("Attacment"=>0));
		*/
?>