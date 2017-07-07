$(document).ready(function(){
  console.log("added");

  $("form#add-list").on("submit", function(){
    //for adding items
    var item = $("#add-list input[type='text']");
    var todo = {item: item.val()};

    $.ajax({
      type: "POST",
      url: "/todo",
      data: todo,
      success: function(data){
        location.reload();
      }
    });
    return false;
  });

  //for deleting items
  $("li.task").on("click", function(){
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: "DELETE",
      url: "/todo/" + item,
      success: function(data){
        location.reload();
      }
    });
    return false;
  });
});
