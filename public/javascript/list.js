$(document).ready(function () {

  $.get("http://localhost:3001/users/", function(data, status){

    // var user = JSON.stringify(data); // an *array* that contains the user
    var no = data;
    $.each(no,function(key, value){
        console.log(value);
        $("#details ul").append("<li>" + JSON.stringify(value.firstName)
        .replace(/['"]+/g, '') + " " +  JSON.stringify(value.lastName).replace(/['"]+/g, '')
        + "</li>" + "<button data-id=" + JSON.stringify(value._id) + " class='x'>Edit</button>" +"<button>Delete</button>")
        });
        $('#details ul').on('click','.x', function(e){
          e.preventDefault();
          var id =$(this).attr('data-id');
          window.location.href="./edit/"+id;
        });
    // console.log(user);   // you'll get xxx
    // $("#details ul").append("<li>" + user + "</li>")
  });

})
