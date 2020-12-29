import styles from "../styles.module.css"

class Calendar extends React.Component {
    constructor() {
        super()
	}

    render() {
        let d = new Date()
        let upcoming = this.props.classes.filter(uniclass => (uniclass.days.includes(d.getDay())))
        .filter((uniclass) => (parseInt(uniclass.endtime.split(":")[0]) > d.getHours() || parseInt(uniclass.endtime.split(":")[0]) === d.getHours() && parseInt(uniclass.endtime.split(":")[1]) > d.getMinutes()))
        return (
            <div>
                <h2>Classes:</h2>
                {upcoming.length !== 0 ? 
                <ul className={styles.calendar}>
                    {upcoming.map((uniclass) => (
                        <li>{uniclass.title}: {uniclass.starttime}-{uniclass.endtime}</li>
                    ))}
                </ul> : <p>no classes left today!</p>}
            </div>
        )
    }
}

export default Calendar