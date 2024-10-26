// 从localStorage中获取jsonData
const jsonData = localStorage.getItem('jsonData');

const data = JSON.parse(jsonData);

if (Object.values(data).every(item => item === 0)) {
    console.log("您沒有加入商品");
    const productDiv = document.createElement("div");
    productDiv.textContent = "您沒有加入商品";
    document.body.appendChild(productDiv);
}

const allProducts = {
    "1": { name: "手機" },
    "2": { name: "筆記本電腦" },
    "3": { name: "桌子" },
    "4": { name: "椅子" },
    "5": { name: "小說" },
    "6": { name: "學術書籍" },
    "7": { name: "T恤" },
    "8": { name: "牛仔褲" }
};

const checklist = document.getElementById("checklist");

for (const key in data) {
    const product = allProducts[key];
    if (product) {
        const quantity = data[key];
        if (quantity > 0) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productName = document.createElement("p");
            productName.textContent = product.name;

            const quantityDisplay = document.createElement("p");
            quantityDisplay.textContent = "數量: " + quantity;

            const addButton = document.createElement("button");
            addButton.textContent = "+";
            addButton.addEventListener("click", function() {
                data[key]++;
                quantityDisplay.textContent = "數量: " + data[key];
            });

            const subtractButton = document.createElement("button");
            subtractButton.textContent = "-";
            subtractButton.addEventListener("click", function() {
                if (data[key] > 0) {
                    data[key]--;
                    quantityDisplay.textContent = "數量: " + data[key];
                }
            });

            productDiv.appendChild(productName);
            productDiv.appendChild(quantityDisplay);
            productDiv.appendChild(addButton);
            productDiv.appendChild(subtractButton);

            checklist.appendChild(productDiv);
        }
    }
}