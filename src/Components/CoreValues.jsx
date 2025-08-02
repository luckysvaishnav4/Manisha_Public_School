import React from "react";
import CoreValueImg1 from '../assets/images/environment1.jpg';
import CoreValueImg2 from '../assets/images/fun1.jpg';
import CoreValueImg3 from '../assets/images/food1.jpg';
import CoreValueImg4 from '../assets/images/child_safety1.jpg';
const CoreValues=()=>{
    return(
        <div className="corevalue-section1 d-flex align-items-center justify-content-center mb-5 container-fluid">
            <div className="core1 container">
                <h1 className="heading1">Core Values</h1>
                <div className="row px-2">
                    <div className="col-md-6 col-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mt-2 col-12 d-flex align-items-center justify-content-center">
                                        <img src={CoreValueImg1} alt="" className="img-fluid value-img1"/>
                                    </div>
                                    <div className="col-md-8 mt-2 col-12">
                                        <h5 className="title1">Good Environment</h5>
                                        <p className="subtitle1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit deleniti accusamus quod debitis iusto voluptatibus quam temporibus illum odit tempore nobis harum quisquam eos quaerat, ducimus tempora facere mollitia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mt-2 col-12 d-flex align-items-center justify-content-center">
                                        <img src={CoreValueImg2} alt="" className="img-fluid value-img1"/>
                                    </div>
                                    <div className="col-md-8 mt-2 col-12">
                                        <h5 className="title1">Learning & Fun</h5>
                                        <p className="subtitle1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit deleniti accusamus quod debitis iusto voluptatibus quam temporibus illum odit tempore nobis harum quisquam eos quaerat, ducimus tempora facere mollitia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mt-2 col-12 d-flex align-items-center justify-content-center">
                                        <img src={CoreValueImg3} alt="" className="img-fluid value-img1"/>
                                    </div>
                                    <div className="col-md-8 mt-2 col-12">
                                        <h5 className="title1">Healthy Meal</h5>
                                        <p className="subtitle1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit deleniti accusamus quod debitis iusto voluptatibus quam temporibus illum odit tempore nobis harum quisquam eos quaerat, ducimus tempora facere mollitia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mt-2 col-12 d-flex align-items-center justify-content-center">
                                        <img src={CoreValueImg4} alt="" className="img-fluid value-img1"/>
                                    </div>
                                    <div className="col-md-8 mt-2 col-12">
                                        <h5 className="title1">Children Safety</h5>
                                        <p className="subtitle1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit deleniti accusamus quod debitis iusto voluptatibus quam temporibus illum odit tempore nobis harum quisquam eos quaerat, ducimus tempora facere mollitia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;