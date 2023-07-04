import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
   return (
    <div>
        <p className='f3'>
            {'Do you want to find faces in your photos? Let\'s go!'}
        </p>
        <div className='center'>
            <div className='center form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button
                    className='w-30 grow f4 i link ph3 pv2 dib button'
                    onClick={onButtonSubmit}
                >Find the faces!</button>
            </div>
        </div>
    </div>
   );
}

export default ImageLinkForm;