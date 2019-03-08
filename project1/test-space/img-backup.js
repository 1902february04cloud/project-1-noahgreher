let getImage = () => {
    //Get user input
    let image= document.getElementById('image').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('returnimg').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpointprimer
    xhr.open('POST',`https://4teyzk8lqa.execute-api.us-east-1.amazonaws.com/test/img`);

    //Sending our request
    let request = {'image': image}
    xhr.send(JSON.stringify(request));
}