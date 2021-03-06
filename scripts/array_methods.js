var days = ["日","月","火","水","木","金","土"];
var hash_days_en = {
    "日": "Sun",
    "月": "Mon",
    "火": "Tue",
    "水": "Wed",
    "木": "Thu",
    "金": "Fri",
    "土": "Sat"
};

console.log(days);
console.log("toString():                 " + days.toString());
console.log("toString() is automatic whenever the context requires a string");
console.log("join('_'):                  " + days.join("_"));
var a_day = days.pop();
console.log("pop():                      " + days);
var new_size = days.push(a_day);
console.log("push('土'):                 " + days);
console.log("Value returned:             " + new_size);
a_day = days.shift();
console.log("shift():                    " + days);
days.unshift(a_day);
console.log("unshift('日'):              " + days);
days.push(days.shift());
console.log("days.push(days.shift()):    " + days);
days[0] = "Mon";
console.log("days[0] = 'Mon':            " + days);
days[0] = "月";
days[days.length] = "Mon";
console.log("days[days.length] = 'Mon':  " + days);
delete days[3];			//  leaves whole in the middle
days.pop();
console.log("delete days[3]:             " + days);
console.log(days);
days[3] = "木";
days_bak = days.slice(0);
days.splice(2,0,"Tue","Wed");
console.log("days.splice(2,0,'Tue','Wed'): " + days);
days = days_bak.slice(0);
days.splice(2,2,"Wed","Thu");
console.log("days.splice(2,2,'Wed','Thu'): " + days);
days = days_bak.slice(0);
console.log(days);
console.log("Splice to remove an element (with no hole):");
days.splice(2,1);
console.log("days.splice(2,1):             " + days);
days.splice(2,0,"水");
console.log("days.splice(2,0,'水'):        " + days);
var days_en = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
days.concat(days_en);
console.log("days.concat(days_en):         " + days.concat(days_en));
console.log("Several arrays can be concatenated to the first one.");
console.log("anonymous array can also be concatenated");
console.log("'slice()' works the same way as string.slice()");
console.log("max() and min() are not implemented. Can be done via sort()");

var a = new Array(10);
a.fill(0);
console.log("a: " + a);
