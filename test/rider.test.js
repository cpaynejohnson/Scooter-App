const { test, expect } = require('@jest/globals')
const Rider = require("../src/rider")

describe('Rider class', () => {
    
    test('all Rider parameters', () => {
        const testRider = new Rider("Big Tex", "cowboy1", "214.469", "tex@nomail.com", "214-777-9311", 1115, 1217)
        expect(testRider.name).toBe("Big Tex")
        expect(testRider.password).toBe("cowboy1")
        expect(testRider.cardNumber).toBe("214.469")
        expect(testRider.email).toBe("tex@nomail.com")
        expect(testRider.phoneNumber).toBe("214-777-9311")
        expect(testRider.startTime).toBe(1115)
        expect(testRider.endTime).toBe(1217)

    })

    test('Total Payment method', () => {
        const testRider = new Rider("Big Tex", "cowboy1", "214.469", "tex@nomail.com", "214-777-9311", 1115, 1217)
        expect(testRider.totalPayment()).toBe(16.3)
    })
 })