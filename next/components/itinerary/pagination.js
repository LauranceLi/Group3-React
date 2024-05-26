import Pagination from 'react-bootstrap/Pagination';
import styles from '@/styles/itinerary.module.css'


function PaginationDemo() {
  return (
    <Pagination className={styles.Pagination}>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationDemo;