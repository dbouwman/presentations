# Choosing A [JS]Framework

TLDR Version of the talks


# Framework Considerations
 **NOTE** This is still in progress and is meant to be a forum to layout the various considerations that go into the selection of a front-end framework.

## Framework Abbreviations
- bb: Backbone
- bb + m : Backbone + Marionette
- amp: AmpersandJs
- ng 1.x: Angular 1.x
- ng 2.x; Angular 2
- em: EmberJS


## Developer On-Boarding
Rough measure of the difficulty of bringing a new developer into the framework. We assume a reasonable background in javascript

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| Readable Source    | 9 | 8 | 9 | 1 | 1 | 1 |
| Learning Curve | 3 | 4 | 4 | 8 | 8 | 5* |
| Resources      | 9 | 8 | 5 | 9 | 5 | 5** |


- \* although ember has a lot of concepts, the "Ember Way" makes it much easier to get into. 
- \** the ember community is very focused on having a "right way" to do things, based on collective experience, so while there are fewer resources, then tend to be the "chosen" way vs. 13 different options on solving a problem.

## developer productivity
Assuming a developer has a good understanding of the framework, what additional productivity features exist, in the framework or the community

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| Scaffolding 			| 2 | 3 | 5 | 4 | 2 | 9 |
| API integration 		| 5 | 5 | 5 | 3* / 8** | 3* / 8** | 8 |
| Informative Errors 	| 6 | 6 | ?? | -5 | ?? | 9 |
| Browser Tooling 		| 8 | 8 | ?? | 7 | ? | 9 |


- \* using custom written services 
- \** using restify

Angular 1.x errors are horrible nested messes - mainly due to the DI system, and you rarely if ever get a line number or a file.

Embers errors are (very) informative, and usually tell you how to fix the problem. They are almost coaching the developer through the process.

Chrome extensions for debugging Backbone, Marionett, Angular and Ember exist. One is under discussion for Ampersand.


## team productivity
How well suited is the framework to use on a large, distrubuted team. Does it require a benevolent dictator on the team to create and maintain order, or does the framework have it's own means to maintain consistenty?

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| Consistent project layout    | 0 | 2 | 5 | 0 | 2* | 9 |
| cli tooling                  | 5 | 5 | 7 | 3 | 2* | 9 |
| "right way"                  | 0 | 0 | 7 | 3 | 5  | 9 |
| out of the box build process | 0 | 0 | 3 | 1 | 2  | 9 |
| extensible build process 	    | 9 | 9 | 8 | 8 | 2* | 7 | 

- Ember uses Broccoli, which has all the *main* tasks, but it's community is not nealy as large as grunt/gulp/browserify, which the others can use. That said, it is *the* build system used by the ember community, so it's likely feature complete.
- There are plans for Angular 2.x to have mroe consistent project layout, cli tooling.

## Product Evolution Features

| feature | bb | bb + m | amp | angular | em | 
| --- | --- | --- | ---| --- | --- | 
| API Stability | 9 | 9 | 9 | 0 | 9 |



- Backbone is "done" and is not expected to have any changes
- Marionette & Ampersand adheres to strict semver
- Angular 2.0 is completely different from Angular 1.0, essentially requiring complete re-writes of the applications.
- Ember will not introduce breaking changes w/ 2.0. All new features are on master behind feature flags


## Performance
| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| SSR? | 5* | 3 | 1 | 1 | 1 | 8** |
| Virtual DOM Diffing | 0\# | 2 | 0 | 2\# | 6\# | 9 |
| Defered modules Loading | 3 | 3 | 3 | 0 | ?? | 7 |

- \* via [Rendr](https://github.com/rendrjs/rendr) ** via [FastBoot](https://www.npmjs.com/package/ember-fastboot)
- \# backbone has a react plugin, marionette has some virutal dom views, Angular 1.x has a react integration, Angular 2.x and Ember will/do have built in VDD
- Ember will use a virtual DOM diffing, based on React's ideas, building on HTMLBars - [Glimmer](https://github.com/emberjs/ember.js/pull/10501)

## Dependencies

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| jquery 32Kb       | Y | Y | N | N | N | Y |
| underscore 5.8Kb  | Y | Y | Y | N | N | N |
| handlebars 7.1kb  | N | N | N | N | N | Y |
| weight            | ? | ?  | ?  | 47kb |  | 109kb | 

## Constraints

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| IE8? | Y | Y | N | N | N | Y |
| IE9? | Y | Y | Y | Y | N | Y |
| i18n | Y | Y | Y | Y | Y | Y |

- No framework has built-in i18n support.
- All can use any i18n module... but..
- Angular: ng-translate
- Ember: ember-i18n (still deps on Handelbars)


## Future Oriented

| feature | bb | bb + m | amp | ng 1.x | ng 2.x | em | 
| --- | --- | --- | ---| --- | --- | --- |
| ES6? | 0 | 5 | 6 | 1 | 8 | 9 |
| Typed Script? | 3 | 3 | 3 | 5 | 9 | 3 |
| Web Components| 0 | 3 | 5 | 3 | 7 | 9 |

- Ember.Component is very consiously tracking Web Component APIs
- Ember CLI based projects can use ES6 now, and use 6to5 to transpile
- Angular 2.0 is expected to lean towards web components

# Framework Specific Notes

## Backbone
- First MV* framework
- lots of repetitive code 
- best if you need a lot of flexibility, small footprint

## Backbone + Marionette
- Add more opinions to backbone
- less boilerplate code
- best if you like backbone, want slightly more structure

### Ampersand
- newer backbone
- very module - pull in the packages you want, nothing more
- very light-weight, no jquery dependency
- best if: want a very modern backbone, very light on the wire

## Angular 1.x
- huge community, and is very easy to get simple apps started, 
- steep learning curve
- little consensus on building larger apps. 
- very large number of existing directives/components
- best if: building line-of-business "forms over data"

## Angular 2.x
- breaking changes from 1.x
- many new concepts from 1.x
- have committed to: 
   - some migration path
   - some cli tools for more consistent projects 
- virtual dom diffing 

## Ember
- Project is oriented on stability w/o stagnation. 
- Ember 2.0 features are developed on the 1.0 master, behind feature flags
- The in-browser error messages are great 
- Ember-CLI helps enforce structure and naming
- CLI errors are also very very informative
- Glimmer rendering engine based on virtual-dom diffing informed by the HtmlBars templates
- Server-Side Rendering should more than offset the larger payloads usually associted with Ember applications. 


