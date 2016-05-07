import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import EventList from './EventList';
import { events } from '../sampleData'

storiesOf('EventList', module)
	.add('Defaults', () => (
		<EventList events={events}/>
	))