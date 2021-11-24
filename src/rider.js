class Rider {
    constructor(name, password, cardNumber,email, phoneNumber, startTime, endTime){
        this.name = name
        this.password = password
        this.cardNumber = cardNumber
        this.email = email
        this.phoneNumber = phoneNumber
        this.startTime = startTime;
        this.endTime = endTime;  
           
    }

    totalPayment(){
        return (this.endTime - this.startTime) * 0.15 + 1
    }

}   
let r1 = new Rider ("Me", "topsecret", "375894", "me@nomail.com", "214-777-9311", 1730, 1811)
console.log(r1.totalPayment())


module.exports = Rider