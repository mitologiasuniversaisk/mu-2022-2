tippy('.btnt')
$(document).ready(function(){
    $('select').formSelect();
});
function soLetras(v){
return v.replace(/\d/g,"") //Remove tudo o que não é Letra
}
