import Vehicles from './Vehicles';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Spinner from './Spinner';
import { use, useEffect, useState } from 'react';
import { format } from 'date-fns';

const LatestVehicles = () => {
    const [latestVehicles, setLatestVehicles] = useState([]);
    const { loading, setLoading } = use(AuthContext);
    const currentDate = new Date()
    const formatDate = format(currentDate, 'MMMM do, yyyy')

    const fetchLatestVehicles = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://travel-ease-server-three.vercel.app/latest-vehicles');
            setLatestVehicles(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestVehicles();
    }, []);

    if (loading) return <Spinner />;

    return (
        <div className='container-default space-y-10 '>


            <div className="max-w-xl mb-12 text-left">
                <h4 className="text-primary text-lg font-semibold uppercase">
                    New Additions
                </h4>
                <h2 className="text-4xl md:text-5xl font-extrabold text-base-content my-3">
                    Vehicles Added on {formatDate}
                </h2>
                <p className="text-base-content/70">
                    Be the first to browse and book the newest vehicles available in our fleet today.
                </p>
            </div>


            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pb-16'>
                {latestVehicles.map(vehicle => (
                    <Vehicles
                        key={vehicle._id}
                        vehicles={vehicle}
                        refreshVehicles={fetchLatestVehicles}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestVehicles;