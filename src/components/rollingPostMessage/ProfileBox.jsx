import './profileBox.scss';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { BASE_URL } from '../../constants/url.js';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';
import { useFormDataSet } from '../../hooks/useFormDataSet';
import ProfileImage from './ProfileImage';

function ProfileBox() {
  const {data, error} = useGetData(`${BASE_URL}profile-images/`);
  const [currentProfileImg, setCurrentProfileImg] = useState(null);
  const {setData} = useContext(MsgCreateDataSet)

  if(error) {
    alert('프로필 이미지를 불러오는데 실패했습니다.');
  }

  useEffect(() => {
    setCurrentProfileImg(data?.imageUrls[0]);
  },[data]);

  useFormDataSet(setData, 'profileImageURL', currentProfileImg);
  
  return (
    <div className="send-form__profile-wrap">
      <div className="profile-picture--xlarge">
        {currentProfileImg && <img src={currentProfileImg} alt="프로필 이미지" />}
      </div>
      <div className="send-form__profile-wrap-inner">
        <span>프로필 이미지를 선택해주세요!</span>
        <ul className="send-form__profile-list">
          {data && data.imageUrls.map((imageUrl) => {
            return <ProfileImage key={imageUrl} imgUrl={imageUrl} setCurrentImg={setCurrentProfileImg} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default React.memo(ProfileBox);