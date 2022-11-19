$("#OGAlogin").submit(function(event){

    event.preventDefault();
    // console.log("im here")

    var unindexed_array = $(this).serializeArray();
    var data ={}
    
    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })
    
    console.log(data);
    
    var request ={
        "url":`http://localhost:3001/api/user/login2`,
        "method": "POST",
        "data":data
    }
    
    console.log(request);

    // request.done
    $.ajax(request).done(function(response){
        alert(data)
        // alert(request.to)
    })
})

