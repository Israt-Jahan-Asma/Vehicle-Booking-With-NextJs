import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <TailSpin
                height={80}
                width={80}
                color="#4F46E5"
                ariaLabel="loading"
            />
        </div>
    );
};

export default Spinner;