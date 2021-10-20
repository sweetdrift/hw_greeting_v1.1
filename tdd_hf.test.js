const { expect } = require('@jest/globals')
const greet=require('./tdd_hf')


it('Should greet Bob correctly', () => { 

  expect(greet(value='Bob', value2='', value3='')).toBe('Hello, Bob!') 
})

it('Should greet anonymous correctly', () =>{

  expect(greet(value='')).toBe('Hello, my friend!')
})

