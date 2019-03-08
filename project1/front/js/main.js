window.onload = () => {
    //Prime Lambda Event Listener
    document.getElementById('calculate').addEventListener('click', primer)

    //add our next button for images .
    document.getElementById('update').addEventListener('click', update_pokemon);

    //Create EC2 Lambda Event Listener
    document.getElementById('create').addEventListener('click', create_ec2);

    //Get all EC2s Listener
    document.getElementById('list').addEventListener('click', getAllCustomers);

    //add our next button for images .
    document.getElementById('images').addEventListener('click', getImage);

    
}