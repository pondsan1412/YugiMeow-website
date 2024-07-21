// src/components/InviteBot.js
import React from 'react';
import './bot.css';

function InviteBot() {
  return (
    <div className="invite-bot">
      <h1>YugiMeow</h1>
      <a
        href="https://discord.com/oauth2/authorize?client_id=1261274366721790006&permissions=1698730973068352&integration_type=0&scope=bot"
        className="invite-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        discord bot เกี่ยวกับ Yu-Gi-Oh ที่จะช่วยให้อะไรหลายๆอย่างง่ายขึ้น
      </a>
    </div>
  );
}

export default InviteBot;
