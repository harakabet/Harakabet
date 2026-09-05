const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HARAKABET - Cheza Haraka Ushinde Haraka</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,sans-serif;background:#0a0e1a;color:white}
.header{background:#1a2332;padding:12px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100}
.logo{font-size:24px;font-weight:900;color:#00ff88}
.logo span{color:#ffcc00}
.btn{padding:8px 16px;border:none;border-radius:6px;font-weight:bold;cursor:pointer}
.btn-green{background:#00ff88;color:#000}
.btn-yellow{background:#ffcc00;color:#000}
.banner{background:linear-gradient(135deg,#00ff88,#0088ff);padding:20px;text-align:center}
.banner h1{font-size:28px;margin-bottom:8px}
.matches{padding:12px}
.match-card{background:#1a2332;border-radius:10px;padding:12px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.teams{flex:1}
.team{font-weight:bold}
.vs{color:#888;font-size:12px}
.odds{display:flex;gap:6px}
.odd{background:#2a3548;padding:8px 12px;border-radius:6px;cursor:pointer;font-weight:bold}
.odd:hover{background:#00ff88;color:#000}
.betslip{position:fixed;bottom:0;left:0;right:0;background:#1a2332;padding:12px;border-top:2px solid #00ff88}
.betslip-top{display:flex;justify-content:space-between;margin-bottom:8px}
.stake-input{width:100%;padding:10px;border-radius:6px;border:none;background:#0a0e1a;color:white;margin:8px 0}
.place-btn{width:100%;padding:12px;background:#00ff88;color:#000;border:none;border-radius:8px;font-size:18px;font-weight:900;cursor:pointer}
</style>
</head>
<body>
<div class="header">
  <div class="logo">HARAKA<span>BET</span></div>
  <div>
    <button class="btn btn-green" onclick="alert('Login - Coming Soon!')">INGIA</button>
    <button class="btn btn-yellow">JIUNGE</button>
  </div>
</div>

<div class="banner">
  <h1>⚡ CHEZA HARAKA USHINDE HARAKA ⚡</h1>
  <p>Bonus 100% kwa Deposit ya Kwanza!</p>
</div>

<div class="matches">
  <h3 style="margin-bottom:10px">🔥 Mechi za Leo - LIVE</h3>
  
  <div class="match-card">
    <div class="teams">
      <div class="team">Man City</div>
      <div class="vs">vs 19:30</div>
      <div class="team">Arsenal</div>
    </div>
    <div class="odds">
      <div class="odd" onclick="addBet('Man City vs Arsenal - Man City','1.95')">1.95</div>
      <div class="odd" onclick="addBet('Man City vs Arsenal - Draw','3.40')">3.40</div>
      <div class="odd" onclick="addBet('Man City vs Arsenal - Arsenal','2.10')">2.10</div>
    </div>
  </div>

  <div class="match-card">
    <div class="teams">
      <div class="team">Gor Mahia</div>
      <div class="vs">vs 15:00</div>
      <div class="team">AFC Leopards</div>
    </div>
    <div class="odds">
      <div class="odd" onclick="addBet('Gor vs AFC - Gor','2.30')">2.30</div>
      <div class="odd" onclick="addBet('Gor vs AFC - Draw','3.00')">3.00</div>
      <div class="odd" onclick="addBet('Gor vs AFC - AFC','2.80')">2.80</div>
    </div>
  </div>

  <div class="match-card">
    <div class="teams">
      <div class="team">Real Madrid</div>
      <div class="vs">vs 21:00</div>
      <div class="team">Barcelona</div>
    </div>
    <div class="odds">
      <div class="odd" onclick="addBet('Real vs Barca - Real','2.50')">2.50</div>
      <div class="odd" onclick="addBet('Real vs Barca - Draw','3.60')">3.60</div>
      <div class="odd" onclick="addBet('Real vs Barca - Barca','2.70')">2.70</div>
    </div>
  </div>

  <div class="match-card">
    <div class="teams">
      <div class="team">Simba SC</div>
      <div class="vs">vs 16:00</div>
      <div class="team">Yanga</div>
    </div>
    <div class="odds">
      <div class="odd" onclick="addBet('Simba vs Yanga - Simba','2.15')">2.15</div>
      <div class="odd" onclick="addBet('Simba vs Yanga - Draw','3.10')">3.10</div>
      <div class="odd" onclick="addBet('Simba vs Yanga - Yanga','2.90')">2.90</div>
    </div>
  </div>
</div>

<div class="betslip" id="betslip" style="display:none">
  <div class="betslip-top">
    <strong>BETSLIP (<span id="count">0</span>)</strong>
    <span id="totalOdds">Odds: 1.00</span>
  </div>
  <div id="bets"></div>
  <input type="number" id="stake" class="stake-input" placeholder="Weka Dau (KSH) - mf: 100" oninput="calc()">
  <div style="display:flex;justify-content:space-between;margin:8px 0">
    <span>Ushindi:</span><span id="win" style="color:#00ff88;font-weight:bold">KSH 0</span>
  </div>
  <button class="place-btn" onclick="placeBet()">WEKA BETI NOW!</button>
</div>

<script>
let bets=[], odds=1;
function addBet(name, odd){
  bets.push({name,odd:parseFloat(odd)});
  update();
  document.getElementById('betslip').style.display='block';
  if(navigator.vibrate) navigator.vibrate(50);
}
function update(){
  odds=1; let html='';
  bets.forEach((b,i)=>{
    odds*=b.odd;
    html+=\`<div style="font-size:12px;display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #2a3548"><span>\${b.name}</span><span>\${b.odd} <span onclick="removeBet(\${i})" style="color:red;cursor:pointer"> X</span></span></div>\`;
  });
  document.getElementById('bets').innerHTML=html;
  document.getElementById('count').innerText=bets.length;
  document.getElementById('totalOdds').innerText='Odds: '+odds.toFixed(2);
  calc();
}
function removeBet(i){bets.splice(i,1); if(bets.length==0)document.getElementById('betslip').style.display='none'; update();}
function calc(){let s=document.getElementById('stake').value||0; document.getElementById('win').innerText='KSH '+(s*odds).toFixed(0);}
function placeBet(){
  let s=document.getElementById('stake').value;
  if(!s||s<20) return alert('Weka dau angalau KSH 20');
  alert('🔥 BETI IMEWEKWA!\\n\\nDau: KSH '+s+'\\nOdds: '+odds.toFixed(2)+'\\nUshindi: KSH '+(s*odds).toFixed(0)+'\\n\\nHarakabet - Ushinde Haraka!');
  bets=[]; document.getElementById('betslip').style.display='none'; document.getElementById('stake').value='';
}
</script>
</body>
</html>
  `);
});

module.exports = app;
