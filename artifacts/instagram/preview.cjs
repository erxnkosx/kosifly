const {chromium}=require('playwright');
const path=require('node:path');
(async()=>{
 const b=await chromium.launch({headless:true,executablePath:'C:/Users/erenk/AppData/Local/ms-playwright/chromium_headless_shell-1178/chrome-win/headless_shell.exe'});
 const p=await b.newPage({viewport:{width:1200,height:1450},deviceScaleFactor:1});
 await p.goto('file:///'+path.resolve('artifacts/instagram/kosifly-instagram-templates.html').replaceAll('\\','/'));
 await p.evaluate(()=>document.fonts.ready);
 const pages=p.locator('.page');
 for(let i=0;i<await pages.count();i++) {
  await pages.nth(i).screenshot({path:`artifacts/instagram/template-${i+1}.png`});
 }
 console.log(await pages.evaluateAll(es=>es.map(e=>({page:e.dataset.label,leadBottom:e.querySelector('.lead').getBoundingClientRect().bottom-e.getBoundingClientRect().top,artTop:e.querySelector('.art').getBoundingClientRect().top-e.getBoundingClientRect().top,overflow:e.scrollWidth>e.clientWidth}))));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
