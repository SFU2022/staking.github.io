import{e as S,l as C}from"./index.40d8ccdc.js";import{e as E,r as i,as as A,o as d,h as p,i as t,am as m,an as v,v as f,w,ao as y,F as N,ai as V,z as c,y as x}from"./vendor.38d4a956.js";import{E as k}from"./ethers.2578561f.js";const B={class:"space-y-8"},D=["onSubmit"],M=x("Load"),L=x("Earned"),T={class:"w-full text-center"},U=t("thead",null,[t("tr",null,[t("th",{class:"p-2"},"Amount"),t("th",{class:"p-2"},"Claimed"),t("th",{class:"p-2"},"Harvested"),t("th",{class:"p-2"},"Time"),t("th",{class:"p-2"},"Last Withdraw At"),t("th",{class:"p-2"},"Earned")])],-1),W={class:"p-2"},F={class:"p-2"},J={class:"p-2"},O={class:"p-2"},R={class:"p-2"},j={class:"p-2"},q=E({__name:"___Debug",setup(z){const o=i(),l=i(),u=i([]),_=S();A(()=>{_.wallet&&(l.value=_.wallet)});const r=i([]),b=async()=>{if(!o.value||!l.value)return;r.value=[],u.value=[];const n=await k.Rpc().StakeContract(o.value);let a=0,s=[];for(;;){try{s.push(await n.getDeposit(l.value,a))}catch(e){console.log(JSON.parse(JSON.stringify(e)));break}a++}r.value=s},g=async()=>{if(!o.value||!l.value||r.value.length===0)return;u.value=[];const n=await k.Rpc().StakeContract(o.value),a=await n.apr(),s=await n.duration();for(const e of r.value)u.value.push(await n.getEarned(e,a,s))};return(n,a)=>{const s=C;return d(),p("div",B,[t("form",{class:"flex items-center justify-center gap-6",onSubmit:y(b,["prevent"])},[m(t("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"block w-full max-w-md text-black",placeholder:"Pool Address",type:"text"},null,512),[[v,o.value]]),m(t("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),class:"block w-full max-w-md text-black",placeholder:"Account",type:"text"},null,512),[[v,l.value]]),f(s,{type:"submit"},{default:w(()=>[M]),_:1}),f(s,{type:"button",onClick:y(g,["prevent"])},{default:w(()=>[L]),_:1},8,["onClick"])],40,D),t("table",T,[U,t("tbody",null,[(d(!0),p(N,null,V(r.value,(e,h)=>(d(),p("tr",{key:h},[t("td",W,c(e.amount),1),t("td",F,c(e.claimed),1),t("td",J,c(e.harvested),1),t("td",O,c(e.time),1),t("td",R,c(e.lastWithdrawAt),1),t("td",j,c(u.value[h]||"Unknown"),1)]))),128))])])])}}});export{q as default};
