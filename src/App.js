import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { useState, useEffect } from "react";
import { getAllImages, uploadFile } from "./handlers/Firestorage.js";

function App() {
  const [count, setCount] = useState();
  const [inputs, setInputs] = useState({ title: null, file: null, url: null });
  const [images, setImages] = useState([]);
  const [tempImages,setTempImages]=useState([]);
  const fetchPhotos = async () => {
    let images;
    images = await getAllImages();
    setImages(images);
    setTempImages(images);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  
  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInputs({
        ...inputs,
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInputs({
        ...inputs,
        title: e.target.value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    fetchPhotos();
    e.preventDefault();
    uploadFile(inputs.title, inputs.file);
    setInputs({ title: null,file: null, url: null });
  };

  useEffect(() => {
    setCount(`You have ${images.length} image${images.length > 1 ? "s" : ""}`);
  }, [images]);
   

  const filteredPhotos = (search) => {
    if(search!=""){
    const photos=tempImages;
    const specifiedString = search;
    const filteredArray = photos.filter((item) => {
      const fieldValue = item.title.toLowerCase();
      const specifiedSubpart = specifiedString.toLowerCase();
      return fieldValue.includes(specifiedSubpart);
      
    });
    //console.log(filteredArray);
    setImages(filteredArray);
    }
    else {
      fetchPhotos();
    }
    
  };
  
  
  return (
    <>
      <Navbar onChange={filteredPhotos}/>
      <p className="text-center ">{count}</p>
      <Home
        inputs={inputs}
        handleOnChange={handleOnChange}
        images={images}
        handleOnSubmit={handleOnSubmit}
      />
    </>
  );
}

export default App;
