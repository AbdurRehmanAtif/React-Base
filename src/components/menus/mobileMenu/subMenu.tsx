import React from 'react'

const subMenu = () => {
    
    return (
        <div className=" overflow-hidden">
            <div className="flex items-center p-10 text-center align-middle"> {/* Adjust padding as needed */}
                <img src="https://assets.woolworths.com.au/images/1005/categories/1_C4BB750.jpg?impolicy=wowsmkqiema&w=64&h=64" alt="Card Image" className="w-10 h-10 rounded-full mr-4" /> {/* Adjust image size */}
                <h2 className="text-xl font-bold"></h2>
                <div className="ml-auto"> {/* Pushes arrow icon to the far right */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default subMenu