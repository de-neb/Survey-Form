$("form").on("submit", (event)=>{
    event.preventDefault();
    
      $(".circle").removeClass("hide")
        $(".circle").addClass("loading")
        $(".container").addClass("hide")
        $(".header").addClass("hide")
        setTimeout(function(){
            $("#thanks").removeClass("hide").addClass("pop")
        }, 3000)
       setTimeout(function(){
         $("#thanks").addClass("hide")
         $(".circle").addClass("hide")
        $(".circle").removeClass("loading")
        $(".container").removeClass("hide")
        $(".header").removeClass("hide")
        $("form").trigger("reset")
    },7000)
  })
  
  
     
  