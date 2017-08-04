# Norwegian validation

Validation according to Norwegian rules.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

Install norwegian-validation from NPM and include it in your own build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```
npm install norwegian-validation --save
```

## Usage

```
import validation from 'norwegian-validation';

validation.accountNumber(971045456512);
```

## API

### accountNumber(accountNumber)

### organizationNumber(organizationNumber)

### birthNumber(birthNumber)

### kidNumber(kidNumber)

## Commit message format and publishing

This repository is published using `semantic-release`, with the default [AngularJS Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit).
