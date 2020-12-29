import styles from "../styles.module.css"

class Search extends React.Component {
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
            <div className={styles.search}>
                Search
            </div>
        )
    }
}

export default Search