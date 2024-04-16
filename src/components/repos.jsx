import React from 'react'
import useFetch from './usefetch'
const Repos = () => {
    const {data: repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos")
  return (
    <div className='repos'>
        <h2 className="Repos-header">All Repository owned by Youngie8</h2>
        <div className="repos-content">
            {error && <div> {error} </div>}
            {isPending && <div className='loading'> Loading... </div>}
            {repos && repos.map((repo) => (
                <div key={repo.id}>{repo.name}</div>
            ))}
        </div>
    </div>
  )
}

export default Repos