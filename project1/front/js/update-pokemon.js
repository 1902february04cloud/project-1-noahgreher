update_pokemon = () => {
    //Get user input
    let name = document.getElementById('name1').value.toUpperCase();
    let type = document.getElementById('type1').value.toUpperCase();
    let description = document.getElementById('description1').value.toUpperCase();

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('createMessage1').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://4teyzk8lqa.execute-api.us-east-1.amazonaws.com/test/update`);

    //Sending our request
    let request = {'name': name,'type':type,'description':description}
    xhr.send(JSON.stringify(request));  
}