$(document).ready(function() {
  $("#surveyForm form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dobInput = $("#dob").val();
    var favFoodInput = $("input#favFood").val();
    var favBandInput = $("input#favBand").val();
    var favColorInput = $("#favColor").val();
    var favTimeInput = $("#favTime").val();

    $(".name").text(nameInput);
    $(".favFood").text(favFoodInput);
    $(".favBand").text(favBandInput);

    $(".completion").show();

    event.preventDefault();
  });
});
