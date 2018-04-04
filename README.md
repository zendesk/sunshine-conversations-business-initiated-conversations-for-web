# Business Initiated Conversations on Web

This is a recipe for triggering an event on a website that causes a message to be sent to a new user.

# How it works

When you run the web server included with this sample code, a website will be served with a Smooch Web messenger instance and a button element that triggers a server-side event. The web server listens for this event and sends a message to the Smooch user when triggered. If no user exists already one is created on the client before triggering the event.

# Get started

1. Create a _.env_ file and fill in the environment variables based on the contents of _.env.example_.
2. Run `npm install`.
3. Run `npm start`.
4. Visit `http://localhost:<the_port_you_configured>` in your browser.
