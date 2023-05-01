import React, { useState } from 'react';
import googleImg from '../images/logo.svg'
import star from '../images/f.svg'
import halfStar from '../images/h.svg'
import firstRe from '../images/1.png'
import twoRe from '../images/2.png'
import threeRe from '../images/3.png'
import fourRe from '../images/4.png'
import fiveRe from '../images/5.png'
import sixRe from '../images/6.png'
import sevenRe from '../images/7.png'
import eightRe from '../images/8.png'
import googleG from '../images/g.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
    
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const customerReviews = [{
        "Customer_img": sixRe,
        "Customer_Name": "Muhammad Pate",
        "Date": "2023-01-28",
        "Content": "Both chicken and lamb Momos were delicious!"
    }, {
        "Customer_img": eightRe,
        "Customer_Name": "xoxo xoxo",
        "Date": "2023-01-12",
        "Content": "Fab. Will remain loyal to this place."

    },
    {
        "Customer_img": sevenRe,
        "Customer_Name": "Jessica Wu",
        "Date": "2023-01-16",
        "Content": "Cold day, so stopped in for a bit of refuge. I had the Karak Chai. something I had never heard of, but I do love a chai. It was"

    }, {
        "Customer_img": fiveRe,
        "Customer_Name": "abhishek agarwal",
        "Date": "2023-02-05",
        "Content": "great momos, chutney can be more spicy - overall great! Chicken ones are better."

    }, {
        "Customer_img": fourRe,
        "Customer_Name": "shoab rafi",
        "Date": "2023-02-21",
        "Content": "I think best food in london"

    }, {
        "Customer_img": threeRe,
        "Customer_Name": "Pablo Luque Amo",
        "Date": "2023-02-22",
        "Content": "Speed wifi, friendly waitress and chill music. Nice matcha latte as well"

    }, {
        "Customer_img": twoRe,
        "Customer_Name": "Víctor Solaz Estevan ",
        "Date": "2023-03-14",
        "Content": "Fuimos allí a desayunar todos los días que estuvimos visitando Londres. El trato del camarero y la camarera fue excepcional, la"
    }, {
        "Customer_img": firstRe,
        "Customer_Name": "malibebina mali",
        "Date": "2023-03-17",
        "Content": "Best coffee and momo.. Friendly staff and good service.."
    }]


    const [isopen, setIsopen] = useState(false);
    const handleClick = () => {
        setIsopen(!isopen);
    }

    return (
        <React.Fragment>

            <div className="container-fluid customerReviewHeight">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 ">
                            <div className='all-inline p-1 d-flex'>

                                <img className="Googleimg" src={googleImg} alt="Missing Google" />
                            </div>
                            <div className="img-star1 p-1 all-inline">
                                <img className="img-inlin" src={star} alt="mis" />
                                <img className="img-inlin" src={star} alt="mis" />
                                <img className="img-inlin" src={star} alt="mis" />
                                <img className="img-inlin" src={star} alt="mis" />
                                <img className="img-inlin" src={halfStar} alt="mis" />
                            </div>
                            <div >
                                <h3 className="fs-5 pt-1 text-center excellent">Excellent</h3>
                                <div className='text-center  '>

                                    <p className="inlin  text-center">based on </p><h3 className=" inlin fs-5">39 reviews</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                        <div className="gd-carousel-wrapper">
                            <Carousel
            //   infinite
            //   autoPlay={true}
            arrows={true}
            renderDotsOutside={true}
            draggable={true}
            autoPlay={false}
            showDots={false}
            ssr={true}
            //   autoPlaySpeed={2000}
              responsive={responsive} id="box-2" className="owl-carousel">
                                {customerReviews.map((item, index) => {
                                    return <div className="box" key={index}>
                                        <img className="d-inline custImg" src={item.Customer_img} alt="customer-img" />
                                        <h5 className="d-inline custName">{item.Customer_Name.length > 10 ? item.Customer_Name.slice(0, 11) + "..." : item.Customer_Name}</h5>
                                        <p className="custDatePost">{item.Date}</p>
                                        <img className="d-inline gImg" src={googleG} alt="googel-img" />

                                        <div className="img-star">
                                            <img className="img-inlin" src={star} alt="mis" />
                                            <img className="img-inlin" src={star} alt="mis" />
                                            <img className="img-inlin" src={star} alt="mis" />
                                            <img className="img-inlin" src={star} alt="mis" />
                                            <img className="img-inlin" src={star} alt="mis" />
                                        </div>
                                        <div className="custRThoughts">
                                            <p className="customer-review">
                                                {item.Content.length > 90 ? item.Content.slice(0, 90) + "..." : item.Content}
                                            </p>
                                            {item.Content.length > 90 ? <button className="btn btnReadMore" onClick={() => { handleClick() }} type="button">Read more</button>
                                                : ""}
                                            <p>
                                                { }
                                            </p>
                                        </div>
                                    </div>

                                })}</Carousel>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Reviews;
