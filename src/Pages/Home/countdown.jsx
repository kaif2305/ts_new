import React, { useEffect, useRef, useState } from 'react';
import '../../Static/css/countdown.css';

export const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('December 14, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                // stop our timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });




    return (

        <div className="timer_date">


            <img id="bg" src="images/clock-bg.png" class="image1" />

            <div className="count-flex">


                <section className="timer-container">
                    <section className="timer">
                        <div>
                            <section>
                                <p>{timerDays}</p>
                                <p><small>Days</small></p>
                            </section>
                            <br></br>
                            <section>
                                <p>{timerHours}</p>
                                <p><small>Hours</small></p>
                            </section>
                            <br></br>
                            <section>
                                <p>{timerMinutes}</p>
                                <p><small>Minutes</small></p>
                            </section>
                            <br></br>
                            <section>
                                <p>{timerSeconds}</p>
                                <p><small>Seconds</small></p>
                            </section>
                        </div>
                    </section>
                </section>

                <div className="count-date">
                    <img id="dates" src="images/Group 67.png" class="image2" />
                    <img id="dates2" src="images/Group 70.png" class="image2" />
                </div>
            </div>




        </div>
    );
};


