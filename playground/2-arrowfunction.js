// const square = function(x){
//     return x=x
// }

const square = (x) => x = x

console.log(square(3))

const event = {
    name: 'Birthday Party',
    GuestList: ['Andrew','Jen','Mike'],
    PrintGuestList(){
        console.log('Guest List for ' + this.name)
        this.GuestList.forEach((guest) => {
            console.log(guest + 'is attending' + this.name)
        })
    }
}

event.PrintGuestList()