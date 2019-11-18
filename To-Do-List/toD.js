
function gray() {
    document.body.style.backgroundColor = "#9D9D93";
}
function darkseagreen() {
    document.body.style.backgroundColor = "darkseagreen";
}
function white() {
    document.body.style.backgroundColor = "white";
}

var list = [];



$(document).ready(
    function(){
        $('#button').click(
            function(){
                if ($('input[name=textbox]').val() !== '') { // val = value 
                var toAdd = $('input[name=textbox]').val();
                 $('ol').append('<li>' + toAdd + '</li>');} 
                $('input[name=textbox]').val("");

                    //array
                $(function() {
                        list = [];
                    $('li').each(function(){
                        list.push($(this).text());
                    });
                    //alert(list);
                });

                //

            });
       
       $("input[name=textbox]").keyup(function(event1){
            if(event1.keyCode == 13){
                $("#button").click();
            }         
        });
      
        $(document).on('click','li', function(){
            $(this).toggleClass('strike');    
        });
      
        $('input').focus(function() {
            $(this).val('');
        });
      
      $('#hs').sortable();

        //  
        $("body").on('DOMSubtreeModified', "div", function() {
            $(function() {

                list = [];
                $('li').each(function(){
                    list.push($(this).text());
                });
            
            });
        });
      
        
        $('#btn_settings').click(
            function(){
                $('.strike').remove();



                // array
                $(function() {

                    list = [];
                    $('li').each(function(){
                        list.push($(this).text());
                    });
                
                   // alert(list);
                });

                //
            });
        
      //
        
        $("#btn_color ,#btn_settings").mouseenter(function() {
        $(this).animate({
            width: "90px",
            height: "30px"
            
        }, 300 );});

        
        $("#btn_color, #btn_settings").mouseleave(function() {
        $(this).animate({
            width: "64px",
            height: "22px"
            
        }, 300 );});
        //
        
  $("#btn_color").click(function(){
    $("#slide").slideDown("slow");
  });
        //
        
        $("#slide").mouseleave(function() {
        $("#slide").slideUp("slow");
  });
        
        //
        
    }
);
