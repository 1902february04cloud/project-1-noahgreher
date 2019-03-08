let getImage = () => {
    //Get user input
    let image= document.getElementById('image').value.toLowerCase();

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
           // document.getElementById('returnimg').innerHTML = data.response;
           presentEC3(data);
           //document.getElementById('returnimg').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpointprimer
    xhr.open('POST',`https://4teyzk8lqa.execute-api.us-east-1.amazonaws.com/test/img`);

    //Sending our request
    let request = {'image': image}
    xhr.send(JSON.stringify(request));
    
}
//Present all EC2
function presentEC3(data) {
    //Get customer list node
    let ec2List = document.getElementById("returnimg");
    ec2List.innerHTML = "";
    let ec2Node = document.createElement("img");

   // ec2Node.src = "https://s3.amazonaws.com/pokebucket-project/pikachu.png";
   z=document.innerHTML = data.response;
   ec2Node.src = z;
   
    //<li class="something">[creating this object]</li>
    let ec2NodeText = document.createTextNode(``);

    //Append innerHTML to the customerNode
    //<li class="something">Perez, Julio</li>
    //ec2Node.appendChild(ec2NodeText);

    //Finally, we append the new customerNode to the customerList
    //<ul id="ec2List">
    //<li class="something">Something</li>
    //</ul>
    ec2List.appendChild(ec2Node);
    };