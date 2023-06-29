import useGenres, { Genre } from "../hooks/useGenres"

const GenreList = () => {
    const {data} = useGenres();
    return (
        <ul>
            {data.map(genres => <li key={genres.id}>{genres.name}</li>)}
        </ul>
    )
}

export default GenreList