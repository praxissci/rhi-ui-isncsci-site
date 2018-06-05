# Introduction 
*rhi-u-isncscii* contains reusable user interface [web components](https://www.webcomponents.org/introduction) for the ISNCSCI project.
We are currently using [Google Polymer](https://www.polymer-project.org/) for our syntactic sugar.

#Why do I (EE) make you suffer with this?
It has been my experience, after many years in the industry, that when it comes to the UI we let whatever framework we are using for an app dictate how the interface code will be written.
As engineers we are always trying to build modular, reusable code but that has been a very challenging thing to achieve on the UI.
JQuery and Atomic design got us close but not there yet.  AngularJS moved us backwards in that respect.
The recent [Custom Elements Specification](https://w3c.github.io/webcomponents/spec/custom/) is finally moving us into the future and allows us to build well engineered components that can be reused, no matter what architecture is being followed.
If it runs on the web platform, it will work.
By following *Clean Architecture* approaches and *web components* standards we can finally live up to our loftiest engineering goals.

#Getting Started
1. Make sure you have access to our npm stream by adding our key to your local *.npmrc* file.  Ask the team if you do not know what that means.
2. *git clone https://github.com/rick-hansen-institute/rhi-ui-isncsci.git*
3. *npm install*

#Build
There are currently no build steps required. When we move to HTML packages and ditch HTML imports we will probably start coding with *Type Script*.

#Demo and Test
Each folder in this package contains an individual *web component* with its own *demo* and test *folder*.
In your browser, open the *test/index.html* file to run the tests for a particular component.
In your browser, open the *demo/index.html* file to view the demo for a particular component.

#Contribute
When working on this project, follow these steps:
1. Make sure you are working on a branch associated to a user story.
2. Add unit tests when appropriate.
3. When you are done building your component, add a demo page for it.
4. Review your changes and commit your code.

#Publish
To update the npm package, so that the changes can be consumed by the apps:
1. Increase the package version in *package.json*.
..* Currently, as we are in development, if the changes will break any of the apps, increase the minor version.
..* If the changes enhance functionality and won't break any of the apps, just increase the patch version.
..* Once we have a production build, stick to [Semantic Versioning](http://semver.org/).
2. Run *npm publish*

#Polymer 3
https://www.polymer-project.org/3.0/toolbox/build-for-production

polymer build