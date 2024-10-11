import "./EmotionItem.css";
import { getEmotionImage } from "../utils/get-emotion-images";

const EmotionItem = ({ onClick, emotionId, emotionName, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}
      `}
      name="emotionId">
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
