import css from './ImageGallery.module.css'

const ImageCard = ({ src, alt, onClick }) => {
    return (
        <div>
            <img src={src} alt={alt} className={css.Image} onClick={onClick}/>
        </div>
    );
}

const ImageGallery = ({ imagesArray, imageClick }) => {
    return (
        <ul className={css.GalleryBox}>
            {imagesArray.map((item) => {
                return <li key={item.id}>
                    <ImageCard src={item.urls.small} alt={item.alt_description} onClick={() => {imageClick(item)}}/>
                </li>
            })}
        </ul>
    );
}

export default ImageGallery