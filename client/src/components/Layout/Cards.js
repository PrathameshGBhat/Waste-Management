import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <>
      <h1 className="text-center text-success my-5">Processing and Disposal</h1>
      <div className="container" >
        <div className="row">
          <div className="col-md-3 g-4 ">
            <div class="col">
              <div class="card1">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/11/21/Pictures/ghaziabad_4ef53296-edac-11e8-86fe-bb1c4000c468.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Waste Dumping</h5>
                  <p class="card-text">
                    Dumping or Land Filling is an old way of disposing off
                    wastes. It is an easy method of disposal of dry refuse. In
                    this process, solid wastes are dumped in a low lying area
                    and as a result of bacterial action, refuse decreases
                    considerably in volume and are converted gradually into
                    humus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card1">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/09/07/Pictures/ht-pune_be55a16e-93d2-11e7-8e40-f0ddfb773b93.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Wet Waste </h5>
                  <p class="card-text">
                    Instead of transporting big volumes of waste from one
                    location to another; it is environmentally sustainable to
                    process the wet waste at the source of generation itself.
                    Wet waste when composted reduces by volume to a third of its
                    original volume and get’s converted to useful compost
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card1">
                <img
                  src="https://smartcity.ndmc.gov.in/images/Gallery/area-based-projects/physical-infrastructure-projects/bio-methanation-plant/bio-methanation-plant-1.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Bio Methanization </h5>
                  <p class="card-text">
                    In order to utilize the organic waste generated from the
                    perishable market in KWMC for power generation, the
                    Bio-methanation Plant was established in KWMC as a unique
                    national level demonstration project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g-4">
            <div class="col">
              <div class="card1">
                <img
                  src="https://www.drivespark.com/img/2019/08/electric-vehicles-for-waste-garbage-collection-coimbatore13-1566821611.jpg"
                  class="wasteimg"
                  alt
                  style={{ height: "200px" }}
                />
                <div class="card-body">
                  <h5 className="text-center">Vehicles</h5>
                  <p class="card-text">
                    A waste collection vehicle is more generally known as
                    garbage truck and dustbin lorry. These trucks are used for
                    picking up waste and then moving it to landfills or other
                    places where waste materials are managed and treated. You
                    can have their view mostly in Urban areas. Most of the time
                    Garbage cart is mistaken as dump truck.
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
