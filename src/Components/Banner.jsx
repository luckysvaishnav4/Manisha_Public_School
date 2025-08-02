import React from "react";
// import Banner1 from '../assets/images/banner1.jpg';
const Banner=()=>{
    return(
        <div className="banner-section1 d-flex align-items-center justify-content-center mb-5">
            {/* <img src={Banner1} alt="School_Banner" className="img-fluid banner1"/> */}
            <div className="banner1 d-flex align-items-center justify-content-center container-fluid">
                <div className="row px-2">
                    <div className="col-md-8 mx-auto text-center col-12">
                        <h1 className="title1">Manisha Public School</h1>
                        <p className="subtitle1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa iusto, non earum aliquam eum fugit id voluptatum suscipit, debitis corrupti minus fugiat temporibus, aliquid rem totam. Delectus officiis dignissimos voluptatum.
                        </p>
                        <a className="btn btn-md buttons1 px-3">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;