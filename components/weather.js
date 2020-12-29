import styles from "../styles.module.css"

class Weather extends React.Component {
    constructor() {
		super()
		this.state = {}
        this.alterState = this.alterState.bind(this)
	}

    componentDidMount() {

	}

    alterState() {

	}

    render() {
        let d = new Date()
        let weatherReport = this.props.forecast.properties.periods
        return (
            <div className={styles.weather}>
                <h2>Forecast ({this.props.forecast.location})</h2>
                <ul>
                    <li>{d.getHours()}:00 - {weatherReport[0].temperature}°F ({weatherReport[0].shortForecast})</li>
                    <li>{(d.getHours()+6)%24}:00 - {weatherReport[6].temperature}°F ({weatherReport[6].shortForecast})</li>
                    <li>{d.getMonth()+1}/{d.getDate()} - {weatherReport[25].temperature}°F ({weatherReport[25].shortForecast})</li>
                </ul>
            </div>
        )
    }
}

export default Weather