    $(document).ready(function(){
            $(".btn").click(function(){
                $('input[type="text"]').each(function(index,element){
                    //Üst satırda input'un index'ini aldım ve bir değişkene atadım.
                    //Sonrasında bu değişkeni input value'sini bastıracağım p'lere ekledim tabi öncesinde p'leri eq sayesinde index numarasına göre sıraladım.
                    var __take = $(this).val(); 
                    $("p").eq(index).text(__take); 
                    //Burada input'un val() ve lenght'ini 2 ayrı değişkene atadım ve alttaki basit bir iç içe if-else döngüsünde kullandım.
                    var __pref = $(this).val();
                    var __choice = __pref.length;
                    if (__pref == '') {
                        $(this).next().text("Bu alan boş bırakılamaz.");
                    } else {
                         if (__choice < 3 || __choice > 10) {
                            $(this).css({"border":"2px solid red"});
                            $(this).next().text("3 ile 10 arası karakter girebilirsin.");
                            $("p").hide();
                            return;
                        } else {
                            $(this).css({"border":"1px solid #CC0000;"});
                            $(this).next().addClass("none");
                            $("p").show();
                        }
                    }
                });
        return false;
    });
});
