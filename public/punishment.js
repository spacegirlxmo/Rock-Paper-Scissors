$(function(){
  var button = $("button#click");
  button.click(function(){
    $("div#output").html("");
    var store = $("input#content").val();
    var howMany = $("input#value").val();
    if(store === "") {
      $("div#output").html("You didn't enter anything.")
    } else if (howMany > 50) {
      $("div#output").html("You ain't getting any presents from Santa!")
    } else {
      if(howMany === "") {
        $("div#output").html("How many times tho?")
      } else {
        for(var i = 1; i <= howMany; i++) {
          $("div#output").append(i + ". " + store + "<br>");
        }
      }
    }
  })
});
