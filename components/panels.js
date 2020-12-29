import styles from "../styles.module.css"
import TaskList from "../components/tasklist"
import Calendar from "../components/calendar"
import Weather from "../components/weather"
import Search from "../components/search"

export default function Panels({cards, classes, forecast}) {
    return (
        <div className={styles.panels}>
            <Search />
            <div className={styles.lists}>
                <TaskList cards={cards}/>
                <br/>
                <Calendar classes={classes}/>
                <br/>
                <Weather forecast={forecast}/>
            </div>
        </div>
    )
}