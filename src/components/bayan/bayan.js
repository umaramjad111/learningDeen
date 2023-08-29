import React , { useState} from 'react'
import YouTube from 'react-youtube';
import { Madina } from '../../utils/image';
import Modal from 'react-bootstrap/Modal';
export default function Bayan() {

    const [id, setId] = useState();

  const handleClose = () => setId(null);

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // autoplay: 1, // Auto-play the video
        },
      };



    const bayanArr = [
        {
            id: 1,
            name: "Baghdad Ke Ek Buzurg Darzi Ka Kissa | Peer Ajmal Raza Qadri Bayan",
            image: Madina,
            videoId: "U8geOlHa6mo"
        },
        {
            id: 2,
            name: "HUZOOR ﷺ Ka Kis Qadar Andaz E Karam | Peer Ajmal Raza Qadri Bayan",
            image: Madina,
            videoId: "YlTMpBg6LN8"
        },
        {
            id:3,
            name: "Hazrat Abu Bakar Siddique aur Hazrat Umar Farooq ka waqia By Peer Ajmal Raza Qadri",
            image: Madina,
            videoId: "LerfFaLG6sg"
        },
        {
            id:4,
            name: "Hazrat Abu Bakar Siddique aur Hazrat Umar Farooq ka waqia By Peer Ajmal Raza Qadri",
            image: Madina,
            videoId: "LerfFaLG6sg"
        },

    ]

    const [expanded, setExpanded] = useState(false);
    const itemsToShow = expanded ? bayanArr : bayanArr.slice(0, 3);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    
  return (
    <div>
        <h3 className='text-center p-2 ms-2 me-2 mt-3  mb-2 bg-light shadow border-2 text-black'>Islamic Bayan</h3>
        <div className='row container-fluid flex justify-content-center w-100  '>
            {itemsToShow.map((item, i) => (
                <>
             <div key={i} className="col-lg-4" style={{cursor:"pointer"}} onClick={() => setId(item)}>
                <img src={item.image} alt="" className='w-100' />
                <p>{item.name}</p>
                {/* <YouTube videoId= {item.videoId} opts={opts} /> */}
             </div>  
             <Modal show={id} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{id?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <YouTube videoId= {id?.videoId} opts={opts} />
        </Modal.Body> 
      </Modal>
            </>
            ))}
           
          
        </div>

        {bayanArr.length > 3 && (
        <button className='btn btn-dark opacity-75 mb-2'  onClick={handleExpandClick}>
          {expanded ? 'Unexpand' : 'View All'}
        </button>
      )}
        
    </div>
  )
}
