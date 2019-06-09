$(document).ready(function(){
    $('.imgParallax').parallax();

    //função para formatar o header, mudando o tamanho do height e fonte
    $(document).scroll(function(){
        var topoJanela = $(window).scrollTop();
        if(topoJanela > 60){
            $('header').addClass('headerFixo')
        }else{
            $('header').removeClass('headerFixo')
        }
    })

    //função para habilitar os botões de navegação.
    $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");          
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");        
    });

    //função para habilitar os tooltips com descrição nos botoes.
    $("a.tooltip").mouseover(function(){
        var txt = $(this).attr("data-tooltip")
        $(this).children(".txt_tooltip").html(txt)
        $(this).children(".txt_tooltip").css('opacity', '1')
    })

    $("a.tooltip").mouseout(function(){
        $(this).children(".txt_tooltip").css('opacity', '0')
    })

    $(".txt_tooltip").mouseover(function(e){
        e.stopPropagation();
    });

    //função para navegação entre os ID da pagina.
    var pageIds = $("html, body")
    $('a.tooltip').click(function(){
        pageIds.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500)
        return false
    })
})