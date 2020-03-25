import React from 'react';
const About = () => {
    return (
        <div className='container'>
            <div className='center'>
                <h4
                    style={{ padding: '25px' }}
                    className='center teal-text text-darken-1'>
                    About Emaily
                </h4>
                <div className='container left-align'>
                    <p>
                        The Emaily app is based on the Udemy course{' '}
                        <a
                            href='https://www.udemy.com/course/node-with-react-fullstack-web-development/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='teal-text text-lighten-2'>
                            Node with React: Fullstack Web Development
                        </a>{' '}
                        by Stephen Grider.
                    </p>
                    <p>The app was made with :</p>
                    <ul>
                        <li>React / Redux</li>
                        <li>Materialize CSS</li>
                        <li>Node / Express / MongoDB / Mongoose</li>
                        <li>Passport / Google OAuth 2.0</li>
                        <li>Stripe</li>
                        <li>SendGrid</li>
                    </ul>
                    <p>The app is deployed by Heroku.</p>
                    <a
                        href='https://github.com/SandySanSan/complete-emaily-app'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn grey lighten-1'
                        style={{ margin: '40px 0' }}>
                        GitHub Repository
                    </a>
                    <p>
                        Feel free to contact me via{' '}
                        <a
                            href='https://www.linkedin.com/in/sandy-prolhac/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='center teal-text text-darken-1'>
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
