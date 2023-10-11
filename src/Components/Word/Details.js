// lib imports
import { v4 as uuidv4 } from 'uuid'

// Assets
import '../../Styles/word.css'
import { useEffect } from 'react'

const RenderMeaning = ({ partOfSpeech, synonyms, definitions }) => {
  return (
    <section>
      <hr/>
      <h3 className='type'>{partOfSpeech}</h3>
      <section className='space-y-1'>
        <h4 className='meanings'>Meaning</h4>
        <ul className='list-disc p-3'>
          { definitions.map((def) => {
              const { definition, example } = def
              return (
              <li key={uuidv4()}>
                <p>{definition}</p>
                <p>{example}</p>
              </li>
              )
            })}
        </ul>
        <p hidden={synonyms.length <= 0}>
          <span className='meanings'>Synonyms</span>{ synonyms.map((syn) => <span key={uuidv4()} className='synonyms'>{"  "}{syn}</span> )}
        </p>
      </section>
    </section>
  )
}


const DetailsSuccess = ({ word, phonetic, phonetics, meanings }) => {
  return (
    <div className='space-y-2 m-2 p-2'>
      <section className='details'>
        <h1 className='word-heading'>{word}</h1>
        <span className='phonetic'>{phonetic}</span>
      </section>

      <section className='details'>
        { meanings.map((meaning) => <RenderMeaning key={uuidv4()} {...meaning} />)}
      </section>
    </div>
  )
}


const DisplayError = ({ message, resolution, title }) => {
  return (
    <div>
      <section className='error'>
        <h1 className='word-heading text-left text-red-600'>{title}</h1>
        <h2>{message}</h2>
        <p>{resolution}</p>
      </section>
    </div>
  )
}


const DetailsList = ({ details }) => {
  return (
    <div>
      { details.map((detail) => <DetailsSuccess key={uuidv4()} {...detail}/> ) }
    </div>
  )
}

export function Details({ details, hasError }){

  useEffect(() => {
  },[details, hasError])

  return (
    <div className="main">
       { hasError ? <DisplayError {...details}/> : <DetailsList details={details} /> }
    </div>
  )
}