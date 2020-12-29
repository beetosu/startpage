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
            <div>
                <h2>To Do:</h2>
                <ul className={styles.tasklist}>
                    {this.props.cards.map((card) => (
                        <a href={card.url}><li id={card.id}>{card.labels.map((label) => ("["+label.name+"]"))} {card.name}</li></a>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TaskList