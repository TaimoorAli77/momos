import React from 'react';
import drinks from './sampleOutput.json'

const HotDrinks = () => {
    return (
        <div>
            <div className="container mb-5 pb-5">
                <div className="container-fluid mb-5">
                    <div className="row justify-content-evenly">
                        <div className="col-md-5">
                            {drinks && drinks.momos.map((drink) => <div className="drinks" id={drink.name}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end">{drink.price}</div>
                                </div>
                            </div>)}
                        </div>
                        <div className="col-md-5">
                            {drinks && drinks.momosTwo.map((drink) => <div className="drinks" id={drink.name}>
                                <div className=" capiccino my-3">
                                    <div className=' float-start'>{drink.name}</div>
                                    <div className=" float-end">{drink.price}</div>
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
