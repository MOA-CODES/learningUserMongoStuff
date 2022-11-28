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
                
                var request2 ={
                    "url":`http://localhost:3001/api/student/retrieve?StudID=${id}`,
                    "method": "GET",
                }

                $.ajax(request2).done(function(response){
                    alert("Log in successful")

                    var one = response.Adminvr.toString(); var two = response.Adminvr.toString();
                    var three = response.Adminvr.toString(); var four = response.Adminvr.toString();
                    var five = response.Adminvr.toString(); var six = response.Adminvr.toString();

                    if(one == "true" && two == "true" && three == "true" && four == "true" && five == "true" && six == "true"){
                        location.assign("http://localhost:3001/congrats")
                    }else if(one == "true" && two == "true" && three == "true" && four == "true" && five == "true"){
                        location.assign(`http://localhost:3001/studAct?StudID=${id}`)
                    }else if(one == "true" && two == "true" && three == "true" && four == "true" ){
                        location.assign(`http://localhost:3001/health?StudID=${id}`)
                    }else if(one == "true" && two == "true" && three == "true"){
                        location.assign(`http://localhost:3001/housing?StudID=${id}`)
                    }else if(one == "true" && two == "true"){
                        location.assign(`http://localhost:3001/itstage?StudID=${id}`)
                    }else if(one == "true"){
                        location.assign(`http://localhost:3001/finance?StudID=${id}`)
                    }else{
                        location.assign(`http://localhost:3001/info?StudID=${id}`)
                    }
                });
            }

        }else{
            alert("Wrong ID or Password")
        }
    })
})

$("#oofinupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/oofinance")
        }
    })


})

$("#ooitupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/ooit")
        }
    })


})

$("#oohousingupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/oohousing")
        }
    })


})

$("#oohealthupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/oohealth")
        }
    })


})

$("#ooactivitiesupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/ooactivities")
        }
    })


})



$("#ooadmissionupdate_user").submit( function (event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        console.log(response)
        if(response == "Student updated"){
            location.assign("http://localhost:3001/ooadmissions")
        }
    })


})




$("#infoform").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
       alert("submitted successfully")
       document.getElementById('next').removeAttribute('disabled');
    })


})


$("#financeform").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
       alert("submitted successfully")
    })


})

$("#housingform").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
       alert("submitted successfully")
    })


})

$("#healthform").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
       alert("submitted successfully")
    })


})

$("#activitiesform").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data ={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request ={
        "url":`http://localhost:3001/api/student/update`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
       alert("submitted successfully")
    })


})