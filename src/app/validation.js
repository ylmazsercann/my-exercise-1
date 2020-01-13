    $(document).ready(function(){
            $(".btn").click(function(){
                $('input[type="text"]').each(function(index,element){
                    var tut = $(this).val();
                    $("p").eq(index).text(tut);
                    var choice = $(this).val().length;
                    var pref = $(this).val();
                    if (pref == '') {
                        $(this).next().text("Bu alan boş bırakılamaz.");
                    } else {
                         if (choice < 3 || choice > 10) {
                            $(this).next().text("3 ile 10 arası karakter girebilirsin.");
                            $(this).css({"border":"2px solid red"});
                        } else {
                            $(this).next().addClass("none");
                        }
                    }
                });
        return false;
    });
});
