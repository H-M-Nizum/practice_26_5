// get a single product
const desplaysingleproduct = () => {
    const param = new URLSearchParams(window.location.search).get("productId");
    fetch(`https://fakestoreapi.com/products/${param}`)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                // console.log(param)
                displayDetails(data)
            })
}
desplaysingleproduct()

const displayDetails = (product) => {
    // console.log(product);
    const parent = document.getElementById("singleProduct");
    const div = document.createElement("div");
    div.classList.add("details-container");
    div.innerHTML = `
      <div class="product-imgage">
      <img class="image" src=${product.image} alt="" />
    </div>
    <div class="doc-info">
      <h1>${product.title} </h1>

   
  
      <p class="w-50">${product.description}</p>
  
      <h4>Price: ${product.price} BDT</h4>
      <h4>Rating: ${product.rating.rate}
    </div>
      `;
    parent.appendChild(div);
  };