
"use client";

import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Everyday Essential Hoodie",
    category: "Clothing",
    price: 3490,
    oldPrice: 4990,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Minimal Everyday Backpack",
    category: "Accessories",
    price: 4290,
    oldPrice: null,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Classic Street Sneakers",
    category: "Footwear",
    price: 5990,
    oldPrice: 7490,
    badge: "SALE",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Modern Everyday Watch",
    category: "Accessories",
    price: 6990,
    oldPrice: null,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = ["All Products", "Clothing", "Accessories", "Footwear"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function addToCart(productName: string) {
    setCartCount((count) => count + 1);
    setNotice(`${productName} added to your cart`);
    window.setTimeout(() => setNotice(""), 2500);
  }

  return (
    <main className="store">
      <div className="announcement">
        FREE SHIPPING ON ORDERS OVER Rs. 5,000
        <span> | </span>
        SHOP THE NEW COLLECTION
      </div>

      <header className="store-header">
        <a href="#" className="brand">
          PROBLEM<span>SOLVER</span>
          <small>SMART CHOICES. BETTER LIVING.</small>
        </a>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">Our Story</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <span>⌕</span>
            <input
              aria-label="Search products"
              placeholder="Search products"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </label>

          <button
            className="cart-button"
            onClick={() =>
              setNotice(
                cartCount
                  ? `Your demo cart contains ${cartCount} item(s).`
                  : "Your cart is currently empty."
              )
            }
          >
            Bag ({cartCount})
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">THE NEW EVERYDAY</p>

          <h1>
            Find your
            <br />
            <em>better.</em>
          </h1>

          <p className="hero-description">
            Thoughtful essentials. Modern design.
            Everyday products made to fit your life.
          </p>

          <a href="#shop" className="dark-button">
            SHOP THE COLLECTION <span>→</span>
          </a>

          <div className="hero-note">
            <span>01</span> — Curated for everyday living
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-label">
            <span>PROBLEM SOLVER</span>
            <span>COLLECTION 001</span>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>✦ Carefully selected products</div>
        <div>✦ Quality you can feel</div>
        <div>✦ Designed for everyday use</div>
        <div>✦ Simple, secure shopping</div>
      </section>

      <section className="collections" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE OUR WORLD</p>
            <h2>Shop by collection</h2>
          </div>
          <a href="#shop" className="text-link">
            VIEW ALL COLLECTIONS →
          </a>
        </div>

        <div className="collection-grid">
          <a href="#shop" className="collection-card collection-one">
            <span>01 / EVERYDAY</span>
            <h3>Daily Essentials</h3>
            <b>SHOP NOW ↗</b>
          </a>

          <a href="#shop" className="collection-card collection-two">
            <span>02 / STYLE</span>
            <h3>Modern Living</h3>
            <b>SHOP NOW ↗</b>
          </a>

          <a href="#shop" className="collection-card collection-three">
            <span>03 / DETAILS</span>
            <h3>Finishing Touches</h3>
            <b>SHOP NOW ↗</b>
          </a>
        </div>
      </section>

      <section className="products-section" id="shop">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE GOOD STUFF</p>
            <h2>Featured products</h2>
          </div>
          <span className="product-count">
            {filteredProducts.length} PRODUCTS
          </span>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "category-active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />

                {product.badge && (
                  <span className="product-badge">
                    {product.badge}
                  </span>
                )}

                <button
                  className="quick-add"
                  onClick={() => addToCart(product.name)}
                >
                  + QUICK ADD
                </button>
              </div>

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>

                <div className="product-prices">
                  <span>Rs. {product.price.toLocaleString("en-PK")}</span>

                  {product.oldPrice && (
                    <del>
                      Rs. {product.oldPrice.toLocaleString("en-PK")}
                    </del>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-products">
            No products found. Try another search.
          </p>
        )}

        <div className="center-button">
          <button
            className="outline-button"
            onClick={() => {
              setActiveCategory("All Products");
              setSearch("");
            }}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>

      <section className="brand-story" id="about">
        <div className="story-image" />

        <div className="story-copy">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>
            Less noise.
            <br />
            <em>More meaning.</em>
          </h2>

          <p>
            At Problem Solver, we believe good products
            should make everyday life simpler. We focus
            on thoughtful design, useful details, and
            quality that lasts.
          </p>

          <a href="#shop" className="text-link">
            DISCOVER OUR APPROACH →
          </a>
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">STAY IN THE LOOP</p>
        <h2>Good things, occasionally.</h2>
        <p>
          Get updates on new collections and special offers.
        </p>

        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            setNotice("Thanks for joining our newsletter!");
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
            required
          />
          <button type="submit">SUBSCRIBE →</button>
        </form>
      </section>

      <footer className="store-footer">
        <a href="#" className="brand">
          PROBLEM<span>SOLVER</span>
          <small>SMART CHOICES. BETTER LIVING.</small>
        </a>

        <p>© 2026 Problem Solver. Made for everyday life.</p>

        <div className="footer-links">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

      {notice && (
        <div className="store-notice" role="status">
          {notice}
          <button onClick={() => setNotice("")}>×</button>
        </div>
      )}
    </main>
  );
}
