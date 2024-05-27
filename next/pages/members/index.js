import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import MemberCenter from '@/components/members/member'

import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const checkUrl = 'http://localhost:3005/api/members/check'

export default function Members() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const res = await fetch(checkUrl, {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (data.status === 'success') {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (!isLoggedIn) {
    router.push('/members/login');
    return null; // 防止在redirect之前顯示任何內容
  }

  return (
    <>
    <Preloader />
      <Navbar />
      <MemberCenter />
      <Footer />
    </>
  );
}