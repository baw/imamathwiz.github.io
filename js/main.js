(function () {
  var addContact = function () {
    var contact = document.getElementById("contact");
    contact.href = "mailto:" + "brian" + "@" + "brianweiser.io";
  };

  var addEvents = function () {
    var linkSelector = "#projectsLink, #resumeLink";
    var clickMove = "click.move";
    $(linkSelector).on(clickMove, function (event) {
      $(".main").animate({
        top: 0
      });
      
      $(linkSelector).off(clickMove);
    });
    
    $("#projectsLink, #resumeLink").on("click.show", function (event) {
      event.preventDefault();
      
      var currentId = $(this).prop("id");
      
      var showDiv, hideDiv;
      if (currentId === "projectsLink") {
        showDiv = ".projects";
        hideDiv = ".resume";
      } else {
        showDiv = ".resume";
        hideDiv = ".projects";
      }
      
      $(showDiv).animate({ top: "150px"   });
      $(hideDiv).animate({ top: "-1000px" });
    });
  };

  $(function () {
    addContact();
    addEvents();
  });
})();