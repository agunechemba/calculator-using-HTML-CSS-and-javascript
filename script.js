var num = "";
var newr = "";

$(".num").click(function () {
  num += $(this).val();
  $("#result").val(num);
});
$(".fun").click(function () {
  if (num == "+" || num == "/" || num == "*") {
    num = "";
  } else {
    var chk = $.isNumeric(num);
    if (chk == true) {
      num += $(this).val();
      $("#result").val(num);
    } else {
      num += "";
    }
  }
});

$(".equal").click(function () {
  newr = $("#result").val();
  $("#result1").val(newr);
  var eqaul = eval(newr);
  $("#result").val(eqaul);
  num = eqaul;
});
$("#ac").click(function () {
  num = " ";
  newr = " ";
  $("#result").val(num);
  $("#result1").val(newr);
});