import styles from "../styles.module.css"

class Title extends React.Component {
    constructor() {
        super()
        this.alterTimezone = this.alterTimezone.bind(this)
        this.alterMilitaryTime = this.alterMilitaryTime.bind(this)
        this.daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.nativeTZ = -5
        this.timezones = [
            {"title": "EST", "difference": -5},
            {"title": "PST", "difference": -8},
            {"title": "JST", "difference": 9}
        ]

        let d = new Date()
        this.state = {
            hour: d.getUTCHours(),
            minute: d.getMinutes(),
            day: this.daysOfTheWeek[d.getDay()],
            currentTZ: 0,
            inMilitaryTime: true
        }
	}

    componentDidMount() {
        let d = new Date()
        let newState = this.state
        newState.hour = d.getUTCHours()
        newState.minute = d.getMinutes()
        newState.day = this.daysOfTheWeek[d.getDay()]
		this.setState(newState)
	}

    alterTimezone() {
        let newState = this.state
        newState.currentTZ = ((newState.currentTZ + 1) % this.timezones.length)
		this.setState(newState)
    }
    
    alterMilitaryTime() {
        let newState = this.state
        newState.inMilitaryTime = !newState.inMilitaryTime
        this.setState(newState)
    }

    render() {
        let timezone = this.timezones[this.state.currentTZ]        
        let nativeHour = (this.state.hour - this.nativeTZ) % 24
        if (nativeHour < 0) nativeHour = 24 - nativeHour*-1
        let timeofDay = nativeHour < 12 && nativeHour > 5 ? "Morning" : nativeHour >= 12 && nativeHour < 18 ? "Afternoon" : "Evening"

        let currentMin = this.state.minute.toString()
        if (currentMin.length < 2) currentMin = "0" + currentMin

        let currentHour = this.state.hour + timezone["difference"]
        if (currentHour < 0) currentHour = 24 - currentHour*-1

        let outputtedTime = (currentHour % 24).toString() + ":" + currentMin
        if (!this.state.inMilitaryTime) {
            outputtedTime = (currentHour % 12).toString() + ":" + currentMin
            currentHour % 24 >= 12 ? outputtedTime += "PM" : outputtedTime += "AM"
        }
        return (
            <div className={styles.title}>
                <h1>Good {timeofDay}</h1>
                <p>Today is {this.state.day}, the time is 
                <button onClick={() => this.alterMilitaryTime()}>{outputtedTime}</button> 
                <button onClick={() => this.alterTimezone()}>{timezone["title"]}</button></p>
                
            </div>
        )
    }
}

export default Title