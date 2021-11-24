class Scooter {
    constructor(idNumber,pickUp,dropOff, checkedOut) {
        this.idNumber = idNumber
        this.pickUp = pickUp
        this.dropOff = dropOff
        this.checkedOut = checkedOut
    }

    static chargeStation = ["Uptown", "Deep Ellum", "Downtown", "SMU"]

    isCheckedOut (checkedOut) {
        if (this.checkedOut === "Y" ) {
            return true
        } 
        else if (this.checkedOut === "N") {
            return false
        }

    }

}

let s1 = new Scooter (3, "Uptown", "Downtown", "Y" )
console.log(s1.isCheckedOut())

module.exports = Scooter