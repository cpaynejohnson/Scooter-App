const { test, expect } = require('@jest/globals')
const Scooter = require('./scooter')

describe('Scooter class', () => {
    
test('has idNumber', () => {
//         stub constructor with the ID Number 321
const testScooter = new Scooter('321')
//         spy on contructor to see that it has the property ID Number
//         with the value 321 (str)
expect(testScooter.idNumber).toBe('321')
     })

//  const Person = require('./Person')
//  const Bag = require('./Bag')
//  const { test, expect } = require('@jest/globals')
     
//  describe('Person', () => {
//      const testPerson = new Person("Joe")
//      const testBag = new Bag(12)
     
//      test('has a name', () => {
//          expect(testPerson.name).toBe("Joe")
//      })
     
//      test('has a bag', () => {
//          testPerson.addBag(testBag)
//          expect(testPerson.bags.length).toBe(1)
//          //expect(testBag.bags[0]).toBe(testBag)
//      })
     
//  })