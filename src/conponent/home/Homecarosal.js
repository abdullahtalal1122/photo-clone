import { useState } from "react";
import styles from "./homecarosal.module.css"
import Photos from "./photos"
import Modal from "../model/Model";

export default function HomeCarosal() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);

    const handleclick =(index,photos)=>{
        setClickedImg(photos);
        setCurrentIndex(index);
    }

    const handelRotationRight = () => {
        const totalLength =Photos.length;
        // console.log(totalLength , (currentIndex +1 >=totalLength) , Photos[0])
        if (currentIndex + 1 >= totalLength) {
          setCurrentIndex(0);
          const newUrl = Photos[0];
          setClickedImg(newUrl);
          return;
        }

        const newIndex = currentIndex + 1;
        const newUrl = Photos.filter((item) => {
          return Photos.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
        // console.log(clickedImg ,currentIndex);
      };
    
      const handelRotationLeft = () => {
        const totalLength = Photos.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = Photos[totalLength - 1];
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl =Photos.filter((item) => {
          return Photos.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };
    
    const photoElements = Photos.map((Photos, index) => (
        <div>
            <img src={Photos} alt={`Image ${index + 1}`} onClick={() => handleclick(index,Photos)}/>
        </div>
    ));

    return (
        <div className={styles.Grid}>
            <div>
                <div className={styles.Div}>

                <h1>2022 EVENT PHOTOS</h1>
                <p>Out incredible Next.js community got together in San Francisco for our first ever in-person conference!</p>
                </div>
             </div>
            {photoElements}
            {clickedImg && <Modal handleclick={handleclick} currentIndex={currentIndex} Photos={Photos} clickedImg={clickedImg} handelRotationRight={handelRotationRight} handelRotationLeft={handelRotationLeft} setClickedImg={setClickedImg} />}
        </div>
    );
}

