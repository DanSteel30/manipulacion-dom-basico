const h1 = document.querySelector("h1"); // el atributo document ayuda a seleccionar en el html con oel query, el STRING es el selector por etiqueta o clase, etc. Se debe poner la nomclatura CSS
const p = document.querySelector("p");
const parrafo = document.getElementsByClassName("parrafo"); // indicar como css
const IDparrafo = document.getElementById("IDparrafo"); // no hay que poner nomenclatura como css porque ya selecciona el ID
const input = document.querySelector("input")

console.log(h1)

console.log(input.value)

console.log ({
    h1, 
    p,
    parrafo,
    IDparrafo,
    input,
    });

    h1.innerHTML='Cambiando el DOM--- <br> genial' // Esto edita con propiedades y etiquetas HTML
    p.innerText = "Cambiando la etiqueta P desde JS <br> genial" //esto combierte todo a string texto y no toma etiquetas HTML

    console.log(h1.getAttribute("pantalla")) //ayuda a leer los tributos del elemento
    console.log(h1.getAttribute("class")) //ayuda a leer los tributos del elemento e imprime con el console el nombre del Class

    //PARA MODIFICAR ESA CLASE con set.Attribute
    h1.setAttribute("class", "rojo") //aparece en el html el cambio de class a rojo, asi ya este en el codigo html como "verde".SIRVE PARA ASIGNAR UNA PROPIEDAD o ATRIBUTO A la etiqueta
    h1.classList.add("Titulo") // agrega una clase al HTML
    h1.classList.remove("rojo")//este elimina cualquier clase 

    input.value = 4567;
    
 
    console.log(document.createElement( 'img'));
    console.log(document.createElement( 'span')) // imprime la etiqueta html en la consola y por ende luego puede aparecer en el dom si se configura.

    const img = document.createElement('img'); //  crear una variable para img
    img.setAttribute('src', "https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg");
    img.setAttribute("width", 100)
    console.log(img); // en consola aparece la etiqueta img src con la dirección url


    IDparrafo.innerHTML = ""; // esto borra el contenido, el texto, de la etiqueta p
    IDparrafo.append(img) // agrega la imagen con append, primero se pone el id, clase o slector.