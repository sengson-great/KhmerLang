((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
nN(){throw C.e(C.ab("Cannot modify constant Set"))},
m3(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return C.q(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
m2(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.b.aB(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
od(){return Date.now()},
of(){var w,v
if($.ib!==0)return
$.ib=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.ib=1e6
$.dr=new B.ia(v)},
cY:function cY(){},
c7:function c7(d,e,f){this.a=d
this.b=e
this.$ti=f},
ia:function ia(d){this.a=d},
q3(d){var w=B.m3(d,null)
if(w!=null)return w
throw C.e(C.hJ(d,null))},
pO(d){var w=B.m2(d)
if(w!=null)return w
throw C.e(C.hJ("Invalid double",d))},
kS(d){return new C.b8(d)},
og(d){var w=null
return new C.cl(w,w,!1,w,w,d)},
ik:function ik(){this.b=this.a=0},
iY:function iY(){},
lu(d,e,f){return new B.bp(f,e,d,null)},
q6(d,e,f,g){return new B.a4(e,g,f,d,null)},
bj(d,e,f,g,h,i){return new B.fU(h,f,i,e,g,d,null)},
h4(d,e,f){return new B.h3(f,e,d,null)},
mD(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
mT(d,e,f,g){var w=null
return new B.R(g,w,e,w,w,f,d,w)},
bG(d,e,f){return new B.a9(e,f,d,null)},
fT:function fT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
fY:function fY(d,e,f){this.d=d
this.w=e
this.a=f},
h_:function h_(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
fZ:function fZ(d){this.a=d},
a7:function a7(d,e){this.w=d
this.a=e},
bn:function bn(d,e){this.w=d
this.a=e},
h1:function h1(d){this.a=d},
h2:function h2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
a8:function a8(d,e,f){this.c=d
this.w=e
this.a=f},
w:function w(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bp:function bp(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
a4:function a4(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.a=h},
M:function M(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
h6:function h6(d,e,f){this.d=d
this.w=e
this.a=f},
fU:function fU(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
ej:function ej(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.z=f
_.Q=g
_.at=h
_.ax=i
_.a=j
_.$ti=k},
hR:function hR(d,e,f){this.c=d
this.a=e
this.b=f},
h0:function h0(d,e,f){this.f=d
this.x=e
this.a=f},
h3:function h3(d,e,f,g){var _=this
_.d=d
_.e=e
_.Q=f
_.a=g},
h7:function h7(d,e,f,g){var _=this
_.at=d
_.ch=e
_.CW=f
_.a=g},
h9:function h9(d,e,f,g,h){var _=this
_.CW=d
_.cy=e
_.db=f
_.dx=g
_.a=h},
aV:function aV(d,e,f,g){var _=this
_.f=d
_.x=e
_.z=f
_.a=g},
ei:function ei(d,e){this.Q=d
this.a=e},
bo:function bo(d,e){this.y=d
this.a=e},
h5:function h5(d){this.a=d},
cD:function cD(d,e){this.w=d
this.a=e},
cF:function cF(d,e){this.w=d
this.a=e},
cE:function cE(d,e){this.w=d
this.a=e},
as:function as(d,e){this.as=d
this.a=e},
o:function o(d,e){this.w=d
this.a=e},
b:function b(d,e){this.z=d
this.a=e},
R:function R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.a=k},
d:function d(d,e,f){this.d=d
this.w=e
this.a=f},
a9:function a9(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
Y:function Y(d,e){this.w=d
this.a=e},
ez:function ez(d,e,f){this.c=d
this.a=e
this.b=f},
fQ:function fQ(d,e,f){this.a=d
this.b=e
this.c=f},
hr:function hr(d,e){this.a=d
this.b=e},
he:function he(d,e){this.a=d
this.b=e},
e2:function e2(d,e){this.b=d
this.c=e},
iq:function iq(d,e){this.a=d
this.b=e},
hH:function hH(d,e){this.a=d
this.b=e},
ir:function ir(){},
fO:function fO(){},
fD:function fD(d,e){this.a=d
this.b=e},
aY:function aY(d,e){this.b=d
this.a=e},
fx:function fx(d,e,f,g,h,i,j){var _=this
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
b2:function b2(){},
ap:function ap(){},
f7:function f7(d,e,f,g){var _=this
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
y:function y(){},
f8:function f8(d,e,f){var _=this
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
nB(){return new B.b6(null)},
b6:function b6(d){this.a=d},
cI:function cI(){var _=this
_.e=_.d=!1
_.f="intro"
_.r=!0
_.c=_.a=null},
hn:function hn(d){this.a=d},
hm:function hm(d){this.a=d},
hh:function hh(d){this.a=d},
hg:function hg(d){this.a=d},
hf:function hf(d,e){this.a=d
this.b=e},
hk:function hk(d){this.a=d},
hj:function hj(d){this.a=d},
hl:function hl(d){this.a=d},
hi:function hi(d){this.a=d},
X:function X(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fo:function fo(){var _=this
_.f=_.e=_.d=!1
_.r=""
_.w=0
_.x=!1
_.c=_.a=null},
iC:function iC(d){this.a=d},
iD:function iD(d){this.a=d},
iB:function iB(d){this.a=d},
iE:function iE(d){this.a=d},
iF:function iF(d,e){this.a=d
this.b=e},
iG:function iG(d,e){this.a=d
this.b=e},
iH:function iH(d){this.a=d},
iI:function iI(d){this.a=d},
eC:function eC(d){this.a=d},
eF:function eF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
hN:function hN(d){this.a=d},
hO:function hO(d){this.a=d},
hP:function hP(d){this.a=d},
ck:function ck(d){this.a=d},
fE:function fE(){var _=this
_.d="hello"
_.e=""
_.f='\u179f\u17bc\u1798\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u1798\u17be\u179b\u179b\u1791\u17d2\u1792\u1795\u179b...'
_.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"
_.w=!1
_.c=_.a=null},
j3:function j3(d,e){this.a=d
this.b=e},
j2:function j2(d,e){this.a=d
this.b=e},
j4:function j4(d){this.a=d},
j5:function j5(d,e){this.a=d
this.b=e},
j6:function j6(d,e){this.a=d
this.b=e},
j_:function j_(d,e){this.a=d
this.b=e},
j0:function j0(d,e){this.a=d
this.b=e},
j1:function j1(d){this.a=d},
j8:function j8(d){this.a=d},
j9:function j9(d){this.a=d},
ja:function ja(d){this.a=d},
jb:function jb(d){this.a=d},
jc:function jc(d){this.a=d},
j7:function j7(d,e){this.a=d
this.b=e},
co:function co(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fI:function fI(){this.d=""
this.c=this.a=null},
jg:function jg(){},
jh:function jh(d,e){this.a=d
this.b=e},
ji:function ji(){},
jj:function jj(){},
jl:function jl(d){this.a=d},
jm:function jm(d){this.a=d},
jk:function jk(d,e){this.a=d
this.b=e},
jn:function jn(d){this.a=d},
jo:function jo(d){this.a=d},
jp:function jp(d,e){this.a=d
this.b=e},
f5:function f5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ih:function ih(d,e){this.a=d
this.b=e},
a6:function a6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fd:function fd(d,e,f){this.c=d
this.d=e
this.a=f},
ip:function ip(d,e){this.a=d
this.b=e},
ac:function ac(d,e){this.a=d
this.b=e},
I:function I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
en:function en(d){this.a=d},
ew:function ew(d){this.a=d},
eD:function eD(d){this.a=d},
eE:function eE(d){this.a=d},
f0:function f0(d){this.a=d},
n4(d){var w=b.G,v=C.a2(C.t(w.document).documentElement)
if(v!=null)v.setAttribute("data-theme",d)
C.t(C.t(w.window).localStorage).setItem("khmerlang-doc-theme",d)},
qe(d){C.t(b.G.window).addEventListener("keydown",C.mG(new B.kK(d)))},
kK:function kK(d){this.a=d},
D:function D(){},
dp:function dp(d){this.a=d},
bS:function bS(d){this.a=d},
c4:function c4(d){this.a=d},
dn:function dn(){},
cK:function cK(d){this.a=d},
dq:function dq(d){this.a=d},
bt:function bt(d){this.a=d},
dE:function dE(){},
dF:function dF(d,e){this.a=d
this.b=e},
aX:function aX(d,e,f){this.a=d
this.b=e
this.c=f},
cL:function cL(d,e){this.a=d
this.b=e},
ch:function ch(d,e){this.a=d
this.b=e},
dh:function dh(d,e,f){this.a=d
this.b=e
this.c=f},
cd:function cd(d,e){this.a=d
this.b=e},
d5:function d5(d,e,f){this.a=d
this.b=e
this.c=f},
d4:function d4(d,e){this.a=d
this.b=e},
dl:function dl(d,e){this.a=d
this.b=e},
dH:function dH(d,e){this.a=d
this.b=e},
ds:function ds(d){this.a=d},
cM:function cM(d){this.a=d},
cc:function cc(d,e,f){this.a=d
this.b=e
this.c=f},
dK:function dK(d,e){this.a=d
this.b=e},
d3:function d3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs:function bs(d,e,f){this.a=d
this.b=e
this.c=f},
ca:function ca(d,e){this.a=d
this.b=e},
cq:function cq(d,e,f){this.a=d
this.b=e
this.c=f},
cQ:function cQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
du:function du(d){this.a=d},
d2:function d2(d){this.a=d},
n6(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.nz.k(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
pT(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.J.k(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
ah(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=D.b.aB(B.pT(D.b.aB(d)))
v=B.m3(w,null)
return v==null?B.m2(w):v}return null},
c2(d){if(d==null)return"\u1791\u1791\u17c1"
if(C.fS(d))return d?"\u1796\u17b7\u178f":"\u1798\u17b7\u1793\u1796\u17b7\u178f"
if(typeof d=="number")return B.n6(d===D.c.aS(d)?D.f.j(D.c.Y(d)):D.c.j(d))
if(C.lk(d))return B.n6(D.f.j(d))
if(x.j.b(d))return"["+J.kO(d,new B.ku(),x.N).S(0,", ")+"]"
if(x.f.b(d))return"{"+d.gbb().ak(0,new B.kv(),x.N).S(0,", ")+"}"
if(d instanceof B.b9)return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a.a+">"
if(d instanceof B.bw)return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a+">"
if(d instanceof B.aZ)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd "+d.a+">"
if(d instanceof B.l)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785 "+d.a+">"
return J.v(d)},
pL(c0,c1){var w="\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e",v="\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7",u="\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784",t="\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6",s="\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785",r="\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8",q="contains",p=C.F(x.N,x.z),o=new B.ka(c1),n=new B.k3(),m=new B.kq(),l=new B.jT(),k=new B.kk(),j=new B.k9(),i=new B.kg(),h=new B.jX(),g=new B.jV(),f=new B.k5(),e=new B.k6(),d=new B.kc(A.bm),a0=new B.kn(),a1=new B.ko(),a2=new B.km(),a3=new B.kj(),a4=new B.kl(),a5=new B.ke(),a6=new B.kp(),a7=new B.kr(),a8=new B.k4(),a9=new B.jU(),b0=new B.k0(),b1=new B.k8(),b2=new B.kd(),b3=new B.k1(),b4=new B.kh(),b5=new B.kf(),b6=new B.jY(),b7=new B.jW(),b8=new B.k7(),b9=new B.jZ(c0)
p.i(0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789",new B.l("\u1794\u1784\u17d2\u17a0\u17b6\u1789",o))
p.i(0,"print",new B.l("print",o))
p.i(0,"\u1794\u17d2\u179a\u179c\u17c2\u1784",new B.l("\u1794\u17d2\u179a\u179c\u17c2\u1784",n))
p.i(0,"len",new B.l("len",n))
p.i(0,"\u1794\u17d2\u179a\u1797\u17c1\u1791",new B.l("\u1794\u17d2\u179a\u1797\u17c1\u1791",m))
p.i(0,"type",new B.l("type",m))
p.i(0,"\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f",new B.l("\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f",l))
p.i(0,"abs",new B.l("abs",l))
p.i(0,"\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1",new B.l("\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1",k))
p.i(0,"sqrt",new B.l("sqrt",k))
p.i(0,w,new B.l(w,j))
p.i(0,"pow",new B.l("pow",j))
p.i(0,"\u1794\u1784\u17d2\u1782\u178f\u17cb",new B.l("\u1794\u1784\u17d2\u1782\u178f\u17cb",i))
p.i(0,"round",new B.l("round",i))
p.i(0,v,new B.l(v,h))
p.i(0,"floor",new B.l("floor",h))
p.i(0,u,new B.l(u,g))
p.i(0,"ceil",new B.l("ceil",g))
p.i(0,"\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6",new B.l("\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6",f))
p.i(0,"max",new B.l("max",f))
p.i(0,t,new B.l(t,e))
p.i(0,"min",new B.l("min",e))
p.i(0,"\u1785\u17c3\u178a\u1793\u17d2\u1799",new B.l("\u1785\u17c3\u178a\u1793\u17d2\u1799",d))
p.i(0,"random",new B.l("random",d))
p.i(0,"\u1787\u17b6\u179b\u17c1\u1781",new B.l("\u1787\u17b6\u179b\u17c1\u1781",a0))
p.i(0,"toNum",new B.l("toNum",a0))
p.i(0,"toInt",new B.l("toInt",a0))
p.i(0,"\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a",new B.l("\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a",a1))
p.i(0,"toStr",new B.l("toStr",a1))
p.i(0,"\u1787\u17b6\u178f\u1780\u17d2\u1780",new B.l("\u1787\u17b6\u178f\u1780\u17d2\u1780",a2))
p.i(0,"toBool",new B.l("toBool",a2))
p.i(0,"\u1796\u17bb\u17c7",new B.l("\u1796\u17bb\u17c7",a3))
p.i(0,"split",new B.l("split",a3))
p.i(0,"\u1780\u17b6\u178f\u17cb",new B.l("\u1780\u17b6\u178f\u17cb",a4))
p.i(0,"substr",new B.l("substr",a4))
p.i(0,"\u1787\u17c6\u1793\u17bd\u179f",new B.l("\u1787\u17c6\u1793\u17bd\u179f",a5))
p.i(0,"replace",new B.l("replace",a5))
p.i(0,"\u179f\u1798\u17d2\u17a2\u17b6\u178f",new B.l("\u179f\u1798\u17d2\u17a2\u17b6\u178f",a6))
p.i(0,"trim",new B.l("trim",a6))
p.i(0,"\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6",new B.l("\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6",a7))
p.i(0,"upper",new B.l("upper",a7))
p.i(0,s,new B.l(s,a8))
p.i(0,"lower",new B.l("lower",a8))
p.i(0,"\u1794\u1793\u17d2\u1790\u17c2\u1798",new B.l("\u1794\u1793\u17d2\u1790\u17c2\u1798",a9))
p.i(0,"append",new B.l("append",a9))
p.i(0,"\u1794\u1789\u17d2\u1785\u17bc\u179b",new B.l("\u1794\u1789\u17d2\u1785\u17bc\u179b",b0))
p.i(0,"insert",new B.l("insert",b0))
p.i(0,"\u178a\u1780\u1785\u17c1\u1789",new B.l("\u178a\u1780\u1785\u17c1\u1789",b1))
p.i(0,"pop",new B.l("pop",b1))
p.i(0,"\u179b\u17bb\u1794",new B.l("\u179b\u17bb\u1794",b2))
p.i(0,"remove",new B.l("remove",b2))
p.i(0,"\u1797\u17d2\u1787\u17b6\u1794\u17cb",new B.l("\u1797\u17d2\u1787\u17b6\u1794\u17cb",b3))
p.i(0,"join",new B.l("join",b3))
p.i(0,"\u178f\u1798\u17d2\u179a\u17c0\u1794",new B.l("\u178f\u1798\u17d2\u179a\u17c0\u1794",b4))
p.i(0,"sort",new B.l("sort",b4))
p.i(0,r,new B.l(r,b5))
p.i(0,"reverse",new B.l("reverse",b5))
p.i(0,"\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780",new B.l("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780",b6))
p.i(0,"indexOf",new B.l("indexOf",b6))
p.i(0,"\u1798\u17b6\u1793",new B.l("\u1798\u17b6\u1793",b7))
p.i(0,q,new B.l(q,b7))
p.i(0,"\u1796\u17c1\u179b\u1793\u17c1\u17c7",new B.l("\u1796\u17c1\u179b\u1793\u17c1\u17c7",b8))
p.i(0,"now",new B.l("now",b8))
p.i(0,"\u17a2\u17b6\u1793",new B.l("\u17a2\u17b6\u1793",b9))
p.i(0,"input",new B.l("input",b9))
return new B.br(p,null)},
ku:function ku(){},
kv:function kv(){},
br:function br(d,e){this.a=d
this.b=e},
l:function l(d,e){this.a=d
this.b=e},
aZ:function aZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bw:function bw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9:function b9(d,e){this.a=d
this.b=e},
ka:function ka(d){this.a=d},
kb:function kb(){},
k3:function k3(){},
kq:function kq(){},
jT:function jT(){},
kk:function kk(){},
k9:function k9(){},
kg:function kg(){},
jX:function jX(){},
jV:function jV(){},
k5:function k5(){},
k6:function k6(){},
kc:function kc(d){this.a=d},
kn:function kn(){},
ko:function ko(){},
km:function km(){},
kj:function kj(){},
kl:function kl(){},
ke:function ke(){},
kp:function kp(){},
kr:function kr(){},
k4:function k4(){},
jU:function jU(){},
k0:function k0(){},
k8:function k8(){},
kd:function kd(){},
k1:function k1(){},
k2:function k2(){},
kh:function kh(){},
ki:function ki(){},
kf:function kf(){},
jY:function jY(){},
jW:function jW(){},
k7:function k7(){},
jZ:function jZ(d){this.a=d},
k_:function k_(){},
lX(d,e,f){return new B.i2(d,e,f,null)},
cj(d,e,f){return new B.i8(d,e,f,null)},
m(d){return new B.dv(d,null,null,null)},
db:function db(){},
i2:function i2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i8:function i8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dv:function dv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1:function f1(d){this.a=d},
hS:function hS(d){this.a=d
this.b=$},
hT:function hT(d,e){this.a=d
this.b=e},
hU:function hU(d,e){this.a=d
this.b=e},
hV:function hV(d,e){this.a=d
this.b=e},
hW:function hW(d,e){this.a=d
this.b=e},
lW(d){var w=new B.i1(d)
w.e=d.length
return w},
i1:function i1(d){var _=this
_.a=d
_.b=0
_.d=_.c=1
_.e=$},
eX:function eX(d){this.a=d
this.b=0},
n3(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=null,a0=new C.cs(""),a1=new B.ik()
$.lw()
i=$.dr.$0()
a1.a=i
a1.b=null
w=a1
v=new B.kJ(a0,null)
u=null
t=null
try{s=B.lW(a2)
r=s.d4()
q=new B.eX(r)
u=q.d0()
t=B.pL(d,v)
i=t
h=new B.hS(i)
h.b=i
p=h
o=p.f_(u)
i=w
if(i.b==null)i.b=$.dr.$0()
n=C.F(x.N,x.z)
for(i=t.a,i=new C.aN(i,C.n(i).h("aN<1,2>")).gB(0);i.p();){g=i.d
g.toString
m=g
if(!(m.b instanceof B.l))J.hc(n,m.a,m.b)}i=a0.a
g=B.kS(w.gbO())
return new B.d1("success",i.charCodeAt(0)==0?i:i,null,g)}catch(f){i=C.a0(f)
if(i instanceof B.db){l=i
i=w
if(i.b==null)i.b=$.dr.$0()
i=e!=null
if(i)l.toString
if(i)l.d=e
i=a0.a
g=l.bQ()
l.cM()
l.toString
l.toString
return new B.d1("error",i.charCodeAt(0)==0?i:i,g,B.kS(w.gbO()))}else{k=i
i=w
if(i.b==null)i.b=$.dr.$0()
j=e!=null&&D.b.gW(e)?e:"<source>"
i=a0.a
g=C.j(k)
C.j(j)
C.j(k)
return new B.d1("error",i.charCodeAt(0)==0?i:i,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+g,B.kS(w.gbO()))}}},
pJ(d){var w,v,u,t,s,r,q,p,o,n=null
try{w=B.lW(d)
v=w.d4()
u=new B.eX(v)
t=u.d0()
p=J.an(v)
if(J.an(t)!==0)C.ax(C.bE(J.ns(t)).a,null)
return new B.cO("success",p,null)}catch(o){p=C.a0(o)
if(p instanceof B.db){s=p
p=n!=null
if(p)s.toString
if(p)s.d=n
p=s.bQ()
s.cM()
s.toString
s.toString
return new B.cO("error",0,p)}else{r=p
q=n!=null&&D.b.gW(n)?n:"<source>"
p=C.j(r)
C.j(q)
C.j(r)
return new B.cO("error",0,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+p)}}},
d1:function d1(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.w=g},
cO:function cO(d,e,f){this.a=d
this.b=e
this.d=f},
kJ:function kJ(d,e){this.a=d
this.b=e},
u:function u(d,e){this.a=d
this.b=e},
aq:function aq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
on(d,e){var w=$.K
if(w===D.i)return C.l8(d,x.M.a(e))
return C.l8(d,x.M.a(w.bK(e)))},
fW(d,e,f,g){return C.F(x.N,x.v)},
cx(d,e,f,g,h,i,j){var w=null
return new C.aS(w,i,h,d,w,e,j,f,g,w,w)},
pY(d){var w,v,u=d.split("\n"),t=C.c([],x.i)
for(w=0;v=u.length,w<v;++w){D.a.F(t,B.p7(u[w]))
if(w<v-1)D.a.m(t,A.ua)}return t},
p7(d){var w,v,u,t,s,r,q,p,o=null
if(D.b.dg(D.b.aB(d),"#")){w=x.i
return C.c([B.bG(C.c([new C.a(d,o)],w),"com",o)],w)}w=x.i
v=C.c([],w)
u=new C.cs("")
for(t=d.length,s=0;s<t;){if(!(s>=0))return C.q(d,s)
r=d[s]
if(r==="#"){t=u.a
if(t.length!==0){D.a.F(v,B.lm(t.charCodeAt(0)==0?t:t))
u.a=""}D.a.m(v,new B.a9("com",o,C.c([new C.a(D.b.aX(d,s),o)],w),o))
break}if(r==='"'||r==="'"){q=u.a
if(q.length!==0){D.a.F(v,B.lm(q.charCodeAt(0)==0?q:q))
u.a=""}p=s+1
for(;;){q=p<t
if(!(q&&d[p]!==r))break
if(!(p<t))return C.q(d,p)
p=d[p]==="\\"&&p+1<t?p+2:p+1}if(q)++p
D.a.m(v,new B.a9("str",o,C.c([new C.a(D.b.al(d,s,p),o)],w),o))
s=p
continue}u.a+=r;++s}w=u.a
if(w.length!==0)D.a.F(v,B.lm(w.charCodeAt(0)==0?w:w))
return v},
lm(d){var w,v,u,t="(\\s+|[(){}\\[\\],;:=+\\-*/%<>!\u17d4\u17d5\u17d6])",s=C.c([],x.i),r=D.b.df(d,C.cm(t)),q=C.cm(t).b4(0,d),p=C.ao(q,C.n(q).h("h.E"))
for(w=0,v=0;v<r.length;++v){u=r[v]
if(u.length!==0)D.a.m(s,B.pz(u))
if(w<p.length){q=p[w].b
if(0>=q.length)return C.q(q,0)
q=q[0]
D.a.m(s,new C.a(q==null?"":q,null));++w}}return s},
pz(d){var w,v=null
if(A.oo.D(0,d))return B.bG(C.c([new C.a(d,v)],x.i),"kw",v)
else if(A.on.D(0,d))return B.bG(C.c([new C.a(d,v)],x.i),"builtin",v)
else{w=C.cm("^[\u17e0-\u17e90-9]+(\\.[\u17e0-\u17e90-9]+)?$")
if(w.b.test(d))return B.bG(C.c([new C.a(d,v)],x.i),"num",v)}return new C.a(d,v)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[3],B)
A=c[4]
B.cY.prototype={
m(d,e){C.n(this).c.a(e)
B.nN()}}
B.c7.prototype={
gl(d){return this.b},
gA(d){return this.b===0},
gW(d){return this.b!==0},
gB(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new C.bW(w,w.length,v.$ti.h("bW<1>"))},
D(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
B.ik.prototype={
gbO(){var w,v=this.b
if(v==null)v=$.dr.$0()
w=v-this.a
if($.lw()===1e6)return w
return w*1000}}
B.iY.prototype={
cZ(d){if(d<=0||d>4294967296)throw C.e(B.og("max must be in range 0 < max \u2264 2^32, was "+d))
return Math.random()*d>>>0},
f6(){return Math.random()}}
B.fT.prototype={
t(d){var w=this
return new C.A("aside",w.c,w.d,null,w.f,null,w.w,null)}}
B.fY.prototype={
t(d){var w=null
return new C.A("footer",w,this.d,w,w,w,this.w,w)}}
B.h_.prototype={
t(d){var w=null
return new C.A("header",this.c,this.d,w,w,w,this.w,w)}}
B.fZ.prototype={
t(d){var w=null
return new C.A("h1",w,"doc-title",w,w,w,A.jj,w)}}
B.a7.prototype={
t(d){var w=null
return new C.A("h2",w,"section-heading",w,w,w,this.w,w)}}
B.bn.prototype={
t(d){var w=null
return new C.A("h3",w,"sub-heading",w,w,w,this.w,w)}}
B.h1.prototype={
t(d){var w=null
return new C.A("main",w,"docs-main-content",w,w,w,A.ff,w)}}
B.h2.prototype={
t(d){var w=this
return new C.A("nav",w.c,w.d,null,w.f,null,w.w,null)}}
B.a8.prototype={
t(d){var w=null
return new C.A("section",this.c,"doc-section",w,w,w,this.w,w)}}
B.w.prototype={
t(d){var w=this
return new C.A("div",w.c,w.d,w.e,w.f,w.r,w.w,null)}}
B.bp.prototype={
t(d){var w=null
return new C.A("ul",this.c,this.d,w,w,w,this.w,w)}}
B.a4.prototype={
t(d){var w=this,v=x.N
return new C.A("li",null,w.e,w.f,C.F(v,v),w.w,w.x,null)}}
B.M.prototype={
t(d){var w=null
return new C.A("p",w,this.d,this.e,w,w,this.w,w)}}
B.h6.prototype={
t(d){var w=null
return new C.A("pre",w,this.d,w,w,w,this.w,w)}}
B.fU.prototype={
t(d){var w=this,v=x.N,u=C.F(v,v),t=w.y
if(t!=null)u.F(0,t)
v=C.F(v,x.v)
v.F(0,w.z)
v.F(0,B.fX().$1$1$onClick(null,x.H))
return new C.A("button",w.r,w.w,w.x,u,v,w.Q,null)}}
B.ej.prototype={
t(d){var w,v=this,u=null,t=x.N,s=C.F(t,t)
s.F(0,v.at)
s.i(0,"type",v.c.c)
s.i(0,"value",v.e)
w=B.mD(u)
if(w!=null)s.i(0,"checked",w)
w=B.mD(u)
if(w!=null)s.i(0,"indeterminate",w)
t=C.F(t,x.v)
t.F(0,v.ax)
t.F(0,B.fX().$1$2$onChange$onInput(u,u,v.$ti.c))
return new C.A("input",v.z,v.Q,u,s,t,u,u)}}
B.hR.prototype={
ab(){return"InputType."+this.b}}
B.h0.prototype={
t(d){var w=null,v=x.N
return new C.A("label",w,w,this.f,C.F(v,v),w,this.x,w)}}
B.h3.prototype={
t(d){var w=null,v=x.N
v=C.F(v,v)
v.i(0,"value",this.d)
if(this.e)v.i(0,"selected","")
return new C.A("option",w,w,w,v,w,this.Q,w)}}
B.h7.prototype={
t(d){var w=null,v=x.N,u=C.F(v,x.v)
u.F(0,this.ch)
u.F(0,B.fX().$1$2$onChange$onInput(w,w,x.a))
return new C.A("select",w,this.at,w,C.F(v,v),u,this.CW,w)}}
B.h9.prototype={
t(d){var w,v=this,u=null,t=x.N,s=C.F(t,t)
s.F(0,v.cy)
w=C.F(t,x.v)
w.F(0,v.db)
w.F(0,B.fX().$1$2$onChange$onInput(u,u,t))
return new C.A("textarea",u,v.CW,u,s,w,v.dx,u)}}
B.aV.prototype={
t(d){var w=null,v=x.N
v=C.F(v,v)
v.F(0,this.x)
return new C.A("svg",this.f,w,w,v,w,this.z,w)}}
B.ei.prototype={
t(d){var w=null,v=x.N
v=C.F(v,v)
v.F(0,this.Q)
return new C.A("circle",w,w,w,v,w,A.B,w)}}
B.bo.prototype={
t(d){var w=null,v=x.N
v=C.F(v,v)
v.F(0,this.y)
return new C.A("path",w,w,w,v,w,A.B,w)}}
B.h5.prototype={
t(d){var w=null,v=x.N
v=C.F(v,v)
v.F(0,A.nN)
return new C.A("polygon",w,w,w,v,w,A.B,w)}}
B.cD.prototype={
t(d){var w=null
return new C.A("table",w,"doc-table",w,w,w,this.w,w)}}
B.cF.prototype={
t(d){var w=null
return new C.A("thead",w,w,w,w,w,this.w,w)}}
B.cE.prototype={
t(d){var w=null
return new C.A("tbody",w,w,w,w,w,this.w,w)}}
B.as.prototype={
t(d){var w=null,v=x.N
return new C.A("th",w,w,w,C.F(v,v),w,this.as,w)}}
B.o.prototype={
t(d){var w=null
return new C.A("tr",w,w,w,w,w,this.w,w)}}
B.b.prototype={
t(d){var w=null,v=x.N
return new C.A("td",w,w,w,C.F(v,v),w,this.z,w)}}
B.R.prototype={
t(d){var w=this,v=x.N,u=C.F(v,v),t=w.Q
if(t!=null)u.F(0,t)
u.i(0,"href",w.c)
v=C.F(v,x.v)
t=w.as
if(t!=null)v.F(0,t)
v.F(0,B.fX().$1$1$onClick(null,x.H))
return new C.A("a",w.x,w.y,w.z,u,v,w.at,null)},
gaf(){return null}}
B.d.prototype={
t(d){var w=null
return new C.A("code",w,this.d,w,w,w,this.w,w)}}
B.a9.prototype={
t(d){var w=null
return new C.A("span",w,this.d,this.e,w,w,this.w,w)}}
B.Y.prototype={
t(d){var w=null
return new C.A("strong",w,w,w,w,w,this.w,w)}}
B.ez.prototype={
ab(){return"Display."+this.b}}
B.fQ.prototype={
gbn(){var w,v=C.c([],x.s)
v.push("solid")
v.push(this.b.a)
w=this.c
v.push(C.eV(w.b)+w.a)
w=x.N
return C.N(["border",D.a.S(v," ")],w,w)},
$inC:1}
B.hr.prototype={
ab(){return"BorderStyle."+this.b}}
B.he.prototype={
ab(){return"AlignItems."+this.b}}
B.e2.prototype={
gbn(){var w,v=x.N
v=C.F(v,v)
w=this.b
w=w==null?null:C.eV(w.b)+w.a
if(w!=null)v.i(0,"top",w)
w=this.c
w=w==null?null:C.eV(w.b)+w.a
if(w!=null)v.i(0,"right",w)
return v},
$il5:1}
B.iq.prototype={
ab(){return"TextAlign."+this.b}}
B.hH.prototype={
ab(){return"FontWeight."+this.b}}
B.ir.prototype={}
B.fO.prototype={
ga_(){var w=C.c([],x.s)
w.push("none")
return D.a.S(w," ")},
$iom:1}
B.fD.prototype={}
B.aY.prototype={
ae(){var w=C.cb(x.h),v=($.af+1)%16777215
$.af=v
return new B.fx(null,!1,!1,w,v,this,D.m)}}
B.fx.prototype={
aJ(){var w=this.f
w.toString
return x.c.a(w).b},
ai(){var w=this.CW.d$
w.toString
return C.nP(w,null)},
aC(d){x.T.a(d)}}
B.b2.prototype={
ae(){var w=this.b8(),v=($.af+1)%16777215
$.af=v
v=new B.f7(w,v,this,D.m)
w.c=v
w.scj(this)
return v}}
B.ap.prototype={
bd(){},
L(d){x.M.a(d).$0()
this.c.cY()},
scj(d){this.a=C.n(this).h("ap.T?").a(d)}}
B.f7.prototype={
bL(){return this.ry.t(this)},
V(){var w=this
if(w.w.c)w.ry.toString
w.dP()
w.bo()},
dP(){try{this.ry.bd()}finally{}this.ry.toString},
aA(){var w=this
w.w.toString
if(w.x1){w.ry.toString
w.x1=!1}w.c2()},
aD(d){var w
x.D.a(d)
w=this.ry
w.toString
C.n(w).h("ap.T").a(d)
return!0},
a4(d){x.D.a(d)
this.bs(d)
this.ry.scj(d)},
aM(d){var w
x.D.a(d)
try{w=this.ry
w.toString
C.n(w).h("ap.T").a(d)}finally{}this.bq(d)},
av(){this.ry.toString
this.dk()},
aV(){this.br()
this.ry=this.ry.c=null}}
B.y.prototype={
ae(){var w=($.af+1)%16777215
$.af=w
return new B.f8(w,this,D.m)}}
B.f8.prototype={
gC(){return x.q.a(C.p.prototype.gC.call(this))},
V(){if(this.w.c)this.r.toString
this.bo()},
aD(d){x.q.a(C.p.prototype.gC.call(this))
return!0},
bL(){return x.q.a(C.p.prototype.gC.call(this)).t(this)},
aA(){this.w.toString
this.c2()}}
B.b6.prototype={
b8(){return new B.cI()}}
B.cI.prototype={
bd(){var w,v,u,t=this
t.c6()
w=b.G
v=C.c0(C.t(C.t(w.window).localStorage).getItem("khmerlang-doc-theme"))
if(v==null)v="dark"
t.r=v!=="light"
B.n4(v)
B.qe(new B.hn(t))
w=C.a_(C.t(C.t(w.window).location).hash)
C.m6(0,0,w.length,"startIndex")
u=C.qk(w,"#","",0)
if(u.length!==0)t.f=u},
ea(){this.L(new B.hh(this))},
e8(){this.L(new B.hg(this))},
dV(d){C.a_(d)
this.L(new B.hf(this,d))
C.t(C.t(b.G.window).location).hash=d},
t(d){var w=this,v=null,u=w.r,t=w.d,s=w.f,r=w.gdU(),q=x.i
return new B.aY(C.c([new B.eF(w.ge7(),new B.hk(w),w.ge9(),u,v),new B.w(v,"docs-container",v,v,v,C.c([new B.f5(t,s,r,v),A.AP,new B.fd(s,r,v)],q),v),A.bO,new B.co(w.e,new B.hl(w),r,v)],q),v)}}
B.X.prototype={
b8(){return new B.fo()}}
B.fo.prototype={
dN(){var w=this,v=w.a.e
C.t(C.t(C.t(C.t(b.G.window).navigator).clipboard).writeText(v))
w.L(new B.iC(w))
B.on(A.bN,new B.iD(w))},
dO(){var w,v,u,t=this
t.L(new B.iE(t))
try{w=B.n3(t.a.e)
t.L(new B.iF(t,w))}catch(u){v=C.a0(u)
t.L(new B.iG(t,v))}},
t(d){var w,v=this,u=null,t=x.i,s=C.c([B.bG(C.c([new C.a(v.a.d,u)],t),"code-card-lang",u),B.bG(C.c([new C.a(v.a.c,u)],t),"code-card-title",u)],t),r=v.d?B.cx(new B.fQ(A.bc,A.a_,new B.fD("px",1)),A.a_,u,u,u,u,u):u,q=x.N,p=x.v,o=C.N(["click",new B.iH(v)],q,p)
r=C.c([B.bj(C.c([new C.a(v.d?"\u2713 \u1794\u17b6\u1793\u1785\u1798\u17d2\u179b\u1784!":"\u1785\u1798\u17d2\u179b\u1784",u)],t),u,"btn-code-action btn-copy-code",o,u,r)],t)
o=v.a
w=o.f
if(w==null?o.d==="KHMER":w){o=v.e?C.N(["disabled","true"],q,q):u
p=C.N(["click",new B.iI(v)],q,p)
r.push(B.bj(C.c([new C.a(v.e?"\u23f3 \u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a...":"\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a",u)],t),o,"btn-code-action btn-code-run",p,u,u))}s=C.c([new B.w(u,"code-card-meta",u,u,u,s,u),new B.w(u,"code-card-actions",u,u,u,r,u)],t)
r=C.c([],t)
q=v.a
p=q.d
q=q.e
if(p==="KHMER")D.a.F(r,B.pY(q))
else r.push(new C.a(q,u))
s=C.c([new B.w(u,"code-card-header",u,u,u,s,u),new B.w(u,"code-content-wrapper",u,u,u,C.c([new B.h6("code-block",C.c([new B.d("snippet-source",r,u)],t),u)],t),u)],t)
if(v.f){r=B.cx(u,A.v,new C.aJ("rem",0.75),u,u,u,u)
r=C.c([A.BI,B.bG(C.c([new C.a(""+v.w+"ms",u)],t),"code-output-time",r)],t)
q=v.x?A.aM:A.aO
s.push(new B.w(u,"code-output-drawer visible",u,u,u,C.c([new B.w(u,"code-output-header",u,u,u,r,u),new B.w(u,"code-output-body",q,u,u,C.c([new C.a(v.r,u)],t),u)],t),u))}return new B.w(u,"code-card",u,u,u,s,u)}}
B.eC.prototype={
t(d){var w=null,v=x.i
return new B.fY("docs-footer",C.c([A.AR,new B.M(w,B.cx(w,A.v,new C.aJ("rem",0.85),w,new B.e2(new C.aJ("rem",0.4),w),w,w),C.c([A.tC,A.x0,A.ty,A.wW],v),w)],v),w)}}
B.eF.prototype={
t(d){var w,v=this,u="docs-header",t=null,s="search-trigger-btn",r=x.N,q=C.N(["aria-label","\u1794\u17be\u1780\u1798\u17c9\u17ba\u1793\u17bb\u1799"],r,r),p=x.v,o=C.N(["click",new B.hN(v)],r,p),n=x.i
o=C.c([B.bj(C.c([A.Ca],n),q,"header-action-btn mobile-menu-toggle",o,"mobile-toggle-btn",t),A.x8],n)
q=C.N(["aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search Docs)"],r,r)
w=C.N(["click",new B.hO(v)],r,p)
w=C.c([B.bj(C.c([A.A1,new B.w(t,"search-kbd-shortcut",t,t,t,C.c([new C.A("kbd",t,t,t,t,t,C.c([new C.a("\u2318",t)],n),t),new C.A("kbd",t,t,t,t,t,C.c([new C.a("K",t)],n),t)],n),t)],n),q,s,w,s,t)],n)
q=C.N(["aria-label","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Mode","title","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Theme"],r,r)
p=C.N(["click",new B.hP(v)],r,p)
r=C.c([],n)
if(v.f)r.push(A.Cc)
else r.push(A.Cg)
return new B.h_(u,u,C.c([new B.w(t,"brand-wrapper",t,t,t,o,t),new B.w(t,"header-center-search",t,t,t,w,t),new B.w(t,"header-actions",t,t,t,C.c([A.wX,B.bj(r,q,"header-action-btn",p,"theme-toggle-btn",t),A.xa],n),t)],n),t)}}
B.ck.prototype={
b8(){return new B.fE()}}
B.fE.prototype={
bd(){this.c6()
this.e=y.n},
dT(d){this.L(new B.j3(this,d))},
dQ(d){this.L(new B.j2(this,d))},
e0(){var w,v,u,t=this
t.L(new B.j4(t))
try{w=B.n3(t.e)
t.L(new B.j5(t,w))}catch(u){v=C.a0(u)
t.L(new B.j6(t,v))}},
dw(){var w,v,u,t=this
try{w=B.pJ(t.e)
t.L(new B.j_(t,w))}catch(u){v=C.a0(u)
t.L(new B.j0(t,v))}},
dA(){this.L(new B.j1(this))},
t(d){var w,v,u,t,s=this,r=null,q="rem",p="btn-playground-clear",o="\u1794\u1784\u17d2\u17a0\u17b6\u1789()",n=B.cx(r,A.v,new C.aJ(q,0.8),A.aa,r,r,r),m=x.i,l=C.c([A.rl],m),k=x.N,j=x.v,i=C.N(["change",new B.j8(s)],k,j),h=s.d
h=B.h4(C.c([A.uL],m),h==="hello","hello")
w=s.d
w=B.h4(C.c([A.qf],m),w==="math","math")
v=s.d
v=B.h4(C.c([A.u9],m),v==="fibo","fibo")
u=s.d
u=B.h4(C.c([A.v4],m),u==="oop","oop")
t=s.d
t=C.c([new B.h0(n,l,r),new B.h7("playground-sample-select",i,C.c([h,w,v,u,B.h4(C.c([A.q0],m),t==="grades","grades")],m),r)],m)
u=C.N(["title","\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd"],k,k)
v=C.N(["click",new B.j9(s)],k,j)
v=B.bj(C.c([A.BO],m),u,p,v,r,r)
u=C.N(["title","\u179b\u17bb\u1794\u179b\u1791\u17d2\u1792\u1795\u179b"],k,k)
w=C.N(["click",new B.ja(s)],k,j)
w=B.bj(C.c([A.Cd,A.BM],m),u,p,w,r,r)
u=C.N(["click",new B.jb(s)],k,j)
u=C.c([new B.w(r,r,A.wx,r,r,t,r),new B.w(r,"playground-actions",r,r,r,C.c([v,w,B.bj(C.c([A.b6,A.BJ],m),r,"btn-playground-run",u,r,r)],m),r)],m)
w=B.cx(r,A.v,new C.aJ(q,0.75),r,new B.e2(r,new C.aJ(q,0.25)),r,r)
w=C.c([B.bG(C.c([A.oz],m),r,w),s.M("\u178f\u17b6\u17c6\u1784 ","\u178f\u17b6\u17c6\u1784"),s.M(o,o),s.M("\u1794\u17be () {\n\n}","\u1794\u17be"),s.M("\u17ac\u1794\u17be () {\n\n}","\u17ac\u1794\u17be"),s.M("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n\n}","\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f"),s.M("\u1781\u178e\u17c8 () {\n\n}","\u1781\u178e\u17c8"),s.M("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i < \u17e5; i = i + \u17e1) {\n\n}","\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb"),s.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"),s.M("\u178f\u17d2\u179a\u17a1\u1794\u17cb ","\u178f\u17d2\u179a\u17a1\u1794\u17cb"),s.M("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1788\u17d2\u1798\u17c4\u17c7 {\n\n}","\u1790\u17d2\u1793\u17b6\u1780\u17cb"),s.M("\u1794\u1784\u17d2\u1780\u17be\u178f() {\n\n}","\u1794\u1784\u17d2\u1780\u17be\u178f"),s.M("\u1793\u17c1\u17c7.","\u1793\u17c1\u17c7."),s.M("\u1790\u17d2\u1798\u17b8 ","\u1790\u17d2\u1798\u17b8"),s.M("\u1794\u1793\u17d2\u178f\u1796\u17b8 ","\u1794\u1793\u17d2\u178f\u1796\u17b8"),s.M("\u1796\u17b7\u178f","\u1796\u17b7\u178f"),s.M("\u1798\u17b7\u1793\u1796\u17b7\u178f","\u1798\u17b7\u1793\u1796\u17b7\u178f"),s.M("\u1791\u1791\u17c1","\u1791\u1791\u17c1"),s.M("\u17d4","\u17d4"),s.M("\u17d5","\u17d5")],m)
j=C.c([new B.h9("playground-textarea",C.N(["spellcheck","false","placeholder","\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u1793\u17c5\u1791\u17b8\u1793\u17c1\u17c7..."],k,k),C.N(["input",new B.jc(s)],k,j),C.c([new C.a(s.e,r)],m),r)],m)
k=B.cx(r,A.v,new C.aJ(q,0.75),r,r,r,r)
k=C.c([A.BN,B.bG(C.c([new C.a(s.r,r)],m),r,k)],m)
n=s.w?A.aM:A.aO
return new B.w(r,"playground-container",r,r,r,C.c([new B.w(r,"playground-toolbar",r,r,r,u,r),new B.w(r,"playground-virtual-keys",r,r,r,w,r),new B.w(r,"playground-grid",r,r,r,C.c([new B.w(r,"playground-editor-pane",r,r,r,j,r),new B.w(r,"playground-console-pane",r,r,r,C.c([new B.w(r,"console-pane-header",r,r,r,k,r),new B.w(r,"console-pane-body",n,r,r,C.c([new C.a(s.f,r)],m),r)],m),r)],m),r)],m),r)},
M(d,e){var w=null,v=C.N(["click",new B.j7(this,d)],x.N,x.v)
return B.bj(C.c([new C.a(e,w)],x.i),w,"vk-btn",v,w,w)}}
B.co.prototype={
b8(){return new B.fI()},
bg(){return this.d.$0()},
f8(d){return this.e.$1(d)}}
B.fI.prototype={
gdK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.b.aB(this.d).toLowerCase()
if(d.length===0)return A.ab
w=C.cm("\\s+")
v=C.h8(d,w," ")
u=C.h8(d," ","")
w=x.U
t=C.ao(new C.dI(C.c(v.split(" "),x.s),x.Q.a(new B.jg()),w),w.h("h.E"))
s=C.c([],x.V)
for(r=0;r<18;++r){q=A.ab[r]
p=q.b.toLowerCase()
o=C.h8(p," ","")
n=q.c.toLowerCase()
m=q.e.toLowerCase()
l=C.h8(m," ","")
k=q.f.toLowerCase()
j=p+" "+n+" "+q.d.toLowerCase()+" "+m+" "+k
i=o+" "+l
if(D.b.D(p,v)||D.b.D(n,v))h=100
else if(D.b.D(o,u))h=90
else if(D.b.D(j,v))h=70
else h=D.b.D(i,u)?60:0
for(w=t.length,g=0,f=0;f<w;++f){e=t[f]
if(e.length===0)continue
if(D.b.D(p,e)||D.b.D(n,e))g+=3
else if(D.b.D(m,e)||D.b.D(k,e))g+=2
else if(D.b.D(o,e)||D.b.D(l,e))++g}if(w!==0&&g>0){h+=g*15
if(D.a.eO(t,new B.jh(j,i)))h+=50}if(h>0)D.a.m(s,new C.e3(q,h))}D.a.aE(s,new B.ji())
w=x.Z
w=C.ao(new C.ag(s,x.g.a(new B.jj()),w),w.h("Z.E"))
return w},
t(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="search-modal-card",e="search-modal-input",d="search-results-list"
if(!h.a.c)return A.A6
w=h.gdK()
v=x.N
u=x.v
t=C.N(["click",new B.jl(h)],v,u)
s=C.N(["role","dialog","aria-modal","true","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a"],v,v)
r=h.d
q=C.N(["placeholder","\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u17ac\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791\u178a\u17c2\u179b\u1785\u1784\u17cb\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780...","autocomplete","off","autofocus","true"],v,v)
p=C.N(["input",new B.jm(h),"keydown",new B.jn(h)],v,u)
o=C.N(["click",new B.jo(h)],v,u)
n=x.i
o=C.c([A.Cf,new B.ej(A.bW,r,e,e,q,p,g,x.e),B.bj(C.c([A.pZ],n),g,"search-kbd-esc-btn",o,g,g)],n)
p=C.c([],n)
r=w.length
if(r===0){v=B.cx(g,A.v,g,g,g,new C.dM(new C.aJ("rem",1.5)),A.op)
p.push(B.q6(C.c([new C.a('\u179a\u1780\u1798\u17b7\u1793\u1783\u17be\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb "'+h.d+'" \u17a1\u17be\u1799\u17d4',g)],n),g,g,v))}else for(m=0;m<w.length;w.length===r||(0,C.al)(w),++m){l=w[m]
q=C.N(["click",new B.jp(h,l)],v,u)
k=C.c([new B.a9(g,g,C.c([new C.a(l.b,g)],n),g),new B.a9("sidebar-badge",g,C.c([new C.a(l.d,g)],n),g)],n)
j=l.f
i=l.c
p.push(new B.a4("search-result-item",g,q,C.c([new B.w(g,"search-result-title",g,g,g,k,g),new B.w(g,"search-result-desc",g,g,g,C.c([new C.a(j.length!==0?i+" \u2014 "+j:i,g)],n),g)],n),g))}return new B.w("search-modal-backdrop","search-modal-backdrop visible",g,g,t,C.c([new B.w(f,f,g,s,g,C.c([new B.w(g,"search-input-header",g,g,g,o,g),B.lu(p,d,d),A.A2],n),g)],n),g)}}
B.f5.prototype={
t(d){var w=this,v=w.c?" mobile-open":"",u=x.N,t=x.W
return new B.h2("docs-sidebar","docs-sidebar"+v,C.N(["aria-label","\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6"],u,u),C.c([w.am(C.c([A.wr,A.ws,A.wc],t),"\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784 (Getting Started)"),w.am(C.c([A.wi,A.wk,A.wf],t),"\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 (Language Basics)"),w.am(C.c([A.we,A.wj,A.wg],t),"\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a (Control Flow)"),w.am(C.c([A.wm,A.wh],t),"\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)"),w.am(C.c([A.wn,A.wd],t),"\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb (OOP)"),w.am(C.c([A.wl,A.wo,A.wq,A.wp],t),"\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784")],x.i),null)},
am(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
x.P.a(d)
w=x.i
v=C.c([new C.a(e,i)],w)
u=C.c([],w)
for(t=d.length,s=x.N,r=x.v,q=this.d,p=0;p<d.length;d.length===t||(0,C.al)(d),++p){o=d[p]
n=o.a
m=q===n?" active":""
l=C.N(["click",new B.ih(this,o)],s,r)
k=C.c([],w)
j=o.b
if(o.c)k.push(new B.a9(i,A.wv,C.c([new C.a(j,i)],w),i))
else k.push(new C.a(j,i))
j=o.d
if(j!=null)k.push(new B.a9("sidebar-badge badge-new",i,C.c([new C.a(j,i)],w),i))
u.push(new B.a4(i,i,i,C.c([B.mT(k,"sidebar-nav-link"+m,l,"#"+n)],w),i))}return new B.w(i,"sidebar-nav-group",i,i,i,C.c([new B.w(i,"sidebar-nav-title",i,i,i,v,i),B.lu(u,"sidebar-nav-list",i)],w),i)}}
B.a6.prototype={}
B.fd.prototype={
t(d){var w,v,u,t,s,r,q,p="docs-toc",o="toc-list",n=null,m=x.N,l=C.N(["aria-label","\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7"],m,m),k=x.i,j=C.c([],k)
for(w=x.v,v=this.c,u=0;u<17;++u){t=A.kL[u]
s=t.a
r=v===s?" active":""
q=C.N(["click",new B.ip(this,t)],m,w)
j.push(new B.a4(n,n,n,C.c([B.mT(C.c([new C.a(t.b,n)],k),"toc-link"+r,q,"#"+s)],k),n))}return new B.fT(p,p,l,C.c([A.A0,B.lu(j,o,o)],k),n)}}
B.ac.prototype={}
B.I.prototype={}
B.en.prototype={
t(d){return A.bR}}
B.ew.prototype={
t(d){return A.bS}}
B.eD.prototype={
t(d){return A.bP}}
B.eE.prototype={
t(d){return A.bT}}
B.f0.prototype={
t(d){return A.bQ}}
B.D.prototype={}
B.dp.prototype={
j(d){return"NumberNode("+C.j(this.a)+")"},
ga_(){return this.a}}
B.bS.prototype={
j(d){return'StringNode("'+this.a+'")'},
ga_(){return this.a}}
B.c4.prototype={
j(d){return"BooleanNode("+this.a+")"},
ga_(){return this.a}}
B.dn.prototype={
j(d){return"NullNode()"}}
B.cK.prototype={
j(d){return"ArrayNode("+C.j(this.a)+")"}}
B.dq.prototype={
j(d){return"ObjectNode("+C.j(this.a)+")"}}
B.bt.prototype={
j(d){return"IdentifierNode("+this.a+")"}}
B.dE.prototype={
j(d){return"ThisNode()"}}
B.dF.prototype={
j(d){return"UnaryOpNode("+this.a+", "+this.b.j(0)+")"}}
B.aX.prototype={
j(d){return"BinaryOpNode("+this.a.j(0)+", "+this.b+", "+this.c.j(0)+")"}}
B.cL.prototype={
j(d){return"AssignmentNode("+this.a+", "+this.b.j(0)+")"},
ga_(){return this.b}}
B.ch.prototype={
j(d){return"MemberAccessNode("+this.a.j(0)+"."+this.b+")"},
gaf(){return this.a}}
B.dh.prototype={
j(d){return"MemberAssignmentNode("+this.a.j(0)+"."+this.b+" = "+this.c.j(0)+")"},
gaf(){return this.a},
ga_(){return this.c}}
B.cd.prototype={
j(d){return"IndexAccessNode("+this.a.j(0)+"["+this.b.j(0)+"])"},
gaf(){return this.a}}
B.d5.prototype={
j(d){return"IndexAssignmentNode("+this.a.j(0)+"["+this.b.j(0)+"] = "+this.c.j(0)+")"},
gaf(){return this.a},
ga_(){return this.c}}
B.d4.prototype={
j(d){return"FunctionCallNode("+this.a.j(0)+", "+C.j(this.b)+")"}}
B.dl.prototype={
j(d){return"NewNode("+this.a+", "+C.j(this.b)+")"}}
B.dH.prototype={
j(d){return"VarDeclNode("+this.a+", "+C.j(this.b)+")"},
ga_(){return this.b}}
B.ds.prototype={
j(d){return"PrintNode("+C.j(this.a)+")"}}
B.cM.prototype={
j(d){return"BlockNode("+C.j(this.a)+")"}}
B.cc.prototype={
j(d){return"IfNode("+this.a.j(0)+", "+this.b.j(0)+", else: "+C.j(this.c)+")"}}
B.dK.prototype={
j(d){return"WhileNode("+this.a.j(0)+", "+this.b.j(0)+")"}}
B.d3.prototype={
j(d){var w=this
return"ForNode(init: "+C.j(w.a)+", cond: "+C.j(w.b)+", inc: "+C.j(w.c)+", body: "+w.d.j(0)+")"}}
B.bs.prototype={
j(d){return"FunctionDeclNode("+this.a+"("+C.j(this.b)+"), "+this.c.j(0)+")"}}
B.ca.prototype={
j(d){return"GetterDeclNode("+this.a+", "+this.b.j(0)+")"}}
B.cq.prototype={
j(d){return"SetterDeclNode("+this.a+"("+this.b+"), "+this.c.j(0)+")"}}
B.cQ.prototype={
j(d){var w=this
return"ClassDeclNode("+w.a+" extends "+C.j(w.b)+", methods: "+C.j(w.c)+", getters: "+C.j(w.d)+", setters: "+C.j(w.e)+")"}}
B.du.prototype={
j(d){return"ReturnNode("+C.j(this.a)+")"},
ga_(){return this.a}}
B.d2.prototype={
j(d){return"ExpressionStmtNode("+this.a.j(0)+")"}}
B.br.prototype={
a9(d){var w=this.a
if(w.J(d))return w.k(0,d)
w=this.b
if(w!=null)return w.a9(d)
throw C.e(B.m("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u17a2\u1790\u17c1\u179a \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' / Undefined variable or function '"+d+"'"))},
cI(d,e){var w=this.a
if(w.J(d)){w.i(0,d,e)
return}w=this.b
if(w!=null){w.cI(d,e)
return}throw C.e(B.m("\u17a2\u1790\u17c1\u179a\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1794\u17b6\u1793\u1794\u17d2\u179a\u1780\u17b6\u179f '"+d+"' / Cannot assign to undeclared variable '"+d+"'"))}}
B.l.prototype={
$1(d){return this.b.$1(x.j.a(d))},
j(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785/BuiltinFunction "+this.a+">"}}
B.aZ.prototype={
b7(d){var w=this,v=C.F(x.N,x.z)
v.i(0,"\u1793\u17c1\u17c7",d)
v.i(0,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",d)
return new B.aZ(w.a,w.b,w.c,new B.br(v,w.d))},
$2(d,e){var w,v,u,t,s,r,q,p,o=this
x.j.a(e)
u=J.z(e)
t=u.gl(e)
s=o.b
r=s.length
if(t!==r){t=o.a
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+t+"' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1785\u17c6\u1793\u17bd\u1793 "+r+" \u1794\u17c9\u17bb\u1793\u17d2\u178f\u17c2\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793 "+u.gl(e)+" / Function '"+t+"' expected "+s.length+" arguments, got "+u.gl(e)))}w=new B.br(C.F(x.N,x.z),o.d)
for(q=0;q<s.length;++q){t=s[q]
r=u.k(e,q)
w.a.i(0,t,r)}try{d.cP(o.c.a,w)}catch(p){u=C.a0(p)
if(u instanceof B.f1){v=u
return v.a}else throw p}return null},
j(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd "+this.a+">"}}
B.bw.prototype={
bc(d){var w=this.c
if(w.J(d))return w.k(0,d)
w=this.b
if(w!=null)return w.bc(d)
return null},
bP(d){var w=this.d
if(w.J(d))return w.k(0,d)
w=this.b
if(w!=null)return w.bP(d)
return null},
cQ(d){var w=this.e
if(w.J(d))return w.k(0,d)
w=this.b
if(w!=null)return w.cQ(d)
return null},
cV(d,e){var w,v=new B.b9(this,C.F(x.N,x.z)),u=this.bc("\u1794\u1784\u17d2\u1780\u17be\u178f")
if(u!=null)u.b7(v).$2(d,e)
else if(e.length!==0){w=this.a
throw C.e(B.m("\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+w+"' \u1782\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1794\u1784\u17d2\u1780\u17be\u178f (Constructor) / Class '"+w+"' has no constructor taking arguments"))}return v},
j(d){return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a+">"}}
B.b9.prototype={
bZ(d,e){var w,v,u,t=this,s=t.a,r=s.bP(d)
if(r!=null){w=r.b7(t)
s=w.$2(e,[])
return s}v=t.b
if(v.J(d))return v.k(0,d)
u=s.bc(d)
if(u!=null)return u.b7(t)
throw C.e(B.m("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+s.a+"' / Undefined property or method '"+d+"'"))},
c0(d,e,f){var w=this.a.cQ(d)
if(w!=null){w.b7(this).$2(f,[e])
return}this.b.i(0,d,e)},
j(d){return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a.a+">"}}
B.db.prototype={
bQ(){var w,v=this.b
if(v!=null){w=" [\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb/Line "+C.j(v)
v=this.c
w=(v!=null?w+(", \u1787\u17bd\u179a/Col "+C.j(v)):w)+"]"}else w=""
return"\u1780\u17c6\u17a0\u17bb\u179f/Error"+w+": "+this.a},
cM(){var w,v=this.b
if(v==null)v=1
w=this.c
if(w==null)w=1
return"<source>:"+v+":"+w+": error: "+this.a},
j(d){return this.bQ()}}
B.i2.prototype={}
B.i8.prototype={}
B.dv.prototype={}
B.f1.prototype={}
B.hS.prototype={
f_(d){var w,v,u,t,s
x.t.a(d)
for(w=d.length,v=null,u=0;u<d.length;d.length===w||(0,C.al)(d),++u){t=d[u]
s=this.b
s===$&&C.am()
v=this.E(t,s)}return v},
E(d,e){var w,v,u,t=this
if(d instanceof B.dp)return d.a
if(d instanceof B.bS)return d.a
if(d instanceof B.c4)return d.a
if(d instanceof B.dn)return null
if(d instanceof B.cK)return t.eg(d,e)
if(d instanceof B.dq)return t.eu(d,e)
if(d instanceof B.bt)return t.em(d,e)
if(d instanceof B.dE)return t.ex(d,e)
if(d instanceof B.dF)return t.ey(d,e)
if(d instanceof B.aX)return t.ei(d,e)
if(d instanceof B.cL)return t.eh(d,e)
if(d instanceof B.ch)return t.eq(d,e)
if(d instanceof B.dh)return t.er(d,e)
if(d instanceof B.cd)return t.eo(d,e)
if(d instanceof B.d5)return t.ep(d,e)
if(d instanceof B.d4)return t.el(d,e)
if(d instanceof B.dl)return t.es(d,e)
if(d instanceof B.dH){w=d.b
v=w!=null?t.E(w,e):null
e.a.i(0,d.a,v)
return v}if(d instanceof B.ds)return t.ev(d,e)
if(d instanceof B.cM)return t.cP(d.a,new B.br(C.F(x.N,x.z),e))
if(d instanceof B.cc)return t.en(d,e)
if(d instanceof B.dK)return t.ez(d,e)
if(d instanceof B.d3)return t.ek(d,e)
if(d instanceof B.bs){w=d.a
u=new B.aZ(w,d.b,d.c,e)
e.a.i(0,w,u)
return u}if(d instanceof B.cQ)return t.ej(d,e)
if(d instanceof B.du)return t.ew(d,e)
if(d instanceof B.d2)return t.E(d.a,e)
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1790\u17d2\u1793\u17b6\u17c6\u1784 AST \u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Unsupported AST node type: "+C.bE(d).j(0)))},
cP(d,e){var w,v,u,t,s,r=this
x.t.a(d)
t=r.b
t===$&&C.am()
w=t
r.b=e
try{v=null
for(t=d.length,s=0;s<d.length;d.length===t||(0,C.al)(d),++s){u=d[s]
v=r.E(u,e)}t=v
return t}finally{r.b=x.A.a(w)}},
ap(d){var w
if(d!=null){w=J.bm(d)
w=w.R(d,!1)||w.R(d,0)||w.R(d,"")}else w=!0
if(w)return!1
return!0},
eg(d,e){var w=d.a,v=C.a1(w),u=v.h("ag<1,@>")
w=C.ao(new C.ag(w,v.h("@(1)").a(new B.hT(this,e)),u),u.h("Z.E"))
return w},
eu(d,e){var w,v,u,t,s=C.F(x.N,x.z)
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.al)(w),++u){t=w[u]
s.i(0,t.a,this.E(t.b,e))}return s},
em(d,e){var w,v,u,t
try{v=e.a9(d.a)
return v}catch(u){if(C.a0(u) instanceof B.dv){try{w=e.a9("\u1793\u17c1\u17c7")
if(w instanceof B.b9){v=d.a
if(w.a.bP(v)!=null||w.b.J(v)||w.a.bc(v)!=null){v=w.bZ(v,this)
return v}}}catch(t){}throw u}else throw u}},
ex(d,e){var w,v
try{w=e.a9("\u1793\u17c1\u17c7")
return w}catch(v){try{w=e.a9("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6")
return w}catch(v){w=B.m("\u1796\u17b6\u1780\u17d2\u1799 '\u1793\u17c1\u17c7' \u17ac '\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17b6\u1793\u178f\u17c2\u1780\u17d2\u1793\u17bb\u1784\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1793\u17c1\u17c7'/'\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' can only be used inside class methods")
throw C.e(w)}}},
ey(d,e){var w=this.E(d.b,e),v=d.a
if(v==="!"||v==="\u1798\u17b7\u1793")return!this.ap(w)
if(v==="-"){if(typeof w=="number")return-w
throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u178a\u1780 '-' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '-' requires a numeric operand"))}throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a unary \u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+v+"' / Unknown unary operator '"+v+"'"))},
ei(d,e){var w,v,u,t=this,s="' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '",r="' requires numeric operands",q=t.E(d.a,e),p=d.b
if(p==="\u1793\u17b7\u1784"||p==="&&"){if(!t.ap(q))return q
return t.E(d.c,e)}if(p==="\u17ac"||p==="||"){if(t.ap(q))return q
return t.E(d.c,e)}w=t.E(d.c,e)
if(p==="==")return J.aa(q,w)
if(p==="!=")return!J.aa(q,w)
if(p==="+"){if(typeof q=="string"||typeof w=="string")return B.c2(q)+B.c2(w)
if(typeof q=="number"&&typeof w=="number")return q+w
throw C.e(B.m("\u1780\u17b6\u179a\u1794\u17bc\u1780 '+' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u179b\u17be\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u179f\u179a / '+' requires numbers or strings"))}v=p==="-"
if(v||p==="*"||p==="/"||p==="%"){if(typeof q!="number"||typeof w!="number")throw C.e(B.m("\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a '"+p+s+p+r))
if(v)return q-w
if(p==="*")return q*w
if(p==="/"){if(w===0)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17c2\u1780\u1793\u17b9\u1784\u179f\u17bc\u1793\u17d2\u1799\u1794\u17b6\u1793\u1791\u17c1 / Division by zero"))
u=q/w
return u===D.c.aS(u)?D.c.Y(u):u}if(p==="%")return D.c.dc(q,w)}v=p==="<"
if(v||p===">"||p==="<="||p===">="){if(typeof q!="number"||typeof w!="number")throw C.e(B.m("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794 '"+p+s+p+r))
if(v)return q<w
if(p===">")return q>w
if(p==="<=")return q<=w
if(p===">=")return q>=w}throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+p+"' / Unknown binary operator '"+p+"'"))},
eh(d,e){var w,v,u,t=this.E(d.b,e)
try{e.cI(d.a,t)}catch(v){if(C.a0(v) instanceof B.dv){try{w=e.a9("\u1793\u17c1\u17c7")
if(w instanceof B.b9){w.c0(d.a,t,this)
return t}}catch(u){}throw v}else throw v}return t},
eq(d,e){var w=this.E(d.a,e)
if(w instanceof B.b9)return w.bZ(d.b,this)
if(x.f.b(w))return w.k(0,d.b)
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member access on invalid target"))},
er(d,e){var w=this.E(d.a,e),v=this.E(d.c,e)
if(w instanceof B.b9){w.c0(d.b,v,this)
return v}if(x.f.b(w)){w.i(0,d.b,v)
return v}throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member assignment on invalid target"))},
eo(d,e){var w,v,u=this.E(d.a,e),t=this.E(d.b,e)
if(x.j.b(u)){if(typeof t!="number")throw C.e(B.m(y.m))
w=D.c.Y(t)
if(w<0||w>=J.an(u)){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}return J.lC(u,w)}if(typeof u=="string"){if(typeof t!="number")throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / String index must be a number"))
w=D.c.Y(t)
if(w<0||w>=u.length){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / String index out of bounds ("+v+")"))}if(!(w>=0&&w<u.length))return C.q(u,w)
return u[w]}if(x.f.b(u))return u.k(0,J.v(t))
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1791\u17b6\u1789\u1799\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable"))},
ep(d,e){var w,v,u=this.E(d.a,e),t=this.E(d.b,e),s=this.E(d.c,e)
if(x.j.b(u)){if(typeof t!="number")throw C.e(B.m(y.m))
w=D.c.Y(t)
if(w<0||w>=J.an(u)){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}J.hc(u,w,s)
return s}if(x.f.b(u)){u.i(0,J.v(t),s)
return s}throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable for assignment"))},
el(d,e){var w=this,v=w.E(d.a,e),u=d.b,t=C.a1(u),s=t.h("ag<1,@>"),r=C.ao(new C.ag(u,t.h("@(1)").a(new B.hU(w,e)),s),s.h("Z.E"))
if(v instanceof B.bw)return v.cV(w,r)
if(v instanceof B.aZ)return v.$2(w,r)
if(v instanceof B.l)return v.b.$1(r)
throw C.e(B.m("\u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u1790\u17d2\u1793\u17b6\u1780\u17cb / Target is not callable"))},
es(d,e){var w,v,u,t=d.a,s=e.a9(t)
if(!(s instanceof B.bw))throw C.e(B.m("'"+t+"' \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class) \u1791\u17c1 / '"+t+"' is not a class"))
t=d.b
w=C.a1(t)
v=w.h("ag<1,@>")
u=C.ao(new C.ag(t,w.h("@(1)").a(new B.hV(this,e)),v),v.h("Z.E"))
return s.cV(this,u)},
ej(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.b
if(h!=null){w=e.a9(h)
if(!(w instanceof B.bw))throw C.e(B.m("\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 '"+h+"' \u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Parent class '"+h+"' is not a class"))
v=w}else v=null
h=x.N
u=x.n
t=C.F(h,u)
for(s=d.c,r=s.length,q=0;q<s.length;s.length===r||(0,C.al)(s),++q){p=s[q]
o=p.a
t.i(0,o,new B.aZ(o,p.b,p.c,e))}n=C.F(h,u)
for(s=d.d,r=s.length,o=x.s,q=0;q<s.length;s.length===r||(0,C.al)(s),++q){m=s[q]
l=m.a
n.i(0,l,new B.aZ(l,C.c([],o),m.b,e))}k=C.F(h,u)
for(h=d.e,u=h.length,q=0;q<h.length;h.length===u||(0,C.al)(h),++q){j=h[q]
s=j.a
k.i(0,s,new B.aZ(s,C.c([j.b],o),j.c,e))}h=d.a
i=new B.bw(h,v,t,n,k)
e.a.i(0,h,i)
return i},
ev(d,e){var w=d.a,v=C.a1(w),u=v.h("ag<1,@>"),t=C.ao(new C.ag(w,v.h("@(1)").a(new B.hW(this,e)),u),u.h("Z.E"))
return x.R.a(e.a9("\u1794\u1784\u17d2\u17a0\u17b6\u1789")).b.$1(t)},
en(d,e){var w,v=this
if(v.ap(v.E(d.a,e)))return v.E(d.b,e)
else{w=d.c
if(w!=null)return v.E(w,e)}return null},
ez(d,e){var w,v,u
for(w=d.a,v=d.b,u=null;this.ap(this.E(w,e));)u=this.E(v,e)
return u},
ek(d,e){var w,v,u,t,s,r=this,q=new B.br(C.F(x.N,x.z),e),p=d.a
if(p!=null)r.E(p,q)
for(p=d.c,w=p!=null,v=d.d,u=d.b,t=u!=null,s=null;;){if(t)if(!r.ap(r.E(u,q)))break
s=r.E(v,q)
if(w)r.E(p,q)}return s},
ew(d,e){var w=d.a
throw C.e(new B.f1(w!=null?this.E(w,e):null))}}
B.i1.prototype={
gl(d){var w=this.e
w===$&&C.am()
return w},
a2(d){var w=this.b+d,v=this.e
v===$&&C.am()
if(w>=v)return""
v=this.a
if(!(w<v.length))return C.q(v,w)
return v[w]},
U(){return this.a2(0)},
H(){var w=this,v=w.U();++w.b
if(v==="\n"){++w.c
w.d=1}else ++w.d
return v},
b2(d){var w,v=d.length
if(v===0)return!1
if(0>=v)return C.q(d,0)
w=d.charCodeAt(0)
return w>=48&&w<=57||A.J.J(d)},
cs(d){var w,v=d.length
if(v===0)return!1
if(d==="_")return!0
if(0>=v)return C.q(d,0)
w=d.charCodeAt(0)
if(!(w>=65&&w<=90))v=w>=97&&w<=122
else v=!0
if(v)return!0
if(!(w>=6016&&w<=6143))v=w>=6624&&w<=6655
else v=!0
return v},
d4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=C.c([],x.S),a1=x.N,a2=x.d,a3=x.s
for(;;){w=d.b
v=d.e
v===$&&C.am()
if(!(w<v))break
A:{u=d.U()
if(u===" "||u==="\t"||u==="\r"||u==="\n"||u==="\u200b"||u==="\xa0"||u==="\ufeff"){d.H()
break A}if(u!=="#")w=u==="/"&&d.a2(1)==="/"
else w=!0
if(w){for(;;){if(!(d.U().length!==0&&d.U()!=="\n"))break
d.H()}break A}if(u==="/"&&d.a2(1)==="*"){d.H()
d.H()
for(;;){if(d.U().length!==0)w=!(d.U()==="*"&&d.a2(1)==="/")
else w=!1
if(!w)break
d.H()}if(d.U().length!==0){d.H()
d.H()}break A}t=d.c
s=d.d
if(d.b2(u)){r=""
q=!1
for(;;){if(!d.b2(d.U()))w=d.U()==="."&&!q&&d.b2(d.a2(1))
else w=!0
if(!w)break
p=d.H()
if(p===".")q=!0
r+=p}for(w=r.length,o=0,v="";o<w;++o){n=r[o]
m=A.J.k(0,n)
v+=m==null?n:m}l=v.charCodeAt(0)==0?v:v
D.a.m(a0,new B.aq(A.ar,q?B.pO(l):B.q3(l),t,s))
break A}if(u==='"'||u==="'"||u==="\u201c"||u==="\u201d"||u==="\u2018"||u==="\u2019"){k=d.H()
j=k==="\u201c"||k==="\u201d"||k==="\u2018"||k==="\u2019"?A.mS:C.c([k],a3)
i=""
for(;;){if(!(d.U().length!==0&&!D.a.D(j,d.U())))break
p=d.H()
if(p==="\\"){h=d.H()
if(h==="n")i+="\n"
else if(h==="t")i+="\t"
else if(h==="\\")i+="\\"
else{D.a.D(j,h)
i+=h}}else i+=p}if(d.U().length===0)throw C.e(B.lX("String \u1798\u17b7\u1793\u1794\u17b6\u1793\u1794\u17b7\u1791 / Unclosed string literal",t,s))
d.H()
D.a.m(a0,new B.aq(A.as,i,t,s))
break A}if(u==="="&&d.a2(1)==="="){d.H()
d.H()
D.a.m(a0,new B.aq(A.aE,"==",t,s))
break A}if(u==="!"&&d.a2(1)==="="){d.H()
d.H()
D.a.m(a0,new B.aq(A.aF,"!=",t,s))
break A}if(u==="<"&&d.a2(1)==="="){d.H()
d.H()
D.a.m(a0,new B.aq(A.aI,"<=",t,s))
break A}if(u===">"&&d.a2(1)==="="){d.H()
d.H()
D.a.m(a0,new B.aq(A.aJ,">=",t,s))
break A}if(u==="&"&&d.a2(1)==="&"){d.H()
d.H()
D.a.m(a0,new B.aq(A.L,"&&",t,s))
break A}if(u==="|"&&d.a2(1)==="|"){d.H()
d.H()
D.a.m(a0,new B.aq(A.M,"||",t,s))
break A}g=C.N(["+",A.aA,"-",A.Q,"*",A.aB,"/",A.aC,"%",A.aD,"=",A.R,"<",A.aG,">",A.aH,"!",A.N,".",A.S,"\uff0e",A.S,"(",A.h,")",A.d,"{",A.y,"}",A.q,"[",A.U,"]",A.z,",",A.l,";",A.j,"\u17d6",A.G,":",A.G,"\u17d4",A.j],a1,a2)
if(g.J(u)){d.H()
w=g.k(0,u)
w.toString
D.a.m(a0,new B.aq(w,u,t,s))
break A}if(d.cs(u)){f=""
for(;;){if(d.U().length!==0){w=d.U()
w=d.cs(w)||d.b2(w)}else w=!1
if(!w)break
f+=d.H()}if(A.ag.J(f)){w=A.ag.k(0,f)
w.toString
D.a.m(a0,new B.aq(w,f,t,s))}else D.a.m(a0,new B.aq(A.k,f,t,s))
break A}e=d.H()
if(0>=e.length)return C.q(e,0)
throw C.e(B.lX("\u17a2\u1780\u17d2\u179f\u179a/\u179f\u1789\u17d2\u1789\u17b6\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+e+"' (U+"+D.b.d_(D.f.fm(e.charCodeAt(0),16).toUpperCase(),4,"0")+") / Unexpected character '"+e+"'",t,s))}}D.a.m(a0,new B.aq(A.u,null,d.c,d.d))
return a0}}
B.eX.prototype={
n(){var w=this.b,v=this.a
if(w>=v.length)return D.a.gcX(v)
return v[w]},
q(d){if(D.a.D(x.b.a(d),this.n().a)){this.a0()
return!0}return!1},
a0(){var w,v=this.a,u=this.b,t=v.length
if(!(u<t))return C.q(v,u)
w=v[u]
if(u<t-1)this.b=u+1
return w},
v(d,e){var w,v
if(this.n().a===d)return this.a0()
w=this.n()
v=w.c
throw C.e(B.cj(e+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
ag(d){var w,v,u=this
if(u.n().a===A.k||u.n().a===A.p||u.n().a===A.o)return u.a0()
w=u.n()
v=w.c
throw C.e(B.cj(d+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
ao(d){var w,v,u=this
if(u.n().a===A.k||u.n().a===A.p||u.n().a===A.o)return u.a0()
w=u.n()
v=w.c
throw C.e(B.cj(d+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
d0(){var w,v=C.c([],x.I)
while(this.n().a!==A.u){w=this.cC()
if(w!=null)D.a.m(v,w)}return v},
cC(){var w,v,u,t,s,r,q,p,o=this,n=null,m="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'"
for(w=x.B;o.q(C.c([A.j],w)););if(o.n().a===A.u)return n
if(o.n().a===A.F)return o.cH()
if(o.n().a===A.T)return o.dW()
if(o.n().a===A.V){o.v(A.V,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u17be' / Expected '\u1794\u17be'")
v=o.q(C.c([A.h],w))
u=o.I()
if(v)o.v(A.d,m)
t=o.T()
if(o.n().a===A.H)s=o.ck()
else s=o.q(C.c([A.W],w))?o.T():n
return new B.cc(u,t,s)}if(o.n().a===A.X){o.v(A.X,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1781\u178e\u17c8' / Expected '\u1781\u178e\u17c8'")
v=o.q(C.c([A.h],w))
u=o.I()
if(v)o.v(A.d,m)
return new B.dK(u,o.T())}if(o.n().a===A.Y){o.v(A.Y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb' / Expected '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb'")
o.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected '(' in for loop")
if(o.n().a!==A.j)r=o.n().a===A.F?o.cH():o.cm()
else{o.a0()
r=n}u=o.n().a!==A.j?o.I():n
o.v(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ';' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ';'")
q=o.n().a!==A.d?o.I():n
o.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ')'")
return new B.d3(r,u,q,o.T())}if(o.n().a===A.x||o.n().a===A.P)return o.dL()
if(o.n().a===A.O)return o.dz()
if(o.n().a===A.K){o.v(A.K,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17d2\u179a\u17a1\u1794\u17cb' / Expected '\u178f\u17d2\u179a\u17a1\u1794\u17cb'")
p=o.n().a!==A.j&&o.n().a!==A.q&&o.n().a!==A.u?o.I():n
o.q(C.c([A.j],w))
return new B.du(p)}if(o.n().a===A.y)return o.T()
return o.cm()},
cH(){var w,v,u,t=this
t.v(A.F,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17b6\u17c6\u1784' / Expected '\u178f\u17b6\u17c6\u1784'")
w=t.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1790\u17c1\u179a / Expected variable name")
v=x.B
u=t.q(C.c([A.R],v))?t.I():null
t.q(C.c([A.j],v))
return new B.dH(J.v(w.b),u)},
dW(){var w,v,u=this
u.v(A.T,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u1784\u17d2\u17a0\u17b6\u1789' / Expected '\u1794\u1784\u17d2\u17a0\u17b6\u1789'")
w=C.c([],x.I)
v=x.B
if(u.q(C.c([A.h],v))){if(u.n().a!==A.d){D.a.m(w,u.I())
while(u.q(C.c([A.l],v)))D.a.m(w,u.I())}u.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791 / Expected ')'")}else{D.a.m(w,u.I())
while(u.q(C.c([A.l],v)))D.a.m(w,u.I())}u.q(C.c([A.j],v))
return new B.ds(w)},
ck(){var w,v,u,t,s,r=this
r.v(A.H,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17ac\u1794\u17be' / Expected '\u17ac\u1794\u17be'")
w=x.B
v=r.q(C.c([A.h],w))
u=r.I()
if(v)r.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'")
t=r.T()
if(r.n().a===A.H)s=r.ck()
else s=r.q(C.c([A.W],w))?r.T():null
return new B.cc(u,t,s)},
dL(){var w,v,u,t,s=this,r=y.c,q=x.B
if(!(s.q(C.c([A.x],q))||s.q(C.c([A.P],q)))){w=s.n()
throw C.e(B.cj("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' / Expected '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd'",w.c,w.d))}v=s.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected function name")
s.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.c([],x.s)
if(s.n().a!==A.d){D.a.m(u,J.v(s.v(A.k,r).b))
while(s.q(C.c([A.l],q)))D.a.m(u,J.v(s.v(A.k,r).b))}s.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
t=s.T()
return new B.bs(J.v(v.b),u,t)},
dz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7 Getter / Expected getter name",h="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",g="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7 Setter / Expected setter name",f="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('",e="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Setter / Expected parameter name for setter",d=y.c
j.v(A.O,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1790\u17d2\u1793\u17b6\u1780\u17cb' / Expected '\u1790\u17d2\u1793\u17b6\u1780\u17cb'")
w=j.ag("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected class name")
v=x.B
u=j.q(C.c([A.az],v))?J.v(j.ag("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 / Expected parent class name").b):null
j.v(A.y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' \u178a\u17be\u1798\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '{' for class body")
t=C.c([],x._)
s=C.c([],x.x)
r=C.c([],x.k)
q=x.s
for(;;){if(!(j.n().a!==A.q&&j.n().a!==A.u))break
if(j.q(C.c([A.p],v))){p=j.ao(i)
if(j.q(C.c([A.h],v)))j.v(A.d,h)
o=j.T()
D.a.m(s,new B.ca(J.v(p.b),o))}else if(j.q(C.c([A.o],v))){p=j.ao(g)
j.v(A.h,f)
n=j.ag(e)
j.v(A.d,h)
o=j.T()
D.a.m(r,new B.cq(J.v(p.b),J.v(n.b),o))}else if(j.q(C.c([A.P,A.x],v)))if(j.q(C.c([A.p],v))){p=j.ao(i)
if(j.q(C.c([A.h],v)))j.v(A.d,h)
o=j.T()
D.a.m(s,new B.ca(J.v(p.b),o))}else if(j.q(C.c([A.o],v))){p=j.ao(g)
j.v(A.h,f)
n=j.ag(e)
j.v(A.d,h)
o=j.T()
D.a.m(r,new B.cq(J.v(p.b),J.v(n.b),o))}else{m=j.ao("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected method/function name")
j.v(A.h,f)
l=C.c([],q)
if(j.n().a!==A.d){D.a.m(l,J.v(j.ag(d).b))
while(j.q(C.c([A.l],v)))D.a.m(l,J.v(j.ag(d).b))}j.v(A.d,h)
o=j.T()
D.a.m(t,new B.bs(J.v(m.b),l,o))}else if(j.n().a===A.k||j.n().a===A.p||j.n().a===A.o){m=j.a0()
j.v(A.h,f)
l=C.c([],q)
if(j.n().a!==A.d){D.a.m(l,J.v(j.ag(d).b))
while(j.q(C.c([A.l],v)))D.a.m(l,J.v(j.ag(d).b))}j.v(A.d,h)
o=j.T()
D.a.m(t,new B.bs(J.v(m.b),l,o))}else{k=j.n()
throw C.e(B.cj("\u179f\u1798\u17b6\u1787\u17b7\u1780\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+C.j(k.b)+"' / Invalid member definition in class",k.c,k.d))}}j.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '}' for class body")
return new B.cQ(J.v(w.b),u,t,s,r)},
T(){var w,v,u=this
u.v(A.y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' / Expected '{'")
w=C.c([],x.I)
for(;;){if(!(u.n().a!==A.q&&u.n().a!==A.u))break
v=u.cC()
if(v!=null)D.a.m(w,v)}u.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1794\u17d2\u179b\u17bb\u1780 / Expected '}'")
return new B.cM(w)},
cm(){var w=this.I()
this.q(C.c([A.j],x.B))
return new B.d2(w)},
I(){var w,v,u=this,t=u.dS()
if(u.q(C.c([A.R],x.B))){w=u.I()
if(t instanceof B.bt)return new B.cL(t.a,w)
else if(t instanceof B.ch)return new B.dh(t.a,t.b,w)
else if(t instanceof B.cd)return new B.d5(t.a,t.b,w)
v=u.n()
throw C.e(B.cj("\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Invalid assignment target",v.c,v.d))}return t},
dS(){var w,v=this.cu()
for(w=x.B;this.q(C.c([A.M],w));)v=new B.aX(v,"\u17ac",this.cu())
return v},
cu(){var w,v=this.cl()
for(w=x.B;this.q(C.c([A.L],w));)v=new B.aX(v,"\u1793\u17b7\u1784",this.cl())
return v},
cl(){var w=this,v=w.ci()
for(;;){if(!(w.n().a===A.aE||w.n().a===A.aF))break
v=new B.aX(v,J.v(w.a0().b),w.ci())}return v},
ci(){var w=this,v=w.cD()
for(;;){if(!(w.n().a===A.aG||w.n().a===A.aH||w.n().a===A.aI||w.n().a===A.aJ))break
v=new B.aX(v,J.v(w.a0().b),w.cD())}return v},
cD(){var w=this,v=w.cn()
for(;;){if(!(w.n().a===A.aA||w.n().a===A.Q))break
v=new B.aX(v,J.v(w.a0().b),w.cn())}return v},
cn(){var w=this,v=w.bG()
for(;;){if(!(w.n().a===A.aB||w.n().a===A.aC||w.n().a===A.aD))break
v=new B.aX(v,J.v(w.a0().b),w.bG())}return v},
bG(){var w,v,u=this
if(u.n().a===A.N||u.n().a===A.Q){w=u.a0()
v=u.bG()
return new B.dF(J.v(w.b),v)}return u.dv()},
dv(){var w,v,u,t,s=this,r=s.bE()
for(w=x.B,v=x.I;;)if(s.q(C.c([A.h],w))){u=C.c([],v)
if(s.n().a!==A.d){D.a.m(u,s.I())
while(s.q(C.c([A.l],w)))D.a.m(u,s.I())}s.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
r=new B.d4(r,u)}else if(s.q(C.c([A.S],w)))r=new B.ch(r,J.v(s.ao("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17b6\u1787\u17b7\u1780 / Expected member name after '.'").b))
else if(s.q(C.c([A.U],w))){t=s.I()
s.v(A.z,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
r=new B.cd(r,t)}else break
return r},
bE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",j="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ':' / Expected ':'",i=x.B
if(l.q(C.c([A.ar],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.q(i,w)
return new B.dp(C.lg(i[w].b))}if(l.q(C.c([A.as],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.q(i,w)
return new B.bS(J.v(i[w].b))}if(l.q(C.c([A.at],i)))return A.bb
if(l.q(C.c([A.au],i)))return A.ba
if(l.q(C.c([A.av],i)))return A.bj
if(l.q(C.c([A.aw,A.ax],i)))return A.bl
if(l.q(C.c([A.k,A.p,A.o],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.q(i,w)
return new B.bt(J.v(i[w].b))}if(l.q(C.c([A.ay],i))){v=l.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 '\u1790\u17d2\u1798\u17b8' / Expected class name after '\u1790\u17d2\u1798\u17b8'")
l.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.c([],x.I)
if(l.n().a!==A.d){D.a.m(u,l.I())
while(l.q(C.c([A.l],i)))D.a.m(u,l.I())}l.v(A.d,k)
return new B.dl(J.v(v.b),u)}if(l.q(C.c([A.h],i))){t=l.I()
l.v(A.d,k)
return t}if(l.q(C.c([A.U],i))){s=C.c([],x.I)
if(l.n().a!==A.z){D.a.m(s,l.I())
while(l.q(C.c([A.l],i)))D.a.m(s,l.I())}l.v(A.z,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
return new B.cK(s)}if(l.q(C.c([A.y],i))){r=C.c([],x.l)
if(l.n().a!==A.z&&l.n().a!==A.q){q=l.bE()
if(q instanceof B.bS)p=q.a
else p=q instanceof B.bt?q.a:q.j(0)
l.v(A.G,j)
w=x.J
D.a.m(r,new C.S(p,l.I(),w))
while(l.q(C.c([A.l],i))){o=l.bE()
if(o instanceof B.bS)n=o.a
else n=o instanceof B.bt?o.a:o.j(0)
l.v(A.G,j)
D.a.m(r,new C.S(n,l.I(),w))}}l.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' / Expected '}'")
return new B.dq(r)}m=l.n()
throw C.e(B.cj("\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 / Syntax error near '"+C.j(m.b)+"'",m.c,m.d))}}
B.d1.prototype={}
B.cO.prototype={}
B.u.prototype={
ab(){return"TokenType."+this.b}}
B.aq.prototype={
j(d){var w=this
return"Token("+w.a.j(0)+", "+C.j(w.b)+", "+w.c+":"+w.d+")"}}
var z=a.updateTypes(["@(D)","~()","~(i)","f(+(I,f),+(I,f))","I(+(I,f))","f()","W<i,~(E)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<B?>"])
B.ia.prototype={
$0(){return D.c.cT(1000*this.a.now())},
$S:35}
B.hn.prototype={
$0(){var w=this.a
w.L(new B.hm(w))},
$S:0}
B.hm.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
B.hh.prototype={
$0(){var w=this.a,v=!w.r
w.r=v
B.n4(v?"dark":"light")},
$S:0}
B.hg.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
B.hf.prototype={
$0(){var w=this.a
w.f=this.b
w.d=!1},
$S:0}
B.hk.prototype={
$0(){var w=this.a
w.L(new B.hj(w))},
$S:0}
B.hj.prototype={
$0(){this.a.e=!0},
$S:0}
B.hl.prototype={
$0(){var w=this.a
w.L(new B.hi(w))},
$S:0}
B.hi.prototype={
$0(){this.a.e=!1},
$S:0}
B.iC.prototype={
$0(){this.a.d=!0},
$S:0}
B.iD.prototype={
$0(){var w=this.a
if(w.c!=null)w.L(new B.iB(w))},
$S:0}
B.iB.prototype={
$0(){this.a.d=!1},
$S:0}
B.iE.prototype={
$0(){this.a.e=!0},
$S:0}
B.iF.prototype={
$0(){var w,v,u=this.a
u.e=!1
u.f=!0
w=this.b
u.w=D.f.aq(w.w.a,1000)
v=w.a==="success"
u.x=!v
if(v){w=w.b
u.r=w.length===0?"(\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":w}else{w=w.d
u.r=w==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Unknown Execution Error)":w}},
$S:0}
B.iG.prototype={
$0(){var w=this.a
w.e=!1
w.x=w.f=!0
w.r="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.w=0},
$S:0}
B.iH.prototype={
$1(d){C.t(d)
return this.a.dN()},
$S:2}
B.iI.prototype={
$1(d){C.t(d)
return this.a.dO()},
$S:2}
B.hN.prototype={
$1(d){C.t(d)
return this.a.c.$0()},
$S:2}
B.hO.prototype={
$1(d){C.t(d)
return this.a.d.$0()},
$S:2}
B.hP.prototype={
$1(d){C.t(d)
return this.a.e.$0()},
$S:2}
B.j3.prototype={
$0(){var w=this.a,v=this.b
w.d=v
v=A.nA.k(0,v)
w.e=v==null?"":v
w.f='\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1795\u17d2\u1791\u17bb\u1780\u17d4 \u1785\u17bb\u1785 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4'
w.w=!1
w.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"},
$S:0}
B.j2.prototype={
$0(){var w=this.a
w.e=w.e+this.b},
$S:0}
B.j4.prototype={
$0(){this.a.r="\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a..."},
$S:0}
B.j5.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r=""+D.f.aq(v.w.a,1000)+"ms"
if(u){v=v.b
w.f=v.length===0?"(\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":v}else{v=v.d
w.f=v==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Execution Error)":v}},
$S:0}
B.j6.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.j_.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r="Syntax Check"
if(u)w.f="\u2713 \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u179b\u17d2\u17a2! (Parsed "+v.b+" tokens cleanly)"
else{v=v.d
w.f="\u2717 \u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u17d6 "+(v==null?"Invalid syntax":v)}},
$S:0}
B.j0.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.j1.prototype={
$0(){var w=this.a
w.f=""
w.r="\u1794\u17b6\u1793\u179f\u1798\u17d2\u17a2\u17b6\u178f"
w.w=!1},
$S:0}
B.j8.prototype={
$1(d){var w=d.gaf()
return this.a.dT(C.j(w==null?null:w.ga_()))},
$S:4}
B.j9.prototype={
$1(d){C.t(d)
return this.a.dw()},
$S:2}
B.ja.prototype={
$1(d){C.t(d)
return this.a.dA()},
$S:2}
B.jb.prototype={
$1(d){C.t(d)
return this.a.e0()},
$S:2}
B.jc.prototype={
$1(d){var w=d.gaf()
w=w==null?null:w.ga_()
this.a.e=C.j(w==null?"":w)},
$S:4}
B.j7.prototype={
$1(d){C.t(d)
return this.a.dQ(this.b)},
$S:2}
B.jg.prototype={
$1(d){return C.a_(d).length!==0},
$S:11}
B.jh.prototype={
$1(d){C.a_(d)
return D.b.D(this.a,d)||D.b.D(this.b,d)},
$S:11}
B.ji.prototype={
$2(d,e){var w=x.X
w.a(d)
return D.f.a6(w.a(e).b,d.b)},
$S:z+3}
B.jj.prototype={
$1(d){return x.X.a(d).a},
$S:z+4}
B.jl.prototype={
$1(d){if(J.aa(d.gaf(),d.gfu()))this.a.a.bg()},
$S:4}
B.jm.prototype={
$1(d){var w=this.a
w.L(new B.jk(w,d))},
$S:4}
B.jk.prototype={
$0(){var w=this.b.gaf()
w=w==null?null:w.ga_()
this.a.d=C.j(w==null?"":w)},
$S:0}
B.jn.prototype={
$1(d){if(J.aa(d.gcW(),"Escape"))this.a.a.bg()},
$S:4}
B.jo.prototype={
$1(d){C.t(d)
return this.a.a.bg()},
$S:2}
B.jp.prototype={
$1(d){var w
C.t(d)
w=this.a
w.a.f8(this.b.a)
w.a.bg()},
$S:2}
B.ih.prototype={
$1(d){C.t(d)
return this.a.e.$1(this.b.a)},
$S:2}
B.ip.prototype={
$1(d){C.t(d)
return this.a.d.$1(this.b.a)},
$S:2}
B.kK.prototype={
$1(d){C.t(d)
if((C.bD(d.metaKey)||C.bD(d.ctrlKey))&&C.a_(d.key)==="k"){d.preventDefault()
this.a.$0()}},
$S:37}
B.ku.prototype={
$1(d){return B.c2(d)},
$S:6}
B.kv.prototype={
$1(d){x.Y.a(d)
return'"'+C.j(d.a)+'": '+B.c2(d.b)},
$S:39}
B.ka.prototype={
$1(d){this.a.$1(J.kO(x.j.a(d),new B.kb(),x.N).S(0," ")+"\n")
return null},
$S:1}
B.kb.prototype={
$1(d){return B.c2(d)},
$S:6}
B.k3.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires 1 argument"))
v=w.k(d,0)
if(typeof v=="string")return v.length
if(u.b(v))return J.an(v)
if(x.f.b(v))return v.gl(v)
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u17a2\u1780\u17d2\u179f\u179a \u1794\u1789\u17d2\u1787\u17b8 \u17ac\u179c\u178f\u17d2\u1790\u17bb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires string, array, or object"))},
$S:1}
B.kq.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))return"\u1791\u1791\u17c1"
v=w.k(d,0)
if(v==null)return"\u1791\u1791\u17c1"
if(C.fS(v))return"\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6"
if(typeof v=="number")return"\u179b\u17c1\u1781"
if(typeof v=="string")return"\u17a2\u1780\u17d2\u179f\u179a"
if(u.b(v))return"\u1794\u1789\u17d2\u1787\u17b8"
if(x.f.b(v))return"\u179c\u178f\u17d2\u1790\u17bb"
if(v instanceof B.b9)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a.a+")"
if(v instanceof B.bw)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a+")"
return"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"},
$S:1}
B.jT.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return Math.abs(v)},
$S:1}
B.kk.prototype={
$1(d){var w,v,u
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
if(v<0)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u179a\u1780\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1\u1793\u17c3\u179b\u17c1\u1781\u17a2\u179c\u17b7\u1787\u17d2\u1787\u1798\u17b6\u1793\u1794\u17b6\u1793\u1791\u17c1"))
u=Math.sqrt(v)
return u===D.c.aS(u)?D.c.Y(u):u},
$S:1}
B.k9.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1782\u17c4\u179b, \u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e)"))
v=B.ah(w.k(d,0))
u=B.ah(w.k(d,1))
if(v==null||u==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
t=Math.pow(v,u)
w=D.c.aS(t)
if(t===w)return D.c.Y(t)
return t},
$S:1}
B.kg.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.d2(v)},
$S:1}
B.jX.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.cT(v)},
$S:1}
B.jV.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.eD(v)},
$S:1}
B.k5.prototype={
$1(d){var w,v,u,t,s,r="\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781",q=x.j
q.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1799\u17c9\u17b6\u1784\u178f\u17b7\u1785\u1798\u17bd\u1799"))
v=w.gl(d)===1&&q.b(w.k(d,0))?q.a(w.k(d,0)):d
q=J.z(v)
if(q.gA(v))throw C.e(B.m("\u1794\u1789\u17d2\u1787\u17b8\u1791\u1791\u17c1"))
u=B.ah(q.k(v,0))
if(u==null)u=C.ha(B.m(r))
for(t=1;t<q.gl(v);++t){s=B.ah(q.k(v,t))
if(s==null)throw C.e(B.m(r))
if(s>u)u=s}return u},
$S:1}
B.k6.prototype={
$1(d){var w,v,u,t,s,r="\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781",q=x.j
q.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1799\u17c9\u17b6\u1784\u178f\u17b7\u1785\u1798\u17bd\u1799"))
v=w.gl(d)===1&&q.b(w.k(d,0))?q.a(w.k(d,0)):d
q=J.z(v)
if(q.gA(v))throw C.e(B.m("\u1794\u1789\u17d2\u1787\u17b8\u1791\u1791\u17c1"))
u=B.ah(q.k(v,0))
if(u==null)u=C.ha(B.m(r))
for(t=1;t<q.gl(v);++t){s=B.ah(q.k(v,t))
if(s==null)throw C.e(B.m(r))
if(s<u)u=s}return u},
$S:1}
B.kc.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gA(d))return this.a.f6()
if(w.gl(d)===1){w=B.ah(w.k(d,0))
v=w==null?null:D.c.Y(w)
if(v==null)v=1
w=v<=0?1:v
return this.a.cZ(w)}u=B.ah(w.k(d,0))
t=u==null?null:D.c.Y(u)
if(t==null)t=0
w=B.ah(w.k(d,1))
v=w==null?null:D.c.Y(w)
if(v==null)v=1
if(v<=t)return t
return t+this.a.cZ(v-t+1)},
$S:1}
B.kn.prototype={
$1(d){var w,v,u
x.j.a(d)
w=J.z(d)
if(w.gA(d))return 0
v=w.k(d,0)
u=B.ah(v)
if(u==null)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1794\u1798\u17d2\u179b\u17c2\u1784 '"+C.j(v)+"' \u1791\u17c5\u1787\u17b6\u179b\u17c1\u1781\u1794\u17b6\u1793\u1791\u17c1"))
return u},
$S:1}
B.ko.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return B.c2(w.k(d,0))},
$S:1}
B.km.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))return!1
v=w.k(d,0)
if(v!=null){w=J.bm(v)
w=w.R(v,!1)||w.R(v,0)||w.R(v,"")||w.R(v,"\u1798\u17b7\u1793\u1796\u17b7\u178f")}else w=!0
if(w)return!1
return!0},
$S:1}
B.kj.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1796\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=J.v(w.k(d,0))
return C.c(v.split(w.gl(d)>1?J.v(w.k(d,1)):" "),x.s)},
$S:1}
B.kl.prototype={
$1(d){var w,v,u,t,s
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1780\u17b6\u178f\u17cb' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=J.v(w.k(d,0))
u=B.ah(w.gl(d)>1?w.k(d,1):0)
t=u==null?null:D.c.Y(u)
if(t==null)t=0
if(t<0||t>v.length)throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1780\u17d2\u179a\u17c5\u178a\u17c2\u1793\u1780\u17c6\u178e\u178f\u17cb: "+t))
if(w.gl(d)>2){w=B.ah(w.k(d,2))
s=w==null?null:D.c.Y(w)
if(s==null)s=v.length
return D.b.al(v,t,D.f.eE(s,t,v.length))}return D.b.aX(v,t)},
$S:1}
B.ke.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gl(d)<3)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1787\u17c6\u1793\u17bd\u179f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e3 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u17a2\u178f\u17d2\u1790\u1794\u1791, \u1796\u17b6\u1780\u17d2\u1799\u1785\u17b6\u179f\u17cb, \u1796\u17b6\u1780\u17d2\u1799\u1790\u17d2\u1798\u17b8)"))
v=J.v(w.k(d,0))
u=J.v(w.k(d,1))
t=J.v(w.k(d,2))
return C.h8(v,u,t)},
$S:1}
B.kp.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return D.b.aB(J.v(w.k(d,0)))},
$S:1}
B.kr.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return J.v(w.k(d,0)).toUpperCase()},
$S:1}
B.k4.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return J.v(w.k(d,0)).toLowerCase()},
$S:1}
B.jU.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v)){J.cH(v,u)
return v}throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 (Array) \u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u1793\u17d2\u1790\u17c2\u1798' requires array"))},
$S:1}
B.k0.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<3)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1789\u17d2\u1785\u17bc\u179b' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e3 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1791\u17b8\u178f\u17b6\u17c6\u1784, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
if(!t.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1789\u17d2\u1785\u17bc\u179b' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
t=B.ah(w.k(d,1))
u=t==null?null:D.c.Y(t)
if(u==null)u=0
if(u<0||u>J.an(v))throw C.e(B.m("\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1780\u17d2\u179a\u17c5\u178a\u17c2\u1793\u1780\u17c6\u178e\u178f\u17cb: "+u))
J.lH(v,u,w.k(d,2))
return v},
$S:1}
B.k8.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u1780\u1785\u17c1\u1789' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u1789\u17d2\u1787\u17b8"))
v=w.k(d,0)
if(!t.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u1780\u1785\u17c1\u1789' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
t=J.z(v)
if(t.gA(v))throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u178a\u1780\u1785\u17c1\u1789\u1796\u17b8\u1794\u1789\u17d2\u1787\u17b8\u1791\u1791\u17c1\u1794\u17b6\u1793\u1791\u17c1"))
if(w.gl(d)>1){w=B.ah(w.k(d,1))
u=w==null?null:D.c.Y(w)
if(u==null)u=t.gl(v)-1
if(u<0||u>=t.gl(v))throw C.e(B.m("\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1780\u17d2\u179a\u17c5\u178a\u17c2\u1793\u1780\u17c6\u178e\u178f\u17cb: "+u))
return t.aQ(v,u)}return t.aR(v)},
$S:1}
B.kd.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179b\u17bb\u1794' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
if(!u.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179b\u17bb\u1794' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
return J.lI(v,w.k(d,1))},
$S:1}
B.k1.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gA(d))return""
v=w.k(d,0)
if(!t.b(v))return J.v(v)
u=w.gl(d)>1?J.v(w.k(d,1)):""
return J.kO(v,new B.k2(),x.N).S(0,u)},
$S:1}
B.k2.prototype={
$1(d){return B.c2(d)},
$S:6}
B.kh.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u1798\u17d2\u179a\u17c0\u1794' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u1789\u17d2\u1787\u17b8"))
v=w.k(d,0)
if(!t.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u1798\u17d2\u179a\u17c0\u1794' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
u=C.l_(v,!0,x.z)
D.a.aE(u,new B.ki())
return u},
$S:1}
B.ki.prototype={
$2(d,e){if(typeof d=="number"&&typeof e=="number")return D.c.a6(d,e)
return D.b.a6(J.v(d),J.v(e))},
$S:12}
B.kf.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=w.k(d,0)
if(u.b(v))return C.l_(J.nu(v),!0,x.z)
if(typeof v=="string")return new C.aP(C.c(v.split(""),x.s),x.o).f0(0)
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 \u17ac\u17a2\u1780\u17d2\u179f\u179a\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))},
$S:1}
B.jY.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8/\u17a2\u1780\u17d2\u179f\u179a, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v))return J.nv(v,u)
if(typeof v=="string")return D.b.aw(v,J.v(u))
return-1},
$S:1}
B.jW.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1798\u17b6\u1793' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v))return J.lE(v,u)
if(typeof v=="string")return D.b.D(v,J.v(u))
if(x.f.b(v))return v.J(u)
return!1},
$S:1}
B.k7.prototype={
$1(d){x.j.a(d)
return Date.now()},
$S:1}
B.jZ.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gW(d))w.ak(d,new B.k_(),x.N).S(0," ")
return""},
$S:1}
B.k_.prototype={
$1(d){return B.c2(d)},
$S:6}
B.hT.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.hU.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.hV.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.hW.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.kJ.prototype={
$1(d){this.a.a+=d},
$S:8};(function aliases(){var w=B.ap.prototype
w.c6=w.bd})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a.installStaticTearOff
w(B,"pp","od",5)
var s
v(s=B.cI.prototype,"ge9","ea",1)
v(s,"ge7","e8",1)
u(s,"gdU","dV",2)
t(B,"fX",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["fW",function(){return B.fW(null,null,null,x.z)},function(d){return B.fW(null,null,null,d)},function(d,e){return B.fW(null,d,null,e)},function(d,e,f){return B.fW(d,null,e,f)}],6,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.cY,C.b1)
w(B.c7,B.cY)
v(C.cU,[B.ia,B.hn,B.hm,B.hh,B.hg,B.hf,B.hk,B.hj,B.hl,B.hi,B.iC,B.iD,B.iB,B.iE,B.iF,B.iG,B.j3,B.j2,B.j4,B.j5,B.j6,B.j_,B.j0,B.j1,B.jk])
v(C.B,[B.ik,B.iY,B.fQ,B.e2,B.ir,B.fO,B.ap,B.a6,B.ac,B.I,B.D,B.br,B.l,B.aZ,B.bw,B.b9,B.db,B.f1,B.hS,B.i1,B.eX,B.d1,B.cO,B.aq])
v(C.k,[B.y,B.aY,B.b2])
v(B.y,[B.fT,B.fY,B.h_,B.fZ,B.a7,B.bn,B.h1,B.h2,B.a8,B.w,B.bp,B.a4,B.M,B.h6,B.fU,B.ej,B.h0,B.h3,B.h7,B.h9,B.aV,B.ei,B.bo,B.h5,B.cD,B.cF,B.cE,B.as,B.o,B.b,B.R,B.d,B.a9,B.Y,B.eC,B.eF,B.f5,B.fd,B.en,B.ew,B.eD,B.eE,B.f0])
v(C.fv,[B.hR,B.ez,B.hr,B.he,B.iq,B.hH,B.u])
w(B.fD,C.c_)
w(B.fx,C.bR)
v(C.c6,[B.f7,B.f8])
v(B.b2,[B.b6,B.X,B.ck,B.co])
v(B.ap,[B.cI,B.fo,B.fE,B.fI])
v(C.b7,[B.iH,B.iI,B.hN,B.hO,B.hP,B.j8,B.j9,B.ja,B.jb,B.jc,B.j7,B.jg,B.jh,B.jj,B.jl,B.jm,B.jn,B.jo,B.jp,B.ih,B.ip,B.kK,B.ku,B.kv,B.ka,B.kb,B.k3,B.kq,B.jT,B.kk,B.k9,B.kg,B.jX,B.jV,B.k5,B.k6,B.kc,B.kn,B.ko,B.km,B.kj,B.kl,B.ke,B.kp,B.kr,B.k4,B.jU,B.k0,B.k8,B.kd,B.k1,B.k2,B.kh,B.kf,B.jY,B.jW,B.k7,B.jZ,B.k_,B.hT,B.hU,B.hV,B.hW,B.kJ])
v(C.cV,[B.ji,B.ki])
v(B.D,[B.dp,B.bS,B.c4,B.dn,B.cK,B.dq,B.bt,B.dE,B.dF,B.aX,B.cL,B.ch,B.dh,B.cd,B.d5,B.d4,B.dl,B.dH,B.ds,B.cM,B.cc,B.dK,B.d3,B.bs,B.ca,B.cq,B.cQ,B.du,B.d2])
v(B.db,[B.i2,B.i8,B.dv])})()
C.mv(b.typeUniverse,JSON.parse('{"cY":{"b1":["1"],"cp":["1"],"r":["1"],"h":["1"]},"c7":{"cY":["1"],"b1":["1"],"cp":["1"],"r":["1"],"h":["1"]},"fT":{"y":[],"k":[]},"fY":{"y":[],"k":[]},"h_":{"y":[],"k":[]},"fZ":{"y":[],"k":[]},"a7":{"y":[],"k":[]},"bn":{"y":[],"k":[]},"h1":{"y":[],"k":[]},"h2":{"y":[],"k":[]},"a8":{"y":[],"k":[]},"w":{"y":[],"k":[]},"bp":{"y":[],"k":[]},"a4":{"y":[],"k":[]},"M":{"y":[],"k":[]},"h6":{"y":[],"k":[]},"fU":{"y":[],"k":[]},"ej":{"y":[],"k":[]},"h0":{"y":[],"k":[]},"h3":{"y":[],"k":[]},"h7":{"y":[],"k":[]},"h9":{"y":[],"k":[]},"aV":{"y":[],"k":[]},"ei":{"y":[],"k":[]},"bo":{"y":[],"k":[]},"h5":{"y":[],"k":[]},"cD":{"y":[],"k":[]},"cF":{"y":[],"k":[]},"cE":{"y":[],"k":[]},"as":{"y":[],"k":[]},"o":{"y":[],"k":[]},"b":{"y":[],"k":[]},"R":{"y":[],"k":[]},"d":{"y":[],"k":[]},"a9":{"y":[],"k":[]},"Y":{"y":[],"k":[]},"fQ":{"nC":[]},"e2":{"l5":[]},"fO":{"om":[]},"fD":{"iu":[]},"b2":{"k":[]},"aY":{"k":[]},"fx":{"aD":[],"p":[],"ak":[]},"f7":{"p":[],"ak":[]},"y":{"k":[]},"f8":{"p":[],"ak":[]},"b6":{"b2":[],"k":[]},"cI":{"ap":["b6"],"ap.T":"b6"},"X":{"b2":[],"k":[]},"fo":{"ap":["X"],"ap.T":"X"},"eC":{"y":[],"k":[]},"eF":{"y":[],"k":[]},"ck":{"b2":[],"k":[]},"fE":{"ap":["ck"],"ap.T":"ck"},"co":{"b2":[],"k":[]},"fI":{"ap":["co"],"ap.T":"co"},"f5":{"y":[],"k":[]},"fd":{"y":[],"k":[]},"en":{"y":[],"k":[]},"ew":{"y":[],"k":[]},"eD":{"y":[],"k":[]},"eE":{"y":[],"k":[]},"f0":{"y":[],"k":[]},"bs":{"D":[]},"ca":{"D":[]},"cq":{"D":[]},"dp":{"D":[]},"bS":{"D":[]},"c4":{"D":[]},"dn":{"D":[]},"cK":{"D":[]},"dq":{"D":[]},"bt":{"D":[]},"dE":{"D":[]},"dF":{"D":[]},"aX":{"D":[]},"cL":{"D":[]},"ch":{"D":[]},"dh":{"D":[]},"cd":{"D":[]},"d5":{"D":[]},"d4":{"D":[]},"dl":{"D":[]},"dH":{"D":[]},"ds":{"D":[]},"cM":{"D":[]},"cc":{"D":[]},"dK":{"D":[]},"d3":{"D":[]},"cQ":{"D":[]},"du":{"D":[]},"d2":{"D":[]}}'))
var y={n:'# \u17e1. \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',b:"https://github.com/sengson-great/KhmerLang",c:"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a / Expected parameter name",m:"\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1794\u1789\u17d2\u1787\u17b8\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / Array index must be a number"}
var x=(function rtii(){var w=C.bl
return{F:w("D"),R:w("l"),w:w("P<i,i>"),O:w("c7<i>"),h:w("p"),A:w("br"),c:w("aY"),I:w("C<D>"),i:w("C<k>"),_:w("C<bs>"),x:w("C<ca>"),l:w("C<S<i,D>>"),V:w("C<+(I,f)>"),k:w("C<cq>"),s:w("C<i>"),S:w("C<aq>"),B:w("C<u>"),W:w("C<a6>"),n:w("aZ"),t:w("x<D>"),a:w("x<i>"),b:w("x<u>"),P:w("x<a6>"),j:w("x<@>"),J:w("S<i,D>"),Y:w("S<@,@>"),f:w("W<@,@>"),Z:w("ag<+(I,f),I>"),X:w("+(I,f)"),T:w("l3"),o:w("aP<i>"),g:w("I(+(I,f))"),D:w("b2"),q:w("y"),N:w("i"),d:w("u"),U:w("dI<i>"),Q:w("aU(i)"),z:w("@"),e:w("ej<@>"),H:w("~"),M:w("~()"),v:w("~(E)")}})();(function constants(){var w=a.makeConstList
A.ba=new B.c4(!1)
A.bb=new B.c4(!0)
A.bc=new B.hr(4,"solid")
A.bj=new B.dn()
A.Hg=new B.ir()
A.bl=new B.dE()
A.bm=new B.iY()
A.bN=new C.b8(2e6)
A.aa=new B.hH(1,"bold")
A.bO=new B.eC(null)
A.oK=new C.a("\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions) ",null)
A.uw=new C.a("#",null)
A.e=w([A.uw],x.i)
A.wP=new B.R("#functions",null,"heading-anchor",null,null,null,A.e,null)
A.fG=w([A.oK,A.wP],x.i)
A.Ag=new B.a7(A.fG,null)
A.qg=new C.a("\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.t4=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.hN=w([A.t4],x.i)
A.I=new B.d(null,A.hN,null)
A.ro=new C.a(" \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1798\u1780\u179c\u17b7\u1789\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.rm=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb",null)
A.kO=w([A.rm],x.i)
A.b1=new B.d(null,A.kO,null)
A.tF=new C.a(" (return)\u17d6",null)
A.f8=w([A.qg,A.I,A.ro,A.b1,A.tF],x.i)
A.AZ=new B.M(null,null,A.f8,null)
A.bz=new B.X("functions.khmer","KHMER",'# \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17bb\u1780\u17c4\u178e\u1780\u17c2\u1784\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u1794\u178e\u17d2\u178f\u17c4\u1799, \u1791\u1791\u17b9\u1784) {\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1794\u178e\u17d2\u178f\u17c4\u1799 * \u1791\u1791\u17b9\u1784\n}\n\n\u178f\u17b6\u17c6\u1784 \u1795\u17d2\u1791\u17c3 = \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u17e1\u17e0, \u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u179f\u179a\u17bb\u1794\u1782\u17ba:", \u1795\u17d2\u1791\u17c3, "\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1780\u17b6\u179a\u17c9\u17c1")',null,null)
A.d3=w([A.Ag,A.AZ,A.bz],x.i)
A.Bp=new B.a8("functions",A.d3,null)
A.pj=new C.a("Recursion (\u1780\u17bc\u178a Fibonacci) ",null)
A.x3=new B.R("#recursion",null,"heading-anchor",null,null,null,A.e,null)
A.md=w([A.pj,A.x3],x.i)
A.Ai=new B.a7(A.md,null)
A.qA=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 (Recursive Functions) \u1799\u17c9\u17b6\u1784\u179a\u179b\u17bc\u1793\u17d6",null)
A.iX=w([A.qA],x.i)
A.Bg=new B.M(null,null,A.iX,null)
A.bA=new B.X("fibonacci.khmer","KHMER",'# \u1780\u17bc\u178a\u179a\u1780\u179b\u17c1\u1781 Fibonacci \u178f\u17b6\u1798\u1794\u17c2\u1794 Recursive\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}',null,null)
A.jZ=w([A.Ai,A.Bg,A.bA],x.i)
A.Bv=new B.a8("recursion",A.jZ,null)
A.uc=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (Object-Oriented Programming) ",null)
A.x9=new B.R("#classes",null,"heading-anchor",null,null,null,A.e,null)
A.la=w([A.uc,A.x9],x.i)
A.Af=new B.a7(A.la,null)
A.uN=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u178f\u17b6\u1798\u1794\u17c2\u1794 OOP \u1796\u17c1\u1789\u179b\u17c1\u1789\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u1782\u17c6\u179a\u17bc\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.uV=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.cA=w([A.uV],x.i)
A.a4=new B.d(null,A.cA,null)
A.tL=new C.a(" (Class) \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Constructor \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.tb=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(...)",null)
A.je=w([A.tb],x.i)
A.yf=new B.d(null,A.je,null)
A.q8=new C.a("\u17d4 \u1785\u17c6\u178e\u17c2\u1780\u17af\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb (Methods) \u1782\u17ba\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.qm=new C.a(" \u178a\u17bc\u1785\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1791\u17bc\u1791\u17c5\u178a\u17c2\u179a\u17d4",null)
A.na=w([A.uN,A.a4,A.tL,A.yf,A.q8,A.I,A.qm],x.i)
A.B0=new B.M(null,null,A.na,null)
A.pY=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.rz=new C.a("\u1790\u17d2\u1798\u17b8",null)
A.cY=w([A.rz],x.i)
A.aW=new B.d(null,A.cY,null)
A.v1=new C.a(" (New)\u17d6",null)
A.id=w([A.pY,A.aW,A.v1],x.i)
A.AY=new B.M(null,null,A.id,null)
A.bB=new B.X("person_class.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1798\u1793\u17bb\u179f\u17d2\u179f {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7, \u17a2\u17b6\u1799\u17bb) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n        \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb = \u17a2\u17b6\u1799\u17bb\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1787\u1798\u17d2\u179a\u17b6\u1794\u179f\u17bd\u179a! \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7", \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u17a2\u17b6\u1799\u17bb", \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb, "\u1786\u17d2\u1793\u17b6\u17c6")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1 = \u1790\u17d2\u1798\u17b8 \u1798\u1793\u17bb\u179f\u17d2\u179f("\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784", \u17e2\u17e1)\n\u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1.\u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793()',null,null)
A.cg=w([A.Af,A.B0,A.AY,A.bB],x.i)
A.BD=new B.a8("classes",A.cg,null)
A.p0=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (OOP Inheritance: `\u1794\u1793\u17d2\u178f\u1796\u17b8`) ",null)
A.x4=new B.R("#inheritance",null,"heading-anchor",null,null,null,A.e,null)
A.nf=w([A.p0,A.x4],x.i)
A.Ae=new B.a7(A.nf,null)
A.vR=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Superclass) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17a1\u17be\u1784\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.tw=new C.a("\u1794\u1793\u17d2\u178f\u1796\u17b8",null)
A.ii=w([A.tw],x.i)
A.b0=new B.d(null,A.ii,null)
A.vk=new C.a(" (extends)\u17d4 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 (Subclass) \u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1799\u1780\u179b\u1780\u17d2\u1781\u178e\u17c8\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7 \u1793\u17b7\u1784\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u17d6",null)
A.jY=w([A.vR,A.b0,A.vk],x.i)
A.AS=new B.M(null,null,A.jY,null)
A.bD=new B.X("inheritance.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n# \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8 \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()',null,null)
A.cz=w([A.Ae,A.AS,A.bD],x.i)
A.BA=new B.a8("inheritance",A.cz,null)
A.rj=new C.a("Getter \u1793\u17b7\u1784 Setter (`\u1799\u1780` & `\u178a\u17b6\u1780\u17cb` / `\u1780\u17c6\u178e\u178f\u17cb`) ",null)
A.wY=new B.R("#getters-setters",null,"heading-anchor",null,null,null,A.e,null)
A.jh=w([A.rj,A.wY],x.i)
A.Ad=new B.a7(A.jh,null)
A.qZ=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f ",null)
A.qa=new C.a("Getter",null)
A.hS=w([A.qa],x.i)
A.C1=new B.Y(A.hS,null)
A.an=new C.a(" \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.tR=new C.a("\u1799\u1780",null)
A.nm=w([A.tR],x.i)
A.aS=new B.d(null,A.nm,null)
A.ao=new C.a(" (\u17ac ",null)
A.u5=new C.a("get",null)
A.hZ=w([A.u5],x.i)
A.aT=new B.d(null,A.hZ,null)
A.rk=new C.a(") \u1793\u17b7\u1784 ",null)
A.rn=new C.a("Setter",null)
A.hT=w([A.rn],x.i)
A.C6=new B.Y(A.hT,null)
A.rM=new C.a("\u178a\u17b6\u1780\u17cb",null)
A.fI=w([A.rM],x.i)
A.aX=new B.d(null,A.fI,null)
A.ap=new C.a(" \u17ac ",null)
A.vF=new C.a("\u1780\u17c6\u178e\u178f\u17cb",null)
A.kl=w([A.vF],x.i)
A.b2=new B.d(null,A.kl,null)
A.vi=new C.a("set",null)
A.i3=w([A.vi],x.i)
A.b4=new B.d(null,A.i3,null)
A.qv=new C.a(") \u178a\u17be\u1798\u17d2\u1794\u17b8\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1796\u17b6\u179a\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 (Encapsulation / Computed Properties) \u1780\u17d2\u1793\u17bb\u1784 Object\u17d6",null)
A.nt=w([A.qZ,A.C1,A.an,A.aS,A.ao,A.aT,A.rk,A.C6,A.an,A.aX,A.ap,A.b2,A.ao,A.b4,A.qv],x.i)
A.Be=new B.M(null,null,A.nt,null)
A.bw=new B.X("getter_setter.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179a\u1784\u17d2\u179c\u1784\u17cb {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1780\u17b6\u17c6) {\n        \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 = \u1780\u17b6\u17c6\n    }\n\n    # Getter: \u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u178a\u17bc\u1785 Property\n    \u1799\u1780 \u1780\u17b6\u17c6 {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1793\u17c1\u17c7._\u1780\u17b6\u17c6\n    }\n\n    # Setter: \u17a0\u17c5\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u178f\u17b6\u1798\u179a\u1799\u17c8 Assignment\n    \u178a\u17b6\u1780\u17cb \u1780\u17b6\u17c6(\u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8) {\n        \u1794\u17be (\u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8 > \u17e0) {\n            \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 = \u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8\n        } \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n            \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17c6\u17a0\u17bb\u179f: \u1780\u17b6\u17c6\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1792\u17c6\u1787\u17b6\u1784 \u17e0!")\n        }\n    }\n\n    # Computed Property Getter\n    \u1799\u1780 \u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6 {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e3.\u17e1\u17e4 * \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 * \u1793\u17c1\u17c7._\u1780\u17b6\u17c6\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 c = \u1790\u17d2\u1798\u17b8 \u179a\u1784\u17d2\u179c\u1784\u17cb(\u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u17c6\u178a\u17be\u1798:", c.\u1780\u17b6\u17c6)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6:", c.\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6)\n\nc.\u1780\u17b6\u17c6 = \u17e1\u17e0\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u17c6\u1790\u17d2\u1798\u17b8:", c.\u1780\u17b6\u17c6)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1790\u17d2\u1798\u17b8:", c.\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6)',null,null)
A.fe=w([A.Ad,A.Be,A.bw],x.i)
A.Bz=new B.a8("getters-setters",A.fe,null)
A.lR=w([A.Bp,A.Bv,A.BD,A.BA,A.Bz],x.i)
A.bP=new B.aY(A.lR,null)
A.pJ=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Built-in Functions) ",null)
A.xb=new B.R("#builtins",null,"heading-anchor",null,null,null,A.e,null)
A.n6=w([A.pJ,A.xb],x.i)
A.Am=new B.a7(A.n6,null)
A.uK=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a\u178a\u17c2\u179b\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1798\u1780\u179f\u17d2\u179a\u17b6\u1794\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1797\u17b6\u179f\u17b6\u17d6",null)
A.iC=w([A.uK],x.i)
A.Bb=new B.M(null,null,A.iC,null)
A.qo=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Builtin)",null)
A.mg=w([A.qo],x.i)
A.G4=new B.as(A.mg,null)
A.t_=new C.a("\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Alias)",null)
A.h9=w([A.t_],x.i)
A.G3=new B.as(A.h9,null)
A.vB=new C.a("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Usage)",null)
A.eR=w([A.vB],x.i)
A.G_=new B.as(A.eR,null)
A.vL=new C.a("\u1780\u17b6\u179a\u1796\u1793\u17d2\u1799\u179b\u17cb (Explanation)",null)
A.d8=w([A.vL],x.i)
A.G1=new B.as(A.d8,null)
A.ka=w([A.G4,A.G3,A.G_,A.G1],x.i)
A.Gv=new B.o(A.ka,null)
A.fZ=w([A.Gv],x.i)
A.Ga=new B.cF(A.fZ,null)
A.rR=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",null)
A.kZ=w([A.rR],x.i)
A.aQ=new B.d(null,A.kZ,null)
A.jl=w([A.aQ],x.i)
A.Cn=new B.b(A.jl,null)
A.pN=new C.a("print(...)",null)
A.mI=w([A.pN],x.i)
A.xp=new B.d(null,A.mI,null)
A.cU=w([A.xp],x.i)
A.DO=new B.b(A.cU,null)
A.u0=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u1798\u17d2\u179b\u17c3:", x)',null)
A.eP=w([A.u0],x.i)
A.xJ=new B.d(null,A.eP,null)
A.dy=w([A.xJ],x.i)
A.EC=new B.b(A.dy,null)
A.vu=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u178f\u1798\u17d2\u179b\u17c3\u17a2\u1790\u17c1\u179a\u1793\u17c5\u179b\u17be\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 (Standard Output)",null)
A.iN=w([A.vu],x.i)
A.Fq=new B.b(A.iN,null)
A.cQ=w([A.Cn,A.DO,A.EC,A.Fq],x.i)
A.H7=new B.o(A.cQ,null)
A.q2=new C.a("\u1794\u17d2\u179a\u179c\u17c2\u1784(...)",null)
A.mC=w([A.q2],x.i)
A.yz=new B.d(null,A.mC,null)
A.nh=w([A.yz],x.i)
A.D8=new B.b(A.nh,null)
A.pV=new C.a("len(...)",null)
A.hD=w([A.pV],x.i)
A.zR=new B.d(null,A.hD,null)
A.fs=w([A.zR],x.i)
A.EQ=new B.b(A.fs,null)
A.ov=new C.a('\u1794\u17d2\u179a\u179c\u17c2\u1784("\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6")',null)
A.ep=w([A.ov],x.i)
A.y1=new B.d(null,A.ep,null)
A.lm=w([A.y1],x.i)
A.CX=new B.b(A.lm,null)
A.v3=new C.a("\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u179c\u17c2\u1784\u178f\u17bd\u17a2\u1780\u17d2\u179f\u179a \u17ac\u1785\u17c6\u1793\u17bd\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784 Array/Map",null)
A.ck=w([A.v3],x.i)
A.Du=new B.b(A.ck,null)
A.ec=w([A.D8,A.EQ,A.CX,A.Du],x.i)
A.H2=new B.o(A.ec,null)
A.pu=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(...)",null)
A.j2=w([A.pu],x.i)
A.xi=new B.d(null,A.j2,null)
A.iB=w([A.xi],x.i)
A.E_=new B.b(A.iB,null)
A.u8=new C.a("type(...)",null)
A.ez=w([A.u8],x.i)
A.zI=new B.d(null,A.ez,null)
A.kH=w([A.zI],x.i)
A.Fg=new B.b(A.kH,null)
A.rK=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(\u17e1\u17e2\u17e3)",null)
A.mi=w([A.rK],x.i)
A.yN=new B.d(null,A.mi,null)
A.c7=w([A.yN],x.i)
A.CU=new B.b(A.c7,null)
A.v5=new C.a("\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (\u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a, \u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6, \u1794\u1789\u17d2\u1787\u17b8, \u179c\u178f\u17d2\u1790\u17bb, \u1790\u17d2\u1793\u17b6\u1780\u17cb, etc.)",null)
A.cr=w([A.v5],x.i)
A.Fx=new B.b(A.cr,null)
A.eJ=w([A.E_,A.Fg,A.CU,A.Fx],x.i)
A.Gn=new B.o(A.eJ,null)
A.oY=new C.a("\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f(...)",null)
A.h5=w([A.oY],x.i)
A.y_=new B.d(null,A.h5,null)
A.iK=w([A.y_],x.i)
A.EV=new B.b(A.iK,null)
A.vJ=new C.a("abs(...)",null)
A.f9=w([A.vJ],x.i)
A.zE=new B.d(null,A.f9,null)
A.er=w([A.zE],x.i)
A.Ew=new B.b(A.er,null)
A.qV=new C.a("\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f(-\u17e1\u17e0)",null)
A.iH=w([A.qV],x.i)
A.zC=new B.d(null,A.iH,null)
A.cE=w([A.zC],x.i)
A.DI=new B.b(A.cE,null)
A.oH=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f\u1793\u17c3\u179b\u17c1\u1781 (Absolute value)",null)
A.d2=w([A.oH],x.i)
A.Eb=new B.b(A.d2,null)
A.eE=w([A.EV,A.Ew,A.DI,A.Eb],x.i)
A.Gi=new B.o(A.eE,null)
A.oR=new C.a("\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1(...)",null)
A.j7=w([A.oR],x.i)
A.zA=new B.d(null,A.j7,null)
A.fu=w([A.zA],x.i)
A.Fh=new B.b(A.fu,null)
A.rA=new C.a("sqrt(...)",null)
A.el=w([A.rA],x.i)
A.zK=new B.d(null,A.el,null)
A.eW=w([A.zK],x.i)
A.D6=new B.b(A.eW,null)
A.p6=new C.a("\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1(\u17e2\u17e5)",null)
A.cy=w([A.p6],x.i)
A.yZ=new B.d(null,A.cy,null)
A.jC=w([A.yZ],x.i)
A.Cv=new B.b(A.jC,null)
A.pI=new C.a("\u179a\u1780\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1\u1793\u17c3\u179b\u17c1\u1781 (Square root)",null)
A.kk=w([A.pI],x.i)
A.DJ=new B.b(A.kk,null)
A.eA=w([A.Fh,A.D6,A.Cv,A.DJ],x.i)
A.Gu=new B.o(A.eA,null)
A.vy=new C.a("\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e(...)",null)
A.jx=w([A.vy],x.i)
A.xt=new B.d(null,A.jx,null)
A.jD=w([A.xt],x.i)
A.FE=new B.b(A.jD,null)
A.tI=new C.a("pow(...)",null)
A.ju=w([A.tI],x.i)
A.xU=new B.d(null,A.ju,null)
A.fp=w([A.xU],x.i)
A.EW=new B.b(A.fp,null)
A.pH=new C.a("\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e(\u17e2, \u17e3)",null)
A.dr=w([A.pH],x.i)
A.y2=new B.d(null,A.dr,null)
A.l9=w([A.y2],x.i)
A.FD=new B.b(A.l9,null)
A.ug=new C.a("\u1782\u178e\u1793\u17b6\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e (\u17e2^\u17e3 = \u17e8)",null)
A.hJ=w([A.ug],x.i)
A.De=new B.b(A.hJ,null)
A.kg=w([A.FE,A.EW,A.FD,A.De],x.i)
A.Gs=new B.o(A.kg,null)
A.r7=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb(...)",null)
A.dZ=w([A.r7],x.i)
A.zF=new B.d(null,A.dZ,null)
A.nr=w([A.zF],x.i)
A.CR=new B.b(A.nr,null)
A.pt=new C.a("round(...)",null)
A.h4=w([A.pt],x.i)
A.yT=new B.d(null,A.h4,null)
A.j_=w([A.yT],x.i)
A.Fj=new B.b(A.j_,null)
A.r8=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb(\u17e4.\u17e7)",null)
A.e_=w([A.r8],x.i)
A.zG=new B.d(null,A.e_,null)
A.ns=w([A.zG],x.i)
A.CS=new B.b(A.ns,null)
A.r2=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u179a\u1780\u1785\u17c6\u1793\u17bd\u1793\u1782\u178f\u17cb\u1787\u17b7\u178f\u1794\u17c6\u1795\u17bb\u178f (Round to nearest integer)",null)
A.fi=w([A.r2],x.i)
A.Df=new B.b(A.fi,null)
A.n0=w([A.CR,A.Fj,A.CS,A.Df],x.i)
A.GK=new B.o(A.n0,null)
A.tW=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7(...)",null)
A.iS=w([A.tW],x.i)
A.xq=new B.d(null,A.iS,null)
A.hv=w([A.xq],x.i)
A.Ds=new B.b(A.hv,null)
A.qS=new C.a("floor(...)",null)
A.dY=w([A.qS],x.i)
A.zO=new B.d(null,A.dY,null)
A.m5=w([A.zO],x.i)
A.F6=new B.b(A.m5,null)
A.tX=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7(\u17e4.\u17e9)",null)
A.iT=w([A.tX],x.i)
A.xr=new B.d(null,A.iT,null)
A.hw=w([A.xr],x.i)
A.Dt=new B.b(A.hw,null)
A.ph=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1791\u1798\u17d2\u179b\u17b6\u1780\u17cb\u1785\u17bb\u17c7\u1780\u17d2\u179a\u17c4\u1798 (Floor)",null)
A.n9=w([A.ph],x.i)
A.EK=new B.b(A.n9,null)
A.iA=w([A.Ds,A.F6,A.Dt,A.EK],x.i)
A.Gd=new B.o(A.iA,null)
A.th=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784(...)",null)
A.dK=w([A.th],x.i)
A.zc=new B.d(null,A.dK,null)
A.e9=w([A.zc],x.i)
A.Cr=new B.b(A.e9,null)
A.rD=new C.a("ceil(...)",null)
A.hb=w([A.rD],x.i)
A.yn=new B.d(null,A.hb,null)
A.d6=w([A.yn],x.i)
A.FC=new B.b(A.d6,null)
A.ti=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784(\u17e4.\u17e1)",null)
A.dL=w([A.ti],x.i)
A.zd=new B.d(null,A.dL,null)
A.ea=w([A.zd],x.i)
A.Cs=new B.b(A.ea,null)
A.px=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u179a\u17bb\u1789\u17a1\u17be\u1784\u179b\u17be (Ceiling)",null)
A.kQ=w([A.px],x.i)
A.Dg=new B.b(A.kQ,null)
A.jr=w([A.Cr,A.FC,A.Cs,A.Dg],x.i)
A.GB=new B.o(A.jr,null)
A.qr=new C.a("\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6(...)",null)
A.ne=w([A.qr],x.i)
A.yq=new B.d(null,A.ne,null)
A.cH=w([A.yq],x.i)
A.Fd=new B.b(A.cH,null)
A.qN=new C.a("max(...)",null)
A.lW=w([A.qN],x.i)
A.xP=new B.d(null,A.lW,null)
A.f6=w([A.xP],x.i)
A.Ea=new B.b(A.f6,null)
A.po=new C.a("\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6(\u17e1\u17e0, \u17e2\u17e0, \u17e5)",null)
A.iV=w([A.po],x.i)
A.zq=new B.d(null,A.iV,null)
A.mv=w([A.zq],x.i)
A.Eg=new B.b(A.mv,null)
A.tn=new C.a("\u179a\u1780\u178f\u1798\u17d2\u179b\u17c3\u1792\u17c6\u1794\u17c6\u1795\u17bb\u178f \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1787\u17b6\u1798\u17bd\u1799\u17a2\u17b6\u1782\u17bb\u1799\u1798\u17c9\u1784\u17cb \u17ac\u1794\u1789\u17d2\u1787\u17b8",null)
A.eL=w([A.tn],x.i)
A.FP=new B.b(A.eL,null)
A.dP=w([A.Fd,A.Ea,A.Eg,A.FP],x.i)
A.GM=new B.o(A.dP,null)
A.va=new C.a("\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6(...)",null)
A.iD=w([A.va],x.i)
A.y6=new B.d(null,A.iD,null)
A.eY=w([A.y6],x.i)
A.CB=new B.b(A.eY,null)
A.oE=new C.a("min(...)",null)
A.n7=w([A.oE],x.i)
A.yA=new B.d(null,A.n7,null)
A.dF=w([A.yA],x.i)
A.DW=new B.b(A.dF,null)
A.ps=new C.a("\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6(\u17e1\u17e0, \u17e2\u17e0, \u17e5)",null)
A.dG=w([A.ps],x.i)
A.xw=new B.d(null,A.dG,null)
A.hu=w([A.xw],x.i)
A.Fb=new B.b(A.hu,null)
A.uG=new C.a("\u179a\u1780\u178f\u1798\u17d2\u179b\u17c3\u178f\u17bc\u1785\u1794\u17c6\u1795\u17bb\u178f \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1787\u17b6\u1798\u17bd\u1799\u17a2\u17b6\u1782\u17bb\u1799\u1798\u17c9\u1784\u17cb \u17ac\u1794\u1789\u17d2\u1787\u17b8",null)
A.fC=w([A.uG],x.i)
A.Do=new B.b(A.fC,null)
A.iy=w([A.CB,A.DW,A.Fb,A.Do],x.i)
A.GG=new B.o(A.iy,null)
A.tO=new C.a("\u1785\u17c3\u178a\u1793\u17d2\u1799(...)",null)
A.ms=w([A.tO],x.i)
A.xN=new B.d(null,A.ms,null)
A.et=w([A.xN],x.i)
A.EA=new B.b(A.et,null)
A.v0=new C.a("random(...)",null)
A.e5=w([A.v0],x.i)
A.yS=new B.d(null,A.e5,null)
A.ft=w([A.yS],x.i)
A.Ey=new B.b(A.ft,null)
A.rL=new C.a("\u1785\u17c3\u178a\u1793\u17d2\u1799(\u17e1, \u17e1\u17e0)",null)
A.dh=w([A.rL],x.i)
A.yF=new B.d(null,A.dh,null)
A.d1=w([A.yF],x.i)
A.F2=new B.b(A.d1,null)
A.ra=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u179b\u17c1\u1781\u1785\u17c3\u178a\u1793\u17d2\u1799 (Random number between min and max)",null)
A.kX=w([A.ra],x.i)
A.FV=new B.b(A.kX,null)
A.lq=w([A.EA,A.Ey,A.F2,A.FV],x.i)
A.GY=new B.o(A.lq,null)
A.rt=new C.a("\u1787\u17b6\u179b\u17c1\u1781(...)",null)
A.kh=w([A.rt],x.i)
A.zl=new B.d(null,A.kh,null)
A.eT=w([A.zl],x.i)
A.Di=new B.b(A.eT,null)
A.qQ=new C.a("toNum / toInt",null)
A.lh=w([A.qQ],x.i)
A.xm=new B.d(null,A.lh,null)
A.c8=w([A.xm],x.i)
A.Ee=new B.b(A.c8,null)
A.uA=new C.a('\u1787\u17b6\u179b\u17c1\u1781("\u17e1\u17e2\u17e3")',null)
A.jX=w([A.uA],x.i)
A.zt=new B.d(null,A.jX,null)
A.fV=w([A.zt],x.i)
A.Dc=new B.b(A.fV,null)
A.qj=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u1791\u17c5\u1787\u17b6\u179b\u17c1\u1781 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1793\u17b7\u1784\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb",null)
A.mB=w([A.qj],x.i)
A.E6=new B.b(A.mB,null)
A.dR=w([A.Di,A.Ee,A.Dc,A.E6],x.i)
A.H8=new B.o(A.dR,null)
A.qw=new C.a("\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a(...)",null)
A.eN=w([A.qw],x.i)
A.zw=new B.d(null,A.eN,null)
A.dX=w([A.zw],x.i)
A.CQ=new B.b(A.dX,null)
A.v2=new C.a("toStr(...)",null)
A.mu=w([A.v2],x.i)
A.zN=new B.d(null,A.mu,null)
A.hA=w([A.zN],x.i)
A.FR=new B.b(A.hA,null)
A.rQ=new C.a("\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a(\u17e7\u17e8\u17e9)",null)
A.kx=w([A.rQ],x.i)
A.xF=new B.d(null,A.kx,null)
A.dj=w([A.xF],x.i)
A.CA=new B.b(A.dj,null)
A.t9=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u178f\u1798\u17d2\u179b\u17c3\u1791\u17c5\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 String",null)
A.kY=w([A.t9],x.i)
A.DA=new B.b(A.kY,null)
A.cp=w([A.CQ,A.FR,A.CA,A.DA],x.i)
A.GI=new B.o(A.cp,null)
A.p1=new C.a("\u1787\u17b6\u178f\u1780\u17d2\u1780(...)",null)
A.iZ=w([A.p1],x.i)
A.yE=new B.d(null,A.iZ,null)
A.fw=w([A.yE],x.i)
A.E1=new B.b(A.fw,null)
A.qd=new C.a("toBool(...)",null)
A.hB=w([A.qd],x.i)
A.ys=new B.d(null,A.hB,null)
A.ek=w([A.ys],x.i)
A.FT=new B.b(A.ek,null)
A.qe=new C.a("\u1787\u17b6\u178f\u1780\u17d2\u1780(\u17e1)",null)
A.dn=w([A.qe],x.i)
A.zL=new B.d(null,A.dn,null)
A.jL=w([A.zL],x.i)
A.FY=new B.b(A.jL,null)
A.tx=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u178f\u1798\u17d2\u179b\u17c3\u1791\u17c5\u1787\u17b6\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6 Boolean (\u1796\u17b7\u178f / \u1798\u17b7\u1793\u1796\u17b7\u178f)",null)
A.cJ=w([A.tx],x.i)
A.CF=new B.b(A.cJ,null)
A.j0=w([A.E1,A.FT,A.FY,A.CF],x.i)
A.GJ=new B.o(A.j0,null)
A.qt=new C.a("\u1796\u17bb\u17c7(...)",null)
A.ha=w([A.qt],x.i)
A.xH=new B.d(null,A.ha,null)
A.kw=w([A.xH],x.i)
A.ES=new B.b(A.kw,null)
A.pi=new C.a("split(...)",null)
A.ci=w([A.pi],x.i)
A.yj=new B.d(null,A.ci,null)
A.fM=w([A.yj],x.i)
A.F8=new B.b(A.fM,null)
A.t8=new C.a('\u1796\u17bb\u17c7("\u1780 \u1781 \u1782", " ")',null)
A.mG=w([A.t8],x.i)
A.yR=new B.d(null,A.mG,null)
A.mk=w([A.yR],x.i)
A.Dl=new B.b(A.mk,null)
A.uq=new C.a("\u1794\u17c6\u1794\u17c2\u1780\u17a2\u178f\u17d2\u1790\u1794\u1791\u1791\u17c5\u1787\u17b6\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.mo=w([A.uq],x.i)
A.Ex=new B.b(A.mo,null)
A.m7=w([A.ES,A.F8,A.Dl,A.Ex],x.i)
A.Gl=new B.o(A.m7,null)
A.pB=new C.a("\u1780\u17b6\u178f\u17cb(...)",null)
A.co=w([A.pB],x.i)
A.xx=new B.d(null,A.co,null)
A.jg=w([A.xx],x.i)
A.DH=new B.b(A.jg,null)
A.pU=new C.a("substr(...)",null)
A.mq=w([A.pU],x.i)
A.yQ=new B.d(null,A.mq,null)
A.c5=w([A.yQ],x.i)
A.DT=new B.b(A.c5,null)
A.qG=new C.a('\u1780\u17b6\u178f\u17cb("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u17e0, \u17e4)',null)
A.jW=w([A.qG],x.i)
A.yO=new B.d(null,A.jW,null)
A.k3=w([A.yO],x.i)
A.FA=new B.b(A.k3,null)
A.oI=new C.a("\u1780\u17b6\u178f\u17cb\u1799\u1780\u1795\u17d2\u1793\u17c2\u1780\u1793\u17c3\u17a2\u178f\u17d2\u1790\u1794\u1791\u178f\u17b6\u1798\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb",null)
A.kA=w([A.oI],x.i)
A.FO=new B.b(A.kA,null)
A.hL=w([A.DH,A.DT,A.FA,A.FO],x.i)
A.Gy=new B.o(A.hL,null)
A.pO=new C.a("\u1787\u17c6\u1793\u17bd\u179f(...)",null)
A.ev=w([A.pO],x.i)
A.y0=new B.d(null,A.ev,null)
A.fk=w([A.y0],x.i)
A.D1=new B.b(A.fk,null)
A.q6=new C.a("replace(...)",null)
A.ht=w([A.q6],x.i)
A.xk=new B.d(null,A.ht,null)
A.fb=w([A.xk],x.i)
A.CL=new B.b(A.fb,null)
A.pS=new C.a('\u1787\u17c6\u1793\u17bd\u179f(str, "\u1785\u17b6\u179f\u17cb", "\u1790\u17d2\u1798\u17b8")',null)
A.kq=w([A.pS],x.i)
A.yv=new B.d(null,A.kq,null)
A.ir=w([A.yv],x.i)
A.Dr=new B.b(A.ir,null)
A.pk=new C.a("\u1787\u17c6\u1793\u17bd\u179f\u1796\u17b6\u1780\u17d2\u1799\u1785\u17b6\u179f\u17cb\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1790\u17d2\u1798\u17b8\u1780\u17d2\u1793\u17bb\u1784\u17a2\u178f\u17d2\u1790\u1794\u1791",null)
A.nw=w([A.pk],x.i)
A.En=new B.b(A.nw,null)
A.kS=w([A.D1,A.CL,A.Dr,A.En],x.i)
A.GH=new B.o(A.kS,null)
A.rS=new C.a("\u179f\u1798\u17d2\u17a2\u17b6\u178f(...)",null)
A.n_=w([A.rS],x.i)
A.zr=new B.d(null,A.n_,null)
A.k_=w([A.zr],x.i)
A.FL=new B.b(A.k_,null)
A.pC=new C.a("trim(...)",null)
A.cm=w([A.pC],x.i)
A.z1=new B.d(null,A.cm,null)
A.j8=w([A.z1],x.i)
A.FK=new B.b(A.j8,null)
A.p9=new C.a('\u179f\u1798\u17d2\u17a2\u17b6\u178f("  \u17a2\u178f\u17d2\u1790\u1794\u1791  ")',null)
A.nv=w([A.p9],x.i)
A.xR=new B.d(null,A.nv,null)
A.iu=w([A.xR],x.i)
A.EO=new B.b(A.iu,null)
A.vj=new C.a("\u179b\u17bb\u1794\u1785\u1793\u17d2\u179b\u17c4\u17c7\u1791\u1791\u17c1 (Whitespace) \u1781\u17b6\u1784\u178a\u17be\u1798 \u1793\u17b7\u1784\u1781\u17b6\u1784\u1785\u17bb\u1784",null)
A.mT=w([A.vj],x.i)
A.E2=new B.b(A.mT,null)
A.n8=w([A.FL,A.FK,A.EO,A.E2],x.i)
A.Gq=new B.o(A.n8,null)
A.qy=new C.a("\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6(...)",null)
A.iq=w([A.qy],x.i)
A.xK=new B.d(null,A.iq,null)
A.e4=w([A.xK],x.i)
A.EH=new B.b(A.e4,null)
A.ri=new C.a("upper(...)",null)
A.im=w([A.ri],x.i)
A.zg=new B.d(null,A.im,null)
A.m_=w([A.zg],x.i)
A.Ev=new B.b(A.m_,null)
A.tY=new C.a('\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6("hello")',null)
A.me=w([A.tY],x.i)
A.zm=new B.d(null,A.me,null)
A.m6=w([A.zm],x.i)
A.Cx=new B.b(A.m6,null)
A.tl=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u17a2\u1780\u17d2\u179f\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1791\u17c5\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6",null)
A.jF=w([A.tl],x.i)
A.Cw=new B.b(A.jF,null)
A.ej=w([A.EH,A.Ev,A.Cx,A.Cw],x.i)
A.GE=new B.o(A.ej,null)
A.p_=new C.a("\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785(...)",null)
A.n3=w([A.p_],x.i)
A.z7=new B.d(null,A.n3,null)
A.lU=w([A.z7],x.i)
A.Fp=new B.b(A.lU,null)
A.uO=new C.a("lower(...)",null)
A.cf=w([A.uO],x.i)
A.zD=new B.d(null,A.cf,null)
A.eF=w([A.zD],x.i)
A.DK=new B.b(A.eF,null)
A.ow=new C.a('\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785("HELLO")',null)
A.mW=w([A.ow],x.i)
A.yH=new B.d(null,A.mW,null)
A.lO=w([A.yH],x.i)
A.F7=new B.b(A.lO,null)
A.tq=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u17a2\u1780\u17d2\u179f\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1791\u17c5\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785",null)
A.ig=w([A.tq],x.i)
A.Fu=new B.b(A.ig,null)
A.iI=w([A.Fp,A.DK,A.F7,A.Fu],x.i)
A.GS=new B.o(A.iI,null)
A.tE=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(...)",null)
A.m0=w([A.tE],x.i)
A.zp=new B.d(null,A.m0,null)
A.f7=w([A.zp],x.i)
A.CY=new B.b(A.f7,null)
A.qK=new C.a("append(...)",null)
A.fQ=w([A.qK],x.i)
A.z8=new B.d(null,A.fQ,null)
A.jN=w([A.z8],x.i)
A.DZ=new B.b(A.jN,null)
A.oX=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.fd=w([A.oX],x.i)
A.xV=new B.d(null,A.fd,null)
A.lp=w([A.xV],x.i)
A.F3=new B.b(A.lp,null)
A.v6=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798\u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8\u1791\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.k2=w([A.v6],x.i)
A.CM=new B.b(A.k2,null)
A.mZ=w([A.CY,A.DZ,A.F3,A.CM],x.i)
A.Gz=new B.o(A.mZ,null)
A.pz=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b(...)",null)
A.ex=w([A.pz],x.i)
A.ye=new B.d(null,A.ex,null)
A.h_=w([A.ye],x.i)
A.Db=new B.b(A.h_,null)
A.ue=new C.a("insert(...)",null)
A.kP=w([A.ue],x.i)
A.xL=new B.d(null,A.kP,null)
A.cZ=w([A.xL],x.i)
A.Fl=new B.b(A.cZ,null)
A.vQ=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b(\u1794\u1789\u17d2\u1787\u17b8, \u17e0, \u1792\u17b6\u178f\u17bb)",null)
A.c9=w([A.vQ],x.i)
A.yw=new B.d(null,A.c9,null)
A.ln=w([A.yw],x.i)
A.FG=new B.b(A.ln,null)
A.tj=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b\u1792\u17b6\u178f\u17bb\u1793\u17c5\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1780\u17c6\u178e\u178f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8",null)
A.nc=w([A.tj],x.i)
A.Eu=new B.b(A.nc,null)
A.iW=w([A.Db,A.Fl,A.FG,A.Eu],x.i)
A.GR=new B.o(A.iW,null)
A.vl=new C.a("\u178a\u1780\u1785\u17c1\u1789(...)",null)
A.f_=w([A.vl],x.i)
A.xI=new B.d(null,A.f_,null)
A.mh=w([A.xI],x.i)
A.Fw=new B.b(A.mh,null)
A.pE=new C.a("pop(...)",null)
A.iR=w([A.pE],x.i)
A.yg=new B.d(null,A.iR,null)
A.ip=w([A.yg],x.i)
A.FQ=new B.b(A.ip,null)
A.u3=new C.a("\u178a\u1780\u1785\u17c1\u1789(\u1794\u1789\u17d2\u1787\u17b8, [\u1791\u17b8\u178f\u17b6\u17c6\u1784])",null)
A.kC=w([A.u3],x.i)
A.yC=new B.d(null,A.kC,null)
A.i9=w([A.yC],x.i)
A.Fa=new B.b(A.i9,null)
A.tG=new C.a("\u178a\u1780\u1792\u17b6\u178f\u17bb\u1785\u17bb\u1784\u1780\u17d2\u179a\u17c4\u1799 \u17ac\u178f\u17b6\u1798\u1791\u17b8\u178f\u17b6\u17c6\u1784\u178a\u17c2\u179b\u1794\u17b6\u1793\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb",null)
A.mJ=w([A.tG],x.i)
A.DL=new B.b(A.mJ,null)
A.eD=w([A.Fw,A.FQ,A.Fa,A.DL],x.i)
A.Gf=new B.o(A.eD,null)
A.ud=new C.a("\u179b\u17bb\u1794(...)",null)
A.ky=w([A.ud],x.i)
A.zo=new B.d(null,A.ky,null)
A.ic=w([A.zo],x.i)
A.FI=new B.b(A.ic,null)
A.uW=new C.a("remove(...)",null)
A.fX=w([A.uW],x.i)
A.zj=new B.d(null,A.fX,null)
A.en=w([A.zj],x.i)
A.Fm=new B.b(A.en,null)
A.ul=new C.a("\u179b\u17bb\u1794(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.kf=w([A.ul],x.i)
A.zn=new B.d(null,A.kf,null)
A.fr=w([A.zn],x.i)
A.CI=new B.b(A.fr,null)
A.rf=new C.a("\u179b\u17bb\u1794\u1792\u17b6\u178f\u17bb\u178a\u17c2\u179b\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1785\u17c1\u1789\u1796\u17b8\u1794\u1789\u17d2\u1787\u17b8",null)
A.lE=w([A.rf],x.i)
A.Cu=new B.b(A.lE,null)
A.e2=w([A.FI,A.Fm,A.CI,A.Cu],x.i)
A.Gg=new B.o(A.e2,null)
A.uT=new C.a("\u1797\u17d2\u1787\u17b6\u1794\u17cb(...)",null)
A.nj=w([A.uT],x.i)
A.zQ=new B.d(null,A.nj,null)
A.c1=w([A.zQ],x.i)
A.Dk=new B.b(A.c1,null)
A.ut=new C.a("join(...)",null)
A.cl=w([A.ut],x.i)
A.z4=new B.d(null,A.cl,null)
A.lJ=w([A.z4],x.i)
A.Da=new B.b(A.lJ,null)
A.v9=new C.a('\u1797\u17d2\u1787\u17b6\u1794\u17cb(\u1794\u1789\u17d2\u1787\u17b8, "-")',null)
A.h6=w([A.v9],x.i)
A.zP=new B.d(null,A.h6,null)
A.mP=w([A.zP],x.i)
A.EE=new B.b(A.mP,null)
A.pa=new C.a("\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 String \u178f\u17c2\u1798\u17bd\u1799",null)
A.kF=w([A.pa],x.i)
A.CK=new B.b(A.kF,null)
A.hE=w([A.Dk,A.Da,A.EE,A.CK],x.i)
A.GV=new B.o(A.hE,null)
A.qk=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794(...)",null)
A.jM=w([A.qk],x.i)
A.xu=new B.d(null,A.jM,null)
A.kN=w([A.xu],x.i)
A.Er=new B.b(A.kN,null)
A.vc=new C.a("sort(...)",null)
A.jU=w([A.vc],x.i)
A.yM=new B.d(null,A.jU,null)
A.lX=w([A.yM],x.i)
A.DB=new B.b(A.lX,null)
A.uD=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794(\u1794\u1789\u17d2\u1787\u17b8)",null)
A.l3=w([A.uD],x.i)
A.yP=new B.d(null,A.l3,null)
A.kU=w([A.yP],x.i)
A.CH=new B.b(A.kU,null)
A.q1=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8\u178f\u17b6\u1798\u179b\u17c6\u178a\u17b6\u1794\u17cb\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u1781\u179a\u1780\u17d2\u179a\u1798",null)
A.fo=w([A.q1],x.i)
A.Dj=new B.b(A.fo,null)
A.j6=w([A.Er,A.DB,A.CH,A.Dj],x.i)
A.GP=new B.o(A.j6,null)
A.t5=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8(...)",null)
A.f0=w([A.t5],x.i)
A.yd=new B.d(null,A.f0,null)
A.hj=w([A.yd],x.i)
A.CO=new B.b(A.hj,null)
A.rC=new C.a("reverse(...)",null)
A.lV=w([A.rC],x.i)
A.zu=new B.d(null,A.lV,null)
A.lt=w([A.zu],x.i)
A.Dp=new B.b(A.lt,null)
A.tg=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8(\u1794\u1789\u17d2\u1787\u17b8)",null)
A.du=w([A.tg],x.i)
A.y5=new B.d(null,A.du,null)
A.m1=w([A.y5],x.i)
A.Dz=new B.b(A.m1,null)
A.u6=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8 \u17ac\u17a2\u1780\u17d2\u179f\u179a\u1796\u17b8\u1780\u17d2\u179a\u17c4\u1799\u1798\u1780\u1798\u17bb\u1781 (Reverse)",null)
A.cj=w([A.u6],x.i)
A.FB=new B.b(A.cj,null)
A.hn=w([A.CO,A.Dp,A.Dz,A.FB],x.i)
A.H1=new B.o(A.hn,null)
A.qI=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780(...)",null)
A.hm=w([A.qI],x.i)
A.yy=new B.d(null,A.hm,null)
A.kj=w([A.yy],x.i)
A.EB=new B.b(A.kj,null)
A.r4=new C.a("indexOf(...)",null)
A.fH=w([A.r4],x.i)
A.yW=new B.d(null,A.fH,null)
A.dI=w([A.yW],x.i)
A.Fs=new B.b(A.dI,null)
A.re=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.ke=w([A.re],x.i)
A.y7=new B.d(null,A.ke,null)
A.jn=w([A.y7],x.i)
A.Eh=new B.b(A.jn,null)
A.t1=new C.a("\u179a\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd (Index) \u1793\u17c3\u1792\u17b6\u178f\u17bb \u17ac\u17a2\u1780\u17d2\u179f\u179a (\u1795\u17d2\u178a\u179b\u17cb -\u17e1 \u1794\u17be\u1782\u17d2\u1798\u17b6\u1793)",null)
A.fy=w([A.t1],x.i)
A.Ec=new B.b(A.fy,null)
A.lT=w([A.EB,A.Fs,A.Eh,A.Ec],x.i)
A.H9=new B.o(A.lT,null)
A.un=new C.a("\u1798\u17b6\u1793(...)",null)
A.hO=w([A.un],x.i)
A.yL=new B.d(null,A.hO,null)
A.eS=w([A.yL],x.i)
A.Fy=new B.b(A.eS,null)
A.pr=new C.a("contains(...)",null)
A.ny=w([A.pr],x.i)
A.zk=new B.d(null,A.ny,null)
A.dC=w([A.zk],x.i)
A.DP=new B.b(A.dC,null)
A.pn=new C.a("\u1798\u17b6\u1793(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.ma=w([A.pn],x.i)
A.z5=new B.d(null,A.ma,null)
A.ij=w([A.z5],x.i)
A.EI=new B.b(A.ij,null)
A.uE=new C.a("\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u178f\u17d2\u178f\u1798\u17b6\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8 \u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u179c\u178f\u17d2\u1790\u17bb (\u1796\u17b7\u178f / \u1798\u17b7\u1793\u1796\u17b7\u178f)",null)
A.n2=w([A.uE],x.i)
A.DQ=new B.b(A.n2,null)
A.mR=w([A.Fy,A.DP,A.EI,A.DQ],x.i)
A.Ha=new B.o(A.mR,null)
A.p8=new C.a("\u1796\u17c1\u179b\u1793\u17c1\u17c7()",null)
A.jV=w([A.p8],x.i)
A.xS=new B.d(null,A.jV,null)
A.dw=w([A.xS],x.i)
A.b7=new B.b(A.dw,null)
A.vE=new C.a("now()",null)
A.lg=w([A.vE],x.i)
A.xl=new B.d(null,A.lg,null)
A.jI=w([A.xl],x.i)
A.EX=new B.b(A.jI,null)
A.u4=new C.a("\u1795\u17d2\u178a\u179b\u17cb\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793\u1782\u17b7\u178f\u1787\u17b6 Milliseconds \u1785\u17b6\u1794\u17cb\u1796\u17b8 Epoch",null)
A.h2=w([A.u4],x.i)
A.CP=new B.b(A.h2,null)
A.l2=w([A.b7,A.EX,A.b7,A.CP],x.i)
A.H5=new B.o(A.l2,null)
A.uB=new C.a("\u17a2\u17b6\u1793(...)",null)
A.dN=w([A.uB],x.i)
A.zb=new B.d(null,A.dN,null)
A.kG=w([A.zb],x.i)
A.EG=new B.b(A.kG,null)
A.q7=new C.a("input(...)",null)
A.fl=w([A.q7],x.i)
A.yu=new B.d(null,A.fl,null)
A.my=w([A.yu],x.i)
A.Fi=new B.b(A.my,null)
A.uk=new C.a('\u17a2\u17b6\u1793("\u1794\u1789\u17d2\u1785\u17bc\u179b\u1788\u17d2\u1798\u17c4\u17c7: ")',null)
A.kn=w([A.uk],x.i)
A.yX=new B.d(null,A.kn,null)
A.n4=w([A.yX],x.i)
A.Ed=new B.b(A.n4,null)
A.ux=new C.a("\u1791\u1791\u17bd\u179b\u1780\u17b6\u179a\u179c\u17b6\u1799\u1794\u1789\u17d2\u1785\u17bc\u179b\u1796\u17b8\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Standard Input)",null)
A.fO=w([A.ux],x.i)
A.F9=new B.b(A.fO,null)
A.mw=w([A.EG,A.Fi,A.Ed,A.F9],x.i)
A.GA=new B.o(A.mw,null)
A.dx=w([A.H7,A.H2,A.Gn,A.Gi,A.Gu,A.Gs,A.GK,A.Gd,A.GB,A.GM,A.GG,A.GY,A.H8,A.GI,A.GJ,A.Gl,A.Gy,A.GH,A.Gq,A.GE,A.GS,A.Gz,A.GR,A.Gf,A.Gg,A.GV,A.GP,A.H1,A.H9,A.Ha,A.H5,A.GA],x.i)
A.Ck=new B.cE(A.dx,null)
A.cR=w([A.Ga,A.Ck],x.i)
A.Ci=new B.cD(A.cR,null)
A.ca=w([A.Ci],x.i)
A.A7=new B.w(null,"table-responsive",null,null,null,A.ca,null)
A.jq=w([A.Am,A.Bb,A.A7],x.i)
A.Bt=new B.a8("builtins",A.jq,null)
A.rV=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd (Tools & IDEs) ",null)
A.x5=new B.R("#ides",null,"heading-anchor",null,null,null,A.e,null)
A.cO=w([A.rV,A.x5],x.i)
A.Ap=new B.a7(A.cO,null)
A.t7=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u179a\u17bd\u179b\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u17a2\u17c1\u1780\u17bc\u17a1\u17bc\u179f\u17ca\u17b8 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u179a\u17bd\u1798\u1798\u17b6\u1793\u17a7\u1794\u1780\u179a\u178e\u17cd\u1791\u17c6\u1793\u17be\u1794\u17d7\u1787\u17b6\u1785\u17d2\u179a\u17be\u1793\u17d6",null)
A.h7=w([A.t7],x.i)
A.Bc=new B.M(null,null,A.h7,null)
A.vp=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a Khmer IDE (Cross-Platform)\u17d6 ",null)
A.kE=w([A.vp],x.i)
A.BT=new B.Y(A.kE,null)
A.vs=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799 Flutter \u1798\u17b6\u1793\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793 Dart Engine \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u179b\u17be macOS, Windows, Linux \u1793\u17b7\u1784 Web \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb \u1787\u17b6\u1798\u17bd\u1799 Virtual Khmer Keyboard, Tabs, AST Inspector \u1793\u17b7\u1784 Output Console\u17d4",null)
A.hH=w([A.BT,A.vs],x.i)
A.AO=new B.a4(null,null,null,A.hH,null)
A.vD=new C.a("Programiz-Style Web IDE\u17d6 ",null)
A.hF=w([A.vD],x.i)
A.BX=new B.Y(A.hF,null)
A.r5=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798 Programiz \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be Web Browser \u1787\u17b6\u1798\u17bd\u1799 Python Backend Server\u17d4",null)
A.ie=w([A.BX,A.r5],x.i)
A.AB=new B.a4(null,null,null,A.ie,null)
A.tA=new C.a("Command Line Interface (CLI) & REPL\u17d6 ",null)
A.j1=w([A.tA],x.i)
A.C4=new B.Y(A.j1,null)
A.oW=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u1794\u1789\u17d2\u1787\u17b6\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8 Terminal \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u17af\u1780\u179f\u17b6\u179a ",null)
A.vf=new C.a(".khmer",null)
A.i8=w([A.vf],x.i)
A.aY=new B.d(null,A.i8,null)
A.D=new C.a("\u17d4",null)
A.fR=w([A.C4,A.oW,A.aY,A.D],x.i)
A.AH=new B.a4(null,null,null,A.fR,null)
A.d4=w([A.AO,A.AB,A.AH],x.i)
A.He=new B.bp(null,null,A.d4,null)
A.ce=w([A.Ap,A.Bc,A.He],x.i)
A.Bu=new B.a8("ides",A.ce,null)
A.uC=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Khmer Syntax Cheat Sheet) ",null)
A.x7=new B.R("#cheat-sheet",null,"heading-anchor",null,null,null,A.e,null)
A.cB=w([A.uC,A.x7],x.i)
A.Ao=new B.a7(A.cB,null)
A.tN=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u1799\u17c4\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)\u17d6",null)
A.cd=w([A.tN],x.i)
A.Bd=new B.M(null,null,A.cd,null)
A.q9=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Keyword)",null)
A.eq=w([A.q9],x.i)
A.G9=new B.as(A.eq,null)
A.vS=new C.a("\u179f\u1798\u1798\u17bc\u179b\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Equivalent)",null)
A.j3=w([A.vS],x.i)
A.FZ=new B.as(A.j3,null)
A.uJ=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb",null)
A.kW=w([A.uJ],x.i)
A.G7=new B.as(A.kW,null)
A.v7=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1780\u17bc\u178a",null)
A.cN=w([A.v7],x.i)
A.G8=new B.as(A.cN,null)
A.hh=w([A.G9,A.FZ,A.G7,A.G8],x.i)
A.H3=new B.o(A.hh,null)
A.m4=w([A.H3],x.i)
A.Gc=new B.cF(A.m4,null)
A.pR=new C.a("\u178f\u17b6\u17c6\u1784",null)
A.hr=w([A.pR],x.i)
A.a3=new B.d(null,A.hr,null)
A.mX=w([A.a3],x.i)
A.Dn=new B.b(A.mX,null)
A.u7=new C.a("let / var",null)
A.ix=w([A.u7],x.i)
A.xv=new B.d(null,A.ix,null)
A.eG=w([A.xv],x.i)
A.F5=new B.b(A.eG,null)
A.pb=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1790\u17d2\u1798\u17b8",null)
A.lv=w([A.pb],x.i)
A.DC=new B.b(A.lv,null)
A.uI=new C.a("\u178f\u17b6\u17c6\u1784 x = \u17e1\u17e0;",null)
A.lb=w([A.uI],x.i)
A.zy=new B.d(null,A.lb,null)
A.fj=w([A.zy],x.i)
A.E4=new B.b(A.fj,null)
A.fv=w([A.Dn,A.F5,A.DC,A.E4],x.i)
A.Gm=new B.o(A.fv,null)
A.oD=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789",null)
A.jp=w([A.oD],x.i)
A.aV=new B.d(null,A.jp,null)
A.hi=w([A.aV],x.i)
A.Cq=new B.b(A.hi,null)
A.vO=new C.a("print / echo",null)
A.kV=w([A.vO],x.i)
A.yI=new B.d(null,A.kV,null)
A.mU=w([A.yI],x.i)
A.EZ=new B.b(A.mU,null)
A.r9=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb",null)
A.dE=w([A.r9],x.i)
A.F4=new B.b(A.dE,null)
A.vN=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8");',null)
A.iU=w([A.vN],x.i)
A.xX=new B.d(null,A.iU,null)
A.hs=w([A.xX],x.i)
A.Em=new B.b(A.hs,null)
A.fK=w([A.Cq,A.EZ,A.F4,A.Em],x.i)
A.Gp=new B.o(A.fK,null)
A.pd=new C.a("\u1794\u17be",null)
A.hC=w([A.pd],x.i)
A.a2=new B.d(null,A.hC,null)
A.hy=w([A.a2],x.i)
A.Dy=new B.b(A.hy,null)
A.uj=new C.a("if",null)
A.i_=w([A.uj],x.i)
A.yt=new B.d(null,A.i_,null)
A.dM=w([A.yt],x.i)
A.D7=new B.b(A.dM,null)
A.pl=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c6\u1794\u17bc\u1784",null)
A.dq=w([A.pl],x.i)
A.DG=new B.b(A.dq,null)
A.tJ=new C.a("\u1794\u17be (x > \u17e0) { ... }",null)
A.c0=w([A.tJ],x.i)
A.zM=new B.d(null,A.c0,null)
A.ni=w([A.zM],x.i)
A.DN=new B.b(A.ni,null)
A.cv=w([A.Dy,A.D7,A.DG,A.DN],x.i)
A.H_=new B.o(A.cv,null)
A.r0=new C.a("\u17ac\u1794\u17be",null)
A.e1=w([A.r0],x.i)
A.aU=new B.d(null,A.e1,null)
A.j5=w([A.aU],x.i)
A.ER=new B.b(A.j5,null)
A.rB=new C.a("else if / elif",null)
A.kv=w([A.rB],x.i)
A.z9=new B.d(null,A.kv,null)
A.f3=w([A.z9],x.i)
A.ED=new B.b(A.f3,null)
A.qE=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",null)
A.jb=w([A.qE],x.i)
A.CV=new B.b(A.jb,null)
A.tH=new C.a("\u17ac\u1794\u17be (x == \u17e0) { ... }",null)
A.ik=w([A.tH],x.i)
A.yb=new B.d(null,A.ik,null)
A.iv=w([A.yb],x.i)
A.EJ=new B.b(A.iv,null)
A.eo=w([A.ER,A.ED,A.CV,A.EJ],x.i)
A.GU=new B.o(A.eo,null)
A.or=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",null)
A.io=w([A.or],x.i)
A.aZ=new B.d(null,A.io,null)
A.cI=w([A.aZ],x.i)
A.Dx=new B.b(A.cI,null)
A.tQ=new C.a("else",null)
A.hV=w([A.tQ],x.i)
A.z3=new B.d(null,A.hV,null)
A.hc=w([A.z3],x.i)
A.CW=new B.b(A.hc,null)
A.to=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1793\u17c1\u17c7",null)
A.kp=w([A.to],x.i)
A.EU=new B.b(A.kp,null)
A.qs=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f { ... }",null)
A.cL=w([A.qs],x.i)
A.xO=new B.d(null,A.cL,null)
A.mA=w([A.xO],x.i)
A.Ff=new B.b(A.mA,null)
A.lQ=w([A.Dx,A.CW,A.EU,A.Ff],x.i)
A.GT=new B.o(A.lQ,null)
A.uf=new C.a("\u1781\u178e\u17c8",null)
A.cP=w([A.uf],x.i)
A.a0=new B.d(null,A.cP,null)
A.lD=w([A.a0],x.i)
A.E3=new B.b(A.lD,null)
A.vz=new C.a("while",null)
A.i5=w([A.vz],x.i)
A.yV=new B.d(null,A.i5,null)
A.eZ=w([A.yV],x.i)
A.Ej=new B.b(A.eZ,null)
A.qz=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c",null)
A.fg=w([A.qz],x.i)
A.Et=new B.b(A.fg,null)
A.rP=new C.a("\u1781\u178e\u17c8 (x > \u17e0) { ... }",null)
A.lG=w([A.rP],x.i)
A.xZ=new B.d(null,A.lG,null)
A.k5=w([A.xZ],x.i)
A.F1=new B.b(A.k5,null)
A.fa=w([A.E3,A.Ej,A.Et,A.F1],x.i)
A.Ge=new B.o(A.fa,null)
A.rY=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",null)
A.kI=w([A.rY],x.i)
A.b_=new B.d(null,A.kI,null)
A.d9=w([A.b_],x.i)
A.FX=new B.b(A.d9,null)
A.u2=new C.a("for",null)
A.hY=w([A.u2],x.i)
A.zJ=new B.d(null,A.hY,null)
A.iz=w([A.zJ],x.i)
A.Fo=new B.b(A.iz,null)
A.tK=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1798\u17b6\u1793\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1780\u17c6\u178e\u178f\u17cb",null)
A.cT=w([A.tK],x.i)
A.Ek=new B.b(A.cT,null)
A.ub=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i=\u17e0; i<\u17e5; i=i+\u17e1)",null)
A.lN=w([A.ub],x.i)
A.xE=new B.d(null,A.lN,null)
A.nx=w([A.xE],x.i)
A.Es=new B.b(A.nx,null)
A.dQ=w([A.FX,A.Fo,A.Ek,A.Es],x.i)
A.Go=new B.o(A.dQ,null)
A.dJ=w([A.I],x.i)
A.CT=new B.b(A.dJ,null)
A.uS=new C.a("function / method",null)
A.jt=w([A.uS],x.i)
A.yo=new B.d(null,A.jt,null)
A.d5=w([A.yo],x.i)
A.FH=new B.b(A.d5,null)
A.pw=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1791\u17bc\u1791\u17c5 \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.eQ=w([A.pw],x.i)
A.El=new B.b(A.eQ,null)
A.uM=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17bc\u1780(\u1780, \u1781) { ... }",null)
A.d0=w([A.uM],x.i)
A.za=new B.d(null,A.d0,null)
A.m8=w([A.za],x.i)
A.Ft=new B.b(A.m8,null)
A.f1=w([A.CT,A.FH,A.El,A.Ft],x.i)
A.Gr=new B.o(A.f1,null)
A.mE=w([A.b1],x.i)
A.Dw=new B.b(A.mE,null)
A.vd=new C.a("return",null)
A.i2=w([A.vd],x.i)
A.yD=new B.d(null,A.i2,null)
A.iQ=w([A.yD],x.i)
A.E7=new B.b(A.iQ,null)
A.uX=new C.a("\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1796\u17b8\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.fn=w([A.uX],x.i)
A.Dv=new B.b(A.fn,null)
A.qO=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb \u1780 + \u1781",null)
A.fm=w([A.qO],x.i)
A.xs=new B.d(null,A.fm,null)
A.j9=w([A.xs],x.i)
A.Cy=new B.b(A.j9,null)
A.jJ=w([A.Dw,A.E7,A.Dv,A.Cy],x.i)
A.H4=new B.o(A.jJ,null)
A.mj=w([A.a4],x.i)
A.Eq=new B.b(A.mj,null)
A.tt=new C.a("class",null)
A.hU=w([A.tt],x.i)
A.yi=new B.d(null,A.hU,null)
A.l4=w([A.yi],x.i)
A.FW=new B.b(A.l4,null)
A.qU=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP",null)
A.cF=w([A.qU],x.i)
A.Fe=new B.b(A.cF,null)
A.pX=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u17b7\u179f\u17d2\u179f { ... }",null)
A.lS=w([A.pX],x.i)
A.xo=new B.d(null,A.lS,null)
A.mQ=w([A.xo],x.i)
A.CE=new B.b(A.mQ,null)
A.lP=w([A.Eq,A.FW,A.Fe,A.CE],x.i)
A.GO=new B.o(A.lP,null)
A.oq=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f",null)
A.c2=w([A.oq],x.i)
A.zx=new B.d(null,A.c2,null)
A.jS=w([A.zx],x.i)
A.EN=new B.b(A.jS,null)
A.tM=new C.a("constructor / __init__",null)
A.cn=w([A.tM],x.i)
A.zh=new B.d(null,A.cn,null)
A.hP=w([A.zh],x.i)
A.D0=new B.b(A.hP,null)
A.qh=new C.a("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u1794\u1784\u17d2\u1780\u17be\u178f\u179c\u178f\u17d2\u1790\u17bb",null)
A.cS=w([A.qh],x.i)
A.FU=new B.b(A.cS,null)
A.oC=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) { \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7 }",null)
A.cD=w([A.oC],x.i)
A.yh=new B.d(null,A.cD,null)
A.dA=w([A.yh],x.i)
A.DX=new B.b(A.dA,null)
A.jz=w([A.EN,A.D0,A.FU,A.DX],x.i)
A.Gt=new B.o(A.jz,null)
A.oP=new C.a("\u1793\u17c1\u17c7",null)
A.jO=w([A.oP],x.i)
A.xT=new B.d(null,A.jO,null)
A.am=new C.a(" / ",null)
A.vH=new C.a("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",null)
A.n1=w([A.vH],x.i)
A.yp=new B.d(null,A.n1,null)
A.hQ=w([A.xT,A.am,A.yp],x.i)
A.Ef=new B.b(A.hQ,null)
A.v8=new C.a("this / self",null)
A.kR=w([A.v8],x.i)
A.yU=new B.d(null,A.kR,null)
A.mx=w([A.yU],x.i)
A.Dh=new B.b(A.mx,null)
A.py=new C.a("\u1799\u17c4\u1784\u1791\u17c5\u179b\u17be Object \u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793",null)
A.ib=w([A.py],x.i)
A.ET=new B.b(A.ib,null)
A.pW=new C.a('\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"',null)
A.h8=w([A.pW],x.i)
A.zH=new B.d(null,A.h8,null)
A.ks=w([A.zH],x.i)
A.CD=new B.b(A.ks,null)
A.mF=w([A.Ef,A.Dh,A.ET,A.CD],x.i)
A.GQ=new B.o(A.mF,null)
A.mV=w([A.aW],x.i)
A.Fn=new B.b(A.mV,null)
A.uU=new C.a("new",null)
A.i1=w([A.uU],x.i)
A.xM=new B.d(null,A.i1,null)
A.jf=w([A.xM],x.i)
A.Co=new B.b(A.jf,null)
A.us=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.ld=w([A.us],x.i)
A.F_=new B.b(A.ld,null)
A.oB=new C.a('\u178f\u17b6\u17c6\u1784 p = \u1790\u17d2\u1798\u17b8 \u179f\u17b7\u179f\u17d2\u179f("\u178f\u17b6\u179a\u17b6")',null)
A.cs=w([A.oB],x.i)
A.zi=new B.d(null,A.cs,null)
A.dS=w([A.zi],x.i)
A.CZ=new B.b(A.dS,null)
A.cX=w([A.Fn,A.Co,A.F_,A.CZ],x.i)
A.GX=new B.o(A.cX,null)
A.fY=w([A.b0],x.i)
A.E5=new B.b(A.fY,null)
A.tT=new C.a("extends",null)
A.hW=w([A.tT],x.i)
A.z2=new B.d(null,A.hW,null)
A.mt=w([A.z2],x.i)
A.Fk=new B.b(A.mt,null)
A.rs=new C.a("\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Inheritance)",null)
A.jT=w([A.rs],x.i)
A.DR=new B.b(A.jT,null)
A.qR=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1798\u17b6 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c",null)
A.hp=w([A.qR],x.i)
A.yJ=new B.d(null,A.hp,null)
A.fD=w([A.yJ],x.i)
A.Fv=new B.b(A.fD,null)
A.iM=w([A.E5,A.Fk,A.DR,A.Fv],x.i)
A.Gx=new B.o(A.iM,null)
A.lf=w([A.aS],x.i)
A.Eo=new B.b(A.lf,null)
A.lK=w([A.aT],x.i)
A.EM=new B.b(A.lK,null)
A.qB=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f Getter \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u178f\u1798\u17d2\u179b\u17c3\u1782\u17bb\u178e\u179b\u1780\u17d2\u1781\u178e\u17c8",null)
A.cc=w([A.qB],x.i)
A.F0=new B.b(A.cc,null)
A.qP=new C.a("\u1799\u1780 \u1788\u17d2\u1798\u17c4\u17c7\u1796\u17c1\u1789 { ... }",null)
A.de=w([A.qP],x.i)
A.xA=new B.d(null,A.de,null)
A.l_=w([A.xA],x.i)
A.Ez=new B.b(A.l_,null)
A.e0=w([A.Eo,A.EM,A.F0,A.Ez],x.i)
A.GZ=new B.o(A.e0,null)
A.nl=w([A.aX,A.am,A.b2],x.i)
A.DF=new B.b(A.nl,null)
A.da=w([A.b4],x.i)
A.CN=new B.b(A.da,null)
A.qL=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f Setter \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1782\u17bb\u178e\u179b\u1780\u17d2\u1781\u178e\u17c8",null)
A.eK=w([A.qL],x.i)
A.Cz=new B.b(A.eK,null)
A.ou=new C.a("\u178a\u17b6\u1780\u17cb \u17a2\u17b6\u1799\u17bb(\u178f) { \u1793\u17c1\u17c7._\u17a2\u17b6\u1799\u17bb = \u178f; }",null)
A.dd=w([A.ou],x.i)
A.yY=new B.d(null,A.dd,null)
A.e3=w([A.yY],x.i)
A.E8=new B.b(A.e3,null)
A.jm=w([A.DF,A.CN,A.Cz,A.E8],x.i)
A.GN=new B.o(A.jm,null)
A.r3=new C.a("\u1796\u17b7\u178f",null)
A.fJ=w([A.r3],x.i)
A.a1=new B.d(null,A.fJ,null)
A.fA=w([A.a1],x.i)
A.a5=new B.b(A.fA,null)
A.vq=new C.a("true",null)
A.i4=w([A.vq],x.i)
A.xC=new B.d(null,A.i4,null)
A.ct=w([A.xC],x.i)
A.Fr=new B.b(A.ct,null)
A.td=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1796\u17b7\u178f",null)
A.cK=w([A.td],x.i)
A.Ct=new B.b(A.cK,null)
A.oN=new C.a("\u178f\u17b6\u17c6\u1784 \u178f\u17d2\u179a\u17bc\u179c = \u1796\u17b7\u178f",null)
A.dt=w([A.oN],x.i)
A.xD=new B.d(null,A.dt,null)
A.ng=w([A.xD],x.i)
A.DY=new B.b(A.ng,null)
A.mz=w([A.a5,A.Fr,A.Ct,A.DY],x.i)
A.Gh=new B.o(A.mz,null)
A.ta=new C.a("\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.l5=w([A.ta],x.i)
A.aR=new B.d(null,A.l5,null)
A.il=w([A.aR],x.i)
A.E9=new B.b(A.il,null)
A.tZ=new C.a("false",null)
A.hX=w([A.tZ],x.i)
A.y9=new B.d(null,A.hX,null)
A.mY=w([A.y9],x.i)
A.FS=new B.b(A.mY,null)
A.ui=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.ls=w([A.ui],x.i)
A.DM=new B.b(A.ls,null)
A.rx=new C.a("\u178f\u17b6\u17c6\u1784 \u1781\u17bb\u179f = \u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.mf=w([A.rx],x.i)
A.xg=new B.d(null,A.mf,null)
A.ku=w([A.xg],x.i)
A.Cp=new B.b(A.ku,null)
A.jw=w([A.E9,A.FS,A.DM,A.Cp],x.i)
A.GW=new B.o(A.jw,null)
A.tk=new C.a("\u1791\u1791\u17c1",null)
A.is=w([A.tk],x.i)
A.aP=new B.d(null,A.is,null)
A.l1=w([A.aP],x.i)
A.D9=new B.b(A.l1,null)
A.rd=new C.a("null / none",null)
A.n5=w([A.rd],x.i)
A.ya=new B.d(null,A.n5,null)
A.dH=w([A.ya],x.i)
A.FJ=new B.b(A.dH,null)
A.p2=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1791\u1791\u17c1\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",null)
A.k1=w([A.p2],x.i)
A.D4=new B.b(A.k1,null)
A.pT=new C.a("\u178f\u17b6\u17c6\u1784 \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 = \u1791\u1791\u17c1",null)
A.dT=w([A.pT],x.i)
A.yG=new B.d(null,A.dT,null)
A.jQ=w([A.yG],x.i)
A.Fc=new B.b(A.jQ,null)
A.l0=w([A.D9,A.FJ,A.D4,A.Fc],x.i)
A.Gk=new B.o(A.l0,null)
A.no=w([A.Gm,A.Gp,A.H_,A.GU,A.GT,A.Ge,A.Go,A.Gr,A.H4,A.GO,A.Gt,A.GQ,A.GX,A.Gx,A.GZ,A.GN,A.Gh,A.GW,A.Gk],x.i)
A.Cl=new B.cE(A.no,null)
A.di=w([A.Gc,A.Cl],x.i)
A.Cj=new B.cD(A.di,null)
A.db=w([A.Cj],x.i)
A.A4=new B.w(null,"table-responsive",null,null,null,A.db,null)
A.jH=w([A.Ao,A.Bd,A.A4],x.i)
A.Bx=new B.a8("cheat-sheet",A.jH,null)
A.rb=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb (Live Interactive Playground) ",null)
A.wZ=new B.R("#playground",null,"heading-anchor",null,null,null,A.e,null)
A.kc=w([A.rb,A.wZ],x.i)
A.As=new B.a7(A.kc,null)
A.uu=new C.a("\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1780\u17d2\u1793\u17bb\u1784 Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780! \u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u17ac\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1781\u17d2\u179b\u17bd\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780 \u179a\u17bd\u1785\u1785\u17bb\u1785 ",null)
A.uH=new C.a(' "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" ',null)
A.f4=w([A.uH],x.i)
A.BS=new B.Y(A.f4,null)
A.E=new C.a("\u17d6",null)
A.kB=w([A.uu,A.BS,A.E],x.i)
A.B4=new B.M(null,null,A.kB,null)
A.o1=new B.ck(null)
A.c4=w([A.As,A.B4,A.o1],x.i)
A.BB=new B.a8("playground",A.c4,null)
A.kM=w([A.Bt,A.Bu,A.Bx,A.BB],x.i)
A.bQ=new B.aY(A.kM,null)
A.qn=new C.a("\u17a2\u1790\u17c1\u179a \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables & Data Types) ",null)
A.x_=new B.R("#variables",null,"heading-anchor",null,null,null,A.e,null)
A.ja=w([A.qn,A.x_],x.i)
A.Ac=new B.a7(A.ja,null)
A.qp=new C.a("\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.rJ=new C.a(" (Let) \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u17d4 \u17a2\u1790\u17c1\u179a\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba dynamic-typed \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1795\u17d2\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6 \u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a (String), Boolean, \u17ac Null \u1794\u17b6\u1793\u178a\u17c4\u1799\u179f\u17c1\u179a\u17b8\u17d4",null)
A.fT=w([A.qp,A.a3,A.rJ],x.i)
A.B7=new B.M(null,null,A.fT,null)
A.qH=new C.a("\u179b\u17c1\u1781 (Numbers): ",null)
A.f2=w([A.qH],x.i)
A.BU=new B.Y(A.f2,null)
A.rG=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb (",null)
A.vt=new C.a("10",null)
A.fL=w([A.vt],x.i)
A.y8=new B.d(null,A.fL,null)
A.n=new C.a(", ",null)
A.pm=new C.a("3.14",null)
A.jc=w([A.pm],x.i)
A.zz=new B.d(null,A.jc,null)
A.qi=new C.a(") \u1793\u17b7\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (",null)
A.q5=new C.a("\u17e1\u17e0",null)
A.lF=w([A.q5],x.i)
A.z0=new B.d(null,A.lF,null)
A.tr=new C.a("\u17e3.\u17e1\u17e4",null)
A.hd=w([A.tr],x.i)
A.y3=new B.d(null,A.hd,null)
A.vm=new C.a(")\u17d4",null)
A.jv=w([A.BU,A.rG,A.y8,A.n,A.zz,A.qi,A.z0,A.n,A.y3,A.vm],x.i)
A.AE=new B.a4(null,null,null,A.jv,null)
A.oG=new C.a("\u17a2\u1780\u17d2\u179f\u179a (Strings): ",null)
A.lL=w([A.oG],x.i)
A.BY=new B.Y(A.lL,null)
A.rp=new C.a("\u179f\u179a\u179f\u17c1\u179a\u1793\u17c5\u1785\u1793\u17d2\u179b\u17c4\u17c7\u179f\u1789\u17d2\u1789\u17b6\u179f\u1798\u17d2\u179a\u1784\u17cb ",null)
A.r6=new C.a('"..."',null)
A.kz=w([A.r6],x.i)
A.yl=new B.d(null,A.kz,null)
A.ur=new C.a("'...'",null)
A.h3=w([A.ur],x.i)
A.xy=new B.d(null,A.h3,null)
A.iJ=w([A.BY,A.rp,A.yl,A.ap,A.xy,A.D],x.i)
A.AF=new B.a4(null,null,null,A.iJ,null)
A.vo=new C.a("\u1794\u17ca\u17bc\u179b\u17b8\u1793 (Booleans): ",null)
A.nu=w([A.vo],x.i)
A.BZ=new B.Y(A.nu,null)
A.aq=new C.a("\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.ru=new C.a(" (True) \u1793\u17b7\u1784 ",null)
A.tc=new C.a(" (False)\u17d4",null)
A.cW=w([A.BZ,A.aq,A.a1,A.ru,A.aR,A.tc],x.i)
A.AN=new B.a4(null,null,null,A.cW,null)
A.vI=new C.a("\u1791\u1791\u17c1 (Null): ",null)
A.e7=w([A.vI],x.i)
A.C0=new B.Y(A.e7,null)
A.rI=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u1798\u17d2\u179b\u17c3\u178a\u17c2\u179b\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4",null)
A.hK=w([A.C0,A.aq,A.aP,A.rI],x.i)
A.AL=new B.a4(null,null,null,A.hK,null)
A.mm=w([A.AE,A.AF,A.AN,A.AL],x.i)
A.Hb=new B.bp(null,null,A.mm,null)
A.bs=new B.X("variables.khmer","KHMER",'# \u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7\n\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"\n\u178f\u17b6\u17c6\u1784 \u17a2\u17b6\u1799\u17bb = \u17e2\u17e1\n\u178f\u17b6\u17c6\u1784 \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f = \u1796\u17b7\u178f\n\u178f\u17b6\u17c6\u1784 \u1780\u17b6\u179a\u1784\u17b6\u179a = \u1791\u1791\u17c1\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1788\u17d2\u1798\u17c4\u17c7:", \u1788\u17d2\u1798\u17c4\u17c7)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17a2\u17b6\u1799\u17bb:", \u17a2\u17b6\u1799\u17bb)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17d2\u1790\u17b6\u1793\u1797\u17b6\u1796\u1787\u17b6\u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f:", \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u179a\u1784\u17b6\u179a\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793:", \u1780\u17b6\u179a\u1784\u17b6\u179a)',null,null)
A.kd=w([A.Ac,A.B7,A.Hb,A.bs],x.i)
A.BC=new B.a8("variables",A.kd,null)
A.r_=new C.a("\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Khmer Numerals & Math) ",null)
A.xd=new B.R("#numerals",null,"heading-anchor",null,null,null,A.e,null)
A.jP=w([A.r_,A.xd],x.i)
A.At=new B.a7(A.jP,null)
A.pv=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u17a2\u179f\u17d2\u1785\u17b6\u179a\u17d2\u1799\u1794\u17c6\u1795\u17bb\u178f\u179a\u1794\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba\u1780\u17b6\u179a\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a ",null)
A.uP=new C.a("\u17e0, \u17e1, \u17e2, \u17e3, \u17e4, \u17e5, \u17e6, \u17e7, \u17e8, \u17e9",null)
A.es=w([A.uP],x.i)
A.BV=new B.Y(A.es,null)
A.uh=new C.a(" \u1787\u17b6\u179b\u17c1\u1781\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f Lexer \u1793\u17b7\u1784 Parser\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1799\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\u1798\u1780\u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 \u17ac\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794\u1794\u17b6\u1793\u178a\u17c4\u1799\u179a\u179b\u17bc\u1793!",null)
A.fB=w([A.pv,A.BV,A.uh],x.i)
A.AV=new B.M(null,null,A.fB,null)
A.pD=new C.a("\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Operator)",null)
A.lY=w([A.pD],x.i)
A.G0=new B.as(A.lY,null)
A.pe=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 (Description)",null)
A.eH=w([A.pe],x.i)
A.G6=new B.as(A.eH,null)
A.pK=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd (Example)",null)
A.c6=w([A.pK],x.i)
A.G2=new B.as(A.c6,null)
A.qx=new C.a("\u179b\u1791\u17d2\u1792\u1795\u179b (Result)",null)
A.iE=w([A.qx],x.i)
A.G5=new B.as(A.iE,null)
A.ee=w([A.G0,A.G6,A.G2,A.G5],x.i)
A.H6=new B.o(A.ee,null)
A.iw=w([A.H6],x.i)
A.Gb=new B.cF(A.iw,null)
A.qb=new C.a("+",null)
A.eX=w([A.qb],x.i)
A.zs=new B.d(null,A.eX,null)
A.ds=w([A.zs],x.i)
A.Dm=new B.b(A.ds,null)
A.rq=new C.a("\u1794\u17bc\u1780\u179b\u17c1\u1781 \u17ac\u1797\u17d2\u1787\u17b6\u1794\u17cb\u17a2\u1780\u17d2\u179f\u179a",null)
A.dp=w([A.rq],x.i)
A.EF=new B.b(A.dp,null)
A.vg=new C.a("\u17e1\u17e0 + \u17e5",null)
A.eV=w([A.vg],x.i)
A.yx=new B.d(null,A.eV,null)
A.lu=w([A.yx],x.i)
A.DE=new B.b(A.lu,null)
A.p7=new C.a("\u17e1\u17e5",null)
A.dc=w([A.p7],x.i)
A.xG=new B.d(null,A.dc,null)
A.fN=w([A.xG],x.i)
A.FF=new B.b(A.fN,null)
A.jo=w([A.Dm,A.EF,A.DE,A.FF],x.i)
A.GC=new B.o(A.jo,null)
A.oF=new C.a("-",null)
A.jk=w([A.oF],x.i)
A.xQ=new B.d(null,A.jk,null)
A.l8=w([A.xQ],x.i)
A.DV=new B.b(A.l8,null)
A.oV=new C.a("\u178a\u1780\u179b\u17c1\u1781",null)
A.jK=w([A.oV],x.i)
A.CJ=new B.b(A.jK,null)
A.tz=new C.a("\u17e2\u17e0 - \u17e7",null)
A.mr=w([A.tz],x.i)
A.yr=new B.d(null,A.mr,null)
A.hz=w([A.yr],x.i)
A.D5=new B.b(A.hz,null)
A.oS=new C.a("\u17e1\u17e3",null)
A.nn=w([A.oS],x.i)
A.xh=new B.d(null,A.nn,null)
A.nq=w([A.xh],x.i)
A.FN=new B.b(A.nq,null)
A.cM=w([A.DV,A.CJ,A.D5,A.FN],x.i)
A.Gj=new B.o(A.cM,null)
A.oT=new C.a("*",null)
A.cb=w([A.oT],x.i)
A.z_=new B.d(null,A.cb,null)
A.k6=w([A.z_],x.i)
A.DS=new B.b(A.k6,null)
A.tU=new C.a("\u1782\u17bb\u178e\u179b\u17c1\u1781",null)
A.it=w([A.tU],x.i)
A.EY=new B.b(A.it,null)
A.q4=new C.a("\u17e6 * \u17e4",null)
A.iP=w([A.q4],x.i)
A.yB=new B.d(null,A.iP,null)
A.ei=w([A.yB],x.i)
A.Ei=new B.b(A.ei,null)
A.tB=new C.a("\u17e2\u17e4",null)
A.fz=w([A.tB],x.i)
A.zS=new B.d(null,A.fz,null)
A.jR=w([A.zS],x.i)
A.D2=new B.b(A.jR,null)
A.ed=w([A.DS,A.EY,A.Ei,A.D2],x.i)
A.Gw=new B.o(A.ed,null)
A.ox=new C.a("/",null)
A.jE=w([A.ox],x.i)
A.y4=new B.d(null,A.jE,null)
A.ho=w([A.y4],x.i)
A.CC=new B.b(A.ho,null)
A.pf=new C.a("\u1785\u17c2\u1780\u179b\u17c1\u1781",null)
A.eb=w([A.pf],x.i)
A.Fz=new B.b(A.eb,null)
A.qX=new C.a("\u17e5\u17e0 / \u17e2",null)
A.nk=w([A.qX],x.i)
A.xz=new B.d(null,A.nk,null)
A.cV=w([A.xz],x.i)
A.Dd=new B.b(A.cV,null)
A.tm=new C.a("\u17e2\u17e5",null)
A.dB=w([A.tm],x.i)
A.yK=new B.d(null,A.dB,null)
A.fE=w([A.yK],x.i)
A.Dq=new B.b(A.fE,null)
A.iG=w([A.CC,A.Fz,A.Dd,A.Dq],x.i)
A.H0=new B.o(A.iG,null)
A.uo=new C.a("%",null)
A.kb=w([A.uo],x.i)
A.ze=new B.d(null,A.kb,null)
A.lk=w([A.ze],x.i)
A.DD=new B.b(A.lk,null)
A.qY=new C.a("\u179f\u17c6\u178e\u179b\u17cb\u1793\u17c3\u1780\u17b6\u179a\u1785\u17c2\u1780 (Modulo)",null)
A.lM=w([A.qY],x.i)
A.FM=new B.b(A.lM,null)
A.tP=new C.a("\u17e1\u17e0 % \u17e3",null)
A.eu=w([A.tP],x.i)
A.xW=new B.d(null,A.eu,null)
A.i6=w([A.xW],x.i)
A.D_=new B.b(A.i6,null)
A.pp=new C.a("\u17e1",null)
A.kK=w([A.pp],x.i)
A.xB=new B.d(null,A.kK,null)
A.ko=w([A.xB],x.i)
A.Ep=new B.b(A.ko,null)
A.hx=w([A.DD,A.FM,A.D_,A.Ep],x.i)
A.GF=new B.o(A.hx,null)
A.uQ=new C.a("==",null)
A.cx=w([A.uQ],x.i)
A.z6=new B.d(null,A.cx,null)
A.vC=new C.a("!=",null)
A.lw=w([A.vC],x.i)
A.xj=new B.d(null,A.lw,null)
A.mN=w([A.z6,A.n,A.xj],x.i)
A.E0=new B.b(A.mN,null)
A.qJ=new C.a("\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6, \u1798\u17b7\u1793\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6",null)
A.df=w([A.qJ],x.i)
A.EL=new B.b(A.df,null)
A.ry=new C.a("\u17e5 == \u17e5",null)
A.eg=w([A.ry],x.i)
A.xn=new B.d(null,A.eg,null)
A.cu=w([A.xn],x.i)
A.EP=new B.b(A.cu,null)
A.l6=w([A.E0,A.EL,A.EP,A.a5],x.i)
A.GD=new B.o(A.l6,null)
A.rT=new C.a("\u1793\u17b7\u1784",null)
A.js=w([A.rT],x.i)
A.zB=new B.d(null,A.js,null)
A.qq=new C.a("\u17ac",null)
A.kt=w([A.qq],x.i)
A.xY=new B.d(null,A.kt,null)
A.p3=new C.a("\u1798\u17b7\u1793",null)
A.dg=w([A.p3],x.i)
A.ym=new B.d(null,A.dg,null)
A.ll=w([A.zB,A.n,A.xY,A.n,A.ym],x.i)
A.DU=new B.b(A.ll,null)
A.pP=new C.a("\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6 AND, OR, NOT",null)
A.mM=w([A.pP],x.i)
A.CG=new B.b(A.mM,null)
A.ql=new C.a("(\u17e5 > \u17e2) \u1793\u17b7\u1784 (\u17e3 < \u17e4)",null)
A.h1=w([A.ql],x.i)
A.yk=new B.d(null,A.h1,null)
A.cG=w([A.yk],x.i)
A.D3=new B.b(A.cG,null)
A.k8=w([A.DU,A.CG,A.D3,A.a5],x.i)
A.GL=new B.o(A.k8,null)
A.eC=w([A.GC,A.Gj,A.Gw,A.H0,A.GF,A.GD,A.GL],x.i)
A.Cm=new B.cE(A.eC,null)
A.eI=w([A.Gb,A.Cm],x.i)
A.Ch=new B.cD(A.eI,null)
A.eB=w([A.Ch],x.i)
A.zY=new B.w(null,"table-responsive",null,null,null,A.eB,null)
A.bC=new B.X("khmer_math.khmer","KHMER",'# \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1798\u17bd\u1799\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)',null,null)
A.eM=w([A.At,A.AV,A.zY,A.bC],x.i)
A.BE=new B.a8("numerals",A.eM,null)
A.vb=new C.a("\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 & \u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb (Punctuations) ",null)
A.wS=new B.R("#punctuations",null,"heading-anchor",null,null,null,A.e,null)
A.jB=w([A.vb,A.wS],x.i)
A.Ah=new B.a7(A.jB,null)
A.t3=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1794\u178f\u17cb\u1794\u17c2\u1793\u178f\u17b6\u1798\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798\u1781\u17d2\u1798\u17c2\u179a \u178a\u17c4\u1799\u17a2\u1793\u17bb\u1789\u17d2\u1789\u17b6\u178f\u17b1\u17d2\u1799\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 \u17ac\u1780\u17c6\u178e\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u17d6",null)
A.m3=w([A.t3],x.i)
A.AX=new B.M(null,null,A.m3,null)
A.nb=w([A.D],x.i)
A.zf=new B.d(null,A.nb,null)
A.rU=new C.a(" (\u1781\u178e\u17d2\u178c) \u17ac ",null)
A.oM=new C.a(";",null)
A.lx=w([A.oM],x.i)
A.zT=new B.d(null,A.lx,null)
A.tv=new C.a(" (Semicolon)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 (Statement Terminator)\u17d4 \u1780\u17cf\u17a2\u17b6\u1785\u179a\u17c6\u179b\u1784\u1794\u17b6\u1793\u178a\u17c2\u179a\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1785\u17bb\u17c7\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1790\u17d2\u1798\u17b8\u17d4",null)
A.eh=w([A.zf,A.rU,A.zT,A.tv],x.i)
A.AM=new B.a4(null,null,null,A.eh,null)
A.pL=new C.a("\u17d5",null)
A.ey=w([A.pL],x.i)
A.zv=new B.d(null,A.ey,null)
A.um=new C.a(" (\u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793)\u17d6 \u179f\u1789\u17d2\u1789\u17b6\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1790\u17b6\u1781\u178e\u17d2\u178c \u17ac\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u17d4",null)
A.ef=w([A.zv,A.um],x.i)
A.AK=new B.a4(null,null,null,A.ef,null)
A.m9=w([A.E],x.i)
A.yc=new B.d(null,A.m9,null)
A.vG=new C.a(" (\u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179b\u17bb\u1780\u1780\u17bc\u178a \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u17d4",null)
A.kT=w([A.yc,A.vG],x.i)
A.AI=new B.a4(null,null,null,A.kT,null)
A.e8=w([A.AM,A.AK,A.AI],x.i)
A.Hc=new B.bp(null,null,A.e8,null)
A.bH=new B.X("punctuations.khmer","KHMER",'# \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u1781\u178e\u17d2\u178c\u1781\u17d2\u1798\u17c2\u179a (\u17d4)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5\u17d4\n\u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f = "A"\u17d4\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b7\u1793\u17d2\u1791\u17bb:", \u1796\u17b7\u1793\u17d2\u1791\u17bb)\u17d4\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f:", \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f)\u17d4',null,null)
A.fc=w([A.Ah,A.AX,A.Hc,A.bH],x.i)
A.By=new B.a8("punctuations",A.fc,null)
A.le=w([A.BC,A.BE,A.By],x.i)
A.bR=new B.aY(A.le,null)
A.os=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be...\u17ac\u1794\u17be...\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (Conditionals) ",null)
A.x6=new B.R("#conditionals",null,"heading-anchor",null,null,null,A.e,null)
A.hg=w([A.os,A.x6],x.i)
A.Aq=new B.a7(A.hg,null)
A.vA=new C.a("\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u1780\u17bc\u178a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.p4=new C.a(" (if), ",null)
A.rE=new C.a(" (else if), \u1793\u17b7\u1784 ",null)
A.rO=new C.a(" (else)\u17d6",null)
A.k9=w([A.vA,A.a2,A.p4,A.aU,A.rE,A.aZ,A.rO],x.i)
A.B8=new B.M(null,null,A.k9,null)
A.bv=new B.X("conditions.khmer","KHMER",'\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e2\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}',null,null)
A.cq=w([A.Aq,A.B8,A.bv],x.i)
A.BF=new B.a8("conditionals",A.cq,null)
A.oO=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loops) ",null)
A.xc=new B.R("#while-loop",null,"heading-anchor",null,null,null,A.e,null)
A.h0=w([A.oO,A.xc],x.i)
A.Aj=new B.a7(A.h0,null)
A.al=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 ",null)
A.rZ=new C.a(" (while loop) \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u179f\u17b6\u179a\u17a1\u17be\u1784\u179c\u17b7\u1789\u178a\u179a\u17b6\u1794\u178e\u17b6\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u178f\u17c2\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3 ",null)
A.j4=w([A.al,A.a0,A.rZ,A.a1,A.E],x.i)
A.AQ=new B.M(null,null,A.j4,null)
A.bq=new B.X("while_loop.khmer","KHMER",'# \u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799\u1796\u17b8 \u17e5 \u178a\u179b\u17cb \u17e1\n\u178f\u17b6\u17c6\u1784 \u1785\u17c6\u1793\u17bd\u1793 = \u17e5\n\n\u1781\u178e\u17c8 (\u1785\u17c6\u1793\u17bd\u1793 > \u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799:", \u1785\u17c6\u1793\u17bd\u1793)\n    \u1785\u17c6\u1793\u17bd\u1793 = \u1785\u17c6\u1793\u17bd\u1793 - \u17e1\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\ud83d\ude80 \u1794\u17b6\u1789\u17cb\u1794\u1784\u17d2\u17a0\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799!")',null,null)
A.km=w([A.Aj,A.AQ,A.bq],x.i)
A.Bs=new B.a8("while-loop",A.km,null)
A.t0=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loops) ",null)
A.wV=new B.R("#for-loop",null,"heading-anchor",null,null,null,A.e,null)
A.iO=w([A.t0,A.wV],x.i)
A.Ak=new B.a7(A.iO,null)
A.rc=new C.a(" (for loop) \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u178a\u17c2\u179b\u1798\u17b6\u1793\u1780\u17c6\u178e\u178f\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb\u17d6",null)
A.e6=w([A.al,A.b_,A.rc],x.i)
A.B6=new B.M(null,null,A.e6,null)
A.br=new B.X("for_loop.khmer","KHMER",'# \u1798\u17c1\u1782\u17bb\u178e \u17e5\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u178f\u17b6\u179a\u17b6\u1784\u1798\u17c1\u1782\u17bb\u178e \u17e5 ---")\n\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e1; i <= \u17e5; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17e5 x", i, "=", \u17e5 * i)\n}',null,null)
A.k7=w([A.Ak,A.B6,A.br],x.i)
A.Br=new B.a8("for-loop",A.k7,null)
A.jG=w([A.BF,A.Bs,A.Br],x.i)
A.bS=new B.aY(A.jG,null)
A.tf=new C.a("\u2728 \u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1781\u17d2\u1798\u17c2\u179a\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1782\u17b6\u17c6\u1791\u17d2\u179a OOP \u1796\u17c1\u1789\u179b\u17c1\u1789",null)
A.i7=w([A.tf],x.i)
A.BQ=new B.a9(null,null,A.i7,null)
A.hR=w([A.BQ],x.i)
A.zV=new B.w(null,"hero-tag",null,null,null,A.hR,null)
A.r1=new C.a("\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a \u2014 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.jj=w([A.r1],x.i)
A.Ab=new B.fZ(null)
A.vr=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.k4=w([A.vr],x.i)
A.b5=new B.Y(A.k4,null)
A.uF=new C.a(" \u1782\u17ba\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u178a\u17c2\u179b\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u1785\u1793\u17b6\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u17d4 \u179c\u17b6\u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179f\u17b7\u1780\u17d2\u179f\u17b6 \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u1794\u17c2\u1794 Object-Oriented Programming (OOP) \u1793\u17b7\u1784\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (\u17e0-\u17e9) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u17d4",null)
A.mK=w([A.b5,A.uF],x.i)
A.B3=new B.M("hero-lead",null,A.mK,null)
A.p5=new C.a("\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179a\u17c0\u1793\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",null)
A.kD=w([A.p5],x.i)
A.wQ=new B.R("#hello-world",null,"btn-primary-compact",null,null,null,A.kD,null)
A.pc=new C.a("\ud83c\udfae \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u179b\u17be Web Browser",null)
A.kJ=w([A.pc],x.i)
A.wR=new B.R("#playground",null,"btn-secondary",null,null,null,A.kJ,null)
A.dV=w([A.wQ,A.wR],x.i)
A.zZ=new B.w(null,"hero-buttons",null,null,null,A.dV,null)
A.jA=w([A.zV,A.Ab,A.B3,A.zZ],x.i)
A.A3=new B.w(null,"hero-banner",null,null,null,A.jA,null)
A.ts=new C.a("\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Introduction) ",null)
A.wT=new B.R("#intro",null,"heading-anchor",null,null,null,A.e,null)
A.f5=w([A.ts,A.wT],x.i)
A.An=new B.a7(A.f5,null)
A.vv=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17be\u1798\u17d2\u1794\u17b8\u1780\u17b6\u178f\u17cb\u1794\u1793\u17d2\u1790\u1799\u179a\u1794\u17b6\u17c6\u1784\u1797\u17b6\u179f\u17b6\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u179f\u17d0\u1799\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4 \u179f\u17b7\u179f\u17d2\u179f \u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f \u1793\u17b7\u1784\u17a2\u17d2\u1793\u1780\u179a\u17c0\u1793\u178a\u17c6\u1794\u17bc\u1784\u17a2\u17b6\u1785\u1799\u179b\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u17a2\u17c6\u1796\u17b8\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6\u1793\u17c3\u1780\u17bc\u178a (Logic) \u178f\u17b6\u1798\u179a\u1799\u17c8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1781\u17d2\u1798\u17c2\u179a\u1792\u1798\u17d2\u1798\u1787\u17b6\u178f\u17b7 \u178a\u17bc\u1785\u1787\u17b6 ",null)
A.oA=new C.a(" \u1793\u17b7\u1784 ",null)
A.fW=w([A.vv,A.a3,A.n,A.aV,A.n,A.a2,A.n,A.a0,A.n,A.a4,A.oA,A.I,A.D],x.i)
A.B9=new B.M(null,null,A.fW,null)
A.q_=new C.a("\ud83d\udca1",null)
A.mn=w([A.q_],x.i)
A.A9=new B.w(null,"callout-icon",null,null,null,A.mn,null)
A.rW=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u1796\u17b7\u179f\u17c1\u179f\u17d6 ",null)
A.mc=w([A.rW],x.i)
A.BR=new B.Y(A.mc,null)
A.te=new C.a("\u179a\u17b6\u179b\u17cb\u1780\u17bc\u178a\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a\u1793\u17c1\u17c7 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 ",null)
A.u_=new C.a("\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Run)",null)
A.hl=w([A.u_],x.i)
A.C9=new B.Y(A.hl,null)
A.tS=new C.a(" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a \u1793\u17b7\u1784\u1791\u179f\u17d2\u179f\u1793\u17b6\u179b\u1791\u17d2\u1792\u1795\u179b\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u179b\u17be Browser \u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb!",null)
A.ly=w([A.BR,A.te,A.C9,A.tS],x.i)
A.zU=new B.w(null,"callout-content",null,null,null,A.ly,null)
A.lo=w([A.A9,A.zU],x.i)
A.A_=new B.w(null,"callout callout-info",null,null,null,A.lo,null)
A.mD=w([A.An,A.B9,A.A_],x.i)
A.Bq=new B.a8("intro",A.mD,null)
A.qT=new C.a("\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Installation & Setup) ",null)
A.wU=new B.R("#install",null,"heading-anchor",null,null,null,A.e,null)
A.mb=w([A.qT,A.wU],x.i)
A.Al=new B.a7(A.mb,null)
A.oJ=new C.a("\u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1798\u17bd\u1799 ",null)
A.ot=new C.a(" \u1798\u17b6\u1793\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b \u1793\u17b7\u1784\u179a\u17a0\u17d0\u179f\u17d4 \u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u178f\u17b6\u1798\u179a\u1799\u17c8 ",null)
A.up=new C.a("Command Line Tool (CLI)",null)
A.ew=w([A.up],x.i)
A.C2=new B.Y(A.ew,null)
A.vw=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1795\u17d2\u1791\u17b6\u179b\u17cb \u17ac\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 ",null)
A.v_=new C.a("Khmer IDE",null)
A.eO=w([A.v_],x.i)
A.C8=new B.Y(A.eO,null)
A.qu=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u17d4",null)
A.m2=w([A.oJ,A.b5,A.ot,A.C2,A.vw,A.C8,A.qu],x.i)
A.Ba=new B.M(null,null,A.m2,null)
A.qW=new C.a("\u17e1. \u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792 (Prerequisites)",null)
A.kr=w([A.qW],x.i)
A.Ay=new B.bn(A.kr,null)
A.vK=new C.a("\u1798\u17bb\u1793\u1796\u17c1\u179b\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u178a\u17c6\u17a1\u17be\u1784 \u179f\u17bc\u1798\u1794\u17d2\u179a\u17b6\u1780\u178a\u1790\u17b6\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1798\u17b6\u1793\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u178a\u17bc\u1785\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u17d6",null)
A.dW=w([A.vK],x.i)
A.AW=new B.M(null,null,A.dW,null)
A.rh=new C.a("\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u17d6 ",null)
A.mH=w([A.rh],x.i)
A.C7=new B.Y(A.mH,null)
A.qF=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a macOS, Linux, \u1793\u17b7\u1784 Windows (WSL / PowerShell)",null)
A.d_=w([A.C7,A.qF],x.i)
A.AA=new B.a4(null,null,null,A.d_,null)
A.vM=new C.a("Dart SDK (3.0+)\u17d6 ",null)
A.np=w([A.vM],x.i)
A.C3=new B.Y(A.np,null)
A.qM=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a Engine \u1793\u17b7\u1784 Native Compiler \u179a\u1794\u179f\u17cb\u1797\u17b6\u179f\u17b6",null)
A.em=w([A.C3,A.qM],x.i)
A.AG=new B.a4(null,null,null,A.em,null)
A.qD=new C.a("Git\u17d6 ",null)
A.fU=w([A.qD],x.i)
A.C_=new B.Y(A.fU,null)
A.pQ=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u1794\u17d2\u179a\u1797\u1796\u1780\u17bc\u178a \u17ac Releases",null)
A.eU=w([A.C_,A.pQ],x.i)
A.AD=new B.a4(null,null,null,A.eU,null)
A.li=w([A.AA,A.AG,A.AD],x.i)
A.Hd=new B.bp(null,null,A.li,null)
A.pM=new C.a("\u17e2. \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 CLI \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1791\u17bc\u1791\u17c5 (Universal One-Line Install)",null)
A.dU=w([A.pM],x.i)
A.Az=new B.bn(A.dU,null)
A.qC=new C.a("\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1782\u17d2\u179a\u1794\u17cb\u179a\u17bc\u1794\u17a2\u17b6\u1785\u178a\u17c6\u17a1\u17be\u1784 ",null)
A.uz=new C.a("khmer",null)
A.i0=w([A.uz],x.i)
A.b3=new B.d(null,A.i0,null)
A.pA=new C.a(" CLI \u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u1781\u17d2\u179b\u17bd\u1793\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u178f\u17c2\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u17d6",null)
A.dz=w([A.qC,A.b3,A.pA],x.i)
A.B1=new B.M(null,null,A.dz,null)
A.bt=new B.X("macOS / Linux (Terminal)","BASH","# \u178a\u17c6\u17a1\u17be\u1784\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u179b\u17be macOS \u1793\u17b7\u1784 Linux (\u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784 PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash",!1,null)
A.bE=new B.X("Windows (PowerShell)","POWERSHELL","# \u178a\u17c6\u17a1\u17be\u1784\u179b\u17be Windows \u178f\u17b6\u1798\u179a\u1799\u17c8 PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex",!1,null)
A.by=new B.X("Dart Toolchain / Native Compilation","DART","# Compile \u1791\u17c5\u1787\u17b6 Native AOT Binary \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# \u17ac\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart run bin/khmer.dart main.khmer",!1,null)
A.uR=new C.a("\u17e3. \u179a\u1794\u17c0\u1794\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780",null)
A.ih=w([A.uR],x.i)
A.Au=new B.bn(A.ih,null)
A.rg=new C.a("\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u17be\u1780\u1793\u17d2\u1791\u17bb\u1799 ",null)
A.rw=new C.a("\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17af\u1780\u179f\u17b6\u179a\u1790\u17d2\u1798\u17b8\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f (\u178a\u17bc\u1785\u1787\u17b6 VS Code, Cursor, \u17ac Nano)\u17d6",null)
A.hM=w([A.rg,A.aY,A.rw],x.i)
A.Bf=new B.M(null,null,A.hM,null)
A.bu=new B.X("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6 (my_app.khmer)","KHMER",'\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb"\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb\u1796\u17b7\u1797\u1796\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u1788\u17d2\u1798\u17c4\u17c7)',null,null)
A.rX=new C.a("\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1798\u1780\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 Terminal\u17d6",null)
A.ia=w([A.rX],x.i)
A.AT=new B.M(null,null,A.ia,null)
A.bF=new B.X("Run Your Script","BASH","khmer my_app.khmer",!1,null)
A.vn=new C.a("\u17e4. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Interactive REPL",null)
A.dO=w([A.vn],x.i)
A.Ax=new B.bn(A.dO,null)
A.oy=new C.a("\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u17ac\u1782\u178e\u1793\u17b6\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1797\u17d2\u179b\u17b6\u1798\u17d7 \u17a2\u17d2\u1793\u1780\u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 ",null)
A.t6=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1788\u17d2\u1798\u17c4\u17c7\u17af\u1780\u179f\u17b6\u179a\u1793\u17c4\u17c7\u1791\u17c1 \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17be\u1780 Interactive REPL Shell\u17d6",null)
A.mp=w([A.oy,A.b3,A.t6],x.i)
A.B5=new B.M(null,null,A.mp,null)
A.bI=new B.X("Interactive Console","BASH","$ khmer\n\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0.0 REPL\n\u179c\u17b6\u1799 '\u1785\u17b6\u1780\u1785\u17c1\u1789' \u17ac\u1785\u17bb\u1785 Ctrl+D \u178a\u17be\u1798\u17d2\u1794\u17b8\u1785\u17b6\u1780\u1785\u17c1\u1789\u17d4\n\n>>> \u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\"\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794:\", \u1796\u17b7\u1793\u17d2\u1791\u17bb);\n\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794: \u17e9\u17e5\n>>> \u178f\u17b6\u17c6\u1784 \u1791\u17d2\u179c\u17c1\u178a\u1784 = \u1796\u17b7\u1793\u17d2\u1791\u17bb * \u17e2;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1791\u17d2\u179c\u17c1\u178a\u1784);\n\u17e1\u17e9\u17e0",!1,null)
A.tu=new C.a("\u17e5. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u179a\u1794\u17cb Text Editor \u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb (VS Code, Vim, Sublime, Nano)",null)
A.lI=w([A.tu],x.i)
A.Av=new B.bn(A.lI,null)
A.pG=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u1795\u17d2\u178a\u179b\u17cb\u17a7\u1794\u1780\u179a\u178e\u17cd\u1787\u17c6\u1793\u17bd\u1799\u179f\u17d2\u179a\u17b6\u1794\u17cb\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f\u17d6",null)
A.ml=w([A.pG],x.i)
A.AU=new B.M(null,null,A.ml,null)
A.bG=new B.X("Editor Integration Commands","BASH","# \u178a\u17c6\u17a1\u17be\u1784 Syntax Highlighting \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code / Cursor \u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\nkhmer editor vscode\n\n# \u17ac\u1794\u1784\u17d2\u1780\u17be\u178f Config \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Vim / Neovim, Sublime Text, \u17ac GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# \u1798\u17bb\u1781\u1784\u17b6\u179a Live-Reload: \u178f\u17b6\u1798\u178a\u17b6\u1793 \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u1796\u17c1\u179b\u17a2\u17d2\u1793\u1780\u1785\u17bb\u1785 Save \u1780\u17d2\u1793\u17bb\u1784 Editor \u178e\u17b6\u1798\u17bd\u1799\nkhmer watch my_app.khmer\n\n# \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Linter)\nkhmer check my_app.khmer",!1,null)
A.rr=new C.a("\u17e6. \u1787\u1798\u17d2\u179a\u17be\u179f\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798 GUI & Web IDE",null)
A.mL=w([A.rr],x.i)
A.Aw=new B.bn(A.mL,null)
A.tp=new C.a("\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Terminal CLI \u17a2\u17d2\u1793\u1780\u1780\u17cf\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u178a\u17c2\u179b\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17d6",null)
A.dm=w([A.tp],x.i)
A.B2=new B.M(null,null,A.dm,null)
A.ve=new C.a("Web Playground (\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178f\u17b6\u1798 Web Browser)\u17d6 ",null)
A.fP=w([A.ve],x.i)
A.C5=new B.Y(A.fP,null)
A.q3=new C.a("\u17a2\u17d2\u1793\u1780\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u17a1\u17be\u1799! \u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179a\u1798\u17bc\u179a\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1795\u17d2\u1793\u17c2\u1780 ",null)
A.pF=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb",null)
A.lj=w([A.pF],x.i)
A.x1=new B.R("#playground",null,null,null,null,null,A.lj,null)
A.rN=new C.a(" \u1793\u17c5\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u1793\u17c3\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u179b\u17be Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u17d4",null)
A.ji=w([A.C5,A.q3,A.x1,A.rN],x.i)
A.AJ=new B.a4(null,null,null,A.ji,null)
A.tV=new C.a("Khmer IDE (\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Desktop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb macOS / Windows)\u17d6 ",null)
A.cw=w([A.tV],x.i)
A.BW=new B.Y(A.cw,null)
A.vx=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 IDE \u178a\u17be\u1798\u178a\u17c2\u179b\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799 Flutter \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c Virtual Khmer Keypad \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1781\u17d2\u1798\u17c2\u179a\u179a\u17a0\u17d0\u179f, Syntax Highlighting, Tabs \u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u17af\u1780\u179f\u17b6\u179a\u1785\u17d2\u179a\u17be\u1793, AST Visualizer, \u1793\u17b7\u1784 Terminal \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780\u17d4",null)
A.hf=w([A.BW,A.vx],x.i)
A.AC=new B.a4(null,null,null,A.hf,null)
A.hI=w([A.AJ,A.AC],x.i)
A.Hf=new B.bp(null,null,A.hI,null)
A.hk=w([A.Al,A.Ba,A.Ay,A.AW,A.Hd,A.Az,A.B1,A.bt,A.bE,A.by,A.Au,A.Bf,A.bu,A.AT,A.bF,A.Ax,A.B5,A.bI,A.Av,A.AU,A.bG,A.Aw,A.B2,A.Hf],x.i)
A.Bw=new B.a8("install",A.hk,null)
A.u1=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (First Program: \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780) ",null)
A.x2=new B.R("#hello-world",null,"heading-anchor",null,null,null,A.e,null)
A.iL=w([A.u1,A.x2],x.i)
A.Ar=new B.a7(A.iL,null)
A.t2=new C.a('\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1794\u17d2\u179a\u1796\u17c3\u178e\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179a\u17c0\u1793\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1782\u17ba\u1780\u17b6\u179a\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b6\u1780\u17d2\u1799 "\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780" (Hello World) \u1791\u17c5\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ',null)
A.nd=w([A.t2,A.aQ,A.E],x.i)
A.B_=new B.M(null,null,A.nd,null)
A.bx=new B.X("hello_world.khmer","KHMER",'# \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',null,null)
A.dl=w([A.Ar,A.B_,A.bx],x.i)
A.Bo=new B.a8("hello-world",A.dl,null)
A.fF=w([A.A3,A.Bq,A.Bw,A.Bo],x.i)
A.bT=new B.aY(A.fF,null)
A.bW=new B.hR("text",0,"text")
A.bV=new B.eE(null)
A.b9=new B.en(null)
A.bJ=new B.ew(null)
A.bU=new B.eD(null)
A.o2=new B.f0(null)
A.dv=w([A.bV,A.b9,A.bJ,A.bU,A.o2],x.i)
A.A5=new B.w(null,"content-wrapper",null,null,null,A.dv,null)
A.ff=w([A.A5],x.i)
A.B=w([],x.i)
A.oh=new B.I("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)","Introduction & Vision","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","intro overview vision cambodia \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784 \u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7 \u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c6\u1793\u17b7\u178f \u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799 \u17a0\u17c1\u178f\u17bb\u17a2\u17d2\u179c\u17b8 why features \u179b\u1780\u17d2\u1781\u178e\u17c8\u1796\u17b7\u179f\u17c1\u179f khmerlang \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1793\u17b7\u1784\u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799\u1793\u17c3\u1797\u17b6\u179f\u17b6 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)")
A.om=new B.I("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)","Installation & Toolchain","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check \u178a\u17c6\u17a1\u17be\u1784 \u17a7\u1794\u1780\u179a\u178e\u17cd \u179a\u17c9\u17b6\u1793\u17cb \u1794\u1789\u17d2\u1787\u17b6 \u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a universal installer one line download \u1791\u17b6\u1789\u1799\u1780 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179a\u1794\u17c0\u1794\u178a\u17c6\u17a1\u17be\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u179b\u17be macOS, Linux, Windows")
A.o5=new B.I("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)","First Program","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","hello world \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 \u1794\u1784\u17d2\u17a0\u17b6\u1789 print first program \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 \u1780\u17bc\u178a\u178a\u17c6\u1794\u17bc\u1784 \u179f\u17bd\u179f\u17d2\u178f\u17b8 world script run output \u1785\u17c1\u1789\u179b\u1791\u17d2\u1792\u1795\u179b","\u179f\u179a\u179f\u17c1\u179a\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 \u1794\u1784\u17d2\u17a0\u17b6\u1789()")
A.od=new B.I("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)","Variables & Data Types","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","variables data types \u178f\u17b6\u17c6\u1784 \u17a2\u1790\u17c1\u179a let var const string number boolean \u1796\u17b7\u178f \u1798\u17b7\u1793\u1796\u17b7\u178f \u1791\u1791\u17c1 null dynamic \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 \u1781\u17d2\u179f\u17c2\u17a2\u1780\u17d2\u179f\u179a \u179b\u17c1\u1781 \u1794\u17ca\u17bc\u179b\u17b8\u1793 true false assignment \u178f\u1798\u17d2\u179b\u17c3","\u1780\u17b6\u179a\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3\u1793\u17b6\u1793\u17b6")
A.o7=new B.I("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)","Khmer Numerals & Math Operators","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","numerals math \u17e0 \u17e1 \u17e2 \u17e3 \u17e4 \u17e5 \u17e6 \u17e7 \u17e8 \u17e9 \u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 modulo \u1793\u17b7\u1784 \u17ac \u1798\u17b7\u1793 operators \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 \u1782\u178e\u17b7\u178f arithmetic addition subtraction multiplication division calculate","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u17e0-\u17e9 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6")
A.o6=new B.I("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)","Khmer Punctuations","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","punctuations \u1781\u178e\u17d2\u178c \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 \u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785 semicolon statement terminator \u179f\u1789\u17d2\u1789\u17b6 \u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 \u17d5 \u17d6 syntax terminator end line \u1781\u178e\u17d2\u178c \u17d5","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 (\u17d5) \u1793\u17b7\u1784 semicolon (;)")
A.og=new B.I("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f","Conditionals (If / Else If / Else)","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","conditionals if else elif \u1794\u17be \u17ac\u1794\u17be \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f logic \u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a branching comparison \u179f\u17d2\u1798\u17be \u1792\u17c6\u1787\u17b6\u1784 \u178f\u17bc\u1785\u1787\u17b6\u1784 compare condition flow","\u1780\u17b6\u179a\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be (if), \u17ac\u1794\u17be (else if), \u1793\u17b7\u1784 \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (else)")
A.oc=new B.I("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)","While Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","while loop \u1781\u178e\u17c8 \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 iteration repeat cycle loop condition \u1792\u17d2\u179c\u17be\u178a\u178a\u17c2\u179b\u17d7 repeat until loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u178a\u178a\u17c2\u179b\u17d7\u178f\u17b6\u1798\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c")
A.oi=new B.I("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)","For Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","for loop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 count step range iteration \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb loop finite counter \u1787\u17bb\u17c6","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb")
A.ol=new B.I("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)","Function Declaration","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","function \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178f\u17d2\u179a\u17a1\u1794\u17cb return parameters arguments methods \u179c\u17b7\u1792\u17b8 \u1780\u17bc\u178a \u17a0\u17c5 call define \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a \u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb return value","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1793\u17b7\u1784 \u178f\u17d2\u179a\u17a1\u1794\u17cb")
A.o8=new B.I("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)","Recursive Functions & Fibonacci","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","recursion recursive fibonacci \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8 call self \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 fibonacci sequence math recursive algorithm \u1782\u178e\u1793\u17b6","\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u179b\u17c1\u1781 Fibonacci")
A.ob=new B.I("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (OOP)","Classes & Objects","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","class oop \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1794\u1784\u17d2\u1780\u17be\u178f constructor \u1793\u17c1\u17c7 this \u1790\u17d2\u1798\u17b8 new object instance \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb properties methods fields \u179c\u178f\u17d2\u1790\u17bb","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class), Constructor (\u1794\u1784\u17d2\u1780\u17be\u178f), \u1793\u17b7\u1784 Instance (\u1790\u17d2\u1798\u17b8)")
A.of=new B.I("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)","Inheritance & Subclasses","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","inheritance extends \u1794\u1793\u17d2\u178f\u1796\u17b8 subclass superclass oop \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 parent child polymorph \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1794\u1793\u17d2\u178f\u1796\u17b8 (extends)")
A.oe=new B.I("getters-setters","Getter & Setter (\u1799\u1780 & \u178a\u17b6\u1780\u17cb)","Getters and Setters","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","getter setter \u1799\u1780 \u178a\u17b6\u1780\u17cb \u1780\u17c6\u178e\u178f\u17cb get set property properties oop encapsulation computed property validation \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u1798\u17b6\u1787\u17b7\u1780","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Getter (\u1799\u1780) \u1793\u17b7\u1784 Setter (\u178a\u17b6\u1780\u17cb / \u1780\u17c6\u178e\u178f\u17cb) \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP")
A.oa=new B.I("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)","Standard Built-in Functions","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","builtins standard functions \u1794\u1784\u17d2\u17a0\u17b6\u1789 \u1794\u17d2\u179a\u179c\u17c2\u1784 \u1794\u17d2\u179a\u1797\u17c1\u1791 \u1794\u1793\u17d2\u1790\u17c2\u1798 \u1794\u1789\u17d2\u1785\u17bc\u179b \u178a\u1780\u1785\u17c1\u1789 \u179b\u17bb\u1794 \u1797\u17d2\u1787\u17b6\u1794\u17cb \u178f\u1798\u17d2\u179a\u17c0\u1794 \u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8 \u179f\u17d2\u179c\u17c2\u1784\u179a\u1780 \u1798\u17b6\u1793 \u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f \u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1 \u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e \u1794\u1784\u17d2\u1782\u178f\u17cb \u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7 \u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784 \u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6 \u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6 \u1785\u17c3\u178a\u1793\u17d2\u1799 \u1787\u17b6\u179b\u17c1\u1781 \u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a \u1787\u17b6\u178f\u1780\u17d2\u1780 \u1796\u17bb\u17c7 \u1780\u17b6\u178f\u17cb \u1787\u17c6\u1793\u17bd\u179f \u179f\u1798\u17d2\u17a2\u17b6\u178f \u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6 \u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785 \u1796\u17c1\u179b\u1793\u17c1\u17c7 \u17a2\u17b6\u1793 math string array helper abs sqrt pow round floor ceil max min random split substr replace trim upper lower insert pop join sort reverse indexOf contains now input","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u179a\u17b6\u1794\u17cb\u17d7\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Math, String, Array, Type Conversions \u1793\u17b7\u1784 System I/O")
A.o9=new B.I("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs (Flutter / Web)","Developer Tools & IDEs","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","ides tools flutter ide web ide vscode editor extension cli terminal syntax highlight theme programiz studio development \u17a7\u1794\u1780\u179a\u178e\u17cd \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a","\u17a7\u1794\u1780\u179a\u178e\u17cd\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a Flutter Desktop/Web IDE \u1793\u17b7\u1784 Extension \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code")
A.ok=new B.I("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)","Syntax Cheat Sheet Table","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","cheat sheet table syntax keywords \u178f\u17b6\u179a\u17b6\u1784 \u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 summary reference \u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u179f\u1784\u17d2\u1781\u17c1\u1794 \u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 full table quick reference cheat-sheet \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd","\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1793\u17b7\u1784\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c3\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a")
A.oj=new B.I("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","Live Interactive Web Playground","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","playground runner editor live code online ide \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784 \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 run web browser console live interactive interactive test execution output \u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u179b\u17be Web Browser \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb")
A.ab=w([A.oh,A.om,A.o5,A.od,A.o7,A.o6,A.og,A.oc,A.oi,A.ol,A.o8,A.ob,A.of,A.oe,A.oa,A.o9,A.ok,A.oj],C.bl("C<I>"))
A.wy=new B.ac("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798")
A.wL=new B.ac("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798")
A.wA=new B.ac("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784")
A.wz=new B.ac("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3")
A.wD=new B.ac("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8")
A.wI=new B.ac("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7")
A.wF=new B.ac("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be/\u17ac\u1794\u17be/\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f")
A.wN=new B.ac("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8")
A.wO=new B.ac("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb")
A.wG=new B.ac("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd")
A.wB=new B.ac("recursion","Recursion (Fibonacci)")
A.wH=new B.ac("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor")
A.wK=new B.ac("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)")
A.wE=new B.ac("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a")
A.wC=new B.ac("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs")
A.wM=new B.ac("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7")
A.wJ=new B.ac("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a")
A.kL=w([A.wy,A.wL,A.wA,A.wz,A.wD,A.wI,A.wF,A.wN,A.wO,A.wG,A.wB,A.wH,A.wK,A.wE,A.wC,A.wM,A.wJ],C.bl("C<ac>"))
A.mS=w(['"',"'","\u201c","\u201d","\u2018","\u2019"],x.s)
A.nR={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
A.nz=new C.P(A.nR,["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],x.w)
A.nY={"\u17e0":0,"\u17e1":1,"\u17e2":2,"\u17e3":3,"\u17e4":4,"\u17e5":5,"\u17e6":6,"\u17e7":7,"\u17e8":8,"\u17e9":9}
A.J=new C.P(A.nY,["0","1","2","3","4","5","6","7","8","9"],x.w)
A.nT={hello:0,math:1,fibo:2,oop:3,grades:4}
A.nA=new C.P(A.nT,[y.n,'# \u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)','# \u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}','# \u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()','# \u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e5\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}'],x.w)
A.nX={points:0}
A.nN=new C.P(A.nX,["5 3 19 12 5 21 5 3"],x.w)
A.nS={"\u178f\u17b6\u17c6\u1784":0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":8,"\u1796\u17b7\u178f":9,"\u1798\u17b7\u1793\u1796\u17b7\u178f":10,"\u1791\u1791\u17c1":11,"\u1793\u17b7\u1784":12,"\u17ac":13,"\u1798\u17b7\u1793":14,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":15,"\u179c\u17b7\u1792\u17b8":16,"\u1793\u17c1\u17c7":17,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":18,"\u1790\u17d2\u1798\u17b8":19,"\u1794\u1793\u17d2\u178f\u1796\u17b8":20,"\u1799\u1780":21,get:22,"\u178a\u17b6\u1780\u17cb":23,"\u1780\u17c6\u178e\u178f\u17cb":24,set:25}
A.F=new B.u(3,"let")
A.T=new B.u(4,"print")
A.V=new B.u(5,"ifType")
A.H=new B.u(6,"elseIf")
A.W=new B.u(7,"elseType")
A.X=new B.u(8,"whileType")
A.Y=new B.u(9,"forType")
A.x=new B.u(10,"function")
A.K=new B.u(11,"returnType")
A.at=new B.u(12,"trueType")
A.au=new B.u(13,"falseType")
A.av=new B.u(14,"nullType")
A.L=new B.u(15,"and")
A.M=new B.u(16,"or")
A.N=new B.u(17,"not")
A.O=new B.u(18,"classType")
A.aw=new B.u(20,"thisType")
A.ax=new B.u(21,"self")
A.ay=new B.u(22,"newType")
A.az=new B.u(23,"extendsType")
A.p=new B.u(24,"getter")
A.o=new B.u(25,"setter")
A.ag=new C.P(A.nS,[A.F,A.T,A.V,A.H,A.W,A.X,A.Y,A.x,A.K,A.at,A.au,A.av,A.L,A.M,A.N,A.O,A.x,A.aw,A.ax,A.ay,A.az,A.p,A.p,A.o,A.o,A.o],C.bl("P<i,u>"))
A.nU={"\u1794\u1784\u17d2\u17a0\u17b6\u1789":0,"\u1794\u17d2\u179a\u179c\u17c2\u1784":1,"\u1794\u17d2\u179a\u1797\u17c1\u1791":2,"\u1794\u1793\u17d2\u1790\u17c2\u1798":3,"\u1794\u1789\u17d2\u1785\u17bc\u179b":4,"\u178a\u1780\u1785\u17c1\u1789":5,"\u179b\u17bb\u1794":6,"\u1797\u17d2\u1787\u17b6\u1794\u17cb":7,"\u178f\u1798\u17d2\u179a\u17c0\u1794":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8":9,"\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780":10,"\u1798\u17b6\u1793":11,"\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f":12,"\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1":13,"\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e":14,"\u1794\u1784\u17d2\u1782\u178f\u17cb":15,"\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7":16,"\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784":17,"\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6":18,"\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6":19,"\u1785\u17c3\u178a\u1793\u17d2\u1799":20,"\u1787\u17b6\u179b\u17c1\u1781":21,"\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a":22,"\u1787\u17b6\u178f\u1780\u17d2\u1780":23,"\u1796\u17bb\u17c7":24,"\u1780\u17b6\u178f\u17cb":25,"\u1787\u17c6\u1793\u17bd\u179f":26,"\u179f\u1798\u17d2\u17a2\u17b6\u178f":27,"\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6":28,"\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785":29,"\u1796\u17c1\u179b\u1793\u17c1\u17c7":30,"\u17a2\u17b6\u1793":31,print:32,len:33,type:34,append:35,insert:36,pop:37,remove:38,join:39,sort:40,reverse:41,indexOf:42,contains:43,abs:44,sqrt:45,pow:46,round:47,floor:48,ceil:49,max:50,min:51,random:52,toNum:53,toInt:54,toStr:55,toBool:56,split:57,substr:58,replace:59,trim:60,upper:61,lower:62,now:63,input:64}
A.on=new B.c7(A.nU,65,x.O)
A.nZ={"\u178f\u17b6\u17c6\u1784":0,"\u17a2\u1790\u17c1\u179a":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u179c\u17b7\u1792\u17b8":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":9,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":10,"\u1794\u1784\u17d2\u1780\u17be\u178f":11,"\u1793\u17c1\u17c7":12,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":13,"\u1790\u17d2\u1798\u17b8":14,"\u1794\u1793\u17d2\u178f\u1796\u17b8":15,"\u1799\u1780":16,"\u178a\u17b6\u1780\u17cb":17,"\u1780\u17c6\u178e\u178f\u17cb":18,get:19,set:20,"\u1796\u17b7\u178f":21,"\u1798\u17b7\u1793\u1796\u17b7\u178f":22,"\u1791\u1791\u17c1":23,"\u1793\u17b7\u1784":24,"\u17ac":25,"\u1798\u17b7\u1793":26}
A.oo=new B.c7(A.nZ,27,x.O)
A.op=new B.iq(4,"center")
A.oz=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u179a\u17a0\u17d0\u179f:",null)
A.pZ=new C.a("ESC",null)
A.q0=new C.a("\u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)",null)
A.qf=new C.a("\u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)",null)
A.rl=new C.a("\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc: ",null)
A.ty=new C.a(" | ",null)
A.tC=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799\u1798\u17c4\u1791\u1793\u1797\u17b6\u1796\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1781\u17d2\u1798\u17c2\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1782\u17d2\u1793\u17b6 | ",null)
A.u9=new C.a("\u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)",null)
A.ua=new C.a("\n",null)
A.uL=new C.a("\u17e1. \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 (Hello World)",null)
A.v4=new C.a("\u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)",null)
A.ar=new B.u(0,"number")
A.as=new B.u(1,"string")
A.P=new B.u(19,"method")
A.k=new B.u(2,"identifier")
A.aA=new B.u(26,"plus")
A.Q=new B.u(27,"minus")
A.aB=new B.u(28,"star")
A.aC=new B.u(29,"slash")
A.aD=new B.u(30,"modulo")
A.R=new B.u(31,"assign")
A.aE=new B.u(32,"eq")
A.aF=new B.u(33,"neq")
A.aG=new B.u(34,"lt")
A.aH=new B.u(35,"gt")
A.aI=new B.u(36,"lte")
A.aJ=new B.u(37,"gte")
A.S=new B.u(38,"dot")
A.h=new B.u(39,"lparen")
A.d=new B.u(40,"rparen")
A.y=new B.u(41,"lbrace")
A.q=new B.u(42,"rbrace")
A.U=new B.u(43,"lbracket")
A.z=new B.u(44,"rbracket")
A.l=new B.u(45,"comma")
A.j=new B.u(46,"semicolon")
A.G=new B.u(47,"colon")
A.u=new B.u(48,"eof")
A.v=new C.bf("#94a3b8")
A.a_=new C.bf("#34d399")
A.wc=new B.a6("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)",!1,null)
A.wd=new B.a6("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)",!1,null)
A.we=new B.a6("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",!1,null)
A.wf=new B.a6("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)",!1,null)
A.wg=new B.a6("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)",!1,null)
A.wh=new B.a6("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)",!1,null)
A.wi=new B.a6("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)",!1,null)
A.wj=new B.a6("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)",!1,null)
A.wk=new B.a6("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)",!1,null)
A.wl=new B.a6("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)",!1,null)
A.wm=new B.a6("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Declaration)",!1,null)
A.wn=new B.a6("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (`\u1794\u1784\u17d2\u1780\u17be\u178f`)",!1,null)
A.wo=new B.a6("ides","Flutter & Web IDEs",!1,null)
A.wp=new B.a6("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",!0,"\u1795\u17d2\u1791\u17b6\u179b\u17cb")
A.wq=new B.a6("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)",!1,null)
A.wr=new B.a6("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)",!1,null)
A.ws=new B.a6("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)",!1,null)
A.w6=new C.bf("#f87171")
A.aM=new C.aS(null,null,null,null,null,A.w6,null,null,null,null,null)
A.aO=new C.aS(null,null,null,null,null,A.a_,null,null,null,null,null)
A.aL=new C.bf("#38bdf8")
A.wv=new C.aS(null,null,null,null,null,A.aL,null,null,A.aa,null,null)
A.bK=new B.ez("flex",4,"flex")
A.b8=new B.he(2,"center")
A.wx=new C.aS(A.bK,null,null,null,A.b8,null,null,null,null,null,null)
A.bn=new B.fO()
A.aN=new C.aS(null,null,null,null,null,A.aL,null,null,null,A.bn,null)
A.o0={target:0,rel:1}
A.ad=new C.P(A.o0,["_blank","noopener noreferrer"],x.w)
A.uv=new C.a("Releases & Binaries",null)
A.iF=w([A.uv],x.i)
A.wW=new B.R("https://github.com/sengson-great/KhmerLang/releases",null,null,A.aN,A.ad,null,A.iF,null)
A.ai={width:0,height:1,viewBox:2,fill:3}
A.nK=new C.P(A.ai,["15","15","0 0 24 24","currentColor"],x.w)
A.Bn=new B.h5(null)
A.lH=w([A.Bn],x.i)
A.b6=new B.aV(null,A.nK,A.lH,null)
A.tD=new C.a("\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",null)
A.lZ=w([A.tD],x.i)
A.BK=new B.a9(null,null,A.lZ,null)
A.k0=w([A.b6,A.BK],x.i)
A.wX=new B.R("#playground","nav-btn-playground","btn-primary-compact",null,null,null,A.k0,null)
A.uZ=new C.a("GitHub Repository",null)
A.jy=w([A.uZ],x.i)
A.x0=new B.R(y.b,null,null,A.aN,A.ad,null,A.jy,null)
A.oU=new C.a("\u1785",null)
A.cC=w([A.oU],x.i)
A.A8=new B.w(null,"brand-logo-badge",null,null,null,A.cC,null)
A.vP=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a ",null)
A.vh=new C.a("v1.0.0",null)
A.ki=w([A.vh],x.i)
A.BL=new B.a9("brand-version-badge",null,A.ki,null)
A.dk=w([A.vP,A.BL],x.i)
A.zX=new B.w(null,"brand-title",null,null,null,A.dk,null)
A.rv=new C.a("KhmerChar Programming Language",null)
A.hq=w([A.rv],x.i)
A.zW=new B.w(null,"brand-subtitle",null,null,null,A.hq,null)
A.c3=w([A.zX,A.zW],x.i)
A.Aa=new B.w(null,"brand-text",null,null,null,A.c3,null)
A.fh=w([A.A8,A.Aa],x.i)
A.x8=new B.R("#intro",null,"brand-link",null,null,null,A.fh,null)
A.nW={target:0,rel:1,"aria-label":2,title:3}
A.nB=new C.P(A.nW,["_blank","noopener noreferrer","GitHub Repository","GitHub"],x.w)
A.nL=new C.P(A.ai,["19","19","0 0 24 24","currentColor"],x.w)
A.t={d:0}
A.nG=new C.P(A.t,["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],x.w)
A.Bl=new B.bo(A.nG,null)
A.lC=w([A.Bl],x.i)
A.Cb=new B.aV(null,A.nL,A.lC,null)
A.he=w([A.Cb],x.i)
A.xa=new B.R(y.b,null,"header-action-btn",null,A.nB,null,A.he,null)
A.rF=new C.a("\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7",null)
A.fS=w([A.rF],x.i)
A.A0=new B.w(null,"toc-title",null,null,null,A.fS,null)
A.C={width:0,height:1,viewBox:2,fill:3,stroke:4,"stroke-width":5}
A.nJ=new C.P(A.C,["16","16","0 0 24 24","none","currentColor","2"],x.w)
A.ah={cx:0,cy:1,r:2}
A.nQ=new C.P(A.ah,["11","11","8"],x.w)
A.xf=new B.ei(A.nQ,null)
A.nD=new C.P(A.t,["m21 21-4.3-4.3"],x.w)
A.Bi=new B.bo(A.nD,null)
A.ac=w([A.xf,A.Bi],x.i)
A.Ce=new B.aV(null,A.nJ,A.ac,null)
A.uY=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search docs)...",null)
A.ch=w([A.uY],x.i)
A.BH=new B.a9(null,null,A.ch,null)
A.fq=w([A.Ce,A.BH],x.i)
A.A1=new B.w(null,"search-trigger-content",null,null,null,A.fq,null)
A.pq=new C.a("\u1785\u17bb\u1785\u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17bb\u1780\u179a\u1780\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791",null)
A.l7=w([A.pq],x.i)
A.BP=new B.a9(null,null,A.l7,null)
A.rH=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.fx=w([A.rH],x.i)
A.BG=new B.a9(null,null,A.fx,null)
A.dD=w([A.BP,A.BG],x.i)
A.A2=new B.w(null,"search-modal-footer",null,null,null,A.dD,null)
A.bL=new B.ez("none",0,"none")
A.wu=new C.aS(A.bL,null,null,null,null,null,null,null,null,null,null)
A.A6=new B.w(null,null,A.wu,null,null,A.B,null)
A.AP=new B.h1(null)
A.qc=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u2014 \u179a\u1780\u17d2\u179f\u17b6\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1782\u17d2\u179a\u1794\u17cb\u1799\u17c9\u17b6\u1784 \xa9 2026 \u178a\u17c4\u1799 Veng Chhuong \u1793\u17b7\u1784\u179f\u17a0\u1782\u1798\u1793\u17cd\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",null)
A.iY=w([A.qc],x.i)
A.AR=new B.M(null,null,A.iY,null)
A.oQ=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Terminal Output)",null)
A.lc=w([A.oQ],x.i)
A.BI=new B.a9("code-output-title",null,A.lc,null)
A.oZ=new C.a("\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)",null)
A.d7=w([A.oZ],x.i)
A.BJ=new B.a9(null,null,A.d7,null)
A.uy=new C.a("\u179b\u17bb\u1794",null)
A.lr=w([A.uy],x.i)
A.BM=new B.a9(null,null,A.lr,null)
A.oL=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Console Output)",null)
A.hG=w([A.oL],x.i)
A.BN=new B.a9("console-pane-title",null,A.hG,null)
A.pg=new C.a("\u2713 \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 (Check)",null)
A.jd=w([A.pg],x.i)
A.BO=new B.a9(null,null,A.jd,null)
A.ae=new C.P(A.C,["20","20","0 0 24 24","none","currentColor","2"],x.w)
A.nC=new C.P(A.t,["M4 6h16M4 12h16M4 18h16"],x.w)
A.Bh=new B.bo(A.nC,null)
A.lz=w([A.Bh],x.i)
A.Ca=new B.aV(null,A.ae,A.lz,null)
A.af=new C.P(A.C,["18","18","0 0 24 24","none","currentColor","2"],x.w)
A.nE=new C.P(A.t,["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],x.w)
A.Bj=new B.bo(A.nE,null)
A.lA=w([A.Bj],x.i)
A.Cc=new B.aV("theme-icon-moon",A.af,A.lA,null)
A.nI=new C.P(A.C,["14","14","0 0 24 24","none","currentColor","2"],x.w)
A.nF=new C.P(A.t,["M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],x.w)
A.Bk=new B.bo(A.nF,null)
A.lB=w([A.Bk],x.i)
A.Cd=new B.aV(null,A.nI,A.lB,null)
A.Cf=new B.aV(null,A.ae,A.ac,null)
A.nP=new C.P(A.ah,["12","12","4"],x.w)
A.xe=new B.ei(A.nP,null)
A.nH=new C.P(A.t,["M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"],x.w)
A.Bm=new B.bo(A.nH,null)
A.mO=w([A.xe,A.Bm],x.i)
A.Cg=new B.aV("theme-icon-sun",A.af,A.mO,null)})();(function staticFields(){$.ib=0
$.dr=B.pp()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"qw","lw",()=>{B.of()
return $.ib})})()};
(a=>{a["vjMWQCyEcRrFNMccFJOc/w4Nqto="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
