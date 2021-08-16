export const getBossTimeString = (left: number): string => {
    if(left > 0) {
        let days = parseInt(String(left / (24 * 60 * 60)), 10);
        let hours = parseInt(String((left % (60 * 60 * 24)) / (60 * 60)), 10);
        let minutes = parseInt(String((left % (60 * 60)) / 60), 10);
        let seconds = parseInt(String(left % 60), 10);
        let strHours: string | number = (hours < 10) ? "0" + hours : hours;
        let strDays: string | number = (days < 10) ? "0" + days : days
        let strMinutes: string | number = (minutes < 10) ? "0" + minutes : minutes;
        let strSeconds: string | number = (seconds < 10) ? "0" + seconds : seconds;

        return `${strDays}:${strHours}:${strMinutes}:${strSeconds}`;
    } else {
        return "Now!";
    }
}