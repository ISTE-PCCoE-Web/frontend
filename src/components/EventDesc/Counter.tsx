//@ts-nocheck
import { useEffect, useRef, useState } from 'react';
import "./counter.css"

export default function Counter() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 13, 2023 00:00:00:00').getTime();

        interval = setInterval(()=> {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
            const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
            const seconds = Math.floor((distance % (1000*60)/(1000)));

            if(distance < 0){
                //stop our timer
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current);
        };
    });

  return (
    <div className="counter">
    <section className="timer-container">
        <section className="timer">
            <div className="first">
                <div className="timer-icon">
                    <h1 className="counter-title" >The countdown has begun</h1>
                    {/* <p>Countdown to a really special date. One you could or would never imagine!</p> */}
                </div>
            </div>
            <div className="second">
                <section>
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                </section>
            </div>
        </section>
    </section>
    </div>
  )
}
