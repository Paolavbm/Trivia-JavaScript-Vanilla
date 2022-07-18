

const urlLevel1 = "http://localhost:3004/data" 


 export const getData = async () => {
    const peticion = await fetch(urlLevel1)
    const data = await peticion.json()
    return data
}

 



  




