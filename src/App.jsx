import './App.css'
import { useState } from 'react'
import { useImage } from './ImageProvider'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import { ThreeDots } from 'react-loader-spinner'

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { isError, isLoading } = useImage();
  const [modalData, setModalData] = useState(null);

  const updateGallery = (img) => {
    setImages(img);
  };

  const addMoreImages = (img) => {
    setImages((prev) => {
      return prev.concat(img);
    });
  };

  const openModal = (image) => {setModalData(image)};

  const closeModal = () => {setModalData(null)};

  return (
    <>
    <SearchBar update={updateGallery} query={setQuery} page={setPage}/>
    <ImageGallery imagesArray={images} imageClick={openModal}/>
    {isLoading && <div className='Loader'><ThreeDots /></div>}
    {images.length > 0 && <LoadMoreBtn query={query} page={page} update={addMoreImages} setNewPage={setPage}/>}
    {(isError) && <p>You can&apos;t leave field empty </p>}
    {modalData && <ImageModal data={modalData} onClose={closeModal}/>}
    </>
  )
}

export default App
