import './card.scss';
import '../../../styles/components.scss';
import { formatDate } from '../../../utills/time';
import Badge from './Badge';

export default function Card({
  sender,
  content,
  createdAt,
  relationship,
  profileImageURL,
}) {
  const formatedDate = formatDate(createdAt);

  // TODO: 모달 실행으로 바꿔야 함!
  const handleCardClick = () => {
    console.log('카드 클릭!');
  };

  return (
    <button className="card" onClick={handleCardClick}>
      <div className="card--container">
        <div className="card--from-group">
          <div className="card--from-group--img profile-picture--large">
            <img src={profileImageURL} alt="프로필 이미지" />
          </div>

          <div className="card--profile-text-group">
            <div className="card--from">
              <span>From.</span>
              <strong>{sender}</strong>
            </div>
            <Badge relationship={relationship} />
          </div>
        </div>
        <div className="content">
          <p className="content--short">{content}</p>
        </div>
        <div className="createdAt">{formatedDate}</div>
      </div>
    </button>
  );
}
