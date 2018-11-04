//check on specific todo tby clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");


//click on x to delete the tofo
})
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(900,function(){
	    $(this).remove();	
	});
	event.stopPropagation();
});
//Add a todo through the input section
$("input[type='text']").on("keypress",function(event){
	if(event.which ===13){
		//grabing new todo text from input
		var todoText =$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText + "</li>")
		$(this).val("");
	}
});
$('.fa-plus').click(function(){
    $('input').fadeToggle()
});