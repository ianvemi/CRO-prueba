//FORMAT NUMBER RANGE
let dollarUSLocale = Intl.NumberFormat('en-US');


//REMOVE SELECT OPTIONS
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }
 
// SWITCH SELECT OPTIONS


function switchSelect() {
    var select = document.getElementById("instituciones").value;

    var selectoptions = document.getElementById("instituciones_values");

     var options1 = ['Seleccione un banco', 'BBVA', 'Banamex', 'Santander', 'HSBC'];

     var options2 = ['Seleccione una tienda','Sears', 'Sanborns', 'Liverpool'];

     var options3 = ['Seleccione una financiera','Exitus credit', 'Crédito Familiar', 'Credomatic'];


    if (select === 'tiendas'){
        removeOptions(selectoptions);
        options2.forEach(function(element,key) {
            selectoptions[key] = new Option(element,key);
        });

    
        selectoptions[0].value = 'none';
        selectoptions[0].disabled = 'disabled';
        selectoptions[0].selected = 'true';

    } else if(select === 'bancos'){
        removeOptions(selectoptions);
        options1.forEach(function(element,key) {
            selectoptions[key] = new Option(element,key);
        });

        selectoptions[0].value = 'none';
        selectoptions[0].disabled = 'disabled';
        selectoptions[0].selected = 'true';

    }else if(select === 'financieras'){
        removeOptions(selectoptions);
        options3.forEach(function(element,key) {
            selectoptions[key] = new Option(element,key);
        });

        selectoptions[0].value = 'none';
        selectoptions[0].disabled = 'disabled';
        selectoptions[0].selected = 'true';
    }

  }



// SWITCH WINDOWS
window.addEventListener('load', function () {

  var form1 = document.getElementById('form-1');
  var form2 = document.getElementById('form-2');

  
  var back1 = document.getElementById('back1');

  var progress = document.getElementById('progress');


//ANIMACION DE REGRESO A FORM1
back1.onclick = function(){
    form1.style.left="0px";
    form2.style.left="700px";
    progress.style.width= "250px"
}

//ARRAY DE RESPUESTAS 
let arrDeuda = new Array();

//VALIDACION DEL PRIMER FORM - ARRAY DE RESPUESTAS Y ANIMACION
form1.addEventListener('submit', (e) =>{
    e.preventDefault();
    //Limpiamos Array
    arrDeuda = [];

let instituciones = document.getElementById('instituciones');
let instituciones_v = document.getElementById('instituciones_values');
let instituciones_validation = document.getElementById('instituciones_values');
let amount = document.getElementById('amount');

    instituciones =  instituciones.value;
    instituciones_v =  instituciones_v.options[ instituciones_v.selectedIndex ].text;
    instituciones_validation =  instituciones_validation.value;
    amount =  amount.value;


    if(instituciones === 'none'){
        alert('Seleccione un tipo de deuda');
        return;

    }else if(instituciones_validation === 'none'){
        alert('Seleccione un banco, tienda o financiera');
        return;
    }

    arrDeuda[arrDeuda.length]= instituciones; 
    arrDeuda[arrDeuda.length]= instituciones_v; 
    arrDeuda[arrDeuda.length]= amount; 

    console.log(arrDeuda);
 
   
    // localStorage["datas"] = JSON.stringify(datas);



    ///SIGUIENTE FORM
    form2.style.left="0px";
    form1.style.left="700px";
    progress.style.width= "500px"
})

//LIMPIAR LOS CAMPOS
function clear() {
    const inputs = document.querySelectorAll('.clear');  
    inputs.forEach(e => {
    e.value = '';
    });
}


/////////////////////////////STACK OVERFLOW FUNCTION https://es.stackoverflow.com/questions/31713/c%C3%B3mo-validar-un-rfc-de-m%C3%A9xico-y-su-digito-verificador//////////////////////////////////////////////////////
//Función para validar un RFC
// Devuelve el RFC sin espacios ni guiones si es correcto
// Devuelve false si es inválido
// (debe estar en mayúsculas, guiones y espacios intermedios opcionales)
function rfcValido(rfc, aceptarGenerico = true) {
    const re       = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    var   validado = rfc.match(re);

    if (!validado)  //Coincide con el formato general del regex?
        return false;

    //Separar el dígito verificador del resto del RFC
    const digitoVerificador = validado.pop(),
          rfcSinDigito      = validado.slice(1).join(''),
          len               = rfcSinDigito.length,

    //Obtener el digito esperado
          diccionario       = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
          indice            = len + 1;
    var   suma,
          digitoEsperado;

    if (len == 12) suma = 0
    else suma = 481; //Ajuste para persona moral

    for(var i=0; i<len; i++)
        suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
    digitoEsperado = 11 - suma % 11;
    if (digitoEsperado == 11) digitoEsperado = 0;
    else if (digitoEsperado == 10) digitoEsperado = "A";

    //El dígito verificador coincide con el esperado?
    // o es un RFC Genérico (ventas a público general)?
    if ((digitoVerificador != digitoEsperado)
     && (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000"))
        return false;
    else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000")
        return false;
    return true;
};





form2.addEventListener('submit', (e) =>{
    e.preventDefault();

let nombre = document.getElementById('nombre');
let apellido_paterno = document.getElementById('apellido_paterno');
let apellido_materno = document.getElementById('apellido_materno');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let rfc = document.getElementById('rfc');

let input = document.getElementsByName('input');

    nombre = nombre.value;
    apellido_paterno = apellido_paterno.value;
    apellido_materno = apellido_materno.value;
    phone = phone.value;
    email = email.value;
    rfc = rfc.value;


    if(nombre == ''){
        alert('Ha olvidado poner su nombre =(');
        return;

    }else if(apellido_materno == '' || apellido_materno == '' ){
        alert('Ha olvidado poner sus apellidos =(');
        return;
    }else if(phone == ''){
        alert('Ha olvidado poner su número telefónico =(');
        return;
    }else if(email== ''){
        alert('Ha olvidado poner su email =(');
        return;
    }else if(rfc== ''){
        alert('Ha olvidado poner su RFC =(');
        return;
    }else if(rfcValido(rfc) === false){
        alert('Por favor verifique su RFC');
        return;
    }
    arrDeuda[arrDeuda.length]= nombre; 
    arrDeuda[arrDeuda.length]= apellido_paterno; 
    arrDeuda[arrDeuda.length]= apellido_materno; 
    arrDeuda[arrDeuda.length]= phone; 
    arrDeuda[arrDeuda.length]= email;
    arrDeuda[arrDeuda.length]= rfc;  

    console.log(arrDeuda);

   
    localStorage["arrDeuda"] = JSON.stringify(arrDeuda);

    form1.style.left="0px";
    form2.style.left="700px";
    progress.style.width= "250px";
    clear();


    alert('El registro se ha enviado correctamente =)');
    alert(localStorage.getItem("arrDeuda"));

    
})






  });



