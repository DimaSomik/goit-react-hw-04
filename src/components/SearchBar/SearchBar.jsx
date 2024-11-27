import css from './SearchBar.module.css'    
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useImage } from '../../ImageProvider';

const unSplashKey = "jAZjy4bfdQK896m82TF8SWTteFJVjhDTLqMogJ1pLck";

const SearchBar = ({ update, query, page }) => {
    const { ErrorTrue, ErrorFalse, LoadingTrue, LoadingFalse } = useImage();   
    const searchID = nanoid();

    const getData = async (e) => {
        e.preventDefault();
        const searchQuery = e.target.elements[0].value;
        if (searchQuery !== "") {
            ErrorFalse();
            LoadingTrue();
            const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=16&query=${searchQuery}&client_id=${unSplashKey}`)
                                    .then((response) => {return response.data.results});
            const urlsArray = [];
            data.map((item) => urlsArray.push(item));
            LoadingFalse();
            update(urlsArray);
            query(searchQuery);
            page(1);
        } else {
            update([]);
            ErrorTrue();
        }
      };

      /* Second Solution */
    //   const getData = async (e) => {
    //     e.preventDefault();
    //     const searchQuery = e.target.elements[0].value;
        
    //     try {
    //         ErrorFalse();
    //         LoadingTrue();
    //         const data = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=16&query=${searchQuery}&client_id=${unSplashKey}`)
    //                                 .then((response) => {return response.data.results});
    //         const urlsArray = [];
    //         data.map((item) => urlsArray.push(item));
    //         LoadingFalse();
    //         update(urlsArray);
    //         query(searchQuery);
    //         page(1);
    //     } catch (error) {
    //         console.log(error)
    //         ErrorTrue();
    //     }
    //   };  

    return (
        <header>
            <form onSubmit={getData} className={css.FormBox}>
                <input
                className={css.FormInput}
                id={searchID}   
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}

export default SearchBar