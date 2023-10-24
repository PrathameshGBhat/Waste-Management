import React from "react";

const IndiaStat = () => {
  return (
    <>
      <h1 className="Stat-text text-center text-success my-5 ">
        Statistics on waste generation and waste characterization data
      </h1>

      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div class="col" style={{ marginLeft: "40px" }}>
              <img
                className="india-map"
                src="https://royalsocietypublishing.org/cms/asset/dca3cb45-8fde-43e9-8683-f4f1090032f4/rsos160764f01.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 g-4">
            <div class="col">
              <p className="text-stat p-4" style={{ fontFamily: "Onest" }}>
                Waste generation rate depends on factors such as population
                density, economic status, level of commercial activity, culture
                and city/region. Figure 1 provides data on MSW generation in
                different states, indicating high waste generation in
                Maharashtra (115 364–19 204 tonnes per day), Uttar Pradesh,
                Tamil Nadu, West Bengal (11 523–15 363 tonnes per day), Andhra
                Pradesh, Kerala (7683–11 522 tonnes per day) and Madhya Pradesh,
                Rajasthan, Gujarat, Karnataka and Mizoram (3842–7662 tonnes per
                day). Lower waste generation occurs in Jammu and Kashmir, Bihar,
                Jharkhand, Chhattisgarh, Orissa, Goa, Assam, Arunachal Pradesh,
                Meghalaya, Tripura, Nagaland and Manipur (less than 3841 tonnes
                per day).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiaStat;
