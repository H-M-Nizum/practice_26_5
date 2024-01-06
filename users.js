const allusers = () => {
    fetch('https://fakestoreapi.com/users')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            data.forEach(element => {
                const parent = document.getElementById("tableBody")
                const tr = document.createElement("tr")
                tr.innerHTML = `<th scope="row">${element.id}</th>
                <td>${element.username}</td>
                <td>${element.name.firstname} ${element.name.lastname}</td>
                <td>${element.address.city}</td>
                <td>${element.address.street}</td>
                <td>${element.email}</td>
                <td>${element.phone}</td>
                <td><a href="userDetails.html?userid=${element.id}" class="text-decoration-none">Details</a></td>
                `
                parent.appendChild(tr)

            });
                
        })

}
allusers()

const singleUserDetails = () => {
    const param = new URLSearchParams(window.location.search).get("userid");
    fetch(`https://fakestoreapi.com/users/${param}`)
            .then(res=>res.json())
            .then(iteam=>{
                // console.log(iteam)
                const parent = document.getElementById("user_details")
                const div = document.createElement("div")
                div.innerHTML = `            <div class="userdetails d-flex justify-content-center gap-5" id="userdetails">
                <div><img class="user_img" src="img/user.avif" alt="user"></div>
                <div class="d-flex align-items-center">
                    <h1 class="text-primary">${iteam.username}</h1>
                </div>
            </div>
            <br>
            <hr>
            <div class="justify-content-center text-center">
                <h4>Fullname : ${iteam.name.firstname} ${iteam.name.lastname}</h4>
                <p>Email : ${iteam.email}</p>
                <p>Phone : ${iteam.phone}</p>
                <h4 class="text-dark">---------Address--------</h4>
                <p>City : ${iteam.address.city}</p>
                <p>Street : ${iteam.address.street}</p>
                <p>Home Number : ${iteam.address.number}</p>
                <p>Zipcode : ${iteam.address.zipcode}</p>
                <p>Geo-Location : ${iteam.address.geolocation.lat} to ${iteam.address.geolocation.long}</p>

            </div>`
            parent.appendChild(div)
            })
}
singleUserDetails()