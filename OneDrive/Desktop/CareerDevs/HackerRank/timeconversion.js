/*function timeConversion(s) {
    s = s.split(':');
    //console.log(s, s.length);
    //console.log(s[s.length-1]);
    let last_val = s[s.length-1];
    if(last_val.indexOf('AM')>-1) {
      let temp = s[s.length-1];
      temp = temp.substring(0,last_val.indexOf('AM'));
      s[s.length - 1] = temp;
      if(s[0]=='12') {
        s[0] = '00';
      }
      //console.log(s.join(':'));
    }

    else if(last_val.indexOf('PM')>-1) {
      let temp = s[s.length-1];
      let temp1 = s[0];
      temp = temp.substring(0,last_val.indexOf('PM'));
      temp1 = 12 + parseInt(temp1);
      s[s.length - 1] = temp;
      s[0] = temp1;
    }
    console.log(s.join(':'));
}*/

function timeConversion(s) {
    s = s.split(':');
    let last_val = s[s.length - 1];

    let am_index = -1;
    let pm_index = -1;
    let temp = '';

    if (last_val.indexOf('AM') > -1) {
        am_index = last_val.indexOf('AM');
        temp = s[s.length - 1];
        temp = temp.substring(0, am_index);
    } else if (last_val.indexOf('PM') > -1){
        pm_index = last_val.indexOf('PM');
        temp = s[s.length - 1];
        temp = temp.substring(0, pm_index);
    }
    s[s.length - 1] = temp;

    if (am_index > -1) {
        if (s[0] == '12') {
            s[0] = '00';
        }
    }
    else if (pm_index > -1 && s[0].indexOf('12') == -1 && am_index == -1) {
        s[0] = 12+parseInt(s[0]);
    }
    return s.join(':');
}

let s = '07:05:45PM';
let s1 = '12:00:00AM';

console.log(timeConversion(s));
console.log(timeConversion(s1));
