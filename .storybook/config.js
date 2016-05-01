import { configure } from '@kadira/storybook';

function loadStories() {
	require('../_includes/src/components/Calendar.story');
}

configure(loadStories, module);