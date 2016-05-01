import { storiesOf, action } from '@kadira/storybook';
import React from 'react';
import Calendar from './Calendar';
import moment from 'moment';

storiesOf('Calendar', module)
	.add('Empty', () => (
		<Calendar onDayClick={onDayClick} events={emptyEvents}/>
	))
	.add('With events', () => (
		<Calendar onDayClick={onDayClick} events={randomEvents}/>
	))

let onDayClick = action('Day clicked');
let emptyEvents = [];
let randomEvents = Array.from(Array(100).keys())
	.map(() => {
		return {
			date: moment().subtract(Math.random() * 365, 'days').startOf('day').format("YYYY-MM-DD"),
			permalink: 'https://google.com',
			content: 'Some content; maybe a tweet or post or commit'
		}
	})
	.reduce((o, i) => {
		o[i.date] = (o[i.date] || [])
		o[i.date].push(i);
		return o;
	}, {})
