import React from 'react';
import drinks from './sampleOutput.json'

const HotDrinks = () => {
    return (
        <div>
            <div className="container mb-5 pb-5">
                <div className="container-fluid mb-5">
                    <div className="row justify-content-evenly">
                        <div className="col-md-5     ">
                            {drinks && drinks.bubbleTeas.map((drink,i) => <div className="drinks" id={i}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end">{drink.price}</div>
                                </div>
                            </div>)}
                        </div>
                        <div className="col-md-5">
                            {drinks && drinks.bubleTeasTwo.map((drink, i) => <div className="drinks" id={i}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end">{drink.price}
                                    {drink.price}</div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HotDrinks;
