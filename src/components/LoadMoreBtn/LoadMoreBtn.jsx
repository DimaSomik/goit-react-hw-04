import css from './LoadMoreBtn.module.css'
import axios from 'axios';
import { useImage } from '../../ImageProvider';

const unSplashKey = "jAZjy4bfdQK896m82TF8SWTteFJVjhDTLqMogJ1pLck";

const LoadMoreBtn = ({ query, page, update, setNewPage }) => {
    const {LoadingTrue, LoadingFalse} = useImage();

    const loadMore = async () => {
        LoadingTrue();
        const newPage = page+1;
        const data = await axios.get(`https://api.unsplash.com/search/photos?page=${newPage}&per_page=16&query=${query}&client_id=${unSplashKey}`)
                                .then((response) => {return response.data.results});
        const urlsArray = [];
        data.map((item) => urlsArray.push(item));
        setNewPage(newPage);
        LoadingFalse();
        update(urlsArray);                                    
    };

    return (
        <button type="button" className={css.Button} onClick={loadMore}>Load More</button>
    );
}

export default LoadMoreBtn