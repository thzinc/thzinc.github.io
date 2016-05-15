import { configure } from '@kadira/storybook';

function loadStories() {
	require('../_includes/src/components/Calendar.story');
	require('../_includes/src/components/Event.story');
	require('../_includes/src/components/EventList.story');
	require('../_includes/src/components/EventCalendar.story');
	require('../_includes/src/components/Hero/story');
	require('../_includes/src/components/Spotlight/story');
	require('../_includes/src/components/SocialProfile/story');
	require('../_includes/src/components/SocialProfileList/story');
}

configure(loadStories, module);