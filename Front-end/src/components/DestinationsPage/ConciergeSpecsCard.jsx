import React from 'react'

function ConciergeSpecsCard({ img, text }) {
    return (
        <div style={styles.card}>
          <img src={img} alt="Icon" style={styles.icon} />
          {/* <i class="fa-solid fa-glasses"></i> */}
          <span className='font-secondary' style={styles.text}>{text}</span>
        </div>
      );
}

const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',  
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      cursor: 'pointer'
    },
    icon: {
      width: '40px',
      height: '40px',
      marginRight: '15px',
    },
    text: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#333',
    },
  };

export default ConciergeSpecsCard