$(document).ready(function () {
  $(".contentReveal").hide();
  // $(".reveal8").show();
});
$(document).on("click keyup", ".sec", function (e) {
  let currentSection = parseInt(
    $(this)
      .attr("id")
      .charAt($(this).attr("id").length - 1)
  );
  const key = e.which || e.keyCode;
  if (key === 13 || key === 32 || e.type === "click") {
    console.log("clicked");

    $(".contentReveal").show();
    $(".text").hide();
    $(".reveal" + currentSection).show();
  }
});
