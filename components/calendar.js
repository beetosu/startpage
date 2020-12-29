import styles from "../styles.module.css"

class Calendar extends React.Component {
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
            <div className={styles.calendar}>
                Calendar
            </div>
        )
    }
}

export default Calendar