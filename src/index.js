#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import getRandomInt from './getRandomInt.js'

let symbols = 'abcdefjhijklmnopqrstuvwxyz'

const passwordLength = await inquirer.prompt({
	name: 'answer',
	type: 'number',
	message: `Enter length of password: `,
})
if (Number.isNaN(passwordLength.answer)) {
	console.log(chalk.bgRed('It is not a number!'))
	process.exit(1)
}
const isCapitals = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use capital letters in your password?',
	choices: ['yes', 'no'],
})
const isNumbers = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use numbers in your password?',
	choices: ['yes', 'no'],
})
const isSpecialSymbols = await inquirer.prompt({
	name: 'answer',
	type: 'list',
	message: 'Do you want to use special symbols in your password?',
	choices: ['yes', 'no'],
})

if (isCapitals.answer === 'yes') symbols += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
if (isNumbers.answer === 'yes') symbols += '1234567890'
if (isSpecialSymbols.answer === 'yes') symbols += '!@#$%&*?'

let password = ''
for (let i = 0; i < passwordLength.answer; i++) {
	password += symbols[getRandomInt(symbols.length)]
}
console.log(`Your password is ${chalk.magenta(password)}`)
