let listProduct = []
let editIndex

function displayProduct() {
    let data = "<table>"
    data += "<tr>" +
        "<td><b>Name</b></td>" +
        "<td><b>Price</b></td>" +
        "<td><b>Brand</b></td>" +
        "<td><b>Quantity</b></td>" +
        "<td colspan='3' style='color: red'>" + listProduct.length + " products</td></tr>"
    for (let i = 0; i < listProduct.length; i++) {
        data += "<tr>"
        data += "<td class='name'>" + listProduct[i].name + "</td>"
        data += "<td class='name'>" + listProduct[i].price + "</td>"
        data += "<td class='name'>" + listProduct[i].brand + "</td>"
        data += "<td class='name'>" + listProduct[i].quantity + "</td>"
        data += "<td><button onclick='edit(" + i + ")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "<td><button onclick='viewProduct(" + i + ")'>View</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("product").innerHTML = data
}

function add() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let brand = document.getElementById("brand").value
    let quantity = document.getElementById("quantity").value
    let product = new Product(name, price, brand, quantity)
    listProduct.push(product)
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("quantity").value = ""
    displayProduct()
}

function edit(index) {
    // let product = prompt("Nhập vào giá trị bạn muốn thay đổi: ", listProduct[index])
    // listProduct[index] = product
    document.getElementById("name").value = listProduct[index].name
    document.getElementById("price").value = listProduct[index].price
    document.getElementById("brand").value = listProduct[index].brand
    document.getElementById("quantity").value = listProduct[index].quantity
    editIndex = index
    displayProduct()
}

function editProduct() {
    // let product = document.getElementById("edit").value
    listProduct[editIndex].name = document.getElementById("name").value
    listProduct[editIndex].price = document.getElementById("price").value
    listProduct[editIndex].brand = document.getElementById("brand").value
    listProduct[editIndex].quantity = document.getElementById("quantity").value
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("quantity").value = ""
    displayProduct()
}

function deleteProduct(index) {
    listProduct.splice(index, 1)
    displayProduct()
}

function viewProduct(index) {
    document.getElementById("product").innerHTML = "Sản phẩm thứ " + (index + 1) + " là: " + listProduct[index]
}