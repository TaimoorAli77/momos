import React from 'react';
import deliveroo from '../images/deliveero.png'
import uberEats from '../images/uber-eats.png'
import JustEat from '../images/just-eat-1024x1018.png'

import ImagesEat from './ImagesEat';
const UberEats = () => {
    return (
        <div className='d-flex justify-content-around p-2'>
                <ImagesEat url={deliveroo} alt="Missing Image Link"/>
                <ImagesEat url={uberEats} alt="Missing Image Link"/>
                <ImagesEat url={JustEat} alt="Missing Image Link"/>


        </div>
    );
}

export default UberEats;
