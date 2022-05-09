document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "5493584407569";
  
    let cliente = document.querySelector("#cliente").value;
    let celular = document.querySelector("#celu").value;
    let mensaje = document.querySelector("#msj").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_URGENCIA_*%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *numero de whatsapp*%0A
          ${celular}%0A
          *Mensaje*%0A
          ${mensaje}%0A`;
  
    if (cliente === "" || celular === "" || mensaje === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu mensaje, ${cliente}`;
  
    window.open(url);
  });