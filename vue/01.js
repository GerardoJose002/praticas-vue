const app = new Vue({
    el: "#app",
    data: {
        name: "Gerardo Jose",
        juegos: [
            {nombre:"Fornite", cantidad:12},
            {nombre:"COD", cantidad:6},
            {nombre:"Minecraft", cantidad:12}
        ],
        nuevojuego:"",
        nuevacantidad:""
       
    },
    
    methods:{
        agregarJuegos () {
           this.juegos.push({
            nombre: this.nuevojuego,
            cantidad: this.nuevacantidad
          
           });
           
          
        },
        
       
        
        }
        

    }
    
)