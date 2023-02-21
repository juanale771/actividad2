function pag() {
    window.open("app.html");
    }

    $(document).ready(function desp(){
        // Add scrollspy to <body>
        $('body').scrollspy({target: ".navbar", offset: 50});   
      
        // Add smooth scrolling on all links inside the navbar
        $("#myNavbar a").on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          }  // End if
        });
      });

function operacion(){
    var L=parseFloat(document.MyForm.L.value);
    var C=parseFloat(document.MyForm.C.value);
   
    var Zo=Math.sqrt(L/C) ;
var Zo1=Zo.toFixed(2);
resul=document.getElementById("Zo1");
resul.innerHTML=Zo1;
}
function operacion2(){
    var L=parseFloat(document.MyForm.L.value);
    var C=parseFloat(document.MyForm.C.value);
    var Vp1=1/Math.sqrt(L*C)
    var Vp2=Vp1.toFixed(2);
resul=document.getElementById("Vp2");
resul.innerHTML=Vp2;

}
function operacion3(){
    var L=parseFloat(document.MyForm.L.value);
    var C=parseFloat(document.MyForm.C.value);
    var F=parseFloat(document.MyForm.F.value);
    var Vp=1/Math.sqrt(L*C)
    var Beta=(2*Math.PI*F)/Vp
    var Beta1=Beta.toFixed(2);
resul=document.getElementById("Beta1");
resul.innerHTML=Beta1;

}

function operacion4(){
    var L=parseFloat(document.MyForm.L.value);
    var C=parseFloat(document.MyForm.C.value);
    var F=parseFloat(document.MyForm.F.value);
    var Vp=1/Math.sqrt(L*C)
    var Beta=(2*Math.PI*F)/Vp
    var cte=((2*Math.PI)/(Beta))*100
    var cte1=cte.toFixed(2);
    resul=document.getElementById("cte1");
    resul.innerHTML=cte1;   

}
