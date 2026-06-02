import os

folders = [

    "smartfit/frontend",

    "smartfit/pages",

    "smartfit/js",

    "smartfit/assets",
    "smartfit/assets/images",
    "smartfit/assets/avatars",
    "smartfit/assets/products",

    "smartfit/backend",
    "smartfit/backend/routes",
    "smartfit/backend/models",
    "smartfit/backend/services",

    "smartfit/recommendation"
]

files = [

    # HTML Pages
    "smartfit/pages/login.html",
    "smartfit/pages/dashboard.html",
    "smartfit/pages/products.html",
    "smartfit/pages/product-details.html",
    "smartfit/pages/avatar.html",
    "smartfit/pages/measurements.html",
    "smartfit/pages/tryon.html",
    "smartfit/pages/wishlist.html",
    "smartfit/pages/cart.html",
    "smartfit/pages/checkout.html",
    "smartfit/pages/orders.html",
    "smartfit/pages/settings.html",

    # JavaScript Files
    "smartfit/js/firebase-config.js",
    "smartfit/js/auth.js",
    "smartfit/js/dashboard.js",
    "smartfit/js/products.js",
    "smartfit/js/avatar.js",
    "smartfit/js/measurements.js",
    "smartfit/js/tryon.js",
    "smartfit/js/wishlist.js",
    "smartfit/js/cart.js",
    "smartfit/js/checkout.js",
    "smartfit/js/recommendation.js",
    "smartfit/js/payment.js",

    # Backend Files
    "smartfit/backend/main.py",

    "smartfit/backend/routes/auth_routes.py",
    "smartfit/backend/routes/product_routes.py",
    "smartfit/backend/routes/avatar_routes.py",
    "smartfit/backend/routes/order_routes.py",

    "smartfit/backend/models/user.py",
    "smartfit/backend/models/product.py",
    "smartfit/backend/models/order.py",

    "smartfit/backend/services/firebase_service.py",
    "smartfit/backend/services/recommendation_service.py",

    # Recommendation System
    "smartfit/recommendation/size_recommendation.py",
    "smartfit/recommendation/outfit_recommendation.py",

    # Root Files
    "smartfit/requirements.txt",
    "smartfit/README.md"
]

for folder in folders:
    os.makedirs(folder, exist_ok=True)

for file in files:
    with open(file, "w", encoding="utf-8") as f:
        pass

print(" SmartFit Project Structure Created Successfully!")