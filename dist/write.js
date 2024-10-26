// const fs = require('fs');

// // 設置 allProducts 和 quantities 對象
// const allProducts = {
//   電子產品: [
//     { id: 1, name: "手機" },
//     { id: 2, name: "筆記本電腦" }
//   ],
//   家居用品: [
//     { id: 3, name: "桌子" },
//     { id: 4, name: "椅子" }
//   ],
//   書籍: [
//     { id: 5, name: "小說" },
//     { id: 6, name: "學術書籍" }
//   ],
//   服飾: [
//     { id: 7, name: "T恤" },
//     { id: 8, name: "牛仔褲" }
//   ]
// };

// let quantities = {};

// function initializeQuantities() {
//   Object.values(allProducts)
//     .flat()
//     .forEach((product) => {
//       if (!quantities[product.id]) {
//         quantities[product.id] = 0;
//       }
//     });
// }

// // 初始化數量
// initializeQuantities();

// // 寫入更新後的數量至 JSON 文件
// function saveQuantitiesToFile() {
//   const updatedProducts = JSON.parse(JSON.stringify(allProducts));

//   // 將數量合併到產品信息
//   Object.values(updatedProducts).flat().forEach((product) => {
//     product.quantity = quantities[product.id] || 0;
//   });

//   // 將更新後的 allProducts 寫入 "data.json"
//   fs.writeFile('data.json', JSON.stringify(updatedProducts, null, 2), (err) => {
//     if (err) {
//       console.error('寫入文件時出錯:', err);
//     } else {
//       console.log('數量已成功寫入 data.json 文件');
//     }
//   });
// }

// // 增加、減少、結帳函數與你的原始碼類似
// function increase(productId) {
//   quantities[productId]++;
// }

// function decrease(productId) {
//   if (quantities[productId] > 0) {
//     quantities[productId]--;
//   }
// }

// document.getElementById("next").onclick = function() {
//   saveQuantitiesToFile();
// };

// // 調用初始化
// initializeQuantities();
