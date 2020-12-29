import styles from "../styles.module.css"
import TaskList from "../components/tasklist"
import Calendar from "../components/calendar"
import Weather from "../components/weather"
import Search from "../components/search"

export default function Panels({cards}) {
    return (
        <div className={styles.panels}>
            <TaskList cards={cards}/>
            <br/>
            <Calendar />
            <br/>
            <Weather />
            <br/>
            <Search />
        </div>
    )
}