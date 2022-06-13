
//*********************************************************************************************************** */
//************************************JAVASCRİPT NOTLARI***************************************************** */
//*********************************************************************************************************** */
            // CONSTRUCTOR- PROTOTYPE

// let Person=function (name,yearOfBirth,job){
//     this.job=job;
//     this.name=name;
//     this.yearOfBirth=yearOfBirth; 
// }
// Person.prototype.calculateAge=function(){
//     return 2022-this.yearOfBirth;
// }
// Person.prototype.getName=function(){
//     return this.name;
// }
// let huseyin=new Person("hüseyin",2000,"student")
// let ali=new Person("ali",1999,"developer")

// console.log(ali);
// console.log(ali.calculateAge());
// console.log(ali.getName());
// console.log(ali.hasOwnProperty('getName'));
// console.log(ali.hasOwnProperty('name'));

// let Employee= function(name, salary){
//     if (!(this instanceof Employee)) {
//         return new Employee(name,salary)
//     }
//     this.name= name;
//     this.salary=salary;
// }
// Employee.prototype.CalculateSalary=function(){
//     var month= new Date().getMonth()+1;
//     var tax=0;
//     var total=month*this.salary;
    
//     if (total<=20000) {
//         tax=total*0.2;
//     }
//     else if(total>20000 && total<=30000){
//         tax=total*0.25;
//     }
//     else{
//         tax=total*0.27;
//     }
//     return{
//         tax:tax,
//         paid:total-tax,
//         total:total
//     }
// }

// var emp1=Employee("ali",3000);
// console.log(emp1.CalculateSalary())

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

            //OBJECT CREATE
// let personProto={
//     calculateAge:function(){
//         return 2020-this.yearOfBirth;
//     }
// }

// let huseyin=Object.create(personProto,{
//     name:{value:'hüseyin'},
//     yearOfBirth:{value:2021},
//     job:{value:'unemployee'}

// })
// console.log(huseyin.calculateAge());

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

//             //INHERIT PROTOTYPE METHODS
// let Person= function(name,yearOfBirth,job){
//     this.name=name;
//     this.job=job;
//     this.yearOfBirth=yearOfBirth;
// }
// Person.prototype.calculateAge=function(){
//     return 2020-this.yearOfBirth;
// }

// let Teacher= function(name,yearOfBirth,job,subject){

//     Person.call(this,name,yearOfBirth,job);
//     this.subject=subject;
// }

// //inherit the person prototype methods
// Teacher.prototype=Object.create(Person.prototype);

// //set teacher constructor
// Teacher.prototype.constructor=Teacher;

// Teacher.prototype.salute=function(){
//     return "Hello my name is "+ this.name;
// }


// let teacher1 = new Teacher("ali",1980,"teacher","math");

// console.log(teacher1.calculateAge())
// console.log(teacher1.salute());

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

            //BUILT-IN CONSTRUCTOR
//Used when what comes in prototype is not enough
// var arr1= ['ali','veli','haci'];
// var arr2=  new Array('ali','veli','haci');

// // type.prototype.pname=fun()
// Array.prototype.remove=function(member){
//     var index = this.indexOf(member);
//     if (index>-1) {
//         this.splice(index,1)
//     }
//     return this;
// }

// console.log(arr2);
// console.log(arr2.remove('ali'));

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

                    //EXAMPLE

// function Person(name){
//     this.name=name;
// }
// Person.prototype.Introduce=function(){
//     console.log("Hello my name is"+ this.name)
// }

// function Teacher(name,branch){
//     Person.call(this,name)
//     this.branch=branch;
// }
// Teacher.prototype=Object.create(Person.prototype);
// Teacher.prototype.constructor=Teacher;

// function HeadMaster(name,branch,shareTask){
    
//     Teacher.call(this,name,branch);
//     this.shareTask=shareTask;
// }

// HeadMaster.prototype=Object.create(Teacher.prototype);
// HeadMaster.prototype.constructor=HeadMaster;

// function Student(name,number){
//     Person.call(this,name);
//     this.number=number;
// }
// Student.prototype=Object.create(Person.prototype);
// Student.prototype.constructor=Student;

// Student.prototype.study=function(){
//     console.log("my name is "+ this.name +" my number "+ this.number)
// }

// let t1= new Teacher("hasan","math");
// console.log(t1);

// let hm1= new HeadMaster("ali","bio","görevleri dağıt");
// console.log(hm1);

// let s1= new Student("Haci","112");
// console.log(s1)
// console.log(s1.study())

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

            //CALLBACK

// function MultipleByTwo(a,b,c,callback){
//     let arr=[];

//     for(i=0;i<3;i++){
//         arr[i]=callback(arguments[i]*2);
//     }

//     return arr;
// }

// function addOne(a){
//     return a+1;
// }
// function addTwo(a){
//     return a+2;
// }
// function addThere(a){
//     return a+3;
// }

// console.log(MultipleByTwo(1,1,1,addOne));

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */


            //IMMEDİATE FUNC
// (function(name){
//     var days=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
//     var today=new Date();
//     var msg="Hoşgeldin "+name+ " bugün günlerden "+days[today.getDay()];
//     window.confirm(msg); 
// }("Ali"));

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

        /// F TO F
// function Question(hobby){
//     switch (hobby) {
//         case 'car':
//             return function(name){
//                  window.confirm( "Merhaba " +name + " araban var mı?")
//             }
//             break;
//         case 'software':
//             return function(name){
//                  window.confirm( "Merhaba " +name + " en sevdiğin yazılım dili hangisi?")
//             }
//             break;
//         case 'book':
//             return function(name){
//                  window.confirm( "Merhaba " +name + " favori kitabın hangisi??")
//             }
//             break;
    
//         default:
//             return function(name){
//                 window.confirm("Merhaba " +name +"nasılsın?" )
//             }
//             break;
//     }
// }

// (function(){
//     var ques=window.prompt("Hobin var mı?")
//     var answer= Question(ques);
//     answer("");
// }())

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
                
            //GETTER-SETTER
// var Person={
//     firstname:'Ali',
//     lastname:'Veli'
// }
// Object.defineProperty(Person,'fullname',{
//     get (){ return `${this.firstname} ${this.lastname}`},
//     set (value){
//         const parts=value.split(' ');
//         this.firstname=parts[0];
//         this.lastname=parts[1];
//     }
// });

// Person.fullname='Ali Deli';
// console.log(Person.fullname)
// console.log(Person)

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */

            //Call , Apply, Bind

// var welcome = function(){
//     console.log("hello " +this.name );
// }

// var ali= {name: "ali"};
// var veli= {name:"veli"};

// welcome.call(ali)// ==> (obj,'variable' )
// welcome.call(veli)//==>(obj,['variable'])
// welcome.apply(ali)
// welcome.apply(veli)

// var ali2= {name:"bind ali"}
// var welcomeAli2=welcome.bind(ali2);
// welcomeAli2()

//*********************************************************************************************************** */
//*********************************************************************************************************** */
//*********************************************************************************************************** */
            //TRY CATCH

// var user ={
//     name:"Hüseyin Çoraklı"
// }

// try {
//     if(!user.email){
//         throw new Error("User has no email");
//     }
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.name);
// }

// finally{
//     console.log("running in any situation")
// }