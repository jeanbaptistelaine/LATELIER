export default function SearchInput({ searchInput, setSearchInput }) {
  return (
    <div className='search-container'>
      <input
        type='text'
        value={searchInput}
        name='search-player'
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Rechercher un joueur'
      ></input>
    </div>
  )
}
