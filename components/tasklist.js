import styles from "../styles.module.css"

class TaskList extends React.Component {
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
            <div className={styles.tasklist}>
                [Task List Goes Here]
            </div>
        )
    }
}

export default TaskList