var a_num = 8;
var hr = "----------------------------------------";
console.log("typeof(a_num):           " + typeof(a_num));
var a_str = a_num.toString();
console.log("typeof(a_str):           " + typeof(a_str));
var an_int = 123456789;
var a_float = 0.000123;
console.log("an_int.toExponential():  " + an_int.toExponential());
console.log("a_float.toExponential(): " + a_float.toExponential());
var pi = Math.PI;
console.log("pi:                      " + pi);
console.log("pi.toString().length:    " + pi.toString().length);
console.log("'$' + a_num.toFixed(2):  " + "$" + a_num.toFixed(2));
var pi_len = pi.toString().length;
console.log(hr);
for (i = 0; i < pi_len; ++i) {
    console.log("pi.toFixed(" + i + "): " + pi.toFixed(i));
}
console.log(hr);
var prec_num = 5;
for (i = 1; i <= prec_num; ++i) {
    console.log("pi.toPrecision(" + i + "): " + pi.toPrecision(i));
}
console.log(hr);
for (i = 0; i < prec_num; ++i) {    
    console.log("pi.toPrecision(" + prec_num + "): " + pi.toPrecision(prec_num));
    pi *= 10;
}
console.log(hr);
console.log("Number(true):              " + Number(true));
console.log("Number(new Date()):        " + Number(new Date()));
console.log("Number('20'):              " + Number("20"));
console.log("Number('10 20'):           " + Number("10 20"));
console.log("parseInt('10'):            " + parseInt("10"));
console.log("parseInt('10 20 30'):      " + parseInt("10 20 30"));
console.log("parseInt('10 years'):      " + parseInt("10 years"));
console.log("parseInt('year 10'):       " + parseInt("year 10"));
console.log("parseFloat('10.33'):       " + parseFloat("10.33"));
console.log("parseFloat('10 20 30'):    " + parseFloat("10 20 30"));
console.log("parseFloat('10.5 years'):  " + parseFloat("10.5 years"));
console.log("parseFloat('year 10'):     " + parseFloat("year 10"));
console.log("Number.MAX_VALUE:          " + Number.MAX_VALUE);
console.log("Number.MAX_VALUE * 10:     " + (Number.MAX_VALUE * 10));
console.log("Number.MIN_VALUE:          " + Number.MIN_VALUE);
console.log("Number.NEGATIVE_INFINITY:  " + Number.NEGATIVE_INFINITY);
console.log("Number.POSITIVE_INFINITY:  " + Number.POSITIVE_INFINITY);
console.log("Number.NaN:                " + Number.NaN);
console.log("a_num.MAX_VALUE:           " + a_num.MAX_VALUE);
