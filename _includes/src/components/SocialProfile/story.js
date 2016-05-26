import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import SocialProfile from "./index";
import { socialProfiles } from '../../sampleData'

storiesOf("SocialProfile", module)
	.add("Sample 1", () => (
			<SocialProfile socialProfile={socialProfiles[0]} />
	))
	.add("Sample 2", () => (
			<SocialProfile socialProfile={socialProfiles[1]} />
	))
	.add("Sample 3", () => (
			<SocialProfile socialProfile={socialProfiles[2]} />
	))
	.add("Sample 4", () => (
			<SocialProfile socialProfile={socialProfiles[3]} />
	))

let socialProfile = socialProfiles[0];