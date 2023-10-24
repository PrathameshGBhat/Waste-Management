import React from "react";

const Wastecards = () => {
  return (
    <>
      <h1 className="text-center text-info my-5">TYPES OF DOMESTIC WASTES</h1>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
          <div className="col">
            <div className="Wastecard">
              <img
                src="https://www.quickwasters.co.uk/blog/wp-content/uploads/2021/11/Liquid-Waste.jpg"
                className="card-img-top"
                alt
                style={{ height: "190px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center p-2">Liquid Waste</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Wastecard">
              <img
                src="https://www.quickwasters.co.uk/blog/wp-content/uploads/2021/11/Solid-Waste.jpg"
                className="card-img-top"
                alt
                style={{ height: "190px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center p-2">Solid Rubbish</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Wastecard">
              <img
                src="https://www.quickwasters.co.uk/blog/wp-content/uploads/2021/11/Organic-waste-768x460.jpg"
                className="card-img-top"
                alt
                style={{ height: "190px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center p-2">Organic Waste</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Wastecard">
              <img
                src="https://www.quickwasters.co.uk/blog/wp-content/uploads/2021/11/Recyclable-Rubbish.jpg"
                className="card-img-top"
                alt
                style={{ height: "190px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center p-2">Recycle Rubbish</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wastecards;
