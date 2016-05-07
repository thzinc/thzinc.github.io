import moment from 'moment'
import Calendar from "./components/Calendar"

export let twitterEvent = {
	key: moment("Mon, 18 Apr 2016 03:50:45 +0000").format(Calendar.ISO8601),
	type: "twitter",
	author: "thzinc",
	authorLink: "https://twitter.com/thzinc",
	pubDate: "Mon, 18 Apr 2016 03:50:45 +0000",
	description: '<![CDATA[<p class="TweetTextSize TweetTextSize--26px js-tweet-text tweet-text" lang="en" data-aria-label-part="0">I just answered <a href="https://twitter.com/smartereveryday" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="315465682"><s>@</s><b>smartereveryday</b></a>\'s question, &quot;Where does the gold become blue?&quot; (Page by <a href="https://twitter.com/thzinc" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="69227039"><s>@</s><b>thzinc</b></a>) <a href="https://twitter.com/hashtag/GoldBecomesBlue?src=hash" data-query-source="hashtag_click" class="twitter-hashtag pretty-link js-nav" dir="ltr"><s>#</s><b>GoldBecomesBlue</b></a> <a href="https://t.co/u0YSHqbhtz" rel="nofollow" dir="ltr" data-expanded-url="http://thzinc.com/where-does-the-gold-become-blue/" class="twitter-timeline-link" target="_blank" title="http://thzinc.com/where-does-the-gold-become-blue/"><span class="tco-ellipsis"></span><span class="invisible">http://</span><span class="js-display-url">thzinc.com/where-does-the</span><span class="invisible">-gold-become-blue/</span><span class="tco-ellipsis"><span class="invisible"> </span>…</span></a></p>',
	link: "https://twitter.com/thzinc/status/721908803290013696",
};

export let tumblrEvent = {
	key: moment("Sat, 19 Mar 2016 08:00:54 -0700").format(Calendar.ISO8601),
	type: "tumblr",
	author: "thzinc",
	authorLink: "https://blog.thzinc.com",
	pubDate: "Sat, 19 Mar 2016 08:00:54 -0700",
	description: '<img src="http://66.media.tumblr.com/396f46d88334be6b19711dae33cefb60/tumblr_o4akdiUXp91qk2mcko1_500.jpg"/><br/><br/>',
	link: "http://blog.thzinc.com/post/141312282995",
};

export let events = [ twitterEvent, tumblrEvent ];