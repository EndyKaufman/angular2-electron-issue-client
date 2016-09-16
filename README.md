# angular2-electron-issue-client
  Simple client for issue trackers (redmine, jira, asana, bitbucket, github)
  
  Demo: https://endykaufman.github.io/angular2-electron-issue-client
  
## Current progress of project

1. ~~Create simply version of project on Angular2, work with mock data~~
2. ~~Add webpack build system~~
3. **Create simply electron project and include angular2 builded source in to**
4. Build windows and linux version of standalone applications
5. Create resource for work with redmine bugtracker
6. Extend functional of client for work with tasks, projects, status and etc...
7. Add support github issue system

## Install
```
git clone --recursive https://github.com/EndyKaufman/angular2-electron-issue-client.git
cd angular2-electron-issue-client
npm install -g gulp karma-cli npm-check-updates bower protractor selenium-webdriver node-gyp
npm rebuild
npm install
```

## Start on dev mode
```
npm run start
```

## Buil on prod mode
```
npm run build
```

## Start builded
```
npm run lite
```
