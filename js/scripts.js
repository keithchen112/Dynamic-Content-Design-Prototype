$(document).ready(function() {
    //mouse over
    $("#program_div1").mouseover(function() {
        $("#text_box1").css("display", "block");
    });
    
    $("#program_div1").mouseout(function() {
        $("#text_box1").css("display", "none");
    });
    
    $("#program_div2").mouseover(function() {
        $("#text_box2").css("display", "block");
    });
    
    $("#program_div2").mouseout(function() {
        $("#text_box2").css("display", "none");
    });
    
    $("#program_div3").mouseover(function() {
        $("#text_box3").css("display", "block");
    });
    
    $("#program_div3").mouseout(function() {
        $("#text_box3").css("display", "none");
    });
    
      $("#program_div4").mouseover(function() {
        $("#text_box4").css("display", "block");
    });
    
    $("#program_div4").mouseout(function() {
        $("#text_box4").css("display", "none");
    });
    
    $("#program_div5").mouseover(function() {
        $("#text_box5").css("display", "block");
    });
    
    $("#program_div5").mouseout(function() {
        $("#text_box5").css("display", "none");
    });
    
    $("#program_div6").mouseover(function() {
        $("#text_box6").css("display", "block");
    });
    
    $("#program_div6").mouseout(function() {
        $("#text_box6").css("display", "none");
    });
    
    $("#program_div7").mouseover(function() {
        $("#text_box7").css("display", "block");
    });
    
    $("#program_div7").mouseout(function() {
        $("#text_box7").css("display", "none");
    });
    
    $("#program_div8").mouseover(function() {
        $("#text_box8").css("display", "block");
    });
    
    $("#program_div8").mouseout(function() {
        $("#text_box8").css("display", "none");
    });
    
      $("#program_div9").mouseover(function() {
        $("#text_box9").css("display", "block");
    });
    
    $("#program_div9").mouseout(function() {
        $("#text_box9").css("display", "none");
    });
  

  
  //only SELECT ONE AT A TIME
  $('#filter-group-1 input[type=checkbox]').change(function() {
        if (this.checked) {
            $('#filter-group-1 input[type=checkbox]').not(
            $(this)).prop('checked', false);
        }
    });
    
  
    $(".btn1").click(function(){
        $("#program_div1").slideToggle( "fast" );
    });
    
    $(".btn2").click(function(){
        $("#program_div2").slideToggle( "fast" );
    });
    
    $(".btn3").click(function(){
        $("#program_div3").slideToggle( "fast" );
    });
    
    $(".btn4").click(function(){
        $("#program_div4").slideToggle( "fast" );
    });
    
    $(".btn5").click(function(){
        $("#program_div5").slideToggle( "fast" );
    });
    
    $(".btn6").click(function(){
        $("#program_div6").slideToggle( "fast" );
    });
    
    $(".btn7").click(function(){
        $("#program_div7").slideToggle( "fast" );
    });
    
    $(".btn8").click(function(){
        $("#program_div8").slideToggle( "fast" );
    });
    
    $(".btn9").click(function(){
        $("#program_div9").slideToggle( "fast" );
    });
    
    //RESET BUTTON
    $("#reset").click(function() {
		$(".option_filter").removeClass("active");
        $(".item_program").fadeIn(200);
        $(".program_box").css("display", "none");
	});
    
    //CORE FILTER
	$("#option_A").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
        if($(this).prop('checked')){
            $(".adv").css("display", "none");
            $(".inter").css("display", "none");
            } else {
                
            }
	});
    
    $("#option_B").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".adv").css("display", "none");
                $(".begin").css("display", "none");
            } 
	});

    $("#option_C").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".inter").css("display", "none");
                $(".begin").css("display", "none");
            }
	});
    
    $("#option_D").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".price2").css("display", "none");
                $(".price3").css("display", "none");
            } 
	});
    
    $("#option_E").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".price1").css("display", "none");
                $(".price3").css("display", "none");
            }
	});
    
    $("#option_F").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".price2").css("display", "none");
                $(".price1").css("display", "none");
            } 
	});
    
    $("#option_G").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".richmond").css("display", "none");
                $(".vancouver").css("display", "none");
            }
	});
    
    $("#option_H").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".richmond").css("display", "none");
                $(".burnaby").css("display", "none");
            }
	});
    
    $("#option_I").on("click", function() {
        $(".program_box").css("display", "none");
        $(".item_program").css("display", "block");
            if($(this).prop('checked')){
                $(".vancouver").css("display", "none");
                $(".burnaby").css("display", "none");
            }
    
    });
    
});