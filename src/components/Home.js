import React, { useState } from 'react';
import profileImage from '../assets/profile-picture.png';
import usageImage from '../assets/usage-example.png'; // ตัวอย่างรูปภาพการใช้งาน
import usageImage2 from '../assets/how to 1.png';
import usageImage3 from '../assets/how to 2.png';
import usageImage4 from '../assets/how to 3.jpg';
import usageImage5 from '../assets/how to 4.png';
import usageImage6 from '../assets/how to 5.png';
import backgroundImage from '../assets/star-background-gif-_no-shooting-star.webp';


const Home = () => {
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1261274366721790006&permissions=1698730973068352&integration_type=0&scope=bot";

  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDonate = async () => {
    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage('Donation successful! Thank you!');
      } else {
        setMessage('Donation failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const styles = {
    home: {
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
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    homeContent: {
      margin: '10px 0',
    },
    inviteButton: {
      backgroundColor: '#61dafb',
      color: '#282c34',
      padding: '10px 20px',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    inviteButtonHover: {
      backgroundColor: '#21a1f1',
    },
    usageSection: {
      marginTop: '20px',
      textAlign: 'left',
      width: '80%',
      maxWidth: '600px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    usageImage: {
      width: '100%',
      borderRadius: '10px',
      marginTop: '20px',
    },
    donateSection: {
      marginTop: '20px',
      textAlign: 'center',
      width: '80%',
      maxWidth: '600px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    donateInput: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: 'none',
    },
    donateButton: {
      backgroundColor: '#61dafb',
      color: '#282c34',
      padding: '10px 20px',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.home}>
      <div style={styles.profileContainer}>
        <img src={profileImage} alt="YugiMeow" style={styles.profileImage} />
        <h1 style={styles.homeContent}>YugiMeow</h1>
        <p style={styles.homeContent}>
          บอทที่เกี่ยวกับ Yu-Gi-Oh จะมอบประสบการณ์ความสะดวก สบาย และข้อมูลที่มีประโยชน์ให้คุณ:
        </p>
        <a 
          href={inviteLink} 
          style={styles.inviteButton} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={(e) => e.target.style.backgroundColor = styles.inviteButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.inviteButton.backgroundColor}
        >
          Invite
        </a>
      </div>
      <div style={styles.usageSection}>
        <h2>วิธีการใช้งานคำสั่ง</h2>
        <p>1. เชิญบอทเข้า server</p>
        <>รูปภาพตัวอย่างผลลัพท์เมื่อใช้คำสั่งเสร็จสมบูรณ์</>
        <img src={usageImage} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
        <p>2. ที่ช่องพิมพ์ข้อความ ใช้คำสั่ง / จะปรากฏหน้าต่างแบบนี้ ให้คลิกที่ไอค่อนของบอท</p>
        <p></p>
        <img src={usageImage2} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
        <p></p>
        <>3. จะปรากฏหน้าต่างนี้หลังจากคลิกที่ไอค่อน จะแสดงคำสั่งของบอททั้งหมดที่มีในตอนนี้ สามารถคลิกหรือพิมพ์ก็ได้</>
        <p></p>
        <img src={usageImage3} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
<<<<<<< HEAD
        <p></p>
        <>4. คำสั่ง /ทั่วไป ข้อมูลการ์ด สามารถค้นหาจากชื่อการ์ดอังกฤษ และเลข id การ์ดได้จากฝั่ง ญี่ปุ่น</>
=======
        <p>

        </p>
        <>4. คำสั่ง /ทั่วไป ข้อมูลการ์ด สามารถค้นหาจากชื่อการ์ดอังกฤษ และเลข id การ์ดได้จากฝั่ง ญี่ปุ่น </>
        <>ขอบคุณภาพประกอบจากคุณ Jawnai Detnarong</>
>>>>>>> 6b418467b2e5e6816633f901d987d10370b9a24f
        <img src={usageImage4} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
        <>5. การกรอกข้อมูลบนช่องต่างๆ ให้เลือกกรอกแค่อย่างเดียวพอ ถ้าจะค้นหาจาก id ก็ใส่ id ตามตัวอย่างด้านบนและล่าง และชื่อก็สามารถค้นหาได้จากการ์ดภาษาอังกฤษ</>
        <img src={usageImage5} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
        <p> อย่าลืมว่าเลือกกรอกแค่อย่างเดียว ระหว่าง ชื่อ กับ id</p>
        <img src={usageImage6} alt="วิธีการใช้งานคำสั่ง" style={styles.usageImage} />
      </div>
      
    </div>
  );
};

export default Home;
