(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1832:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(428)}])},428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(5893),a=n(6222),o=n(7414),l=n(1232),r=n(9985),c=n(5117),i=n(9834),u=n(7564),d=n(61),p=n(8078),h=n(3833),g=n(1194),x=n(7841),m=n(3723),j=n(4403),f=n(5572),b=n(9355),v=n(9058),w=n(4075),I=n(3600),P=n(8903),y=n(7294);let k=n(7596),S=[...new Set(f.map(e=>e.anticheats).flat())].map(e=>({value:e,label:e}));function C(e){let{style:t}=e,{width:n}=(0,b.n)(),C=(0,P.c)({initialValues:f}),[N,z]=y.useState(null),[U,_]=y.useState(0),D=C.values[U],R=D.slug,L=(0,s.jsxs)(a.U.Item,{value:R,children:[(0,s.jsxs)(o.x,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(a.U.Control,{children:(0,s.jsxs)(l.Z,{noWrap:!0,children:[(0,s.jsx)(r.q,{src:D.logo,radius:"xl",size:"lg"}),(0,s.jsx)(c.x,{children:D.name})]})}),(0,s.jsx)(i.A,{size:"lg",onClick:()=>{C.values.splice(U,1),C.setDirty(null),_(0)},children:(0,s.jsx)(w.Z,{size:16})})]}),(0,s.jsxs)(u.K,{children:[(0,s.jsx)(d.o,{label:"URL",...C.getInputProps("".concat(U,".url"))}),(0,s.jsx)(d.o,{label:"Slug",required:!0,...C.getInputProps("".concat(U,".slug"))}),(0,s.jsx)(d.o,{label:"Game Name",required:!0,...C.getInputProps("".concat(U,".name"))}),(0,s.jsx)(d.o,{label:"Logo URL",...C.getInputProps("".concat(U,".logo"))}),(0,s.jsx)(p.X,{label:"Runs on Linux natively?",...C.getInputProps("".concat(U,".native"),{type:"checkbox"})}),(0,s.jsx)(h.p,{data:["Broken","Running","Denied","Supported","Planned"],label:"Status",...C.getInputProps("".concat(U,".status"))}),(0,s.jsx)(d.o,{label:"Reference Information on Status",...C.getInputProps("".concat(U,".reference"))}),(0,s.jsx)(g.NU,{data:S,label:"Anti-Cheat(s) In-use",searchable:!0,required:!0,...C.getInputProps("".concat(U,".anticheats"))}),"Updates",C.values[U].updates.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(d.o,{label:"Title",...C.getInputProps("".concat(U,".updates.").concat(t,".name"))}),(0,s.jsx)(d.o,{label:"Reference URL",...C.getInputProps("".concat(U,".updates.").concat(t,".reference"))}),(0,s.jsx)(d.o,{label:"Date & Time",...C.getInputProps("".concat(U,".updates.").concat(t,".date"))}),(0,s.jsx)(x.z,{color:"red",onClick:()=>{C.removeListItem("".concat(U,".updates"),t)},children:"Remove Above Update"})]},(0,v.k)())),(0,s.jsx)(x.z,{onClick:()=>{C.insertListItem("".concat(U,".updates"),{name:"",date:new Date(Date.now()).toUTCString(),reference:""})},children:"Add Update"}),"Notes",D.notes.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(d.o,{label:"Title",...C.getInputProps("".concat(U,".notes.").concat(t,".0"))}),(0,s.jsx)(d.o,{label:"Reference URL",...C.getInputProps("".concat(U,".notes.").concat(t,".1"))}),(0,s.jsx)(x.z,{color:"red",onClick:()=>{C.removeListItem("".concat(U,".notes"),t)},children:"Remove Above Note"})]},(0,v.k)())),(0,s.jsx)(x.z,{onClick:()=>{C.insertListItem("".concat(U,".notes"),[,,])},children:"Add Note"}),(0,s.jsx)("div",{})]},R)]},R);return(0,s.jsx)(u.K,{align:"center",children:(0,s.jsx)(m.x,{type:"never",w:t?void 0:.8*n,sx:t,children:(0,s.jsxs)(a.U,{defaultValue:"gamelist",children:[(0,s.jsx)(h.p,{id:"gamesDropdown",data:C.values.map(e=>e.name),label:"Games",onChange:e=>{_(e.currentTarget.selectedIndex)},defaultValue:C.values[U].name}),(0,s.jsxs)("form",{children:[L,(0,s.jsx)(x.z,{color:"lime",onClick:()=>{C.values.push({url:"",slug:"new-game-"+(0,v.k)(),name:"",logo:"",native:!1,status:"Broken",reference:"",anticheats:[,],updates:[],notes:[],storeIds:{},dateChanged:new Date(Date.now()).toISOString()}),_(C.values.length-1),C.setDirty(null)},children:"Add New Game"}),(0,s.jsx)(x.z,{variant:"light",onClick:async()=>{let e=new Map(C.values.map(e=>[e.slug,e])),t=new Map(f.map(e=>[e.slug,e]));for(let[n,s]of e)try{k.deepStrictEqual(s,t.get(n))}catch(e){C.values.find((e,t)=>{e.slug===n&&(C.values[t].dateChanged=new Date(Date.now()).toISOString())})}let n={method:"POST",mode:"cors",cache:"no-cache",referrerPolicy:"no-referrer",body:JSON.stringify(C.values,null,4),headers:{"Content-Type":"application/json"}};try{let e=await fetch("https://export.areweanticheatyet.com/submit",n);e.ok?z((0,s.jsx)(j.b,{icon:(0,s.jsx)(I.Z,{size:16}),title:"Submitted!",color:"lime",children:"Your requested changes were successfully sent off for processing and review. Please wait up to 72 for changes to propagate."})):z((0,s.jsx)(j.b,{icon:(0,s.jsx)(I.Z,{size:16}),title:"No luck, try again later.",color:"yellow",children:"A small problem occured when trying to submit your changes. Please wait at least 5 minutes before retrying."}))}catch(e){z((0,s.jsx)(j.b,{icon:(0,s.jsx)(I.Z,{size:16}),title:"Possible Server Issue.",color:"red",children:"There was a problem reaching the submission server. Please try again later."})),console.error(e)}},children:"Submit Changes"})]}),N]})})})}}},function(e){e.O(0,[569,774,888,179],function(){return e(e.s=1832)}),_N_E=e.O()}]);