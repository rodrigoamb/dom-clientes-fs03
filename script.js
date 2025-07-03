const form = document.getElementById("form-cliente");
const tabela = document.getElementById("tabela-clientes");
const modalEditar = document.getElementById("modal-editar");
const modalExcluir = document.getElementById("modal-excluir");

//---- inputs ----

const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputCpf = document.getElementById("cpf");
const inputEmail = document.getElementById("email");

// ---- inputs do modal editar ----

const inputEditNome = document.getElementById("edit-nome");
const inputEditSobrenome = document.getElementById("edit-sobrenome");
const inputEditCpf = document.getElementById("edit-cpf");
const inputEditEmail = document.getElementById("edit-email");

// --- capturando form de edicao e botoes

const formEdicao = document.getElementById("form-edicao");
const btnCancelarEdicao = document.getElementById("cancelar-edicao");
const btnConfirmarExclusao = document.getElementById("confirmar-exclusao");
const btnCancelarExclusao = document.getElementById("cancelar-exclusao");

let clientes = [
  {
    nome: "Rodrigo",
    sobrenome: "Medeiros",
    cpf: "937.837.847-42",
    email: "rodrigo@gmail.com",
  },
  {
    nome: "Lucas",
    sobrenome: "Monteiro",
    cpf: "937.837.999-42",
    email: "lucas@gmail.com",
  },
  {
    nome: "Ana",
    sobrenome: "Maria",
    cpf: "937.847.847-42",
    email: "Ana@gmail.com",
  },
];

function renderizarTabela() {
  clientes.forEach((cliente) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.email}</td>
    `;

    const tdAcoes = document.createElement("td");
    tdAcoes.classList.add("acoes");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("excluir");

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);
  });
}

renderizarTabela();
