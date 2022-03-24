//OBJETOS PRODUCTOS Y CARRITO


//Esta clase representa al producto 
class producto {
    constructor(modelo, tipo, talle, color, precio) {
        this.modelo = modelo;
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.info = `${this.modelo}, de ${this.tipo}, talle ${this.talle}, color ${this.color}, precio $${this.precio}`;
        this.infoCarrito = `${this.modelo}, de ${this.tipo}, talle ${this.talle}, color ${this.color}`;

    }
};

//Esta clase representa a un elemento dentro del carrito (contiene un objeto producto)
class productoCarrito {
    constructor(unProducto, unID) {
        this.unProducto = unProducto;
        this.unID = unID;
    }
};

//Esta clase representa al carrito de compras (contiene un array de productoCarrito)
class carritoDeCompra {
    constructor() {
        this.productos = [];
        this.total = 0;
        this.maxId = 0;
    }

    agregar(producto) {
        let miProdCarrito = new productoCarrito(producto, this.obtenerNextID());
        this.productos.push(miProdCarrito);
        localStorage.setItem("carrito", JSON.stringify(carritoObjeto.productos)); //localStorage
        localStorage.setItem("maxid", carritoObjeto.maxId);
    }

    quitar(idProdCart) {

        let item = this.productos.find(element => element.unID == idProdCart);

        const index = this.productos.indexOf(item);
        if (index > -1) {
            this.productos.splice(index, 1);
        }
        localStorage.setItem("carrito", JSON.stringify(carritoObjeto.productos))

        mostrarTabla();
    }
    calcularTotal() {
        return this.productos.reduce((acumulador, producto) => acumulador + producto.unProducto.precio, 0);
    }
    mostrarCompra(producto) {
        return this.productos.map((el) => el.modelo + " - " + el.talle + "\n").join('');
    }
    filtrarPorTipo() {
        return this.productos.filter((el) => el.precio < 1001);
    }

    vaciarElCarrito() {

        this.productos = [];
        this.maxId = 0;
        localStorage.setItem("carrito", JSON.stringify(carritoObjeto.productos));
        localStorage.setItem("maxid", carritoObjeto.maxId);

    }
    obtenerNextID() {
        this.maxId += 1;
        return this.maxId;
    }
}


let bodyAnnika = new producto("Body Annika", "encaje", "a medida", "negro", 3000);
let ConjuLolipop = new producto("Conjunto Lolipop", "puntilla", "t. a medida", "celeste", 1500);
let ConjuAnnika = new producto("Conjunto Annika", "puntilla", "t. a medida", "natural", 1500);
let SetGigiNegro = new producto("Set Gigi", "puntilla", "t. a medida", "rojo", 2500);
let ConjuMoira = new producto("Conjunto Moira", "puntilla", "t. a medida", "rosa viejo", 2000);
let ConjuComfy = new producto("Conjunto Comfy", "puntilla", "t. a medida", "rosa chicle", 1500);
let ConjuMinervaNew = new producto("Conjunto Minerva New", "puntilla", "t. a medida", "amarillo", 1000);
let SetGigiRojo = new producto("Conjunto Gigi", "puntilla", "t. a medida", "negro", 2500);
let ConjuAlondra = new producto("Conjunto Alondra ", "puntilla", "t. a medida", "vison", 2000);
let ConjuAnnikaAro = new producto("Conjunto Annika Aro ", "puntilla", "t. a medida", "bicolor", 2000);
let PackBombis = new producto("Pack Bombis x 3 ", "puntilla", "t. a medida", "pastel surtidos", 1000);
let ConjuMinervaClasico = new producto("Conjunto Minerva Clasico ", "puntilla", "t. a medida", "blanco", 1000);
let carritoObjeto = new carritoDeCompra();


// levanta el localStorage
if (localStorage.getItem("carrito")) {
    carritoObjeto.productos = JSON.parse(localStorage.getItem("carrito"));
    carritoObjeto.maxId = parseInt(localStorage.getItem("maxid"));

    mostrarTabla();
    //setTimeout(mostrarTabla(), 500); //timer para asegurar que la página cargue el localStorage
};


//eventos en botones de agregar producto

let boton1 = document.getElementById("agregarBody");
boton1.onclick = () => carritoObjeto.agregar(bodyAnnika);
boton1.addEventListener("click", mostrarTabla)

let boton2 = document.getElementById("agregarLolipop");
boton2.onclick = () => carritoObjeto.agregar(ConjuLolipop);
boton2.addEventListener("click", mostrarTabla);

let boton3 = document.getElementById("agregarConjuAnnika");
boton3.onclick = () => carritoObjeto.agregar(ConjuAnnika);
boton3.addEventListener("click", mostrarTabla)

let boton4 = document.getElementById("agregarSetGigiRojo");
boton4.onclick = () => carritoObjeto.agregar(SetGigiRojo);
boton4.addEventListener("click", mostrarTabla)

let boton5 = document.getElementById("agregarMoira");
boton5.onclick = () => carritoObjeto.agregar(ConjuMoira);
boton5.addEventListener("click", mostrarTabla);

let boton6 = document.getElementById("agregarComfy");
boton6.onclick = () => carritoObjeto.agregar(ConjuComfy);
boton6.addEventListener("click", mostrarTabla)

let boton7 = document.getElementById("agregarMinervaNew");
boton7.onclick = () => carritoObjeto.agregar(ConjuMinervaNew);
boton7.addEventListener("click", mostrarTabla)

let boton8 = document.getElementById("agregarSetGigiNegro");
boton8.onclick = () => carritoObjeto.agregar(SetGigiNegro);
boton8.addEventListener("click", mostrarTabla);

let boton9 = document.getElementById("agregarAlondra");
boton9.onclick = () => carritoObjeto.agregar(ConjuAlondra);
boton9.addEventListener("click", mostrarTabla)

let boton10 = document.getElementById("agregarAnnikaAro");
boton10.onclick = () => carritoObjeto.agregar(ConjuAnnikaAro);
boton10.addEventListener("click", mostrarTabla)

let boton11 = document.getElementById("agregarPackBombis");
boton11.onclick = () => carritoObjeto.agregar(PackBombis);
boton11.addEventListener("click", mostrarTabla)

let boton12 = document.getElementById("agregarMinervaClasico");
boton12.onclick = () => carritoObjeto.agregar(ConjuMinervaClasico);
boton12.addEventListener("click", mostrarTabla);

let botonVaciar = document.getElementById("vaciarCarrito");
botonVaciar.onclick = () => carritoObjeto.vaciarElCarrito();
botonVaciar.addEventListener("click", mostrarTabla);


//Carrito

function mostrarTabla() {
    //setTimeout(null, 100);

    let tabla = document.getElementById("contenidoCarrito");
    tabla.innerHTML = "";

    if (carritoObjeto.productos.length > 0) {
        document.getElementById("textoCarritoVacio").innerText = "Su carrito contiene " + carritoObjeto.productos.length + " productos"; //contador carrito -->texto que avisa si tiene productos

        //  este producto es un productoCarrito
        for (const productoCart of carritoObjeto.productos) {
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");


            //crea los elementos
            td1.innerText = productoCart.unProducto.infoCarrito;
            td2.innerText = productoCart.unProducto.precio.toString();

            //botón de quitar producto
            let btn = document.createElement("button");
            btn.innerText = "X";
            btn.className = "btn btn-secondary";
            btn.dataset.id = productoCart.unID;
            btn.id = "eliminarProducto";

            btn.onclick = () => carritoObjeto.quitar(productoCart.unID);
            btn.addEventListener("click", mostrarTabla);

            td3.appendChild(btn);

            // agrega elemento al padre
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);

            tabla.appendChild(row);

        }

        let row = document.createElement("tr");
        let th = document.createElement("td");
        let td = document.createElement("td");


        row.setAttribute("class", "table-danger");


        th.innerText = "Total";
        th.setAttribute("scope", "row");
        td.innerText = carritoObjeto.calcularTotal();

        row.appendChild(th);
        row.appendChild(td);

        tabla.appendChild(row);

    }
    else {
        document.getElementById("textoCarritoVacio").innerText = "Su carrito se encuentra vacío"; //contador carrito

    }
}



