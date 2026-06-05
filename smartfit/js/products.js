// ============================================================
//  products-data.js  —  mock product catalog + Firestore helpers
//  In production swap PRODUCTS array with Firestore calls.
// ============================================================
 
export const PRODUCTS = [
  { id:"p1",  name:"Linen Casual Shirt",   price:39.99, category:"shirts",   sizes:["S","M","L","XL"],    colors:["White","Blue","Beige"],  rating:4.5, reviews:128, img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80", badge:"Bestseller" },
  { id:"p2",  name:"Oversized Hoodie",     price:49.99, category:"tops",     sizes:["S","M","L","XL","XXL"], colors:["Black","Grey","Navy"], rating:4.7, reviews:94,  img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80", badge:"New" },
  { id:"p3",  name:"Cargo Pants",          price:59.99, category:"bottoms",  sizes:["28","30","32","34","36"], colors:["Khaki","Black","Olive"], rating:4.3, reviews:67, img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
  { id:"p4",  name:"Denim Jacket",         price:79.99, category:"jackets",  sizes:["S","M","L","XL"],    colors:["Blue","Dark Blue"],     rating:4.6, reviews:213, img:"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80", badge:"Bestseller" },
  { id:"p5",  name:"White Sneakers",       price:69.99, category:"shoes",    sizes:["6","7","8","9","10","11"], colors:["White","Grey"],    rating:4.8, reviews:305, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", badge:"Top Rated" },
  { id:"p6",  name:"Striped T-Shirt",      price:19.99, category:"tops",     sizes:["XS","S","M","L","XL"], colors:["Navy/White","Black/White"], rating:4.2, reviews:89, img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
  { id:"p7",  name:"Men Solid Shirt",      price:49.99, category:"shirts",   sizes:["S","M","L","XL"],    colors:["White","Blue","Black"], rating:4.4, reviews:156, img:"https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&q=80" },
  { id:"p8",  name:"Graphic T-Shirt",      price:19.99, category:"tops",     sizes:["XS","S","M","L","XL"], colors:["Black","White","Red"], rating:4.1, reviews:72,  img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80" },
  { id:"p9",  name:"Slim Fit Chinos",      price:54.99, category:"bottoms",  sizes:["28","30","32","34","36"], colors:["Beige","Navy","Grey"], rating:4.5, reviews:98, img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80", badge:"New" },
  { id:"p10", name:"Puffer Jacket",        price:99.99, category:"jackets",  sizes:["S","M","L","XL"],    colors:["Black","Navy","Red"],   rating:4.7, reviews:187, img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80", badge:"Trending" },
  { id:"p11", name:"Running Shoes",        price:89.99, category:"shoes",    sizes:["6","7","8","9","10","11"], colors:["Black/White","Blue/White"], rating:4.6, reviews:241, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id:"p12", name:"Formal Blazer",        price:119.99, category:"jackets", sizes:["S","M","L","XL","XXL"], colors:["Navy","Charcoal","Black"], rating:4.8, reviews:63, img:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80", badge:"Premium" },
  { id:"p13", name:"Jogger Pants",         price:44.99, category:"bottoms",  sizes:["S","M","L","XL"],    colors:["Grey","Black","Navy"],  rating:4.3, reviews:115, img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" },
  { id:"p14", name:"Polo Shirt",           price:34.99, category:"shirts",   sizes:["S","M","L","XL","XXL"], colors:["White","Navy","Green"], rating:4.4, reviews:88, img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80" },
  { id:"p15", name:"Leather Belt",         price:24.99, category:"accessories", sizes:["S","M","L"],      colors:["Brown","Black"],        rating:4.6, reviews:204, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id:"p16", name:"Canvas Backpack",      price:59.99, category:"accessories", sizes:["One Size"],       colors:["Olive","Navy","Beige"], rating:4.5, reviews:167, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
];
 
export const CATEGORIES = ["All", "shirts", "tops", "bottoms", "jackets", "shoes", "accessories"];
 
export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
 
export function searchProducts(query = "", category = "All") {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p => {
    const matchCat = category === "All" || p.category === category;
    const matchQ   = !q || p.name.toLowerCase().includes(q) || p.category.includes(q);
    return matchCat && matchQ;
  });
}
 
// ── Cart helpers (localStorage) ──────────────────────────────
const CART_KEY = "sf_cart";
 
export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}
 
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
 
export function addToCart(product, size, color, qty = 1) {
  const cart = getCart();
  const key  = `${product.id}-${size}-${color}`;
  const idx  = cart.findIndex(i => i.key === key);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({ key, id: product.id, name: product.name, price: product.price, img: product.img, size, color, qty });
  }
  saveCart(cart);
}
 
export function removeFromCart(key) {
  saveCart(getCart().filter(i => i.key !== key));
}
 
export function updateCartQty(key, qty) {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.key === key);
  if (idx > -1) { cart[idx].qty = qty; saveCart(cart); }
}
 
export function cartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}
 
// ── Wishlist helpers (localStorage) ──────────────────────────
const WISH_KEY = "sf_wishlist";
 
export function getWishlist() {
  return JSON.parse(localStorage.getItem(WISH_KEY) || "[]");
}
 
export function toggleWishlist(productId) {
  const list = getWishlist();
  const idx  = list.indexOf(productId);
  if (idx > -1) list.splice(idx, 1); else list.push(productId);
  localStorage.setItem(WISH_KEY, JSON.stringify(list));
  return idx === -1; // true = added
}
 
export function isWishlisted(productId) {
  return getWishlist().includes(productId);
}
 
// ── Orders helpers (localStorage; replace with Firestore) ────
const ORDER_KEY = "sf_orders";
 
export function getOrders() {
  return JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
}
 
export function placeOrder(orderData) {
  const orders = getOrders();
  const order  = {
    id:     "ORD" + Date.now(),
    date:   new Date().toISOString(),
    status: "Processing",
    ...orderData
  };
  orders.unshift(order);
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  return order;
}
 
// ── Star rating HTML ─────────────────────────────────────────
export function starsHTML(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    const fill = i <= Math.floor(rating) ? "#f59e0b" : (i - rating < 1 ? "#f59e0b" : "#ddd");
    s += `<svg width="12" height="12" fill="${fill}" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  }
  return s;
}
 