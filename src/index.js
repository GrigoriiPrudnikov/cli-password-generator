#!/usr/bin/env node

// Import necessary modules
import chalk from 'chalk' // For colorful console output
import inquirer from 'inquirer' // For user input prompts
import getRandomInt from './getRandomInt.js' // Function to generate random integers

let symbols = 'abcdefjhijklmnopqrstuvwxyz' // Default symbols for password generation

// Ask the user for the length of the password
const passwordLength = await inquirer.prompt({
	name: 'answer',
	type: 'number',
	message: `Enter length of password: `,
})

// Check if the entered value is a number
if (Number.isNaN(passwordLength.answer)) {
	console.log(chalk.bgRed('It is not a number!'))
	process.exit(1) // Exit the script with an error code
}

// Ask the user if they want to use capital letters in the password
const isCapitals = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use capital letters in your password?',
	choices: ['yes', 'no'],
})

// Ask the user if they want to use numbers in the password
const isNumbers = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use numbers in your password?',
	choices: ['yes', 'no'],
})

// Ask the user if they want to use special symbols in the password
const isSpecialSymbols = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use special symbols in your password?',
	choices: ['yes', 'no'],
})

// Modify the symbols based on user choices
if (isCapitals.answer === 'yes') symbols += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
if (isNumbers.answer === 'yes') symbols += '1234567890'
if (isSpecialSymbols.answer === 'yes') symbols += '!@#$%&*?'

let password = ''

// Generate the password using the selected symbols
for (let i = 0; i < passwordLength.answer; i++) {
	password += symbols[getRandomInt(symbols.length)] // Append a random symbol from the modified symbols string
}

// Display the generated password
console.log(`Your password is ${chalk.magenta(password)}`)
