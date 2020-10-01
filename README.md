# circleci-nightwatchjs-with-selenium

This is an example project for using nightwatchjs with selenium on CircleCI

## Install

```
npm install
```

## Download selenium

```
curl -O https://selenium-release.storage.googleapis.com/3.6/selenium-server-standalone-3.6.0.jar
```

## Run

```
java -jar selenium-server-standalone-3.6.0.jar -log selenium.log &&
npm run test
```