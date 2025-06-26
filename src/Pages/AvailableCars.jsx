import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Card2 from '../Components/card2';
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import axios from 'axios';
import LoadingPage from './LoadingPage';

const AvailableCars = () => {

    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [gridView, setGridView] = useState(false); // true = Card, false = Card2
    const [loading, setLoading] = useState(false);

    document.title = `Available cars | AutoNexa`;

    const handelSearch = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const rawData = Object.fromEntries(formData.entries());
        setSearch(rawData.search);
    }

    const sortType = [{type:"Default",value : "default"},{type:"Newest First",value : "new"},{type:"Oldest First",value : "old"},{type:"Highest First",value : "high"},{type:"Lowest First",value : "low"},] 
    const handelSort = (s) =>{
        setSort(s);
    }

    
    useEffect(() => {
            const fetchCars = async () => {
                setLoading(true);
                try {
                    const res = await axios.get('https://ph-assignment-11-backend.vercel.app/available', {
                        params: {
                            search: search,
                            sort: sort
                        }
                    });
                    setCars(res.data);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };

        fetchCars();
    }, [search, sort]);  // refetch when search or sort changes



    const handleViewToggle = (e) => {
        setGridView(e.target.checked);
    };


    return (
        <>
        
        { loading? (<LoadingPage/>) :
            (<div className='w-[90vw] md:w-[90vw] mt-10 mx-auto space-y-10'>
            
                <div className=" flex justify-end gap-10   ">
                    <form onSubmit={handelSearch } className='flex '>
                        <label className="input max-w-sm rounded-r-none">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" defaultValue={search} name='search' className='w-[100%]' />
                        </label>
                        <button className='btn btn-primary rounded-l-none'>Search</button>
                    </form>

                    <div className="flex text-4xl items-center gap-1.5">
                        {/* View Toggle */}
                        <div className=" hidden md:block">
                            <label className="swap">
                                <input type="checkbox" onChange={handleViewToggle} />
                                <div className="swap-on"><CiGrid41 /></div>
                                <div className="swap-off"><CiGrid2H /></div>
                            </label>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button"><MdSort /></div>
                            <ul tabIndex={0} className="dropdown-content font-[400] menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {  
                                    sortType.map((t, index) => (
                                        <li key={index} onClick={() => handelSort(t.value)}>
                                        <a> {t.type}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            

            {/* Cars List */}
                { cars.length > 0 ?
                    <div className={`${!gridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}`}>
                        {
                            cars.map((car) => (
                                gridView
                                    ? <Card2 key={car._id} car={car} />
                                    : <Card key={car._id} car={car} />
                            ))
                        }
                    </div>
                    :
                    <p className='text-center text-xl '>
                        No results found for "<span className='font-semibold'>{search}</span>"
                    </p>
            
                }
            
            </div>)
        }
        </>
    );
};

export default AvailableCars;
