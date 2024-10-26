const allProducts = {
  電子產品: [
      { id: 1, name: "手機" },
      { id: 2, name: "筆記本電腦" }
  ],
  家居用品: [
      { id: 3, name: "桌子" },
      { id: 4, name: "椅子" }
  ],
  書籍: [
      { id: 5, name: "小說" },
      { id: 6, name: "學術書籍" }
  ],
  服飾: [
      { id: 7, name: "T恤" },
      { id: 8, name: "牛仔褲" }
  ]
};

let quantities = {};

// 初始化数量
function initializeQuantities() {
  Object.values(allProducts)
      .flat()
      .forEach((product) => {
          if (!quantities[product.id]) {
              quantities[product.id] = 0;
          }
      });
}

// 加载指定分类的商品
function loadProducts(category) {
  document.getElementById("category-title").textContent = category;

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const products = allProducts[category];
  products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
          <span>${product.name}</span>
          <div class="buttons">
              <button onclick="decrease(${product.id})">-</button>
              <span id="quantity-${product.id}">${quantities[product.id]}</span>
              <button onclick="increase(${product.id})">+</button>
          </div>
      `;
      productList.appendChild(productElement);
  });
}

// 增加商品数量
function increase(productId) {
  quantities[productId]++;
  document.getElementById(`quantity-${productId}`).textContent = quantities[productId];
}

// 减少商品数量
function decrease(productId) {
  if (quantities[productId] > 0) {
      quantities[productId]--;
      document.getElementById(`quantity-${productId}`).textContent = quantities[productId];
  }
}

// 结账
function checkout() {
  const checkoutPage = document.getElementById("checkout-page");
  const overlay = document.getElementById("overlay");
  const checkoutContent = document.getElementById("checkout-content");

  let content = "<h4>您購買了以下商品：</h4><ul>";
  let hasItems = false;

  for (const [id, quantity] of Object.entries(quantities)) {
      if (quantity > 0) {
          const product = Object.values(allProducts)
              .flat()
              .find((p) => p.id === parseInt(id));
          content += `
              <li>
                  ${product.name}: 
                  <span id="quantity-checkout-${product.id}">${quantity}</span> 件
                  <div class="checkout-buttons">
                      <button onclick="decreaseCheckout(${product.id})">-</button>
                      <button onclick="increaseCheckout(${product.id})">+</button>
                  </div>
              </li>
          `;
          hasItems = true;
      }
  }

  if (!hasItems) {
      content = "<h4>您沒有購買任何商品。</h4>";
  } else {
      content += "</ul>";
  }

  checkoutContent.innerHTML = content;

  checkoutPage.classList.add("visible");
  overlay.classList.add("visible");
}

// 增加商品数量（结账页）
function increaseCheckout(productId) {
  quantities[productId]++;
  document.getElementById(`quantity-checkout-${productId}`).textContent = quantities[productId];
}

// 减少商品数量（结账页）
function decreaseCheckout(productId) {
  if (quantities[productId] > 0) {
      quantities[productId]--;
      document.getElementById(`quantity-checkout-${productId}`).textContent = quantities[productId];
  }
}

// 关闭结账页面
function closeCheckout() {
  const checkoutPage = document.getElementById("checkout-page");
  const overlay = document.getElementById("overlay");

  checkoutPage.classList.remove("visible");
  overlay.classList.remove("visible");
}

document.getElementById("next").onclick = function() {
  // 将取得的数据存入本地存储
  localStorage.setItem('jsonData', JSON.stringify(quantities));
  console.log('資料已成功存儲在本地存儲中');
};

initializeQuantities();
loadProducts("電子產品");