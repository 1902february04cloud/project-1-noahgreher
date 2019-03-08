//Get all EC2
function getAllCustomers() {
    //AJAX Logic
    let xhr = new XMLHttpRequest();
        
    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Present the data to the user
            presentEC2(data);
        }
    };

    //Doing a HTTP to a specific endpoint
    xhr.open('GET',`https://4teyzk8lqa.execute-api.us-east-1.amazonaws.com/test/scan`);

    //Sending our request
    xhr.send();
}

//Present all EC2
function presentEC2(data) {
    //Get customer list node
    let ec2List = document.getElementById("ec2List");

    //Clean customer list
    ec2List.innerHTML = "";

    //Iterate over all EC2
    data.forEach((ec2) => {
        //Creating node of <li>
        let ec2Node = document.createElement("li");

        //Add class for styling <li class="something">
        //You can access any HTML fields (id might be useful)
        ec2Node.className = "list-group-item";

        //Creating innerHTML object, adding customer name to it.
        //<li class="something">[creating this object]</li>
        let ec2NodeText = document.createTextNode(`Pokemon Name: ${ec2.NAME} Pokemon Type: ${ec2.TYPE}\n\n Pokemon Description: ${ec2.DESCRIPTION}`);

        //Append innerHTML to the customerNode
        //<li class="something">Perez, Julio</li>
        ec2Node.appendChild(ec2NodeText);

        //Finally, we append the new customerNode to the customerList
        //<ul id="ec2List">
        //<li class="something">Something</li>
        //</ul>
        ec2List.appendChild(ec2Node);
    });
}