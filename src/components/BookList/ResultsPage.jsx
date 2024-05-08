import React from 'react';
import BookList from './BookList';
import FilterPanel from './FilterPanel';
import styles from './ResultsPage.module.css';

const ResultsPage = () => {
  return (
    <div className={styles.resultsPage}>
      <FilterPanel />
      <BookList />
    </div>
  );
};

export default ResultsPage;