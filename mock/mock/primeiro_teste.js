const mockUsuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@example.com",
    senha: "senhaSegura123",
    avatar: "http://example.com/avatar1.jpg",
    endereco: {
      rua: "Rua das Flores",
      numero: "123",
      bairro: "Centro",
    },
    data_nascimento: new Date("1990-05-15"),
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    senha: "senhaSegura234",
    avatar: "http://example.com/avatar2.jpg",
    endereco: {
      rua: "Avenida das Árvores",
      numero: "456",
      bairro: "Jardim",
    },
    data_nascimento: new Date("1985-10-10"),
  },
  {
    id: 3,
    nome: "Carlos Santos",
    email: "carlos.santos@example.com",
    senha: "senhaSegura345",
    avatar: "http://example.com/avatar3.jpg",
    endereco: {
      rua: "Rua do Sol",
      numero: "789",
      bairro: "Praia",
    },
    data_nascimento: new Date("1992-02-20"),
  },
  {
    id: 4,
    nome: "Ana Lima",
    email: "ana.lima@example.com",
    senha: "senhaSegura456",
    avatar: "http://example.com/avatar4.jpg",
    endereco: {
      rua: "Rua das Estrelas",
      numero: "101",
      bairro: "Centro",
    },
    data_nascimento: new Date("1988-08-08"),
  },
  {
    id: 5,
    nome: "Lucas Pereira",
    email: "lucas.pereira@example.com",
    senha: "senhaSegura567",
    avatar: "http://example.com/avatar5.jpg",
    endereco: {
      rua: "Avenida do Sol",
      numero: "202",
      bairro: "Verde",
    },
    data_nascimento: new Date("1995-12-12"),
  },
  {
    id: 6,
    nome: "Fernanda Costa",
    email: "fernanda.costa@example.com",
    senha: "senhaSegura678",
    avatar: "http://example.com/avatar6.jpg",
    endereco: {
      rua: "Rua das Palmeiras",
      numero: "303",
      bairro: "Montanha",
    },
    data_nascimento: new Date("1991-04-04"),
  },
  {
    id: 7,
    nome: "Roberto Almeida",
    email: "roberto.almeida@example.com",
    senha: "senhaSegura789",
    avatar: "http://example.com/avatar7.jpg",
    endereco: {
      rua: "Rua do Mar",
      numero: "404",
      bairro: "Litoral",
    },
    data_nascimento: new Date("1983-03-03"),
  },
  {
    id: 8,
    nome: "Patrícia Rocha",
    email: "patricia.rocha@example.com",
    senha: "senhaSegura890",
    avatar: "http://example.com/avatar8.jpg",
    endereco: {
      rua: "Avenida da Liberdade",
      numero: "505",
      bairro: "Centro",
    },
    data_nascimento: new Date("1994-07-07"),
  },
  {
    id: 9,
    nome: "Gustavo Martins",
    email: "gustavo.martins@example.com",
    senha: "senhaSegura901",
    avatar: "http://example.com/avatar9.jpg",
    endereco: {
      rua: "Rua da Paz",
      numero: "606",
      bairro: "Nova",
    },
    data_nascimento: new Date("1990-01-01"),
  },
  {
    id: 10,
    nome: "Juliana Mendes",
    email: "juliana.mendes@example.com",
    senha: "senhaSegura012",
    avatar: "http://example.com/avatar10.jpg",
    endereco: {
      rua: "Rua do Amor",
      numero: "707",
      bairro: "Antiga",
    },
    data_nascimento: new Date("1986-09-09"),
  },
];

function LerTodos(){
  return mockUsuarios
}
function Ler(id_){
  
  return mockUsuarios.filter((mockUsuarios) => mockUsuarios.id === id_)
  
 
}
function Deletar(id_){
  
  return mockUsuarios.filter((mockUsuarios) => mockUsuarios.id != id_)
  
}
function Atualizar(id_,nome,email,senha,rua,numero,bairro){
  
  mockUsuarios.filter((mockUsuarios) => mockUsuarios.id === id_)
  for(i=0;i<mockUsuarios.length;i++){
    if(mockUsuarios[i].id == id_){
      mockUsuarios[i].nome = nome
      mockUsuarios[i].email = email
      mockUsuarios[i].senha = senha
      mockUsuarios[i].endereco.rua = rua
      mockUsuarios[i].endereco.numero = numero
      mockUsuarios[i].endereco.bairro = bairro
    }
  }
  
 
  
  return mockUsuarios
}
function Criar(nome,email,senha,avatar,rua,numero,bairro){
  mockUsuarios.push([])
  mockUsuarios[mockUsuarios.length -1].push({
    id: mockUsuarios.length, 
    nome: nome,
    email: email,
    senha: senha ,
    avatar: avatar,
    endereco: {
      rua: rua,
      numero: numero,
      bairro: bairro,
    },
    data_nascimento: new Date("1986-09-09"),
  },)
  return mockUsuarios
}

// console.log(Ler(10))
// console.log(LerTodos())
// console.log(Deletar(10))
console.log(Atualizar(10,"andre", "andre.oi@gamli.com",1234,"rua jairo",9573,"são francisco"));
// console.log(Criar("andre","juliana.mendes@example.com",123,"avatar","rua",123,"bairro"))


















// function AtualizarTUDO(id_,nome,email,senha,avatar,rua,numero,bairro){
//   mockUsuarios.filter((mockUsuarios) => mockUsuarios.id === id_)
//   mockUsuarios.nome = nome
//   mockUsuarios.email = email
//   mockUsuarios.senha = senha
//   mockUsuarios.avatar = avatar
//   mockUsuarios.endereco = [rua,numero,bairro]

  
//   return mockUsuarios
// }
// console.log(AtualizarTUDO(10,"andre","exemplooi@gmail.com",123,"http://example.com/avatar10.jp","vitoria regia",123,"bairro flor"));
