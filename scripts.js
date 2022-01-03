

function calculaTotalReceitas(){
   let salario = $("#salario").val();
   let extra = $("#extra").val();

   let total = Number(salario) + Number(extra) ;

   $('#total').val(total);

}
function calculaGastos(){
    let moradia = $("#moradia").val();
    let alimentacao = $("#alimentacao").val();
    let saude = $("#saude").val();
    let transporte = $("#transporte").val();
    let educacao = $("#educacao").val();
    let renda = $('#total').val();
    let totalDespesas = Number(moradia) + Number(alimentacao) + Number(saude) + Number(transporte) + Number(educacao) ;

    let total =  Number(renda) - totalDespesas;
    $('#valorTotalDespesas').val(totalDespesas);
    $('#saldo').html(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total));
    
    setResumo();
    defineCorSaldo(total);
}

function setResumo(){
    let moradia = $("#moradia").val();
    $('#valor-moradia').html(convertMoeda(moradia));
    $('#porcentagem-moradia').html(calculaPorcentagemGastos(moradia)+"%");

    let alimentacao = $("#alimentacao").val();
    $('#valor-alimentacao').html(convertMoeda(alimentacao));
    $('#porcentagem-alimentacao').html(calculaPorcentagemGastos(alimentacao)+"%");

    let saude = $("#saude").val();
    $('#valor-saude').html(convertMoeda(saude));
    $('#porcentagem-saude').html(calculaPorcentagemGastos(saude)+"%");

    let transporte = $("#transporte").val();
    $('#valor-transporte').html(convertMoeda(transporte));
    $('#porcentagem-transporte').html(calculaPorcentagemGastos(transporte)+"%");

    let educacao = $("#educacao").val();
    $('#valor-educacao').html(convertMoeda(educacao));
    $('#porcentagem-educacao').html(calculaPorcentagemGastos(educacao)+"%");
  
}

function convertMoeda(valor){
   return  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

function calculaPorcentagemGastos(valor){
    let valorTotalDespesas = $('#valorTotalDespesas').val();
    return Math.round((Number(valor)/ Number(valorTotalDespesas)) * 100);
}

function defineCorSaldo(saldo){
    if(saldo > 0){
        $('.footer-resumo').addClass("verde");
        $('.footer-resumo').removeClass("vermelho");
        $('#msg').html("Parabéns, você conseguiu ficar no positivo! <br> Hora de pensar em investir !")
    }else{
        $('.footer-resumo').addClass("vermelho");
        $('.footer-resumo').removeClass("verde");
        $('#msg').html("Saldo negativo ! Reveja seu orçamento e tente <br> aumentar receitas ou diminuir despesas .")
   } 
}

function checarDatas() {
    var verificaData = document.verificaData;
    console.log(verificaData);
    var filtro_de = new Date(verificaData.filtro_de.value);
    var filtro_ate = new Date(verificaData.filtro_ate.value);
    if (!filtro_de || !filtro_ate) return false
    if (filtro_de > filtro_ate) {
        alert("Data inicial não pode ser maior que a data final");
        return false;
    } else {
        return true
    }
}