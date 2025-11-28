"use client"

import React, { use, useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { useNavigate } from 'react-router';

const AddVehicle = () => {
    const { user, loading, setLoading } = use(AuthContext);
    // const navigate = useNavigate()

    const handleAddVehicle = async (e) => {
        e.preventDefault()
        setLoading(true);

        const form = e.target;

        const newVehicle = {
            vehicleName: form.vehicleName.value,
            owner: form.owner.value,
            category: form.category.value,
            pricePerDay: form.pricePerDay.value,
            location: form.location.value,
            availability: form.availability.value,
            description: form.description.value,
            coverImage: form.coverImage.value,
            userEmail: user?.email,
            createdAt: new Date(),

        };

        try {
            const res = await axios.post("https://travel-ease-server-three.vercel.app/all-vehicles", newVehicle);
            if (res.data.insertedId) {
                toast.success("Vehicle added successfully!");
                form.reset();
                // navigate('/')
            }
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to add vehicle.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center py-10">
            <div className="card w-full max-w-2xl shadow-xl bg-base-100 p-8">
                <h2 className="text-2xl font-semibold text-center text-secondary mb-6">
                    Add a New Vehicle
                </h2>

                <form onSubmit={handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name="vehicleName" placeholder="Vehicle Name" className="input input-bordered w-full" required />
                    <input type="text" name="owner" placeholder="Owner" className="input input-bordered w-full" required />
                    <input type="text" name="category" placeholder="Category (Car, SUV, Bike...)" className="input input-bordered w-full" required />
                    <input type="number" name="pricePerDay" placeholder="Price Per Day ($)" className="input input-bordered w-full" required />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />

                    <select name="availability" className="select select-bordered w-full" required>
                        <option value="">Select Availability</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Booked</option>
                    </select>

                    <input type="text" name="coverImage" placeholder="Cover Image URL" className="input input-bordered w-full md:col-span-2" required />

                    <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full md:col-span-2" required></textarea>

                   
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary md:col-span-2"
                    >
                        {loading ? "Adding..." : "Add Vehicle"}
                    </button>
                </form>
            </div>
        </div>
    );

};

export default AddVehicle;