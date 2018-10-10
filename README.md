# NEWNORMAL LOVES GEEKHUB

This is a landing page for [GeekHub 8](http://geekhub.ck.ua) opening event based on [neal-react](http://www.github.com/dennybritz/neal-react), reactjs components for building landing pages.

## Develop locally

Transpile the Javascript using Babel and watch for changes:

```bash
git clone git@bitbucket.org:n3wnormal-dev/nn-loves-gh.git
cd nn-loves-gh
npm install
npm run watch
```

Run with webpack:

```bash
npm run serve
```

Run inside a docker container:

```
docker run -p 3000:80 -v "$PWD"/public:/usr/local/apache2/htdocs/ httpd:2.4
```

Visit `http://<YOUR_DOCKER_MACHINE_IP>:3000`
