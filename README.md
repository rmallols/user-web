user-web
========
The current project aims to be an example about how to get rid of some functional specification within an AngularJs-based stack.

It covers the following features:
<a href="https://github.com/rmallols/user-web/issues/1" target="_blank">Create a 'Navigation bar' component</a></br></br>
<a href="https://github.com/rmallols/user-web/issues/2" target="_blank">Create a 'Search with Auto-suggest' mechanism</a></br>

Please note some of the requirements specified above could look strange from both end user and technical perspectives.
This is not that important as the goal is just try to demonstrate how to deal with some problems that could be potentially realistic.
Please take a look to the work log of the issues above in order to have a better feeling about this.

Additional facts & figures:
* The project has been plan such a some kind of micro-sprint, following the very basic Agile guidelines about development lifecycle.
* Most of the business logic belongs to two components: the navigation bar and the search mechanism. Consequently, some directives and services have been created in order to keep domains as much identified as possible.
* The original code base layout has been slightly refactored in order to keep the related resources as closer as possible.
* The jQuery library has been added. LESS was intented to be added as well, but it has not been possible because the project has to run from a local environment, without the help of any HTTP server (consequently some capabilities are not working here for security reasons, such as the XHR / Ajax).
Because of this very same reason, the master-detail dependency between the search results and the main view is not as smooth as desired (see <a href="https://github.com/rmallols/user-web/issues/2" target="_blank">#2</a> for details).
* Some tests have been added in order to keep an eye on TDD.
* The promises pattern has been used within the mock service responsible to retrieve movies in order to keep the rest of the application isolated from the asynchrony problem.
* Some CSS3 basic features have been added (i.e. an approach to the flex-box pattern to vertically align the search results text with its sibling thumbnail).
* Anonymous / immediate functions have been used to avoid propagating content to the object window.
* JSDoc has been used to document the public methods of the given services.
* The array notation pattern is applied as a good practice in order to prevent potential problems with further concatenation / minification steps.

