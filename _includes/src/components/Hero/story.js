import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import Hero from "./index";

storiesOf("Hero", module)
	.add("Defaults", () => (
		<Hero
			heading={heading}
			imageUrl={sampleImage}/>
	))

let sampleImage = "http://66.media.tumblr.com/8c8faa49cdad60fa0a558d697f72cf03/tumblr_o769jxjeko1ql4ohvo1_1280.jpg";
let heading = "I am Daniel James";