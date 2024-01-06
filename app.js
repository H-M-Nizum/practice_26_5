const loadallproduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            document.getElementById("products").innerHTML = "";
            displyproduct(data)
            
        })
}
loadallproduct()

const displyproduct = (products) => {
    products?.forEach((product) => {
    //   console.log(product);
        const parent = document.getElementById("products");
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.classList.add("col-md-3");
        div.innerHTML = `
            <img class="product-img" src=${product.image} alt="" />
            <h4>${product?.title}</h4>
            <p>${product?.description.slice(0,100)}</p>
            <h6>Type : ${product?.category}</h6>
                
            <h5>Price : ${product?.price}</h5> 
                    
            <button> <a target="_blank" href="productDetails.html?productId=${product.id}">Details</a> </button>
        `;
    
        parent.appendChild(div);
    });
  };

//   category
const loadcategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            displaycategory(data)
        })
}
const displaycategory = (categories) => {
    categories?.forEach((category) => {
        console.log(category);
        const parent = document.getElementById("category");
        const div = document.createElement("div");
        // div.classList.add("category-card");
        
        div.innerHTML = `
            <button onclick="getSpecificCategory('${category}')" class="category-card" > ${category} </button>   
        `;
        
        parent.appendChild(div);
    });
}
loadcategory()

// Get product in a specific category
const getSpecificCategory = (category) => {
    // console.log(category)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                document.getElementById("products").innerHTML = "";
                displyproduct(data)
            })
};


