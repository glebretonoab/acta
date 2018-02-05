## Prerequisites
*Make sure you have Node version >= 6.0 and NPM >= 3*

### Quick start

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone git@git-oab.si.fr.intraorange:EQT1314701A/acta-new-design.git

# change directory to our repo
cd acta-new-design

# install Yarn
npm install --global yarn

# Install dependencies
yarn install

# Start the webserver with Hot Module Remplacement (HMR) by default
yarn start

# Create a production bundle
yarn run build
```
Go to [http://localhost:8080](http://localhost:8080) in your browser
