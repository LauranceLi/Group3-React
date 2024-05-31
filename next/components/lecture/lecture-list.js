import React, { useState, useEffect } from 'react'
import Preloader from '@/components/layout/preloader'
import Banner from '@/components/layout/banner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import SelectBar from '/components/lecture/select-bar'

import styles from '@/styles/lectures/lectures.module.css'

import LectureCard from '@/components/lecture/lecture-card'
import useFetchLectures from '@/hooks/use-fetch-lectures'

export default function LectureList({ limit }) {
  const [filteredLectures, setFilteredLectures] = useState([]);
  const [category, setCategory] = useState('');
  const { lectures: allLectures, loading } = useFetchLectures(); // Destructuring the returned object

  useEffect(() => {
    if (!loading) { // Ensure lectures are loaded before filtering
      if (category) {
        setFilteredLectures(
          allLectures.filter((lecture) => lecture.category === category)
        );
      } else {
        setFilteredLectures(allLectures);
      }
    }
  }, [category, allLectures, loading]); // Include loading state in dependency array

  const handleSelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const results = limit ? filteredLectures.slice(0, limit) : filteredLectures;

  return (
    <>
      <SelectBar handleSelect={handleSelect} />

      <div className={styles.lectureList}>
        {results.map((lecture) => (
          <LectureCard
            key={lecture.lecture_id}
            country={lecture.country}
            date={lecture.date.slice(0, 10)}
            time={lecture.date.slice(11, 16)}
            place={lecture.place}
            title={lecture.title}
            img={lecture.img_id}
            introduction={lecture.introduction}
          />
        ))}
      </div>
    </>
  )
}
