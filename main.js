$(document).ready(function(){
    
    function time(){  
        var date = new Date();  
        let h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        if( h< 10) {   $('.hours').text('0'+ h);    }
        else $('.hours').text(h);
        if(m < 10) {   $('.min').text('0'+m);  }
        else $('.min').text(m);
        if(s < 10) {   $('.sec').text("0"+s);  }
        else $('.sec').text(s);
        setTimeout(time,1000)
    }
    function date(){
        var date = new Date();
        var moList = ['Januar', 'Februar','Mart','April',
                     'May' ,'Jun','July','Avgust','Septembar',
                      'Octobar','Novembar','Decembar'];
        let year = date.getFullYear();
        let mo = date.getMonth();
        let day = date.getDate();
        $('.date').text(day + '/' + moList[mo] + '/' + year);   
    }
    time();
    date();
});