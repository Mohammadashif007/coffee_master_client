import React from 'react';

const CoffeeDetails = ({coffee}) => {
    const {name, category, test, supplier, photo, details, quantity} = coffee;
    return (
        <div>
            <div className='flex justify-between m-2 p-4 border'>
                <img src={photo} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{test}</p>
                    <p>{details}</p>
                    <p>{quantity}</p>
                    <button className='btn btn-primary mt-6 mr-1'>View</button>
                    <button className='btn btn-primary mt-6 mr-1'>Edit</button>
                    <button className='btn btn-primary mt-6'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;