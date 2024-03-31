import styles from "./styles.module.css"
import EventItem from "./eventitem"

const Events = ({events}) => {

    const renderEvents = () => {
        
        return events.map((eventitem) => (
            <EventItem 
                key={`event-item-${eventitem.id}`}
                img = {`https://www.artic.edu/iiif/2/${eventitem.image_id}/full/400,/0/default.jpg`}
                title = {eventitem.title}
                subtitle = {eventitem.artist_display}
            />
        ))
    }

    return (
        <div className={styles.flex_container}>
            {renderEvents()}
        </div>
    )

}

export default Events;