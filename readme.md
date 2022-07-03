## Install

> NPM

```
$ npm i text-regex
```

## Usage

## check Email

```js
var textRegex = require('text-regex');

textRegex.checkEmail('foobar')
// false
textRegex.checkEmail('example@mail.com')
// true
```

## check Date

```js
var textRegex = require('text-regex');

textRegex.checkDate('2022-01-01')
// true


textRegex.checkDate('foobar')
// false
textRegex.checkDate('2022-1-1')
// false
textRegex.checkDate('0000-01-01')
// false
```

## check URL

```js
var textRegex = require('text-regex');

textRegex.checkUrl('https://example.com')
// true
textRegex.checkUrl('http://example.com')
// true

textRegex.checkUrl('foobar')
// false
textRegex.checkUrl('example.com')
// false (don't missing https:// or http://)
```

## check Latitude

```js
var textRegex = require('text-regex');

textRegex.checkLatitude('37.532600')
// true

textRegex.checkLatitude('foobar')
// false
textRegex.checkLatitude('37532600')
// false
```

## check Longitude

```js
var textRegex = require('text-regex');

textRegex.checkLongitude('127.024612')
// true

textRegex.checkLongitude('foobar')
// false
```