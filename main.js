
/*
Selecionando e modificando elementos com jQuery

$().ready(function () {
    let umaDiv = $("div");
    let umParagrafo = $("<p>Olá Mundo!</p>")

    // append adicona um ememento ao final dos elemntos existentes
    umaDiv.append(umParagrafo);

    // prepend adicona um ememento no inicio dos elemntos existentes
    $("<p>Usando prependTo em Jquery</p>").prependTo(umaDiv);

    //html substitui todos os elementos selecionados 
    $("p").html("<strong> Usando a função html em Jquery</strong>")
}
);*/
$().ready(function () {
    //adicionado uma nova class do elemento com class aqua
    $(".agua").addClass("mb50")

    //removendo uma  class do elemento com class aqua
    $(".agua").removeClass("mb50")

    //adicionado uma class em todos os elementos divs
    $("div").addClass("mb50")

    //metodo css() seleciona ou altera o valor de uma propridade css
    $(".navy").css("background-color", "red")




}
);