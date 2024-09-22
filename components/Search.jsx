function Search() {
  return (
    <div class="search-main">
        <div class="search-content">
          <h1>O que procura?</h1>
          <select name="Tipo do imóvel" id="">
            <option value="">Casa</option>
            <option value="">Apartamento</option>
            <option value="">Kitnet/Estúdio</option>
          </select>
          <select name="Aluguel/Compra" id="">
            <option value="">Aluguel</option>
            <option value="">Compra</option>
          </select>
          <input type="text" placeholder="Localização" />
          <input type="text" placeholder="Valor estimado"/> <br />
          <button>Buscar</button>
        </div>
    </div>
  )
}

export default Search