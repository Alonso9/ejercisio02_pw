const app = {
	urlPost : "https://jsonplaceholder.typicode.com/posts",
	urlComent : "https://jsonplaceholder.typicode.com/comments",
	urlUser : "https://jsonplaceholder.typicode.com/users",
	userId : "",
	palabraClave : "",

	cargarPost(){
		const cont = document.querySelector("#content");
		cont.style.width = "100%";
		cont.classList.add(['mx-auto'],['mt-5']);  //Clases entre []
		let html = "";
		this.urlPost = "https://jsonplaceholder.typicode.com/posts"
		if(this.userId !== ""){
			this.urlPost += "?userId=" + this.userId;
			console.log(this.urlPost);
		}

		fetch(this.urlPost)
			.then(response => response.json())
			.then(posts => {
				for(let post of posts){
					if(post.body.indexOf(this.palabraClave) !== -1){
					html += `
						<div class="card mb-3">
						  <div class="card-body">
						    <h5 class="card-title">${ post.title }</h5>
						    <p class="card-text">${ post.body }</p>
						  </div>
						  <div class="card-footer text-muted">
						  	<button class="btn btn-link" 
						  		id="btn-ver-com${ post.id }"
						  		onclick="app.cargarComent(${ post.id })">
						  		Ver comentarios <i class="bi bi-caret-down-fill"></i>
						  	</button>
						  	<div class="spinner-border text-secondary d-md-none float-end" id="cargando${ post.id }"role="status">
							  <span class="visually-hidden">Cargando...</span>
							</div>
						  	<button class="btn btn-link d-md-none" 
						  		id="btn-cer-com${ post.id }"
						  		onclick="app.cerrarComent(${ post.id })">
						  		Ver comentarios <i class="bi bi-caret-up-fill"></i>
						  	</button>
						  	<div class="card d-md-none" id="cardCom${ post.id }">
						  		<ul class="list-group list-group-flush" id="comments${ post.id }">

						  		</ul>
						  	</div>
						  </div>
						</div>
					`;
				}}
				cont.innerHTML = html;
			}).catch(error => console.log(error));
	}, //Rcuerda poner comas en el objeto 
	cargarComent(postId){
		let html = "";
		const listaCom = $("#comments"+postId);
		$("#cargando"+postId).toggleClass("d-md-none",false);  //Se pone el icono sppiner antes obtener una respuesta
		fetch(this.urlComent + "?postId=" + postId)
			.then(response => response.json())
			.then(comentarios => {
				for(let c of comentarios){
					html += `
					 <li class="list-group-item">De: <b>${ c.email }</b><br>${ c.body }</li>`;
				}
				listaCom.html(html);
				$("#cardCom"+postId).toggleClass("d-md-none",false);
				$("#btn-ver-com"+postId).toggleClass("d-md-none",true);
				$("#btn-cer-com"+postId).toggleClass("d-md-none",false);
			})
			.catch(error => console.log(error))
			.finally( () =>{
				$("#cargando"+postId).toggleClass("d-md-none",true);
			});
	},
	cerrarComent(postId){
		const listaCom = $("#comments"+postId);
		listaCom.html("");
		$("#cardCom"+postId).toggleClass("d-md-none",true);
		$("#btn-ver-com"+postId).toggleClass("d-md-none",false);
		$("#btn-cer-com"+postId).toggleClass("d-md-none",true);
	},
	cargarUsuario(){
		const user = $("#usuarios");
		let html = "";
		user.html(html); //Limpiamos la vsariable
		fetch(this.urlUser)
			.then(response => response.json())
			.then( usuarios => {
				for(let u of usuarios){
					html += `
						<button type="button" class="list-group-item list-group-item-action"
						 id="up${ u.id }"
						 onclick="app.userPosts(${ u.id })"
						>
					    	${ u.name }<br><small>${ u.email }</small>
   					    </button>
 					`;
				}
				user.html(html); //Cargamos el contenido en users
			}).catch(error => console.log(error))
	},
	userPosts(uid){
		$("#up" + this.userId).removeClass("active");
		this.userId = uid;
		console.log(uid); //Verificamos si llega el userId
		$("#up" + uid).addClass("active");
		this.cargarPost();
	},
	buscarPalabra(){
		$("#up" + this.userId).removeClass("active");
		this.userId = "";
		this.palabraClave = $("#buscar-palabra").val();
		console.log(this.palabraClave);
		this.cargarPost()
	}
}

window.onload = function(){
	app.cargarPost();
	app.cargarUsuario();
} 

/*
* Se completo la calse XV sigue la XVI
*/																																																																																				