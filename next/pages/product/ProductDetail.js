import { useLocation, useNavigate } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
const updateCart = ({ productId, count }) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  cart[productId] = count;
  localStorage.setItem("cart", JSON.stringify(cart));
};
const ProductDetail = () => {
  const location = useLocation();
  const navigte = useNavigate();
  if (!location.state) navigte("/");
  const { title, src, type, desc, productId } = location.state || {};
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  const [count, setCount] = useState(cart[productId] ? cart[productId] : 0);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div>
      <div class="custom-shape-divider-top-1716194365">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 style={{ position: "relative", color: "white", marginLeft: 250 }}>
        {`${type} - ${title}`}
      </h1>
      <div
        style={{
          display: "flex",
          zIndex: 300,
          position: "relative",
          margin: 100,
        }}
      >
        <div style={{ flex: 0.3 }}>
          <img src={src} width={500}></img>
        </div>
        <div
          style={{
            flex: 0.7,
            marginRight: 60,
          }}
        >
          <div style={{ marginLeft: 60 }}>
            <h1 style={{ margin: "60px 0px" }}> {title}</h1>
            <h2>{desc}</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div>
              <span className="pageRow" style={{ display: "flex" }}>
                <i className="fa-solid fa-2x fa-cart-shopping"></i>{" "}
                <span
                  style={{ fontSize: 28, marginLeft: 15, fontWeight: "bold" }}
                >
                  <div
                    className={`btn-page ${btnHover == 1 ? "btn-page-h" : ""}`}
                    onClick={() => {
                      if (count > 0) {
                        setCount((pre) => pre - 1);
                        updateCart({ count: count - 1, productId });
                      }
                      setBtnHover(false);
                    }}
                    onMouseEnter={() => setBtnHover(1)}
                    onMouseLeave={() => setBtnHover(false)}
                  >
                    <i
                      className={`fa-solid fa-minus ${
                        btnHover == 1 ? "btn-page-h" : ""
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`btn-page ${btnHover == 2 ? "btn-page-h" : ""}`}
                    onClick={() => {
                      setCount((pre) => pre + 1);
                      updateCart({ count: count + 1, productId });
                      setBtnHover(false);
                    }}
                    onMouseEnter={() => setBtnHover(2)}
                    onMouseLeave={() => setBtnHover(false)}
                  >
                    <i
                      className={`fa-solid fa-plus ${
                        btnHover == 2 ? "btn-page-h" : ""
                      }`}
                    ></i>
                  </div>
                  <div style={{ margin: 10 }}>{`共 ${count} 件 `}</div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
