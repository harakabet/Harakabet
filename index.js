<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Harakabet - Bet & Win</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial}
body{background:#0a0a0a;color:#fff}
.header{background:#1a5d1a;padding:12px;display:flex;justify-content:space-between;align-items:center}
.logo{font-size:22px;font-weight:900;color:#fff} .logo span{color:#ffcc00}
.bal{color:#ffcc00;font-weight:bold}
.btn{padding:8px 14px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;margin-left:5px}
.dep{background:#ffcc00} .with{background:#fff;color:#000}
.nav{display:flex;background:#111;overflow-x:auto}
.nav div{padding:12px 18px;cursor:pointer;white-space:nowrap} .nav .active{border-bottom:3px solid #ffcc00;color:#ffcc00}
.match{background:#1e1e1e;margin:8px;padding:12px;border-radius:8px;display:flex;justify-content:space-between;align-items:center}
.odd{background:#2a2a2a;padding:6px 10px;border-radius:5px;margin:2px;cursor:pointer}
.odd:hover{background:#ffcc00;color:#000}
.betslip{position:fixed;bottom:0;left:0;right:0;background:#111;padding:12px;border-top:2px solid #ffcc00;display:none}
.modal{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:none;justify-content:center;align-items:center;z-index:99}
.box{background:#1e1e1e;padding:20px;border-radius:10px;width:90%;max-width:350px}
.box input{width:100%;padding:10px;margin:10px 0;border-radius:6px;border:none}
.box button{width:100%;padding:12px;background:#ffcc00;border:none;border-radius:6px;font-weight:bold;margin-top:5px}
.avi{height:150px;background:#000;border-radius:8px;margin:10px;display:flex;flex-direction:column;justify-content:center;align-items:center}
.plane{font-size:40px}
</style>
</head>
<body>
<div class="header">
<div class="logo">HARAKA<span>BET</span></div>
<div><span class="bal">KES <span id="balance">1250.00</span></span>
<button class="btn dep" onclick="openDep()">+ DEPOSIT</button>
<button class="btn with" onclick="openWith()">WITHDRAW</button>
</div>
</div>
<div class="nav">
<div class="active" onclick="show('sports',this)">⚽ Sports</div>
<div onclick="show('aviator',this)">✈️ Aviator</div>
<div onclick="show('casino',this)">🎰 Casino</div>
</div>

<div id="sports">
<div class="match"><span>Man City vs Arsenal</span><div><span class="odd" onclick="bet('Man City',2.1)">2.10</span><span class="odd" onclick="bet('Draw',3.2)">3.20</span><span class="odd" onclick="bet('Arsenal',3.0)">3.00</span></div></div>
<div class="match"><span>Barcelona vs Real</span><div><span class="odd" onclick="bet('Barca',2.5)">2.50</span><span class="odd" onclick="bet('Draw',3.1)">3.10</span><span class="odd" onclick="bet('Real',2.8)">2.80</span></div></div>
<div class="match"><span>Gor Mahia vs AFC</span><div><span class="odd" onclick="bet('Gor',1.9)">1.90</span><span class="odd" onclick="bet('Draw',3.0)">3.00</span><span class="odd" onclick="bet('AFC',3.5)">3.50</span></div></div>
</div>

<div id="aviator" style="display:none">
<div class="avi"><div class="plane" id="plane">✈️</div><h2 id="mult" style="color:#ffcc00">1.00x</h2><p id="status">Waiting...</p></div>
<div style="padding:10px;display:flex;gap:10px"><input id="aviStake" type="number" value="100" style="flex:1;padding:10px;border-radius:6px;border:none"><button onclick="placeAvi()" id="aviBtn" style="flex:1;padding:10px;background:#ffcc00;border:none;border-radius:6px;font-weight:bold">BET</button></div>
</div>

<div id="casino" style="display:none;padding:20px;text-align:center"><h2>🎰 Casino Coming Soon</h2><p>Slots na Roulette ziko njiani!</p></div>

<div class="betslip" id="slip">
<div style="display:flex;justify-content:space-between"><b id="bText">Bet</b><span onclick="clearBet()" style="cursor:pointer">X</span></div>
<input id="stake" type="number" placeholder="Weka stake" oninput="calc()" style="width:100%;padding:8px;margin:8px 0;border-radius:5px;border:none">
<p>Possible Win: KES <span id="win">0</span></p>
<button onclick="placeBet()" style="width:100%;padding:10px;background:#1a5d1a;color:#fff;border:none;border-radius:6px;font-weight:bold">PLACE BET</button>
</div>

<div class="
