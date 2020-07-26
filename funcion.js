function validar(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("pass1").value;
    if(usuario == "admin" && contraseña == "admin")
    {
        alert("usuario y contraseña validos")
    }
    else
    {
        alert("verifique sus datos")
    }