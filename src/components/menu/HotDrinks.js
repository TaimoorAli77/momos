import React from 'react';

const HotDrinks = () => {
    const drinks=[
        {
            "name":"Cappuccino",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Turmeric Latte",
            "price":"£3.10"
            
        },  {
            "name":"Cappuccino",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Turmeric Latte",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Turmeric Latte",
            "price":"£3.10"
            
        },
    ]
    const drinksTwo=[
        {
            "name":"Cappuccino",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Turmeric Latte",
            "price":"£3.10"
            
        },  {
            "name":"Cappuccino",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Latte",
            "price":"£3.10"
            
        },{
            "name":"Matcha Latte",
            "price":"£3.10"
            
        },{
            "name":"Turmeric Latte",
            "price":"£3.10"
            
        },]
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-md-5     ">
                    {drinks && drinks.map((drink,index)=><div className="drinks" id={index}>

<div className=" capiccino my-3"> 
<div className=' float-start'>{drink.name}</div>
<div className=" float-end">{drink.price}</div>
</div>
                    </div>)}
                </div>
                <div className="col-md-5">
                {drinksTwo && drinksTwo.map((drink,index)=><div className="drinks" id={index}>

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
