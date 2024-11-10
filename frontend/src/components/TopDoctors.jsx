import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (doctors && doctors.length > 0) {
            setLoading(false);
        }
    }, [doctors]);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-title md-mx-10'>
            <style>{`
                .loader {
                    width: 40px;
                    height: 40px;
                    display: grid;
                    animation: l6-0 1.5s infinite linear;
                }
                .loader:before,
                .loader:after {
                    content: "";
                    grid-area: 1/1;
                    background: #514b82;
                    animation: 
                        l6-1 1.5s infinite linear,
                        l6-2 1.5s infinite linear;
                }
                .loader:after {
                    --s: -1;
                    animation-direction: reverse;
                }
                @keyframes l6-0 {
                    0%, 9%, 91%, 100% { background: #514b82; }
                    10%, 90% { background: transparent; }
                }
                @keyframes l6-1 {
                    0%, 33% { clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%); }
                    66%, 100% { clip-path: polygon(50% 0, 50% 100%, 50% 0, 100% 100%, 0 100%); }
                }
                @keyframes l6-2 {
                    0%, 10%, 90%, 100% { transform: scale(var(--s, 1)) translateY(0); }
                    33%, 66% { transform: scale(var(--s, 1)) translateY(50%); }
                }
            `}</style>

            <h1 className='text-3xl font-medium'>Top Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through our best doctors</p>
            
            {loading ? (
                <div className="loader"></div>
            ) : (
                <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                    {doctors.slice(0, 10).map((item, index) => (
                        <div 
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500" 
                            key={index}
                        >
                            {/* Image Section */}
                            <div className="h-[70%]">
                                <img 
                                    className="w-full h-full object-cover bg-blue-50" 
                                    src={item.image} 
                                    alt={item.name} 
                                />
                            </div>

                            {/* Space between Image and Details */}
                            <div className="h-[10%]"></div>

                            {/* Details Section */}
                            <div className="h-[20%] p-4">
                                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'}`}>
                                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></p>
                                    <p>{item.available ? 'Available' : 'Not-Available'}</p>
                                </div>
                                <p className="text-dark text-lg font-medium">{item.name}</p>
                                <p className="text-dark text-sm">{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-primary text-dark px-12 py-3 rounded-full mt-10'>More</button>
        </div>
    );
};

export default TopDoctors;
