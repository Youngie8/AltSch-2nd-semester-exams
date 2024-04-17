import React from 'react'
import useFetch from './usefetch'
const Repos = () => {
    const {data: repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos")
    
  return (
    <div className='repos'>
        <div className="repos-search-header">
            <input 
            type="search"
            name="search-form" 
            className='repos-search' 
            placeholder='search...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
             />
        </div>
        <div className="repos-content">
            {error && <div> {error} </div>}
            {isPending && <div className='loading'> Loading... </div>}
            {repos && repos.map((repo) => (
                <div key={repo.id} className={"border-" + String(repo.id).charAt(2) % 4 + " repos-repo"}>
                    <h3 className={"color-" + String(repo.id).charAt(4)}>{repo.name}</h3>
                    <p>{repo.description ? repo.description : "No description for this repo"}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Repos