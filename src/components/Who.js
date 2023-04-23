import React from 'react';
import ourStoryImg1 from '../images/BeFunky-collage-1-1024x1024.jpg'
const Who = () => {
  return (
    <div className='ourStory pt-5 mt-5 text-center' >
      <div className="container">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className='story'>Our Story</h1>
              <p className='storyPara'>Momos Cafe is the perfect destination for coffee lovers and foodies alike. Our passion for serving the best coffee in town, roasted by Ozone Coffee, is matched only by our commitment to providing our customers with authentic Nepalese Momos, hand-made with red or green Nepalese sauce. Our signature products, coffee and momos, have made us a local favourite, and we invite you to come and experience the delicious flavours that have made us who we are. Come join us at Momos Cafe, where coffee and momos are more than just food – they’re a way of life.</p>
            </div>

            <div className="col-md-6">
              <img className="ourStoryImg" src={ourStoryImg1} alt='missing'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
