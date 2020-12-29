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
        return (
            <div className={styles.weather}>
                Weather
            </div>
        )
    }
}

export default Weather