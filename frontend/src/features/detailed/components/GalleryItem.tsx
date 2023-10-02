export const GalleryItem: React.FC<any> = ({ thumbnail, setSelection }) => {
  return (
    <div className="detailed-image__gallery-button">
      <input
        className="detailed-image__gallery-input"
        type="radio"
        id={thumbnail.id}
        name="thumbnail-cover"
        defaultValue={thumbnail.id}
        onClick={() => setSelection(thumbnail.url)}
      />
      <label className="detailed-image__gallery-item" htmlFor={thumbnail.id}>
        <div className="detailed-image__gallery-image">
          <img src={thumbnail.url} alt="imageAboutProductSearch" />
        </div>
      </label>
    </div>
  );
};
