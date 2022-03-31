function aboutus() {
    location.href = 'About-Us.html';
}

function missonvision() {
    location.href = 'Mission-Vision.html';
}

function whoweare() {
    location.href = 'who-we-are.html';
}

// function submit() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//     document.getElementById("msg").innerHTML = "Thanks for your valuable input"
// }

$(document).ready(function(){
    $("#submit").click(function(){
        var name =$("#name").val();
        var email =$("#email").val();
        var contact =$("#contact").val();
        var enquiry =$("#selected").val();
        var message =$("#message").val();

        const jsonData ={"Name":name,"Email":email,"Cont":contact,"Enquiry":enquiry,"Mesg":message}
        console.log(jsonData)

        // postmapping request
        $.ajax({
            url:'http://127.0.0.1:5500/index.html#down',
            type:'POST',
            data:JSON.stringify(jsonData),
            success:function(){},
            error:function(){},
        });
    });
});