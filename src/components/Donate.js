import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/shooting_star.gif'; // ใส่ path ของ background image ของคุณ

// ตัวอย่างข้อมูลผู้บริจาค
const sampleDonors = [
  { name: 'ยังไม่มีผู้บริจารใดๆ', amount: 0 },
  
];

const Donate = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูลผู้บริจาค
    // ตัวอย่างการตั้งค่าเป็น sampleDonors
    // ในการใช้งานจริง คุณจะต้องเรียก API ที่เก็บข้อมูลผู้บริจาค
    setDonors(sampleDonors);
  }, []);

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '20px',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    title: {
      fontSize: '2em',
      marginBottom: '20px',
    },
    donorsList: {
      width: '80%',
      maxWidth: '600px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      textAlign: 'left',
    },
    donorItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #444',
    },
    donorName: {
      fontWeight: 'bold',
    },
    donorAmount: {
      fontStyle: 'italic',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>รายชื่อผู้บริจาค</h1>
      <div style={styles.donorsList}>
        {donors.map((donor, index) => (
          <div key={index} style={styles.donorItem}>
            <span style={styles.donorName}>{donor.name}</span>
            <span style={styles.donorAmount}>{donor.amount}บาท</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donate;
