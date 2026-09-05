const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>HARAKABET - Cheza Haraka Ushinde Haraka</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;background:#0a0e1a;color:#fff;padding-bottom:90px}
.header{background:#1a2332;padding:12px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100}
.logo{font-size:22px;font-weight:900}.logo span:first-child{color:#00ff88}.logo span:last-child{color:#ffcc00}
.btn{padding:8px 14px;border:none;border-radius:6px;font-weight:800;cursor:pointer;font-size:12px}
.btn-green{background:#00ff88;color:#000}.btn-yellow{background:#ffcc00;color:#000}.btn-mpesa{background:#00a651;color:#fff;width:100%;padding:12px;margin-top:10px;font-size:14px}
.nav{display:flex;gap:5px;padding:10px;background:#121a2b;overflow-x:auto}
.nav button{padding:8px 16px;border-radius:20px;border:1px solid #2a3a5a;background:#1a2332;color:#fff;white-space:nowrap;cursor:pointer}
.nav button.active{background:#00ff88;color:#000;border-color:#00ff88}
.banner{background:linear-gradient(90deg,#00ff88,#00ccff);color:#000;padding:15px;text-align:center;font-weight:900}
.balance{background:#121a2b;margin:10px;padding:12px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;border:1px solid #00ff88}
.section{padding:10px}
.match{background:#1a2332;margin-bottom:10px;border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center}
.odds{display:flex;gap:6px}.odds button{background:#2a3a5a;color:#fff;border:none;padding:8px 12px;border-radius:6px;font-weight:800;cursor:pointer}
.odds button.sel{background:#00ff88;color:#000}
.aviator-box{background:#000;border-radius:15px;padding:15px;text-align:center;margin:10px;border:2px solid #ff3366;height:300px;position:relative;overflow:hidden}
.plane{font-size:40px;position:absolute;bottom:50px;left:10px;transition:all 0.1s}
.multi{font-size:50px;font-weight:900;color:#00ff88}
.casino-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.casino-card{background:#1a2332;border-radius:10px;padding:20px;text-align:center;border:1px solid #ffcc00;cursor:pointer}
.betslip{position:fixed;bottom:0;left:0;right:0;background:#1a2332;border-top:2px solid #00ff88;padding:12px;display:none;z-index:200}
.modal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);z-index:300;justify-content:center;align-items:center;padding:20px}
.modal-box{background:#1a2332;padding:20px;border-radius:15px;width:100%;max-width:350px;border:1px solid #00ff88}
input{width:100%;padding:12px;margin:8px 0;border-radius:8px;border:none;background:#2a3a5a;color:#fff;font-size:16px}
</style>
</head>
<body>
<div class="header"><div class="logo"><span>HARAKA</span><span>BET</span></div><div><button class="btn btn-green" onclick="openDep()">DEPOSIT</button> <button class="btn btn-yellow">JIUNGE</button></div></div>
<div class="balance"><span>💰 Balance: <b style="color:#00ff88">KES <span id="bal">1,250.00</span></b></span><button class="btn btn-green" style="padding:4px 8px" onclick="openDep()">+</button></div>
<div class="banner">⚡ CHEZA HARAKA USHINDE HARAKA - BONUS 100% ⚡</div>
<div class="nav"><button class="active" onclick="tab('sports',this)">⚽ Michezo</button><button onclick="tab('aviator',this)">✈️ Aviator</button><button onclick="tab('casino',this)">🎰 Casino</button><button onclick="tab('live',this)">🔴 Live</button></div>

<div id="sports" class="section">
<div class="match"><div><b>Man City</b><br><small>vs 19:30</small><br><b>Arsenal</b></div><div class="odds"><button onclick="bet(this,'Man City vs Arsenal','1','1.95')">1.95</button><button onclick="bet(this,'Man City vs Arsenal','X','3.40')">3.40</button><button onclick="bet(this,'Man City vs Arsenal','2','2.10')">2.10</button></div></div>
<div class="match"><div><b>Gor Mahia</b><br><small>vs 15:00</small><br><b>AFC Leopards</b></div><div class="odds"><button onclick="bet(this,'Gor vs AFC','1','2.30')">2.30</button><button onclick="bet(this,'Gor vs AFC','X','3.00')">3.00</button><button onclick="bet(this,'Gor vs AFC','2','2.80')">2.80</button></div></div>
<div class="match"><div><b>Real Madrid</b><br><small>vs 21:00</small><br><b>Barcelona</b></div><div class="odds"><button onclick="bet(this,'Real vs Barca','1','2.50')">2.50</button><button onclick="bet(this,'Real vs Barca','X','3.60')">3.60</button><button onclick="bet(this,'Real vs Barca','2','2.70')">2.70</button></div></div>
<div class="match"><div><b>Simba SC</b><br><small>vs 16:00</small><br><b>Yanga</b></div><div class="odds"><button onclick="bet(this,'Simba vs Yanga','1','2.15')">2.15</button><button onclick="bet(this,'Simba vs Yanga','X','3.10')">3.10</button><button onclick="bet(this,'Simba vs Yanga','2','2.90')">2.90</button></div></div>
</div>

<div id="aviator" class="section" style="display:none">
<div class="aviator-box"><div class="multi" id="mult">1.00x</div><div class="plane" id="plane">✈️</div><br><br><button class="btn btn-green" style="width:100%;padding:15px;font-size:18px;margin-top:80px" id="avBtn" onclick="cashout()">BET KES 100 - INAPAA!</button><p style="margin-top:10px;font-size:12px">Round Inayofuata: <span id="timer">5</span>s</p></div>
</div>

<div id="casino" class="section" style="display:none"><div class="casino-grid">
<div class="casino-card" onclick="playCas('Roulette')"><div style="font-size:40px">🎡</div><b>Roulette</b><br><small>Shinda x36</small></div>
<div class="casino-card" onclick="playCas('Slots')"><div style="font-size:40px">🎰</div><b>Slots</b><br><small>Jackpot 1M</small></div>
<div class="casino-card" onclick="playCas('Crash')"><div style="font-size:40px">💥</div><b>Crash</b><br><small>Haraka!</small></div>
<div class="casino-card" onclick="playCas('Dice')"><div style="font-size:40px">🎲</div><b>Dice</b><br><small>50/50</small></div>
</div></div>

<div id="live" class="section" style="display:none"><h3>🔴 LIVE SASA</h3><div class="match"><div><b>Kenya vs TZ</b> 67' 1-1</div><div class="odds"><button>1.80</button><button>2.10</button></div></div></div>

<div class="betslip" id="slip"><div style="display:flex;justify-content:space-between"><b>Betslip (<span id="count">0</span>)</b><span onclick="clearB()" style="color:#ff3366;cursor:pointer">Futa</span></div><div id="bets" style="margin:8px 0;font-size:13px"></div><input type="number" id="stake" placeholder="Weka Kiasi (min 20)" value="100" oninput="calc()"><div style="display:flex;justify-content:space-between;margin:8px 0"><span>Ushindi:</span><b style="color:#00ff88">KES <span id="win">0</span></b></div><button class="btn btn-green" style="width:100%;padding:12px" onclick="place()">WEKA BETI - M-PESA</button></div>

<div class="modal" id="depModal"><div class="modal-box"><h3>💚 M-Pesa Deposit</h3><p style="font-size:13px;margin:10px 0">Weka namba yako ya M-Pesa</p><input id="phone" placeholder="07XX XXX XXX" value="07"><input id="amount" type="number" placeholder="Kiasi KES" value="500"><button class="btn-mpesa btn" onclick="doDep()">LIPA NA M-PESA STK</button><p style="font-size:11px;margin-top:10px;text-align:center">Utapokea pop-up ya M-Pesa kwenye simu yako</p><button class="btn" style="width:100%;margin-top:10px;background:#2a3a5a;color:#fff" onclick="closeDep()">Ghairi</button></div></div>

<script>
let bets=[],bal=1250,mult=1.00,flying=false,crashed=false;
function tab(id,el){document.querySelectorAll('.section').forEach(s=>s.style.display='none');document.getElementById(id).style.display='block';document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
function bet(el,match,type,odd){el.classList.toggle('sel');let key=match+type;let idx=bets.findIndex(b=>b.key==key);if(idx>-1){bets.splice(idx,1);el.classList.remove('sel')}else{bets.push({key,match,type,odd:parseFloat(odd)})}upd()}
function upd(){document.getElementById('count').innerText=bets.length;let html='';bets.forEach(b=>html+='<div>'+b.match+' - '+b.type+' @ '+b.odd+'</div>');document.getElementById('bets').innerHTML=html;document.getElementById('slip').style.display=bets.length?'block':'none';calc()}
function calc(){let s=parseFloat(document.getElementById('stake').value)||0;let tot=1;bets.forEach(b=>tot*=b.odd);document.getElementById('win').innerText=(s*tot).toFixed(2)}
function clearB(){bets=[];document.querySelectorAll('.odds button').forEach(b=>b.classList.remove('sel'));upd()}
function place(){let s=document.getElementById('stake').value;if(!s||s<20)return alert('Weka kiasi min 20');if(bal< s)return alert('Balance haitoshi! Deposit kwanza');bal-=parseFloat(s);document.getElementById('bal').innerText=bal.toFixed(2);alert('BET IMEWEKWA! M-Pesa: KES '+s+'\\nUshindi: KES '+document.getElementById('win').innerText+'\\nBahati njema!');clearB()}
function openDep(){document.getElementById('depModal').style.display='flex'}function closeDep(){document.getElementById('depModal').style.display='none'}
function doDep(){let a=document.getElementById('amount').value;if(!a)return alert('Weka kiasi');bal+=parseFloat(a);document.getElementById('bal').innerText=bal.toFixed(2);closeDep();alert('DEPOSIT IMEFANIKIWA!\\nKES '+a+' imeongezwa\\nBalance: KES '+bal.toFixed(2))}
function playCas(g){alert(g+' - KES 100 imetolewa!\\nUmeshinda KES '+(Math.random()*1000).toFixed(0)+'!');bal+=Math.random()*500;document.getElementById('bal').innerText=bal.toFixed(2)}
let avInt;function startAvi(){mult=1.00;flying=true;crashed=false;document.getElementById('avBtn').innerText='CASHOUT';document.getElementById('avBtn').style.background='#ffcc00';let p=10;avInt=setInterval(()=>{mult+=0.02+Math.random()*0.05;document.getElementById('mult').innerText=mult.toFixed(2)+'x';document.getElementById('plane').style.left=(p++)+'%';document.getElementById('plane').style.bottom=(50+p/2)+'px';if(Math.random()<0.02&&mult>1.5){crash()}},100)}
function crash(){clearInterval(avInt);crashed=true;flying=false;document.getElementById('mult').innerText='💥 ' + mult.toFixed(2)+'x CRASHED';document.getElementById('mult').style.color='#ff3366';document.getElementById('avBtn').innerText='BET KES 100';document.getElementById('avBtn').style.background='#00ff88';setTimeout(()=>{document.getElementById('mult').style.color='#00ff88';document.getElementById('plane').style.left='10px';document.getElementById('plane').style.bottom='50px';let c=5;let t=setInterval(()=>{document.getElementById('timer').innerText=c--;if(c<0){clearInterval(t);startAvi()}},1000)},2000)}
function cashout(){if(!flying)return startAvi();if(crashed)return;clearInterval(avInt);let win=100*mult;bal+=win;document.getElementById('bal').innerText=bal.toFixed(2);document.getElementById('avBtn').innerText='UMESHINDA KES '+win.toFixed(0)+'!';setTimeout(()=>{document.getElementById('avBtn').innerText='BET KES 100';startAvi()},1500)}
setTimeout(startAvi,2000)
</script>
</body>
</html>
`)});
module.exports = app;
