$(document).ready(function(){

    $('#button').click(
        function(){
            var toAdd = $('.form-input').val();
            // alert(toAdd);

            $('.todos').append('<li>'+toAdd+'</li>');
        }
    )
    $(document).on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeout('slow')
    })

    $('input').focus(function(){
        $(this).val(' ');
    })
    $('ul').sortable();
})
