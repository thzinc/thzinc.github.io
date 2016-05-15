import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import Hero from "./index";

storiesOf("Hero", module)
	.add("Defaults", () => (
		<Hero
			heading={heading}
			content={content}
			imageUrl={sampleImage}/>
	))

let sampleImage = "http://66.media.tumblr.com/8c8faa49cdad60fa0a558d697f72cf03/tumblr_o769jxjeko1ql4ohvo1_1280.jpg";
let heading = "I am Daniel James";
let content = (
	<div>
		<p>
			I am a Christian, a husband, a software developer, and a maker.
		</p>
		<p>
			I have a fierce passion for problem solving, especially through software development. I am good at designing and implementing simple and complex software solutions. I have weaknesses and failures too. I co-founded a company in 2004 that had to close its doors in 2009. For me, saying "no" is harder than saying "yes." But because of going through a startup failure and taking a "fearless inventory" of myself, I am becoming the best me I can be.
		</p>
	</div>
);