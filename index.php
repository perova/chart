<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">	
	<link rel="stylesheet" type="text/css" href="style.css">

	<title>Chart</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1></h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<canvas id="myChart" width="400" height="400"></canvas>
			</div>
			<div class="col-md-4">
			Vardas	<input id="name"    type="text"  class="form-control">
			Amzius	<input id="age"   type="text"  class="form-control">
			Atlyginimas	<input id="salary"   type="text"  class="form-control"><br>
			
				<input id="submit" type="submit" name="" class="btn btn-success" onclick="addNew()"> <br>
				<input value="Remove Last" name="" class="btn btn-danger" onclick="chartRemoveLast()"> <br>
				<input value="Clear" name="" class="btn btn-warning" onclick="chartClear()">
			</div>
		</div>
	</div>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.bundle.js"></script>
	<script src="script.js"></script>
</body>
</html>
