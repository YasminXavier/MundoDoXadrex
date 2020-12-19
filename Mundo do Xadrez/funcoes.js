function valid(frm){
    if(fale-conosco.cadastro.nome.value==""){
        alert("Opa!Preencha o campo em vazio, por favor.");
        fale-conosco.cadastro.nome.focus(nome);
        return false;
    }
    if (fale-conosco.cadastro.email.value=="" ||fale-conosco.cadastro.email.value.indexOf('@')==-1 || fale-conosco.formulario.email.value.indexOf('.')==-1) {
        alert("Opa, digite um endereço de email valido!");
        fale-conosco.cadastro.email.focus(email);
        return false;
    }
}