const { test, expect } = require('@jest/globals')
const Scooter = require("../src/scooter")

describe('Scooter class', () => {
    
    test('all Scooter parameters and method', () => {
        const testScooter = new Scooter('321', "Downtown", "SMU", "Y")
        expect(testScooter.idNumber).toBe('321')
        expect(testScooter.pickUp).toBe("Downtown")
        expect(testScooter.dropOff).toBe("SMU")
        expect(testScooter.checkedOut).toBe("Y")
        expect(testScooter.isCheckedOut()).toBe(true)
    })
    
     
})