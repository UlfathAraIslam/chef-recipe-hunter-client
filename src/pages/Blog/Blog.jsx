import React from 'react';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';
import Footer from '../Shared/Footer/Footer';


const Blog = () => {
    return (
        <div className='container'>
            <Navigationbar></Navigationbar>
            <div className='mt-5'>
            <div>
                <h3>Differences between uncontrolled and controlled components.</h3>
                <p>
                    <ul>
                        <h3>Uncontrolled Components:

                        </h3>
                        <li>The state of the component is managed internally by the browser using the DOM.</li>
                        <li>The data entered by the user is directly accessed from the DOM through the ref attribute, instead of being controlled by React state</li>
                        <li>Uncontrolled components are less verbose and faster to set up, but harder to maintain in complex scenarios.</li>
                    </ul>
                </p>
                <p>
                    <h3>Controlled Components:</h3>
                    <ul>
                        <li>The state of the component is managed by React using state and props.</li>
                        <li>The data entered by the user is stored in the component's state, which is updated through event handlers.</li>
                        <li>Controlled components are more verbose and slower to set up, but provide better control and flexibility over the component's behavior.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h3>How to validate React props using PropTypes</h3>
                <p>
                    React is a library that heavily relies on component-based architecture and the passing of props. PropTypes is a package that allows developers to enforce type checking on React props, ensuring that they meet the expected data type and shape.</p>
            </div>
            <div>
                <h3> the difference between nodejs and express js.</h3>
                <p>
                    <h3>Node.js:

                    </h3>
                    <ul>
                        <li>A runtime environment for executing JavaScript code outside of a web browser</li>
                        <li>Supports server-side scripting, networking, and building command-line tools
                        </li>
                        <li>Can be used to create standalone applications or as a backend for web applications
                        </li>
                    </ul>
                </p>
                <p>
                    <h3>Express.js:</h3>
                    <ul>
                        <li>A web framework built on top of Node.js</li>
                        <li>Provides a set of features for building web applications such as routing, middleware, and template engines</li>
                        <li>Makes it easier to handle HTTP requests and responses in a structured way</li>
                        <li>Extensible through the use of third-party middleware and plugins
                        </li>
                        <li>Can be used with other libraries and frameworks to build complex web applications</li>
                    </ul>
                </p>
            </div>
            <div>
                <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <p>
                    In React, a custom hook is a reusable function that encapsulates some common logic which can be shared across different components in an application. It allows you to extract and reuse stateful logic from a component to make it more modular, composable, and easy to understand.

                    Custom hooks are created to solve a specific problem that can be shared across multiple components. They can simplify the code and make it more reusable by abstracting away some of the implementation details. For example, you could create a custom hook that handles form input validation, so you don't have to repeat the same code in multiple components.

                    Creating a custom hook can help you to organize your code better, make it easier to test, and reduce code duplication.
                </p>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;