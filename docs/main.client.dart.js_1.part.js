((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
mR(){throw B.d(B.ag("Cannot modify constant Set"))},
nm(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return B.p(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
nl(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.b.bK(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
ni(){return Date.now()},
nk(){var w,v
if($.i4!==0)return
$.i4=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.i4=1e6
$.d5=new A.i3(v)},
cA:function cA(){},
bU:function bU(d,e,f){this.a=d
this.b=e
this.$ti=f},
i3:function i3(d){this.a=d},
pc(d){var w=A.nm(d,null)
if(w!=null)return w
throw B.d(B.hD(d,null))},
oZ(d){var w=A.nl(d)
if(w!=null)return w
throw B.d(B.hD("Invalid double",d))},
k5(d){return new B.aX(d)},
i9:function i9(){this.b=this.a=0},
aa(d,e){return new A.fK(e,d,null)},
dX(d,e){return new A.fL(e,d,null)},
ab(d,e,f){return new A.fW(f,e,d,null)},
bQ(d,e,f){return new A.h7(f,e,d,null)},
ai(d,e,f,g){return new A.bP(e,g,f,d,null)},
P(d,e,f){return new A.fS(e,f,d,null)},
b4(d,e,f,g,h,i){return new A.fC(h,f,i,e,g,d,null)},
fR(d,e,f){return new A.fQ(f,e,d,null)},
lO(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
br(d,e,f){return new A.fZ(f,e,d,null)},
kz(d,e){return new A.fD(e,d,null)},
cj(d,e){return new A.fT(e,d,null)},
m8(d,e){return new A.fU(e,d,null)},
kH(d,e){return new A.h_(e,d,null)},
kJ(d){return new A.h4(d,null)},
kI(d){return new A.h0(d,null)},
aU(d){return new A.h3(d,null)},
J(d){return new A.h6(d,null)},
e(d){return new A.h1(d,null)},
T(d,e,f,g,h,i,j){return new A.cg(h,i,f,j,e,g,d,null)},
c(d,e){return new A.fE(e,d,null)},
a4(d,e,f){return new A.aT(e,f,d,null)},
a5(d){return new A.fY(d,null)},
fB:function fB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
fH:function fH(d,e,f){this.d=d
this.w=e
this.a=f},
fM:function fM(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
fJ:function fJ(d,e,f){this.d=d
this.w=e
this.a=f},
fK:function fK(d,e,f){this.d=d
this.w=e
this.a=f},
fL:function fL(d,e,f){this.d=d
this.w=e
this.a=f},
fO:function fO(d,e,f){this.d=d
this.w=e
this.a=f},
fP:function fP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
fW:function fW(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
t:function t(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
h7:function h7(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
bP:function bP(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.a=h},
fS:function fS(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
fV:function fV(d,e,f){this.d=d
this.w=e
this.a=f},
fC:function fC(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
dY:function dY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.z=f
_.Q=g
_.at=h
_.ax=i
_.a=j
_.$ti=k},
hK:function hK(d,e,f){this.c=d
this.a=e
this.b=f},
fN:function fN(d,e,f){this.f=d
this.x=e
this.a=f},
fQ:function fQ(d,e,f,g){var _=this
_.d=d
_.e=e
_.Q=f
_.a=g},
fX:function fX(d,e,f,g){var _=this
_.at=d
_.ch=e
_.CW=f
_.a=g},
h2:function h2(d,e,f,g,h){var _=this
_.CW=d
_.cy=e
_.db=f
_.dx=g
_.a=h},
fZ:function fZ(d,e,f,g){var _=this
_.f=d
_.x=e
_.z=f
_.a=g},
fD:function fD(d,e,f){this.Q=d
this.at=e
this.a=f},
fT:function fT(d,e,f){this.y=d
this.Q=e
this.a=f},
fU:function fU(d,e,f){this.y=d
this.Q=e
this.a=f},
h_:function h_(d,e,f){this.d=d
this.w=e
this.a=f},
h4:function h4(d,e){this.w=d
this.a=e},
h0:function h0(d,e){this.w=d
this.a=e},
h3:function h3(d,e){this.as=d
this.a=e},
h6:function h6(d,e){this.w=d
this.a=e},
h1:function h1(d,e){this.z=d
this.a=e},
cg:function cg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.a=k},
fE:function fE(d,e,f){this.d=d
this.w=e
this.a=f},
aT:function aT(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
fY:function fY(d,e){this.w=d
this.a=e},
ef:function ef(d,e,f){this.c=d
this.a=e
this.b=f},
fy:function fy(d,e,f){this.a=d
this.b=e
this.c=f},
hl:function hl(d,e){this.a=d
this.b=e},
h9:function h9(d,e){this.a=d
this.b=e},
dI:function dI(d,e){this.b=d
this.c=e},
id:function id(d,e){this.a=d
this.b=e},
hB:function hB(d,e){this.a=d
this.b=e},
ie:function ie(){},
fw:function fw(){},
fl:function fl(d,e){this.a=d
this.b=e},
aM:function aM(d,e){this.b=d
this.a=e},
ff:function ff(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
aP:function aP(){},
ae:function ae(){},
eQ:function eQ(d,e,f,g){var _=this
_.ry=d
_.to=null
_.x1=!1
_.c=_.b=_.a=_.cy=null
_.d=e
_.e=null
_.f=f
_.w=_.r=null
_.x=g
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
v:function v(){},
eR:function eR(d,e,f){var _=this
_.c=_.b=_.a=_.cy=_.ry=null
_.d=d
_.e=null
_.f=e
_.w=_.r=null
_.x=f
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
mF(){return new A.aV(null)},
aV:function aV(d){this.a=d},
cm:function cm(){var _=this
_.e=_.d=!1
_.f="intro"
_.r=!0
_.c=_.a=null},
hi:function hi(d){this.a=d},
hh:function hh(d){this.a=d},
hc:function hc(d){this.a=d},
hb:function hb(d){this.a=d},
ha:function ha(d,e){this.a=d
this.b=e},
hf:function hf(d){this.a=d},
he:function he(d){this.a=d},
hg:function hg(d){this.a=d},
hd:function hd(d){this.a=d},
U:function U(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f6:function f6(){var _=this
_.f=_.e=_.d=!1
_.r=""
_.w=0
_.x=!1
_.c=_.a=null},
ir:function ir(d){this.a=d},
is:function is(d){this.a=d},
iq:function iq(d){this.a=d},
it:function it(d){this.a=d},
iu:function iu(d,e){this.a=d
this.b=e},
iv:function iv(d,e){this.a=d
this.b=e},
iw:function iw(d){this.a=d},
ix:function ix(d){this.a=d},
ei:function ei(d){this.a=d},
el:function el(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
hH:function hH(d){this.a=d},
hI:function hI(d){this.a=d},
hJ:function hJ(d){this.a=d},
c4:function c4(d){this.a=d},
fm:function fm(){var _=this
_.d="hello"
_.e=""
_.f='\u179f\u17bc\u1798\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u1798\u17be\u179b\u179b\u1791\u17d2\u1792\u1795\u179b...'
_.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"
_.w=!1
_.c=_.a=null},
iS:function iS(d,e){this.a=d
this.b=e},
iR:function iR(d,e){this.a=d
this.b=e},
iT:function iT(d){this.a=d},
iU:function iU(d,e){this.a=d
this.b=e},
iV:function iV(d,e){this.a=d
this.b=e},
iO:function iO(d,e){this.a=d
this.b=e},
iP:function iP(d,e){this.a=d
this.b=e},
iQ:function iQ(d){this.a=d},
iX:function iX(d){this.a=d},
iY:function iY(d){this.a=d},
iZ:function iZ(d){this.a=d},
j_:function j_(d){this.a=d},
j0:function j0(d){this.a=d},
iW:function iW(d,e){this.a=d
this.b=e},
c6:function c6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fq:function fq(){this.d=""
this.c=this.a=null},
j3:function j3(d){this.a=d},
j5:function j5(d){this.a=d},
j6:function j6(d){this.a=d},
j4:function j4(d,e){this.a=d
this.b=e},
j7:function j7(d){this.a=d},
j8:function j8(d){this.a=d},
j9:function j9(d,e){this.a=d
this.b=e},
eO:function eO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
i7:function i7(d,e){this.a=d
this.b=e},
Z:function Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW:function eW(d,e,f){this.c=d
this.d=e
this.a=f},
ic:function ic(d,e){this.a=d
this.b=e},
a0:function a0(d,e){this.a=d
this.b=e},
S:function S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2:function e2(d){this.a=d},
ec:function ec(d){this.a=d},
ej:function ej(d){this.a=d},
ek:function ek(d){this.a=d},
eI:function eI(d){this.a=d},
mc(d){var w=b.G,v=B.V(B.n(w.document).documentElement)
if(v!=null)v.setAttribute("data-theme",d)
B.n(B.n(w.window).localStorage).setItem("khmerlang-doc-theme",d)},
pn(d){B.n(b.G.window).addEventListener("keydown",B.lR(new A.k0(d)))},
k0:function k0(d){this.a=d},
z:function z(){},
d3:function d3(d){this.a=d},
bE:function bE(d){this.a=d},
bR:function bR(d){this.a=d},
d2:function d2(){},
cn:function cn(d){this.a=d},
d4:function d4(d){this.a=d},
bd:function bd(d){this.a=d},
dj:function dj(){},
dk:function dk(d,e){this.a=d
this.b=e},
aL:function aL(d,e,f){this.a=d
this.b=e
this.c=f},
co:function co(d,e){this.a=d
this.b=e},
c1:function c1(d,e){this.a=d
this.b=e},
cV:function cV(d,e,f){this.a=d
this.b=e
this.c=f},
bY:function bY(d,e){this.a=d
this.b=e},
cI:function cI(d,e,f){this.a=d
this.b=e
this.c=f},
cH:function cH(d,e){this.a=d
this.b=e},
d0:function d0(d,e){this.a=d
this.b=e},
dm:function dm(d,e){this.a=d
this.b=e},
d6:function d6(d){this.a=d},
cp:function cp(d){this.a=d},
bX:function bX(d,e,f){this.a=d
this.b=e
this.c=f},
dq:function dq(d,e){this.a=d
this.b=e},
cG:function cG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
by:function by(d,e,f){this.a=d
this.b=e
this.c=f},
ct:function ct(d,e,f){this.a=d
this.b=e
this.c=f},
da:function da(d){this.a=d},
cF:function cF(d){this.a=d},
me(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=C.b7.p(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
fI(d){if(d==null)return"\u1791\u1791\u17c1"
if(B.fA(d))return d?"\u1796\u17b7\u178f":"\u1798\u17b7\u1793\u1796\u17b7\u178f"
if(typeof d=="number")return A.me(d===D.f.bI(d)?D.e.i(D.f.aI(d)):D.f.i(d))
if(B.kw(d))return A.me(D.e.i(d))
if(x.j.b(d))return"["+J.kV(d,new A.jL(),x.N).W(0,", ")+"]"
if(x.f.b(d))return"{"+d.gaY().al(0,new A.jM(),x.N).W(0,", ")+"}"
if(d instanceof A.bi)return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a.a+">"
if(d instanceof A.bg)return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a+">"
if(d instanceof A.bh)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+d.a+">"
if(d instanceof A.aj)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785 "+d.a+">"
return J.K(d)},
oW(d){var w=B.B(x.N,x.z),v=new A.jF(d),u=new A.jE(),t=new A.jH(),s=new A.jD()
w.k(0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789",new A.aj("\u1794\u1784\u17d2\u17a0\u17b6\u1789",v))
w.k(0,"print",new A.aj("print",v))
w.k(0,"\u1794\u17d2\u179a\u179c\u17c2\u1784",new A.aj("\u1794\u17d2\u179a\u179c\u17c2\u1784",u))
w.k(0,"len",new A.aj("len",u))
w.k(0,"\u1794\u17d2\u179a\u1797\u17c1\u1791",new A.aj("\u1794\u17d2\u179a\u1797\u17c1\u1791",t))
w.k(0,"type",new A.aj("type",t))
w.k(0,"\u1794\u1793\u17d2\u1790\u17c2\u1798",new A.aj("\u1794\u1793\u17d2\u1790\u17c2\u1798",s))
w.k(0,"append",new A.aj("append",s))
return new A.bc(w,null)},
jL:function jL(){},
jM:function jM(){},
bc:function bc(d,e){this.a=d
this.b=e},
aj:function aj(d,e){this.a=d
this.b=e},
bh:function bh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bg:function bg(d,e,f){this.a=d
this.b=e
this.c=f},
bi:function bi(d,e){this.a=d
this.b=e},
jF:function jF(d){this.a=d},
jG:function jG(){},
jE:function jE(){},
jH:function jH(){},
jD:function jD(){},
l8(d,e,f){return new A.hW(d,e,f,null)},
eE(d,e,f){return new A.i1(d,e,f,null)},
I(d){return new A.eM(d,null,null,null)},
cP:function cP(){},
hW:function hW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i1:function i1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eM:function eM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJ:function eJ(d){this.a=d},
hL:function hL(d){this.a=d
this.b=$},
hM:function hM(d,e){this.a=d
this.b=e},
hN:function hN(d,e){this.a=d
this.b=e},
hO:function hO(d,e){this.a=d
this.b=e},
hP:function hP(d,e){this.a=d
this.b=e},
l7(d){var w=new A.hV(d)
w.e=d.length
return w},
hV:function hV(d){var _=this
_.a=d
_.b=0
_.d=_.c=1
_.e=$},
eD:function eD(d){this.a=d
this.b=0},
mb(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new B.c8(""),a0=new A.i9()
$.kM()
i=$.d5.$0()
a0.a=i
a0.b=null
w=a0
v=new A.k_(d,null)
u=null
t=null
try{s=A.l7(a1)
r=s.cH()
q=new A.eD(r)
u=q.cG()
t=A.oW(v)
i=t
h=new A.hL(i)
h.b=i
p=h
o=p.eu(u)
i=w
if(i.b==null)i.b=$.d5.$0()
n=B.B(x.N,x.z)
for(i=t.a,i=new B.aE(i,B.m(i).h("aE<1,2>")).gC(0);i.n();){g=i.d
g.toString
m=g
if(!(m.b instanceof A.aj))J.h8(n,m.a,m.b)}i=d.a
g=A.k5(w.gbz())
return new A.cE("success",i.charCodeAt(0)==0?i:i,null,g)}catch(f){i=B.X(f)
if(i instanceof A.cP){l=i
i=w
if(i.b==null)i.b=$.d5.$0()
i=e!=null
if(i)l.toString
if(i)l.d=e
i=d.a
g=l.bC()
l.co()
l.toString
l.toString
return new A.cE("error",i.charCodeAt(0)==0?i:i,g,A.k5(w.gbz()))}else{k=i
i=w
if(i.b==null)i.b=$.d5.$0()
j=e!=null&&D.b.gcB(e)?e:"<source>"
i=d.a
g=B.j(k)
B.j(j)
B.j(k)
return new A.cE("error",i.charCodeAt(0)==0?i:i,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+g,A.k5(w.gbz()))}}},
oU(d){var w,v,u,t,s,r,q,p,o,n=null
try{w=A.l7(d)
v=w.cH()
u=new A.eD(v)
t=u.cG()
p=J.aB(v)
if(J.aB(t)!==0)B.am(B.bp(J.mC(t)).a,null)
return new A.cr("success",p,null)}catch(o){p=B.X(o)
if(p instanceof A.cP){s=p
p=n!=null
if(p)s.toString
if(p)s.d=n
p=s.bC()
s.co()
s.toString
s.toString
return new A.cr("error",0,p)}else{r=p
q=n!=null&&D.b.gcB(n)?n:"<source>"
p=B.j(r)
B.j(q)
B.j(r)
return new A.cr("error",0,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+p)}}},
cE:function cE(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.w=g},
cr:function cr(d,e,f){this.a=d
this.b=e
this.d=f},
k_:function k_(d,e){this.a=d
this.b=e},
q:function q(d,e){this.a=d
this.b=e},
af:function af(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nv(d,e){var w=$.E
if(w===D.d)return B.kk(d,x.M.a(e))
return B.kk(d,x.M.a(w.bv(e)))},
fF(d,e,f,g){return B.B(x.N,x.v)},
ah(d,e,f,g,h,i,j,k,l,m){return new B.dN(g,k,j,e,d,f,l,h,i,m,null)},
p6(d){var w,v,u=d.split("\n"),t=B.a([],x.i)
for(w=0;v=u.length,w<v;++w){D.a.D(t,A.og(u[w]))
if(w<v-1)D.a.j(t,new B.b("\n",null))}return t},
og(d){var w,v,u,t,s,r,q,p,o=null
if(D.b.cS(D.b.bK(d),"#")){w=x.i
return B.a([A.a4(B.a([new B.b(d,o)],w),"com",o)],w)}w=x.i
v=B.a([],w)
u=new B.c8("")
for(t=d.length,s=0;s<t;){if(!(s>=0))return B.p(d,s)
r=d[s]
if(r==="#"){t=u.a
if(t.length!==0){D.a.D(v,A.kx(t.charCodeAt(0)==0?t:t))
u.a=""}D.a.j(v,new A.aT("com",o,B.a([new B.b(D.b.b8(d,s),o)],w),o))
break}if(r==='"'||r==="'"){q=u.a
if(q.length!==0){D.a.D(v,A.kx(q.charCodeAt(0)==0?q:q))
u.a=""}p=s+1
for(;;){q=p<t
if(!(q&&d[p]!==r))break
if(!(p<t))return B.p(d,p)
p=d[p]==="\\"&&p+1<t?p+2:p+1}if(q)++p
D.a.j(v,new A.aT("str",o,B.a([new B.b(D.b.aq(d,s,p),o)],w),o))
s=p
continue}u.a+=r;++s}w=u.a
if(w.length!==0)D.a.D(v,A.kx(w.charCodeAt(0)==0?w:w))
return v},
kx(d){var w,v,u,t="(\\s+|[(){}\\[\\],;:=+\\-*/%<>!\u17d4\u17d5\u17d6])",s=B.a([],x.i),r=D.b.cR(d,B.d9(t)),q=B.d9(t).aS(0,d),p=B.aG(q,B.m(q).h("i.E"))
for(w=0,v=0;v<r.length;++v){u=r[v]
if(u.length!==0)D.a.j(s,A.oJ(u))
if(w<p.length){q=p[w].b
if(0>=q.length)return B.p(q,0)
q=q[0]
D.a.j(s,new B.b(q==null?"":q,null));++w}}return s},
oJ(d){var w,v=null
if(C.bE.K(0,d))return A.a4(B.a([new B.b(d,v)],x.i),"kw",v)
else if(C.bF.K(0,d))return A.a4(B.a([new B.b(d,v)],x.i),"builtin",v)
else{w=B.d9("^[\u17e0-\u17e90-9]+(\\.[\u17e0-\u17e90-9]+)?$")
if(w.b.test(d))return A.a4(B.a([new B.b(d,v)],x.i),"num",v)}return new B.b(d,v)}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[3],A)
C=c[4]
A.cA.prototype={
j(d,e){B.m(this).c.a(e)
A.mR()}}
A.bU.prototype={
gl(d){return this.b},
gM(d){return this.b===0},
gC(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.bI(w,w.length,v.$ti.h("bI<1>"))},
K(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
A.i9.prototype={
gbz(){var w,v=this.b
if(v==null)v=$.d5.$0()
w=v-this.a
if($.kM()===1e6)return w
return w*1000}}
A.fB.prototype={
q(d){var w=this
return new B.w("aside",w.c,w.d,null,w.f,null,w.w,null)}}
A.fH.prototype={
q(d){var w=null
return new B.w("footer",w,this.d,w,w,w,this.w,w)}}
A.fM.prototype={
q(d){var w=null
return new B.w("header",this.c,this.d,w,w,w,this.w,w)}}
A.fJ.prototype={
q(d){var w=null
return new B.w("h1",w,this.d,w,w,w,this.w,w)}}
A.fK.prototype={
q(d){var w=null
return new B.w("h2",w,this.d,w,w,w,this.w,w)}}
A.fL.prototype={
q(d){var w=null
return new B.w("h3",w,this.d,w,w,w,this.w,w)}}
A.fO.prototype={
q(d){var w=null
return new B.w("main",w,this.d,w,w,w,this.w,w)}}
A.fP.prototype={
q(d){var w=this
return new B.w("nav",w.c,w.d,null,w.f,null,w.w,null)}}
A.fW.prototype={
q(d){var w=null
return new B.w("section",this.c,this.d,w,w,w,this.w,w)}}
A.t.prototype={
q(d){var w=this
return new B.w("div",w.c,w.d,w.e,w.f,w.r,w.w,null)}}
A.h7.prototype={
q(d){var w=null
return new B.w("ul",this.c,this.d,w,w,w,this.w,w)}}
A.bP.prototype={
q(d){var w=this,v=x.N
return new B.w("li",null,w.e,w.f,B.B(v,v),w.w,w.x,null)}}
A.fS.prototype={
q(d){var w=null
return new B.w("p",w,this.d,this.e,w,w,this.w,w)}}
A.fV.prototype={
q(d){var w=null
return new B.w("pre",w,this.d,w,w,w,this.w,w)}}
A.fC.prototype={
q(d){var w=this,v=x.N,u=B.B(v,v),t=w.y
if(t!=null)u.D(0,t)
v=B.B(v,x.v)
v.D(0,w.z)
v.D(0,A.fG().$1$1$onClick(null,x.H))
return new B.w("button",w.r,w.w,w.x,u,v,w.Q,null)}}
A.dY.prototype={
q(d){var w,v=this,u=null,t=x.N,s=B.B(t,t)
s.D(0,v.at)
s.k(0,"type",v.c.c)
s.k(0,"value",v.e)
w=A.lO(u)
if(w!=null)s.k(0,"checked",w)
w=A.lO(u)
if(w!=null)s.k(0,"indeterminate",w)
t=B.B(t,x.v)
t.D(0,v.ax)
t.D(0,A.fG().$1$2$onChange$onInput(u,u,v.$ti.c))
return new B.w("input",v.z,v.Q,u,s,t,u,u)}}
A.hK.prototype={
a7(){return"InputType."+this.b}}
A.fN.prototype={
q(d){var w=null,v=x.N
return new B.w("label",w,w,this.f,B.B(v,v),w,this.x,w)}}
A.fQ.prototype={
q(d){var w=null,v=x.N
v=B.B(v,v)
v.k(0,"value",this.d)
if(this.e)v.k(0,"selected","")
return new B.w("option",w,w,w,v,w,this.Q,w)}}
A.fX.prototype={
q(d){var w=null,v=x.N,u=B.B(v,x.v)
u.D(0,this.ch)
u.D(0,A.fG().$1$2$onChange$onInput(w,w,x.a))
return new B.w("select",w,this.at,w,B.B(v,v),u,this.CW,w)}}
A.h2.prototype={
q(d){var w,v=this,u=null,t=x.N,s=B.B(t,t)
s.D(0,v.cy)
w=B.B(t,x.v)
w.D(0,v.db)
w.D(0,A.fG().$1$2$onChange$onInput(u,u,t))
return new B.w("textarea",u,v.CW,u,s,w,v.dx,u)}}
A.fZ.prototype={
q(d){var w=null,v=x.N
v=B.B(v,v)
v.D(0,this.x)
return new B.w("svg",this.f,w,w,v,w,this.z,w)}}
A.fD.prototype={
q(d){var w=null,v=x.N
v=B.B(v,v)
v.D(0,this.Q)
return new B.w("circle",w,w,w,v,w,this.at,w)}}
A.fT.prototype={
q(d){var w=null,v=x.N
v=B.B(v,v)
v.D(0,this.y)
return new B.w("path",w,w,w,v,w,this.Q,w)}}
A.fU.prototype={
q(d){var w=null,v=x.N
v=B.B(v,v)
v.D(0,this.y)
return new B.w("polygon",w,w,w,v,w,this.Q,w)}}
A.h_.prototype={
q(d){var w=null
return new B.w("table",w,this.d,w,w,w,this.w,w)}}
A.h4.prototype={
q(d){var w=null
return new B.w("thead",w,w,w,w,w,this.w,w)}}
A.h0.prototype={
q(d){var w=null
return new B.w("tbody",w,w,w,w,w,this.w,w)}}
A.h3.prototype={
q(d){var w=null,v=x.N
return new B.w("th",w,w,w,B.B(v,v),w,this.as,w)}}
A.h6.prototype={
q(d){var w=null
return new B.w("tr",w,w,w,w,w,this.w,w)}}
A.h1.prototype={
q(d){var w=null,v=x.N
return new B.w("td",w,w,w,B.B(v,v),w,this.z,w)}}
A.cg.prototype={
q(d){var w=this,v=x.N,u=B.B(v,v),t=w.Q
if(t!=null)u.D(0,t)
u.k(0,"href",w.c)
v=B.B(v,x.v)
t=w.as
if(t!=null)v.D(0,t)
v.D(0,A.fG().$1$1$onClick(null,x.H))
return new B.w("a",w.x,w.y,w.z,u,v,w.at,null)},
gaa(){return null}}
A.fE.prototype={
q(d){var w=null
return new B.w("code",w,this.d,w,w,w,this.w,w)}}
A.aT.prototype={
q(d){var w=null
return new B.w("span",w,this.d,this.e,w,w,this.w,w)}}
A.fY.prototype={
q(d){var w=null
return new B.w("strong",w,w,w,w,w,this.w,w)}}
A.ef.prototype={
a7(){return"Display."+this.b}}
A.fy.prototype={
gb7(){var w,v=B.a([],x.s)
v.push("solid")
v.push(this.b.a)
w=this.c
v.push(B.eB(w.b)+w.a)
w=x.N
return B.o(["border",D.a.W(v," ")],w,w)},
$imG:1}
A.hl.prototype={
a7(){return"BorderStyle."+this.b}}
A.h9.prototype={
a7(){return"AlignItems."+this.b}}
A.dI.prototype={
gb7(){var w,v=x.N
v=B.B(v,v)
w=this.b
w=w==null?null:B.eB(w.b)+w.a
if(w!=null)v.k(0,"top",w)
w=this.c
w=w==null?null:B.eB(w.b)+w.a
if(w!=null)v.k(0,"right",w)
return v},
$ikh:1}
A.id.prototype={
a7(){return"TextAlign."+this.b}}
A.hB.prototype={
a7(){return"FontWeight."+this.b}}
A.ie.prototype={}
A.fw.prototype={
gX(){var w=B.a([],x.s)
w.push("none")
return D.a.W(w," ")},
$inu:1}
A.fl.prototype={}
A.aM.prototype={
a9(){var w=B.bW(x.h),v=($.a2+1)%16777215
$.a2=v
return new A.ff(null,!1,!1,w,v,this,D.k)}}
A.ff.prototype={
az(){var w=this.f
w.toString
return x.c.a(w).b},
ab(){var w=this.CW.d$
w.toString
return B.mT(w,null)},
an(d){x.T.a(d)}}
A.aP.prototype={
a9(){var w=this.aW(),v=($.a2+1)%16777215
$.a2=v
v=new A.eQ(w,v,this,D.k)
w.c=v
w.sc0(this)
return v}}
A.ae.prototype={
aZ(){},
I(d){x.M.a(d).$0()
this.c.cE()},
sc0(d){this.a=B.m(this).h("ae.T?").a(d)}}
A.eQ.prototype={
bw(){return this.ry.q(this)},
S(){var w=this
if(w.w.c)w.ry.toString
w.dk()
w.b9()},
dk(){try{this.ry.aZ()}finally{}this.ry.toString},
am(){var w=this
w.w.toString
if(w.x1){w.ry.toString
w.x1=!1}w.bO()},
ao(d){var w
x.D.a(d)
w=this.ry
w.toString
B.m(w).h("ae.T").a(d)
return!0},
a_(d){x.D.a(d)
this.bd(d)
this.ry.sc0(d)},
aC(d){var w
x.D.a(d)
try{w=this.ry
w.toString
B.m(w).h("ae.T").a(d)}finally{}this.bb(d)},
aj(){this.ry.toString
this.cW()},
aJ(){this.bc()
this.ry=this.ry.c=null}}
A.v.prototype={
a9(){var w=($.a2+1)%16777215
$.a2=w
return new A.eR(w,this,D.k)}}
A.eR.prototype={
gA(){return x.q.a(B.l.prototype.gA.call(this))},
S(){if(this.w.c)this.r.toString
this.b9()},
ao(d){x.q.a(B.l.prototype.gA.call(this))
return!0},
bw(){return x.q.a(B.l.prototype.gA.call(this)).q(this)},
am(){this.w.toString
this.bO()}}
A.aV.prototype={
aW(){return new A.cm()}}
A.cm.prototype={
aZ(){var w,v,u,t=this
t.bR()
w=b.G
v=B.bM(B.n(B.n(w.window).localStorage).getItem("khmerlang-doc-theme"))
if(v==null)v="dark"
t.r=v!=="light"
A.mc(v)
A.pn(new A.hi(t))
w=B.a_(B.n(B.n(w.window).location).hash)
u=B.pr(w,"#","",0)
if(u.length!==0)t.f=u},
dJ(){this.I(new A.hc(this))},
dH(){this.I(new A.hb(this))},
ds(d){B.a_(d)
this.I(new A.ha(this,d))
B.n(B.n(b.G.window).location).hash=d},
q(d){var w=this,v=null,u=w.gdr(),t=x.i
return new A.aM(B.a([new A.el(w.gdG(),new A.hf(w),w.gdI(),w.r,v),new A.t(v,"docs-container",v,v,v,B.a([new A.eO(w.d,w.f,u,v),new A.fO("docs-main-content",B.a([new A.t(v,"content-wrapper",v,v,v,B.a([C.b_,C.am,C.aT,C.aZ,C.bk],t),v)],t),v),new A.eW(w.f,u,v)],t),v),C.aY,new A.c6(w.e,new A.hg(w),u,v)],t),v)}}
A.U.prototype={
aW(){return new A.f6()}}
A.f6.prototype={
di(){var w=this,v=w.a.e
B.n(B.n(B.n(B.n(b.G.window).navigator).clipboard).writeText(v))
w.I(new A.ir(w))
A.nv(C.aX,new A.is(w))},
dj(){var w,v,u,t=this
t.I(new A.it(t))
try{w=A.mb(t.a.e)
t.I(new A.iu(t,w))}catch(u){v=B.X(u)
t.I(new A.iv(t,v))}},
q(d){var w,v=this,u=null,t=x.i,s=B.a([A.a4(B.a([new B.b(v.a.d,u)],t),"code-card-lang",u),A.a4(B.a([new B.b(v.a.c,u)],t),"code-card-title",u)],t),r=v.d?A.ah(u,new A.fy(C.ap,C.z,new A.fl("px",1)),C.z,u,u,u,u,u,u,u):u,q=x.N,p=x.v,o=B.o(["click",new A.iw(v)],q,p)
r=B.a([A.b4(B.a([new B.b(v.d?"\u2713 \u1794\u17b6\u1793\u1785\u1798\u17d2\u179b\u1784!":"\u1785\u1798\u17d2\u179b\u1784",u)],t),u,"btn-code-action btn-copy-code",o,u,r)],t)
o=v.a
w=o.f
if(w==null?o.d==="KHMER":w){o=v.e?B.o(["disabled","true"],q,q):u
p=B.o(["click",new A.ix(v)],q,p)
r.push(A.b4(B.a([new B.b(v.e?"\u23f3 \u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a...":"\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a",u)],t),o,"btn-code-action btn-code-run",p,u,u))}s=B.a([new A.t(u,"code-card-meta",u,u,u,s,u),new A.t(u,"code-card-actions",u,u,u,r,u)],t)
r=B.a([],t)
q=v.a
p=q.d
q=q.e
if(p==="KHMER")D.a.D(r,A.p6(q))
else r.push(new B.b(q,u))
s=B.a([new A.t(u,"code-card-header",u,u,u,s,u),new A.t(u,"code-content-wrapper",u,u,u,B.a([new A.fV("code-block",B.a([A.c(r,"snippet-source")],t),u)],t),u)],t)
if(v.f){r=A.a4(B.a([new B.b("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Terminal Output)",u)],t),"code-output-title",u)
q=A.ah(u,u,C.o,u,new B.az("rem",0.75),u,u,u,u,u)
q=B.a([r,A.a4(B.a([new B.b(""+v.w+"ms",u)],t),"code-output-time",q)],t)
r=v.x?A.ah(u,u,C.ak,u,u,u,u,u,u,u):A.ah(u,u,C.z,u,u,u,u,u,u,u)
s.push(new A.t(u,"code-output-drawer visible",u,u,u,B.a([new A.t(u,"code-output-header",u,u,u,q,u),new A.t(u,"code-output-body",r,u,u,B.a([new B.b(v.r,u)],t),u)],t),u))}return new A.t(u,"code-card",u,u,u,s,u)}}
A.ei.prototype={
q(d){var w=null,v="noopener noreferrer",u=x.i,t=A.P(B.a([new B.b("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) \u2014 \u179a\u1780\u17d2\u179f\u17b6\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1782\u17d2\u179a\u1794\u17cb\u1799\u17c9\u17b6\u1784 \xa9 2026 \u178a\u17c4\u1799 Veng Chhuong \u1793\u17b7\u1784\u179f\u17a0\u1782\u1798\u1793\u17cd\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",w)],u),w,w),s=A.ah(w,w,C.o,w,new B.az("rem",0.85),w,new A.dI(new B.az("rem",0.4),w),w,w,w),r=x.N,q=B.o(["target","_blank","rel",v],r,r),p=A.ah(w,w,C.P,w,w,w,w,w,w,C.U)
p=A.T(B.a([new B.b("GitHub Repository",w)],u),q,w,w,y.b,w,p)
r=B.o(["target","_blank","rel",v],r,r)
q=A.ah(w,w,C.P,w,w,w,w,w,w,C.U)
return new A.fH("docs-footer",B.a([t,A.P(B.a([new B.b("\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799\u1798\u17c4\u1791\u1793\u1797\u17b6\u1796\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1781\u17d2\u1798\u17c2\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1782\u17d2\u1793\u17b6 | ",w),p,new B.b(" | ",w),A.T(B.a([new B.b("Releases & Binaries",w)],u),r,w,w,"https://github.com/sengson-great/KhmerLang/releases",w,q)],u),w,s)],u),w)}}
A.el.prototype={
q(d){var w,v,u,t=this,s="docs-header",r=null,q="search-trigger-btn",p="header-action-btn",o=x.N,n=B.o(["aria-label","\u1794\u17be\u1780\u1798\u17c9\u17ba\u1793\u17bb\u1799"],o,o),m=x.v,l=B.o(["click",new A.hH(t)],o,m),k=B.o(["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],o,o),j=x.i
l=B.a([A.b4(B.a([A.br(B.a([A.cj(B.a([],j),B.o(["d","M4 6h16M4 12h16M4 18h16"],o,o))],j),k,r)],j),n,"header-action-btn mobile-menu-toggle",l,"mobile-toggle-btn",r),A.T(B.a([new A.t(r,"brand-logo-badge",r,r,r,B.a([new B.b("\u1780",r)],j),r),new A.t(r,"brand-text",r,r,r,B.a([new A.t(r,"brand-title",r,r,r,B.a([new B.b("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a ",r),A.a4(B.a([new B.b("v1.0.0",r)],j),"brand-version-badge",r)],j),r),new A.t(r,"brand-subtitle",r,r,r,B.a([new B.b("Khmer Programming Language",r)],j),r)],j),r)],j),r,"brand-link",r,"#intro",r,r)],j)
n=B.o(["aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search Docs)"],o,o)
k=B.o(["click",new A.hI(t)],o,m)
w=B.o(["width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],o,o)
k=B.a([A.b4(B.a([new A.t(r,"search-trigger-content",r,r,r,B.a([A.br(B.a([A.kz(B.a([],j),B.o(["cx","11","cy","11","r","8"],o,o)),A.cj(B.a([],j),B.o(["d","m21 21-4.3-4.3"],o,o))],j),w,r),A.a4(B.a([new B.b("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search docs)...",r)],j),r,r)],j),r),new A.t(r,"search-kbd-shortcut",r,r,r,B.a([new B.w("kbd",r,r,r,r,r,B.a([new B.b("\u2318",r)],j),r),new B.w("kbd",r,r,r,r,r,B.a([new B.b("K",r)],j),r)],j),r)],j),n,q,k,q,r)],j)
n=B.o(["width","15","height","15","viewBox","0 0 24 24","fill","currentColor"],o,o)
n=A.T(B.a([A.br(B.a([A.m8(B.a([],j),B.o(["points","5 3 19 12 5 21 5 3"],o,o))],j),n,r),A.a4(B.a([new B.b("\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",r)],j),r,r)],j),r,"btn-primary-compact",r,"#playground","nav-btn-playground",r)
w=B.o(["aria-label","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Mode","title","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Theme"],o,o)
m=B.o(["click",new A.hJ(t)],o,m)
v=B.a([],j)
if(t.f){u=B.o(["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],o,o)
v.push(A.br(B.a([A.cj(B.a([],j),B.o(["d","M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],o,o))],j),u,"theme-icon-moon"))}else{u=B.o(["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],o,o)
v.push(A.br(B.a([A.kz(B.a([],j),B.o(["cx","12","cy","12","r","4"],o,o)),A.cj(B.a([],j),B.o(["d","M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"],o,o))],j),u,"theme-icon-sun"))}m=A.b4(v,w,p,m,"theme-toggle-btn",r)
w=B.o(["target","_blank","rel","noopener noreferrer","aria-label","GitHub Repository","title","GitHub"],o,o)
v=B.o(["width","19","height","19","viewBox","0 0 24 24","fill","currentColor"],o,o)
return new A.fM(s,s,B.a([new A.t(r,"brand-wrapper",r,r,r,l,r),new A.t(r,"header-center-search",r,r,r,k,r),new A.t(r,"header-actions",r,r,r,B.a([n,m,A.T(B.a([A.br(B.a([A.cj(B.a([],j),B.o(["d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],o,o))],j),v,r)],j),w,p,r,y.b,r,r)],j),r)],j),r)}}
A.c4.prototype={
aW(){return new A.fm()}}
A.fm.prototype={
aZ(){this.bR()
this.e=y.h},
dq(d){this.I(new A.iS(this,d))},
dl(d){this.I(new A.iR(this,d))},
dA(){var w,v,u,t=this
t.I(new A.iT(t))
try{w=A.mb(t.e)
t.I(new A.iU(t,w))}catch(u){v=B.X(u)
t.I(new A.iV(t,v))}},
d5(){var w,v,u,t=this
try{w=A.oU(t.e)
t.I(new A.iO(t,w))}catch(u){v=B.X(u)
t.I(new A.iP(t,v))}},
d7(){this.I(new A.iQ(this))},
q(d){var w,v,u,t,s=this,r=null,q="rem",p="btn-playground-clear",o="\u1794\u1784\u17d2\u17a0\u17b6\u1789()",n=A.ah(C.al,r,r,C.aU,r,r,r,r,r,r),m=A.ah(r,r,C.o,r,new B.az(q,0.8),C.V,r,r,r,r),l=x.i,k=B.a([new B.b("\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc: ",r)],l),j=x.N,i=x.v,h=B.o(["change",new A.iX(s)],j,i),g=s.d
g=A.fR(B.a([new B.b("\u17e1. \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 (Hello World)",r)],l),g==="hello","hello")
w=s.d
w=A.fR(B.a([new B.b("\u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)",r)],l),w==="math","math")
v=s.d
v=A.fR(B.a([new B.b("\u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)",r)],l),v==="fibo","fibo")
u=s.d
u=A.fR(B.a([new B.b("\u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)",r)],l),u==="oop","oop")
t=s.d
t=B.a([new A.fN(m,k,r),new A.fX("playground-sample-select",h,B.a([g,w,v,u,A.fR(B.a([new B.b("\u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)",r)],l),t==="grades","grades")],l),r)],l)
u=B.o(["title","\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd"],j,j)
v=B.o(["click",new A.iY(s)],j,i)
v=A.b4(B.a([A.a4(B.a([new B.b("\u2713 \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 (Check)",r)],l),r,r)],l),u,p,v,r,r)
u=B.o(["title","\u179b\u17bb\u1794\u179b\u1791\u17d2\u1792\u1795\u179b"],j,j)
w=B.o(["click",new A.iZ(s)],j,i)
g=B.o(["width","14","height","14","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],j,j)
w=A.b4(B.a([A.br(B.a([A.cj(B.a([],l),B.o(["d","M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],j,j))],l),g,r),A.a4(B.a([new B.b("\u179b\u17bb\u1794",r)],l),r,r)],l),u,p,w,r,r)
u=B.o(["click",new A.j_(s)],j,i)
g=B.o(["width","15","height","15","viewBox","0 0 24 24","fill","currentColor"],j,j)
u=B.a([new A.t(r,r,n,r,r,t,r),new A.t(r,"playground-actions",r,r,r,B.a([v,w,A.b4(B.a([A.br(B.a([A.m8(B.a([],l),B.o(["points","5 3 19 12 5 21 5 3"],j,j))],l),g,r),A.a4(B.a([new B.b("\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)",r)],l),r,r)],l),r,"btn-playground-run",u,r,r)],l),r)],l)
g=A.ah(r,r,C.o,r,new B.az(q,0.75),r,new A.dI(r,new B.az(q,0.25)),r,r,r)
g=B.a([A.a4(B.a([new B.b("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u179a\u17a0\u17d0\u179f:",r)],l),r,g),s.J("\u178f\u17b6\u17c6\u1784 ","\u178f\u17b6\u17c6\u1784"),s.J(o,o),s.J("\u1794\u17be () {\n\n}","\u1794\u17be"),s.J("\u17ac\u1794\u17be () {\n\n}","\u17ac\u1794\u17be"),s.J("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n\n}","\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f"),s.J("\u1781\u178e\u17c8 () {\n\n}","\u1781\u178e\u17c8"),s.J("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i < \u17e5; i = i + \u17e1) {\n\n}","\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb"),s.J("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"),s.J("\u178f\u17d2\u179a\u17a1\u1794\u17cb ","\u178f\u17d2\u179a\u17a1\u1794\u17cb"),s.J("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1788\u17d2\u1798\u17c4\u17c7 {\n\n}","\u1790\u17d2\u1793\u17b6\u1780\u17cb"),s.J("\u1794\u1784\u17d2\u1780\u17be\u178f() {\n\n}","\u1794\u1784\u17d2\u1780\u17be\u178f"),s.J("\u179c\u17b7\u1792\u17b8 \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u179c\u17b7\u1792\u17b8"),s.J("\u1793\u17c1\u17c7.","\u1793\u17c1\u17c7."),s.J("\u1790\u17d2\u1798\u17b8 ","\u1790\u17d2\u1798\u17b8"),s.J("\u1794\u1793\u17d2\u178f\u1796\u17b8 ","\u1794\u1793\u17d2\u178f\u1796\u17b8"),s.J("\u1796\u17b7\u178f","\u1796\u17b7\u178f"),s.J("\u1798\u17b7\u1793\u1796\u17b7\u178f","\u1798\u17b7\u1793\u1796\u17b7\u178f"),s.J("\u1791\u1791\u17c1","\u1791\u1791\u17c1"),s.J("\u17d4","\u17d4"),s.J("\u17d5","\u17d5")],l)
i=B.a([new A.h2("playground-textarea",B.o(["spellcheck","false","placeholder","\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u1793\u17c5\u1791\u17b8\u1793\u17c1\u17c7..."],j,j),B.o(["input",new A.j0(s)],j,i),B.a([new B.b(s.e,r)],l),r)],l)
j=A.a4(B.a([new B.b("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Console Output)",r)],l),"console-pane-title",r)
w=A.ah(r,r,C.o,r,new B.az(q,0.75),r,r,r,r,r)
w=B.a([j,A.a4(B.a([new B.b(s.r,r)],l),r,w)],l)
n=s.w?A.ah(r,r,C.ak,r,r,r,r,r,r,r):A.ah(r,r,C.z,r,r,r,r,r,r,r)
return new A.t(r,"playground-container",r,r,r,B.a([new A.t(r,"playground-toolbar",r,r,r,u,r),new A.t(r,"playground-virtual-keys",r,r,r,g,r),new A.t(r,"playground-grid",r,r,r,B.a([new A.t(r,"playground-editor-pane",r,r,r,i,r),new A.t(r,"playground-console-pane",r,r,r,B.a([new A.t(r,"console-pane-header",r,r,r,w,r),new A.t(r,"console-pane-body",n,r,r,B.a([new B.b(s.f,r)],l),r)],l),r)],l),r)],l),r)},
J(d,e){var w=null,v=B.o(["click",new A.iW(this,d)],x.N,x.v)
return A.b4(B.a([new B.b(e,w)],x.i),w,"vk-btn",v,w,w)}}
A.c6.prototype={
aW(){return new A.fq()},
b0(){return this.d.$0()},
eB(d){return this.e.$1(d)}}
A.fq.prototype={
gdf(){var w,v=D.b.bK(this.d).toLowerCase()
if(v.length===0)return C.W
w=x.o
w=B.aG(new B.dn(C.W,x.W.a(new A.j3(v)),w),w.h("i.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h="search-modal-card",g="search-modal-input",f="search-results-list"
if(!j.a.c)return new A.t(i,i,A.ah(i,i,i,C.aV,i,i,i,i,i,i),i,i,B.a([],x.i),i)
w=j.gdf()
v=x.N
u=x.v
t=B.o(["click",new A.j5(j)],v,u)
s=B.o(["role","dialog","aria-modal","true","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a"],v,v)
r=B.o(["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],v,v)
q=x.i
r=A.br(B.a([A.kz(B.a([],q),B.o(["cx","11","cy","11","r","8"],v,v)),A.cj(B.a([],q),B.o(["d","m21 21-4.3-4.3"],v,v))],q),r,i)
p=j.d
o=B.o(["placeholder","\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u17ac\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791\u178a\u17c2\u179b\u1785\u1784\u17cb\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780...","autocomplete","off","autofocus","true"],v,v)
n=B.o(["input",new A.j6(j),"keydown",new A.j7(j)],v,u)
m=B.o(["click",new A.j8(j)],v,u)
m=B.a([r,new A.dY(C.b0,p,g,g,o,n,i,x.Z),A.b4(B.a([new B.b("ESC",i)],q),i,"search-kbd-esc-btn",m,i,i)],q)
n=B.a([],q)
r=w.length
if(r===0){v=A.ah(i,i,C.o,i,i,i,i,new B.ds(new B.az("rem",1.5)),C.bG,i)
n.push(A.ai(B.a([new B.b('\u179a\u1780\u1798\u17b7\u1793\u1783\u17be\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb "'+j.d+'" \u17a1\u17be\u1799\u17d4',i)],q),i,i,v))}else for(l=0;l<w.length;w.length===r||(0,B.ap)(w),++l){k=w[l]
n.push(new A.bP("search-result-item",i,B.o(["click",new A.j9(j,k)],v,u),B.a([new A.t(i,"search-result-title",i,i,i,B.a([new A.aT(i,i,B.a([new B.b(k.b,i)],q),i),new A.aT("sidebar-badge",i,B.a([new B.b(k.d,i)],q),i)],q),i),new A.t(i,"search-result-desc",i,i,i,B.a([new B.b(k.c,i)],q),i)],q),i))}return new A.t("search-modal-backdrop","search-modal-backdrop visible",i,i,t,B.a([new A.t(h,h,i,s,i,B.a([new A.t(i,"search-input-header",i,i,i,m,i),A.bQ(n,f,f),new A.t(i,"search-modal-footer",i,i,i,B.a([A.a4(B.a([new B.b("\u1785\u17bb\u1785\u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17bb\u1780\u179a\u1780\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791",i)],q),i,i),A.a4(B.a([new B.b("KhmerLang Docs Search",i)],q),i,i)],q),i)],q),i)],q),i)}}
A.eO.prototype={
q(d){var w=this,v=null,u=w.c?" mobile-open":"",t=x.N,s=x.V
return new A.fP("docs-sidebar","docs-sidebar"+u,B.o(["aria-label","\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6"],t,t),B.a([w.ad(B.a([new A.Z("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)",!1,v),new A.Z("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)",!1,v),new A.Z("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)",!1,v)],s),"\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784 (Getting Started)"),w.ad(B.a([new A.Z("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)",!1,v),new A.Z("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)",!1,v),new A.Z("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)",!1,v)],s),"\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 (Language Basics)"),w.ad(B.a([new A.Z("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",!1,v),new A.Z("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)",!1,v),new A.Z("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)",!1,v)],s),"\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a (Control Flow)"),w.ad(B.a([new A.Z("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Declaration)",!1,v),new A.Z("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)",!1,v)],s),"\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)"),w.ad(B.a([new A.Z("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (`\u1794\u1784\u17d2\u1780\u17be\u178f`)",!1,v),new A.Z("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)",!1,v)],s),"\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb (OOP)"),w.ad(B.a([new A.Z("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)",!1,v),new A.Z("ides","Flutter & Web IDEs",!1,v),new A.Z("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)",!1,v),new A.Z("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",!0,"\u1795\u17d2\u1791\u17b6\u179b\u17cb")],s),"\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784")],x.i),v)},
ad(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
x.P.a(d)
w=x.i
v=B.a([new B.b(e,i)],w)
u=B.a([],w)
for(t=d.length,s=x.N,r=x.v,q=this.d,p=0;p<d.length;d.length===t||(0,B.ap)(d),++p){o=d[p]
n=o.a
m=q===n?" active":""
l=B.o(["click",new A.i7(this,o)],s,r)
k=B.a([],w)
j=o.b
if(o.c)k.push(new A.aT(i,A.ah(i,i,C.P,i,i,C.V,i,i,i,i),B.a([new B.b(j,i)],w),i))
else k.push(new B.b(j,i))
j=o.d
if(j!=null)k.push(new A.aT("sidebar-badge badge-new",i,B.a([new B.b(j,i)],w),i))
u.push(new A.bP(i,i,i,B.a([new A.cg("#"+n,i,"sidebar-nav-link"+m,i,i,l,k,i)],w),i))}return new A.t(i,"sidebar-nav-group",i,i,i,B.a([new A.t(i,"sidebar-nav-title",i,i,i,v,i),A.bQ(u,"sidebar-nav-list",i)],w),i)}}
A.Z.prototype={}
A.eW.prototype={
q(d){var w,v,u,t,s,r,q="docs-toc",p=null,o="toc-list",n=x.N,m=B.o(["aria-label","\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7"],n,n),l=x.i,k=B.a([new B.b("\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7",p)],l),j=B.a([],l)
for(w=x.v,v=this.c,u=0;u<17;++u){t=C.b5[u]
s=t.a
r=v===s?" active":""
j.push(new A.bP(p,p,p,B.a([new A.cg("#"+s,p,"toc-link"+r,p,p,B.o(["click",new A.ic(this,t)],n,w),B.a([new B.b(t.b,p)],l),p)],l),p))}return new A.fB(q,q,m,B.a([new A.t(p,"toc-title",p,p,p,k,p),A.bQ(j,o,o)],l),p)}}
A.a0.prototype={}
A.S.prototype={}
A.e2.prototype={
q(d){var w="doc-section",v="section-heading",u=null,t="heading-anchor",s=", ",r="\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",q=x.i
return new A.aM(B.a([A.ab(B.a([A.aa(B.a([new B.b("\u17a2\u1790\u17c1\u179a \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables & Data Types) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#variables",u,u)],q),v),A.P(B.a([new B.b("\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784",u)],q),u),new B.b(" (Let) \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u17d4 \u17a2\u1790\u17c1\u179a\u1780\u17d2\u1793\u17bb\u1784 KhmerLang \u1782\u17ba dynamic-typed \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1795\u17d2\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6 \u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a (String), Boolean, \u17ac Null \u1794\u17b6\u1793\u178a\u17c4\u1799\u179f\u17c1\u179a\u17b8\u17d4",u)],q),u,u),A.bQ(B.a([A.ai(B.a([A.a5(B.a([new B.b("\u179b\u17c1\u1781 (Numbers): ",u)],q)),new B.b("\u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb (",u),A.c(B.a([new B.b("10",u)],q),u),new B.b(s,u),A.c(B.a([new B.b("3.14",u)],q),u),new B.b(") \u1793\u17b7\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (",u),A.c(B.a([new B.b("\u17e1\u17e0",u)],q),u),new B.b(s,u),A.c(B.a([new B.b("\u17e3.\u17e1\u17e4",u)],q),u),new B.b(")\u17d4",u)],q),u,u,u),A.ai(B.a([A.a5(B.a([new B.b("\u17a2\u1780\u17d2\u179f\u179a (Strings): ",u)],q)),new B.b("\u179f\u179a\u179f\u17c1\u179a\u1793\u17c5\u1785\u1793\u17d2\u179b\u17c4\u17c7\u179f\u1789\u17d2\u1789\u17b6\u179f\u1798\u17d2\u179a\u1784\u17cb ",u),A.c(B.a([new B.b('"..."',u)],q),u),new B.b(" \u17ac ",u),A.c(B.a([new B.b("'...'",u)],q),u),new B.b("\u17d4",u)],q),u,u,u),A.ai(B.a([A.a5(B.a([new B.b("\u1794\u17ca\u17bc\u179b\u17b8\u1793 (Booleans): ",u)],q)),new B.b(r,u),A.c(B.a([new B.b("\u1796\u17b7\u178f",u)],q),u),new B.b(" (True) \u1793\u17b7\u1784 ",u),A.c(B.a([new B.b("\u1798\u17b7\u1793\u1796\u17b7\u178f",u)],q),u),new B.b(" (False)\u17d4",u)],q),u,u,u),A.ai(B.a([A.a5(B.a([new B.b("\u1791\u1791\u17c1 (Null): ",u)],q)),new B.b(r,u),A.c(B.a([new B.b("\u1791\u1791\u17c1",u)],q),u),new B.b(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u1798\u17d2\u179b\u17c3\u178a\u17c2\u179b\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4",u)],q),u,u,u)],q),u,u),C.aD],q),w,"variables"),A.ab(B.a([A.aa(B.a([new B.b("\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Khmer Numerals & Math) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#numerals",u,u)],q),v),A.P(B.a([new B.b("\u1785\u17c6\u178e\u17bb\u1785\u17a2\u179f\u17d2\u1785\u17b6\u179a\u17d2\u1799\u1794\u17c6\u1795\u17bb\u178f\u179a\u1794\u179f\u17cb KhmerLang \u1782\u17ba\u1780\u17b6\u179a\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a ",u),A.a5(B.a([new B.b("\u17e0, \u17e1, \u17e2, \u17e3, \u17e4, \u17e5, \u17e6, \u17e7, \u17e8, \u17e9",u)],q)),new B.b(" \u1787\u17b6\u179b\u17c1\u1781\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f Lexer \u1793\u17b7\u1784 Parser\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1799\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\u1798\u1780\u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 \u17ac\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794\u1794\u17b6\u1793\u178a\u17c4\u1799\u179a\u179b\u17bc\u1793!",u)],q),u,u),new A.t(u,"table-responsive",u,u,u,B.a([A.kH(B.a([A.kJ(B.a([A.J(B.a([A.aU(B.a([new B.b("\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Operator)",u)],q)),A.aU(B.a([new B.b("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 (Description)",u)],q)),A.aU(B.a([new B.b("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd (Example)",u)],q)),A.aU(B.a([new B.b("\u179b\u1791\u17d2\u1792\u1795\u179b (Result)",u)],q))],q))],q)),A.kI(B.a([A.J(B.a([A.e(B.a([A.c(B.a([new B.b("+",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u17bc\u1780\u179b\u17c1\u1781 \u17ac\u1797\u17d2\u1787\u17b6\u1794\u17cb\u17a2\u1780\u17d2\u179f\u179a",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e1\u17e0 + \u17e5",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e1\u17e5",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("-",u)],q),u)],q)),A.e(B.a([new B.b("\u178a\u1780\u179b\u17c1\u1781",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e2\u17e0 - \u17e7",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e1\u17e3",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("*",u)],q),u)],q)),A.e(B.a([new B.b("\u1782\u17bb\u178e\u179b\u17c1\u1781",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e6 * \u17e4",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e2\u17e4",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("/",u)],q),u)],q)),A.e(B.a([new B.b("\u1785\u17c2\u1780\u179b\u17c1\u1781",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e5\u17e0 / \u17e2",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e2\u17e5",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("%",u)],q),u)],q)),A.e(B.a([new B.b("\u179f\u17c6\u178e\u179b\u17cb\u1793\u17c3\u1780\u17b6\u179a\u1785\u17c2\u1780 (Modulo)",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e1\u17e0 % \u17e3",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e1",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("==",u)],q),u),new B.b(s,u),A.c(B.a([new B.b("!=",u)],q),u)],q)),A.e(B.a([new B.b("\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6, \u1798\u17b7\u1793\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17e5 == \u17e5",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1796\u17b7\u178f",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1793\u17b7\u1784",u)],q),u),new B.b(s,u),A.c(B.a([new B.b("\u17ac",u)],q),u),new B.b(s,u),A.c(B.a([new B.b("\u1798\u17b7\u1793",u)],q),u)],q)),A.e(B.a([new B.b("\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6 AND, OR, NOT",u)],q)),A.e(B.a([A.c(B.a([new B.b("(\u17e5 > \u17e2) \u1793\u17b7\u1784 (\u17e3 < \u17e4)",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1796\u17b7\u178f",u)],q),u)],q))],q))],q))],q),"doc-table")],q),u),C.aO],q),w,"numerals"),A.ab(B.a([A.aa(B.a([new B.b("\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 & \u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb (Punctuations) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#punctuations",u,u)],q),v),A.P(B.a([new B.b("KhmerLang \u1794\u178f\u17cb\u1794\u17c2\u1793\u178f\u17b6\u1798\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798\u1781\u17d2\u1798\u17c2\u179a \u178a\u17c4\u1799\u17a2\u1793\u17bb\u1789\u17d2\u1789\u17b6\u178f\u17b1\u17d2\u1799\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 \u17ac\u1780\u17c6\u178e\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u17d6",u)],q),u,u),A.bQ(B.a([A.ai(B.a([A.c(B.a([new B.b("\u17d4",u)],q),u),new B.b(" (\u1781\u178e\u17d2\u178c) \u17ac ",u),A.c(B.a([new B.b(";",u)],q),u),new B.b(" (Semicolon)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 (Statement Terminator)\u17d4 \u1780\u17cf\u17a2\u17b6\u1785\u179a\u17c6\u179b\u1784\u1794\u17b6\u1793\u178a\u17c2\u179a\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1785\u17bb\u17c7\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1790\u17d2\u1798\u17b8\u17d4",u)],q),u,u,u),A.ai(B.a([A.c(B.a([new B.b("\u17d5",u)],q),u),new B.b(" (\u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793)\u17d6 \u179f\u1789\u17d2\u1789\u17b6\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1790\u17b6\u1781\u178e\u17d2\u178c \u17ac\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u17d4",u)],q),u,u,u),A.ai(B.a([A.c(B.a([new B.b("\u17d6",u)],q),u),new B.b(" (\u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179b\u17bb\u1780\u1780\u17bc\u178a \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u17d4",u)],q),u,u,u)],q),u,u),C.aS],q),w,"punctuations")],q),u)}}
A.ec.prototype={
q(d){var w="doc-section",v="section-heading",u=null,t="heading-anchor",s="\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 ",r=x.i
return new A.aM(B.a([A.ab(B.a([A.aa(B.a([new B.b("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be...\u17ac\u1794\u17be...\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (Conditionals) ",u),A.T(B.a([new B.b("#",u)],r),u,t,u,"#conditionals",u,u)],r),v),A.P(B.a([new B.b("\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u1780\u17bc\u178a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u1794\u17be",u)],r),u),new B.b(" (if), ",u),A.c(B.a([new B.b("\u17ac\u1794\u17be",u)],r),u),new B.b(" (else if), \u1793\u17b7\u1784 ",u),A.c(B.a([new B.b("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",u)],r),u),new B.b(" (else)\u17d6",u)],r),u,u),C.aI],r),w,"conditionals"),A.ab(B.a([A.aa(B.a([new B.b("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loops) ",u),A.T(B.a([new B.b("#",u)],r),u,t,u,"#while-loop",u,u)],r),v),A.P(B.a([new B.b(s,u),A.c(B.a([new B.b("\u1781\u178e\u17c8",u)],r),u),new B.b(" (while loop) \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u179f\u17b6\u179a\u17a1\u17be\u1784\u179c\u17b7\u1789\u178a\u179a\u17b6\u1794\u178e\u17b6\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u178f\u17c2\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3 ",u),A.c(B.a([new B.b("\u1796\u17b7\u178f",u)],r),u),new B.b("\u17d6",u)],r),u,u),C.aB],r),w,"while-loop"),A.ab(B.a([A.aa(B.a([new B.b("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loops) ",u),A.T(B.a([new B.b("#",u)],r),u,t,u,"#for-loop",u,u)],r),v),A.P(B.a([new B.b(s,u),A.c(B.a([new B.b("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",u)],r),u),new B.b(" (for loop) \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u178a\u17c2\u179b\u1798\u17b6\u1793\u1780\u17c6\u178e\u178f\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb\u17d6",u)],r),u,u),C.aC],r),w,"for-loop")],r),u)}}
A.ej.prototype={
q(d){var w="doc-section",v="section-heading",u=null,t="heading-anchor",s=x.i
return new A.aM(B.a([A.ab(B.a([A.aa(B.a([new B.b("\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions) ",u),A.T(B.a([new B.b("#",u)],s),u,t,u,"#functions",u,u)],s),v),A.P(B.a([new B.b("\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",u)],s),u),new B.b(" \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1798\u1780\u179c\u17b7\u1789\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",u),A.c(B.a([new B.b("\u178f\u17d2\u179a\u17a1\u1794\u17cb",u)],s),u),new B.b(" (return)\u17d6",u)],s),u,u),C.aM],s),w,"functions"),A.ab(B.a([A.aa(B.a([new B.b("Recursion (\u1780\u17bc\u178a Fibonacci) ",u),A.T(B.a([new B.b("#",u)],s),u,t,u,"#recursion",u,u)],s),v),A.P(B.a([new B.b("KhmerLang \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 (Recursive Functions) \u1799\u17c9\u17b6\u1784\u179a\u179b\u17bc\u1793\u17d6",u)],s),u,u),C.aN],s),w,"recursion"),A.ab(B.a([A.aa(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (Object-Oriented Programming) ",u),A.T(B.a([new B.b("#",u)],s),u,t,u,"#classes",u,u)],s),v),A.P(B.a([new B.b("KhmerLang \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u178f\u17b6\u1798\u1794\u17c2\u1794 OOP \u1796\u17c1\u1789\u179b\u17c1\u1789\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u1782\u17c6\u179a\u17bc\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb",u)],s),u),new B.b(" (Class) \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Constructor \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",u),A.c(B.a([new B.b("\u1794\u1784\u17d2\u1780\u17be\u178f(...)",u)],s),u),new B.b("\u17d4",u)],s),u,u),A.P(B.a([new B.b("\u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u1790\u17d2\u1798\u17b8",u)],s),u),new B.b(" (New)\u17d6",u)],s),u,u),C.aK],s),w,"classes"),A.ab(B.a([A.aa(B.a([new B.b("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (OOP Inheritance: `\u1794\u1793\u17d2\u178f\u1796\u17b8`) ",u),A.T(B.a([new B.b("#",u)],s),u,t,u,"#inheritance",u,u)],s),v),A.P(B.a([new B.b("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Superclass) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17a1\u17be\u1784\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",u),A.c(B.a([new B.b("\u1794\u1793\u17d2\u178f\u1796\u17b8",u)],s),u),new B.b(" (extends)\u17d4 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 (Subclass) \u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1799\u1780\u179b\u1780\u17d2\u1781\u178e\u17c8\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7 \u1793\u17b7\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u17d6",u)],s),u,u),C.aF],s),w,"inheritance")],s),u)}}
A.ek.prototype={
q(d){var w=null,v="KhmerLang (\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a)",u="#hello-world",t="#playground",s="doc-section",r="section-heading",q="heading-anchor",p=", ",o="sub-heading",n=x.i
return new A.aM(B.a([new A.t(w,"hero-banner",w,w,w,B.a([new A.t(w,"hero-tag",w,w,w,B.a([A.a4(B.a([new B.b("\u2728 \u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1781\u17d2\u1798\u17c2\u179a\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1782\u17b6\u17c6\u1791\u17d2\u179a OOP \u1796\u17c1\u1789\u179b\u17c1\u1789",w)],n),w,w)],n),w),new A.fJ("doc-title",B.a([new B.b("\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a \u2014 \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang)",w)],n),w),A.P(B.a([A.a5(B.a([new B.b(v,w)],n)),new B.b(" \u1782\u17ba\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u178a\u17c2\u179b\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u1785\u1793\u17b6\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u17d4 \u179c\u17b6\u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179f\u17b7\u1780\u17d2\u179f\u17b6 \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u1794\u17c2\u1794 Object-Oriented Programming (OOP) \u1793\u17b7\u1784\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (\u17e0-\u17e9) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u17d4",w)],n),"hero-lead",w),new A.t(w,"hero-buttons",w,w,w,B.a([A.T(B.a([new B.b("\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179a\u17c0\u1793\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",w)],n),w,"btn-primary-compact",w,u,w,w),A.T(B.a([new B.b("\ud83c\udfae \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u179b\u17be Web Browser",w)],n),w,"btn-secondary",w,t,w,w)],n),w)],n),w),A.ab(B.a([A.aa(B.a([new B.b("\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Introduction) ",w),A.T(B.a([new B.b("#",w)],n),w,q,w,"#intro",w,w)],n),r),A.P(B.a([new B.b("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17be\u1798\u17d2\u1794\u17b8\u1780\u17b6\u178f\u17cb\u1794\u1793\u17d2\u1790\u1799\u179a\u1794\u17b6\u17c6\u1784\u1797\u17b6\u179f\u17b6\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u179f\u17d0\u1799\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4 \u179f\u17b7\u179f\u17d2\u179f \u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f \u1793\u17b7\u1784\u17a2\u17d2\u1793\u1780\u179a\u17c0\u1793\u178a\u17c6\u1794\u17bc\u1784\u17a2\u17b6\u1785\u1799\u179b\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u17a2\u17c6\u1796\u17b8\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6\u1793\u17c3\u1780\u17bc\u178a (Logic) \u178f\u17b6\u1798\u179a\u1799\u17c8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1781\u17d2\u1798\u17c2\u179a\u1792\u1798\u17d2\u1798\u1787\u17b6\u178f\u17b7 \u178a\u17bc\u1785\u1787\u17b6 ",w),A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784",w)],n),w),new B.b(p,w),A.c(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789",w)],n),w),new B.b(p,w),A.c(B.a([new B.b("\u1794\u17be",w)],n),w),new B.b(p,w),A.c(B.a([new B.b("\u1781\u178e\u17c8",w)],n),w),new B.b(p,w),A.c(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb",w)],n),w),new B.b(" \u1793\u17b7\u1784 ",w),A.c(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",w)],n),w),new B.b("\u17d4",w)],n),w,w),new A.t(w,"callout callout-info",w,w,w,B.a([new A.t(w,"callout-icon",w,w,w,B.a([new B.b("\ud83d\udca1",w)],n),w),new A.t(w,"callout-content",w,w,w,B.a([A.a5(B.a([new B.b("\u1785\u17c6\u178e\u17bb\u1785\u1796\u17b7\u179f\u17c1\u179f\u17d6 ",w)],n)),new B.b("\u179a\u17b6\u179b\u17cb\u1780\u17bc\u178a\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a\u1793\u17c1\u17c7 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 ",w),A.a5(B.a([new B.b("\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Run)",w)],n)),new B.b(" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a \u1793\u17b7\u1784\u1791\u179f\u17d2\u179f\u1793\u17b6\u179b\u1791\u17d2\u1792\u1795\u179b\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u179b\u17be Browser \u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb!",w)],n),w)],n),w)],n),s,"intro"),A.ab(B.a([A.aa(B.a([new B.b("\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Installation & Setup) ",w),A.T(B.a([new B.b("#",w)],n),w,q,w,"#install",w,w)],n),r),A.P(B.a([new B.b("\u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1798\u17bd\u1799 ",w),A.a5(B.a([new B.b(v,w)],n)),new B.b(" \u1798\u17b6\u1793\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b \u1793\u17b7\u1784\u179a\u17a0\u17d0\u179f\u17d4 \u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u178f\u17b6\u1798\u179a\u1799\u17c8 ",w),A.a5(B.a([new B.b("Command Line Tool (CLI)",w)],n)),new B.b(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1795\u17d2\u1791\u17b6\u179b\u17cb \u17ac\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 ",w),A.a5(B.a([new B.b("Khmer IDE",w)],n)),new B.b(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u17d4",w)],n),w,w),A.dX(B.a([new B.b("\u17e1. \u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792 (Prerequisites)",w)],n),o),A.P(B.a([new B.b("\u1798\u17bb\u1793\u1796\u17c1\u179b\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u178a\u17c6\u17a1\u17be\u1784 \u179f\u17bc\u1798\u1794\u17d2\u179a\u17b6\u1780\u178a\u1790\u17b6\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1798\u17b6\u1793\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u178a\u17bc\u1785\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u17d6",w)],n),w,w),A.bQ(B.a([A.ai(B.a([A.a5(B.a([new B.b("\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u17d6 ",w)],n)),new B.b("\u1782\u17b6\u17c6\u1791\u17d2\u179a macOS, Linux, \u1793\u17b7\u1784 Windows (WSL / PowerShell)",w)],n),w,w,w),A.ai(B.a([A.a5(B.a([new B.b("Dart SDK (3.0+)\u17d6 ",w)],n)),new B.b("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a Engine \u1793\u17b7\u1784 Native Compiler \u179a\u1794\u179f\u17cb\u1797\u17b6\u179f\u17b6",w)],n),w,w,w),A.ai(B.a([A.a5(B.a([new B.b("Git\u17d6 ",w)],n)),new B.b("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u1794\u17d2\u179a\u1797\u1796\u1780\u17bc\u178a \u17ac Releases",w)],n),w,w,w)],n),w,w),A.dX(B.a([new B.b("\u17e2. \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 CLI \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1791\u17bc\u1791\u17c5 (Universal One-Line Install)",w)],n),o),A.P(B.a([new B.b("\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1782\u17d2\u179a\u1794\u17cb\u179a\u17bc\u1794\u17a2\u17b6\u1785\u178a\u17c6\u17a1\u17be\u1784 ",w),A.c(B.a([new B.b("khmer",w)],n),w),new B.b(" CLI \u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u1781\u17d2\u179b\u17bd\u1793\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u178f\u17c2\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u17d6",w)],n),w,w),C.aE,C.aP,C.aL,A.dX(B.a([new B.b("\u17e3. \u179a\u1794\u17c0\u1794\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780",w)],n),o),A.P(B.a([new B.b("\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u17be\u1780\u1793\u17d2\u1791\u17bb\u1799 ",w),A.c(B.a([new B.b(".khmer",w)],n),w),new B.b("\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17af\u1780\u179f\u17b6\u179a\u1790\u17d2\u1798\u17b8\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f (\u178a\u17bc\u1785\u1787\u17b6 VS Code, Cursor, \u17ac Nano)\u17d6",w)],n),w,w),C.aH,A.P(B.a([new B.b("\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1798\u1780\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 Terminal\u17d6",w)],n),w,w),C.aQ,A.dX(B.a([new B.b("\u17e4. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Interactive REPL",w)],n),o),A.P(B.a([new B.b("\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u17ac\u1782\u178e\u1793\u17b6\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1797\u17d2\u179b\u17b6\u1798\u17d7 \u17a2\u17d2\u1793\u1780\u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 ",w),A.c(B.a([new B.b("khmer",w)],n),w),new B.b(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1788\u17d2\u1798\u17c4\u17c7\u17af\u1780\u179f\u17b6\u179a\u1793\u17c4\u17c7\u1791\u17c1 \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17be\u1780 Interactive REPL Shell\u17d6",w)],n),w,w),C.aJ,A.dX(B.a([new B.b("\u17e5. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u179a\u1794\u17cb Text Editor \u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb (VS Code, Vim, Sublime, Nano)",w)],n),o),A.P(B.a([new B.b("KhmerLang CLI \u1795\u17d2\u178a\u179b\u17cb\u17a7\u1794\u1780\u179a\u178e\u17cd\u1787\u17c6\u1793\u17bd\u1799\u179f\u17d2\u179a\u17b6\u1794\u17cb\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f\u17d6",w)],n),w,w),C.aR,A.dX(B.a([new B.b("\u17e6. \u1787\u1798\u17d2\u179a\u17be\u179f\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798 GUI & Web IDE",w)],n),o),A.P(B.a([new B.b("\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Terminal CLI \u17a2\u17d2\u1793\u1780\u1780\u17cf\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u178a\u17c2\u179b\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17d6",w)],n),w,w),A.bQ(B.a([A.ai(B.a([A.a5(B.a([new B.b("Web Playground (\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178f\u17b6\u1798 Web Browser)\u17d6 ",w)],n)),new B.b("\u17a2\u17d2\u1793\u1780\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u17a1\u17be\u1799! \u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179a\u1798\u17bc\u179a\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1795\u17d2\u1793\u17c2\u1780 ",w),A.T(B.a([new B.b("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb",w)],n),w,w,w,t,w,w),new B.b(" \u1793\u17c5\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u1793\u17c3\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u179b\u17be Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u17d4",w)],n),w,w,w),A.ai(B.a([A.a5(B.a([new B.b("Khmer IDE (\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Desktop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb macOS / Windows)\u17d6 ",w)],n)),new B.b("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 IDE \u178a\u17be\u1798\u178a\u17c2\u179b\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799 Flutter \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c Virtual Khmer Keypad \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1781\u17d2\u1798\u17c2\u179a\u179a\u17a0\u17d0\u179f, Syntax Highlighting, Tabs \u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u17af\u1780\u179f\u17b6\u179a\u1785\u17d2\u179a\u17be\u1793, AST Visualizer, \u1793\u17b7\u1784 Terminal \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780\u17d4",w)],n),w,w,w)],n),w,w)],n),s,"install"),A.ab(B.a([A.aa(B.a([new B.b("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (First Program: \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780) ",w),A.T(B.a([new B.b("#",w)],n),w,q,w,u,w,w)],n),r),A.P(B.a([new B.b('\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1794\u17d2\u179a\u1796\u17c3\u178e\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179a\u17c0\u1793\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1782\u17ba\u1780\u17b6\u179a\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b6\u1780\u17d2\u1799 "\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780" (Hello World) \u1791\u17c5\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ',w),A.c(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",w)],n),w),new B.b("\u17d6",w)],n),w,w),C.aG],n),s,"hello-world")],n),w)}}
A.eI.prototype={
q(d){var w="doc-section",v="section-heading",u=null,t="heading-anchor",s="table-responsive",r="doc-table",q=x.i
return new A.aM(B.a([A.ab(B.a([A.aa(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Built-in Functions) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#builtins",u,u)],q),v),A.P(B.a([new B.b("KhmerLang \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a\u178a\u17c2\u179b\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1798\u1780\u179f\u17d2\u179a\u17b6\u1794\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1797\u17b6\u179f\u17b6\u17d6",u)],q),u,u),new A.t(u,s,u,u,u,B.a([A.kH(B.a([A.kJ(B.a([A.J(B.a([A.aU(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Builtin)",u)],q)),A.aU(B.a([new B.b("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Usage)",u)],q)),A.aU(B.a([new B.b("\u1780\u17b6\u179a\u1796\u1793\u17d2\u1799\u179b\u17cb (Explanation)",u)],q))],q))],q)),A.kI(B.a([A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u1798\u17d2\u179b\u17c3:", x)',u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u178f\u1798\u17d2\u179b\u17c3\u17a2\u1790\u17c1\u179a\u1793\u17c5\u179b\u17be\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 (Standard Output)",u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u17d2\u179a\u179c\u17c2\u1784(...)",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b('\u1794\u17d2\u179a\u179c\u17c2\u1784("\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6")',u)],q),u)],q)),A.e(B.a([new B.b("\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u179c\u17c2\u1784\u178f\u17bd\u17a2\u1780\u17d2\u179f\u179a \u17ac\u1785\u17c6\u1793\u17bd\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784 Array",u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u17d2\u179a\u1797\u17c1\u1791(...)",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1794\u17d2\u179a\u1797\u17c1\u1791(\u17e1\u17e2\u17e3)",u)],q),u)],q)),A.e(B.a([new B.b("\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (string, number, boolean, null, class, etc.)",u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u1793\u17d2\u1790\u17c2\u1798(...)",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1794\u1793\u17d2\u1790\u17c2\u1798(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8)",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1793\u17d2\u1790\u17c2\u1798\u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8\u1791\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3\u1794\u1789\u17d2\u1787\u17b8 Array",u)],q))],q))],q))],q),r)],q),u)],q),w,"builtins"),A.ab(B.a([A.aa(B.a([new B.b("\u17a7\u1794\u1780\u179a\u178e\u17cd\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd (Tools & IDEs) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#ides",u,u)],q),v),A.P(B.a([new B.b("\u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u179a\u17bd\u179b\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u17a2\u17c1\u1780\u17bc\u17a1\u17bc\u179f\u17ca\u17b8 KhmerLang \u179a\u17bd\u1798\u1798\u17b6\u1793\u17a7\u1794\u1780\u179a\u178e\u17cd\u1791\u17c6\u1793\u17be\u1794\u17d7\u1787\u17b6\u1785\u17d2\u179a\u17be\u1793\u17d6",u)],q),u,u),A.bQ(B.a([A.ai(B.a([A.a5(B.a([new B.b("KhmerLang Flutter IDE (Cross-Platform)\u17d6 ",u)],q)),new B.b("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799 Flutter \u1798\u17b6\u1793\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793 Dart Engine \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u179b\u17be macOS, Windows, Linux \u1793\u17b7\u1784 Web \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb \u1787\u17b6\u1798\u17bd\u1799 Virtual Khmer Keyboard, Tabs, AST Inspector \u1793\u17b7\u1784 Output Console\u17d4",u)],q),u,u,u),A.ai(B.a([A.a5(B.a([new B.b("Programiz-Style Web IDE\u17d6 ",u)],q)),new B.b("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798 Programiz \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be Web Browser \u1787\u17b6\u1798\u17bd\u1799 Python Backend Server\u17d4",u)],q),u,u,u),A.ai(B.a([A.a5(B.a([new B.b("Command Line Interface (CLI) & REPL\u17d6 ",u)],q)),new B.b("\u17a7\u1794\u1780\u179a\u178e\u17cd\u1794\u1789\u17d2\u1787\u17b6\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8 Terminal \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u17af\u1780\u179f\u17b6\u179a ",u),A.c(B.a([new B.b(".khmer",u)],q),u),new B.b("\u17d4",u)],q),u,u,u)],q),u,u)],q),w,"ides"),A.ab(B.a([A.aa(B.a([new B.b("\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Khmer Syntax Cheat Sheet) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#cheat-sheet",u,u)],q),v),A.P(B.a([new B.b("\u178f\u17b6\u179a\u17b6\u1784\u1799\u17c4\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang)\u17d6",u)],q),u,u),new A.t(u,s,u,u,u,B.a([A.kH(B.a([A.kJ(B.a([A.J(B.a([A.aU(B.a([new B.b("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Keyword)",u)],q)),A.aU(B.a([new B.b("\u179f\u1798\u1798\u17bc\u179b\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Equivalent)",u)],q)),A.aU(B.a([new B.b("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb",u)],q)),A.aU(B.a([new B.b("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1780\u17bc\u178a",u)],q))],q))],q)),A.kI(B.a([A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("let / var",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1790\u17d2\u1798\u17b8",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784 x = \u17e1\u17e0;",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("print / echo",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb",u)],q)),A.e(B.a([A.c(B.a([new B.b('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8");',u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u17be",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("if",u)],q),u)],q)),A.e(B.a([new B.b("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c6\u1794\u17bc\u1784",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1794\u17be (x > \u17e0) { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u17ac\u1794\u17be",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("else if / elif",u)],q),u)],q)),A.e(B.a([new B.b("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17ac\u1794\u17be (x == \u17e0) { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("else",u)],q),u)],q)),A.e(B.a([new B.b("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1793\u17c1\u17c7",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1781\u178e\u17c8",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("while",u)],q),u)],q)),A.e(B.a([new B.b("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1781\u178e\u17c8 (x > \u17e0) { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("for",u)],q),u)],q)),A.e(B.a([new B.b("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1798\u17b6\u1793\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1780\u17c6\u178e\u178f\u17cb",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i=\u17e0; i<\u17e5; i=i+\u17e1)",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",u)],q),u),new B.b(" / ",u),A.c(B.a([new B.b("\u179c\u17b7\u1792\u17b8",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("function / def",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17bc\u1780(\u1780, \u1781) { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u178f\u17d2\u179a\u17a1\u1794\u17cb",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("return",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1796\u17b8\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u178f\u17d2\u179a\u17a1\u1794\u17cb \u1780 + \u1781",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("class",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u17d2\u179a\u1780\u17b6\u179f\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u17b7\u179f\u17d2\u179f { ... }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u1784\u17d2\u1780\u17be\u178f",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("constructor / __init__",u)],q),u)],q)),A.e(B.a([new B.b("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u1794\u1784\u17d2\u1780\u17be\u178f\u179c\u178f\u17d2\u1790\u17bb",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) { \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7 }",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1793\u17c1\u17c7",u)],q),u),new B.b(" / ",u),A.c(B.a([new B.b("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("this / self",u)],q),u)],q)),A.e(B.a([new B.b("\u1799\u17c4\u1784\u1791\u17c5\u179b\u17be Object \u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793",u)],q)),A.e(B.a([A.c(B.a([new B.b('\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"',u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1790\u17d2\u1798\u17b8",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("new",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb",u)],q)),A.e(B.a([A.c(B.a([new B.b('\u178f\u17b6\u17c6\u1784 p = \u1790\u17d2\u1798\u17b8 \u179f\u17b7\u179f\u17d2\u179f("\u178f\u17b6\u179a\u17b6")',u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1794\u1793\u17d2\u178f\u1796\u17b8",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("extends",u)],q),u)],q)),A.e(B.a([new B.b("\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Inheritance)",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1798\u17b6 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1796\u17b7\u178f",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("true",u)],q),u)],q)),A.e(B.a([new B.b("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1796\u17b7\u178f",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784 \u178f\u17d2\u179a\u17bc\u179c = \u1796\u17b7\u178f",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1798\u17b7\u1793\u1796\u17b7\u178f",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("false",u)],q),u)],q)),A.e(B.a([new B.b("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1798\u17b7\u1793\u1796\u17b7\u178f",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784 \u1781\u17bb\u179f = \u1798\u17b7\u1793\u1796\u17b7\u178f",u)],q),u)],q))],q)),A.J(B.a([A.e(B.a([A.c(B.a([new B.b("\u1791\u1791\u17c1",u)],q),u)],q)),A.e(B.a([A.c(B.a([new B.b("null / none",u)],q),u)],q)),A.e(B.a([new B.b("\u178f\u1798\u17d2\u179b\u17c3\u1791\u1791\u17c1\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",u)],q)),A.e(B.a([A.c(B.a([new B.b("\u178f\u17b6\u17c6\u1784 \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 = \u1791\u1791\u17c1",u)],q),u)],q))],q))],q))],q),r)],q),u)],q),w,"cheat-sheet"),A.ab(B.a([A.aa(B.a([new B.b("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb (Live Interactive Playground) ",u),A.T(B.a([new B.b("#",u)],q),u,t,u,"#playground",u,u)],q),v),A.P(B.a([new B.b("\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a KhmerLang \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1780\u17d2\u1793\u17bb\u1784 Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780! \u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u17ac\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1781\u17d2\u179b\u17bd\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780 \u179a\u17bd\u1785\u1785\u17bb\u1785 ",u),A.a5(B.a([new B.b(' "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" ',u)],q)),new B.b("\u17d6",u)],q),u,u),C.bj],q),w,"playground")],q),u)}}
A.z.prototype={}
A.d3.prototype={
i(d){return"NumberNode("+B.j(this.a)+")"},
gX(){return this.a}}
A.bE.prototype={
i(d){return'StringNode("'+this.a+'")'},
gX(){return this.a}}
A.bR.prototype={
i(d){return"BooleanNode("+this.a+")"},
gX(){return this.a}}
A.d2.prototype={
i(d){return"NullNode()"}}
A.cn.prototype={
i(d){return"ArrayNode("+B.j(this.a)+")"}}
A.d4.prototype={
i(d){return"ObjectNode("+B.j(this.a)+")"}}
A.bd.prototype={
i(d){return"IdentifierNode("+this.a+")"}}
A.dj.prototype={
i(d){return"ThisNode()"}}
A.dk.prototype={
i(d){return"UnaryOpNode("+this.a+", "+this.b.i(0)+")"}}
A.aL.prototype={
i(d){return"BinaryOpNode("+this.a.i(0)+", "+this.b+", "+this.c.i(0)+")"}}
A.co.prototype={
i(d){return"AssignmentNode("+this.a+", "+this.b.i(0)+")"},
gX(){return this.b}}
A.c1.prototype={
i(d){return"MemberAccessNode("+this.a.i(0)+"."+this.b+")"},
gaa(){return this.a}}
A.cV.prototype={
i(d){return"MemberAssignmentNode("+this.a.i(0)+"."+this.b+" = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
A.bY.prototype={
i(d){return"IndexAccessNode("+this.a.i(0)+"["+this.b.i(0)+"])"},
gaa(){return this.a}}
A.cI.prototype={
i(d){return"IndexAssignmentNode("+this.a.i(0)+"["+this.b.i(0)+"] = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
A.cH.prototype={
i(d){return"FunctionCallNode("+this.a.i(0)+", "+B.j(this.b)+")"}}
A.d0.prototype={
i(d){return"NewNode("+this.a+", "+B.j(this.b)+")"}}
A.dm.prototype={
i(d){return"VarDeclNode("+this.a+", "+B.j(this.b)+")"},
gX(){return this.b}}
A.d6.prototype={
i(d){return"PrintNode("+B.j(this.a)+")"}}
A.cp.prototype={
i(d){return"BlockNode("+B.j(this.a)+")"}}
A.bX.prototype={
i(d){return"IfNode("+this.a.i(0)+", "+this.b.i(0)+", else: "+B.j(this.c)+")"}}
A.dq.prototype={
i(d){return"WhileNode("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.cG.prototype={
i(d){var w=this
return"ForNode(init: "+B.j(w.a)+", cond: "+B.j(w.b)+", inc: "+B.j(w.c)+", body: "+w.d.i(0)+")"}}
A.by.prototype={
i(d){return"FunctionDeclNode("+this.a+"("+B.j(this.b)+"), "+this.c.i(0)+")"}}
A.ct.prototype={
i(d){return"ClassDeclNode("+this.a+" extends "+B.j(this.b)+", methods: "+B.j(this.c)+")"}}
A.da.prototype={
i(d){return"ReturnNode("+B.j(this.a)+")"},
gX(){return this.a}}
A.cF.prototype={
i(d){return"ExpressionStmtNode("+this.a.i(0)+")"}}
A.bc.prototype={
a0(d){var w=this.a
if(w.R(d))return w.p(0,d)
w=this.b
if(w!=null)return w.a0(d)
throw B.d(A.I("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u17a2\u1790\u17c1\u179a \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' / Undefined variable or function '"+d+"'"))},
cj(d,e){var w=this.a
if(w.R(d)){w.k(0,d,e)
return}w=this.b
if(w!=null){w.cj(d,e)
return}throw B.d(A.I("\u17a2\u1790\u17c1\u179a\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1794\u17b6\u1793\u1794\u17d2\u179a\u1780\u17b6\u179f '"+d+"' / Cannot assign to undeclared variable '"+d+"'"))}}
A.aj.prototype={
$1(d){return this.b.$1(x.j.a(d))},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785/BuiltinFunction "+this.a+">"}}
A.bh.prototype={
cl(d){var w=this,v=B.B(x.N,x.z)
v.k(0,"\u1793\u17c1\u17c7",d)
v.k(0,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",d)
return new A.bh(w.a,w.b,w.c,new A.bc(v,w.d))},
$2(d,e){var w,v,u,t,s,r,q,p,o=this
x.j.a(e)
u=J.aS(e)
t=u.gl(e)
s=o.b
r=s.length
if(t!==r){t=o.a
throw B.d(A.I("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 '"+t+"' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1785\u17c6\u1793\u17bd\u1793 "+r+" \u1794\u17c9\u17bb\u1793\u17d2\u178f\u17c2\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793 "+u.gl(e)+" / Method '"+t+"' expected "+s.length+" arguments, got "+u.gl(e)))}w=new A.bc(B.B(x.N,x.z),o.d)
for(q=0;q<s.length;++q){t=s[q]
r=u.p(e,q)
w.a.k(0,t,r)}try{d.cr(o.c.a,w)}catch(p){u=B.X(p)
if(u instanceof A.eJ){v=u
return v.a}else throw p}return null},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+this.a+">"}}
A.bg.prototype={
bB(d){var w=this.c
if(w.R(d))return w.p(0,d)
w=this.b
if(w!=null)return w.bB(d)
return null},
cw(d,e){var w,v=new A.bi(this,B.B(x.N,x.z)),u=this.bB("\u1794\u1784\u17d2\u1780\u17be\u178f")
if(u!=null)u.cl(v).$2(d,e)
else if(e.length!==0){w=this.a
throw B.d(A.I("\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+w+"' \u1782\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1794\u1784\u17d2\u1780\u17be\u178f (Constructor) / Class '"+w+"' has no constructor taking arguments"))}return v},
i(d){return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a+">"}}
A.bi.prototype={
a0(d){var w,v=this.b
if(v.R(d))return v.p(0,d)
v=this.a
w=v.bB(d)
if(w!=null)return w.cl(this)
throw B.d(A.I("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a '"+d+"' \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+v.a+"' / Undefined property or method '"+d+"'"))},
i(d){return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a.a+">"}}
A.cP.prototype={
bC(){var w,v=this.b
if(v!=null){w=" [\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb/Line "+B.j(v)
v=this.c
w=(v!=null?w+(", \u1787\u17bd\u179a/Col "+B.j(v)):w)+"]"}else w=""
return"\u1780\u17c6\u17a0\u17bb\u179f/Error"+w+": "+this.a},
co(){var w,v=this.b
if(v==null)v=1
w=this.c
if(w==null)w=1
return"<source>:"+v+":"+w+": error: "+this.a},
i(d){return this.bC()}}
A.hW.prototype={}
A.i1.prototype={}
A.eM.prototype={}
A.eJ.prototype={}
A.hL.prototype={
eu(d){var w,v,u,t,s
x.t.a(d)
for(w=d.length,v=null,u=0;u<d.length;d.length===w||(0,B.ap)(d),++u){t=d[u]
s=this.b
s===$&&B.ac()
v=this.B(t,s)}return v},
B(d,e){var w,v,u,t=this
if(d instanceof A.d3)return d.a
if(d instanceof A.bE)return d.a
if(d instanceof A.bR)return d.a
if(d instanceof A.d2)return null
if(d instanceof A.cn)return t.dP(d,e)
if(d instanceof A.d4)return t.e0(d,e)
if(d instanceof A.bd)return e.a0(d.a)
if(d instanceof A.dj)return t.e3(d,e)
if(d instanceof A.dk)return t.e4(d,e)
if(d instanceof A.aL)return t.dR(d,e)
if(d instanceof A.co)return t.dQ(d,e)
if(d instanceof A.c1)return t.dY(d,e)
if(d instanceof A.cV)return t.dZ(d,e)
if(d instanceof A.bY)return t.dW(d,e)
if(d instanceof A.cI)return t.dX(d,e)
if(d instanceof A.cH)return t.dU(d,e)
if(d instanceof A.d0)return t.e_(d,e)
if(d instanceof A.dm){w=d.b
v=w!=null?t.B(w,e):null
e.a.k(0,d.a,v)
return v}if(d instanceof A.d6)return t.e1(d,e)
if(d instanceof A.cp)return t.cr(d.a,new A.bc(B.B(x.N,x.z),e))
if(d instanceof A.bX)return t.dV(d,e)
if(d instanceof A.dq)return t.e5(d,e)
if(d instanceof A.cG)return t.dT(d,e)
if(d instanceof A.by){w=d.a
u=new A.bh(w,d.b,d.c,e)
e.a.k(0,w,u)
return u}if(d instanceof A.ct)return t.dS(d,e)
if(d instanceof A.da)return t.e2(d,e)
if(d instanceof A.cF)return t.B(d.a,e)
throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1790\u17d2\u1793\u17b6\u17c6\u1784 AST \u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Unsupported AST node type: "+B.bp(d).i(0)))},
cr(d,e){var w,v,u,t,s,r=this
x.t.a(d)
t=r.b
t===$&&B.ac()
w=t
r.b=e
try{v=null
for(t=d.length,s=0;s<d.length;d.length===t||(0,B.ap)(d),++s){u=d[s]
v=r.B(u,e)}t=v
return t}finally{r.b=x.A.a(w)}},
af(d){var w
if(d!=null){w=J.bn(d)
w=w.U(d,!1)||w.U(d,0)||w.U(d,"")}else w=!0
if(w)return!1
return!0},
dP(d,e){var w=d.a,v=B.a7(w),u=v.h("a6<1,@>")
w=B.aG(new B.a6(w,v.h("@(1)").a(new A.hM(this,e)),u),u.h("a3.E"))
return w},
e0(d,e){var w,v,u,t,s=B.B(x.N,x.z)
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.ap)(w),++u){t=w[u]
s.k(0,t.a,this.B(t.b,e))}return s},
e3(d,e){var w,v
try{w=e.a0("\u1793\u17c1\u17c7")
return w}catch(v){try{w=e.a0("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6")
return w}catch(v){w=A.I("\u1796\u17b6\u1780\u17d2\u1799 '\u1793\u17c1\u17c7' \u17ac '\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17b6\u1793\u178f\u17c2\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1793\u17c1\u17c7'/'\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' can only be used inside class methods")
throw B.d(w)}}},
e4(d,e){var w=this.B(d.b,e),v=d.a
if(v==="!"||v==="\u1798\u17b7\u1793")return!this.af(w)
if(v==="-"){if(typeof w=="number")return-w
throw B.d(A.I("\u179f\u1789\u17d2\u1789\u17b6\u178a\u1780 '-' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '-' requires a numeric operand"))}throw B.d(A.I("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a unary \u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+v+"' / Unknown unary operator '"+v+"'"))},
dR(d,e){var w,v,u,t=this,s="' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '",r="' requires numeric operands",q=t.B(d.a,e),p=d.b
if(p==="\u1793\u17b7\u1784"||p==="&&"){if(!t.af(q))return q
return t.B(d.c,e)}if(p==="\u17ac"||p==="||"){if(t.af(q))return q
return t.B(d.c,e)}w=t.B(d.c,e)
if(p==="==")return J.aq(q,w)
if(p==="!=")return!J.aq(q,w)
if(p==="+"){if(typeof q=="string"||typeof w=="string")return A.fI(q)+A.fI(w)
if(typeof q=="number"&&typeof w=="number")return q+w
throw B.d(A.I("\u1780\u17b6\u179a\u1794\u17bc\u1780 '+' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u179b\u17be\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u179f\u179a / '+' requires numbers or strings"))}v=p==="-"
if(v||p==="*"||p==="/"||p==="%"){if(typeof q!="number"||typeof w!="number")throw B.d(A.I("\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a '"+p+s+p+r))
if(v)return q-w
if(p==="*")return q*w
if(p==="/"){if(w===0)throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17c2\u1780\u1793\u17b9\u1784\u179f\u17bc\u1793\u17d2\u1799\u1794\u17b6\u1793\u1791\u17c1 / Division by zero"))
u=q/w
return u===D.f.bI(u)?D.f.aI(u):u}if(p==="%")return D.f.cO(q,w)}v=p==="<"
if(v||p===">"||p==="<="||p===">="){if(typeof q!="number"||typeof w!="number")throw B.d(A.I("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794 '"+p+s+p+r))
if(v)return q<w
if(p===">")return q>w
if(p==="<=")return q<=w
if(p===">=")return q>=w}throw B.d(A.I("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+p+"' / Unknown binary operator '"+p+"'"))},
dQ(d,e){var w,v,u,t=this.B(d.b,e)
try{e.cj(d.a,t)}catch(v){if(B.X(v) instanceof A.eM){try{w=e.a0("\u1793\u17c1\u17c7")
if(w instanceof A.bi){w.b.k(0,d.a,t)
return t}}catch(u){}throw v}else throw v}return t},
dY(d,e){var w=this.B(d.a,e)
if(w instanceof A.bi)return w.a0(d.b)
if(x.f.b(w))return w.p(0,d.b)
throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member access on invalid target"))},
dZ(d,e){var w=this.B(d.a,e),v=this.B(d.c,e)
if(w instanceof A.bi){w.b.k(0,d.b,v)
return v}if(x.f.b(w)){w.k(0,d.b,v)
return v}throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member assignment on invalid target"))},
dW(d,e){var w,v,u=this.B(d.a,e),t=this.B(d.b,e)
if(x.j.b(u)){if(typeof t!="number")throw B.d(A.I(y.m))
w=D.f.aI(t)
if(w<0||w>=J.aB(u)){v=""+w
throw B.d(A.I("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}return J.kS(u,w)}if(typeof u=="string"){if(typeof t!="number")throw B.d(A.I("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / String index must be a number"))
w=D.f.aI(t)
if(w<0||w>=u.length){v=""+w
throw B.d(A.I("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / String index out of bounds ("+v+")"))}if(!(w>=0&&w<u.length))return B.p(u,w)
return u[w]}if(x.f.b(u))return u.p(0,J.K(t))
throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1791\u17b6\u1789\u1799\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable"))},
dX(d,e){var w,v,u=this.B(d.a,e),t=this.B(d.b,e),s=this.B(d.c,e)
if(x.j.b(u)){if(typeof t!="number")throw B.d(A.I(y.m))
w=D.f.aI(t)
if(w<0||w>=J.aB(u)){v=""+w
throw B.d(A.I("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}J.h8(u,w,s)
return s}if(x.f.b(u)){u.k(0,J.K(t),s)
return s}throw B.d(A.I("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable for assignment"))},
dU(d,e){var w=this,v=w.B(d.a,e),u=d.b,t=B.a7(u),s=t.h("a6<1,@>"),r=B.aG(new B.a6(u,t.h("@(1)").a(new A.hN(w,e)),s),s.h("a3.E"))
if(v instanceof A.bg)return v.cw(w,r)
if(v instanceof A.bh)return v.$2(w,r)
if(v instanceof A.aj)return v.b.$1(r)
throw B.d(A.I("\u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u1790\u17d2\u1793\u17b6\u1780\u17cb / Target is not callable"))},
e_(d,e){var w,v,u,t=d.a,s=e.a0(t)
if(!(s instanceof A.bg))throw B.d(A.I("'"+t+"' \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class) \u1791\u17c1 / '"+t+"' is not a class"))
t=d.b
w=B.a7(t)
v=w.h("a6<1,@>")
u=B.aG(new B.a6(t,w.h("@(1)").a(new A.hO(this,e)),v),v.h("a3.E"))
return s.cw(this,u)},
dS(d,e){var w,v,u,t,s,r,q,p,o=d.b
if(o!=null){w=e.a0(o)
if(!(w instanceof A.bg))throw B.d(A.I("\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 '"+o+"' \u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Parent class '"+o+"' is not a class"))
v=w}else v=null
u=B.B(x.N,x.n)
for(o=d.c,t=o.length,s=0;s<o.length;o.length===t||(0,B.ap)(o),++s){r=o[s]
q=r.a
u.k(0,q,new A.bh(q,r.b,r.c,e))}o=d.a
p=new A.bg(o,v,u)
e.a.k(0,o,p)
return p},
e1(d,e){var w=d.a,v=B.a7(w),u=v.h("a6<1,@>"),t=B.aG(new B.a6(w,v.h("@(1)").a(new A.hP(this,e)),u),u.h("a3.E"))
return x.X.a(e.a0("\u1794\u1784\u17d2\u17a0\u17b6\u1789")).b.$1(t)},
dV(d,e){var w,v=this
if(v.af(v.B(d.a,e)))return v.B(d.b,e)
else{w=d.c
if(w!=null)return v.B(w,e)}return null},
e5(d,e){var w,v,u
for(w=d.a,v=d.b,u=null;this.af(this.B(w,e));)u=this.B(v,e)
return u},
dT(d,e){var w,v,u,t,s,r=this,q=new A.bc(B.B(x.N,x.z),e),p=d.a
if(p!=null)r.B(p,q)
for(p=d.c,w=p!=null,v=d.d,u=d.b,t=u!=null,s=null;;){if(t)if(!r.af(r.B(u,q)))break
s=r.B(v,q)
if(w)r.B(p,q)}return s},
e2(d,e){var w=d.a
throw B.d(new A.eJ(w!=null?this.B(w,e):null))}}
A.hV.prototype={
gl(d){var w=this.e
w===$&&B.ac()
return w},
Z(d){var w=this.b+d,v=this.e
v===$&&B.ac()
if(w>=v)return""
v=this.a
if(!(w<v.length))return B.p(v,w)
return v[w]},
P(){return this.Z(0)},
F(){var w=this,v=w.P();++w.b
if(v==="\n"){++w.c
w.d=1}else ++w.d
return v},
aQ(d){var w,v=d.length
if(v===0)return!1
if(0>=v)return B.p(d,0)
w=d.charCodeAt(0)
return w>=48&&w<=57||C.X.R(d)},
c7(d){var w,v=d.length
if(v===0)return!1
if(d==="_")return!0
if(0>=v)return B.p(d,0)
w=d.charCodeAt(0)
if(!(w>=65&&w<=90))v=w>=97&&w<=122
else v=!0
if(v)return!0
if(!(w>=6016&&w<=6143))v=w>=6624&&w<=6655
else v=!0
return v},
cH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=B.a([],x.Q),a1=x.N,a2=x.d,a3=x.s
for(;;){w=d.b
v=d.e
v===$&&B.ac()
if(!(w<v))break
A:{u=d.P()
if(u===" "||u==="\t"||u==="\r"||u==="\n"||u==="\u200b"||u==="\xa0"||u==="\ufeff"){d.F()
break A}if(u!=="#")w=u==="/"&&d.Z(1)==="/"
else w=!0
if(w){for(;;){if(!(d.P().length!==0&&d.P()!=="\n"))break
d.F()}break A}if(u==="/"&&d.Z(1)==="*"){d.F()
d.F()
for(;;){if(d.P().length!==0)w=!(d.P()==="*"&&d.Z(1)==="/")
else w=!1
if(!w)break
d.F()}if(d.P().length!==0){d.F()
d.F()}break A}t=d.c
s=d.d
if(d.aQ(u)){r=""
q=!1
for(;;){if(!d.aQ(d.P()))w=d.P()==="."&&!q&&d.aQ(d.Z(1))
else w=!0
if(!w)break
p=d.F()
if(p===".")q=!0
r+=p}for(w=r.length,o=0,v="";o<w;++o){n=r[o]
m=C.X.p(0,n)
v+=m==null?n:m}l=v.charCodeAt(0)==0?v:v
D.a.j(a0,new A.af(C.a0,q?A.oZ(l):A.pc(l),t,s))
break A}if(u==='"'||u==="'"||u==="\u201c"||u==="\u201d"||u==="\u2018"||u==="\u2019"){k=d.F()
j=k==="\u201c"||k==="\u201d"||k==="\u2018"||k==="\u2019"?C.b6:B.a([k],a3)
i=""
for(;;){if(!(d.P().length!==0&&!D.a.K(j,d.P())))break
p=d.F()
if(p==="\\"){h=d.F()
if(h==="n")i+="\n"
else if(h==="t")i+="\t"
else if(h==="\\")i+="\\"
else{D.a.K(j,h)
i+=h}}else i+=p}if(d.P().length===0)throw B.d(A.l8("String \u1798\u17b7\u1793\u1794\u17b6\u1793\u1794\u17b7\u1791 / Unclosed string literal",t,s))
d.F()
D.a.j(a0,new A.af(C.a1,i,t,s))
break A}if(u==="="&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new A.af(C.ad,"==",t,s))
break A}if(u==="!"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new A.af(C.ae,"!=",t,s))
break A}if(u==="<"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new A.af(C.ah,"<=",t,s))
break A}if(u===">"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new A.af(C.ai,">=",t,s))
break A}if(u==="&"&&d.Z(1)==="&"){d.F()
d.F()
D.a.j(a0,new A.af(C.B,"&&",t,s))
break A}if(u==="|"&&d.Z(1)==="|"){d.F()
d.F()
D.a.j(a0,new A.af(C.C,"||",t,s))
break A}g=B.o(["+",C.a9,"-",C.F,"*",C.aa,"/",C.ab,"%",C.ac,"=",C.G,"<",C.af,">",C.ag,"!",C.D,".",C.H,"\uff0e",C.H,"(",C.i,")",C.c,"{",C.q,"}",C.m,"[",C.J,"]",C.r,",",C.l,";",C.j,"\u17d6",C.x,":",C.x,"\u17d4",C.j],a1,a2)
if(g.R(u)){d.F()
w=g.p(0,u)
w.toString
D.a.j(a0,new A.af(w,u,t,s))
break A}if(d.c7(u)){f=""
for(;;){if(d.P().length!==0){w=d.P()
w=d.c7(w)||d.aQ(w)}else w=!1
if(!w)break
f+=d.F()}if(C.Y.R(f)){w=C.Y.p(0,f)
w.toString
D.a.j(a0,new A.af(w,f,t,s))}else D.a.j(a0,new A.af(C.h,f,t,s))
break A}e=d.F()
if(0>=e.length)return B.p(e,0)
throw B.d(A.l8("\u17a2\u1780\u17d2\u179f\u179a/\u179f\u1789\u17d2\u1789\u17b6\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+e+"' (U+"+D.b.cF(D.e.eQ(e.charCodeAt(0),16).toUpperCase(),4,"0")+") / Unexpected character '"+e+"'",t,s))}}D.a.j(a0,new A.af(C.n,null,d.c,d.d))
return a0}}
A.eD.prototype={
m(){var w=this.b,v=this.a
if(w>=v.length)return D.a.gcD(v)
return v[w]},
v(d){if(D.a.K(x.b.a(d),this.m().a)){this.a5()
return!0}return!1},
a5(){var w,v=this.a,u=this.b,t=v.length
if(!(u<t))return B.p(v,u)
w=v[u]
if(u<t-1)this.b=u+1
return w},
t(d,e){var w,v
if(this.m().a===d)return this.a5()
w=this.m()
v=w.c
throw B.d(A.eE(e+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+B.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
cG(){var w,v=B.a([],x.I)
while(this.m().a!==C.n){w=this.cd()
if(w!=null)D.a.j(v,w)}return v},
cd(){var w,v,u,t,s,r,q,p,o=this,n=null,m="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'"
for(w=x.B;o.v(B.a([C.j],w)););if(o.m().a===C.n)return n
if(o.m().a===C.w)return o.ci()
if(o.m().a===C.I)return o.dt()
if(o.m().a===C.K){o.t(C.K,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u17be' / Expected '\u1794\u17be'")
v=o.v(B.a([C.i],w))
u=o.G()
if(v)o.t(C.c,m)
t=o.a6()
if(o.m().a===C.y)s=o.c1()
else s=o.v(B.a([C.L],w))?o.a6():n
return new A.bX(u,t,s)}if(o.m().a===C.M){o.t(C.M,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1781\u178e\u17c8' / Expected '\u1781\u178e\u17c8'")
v=o.v(B.a([C.i],w))
u=o.G()
if(v)o.t(C.c,m)
return new A.dq(u,o.a6())}if(o.m().a===C.N){o.t(C.N,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb' / Expected '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb'")
o.t(C.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected '(' in for loop")
if(o.m().a!==C.j)r=o.m().a===C.w?o.ci():o.c3()
else{o.a5()
r=n}u=o.m().a!==C.j?o.G():n
o.t(C.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ';' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ';'")
q=o.m().a!==C.c?o.G():n
o.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ')'")
return new A.cG(r,u,q,o.a6())}if(o.m().a===C.u||o.m().a===C.v)return o.dg()
if(o.m().a===C.E)return o.d6()
if(o.m().a===C.A){o.t(C.A,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17d2\u179a\u17a1\u1794\u17cb' / Expected '\u178f\u17d2\u179a\u17a1\u1794\u17cb'")
p=o.m().a!==C.j&&o.m().a!==C.m&&o.m().a!==C.n?o.G():n
o.v(B.a([C.j],w))
return new A.da(p)}if(o.m().a===C.q)return o.a6()
return o.c3()},
ci(){var w,v,u,t=this
t.t(C.w,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17b6\u17c6\u1784' / Expected '\u178f\u17b6\u17c6\u1784'")
w=t.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1790\u17c1\u179a / Expected variable name")
v=x.B
u=t.v(B.a([C.G],v))?t.G():null
t.v(B.a([C.j],v))
return new A.dm(J.K(w.b),u)},
dt(){var w,v,u=this
u.t(C.I,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u1784\u17d2\u17a0\u17b6\u1789' / Expected '\u1794\u1784\u17d2\u17a0\u17b6\u1789'")
w=B.a([],x.I)
v=x.B
if(u.v(B.a([C.i],v))){if(u.m().a!==C.c){D.a.j(w,u.G())
while(u.v(B.a([C.l],v)))D.a.j(w,u.G())}u.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791 / Expected ')'")}else{D.a.j(w,u.G())
while(u.v(B.a([C.l],v)))D.a.j(w,u.G())}u.v(B.a([C.j],v))
return new A.d6(w)},
c1(){var w,v,u,t,s,r=this
r.t(C.y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17ac\u1794\u17be' / Expected '\u17ac\u1794\u17be'")
w=x.B
v=r.v(B.a([C.i],w))
u=r.G()
if(v)r.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'")
t=r.a6()
if(r.m().a===C.y)s=r.c1()
else s=r.v(B.a([C.L],w))?r.a6():null
return new A.bX(u,t,s)},
dg(){var w,v,u,t,s=this,r=y.c,q=x.B
if(!(s.v(B.a([C.u],q))||s.v(B.a([C.v],q)))){w=s.m()
throw B.d(A.eE("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' \u17ac '\u179c\u17b7\u1792\u17b8' / Expected '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' or '\u179c\u17b7\u1792\u17b8'",w.c,w.d))}v=s.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected function name")
s.t(C.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=B.a([],x.s)
if(s.m().a!==C.c){D.a.j(u,J.K(s.t(C.h,r).b))
while(s.v(B.a([C.l],q)))D.a.j(u,J.K(s.t(C.h,r).b))}s.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
t=s.a6()
return new A.by(J.K(v.b),u,t)},
d6(){var w,v,u,t,s,r,q,p,o,n=this,m=y.c
n.t(C.E,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1790\u17d2\u1793\u17b6\u1780\u17cb' / Expected '\u1790\u17d2\u1793\u17b6\u1780\u17cb'")
w=n.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected class name")
v=x.B
u=n.v(B.a([C.a8],v))?J.K(n.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 / Expected parent class name").b):null
n.t(C.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' \u178a\u17be\u1798\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '{' for class body")
t=B.a([],x._)
s=x.s
for(;;){if(!(n.m().a!==C.m&&n.m().a!==C.n))break
if(n.v(B.a([C.v,C.u],v)))r=n.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179c\u17b7\u1792\u17b8 / Expected method name")
else if(n.m().a===C.h)r=n.a5()
else{q=n.m()
throw B.d(A.eE("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+B.j(q.b)+"' / Invalid method definition in class",q.c,q.d))}n.t(C.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
p=B.a([],s)
if(n.m().a!==C.c){D.a.j(p,J.K(n.t(C.h,m).b))
while(n.v(B.a([C.l],v)))D.a.j(p,J.K(n.t(C.h,m).b))}n.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
o=n.a6()
D.a.j(t,new A.by(J.K(r.b),p,o))}n.t(C.m,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '}' for class body")
return new A.ct(J.K(w.b),u,t)},
a6(){var w,v,u=this
u.t(C.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' / Expected '{'")
w=B.a([],x.I)
for(;;){if(!(u.m().a!==C.m&&u.m().a!==C.n))break
v=u.cd()
if(v!=null)D.a.j(w,v)}u.t(C.m,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1794\u17d2\u179b\u17bb\u1780 / Expected '}'")
return new A.cp(w)},
c3(){var w=this.G()
this.v(B.a([C.j],x.B))
return new A.cF(w)},
G(){var w,v,u=this,t=u.dm()
if(u.v(B.a([C.G],x.B))){w=u.G()
if(t instanceof A.bd)return new A.co(t.a,w)
else if(t instanceof A.c1)return new A.cV(t.a,t.b,w)
else if(t instanceof A.bY)return new A.cI(t.a,t.b,w)
v=u.m()
throw B.d(A.eE("\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Invalid assignment target",v.c,v.d))}return t},
dm(){var w,v=this.c9()
for(w=x.B;this.v(B.a([C.C],w));)v=new A.aL(v,"\u17ac",this.c9())
return v},
c9(){var w,v=this.c2()
for(w=x.B;this.v(B.a([C.B],w));)v=new A.aL(v,"\u1793\u17b7\u1784",this.c2())
return v},
c2(){var w=this,v=w.c_()
for(;;){if(!(w.m().a===C.ad||w.m().a===C.ae))break
v=new A.aL(v,J.K(w.a5().b),w.c_())}return v},
c_(){var w=this,v=w.ce()
for(;;){if(!(w.m().a===C.af||w.m().a===C.ag||w.m().a===C.ah||w.m().a===C.ai))break
v=new A.aL(v,J.K(w.a5().b),w.ce())}return v},
ce(){var w=this,v=w.c4()
for(;;){if(!(w.m().a===C.a9||w.m().a===C.F))break
v=new A.aL(v,J.K(w.a5().b),w.c4())}return v},
c4(){var w=this,v=w.br()
for(;;){if(!(w.m().a===C.aa||w.m().a===C.ab||w.m().a===C.ac))break
v=new A.aL(v,J.K(w.a5().b),w.br())}return v},
br(){var w,v,u=this
if(u.m().a===C.D||u.m().a===C.F){w=u.a5()
v=u.br()
return new A.dk(J.K(w.b),v)}return u.d4()},
d4(){var w,v,u,t,s=this,r=s.bp()
for(w=x.B,v=x.I;;)if(s.v(B.a([C.i],w))){u=B.a([],v)
if(s.m().a!==C.c){D.a.j(u,s.G())
while(s.v(B.a([C.l],w)))D.a.j(u,s.G())}s.t(C.c,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
r=new A.cH(r,u)}else if(s.v(B.a([C.H],w)))r=new A.c1(r,J.K(s.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17b6\u1787\u17b7\u1780 / Expected member name after '.'").b))
else if(s.v(B.a([C.J],w))){t=s.G()
s.t(C.r,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
r=new A.bY(r,t)}else break
return r},
bp(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",j="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ':' / Expected ':'",i=x.B
if(l.v(B.a([C.a0],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return B.p(i,w)
return new A.d3(B.ks(i[w].b))}if(l.v(B.a([C.a1],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return B.p(i,w)
return new A.bE(J.K(i[w].b))}if(l.v(B.a([C.a2],i)))return C.ao
if(l.v(B.a([C.a3],i)))return C.an
if(l.v(B.a([C.a4],i)))return C.aw
if(l.v(B.a([C.a5,C.a6],i)))return C.ay
if(l.v(B.a([C.h],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return B.p(i,w)
return new A.bd(J.K(i[w].b))}if(l.v(B.a([C.a7],i))){v=l.t(C.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 '\u1790\u17d2\u1798\u17b8' / Expected class name after '\u1790\u17d2\u1798\u17b8'")
l.t(C.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=B.a([],x.I)
if(l.m().a!==C.c){D.a.j(u,l.G())
while(l.v(B.a([C.l],i)))D.a.j(u,l.G())}l.t(C.c,k)
return new A.d0(J.K(v.b),u)}if(l.v(B.a([C.i],i))){t=l.G()
l.t(C.c,k)
return t}if(l.v(B.a([C.J],i))){s=B.a([],x.I)
if(l.m().a!==C.r){D.a.j(s,l.G())
while(l.v(B.a([C.l],i)))D.a.j(s,l.G())}l.t(C.r,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
return new A.cn(s)}if(l.v(B.a([C.q],i))){r=B.a([],x.l)
if(l.m().a!==C.r&&l.m().a!==C.m){q=l.bp()
if(q instanceof A.bE)p=q.a
else p=q instanceof A.bd?q.a:q.i(0)
l.t(C.x,j)
w=x.J
D.a.j(r,new B.L(p,l.G(),w))
while(l.v(B.a([C.l],i))){o=l.bp()
if(o instanceof A.bE)n=o.a
else n=o instanceof A.bd?o.a:o.i(0)
l.t(C.x,j)
D.a.j(r,new B.L(n,l.G(),w))}}l.t(C.m,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' / Expected '}'")
return new A.d4(r)}m=l.m()
throw B.d(A.eE("\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 / Syntax error near '"+B.j(m.b)+"'",m.c,m.d))}}
A.cE.prototype={}
A.cr.prototype={}
A.q.prototype={
a7(){return"TokenType."+this.b}}
A.af.prototype={
i(d){var w=this
return"Token("+w.a.i(0)+", "+B.j(w.b)+", "+w.c+":"+w.d+")"}}
var z=a.updateTypes(["@(z)","~()","~(h)","aR(S)","f()","Q<h,~(y)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<x?>"])
A.i3.prototype={
$0(){return D.f.eo(1000*this.a.now())},
$S:35}
A.hi.prototype={
$0(){var w=this.a
w.I(new A.hh(w))},
$S:0}
A.hh.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
A.hc.prototype={
$0(){var w=this.a,v=!w.r
w.r=v
A.mc(v?"dark":"light")},
$S:0}
A.hb.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
A.ha.prototype={
$0(){var w=this.a
w.f=this.b
w.d=!1},
$S:0}
A.hf.prototype={
$0(){var w=this.a
w.I(new A.he(w))},
$S:0}
A.he.prototype={
$0(){this.a.e=!0},
$S:0}
A.hg.prototype={
$0(){var w=this.a
w.I(new A.hd(w))},
$S:0}
A.hd.prototype={
$0(){this.a.e=!1},
$S:0}
A.ir.prototype={
$0(){this.a.d=!0},
$S:0}
A.is.prototype={
$0(){var w=this.a
if(w.c!=null)w.I(new A.iq(w))},
$S:0}
A.iq.prototype={
$0(){this.a.d=!1},
$S:0}
A.it.prototype={
$0(){this.a.e=!0},
$S:0}
A.iu.prototype={
$0(){var w,v,u=this.a
u.e=!1
u.f=!0
w=this.b
u.w=D.e.ag(w.w.a,1000)
v=w.a==="success"
u.x=!v
if(v){w=w.b
u.r=w.length===0?"(\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":w}else{w=w.d
u.r=w==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Unknown Execution Error)":w}},
$S:0}
A.iv.prototype={
$0(){var w=this.a
w.e=!1
w.x=w.f=!0
w.r="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+B.j(this.b)
w.w=0},
$S:0}
A.iw.prototype={
$1(d){B.n(d)
return this.a.di()},
$S:1}
A.ix.prototype={
$1(d){B.n(d)
return this.a.dj()},
$S:1}
A.hH.prototype={
$1(d){B.n(d)
return this.a.c.$0()},
$S:1}
A.hI.prototype={
$1(d){B.n(d)
return this.a.d.$0()},
$S:1}
A.hJ.prototype={
$1(d){B.n(d)
return this.a.e.$0()},
$S:1}
A.iS.prototype={
$0(){var w=this.a,v=this.b
w.d=v
v=C.b8.p(0,v)
w.e=v==null?"":v
w.f='\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1795\u17d2\u1791\u17bb\u1780\u17d4 \u1785\u17bb\u1785 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4'
w.w=!1
w.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"},
$S:0}
A.iR.prototype={
$0(){var w=this.a
w.e=w.e+this.b},
$S:0}
A.iT.prototype={
$0(){this.a.r="\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a..."},
$S:0}
A.iU.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r=""+D.e.ag(v.w.a,1000)+"ms"
if(u){v=v.b
w.f=v.length===0?"(\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":v}else{v=v.d
w.f=v==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Execution Error)":v}},
$S:0}
A.iV.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+B.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
A.iO.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r="Syntax Check"
if(u)w.f="\u2713 \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u179b\u17d2\u17a2! (Parsed "+v.b+" tokens cleanly)"
else{v=v.d
w.f="\u2717 \u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u17d6 "+(v==null?"Invalid syntax":v)}},
$S:0}
A.iP.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+B.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
A.iQ.prototype={
$0(){var w=this.a
w.f=""
w.r="\u1794\u17b6\u1793\u179f\u1798\u17d2\u17a2\u17b6\u178f"
w.w=!1},
$S:0}
A.iX.prototype={
$1(d){var w=d.gaa()
return this.a.dq(B.j(w==null?null:w.gX()))},
$S:3}
A.iY.prototype={
$1(d){B.n(d)
return this.a.d5()},
$S:1}
A.iZ.prototype={
$1(d){B.n(d)
return this.a.d7()},
$S:1}
A.j_.prototype={
$1(d){B.n(d)
return this.a.dA()},
$S:1}
A.j0.prototype={
$1(d){var w=d.gaa()
w=w==null?null:w.gX()
this.a.e=B.j(w==null?"":w)},
$S:3}
A.iW.prototype={
$1(d){B.n(d)
return this.a.dl(this.b)},
$S:1}
A.j3.prototype={
$1(d){var w
x.R.a(d)
w=this.a
return D.b.K(d.b.toLowerCase(),w)||D.b.K(d.c.toLowerCase(),w)||D.b.K(d.d.toLowerCase(),w)||D.b.K(d.e.toLowerCase(),w)},
$S:z+3}
A.j5.prototype={
$1(d){if(J.aq(d.gaa(),d.geX()))this.a.a.b0()},
$S:3}
A.j6.prototype={
$1(d){var w=this.a
w.I(new A.j4(w,d))},
$S:3}
A.j4.prototype={
$0(){var w=this.b.gaa()
w=w==null?null:w.gX()
this.a.d=B.j(w==null?"":w)},
$S:0}
A.j7.prototype={
$1(d){if(J.aq(d.gcC(),"Escape"))this.a.a.b0()},
$S:3}
A.j8.prototype={
$1(d){B.n(d)
return this.a.a.b0()},
$S:1}
A.j9.prototype={
$1(d){var w
B.n(d)
w=this.a
w.a.eB(this.b.a)
w.a.b0()},
$S:1}
A.i7.prototype={
$1(d){B.n(d)
return this.a.e.$1(this.b.a)},
$S:1}
A.ic.prototype={
$1(d){B.n(d)
return this.a.d.$1(this.b.a)},
$S:1}
A.k0.prototype={
$1(d){B.n(d)
if((B.bm(d.metaKey)||B.bm(d.ctrlKey))&&B.a_(d.key)==="k"){d.preventDefault()
this.a.$0()}},
$S:36}
A.jL.prototype={
$1(d){return A.fI(d)},
$S:10}
A.jM.prototype={
$1(d){x.Y.a(d)
return'"'+B.j(d.a)+'": '+A.fI(d.b)},
$S:38}
A.jF.prototype={
$1(d){this.a.$1(J.kV(x.j.a(d),new A.jG(),x.N).W(0," ")+"\n")
return null},
$S:5}
A.jG.prototype={
$1(d){return A.fI(d)},
$S:10}
A.jE.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aS(d)
if(w.gM(d))throw B.d(A.I("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=w.p(d,0)
if(typeof v=="string")return v.length
if(u.b(v))return J.aB(v)
if(x.f.b(v))return v.gl(v)
throw B.d(A.I("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u17a2\u1780\u17d2\u179f\u179a \u1794\u1789\u17d2\u1787\u17b8 \u17ac\u179c\u178f\u17d2\u1790\u17bb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires string, array, or object"))},
$S:5}
A.jH.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aS(d)
if(w.gM(d))return"\u1791\u1791\u17c1"
v=w.p(d,0)
if(v==null)return"\u1791\u1791\u17c1"
if(B.fA(v))return"\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6"
if(typeof v=="number")return"\u179b\u17c1\u1781"
if(typeof v=="string")return"\u17a2\u1780\u17d2\u179f\u179a"
if(u.b(v))return"\u1794\u1789\u17d2\u1787\u17b8"
if(x.f.b(v))return"\u179c\u178f\u17d2\u1790\u17bb"
if(v instanceof A.bi)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a.a+")"
if(v instanceof A.bg)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a+")"
return"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"},
$S:5}
A.jD.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.aS(d)
if(w.gl(d)<2)throw B.d(A.I("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.p(d,0)
u=w.p(d,1)
if(t.b(v)){J.cl(v,u)
return v}throw B.d(A.I("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 (Array) \u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u1793\u17d2\u1790\u17c2\u1798' requires array"))},
$S:5}
A.hM.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
A.hN.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
A.hO.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
A.hP.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
A.k_.prototype={
$1(d){this.a.a+=d},
$S:7};(function aliases(){var w=A.ae.prototype
w.bR=w.aZ})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a.installStaticTearOff
w(A,"oy","ni",4)
var s
v(s=A.cm.prototype,"gdI","dJ",1)
v(s,"gdG","dH",1)
u(s,"gdr","ds",2)
t(A,"fG",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["fF",function(){return A.fF(null,null,null,x.z)},function(d){return A.fF(null,null,null,d)},function(d,e){return A.fF(null,d,null,e)},function(d,e,f){return A.fF(d,null,e,f)}],5,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.cA,B.aO)
w(A.bU,A.cA)
v(B.cx,[A.i3,A.hi,A.hh,A.hc,A.hb,A.ha,A.hf,A.he,A.hg,A.hd,A.ir,A.is,A.iq,A.it,A.iu,A.iv,A.iS,A.iR,A.iT,A.iU,A.iV,A.iO,A.iP,A.iQ,A.j4])
v(B.x,[A.i9,A.fy,A.dI,A.ie,A.fw,A.ae,A.Z,A.a0,A.S,A.z,A.bc,A.aj,A.bh,A.bg,A.bi,A.cP,A.eJ,A.hL,A.hV,A.eD,A.cE,A.cr,A.af])
v(B.k,[A.v,A.aM,A.aP])
v(A.v,[A.fB,A.fH,A.fM,A.fJ,A.fK,A.fL,A.fO,A.fP,A.fW,A.t,A.h7,A.bP,A.fS,A.fV,A.fC,A.dY,A.fN,A.fQ,A.fX,A.h2,A.fZ,A.fD,A.fT,A.fU,A.h_,A.h4,A.h0,A.h3,A.h6,A.h1,A.cg,A.fE,A.aT,A.fY,A.ei,A.el,A.eO,A.eW,A.e2,A.ec,A.ej,A.ek,A.eI])
v(B.fd,[A.hK,A.ef,A.hl,A.h9,A.id,A.hB,A.q])
w(A.fl,B.bL)
w(A.ff,B.bC)
v(B.bT,[A.eQ,A.eR])
v(A.aP,[A.aV,A.U,A.c4,A.c6])
v(A.ae,[A.cm,A.f6,A.fm,A.fq])
v(B.aW,[A.iw,A.ix,A.hH,A.hI,A.hJ,A.iX,A.iY,A.iZ,A.j_,A.j0,A.iW,A.j3,A.j5,A.j6,A.j7,A.j8,A.j9,A.i7,A.ic,A.k0,A.jL,A.jM,A.jF,A.jG,A.jE,A.jH,A.jD,A.hM,A.hN,A.hO,A.hP,A.k_])
v(A.z,[A.d3,A.bE,A.bR,A.d2,A.cn,A.d4,A.bd,A.dj,A.dk,A.aL,A.co,A.c1,A.cV,A.bY,A.cI,A.cH,A.d0,A.dm,A.d6,A.cp,A.bX,A.dq,A.cG,A.by,A.ct,A.da,A.cF])
v(A.cP,[A.hW,A.i1,A.eM])})()
B.lH(b.typeUniverse,JSON.parse('{"cA":{"aO":["1"],"c7":["1"],"r":["1"],"i":["1"]},"bU":{"cA":["1"],"aO":["1"],"c7":["1"],"r":["1"],"i":["1"]},"fB":{"v":[],"k":[]},"fH":{"v":[],"k":[]},"fM":{"v":[],"k":[]},"fJ":{"v":[],"k":[]},"fK":{"v":[],"k":[]},"fL":{"v":[],"k":[]},"fO":{"v":[],"k":[]},"fP":{"v":[],"k":[]},"fW":{"v":[],"k":[]},"t":{"v":[],"k":[]},"h7":{"v":[],"k":[]},"bP":{"v":[],"k":[]},"fS":{"v":[],"k":[]},"fV":{"v":[],"k":[]},"fC":{"v":[],"k":[]},"dY":{"v":[],"k":[]},"fN":{"v":[],"k":[]},"fQ":{"v":[],"k":[]},"fX":{"v":[],"k":[]},"h2":{"v":[],"k":[]},"fZ":{"v":[],"k":[]},"fD":{"v":[],"k":[]},"fT":{"v":[],"k":[]},"fU":{"v":[],"k":[]},"h_":{"v":[],"k":[]},"h4":{"v":[],"k":[]},"h0":{"v":[],"k":[]},"h3":{"v":[],"k":[]},"h6":{"v":[],"k":[]},"h1":{"v":[],"k":[]},"cg":{"v":[],"k":[]},"fE":{"v":[],"k":[]},"aT":{"v":[],"k":[]},"fY":{"v":[],"k":[]},"fy":{"mG":[]},"dI":{"kh":[]},"fw":{"nu":[]},"fl":{"ii":[]},"aP":{"k":[]},"aM":{"k":[]},"ff":{"at":[],"l":[],"a9":[]},"eQ":{"l":[],"a9":[]},"v":{"k":[]},"eR":{"l":[],"a9":[]},"aV":{"aP":[],"k":[]},"cm":{"ae":["aV"],"ae.T":"aV"},"U":{"aP":[],"k":[]},"f6":{"ae":["U"],"ae.T":"U"},"ei":{"v":[],"k":[]},"el":{"v":[],"k":[]},"c4":{"aP":[],"k":[]},"fm":{"ae":["c4"],"ae.T":"c4"},"c6":{"aP":[],"k":[]},"fq":{"ae":["c6"],"ae.T":"c6"},"eO":{"v":[],"k":[]},"eW":{"v":[],"k":[]},"e2":{"v":[],"k":[]},"ec":{"v":[],"k":[]},"ej":{"v":[],"k":[]},"ek":{"v":[],"k":[]},"eI":{"v":[],"k":[]},"by":{"z":[]},"d3":{"z":[]},"bE":{"z":[]},"bR":{"z":[]},"d2":{"z":[]},"cn":{"z":[]},"d4":{"z":[]},"bd":{"z":[]},"dj":{"z":[]},"dk":{"z":[]},"aL":{"z":[]},"co":{"z":[]},"c1":{"z":[]},"cV":{"z":[]},"bY":{"z":[]},"cI":{"z":[]},"cH":{"z":[]},"d0":{"z":[]},"dm":{"z":[]},"d6":{"z":[]},"cp":{"z":[]},"bX":{"z":[]},"dq":{"z":[]},"cG":{"z":[]},"ct":{"z":[]},"da":{"z":[]},"cF":{"z":[]}}'))
var y={h:'# \u17e1. \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb KhmerLang v1.0")',b:"https://github.com/sengson-great/KhmerLang",c:"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a / Expected parameter name",m:"\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1794\u1789\u17d2\u1787\u17b8\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / Array index must be a number"}
var x=(function rtii(){var w=B.b7
return{F:w("z"),X:w("aj"),w:w("ar<h,h>"),O:w("bU<h>"),h:w("l"),A:w("bc"),c:w("aM"),I:w("A<z>"),i:w("A<k>"),_:w("A<by>"),l:w("A<L<h,z>>"),s:w("A<h>"),Q:w("A<af>"),B:w("A<q>"),V:w("A<Z>"),n:w("bh"),t:w("u<z>"),a:w("u<h>"),b:w("u<q>"),P:w("u<Z>"),j:w("u<@>"),J:w("L<h,z>"),Y:w("L<@,@>"),f:w("Q<@,@>"),T:w("kf"),R:w("S"),D:w("aP"),q:w("v"),N:w("h"),d:w("q"),o:w("dn<S>"),W:w("aR(S)"),z:w("@"),Z:w("dY<@>"),H:w("~"),M:w("~()"),v:w("~(y)")}})();(function constants(){var w=a.makeConstList
C.al=new A.h9(2,"center")
C.am=new A.e2(null)
C.an=new A.bR(!1)
C.ao=new A.bR(!0)
C.ap=new A.hl(4,"solid")
C.aw=new A.d2()
C.cj=new A.ie()
C.ay=new A.dj()
C.U=new A.fw()
C.aB=new A.U("while_loop.khmer","KHMER",'# \u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799\u1796\u17b8 \u17e5 \u178a\u179b\u17cb \u17e1\n\u178f\u17b6\u17c6\u1784 \u1785\u17c6\u1793\u17bd\u1793 = \u17e5\n\n\u1781\u178e\u17c8 (\u1785\u17c6\u1793\u17bd\u1793 > \u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799:", \u1785\u17c6\u1793\u17bd\u1793)\n    \u1785\u17c6\u1793\u17bd\u1793 = \u1785\u17c6\u1793\u17bd\u1793 - \u17e1\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\ud83d\ude80 \u1794\u17b6\u1789\u17cb\u1794\u1784\u17d2\u17a0\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799!")',null,null)
C.aC=new A.U("for_loop.khmer","KHMER",'# \u1798\u17c1\u1782\u17bb\u178e \u17e5\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u178f\u17b6\u179a\u17b6\u1784\u1798\u17c1\u1782\u17bb\u178e \u17e5 ---")\n\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e1; i <= \u17e5; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17e5 x", i, "=", \u17e5 * i)\n}',null,null)
C.aD=new A.U("variables.khmer","KHMER",'# \u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7\n\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"\n\u178f\u17b6\u17c6\u1784 \u17a2\u17b6\u1799\u17bb = \u17e2\u17e1\n\u178f\u17b6\u17c6\u1784 \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f = \u1796\u17b7\u178f\n\u178f\u17b6\u17c6\u1784 \u1780\u17b6\u179a\u1784\u17b6\u179a = \u1791\u1791\u17c1\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1788\u17d2\u1798\u17c4\u17c7:", \u1788\u17d2\u1798\u17c4\u17c7)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17a2\u17b6\u1799\u17bb:", \u17a2\u17b6\u1799\u17bb)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17d2\u1790\u17b6\u1793\u1797\u17b6\u1796\u1787\u17b6\u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f:", \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u179a\u1784\u17b6\u179a\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793:", \u1780\u17b6\u179a\u1784\u17b6\u179a)',null,null)
C.aE=new A.U("macOS / Linux (Terminal)","BASH","# \u178a\u17c6\u17a1\u17be\u1784\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u179b\u17be macOS \u1793\u17b7\u1784 Linux (\u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784 PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash",!1,null)
C.aF=new A.U("inheritance.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n# \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8 \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()',null,null)
C.aG=new A.U("hello_world.khmer","KHMER",'# \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb KhmerLang v1.0")',null,null)
C.aH=new A.U("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6 (my_app.khmer)","KHMER",'\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb"\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb\u1796\u17b7\u1797\u1796\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u1788\u17d2\u1798\u17c4\u17c7)',null,null)
C.aI=new A.U("conditions.khmer","KHMER",'\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e2\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}',null,null)
C.aJ=new A.U("Interactive Console","BASH","$ khmer\n\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) v1.0.0 REPL\n\u179c\u17b6\u1799 '\u1785\u17b6\u1780\u1785\u17c1\u1789' \u17ac\u1785\u17bb\u1785 Ctrl+D \u178a\u17be\u1798\u17d2\u1794\u17b8\u1785\u17b6\u1780\u1785\u17c1\u1789\u17d4\n\n>>> \u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\"\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794:\", \u1796\u17b7\u1793\u17d2\u1791\u17bb);\n\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794: \u17e9\u17e5\n>>> \u178f\u17b6\u17c6\u1784 \u1791\u17d2\u179c\u17c1\u178a\u1784 = \u1796\u17b7\u1793\u17d2\u1791\u17bb * \u17e2;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1791\u17d2\u179c\u17c1\u178a\u1784);\n\u17e1\u17e9\u17e0",!1,null)
C.aK=new A.U("person_class.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1798\u1793\u17bb\u179f\u17d2\u179f {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7, \u17a2\u17b6\u1799\u17bb) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n        \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb = \u17a2\u17b6\u1799\u17bb\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1787\u1798\u17d2\u179a\u17b6\u1794\u179f\u17bd\u179a! \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7", \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u17a2\u17b6\u1799\u17bb", \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb, "\u1786\u17d2\u1793\u17b6\u17c6")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1 = \u1790\u17d2\u1798\u17b8 \u1798\u1793\u17bb\u179f\u17d2\u179f("\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784", \u17e2\u17e1)\n\u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1.\u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793()',null,null)
C.aL=new A.U("Dart Toolchain / Native Compilation","DART","# Compile \u1791\u17c5\u1787\u17b6 Native AOT Binary \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# \u17ac\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart run bin/khmer.dart main.khmer",!1,null)
C.aM=new A.U("functions.khmer","KHMER",'# \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17bb\u1780\u17c4\u178e\u1780\u17c2\u1784\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u1794\u178e\u17d2\u178f\u17c4\u1799, \u1791\u1791\u17b9\u1784) {\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1794\u178e\u17d2\u178f\u17c4\u1799 * \u1791\u1791\u17b9\u1784\n}\n\n\u178f\u17b6\u17c6\u1784 \u1795\u17d2\u1791\u17c3 = \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u17e1\u17e0, \u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u179f\u179a\u17bb\u1794\u1782\u17ba:", \u1795\u17d2\u1791\u17c3, "\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1780\u17b6\u179a\u17c9\u17c1")',null,null)
C.aN=new A.U("fibonacci.khmer","KHMER",'# \u1780\u17bc\u178a\u179a\u1780\u179b\u17c1\u1781 Fibonacci \u178f\u17b6\u1798\u1794\u17c2\u1794 Recursive\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}',null,null)
C.aO=new A.U("khmer_math.khmer","KHMER",'# \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1798\u17bd\u1799\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)',null,null)
C.aP=new A.U("Windows (PowerShell)","POWERSHELL","# \u178a\u17c6\u17a1\u17be\u1784\u179b\u17be Windows \u178f\u17b6\u1798\u179a\u1799\u17c8 PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex",!1,null)
C.aQ=new A.U("Run Your Script","BASH","khmer my_app.khmer",!1,null)
C.aR=new A.U("Editor Integration Commands","BASH","# \u178a\u17c6\u17a1\u17be\u1784 Syntax Highlighting \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code / Cursor \u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\nkhmer editor vscode\n\n# \u17ac\u1794\u1784\u17d2\u1780\u17be\u178f Config \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Vim / Neovim, Sublime Text, \u17ac GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# \u1798\u17bb\u1781\u1784\u17b6\u179a Live-Reload: \u178f\u17b6\u1798\u178a\u17b6\u1793 \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u1796\u17c1\u179b\u17a2\u17d2\u1793\u1780\u1785\u17bb\u1785 Save \u1780\u17d2\u1793\u17bb\u1784 Editor \u178e\u17b6\u1798\u17bd\u1799\nkhmer watch my_app.khmer\n\n# \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Linter)\nkhmer check my_app.khmer",!1,null)
C.aS=new A.U("punctuations.khmer","KHMER",'# \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u1781\u178e\u17d2\u178c\u1781\u17d2\u1798\u17c2\u179a (\u17d4)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5\u17d4\n\u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f = "A"\u17d4\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b7\u1793\u17d2\u1791\u17bb:", \u1796\u17b7\u1793\u17d2\u1791\u17bb)\u17d4\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f:", \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f)\u17d4',null,null)
C.aT=new A.ec(null)
C.aU=new A.ef("flex",4,"flex")
C.aV=new A.ef("none",0,"none")
C.aX=new B.aX(2e6)
C.V=new A.hB(1,"bold")
C.aY=new A.ei(null)
C.aZ=new A.ej(null)
C.b_=new A.ek(null)
C.b0=new A.hK("text",0,"text")
C.bw=new A.S("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)","Introduction & Vision","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","intro overview vision cambodia \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784")
C.bA=new A.S("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)","Installation & Toolchain","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check")
C.bD=new A.S("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)","First Program","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","hello world \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 \u1794\u1784\u17d2\u17a0\u17b6\u1789 print first program")
C.bC=new A.S("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)","Variables & Data Types","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","variables data types \u178f\u17b6\u17c6\u1784 \u17a2\u1790\u17c1\u179a let string number boolean \u1796\u17b7\u178f \u1798\u17b7\u1793\u1796\u17b7\u178f \u1791\u1791\u17c1 null dynamic")
C.bq=new A.S("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)","Khmer Numerals & Math Operators","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","numerals math \u17e0 \u17e1 \u17e2 \u17e3 \u17e4 \u17e5 \u17e6 \u17e7 \u17e8 \u17e9 \u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 modulo \u1793\u17b7\u1784 \u17ac \u1798\u17b7\u1793")
C.bx=new A.S("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)","Khmer Punctuations","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","punctuations \u1781\u178e\u17d2\u178c \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 \u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785 semicolon statement terminator")
C.bz=new A.S("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f","Conditionals (If / Else If / Else)","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","conditionals if else elif \u1794\u17be \u17ac\u1794\u17be \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f logic \u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c")
C.bt=new A.S("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)","While Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","while loop \u1781\u178e\u17c8 \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 iteration repeat")
C.bu=new A.S("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)","For Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","for loop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 count step range")
C.br=new A.S("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)","Function Declaration","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","function \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178f\u17d2\u179a\u17a1\u1794\u17cb return parameters arguments methods \u179c\u17b7\u1792\u17b8")
C.bv=new A.S("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)","Recursive Functions & Fibonacci","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","recursion recursive fibonacci \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8 call self \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784")
C.by=new A.S("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (OOP)","Classes & Objects","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","class oop \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1794\u1784\u17d2\u1780\u17be\u178f constructor \u1793\u17c1\u17c7 this \u1790\u17d2\u1798\u17b8 new object instance")
C.bB=new A.S("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)","Inheritance & Subclasses","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","inheritance extends \u1794\u1793\u17d2\u178f\u1796\u17b8 subclass superclass oop \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793")
C.bo=new A.S("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)","Standard Built-in Functions","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","builtins standard functions \u1794\u1784\u17d2\u17a0\u17b6\u1789 \u1794\u17d2\u179a\u179c\u17c2\u1784 \u1794\u17d2\u179a\u1797\u17c1\u1791 \u1794\u1793\u17d2\u1790\u17c2\u1798 length print type push")
C.bp=new A.S("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs (Flutter / Web)","Developer Tools & IDEs","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","ides tools flutter ide web ide vscode editor extension cli terminal")
C.bs=new A.S("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)","Syntax Cheat Sheet Table","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","cheat sheet table syntax keywords \u178f\u17b6\u179a\u17b6\u1784 \u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 summary reference")
C.bn=new A.S("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","Live Interactive Web Playground","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","playground runner editor live code online ide \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784 \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 run web")
C.W=w([C.bw,C.bA,C.bD,C.bC,C.bq,C.bx,C.bz,C.bt,C.bu,C.br,C.bv,C.by,C.bB,C.bo,C.bp,C.bs,C.bn],B.b7("A<S>"))
C.c1=new A.a0("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798")
C.ce=new A.a0("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798")
C.c3=new A.a0("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784")
C.c2=new A.a0("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3")
C.c6=new A.a0("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8")
C.cb=new A.a0("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7")
C.c8=new A.a0("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be/\u17ac\u1794\u17be/\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f")
C.cg=new A.a0("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8")
C.ch=new A.a0("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb")
C.c9=new A.a0("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd")
C.c4=new A.a0("recursion","Recursion (Fibonacci)")
C.ca=new A.a0("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor")
C.cd=new A.a0("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)")
C.c7=new A.a0("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a")
C.c5=new A.a0("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs")
C.cf=new A.a0("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7")
C.cc=new A.a0("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a")
C.b5=w([C.c1,C.ce,C.c3,C.c2,C.c6,C.cb,C.c8,C.cg,C.ch,C.c9,C.c4,C.ca,C.cd,C.c7,C.c5,C.cf,C.cc],B.b7("A<a0>"))
C.b6=w(['"',"'","\u201c","\u201d","\u2018","\u2019"],x.s)
C.bb={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
C.b7=new B.ar(C.bb,["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],x.w)
C.bh={"\u17e0":0,"\u17e1":1,"\u17e2":2,"\u17e3":3,"\u17e4":4,"\u17e5":5,"\u17e6":6,"\u17e7":7,"\u17e8":8,"\u17e9":9}
C.X=new B.ar(C.bh,["0","1","2","3","4","5","6","7","8","9"],x.w)
C.bc={hello:0,math:1,fibo:2,oop:3,grades:4}
C.b8=new B.ar(C.bc,[y.h,'# \u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)','# \u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}','# \u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()','# \u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e5\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}'],x.w)
C.be={"\u178f\u17b6\u17c6\u1784":0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":8,"\u1796\u17b7\u178f":9,"\u1798\u17b7\u1793\u1796\u17b7\u178f":10,"\u1791\u1791\u17c1":11,"\u1793\u17b7\u1784":12,"\u17ac":13,"\u1798\u17b7\u1793":14,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":15,"\u179c\u17b7\u1792\u17b8":16,"\u1793\u17c1\u17c7":17,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":18,"\u1790\u17d2\u1798\u17b8":19,"\u1794\u1793\u17d2\u178f\u1796\u17b8":20}
C.w=new A.q(3,"let")
C.I=new A.q(4,"print")
C.K=new A.q(5,"ifType")
C.y=new A.q(6,"elseIf")
C.L=new A.q(7,"elseType")
C.M=new A.q(8,"whileType")
C.N=new A.q(9,"forType")
C.u=new A.q(10,"function")
C.A=new A.q(11,"returnType")
C.a2=new A.q(12,"trueType")
C.a3=new A.q(13,"falseType")
C.a4=new A.q(14,"nullType")
C.B=new A.q(15,"and")
C.C=new A.q(16,"or")
C.D=new A.q(17,"not")
C.E=new A.q(18,"classType")
C.v=new A.q(19,"method")
C.a5=new A.q(20,"thisType")
C.a6=new A.q(21,"self")
C.a7=new A.q(22,"newType")
C.a8=new A.q(23,"extendsType")
C.Y=new B.ar(C.be,[C.w,C.I,C.K,C.y,C.L,C.M,C.N,C.u,C.A,C.a2,C.a3,C.a4,C.B,C.C,C.D,C.E,C.v,C.a5,C.a6,C.a7,C.a8],B.b7("ar<h,q>"))
C.bj=new A.c4(null)
C.bk=new A.eI(null)
C.bd={"\u178f\u17b6\u17c6\u1784":0,"\u17a2\u1790\u17c1\u179a":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u179c\u17b7\u1792\u17b8":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":9,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":10,"\u1794\u1784\u17d2\u1780\u17be\u178f":11,"\u1793\u17c1\u17c7":12,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":13,"\u1790\u17d2\u1798\u17b8":14,"\u1794\u1793\u17d2\u178f\u1796\u17b8":15,"\u1796\u17b7\u178f":16,"\u1798\u17b7\u1793\u1796\u17b7\u178f":17,"\u1791\u1791\u17c1":18,"\u1793\u17b7\u1784":19,"\u17ac":20,"\u1798\u17b7\u1793":21}
C.bE=new A.bU(C.bd,22,x.O)
C.bg={"\u1794\u1784\u17d2\u17a0\u17b6\u1789":0,"\u1794\u17d2\u179a\u179c\u17c2\u1784":1,"\u1794\u17d2\u179a\u1797\u17c1\u1791":2,"\u1794\u1793\u17d2\u1790\u17c2\u1798":3,"\u1794\u1789\u17d2\u1785\u17bc\u179b":4,"\u1794\u1798\u17d2\u179b\u17c2\u1784\u179b\u17c1\u1781":5,"\u1794\u1789\u17d2\u1788\u1794\u17cb":6}
C.bF=new A.bU(C.bg,7,x.O)
C.bG=new A.id(4,"center")
C.a0=new A.q(0,"number")
C.a1=new A.q(1,"string")
C.h=new A.q(2,"identifier")
C.a9=new A.q(24,"plus")
C.F=new A.q(25,"minus")
C.aa=new A.q(26,"star")
C.ab=new A.q(27,"slash")
C.ac=new A.q(28,"modulo")
C.G=new A.q(29,"assign")
C.ad=new A.q(30,"eq")
C.ae=new A.q(31,"neq")
C.af=new A.q(32,"lt")
C.ag=new A.q(33,"gt")
C.ah=new A.q(34,"lte")
C.ai=new A.q(35,"gte")
C.H=new A.q(36,"dot")
C.i=new A.q(37,"lparen")
C.c=new A.q(38,"rparen")
C.q=new A.q(39,"lbrace")
C.m=new A.q(40,"rbrace")
C.J=new A.q(41,"lbracket")
C.r=new A.q(42,"rbracket")
C.l=new A.q(43,"comma")
C.j=new A.q(44,"semicolon")
C.x=new A.q(45,"colon")
C.n=new A.q(46,"eof")
C.ak=new B.b0("#f87171")
C.o=new B.b0("#94a3b8")
C.z=new B.b0("#34d399")
C.P=new B.b0("#38bdf8")})();(function staticFields(){$.i4=0
$.d5=A.oy()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"pD","kM",()=>{A.nk()
return $.i4})})()};
(a=>{a["ubb1mib8+Ug0W7H3H9iHqaJW3BQ="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
