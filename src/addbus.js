import React from 'react';
import './input.css';
import './output.css';
import image from './images/bl.png';
import back from './images/icons/arrow-left-circle.svg'
import { Link } from 'react-router-dom';

function Drag() {
    return (
        <div className='bg-custom-gradient min-h-screen flex justify-center items-center'>
            <div className='p-6 my-8 bg-slate-300  rounded-lg shadow-lg'>
                <form className='space-y-4'>
                    
                    <div className='w-40 h-30 mx-auto'>
                        <img src={image} alt="Logo" />
                    </div>
                    <div>
                        <h4 className='font-extrabold text-2xl text-center'>BUS DETAILS</h4>
                    </div>
                    <div className='max-w-[55rem] mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                            <div className='flex flex-col'>
                                <label className='font-semibold'>Owner Name:</label>
                                <input
                                    type="text"
                                    className="border border-red-300 px-4 py-2 lg:w-96 rounded"
                                    placeholder="Enter owner's name"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-semibold'>Bus Name:</label>
                                <input
                                    type="text"
                                    className="border border-red-300 px-4 py-2 lg:w-96 rounded"
                                    placeholder="Enter bus name"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-semibold'>Bus No:</label>
                                <input
                                    type="text"
                                    className="border border-red-300 px-4 py-2 lg:w-96 rounded"
                                    placeholder="Enter bus number"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-semibold'>RC No:</label>
                                <input
                                    type="text"
                                    className="border border-red-300 px-4 py-2 lg:w-96 rounded"
                                    placeholder="Enter RC number"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-semibold'>Contact Number:</label>
                                <input
                                    type="text"
                                    className="border border-red-300 px-4 py-2 lg:w-96 rounded"
                                    placeholder="Enter contact number"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='font-semibold'>Bus Type:</label>
                                <select className="border border-red-300 px-4 py-2 lg:w-96 rounded">
                                    <option>Bus type</option>
                                    <option>AC</option>
                                    <option>Non AC</option>
                                    <option>NonAC/AC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="flex items-center justify-center p-3">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-50 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark: hover:bg-gray-800 dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">ADD PHOTOS</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>

                <div className='flex justify-center items-center'>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                        Submit
                    </button>
                    

                
                </div>
                <div className='flex justify-center items-center p-3 '>                    
                    <Link to="/"><img  src={back} ></img></Link>
                </div>
            </div>
        </div>
    );
}

export default Drag;