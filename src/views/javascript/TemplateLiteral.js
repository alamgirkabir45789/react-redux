const a=5;
const b=6;
console.log(`${a+b}
This is tab
`)

function modifier(strings,...values){
const m=strings.reduce((prev,current)=>{
    return prev+current+(values.length? "Mr. "+values.shift():"");
},"")
return m;
}
var name1="Kabir";
var name2="Sakib";
console.log(modifier`First Place${name1}and second Place ${name2}`)

const car={
    name:'BMW',
    color:'Red',
    weight:'1000KG',
    drive:function(){
        this.stop();
        console.log(this.name+' is driving');
    },
    stop:function(){
        console.log("Car is Stop")
    }
}

console.log(car['color']);
car.drive();