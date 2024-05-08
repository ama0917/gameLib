import React from 'react';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <div className={styles.filterPanel}>
      <h3>Filter Results</h3>
      <div className={styles.filterGroup}>
        <input
          type="checkbox"
          id="visualImpairments"
          checked={filters.visualImpairments}
          onChange={() => handleFilterChange('visualImpairments')}
        />
        <label htmlFor="visualImpairments">Visual Impairments</label>
      </div>
      <div className={styles.filterGroup}>
        <input
          type="checkbox"
          id="hearingImpairments"
          checked={filters.hearingImpairments}
          onChange={() => handleFilterChange('hearingImpairments')}
        />
        <label htmlFor="hearingImpairments">Hearing Impairments</label>
      </div>
      <div className={styles.filterGroup}>
        <input
          type="checkbox"
          id="motorDisabilities"
          checked={filters.motorDisabilities}
          onChange={() => handleFilterChange('motorDisabilities')}
        />
        <label htmlFor="motorDisabilities">Motor Disabilities</label>
      </div>
      <div className={styles.filterGroup}>
        <input
          type="checkbox"
          id="blindness"
          checked={filters.blindness}
          onChange={() => handleFilterChange('blindness')}
        />
        <label htmlFor="blindness">Blindness</label>
      </div>
    </div>
  );
};

export default FilterPanel;