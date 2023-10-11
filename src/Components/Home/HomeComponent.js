import {
	useEffect,
	useState
} from 'react'

// Assets
import '../../Styles/home.css'

// Components
import { SearchBar } from './SearchBar'
import { Details } from '../Word/Details'

function TopBar(){
	return (
		<div className='icon-bar'>
			<ion-icon name="book-outline"></ion-icon>
			<section className='icon-bar-section'>
				<button>
					<ion-icon name="toggle"></ion-icon>
				</button>
				<button>
					<ion-icon name="moon-outline"></ion-icon>
				</button>
			</section>
		</div>
	)
}

export const HomeComponent = () => {
	const [ wordDetails, setWordDetails ] = useState([]);
	const [ error, setError ] = useState(false);

	function fetchWord(word){
		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
		fetch(url)
		.then(r => {
			r.ok ?
			r.json().then(d => { setWordDetails(d); setError(false)}) :
			r.json().then(d => { setWordDetails(d); setError(true)})
			.catch(e => console.log(e))
		})
	}

	useEffect(() => {
	},[wordDetails, error])

	return (
		<div className="tablet:container m-auto p-6 text-center">
			<div className="space-y-8">
				<TopBar />
				<SearchBar submitAction={fetchWord}/>
				<Details details={wordDetails} hasError={error}/>
			</div>
		</div>
	)
}