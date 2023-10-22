import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <>
      <h1 className="text-center text-success my-5">Processing and Disposal</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 g-4 ">
            <div class="col">
              <div class="card">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/11/21/Pictures/ghaziabad_4ef53296-edac-11e8-86fe-bb1c4000c468.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Waste Dumping</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/09/07/Pictures/ht-pune_be55a16e-93d2-11e7-8e40-f0ddfb773b93.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Wet Waste </h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src="https://smartcity.ndmc.gov.in/images/Gallery/area-based-projects/physical-infrastructure-projects/bio-methanation-plant/bio-methanation-plant-1.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Bio Methanization </h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src="https://www.drivespark.com/img/2019/08/electric-vehicles-for-waste-garbage-collection-coimbatore13-1566821611.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Vehicles</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
