//METODOS FEtCH , PARA UN SERVICIO EXTERNO 
//Dentro del Fetch se introduce la URL que necesitamos 

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  */

  //seleccionamos en nuestro HTML en donde vamos a pintar esta informacion 
  /*
  const lista = document.querySelector("#listado")
fetch("https://jsonplaceholder.typicode.com/posts")
.then((resp)=>resp.json())
.then((data)=>{
    //para traernos informacion desde la api 
    data.forEach((post) => {
        const li =document.createElement("li")
        li.innerHTML=`
        <h4>${post.title}</h4>
        <p>${post.body}</p>`
        lista.append(li)
    });
})

//Fetch tiene dos parametros si es necesario 
//el primero es la url , y el segundo la configuracion de lo que voy a enviar a trevez de un metodo post
fetch("https://jsonplaceholder.typicode.com/posts",{
    //Se utiliza para rectar informacion de un mail o de un formulario
    method:"POST",
    body:JSON.stringify({
        title:"coderHouse",
        //la Body es la informacion que llevaba esa informacion
        body:"post de Pureba ",
        userId:1
    }),
    headers:{
        //para que interprete informacion 
    "Content-type":"application/json; charset=UTF-8"
    }
    
})
.then((response)=>response.json())
.then((data)=>console.log(data))
*/


const lista = document.querySelector("#listado")
fetch("./data.json")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    /*data.forEach((producto)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <h5>${producto.id}</h5>
        <h4>${producto.nombre}</h4>
        
        
        `
        lista.append(li)

    })*/
})

