var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var tdPacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < tdPacientes.length; i++) {
  var paciente = tdPacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');
  
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  
  if(!pesoValido) {
    pesoValido = false;
    tdImc.textContent = 'Peso Inválido';
    paciente.classList.add('paciente-invalido');
  }
  
  if(!alturaValida) {
    alturaValida = false;
    tdImc.textContent = 'Altura Inválida';
    paciente.classList.add('paciente-invalido');
  }
  
  if(pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc
    paciente.classList.remove('paciente-invalido')
  }

}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso/(altura*altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000 ) {
   return true
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}