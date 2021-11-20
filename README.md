# biostamp-jest-preset
Biostamp Jest preset that runs both jest-mongo preset and jest-redis preset

# Usage
## 1. Installation
```sh-session
$ yarn add @biostamp/jest-preset
```

## Create a `jest.config.js` file
```javascript
module.exports = {
	preset: '@biostamp/jest-preset',
}
```

## 3. Customizations
- For details about the jest-mongo configurations, visit: [@shelf/jest-mongo](https://github.com/shelfio/jest-mongodb)
- For details about the jest-redis configurations, visit: [jest-redis](https://github.com/elonsalfati/jest-redis)
