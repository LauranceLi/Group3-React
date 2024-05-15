import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '/styles/login.module.css'

function Avatar() {
  const [avatarPath, setAvatarPath] = useState('/images/cedarAvatar.jpg')

  // useEffect(() => {
  //   // 從資料庫中獲取網址的邏輯
  //   const fetchImageUrl = async () => {
  //     try {
  //       const response = await fetch('YOUR_API_ENDPOINT');
  //       const data = await response.json();
  //       setImageUrl(data.imageUrl); // 假設資料中有一個叫做imageUrl的屬性存儲了圖片的網址
  //     } catch (error) {
  //       console.error('Error fetching image URL:', error);
  //     }
  //   };

  //   fetchImageUrl();
  // }, []);

  return (
    <>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <Image src={avatarPath} alt="Avatar" width={300} height={300} />
        </div>
      </div>
    </>
  )
}

export default Avatar
