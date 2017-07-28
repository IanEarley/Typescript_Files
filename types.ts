//Boolean
let paidAccount : boolean = false;

//Number, determines what type of value i.e. Integer or Float
let age : number = 33;
var taxRate : number = 7.5;

//String
var namesake : string = 'Ian Earley';

//Array
var ages : number[] = [33, 28, 11];

//Tuple, allows an array or collection with different data types for each element when number of elements is known.
let player : [number, string, number, number];
player = [3, "Corerra", .333, 33];

//Enum, allows set number of 'control points' and allows call like a method
enum approvalStatus {Approved, Pending, Rejected};
let job : approvalStatus = approvalStatus.Pending;

//Any, allows an array to have any data type
var apiData : any[] = [123, 'Jordan', false];

//Void, used specifically for functions when stating that no value will be returned
function printOut(msg: string) : void {
  console.log(msg);
}