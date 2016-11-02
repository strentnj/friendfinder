var newFriend;

// function User(name, pic, answers){
//   this.name = name;
//   this.picture = pic;
//   this.scores = answers;

// };

$('#submit-survey').on('click',  function(){

  var newFriend = {
        name: $("#name").val(),
        pic: $("#image-link").val(),
        answers: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),]
        }

  // var getInfo = function(){
  //   var name = $('#name').val().trim();
  //   var pic = $('#image-link').val().trim();
  //   var answers = [];

  //   answers.push($('#q1').val());
  //   answers.push($('#q2').val());
  //   answers.push($('#q3').val());
  //   answers.push($('#q4').val());
  //   answers.push($('#q5').val());
  //   answers.push($('#q6').val());
  //   answers.push($('#q7').val());
  //   answers.push($('#q8').val());
  //   answers.push($('#q9').val());
  //   answers.push($('#q10').val());

   var currentUrl = window.location.origin;

     $.post(currentUrl + '/api/friends', newFriend, function(data){
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.pic);

            
            $("#resultsModal").modal('toggle');

          });
      
        
        return false;

     
  });