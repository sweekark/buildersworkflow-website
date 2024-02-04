/* eslint-disable react/prop-types */
import React from "react";
import "./Rate.css"
const Rate = () => {
    return (
        <>
            <div className="rate section_padding">
                <div className="rate-sec">
                    <div className="rate-sec-1">
                        <div className="rate-star">★★★★★</div>
                        <h2 className="rate-header">Steer helped us achieve
                            20% higher gross profit</h2>
                        <p className="rate-text"><b>Roberto Nuez</b></p>
                        <p>President, Community Developers & Construction Corporation (A PHINMA Company)</p>
                    </div>
                    <div className="rate-sec-2">
                        <iframe className="iframe-rate" width="560" height="315" src="https://www.youtube.com/embed/RTLgClwl2LM?si=22rFvJpaA-hcH0Z6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                </div>
            </div>
            <div className="implement section_padding">
                <h1 className="implement-header">The Easiest-to-Implement Construction Management Software</h1>
                <p className="implement-text">With Steer, it takes as fast as a few days <br />to drive up efficiency, improve quality, and ultimately avoid delays & cost overruns</p>
                <div className='imple-but'>Book a Meeting</div>
            </div>


        </>

    )
}

// eslint-disable-next-line react/prop-types
export const Banner = ({ title, desc, link, imglink }) => {
    // Replace newline characters with <br> tags
    // eslint-disable-next-line react/prop-types
    const titleWithLineBreaks = title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < title.split('\n').length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <div className="banner section_padding">
            <div className="banner-sec-1">
                <h1 className="banner-header">{titleWithLineBreaks}</h1>
                <p className="banner-text">{desc}</p>
                <div className="banner-but">
                    <div className="banner-checkout" onClick={link}>CheckOut</div>
                </div>
            </div>
            <div>
                <img className="banner-image" src={imglink} alt="photo" />
            </div>
        </div>
    );
};


export default Rate
