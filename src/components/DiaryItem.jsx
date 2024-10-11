import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../utils/get-emotion-images";
import { getStringedDate } from "../utils/get-stringed-date";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <section
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </section>
      <section onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">{getStringedDate(createdDate)}</div>
        <div className="content">{content}</div>
      </section>
      <section onClick={() => nav(`/edit/${id}`)} className="button_section">
        <Button text={"수정하기"} />
      </section>
    </div>
  );
};

export default DiaryItem;
