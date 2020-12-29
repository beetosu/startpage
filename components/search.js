import styles from "../styles.module.css"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {query: ''}
        this.engines = {
            "g": "https://www.google.com/search?q=",
            "l": "https://letterboxd.com/search/",
            "y": "https://www.youtube.com/results?search_query=",
            "w": "https://en.wikipedia.org/w/index.php?search=",
            "r": "https://rateyourmusic.com/search?searchterm=",
            "g": "https://www.goodreads.com/search?q="
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
	}

    handleChange(event) { 
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        let engine = "https://www.google.com/search?q="
        let formattedQuery = this.state.query.replace(/\s/g, '+');
        if (this.state.query[0] === "!") {
            if (this.engines[this.state.query[1]] !== null) {
                engine = this.engines[this.state.query[1]]
            }
            formattedQuery = this.state.query.substring(3).replace(/\s/g, '+')
        }
        window.location = engine + formattedQuery;
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Search:
                <input type="text" value={this.state.query} onChange={this.handleChange} />
            </label>
        </form>
        )
    }
}

export default Search