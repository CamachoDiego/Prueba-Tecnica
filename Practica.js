class Busqueda{
    constructor(){
        this.productos=[
            {Categoria:"lacteos", Productos:"cuajada", Precio:7000, Cantidad:120},
            {Categoria:"lacteos", Productos:"helado", Precio:3000, Cantidad:80},
            {Categoria:"lacteos", Productos:"mozzarella", Precio:10000, Cantidad:27},
            {Categoria:"carnes", Productos:"res", Precio:22000, Cantidad:25},
            {Categoria:"carnes", Productos:"cerdo", Precio:13000, Cantidad:50},
            {Categoria:"carnes", Productos:"pollo", Precio:11000, Cantidad:34},
            {Categoria:"enlatados", Productos:"atun", Precio:5000, Cantidad:46},
            {Categoria:"enlatados", Productos:"aceitunas", Precio:8000, Cantidad:18},
            {Categoria:"enlatados", Productos:"sopa", Precio:9000, Cantidad:66},
            {Categoria:"granos", Productos:"frijol", Precio:3500, Cantidad:87},
            {Categoria:"granos", Productos:"lenteja", Precio:2000, Cantidad:42},
            {Categoria:"granos", Productos:"soja", Precio:18000, Cantidad:73}
        ];
        this.productosBK= this.productos;
        this.onInit();
        console.log(this.productos);
    }
    
    onInit(){
        let cuerpo = document.getElementById("cuerpo");
        while(cuerpo.rows.length > 0){
            cuerpo.deleteRow(0);
        }
        this.productos.forEach(producto=>{
            let fila=cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML= producto.Categoria;
            fila.insertCell(1).innerHTML= producto.Productos;
            fila.insertCell(2).innerHTML= producto.Precio;
            fila.insertCell(3).innerHTML= producto.Cantidad;
 });
 }
  
    buscar(id){
   let busqueda = document.getElementById(id).value;
   this.productos= this.productosBK;
   this.productos=this.productos.filter(producto=>{
    return producto.Categoria.toLowerCase().indexOf(busqueda) > -1;
   });
   this.onInit();
}
}
let busqueda = new Busqueda();
let form = document.getElementById("busquedaform");
form.addEventListener("submit",()=>{
    busqueda.buscar("valor");
});

