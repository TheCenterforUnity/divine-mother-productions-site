import React from 'react';

interface DonateButtonProps {
  onClick: () => void;
}

export const DonateButton: React.FC<DonateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgb(22, 157, 221)',
        color: 'white',
        borderRadius: '0.5rem',
        fontWeight: 500,
        fontSize: '1.125rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transform: 'scale(1)',
        transition: 'all 0.3s ease',
        opacity: 1,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      }}
      onMouseOver={(e) => {
        const btn = e.currentTarget;
        btn.style.backgroundColor = 'rgb(20, 141, 199)';
        btn.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        const btn = e.currentTarget;
        btn.style.backgroundColor = 'rgb(22, 157, 221)';
        btn.style.transform = 'scale(1)';
      }}
    >
      <span style={{ opacity: 1 }}>Be a Founding Donor</span>
    </button>
  );
}; 