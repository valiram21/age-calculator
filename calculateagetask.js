function calculate(){
    const date=new Date(document.getElementById("enter").value);
    const today=new Date();

    const year=date.getFullYear();
    const month=date.getMonth();
    const day=date.getDate();

    const todayyear=today.getFullYear();
    const todaymonth=today.getMonth();
    const todayday=today.getDate();

    let years=todayyear-year;
    let months=todaymonth-month;

    if(todayday<day){
        months--;
    }
    if(months<0){
        years--;
        months+=12;
    }
    document.getElementById("output").textContent=`You are ${years} years 
        and ${months} months old.`;

      if(year>todayyear){
        document.getElementById("output").textContent=`Enter valid year`
      }  
}