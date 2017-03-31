window.onload=function(){
	document.getElementById("formulario").onsubmit=function(e){
		e.preventDefault();
	}
document.getElementById("registrate").addEventListener("click",function(){
			window.location = "datos.html";
	});
document.getElementById("iniciasesion").addEventListener("click",function(){
				window.location = "iniciasesion.html";
	});
}


    //if(name == 0 || apellido == 0 || correo == 0 || contraseña == 0){
      //alert("Este campo debe ser llenado");
    //};
    //else if(name != name.match(/^[a-zA-Z]*$/) || apellido != name.match(/^[a-zA-Z]*$/) ){
      //alert("Este campo solo admite letras")
    //};
    //if(correo != correo.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/)){
      //alert("Este campo debe ser llenado correctamente!")
    //}
    //window.location = "datos.html";
    //}
