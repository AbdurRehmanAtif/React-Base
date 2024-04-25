import React, { useState, useEffect } from 'react';

// Define the type for props
type ChildComponentProps = {
    fun1: () => void;
    fun2: () => number;
    fun3: (arg: string) => string;
    var1: string;
    var2: number;
    var3: boolean;
};


const Button = React.memo((props) => {

    var countTwo = 1;
    const [count, setCount] = useState(0);
    console.log('Render called at the top');

    useEffect(() => {
        console.log('Component did mount *');

        // Simulating an asynchronous operation
        const timer = setTimeout(() => {
            setCount(count => count + 1);
        }, 5000);

        return () => {
            console.log('Component will unmount');
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    }, [count]);

    console.log('Render called');


    const setNewCount = () => {
        countTwo++;
        console.log(countTwo)
    }


    return (
        <div>
            <h1>Functional Component Lifecycle Demo</h1>
            <p>Current count: {countTwo}</p>
            <button onClick={setNewCount}>Click me</button>
        </div>
    );
});

export default Button;
