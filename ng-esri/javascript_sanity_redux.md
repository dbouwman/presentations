## Javascript Sanity Redux

aka How we built ArcGIS for Open Data

- 3 parts Public UI, Admin UI, Dev Process 
- previous version of this talk -- UPLOAD TO YOUTUBE ADD URL
- talked with people - felt like http://coarpk.files.wordpress.com/2014/05/drinking-from-firehose.jpg

## Open Data Goals
- UX Driven Development
- fast page load
	- minimize number of requests
	- compiled javascript 	
- wicked fast ui
	- preloads where ever possible 
- i18n - 26 languages
- supportable (aka tested) code

## Backbone 
- Just a library
- 1600 lines, including a lot of comments
- models/collections, views, controllers(ish) and a router.
- Easy to understand!
- Lots of examples + docs (15,000 questions on Stackoverflow.com)
- It's an Axe - easier than using your hands
- https://farm9.staticflickr.com/8100/8504153041_dd0ae0fcce_b.jpg

### Marionette
- builds on Backbone 
- removes a lot (~30%) boilerplate code
- crozz-cut-saw https://farm4.staticflickr.com/3227/2869638857_a3317752b5_b.jpg

### Pros
- Provide 'just-enough' structure, but virtually unlimited options
	- d3 integration
	- recline.js
	- separation of js api 	
- Great tooling - grunt + jasmine
- Allowed us to create the UX exactly the way we wanted it
- Allowed us to have rails render ANY PAGE, and then "light-up" BB/M as a SPA
- Testable ~700 automated javascript unit tests - run in ~2s


### Cons
- Even with Marionette - lots of code. It's all "simple", with consistent patters, so no parts of the codebase are "whoa - watch your step!"

### Summary
- Cognative Load: low
- Productivity: medium
- ease of maintenance: high



## AngularJs
- declarative javascript application framewokr
- super popular

<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=angularjs,+backbone.js&date=1/2012+25m&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>

- still small compared to jquery

<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=angularjs,+backbone.js,+jQuery&date=1/2012+25m&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>

- Alignment with our Web-Componenty future
- 
- compound miter saw https://farm9.staticflickr.com/8029/8067085392_0428d95646_b.jpg
- feller buncher https://farm7.staticflickr.com/6145/5932386466_f36944d6f6_b.jpg

### Pros
- massive communnity (~44,000 questions on SO)
- lots of components 
	- ng-modules.org
	- ui-bootstrap
- Built-in, declarative data-binding, 
	- shines when you are building editing interfaces - like an Admin UI.
- declarative validation: hawtness
- Software Engineering-y
	- separation of concerns - controllers, services, 
	- first class testing - unit and end-to-end 
	- Dependency injection makes testing "easier", componentize things from the outset
- Great tooling - yeoman scaffolder, karma test runner, protractor

### Cons
- complex. well summarized by:
- http://www.bennadel.com/resources/uploads/2013/feelings_about_angularjs_over_time.png
- big gulf between the "Hello World" apps and production ready, internationalized, well-factored code
- tons of "intro level" help, very limited info on building large apps
	- yo angular app layout is actually "bad" for large apps!
- Cognative Load: High
- Productivity-once-you-know-what-you-are-doing: very high


## Modern Tooling
- yeoman 
	- bootstrap your app in seconds 
	- handy way to get started, but scaffolders tend to be very "opinionated"
- grunt - automate all the things
	- serve a local copy of your app
- livereload
	- see changes as you make them
- automated tests
	- if it's not automatic, you won't run them :)
- sass and friends
	- css pre-compilers for the win
	
- javascript "build" process
	- combine & uglify your code
	- fewer requests == faster app
	
	 		  		 
