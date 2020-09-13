import { Subject } from 'rxjs'

export default class TimerService {
    timer;
    timers = [{
        name: 'pomodoro',
        minutes: 25,
    }, {
        name: 'short break',
        minutes: 5,
    }, {
        name: 'long break',
        minutes: 20,
    }];
    totalSeconds;
    currentTime$ = new Subject();
    isRunning = false;
    currentTimer  =  0;
    constructor() {
        this.timer = this.timers[this.currentTimer];
        //this.timers[this.timer.index].minutes = this.timer.minutes;
        this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
        this.currentTime$.next(this.totalSeconds);
    }
    getTimerType = (timerType) => {
        this.currentTimer = timerType;
        this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
        return this.timers[timerType];
    };
    displayMinutes = () => {
        const minutes = Math.floor(this.totalSeconds / 60);
        return this.formatTime(minutes);
    };
    displaySeconds = () => {
        const seconds = this.totalSeconds % 60;
        return this.formatTime(seconds);
    };
    formatTime = (time) => {
        if (time < 10) {
            return  '0' + time;
        }
        return time.toString();
    };
    start = () => {
        this.stop();
        this.isRunning = true;
        if (this.totalSeconds > 0) {
            this.timer = setInterval(() => {
                this.totalSeconds -= 1;
                console.log(this.totalSeconds);
            }, 1000);
        }
    };
    stop = () => {
        this.isRunning = false;
        clearInterval(this.timer);
    };
    reset = () => {
        this.stop();
        this.totalSeconds = 25 * 60;
    };
    updateTotalSeconds(seconds) {
        this.totalSeconds = seconds;
    }
    getTotalSeconds() {
        return this.totalSeconds;
    }
    getCurrentTime() {
        return this.currentTime$;
    }
    getCurrentTimer() {
        return this.currentTimer;
    }
    getTimers() {
        return this.timers;
    }
}
