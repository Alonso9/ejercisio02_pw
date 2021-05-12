<?php

function head(){
	?>
	<!doctype html>
	<html lang="en">
	  <head>
	    <!-- Required meta tags -->
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="stylesheet" href="../css/bootstrap.min.css">
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
	    <style>
	    	body{
	    		font-family: 'Lato';
	    		margin: 0; 
	    	}
	    </style>
	    <title>Blog Alonso!</title>
	  </head>
	  <body>
	    <div id="app" class="container-fluid p-0">
	      <header class="row bg-ligth text-dark m-0">
	        <div class="col-9">
	          <h1 class="titulo ml-3 mt-2 font-weight-bolder">Blog Excepcional!</h1>
	        </div>
	        <div class="col-3 text-end">
	          <img src="../img/pww.png" style="height: 55px;" alt="">
	        </div>
	      </header>

	      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="box-shadow: 0 10px 10px #DDD">
	        <div class="container-fluid">
	          <a class="navbar-brand" href="#">Blog</a>
	          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	          </button>
	          <div class="collapse navbar-collapse" id="navbarSupportedContent">
	            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
	              <li class="nav-item">
	                <a class="nav-link active" aria-current="page" href="#">Inicio <i class="bi bi-house-door-fill"></i></a>
	              </li>
	              <li class="nav-item">
	                <a class="nav-link disabled" href="#">Ultimos post <i class="bi bi-file-post"></i></a>
	              </li>
	              <li class="nav-item">
	                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Publicar <i class="bi bi-pencil-square"></i></a>
	              </li>
	            </ul>
	            <form class="d-flex">
	              <input class="form-control me-2" type="search" placeholder="Buscar publicacion" aria-label="Search">
	              <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
	            </form>
	          </div>
	        </div>
	      </nav>
<?php

}

function foot(){
?>
	<script src="../js/bootstrap.bundle.min.js"></script>	
    </div>
  </body>
</html>

<?php
}
?>