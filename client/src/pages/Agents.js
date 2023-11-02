import React from 'react';
import Layout from '../components/Layout/Layout';
import "../styles/ag.css";

const Agents = () => {
  return (
    <Layout>
      <h1>Types Of Waste</h1>
        <div className="flex">
      <div className="container11">
  <div className="card007">
    <div className="front1"/>
    <div className="back1">
      <h1>Plastic Recycling Yard</h1>
      <p>Mangaluru Central, 98765455472</p>
    </div>
  </div>
</div>

<div className="container11">
  <div className="card007">
    <div className="front2" />
    <div className="back2">
      <h1>Scrap Dealer Shop </h1>
      <p>BC Road, 9942234718</p>
    </div>
  </div>
</div>

<div className="container11">
  <div className="card007">
    <div className="front3" />
    <div className="back3">
      <h1>E-Waste Disposal Yard</h1>
      <p>Padil, 8809562231</p>
    </div>
  </div>
</div>

<div className="container11">
  <div className="card007">
    <div className="front4" />
    <div className="back4">
      <h1>Green Waste Collection</h1>
      <p>Puttur, 9785430211</p>
    </div>
  </div>
</div>
</div>


    </Layout>
  )
}

export default Agents;