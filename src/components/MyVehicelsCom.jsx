import axios from 'axios';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { motion } from "framer-motion";


const MyVehiceslsCom = ({ vehicles }) => {
    const { _id, vehicleName, category, pricePerDay, coverImage, description } = vehicles
    const { setLoading } = use(AuthContext)
    const navigate = useNavigate()

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                setLoading(true);
                await axios.delete(`https://travel-ease-server-three.vercel.app/all-vehicles/${_id}`);
                Swal.fire("Deleted!", "Your vehicle has been deleted.", "success");

                navigate('/all-vehicles');

            } catch (error) {
                console.error(error);
                toast.error("❌ Failed to delete vehicle.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <motion.div
            whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", borderColor: 'rgb(var(--primary))' }}
            className="group block bg-base-100 w-full border border-base-200 rounded-xl transition-ll duration-300 overflow-hidden shadow-xl"
        >
            <div className="flex flex-col h-full">

                <figure className=' flex justify-center items-center w-full '>
                    <img
                        className='max-h-full max-w-full object-contain'
                        src={coverImage}
                        alt={vehicleName}
                    />
                </figure>

                <div className="p-6 flex flex-col h-full">
                    <div className="text-left">

                        <p className="text-sm font-semibold uppercase text-primary mb-1">
                            {category}
                        </p>
                        {/* Vehicle Name */}
                        <h2 className="text-xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors duration-300">
                            {vehicleName}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </div>

                    {/* Price */}
                    <p className='text-xl font-extrabold mt-auto pt-4'>
                        <span className='text-base-content'>${pricePerDay}</span>
                        <span className='font-normal text-sm text-base-content/70'> / Day</span>
                    </p>


                    {/* Action Buttons */}
                    <div className="card-actions justify-between items-center mt-3">
                        <Link to={`/vehiclesDetails/${_id}`} className="btn btn-primary ">
                            Details
                        </Link>

                        <Link to={`/update-vehicle/${_id}`} className="btn btn-secondary ">
                            Update
                        </Link>

                        <button onClick={handleDelete} className="btn btn-error">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


export default MyVehiceslsCom;