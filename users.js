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
                <td>${element.phone}</td>`
                parent.appendChild(tr)

            });
                
        })

}
allusers()