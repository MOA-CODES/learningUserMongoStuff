$("#OGAlogin").submit(function(event){

    event.preventDefault();
    // console.log("im here")

    var unindexed_array = $(this).serializeArray();
    var data ={}
    
    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })    
    var request ={
        "url":`http://localhost:3001/api/user/login2`,
        "method": "POST",
        "data":data
    }

    var id = data.User_id;
    // console.log(data.User_id);// getting the user id
    
    $.ajax(request).done(function(response){
        if(response == "Logged in"){
            if(id == "1111"){ 
                alert("Log in successful")
                location.assign("http://localhost:3001/mainadmin")
            }else if(id == "0151"){
                alert("Log in successful")
                location.assign("http://localhost:3001/ooadmissions")
            }else if(id == "0152"){
                alert("Log in successful")
                location.assign("http://localhost:3001/oofinance")
            }else if(id == "0153"){
                alert("Log in successful")
                location.assign("http://localhost:3001/ooit")
            }else if(id == "0154"){
                alert("Log in successful")
                location.assign("http://localhost:3001/oohousing")
            }else if(id == "0155"){
                alert("Log in successful")
                location.assign("http://localhost:3001/oohealth")
            }else if(id == "0156"){
                alert("Log in successful")
                location.assign("http://localhost:3001/ooactivities")
            }else if(id == "0127"){
                alert("Log in successful")
                alert("chuka never do am")
            }else{ //student user
                alert("Log in successful")
                location.assign("http://localhost:3001/admissions")
            }

        }else{
            alert("Wrong ID or Password")
        }
    })
})

