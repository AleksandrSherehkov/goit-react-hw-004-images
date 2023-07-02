import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ fotos }) => {
  return (
    <>
      <ImageGalleryStyled>
        {fotos.map(item => (
          <ImageGalleryItem key={item.id} {...item} />
        ))}
      </ImageGalleryStyled>
    </>
  );
};
