import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import EventCalendar from './EventCalendar';
import { events } from '../sampleData'

storiesOf('EventCalendar', module)
	.add('Defaults', () => (
		<EventCalendar events={events}/>
	))