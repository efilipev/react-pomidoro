import React, { useRef, useState }  from 'react';
import { Timer } from '../Timer'
import { NavItems, NavItem } from '../Navigation';
import { Images } from '../../utils/imagePaths';
import { ButtonGroup, ButtonGroupItem } from "../Buttons";

export const Main = () => {
    const images = Images();
    const timersName = ['POMODORO', 'SHORT BREAK', 'LONG BREAK'];
    const timers = [{
        name: 'pomodoro',
        minutes: 25,
    }, {
        name: 'short break',
        minutes: 5,
    }, { name: 'long break', minutes: 20 }];
    let [isRunning, setRunning] = useState(false);
    let [currentTimer] = useState(0);
    let [timer, updateTimer] = useState(timers[currentTimer]);
    let [totalSeconds, updateSeconds] = useState(timers[currentTimer].minutes * 60);
    let [timerRef, setTimerRef] = useRef();
    console.log(timer);
    console.log(isRunning)

    const getTimerType = (timerType) => {
        currentTimer = timerType;
        totalSeconds = timers[currentTimer].minutes * 60;
        return timers[timerType];
    };
    const displayMinutes = () => {
        const minutes = Math.floor(totalSeconds / 60);
        return formatTime(minutes);
    };
    const displaySeconds = () => {
        const seconds = totalSeconds % 60;
        return formatTime(seconds);
    };
    const formatTime = (time) => {
        if (time < 10) {
            return  '0' + time;
        }
        return time.toString();
    };
    const start = () => {
        stop();
        setRunning(isRunning => isRunning = true);
        if (totalSeconds > 0) {
            timer = setInterval(() => {
                updateSeconds(totalSeconds -= 1);
                console.log(totalSeconds);
            }, 1000);
        }
    };
    const stop = () => {
        setRunning( false);
        clearInterval(timer);
    };
    const reset = () => {
        stop();
        updateSeconds( totalSeconds => totalSeconds = 25 * 60);
    };
    const items = [
        {
            handler: start,
            styles: "flex justify-center align-center btn primary",
            imageUrl: images.play,
            buttonName: 'START',
        },
        {
            handler: stop,
            styles: "flex justify-center align-center btn stop",
            imageUrl: images.stop,
            buttonName: 'PAUSE',
        },
        {
            handler: reset,
            styles: "flex justify-center align-center btn reset",
            imageUrl: images.reset,
            buttonName: 'RESET',
        }
    ];

    return (
        <main className="container">
            <div className="flex align-center settings">
                <img className="left" src={images.setting} alt=""/>
            </div>
            <NavItems>
                <NavItem timersName = { timersName } />
            </NavItems>
            <Timer minutes = { displayMinutes } seconds = { displaySeconds }/>
            <ButtonGroup>
                <ButtonGroupItem items = { items } />
            </ButtonGroup>
        </main>
    )
};
