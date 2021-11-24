class Rider {
    constructor(name, age, password, cardNumber,email, phoneNumber, startTime, endTime){
        this.name = name
        this.age = age
        this.password = password
        this.cardNumber = cardNumber
        this.email = email
        this.phoneNumber = phoneNumber
        this.startTime = startTime;
        this.endTime = endTime;  
         
        this.validAge = function () {
            if(this.age >= 18) {
                return true
            }
            else {
                return false
               }
        
    }

    canRide() {
        if this.validAge = true {
            return("You are able to ride...Let's go!")
        }
        else
            return("Sorry, you are not old enough to ride :(")

    totalPayment(){
        return (this.endTime - this.startTime) * 0.15 + 1
    }

}   
let r1 = new Rider ("Me", "16", "topsecret", "375894", "me@nomail.com", "214-777-9311", 1730, 1811)
console.log(r1.totalPayment())


module.exports = Rider

ageTest(){
    if(this.age >= 18){
        return('You can rent')
    }else{
        return('You cannot rent')
    }
}