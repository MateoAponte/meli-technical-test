import { useDispatch, useSelector } from 'react-redux';
import { parsedCurrency } from '../../../common/utils/parsedCurrency';
import { GalleryItem } from './GalleryItem';
import { useEffect } from 'react';
import { AppDispatch } from '../../../types/AppDispatch';
import { updateSelectedThumbnail } from '../redux/slice';
import { DETAILED_NAME } from '../redux/types';

const isNew = (condition: string) => {
  return condition === 'new';
};

export const ProductDetailed: React.FC<any> = ({ item = {} }) => {
  const dispatch = useDispatch()<AppDispatch>;
  const selectedThumbnail = useSelector((state: any) => state[DETAILED_NAME].selectedThumbnail);

  const parsedNumber = (value: string) => {
    return parsedCurrency(value);
  };
  const setSelection = (url: string) => {
    dispatch(updateSelectedThumbnail(url as any));
  };
  const setThumbnail = () => {
    const inputs = document.querySelectorAll("[name='thumbnail-cover']") as any;
    if (inputs.length > 0) {
      inputs[0].checked = true;
    }
  };
  useEffect(() => {
    setSelection(item.picture?.gallery[0].url);
    setThumbnail();
  }, [item]);

  return (
    <div className="detailed-data">
      <section className="detailed-info">
        <section className="detailed-image">
          <div className="detailed-image__gallery">
            {item.picture?.gallery.map((thumbnail: any) => (
              <GalleryItem thumbnail={thumbnail} setSelection={setSelection} />
            ))}
          </div>
          <div className="detailed-image__picture">
            <img src={selectedThumbnail} alt={item.title} />
          </div>
        </section>
        <section className="detailed__sell-info">
          <h1 className="detailed__summary">
            {isNew(item.condition) && 'Nuevo'} | {parsedNumber(String(item.sold_quantity))}
          </h1>
          <div className="detailed-header">
            <h3 className="detailed__title"> {item.title} </h3>
            <div className="detailed__price">
              <h6>{parsedNumber(String(item.price?.amount))}</h6>
            </div>
          </div>
          <div className="detailed__actions">
            <button className="detailed__shop">Comprar ahora</button>
          </div>
        </section>
      </section>
      <div className="divider"></div>
      <section className="detailed-description">
        <div className="detailed-description__title">
          <h3> Descripción </h3>
        </div>
        <div className="detailed-description__text">
          <span> {item.description} </span>
        </div>
      </section>
    </div>
  );
};
