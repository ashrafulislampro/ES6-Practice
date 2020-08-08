const person = {name : `Lipi bod`, age: 18, job :`khaladola`, bfName :`kamrol` , phoneNum : `017990087` };
// const bfName = person.bfName;
// const  phoneNum = person.phoneNum;
 
// const {phoneNum,bfName, age, name, job} = person;


// console.log(bfName, phoneNum, bfName, job, age);

const friends = ["Arman Khan", "Amir Khan", "Kota khan", "Bilai Khan"];
const [firstFriends, nextFriends, ...restFriends] = friends;
console.log(restFriends);



const complexObject = {
    name : 'abe',
    info :{
        address : 'kola bagan',
        leader : 'tiger keu'
    }
}
const {leader} = complexObject.info;
console.log(leader);