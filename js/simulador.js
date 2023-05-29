// Creamos una función para agregar productos al carrito
function agregar(carrito_compras) {
  let producto = prompt('Ingrese el nombre del producto:');
  let cantidad = parseInt(prompt('Ingrese la cantidad:'));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert('La cantidad no es válida.');
    return;
  }

  let productoExistente = carrito_compras.find(item => item.producto === producto);

  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito_compras.push({ producto, cantidad });
  }

  alert('Producto agregado al carrito.');
}

function Total(carrito_compras) {
  let total = 0;

  for (let i = 0; i < carrito_compras.length; i++) {
    let producto = carrito_compras[i].producto;
    let cantidad = carrito_compras[i].cantidad;
    let precioUnitario = precioUnit(producto);

    if (precioUnitario !== null) {
      total += precioUnitario * cantidad;
    }
  }

  return total;
}

function precioUnit(producto) {

  if (producto === 'Twisted Metal 1') {
    return 25;
  } else if (producto === 'Twisted Metal 2') {
    return 40;
  } else if (producto === 'Twisted Metal 3') {
    return 60;
  } else if(producto === 'Twisted Metal 4'){
    return 90;
  } else {
    return null;
  }
}

const carrito_compras = [];

let continuar = true;
while (continuar) {
  agregar(carrito_compras);

  let respuesta = prompt('¿Desea agregar más productos? (si/no)');
  if (respuesta.toLowerCase() !== 'si') {
    continuar = false;
  }
}

const total = Total(carrito_compras);

let mensaje = 'Carrito de compras:\n ';
for (let i = 0; i < carrito_compras.length; i++) {
  mensaje += `Cantidad de copias del videojuego ${carrito_compras[i].producto}: ${carrito_compras[i].cantidad}\n`;
}
mensaje += `Total de la compra: $${total}`;

function mostrar(){
  alert(mensaje);
}
