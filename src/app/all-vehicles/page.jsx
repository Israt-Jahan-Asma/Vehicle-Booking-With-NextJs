// src/app/all-vehicles/page.js
"use client"; // MUST be a Client Component to use useState and useEffect

import { useState, useEffect } from 'react';
import VehicleCard from '@/components/VehicleCard';

// Base URL for your Express backend
const API_BASE_URL = 'http://localhost:8000';

export default function AllVehiclesPage() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/all-vehicles`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status}`);
                }

                const data = await res.json();

                // Map the MongoDB ObjectId to a string
                const mappedVehicles = data.map(vehicle => ({
                    ...vehicle,
                    _id: vehicle._id ? vehicle._id.toString() : null,
                })).filter(vehicle => vehicle._id);

                setVehicles(mappedVehicles);

            } catch (err) {
                console.error('Fetching Error:', err);
                setError('Could not load vehicles. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []); // Empty dependency array runs once on mount

    return (
        <div className="py-10">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
                Our Vehicle Fleet
            </h1>

            {loading && (
                <div className="text-center text-blue-600 py-20">
                    <span className="animate-spin h-6 w-6 border-4 border-blue-600 border-t-transparent rounded-full inline-block mr-2"></span>
                    Loading vehicles...
                </div>
            )}

            {error && (
                <div className="text-center text-red-600 py-20">
                    <p>{error}</p>
                </div>
            )}

            {!loading && vehicles.length === 0 && !error && (
                <div className="text-center text-gray-500 py-20">
                    <p>No vehicles found at this time.</p>
                </div>
            )}

            {!loading && vehicles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle) => (
                        // VehicleCard has the safety check we added
                        <VehicleCard key={vehicle._id} vehicle={vehicle} />
                    ))}
                </div>
            )}
        </div>
    );
}