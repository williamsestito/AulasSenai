const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && peso !== '' && altura !== ''){
        
        const valorIMC  = (peso / (altura * altura)).toFixed(2)

        let classificacao = "";

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'Peso ideal. Parabéns!!!';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else{
            classificacao = 'com obesidade grau III. Cuidado';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

function limparTudo(){
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').textContent = '';
}

calcular.addEventListener('click', imc);
limpar.addEventListener('click', limparTudo);

function verCurso(){


    Swal.fire({
        title: '<strong>Insira a Senha.</strong>',
        icon: 'info',
        input: 'password',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'<i class="fa fa-thumbs-up"></i> Validar!',
        cancelButtonText:'Desistir',
      })


    // Swal.fire({
    //     title: 'Insira senha',
    //     input: 'text',
    //     inputAttributes: {
    //       autocapitalize: 'off'
    //     },
    //     showCancelButton: true,
    //     cancelButtonText: 'Desistir',
    //     confirmButtonText: 'Validar',
    //     showLoaderOnConfirm: true,
    //     preConfirm: (login) => {
    //       return fetch()
    //         .then(response => {
    //           if (!response.ok) {
    //             throw new Error(response.statusText)
    //           }
    //           return response.json()
    //         })
    //         .catch(error => {
    //           Swal.showValidationMessage(
    //             `Request failed: ${error}`
    //           )
    //         })
    //     },
    //     allowOutsideClick: () => !Swal.isLoading()
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire({
    //         title: `${result.value.login}'s avatar`,
    //         imageUrl: result.value.avatar_url
    //       })
    //     }
    //   })
}