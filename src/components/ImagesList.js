import React from 'react';
import Image from './Image';

const ImagesList = ({images}) => {
    return (
        <div className="col-12 p-5 row">
            {images.map(imagen => (
                <Image
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}

export default ImagesList;