// Category 3: Wave Animations
window.backgrounds.push(
  {
    id: 21, name: "SVG Waves", description: "Smooth SVG wave background.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#1e3a8a;position:relative;overflow:hidden;">
  <svg style="position:absolute;bottom:0;width:200%;height:50%;animation:wvMove 4s linear infinite;" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 C150,50 300,50 600,0 C900,-50 1050,-50 1200,0 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.2)"></path></svg>
</div>
<style>@keyframes wvMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }</style>`
  },
  {
    id: 22, name: "Ocean Waves", description: "Moving liquid reflections.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:linear-gradient(180deg, #0ea5e9, #0369a1);position:relative;overflow:hidden;">
  <div style="position:absolute;width:200%;height:10px;background:rgba(255,255,255,0.4);top:30%;filter:blur(5px);animation:ocean 3s infinite alternate;"></div>
  <div style="position:absolute;width:200%;height:8px;background:rgba(255,255,255,0.3);top:50%;filter:blur(4px);animation:ocean 4s infinite alternate-reverse;"></div>
  <div style="position:absolute;width:200%;height:15px;background:rgba(255,255,255,0.2);top:70%;filter:blur(6px);animation:ocean 5s infinite alternate;"></div>
</div>
<style>@keyframes ocean { 0%{transform:translateX(-10%);} 100%{transform:translateX(10%);} }</style>`
  },
  {
    id: 23, name: "Sine Wave Background", description: "Canvas animated sine waves.", category: "Wave", scriptReplace: {find:"sine-cvs", replace:"sine-cvs-prev"},
    code: `<canvas id="sine-cvs" style="width:100%;height:100%;background:#020617;display:block;"></canvas>
<script>
(function(){
  const cvs=document.getElementById('sine-cvs'); const ctx=cvs.getContext('2d'); let w,h,time=0;
  function r(){ w=cvs.width=cvs.offsetWidth; h=cvs.height=cvs.offsetHeight; } window.addEventListener('resize',r); r();
  function d(){
    ctx.fillStyle='#020617'; ctx.fillRect(0,0,w,h);
    for(let i=0;i<3;i++){
      ctx.beginPath(); ctx.moveTo(0,h/2);
      for(let x=0;x<w;x+=10) ctx.lineTo(x, h/2 + Math.sin(x*0.01 + time + i)*50);
      ctx.strokeStyle=\`hsla(\${200+i*30},100%,60%,0.5)\`; ctx.lineWidth=3; ctx.stroke();
    } time+=0.05; requestAnimationFrame(d);
  } d();
})();
</script>`
  },
  {
    id: 24, name: "Multi-Layer Parallax Waves", description: "Parallax depth waves.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#0f172a;position:relative;overflow:hidden;">
  <div style="position:absolute;width:200%;height:100px;background:rgba(56,189,248,0.2);border-radius:50%;bottom:-50px;left:-50%;animation:pxWave 4s infinite alternate;"></div>
  <div style="position:absolute;width:200%;height:150px;background:rgba(2,132,199,0.2);border-radius:50%;bottom:-80px;left:0%;animation:pxWave 5s infinite alternate-reverse;"></div>
</div>
<style>@keyframes pxWave { 0%{transform:translateY(0) scaleX(1);} 100%{transform:translateY(-20px) scaleX(1.2);} }</style>`
  },
  {
    id: 25, name: "Sound-Reactive Waves", description: "Audio visualization style waves.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;gap:4px;">
  <div style="width:10px;height:20px;background:#10b981;animation:eq 1s infinite alternate;"></div>
  <div style="width:10px;height:50px;background:#10b981;animation:eq 0.8s infinite alternate-reverse;"></div>
  <div style="width:10px;height:30px;background:#10b981;animation:eq 1.2s infinite alternate;"></div>
  <div style="width:10px;height:60px;background:#10b981;animation:eq 0.9s infinite alternate-reverse;"></div>
</div>
<style>@keyframes eq { 0%{transform:scaleY(0.5);} 100%{transform:scaleY(1.5);} }</style>`
  },
  {
    id: 26, name: "Liquid Surface Waves", description: "Top down view of liquid.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:radial-gradient(circle at 50% 50%, #0369a1, #0c4a6e);position:relative;overflow:hidden;filter:blur(5px);">
  <div style="position:absolute;width:150%;height:150%;top:-25%;left:-25%;background:repeating-radial-gradient(circle, transparent, rgba(255,255,255,0.1) 20px, transparent 40px);animation:liqSurf 6s linear infinite;"></div>
</div>
<style>@keyframes liqSurf { 0%{transform:scale(1);} 100%{transform:scale(1.2);} }</style>`
  },
  {
    id: 27, name: "Neon Wave Grid", description: "Retrowave glowing waves.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#000;perspective:500px;overflow:hidden;">
  <div style="width:200%;height:200%;transform:rotateX(60deg) translateY(-20%);background-image:linear-gradient(rgba(236,72,153,0.5) 2px, transparent 2px);background-size:100% 40px;animation:neonWv 2s linear infinite;box-shadow:inset 0 0 50px #ec4899;"></div>
</div>
<style>@keyframes neonWv { 0%{background-position:0 0;} 100%{background-position:0 40px;} }</style>`
  },
  {
    id: 28, name: "Frequency Wave Animation", description: "Oscilloscope frequency wave.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#000;position:relative;overflow:hidden;display:flex;align-items:center;">
  <div style="width:200%;height:2px;background:#22d3ee;box-shadow:0 0 10px #22d3ee;animation:freq 2s infinite;"></div>
</div>
<style>@keyframes freq { 0%{transform:translateY(0) scaleY(1);} 50%{transform:translateY(0) scaleY(50);} 100%{transform:translateY(0) scaleY(1);} }</style>`
  },
  {
    id: 29, name: "Ripple Effect", description: "Interactive ripple effect.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#082f49;position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center;">
  <div style="position:absolute;width:20px;height:20px;border-radius:50%;border:2px solid #38bdf8;animation:rip 2s infinite ease-out;"></div>
  <div style="position:absolute;width:20px;height:20px;border-radius:50%;border:2px solid #38bdf8;animation:rip 2s infinite ease-out 0.6s;"></div>
</div>
<style>@keyframes rip { 0%{transform:scale(1);opacity:1;} 100%{transform:scale(20);opacity:0;} }</style>`
  },
  {
    id: 30, name: "Infinite Wave Scroll", description: "Endless scrolling waves.", category: "Wave",
    code: `<div style="width:100%;height:100%;background:#0f172a;position:relative;overflow:hidden;">
  <div style="position:absolute;width:200%;height:200%;background:repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(14,165,233,0.2) 20px, rgba(14,165,233,0.2) 40px);animation:scrollWv 4s linear infinite;"></div>
</div>
<style>@keyframes scrollWv { 0%{transform:translateX(0);} 100%{transform:translateX(-56px);} }</style>`
  }
);
