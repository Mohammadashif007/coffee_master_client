import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, test, category, details, photo};
        console.log(newCoffee);

        // send data to the server

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className=" bg-[#f4f3f0] p-20">
            <h3 className="text-3xl">Add coffee</h3>
            <form onSubmit={handleFormSubmit}>

                {/* form name and quantity row */}

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Coffee Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Available Quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* form supplier and test row */}

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="supplier"
                                placeholder="Supplier Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Test
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="test"
                                placeholder="Test"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* form category and details row */}

                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Details
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="details"
                                placeholder="Details"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* <button className="btn btn-block">block</button> */}
                <input type="submit" value="Submit" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;