import React from "react";
import Aboutimg from '../assets/images/about_side1.png';
const AboutSection=()=>{
    return(
        <div className="About-section1 d-flex align-items-center justify-content-center mb-5 container-fluid">
            <div className="About1 d-flex align-items-center justify-content-center container">
                <div className="row px-2">
                    <div className="col-md-8 col-12 mt-3">
                        <h1 className="heading1">About Us</h1>
                        <p className="subtitle1">
                            At Manisha Public School, we believe in nurturing young minds with knowledge, discipline, and values. Located in the heart of Jaipur, our school provides a safe, inclusive, and stimulating environment where students grow academically, socially, and emotionally.
                        </p>
                        <p className="subtitle1">
                            With a team of dedicated educators, modern infrastructure, and a strong focus on holistic development, we aim to shape responsible citizens and lifelong learners. From academics to co-curricular activities, every child is encouraged to explore their potential and build a strong foundation for the future.
                        </p>
                        <a className="btn btn-md buttons1 px-3">Explore Now</a>
                    </div>
                    <div className="col-md-4 mt-3 col-12 d-flex align-items-center justify-content-center">
                        <img src={Aboutimg} alt="School_Banner" className="img-fluid About1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;