// libs
import { useState } from 'react'

// Assets
import '../../Styles/home.css'

export function SearchBar({ submitAction }){
	const [ word, setWord ] = useState("");

	return (
		<div className='search-bar'>
			<form onSubmit={(e) => { e.preventDefault(); submitAction(word); setWord("") }}>
				<input
					type="text"
					value={word}
					onChange={(e) => { e.preventDefault(); setWord(e.target.value) }}
					className='input rounded-lg bg-slate-100 dark:bg-zinc-700'
					placeholder='Look for a word ...'/>
				<button onClick={() => { submitAction(word); setWord("") }}>
					<ion-icon name="search-outline"></ion-icon>
				</button>
			</form>
		</div>
	)
}