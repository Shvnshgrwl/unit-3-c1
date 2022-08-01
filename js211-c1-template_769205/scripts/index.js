/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/
function Product (brand,products,price,image){
    this.brand = brand;
    this.products = products;
    this.price = price;
    this.image = image;


}






let submit = () =>{
    let brand = document.getElementById("mobile_brand").value;
    let products = document.getElementById("mobile_name").value;
    let price = document.getElementById("mobile_price").value;
    let image = document.getElementById("mobile_image").value;

    let p = new Product(brand,products,price,image)
    let mobile_list = JSON.parse(localStorage.getItem("mobile_list")) || []

    mobile_list.push(p)
    localStorage.setItem("mobile_list",JSON.stringify(mobile_list))

    console.log(p)
    window.location.reload()
}