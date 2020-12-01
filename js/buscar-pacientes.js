var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Buscando pacientes...');

  var xhr = new XMLHttpRequest();

  xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener('load', () => {
    var erroAjax = document.querySelector('#erro-ajax');
    
    if(xhr.status === 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
  
      pacientes.forEach((paciente) => {
        adicionaPacienteTabela(paciente);
      })

      erroAjax.classList.add('invisivel')
      
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove('invisivel')

    }
  })

  xhr.send();
  
})