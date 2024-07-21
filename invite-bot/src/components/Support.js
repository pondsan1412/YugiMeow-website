import React from 'react';
import './Support.css'; // ใช้สำหรับสไตล์ CSS
import scbLogo from '../assets/scb-logo.png'; // ใช้ชื่อไฟล์ภาพที่ถูกต้อง
import qrCode from '../assets/my-qr.jpg'; // ใช้ชื่อไฟล์ภาพที่ถูกต้อง
import hand from '../assets/ยกมือไหว้.png';

const Support = () => {
  return (
    <div className="support">
      <div className="support-content">
        <h1 style={{ color: 'white', fontWeight: 'bold' }}>Support Us</h1>
        <div className="bank-info">
          <img src={scbLogo} alt="SCB Logo" className="bank-logo" />
          <p>รายละเอียดการบริจาค:</p>
          <p></p>
          <p>ธนาคารไทยพานิชย์</p>
          <p>เลขที่บัญชี: 408-0522-199 ศธร สุขขัง</p>
        </div>
        <div className="qr-info">
          <img src={qrCode} alt="QR Code" className="qr-code" />
          <p>สแกน QR Code เพื่อบริจาค</p>
          <img src={hand} alt="ยกมือไหว้" className='hand_panommue' />
          <p>ขอบคุณทุกๆท่านที่สนับสนุนบอทของเราครับ อย่างน้อยเป็นค่าไฟ ค่า server ให้รันต่อไปได้</p>
          <p>หลังโอนแล้วรบกวนแปะรูปภาพแนบไว้ที่ support server ของเราครับ เพื่อขึ้น list ใน website (จะอัพเดตภายใน 24ชั่วโมง)</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
