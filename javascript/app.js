let cartas=[];
let aleatorio  =  Math.round(Math.random() * (1111 - 9999) + 9999);
let aleatorio2 =  Math.round(Math.random() * (1111 - 9999) + 9999);
 
for(let i=1;i<=10;i++){
   
    cartas.push(`
    <div class='col-sm-3' onclick="mostrar('${i}','a${aleatorio+''+i+''+aleatorio2+'d'}','divs')"
            class='a' id='divs${i}'> 
       <div class='card  bg-primary mb-3'>
        <img style='height: 90px;' id='img0${i}'
            src='...'
            class='card-img-top' alt='...'>
        <div class='card-body  text-white ' id='txt${i}' style='display: none;'>
            <h3 class='card-title text-center'>${i} x 9 =</h3>
        </div>
      </div>
    </div> 
    `);

    cartas.push(`
    <div class='col-sm-3' onclick="mostrar('${i+10}','a${aleatorio+''+i+''+aleatorio2+'d'}','divs')"
            class='a' id='divs${i+10}'> 
       <div class='card  bg-primary mb-3'>
        <img style='height: 90px;' id='img0${i+10}'
            src='...'
            class='card-img-top' alt='...'>
        <div class='card-body  text-white ' id='txt${i+10}' style='display: none;'>
            <h3 class='card-title text-center'>${i*9}</h3>
        </div>
      </div>
    </div> 
    `);                                                             
} 
 
cartas= _.shuffle(cartas)
console.log(cartas);
for (let carta of cartas){
     document.getElementById("contenedor2").innerHTML +=carta;
}


let compare = null;
let compare2 = null;
let val1 = null;
let val2 = null;
let img01 = null;
let img02 = null;
let txt01 = null;
let txt02 = null;

function mostrar(id, comparante, nom) {
        let idVal = nom + id;
        let texto = document.getElementById('txt' + id);
        let img = document.getElementById('img0' + id);
        let contenedor = document.getElementById(idVal);
        let cont = 0;
    if (texto.style.display == 'none') {
        console.log('tiene none');
        img.style.display = 'none';
        texto.style.display = 'block';
        contenedor.style.pointerEvents = "none";
    } else if (texto.style.display == 'block') {
        console.log('tine block');
        img.style.display = 'block';
        texto.style.display = 'none';
    }
    setTimeout(function () { validar(comparante, contenedor, texto, img); }, 100);
}
function validar(comparantes, contenedor, texto, img) {
    if (compare == null) {
        compare = comparantes;
        val1 = contenedor;
        img01 = img;
        txt01 = texto;
    } else if (compare != null && compare2 == null) {
        compare2 = comparantes;
        val2 = contenedor;
        img02 = img;
        txt02 = texto;
        comprobar(compare, compare2, val1, val2)
    } else if (compare != null && compare2 != null) {

        compare = null;
        compare2 = null;
    }
}
function comprobar(val1, val2, val01, val02) {
    if (val1 == val2) {
        alert('Bien');
        compare = null;
        compare2 = null;
        val1 = null;
        val2 = null;
        img01 = null;
        img02 = null;
        txt01 = null;
        txt02 = null;
    } else if (val1 != val2) {
        alert('Upss!');
        val01.style.pointerEvents = "auto";
        val02.style.pointerEvents = "auto";
        inverse(img01, img02, txt01, txt02)
    }
}
function inverse(img1, img2, txt1, txt2) {
        img1.style.display = 'block';
        txt1.style.display = 'none';
        img2.style.display = 'block';
        txt2.style.display = 'none';
        compare = null;
        compare2 = null;
        val1 = null;
        val2 = null;
        img01 = null;
        img02 = null;
        txt01 = null;
        txt02 = null;
}