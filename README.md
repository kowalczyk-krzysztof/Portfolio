<h1>My portfolio site</h1> 

Made with React + Redux, styled-components (CSS in JS) for CSS and Express Node.js for backend.

<h2>Notes about Redux usage:</h2>

<p>The "burger" button, which controls visibility of navbar dropdown doesn't really need to have state stored in Redux, this was done just for practice.</p>

The localization implementation is not ideal either. In a bigger project it would be better to serve different routes for different languages (e.g with a prefix like "pl") but for a small project with not much text, I think it makes sense to use Redux. Storing the text in a JavaScript object isn't the best practice either, but it works fine for this project.

<h2>Notes about CSS and form validation:</h2>
<p>I intentionally didn't want to use any libraries/frameworks for implementing CSS and form validation. As mentioned before, the goal was to practice so I wanted to write my own CSS and form.</p>
