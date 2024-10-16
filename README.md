# Leetcode Solutions

## Description

This repository contains my solutions to various LeetCode coding challenges. Each solution is implemented in a clean and efficient manner, following best practices in software development. The problems range from easy to hard and cover various topics such as algorithms, data structures, dynamic programming, and more.

Feel free to explore the solutions, suggest improvements, or contribute by providing alternative approaches.

## Installation

To install the dependencies, run:

```sh
npm install
```

## Environment Variables

The project can load environment variables from `.env` files based on the `NODE_ENV` parameter. The following files are used:

- `.env.development` for development
- `.env.production` for production

These files are automatically loaded by the `dotenv-webpack` plugin configured in the [webpack.config.js](webpack.config.js) file.

## Scripts

Here are the available scripts you can run:

### Testing

To run the tests using Jest:

```sh
npm run test
```

### Development

To start the development server with the entry setting in the [webpack.config.js](webpack.config.js) file:

```sh
npm run start:dev
```

### Production

To start the production server with the entry setting in the [webpack.config.js](webpack.config.js) file:

```sh
npm run start:prod
```

### Build for Development

To build the project for development:

```sh
npm run build:dev
```

### Build for Production

To build the project for production:

```sh
npm run build:prod
```

### Build for Testing

To build the project for testing:

```sh
npm run build:test
```

## Author

Evren Yeniev

## License

This project is licensed under the ISC License.
