import React from 'react';
import drinks from './sampleOutput.json'

const HotDrinks = () => {
    return (
        <div>
            <div className="container">
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-5">
                            {drinks && drinks.hotDrinks.map((drink) => <div className="drinks" id={drink.name}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end"><p>{drink.price}</p></div>
                                </div>
                            </div>)}
                        </div>
                        <div className="col-md-5">
                            {drinks && drinks.hotDrinksTwo.map((drink) => <div className="drinks" id={drink.name}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end"><p>{drink.price}</p></div>
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
