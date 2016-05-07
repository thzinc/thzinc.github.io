import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './EventList.css'
import Event from './Event'

class EventList extends Component {
	render() {
		return (
			<div>
				{this.props.events.map(event => (
					<Event key={event.key} type={event.type} event={event}/>
				))}
			</div>
		);
	}
}

EventList.propTypes = {
	events: PropTypes.array.isRequired
};

export default CSSModules(EventList, styles);