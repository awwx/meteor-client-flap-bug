collection-flap-bug
===================

A client collection flaps (deletes and re-adds documents) on
reconnect.

To easily control when the client has a connection to the server, the
`tests` directory contains an HTTP reverse proxy which forwards
connections from port 4000 to port 3000.

To reproduce the bug:

1. Start Meteor in the app directory.

2. In a second terminal window, cd into tests, npm install, and run
`node proxy.js`

3. In the browser, open `localhost:4000`, and open the dev console.
Wait for "Connected: true".  In the console you will see six documents
added.

4. In the proxy terminal window, ^C to kill the proxy.  In the browser
window, wait for "Connected: false".

5. In the proxy terminal window, start the proxy again.  In the
browser window, wait for "Connected: true".

6. In the browser console, see the documents removed and re-added.
