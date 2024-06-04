import React from 'react'
import styles from '@/styles/members/member.module.css'
import Swal from 'sweetalert2'
import { FaUserEdit } from "react-icons/fa";

export default function ChangAvatar() {
  const changAvatarBtn = () => {
    Swal.fire({
      title: '請上傳頭像',
      html:
        ` <input type="file" name="file">`,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: '確認上傳',
      confirmButtonColor: '#192a56',
      cancelButtonText:'取消',
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const avatarUrl = `
          http://localhost:3005/api/members/change-avatar
          `
          const response = await fetch(avatarUrl)
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `)
          }
          return response.json()
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `)
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `上傳成功`,
          icon: 'success',
          confirmButtonText: '了解',
          confirmButtonColor: '#192a56',
        })
      }
    })
  }
  /* 
  
  */
  return (
    <>
      <button className={`${styles.changAvatarBtn}`} onClick={changAvatarBtn} type='button' title='更換頭像'>
      <FaUserEdit size= {22}/>
      </button>
    </>
  )
}
