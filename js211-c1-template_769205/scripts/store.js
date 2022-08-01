let append = (data) =>{
    let cont = document.getElementById("mobile_list")
    data.forEach((el,index) =>{
        let image = document.createElement('img')
        image.src = el.image
        let brand = document.createElement("p")
        brand.innerText = el.brand
        let products = document.createElement("p")
        products.innerText = el.products
        let price = document.createElement("p")
        price.innerText = el.price

        let button  = document.createElement("button")
        button.innerText = "Remove"

        button.onclick = () => {
            remove(index)
        }

        let div = document.createElement("div")
        div.append(image,brand,products,price,button)
        cont.append(div)
    })
}

let main = () =>{

    let data = JSON.parse(localStorage.getItem("mobile_list"))
    append(data)
}
main()
let remove = (index) =>{
    let data = JSON.parse(localStorage.getItem("mobile_list"))

    console.log(index)
    console.log(data.slice(index,1))
    
   // window.location.reload()

}

remove()
