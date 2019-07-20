import React, {Component} from 'react'

export default () => (
    <main>
        <article>
            <h1>Hello, World!</h1>
            <p className="mission">
                Otzaf is <strong>privacy</strong> first. This is reflected in our software and our revenue model.
                Our mission is to provide software for the people - not profit. Most of our software is open source to give back to the community.
            </p>
        </article>

        <hr/>

        <article>
            <h2>Where we're headed</h2>
            <p>
                Our primary revenue stream will be from a variety of alternative paid-for software solutions.
            </p>
            <p>
                Particular problems we're interested in tackling are data storage, email, text editors, web browsers, search engines,
                and more. We want to provide a service that is worth paying for, where you aren't the product.
            </p>
        </article>

        <hr/>

        <article>
            <h4>Contributing</h4>
            <p>
                This website itself is open source. Requests for change can be made
                on the <a href='https://github.com/otzaf/otzaf.org'>GitHub</a> page.
            </p>
            <p>
                All of the open source projects we have can be found on GitHub &mdash; any contributions
                are welcome.
            </p>
        </article>
    </main>
)