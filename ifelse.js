
let hour=new Date();
if(hour.getHours()>=0 && hour.getHours()<12)
    alert("Good Morning");
else if(hour.getHours()>=12 && hour.getHours()<20)
    alert("Good Night");
else if(hour.getHours()>=20 && hour.getHours()<=24)
    alert("Good Night");
