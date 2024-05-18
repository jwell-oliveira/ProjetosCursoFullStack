// Endpoint Create [POST] /personagem
app.post('/personagem', function (req, res) {
  // Acessamos o Body da Requisição
  const body = req.body

  // Acessamos a propriedade `nome` do body
  const novoItem = body.nome

  // Checar se o `nome` está presente no body
  if (!novoItem) {
    return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  // Checar se o novoItem está na lista ou não
  if (lista.includes(novoItem)) {
    return res.status(409).send('Esse item já existe na lista.')
  }

  // Adicionamos na lista
  lista.push(novoItem)

  // Exibimos uma mensagem de sucesso
  res.status(201).send('Item adicionado com sucesso: ' + novoItem)
})

// Endpoint Update [PUT] /personagem/:id
app.put('/personagem/:id', function (req, res) {
  // Acessamos o ID dos parâmetros de rota
  const id = req.params.id

  // Checamos se o item do ID - 1 está na lista, exibindo
  // uma mensagem caso não esteja
  if (!lista[id - 1]) {
    return res.status(404).send('Item não encontrado.')
  }

  // Acessamos o Body da requisição
  const body = req.body

  // Acessamos a propriedade `nome` do body
  const novoItem = body.nome

  // Checar se o `nome` está presente no body
  if (!novoItem) {
    return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  // Checar se o novoItem está na lista ou não
  if (lista.includes(novoItem)) {
    return res.status(409).send('Esse item já existe na lista.')
  }

  // Atualizamos na lista o novoItem pelo ID - 1
  lista[id - 1] = novoItem

  // Enviamos uma mensagem de sucesso
  res.send('Item atualizado com sucesso: ' + id + ' - ' + novoItem)
})

// Endpoint Delete [DELETE] /personagem/:id
app.delete('/personagem/:id', function (req, res) {
  // Acessamos o parâmetro de rota
  const id = req.params.id

  // Checamos se o item do ID - 1 está na lista, exibindo
  // uma mensagem caso não esteja
  if (!lista[id - 1]) {
    return res.status(404).send('Item não encontrado.')
  }

  // Remover o item da lista usando o ID - 1
  delete lista[id - 1]

  // Enviamos uma mensagem de sucesso
  res.send('Item removido com sucesso: ' + id)
})
