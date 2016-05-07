import { configure } from '@kadira/storybook';

function loadStories() {
	require('../_includes/src/components/Calendar.story');
	require('../_includes/src/components/Event.story');
	require('../_includes/src/components/EventList.story');
	require('../_includes/src/components/EventCalendar.story');
}

configure(loadStories, module);