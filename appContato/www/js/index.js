var CONTATOS = []
var INDEX_EDICAO = -1
function salvarContato () {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var valor = document.getElementById('valor').value
  if (!nome || nome.length < 2) {
    alert('Campo nome é obrigatório')
    return false
  }
  if (!email || email.length < 2) {
    alert('Campo e-mail é obrigatório')
    return false
  }
  var contato = {
    nomeUsuario: nome,
    emailUsuario: email,
    valorUsuario: valor
  }
  if (INDEX_EDICAO < 0) {
    CONTATOS.push(contato)
  } else {
    CONTATOS[INDEX_EDICAO] = contato
    INDEX_EDICAO = -1
  }
  document.getElementById('nome').value = ''
  document.getElementById('email').value = ''
  document.getElementById('valor').value = ''
}

function excluirContato (index) {
  CONTATOS.splice(index, 1)
}

function editarContato (index) {
  INDEX_EDICAO = index
  var contato = CONTATOS.filter(function (obj, i) {
    return i == index ? obj : null
  })
  contato = contato[0]
  document.getElementById('nome').value = contato.nomeUsuario
  document.getElementById('email').value = contato.emailUsuario
  document.getElementById('valor').value = contato.valorUsuario
}

MobileUI.validaValor = function (valor) {
  if (valor < 100) {
    return 'red'
  } else {
    return 'green'
  }
}
