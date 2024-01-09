
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";



export const SimpleCounter = () => {


    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            if (seconds === 10) {
                setSeconds(0)
            } else {
                setSeconds((seconds) => seconds + 1);
            }
        }, 1000);

        return () => clearInterval(interval);


    }, []);


    return (

        <div className="container">
            <div className="row">


                <div className=" col-md-2 texto bg-black"><FaClock className="icon"/></div>
                <div className=" col-md-2 texto bg-black">{Math.floor(seconds / 10000) % 10}</div>
                <div className=" col-md-2 texto bg-black">{Math.floor(seconds / 1000) % 10}</div>
                <div className=" col-md-2 texto bg-black">{Math.floor(seconds / 100) % 10}</div>
                <div className=" col-md-2 texto bg-black">{Math.floor(seconds / 10) % 10}</div>
                <div className=" col-md-2 texto bg-black">{seconds % 10}</div>


            </div>
        </div>
    )
}




















