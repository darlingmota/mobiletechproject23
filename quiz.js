var questionNumber = 1;
var score = 0;

function showQuestion(question) {
  $('.questionScreen').hide();
  if ($('.questionScreen:nth-of-type(' + question + ')').length > 0) {
    $('.questionScreen:nth-of-type(' + question + ')').show();
  } else {
    $('#finishedScreen').show();
  }
}

showQuestion(questionNumber);

$('span').click(function() {
  var $clickedSpan = $(this);
  if ($clickedSpan.hasClass('correct')) {
    score++;
    console.log("Correct answer! Score:", score);
    $('#scoreTally').html(score);
  } else {
    console.log("Incorrect answer!");
  }
  
  var iconClass = $clickedSpan.hasClass('correct') ? 'fa-check' : 'fa-times';
  $clickedSpan.append('<i class="fas ' + iconClass + '"></i>');
  
  setTimeout(function() {
    questionNumber++;
    showQuestion(questionNumber);
    $('span').off('click');
    $('span').on('click', function() {
      var $newClickedSpan = $(this);
      if (!$newClickedSpan.find('i').length) {
        if ($newClickedSpan.hasClass('correct')) {
          score++;
          console.log("Correct answer! Score:", score);
          $('#scoreTally').html(score);
        } else {
          console.log("Incorrect answer!");
        }
       
        var newIconClass = $newClickedSpan.hasClass('correct') ? 'fa-check' : 'fa-times';
        $newClickedSpan.append('<i class="fas ' + newIconClass + '"></i>');
        
        setTimeout(function() {
          questionNumber++;
          showQuestion(questionNumber);
        }, 1000); 
      }
    });
  }, 1000); 
});

$('#answersBtn').click(function() {
  window.location.href = 'answers.html';
});
