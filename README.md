# README

## Install Node Version Manager
[https://github.com/creationix/nvm](https://github.com/creationix/nvm/)
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install 10
nvm use 10
```
## Global install Parcel
[https://parceljs.org](https://parceljs.org/)

### for Ubuntu
[fix Ubuntu max_user_watches](https://github.com/parcel-bundler/parcel/issues/1427/)
```
# set only for session
sudo sysctl fs.inotify.max_user_watches=999999999

# write to system
echo fs.inotify.max_user_watches=999999999 | sudo tee -a /etc/sysctl.conf

#show
sudo sysctl --system
```
and install with disable WARNING about fsevents@^1.2.2 (this lib for mac only)
```
npm install -g --no-optional parcel-bundler
```
### for Mac
```
npm install -g parcel-bundler
```
## Init project
```
npm init
```
## Install http client SuperAgent
[https://github.com/visionmedia/superagent](https://github.com/visionmedia/superagent/)
```
npm install --safe superagent
```
## Install ReactJS
[for example - Jakob Lind blog](http://blog.jakoblind.no/react-parcel/)
* install last ECMAscript plugins: babel-preset-env
* install React syntax plugins: babel-preset-react
```
npm install --safe react react-dom babel-core babel-preset-env babel-preset-react
```
## Create Babel config file .babelrc
```
{
  "presets": ["env", "react"]
}
```
## Create index.js , index.html e.t.c or clone this project

## Add start option to scripts section file package.json
```
"scripts": {
  "start": "parcel -p 4000 index.html"
},
```
## Run server for listen 4000 port
```
parcel -p 4000 index.html
# or
npm start
```
