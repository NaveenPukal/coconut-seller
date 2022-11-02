import React from "react";

export default function Footer() {
  return (
    <div style={{ color: "white", backgroundColor: "#292b2c" }}>
      <footer style={{ marginTop: "20px" }}>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-4">
              <p class="h5">Registered under CDB</p>
              <img
                loading="lazy"
                width="180"
                height="180"
                src="https://coconutseller.in/wp-content/uploads/2022/01/coconut-development-board.png"
                alt=""
                class="wp-image-2067"
                srcset="https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/01/coconut-development-board.png?w=180&amp;ssl=1 180w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/01/coconut-development-board.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/coconutseller.in/wp-content/uploads/2022/01/coconut-development-board.png?resize=100%2C100&amp;ssl=1 100w"
                sizes="(max-width: 180px) 100vw, 180px"
                style={{ marginTop: "20px" }}
                className="roundImage1"
              ></img>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-4">
              <p class="h5">Registered under APEDA</p>
              <img
                class="wp-image-2067"
                loading="lazy"
                width="180"
                height="180"
                sizes="(max-width: 180px) 100vw, 180px"
                src="https://coconutseller.in/wp-content/uploads/2022/01/appeda-1024x576.png?v=1643120133"
                alt=""
                style={{ marginTop: "20px" }}
                className="roundImage1"
              />
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-4">
              <p class="h5">Registered under GST</p>
              <img
                loading="lazy"
                src="https://coconutseller.in/wp-content/uploads/2022/01/gst-logo.png"
                alt=""
                class="wp-image-2069"
                width="180"
                height="180"
                style={{ marginTop: "20px" }}
                className="roundImage1"
              ></img>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-4">
              <h3 class="widget-title pb-2 mb-2">
                International Standards Quality
              </h3>
              <div class="textwidget">
                <p>
                  <strong>Happy Business India</strong> is leading exporters and
                  suppliers of coconut from India to the global market with best
                  quality which meets international standards. We holds the
                  potential of supplying these in huge quantities due to the
                  widespread farms under Coconut cultivation from Karnataka,
                  Kerala and Tamilnadu.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="site-info py-4 text-center">
        {" "}
        Copyright 2021 @ Happy Business India{" "}
        <a target="_blank" href="https://www.happybusinessindia.com/">
          {" "}
          Organic Farm
        </a>{" "}
      </div>
    </div>
  );
}
