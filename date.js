var day = document.getElementById('dayField');
var month = document.getElementById('monthField');
var year = document.getElementById('yearField');
var addDays = document.getElementById('addField');
var subDays = document.getElementById('subField');
var result = document.getElementById('resultField');
var form = document.getElementById('getDate');

form.addEventListener('submit', function(Event) {
    
    if((!day.value || !month.value || !year.value) || (day.value < 1 || day.value > 31) || (month.value < 1 || month.value > 12) || (year.value < 1)) {
        alert("Please enter a complete and valid date");
    }
    
    if(!addDays.value || addDays.value < 1) {
        alert("Please enter valid days to add");
        addDays.value = '0';
    }
    
    var d = parseInt(day.value);
    var m = parseInt(month.value);
    var y = parseInt(year.value);
    
    var add = parseInt(addDays.value);
    
    d = d + add;
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    var i = m - 1;
    
    if((y%4==0 && y%100!=0) || (y%400==0))
        months[1] = 29;
    else
        months[1] = 28;
    while(d>months[i]) {
       
        d = d - months[i];
        m++;i++;
        if(m > 12) {
            m = m % 12;
            y++;
            if((y%4==0 && y%100!=0) || (y%400==0))
                months[1] = 29;
            else
                months[1] = 28;
            i = 0;
        }
    }
    
    result.innerHTML = "The New Date is :" + d + "/" + m + "/" + y;
    
    Event.preventDefault();
})

