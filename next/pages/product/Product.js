import "./Product.css";
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import imgSrc from "./services.jpg";
import { useNavigate } from "react-router-dom";
const FaQComponent = ({ options, setSearch }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      <div
        className="faq-item"
        onClick={() => {
          toggleAnswer(0);
        }}
      >
        <div className="faq-question">商品分類</div>
        <div className="icon-container">
          <i
            className={
              activeIndex === 0
                ? "fas fa-chevron-right  active"
                : "fas fa-chevron-right "
            }
          ></i>
        </div>
      </div>
      <div className={activeIndex === 0 ? "faq-answer active" : "faq-answer"}>
        {options && options.length
          ? options.map((d) => (
              <p className="catOptions" onClick={() => setSearch(d.type)}>
                {d.type}
                <span style={{ marginLeft: 15 }}>{`(${d.num})`}</span>
              </p>
            ))
          : null}
      </div>
    </div>
  );
};
const ImgComponent = (props) => {
  const { id, img } = props;
  const navigte = useNavigate();
  return (
    <div className="card">
      {img ? (
        <div
          onClick={() => {
            navigte("/productDetail", { state: { ...img } });
          }}
        >
          {/* <h3>{img.name}</h3> */}
          <img
            alt=""
            src={img.src ? img.src : null}
            style={{ width: 300 }}
          ></img>
          <h2 className="prodTitle">{img.title}</h2>
        </div>
      ) : null}
    </div>
  );
};
const ProductList = forwardRef(({ data }, ref) => {
  const [page, setPage] = useState(1);
  const [btnHover, setBtnHover] = useState(false);
  const [items, setItems] = useState();
  useEffect(() => {
    setItems(
      data && data.length
        ? data.slice(
            page == 1 ? page - 1 : (page - 1) * 6,
            page == 1 ? 6 : (page - 1) * 6 + 6
          )
        : []
    );
  }, [data, page]);
  useImperativeHandle(ref, () => {
    return { setPage };
  });
  return (
    <div>
      <div
        className="mainColor"
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          borderRadius: "0.35rem",
          padding: 5,
          width: "80%",
          margin: "auto",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        歡迎新會員!註冊新會員就不限金額20優惠卷{" "}
      </div>
      <div className="productList">
        {items && items.length
          ? items.map((img, idx) => <ImgComponent key={idx} img={img} />)
          : null}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data && data.length ? (
          <div className="pageRow">
            <div
              className={`btn-page ${btnHover == 1 ? "btn-page-h" : ""}`}
              onClick={() => {
                if (page > 1) setPage((pre) => pre - 1);
                setBtnHover(false);
              }}
              onMouseEnter={() => setBtnHover(1)}
              onMouseLeave={() => setBtnHover(false)}
            >
              <i
                className={`fa-solid fa-chevron-left ${
                  btnHover == 1 ? "btn-page-h" : ""
                }`}
              ></i>
            </div>
            <div style={{ margin: 10 }}>{`${page} of ${Math.ceil(
              data.length / 6
            )} `}</div>
            <div
              className={`btn-page ${btnHover == 2 ? "btn-page-h" : ""}`}
              onClick={() => {
                if (page < data.length / 6) setPage((pre) => pre + 1);
                setBtnHover(false);
              }}
              onMouseEnter={() => setBtnHover(2)}
              onMouseLeave={() => setBtnHover(false)}
            >
              <i
                className={`fa-solid fa-chevron-right ${
                  btnHover == 2 ? "btn-page-h" : ""
                }`}
              ></i>
            </div>
            <div style={{ margin: 10 }}>{`共 ${data.length} 件商品 `}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
});
const Product = () => {
  const [data, setData] = useState([
    {
      productId: 1,
      src: imgSrc,
      title: "東京",
      type: "日本",
      desc: `北海道是日本最北的行政區，擁有豐富的自然景觀，有著與日本本州不一樣的歷史文化背景，過去北海道開拓時代留下許多在地故事與飲食文化
      北海道同時也是日本最大的農畜生產地，在北方大地生長的美味農產品及海鮮漁獲聞名世界，優質的食材是北海道料理美味的秘訣之一`,
    },
    {
      productId: 2,
      src: imgSrc,
      title: "首爾",
      type: "韓國",
      desc: "測試韓國",
    },
    {
      productId: 3,
      src: imgSrc,
      title: "釜山",
      type: "韓國",
      desc: "測市府山",
    },
    {
      productId: 4,
      src: imgSrc,
      title: "大阪",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 5,
      src: imgSrc,
      title: "大阪1",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 6,
      src: imgSrc,
      title: "大阪2",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 7,
      src: imgSrc,
      title: "大阪3",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 8,
      src: imgSrc,
      title: "大阪4",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 9,
      src: imgSrc,
      title: "大阪5",
      type: "日本",
      desc: "環球影城",
    },
    {
      productId: 10,
      src: imgSrc,
      title: "拉斯維加斯",
      type: "美國",
      desc: "環球美國",
    },
    {
      productId: 11,
      src: imgSrc,
      title: "拉斯維加斯1",
      type: "美國",
      desc: "環球美國",
    },
    {
      productId: 12,
      src: imgSrc,
      title: "拉斯維加斯2",
      type: "美國",
      desc: "環球美國",
    },
    {
      productId: 13,
      src: imgSrc,
      title: "拉斯維加斯3",
      type: "美國",
      desc: "環球美國",
    },
  ]);
  const [searchText, setSearch] = useState("");
  const [options, setOptions] = useState("");
  const [products, setProducts] = useState();
  function setProductFilter(items) {
    let fItem = items.filter((f) => {
      return (
        f.title.includes(searchText) ||
        f.type.includes(searchText) ||
        f.desc.includes(searchText)
      );
    });
    setProducts(fItem);
  }
  function countItemsByType(items) {
    const countByType = {};
    let fItem = items.filter((f) => {
      return (
        f.title.includes(searchText) ||
        f.type.includes(searchText) ||
        f.desc.includes(searchText)
      );
    }); // Iterate over each item in the input array
    fItem.forEach((item) => {
      // If the type is already in the countByType object, increment its count
      if (countByType[item.type]) {
        countByType[item.type]++;
      } else {
        // Otherwise, initialize it to 1
        countByType[item.type] = 1;
      }
    });

    // Convert the countByType object into an array of objects
    const result = [];
    for (const [type, num] of Object.entries(countByType)) {
      result.push({ type, num });
    }

    return result;
  }

  // 前端API
  // 格式 [ {pridocutId:1, src:picture Data  , title , type}]
  useEffect(() => {
    if (listRef && listRef.current) listRef.current.setPage(1);
    // fetch("/api/getProducts", {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((d) => {
    //     setData(d);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with your fetch operation:", error);
    //   });
    if(!options) setOptions(countItemsByType(data));
    setProductFilter(data);
  }, [searchText]);
  const listRef = useRef();
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <div className="leftBar">
          <div style={{ flex: 0.2, display: "flex", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: "bold", margin: 30, color: "gray" }}>
                產 品 / 旅遊周邊{" "}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 0.9 }}>
                  <input
                    className="input"
                    type="text"
                    placeholder="請輸入關鍵字"
                    value={searchText}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="searchIcon">
                  <i
                    style={{ color: "white", zoom: 0.8 }}
                    className="fa-solid fa-magnifying-glass icons"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 0.8 }}>
            {data && data.length ? (
              <FaQComponent
                options={
                  options
                  // { type: "日常用品", num: 50 },
                }
                setSearch={(t) => {
                  setSearch(t);
                }}
              />
            ) : null}
          </div>
        </div>
        <div className="">
          <ProductList data={products} ref={listRef} />
        </div>
      </div>
    </div>
  );
};
export default Product;