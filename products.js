var data = [
    {
        brand: "Realme",
        name: "Realme 5 Pro",
        price: 41000,
        url: "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg"
    },
    {
        brand: "Realme",
        name: "Realme 8",
        price: 36000,
        url: "https://fdn2.gsmarena.com/vv/bigpic/realme-8.jpg"
    },
    {
        brand: "Realme",
        name: "Realme 7 Pro",
        price: 41000,
        url: "https://static.digit.in/default/26af91b06c0e70e2de1d0ea6dd5aca991b81bb28.jpeg?tr=n-product_detail_leader_thumb"
    },
    {
        brand: "Realme",
        name: "Realme 5",
        price: 36000,
        url: "https://www.gizmochina.com/wp-content/uploads/2019/08/Realme-5-Pro-1-500x500.jpg"
    },
    {
        brand: "Iphone",
        name: "Iphone 12 Pro",
        price: 191000,
        url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-pro-max-graphite.png"
    },
    {
        brand: "Iphone",
        name: "Iphone 11",
        price: 136000,
        url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-11-green.png"
    },
    {
        brand: "Iphone",
        name: "Iphone 12",
        price: 141000,
        url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-12-red.png"
    },
    {
        brand: "Iphone",
        name: "Iphone 8",
        price: 55000,
        url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-8-gold.png"
    }

]

var allProducts = document.getElementById("allProducts")

for (var i = 0; i < data.length; i++) {

allProducts.innerHTML += ` <div class="card" style="width: 17rem;">
            <img src="${data[i].url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text"> ${data[i].brand}</p>
            <p class="card-text">${data[i].price}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
            </div>`

}



searchProduct = () => {
    var seachedProducts = document.getElementById("seachedProducts")
    seachedProducts.innerHTML= ""
    var flag = false
    var allProducts = document.getElementById("allProducts")
    allProducts.style.display ="none"
    seachedProducts.style.display="flex"
    var searchInput = document.getElementById("searchInput")
    var regex = new RegExp(`${searchInput.value.toLowerCase().replace(/\s/g, '')}`)

 for (var i = 0; i < data.length; i++) {
               
        if( regex.test(`${data[i].name.toLowerCase().replace(/\s/g, '')}`) == true){
            flag = true
            seachedProducts.innerHTML += ` <div class="card" style="width: 17rem;">
            <img src="${data[i].url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text"> ${data[i].brand}</p>
            <p class="card-text">${data[i].price}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
            </div>`   
        }
        }
        if(flag == false){
            seachedProducts.innerHTML = `<div> <h1> Searched Item not found. </h1> </div>`
            setTimeout(()=>{
                allProducts.style.display ="flex"
                seachedProducts.style.display= "none"
            },1000)
        }
    }   
