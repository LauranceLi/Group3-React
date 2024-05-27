
import Image from 'next/image'
import useMemberInfo from '@/hooks/use-member-info'
import styles from '@/styles/members/login.module.css'

function Avatar({ width, height }) {
  const { avatar } = useMemberInfo()

  if (!avatar) {
    setAvatar('/images/flowers.jpg')
  }

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} style={{ width: width, height: height }}>
        <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Avatar
