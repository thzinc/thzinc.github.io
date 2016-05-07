import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './EventCalendar.css'
import EventList from './EventList'
import Calendar from './Calendar'

class EventCalendar extends Component {
	render() {
		let eventsByKey = this.props.events
			.reduce((o, event) => {
				o[event.key] = o[event.key] || [];
				o[event.key].push(event);
				return o;
			}, {})

		return (
			<div>
				<Calendar events={eventsByKey} eventSelector={e => e.length} onDayClick={e => null}/>
				<EventList events={this.props.events}/>
			</div>
		);
	}
}

EventCalendar.propTypes = {
	events: PropTypes.array.isRequired
};

export default CSSModules(EventCalendar, styles);