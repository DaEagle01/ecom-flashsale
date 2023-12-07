import { useState, useEffect } from "react";

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const textStyle = "w-5 pt-[0.19rem] pb-[0.19rem] px-[0.3rem] bg-orange-500 rounded-[0.1875rem] text-white text-[0.5625rem] font-medium font-['Inter'] leading-[130%]";

    return (
        <div className="flex items-center gap-[0.44rem]">
            <p className={textStyle}>{String(hours).padStart(2, "0")}</p>
            <p className={textStyle}>{String(minutes).padStart(2, "0")}</p>
            <p className={textStyle}>{String(seconds).padStart(2, "0")}</p>
        </div>
    );
};

export default Timer;
