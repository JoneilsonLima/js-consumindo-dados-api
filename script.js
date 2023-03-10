async function buscarEndereco(cep) {
    const mensagemErro = document.querySelector('[data-erro]');
    try {
        const consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultarCEPConvertida = await consultarCEP.json();
        
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        
        cidade.value = consultarCEPConvertida.localidade;
        logradouro.value = consultarCEPConvertida.logradouro;
        estado.value = consultarCEPConvertida.uf;

        console.log(consultarCEPConvertida)
        return consultarCEPConvertida
    }catch(erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value))