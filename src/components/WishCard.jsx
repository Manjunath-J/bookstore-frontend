import React from 'react';
import "../styles/WishCard.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import photo from "../assets/book.jpg"

const WishCard = () => {
    return (
        <div>
            <div className='c-wish'>
                <div className='w-p-div'>
                        <img src={photo} alt="book" className='w-img'/>
                </div>
                <div className='w-b-div'>
                    <div className='w-b-details'>
                        <span className='w-b-name'>book name</span>
                        <span className='w-b-auth'>by author</span>
                    </div>
                    <div className='w-b-price'>
                        <span className="w-p"> Rs.100 <del className="w-del">Rs.200</del></span>
                    </div>
                </div>
                <div className='d-icon'>
                    <DeleteForeverIcon sx={{color:"#9D9D9D"}}></DeleteForeverIcon>
                </div>
            </div>
        </div>
    );
}

export default WishCard;
