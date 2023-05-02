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
                                <div className=" capiccinotwo my-3">
                                    <div className=' float-start pt-2'>{drink.name}</div>
                                    <div className=" float-end"><p>
                                       Small    {drink.price}</p>
                                    <p>
                                       Large    {drink.price}
                                        </p></div>
                                </div>
                            </div>)}
                        </div>
                        <div className="col-md-5">
                            {drinks && drinks.bubleTeasTwo.map((drink, i) => <div className="drinks" id={i}>
                                <div className=" capiccinotwo my-3">
                                    <div className=' float-start pt-2'>{drink.name}</div>
                                    <div className=" float-end "><p>
                                    Small  {drink.price}</p>
                                    <p>
                                    Large  {drink.price}
                                        </p>
                                    </div>
                                        
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
