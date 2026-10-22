((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
nY(){throw C.e(C.aa("Cannot modify constant Set"))},
mc(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return C.r(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
mb(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.b.aB(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
op(){return Date.now()},
or(){var w,v
if($.il!==0)return
$.il=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.il=1e6
$.ds=new B.ik(v)},
cZ:function cZ(){},
c8:function c8(d,e,f){this.a=d
this.b=e
this.$ti=f},
ik:function ik(d){this.a=d},
qh(d){var w=B.mc(d,null)
if(w!=null)return w
throw C.e(C.hO(d,null))},
q0(d){var w=B.mb(d)
if(w!=null)return w
throw C.e(C.hO("Invalid double",d))},
l3(d){return new C.ba(d)},
os(d){var w=null
return new C.cn(w,w,!1,w,w,d)},
iu:function iu(){this.b=this.a=0},
j7:function j7(){},
lF(d,e,f){return new B.bq(f,e,d,null)},
qk(d,e,f,g){return new B.a5(e,g,f,d,null)},
bF(d,e,f,g,h,i){return new B.fY(h,f,i,e,g,d,null)},
n8(d,e,f,g,h,i,j,k){return new B.el(i,j,g,e,d,f,h,k.h("el<0>"))},
h8(d,e,f){return new B.h7(f,e,d,null)},
mM(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
n1(d,e,f,g){var w=null
return new B.R(g,w,e,w,w,f,d,w)},
bH(d,e,f){return new B.ad(e,f,d,null)},
fX:function fX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
h1:function h1(d,e,f){this.d=d
this.w=e
this.a=f},
h3:function h3(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
h2:function h2(d){this.a=d},
a8:function a8(d,e){this.w=d
this.a=e},
bo:function bo(d,e){this.w=d
this.a=e},
h5:function h5(d){this.a=d},
h6:function h6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
a9:function a9(d,e,f){this.c=d
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
bq:function bq(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
a5:function a5(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.a=h},
N:function N(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
ha:function ha(d,e,f){this.d=d
this.w=e
this.a=f},
fY:function fY(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
el:function el(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.z=f
_.Q=g
_.at=h
_.ax=i
_.a=j
_.$ti=k},
i_:function i_(d,e,f){this.c=d
this.a=e
this.b=f},
h4:function h4(d,e,f){this.f=d
this.x=e
this.a=f},
h7:function h7(d,e,f,g){var _=this
_.d=d
_.e=e
_.Q=f
_.a=g},
hb:function hb(d,e,f,g){var _=this
_.at=d
_.ch=e
_.CW=f
_.a=g},
hd:function hd(d,e,f,g,h,i){var _=this
_.ch=d
_.CW=e
_.cy=f
_.db=g
_.dx=h
_.a=i},
aY:function aY(d,e,f,g){var _=this
_.f=d
_.x=e
_.z=f
_.a=g},
ek:function ek(d,e){this.Q=d
this.a=e},
bp:function bp(d,e){this.y=d
this.a=e},
h9:function h9(d){this.a=d},
cF:function cF(d,e){this.w=d
this.a=e},
cH:function cH(d,e){this.w=d
this.a=e},
cG:function cG(d,e){this.w=d
this.a=e},
at:function at(d,e){this.as=d
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
ad:function ad(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
a_:function a_(d,e){this.w=d
this.a=e},
eC:function eC(d,e,f){this.c=d
this.a=e
this.b=f},
fU:function fU(d,e,f){this.a=d
this.b=e
this.c=f},
hv:function hv(d,e){this.a=d
this.b=e},
hi:function hi(d,e){this.a=d
this.b=e},
e4:function e4(d,e){this.b=d
this.c=e},
iA:function iA(d,e){this.a=d
this.b=e},
hM:function hM(d,e){this.a=d
this.b=e},
iB:function iB(){},
fS:function fS(){},
fH:function fH(d,e){this.a=d
this.b=e},
b0:function b0(d,e){this.b=d
this.a=e},
fB:function fB(d,e,f,g,h,i,j){var _=this
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
ch:function ch(){},
eP:function eP(){},
dI:function dI(d){this.$ti=d},
b5:function b5(){},
aq:function aq(){},
fb:function fb(d,e,f,g){var _=this
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
fc:function fc(d,e,f){var _=this
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
nM(){return new B.b8(null)},
b8:function b8(d){this.a=d},
cK:function cK(){var _=this
_.e=_.d=!1
_.f="intro"
_.r=!0
_.c=_.a=null},
hr:function hr(d){this.a=d},
hq:function hq(d){this.a=d},
hl:function hl(d){this.a=d},
hk:function hk(d){this.a=d},
hj:function hj(d,e){this.a=d
this.b=e},
ho:function ho(d){this.a=d},
hn:function hn(d){this.a=d},
hp:function hp(d){this.a=d},
hm:function hm(d){this.a=d},
Z:function Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fs:function fs(){var _=this
_.f=_.e=_.d=!1
_.r=""
_.w=0
_.x=!1
_.c=_.a=null},
iM:function iM(d){this.a=d},
iN:function iN(d){this.a=d},
iL:function iL(d){this.a=d},
iO:function iO(d){this.a=d},
iP:function iP(d,e){this.a=d
this.b=e},
iQ:function iQ(d,e){this.a=d
this.b=e},
iR:function iR(d){this.a=d},
iS:function iS(d){this.a=d},
eF:function eF(d){this.a=d},
eI:function eI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
hS:function hS(d){this.a=d},
hT:function hT(d){this.a=d},
hU:function hU(d){this.a=d},
hV:function hV(d){this.a=d},
hW:function hW(d){this.a=d},
hX:function hX(d){this.a=d},
hY:function hY(d){this.a=d},
cm:function cm(d){this.a=d},
fI:function fI(){var _=this
_.d="hello"
_.e=""
_.f='\u179f\u17bc\u1798\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u1798\u17be\u179b\u179b\u1791\u17d2\u1792\u1795\u179b...'
_.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"
_.w=!1
_.c=_.a=null},
jd:function jd(d,e){this.a=d
this.b=e},
jc:function jc(d,e){this.a=d
this.b=e},
je:function je(d){this.a=d},
jf:function jf(d,e){this.a=d
this.b=e},
jg:function jg(d,e){this.a=d
this.b=e},
j9:function j9(d,e){this.a=d
this.b=e},
ja:function ja(d,e){this.a=d
this.b=e},
jb:function jb(d){this.a=d},
ji:function ji(d){this.a=d},
jj:function jj(d){this.a=d},
jk:function jk(d){this.a=d},
jl:function jl(d){this.a=d},
jm:function jm(d){this.a=d},
jh:function jh(d,e){this.a=d
this.b=e},
cq:function cq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fM:function fM(){this.d=""
this.c=this.a=null},
jr:function jr(){},
js:function js(d,e){this.a=d
this.b=e},
jt:function jt(){},
ju:function ju(){},
jq:function jq(d){this.a=d},
jw:function jw(d){this.a=d},
jx:function jx(d){this.a=d},
jv:function jv(d){this.a=d},
jy:function jy(d){this.a=d},
jz:function jz(d){this.a=d},
jA:function jA(d,e){this.a=d
this.b=e},
f9:function f9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ir:function ir(d,e){this.a=d
this.b=e},
a7:function a7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh:function fh(d,e,f){this.c=d
this.d=e
this.a=f},
iz:function iz(d,e){this.a=d
this.b=e},
ab:function ab(d,e){this.a=d
this.b=e},
I:function I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eq:function eq(d){this.a=d},
ez:function ez(d){this.a=d},
eG:function eG(d){this.a=d},
eH:function eH(d){this.a=d},
f4:function f4(d){this.a=d},
nf(d){var w=b.G,v=C.X(C.q(w.document).documentElement)
if(v!=null)v.setAttribute("data-theme",d)
C.q(C.q(w.window).localStorage).setItem("khmerlang-doc-theme",d)},
qs(d){C.q(b.G.window).addEventListener("keydown",C.mP(new B.kW(d)))},
n6(){var w,v=C.q(b.G.window),u=new B.kF()
if(typeof u=="function")C.em(C.c4("Attempting to rewrap a JS function.",null))
w=function(d,e){return function(){return d(e)}}(B.p7,u)
w[$.kY()]=u
C.aU(v.setTimeout(w,25))},
q6(d){var w=C.X(C.q(b.G.document).getElementById(d))
if(x.m.b(w))return C.Y(w.value)
return""},
kW:function kW(d){this.a=d},
kF:function kF(){},
F:function F(){},
dq:function dq(d){this.a=d},
bS:function bS(d){this.a=d},
c5:function c5(d){this.a=d},
dp:function dp(){},
cL:function cL(d){this.a=d},
dr:function dr(d){this.a=d},
bv:function bv(d){this.a=d},
dF:function dF(){},
dG:function dG(d,e){this.a=d
this.b=e},
b_:function b_(d,e,f){this.a=d
this.b=e
this.c=f},
cM:function cM(d,e){this.a=d
this.b=e},
cj:function cj(d,e){this.a=d
this.b=e},
di:function di(d,e,f){this.a=d
this.b=e
this.c=f},
ce:function ce(d,e){this.a=d
this.b=e},
d6:function d6(d,e,f){this.a=d
this.b=e
this.c=f},
d5:function d5(d,e){this.a=d
this.b=e},
dm:function dm(d,e){this.a=d
this.b=e},
dJ:function dJ(d,e){this.a=d
this.b=e},
dt:function dt(d){this.a=d},
cN:function cN(d){this.a=d},
cd:function cd(d,e,f){this.a=d
this.b=e
this.c=f},
dM:function dM(d,e){this.a=d
this.b=e},
d4:function d4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu:function bu(d,e,f){this.a=d
this.b=e
this.c=f},
cb:function cb(d,e){this.a=d
this.b=e},
cs:function cs(d,e,f){this.a=d
this.b=e
this.c=f},
cR:function cR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dv:function dv(d){this.a=d},
d3:function d3(d){this.a=d},
nh(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.ny.k(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
q5(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.J.k(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
ah(d){var w,v
if(typeof d=="number")return d
if(typeof d=="string"){w=D.b.aB(B.q5(D.b.aB(d)))
v=B.mc(w,null)
return v==null?B.mb(w):v}return null},
c2(d){if(d==null)return"\u1791\u1791\u17c1"
if(C.fW(d))return d?"\u1796\u17b7\u178f":"\u1798\u17b7\u1793\u1796\u17b7\u178f"
if(typeof d=="number")return B.nh(d===D.c.aT(d)?D.f.j(D.c.Y(d)):D.c.j(d))
if(C.lv(d))return B.nh(D.f.j(d))
if(x.j.b(d))return"["+J.l0(d,new B.kG(),x.N).S(0,", ")+"]"
if(x.f.b(d))return"{"+d.gbc().aj(0,new B.kH(),x.N).S(0,", ")+"}"
if(d instanceof B.bb)return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a.a+">"
if(d instanceof B.by)return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a+">"
if(d instanceof B.b1)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd "+d.a+">"
if(d instanceof B.l)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785 "+d.a+">"
return J.v(d)},
pY(c0,c1){var w="\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e",v="\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7",u="\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784",t="\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6",s="\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785",r="\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8",q="contains",p=C.E(x.N,x.z),o=new B.kl(c1),n=new B.ke(),m=new B.kB(),l=new B.k3(),k=new B.kv(),j=new B.kk(),i=new B.kr(),h=new B.k7(),g=new B.k5(),f=new B.kg(),e=new B.kh(),d=new B.kn(A.bo),a0=new B.ky(),a1=new B.kz(),a2=new B.kx(),a3=new B.ku(),a4=new B.kw(),a5=new B.kp(),a6=new B.kA(),a7=new B.kC(),a8=new B.kf(),a9=new B.k4(),b0=new B.kb(),b1=new B.kj(),b2=new B.ko(),b3=new B.kc(),b4=new B.ks(),b5=new B.kq(),b6=new B.k8(),b7=new B.k6(),b8=new B.ki(),b9=new B.k9(c0)
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
return new B.bs(p,null)},
kG:function kG(){},
kH:function kH(){},
bs:function bs(d,e){this.a=d
this.b=e},
l:function l(d,e){this.a=d
this.b=e},
b1:function b1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
by:function by(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bb:function bb(d,e){this.a=d
this.b=e},
kl:function kl(d){this.a=d},
km:function km(){},
ke:function ke(){},
kB:function kB(){},
k3:function k3(){},
kv:function kv(){},
kk:function kk(){},
kr:function kr(){},
k7:function k7(){},
k5:function k5(){},
kg:function kg(){},
kh:function kh(){},
kn:function kn(d){this.a=d},
ky:function ky(){},
kz:function kz(){},
kx:function kx(){},
ku:function ku(){},
kw:function kw(){},
kp:function kp(){},
kA:function kA(){},
kC:function kC(){},
kf:function kf(){},
k4:function k4(){},
kb:function kb(){},
kj:function kj(){},
ko:function ko(){},
kc:function kc(){},
kd:function kd(){},
ks:function ks(){},
kt:function kt(){},
kq:function kq(){},
k8:function k8(){},
k6:function k6(){},
ki:function ki(){},
k9:function k9(d){this.a=d},
ka:function ka(){},
m5(d,e,f){return new B.ib(d,e,f,null)},
cl(d,e,f){return new B.ii(d,e,f,null)},
m(d){return new B.dw(d,null,null,null)},
dc:function dc(){},
ib:function ib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ii:function ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dw:function dw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5:function f5(d){this.a=d},
i0:function i0(d){this.a=d
this.b=$},
i1:function i1(d,e){this.a=d
this.b=e},
i2:function i2(d,e){this.a=d
this.b=e},
i3:function i3(d,e){this.a=d
this.b=e},
i4:function i4(d,e){this.a=d
this.b=e},
m4(d){var w=new B.ia(d)
w.e=d.length
return w},
ia:function ia(d){var _=this
_.a=d
_.b=0
_.d=_.c=1
_.e=$},
f0:function f0(d){this.a=d
this.b=0},
ne(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=null,a0=new C.cu(""),a1=new B.iu()
$.lG()
i=$.ds.$0()
a1.a=i
a1.b=null
w=a1
v=new B.kV(a0,null)
u=null
t=null
try{s=B.m4(a2)
r=s.d6()
q=new B.f0(r)
u=q.d2()
t=B.pY(d,v)
i=t
h=new B.i0(i)
h.b=i
p=h
o=p.f0(u)
i=w
if(i.b==null)i.b=$.ds.$0()
n=C.E(x.N,x.z)
for(i=t.a,i=new C.aO(i,C.n(i).h("aO<1,2>")).gC(0);i.p();){g=i.d
g.toString
m=g
if(!(m.b instanceof B.l))J.hg(n,m.a,m.b)}i=a0.a
g=B.l3(w.gbO())
return new B.d2("success",i.charCodeAt(0)==0?i:i,null,g)}catch(f){i=C.a1(f)
if(i instanceof B.dc){l=i
i=w
if(i.b==null)i.b=$.ds.$0()
i=e!=null
if(i)l.toString
if(i)l.d=e
i=a0.a
g=l.bR()
l.cP()
l.toString
l.toString
return new B.d2("error",i.charCodeAt(0)==0?i:i,g,B.l3(w.gbO()))}else{k=i
i=w
if(i.b==null)i.b=$.ds.$0()
j=e!=null&&D.b.gW(e)?e:"<source>"
i=a0.a
g=C.j(k)
C.j(j)
C.j(k)
return new B.d2("error",i.charCodeAt(0)==0?i:i,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+g,B.l3(w.gbO()))}}},
pW(d){var w,v,u,t,s,r,q,p,o,n=null
try{w=B.m4(d)
v=w.d6()
u=new B.f0(v)
t=u.d2()
p=J.ao(v)
if(J.ao(t)!==0)C.ax(C.aX(J.nD(t)).a,null)
return new B.cP("success",p,null)}catch(o){p=C.a1(o)
if(p instanceof B.dc){s=p
p=n!=null
if(p)s.toString
if(p)s.d=n
p=s.bR()
s.cP()
s.toString
s.toString
return new B.cP("error",0,p)}else{r=p
q=n!=null&&D.b.gW(n)?n:"<source>"
p=C.j(r)
C.j(q)
C.j(r)
return new B.cP("error",0,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+p)}}},
d2:function d2(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.w=g},
cP:function cP(d,e,f){this.a=d
this.b=e
this.d=f},
kV:function kV(d,e){this.a=d
this.b=e},
u:function u(d,e){this.a=d
this.b=e},
ar:function ar(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oz(d,e){var w=$.K
if(w===D.i)return C.lj(d,x.M.a(e))
return C.lj(d,x.M.a(w.bK(e)))},
p7(d){return x.Z.a(d).$0()},
h_(d,e,f,g){return C.E(x.N,x.v)},
cz(d,e,f,g,h,i,j){var w=null
return new C.aT(w,i,h,d,w,e,j,f,g,w,w)},
qb(d){var w,v,u=d.split("\n"),t=C.c([],x.i)
for(w=0;v=u.length,w<v;++w){D.a.F(t,B.pk(u[w]))
if(w<v-1)D.a.m(t,A.u9)}return t},
pk(d){var w,v,u,t,s,r,q,p,o=null
if(D.b.di(D.b.aB(d),"#")){w=x.i
return C.c([B.bH(C.c([new C.a(d,o)],w),"com",o)],w)}w=x.i
v=C.c([],w)
u=new C.cu("")
for(t=d.length,s=0;s<t;){if(!(s>=0))return C.r(d,s)
r=d[s]
if(r==="#"){t=u.a
if(t.length!==0){D.a.F(v,B.lx(t.charCodeAt(0)==0?t:t))
u.a=""}D.a.m(v,new B.ad("com",o,C.c([new C.a(D.b.aY(d,s),o)],w),o))
break}if(r==='"'||r==="'"){q=u.a
if(q.length!==0){D.a.F(v,B.lx(q.charCodeAt(0)==0?q:q))
u.a=""}p=s+1
for(;;){q=p<t
if(!(q&&d[p]!==r))break
if(!(p<t))return C.r(d,p)
p=d[p]==="\\"&&p+1<t?p+2:p+1}if(q)++p
D.a.m(v,new B.ad("str",o,C.c([new C.a(D.b.al(d,s,p),o)],w),o))
s=p
continue}u.a+=r;++s}w=u.a
if(w.length!==0)D.a.F(v,B.lx(w.charCodeAt(0)==0?w:w))
return v},
lx(d){var w,v,u,t="(\\s+|[(){}\\[\\],;:=+\\-*/%<>!\u17d4\u17d5\u17d6])",s=C.c([],x.i),r=D.b.dh(d,C.co(t)),q=C.co(t).b5(0,d),p=C.ap(q,C.n(q).h("i.E"))
for(w=0,v=0;v<r.length;++v){u=r[v]
if(u.length!==0)D.a.m(s,B.pM(u))
if(w<p.length){q=p[w].b
if(0>=q.length)return C.r(q,0)
q=q[0]
D.a.m(s,new C.a(q==null?"":q,null));++w}}return s},
pM(d){var w,v=null
if(A.on.D(0,d))return B.bH(C.c([new C.a(d,v)],x.i),"kw",v)
else if(A.om.D(0,d))return B.bH(C.c([new C.a(d,v)],x.i),"builtin",v)
else{w=C.co("^[\u17e0-\u17e90-9]+(\\.[\u17e0-\u17e90-9]+)?$")
if(w.b.test(d))return B.bH(C.c([new C.a(d,v)],x.i),"num",v)}return new C.a(d,v)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[3],B)
A=c[4]
B.cZ.prototype={
m(d,e){C.n(this).c.a(e)
B.nY()}}
B.c8.prototype={
gl(d){return this.b},
gA(d){return this.b===0},
gW(d){return this.b!==0},
gC(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new C.bW(w,w.length,v.$ti.h("bW<1>"))},
D(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
B.iu.prototype={
gbO(){var w,v=this.b
if(v==null)v=$.ds.$0()
w=v-this.a
if($.lG()===1e6)return w
return w*1000}}
B.j7.prototype={
d_(d){if(d<=0||d>4294967296)throw C.e(B.os("max must be in range 0 < max \u2264 2^32, was "+d))
return Math.random()*d>>>0},
f7(){return Math.random()}}
B.fX.prototype={
t(d){var w=this
return new C.A("aside",w.c,w.d,null,w.f,null,w.w,null)}}
B.h1.prototype={
t(d){var w=null
return new C.A("footer",w,this.d,w,w,w,this.w,w)}}
B.h3.prototype={
t(d){var w=null
return new C.A("header",this.c,this.d,w,w,w,this.w,w)}}
B.h2.prototype={
t(d){var w=null
return new C.A("h1",w,"doc-title",w,w,w,A.ji,w)}}
B.a8.prototype={
t(d){var w=null
return new C.A("h2",w,"section-heading",w,w,w,this.w,w)}}
B.bo.prototype={
t(d){var w=null
return new C.A("h3",w,"sub-heading",w,w,w,this.w,w)}}
B.h5.prototype={
t(d){var w=null
return new C.A("main",w,"docs-main-content",w,w,w,A.ff,w)}}
B.h6.prototype={
t(d){var w=this
return new C.A("nav",w.c,w.d,null,w.f,null,w.w,null)}}
B.a9.prototype={
t(d){var w=null
return new C.A("section",this.c,"doc-section",w,w,w,this.w,w)}}
B.w.prototype={
t(d){var w=this
return new C.A("div",w.c,w.d,w.e,w.f,w.r,w.w,null)}}
B.bq.prototype={
t(d){var w=null
return new C.A("ul",this.c,this.d,w,w,w,this.w,w)}}
B.a5.prototype={
t(d){var w=this,v=x.N
return new C.A("li",null,w.e,w.f,C.E(v,v),w.w,w.x,null)}}
B.N.prototype={
t(d){var w=null
return new C.A("p",w,this.d,this.e,w,w,this.w,w)}}
B.ha.prototype={
t(d){var w=null
return new C.A("pre",w,this.d,w,w,w,this.w,w)}}
B.fY.prototype={
t(d){var w=this,v=x.N,u=C.E(v,v),t=w.y
if(t!=null)u.F(0,t)
v=C.E(v,x.v)
v.F(0,w.z)
v.F(0,B.h0().$1$1$onClick(null,x.H))
return new C.A("button",w.r,w.w,w.x,u,v,w.Q,null)}}
B.el.prototype={
t(d){var w,v=this,u=null,t=x.N,s=C.E(t,t)
s.F(0,v.at)
s.i(0,"type",v.c.c)
w=v.e
if(w!=null)s.i(0,"value",w)
w=B.mM(u)
if(w!=null)s.i(0,"checked",w)
w=B.mM(u)
if(w!=null)s.i(0,"indeterminate",w)
t=C.E(t,x.v)
t.F(0,v.ax)
t.F(0,B.h0().$1$2$onChange$onInput(u,u,v.$ti.c))
return new C.A("input",v.z,v.Q,u,s,t,u,u)}}
B.i_.prototype={
ab(){return"InputType."+this.b}}
B.h4.prototype={
t(d){var w=null,v=x.N
return new C.A("label",w,w,this.f,C.E(v,v),w,this.x,w)}}
B.h7.prototype={
t(d){var w=null,v=x.N
v=C.E(v,v)
v.i(0,"value",this.d)
if(this.e)v.i(0,"selected","")
return new C.A("option",w,w,w,v,w,this.Q,w)}}
B.hb.prototype={
t(d){var w=null,v=x.N,u=C.E(v,x.v)
u.F(0,this.ch)
u.F(0,B.h0().$1$2$onChange$onInput(w,w,x.a))
return new C.A("select",w,this.at,w,C.E(v,v),u,this.CW,w)}}
B.hd.prototype={
t(d){var w,v=this,u=null,t=x.N,s=C.E(t,t)
s.F(0,v.cy)
w=C.E(t,x.v)
w.F(0,v.db)
w.F(0,B.h0().$1$2$onChange$onInput(u,u,t))
return new C.A("textarea",v.ch,v.CW,u,s,w,v.dx,u)}}
B.aY.prototype={
t(d){var w=null,v=x.N
v=C.E(v,v)
v.F(0,this.x)
return new C.A("svg",this.f,w,w,v,w,this.z,w)}}
B.ek.prototype={
t(d){var w=null,v=x.N
v=C.E(v,v)
v.F(0,this.Q)
return new C.A("circle",w,w,w,v,w,A.B,w)}}
B.bp.prototype={
t(d){var w=null,v=x.N
v=C.E(v,v)
v.F(0,this.y)
return new C.A("path",w,w,w,v,w,A.B,w)}}
B.h9.prototype={
t(d){var w=null,v=x.N
v=C.E(v,v)
v.F(0,A.nM)
return new C.A("polygon",w,w,w,v,w,A.B,w)}}
B.cF.prototype={
t(d){var w=null
return new C.A("table",w,"doc-table",w,w,w,this.w,w)}}
B.cH.prototype={
t(d){var w=null
return new C.A("thead",w,w,w,w,w,this.w,w)}}
B.cG.prototype={
t(d){var w=null
return new C.A("tbody",w,w,w,w,w,this.w,w)}}
B.at.prototype={
t(d){var w=null,v=x.N
return new C.A("th",w,w,w,C.E(v,v),w,this.as,w)}}
B.o.prototype={
t(d){var w=null
return new C.A("tr",w,w,w,w,w,this.w,w)}}
B.b.prototype={
t(d){var w=null,v=x.N
return new C.A("td",w,w,w,C.E(v,v),w,this.z,w)}}
B.R.prototype={
t(d){var w=this,v=x.N,u=C.E(v,v),t=w.Q
if(t!=null)u.F(0,t)
u.i(0,"href",w.c)
v=C.E(v,x.v)
t=w.as
if(t!=null)v.F(0,t)
v.F(0,B.h0().$1$1$onClick(null,x.H))
return new C.A("a",w.x,w.y,w.z,u,v,w.at,null)},
gak(){return null}}
B.d.prototype={
t(d){var w=null
return new C.A("code",w,this.d,w,w,w,this.w,w)}}
B.ad.prototype={
t(d){var w=null
return new C.A("span",w,this.d,this.e,w,w,this.w,w)}}
B.a_.prototype={
t(d){var w=null
return new C.A("strong",w,w,w,w,w,this.w,w)}}
B.eC.prototype={
ab(){return"Display."+this.b}}
B.fU.prototype={
gbn(){var w,v=C.c([],x.s)
v.push("solid")
v.push(this.b.a)
w=this.c
v.push(C.eZ(w.b)+w.a)
w=x.N
return C.L(["border",D.a.S(v," ")],w,w)},
$inN:1}
B.hv.prototype={
ab(){return"BorderStyle."+this.b}}
B.hi.prototype={
ab(){return"AlignItems."+this.b}}
B.e4.prototype={
gbn(){var w,v=x.N
v=C.E(v,v)
w=this.b
w=w==null?null:C.eZ(w.b)+w.a
if(w!=null)v.i(0,"top",w)
w=this.c
w=w==null?null:C.eZ(w.b)+w.a
if(w!=null)v.i(0,"right",w)
return v},
$ilh:1}
B.iA.prototype={
ab(){return"TextAlign."+this.b}}
B.hM.prototype={
ab(){return"FontWeight."+this.b}}
B.iB.prototype={}
B.fS.prototype={
ga7(){var w=C.c([],x.s)
w.push("none")
return D.a.S(w," ")},
$ioy:1}
B.fH.prototype={}
B.b0.prototype={
ae(){var w=C.cc(x.h),v=($.af+1)%16777215
$.af=v
return new B.fB(null,!1,!1,w,v,this,D.m)}}
B.fB.prototype={
aK(){var w=this.f
w.toString
return x.c.a(w).b},
ah(){var w=this.CW.d$
w.toString
return C.o_(w,null)},
aC(d){x.T.a(d)}}
B.ch.prototype={}
B.eP.prototype={}
B.dI.prototype={
N(d,e){var w
if(e==null)return!1
if(J.l_(e)===C.aX(this))w=this.$ti.b(e)
else w=!1
return w},
gM(d){return C.oo([C.aX(this),"search-modal-input-field"])},
j(d){var w=this.$ti,v=w.c,u=C.aG(v)===A.w_?"<'search-modal-input-field'>":"<search-modal-input-field>"
if(C.aX(this)===C.aG(w))return"["+u+"]"
return"["+C.aG(v).j(0)+" "+u+"]"}}
B.b5.prototype={
ae(){var w=this.b9(),v=($.af+1)%16777215
$.af=v
v=new B.fb(w,v,this,D.m)
w.c=v
w.scl(this)
return v}}
B.aq.prototype={
be(){},
L(d){x.M.a(d).$0()
this.c.cZ()},
scl(d){this.a=C.n(this).h("aq.T?").a(d)}}
B.fb.prototype={
bL(){return this.ry.t(this)},
V(){var w=this
if(w.w.c)w.ry.toString
w.dQ()
w.bo()},
dQ(){try{this.ry.be()}finally{}this.ry.toString},
aA(){var w=this
w.w.toString
if(w.x1){w.ry.toString
w.x1=!1}w.c4()},
aD(d){var w
x.D.a(d)
w=this.ry
w.toString
C.n(w).h("aq.T").a(d)
return!0},
a3(d){x.D.a(d)
this.bs(d)
this.ry.scl(d)},
aN(d){var w
x.D.a(d)
try{w=this.ry
w.toString
C.n(w).h("aq.T").a(d)}finally{}this.bq(d)},
av(){this.ry.toString
this.dm()},
aW(){this.br()
this.ry=this.ry.c=null}}
B.y.prototype={
ae(){var w=($.af+1)%16777215
$.af=w
return new B.fc(w,this,D.m)}}
B.fc.prototype={
gB(){return x.q.a(C.p.prototype.gB.call(this))},
V(){if(this.w.c)this.r.toString
this.bo()},
aD(d){x.q.a(C.p.prototype.gB.call(this))
return!0},
bL(){return x.q.a(C.p.prototype.gB.call(this)).t(this)},
aA(){this.w.toString
this.c4()}}
B.b8.prototype={
b9(){return new B.cK()}}
B.cK.prototype={
be(){var w,v,u,t=this
t.c8()
w=b.G
v=C.c0(C.q(C.q(w.window).localStorage).getItem("khmerlang-doc-theme"))
if(v==null)v="dark"
t.r=v!=="light"
B.nf(v)
B.qs(new B.hr(t))
w=C.Y(C.q(C.q(w.window).location).hash)
C.mf(0,0,w.length,"startIndex")
u=C.qy(w,"#","",0)
if(u.length!==0)t.f=u},
eb(){this.L(new B.hl(this))},
e9(){this.L(new B.hk(this))},
dW(d){C.Y(d)
this.L(new B.hj(this,d))
C.q(C.q(b.G.window).location).hash=d},
t(d){var w=this,v=null,u=w.r,t=w.d,s=w.f,r=w.gdV(),q=x.i
return new B.b0(C.c([new B.eI(w.ge8(),new B.ho(w),w.gea(),u,v),new B.w(v,"docs-container",v,v,v,C.c([new B.f9(t,s,r,v),A.AN,new B.fh(s,r,v)],q),v),A.bQ,new B.cq(w.e,new B.hp(w),r,v)],q),v)}}
B.Z.prototype={
b9(){return new B.fs()}}
B.fs.prototype={
dO(){var w=this,v=w.a.e
C.q(C.q(C.q(C.q(b.G.window).navigator).clipboard).writeText(v))
w.L(new B.iM(w))
B.oz(A.bP,new B.iN(w))},
dP(){var w,v,u,t=this
t.L(new B.iO(t))
try{w=B.ne(t.a.e)
t.L(new B.iP(t,w))}catch(u){v=C.a1(u)
t.L(new B.iQ(t,v))}},
t(d){var w,v=this,u=null,t=x.i,s=C.c([B.bH(C.c([new C.a(v.a.d,u)],t),"code-card-lang",u),B.bH(C.c([new C.a(v.a.c,u)],t),"code-card-title",u)],t),r=v.d?B.cz(new B.fU(A.bd,A.a_,new B.fH("px",1)),A.a_,u,u,u,u,u):u,q=x.N,p=x.v,o=C.L(["click",new B.iR(v)],q,p)
r=C.c([B.bF(C.c([new C.a(v.d?"\u2713 \u1794\u17b6\u1793\u1785\u1798\u17d2\u179b\u1784!":"\u1785\u1798\u17d2\u179b\u1784",u)],t),u,"btn-code-action btn-copy-code",o,u,r)],t)
o=v.a
w=o.f
if(w==null?o.d==="KHMER":w){o=v.e?C.L(["disabled","true"],q,q):u
p=C.L(["click",new B.iS(v)],q,p)
r.push(B.bF(C.c([new C.a(v.e?"\u23f3 \u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a...":"\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a",u)],t),o,"btn-code-action btn-code-run",p,u,u))}s=C.c([new B.w(u,"code-card-meta",u,u,u,s,u),new B.w(u,"code-card-actions",u,u,u,r,u)],t)
r=C.c([],t)
q=v.a
p=q.d
q=q.e
if(p==="KHMER")D.a.F(r,B.qb(q))
else r.push(new C.a(q,u))
s=C.c([new B.w(u,"code-card-header",u,u,u,s,u),new B.w(u,"code-content-wrapper",u,u,u,C.c([new B.ha("code-block",C.c([new B.d("snippet-source",r,u)],t),u)],t),u)],t)
if(v.f){r=B.cz(u,A.v,new C.aK("rem",0.75),u,u,u,u)
r=C.c([A.BF,B.bH(C.c([new C.a(""+v.w+"ms",u)],t),"code-output-time",r)],t)
q=v.x?A.aN:A.aP
s.push(new B.w(u,"code-output-drawer visible",u,u,u,C.c([new B.w(u,"code-output-header",u,u,u,r,u),new B.w(u,"code-output-body",q,u,u,C.c([new C.a(v.r,u)],t),u)],t),u))}return new B.w(u,"code-card",u,u,u,s,u)}}
B.eF.prototype={
t(d){var w=null,v=x.i
return new B.h1("docs-footer",C.c([A.AP,new B.N(w,B.cz(w,A.v,new C.aK("rem",0.85),w,new B.e4(new C.aK("rem",0.4),w),w,w),C.c([A.tB,A.x_,A.tx,A.wV],v),w)],v),w)}}
B.eI.prototype={
t(d){var w,v=this,u="docs-header",t=null,s="search-trigger-btn",r=x.N,q=C.L(["aria-label","\u1794\u17be\u1780\u1798\u17c9\u17ba\u1793\u17bb\u1799"],r,r),p=x.v,o=C.L(["click",new B.hS(v)],r,p),n=x.i
o=C.c([B.bF(C.c([A.C7],n),q,"header-action-btn mobile-menu-toggle",o,"mobile-toggle-btn",t),A.x7],n)
q=C.c([new B.w(s,s,t,t,C.L(["click",new B.hT(v)],r,p),C.c([new B.w(t,"search-trigger-content",t,t,t,C.c([A.Cb,B.n8(C.L(["placeholder","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search docs)...","autocomplete","off","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search Docs)"],r,r),"header-search-inline-input",C.L(["focus",new B.hU(v),"click",new B.hV(v),"input",new B.hW(v),"keydown",new B.hX(v)],r,p),"header-search-input",t,A.ab,t,x.z)],n),t),new B.w(t,"search-kbd-shortcut",t,t,t,C.c([new C.A("kbd",t,t,t,t,t,C.c([new C.a("\u2318",t)],n),t),new C.A("kbd",t,t,t,t,t,C.c([new C.a("K",t)],n),t)],n),t)],n),t)],n)
w=C.L(["aria-label","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Mode","title","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Theme"],r,r)
p=C.L(["click",new B.hY(v)],r,p)
r=C.c([],n)
if(v.f)r.push(A.C9)
else r.push(A.Cd)
return new B.h3(u,u,C.c([new B.w(t,"brand-wrapper",t,t,t,o,t),new B.w(t,"header-center-search",t,t,t,q,t),new B.w(t,"header-actions",t,t,t,C.c([A.wW,B.bF(r,w,"header-action-btn",p,"theme-toggle-btn",t),A.x9],n),t)],n),t)}}
B.cm.prototype={
b9(){return new B.fI()}}
B.fI.prototype={
be(){this.c8()
this.e=y.n},
dU(d){this.L(new B.jd(this,d))},
dR(d){this.L(new B.jc(this,d))},
e1(){var w,v,u,t=this
t.L(new B.je(t))
try{w=B.ne(t.e)
t.L(new B.jf(t,w))}catch(u){v=C.a1(u)
t.L(new B.jg(t,v))}},
dA(){var w,v,u,t=this
try{w=B.pW(t.e)
t.L(new B.j9(t,w))}catch(u){v=C.a1(u)
t.L(new B.ja(t,v))}},
dC(){this.L(new B.jb(this))},
t(d){var w,v,u,t,s=this,r=null,q="rem",p="btn-playground-clear",o="\u1794\u1784\u17d2\u17a0\u17b6\u1789()",n=B.cz(r,A.v,new C.aK(q,0.8),A.aa,r,r,r),m=x.i,l=C.c([A.rk],m),k=x.N,j=x.v,i=C.L(["change",new B.ji(s)],k,j),h=s.d
h=B.h8(C.c([A.uK],m),h==="hello","hello")
w=s.d
w=B.h8(C.c([A.qe],m),w==="math","math")
v=s.d
v=B.h8(C.c([A.u8],m),v==="fibo","fibo")
u=s.d
u=B.h8(C.c([A.v2],m),u==="oop","oop")
t=s.d
t=C.c([new B.h4(n,l,r),new B.hb("playground-sample-select",i,C.c([h,w,v,u,B.h8(C.c([A.q_],m),t==="grades","grades")],m),r)],m)
u=C.L(["title","\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd"],k,k)
v=C.L(["click",new B.jj(s)],k,j)
v=B.bF(C.c([A.BL],m),u,p,v,r,r)
u=C.L(["title","\u179b\u17bb\u1794\u179b\u1791\u17d2\u1792\u1795\u179b"],k,k)
w=C.L(["click",new B.jk(s)],k,j)
w=B.bF(C.c([A.Ca,A.BJ],m),u,p,w,r,r)
u=C.L(["click",new B.jl(s)],k,j)
u=C.c([new B.w(r,r,A.ww,r,r,t,r),new B.w(r,"playground-actions",r,r,r,C.c([v,w,B.bF(C.c([A.b7,A.BG],m),r,"btn-playground-run",u,r,r)],m),r)],m)
w=B.cz(r,A.v,new C.aK(q,0.75),r,new B.e4(r,new C.aK(q,0.25)),r,r)
w=C.c([B.bH(C.c([A.oy],m),r,w),s.O("\u178f\u17b6\u17c6\u1784 ","\u178f\u17b6\u17c6\u1784"),s.O(o,o),s.O("\u1794\u17be () {\n\n}","\u1794\u17be"),s.O("\u17ac\u1794\u17be () {\n\n}","\u17ac\u1794\u17be"),s.O("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n\n}","\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f"),s.O("\u1781\u178e\u17c8 () {\n\n}","\u1781\u178e\u17c8"),s.O("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i < \u17e5; i = i + \u17e1) {\n\n}","\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb"),s.O("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"),s.O("\u178f\u17d2\u179a\u17a1\u1794\u17cb ","\u178f\u17d2\u179a\u17a1\u1794\u17cb"),s.O("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1788\u17d2\u1798\u17c4\u17c7 {\n\n}","\u1790\u17d2\u1793\u17b6\u1780\u17cb"),s.O("\u1794\u1784\u17d2\u1780\u17be\u178f() {\n\n}","\u1794\u1784\u17d2\u1780\u17be\u178f"),s.O("\u1793\u17c1\u17c7.","\u1793\u17c1\u17c7."),s.O("\u1790\u17d2\u1798\u17b8 ","\u1790\u17d2\u1798\u17b8"),s.O("\u1794\u1793\u17d2\u178f\u1796\u17b8 ","\u1794\u1793\u17d2\u178f\u1796\u17b8"),s.O("\u1796\u17b7\u178f","\u1796\u17b7\u178f"),s.O("\u1798\u17b7\u1793\u1796\u17b7\u178f","\u1798\u17b7\u1793\u1796\u17b7\u178f"),s.O("\u1791\u1791\u17c1","\u1791\u1791\u17c1"),s.O("\u17d4","\u17d4"),s.O("\u17d5","\u17d5")],m)
j=C.c([new B.hd("playground-code-textarea","playground-textarea",C.L(["spellcheck","false","placeholder","\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u1793\u17c5\u1791\u17b8\u1793\u17c1\u17c7..."],k,k),C.L(["input",new B.jm(s)],k,j),C.c([new C.a(s.e,r)],m),r)],m)
k=B.cz(r,A.v,new C.aK(q,0.75),r,r,r,r)
k=C.c([A.BK,B.bH(C.c([new C.a(s.r,r)],m),r,k)],m)
n=s.w?A.aN:A.aP
return new B.w(r,"playground-container",r,r,r,C.c([new B.w(r,"playground-toolbar",r,r,r,u,r),new B.w(r,"playground-virtual-keys",r,r,r,w,r),new B.w(r,"playground-grid",r,r,r,C.c([new B.w(r,"playground-editor-pane",r,r,r,j,r),new B.w(r,"playground-console-pane",r,r,r,C.c([new B.w(r,"console-pane-header",r,r,r,k,r),new B.w(r,"console-pane-body",n,r,r,C.c([new C.a(s.f,r)],m),r)],m),r)],m),r)],m),r)},
O(d,e){var w=null,v=C.L(["click",new B.jh(this,d)],x.N,x.v)
return B.bF(C.c([new C.a(e,w)],x.i),w,"vk-btn",v,w,w)}}
B.cq.prototype={
b9(){return new B.fM()},
f9(){return this.d.$0()},
d0(d){return this.e.$1(d)}}
B.fM.prototype={
gcq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.b.aB(this.d).toLowerCase()
if(d.length===0)return A.ac
w=C.co("\\s+")
v=C.hc(d,w," ")
u=C.hc(d," ","")
w=x.U
t=C.ap(new C.dK(C.c(v.split(" "),x.s),x.Q.a(new B.jr()),w),w.h("i.E"))
s=C.c([],x.V)
for(r=0;r<18;++r){q=A.ac[r]
p=q.b.toLowerCase()
o=C.hc(p," ","")
n=q.c.toLowerCase()
m=q.e.toLowerCase()
l=C.hc(m," ","")
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
if(D.a.eP(t,new B.js(j,i)))h+=50}if(h>0)D.a.m(s,new C.e5(q,h))}D.a.aE(s,new B.jt())
w=x.d
w=C.ap(new C.ag(s,x.g.a(new B.ju()),w),w.h("a0.E"))
return w},
aG(){this.L(new B.jq(this))
this.a.f9()},
t(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="search-modal-card",e="search-modal-input",d="search-results-list"
if(!h.a.c)return A.A4
w=h.gcq()
v=x.N
u=x.v
t=C.L(["click",new B.jw(h)],v,u)
s=C.L(["role","dialog","aria-modal","true","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a"],v,v)
r=h.d
r=B.n8(C.L(["placeholder","\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u17ac\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791\u178a\u17c2\u179b\u1785\u1784\u17cb\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780...","autocomplete","off","autofocus","true"],v,v),e,C.L(["input",new B.jx(h),"keydown",new B.jy(h)],v,u),e,A.bn,A.ab,r,x.z)
q=C.L(["click",new B.jz(h)],v,u)
p=x.i
q=C.c([A.Cc,r,B.bF(C.c([A.pY],p),g,"search-kbd-esc-btn",q,g,g)],p)
r=C.c([],p)
o=w.length
if(o===0){v=B.cz(g,A.v,g,g,g,new C.dO(new C.aK("rem",1.5)),A.oo)
r.push(B.qk(C.c([new C.a('\u179a\u1780\u1798\u17b7\u1793\u1783\u17be\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb "'+h.d+'" \u17a1\u17be\u1799\u17d4',g)],p),g,g,v))}else for(n=0;n<w.length;w.length===o||(0,C.aj)(w),++n){m=w[n]
l=C.L(["click",new B.jA(h,m)],v,u)
k=C.c([new B.ad(g,g,C.c([new C.a(m.b,g)],p),g),new B.ad("sidebar-badge",g,C.c([new C.a(m.d,g)],p),g)],p)
j=m.f
i=m.c
r.push(new B.a5("search-result-item",g,l,C.c([new B.w(g,"search-result-title",g,g,g,k,g),new B.w(g,"search-result-desc",g,g,g,C.c([new C.a(j.length!==0?i+" \u2014 "+j:i,g)],p),g)],p),g))}return new B.w("search-modal-backdrop","search-modal-backdrop open visible",g,g,t,C.c([new B.w(f,f,g,s,g,C.c([new B.w(g,"search-input-header",g,g,g,q,g),B.lF(r,d,d),A.A0],p),g)],p),g)}}
B.f9.prototype={
t(d){var w=this,v=w.c?" mobile-open":"",u=x.N,t=x.W
return new B.h6("docs-sidebar","docs-sidebar"+v,C.L(["aria-label","\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6"],u,u),C.c([w.am(C.c([A.wq,A.wr,A.wb],t),"\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784 (Getting Started)"),w.am(C.c([A.wh,A.wj,A.we],t),"\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 (Language Basics)"),w.am(C.c([A.wd,A.wi,A.wf],t),"\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a (Control Flow)"),w.am(C.c([A.wl,A.wg],t),"\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)"),w.am(C.c([A.wm,A.wc],t),"\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb (OOP)"),w.am(C.c([A.wk,A.wn,A.wp,A.wo],t),"\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784")],x.i),null)},
am(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
x.P.a(d)
w=x.i
v=C.c([new C.a(e,i)],w)
u=C.c([],w)
for(t=d.length,s=x.N,r=x.v,q=this.d,p=0;p<d.length;d.length===t||(0,C.aj)(d),++p){o=d[p]
n=o.a
m=q===n?" active":""
l=C.L(["click",new B.ir(this,o)],s,r)
k=C.c([],w)
j=o.b
if(o.c)k.push(new B.ad(i,A.wu,C.c([new C.a(j,i)],w),i))
else k.push(new C.a(j,i))
j=o.d
if(j!=null)k.push(new B.ad("sidebar-badge badge-new",i,C.c([new C.a(j,i)],w),i))
u.push(new B.a5(i,i,i,C.c([B.n1(k,"sidebar-nav-link"+m,l,"#"+n)],w),i))}return new B.w(i,"sidebar-nav-group",i,i,i,C.c([new B.w(i,"sidebar-nav-title",i,i,i,v,i),B.lF(u,"sidebar-nav-list",i)],w),i)}}
B.a7.prototype={}
B.fh.prototype={
t(d){var w,v,u,t,s,r,q,p="docs-toc",o="toc-list",n=null,m=x.N,l=C.L(["aria-label","\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7"],m,m),k=x.i,j=C.c([],k)
for(w=x.v,v=this.c,u=0;u<17;++u){t=A.kK[u]
s=t.a
r=v===s?" active":""
q=C.L(["click",new B.iz(this,t)],m,w)
j.push(new B.a5(n,n,n,C.c([B.n1(C.c([new C.a(t.b,n)],k),"toc-link"+r,q,"#"+s)],k),n))}return new B.fX(p,p,l,C.c([A.A_,B.lF(j,o,o)],k),n)}}
B.ab.prototype={}
B.I.prototype={}
B.eq.prototype={
t(d){return A.bT}}
B.ez.prototype={
t(d){return A.bU}}
B.eG.prototype={
t(d){return A.bR}}
B.eH.prototype={
t(d){return A.bV}}
B.f4.prototype={
t(d){return A.bS}}
B.F.prototype={}
B.dq.prototype={
j(d){return"NumberNode("+C.j(this.a)+")"},
ga7(){return this.a}}
B.bS.prototype={
j(d){return'StringNode("'+this.a+'")'},
ga7(){return this.a}}
B.c5.prototype={
j(d){return"BooleanNode("+this.a+")"},
ga7(){return this.a}}
B.dp.prototype={
j(d){return"NullNode()"}}
B.cL.prototype={
j(d){return"ArrayNode("+C.j(this.a)+")"}}
B.dr.prototype={
j(d){return"ObjectNode("+C.j(this.a)+")"}}
B.bv.prototype={
j(d){return"IdentifierNode("+this.a+")"}}
B.dF.prototype={
j(d){return"ThisNode()"}}
B.dG.prototype={
j(d){return"UnaryOpNode("+this.a+", "+this.b.j(0)+")"}}
B.b_.prototype={
j(d){return"BinaryOpNode("+this.a.j(0)+", "+this.b+", "+this.c.j(0)+")"}}
B.cM.prototype={
j(d){return"AssignmentNode("+this.a+", "+this.b.j(0)+")"},
ga7(){return this.b}}
B.cj.prototype={
j(d){return"MemberAccessNode("+this.a.j(0)+"."+this.b+")"},
gak(){return this.a}}
B.di.prototype={
j(d){return"MemberAssignmentNode("+this.a.j(0)+"."+this.b+" = "+this.c.j(0)+")"},
gak(){return this.a},
ga7(){return this.c}}
B.ce.prototype={
j(d){return"IndexAccessNode("+this.a.j(0)+"["+this.b.j(0)+"])"},
gak(){return this.a}}
B.d6.prototype={
j(d){return"IndexAssignmentNode("+this.a.j(0)+"["+this.b.j(0)+"] = "+this.c.j(0)+")"},
gak(){return this.a},
ga7(){return this.c}}
B.d5.prototype={
j(d){return"FunctionCallNode("+this.a.j(0)+", "+C.j(this.b)+")"}}
B.dm.prototype={
j(d){return"NewNode("+this.a+", "+C.j(this.b)+")"}}
B.dJ.prototype={
j(d){return"VarDeclNode("+this.a+", "+C.j(this.b)+")"},
ga7(){return this.b}}
B.dt.prototype={
j(d){return"PrintNode("+C.j(this.a)+")"}}
B.cN.prototype={
j(d){return"BlockNode("+C.j(this.a)+")"}}
B.cd.prototype={
j(d){return"IfNode("+this.a.j(0)+", "+this.b.j(0)+", else: "+C.j(this.c)+")"}}
B.dM.prototype={
j(d){return"WhileNode("+this.a.j(0)+", "+this.b.j(0)+")"}}
B.d4.prototype={
j(d){var w=this
return"ForNode(init: "+C.j(w.a)+", cond: "+C.j(w.b)+", inc: "+C.j(w.c)+", body: "+w.d.j(0)+")"}}
B.bu.prototype={
j(d){return"FunctionDeclNode("+this.a+"("+C.j(this.b)+"), "+this.c.j(0)+")"}}
B.cb.prototype={
j(d){return"GetterDeclNode("+this.a+", "+this.b.j(0)+")"}}
B.cs.prototype={
j(d){return"SetterDeclNode("+this.a+"("+this.b+"), "+this.c.j(0)+")"}}
B.cR.prototype={
j(d){var w=this
return"ClassDeclNode("+w.a+" extends "+C.j(w.b)+", methods: "+C.j(w.c)+", getters: "+C.j(w.d)+", setters: "+C.j(w.e)+")"}}
B.dv.prototype={
j(d){return"ReturnNode("+C.j(this.a)+")"},
ga7(){return this.a}}
B.d3.prototype={
j(d){return"ExpressionStmtNode("+this.a.j(0)+")"}}
B.bs.prototype={
a9(d){var w=this.a
if(w.I(d))return w.k(0,d)
w=this.b
if(w!=null)return w.a9(d)
throw C.e(B.m("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u17a2\u1790\u17c1\u179a \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' / Undefined variable or function '"+d+"'"))},
cL(d,e){var w=this.a
if(w.I(d)){w.i(0,d,e)
return}w=this.b
if(w!=null){w.cL(d,e)
return}throw C.e(B.m("\u17a2\u1790\u17c1\u179a\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1794\u17b6\u1793\u1794\u17d2\u179a\u1780\u17b6\u179f '"+d+"' / Cannot assign to undeclared variable '"+d+"'"))}}
B.l.prototype={
$1(d){return this.b.$1(x.j.a(d))},
j(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785/BuiltinFunction "+this.a+">"}}
B.b1.prototype={
b8(d){var w=this,v=C.E(x.N,x.z)
v.i(0,"\u1793\u17c1\u17c7",d)
v.i(0,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",d)
return new B.b1(w.a,w.b,w.c,new B.bs(v,w.d))},
$2(d,e){var w,v,u,t,s,r,q,p,o=this
x.j.a(e)
u=J.z(e)
t=u.gl(e)
s=o.b
r=s.length
if(t!==r){t=o.a
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+t+"' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1785\u17c6\u1793\u17bd\u1793 "+r+" \u1794\u17c9\u17bb\u1793\u17d2\u178f\u17c2\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793 "+u.gl(e)+" / Function '"+t+"' expected "+s.length+" arguments, got "+u.gl(e)))}w=new B.bs(C.E(x.N,x.z),o.d)
for(q=0;q<s.length;++q){t=s[q]
r=u.k(e,q)
w.a.i(0,t,r)}try{d.cS(o.c.a,w)}catch(p){u=C.a1(p)
if(u instanceof B.f5){v=u
return v.a}else throw p}return null},
j(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd "+this.a+">"}}
B.by.prototype={
bd(d){var w=this.c
if(w.I(d))return w.k(0,d)
w=this.b
if(w!=null)return w.bd(d)
return null},
bP(d){var w=this.d
if(w.I(d))return w.k(0,d)
w=this.b
if(w!=null)return w.bP(d)
return null},
cT(d){var w=this.e
if(w.I(d))return w.k(0,d)
w=this.b
if(w!=null)return w.cT(d)
return null},
cX(d,e){var w,v=new B.bb(this,C.E(x.N,x.z)),u=this.bd("\u1794\u1784\u17d2\u1780\u17be\u178f")
if(u!=null)u.b8(v).$2(d,e)
else if(e.length!==0){w=this.a
throw C.e(B.m("\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+w+"' \u1782\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1794\u1784\u17d2\u1780\u17be\u178f (Constructor) / Class '"+w+"' has no constructor taking arguments"))}return v},
j(d){return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a+">"}}
B.bb.prototype={
c0(d,e){var w,v,u,t=this,s=t.a,r=s.bP(d)
if(r!=null){w=r.b8(t)
s=w.$2(e,[])
return s}v=t.b
if(v.I(d))return v.k(0,d)
u=s.bd(d)
if(u!=null)return u.b8(t)
throw C.e(B.m("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+s.a+"' / Undefined property or method '"+d+"'"))},
c2(d,e,f){var w=this.a.cT(d)
if(w!=null){w.b8(this).$2(f,[e])
return}this.b.i(0,d,e)},
j(d){return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a.a+">"}}
B.dc.prototype={
bR(){var w,v=this.b
if(v!=null){w=" [\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb/Line "+C.j(v)
v=this.c
w=(v!=null?w+(", \u1787\u17bd\u179a/Col "+C.j(v)):w)+"]"}else w=""
return"\u1780\u17c6\u17a0\u17bb\u179f/Error"+w+": "+this.a},
cP(){var w,v=this.b
if(v==null)v=1
w=this.c
if(w==null)w=1
return"<source>:"+v+":"+w+": error: "+this.a},
j(d){return this.bR()}}
B.ib.prototype={}
B.ii.prototype={}
B.dw.prototype={}
B.f5.prototype={}
B.i0.prototype={
f0(d){var w,v,u,t,s
x.t.a(d)
for(w=d.length,v=null,u=0;u<d.length;d.length===w||(0,C.aj)(d),++u){t=d[u]
s=this.b
s===$&&C.am()
v=this.E(t,s)}return v},
E(d,e){var w,v,u,t=this
if(d instanceof B.dq)return d.a
if(d instanceof B.bS)return d.a
if(d instanceof B.c5)return d.a
if(d instanceof B.dp)return null
if(d instanceof B.cL)return t.eh(d,e)
if(d instanceof B.dr)return t.ev(d,e)
if(d instanceof B.bv)return t.en(d,e)
if(d instanceof B.dF)return t.ey(d,e)
if(d instanceof B.dG)return t.ez(d,e)
if(d instanceof B.b_)return t.ej(d,e)
if(d instanceof B.cM)return t.ei(d,e)
if(d instanceof B.cj)return t.er(d,e)
if(d instanceof B.di)return t.es(d,e)
if(d instanceof B.ce)return t.ep(d,e)
if(d instanceof B.d6)return t.eq(d,e)
if(d instanceof B.d5)return t.em(d,e)
if(d instanceof B.dm)return t.eu(d,e)
if(d instanceof B.dJ){w=d.b
v=w!=null?t.E(w,e):null
e.a.i(0,d.a,v)
return v}if(d instanceof B.dt)return t.ew(d,e)
if(d instanceof B.cN)return t.cS(d.a,new B.bs(C.E(x.N,x.z),e))
if(d instanceof B.cd)return t.eo(d,e)
if(d instanceof B.dM)return t.eA(d,e)
if(d instanceof B.d4)return t.el(d,e)
if(d instanceof B.bu){w=d.a
u=new B.b1(w,d.b,d.c,e)
e.a.i(0,w,u)
return u}if(d instanceof B.cR)return t.ek(d,e)
if(d instanceof B.dv)return t.ex(d,e)
if(d instanceof B.d3)return t.E(d.a,e)
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1790\u17d2\u1793\u17b6\u17c6\u1784 AST \u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Unsupported AST node type: "+C.aX(d).j(0)))},
cS(d,e){var w,v,u,t,s,r=this
x.t.a(d)
t=r.b
t===$&&C.am()
w=t
r.b=e
try{v=null
for(t=d.length,s=0;s<d.length;d.length===t||(0,C.aj)(d),++s){u=d[s]
v=r.E(u,e)}t=v
return t}finally{r.b=x.A.a(w)}},
ap(d){var w
if(d!=null){w=J.bn(d)
w=w.N(d,!1)||w.N(d,0)||w.N(d,"")}else w=!0
if(w)return!1
return!0},
eh(d,e){var w=d.a,v=C.a3(w),u=v.h("ag<1,@>")
w=C.ap(new C.ag(w,v.h("@(1)").a(new B.i1(this,e)),u),u.h("a0.E"))
return w},
ev(d,e){var w,v,u,t,s=C.E(x.N,x.z)
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.aj)(w),++u){t=w[u]
s.i(0,t.a,this.E(t.b,e))}return s},
en(d,e){var w,v,u,t
try{v=e.a9(d.a)
return v}catch(u){if(C.a1(u) instanceof B.dw){try{w=e.a9("\u1793\u17c1\u17c7")
if(w instanceof B.bb){v=d.a
if(w.a.bP(v)!=null||w.b.I(v)||w.a.bd(v)!=null){v=w.c0(v,this)
return v}}}catch(t){}throw u}else throw u}},
ey(d,e){var w,v
try{w=e.a9("\u1793\u17c1\u17c7")
return w}catch(v){try{w=e.a9("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6")
return w}catch(v){w=B.m("\u1796\u17b6\u1780\u17d2\u1799 '\u1793\u17c1\u17c7' \u17ac '\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17b6\u1793\u178f\u17c2\u1780\u17d2\u1793\u17bb\u1784\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1793\u17c1\u17c7'/'\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' can only be used inside class methods")
throw C.e(w)}}},
ez(d,e){var w=this.E(d.b,e),v=d.a
if(v==="!"||v==="\u1798\u17b7\u1793")return!this.ap(w)
if(v==="-"){if(typeof w=="number")return-w
throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u178a\u1780 '-' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '-' requires a numeric operand"))}throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a unary \u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+v+"' / Unknown unary operator '"+v+"'"))},
ej(d,e){var w,v,u,t=this,s="' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '",r="' requires numeric operands",q=t.E(d.a,e),p=d.b
if(p==="\u1793\u17b7\u1784"||p==="&&"){if(!t.ap(q))return q
return t.E(d.c,e)}if(p==="\u17ac"||p==="||"){if(t.ap(q))return q
return t.E(d.c,e)}w=t.E(d.c,e)
if(p==="==")return J.a2(q,w)
if(p==="!=")return!J.a2(q,w)
if(p==="+"){if(typeof q=="string"||typeof w=="string")return B.c2(q)+B.c2(w)
if(typeof q=="number"&&typeof w=="number")return q+w
throw C.e(B.m("\u1780\u17b6\u179a\u1794\u17bc\u1780 '+' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u179b\u17be\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u179f\u179a / '+' requires numbers or strings"))}v=p==="-"
if(v||p==="*"||p==="/"||p==="%"){if(typeof q!="number"||typeof w!="number")throw C.e(B.m("\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a '"+p+s+p+r))
if(v)return q-w
if(p==="*")return q*w
if(p==="/"){if(w===0)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17c2\u1780\u1793\u17b9\u1784\u179f\u17bc\u1793\u17d2\u1799\u1794\u17b6\u1793\u1791\u17c1 / Division by zero"))
u=q/w
return u===D.c.aT(u)?D.c.Y(u):u}if(p==="%")return D.c.de(q,w)}v=p==="<"
if(v||p===">"||p==="<="||p===">="){if(typeof q!="number"||typeof w!="number")throw C.e(B.m("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794 '"+p+s+p+r))
if(v)return q<w
if(p===">")return q>w
if(p==="<=")return q<=w
if(p===">=")return q>=w}throw C.e(B.m("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+p+"' / Unknown binary operator '"+p+"'"))},
ei(d,e){var w,v,u,t=this.E(d.b,e)
try{e.cL(d.a,t)}catch(v){if(C.a1(v) instanceof B.dw){try{w=e.a9("\u1793\u17c1\u17c7")
if(w instanceof B.bb){w.c2(d.a,t,this)
return t}}catch(u){}throw v}else throw v}return t},
er(d,e){var w=this.E(d.a,e)
if(w instanceof B.bb)return w.c0(d.b,this)
if(x.f.b(w))return w.k(0,d.b)
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member access on invalid target"))},
es(d,e){var w=this.E(d.a,e),v=this.E(d.c,e)
if(w instanceof B.bb){w.c2(d.b,v,this)
return v}if(x.f.b(w)){w.i(0,d.b,v)
return v}throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member assignment on invalid target"))},
ep(d,e){var w,v,u=this.E(d.a,e),t=this.E(d.b,e)
if(x.j.b(u)){if(typeof t!="number")throw C.e(B.m(y.m))
w=D.c.Y(t)
if(w<0||w>=J.ao(u)){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}return J.lM(u,w)}if(typeof u=="string"){if(typeof t!="number")throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / String index must be a number"))
w=D.c.Y(t)
if(w<0||w>=u.length){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / String index out of bounds ("+v+")"))}if(!(w>=0&&w<u.length))return C.r(u,w)
return u[w]}if(x.f.b(u))return u.k(0,J.v(t))
throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1791\u17b6\u1789\u1799\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable"))},
eq(d,e){var w,v,u=this.E(d.a,e),t=this.E(d.b,e),s=this.E(d.c,e)
if(x.j.b(u)){if(typeof t!="number")throw C.e(B.m(y.m))
w=D.c.Y(t)
if(w<0||w>=J.ao(u)){v=""+w
throw C.e(B.m("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}J.hg(u,w,s)
return s}if(x.f.b(u)){u.i(0,J.v(t),s)
return s}throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable for assignment"))},
em(d,e){var w=this,v=w.E(d.a,e),u=d.b,t=C.a3(u),s=t.h("ag<1,@>"),r=C.ap(new C.ag(u,t.h("@(1)").a(new B.i2(w,e)),s),s.h("a0.E"))
if(v instanceof B.by)return v.cX(w,r)
if(v instanceof B.b1)return v.$2(w,r)
if(v instanceof B.l)return v.b.$1(r)
throw C.e(B.m("\u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u1790\u17d2\u1793\u17b6\u1780\u17cb / Target is not callable"))},
eu(d,e){var w,v,u,t=d.a,s=e.a9(t)
if(!(s instanceof B.by))throw C.e(B.m("'"+t+"' \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class) \u1791\u17c1 / '"+t+"' is not a class"))
t=d.b
w=C.a3(t)
v=w.h("ag<1,@>")
u=C.ap(new C.ag(t,w.h("@(1)").a(new B.i3(this,e)),v),v.h("a0.E"))
return s.cX(this,u)},
ek(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.b
if(h!=null){w=e.a9(h)
if(!(w instanceof B.by))throw C.e(B.m("\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 '"+h+"' \u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Parent class '"+h+"' is not a class"))
v=w}else v=null
h=x.N
u=x.n
t=C.E(h,u)
for(s=d.c,r=s.length,q=0;q<s.length;s.length===r||(0,C.aj)(s),++q){p=s[q]
o=p.a
t.i(0,o,new B.b1(o,p.b,p.c,e))}n=C.E(h,u)
for(s=d.d,r=s.length,o=x.s,q=0;q<s.length;s.length===r||(0,C.aj)(s),++q){m=s[q]
l=m.a
n.i(0,l,new B.b1(l,C.c([],o),m.b,e))}k=C.E(h,u)
for(h=d.e,u=h.length,q=0;q<h.length;h.length===u||(0,C.aj)(h),++q){j=h[q]
s=j.a
k.i(0,s,new B.b1(s,C.c([j.b],o),j.c,e))}h=d.a
i=new B.by(h,v,t,n,k)
e.a.i(0,h,i)
return i},
ew(d,e){var w=d.a,v=C.a3(w),u=v.h("ag<1,@>"),t=C.ap(new C.ag(w,v.h("@(1)").a(new B.i4(this,e)),u),u.h("a0.E"))
return x.R.a(e.a9("\u1794\u1784\u17d2\u17a0\u17b6\u1789")).b.$1(t)},
eo(d,e){var w,v=this
if(v.ap(v.E(d.a,e)))return v.E(d.b,e)
else{w=d.c
if(w!=null)return v.E(w,e)}return null},
eA(d,e){var w,v,u
for(w=d.a,v=d.b,u=null;this.ap(this.E(w,e));)u=this.E(v,e)
return u},
el(d,e){var w,v,u,t,s,r=this,q=new B.bs(C.E(x.N,x.z),e),p=d.a
if(p!=null)r.E(p,q)
for(p=d.c,w=p!=null,v=d.d,u=d.b,t=u!=null,s=null;;){if(t)if(!r.ap(r.E(u,q)))break
s=r.E(v,q)
if(w)r.E(p,q)}return s},
ex(d,e){var w=d.a
throw C.e(new B.f5(w!=null?this.E(w,e):null))}}
B.ia.prototype={
gl(d){var w=this.e
w===$&&C.am()
return w},
a1(d){var w=this.b+d,v=this.e
v===$&&C.am()
if(w>=v)return""
v=this.a
if(!(w<v.length))return C.r(v,w)
return v[w]},
U(){return this.a1(0)},
H(){var w=this,v=w.U();++w.b
if(v==="\n"){++w.c
w.d=1}else ++w.d
return v},
b3(d){var w,v=d.length
if(v===0)return!1
if(0>=v)return C.r(d,0)
w=d.charCodeAt(0)
return w>=48&&w<=57||A.J.I(d)},
cv(d){var w,v=d.length
if(v===0)return!1
if(d==="_")return!0
if(0>=v)return C.r(d,0)
w=d.charCodeAt(0)
if(!(w>=65&&w<=90))v=w>=97&&w<=122
else v=!0
if(v)return!0
if(!(w>=6016&&w<=6143))v=w>=6624&&w<=6655
else v=!0
return v},
d6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=C.c([],x.S),a1=x.N,a2=x.e,a3=x.s
for(;;){w=d.b
v=d.e
v===$&&C.am()
if(!(w<v))break
A:{u=d.U()
if(u===" "||u==="\t"||u==="\r"||u==="\n"||u==="\u200b"||u==="\xa0"||u==="\ufeff"){d.H()
break A}if(u!=="#")w=u==="/"&&d.a1(1)==="/"
else w=!0
if(w){for(;;){if(!(d.U().length!==0&&d.U()!=="\n"))break
d.H()}break A}if(u==="/"&&d.a1(1)==="*"){d.H()
d.H()
for(;;){if(d.U().length!==0)w=!(d.U()==="*"&&d.a1(1)==="/")
else w=!1
if(!w)break
d.H()}if(d.U().length!==0){d.H()
d.H()}break A}t=d.c
s=d.d
if(d.b3(u)){r=""
q=!1
for(;;){if(!d.b3(d.U()))w=d.U()==="."&&!q&&d.b3(d.a1(1))
else w=!0
if(!w)break
p=d.H()
if(p===".")q=!0
r+=p}for(w=r.length,o=0,v="";o<w;++o){n=r[o]
m=A.J.k(0,n)
v+=m==null?n:m}l=v.charCodeAt(0)==0?v:v
D.a.m(a0,new B.ar(A.as,q?B.q0(l):B.qh(l),t,s))
break A}if(u==='"'||u==="'"||u==="\u201c"||u==="\u201d"||u==="\u2018"||u==="\u2019"){k=d.H()
j=k==="\u201c"||k==="\u201d"||k==="\u2018"||k==="\u2019"?A.mR:C.c([k],a3)
i=""
for(;;){if(!(d.U().length!==0&&!D.a.D(j,d.U())))break
p=d.H()
if(p==="\\"){h=d.H()
if(h==="n")i+="\n"
else if(h==="t")i+="\t"
else if(h==="\\")i+="\\"
else{D.a.D(j,h)
i+=h}}else i+=p}if(d.U().length===0)throw C.e(B.m5("String \u1798\u17b7\u1793\u1794\u17b6\u1793\u1794\u17b7\u1791 / Unclosed string literal",t,s))
d.H()
D.a.m(a0,new B.ar(A.at,i,t,s))
break A}if(u==="="&&d.a1(1)==="="){d.H()
d.H()
D.a.m(a0,new B.ar(A.aF,"==",t,s))
break A}if(u==="!"&&d.a1(1)==="="){d.H()
d.H()
D.a.m(a0,new B.ar(A.aG,"!=",t,s))
break A}if(u==="<"&&d.a1(1)==="="){d.H()
d.H()
D.a.m(a0,new B.ar(A.aJ,"<=",t,s))
break A}if(u===">"&&d.a1(1)==="="){d.H()
d.H()
D.a.m(a0,new B.ar(A.aK,">=",t,s))
break A}if(u==="&"&&d.a1(1)==="&"){d.H()
d.H()
D.a.m(a0,new B.ar(A.L,"&&",t,s))
break A}if(u==="|"&&d.a1(1)==="|"){d.H()
d.H()
D.a.m(a0,new B.ar(A.M,"||",t,s))
break A}g=C.L(["+",A.aB,"-",A.Q,"*",A.aC,"/",A.aD,"%",A.aE,"=",A.R,"<",A.aH,">",A.aI,"!",A.N,".",A.S,"\uff0e",A.S,"(",A.h,")",A.d,"{",A.y,"}",A.q,"[",A.U,"]",A.z,",",A.l,";",A.j,"\u17d6",A.G,":",A.G,"\u17d4",A.j],a1,a2)
if(g.I(u)){d.H()
w=g.k(0,u)
w.toString
D.a.m(a0,new B.ar(w,u,t,s))
break A}if(d.cv(u)){f=""
for(;;){if(d.U().length!==0){w=d.U()
w=d.cv(w)||d.b3(w)}else w=!1
if(!w)break
f+=d.H()}if(A.ah.I(f)){w=A.ah.k(0,f)
w.toString
D.a.m(a0,new B.ar(w,f,t,s))}else D.a.m(a0,new B.ar(A.k,f,t,s))
break A}e=d.H()
if(0>=e.length)return C.r(e,0)
throw C.e(B.m5("\u17a2\u1780\u17d2\u179f\u179a/\u179f\u1789\u17d2\u1789\u17b6\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+e+"' (U+"+D.b.d1(D.f.fn(e.charCodeAt(0),16).toUpperCase(),4,"0")+") / Unexpected character '"+e+"'",t,s))}}D.a.m(a0,new B.ar(A.u,null,d.c,d.d))
return a0}}
B.f0.prototype={
n(){var w=this.b,v=this.a
if(w>=v.length)return D.a.gcY(v)
return v[w]},
q(d){if(D.a.D(x.b.a(d),this.n().a)){this.a_()
return!0}return!1},
a_(){var w,v=this.a,u=this.b,t=v.length
if(!(u<t))return C.r(v,u)
w=v[u]
if(u<t-1)this.b=u+1
return w},
v(d,e){var w,v
if(this.n().a===d)return this.a_()
w=this.n()
v=w.c
throw C.e(B.cl(e+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
af(d){var w,v,u=this
if(u.n().a===A.k||u.n().a===A.p||u.n().a===A.o)return u.a_()
w=u.n()
v=w.c
throw C.e(B.cl(d+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
ao(d){var w,v,u=this
if(u.n().a===A.k||u.n().a===A.p||u.n().a===A.o)return u.a_()
w=u.n()
v=w.c
throw C.e(B.cl(d+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
d2(){var w,v=C.c([],x.I)
while(this.n().a!==A.u){w=this.cF()
if(w!=null)D.a.m(v,w)}return v},
cF(){var w,v,u,t,s,r,q,p,o=this,n=null,m="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'"
for(w=x.B;o.q(C.c([A.j],w)););if(o.n().a===A.u)return n
if(o.n().a===A.F)return o.cK()
if(o.n().a===A.T)return o.dX()
if(o.n().a===A.V){o.v(A.V,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u17be' / Expected '\u1794\u17be'")
v=o.q(C.c([A.h],w))
u=o.J()
if(v)o.v(A.d,m)
t=o.T()
if(o.n().a===A.H)s=o.cm()
else s=o.q(C.c([A.W],w))?o.T():n
return new B.cd(u,t,s)}if(o.n().a===A.X){o.v(A.X,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1781\u178e\u17c8' / Expected '\u1781\u178e\u17c8'")
v=o.q(C.c([A.h],w))
u=o.J()
if(v)o.v(A.d,m)
return new B.dM(u,o.T())}if(o.n().a===A.Y){o.v(A.Y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb' / Expected '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb'")
o.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected '(' in for loop")
if(o.n().a!==A.j)r=o.n().a===A.F?o.cK():o.co()
else{o.a_()
r=n}u=o.n().a!==A.j?o.J():n
o.v(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ';' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ';'")
q=o.n().a!==A.d?o.J():n
o.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ')'")
return new B.d4(r,u,q,o.T())}if(o.n().a===A.x||o.n().a===A.P)return o.dM()
if(o.n().a===A.O)return o.dB()
if(o.n().a===A.K){o.v(A.K,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17d2\u179a\u17a1\u1794\u17cb' / Expected '\u178f\u17d2\u179a\u17a1\u1794\u17cb'")
p=o.n().a!==A.j&&o.n().a!==A.q&&o.n().a!==A.u?o.J():n
o.q(C.c([A.j],w))
return new B.dv(p)}if(o.n().a===A.y)return o.T()
return o.co()},
cK(){var w,v,u,t=this
t.v(A.F,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17b6\u17c6\u1784' / Expected '\u178f\u17b6\u17c6\u1784'")
w=t.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1790\u17c1\u179a / Expected variable name")
v=x.B
u=t.q(C.c([A.R],v))?t.J():null
t.q(C.c([A.j],v))
return new B.dJ(J.v(w.b),u)},
dX(){var w,v,u=this
u.v(A.T,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u1784\u17d2\u17a0\u17b6\u1789' / Expected '\u1794\u1784\u17d2\u17a0\u17b6\u1789'")
w=C.c([],x.I)
v=x.B
if(u.q(C.c([A.h],v))){if(u.n().a!==A.d){D.a.m(w,u.J())
while(u.q(C.c([A.l],v)))D.a.m(w,u.J())}u.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791 / Expected ')'")}else{D.a.m(w,u.J())
while(u.q(C.c([A.l],v)))D.a.m(w,u.J())}u.q(C.c([A.j],v))
return new B.dt(w)},
cm(){var w,v,u,t,s,r=this
r.v(A.H,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17ac\u1794\u17be' / Expected '\u17ac\u1794\u17be'")
w=x.B
v=r.q(C.c([A.h],w))
u=r.J()
if(v)r.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'")
t=r.T()
if(r.n().a===A.H)s=r.cm()
else s=r.q(C.c([A.W],w))?r.T():null
return new B.cd(u,t,s)},
dM(){var w,v,u,t,s=this,r=y.c,q=x.B
if(!(s.q(C.c([A.x],q))||s.q(C.c([A.P],q)))){w=s.n()
throw C.e(B.cl("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' / Expected '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd'",w.c,w.d))}v=s.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected function name")
s.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.c([],x.s)
if(s.n().a!==A.d){D.a.m(u,J.v(s.v(A.k,r).b))
while(s.q(C.c([A.l],q)))D.a.m(u,J.v(s.v(A.k,r).b))}s.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
t=s.T()
return new B.bu(J.v(v.b),u,t)},
dB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7 Getter / Expected getter name",h="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",g="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7 Setter / Expected setter name",f="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('",e="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Setter / Expected parameter name for setter",d=y.c
j.v(A.O,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1790\u17d2\u1793\u17b6\u1780\u17cb' / Expected '\u1790\u17d2\u1793\u17b6\u1780\u17cb'")
w=j.af("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected class name")
v=x.B
u=j.q(C.c([A.aA],v))?J.v(j.af("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 / Expected parent class name").b):null
j.v(A.y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' \u178a\u17be\u1798\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '{' for class body")
t=C.c([],x._)
s=C.c([],x.x)
r=C.c([],x.k)
q=x.s
for(;;){if(!(j.n().a!==A.q&&j.n().a!==A.u))break
if(j.q(C.c([A.p],v))){p=j.ao(i)
if(j.q(C.c([A.h],v)))j.v(A.d,h)
o=j.T()
D.a.m(s,new B.cb(J.v(p.b),o))}else if(j.q(C.c([A.o],v))){p=j.ao(g)
j.v(A.h,f)
n=j.af(e)
j.v(A.d,h)
o=j.T()
D.a.m(r,new B.cs(J.v(p.b),J.v(n.b),o))}else if(j.q(C.c([A.P,A.x],v)))if(j.q(C.c([A.p],v))){p=j.ao(i)
if(j.q(C.c([A.h],v)))j.v(A.d,h)
o=j.T()
D.a.m(s,new B.cb(J.v(p.b),o))}else if(j.q(C.c([A.o],v))){p=j.ao(g)
j.v(A.h,f)
n=j.af(e)
j.v(A.d,h)
o=j.T()
D.a.m(r,new B.cs(J.v(p.b),J.v(n.b),o))}else{m=j.ao("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected method/function name")
j.v(A.h,f)
l=C.c([],q)
if(j.n().a!==A.d){D.a.m(l,J.v(j.af(d).b))
while(j.q(C.c([A.l],v)))D.a.m(l,J.v(j.af(d).b))}j.v(A.d,h)
o=j.T()
D.a.m(t,new B.bu(J.v(m.b),l,o))}else if(j.n().a===A.k||j.n().a===A.p||j.n().a===A.o){m=j.a_()
j.v(A.h,f)
l=C.c([],q)
if(j.n().a!==A.d){D.a.m(l,J.v(j.af(d).b))
while(j.q(C.c([A.l],v)))D.a.m(l,J.v(j.af(d).b))}j.v(A.d,h)
o=j.T()
D.a.m(t,new B.bu(J.v(m.b),l,o))}else{k=j.n()
throw C.e(B.cl("\u179f\u1798\u17b6\u1787\u17b7\u1780\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+C.j(k.b)+"' / Invalid member definition in class",k.c,k.d))}}j.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '}' for class body")
return new B.cR(J.v(w.b),u,t,s,r)},
T(){var w,v,u=this
u.v(A.y,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' / Expected '{'")
w=C.c([],x.I)
for(;;){if(!(u.n().a!==A.q&&u.n().a!==A.u))break
v=u.cF()
if(v!=null)D.a.m(w,v)}u.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1794\u17d2\u179b\u17bb\u1780 / Expected '}'")
return new B.cN(w)},
co(){var w=this.J()
this.q(C.c([A.j],x.B))
return new B.d3(w)},
J(){var w,v,u=this,t=u.dT()
if(u.q(C.c([A.R],x.B))){w=u.J()
if(t instanceof B.bv)return new B.cM(t.a,w)
else if(t instanceof B.cj)return new B.di(t.a,t.b,w)
else if(t instanceof B.ce)return new B.d6(t.a,t.b,w)
v=u.n()
throw C.e(B.cl("\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Invalid assignment target",v.c,v.d))}return t},
dT(){var w,v=this.cz()
for(w=x.B;this.q(C.c([A.M],w));)v=new B.b_(v,"\u17ac",this.cz())
return v},
cz(){var w,v=this.cn()
for(w=x.B;this.q(C.c([A.L],w));)v=new B.b_(v,"\u1793\u17b7\u1784",this.cn())
return v},
cn(){var w=this,v=w.ck()
for(;;){if(!(w.n().a===A.aF||w.n().a===A.aG))break
v=new B.b_(v,J.v(w.a_().b),w.ck())}return v},
ck(){var w=this,v=w.cG()
for(;;){if(!(w.n().a===A.aH||w.n().a===A.aI||w.n().a===A.aJ||w.n().a===A.aK))break
v=new B.b_(v,J.v(w.a_().b),w.cG())}return v},
cG(){var w=this,v=w.cp()
for(;;){if(!(w.n().a===A.aB||w.n().a===A.Q))break
v=new B.b_(v,J.v(w.a_().b),w.cp())}return v},
cp(){var w=this,v=w.bG()
for(;;){if(!(w.n().a===A.aC||w.n().a===A.aD||w.n().a===A.aE))break
v=new B.b_(v,J.v(w.a_().b),w.bG())}return v},
bG(){var w,v,u=this
if(u.n().a===A.N||u.n().a===A.Q){w=u.a_()
v=u.bG()
return new B.dG(J.v(w.b),v)}return u.dz()},
dz(){var w,v,u,t,s=this,r=s.bE()
for(w=x.B,v=x.I;;)if(s.q(C.c([A.h],w))){u=C.c([],v)
if(s.n().a!==A.d){D.a.m(u,s.J())
while(s.q(C.c([A.l],w)))D.a.m(u,s.J())}s.v(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
r=new B.d5(r,u)}else if(s.q(C.c([A.S],w)))r=new B.cj(r,J.v(s.ao("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17b6\u1787\u17b7\u1780 / Expected member name after '.'").b))
else if(s.q(C.c([A.U],w))){t=s.J()
s.v(A.z,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
r=new B.ce(r,t)}else break
return r},
bE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",j="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ':' / Expected ':'",i=x.B
if(l.q(C.c([A.as],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.r(i,w)
return new B.dq(C.lr(i[w].b))}if(l.q(C.c([A.at],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.r(i,w)
return new B.bS(J.v(i[w].b))}if(l.q(C.c([A.au],i)))return A.bc
if(l.q(C.c([A.av],i)))return A.bb
if(l.q(C.c([A.aw],i)))return A.bk
if(l.q(C.c([A.ax,A.ay],i)))return A.bm
if(l.q(C.c([A.k,A.p,A.o],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.r(i,w)
return new B.bv(J.v(i[w].b))}if(l.q(C.c([A.az],i))){v=l.v(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 '\u1790\u17d2\u1798\u17b8' / Expected class name after '\u1790\u17d2\u1798\u17b8'")
l.v(A.h,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.c([],x.I)
if(l.n().a!==A.d){D.a.m(u,l.J())
while(l.q(C.c([A.l],i)))D.a.m(u,l.J())}l.v(A.d,k)
return new B.dm(J.v(v.b),u)}if(l.q(C.c([A.h],i))){t=l.J()
l.v(A.d,k)
return t}if(l.q(C.c([A.U],i))){s=C.c([],x.I)
if(l.n().a!==A.z){D.a.m(s,l.J())
while(l.q(C.c([A.l],i)))D.a.m(s,l.J())}l.v(A.z,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
return new B.cL(s)}if(l.q(C.c([A.y],i))){r=C.c([],x.l)
if(l.n().a!==A.z&&l.n().a!==A.q){q=l.bE()
if(q instanceof B.bS)p=q.a
else p=q instanceof B.bv?q.a:q.j(0)
l.v(A.G,j)
w=x.J
D.a.m(r,new C.S(p,l.J(),w))
while(l.q(C.c([A.l],i))){o=l.bE()
if(o instanceof B.bS)n=o.a
else n=o instanceof B.bv?o.a:o.j(0)
l.v(A.G,j)
D.a.m(r,new C.S(n,l.J(),w))}}l.v(A.q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' / Expected '}'")
return new B.dr(r)}m=l.n()
throw C.e(B.cl("\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 / Syntax error near '"+C.j(m.b)+"'",m.c,m.d))}}
B.d2.prototype={}
B.cP.prototype={}
B.u.prototype={
ab(){return"TokenType."+this.b}}
B.ar.prototype={
j(d){var w=this
return"Token("+w.a.j(0)+", "+C.j(w.b)+", "+w.c+":"+w.d+")"}}
var z=a.updateTypes(["@(F)","~()","~(h)","f(+(I,f),+(I,f))","I(+(I,f))","f()","W<h,~(D)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<B?>"])
B.ik.prototype={
$0(){return D.c.cV(1000*this.a.now())},
$S:35}
B.hr.prototype={
$0(){var w=this.a
w.L(new B.hq(w))
w=w.e
if(w)B.n6()},
$S:0}
B.hq.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
B.hl.prototype={
$0(){var w=this.a,v=!w.r
w.r=v
B.nf(v?"dark":"light")},
$S:0}
B.hk.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
B.hj.prototype={
$0(){var w=this.a
w.f=this.b
w.d=!1},
$S:0}
B.ho.prototype={
$0(){var w=this.a
w.L(new B.hn(w))
B.n6()},
$S:0}
B.hn.prototype={
$0(){this.a.e=!0},
$S:0}
B.hp.prototype={
$0(){var w=this.a
w.L(new B.hm(w))},
$S:0}
B.hm.prototype={
$0(){this.a.e=!1},
$S:0}
B.iM.prototype={
$0(){this.a.d=!0},
$S:0}
B.iN.prototype={
$0(){var w=this.a
if(w.c!=null)w.L(new B.iL(w))},
$S:0}
B.iL.prototype={
$0(){this.a.d=!1},
$S:0}
B.iO.prototype={
$0(){this.a.e=!0},
$S:0}
B.iP.prototype={
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
B.iQ.prototype={
$0(){var w=this.a
w.e=!1
w.x=w.f=!0
w.r="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.w=0},
$S:0}
B.iR.prototype={
$1(d){C.q(d)
return this.a.dO()},
$S:2}
B.iS.prototype={
$1(d){C.q(d)
return this.a.dP()},
$S:2}
B.hS.prototype={
$1(d){C.q(d)
return this.a.c.$0()},
$S:2}
B.hT.prototype={
$1(d){C.q(d)
return this.a.d.$0()},
$S:2}
B.hU.prototype={
$1(d){C.q(d)
return this.a.d.$0()},
$S:2}
B.hV.prototype={
$1(d){C.q(d)
return this.a.d.$0()},
$S:2}
B.hW.prototype={
$1(d){return this.a.d.$0()},
$S:3}
B.hX.prototype={
$1(d){return this.a.d.$0()},
$S:3}
B.hY.prototype={
$1(d){C.q(d)
return this.a.e.$0()},
$S:2}
B.jd.prototype={
$0(){var w=this.a,v=this.b
w.d=v
v=A.nz.k(0,v)
w.e=v==null?"":v
w.f='\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1795\u17d2\u1791\u17bb\u1780\u17d4 \u1785\u17bb\u1785 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4'
w.w=!1
w.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"},
$S:0}
B.jc.prototype={
$0(){var w=this.a
w.e=w.e+this.b},
$S:0}
B.je.prototype={
$0(){this.a.r="\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a..."},
$S:0}
B.jf.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r=""+D.f.aq(v.w.a,1000)+"ms"
if(u){v=v.b
w.f=v.length===0?"(\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":v}else{v=v.d
w.f=v==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Execution Error)":v}},
$S:0}
B.jg.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.j9.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r="Syntax Check"
if(u)w.f="\u2713 \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u179b\u17d2\u17a2! (Parsed "+v.b+" tokens cleanly)"
else{v=v.d
w.f="\u2717 \u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u17d6 "+(v==null?"Invalid syntax":v)}},
$S:0}
B.ja.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.jb.prototype={
$0(){var w=this.a
w.f=""
w.r="\u1794\u17b6\u1793\u179f\u1798\u17d2\u17a2\u17b6\u178f"
w.w=!1},
$S:0}
B.ji.prototype={
$1(d){var w=d.gak()
return this.a.dU(C.j(w==null?null:w.ga7()))},
$S:3}
B.jj.prototype={
$1(d){C.q(d)
return this.a.dA()},
$S:2}
B.jk.prototype={
$1(d){C.q(d)
return this.a.dC()},
$S:2}
B.jl.prototype={
$1(d){C.q(d)
return this.a.e1()},
$S:2}
B.jm.prototype={
$1(d){this.a.e=B.q6("playground-code-textarea")},
$S:3}
B.jh.prototype={
$1(d){C.q(d)
return this.a.dR(this.b)},
$S:2}
B.jr.prototype={
$1(d){return C.Y(d).length!==0},
$S:11}
B.js.prototype={
$1(d){C.Y(d)
return D.b.D(this.a,d)||D.b.D(this.b,d)},
$S:11}
B.jt.prototype={
$2(d,e){var w=x.X
w.a(d)
return D.f.a5(w.a(e).b,d.b)},
$S:z+3}
B.ju.prototype={
$1(d){return x.X.a(d).a},
$S:z+4}
B.jq.prototype={
$0(){this.a.d=""},
$S:0}
B.jw.prototype={
$1(d){if(J.a2(d.gak(),d.gfv()))this.a.aG()},
$S:3}
B.jx.prototype={
$1(d){var w=this.a
w.L(new B.jv(w))},
$S:3}
B.jv.prototype={
$0(){var w=C.X(C.q(b.G.document).getElementById("search-modal-input")),v=w==null?null:C.Y(w.value)
if(v==null)v=""
this.a.d=v},
$S:0}
B.jy.prototype={
$1(d){var w,v,u
if(J.a2(d.gbW(),"Escape"))this.a.aG()
else if(J.a2(d.gbW(),"Enter")){w=this.a
v=w.gcq()
if(v.length!==0){u=w.a
u.toString
u.d0(D.a.gbQ(v).a)
w.aG()}}},
$S:3}
B.jz.prototype={
$1(d){C.q(d)
return this.a.aG()},
$S:2}
B.jA.prototype={
$1(d){var w
C.q(d)
w=this.a
w.a.d0(this.b.a)
w.aG()},
$S:2}
B.ir.prototype={
$1(d){C.q(d)
return this.a.e.$1(this.b.a)},
$S:2}
B.iz.prototype={
$1(d){C.q(d)
return this.a.d.$1(this.b.a)},
$S:2}
B.kW.prototype={
$1(d){C.q(d)
if((C.bE(d.metaKey)||C.bE(d.ctrlKey))&&C.Y(d.key)==="k"){d.preventDefault()
this.a.$0()}},
$S:37}
B.kF.prototype={
$0(){var w=C.X(C.q(b.G.document).getElementById("search-modal-input")),v=w==null
if(!v)w.focus()
if(!v)w.select()},
$S:9}
B.kG.prototype={
$1(d){return B.c2(d)},
$S:6}
B.kH.prototype={
$1(d){x.Y.a(d)
return'"'+C.j(d.a)+'": '+B.c2(d.b)},
$S:39}
B.kl.prototype={
$1(d){this.a.$1(J.l0(x.j.a(d),new B.km(),x.N).S(0," ")+"\n")
return null},
$S:1}
B.km.prototype={
$1(d){return B.c2(d)},
$S:6}
B.ke.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires 1 argument"))
v=w.k(d,0)
if(typeof v=="string")return v.length
if(u.b(v))return J.ao(v)
if(x.f.b(v))return v.gl(v)
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u17a2\u1780\u17d2\u179f\u179a \u1794\u1789\u17d2\u1787\u17b8 \u17ac\u179c\u178f\u17d2\u1790\u17bb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires string, array, or object"))},
$S:1}
B.kB.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))return"\u1791\u1791\u17c1"
v=w.k(d,0)
if(v==null)return"\u1791\u1791\u17c1"
if(C.fW(v))return"\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6"
if(typeof v=="number")return"\u179b\u17c1\u1781"
if(typeof v=="string")return"\u17a2\u1780\u17d2\u179f\u179a"
if(u.b(v))return"\u1794\u1789\u17d2\u1787\u17b8"
if(x.f.b(v))return"\u179c\u178f\u17d2\u1790\u17bb"
if(v instanceof B.bb)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a.a+")"
if(v instanceof B.by)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a+")"
return"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"},
$S:1}
B.k3.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return Math.abs(v)},
$S:1}
B.kv.prototype={
$1(d){var w,v,u
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
if(v<0)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u179a\u1780\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1\u1793\u17c3\u179b\u17c1\u1781\u17a2\u179c\u17b7\u1787\u17d2\u1787\u1798\u17b6\u1793\u1794\u17b6\u1793\u1791\u17c1"))
u=Math.sqrt(v)
return u===D.c.aT(u)?D.c.Y(u):u},
$S:1}
B.kk.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1782\u17c4\u179b, \u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e)"))
v=B.ah(w.k(d,0))
u=B.ah(w.k(d,1))
if(v==null||u==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
t=Math.pow(v,u)
w=D.c.aT(t)
if(t===w)return D.c.Y(t)
return t},
$S:1}
B.kr.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.d4(v)},
$S:1}
B.k7.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.cV(v)},
$S:1}
B.k5.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=B.ah(w.k(d,0))
if(v==null)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u178f\u1798\u17d2\u179b\u17c3\u1787\u17b6\u179b\u17c1\u1781"))
return D.c.eE(v)},
$S:1}
B.kg.prototype={
$1(d){var w,v,u,t,s,r="\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781",q=x.j
q.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1799\u17c9\u17b6\u1784\u178f\u17b7\u1785\u1798\u17bd\u1799"))
v=w.gl(d)===1&&q.b(w.k(d,0))?q.a(w.k(d,0)):d
q=J.z(v)
if(q.gA(v))throw C.e(B.m("\u1794\u1789\u17d2\u1787\u17b8\u1791\u1791\u17c1"))
u=B.ah(q.k(v,0))
if(u==null)u=C.em(B.m(r))
for(t=1;t<q.gl(v);++t){s=B.ah(q.k(v,t))
if(s==null)throw C.e(B.m(r))
if(s>u)u=s}return u},
$S:1}
B.kh.prototype={
$1(d){var w,v,u,t,s,r="\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781",q=x.j
q.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1799\u17c9\u17b6\u1784\u178f\u17b7\u1785\u1798\u17bd\u1799"))
v=w.gl(d)===1&&q.b(w.k(d,0))?q.a(w.k(d,0)):d
q=J.z(v)
if(q.gA(v))throw C.e(B.m("\u1794\u1789\u17d2\u1787\u17b8\u1791\u1791\u17c1"))
u=B.ah(q.k(v,0))
if(u==null)u=C.em(B.m(r))
for(t=1;t<q.gl(v);++t){s=B.ah(q.k(v,t))
if(s==null)throw C.e(B.m(r))
if(s<u)u=s}return u},
$S:1}
B.kn.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gA(d))return this.a.f7()
if(w.gl(d)===1){w=B.ah(w.k(d,0))
v=w==null?null:D.c.Y(w)
if(v==null)v=1
w=v<=0?1:v
return this.a.d_(w)}u=B.ah(w.k(d,0))
t=u==null?null:D.c.Y(u)
if(t==null)t=0
w=B.ah(w.k(d,1))
v=w==null?null:D.c.Y(w)
if(v==null)v=1
if(v<=t)return t
return t+this.a.d_(v-t+1)},
$S:1}
B.ky.prototype={
$1(d){var w,v,u
x.j.a(d)
w=J.z(d)
if(w.gA(d))return 0
v=w.k(d,0)
u=B.ah(v)
if(u==null)throw C.e(B.m("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1794\u1798\u17d2\u179b\u17c2\u1784 '"+C.j(v)+"' \u1791\u17c5\u1787\u17b6\u179b\u17c1\u1781\u1794\u17b6\u1793\u1791\u17c1"))
return u},
$S:1}
B.kz.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return B.c2(w.k(d,0))},
$S:1}
B.kx.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))return!1
v=w.k(d,0)
if(v!=null){w=J.bn(v)
w=w.N(v,!1)||w.N(v,0)||w.N(v,"")||w.N(v,"\u1798\u17b7\u1793\u1796\u17b7\u178f")}else w=!0
if(w)return!1
return!0},
$S:1}
B.ku.prototype={
$1(d){var w,v
x.j.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1796\u17bb\u17c7' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=J.v(w.k(d,0))
return C.c(v.split(w.gl(d)>1?J.v(w.k(d,1)):" "),x.s)},
$S:1}
B.kw.prototype={
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
return D.b.al(v,t,D.f.eF(s,t,v.length))}return D.b.aY(v,t)},
$S:1}
B.kp.prototype={
$1(d){var w,v,u,t
x.j.a(d)
w=J.z(d)
if(w.gl(d)<3)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1787\u17c6\u1793\u17bd\u179f' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e3 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u17a2\u178f\u17d2\u1790\u1794\u1791, \u1796\u17b6\u1780\u17d2\u1799\u1785\u17b6\u179f\u17cb, \u1796\u17b6\u1780\u17d2\u1799\u1790\u17d2\u1798\u17b8)"))
v=J.v(w.k(d,0))
u=J.v(w.k(d,1))
t=J.v(w.k(d,2))
return C.hc(v,u,t)},
$S:1}
B.kA.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return D.b.aB(J.v(w.k(d,0)))},
$S:1}
B.kC.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return J.v(w.k(d,0)).toUpperCase()},
$S:1}
B.kf.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gA(d))return""
return J.v(w.k(d,0)).toLowerCase()},
$S:1}
B.k4.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v)){J.cJ(v,u)
return v}throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 (Array) \u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u1793\u17d2\u1790\u17c2\u1798' requires array"))},
$S:1}
B.kb.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<3)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1789\u17d2\u1785\u17bc\u179b' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e3 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1791\u17b8\u178f\u17b6\u17c6\u1784, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
if(!t.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1789\u17d2\u1785\u17bc\u179b' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
t=B.ah(w.k(d,1))
u=t==null?null:D.c.Y(t)
if(u==null)u=0
if(u<0||u>J.ao(v))throw C.e(B.m("\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1780\u17d2\u179a\u17c5\u178a\u17c2\u1793\u1780\u17c6\u178e\u178f\u17cb: "+u))
J.lQ(v,u,w.k(d,2))
return v},
$S:1}
B.kj.prototype={
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
return t.aR(v,u)}return t.aS(v)},
$S:1}
B.ko.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179b\u17bb\u1794' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
if(!u.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179b\u17bb\u1794' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
return J.lR(v,w.k(d,1))},
$S:1}
B.kc.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gA(d))return""
v=w.k(d,0)
if(!t.b(v))return J.v(v)
u=w.gl(d)>1?J.v(w.k(d,1)):""
return J.l0(v,new B.kd(),x.N).S(0,u)},
$S:1}
B.kd.prototype={
$1(d){return B.c2(d)},
$S:6}
B.ks.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u1798\u17d2\u179a\u17c0\u1794' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u1789\u17d2\u1787\u17b8"))
v=w.k(d,0)
if(!t.b(v))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u1798\u17d2\u179a\u17c0\u1794' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))
u=C.lb(v,!0,x.z)
D.a.aE(u,new B.kt())
return u},
$S:1}
B.kt.prototype={
$2(d,e){if(typeof d=="number"&&typeof e=="number")return D.c.a5(d,e)
return D.b.a5(J.v(d),J.v(e))},
$S:12}
B.kq.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.z(d)
if(w.gA(d))throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=w.k(d,0)
if(u.b(v))return C.lb(J.nF(v),!0,x.z)
if(typeof v=="string")return new C.aQ(C.c(v.split(""),x.s),x.o).f1(0)
throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 \u17ac\u17a2\u1780\u17d2\u179f\u179a\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7"))},
$S:1}
B.k8.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8/\u17a2\u1780\u17d2\u179f\u179a, \u1792\u17b6\u178f\u17bb)"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v))return J.nG(v,u)
if(typeof v=="string")return D.b.aw(v,J.v(u))
return-1},
$S:1}
B.k6.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.z(d)
if(w.gl(d)<2)throw C.e(B.m("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1798\u17b6\u1793' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a"))
v=w.k(d,0)
u=w.k(d,1)
if(t.b(v))return J.lO(v,u)
if(typeof v=="string")return D.b.D(v,J.v(u))
if(x.f.b(v))return v.I(u)
return!1},
$S:1}
B.ki.prototype={
$1(d){x.j.a(d)
return Date.now()},
$S:1}
B.k9.prototype={
$1(d){var w
x.j.a(d)
w=J.z(d)
if(w.gW(d))w.aj(d,new B.ka(),x.N).S(0," ")
return""},
$S:1}
B.ka.prototype={
$1(d){return B.c2(d)},
$S:6}
B.i1.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.i2.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.i3.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.i4.prototype={
$1(d){return this.a.E(x.F.a(d),this.b)},
$S:z+0}
B.kV.prototype={
$1(d){this.a.a+=d},
$S:8};(function aliases(){var w=B.aq.prototype
w.c8=w.be})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a.installStaticTearOff
w(B,"pC","op",5)
var s
v(s=B.cK.prototype,"gea","eb",1)
v(s,"ge8","e9",1)
u(s,"gdV","dW",2)
t(B,"h0",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["h_",function(){return B.h_(null,null,null,x.z)},function(d){return B.h_(null,null,null,d)},function(d,e){return B.h_(null,d,null,e)},function(d,e,f){return B.h_(d,null,e,f)}],6,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.cZ,C.b4)
w(B.c8,B.cZ)
v(C.cV,[B.ik,B.hr,B.hq,B.hl,B.hk,B.hj,B.ho,B.hn,B.hp,B.hm,B.iM,B.iN,B.iL,B.iO,B.iP,B.iQ,B.jd,B.jc,B.je,B.jf,B.jg,B.j9,B.ja,B.jb,B.jq,B.jv,B.kF])
v(C.B,[B.iu,B.j7,B.fU,B.e4,B.iB,B.fS,B.ch,B.aq,B.a7,B.ab,B.I,B.F,B.bs,B.l,B.b1,B.by,B.bb,B.dc,B.f5,B.i0,B.ia,B.f0,B.d2,B.cP,B.ar])
v(C.k,[B.y,B.b0,B.b5])
v(B.y,[B.fX,B.h1,B.h3,B.h2,B.a8,B.bo,B.h5,B.h6,B.a9,B.w,B.bq,B.a5,B.N,B.ha,B.fY,B.el,B.h4,B.h7,B.hb,B.hd,B.aY,B.ek,B.bp,B.h9,B.cF,B.cH,B.cG,B.at,B.o,B.b,B.R,B.d,B.ad,B.a_,B.eF,B.eI,B.f9,B.fh,B.eq,B.ez,B.eG,B.eH,B.f4])
v(C.fz,[B.i_,B.eC,B.hv,B.hi,B.iA,B.hM,B.u])
w(B.fH,C.c_)
w(B.fB,C.bR)
w(B.eP,B.ch)
w(B.dI,B.eP)
v(C.c7,[B.fb,B.fc])
v(B.b5,[B.b8,B.Z,B.cm,B.cq])
v(B.aq,[B.cK,B.fs,B.fI,B.fM])
v(C.b9,[B.iR,B.iS,B.hS,B.hT,B.hU,B.hV,B.hW,B.hX,B.hY,B.ji,B.jj,B.jk,B.jl,B.jm,B.jh,B.jr,B.js,B.ju,B.jw,B.jx,B.jy,B.jz,B.jA,B.ir,B.iz,B.kW,B.kG,B.kH,B.kl,B.km,B.ke,B.kB,B.k3,B.kv,B.kk,B.kr,B.k7,B.k5,B.kg,B.kh,B.kn,B.ky,B.kz,B.kx,B.ku,B.kw,B.kp,B.kA,B.kC,B.kf,B.k4,B.kb,B.kj,B.ko,B.kc,B.kd,B.ks,B.kq,B.k8,B.k6,B.ki,B.k9,B.ka,B.i1,B.i2,B.i3,B.i4,B.kV])
v(C.cW,[B.jt,B.kt])
v(B.F,[B.dq,B.bS,B.c5,B.dp,B.cL,B.dr,B.bv,B.dF,B.dG,B.b_,B.cM,B.cj,B.di,B.ce,B.d6,B.d5,B.dm,B.dJ,B.dt,B.cN,B.cd,B.dM,B.d4,B.bu,B.cb,B.cs,B.cR,B.dv,B.d3])
v(B.dc,[B.ib,B.ii,B.dw])})()
C.mE(b.typeUniverse,JSON.parse('{"cZ":{"b4":["1"],"cr":["1"],"t":["1"],"i":["1"]},"c8":{"cZ":["1"],"b4":["1"],"cr":["1"],"t":["1"],"i":["1"]},"fX":{"y":[],"k":[]},"h1":{"y":[],"k":[]},"h3":{"y":[],"k":[]},"h2":{"y":[],"k":[]},"a8":{"y":[],"k":[]},"bo":{"y":[],"k":[]},"h5":{"y":[],"k":[]},"h6":{"y":[],"k":[]},"a9":{"y":[],"k":[]},"w":{"y":[],"k":[]},"bq":{"y":[],"k":[]},"a5":{"y":[],"k":[]},"N":{"y":[],"k":[]},"ha":{"y":[],"k":[]},"fY":{"y":[],"k":[]},"el":{"y":[],"k":[]},"h4":{"y":[],"k":[]},"h7":{"y":[],"k":[]},"hb":{"y":[],"k":[]},"hd":{"y":[],"k":[]},"aY":{"y":[],"k":[]},"ek":{"y":[],"k":[]},"bp":{"y":[],"k":[]},"h9":{"y":[],"k":[]},"cF":{"y":[],"k":[]},"cH":{"y":[],"k":[]},"cG":{"y":[],"k":[]},"at":{"y":[],"k":[]},"o":{"y":[],"k":[]},"b":{"y":[],"k":[]},"R":{"y":[],"k":[]},"d":{"y":[],"k":[]},"ad":{"y":[],"k":[]},"a_":{"y":[],"k":[]},"fU":{"nN":[]},"e4":{"lh":[]},"fS":{"oy":[]},"fH":{"iE":[]},"b5":{"k":[]},"b0":{"k":[]},"fB":{"aE":[],"p":[],"al":[]},"eP":{"ch":[]},"dI":{"ch":[]},"fb":{"p":[],"al":[]},"y":{"k":[]},"fc":{"p":[],"al":[]},"b8":{"b5":[],"k":[]},"cK":{"aq":["b8"],"aq.T":"b8"},"Z":{"b5":[],"k":[]},"fs":{"aq":["Z"],"aq.T":"Z"},"eF":{"y":[],"k":[]},"eI":{"y":[],"k":[]},"cm":{"b5":[],"k":[]},"fI":{"aq":["cm"],"aq.T":"cm"},"cq":{"b5":[],"k":[]},"fM":{"aq":["cq"],"aq.T":"cq"},"f9":{"y":[],"k":[]},"fh":{"y":[],"k":[]},"eq":{"y":[],"k":[]},"ez":{"y":[],"k":[]},"eG":{"y":[],"k":[]},"eH":{"y":[],"k":[]},"f4":{"y":[],"k":[]},"bu":{"F":[]},"cb":{"F":[]},"cs":{"F":[]},"dq":{"F":[]},"bS":{"F":[]},"c5":{"F":[]},"dp":{"F":[]},"cL":{"F":[]},"dr":{"F":[]},"bv":{"F":[]},"dF":{"F":[]},"dG":{"F":[]},"b_":{"F":[]},"cM":{"F":[]},"cj":{"F":[]},"di":{"F":[]},"ce":{"F":[]},"d6":{"F":[]},"d5":{"F":[]},"dm":{"F":[]},"dJ":{"F":[]},"dt":{"F":[]},"cN":{"F":[]},"cd":{"F":[]},"dM":{"F":[]},"d4":{"F":[]},"cR":{"F":[]},"dv":{"F":[]},"d3":{"F":[]}}'))
var y={n:'# \u17e1. \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',b:"https://github.com/sengson-great/KhmerLang",c:"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a / Expected parameter name",m:"\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1794\u1789\u17d2\u1787\u17b8\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / Array index must be a number"}
var x=(function rtii(){var w=C.b6
return{F:w("F"),R:w("l"),w:w("P<h,h>"),O:w("c8<h>"),h:w("p"),A:w("bs"),c:w("b0"),Z:w("bt"),I:w("C<F>"),i:w("C<k>"),_:w("C<bu>"),x:w("C<cb>"),l:w("C<S<h,F>>"),V:w("C<+(I,f)>"),k:w("C<cs>"),s:w("C<h>"),S:w("C<ar>"),B:w("C<u>"),W:w("C<a7>"),m:w("D"),n:w("b1"),t:w("x<F>"),a:w("x<h>"),b:w("x<u>"),P:w("x<a7>"),j:w("x<@>"),J:w("S<h,F>"),Y:w("S<@,@>"),f:w("W<@,@>"),d:w("ag<+(I,f),I>"),X:w("+(I,f)"),T:w("lf"),o:w("aQ<h>"),g:w("I(+(I,f))"),D:w("b5"),q:w("y"),N:w("h"),e:w("u"),U:w("dK<h>"),Q:w("aW(h)"),z:w("@"),H:w("~"),M:w("~()"),v:w("~(D)")}})();(function constants(){var w=a.makeConstList
A.bb=new B.c5(!1)
A.bc=new B.c5(!0)
A.bd=new B.hv(4,"solid")
A.bk=new B.dp()
A.Hd=new B.iB()
A.bm=new B.dF()
A.bn=new B.dI(C.b6("dI<h>"))
A.bo=new B.j7()
A.bP=new C.ba(2e6)
A.aa=new B.hM(1,"bold")
A.bQ=new B.eF(null)
A.oJ=new C.a("\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions) ",null)
A.uv=new C.a("#",null)
A.e=w([A.uv],x.i)
A.wO=new B.R("#functions",null,"heading-anchor",null,null,null,A.e,null)
A.fF=w([A.oJ,A.wO],x.i)
A.Ae=new B.a8(A.fF,null)
A.qf=new C.a("\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.t3=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.hM=w([A.t3],x.i)
A.I=new B.d(null,A.hM,null)
A.rn=new C.a(" \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1798\u1780\u179c\u17b7\u1789\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.rl=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb",null)
A.kN=w([A.rl],x.i)
A.b2=new B.d(null,A.kN,null)
A.tE=new C.a(" (return)\u17d6",null)
A.f8=w([A.qf,A.I,A.rn,A.b2,A.tE],x.i)
A.AX=new B.N(null,null,A.f8,null)
A.bB=new B.Z("functions.khmer","KHMER",'# \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17bb\u1780\u17c4\u178e\u1780\u17c2\u1784\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u1794\u178e\u17d2\u178f\u17c4\u1799, \u1791\u1791\u17b9\u1784) {\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1794\u178e\u17d2\u178f\u17c4\u1799 * \u1791\u1791\u17b9\u1784\n}\n\n\u178f\u17b6\u17c6\u1784 \u1795\u17d2\u1791\u17c3 = \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u17e1\u17e0, \u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u179f\u179a\u17bb\u1794\u1782\u17ba:", \u1795\u17d2\u1791\u17c3, "\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1780\u17b6\u179a\u17c9\u17c1")',null,null)
A.d3=w([A.Ae,A.AX,A.bB],x.i)
A.Bn=new B.a9("functions",A.d3,null)
A.pi=new C.a("Recursion (\u1780\u17bc\u178a Fibonacci) ",null)
A.x2=new B.R("#recursion",null,"heading-anchor",null,null,null,A.e,null)
A.mc=w([A.pi,A.x2],x.i)
A.Ag=new B.a8(A.mc,null)
A.qz=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 (Recursive Functions) \u1799\u17c9\u17b6\u1784\u179a\u179b\u17bc\u1793\u17d6",null)
A.iW=w([A.qz],x.i)
A.Be=new B.N(null,null,A.iW,null)
A.bC=new B.Z("fibonacci.khmer","KHMER",'# \u1780\u17bc\u178a\u179a\u1780\u179b\u17c1\u1781 Fibonacci \u178f\u17b6\u1798\u1794\u17c2\u1794 Recursive\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}',null,null)
A.jY=w([A.Ag,A.Be,A.bC],x.i)
A.Bt=new B.a9("recursion",A.jY,null)
A.ub=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (Object-Oriented Programming) ",null)
A.x8=new B.R("#classes",null,"heading-anchor",null,null,null,A.e,null)
A.l9=w([A.ub,A.x8],x.i)
A.Ad=new B.a8(A.l9,null)
A.uM=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u178f\u17b6\u1798\u1794\u17c2\u1794 OOP \u1796\u17c1\u1789\u179b\u17c1\u1789\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u1782\u17c6\u179a\u17bc\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.uU=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.cA=w([A.uU],x.i)
A.a4=new B.d(null,A.cA,null)
A.tK=new C.a(" (Class) \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Constructor \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.ta=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(...)",null)
A.jd=w([A.ta],x.i)
A.ye=new B.d(null,A.jd,null)
A.q7=new C.a("\u17d4 \u1785\u17c6\u178e\u17c2\u1780\u17af\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb (Methods) \u1782\u17ba\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.ql=new C.a(" \u178a\u17bc\u1785\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1791\u17bc\u1791\u17c5\u178a\u17c2\u179a\u17d4",null)
A.n9=w([A.uM,A.a4,A.tK,A.ye,A.q7,A.I,A.ql],x.i)
A.AZ=new B.N(null,null,A.n9,null)
A.pX=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.ry=new C.a("\u1790\u17d2\u1798\u17b8",null)
A.cY=w([A.ry],x.i)
A.aX=new B.d(null,A.cY,null)
A.v_=new C.a(" (New)\u17d6",null)
A.ic=w([A.pX,A.aX,A.v_],x.i)
A.AW=new B.N(null,null,A.ic,null)
A.bD=new B.Z("person_class.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1798\u1793\u17bb\u179f\u17d2\u179f {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7, \u17a2\u17b6\u1799\u17bb) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n        \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb = \u17a2\u17b6\u1799\u17bb\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1787\u1798\u17d2\u179a\u17b6\u1794\u179f\u17bd\u179a! \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7", \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u17a2\u17b6\u1799\u17bb", \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb, "\u1786\u17d2\u1793\u17b6\u17c6")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1 = \u1790\u17d2\u1798\u17b8 \u1798\u1793\u17bb\u179f\u17d2\u179f("\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784", \u17e2\u17e1)\n\u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1.\u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793()',null,null)
A.ch=w([A.Ad,A.AZ,A.AW,A.bD],x.i)
A.BB=new B.a9("classes",A.ch,null)
A.p_=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (OOP Inheritance: `\u1794\u1793\u17d2\u178f\u1796\u17b8`) ",null)
A.x3=new B.R("#inheritance",null,"heading-anchor",null,null,null,A.e,null)
A.ne=w([A.p_,A.x3],x.i)
A.Ac=new B.a8(A.ne,null)
A.vP=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Superclass) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17a1\u17be\u1784\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.tv=new C.a("\u1794\u1793\u17d2\u178f\u1796\u17b8",null)
A.ih=w([A.tv],x.i)
A.b1=new B.d(null,A.ih,null)
A.vi=new C.a(" (extends)\u17d4 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 (Subclass) \u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1799\u1780\u179b\u1780\u17d2\u1781\u178e\u17c8\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7 \u1793\u17b7\u1784\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u17d6",null)
A.jX=w([A.vP,A.b1,A.vi],x.i)
A.AQ=new B.N(null,null,A.jX,null)
A.bF=new B.Z("inheritance.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n# \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8 \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()',null,null)
A.cz=w([A.Ac,A.AQ,A.bF],x.i)
A.By=new B.a9("inheritance",A.cz,null)
A.ri=new C.a("Getter \u1793\u17b7\u1784 Setter (`\u1799\u1780` & `\u178a\u17b6\u1780\u17cb` / `\u1780\u17c6\u178e\u178f\u17cb`) ",null)
A.wX=new B.R("#getters-setters",null,"heading-anchor",null,null,null,A.e,null)
A.jg=w([A.ri,A.wX],x.i)
A.Ab=new B.a8(A.jg,null)
A.qY=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f ",null)
A.q9=new C.a("Getter",null)
A.hR=w([A.q9],x.i)
A.BZ=new B.a_(A.hR,null)
A.ao=new C.a(" \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.tQ=new C.a("\u1799\u1780",null)
A.nl=w([A.tQ],x.i)
A.aT=new B.d(null,A.nl,null)
A.ap=new C.a(" (\u17ac ",null)
A.u4=new C.a("get",null)
A.hY=w([A.u4],x.i)
A.aU=new B.d(null,A.hY,null)
A.rj=new C.a(") \u1793\u17b7\u1784 ",null)
A.rm=new C.a("Setter",null)
A.hS=w([A.rm],x.i)
A.C3=new B.a_(A.hS,null)
A.rL=new C.a("\u178a\u17b6\u1780\u17cb",null)
A.fH=w([A.rL],x.i)
A.aY=new B.d(null,A.fH,null)
A.aq=new C.a(" \u17ac ",null)
A.vD=new C.a("\u1780\u17c6\u178e\u178f\u17cb",null)
A.kk=w([A.vD],x.i)
A.b3=new B.d(null,A.kk,null)
A.vg=new C.a("set",null)
A.i2=w([A.vg],x.i)
A.b5=new B.d(null,A.i2,null)
A.qu=new C.a(") \u178a\u17be\u1798\u17d2\u1794\u17b8\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1796\u17b6\u179a\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 (Encapsulation / Computed Properties) \u1780\u17d2\u1793\u17bb\u1784 Object\u17d6",null)
A.ns=w([A.qY,A.BZ,A.ao,A.aT,A.ap,A.aU,A.rj,A.C3,A.ao,A.aY,A.aq,A.b3,A.ap,A.b5,A.qu],x.i)
A.Bc=new B.N(null,null,A.ns,null)
A.by=new B.Z("getter_setter.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179a\u1784\u17d2\u179c\u1784\u17cb {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1780\u17b6\u17c6) {\n        \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 = \u1780\u17b6\u17c6\n    }\n\n    # Getter: \u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u178a\u17bc\u1785 Property\n    \u1799\u1780 \u1780\u17b6\u17c6 {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1793\u17c1\u17c7._\u1780\u17b6\u17c6\n    }\n\n    # Setter: \u17a0\u17c5\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u178f\u17b6\u1798\u179a\u1799\u17c8 Assignment\n    \u178a\u17b6\u1780\u17cb \u1780\u17b6\u17c6(\u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8) {\n        \u1794\u17be (\u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8 > \u17e0) {\n            \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 = \u178f\u1798\u17d2\u179b\u17c3\u1790\u17d2\u1798\u17b8\n        } \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n            \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17c6\u17a0\u17bb\u179f: \u1780\u17b6\u17c6\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1792\u17c6\u1787\u17b6\u1784 \u17e0!")\n        }\n    }\n\n    # Computed Property Getter\n    \u1799\u1780 \u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6 {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e3.\u17e1\u17e4 * \u1793\u17c1\u17c7._\u1780\u17b6\u17c6 * \u1793\u17c1\u17c7._\u1780\u17b6\u17c6\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 c = \u1790\u17d2\u1798\u17b8 \u179a\u1784\u17d2\u179c\u1784\u17cb(\u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u17c6\u178a\u17be\u1798:", c.\u1780\u17b6\u17c6)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6:", c.\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6)\n\nc.\u1780\u17b6\u17c6 = \u17e1\u17e0\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u17c6\u1790\u17d2\u1798\u17b8:", c.\u1780\u17b6\u17c6)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1790\u17d2\u1798\u17b8:", c.\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6)',null,null)
A.fe=w([A.Ab,A.Bc,A.by],x.i)
A.Bx=new B.a9("getters-setters",A.fe,null)
A.lQ=w([A.Bn,A.Bt,A.BB,A.By,A.Bx],x.i)
A.bR=new B.b0(A.lQ,null)
A.pI=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Built-in Functions) ",null)
A.xa=new B.R("#builtins",null,"heading-anchor",null,null,null,A.e,null)
A.n5=w([A.pI,A.xa],x.i)
A.Ak=new B.a8(A.n5,null)
A.uJ=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a\u178a\u17c2\u179b\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1798\u1780\u179f\u17d2\u179a\u17b6\u1794\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1797\u17b6\u179f\u17b6\u17d6",null)
A.iB=w([A.uJ],x.i)
A.B9=new B.N(null,null,A.iB,null)
A.qn=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Builtin)",null)
A.mf=w([A.qn],x.i)
A.G1=new B.at(A.mf,null)
A.rZ=new C.a("\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Alias)",null)
A.h8=w([A.rZ],x.i)
A.G0=new B.at(A.h8,null)
A.vz=new C.a("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Usage)",null)
A.eR=w([A.vz],x.i)
A.FX=new B.at(A.eR,null)
A.vJ=new C.a("\u1780\u17b6\u179a\u1796\u1793\u17d2\u1799\u179b\u17cb (Explanation)",null)
A.d8=w([A.vJ],x.i)
A.FZ=new B.at(A.d8,null)
A.k9=w([A.G1,A.G0,A.FX,A.FZ],x.i)
A.Gs=new B.o(A.k9,null)
A.fY=w([A.Gs],x.i)
A.G7=new B.cH(A.fY,null)
A.rQ=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",null)
A.kY=w([A.rQ],x.i)
A.aR=new B.d(null,A.kY,null)
A.jk=w([A.aR],x.i)
A.Ck=new B.b(A.jk,null)
A.pM=new C.a("print(...)",null)
A.mH=w([A.pM],x.i)
A.xo=new B.d(null,A.mH,null)
A.cU=w([A.xo],x.i)
A.DL=new B.b(A.cU,null)
A.u_=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u1798\u17d2\u179b\u17c3:", x)',null)
A.eP=w([A.u_],x.i)
A.xI=new B.d(null,A.eP,null)
A.dy=w([A.xI],x.i)
A.Ez=new B.b(A.dy,null)
A.vs=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u178f\u1798\u17d2\u179b\u17c3\u17a2\u1790\u17c1\u179a\u1793\u17c5\u179b\u17be\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 (Standard Output)",null)
A.iM=w([A.vs],x.i)
A.Fn=new B.b(A.iM,null)
A.cQ=w([A.Ck,A.DL,A.Ez,A.Fn],x.i)
A.H4=new B.o(A.cQ,null)
A.q1=new C.a("\u1794\u17d2\u179a\u179c\u17c2\u1784(...)",null)
A.mB=w([A.q1],x.i)
A.yy=new B.d(null,A.mB,null)
A.ng=w([A.yy],x.i)
A.D5=new B.b(A.ng,null)
A.pU=new C.a("len(...)",null)
A.hC=w([A.pU],x.i)
A.zQ=new B.d(null,A.hC,null)
A.fr=w([A.zQ],x.i)
A.EN=new B.b(A.fr,null)
A.ou=new C.a('\u1794\u17d2\u179a\u179c\u17c2\u1784("\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6")',null)
A.ep=w([A.ou],x.i)
A.y0=new B.d(null,A.ep,null)
A.ll=w([A.y0],x.i)
A.CU=new B.b(A.ll,null)
A.v1=new C.a("\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u179c\u17c2\u1784\u178f\u17bd\u17a2\u1780\u17d2\u179f\u179a \u17ac\u1785\u17c6\u1793\u17bd\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784 Array/Map",null)
A.ck=w([A.v1],x.i)
A.Dr=new B.b(A.ck,null)
A.ec=w([A.D5,A.EN,A.CU,A.Dr],x.i)
A.H_=new B.o(A.ec,null)
A.pt=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(...)",null)
A.j1=w([A.pt],x.i)
A.xh=new B.d(null,A.j1,null)
A.iA=w([A.xh],x.i)
A.DX=new B.b(A.iA,null)
A.u7=new C.a("type(...)",null)
A.ez=w([A.u7],x.i)
A.zH=new B.d(null,A.ez,null)
A.kG=w([A.zH],x.i)
A.Fd=new B.b(A.kG,null)
A.rJ=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(\u17e1\u17e2\u17e3)",null)
A.mh=w([A.rJ],x.i)
A.yM=new B.d(null,A.mh,null)
A.c8=w([A.yM],x.i)
A.CR=new B.b(A.c8,null)
A.v3=new C.a("\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (\u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a, \u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6, \u1794\u1789\u17d2\u1787\u17b8, \u179c\u178f\u17d2\u1790\u17bb, \u1790\u17d2\u1793\u17b6\u1780\u17cb, etc.)",null)
A.cr=w([A.v3],x.i)
A.Fu=new B.b(A.cr,null)
A.eJ=w([A.DX,A.Fd,A.CR,A.Fu],x.i)
A.Gk=new B.o(A.eJ,null)
A.oX=new C.a("\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f(...)",null)
A.h4=w([A.oX],x.i)
A.xZ=new B.d(null,A.h4,null)
A.iJ=w([A.xZ],x.i)
A.ES=new B.b(A.iJ,null)
A.vH=new C.a("abs(...)",null)
A.f9=w([A.vH],x.i)
A.zD=new B.d(null,A.f9,null)
A.er=w([A.zD],x.i)
A.Et=new B.b(A.er,null)
A.qU=new C.a("\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f(-\u17e1\u17e0)",null)
A.iG=w([A.qU],x.i)
A.zB=new B.d(null,A.iG,null)
A.cE=w([A.zB],x.i)
A.DF=new B.b(A.cE,null)
A.oG=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f\u1793\u17c3\u179b\u17c1\u1781 (Absolute value)",null)
A.d2=w([A.oG],x.i)
A.E8=new B.b(A.d2,null)
A.eE=w([A.ES,A.Et,A.DF,A.E8],x.i)
A.Gf=new B.o(A.eE,null)
A.oQ=new C.a("\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1(...)",null)
A.j6=w([A.oQ],x.i)
A.zz=new B.d(null,A.j6,null)
A.ft=w([A.zz],x.i)
A.Fe=new B.b(A.ft,null)
A.rz=new C.a("sqrt(...)",null)
A.el=w([A.rz],x.i)
A.zJ=new B.d(null,A.el,null)
A.eW=w([A.zJ],x.i)
A.D3=new B.b(A.eW,null)
A.p5=new C.a("\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1(\u17e2\u17e5)",null)
A.cy=w([A.p5],x.i)
A.yY=new B.d(null,A.cy,null)
A.jB=w([A.yY],x.i)
A.Cs=new B.b(A.jB,null)
A.pH=new C.a("\u179a\u1780\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1\u1793\u17c3\u179b\u17c1\u1781 (Square root)",null)
A.kj=w([A.pH],x.i)
A.DG=new B.b(A.kj,null)
A.eA=w([A.Fe,A.D3,A.Cs,A.DG],x.i)
A.Gr=new B.o(A.eA,null)
A.vw=new C.a("\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e(...)",null)
A.jw=w([A.vw],x.i)
A.xs=new B.d(null,A.jw,null)
A.jC=w([A.xs],x.i)
A.FB=new B.b(A.jC,null)
A.tH=new C.a("pow(...)",null)
A.jt=w([A.tH],x.i)
A.xT=new B.d(null,A.jt,null)
A.fp=w([A.xT],x.i)
A.ET=new B.b(A.fp,null)
A.pG=new C.a("\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e(\u17e2, \u17e3)",null)
A.dr=w([A.pG],x.i)
A.y1=new B.d(null,A.dr,null)
A.l8=w([A.y1],x.i)
A.FA=new B.b(A.l8,null)
A.uf=new C.a("\u1782\u178e\u1793\u17b6\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e (\u17e2^\u17e3 = \u17e8)",null)
A.hI=w([A.uf],x.i)
A.Db=new B.b(A.hI,null)
A.kf=w([A.FB,A.ET,A.FA,A.Db],x.i)
A.Gp=new B.o(A.kf,null)
A.r6=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb(...)",null)
A.dZ=w([A.r6],x.i)
A.zE=new B.d(null,A.dZ,null)
A.nq=w([A.zE],x.i)
A.CO=new B.b(A.nq,null)
A.ps=new C.a("round(...)",null)
A.h3=w([A.ps],x.i)
A.yS=new B.d(null,A.h3,null)
A.iZ=w([A.yS],x.i)
A.Fg=new B.b(A.iZ,null)
A.r7=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb(\u17e4.\u17e7)",null)
A.e_=w([A.r7],x.i)
A.zF=new B.d(null,A.e_,null)
A.nr=w([A.zF],x.i)
A.CP=new B.b(A.nr,null)
A.r1=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u179a\u1780\u1785\u17c6\u1793\u17bd\u1793\u1782\u178f\u17cb\u1787\u17b7\u178f\u1794\u17c6\u1795\u17bb\u178f (Round to nearest integer)",null)
A.fi=w([A.r1],x.i)
A.Dc=new B.b(A.fi,null)
A.n_=w([A.CO,A.Fg,A.CP,A.Dc],x.i)
A.GH=new B.o(A.n_,null)
A.tV=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7(...)",null)
A.iR=w([A.tV],x.i)
A.xp=new B.d(null,A.iR,null)
A.hu=w([A.xp],x.i)
A.Dp=new B.b(A.hu,null)
A.qR=new C.a("floor(...)",null)
A.dY=w([A.qR],x.i)
A.zN=new B.d(null,A.dY,null)
A.m4=w([A.zN],x.i)
A.F3=new B.b(A.m4,null)
A.tW=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7(\u17e4.\u17e9)",null)
A.iS=w([A.tW],x.i)
A.xq=new B.d(null,A.iS,null)
A.hv=w([A.xq],x.i)
A.Dq=new B.b(A.hv,null)
A.pg=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u1791\u1798\u17d2\u179b\u17b6\u1780\u17cb\u1785\u17bb\u17c7\u1780\u17d2\u179a\u17c4\u1798 (Floor)",null)
A.n8=w([A.pg],x.i)
A.EH=new B.b(A.n8,null)
A.iz=w([A.Dp,A.F3,A.Dq,A.EH],x.i)
A.Ga=new B.o(A.iz,null)
A.tg=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784(...)",null)
A.dK=w([A.tg],x.i)
A.zb=new B.d(null,A.dK,null)
A.e9=w([A.zb],x.i)
A.Co=new B.b(A.e9,null)
A.rC=new C.a("ceil(...)",null)
A.ha=w([A.rC],x.i)
A.ym=new B.d(null,A.ha,null)
A.d6=w([A.ym],x.i)
A.Fz=new B.b(A.d6,null)
A.th=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784(\u17e4.\u17e1)",null)
A.dL=w([A.th],x.i)
A.zc=new B.d(null,A.dL,null)
A.ea=w([A.zc],x.i)
A.Cp=new B.b(A.ea,null)
A.pw=new C.a("\u1794\u1784\u17d2\u1782\u178f\u17cb\u179a\u17bb\u1789\u17a1\u17be\u1784\u179b\u17be (Ceiling)",null)
A.kP=w([A.pw],x.i)
A.Dd=new B.b(A.kP,null)
A.jq=w([A.Co,A.Fz,A.Cp,A.Dd],x.i)
A.Gy=new B.o(A.jq,null)
A.qq=new C.a("\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6(...)",null)
A.nd=w([A.qq],x.i)
A.yp=new B.d(null,A.nd,null)
A.cH=w([A.yp],x.i)
A.Fa=new B.b(A.cH,null)
A.qM=new C.a("max(...)",null)
A.lV=w([A.qM],x.i)
A.xO=new B.d(null,A.lV,null)
A.f6=w([A.xO],x.i)
A.E7=new B.b(A.f6,null)
A.pn=new C.a("\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6(\u17e1\u17e0, \u17e2\u17e0, \u17e5)",null)
A.iU=w([A.pn],x.i)
A.zp=new B.d(null,A.iU,null)
A.mu=w([A.zp],x.i)
A.Ed=new B.b(A.mu,null)
A.tm=new C.a("\u179a\u1780\u178f\u1798\u17d2\u179b\u17c3\u1792\u17c6\u1794\u17c6\u1795\u17bb\u178f \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1787\u17b6\u1798\u17bd\u1799\u17a2\u17b6\u1782\u17bb\u1799\u1798\u17c9\u1784\u17cb \u17ac\u1794\u1789\u17d2\u1787\u17b8",null)
A.eL=w([A.tm],x.i)
A.FM=new B.b(A.eL,null)
A.dP=w([A.Fa,A.E7,A.Ed,A.FM],x.i)
A.GJ=new B.o(A.dP,null)
A.v8=new C.a("\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6(...)",null)
A.iC=w([A.v8],x.i)
A.y5=new B.d(null,A.iC,null)
A.eY=w([A.y5],x.i)
A.Cy=new B.b(A.eY,null)
A.oD=new C.a("min(...)",null)
A.n6=w([A.oD],x.i)
A.yz=new B.d(null,A.n6,null)
A.dF=w([A.yz],x.i)
A.DT=new B.b(A.dF,null)
A.pr=new C.a("\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6(\u17e1\u17e0, \u17e2\u17e0, \u17e5)",null)
A.dG=w([A.pr],x.i)
A.xv=new B.d(null,A.dG,null)
A.ht=w([A.xv],x.i)
A.F8=new B.b(A.ht,null)
A.uF=new C.a("\u179a\u1780\u178f\u1798\u17d2\u179b\u17c3\u178f\u17bc\u1785\u1794\u17c6\u1795\u17bb\u178f \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1787\u17b6\u1798\u17bd\u1799\u17a2\u17b6\u1782\u17bb\u1799\u1798\u17c9\u1784\u17cb \u17ac\u1794\u1789\u17d2\u1787\u17b8",null)
A.fB=w([A.uF],x.i)
A.Dl=new B.b(A.fB,null)
A.ix=w([A.Cy,A.DT,A.F8,A.Dl],x.i)
A.GD=new B.o(A.ix,null)
A.tN=new C.a("\u1785\u17c3\u178a\u1793\u17d2\u1799(...)",null)
A.mr=w([A.tN],x.i)
A.xM=new B.d(null,A.mr,null)
A.et=w([A.xM],x.i)
A.Ex=new B.b(A.et,null)
A.uZ=new C.a("random(...)",null)
A.e5=w([A.uZ],x.i)
A.yR=new B.d(null,A.e5,null)
A.fs=w([A.yR],x.i)
A.Ev=new B.b(A.fs,null)
A.rK=new C.a("\u1785\u17c3\u178a\u1793\u17d2\u1799(\u17e1, \u17e1\u17e0)",null)
A.dh=w([A.rK],x.i)
A.yE=new B.d(null,A.dh,null)
A.d1=w([A.yE],x.i)
A.F_=new B.b(A.d1,null)
A.r9=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u179b\u17c1\u1781\u1785\u17c3\u178a\u1793\u17d2\u1799 (Random number between min and max)",null)
A.kW=w([A.r9],x.i)
A.FS=new B.b(A.kW,null)
A.lp=w([A.Ex,A.Ev,A.F_,A.FS],x.i)
A.GV=new B.o(A.lp,null)
A.rs=new C.a("\u1787\u17b6\u179b\u17c1\u1781(...)",null)
A.kg=w([A.rs],x.i)
A.zk=new B.d(null,A.kg,null)
A.eT=w([A.zk],x.i)
A.Df=new B.b(A.eT,null)
A.qP=new C.a("toNum / toInt",null)
A.lg=w([A.qP],x.i)
A.xl=new B.d(null,A.lg,null)
A.c9=w([A.xl],x.i)
A.Eb=new B.b(A.c9,null)
A.uz=new C.a('\u1787\u17b6\u179b\u17c1\u1781("\u17e1\u17e2\u17e3")',null)
A.jW=w([A.uz],x.i)
A.zs=new B.d(null,A.jW,null)
A.fU=w([A.zs],x.i)
A.D9=new B.b(A.fU,null)
A.qi=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u1791\u17c5\u1787\u17b6\u179b\u17c1\u1781 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1793\u17b7\u1784\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb",null)
A.mA=w([A.qi],x.i)
A.E3=new B.b(A.mA,null)
A.dR=w([A.Df,A.Eb,A.D9,A.E3],x.i)
A.H5=new B.o(A.dR,null)
A.qv=new C.a("\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a(...)",null)
A.eN=w([A.qv],x.i)
A.zv=new B.d(null,A.eN,null)
A.dX=w([A.zv],x.i)
A.CN=new B.b(A.dX,null)
A.v0=new C.a("toStr(...)",null)
A.mt=w([A.v0],x.i)
A.zM=new B.d(null,A.mt,null)
A.hz=w([A.zM],x.i)
A.FO=new B.b(A.hz,null)
A.rP=new C.a("\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a(\u17e7\u17e8\u17e9)",null)
A.kw=w([A.rP],x.i)
A.xE=new B.d(null,A.kw,null)
A.dj=w([A.xE],x.i)
A.Cx=new B.b(A.dj,null)
A.t8=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u178f\u1798\u17d2\u179b\u17c3\u1791\u17c5\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 String",null)
A.kX=w([A.t8],x.i)
A.Dx=new B.b(A.kX,null)
A.cp=w([A.CN,A.FO,A.Cx,A.Dx],x.i)
A.GF=new B.o(A.cp,null)
A.p0=new C.a("\u1787\u17b6\u178f\u1780\u17d2\u1780(...)",null)
A.iY=w([A.p0],x.i)
A.yD=new B.d(null,A.iY,null)
A.fv=w([A.yD],x.i)
A.DZ=new B.b(A.fv,null)
A.qc=new C.a("toBool(...)",null)
A.hA=w([A.qc],x.i)
A.yr=new B.d(null,A.hA,null)
A.ek=w([A.yr],x.i)
A.FQ=new B.b(A.ek,null)
A.qd=new C.a("\u1787\u17b6\u178f\u1780\u17d2\u1780(\u17e1)",null)
A.dn=w([A.qd],x.i)
A.zK=new B.d(null,A.dn,null)
A.jK=w([A.zK],x.i)
A.FV=new B.b(A.jK,null)
A.tw=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u178f\u1798\u17d2\u179b\u17c3\u1791\u17c5\u1787\u17b6\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6 Boolean (\u1796\u17b7\u178f / \u1798\u17b7\u1793\u1796\u17b7\u178f)",null)
A.cJ=w([A.tw],x.i)
A.CC=new B.b(A.cJ,null)
A.j_=w([A.DZ,A.FQ,A.FV,A.CC],x.i)
A.GG=new B.o(A.j_,null)
A.qs=new C.a("\u1796\u17bb\u17c7(...)",null)
A.h9=w([A.qs],x.i)
A.xG=new B.d(null,A.h9,null)
A.kv=w([A.xG],x.i)
A.EP=new B.b(A.kv,null)
A.ph=new C.a("split(...)",null)
A.ci=w([A.ph],x.i)
A.yi=new B.d(null,A.ci,null)
A.fL=w([A.yi],x.i)
A.F5=new B.b(A.fL,null)
A.t7=new C.a('\u1796\u17bb\u17c7("\u1780 \u1781 \u1782", " ")',null)
A.mF=w([A.t7],x.i)
A.yQ=new B.d(null,A.mF,null)
A.mj=w([A.yQ],x.i)
A.Di=new B.b(A.mj,null)
A.up=new C.a("\u1794\u17c6\u1794\u17c2\u1780\u17a2\u178f\u17d2\u1790\u1794\u1791\u1791\u17c5\u1787\u17b6\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.mn=w([A.up],x.i)
A.Eu=new B.b(A.mn,null)
A.m6=w([A.EP,A.F5,A.Di,A.Eu],x.i)
A.Gi=new B.o(A.m6,null)
A.pA=new C.a("\u1780\u17b6\u178f\u17cb(...)",null)
A.co=w([A.pA],x.i)
A.xw=new B.d(null,A.co,null)
A.jf=w([A.xw],x.i)
A.DE=new B.b(A.jf,null)
A.pT=new C.a("substr(...)",null)
A.mp=w([A.pT],x.i)
A.yP=new B.d(null,A.mp,null)
A.c6=w([A.yP],x.i)
A.DQ=new B.b(A.c6,null)
A.qF=new C.a('\u1780\u17b6\u178f\u17cb("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u17e0, \u17e4)',null)
A.jV=w([A.qF],x.i)
A.yN=new B.d(null,A.jV,null)
A.k2=w([A.yN],x.i)
A.Fx=new B.b(A.k2,null)
A.oH=new C.a("\u1780\u17b6\u178f\u17cb\u1799\u1780\u1795\u17d2\u1793\u17c2\u1780\u1793\u17c3\u17a2\u178f\u17d2\u1790\u1794\u1791\u178f\u17b6\u1798\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1793\u17b7\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb",null)
A.kz=w([A.oH],x.i)
A.FL=new B.b(A.kz,null)
A.hK=w([A.DE,A.DQ,A.Fx,A.FL],x.i)
A.Gv=new B.o(A.hK,null)
A.pN=new C.a("\u1787\u17c6\u1793\u17bd\u179f(...)",null)
A.ev=w([A.pN],x.i)
A.y_=new B.d(null,A.ev,null)
A.fk=w([A.y_],x.i)
A.CZ=new B.b(A.fk,null)
A.q5=new C.a("replace(...)",null)
A.hs=w([A.q5],x.i)
A.xj=new B.d(null,A.hs,null)
A.fb=w([A.xj],x.i)
A.CI=new B.b(A.fb,null)
A.pR=new C.a('\u1787\u17c6\u1793\u17bd\u179f(str, "\u1785\u17b6\u179f\u17cb", "\u1790\u17d2\u1798\u17b8")',null)
A.kp=w([A.pR],x.i)
A.yu=new B.d(null,A.kp,null)
A.iq=w([A.yu],x.i)
A.Do=new B.b(A.iq,null)
A.pj=new C.a("\u1787\u17c6\u1793\u17bd\u179f\u1796\u17b6\u1780\u17d2\u1799\u1785\u17b6\u179f\u17cb\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1790\u17d2\u1798\u17b8\u1780\u17d2\u1793\u17bb\u1784\u17a2\u178f\u17d2\u1790\u1794\u1791",null)
A.nv=w([A.pj],x.i)
A.Ek=new B.b(A.nv,null)
A.kR=w([A.CZ,A.CI,A.Do,A.Ek],x.i)
A.GE=new B.o(A.kR,null)
A.rR=new C.a("\u179f\u1798\u17d2\u17a2\u17b6\u178f(...)",null)
A.mZ=w([A.rR],x.i)
A.zq=new B.d(null,A.mZ,null)
A.jZ=w([A.zq],x.i)
A.FI=new B.b(A.jZ,null)
A.pB=new C.a("trim(...)",null)
A.cm=w([A.pB],x.i)
A.z0=new B.d(null,A.cm,null)
A.j7=w([A.z0],x.i)
A.FH=new B.b(A.j7,null)
A.p8=new C.a('\u179f\u1798\u17d2\u17a2\u17b6\u178f("  \u17a2\u178f\u17d2\u1790\u1794\u1791  ")',null)
A.nu=w([A.p8],x.i)
A.xQ=new B.d(null,A.nu,null)
A.it=w([A.xQ],x.i)
A.EL=new B.b(A.it,null)
A.vh=new C.a("\u179b\u17bb\u1794\u1785\u1793\u17d2\u179b\u17c4\u17c7\u1791\u1791\u17c1 (Whitespace) \u1781\u17b6\u1784\u178a\u17be\u1798 \u1793\u17b7\u1784\u1781\u17b6\u1784\u1785\u17bb\u1784",null)
A.mS=w([A.vh],x.i)
A.E_=new B.b(A.mS,null)
A.n7=w([A.FI,A.FH,A.EL,A.E_],x.i)
A.Gn=new B.o(A.n7,null)
A.qx=new C.a("\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6(...)",null)
A.ip=w([A.qx],x.i)
A.xJ=new B.d(null,A.ip,null)
A.e4=w([A.xJ],x.i)
A.EE=new B.b(A.e4,null)
A.rh=new C.a("upper(...)",null)
A.il=w([A.rh],x.i)
A.zf=new B.d(null,A.il,null)
A.lZ=w([A.zf],x.i)
A.Es=new B.b(A.lZ,null)
A.tX=new C.a('\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6("hello")',null)
A.md=w([A.tX],x.i)
A.zl=new B.d(null,A.md,null)
A.m5=w([A.zl],x.i)
A.Cu=new B.b(A.m5,null)
A.tk=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u17a2\u1780\u17d2\u179f\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1791\u17c5\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6",null)
A.jE=w([A.tk],x.i)
A.Ct=new B.b(A.jE,null)
A.ej=w([A.EE,A.Es,A.Cu,A.Ct],x.i)
A.GB=new B.o(A.ej,null)
A.oZ=new C.a("\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785(...)",null)
A.n2=w([A.oZ],x.i)
A.z6=new B.d(null,A.n2,null)
A.lT=w([A.z6],x.i)
A.Fm=new B.b(A.lT,null)
A.uN=new C.a("lower(...)",null)
A.cg=w([A.uN],x.i)
A.zC=new B.d(null,A.cg,null)
A.eF=w([A.zC],x.i)
A.DH=new B.b(A.eF,null)
A.ov=new C.a('\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785("HELLO")',null)
A.mV=w([A.ov],x.i)
A.yG=new B.d(null,A.mV,null)
A.lN=w([A.yG],x.i)
A.F4=new B.b(A.lN,null)
A.tp=new C.a("\u1794\u1798\u17d2\u179b\u17c2\u1784\u17a2\u1780\u17d2\u179f\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1791\u17c5\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785",null)
A.ie=w([A.tp],x.i)
A.Fr=new B.b(A.ie,null)
A.iH=w([A.Fm,A.DH,A.F4,A.Fr],x.i)
A.GP=new B.o(A.iH,null)
A.tD=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(...)",null)
A.m_=w([A.tD],x.i)
A.zo=new B.d(null,A.m_,null)
A.f7=w([A.zo],x.i)
A.CV=new B.b(A.f7,null)
A.qJ=new C.a("append(...)",null)
A.fP=w([A.qJ],x.i)
A.z7=new B.d(null,A.fP,null)
A.jM=w([A.z7],x.i)
A.DW=new B.b(A.jM,null)
A.oW=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.fd=w([A.oW],x.i)
A.xU=new B.d(null,A.fd,null)
A.lo=w([A.xU],x.i)
A.F0=new B.b(A.lo,null)
A.v4=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798\u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8\u1791\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.k1=w([A.v4],x.i)
A.CJ=new B.b(A.k1,null)
A.mY=w([A.CV,A.DW,A.F0,A.CJ],x.i)
A.Gw=new B.o(A.mY,null)
A.py=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b(...)",null)
A.ex=w([A.py],x.i)
A.yd=new B.d(null,A.ex,null)
A.fZ=w([A.yd],x.i)
A.D8=new B.b(A.fZ,null)
A.ud=new C.a("insert(...)",null)
A.kO=w([A.ud],x.i)
A.xK=new B.d(null,A.kO,null)
A.cZ=w([A.xK],x.i)
A.Fi=new B.b(A.cZ,null)
A.vO=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b(\u1794\u1789\u17d2\u1787\u17b8, \u17e0, \u1792\u17b6\u178f\u17bb)",null)
A.ca=w([A.vO],x.i)
A.yv=new B.d(null,A.ca,null)
A.lm=w([A.yv],x.i)
A.FD=new B.b(A.lm,null)
A.ti=new C.a("\u1794\u1789\u17d2\u1785\u17bc\u179b\u1792\u17b6\u178f\u17bb\u1793\u17c5\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1780\u17c6\u178e\u178f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8",null)
A.nb=w([A.ti],x.i)
A.Er=new B.b(A.nb,null)
A.iV=w([A.D8,A.Fi,A.FD,A.Er],x.i)
A.GO=new B.o(A.iV,null)
A.vj=new C.a("\u178a\u1780\u1785\u17c1\u1789(...)",null)
A.f_=w([A.vj],x.i)
A.xH=new B.d(null,A.f_,null)
A.mg=w([A.xH],x.i)
A.Ft=new B.b(A.mg,null)
A.pD=new C.a("pop(...)",null)
A.iQ=w([A.pD],x.i)
A.yf=new B.d(null,A.iQ,null)
A.io=w([A.yf],x.i)
A.FN=new B.b(A.io,null)
A.u2=new C.a("\u178a\u1780\u1785\u17c1\u1789(\u1794\u1789\u17d2\u1787\u17b8, [\u1791\u17b8\u178f\u17b6\u17c6\u1784])",null)
A.kB=w([A.u2],x.i)
A.yB=new B.d(null,A.kB,null)
A.i8=w([A.yB],x.i)
A.F7=new B.b(A.i8,null)
A.tF=new C.a("\u178a\u1780\u1792\u17b6\u178f\u17bb\u1785\u17bb\u1784\u1780\u17d2\u179a\u17c4\u1799 \u17ac\u178f\u17b6\u1798\u1791\u17b8\u178f\u17b6\u17c6\u1784\u178a\u17c2\u179b\u1794\u17b6\u1793\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb",null)
A.mI=w([A.tF],x.i)
A.DI=new B.b(A.mI,null)
A.eD=w([A.Ft,A.FN,A.F7,A.DI],x.i)
A.Gc=new B.o(A.eD,null)
A.uc=new C.a("\u179b\u17bb\u1794(...)",null)
A.kx=w([A.uc],x.i)
A.zn=new B.d(null,A.kx,null)
A.ib=w([A.zn],x.i)
A.FF=new B.b(A.ib,null)
A.uV=new C.a("remove(...)",null)
A.fW=w([A.uV],x.i)
A.zi=new B.d(null,A.fW,null)
A.en=w([A.zi],x.i)
A.Fj=new B.b(A.en,null)
A.uk=new C.a("\u179b\u17bb\u1794(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.ke=w([A.uk],x.i)
A.zm=new B.d(null,A.ke,null)
A.fq=w([A.zm],x.i)
A.CF=new B.b(A.fq,null)
A.re=new C.a("\u179b\u17bb\u1794\u1792\u17b6\u178f\u17bb\u178a\u17c2\u179b\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17bc\u179c\u1782\u17d2\u1793\u17b6\u1785\u17c1\u1789\u1796\u17b8\u1794\u1789\u17d2\u1787\u17b8",null)
A.lD=w([A.re],x.i)
A.Cr=new B.b(A.lD,null)
A.e2=w([A.FF,A.Fj,A.CF,A.Cr],x.i)
A.Gd=new B.o(A.e2,null)
A.uS=new C.a("\u1797\u17d2\u1787\u17b6\u1794\u17cb(...)",null)
A.ni=w([A.uS],x.i)
A.zP=new B.d(null,A.ni,null)
A.c2=w([A.zP],x.i)
A.Dh=new B.b(A.c2,null)
A.us=new C.a("join(...)",null)
A.cl=w([A.us],x.i)
A.z3=new B.d(null,A.cl,null)
A.lI=w([A.z3],x.i)
A.D7=new B.b(A.lI,null)
A.v7=new C.a('\u1797\u17d2\u1787\u17b6\u1794\u17cb(\u1794\u1789\u17d2\u1787\u17b8, "-")',null)
A.h5=w([A.v7],x.i)
A.zO=new B.d(null,A.h5,null)
A.mO=w([A.zO],x.i)
A.EB=new B.b(A.mO,null)
A.p9=new C.a("\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1792\u17b6\u178f\u17bb\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8\u1787\u17b6\u17a2\u178f\u17d2\u1790\u1794\u1791 String \u178f\u17c2\u1798\u17bd\u1799",null)
A.kE=w([A.p9],x.i)
A.CH=new B.b(A.kE,null)
A.hD=w([A.Dh,A.D7,A.EB,A.CH],x.i)
A.GS=new B.o(A.hD,null)
A.qj=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794(...)",null)
A.jL=w([A.qj],x.i)
A.xt=new B.d(null,A.jL,null)
A.kM=w([A.xt],x.i)
A.Eo=new B.b(A.kM,null)
A.va=new C.a("sort(...)",null)
A.jT=w([A.va],x.i)
A.yL=new B.d(null,A.jT,null)
A.lW=w([A.yL],x.i)
A.Dy=new B.b(A.lW,null)
A.uC=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794(\u1794\u1789\u17d2\u1787\u17b8)",null)
A.l2=w([A.uC],x.i)
A.yO=new B.d(null,A.l2,null)
A.kT=w([A.yO],x.i)
A.CE=new B.b(A.kT,null)
A.q0=new C.a("\u178f\u1798\u17d2\u179a\u17c0\u1794\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8\u178f\u17b6\u1798\u179b\u17c6\u178a\u17b6\u1794\u17cb\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u1781\u179a\u1780\u17d2\u179a\u1798",null)
A.fo=w([A.q0],x.i)
A.Dg=new B.b(A.fo,null)
A.j5=w([A.Eo,A.Dy,A.CE,A.Dg],x.i)
A.GM=new B.o(A.j5,null)
A.t4=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8(...)",null)
A.f0=w([A.t4],x.i)
A.yc=new B.d(null,A.f0,null)
A.hi=w([A.yc],x.i)
A.CL=new B.b(A.hi,null)
A.rB=new C.a("reverse(...)",null)
A.lU=w([A.rB],x.i)
A.zt=new B.d(null,A.lU,null)
A.ls=w([A.zt],x.i)
A.Dm=new B.b(A.ls,null)
A.tf=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8(\u1794\u1789\u17d2\u1787\u17b8)",null)
A.du=w([A.tf],x.i)
A.y4=new B.d(null,A.du,null)
A.m0=w([A.y4],x.i)
A.Dw=new B.b(A.m0,null)
A.u5=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8 \u17ac\u17a2\u1780\u17d2\u179f\u179a\u1796\u17b8\u1780\u17d2\u179a\u17c4\u1799\u1798\u1780\u1798\u17bb\u1781 (Reverse)",null)
A.cj=w([A.u5],x.i)
A.Fy=new B.b(A.cj,null)
A.hm=w([A.CL,A.Dm,A.Dw,A.Fy],x.i)
A.GZ=new B.o(A.hm,null)
A.qH=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780(...)",null)
A.hl=w([A.qH],x.i)
A.yx=new B.d(null,A.hl,null)
A.ki=w([A.yx],x.i)
A.Ey=new B.b(A.ki,null)
A.r3=new C.a("indexOf(...)",null)
A.fG=w([A.r3],x.i)
A.yV=new B.d(null,A.fG,null)
A.dI=w([A.yV],x.i)
A.Fp=new B.b(A.dI,null)
A.rd=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.kd=w([A.rd],x.i)
A.y6=new B.d(null,A.kd,null)
A.jm=w([A.y6],x.i)
A.Ee=new B.b(A.jm,null)
A.t0=new C.a("\u179a\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd (Index) \u1793\u17c3\u1792\u17b6\u178f\u17bb \u17ac\u17a2\u1780\u17d2\u179f\u179a (\u1795\u17d2\u178a\u179b\u17cb -\u17e1 \u1794\u17be\u1782\u17d2\u1798\u17b6\u1793)",null)
A.fx=w([A.t0],x.i)
A.E9=new B.b(A.fx,null)
A.lS=w([A.Ey,A.Fp,A.Ee,A.E9],x.i)
A.H6=new B.o(A.lS,null)
A.um=new C.a("\u1798\u17b6\u1793(...)",null)
A.hN=w([A.um],x.i)
A.yK=new B.d(null,A.hN,null)
A.eS=w([A.yK],x.i)
A.Fv=new B.b(A.eS,null)
A.pq=new C.a("contains(...)",null)
A.nx=w([A.pq],x.i)
A.zj=new B.d(null,A.nx,null)
A.dC=w([A.zj],x.i)
A.DM=new B.b(A.dC,null)
A.pm=new C.a("\u1798\u17b6\u1793(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)",null)
A.m9=w([A.pm],x.i)
A.z4=new B.d(null,A.m9,null)
A.ii=w([A.z4],x.i)
A.EF=new B.b(A.ii,null)
A.uD=new C.a("\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u178f\u17d2\u178f\u1798\u17b6\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784\u1794\u1789\u17d2\u1787\u17b8 \u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u179c\u178f\u17d2\u1790\u17bb (\u1796\u17b7\u178f / \u1798\u17b7\u1793\u1796\u17b7\u178f)",null)
A.n1=w([A.uD],x.i)
A.DN=new B.b(A.n1,null)
A.mQ=w([A.Fv,A.DM,A.EF,A.DN],x.i)
A.H7=new B.o(A.mQ,null)
A.p7=new C.a("\u1796\u17c1\u179b\u1793\u17c1\u17c7()",null)
A.jU=w([A.p7],x.i)
A.xR=new B.d(null,A.jU,null)
A.dw=w([A.xR],x.i)
A.b8=new B.b(A.dw,null)
A.vC=new C.a("now()",null)
A.lf=w([A.vC],x.i)
A.xk=new B.d(null,A.lf,null)
A.jH=w([A.xk],x.i)
A.EU=new B.b(A.jH,null)
A.u3=new C.a("\u1795\u17d2\u178a\u179b\u17cb\u1796\u17c1\u179b\u179c\u17c1\u179b\u17b6\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793\u1782\u17b7\u178f\u1787\u17b6 Milliseconds \u1785\u17b6\u1794\u17cb\u1796\u17b8 Epoch",null)
A.h1=w([A.u3],x.i)
A.CM=new B.b(A.h1,null)
A.l1=w([A.b8,A.EU,A.b8,A.CM],x.i)
A.H2=new B.o(A.l1,null)
A.uA=new C.a("\u17a2\u17b6\u1793(...)",null)
A.dN=w([A.uA],x.i)
A.za=new B.d(null,A.dN,null)
A.kF=w([A.za],x.i)
A.ED=new B.b(A.kF,null)
A.q6=new C.a("input(...)",null)
A.fl=w([A.q6],x.i)
A.yt=new B.d(null,A.fl,null)
A.mx=w([A.yt],x.i)
A.Ff=new B.b(A.mx,null)
A.uj=new C.a('\u17a2\u17b6\u1793("\u1794\u1789\u17d2\u1785\u17bc\u179b\u1788\u17d2\u1798\u17c4\u17c7: ")',null)
A.km=w([A.uj],x.i)
A.yW=new B.d(null,A.km,null)
A.n3=w([A.yW],x.i)
A.Ea=new B.b(A.n3,null)
A.uw=new C.a("\u1791\u1791\u17bd\u179b\u1780\u17b6\u179a\u179c\u17b6\u1799\u1794\u1789\u17d2\u1785\u17bc\u179b\u1796\u17b8\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Standard Input)",null)
A.fN=w([A.uw],x.i)
A.F6=new B.b(A.fN,null)
A.mv=w([A.ED,A.Ff,A.Ea,A.F6],x.i)
A.Gx=new B.o(A.mv,null)
A.dx=w([A.H4,A.H_,A.Gk,A.Gf,A.Gr,A.Gp,A.GH,A.Ga,A.Gy,A.GJ,A.GD,A.GV,A.H5,A.GF,A.GG,A.Gi,A.Gv,A.GE,A.Gn,A.GB,A.GP,A.Gw,A.GO,A.Gc,A.Gd,A.GS,A.GM,A.GZ,A.H6,A.H7,A.H2,A.Gx],x.i)
A.Ch=new B.cG(A.dx,null)
A.cR=w([A.G7,A.Ch],x.i)
A.Cf=new B.cF(A.cR,null)
A.cb=w([A.Cf],x.i)
A.A5=new B.w(null,"table-responsive",null,null,null,A.cb,null)
A.jp=w([A.Ak,A.B9,A.A5],x.i)
A.Br=new B.a9("builtins",A.jp,null)
A.rU=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd (Tools & IDEs) ",null)
A.x4=new B.R("#ides",null,"heading-anchor",null,null,null,A.e,null)
A.cO=w([A.rU,A.x4],x.i)
A.An=new B.a8(A.cO,null)
A.t6=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u179a\u17bd\u179b\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u17a2\u17c1\u1780\u17bc\u17a1\u17bc\u179f\u17ca\u17b8 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u179a\u17bd\u1798\u1798\u17b6\u1793\u17a7\u1794\u1780\u179a\u178e\u17cd\u1791\u17c6\u1793\u17be\u1794\u17d7\u1787\u17b6\u1785\u17d2\u179a\u17be\u1793\u17d6",null)
A.h6=w([A.t6],x.i)
A.Ba=new B.N(null,null,A.h6,null)
A.vn=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a Khmer IDE (Cross-Platform)\u17d6 ",null)
A.kD=w([A.vn],x.i)
A.BQ=new B.a_(A.kD,null)
A.vq=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799 Flutter \u1798\u17b6\u1793\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793 Dart Engine \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u179b\u17be macOS, Windows, Linux \u1793\u17b7\u1784 Web \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb \u1787\u17b6\u1798\u17bd\u1799 Virtual Khmer Keyboard, Tabs, AST Inspector \u1793\u17b7\u1784 Output Console\u17d4",null)
A.hG=w([A.BQ,A.vq],x.i)
A.AM=new B.a5(null,null,null,A.hG,null)
A.vB=new C.a("Programiz-Style Web IDE\u17d6 ",null)
A.hE=w([A.vB],x.i)
A.BU=new B.a_(A.hE,null)
A.r4=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798 Programiz \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be Web Browser \u1787\u17b6\u1798\u17bd\u1799 Python Backend Server\u17d4",null)
A.id=w([A.BU,A.r4],x.i)
A.Az=new B.a5(null,null,null,A.id,null)
A.tz=new C.a("Command Line Interface (CLI) & REPL\u17d6 ",null)
A.j0=w([A.tz],x.i)
A.C1=new B.a_(A.j0,null)
A.oV=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u1794\u1789\u17d2\u1787\u17b6\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8 Terminal \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u17af\u1780\u179f\u17b6\u179a ",null)
A.vd=new C.a(".khmer",null)
A.i7=w([A.vd],x.i)
A.aZ=new B.d(null,A.i7,null)
A.D=new C.a("\u17d4",null)
A.fQ=w([A.C1,A.oV,A.aZ,A.D],x.i)
A.AF=new B.a5(null,null,null,A.fQ,null)
A.d4=w([A.AM,A.Az,A.AF],x.i)
A.Hb=new B.bq(null,null,A.d4,null)
A.cf=w([A.An,A.Ba,A.Hb],x.i)
A.Bs=new B.a9("ides",A.cf,null)
A.uB=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Khmer Syntax Cheat Sheet) ",null)
A.x6=new B.R("#cheat-sheet",null,"heading-anchor",null,null,null,A.e,null)
A.cB=w([A.uB,A.x6],x.i)
A.Am=new B.a8(A.cB,null)
A.tM=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u1799\u17c4\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)\u17d6",null)
A.ce=w([A.tM],x.i)
A.Bb=new B.N(null,null,A.ce,null)
A.q8=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Keyword)",null)
A.eq=w([A.q8],x.i)
A.G6=new B.at(A.eq,null)
A.vQ=new C.a("\u179f\u1798\u1798\u17bc\u179b\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Equivalent)",null)
A.j2=w([A.vQ],x.i)
A.FW=new B.at(A.j2,null)
A.uI=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb",null)
A.kV=w([A.uI],x.i)
A.G4=new B.at(A.kV,null)
A.v5=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1780\u17bc\u178a",null)
A.cN=w([A.v5],x.i)
A.G5=new B.at(A.cN,null)
A.hg=w([A.G6,A.FW,A.G4,A.G5],x.i)
A.H0=new B.o(A.hg,null)
A.m3=w([A.H0],x.i)
A.G9=new B.cH(A.m3,null)
A.pQ=new C.a("\u178f\u17b6\u17c6\u1784",null)
A.hq=w([A.pQ],x.i)
A.a3=new B.d(null,A.hq,null)
A.mW=w([A.a3],x.i)
A.Dk=new B.b(A.mW,null)
A.u6=new C.a("let / var",null)
A.iw=w([A.u6],x.i)
A.xu=new B.d(null,A.iw,null)
A.eG=w([A.xu],x.i)
A.F2=new B.b(A.eG,null)
A.pa=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1790\u17d2\u1798\u17b8",null)
A.lu=w([A.pa],x.i)
A.Dz=new B.b(A.lu,null)
A.uH=new C.a("\u178f\u17b6\u17c6\u1784 x = \u17e1\u17e0;",null)
A.la=w([A.uH],x.i)
A.zx=new B.d(null,A.la,null)
A.fj=w([A.zx],x.i)
A.E1=new B.b(A.fj,null)
A.fu=w([A.Dk,A.F2,A.Dz,A.E1],x.i)
A.Gj=new B.o(A.fu,null)
A.oC=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789",null)
A.jo=w([A.oC],x.i)
A.aW=new B.d(null,A.jo,null)
A.hh=w([A.aW],x.i)
A.Cn=new B.b(A.hh,null)
A.vM=new C.a("print / echo",null)
A.kU=w([A.vM],x.i)
A.yH=new B.d(null,A.kU,null)
A.mT=w([A.yH],x.i)
A.EW=new B.b(A.mT,null)
A.r8=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb",null)
A.dE=w([A.r8],x.i)
A.F1=new B.b(A.dE,null)
A.vL=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8");',null)
A.iT=w([A.vL],x.i)
A.xW=new B.d(null,A.iT,null)
A.hr=w([A.xW],x.i)
A.Ej=new B.b(A.hr,null)
A.fJ=w([A.Cn,A.EW,A.F1,A.Ej],x.i)
A.Gm=new B.o(A.fJ,null)
A.pc=new C.a("\u1794\u17be",null)
A.hB=w([A.pc],x.i)
A.a2=new B.d(null,A.hB,null)
A.hx=w([A.a2],x.i)
A.Dv=new B.b(A.hx,null)
A.ui=new C.a("if",null)
A.hZ=w([A.ui],x.i)
A.ys=new B.d(null,A.hZ,null)
A.dM=w([A.ys],x.i)
A.D4=new B.b(A.dM,null)
A.pk=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c6\u1794\u17bc\u1784",null)
A.dq=w([A.pk],x.i)
A.DD=new B.b(A.dq,null)
A.tI=new C.a("\u1794\u17be (x > \u17e0) { ... }",null)
A.c1=w([A.tI],x.i)
A.zL=new B.d(null,A.c1,null)
A.nh=w([A.zL],x.i)
A.DK=new B.b(A.nh,null)
A.cv=w([A.Dv,A.D4,A.DD,A.DK],x.i)
A.GX=new B.o(A.cv,null)
A.r_=new C.a("\u17ac\u1794\u17be",null)
A.e1=w([A.r_],x.i)
A.aV=new B.d(null,A.e1,null)
A.j4=w([A.aV],x.i)
A.EO=new B.b(A.j4,null)
A.rA=new C.a("else if / elif",null)
A.ku=w([A.rA],x.i)
A.z8=new B.d(null,A.ku,null)
A.f3=w([A.z8],x.i)
A.EA=new B.b(A.f3,null)
A.qD=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",null)
A.ja=w([A.qD],x.i)
A.CS=new B.b(A.ja,null)
A.tG=new C.a("\u17ac\u1794\u17be (x == \u17e0) { ... }",null)
A.ij=w([A.tG],x.i)
A.ya=new B.d(null,A.ij,null)
A.iu=w([A.ya],x.i)
A.EG=new B.b(A.iu,null)
A.eo=w([A.EO,A.EA,A.CS,A.EG],x.i)
A.GR=new B.o(A.eo,null)
A.oq=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",null)
A.im=w([A.oq],x.i)
A.b_=new B.d(null,A.im,null)
A.cI=w([A.b_],x.i)
A.Du=new B.b(A.cI,null)
A.tP=new C.a("else",null)
A.hU=w([A.tP],x.i)
A.z2=new B.d(null,A.hU,null)
A.hb=w([A.z2],x.i)
A.CT=new B.b(A.hb,null)
A.tn=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1793\u17c1\u17c7",null)
A.ko=w([A.tn],x.i)
A.ER=new B.b(A.ko,null)
A.qr=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f { ... }",null)
A.cL=w([A.qr],x.i)
A.xN=new B.d(null,A.cL,null)
A.mz=w([A.xN],x.i)
A.Fc=new B.b(A.mz,null)
A.lP=w([A.Du,A.CT,A.ER,A.Fc],x.i)
A.GQ=new B.o(A.lP,null)
A.ue=new C.a("\u1781\u178e\u17c8",null)
A.cP=w([A.ue],x.i)
A.a0=new B.d(null,A.cP,null)
A.lC=w([A.a0],x.i)
A.E0=new B.b(A.lC,null)
A.vx=new C.a("while",null)
A.i4=w([A.vx],x.i)
A.yU=new B.d(null,A.i4,null)
A.eZ=w([A.yU],x.i)
A.Eg=new B.b(A.eZ,null)
A.qy=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c",null)
A.fg=w([A.qy],x.i)
A.Eq=new B.b(A.fg,null)
A.rO=new C.a("\u1781\u178e\u17c8 (x > \u17e0) { ... }",null)
A.lF=w([A.rO],x.i)
A.xY=new B.d(null,A.lF,null)
A.k4=w([A.xY],x.i)
A.EZ=new B.b(A.k4,null)
A.fa=w([A.E0,A.Eg,A.Eq,A.EZ],x.i)
A.Gb=new B.o(A.fa,null)
A.rX=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",null)
A.kH=w([A.rX],x.i)
A.b0=new B.d(null,A.kH,null)
A.d9=w([A.b0],x.i)
A.FU=new B.b(A.d9,null)
A.u1=new C.a("for",null)
A.hX=w([A.u1],x.i)
A.zI=new B.d(null,A.hX,null)
A.iy=w([A.zI],x.i)
A.Fl=new B.b(A.iy,null)
A.tJ=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1798\u17b6\u1793\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1780\u17c6\u178e\u178f\u17cb",null)
A.cT=w([A.tJ],x.i)
A.Eh=new B.b(A.cT,null)
A.ua=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i=\u17e0; i<\u17e5; i=i+\u17e1)",null)
A.lM=w([A.ua],x.i)
A.xD=new B.d(null,A.lM,null)
A.nw=w([A.xD],x.i)
A.Ep=new B.b(A.nw,null)
A.dQ=w([A.FU,A.Fl,A.Eh,A.Ep],x.i)
A.Gl=new B.o(A.dQ,null)
A.dJ=w([A.I],x.i)
A.CQ=new B.b(A.dJ,null)
A.uR=new C.a("function / method",null)
A.js=w([A.uR],x.i)
A.yn=new B.d(null,A.js,null)
A.d5=w([A.yn],x.i)
A.FE=new B.b(A.d5,null)
A.pv=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1791\u17bc\u1791\u17c5 \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.eQ=w([A.pv],x.i)
A.Ei=new B.b(A.eQ,null)
A.uL=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17bc\u1780(\u1780, \u1781) { ... }",null)
A.d0=w([A.uL],x.i)
A.z9=new B.d(null,A.d0,null)
A.m7=w([A.z9],x.i)
A.Fq=new B.b(A.m7,null)
A.f1=w([A.CQ,A.FE,A.Ei,A.Fq],x.i)
A.Go=new B.o(A.f1,null)
A.mD=w([A.b2],x.i)
A.Dt=new B.b(A.mD,null)
A.vb=new C.a("return",null)
A.i1=w([A.vb],x.i)
A.yC=new B.d(null,A.i1,null)
A.iP=w([A.yC],x.i)
A.E4=new B.b(A.iP,null)
A.uW=new C.a("\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1796\u17b8\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.fn=w([A.uW],x.i)
A.Ds=new B.b(A.fn,null)
A.qN=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb \u1780 + \u1781",null)
A.fm=w([A.qN],x.i)
A.xr=new B.d(null,A.fm,null)
A.j8=w([A.xr],x.i)
A.Cv=new B.b(A.j8,null)
A.jI=w([A.Dt,A.E4,A.Ds,A.Cv],x.i)
A.H1=new B.o(A.jI,null)
A.mi=w([A.a4],x.i)
A.En=new B.b(A.mi,null)
A.ts=new C.a("class",null)
A.hT=w([A.ts],x.i)
A.yh=new B.d(null,A.hT,null)
A.l3=w([A.yh],x.i)
A.FT=new B.b(A.l3,null)
A.qT=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP",null)
A.cF=w([A.qT],x.i)
A.Fb=new B.b(A.cF,null)
A.pW=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u17b7\u179f\u17d2\u179f { ... }",null)
A.lR=w([A.pW],x.i)
A.xn=new B.d(null,A.lR,null)
A.mP=w([A.xn],x.i)
A.CB=new B.b(A.mP,null)
A.lO=w([A.En,A.FT,A.Fb,A.CB],x.i)
A.GL=new B.o(A.lO,null)
A.op=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f",null)
A.c3=w([A.op],x.i)
A.zw=new B.d(null,A.c3,null)
A.jR=w([A.zw],x.i)
A.EK=new B.b(A.jR,null)
A.tL=new C.a("constructor / __init__",null)
A.cn=w([A.tL],x.i)
A.zg=new B.d(null,A.cn,null)
A.hO=w([A.zg],x.i)
A.CY=new B.b(A.hO,null)
A.qg=new C.a("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u1794\u1784\u17d2\u1780\u17be\u178f\u179c\u178f\u17d2\u1790\u17bb",null)
A.cS=w([A.qg],x.i)
A.FR=new B.b(A.cS,null)
A.oB=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) { \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7 }",null)
A.cD=w([A.oB],x.i)
A.yg=new B.d(null,A.cD,null)
A.dA=w([A.yg],x.i)
A.DU=new B.b(A.dA,null)
A.jy=w([A.EK,A.CY,A.FR,A.DU],x.i)
A.Gq=new B.o(A.jy,null)
A.oO=new C.a("\u1793\u17c1\u17c7",null)
A.jN=w([A.oO],x.i)
A.xS=new B.d(null,A.jN,null)
A.an=new C.a(" / ",null)
A.vF=new C.a("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",null)
A.n0=w([A.vF],x.i)
A.yo=new B.d(null,A.n0,null)
A.hP=w([A.xS,A.an,A.yo],x.i)
A.Ec=new B.b(A.hP,null)
A.v6=new C.a("this / self",null)
A.kQ=w([A.v6],x.i)
A.yT=new B.d(null,A.kQ,null)
A.mw=w([A.yT],x.i)
A.De=new B.b(A.mw,null)
A.px=new C.a("\u1799\u17c4\u1784\u1791\u17c5\u179b\u17be Object \u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793",null)
A.ia=w([A.px],x.i)
A.EQ=new B.b(A.ia,null)
A.pV=new C.a('\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"',null)
A.h7=w([A.pV],x.i)
A.zG=new B.d(null,A.h7,null)
A.kr=w([A.zG],x.i)
A.CA=new B.b(A.kr,null)
A.mE=w([A.Ec,A.De,A.EQ,A.CA],x.i)
A.GN=new B.o(A.mE,null)
A.mU=w([A.aX],x.i)
A.Fk=new B.b(A.mU,null)
A.uT=new C.a("new",null)
A.i0=w([A.uT],x.i)
A.xL=new B.d(null,A.i0,null)
A.je=w([A.xL],x.i)
A.Cl=new B.b(A.je,null)
A.ur=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.lc=w([A.ur],x.i)
A.EX=new B.b(A.lc,null)
A.oA=new C.a('\u178f\u17b6\u17c6\u1784 p = \u1790\u17d2\u1798\u17b8 \u179f\u17b7\u179f\u17d2\u179f("\u178f\u17b6\u179a\u17b6")',null)
A.cs=w([A.oA],x.i)
A.zh=new B.d(null,A.cs,null)
A.dS=w([A.zh],x.i)
A.CW=new B.b(A.dS,null)
A.cX=w([A.Fk,A.Cl,A.EX,A.CW],x.i)
A.GU=new B.o(A.cX,null)
A.fX=w([A.b1],x.i)
A.E2=new B.b(A.fX,null)
A.tS=new C.a("extends",null)
A.hV=w([A.tS],x.i)
A.z1=new B.d(null,A.hV,null)
A.ms=w([A.z1],x.i)
A.Fh=new B.b(A.ms,null)
A.rr=new C.a("\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Inheritance)",null)
A.jS=w([A.rr],x.i)
A.DO=new B.b(A.jS,null)
A.qQ=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1798\u17b6 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c",null)
A.ho=w([A.qQ],x.i)
A.yI=new B.d(null,A.ho,null)
A.fC=w([A.yI],x.i)
A.Fs=new B.b(A.fC,null)
A.iL=w([A.E2,A.Fh,A.DO,A.Fs],x.i)
A.Gu=new B.o(A.iL,null)
A.le=w([A.aT],x.i)
A.El=new B.b(A.le,null)
A.lJ=w([A.aU],x.i)
A.EJ=new B.b(A.lJ,null)
A.qA=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f Getter \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u178f\u1798\u17d2\u179b\u17c3\u1782\u17bb\u178e\u179b\u1780\u17d2\u1781\u178e\u17c8",null)
A.cd=w([A.qA],x.i)
A.EY=new B.b(A.cd,null)
A.qO=new C.a("\u1799\u1780 \u1788\u17d2\u1798\u17c4\u17c7\u1796\u17c1\u1789 { ... }",null)
A.de=w([A.qO],x.i)
A.xz=new B.d(null,A.de,null)
A.kZ=w([A.xz],x.i)
A.Ew=new B.b(A.kZ,null)
A.e0=w([A.El,A.EJ,A.EY,A.Ew],x.i)
A.GW=new B.o(A.e0,null)
A.nk=w([A.aY,A.an,A.b3],x.i)
A.DC=new B.b(A.nk,null)
A.da=w([A.b5],x.i)
A.CK=new B.b(A.da,null)
A.qK=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f Setter \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1782\u17bb\u178e\u179b\u1780\u17d2\u1781\u178e\u17c8",null)
A.eK=w([A.qK],x.i)
A.Cw=new B.b(A.eK,null)
A.ot=new C.a("\u178a\u17b6\u1780\u17cb \u17a2\u17b6\u1799\u17bb(\u178f) { \u1793\u17c1\u17c7._\u17a2\u17b6\u1799\u17bb = \u178f; }",null)
A.dd=w([A.ot],x.i)
A.yX=new B.d(null,A.dd,null)
A.e3=w([A.yX],x.i)
A.E5=new B.b(A.e3,null)
A.jl=w([A.DC,A.CK,A.Cw,A.E5],x.i)
A.GK=new B.o(A.jl,null)
A.r2=new C.a("\u1796\u17b7\u178f",null)
A.fI=w([A.r2],x.i)
A.a1=new B.d(null,A.fI,null)
A.fz=w([A.a1],x.i)
A.a5=new B.b(A.fz,null)
A.vo=new C.a("true",null)
A.i3=w([A.vo],x.i)
A.xB=new B.d(null,A.i3,null)
A.ct=w([A.xB],x.i)
A.Fo=new B.b(A.ct,null)
A.tc=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1796\u17b7\u178f",null)
A.cK=w([A.tc],x.i)
A.Cq=new B.b(A.cK,null)
A.oM=new C.a("\u178f\u17b6\u17c6\u1784 \u178f\u17d2\u179a\u17bc\u179c = \u1796\u17b7\u178f",null)
A.dt=w([A.oM],x.i)
A.xC=new B.d(null,A.dt,null)
A.nf=w([A.xC],x.i)
A.DV=new B.b(A.nf,null)
A.my=w([A.a5,A.Fo,A.Cq,A.DV],x.i)
A.Ge=new B.o(A.my,null)
A.t9=new C.a("\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.l4=w([A.t9],x.i)
A.aS=new B.d(null,A.l4,null)
A.ik=w([A.aS],x.i)
A.E6=new B.b(A.ik,null)
A.tY=new C.a("false",null)
A.hW=w([A.tY],x.i)
A.y8=new B.d(null,A.hW,null)
A.mX=w([A.y8],x.i)
A.FP=new B.b(A.mX,null)
A.uh=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.lr=w([A.uh],x.i)
A.DJ=new B.b(A.lr,null)
A.rw=new C.a("\u178f\u17b6\u17c6\u1784 \u1781\u17bb\u179f = \u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.me=w([A.rw],x.i)
A.xf=new B.d(null,A.me,null)
A.kt=w([A.xf],x.i)
A.Cm=new B.b(A.kt,null)
A.jv=w([A.E6,A.FP,A.DJ,A.Cm],x.i)
A.GT=new B.o(A.jv,null)
A.tj=new C.a("\u1791\u1791\u17c1",null)
A.ir=w([A.tj],x.i)
A.aQ=new B.d(null,A.ir,null)
A.l0=w([A.aQ],x.i)
A.D6=new B.b(A.l0,null)
A.rc=new C.a("null / none",null)
A.n4=w([A.rc],x.i)
A.y9=new B.d(null,A.n4,null)
A.dH=w([A.y9],x.i)
A.FG=new B.b(A.dH,null)
A.p1=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1791\u1791\u17c1\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",null)
A.k0=w([A.p1],x.i)
A.D1=new B.b(A.k0,null)
A.pS=new C.a("\u178f\u17b6\u17c6\u1784 \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 = \u1791\u1791\u17c1",null)
A.dT=w([A.pS],x.i)
A.yF=new B.d(null,A.dT,null)
A.jP=w([A.yF],x.i)
A.F9=new B.b(A.jP,null)
A.l_=w([A.D6,A.FG,A.D1,A.F9],x.i)
A.Gh=new B.o(A.l_,null)
A.nn=w([A.Gj,A.Gm,A.GX,A.GR,A.GQ,A.Gb,A.Gl,A.Go,A.H1,A.GL,A.Gq,A.GN,A.GU,A.Gu,A.GW,A.GK,A.Ge,A.GT,A.Gh],x.i)
A.Ci=new B.cG(A.nn,null)
A.di=w([A.G9,A.Ci],x.i)
A.Cg=new B.cF(A.di,null)
A.db=w([A.Cg],x.i)
A.A2=new B.w(null,"table-responsive",null,null,null,A.db,null)
A.jG=w([A.Am,A.Bb,A.A2],x.i)
A.Bv=new B.a9("cheat-sheet",A.jG,null)
A.ra=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb (Live Interactive Playground) ",null)
A.wY=new B.R("#playground",null,"heading-anchor",null,null,null,A.e,null)
A.kb=w([A.ra,A.wY],x.i)
A.Aq=new B.a8(A.kb,null)
A.ut=new C.a("\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1780\u17d2\u1793\u17bb\u1784 Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780! \u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u17ac\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1781\u17d2\u179b\u17bd\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780 \u179a\u17bd\u1785\u1785\u17bb\u1785 ",null)
A.uG=new C.a(' "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" ',null)
A.f4=w([A.uG],x.i)
A.BP=new B.a_(A.f4,null)
A.E=new C.a("\u17d6",null)
A.kA=w([A.ut,A.BP,A.E],x.i)
A.B2=new B.N(null,null,A.kA,null)
A.o0=new B.cm(null)
A.c5=w([A.Aq,A.B2,A.o0],x.i)
A.Bz=new B.a9("playground",A.c5,null)
A.kL=w([A.Br,A.Bs,A.Bv,A.Bz],x.i)
A.bS=new B.b0(A.kL,null)
A.qm=new C.a("\u17a2\u1790\u17c1\u179a \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables & Data Types) ",null)
A.wZ=new B.R("#variables",null,"heading-anchor",null,null,null,A.e,null)
A.j9=w([A.qm,A.wZ],x.i)
A.Aa=new B.a8(A.j9,null)
A.qo=new C.a("\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.rI=new C.a(" (Let) \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u17d4 \u17a2\u1790\u17c1\u179a\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba dynamic-typed \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1795\u17d2\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6 \u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a (String), Boolean, \u17ac Null \u1794\u17b6\u1793\u178a\u17c4\u1799\u179f\u17c1\u179a\u17b8\u17d4",null)
A.fS=w([A.qo,A.a3,A.rI],x.i)
A.B5=new B.N(null,null,A.fS,null)
A.qG=new C.a("\u179b\u17c1\u1781 (Numbers): ",null)
A.f2=w([A.qG],x.i)
A.BR=new B.a_(A.f2,null)
A.rF=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb (",null)
A.vr=new C.a("10",null)
A.fK=w([A.vr],x.i)
A.y7=new B.d(null,A.fK,null)
A.n=new C.a(", ",null)
A.pl=new C.a("3.14",null)
A.jb=w([A.pl],x.i)
A.zy=new B.d(null,A.jb,null)
A.qh=new C.a(") \u1793\u17b7\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (",null)
A.q4=new C.a("\u17e1\u17e0",null)
A.lE=w([A.q4],x.i)
A.z_=new B.d(null,A.lE,null)
A.tq=new C.a("\u17e3.\u17e1\u17e4",null)
A.hc=w([A.tq],x.i)
A.y2=new B.d(null,A.hc,null)
A.vk=new C.a(")\u17d4",null)
A.ju=w([A.BR,A.rF,A.y7,A.n,A.zy,A.qh,A.z_,A.n,A.y2,A.vk],x.i)
A.AC=new B.a5(null,null,null,A.ju,null)
A.oF=new C.a("\u17a2\u1780\u17d2\u179f\u179a (Strings): ",null)
A.lK=w([A.oF],x.i)
A.BV=new B.a_(A.lK,null)
A.ro=new C.a("\u179f\u179a\u179f\u17c1\u179a\u1793\u17c5\u1785\u1793\u17d2\u179b\u17c4\u17c7\u179f\u1789\u17d2\u1789\u17b6\u179f\u1798\u17d2\u179a\u1784\u17cb ",null)
A.r5=new C.a('"..."',null)
A.ky=w([A.r5],x.i)
A.yk=new B.d(null,A.ky,null)
A.uq=new C.a("'...'",null)
A.h2=w([A.uq],x.i)
A.xx=new B.d(null,A.h2,null)
A.iI=w([A.BV,A.ro,A.yk,A.aq,A.xx,A.D],x.i)
A.AD=new B.a5(null,null,null,A.iI,null)
A.vm=new C.a("\u1794\u17ca\u17bc\u179b\u17b8\u1793 (Booleans): ",null)
A.nt=w([A.vm],x.i)
A.BW=new B.a_(A.nt,null)
A.ar=new C.a("\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.rt=new C.a(" (True) \u1793\u17b7\u1784 ",null)
A.tb=new C.a(" (False)\u17d4",null)
A.cW=w([A.BW,A.ar,A.a1,A.rt,A.aS,A.tb],x.i)
A.AL=new B.a5(null,null,null,A.cW,null)
A.vG=new C.a("\u1791\u1791\u17c1 (Null): ",null)
A.e7=w([A.vG],x.i)
A.BY=new B.a_(A.e7,null)
A.rH=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u1798\u17d2\u179b\u17c3\u178a\u17c2\u179b\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4",null)
A.hJ=w([A.BY,A.ar,A.aQ,A.rH],x.i)
A.AJ=new B.a5(null,null,null,A.hJ,null)
A.ml=w([A.AC,A.AD,A.AL,A.AJ],x.i)
A.H8=new B.bq(null,null,A.ml,null)
A.bu=new B.Z("variables.khmer","KHMER",'# \u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7\n\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"\n\u178f\u17b6\u17c6\u1784 \u17a2\u17b6\u1799\u17bb = \u17e2\u17e1\n\u178f\u17b6\u17c6\u1784 \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f = \u1796\u17b7\u178f\n\u178f\u17b6\u17c6\u1784 \u1780\u17b6\u179a\u1784\u17b6\u179a = \u1791\u1791\u17c1\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1788\u17d2\u1798\u17c4\u17c7:", \u1788\u17d2\u1798\u17c4\u17c7)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17a2\u17b6\u1799\u17bb:", \u17a2\u17b6\u1799\u17bb)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17d2\u1790\u17b6\u1793\u1797\u17b6\u1796\u1787\u17b6\u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f:", \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u179a\u1784\u17b6\u179a\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793:", \u1780\u17b6\u179a\u1784\u17b6\u179a)',null,null)
A.kc=w([A.Aa,A.B5,A.H8,A.bu],x.i)
A.BA=new B.a9("variables",A.kc,null)
A.qZ=new C.a("\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Khmer Numerals & Math) ",null)
A.xc=new B.R("#numerals",null,"heading-anchor",null,null,null,A.e,null)
A.jO=w([A.qZ,A.xc],x.i)
A.Ar=new B.a8(A.jO,null)
A.pu=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u17a2\u179f\u17d2\u1785\u17b6\u179a\u17d2\u1799\u1794\u17c6\u1795\u17bb\u178f\u179a\u1794\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba\u1780\u17b6\u179a\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a ",null)
A.uO=new C.a("\u17e0, \u17e1, \u17e2, \u17e3, \u17e4, \u17e5, \u17e6, \u17e7, \u17e8, \u17e9",null)
A.es=w([A.uO],x.i)
A.BS=new B.a_(A.es,null)
A.ug=new C.a(" \u1787\u17b6\u179b\u17c1\u1781\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f Lexer \u1793\u17b7\u1784 Parser\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1799\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\u1798\u1780\u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 \u17ac\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794\u1794\u17b6\u1793\u178a\u17c4\u1799\u179a\u179b\u17bc\u1793!",null)
A.fA=w([A.pu,A.BS,A.ug],x.i)
A.AT=new B.N(null,null,A.fA,null)
A.pC=new C.a("\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Operator)",null)
A.lX=w([A.pC],x.i)
A.FY=new B.at(A.lX,null)
A.pd=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 (Description)",null)
A.eH=w([A.pd],x.i)
A.G3=new B.at(A.eH,null)
A.pJ=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd (Example)",null)
A.c7=w([A.pJ],x.i)
A.G_=new B.at(A.c7,null)
A.qw=new C.a("\u179b\u1791\u17d2\u1792\u1795\u179b (Result)",null)
A.iD=w([A.qw],x.i)
A.G2=new B.at(A.iD,null)
A.ee=w([A.FY,A.G3,A.G_,A.G2],x.i)
A.H3=new B.o(A.ee,null)
A.iv=w([A.H3],x.i)
A.G8=new B.cH(A.iv,null)
A.qa=new C.a("+",null)
A.eX=w([A.qa],x.i)
A.zr=new B.d(null,A.eX,null)
A.ds=w([A.zr],x.i)
A.Dj=new B.b(A.ds,null)
A.rp=new C.a("\u1794\u17bc\u1780\u179b\u17c1\u1781 \u17ac\u1797\u17d2\u1787\u17b6\u1794\u17cb\u17a2\u1780\u17d2\u179f\u179a",null)
A.dp=w([A.rp],x.i)
A.EC=new B.b(A.dp,null)
A.ve=new C.a("\u17e1\u17e0 + \u17e5",null)
A.eV=w([A.ve],x.i)
A.yw=new B.d(null,A.eV,null)
A.lt=w([A.yw],x.i)
A.DB=new B.b(A.lt,null)
A.p6=new C.a("\u17e1\u17e5",null)
A.dc=w([A.p6],x.i)
A.xF=new B.d(null,A.dc,null)
A.fM=w([A.xF],x.i)
A.FC=new B.b(A.fM,null)
A.jn=w([A.Dj,A.EC,A.DB,A.FC],x.i)
A.Gz=new B.o(A.jn,null)
A.oE=new C.a("-",null)
A.jj=w([A.oE],x.i)
A.xP=new B.d(null,A.jj,null)
A.l7=w([A.xP],x.i)
A.DS=new B.b(A.l7,null)
A.oU=new C.a("\u178a\u1780\u179b\u17c1\u1781",null)
A.jJ=w([A.oU],x.i)
A.CG=new B.b(A.jJ,null)
A.ty=new C.a("\u17e2\u17e0 - \u17e7",null)
A.mq=w([A.ty],x.i)
A.yq=new B.d(null,A.mq,null)
A.hy=w([A.yq],x.i)
A.D2=new B.b(A.hy,null)
A.oR=new C.a("\u17e1\u17e3",null)
A.nm=w([A.oR],x.i)
A.xg=new B.d(null,A.nm,null)
A.np=w([A.xg],x.i)
A.FK=new B.b(A.np,null)
A.cM=w([A.DS,A.CG,A.D2,A.FK],x.i)
A.Gg=new B.o(A.cM,null)
A.oS=new C.a("*",null)
A.cc=w([A.oS],x.i)
A.yZ=new B.d(null,A.cc,null)
A.k5=w([A.yZ],x.i)
A.DP=new B.b(A.k5,null)
A.tT=new C.a("\u1782\u17bb\u178e\u179b\u17c1\u1781",null)
A.is=w([A.tT],x.i)
A.EV=new B.b(A.is,null)
A.q3=new C.a("\u17e6 * \u17e4",null)
A.iO=w([A.q3],x.i)
A.yA=new B.d(null,A.iO,null)
A.ei=w([A.yA],x.i)
A.Ef=new B.b(A.ei,null)
A.tA=new C.a("\u17e2\u17e4",null)
A.fy=w([A.tA],x.i)
A.zR=new B.d(null,A.fy,null)
A.jQ=w([A.zR],x.i)
A.D_=new B.b(A.jQ,null)
A.ed=w([A.DP,A.EV,A.Ef,A.D_],x.i)
A.Gt=new B.o(A.ed,null)
A.ow=new C.a("/",null)
A.jD=w([A.ow],x.i)
A.y3=new B.d(null,A.jD,null)
A.hn=w([A.y3],x.i)
A.Cz=new B.b(A.hn,null)
A.pe=new C.a("\u1785\u17c2\u1780\u179b\u17c1\u1781",null)
A.eb=w([A.pe],x.i)
A.Fw=new B.b(A.eb,null)
A.qW=new C.a("\u17e5\u17e0 / \u17e2",null)
A.nj=w([A.qW],x.i)
A.xy=new B.d(null,A.nj,null)
A.cV=w([A.xy],x.i)
A.Da=new B.b(A.cV,null)
A.tl=new C.a("\u17e2\u17e5",null)
A.dB=w([A.tl],x.i)
A.yJ=new B.d(null,A.dB,null)
A.fD=w([A.yJ],x.i)
A.Dn=new B.b(A.fD,null)
A.iF=w([A.Cz,A.Fw,A.Da,A.Dn],x.i)
A.GY=new B.o(A.iF,null)
A.un=new C.a("%",null)
A.ka=w([A.un],x.i)
A.zd=new B.d(null,A.ka,null)
A.lj=w([A.zd],x.i)
A.DA=new B.b(A.lj,null)
A.qX=new C.a("\u179f\u17c6\u178e\u179b\u17cb\u1793\u17c3\u1780\u17b6\u179a\u1785\u17c2\u1780 (Modulo)",null)
A.lL=w([A.qX],x.i)
A.FJ=new B.b(A.lL,null)
A.tO=new C.a("\u17e1\u17e0 % \u17e3",null)
A.eu=w([A.tO],x.i)
A.xV=new B.d(null,A.eu,null)
A.i5=w([A.xV],x.i)
A.CX=new B.b(A.i5,null)
A.po=new C.a("\u17e1",null)
A.kJ=w([A.po],x.i)
A.xA=new B.d(null,A.kJ,null)
A.kn=w([A.xA],x.i)
A.Em=new B.b(A.kn,null)
A.hw=w([A.DA,A.FJ,A.CX,A.Em],x.i)
A.GC=new B.o(A.hw,null)
A.uP=new C.a("==",null)
A.cx=w([A.uP],x.i)
A.z5=new B.d(null,A.cx,null)
A.vA=new C.a("!=",null)
A.lv=w([A.vA],x.i)
A.xi=new B.d(null,A.lv,null)
A.mM=w([A.z5,A.n,A.xi],x.i)
A.DY=new B.b(A.mM,null)
A.qI=new C.a("\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6, \u1798\u17b7\u1793\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6",null)
A.df=w([A.qI],x.i)
A.EI=new B.b(A.df,null)
A.rx=new C.a("\u17e5 == \u17e5",null)
A.eg=w([A.rx],x.i)
A.xm=new B.d(null,A.eg,null)
A.cu=w([A.xm],x.i)
A.EM=new B.b(A.cu,null)
A.l5=w([A.DY,A.EI,A.EM,A.a5],x.i)
A.GA=new B.o(A.l5,null)
A.rS=new C.a("\u1793\u17b7\u1784",null)
A.jr=w([A.rS],x.i)
A.zA=new B.d(null,A.jr,null)
A.qp=new C.a("\u17ac",null)
A.ks=w([A.qp],x.i)
A.xX=new B.d(null,A.ks,null)
A.p2=new C.a("\u1798\u17b7\u1793",null)
A.dg=w([A.p2],x.i)
A.yl=new B.d(null,A.dg,null)
A.lk=w([A.zA,A.n,A.xX,A.n,A.yl],x.i)
A.DR=new B.b(A.lk,null)
A.pO=new C.a("\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6 AND, OR, NOT",null)
A.mL=w([A.pO],x.i)
A.CD=new B.b(A.mL,null)
A.qk=new C.a("(\u17e5 > \u17e2) \u1793\u17b7\u1784 (\u17e3 < \u17e4)",null)
A.h0=w([A.qk],x.i)
A.yj=new B.d(null,A.h0,null)
A.cG=w([A.yj],x.i)
A.D0=new B.b(A.cG,null)
A.k7=w([A.DR,A.CD,A.D0,A.a5],x.i)
A.GI=new B.o(A.k7,null)
A.eC=w([A.Gz,A.Gg,A.Gt,A.GY,A.GC,A.GA,A.GI],x.i)
A.Cj=new B.cG(A.eC,null)
A.eI=w([A.G8,A.Cj],x.i)
A.Ce=new B.cF(A.eI,null)
A.eB=w([A.Ce],x.i)
A.zX=new B.w(null,"table-responsive",null,null,null,A.eB,null)
A.bE=new B.Z("khmer_math.khmer","KHMER",'# \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1798\u17bd\u1799\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)',null,null)
A.eM=w([A.Ar,A.AT,A.zX,A.bE],x.i)
A.BC=new B.a9("numerals",A.eM,null)
A.v9=new C.a("\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 & \u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb (Punctuations) ",null)
A.wR=new B.R("#punctuations",null,"heading-anchor",null,null,null,A.e,null)
A.jA=w([A.v9,A.wR],x.i)
A.Af=new B.a8(A.jA,null)
A.t2=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1794\u178f\u17cb\u1794\u17c2\u1793\u178f\u17b6\u1798\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798\u1781\u17d2\u1798\u17c2\u179a \u178a\u17c4\u1799\u17a2\u1793\u17bb\u1789\u17d2\u1789\u17b6\u178f\u17b1\u17d2\u1799\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 \u17ac\u1780\u17c6\u178e\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u17d6",null)
A.m2=w([A.t2],x.i)
A.AV=new B.N(null,null,A.m2,null)
A.na=w([A.D],x.i)
A.ze=new B.d(null,A.na,null)
A.rT=new C.a(" (\u1781\u178e\u17d2\u178c) \u17ac ",null)
A.oL=new C.a(";",null)
A.lw=w([A.oL],x.i)
A.zS=new B.d(null,A.lw,null)
A.tu=new C.a(" (Semicolon)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 (Statement Terminator)\u17d4 \u1780\u17cf\u17a2\u17b6\u1785\u179a\u17c6\u179b\u1784\u1794\u17b6\u1793\u178a\u17c2\u179a\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1785\u17bb\u17c7\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1790\u17d2\u1798\u17b8\u17d4",null)
A.eh=w([A.ze,A.rT,A.zS,A.tu],x.i)
A.AK=new B.a5(null,null,null,A.eh,null)
A.pK=new C.a("\u17d5",null)
A.ey=w([A.pK],x.i)
A.zu=new B.d(null,A.ey,null)
A.ul=new C.a(" (\u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793)\u17d6 \u179f\u1789\u17d2\u1789\u17b6\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1790\u17b6\u1781\u178e\u17d2\u178c \u17ac\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u17d4",null)
A.ef=w([A.zu,A.ul],x.i)
A.AI=new B.a5(null,null,null,A.ef,null)
A.m8=w([A.E],x.i)
A.yb=new B.d(null,A.m8,null)
A.vE=new C.a(" (\u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179b\u17bb\u1780\u1780\u17bc\u178a \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u17d4",null)
A.kS=w([A.yb,A.vE],x.i)
A.AG=new B.a5(null,null,null,A.kS,null)
A.e8=w([A.AK,A.AI,A.AG],x.i)
A.H9=new B.bq(null,null,A.e8,null)
A.bJ=new B.Z("punctuations.khmer","KHMER",'# \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u1781\u178e\u17d2\u178c\u1781\u17d2\u1798\u17c2\u179a (\u17d4)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5\u17d4\n\u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f = "A"\u17d4\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b7\u1793\u17d2\u1791\u17bb:", \u1796\u17b7\u1793\u17d2\u1791\u17bb)\u17d4\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f:", \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f)\u17d4',null,null)
A.fc=w([A.Af,A.AV,A.H9,A.bJ],x.i)
A.Bw=new B.a9("punctuations",A.fc,null)
A.ld=w([A.BA,A.BC,A.Bw],x.i)
A.bT=new B.b0(A.ld,null)
A.or=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be...\u17ac\u1794\u17be...\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (Conditionals) ",null)
A.x5=new B.R("#conditionals",null,"heading-anchor",null,null,null,A.e,null)
A.hf=w([A.or,A.x5],x.i)
A.Ao=new B.a8(A.hf,null)
A.vy=new C.a("\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u1780\u17bc\u178a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.p3=new C.a(" (if), ",null)
A.rD=new C.a(" (else if), \u1793\u17b7\u1784 ",null)
A.rN=new C.a(" (else)\u17d6",null)
A.k8=w([A.vy,A.a2,A.p3,A.aV,A.rD,A.b_,A.rN],x.i)
A.B6=new B.N(null,null,A.k8,null)
A.bx=new B.Z("conditions.khmer","KHMER",'\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e2\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}',null,null)
A.cq=w([A.Ao,A.B6,A.bx],x.i)
A.BD=new B.a9("conditionals",A.cq,null)
A.oN=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loops) ",null)
A.xb=new B.R("#while-loop",null,"heading-anchor",null,null,null,A.e,null)
A.h_=w([A.oN,A.xb],x.i)
A.Ah=new B.a8(A.h_,null)
A.am=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 ",null)
A.rY=new C.a(" (while loop) \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u179f\u17b6\u179a\u17a1\u17be\u1784\u179c\u17b7\u1789\u178a\u179a\u17b6\u1794\u178e\u17b6\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u178f\u17c2\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3 ",null)
A.j3=w([A.am,A.a0,A.rY,A.a1,A.E],x.i)
A.AO=new B.N(null,null,A.j3,null)
A.bs=new B.Z("while_loop.khmer","KHMER",'# \u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799\u1796\u17b8 \u17e5 \u178a\u179b\u17cb \u17e1\n\u178f\u17b6\u17c6\u1784 \u1785\u17c6\u1793\u17bd\u1793 = \u17e5\n\n\u1781\u178e\u17c8 (\u1785\u17c6\u1793\u17bd\u1793 > \u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799:", \u1785\u17c6\u1793\u17bd\u1793)\n    \u1785\u17c6\u1793\u17bd\u1793 = \u1785\u17c6\u1793\u17bd\u1793 - \u17e1\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\ud83d\ude80 \u1794\u17b6\u1789\u17cb\u1794\u1784\u17d2\u17a0\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799!")',null,null)
A.kl=w([A.Ah,A.AO,A.bs],x.i)
A.Bq=new B.a9("while-loop",A.kl,null)
A.t_=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loops) ",null)
A.wU=new B.R("#for-loop",null,"heading-anchor",null,null,null,A.e,null)
A.iN=w([A.t_,A.wU],x.i)
A.Ai=new B.a8(A.iN,null)
A.rb=new C.a(" (for loop) \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u178a\u17c2\u179b\u1798\u17b6\u1793\u1780\u17c6\u178e\u178f\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb\u17d6",null)
A.e6=w([A.am,A.b0,A.rb],x.i)
A.B4=new B.N(null,null,A.e6,null)
A.bt=new B.Z("for_loop.khmer","KHMER",'# \u1798\u17c1\u1782\u17bb\u178e \u17e5\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u178f\u17b6\u179a\u17b6\u1784\u1798\u17c1\u1782\u17bb\u178e \u17e5 ---")\n\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e1; i <= \u17e5; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17e5 x", i, "=", \u17e5 * i)\n}',null,null)
A.k6=w([A.Ai,A.B4,A.bt],x.i)
A.Bp=new B.a9("for-loop",A.k6,null)
A.jF=w([A.BD,A.Bq,A.Bp],x.i)
A.bU=new B.b0(A.jF,null)
A.te=new C.a("\u2728 \u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1781\u17d2\u1798\u17c2\u179a\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1782\u17b6\u17c6\u1791\u17d2\u179a OOP \u1796\u17c1\u1789\u179b\u17c1\u1789",null)
A.i6=w([A.te],x.i)
A.BN=new B.ad(null,null,A.i6,null)
A.hQ=w([A.BN],x.i)
A.zU=new B.w(null,"hero-tag",null,null,null,A.hQ,null)
A.r0=new C.a("\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a \u2014 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.ji=w([A.r0],x.i)
A.A9=new B.h2(null)
A.vp=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.k3=w([A.vp],x.i)
A.b6=new B.a_(A.k3,null)
A.uE=new C.a(" \u1782\u17ba\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u178a\u17c2\u179b\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u1785\u1793\u17b6\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u17d4 \u179c\u17b6\u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179f\u17b7\u1780\u17d2\u179f\u17b6 \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u1794\u17c2\u1794 Object-Oriented Programming (OOP) \u1793\u17b7\u1784\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (\u17e0-\u17e9) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u17d4",null)
A.mJ=w([A.b6,A.uE],x.i)
A.B1=new B.N("hero-lead",null,A.mJ,null)
A.p4=new C.a("\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179a\u17c0\u1793\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",null)
A.kC=w([A.p4],x.i)
A.wP=new B.R("#hello-world",null,"btn-primary-compact",null,null,null,A.kC,null)
A.pb=new C.a("\ud83c\udfae \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u179b\u17be Web Browser",null)
A.kI=w([A.pb],x.i)
A.wQ=new B.R("#playground",null,"btn-secondary",null,null,null,A.kI,null)
A.dV=w([A.wP,A.wQ],x.i)
A.zY=new B.w(null,"hero-buttons",null,null,null,A.dV,null)
A.jz=w([A.zU,A.A9,A.B1,A.zY],x.i)
A.A1=new B.w(null,"hero-banner",null,null,null,A.jz,null)
A.tr=new C.a("\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Introduction) ",null)
A.wS=new B.R("#intro",null,"heading-anchor",null,null,null,A.e,null)
A.f5=w([A.tr,A.wS],x.i)
A.Al=new B.a8(A.f5,null)
A.vt=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17be\u1798\u17d2\u1794\u17b8\u1780\u17b6\u178f\u17cb\u1794\u1793\u17d2\u1790\u1799\u179a\u1794\u17b6\u17c6\u1784\u1797\u17b6\u179f\u17b6\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u179f\u17d0\u1799\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4 \u179f\u17b7\u179f\u17d2\u179f \u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f \u1793\u17b7\u1784\u17a2\u17d2\u1793\u1780\u179a\u17c0\u1793\u178a\u17c6\u1794\u17bc\u1784\u17a2\u17b6\u1785\u1799\u179b\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u17a2\u17c6\u1796\u17b8\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6\u1793\u17c3\u1780\u17bc\u178a (Logic) \u178f\u17b6\u1798\u179a\u1799\u17c8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1781\u17d2\u1798\u17c2\u179a\u1792\u1798\u17d2\u1798\u1787\u17b6\u178f\u17b7 \u178a\u17bc\u1785\u1787\u17b6 ",null)
A.oz=new C.a(" \u1793\u17b7\u1784 ",null)
A.fV=w([A.vt,A.a3,A.n,A.aW,A.n,A.a2,A.n,A.a0,A.n,A.a4,A.oz,A.I,A.D],x.i)
A.B7=new B.N(null,null,A.fV,null)
A.pZ=new C.a("\ud83d\udca1",null)
A.mm=w([A.pZ],x.i)
A.A7=new B.w(null,"callout-icon",null,null,null,A.mm,null)
A.rV=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u1796\u17b7\u179f\u17c1\u179f\u17d6 ",null)
A.mb=w([A.rV],x.i)
A.BO=new B.a_(A.mb,null)
A.td=new C.a("\u179a\u17b6\u179b\u17cb\u1780\u17bc\u178a\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a\u1793\u17c1\u17c7 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 ",null)
A.tZ=new C.a("\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Run)",null)
A.hk=w([A.tZ],x.i)
A.C6=new B.a_(A.hk,null)
A.tR=new C.a(" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a \u1793\u17b7\u1784\u1791\u179f\u17d2\u179f\u1793\u17b6\u179b\u1791\u17d2\u1792\u1795\u179b\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u179b\u17be Browser \u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb!",null)
A.lx=w([A.BO,A.td,A.C6,A.tR],x.i)
A.zT=new B.w(null,"callout-content",null,null,null,A.lx,null)
A.ln=w([A.A7,A.zT],x.i)
A.zZ=new B.w(null,"callout callout-info",null,null,null,A.ln,null)
A.mC=w([A.Al,A.B7,A.zZ],x.i)
A.Bo=new B.a9("intro",A.mC,null)
A.qS=new C.a("\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Installation & Setup) ",null)
A.wT=new B.R("#install",null,"heading-anchor",null,null,null,A.e,null)
A.ma=w([A.qS,A.wT],x.i)
A.Aj=new B.a8(A.ma,null)
A.oI=new C.a("\u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1798\u17bd\u1799 ",null)
A.os=new C.a(" \u1798\u17b6\u1793\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b \u1793\u17b7\u1784\u179a\u17a0\u17d0\u179f\u17d4 \u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u178f\u17b6\u1798\u179a\u1799\u17c8 ",null)
A.uo=new C.a("Command Line Tool (CLI)",null)
A.ew=w([A.uo],x.i)
A.C_=new B.a_(A.ew,null)
A.vu=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1795\u17d2\u1791\u17b6\u179b\u17cb \u17ac\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 ",null)
A.uY=new C.a("Khmer IDE",null)
A.eO=w([A.uY],x.i)
A.C5=new B.a_(A.eO,null)
A.qt=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u17d4",null)
A.m1=w([A.oI,A.b6,A.os,A.C_,A.vu,A.C5,A.qt],x.i)
A.B8=new B.N(null,null,A.m1,null)
A.qV=new C.a("\u17e1. \u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792 (Prerequisites)",null)
A.kq=w([A.qV],x.i)
A.Aw=new B.bo(A.kq,null)
A.vI=new C.a("\u1798\u17bb\u1793\u1796\u17c1\u179b\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u178a\u17c6\u17a1\u17be\u1784 \u179f\u17bc\u1798\u1794\u17d2\u179a\u17b6\u1780\u178a\u1790\u17b6\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1798\u17b6\u1793\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u178a\u17bc\u1785\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u17d6",null)
A.dW=w([A.vI],x.i)
A.AU=new B.N(null,null,A.dW,null)
A.rg=new C.a("\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u17d6 ",null)
A.mG=w([A.rg],x.i)
A.C4=new B.a_(A.mG,null)
A.qE=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a macOS, Linux, \u1793\u17b7\u1784 Windows (WSL / PowerShell)",null)
A.d_=w([A.C4,A.qE],x.i)
A.Ay=new B.a5(null,null,null,A.d_,null)
A.vK=new C.a("Dart SDK (3.0+)\u17d6 ",null)
A.no=w([A.vK],x.i)
A.C0=new B.a_(A.no,null)
A.qL=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a Engine \u1793\u17b7\u1784 Native Compiler \u179a\u1794\u179f\u17cb\u1797\u17b6\u179f\u17b6",null)
A.em=w([A.C0,A.qL],x.i)
A.AE=new B.a5(null,null,null,A.em,null)
A.qC=new C.a("Git\u17d6 ",null)
A.fT=w([A.qC],x.i)
A.BX=new B.a_(A.fT,null)
A.pP=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u1794\u17d2\u179a\u1797\u1796\u1780\u17bc\u178a \u17ac Releases",null)
A.eU=w([A.BX,A.pP],x.i)
A.AB=new B.a5(null,null,null,A.eU,null)
A.lh=w([A.Ay,A.AE,A.AB],x.i)
A.Ha=new B.bq(null,null,A.lh,null)
A.pL=new C.a("\u17e2. \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 CLI \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1791\u17bc\u1791\u17c5 (Universal One-Line Install)",null)
A.dU=w([A.pL],x.i)
A.Ax=new B.bo(A.dU,null)
A.qB=new C.a("\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1782\u17d2\u179a\u1794\u17cb\u179a\u17bc\u1794\u17a2\u17b6\u1785\u178a\u17c6\u17a1\u17be\u1784 ",null)
A.uy=new C.a("khmer",null)
A.i_=w([A.uy],x.i)
A.b4=new B.d(null,A.i_,null)
A.pz=new C.a(" CLI \u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u1781\u17d2\u179b\u17bd\u1793\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u178f\u17c2\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u17d6",null)
A.dz=w([A.qB,A.b4,A.pz],x.i)
A.B_=new B.N(null,null,A.dz,null)
A.bv=new B.Z("macOS / Linux (Terminal)","BASH","# \u178a\u17c6\u17a1\u17be\u1784\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u179b\u17be macOS \u1793\u17b7\u1784 Linux (\u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784 PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash",!1,null)
A.bG=new B.Z("Windows (PowerShell)","POWERSHELL","# \u178a\u17c6\u17a1\u17be\u1784\u179b\u17be Windows \u178f\u17b6\u1798\u179a\u1799\u17c8 PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex",!1,null)
A.bA=new B.Z("Dart Toolchain / Native Compilation","DART","# Compile \u1791\u17c5\u1787\u17b6 Native AOT Binary \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# \u17ac\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart run bin/khmer.dart main.khmer",!1,null)
A.uQ=new C.a("\u17e3. \u179a\u1794\u17c0\u1794\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780",null)
A.ig=w([A.uQ],x.i)
A.As=new B.bo(A.ig,null)
A.rf=new C.a("\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u17be\u1780\u1793\u17d2\u1791\u17bb\u1799 ",null)
A.rv=new C.a("\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17af\u1780\u179f\u17b6\u179a\u1790\u17d2\u1798\u17b8\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f (\u178a\u17bc\u1785\u1787\u17b6 VS Code, Cursor, \u17ac Nano)\u17d6",null)
A.hL=w([A.rf,A.aZ,A.rv],x.i)
A.Bd=new B.N(null,null,A.hL,null)
A.bw=new B.Z("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6 (my_app.khmer)","KHMER",'\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb"\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb\u1796\u17b7\u1797\u1796\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u1788\u17d2\u1798\u17c4\u17c7)',null,null)
A.rW=new C.a("\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1798\u1780\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 Terminal\u17d6",null)
A.i9=w([A.rW],x.i)
A.AR=new B.N(null,null,A.i9,null)
A.bH=new B.Z("Run Your Script","BASH","khmer my_app.khmer",!1,null)
A.vl=new C.a("\u17e4. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Interactive REPL",null)
A.dO=w([A.vl],x.i)
A.Av=new B.bo(A.dO,null)
A.ox=new C.a("\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u17ac\u1782\u178e\u1793\u17b6\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1797\u17d2\u179b\u17b6\u1798\u17d7 \u17a2\u17d2\u1793\u1780\u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 ",null)
A.t5=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1788\u17d2\u1798\u17c4\u17c7\u17af\u1780\u179f\u17b6\u179a\u1793\u17c4\u17c7\u1791\u17c1 \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17be\u1780 Interactive REPL Shell\u17d6",null)
A.mo=w([A.ox,A.b4,A.t5],x.i)
A.B3=new B.N(null,null,A.mo,null)
A.bK=new B.Z("Interactive Console","BASH","$ khmer\n\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0.0 REPL\n\u179c\u17b6\u1799 '\u1785\u17b6\u1780\u1785\u17c1\u1789' \u17ac\u1785\u17bb\u1785 Ctrl+D \u178a\u17be\u1798\u17d2\u1794\u17b8\u1785\u17b6\u1780\u1785\u17c1\u1789\u17d4\n\n>>> \u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\"\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794:\", \u1796\u17b7\u1793\u17d2\u1791\u17bb);\n\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794: \u17e9\u17e5\n>>> \u178f\u17b6\u17c6\u1784 \u1791\u17d2\u179c\u17c1\u178a\u1784 = \u1796\u17b7\u1793\u17d2\u1791\u17bb * \u17e2;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1791\u17d2\u179c\u17c1\u178a\u1784);\n\u17e1\u17e9\u17e0",!1,null)
A.tt=new C.a("\u17e5. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u179a\u1794\u17cb Text Editor \u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb (VS Code, Vim, Sublime, Nano)",null)
A.lH=w([A.tt],x.i)
A.At=new B.bo(A.lH,null)
A.pF=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u1795\u17d2\u178a\u179b\u17cb\u17a7\u1794\u1780\u179a\u178e\u17cd\u1787\u17c6\u1793\u17bd\u1799\u179f\u17d2\u179a\u17b6\u1794\u17cb\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f\u17d6",null)
A.mk=w([A.pF],x.i)
A.AS=new B.N(null,null,A.mk,null)
A.bI=new B.Z("Editor Integration Commands","BASH","# \u178a\u17c6\u17a1\u17be\u1784 Syntax Highlighting \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code / Cursor \u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\nkhmer editor vscode\n\n# \u17ac\u1794\u1784\u17d2\u1780\u17be\u178f Config \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Vim / Neovim, Sublime Text, \u17ac GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# \u1798\u17bb\u1781\u1784\u17b6\u179a Live-Reload: \u178f\u17b6\u1798\u178a\u17b6\u1793 \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u1796\u17c1\u179b\u17a2\u17d2\u1793\u1780\u1785\u17bb\u1785 Save \u1780\u17d2\u1793\u17bb\u1784 Editor \u178e\u17b6\u1798\u17bd\u1799\nkhmer watch my_app.khmer\n\n# \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Linter)\nkhmer check my_app.khmer",!1,null)
A.rq=new C.a("\u17e6. \u1787\u1798\u17d2\u179a\u17be\u179f\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798 GUI & Web IDE",null)
A.mK=w([A.rq],x.i)
A.Au=new B.bo(A.mK,null)
A.to=new C.a("\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Terminal CLI \u17a2\u17d2\u1793\u1780\u1780\u17cf\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u178a\u17c2\u179b\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17d6",null)
A.dm=w([A.to],x.i)
A.B0=new B.N(null,null,A.dm,null)
A.vc=new C.a("Web Playground (\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178f\u17b6\u1798 Web Browser)\u17d6 ",null)
A.fO=w([A.vc],x.i)
A.C2=new B.a_(A.fO,null)
A.q2=new C.a("\u17a2\u17d2\u1793\u1780\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u17a1\u17be\u1799! \u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179a\u1798\u17bc\u179a\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1795\u17d2\u1793\u17c2\u1780 ",null)
A.pE=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb",null)
A.li=w([A.pE],x.i)
A.x0=new B.R("#playground",null,null,null,null,null,A.li,null)
A.rM=new C.a(" \u1793\u17c5\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u1793\u17c3\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u179b\u17be Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u17d4",null)
A.jh=w([A.C2,A.q2,A.x0,A.rM],x.i)
A.AH=new B.a5(null,null,null,A.jh,null)
A.tU=new C.a("Khmer IDE (\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Desktop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb macOS / Windows)\u17d6 ",null)
A.cw=w([A.tU],x.i)
A.BT=new B.a_(A.cw,null)
A.vv=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 IDE \u178a\u17be\u1798\u178a\u17c2\u179b\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799 Flutter \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c Virtual Khmer Keypad \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1781\u17d2\u1798\u17c2\u179a\u179a\u17a0\u17d0\u179f, Syntax Highlighting, Tabs \u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u17af\u1780\u179f\u17b6\u179a\u1785\u17d2\u179a\u17be\u1793, AST Visualizer, \u1793\u17b7\u1784 Terminal \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780\u17d4",null)
A.he=w([A.BT,A.vv],x.i)
A.AA=new B.a5(null,null,null,A.he,null)
A.hH=w([A.AH,A.AA],x.i)
A.Hc=new B.bq(null,null,A.hH,null)
A.hj=w([A.Aj,A.B8,A.Aw,A.AU,A.Ha,A.Ax,A.B_,A.bv,A.bG,A.bA,A.As,A.Bd,A.bw,A.AR,A.bH,A.Av,A.B3,A.bK,A.At,A.AS,A.bI,A.Au,A.B0,A.Hc],x.i)
A.Bu=new B.a9("install",A.hj,null)
A.u0=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (First Program: \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780) ",null)
A.x1=new B.R("#hello-world",null,"heading-anchor",null,null,null,A.e,null)
A.iK=w([A.u0,A.x1],x.i)
A.Ap=new B.a8(A.iK,null)
A.t1=new C.a('\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1794\u17d2\u179a\u1796\u17c3\u178e\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179a\u17c0\u1793\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1782\u17ba\u1780\u17b6\u179a\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b6\u1780\u17d2\u1799 "\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780" (Hello World) \u1791\u17c5\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ',null)
A.nc=w([A.t1,A.aR,A.E],x.i)
A.AY=new B.N(null,null,A.nc,null)
A.bz=new B.Z("hello_world.khmer","KHMER",'# \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',null,null)
A.dl=w([A.Ap,A.AY,A.bz],x.i)
A.Bm=new B.a9("hello-world",A.dl,null)
A.fE=w([A.A1,A.Bo,A.Bu,A.Bm],x.i)
A.bV=new B.b0(A.fE,null)
A.ab=new B.i_("text",0,"text")
A.bX=new B.eH(null)
A.ba=new B.eq(null)
A.bL=new B.ez(null)
A.bW=new B.eG(null)
A.o1=new B.f4(null)
A.dv=w([A.bX,A.ba,A.bL,A.bW,A.o1],x.i)
A.A3=new B.w(null,"content-wrapper",null,null,null,A.dv,null)
A.ff=w([A.A3],x.i)
A.B=w([],x.i)
A.og=new B.I("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)","Introduction & Vision","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","intro overview vision cambodia \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784 \u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7 \u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c6\u1793\u17b7\u178f \u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799 \u17a0\u17c1\u178f\u17bb\u17a2\u17d2\u179c\u17b8 why features \u179b\u1780\u17d2\u1781\u178e\u17c8\u1796\u17b7\u179f\u17c1\u179f khmerlang \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1793\u17b7\u1784\u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799\u1793\u17c3\u1797\u17b6\u179f\u17b6 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)")
A.ol=new B.I("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)","Installation & Toolchain","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check \u178a\u17c6\u17a1\u17be\u1784 \u17a7\u1794\u1780\u179a\u178e\u17cd \u179a\u17c9\u17b6\u1793\u17cb \u1794\u1789\u17d2\u1787\u17b6 \u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a universal installer one line download \u1791\u17b6\u1789\u1799\u1780 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179a\u1794\u17c0\u1794\u178a\u17c6\u17a1\u17be\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u179b\u17be macOS, Linux, Windows")
A.o4=new B.I("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)","First Program","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","hello world \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 \u1794\u1784\u17d2\u17a0\u17b6\u1789 print first program \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 \u1780\u17bc\u178a\u178a\u17c6\u1794\u17bc\u1784 \u179f\u17bd\u179f\u17d2\u178f\u17b8 world script run output \u1785\u17c1\u1789\u179b\u1791\u17d2\u1792\u1795\u179b","\u179f\u179a\u179f\u17c1\u179a\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 \u1794\u1784\u17d2\u17a0\u17b6\u1789()")
A.oc=new B.I("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)","Variables & Data Types","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","variables data types \u178f\u17b6\u17c6\u1784 \u17a2\u1790\u17c1\u179a let var const string number boolean \u1796\u17b7\u178f \u1798\u17b7\u1793\u1796\u17b7\u178f \u1791\u1791\u17c1 null dynamic \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 \u1781\u17d2\u179f\u17c2\u17a2\u1780\u17d2\u179f\u179a \u179b\u17c1\u1781 \u1794\u17ca\u17bc\u179b\u17b8\u1793 true false assignment \u178f\u1798\u17d2\u179b\u17c3","\u1780\u17b6\u179a\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3\u1793\u17b6\u1793\u17b6")
A.o6=new B.I("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)","Khmer Numerals & Math Operators","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","numerals math \u17e0 \u17e1 \u17e2 \u17e3 \u17e4 \u17e5 \u17e6 \u17e7 \u17e8 \u17e9 \u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 modulo \u1793\u17b7\u1784 \u17ac \u1798\u17b7\u1793 operators \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 \u1782\u178e\u17b7\u178f arithmetic addition subtraction multiplication division calculate","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u17e0-\u17e9 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6")
A.o5=new B.I("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)","Khmer Punctuations","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","punctuations \u1781\u178e\u17d2\u178c \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 \u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785 semicolon statement terminator \u179f\u1789\u17d2\u1789\u17b6 \u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 \u17d5 \u17d6 syntax terminator end line \u1781\u178e\u17d2\u178c \u17d5","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 (\u17d5) \u1793\u17b7\u1784 semicolon (;)")
A.of=new B.I("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f","Conditionals (If / Else If / Else)","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","conditionals if else elif \u1794\u17be \u17ac\u1794\u17be \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f logic \u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a branching comparison \u179f\u17d2\u1798\u17be \u1792\u17c6\u1787\u17b6\u1784 \u178f\u17bc\u1785\u1787\u17b6\u1784 compare condition flow","\u1780\u17b6\u179a\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be (if), \u17ac\u1794\u17be (else if), \u1793\u17b7\u1784 \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (else)")
A.ob=new B.I("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)","While Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","while loop \u1781\u178e\u17c8 \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 iteration repeat cycle loop condition \u1792\u17d2\u179c\u17be\u178a\u178a\u17c2\u179b\u17d7 repeat until loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u178a\u178a\u17c2\u179b\u17d7\u178f\u17b6\u1798\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c")
A.oh=new B.I("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)","For Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","for loop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 count step range iteration \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb loop finite counter \u1787\u17bb\u17c6","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb")
A.ok=new B.I("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)","Function Declaration","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","function \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178f\u17d2\u179a\u17a1\u1794\u17cb return parameters arguments methods \u179c\u17b7\u1792\u17b8 \u1780\u17bc\u178a \u17a0\u17c5 call define \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a \u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb return value","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1793\u17b7\u1784 \u178f\u17d2\u179a\u17a1\u1794\u17cb")
A.o7=new B.I("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)","Recursive Functions & Fibonacci","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","recursion recursive fibonacci \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8 call self \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 fibonacci sequence math recursive algorithm \u1782\u178e\u1793\u17b6","\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u179b\u17c1\u1781 Fibonacci")
A.oa=new B.I("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (OOP)","Classes & Objects","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","class oop \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1794\u1784\u17d2\u1780\u17be\u178f constructor \u1793\u17c1\u17c7 this \u1790\u17d2\u1798\u17b8 new object instance \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb properties methods fields \u179c\u178f\u17d2\u1790\u17bb","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class), Constructor (\u1794\u1784\u17d2\u1780\u17be\u178f), \u1793\u17b7\u1784 Instance (\u1790\u17d2\u1798\u17b8)")
A.oe=new B.I("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)","Inheritance & Subclasses","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","inheritance extends \u1794\u1793\u17d2\u178f\u1796\u17b8 subclass superclass oop \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 parent child polymorph \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1794\u1793\u17d2\u178f\u1796\u17b8 (extends)")
A.od=new B.I("getters-setters","Getter & Setter (\u1799\u1780 & \u178a\u17b6\u1780\u17cb)","Getters and Setters","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","getter setter \u1799\u1780 \u178a\u17b6\u1780\u17cb \u1780\u17c6\u178e\u178f\u17cb get set property properties oop encapsulation computed property validation \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u1798\u17b6\u1787\u17b7\u1780","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Getter (\u1799\u1780) \u1793\u17b7\u1784 Setter (\u178a\u17b6\u1780\u17cb / \u1780\u17c6\u178e\u178f\u17cb) \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP")
A.o9=new B.I("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)","Standard Built-in Functions","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","builtins standard functions \u1794\u1784\u17d2\u17a0\u17b6\u1789 \u1794\u17d2\u179a\u179c\u17c2\u1784 \u1794\u17d2\u179a\u1797\u17c1\u1791 \u1794\u1793\u17d2\u1790\u17c2\u1798 \u1794\u1789\u17d2\u1785\u17bc\u179b \u178a\u1780\u1785\u17c1\u1789 \u179b\u17bb\u1794 \u1797\u17d2\u1787\u17b6\u1794\u17cb \u178f\u1798\u17d2\u179a\u17c0\u1794 \u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8 \u179f\u17d2\u179c\u17c2\u1784\u179a\u1780 \u1798\u17b6\u1793 \u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f \u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1 \u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e \u1794\u1784\u17d2\u1782\u178f\u17cb \u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7 \u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784 \u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6 \u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6 \u1785\u17c3\u178a\u1793\u17d2\u1799 \u1787\u17b6\u179b\u17c1\u1781 \u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a \u1787\u17b6\u178f\u1780\u17d2\u1780 \u1796\u17bb\u17c7 \u1780\u17b6\u178f\u17cb \u1787\u17c6\u1793\u17bd\u179f \u179f\u1798\u17d2\u17a2\u17b6\u178f \u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6 \u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785 \u1796\u17c1\u179b\u1793\u17c1\u17c7 \u17a2\u17b6\u1793 math string array helper abs sqrt pow round floor ceil max min random split substr replace trim upper lower insert pop join sort reverse indexOf contains now input","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u179a\u17b6\u1794\u17cb\u17d7\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Math, String, Array, Type Conversions \u1793\u17b7\u1784 System I/O")
A.o8=new B.I("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs (Flutter / Web)","Developer Tools & IDEs","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","ides tools flutter ide web ide vscode editor extension cli terminal syntax highlight theme programiz studio development \u17a7\u1794\u1780\u179a\u178e\u17cd \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a","\u17a7\u1794\u1780\u179a\u178e\u17cd\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a Flutter Desktop/Web IDE \u1793\u17b7\u1784 Extension \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code")
A.oj=new B.I("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)","Syntax Cheat Sheet Table","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","cheat sheet table syntax keywords \u178f\u17b6\u179a\u17b6\u1784 \u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 summary reference \u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u179f\u1784\u17d2\u1781\u17c1\u1794 \u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 full table quick reference cheat-sheet \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd","\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1793\u17b7\u1784\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c3\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a")
A.oi=new B.I("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","Live Interactive Web Playground","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","playground runner editor live code online ide \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784 \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 run web browser console live interactive interactive test execution output \u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u179b\u17be Web Browser \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb")
A.ac=w([A.og,A.ol,A.o4,A.oc,A.o6,A.o5,A.of,A.ob,A.oh,A.ok,A.o7,A.oa,A.oe,A.od,A.o9,A.o8,A.oj,A.oi],C.b6("C<I>"))
A.wx=new B.ab("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798")
A.wK=new B.ab("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798")
A.wz=new B.ab("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784")
A.wy=new B.ab("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3")
A.wC=new B.ab("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8")
A.wH=new B.ab("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7")
A.wE=new B.ab("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be/\u17ac\u1794\u17be/\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f")
A.wM=new B.ab("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8")
A.wN=new B.ab("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb")
A.wF=new B.ab("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd")
A.wA=new B.ab("recursion","Recursion (Fibonacci)")
A.wG=new B.ab("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor")
A.wJ=new B.ab("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)")
A.wD=new B.ab("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a")
A.wB=new B.ab("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs")
A.wL=new B.ab("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7")
A.wI=new B.ab("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a")
A.kK=w([A.wx,A.wK,A.wz,A.wy,A.wC,A.wH,A.wE,A.wM,A.wN,A.wF,A.wA,A.wG,A.wJ,A.wD,A.wB,A.wL,A.wI],C.b6("C<ab>"))
A.mR=w(['"',"'","\u201c","\u201d","\u2018","\u2019"],x.s)
A.nQ={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
A.ny=new C.P(A.nQ,["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],x.w)
A.nX={"\u17e0":0,"\u17e1":1,"\u17e2":2,"\u17e3":3,"\u17e4":4,"\u17e5":5,"\u17e6":6,"\u17e7":7,"\u17e8":8,"\u17e9":9}
A.J=new C.P(A.nX,["0","1","2","3","4","5","6","7","8","9"],x.w)
A.nS={hello:0,math:1,fibo:2,oop:3,grades:4}
A.nz=new C.P(A.nS,[y.n,'# \u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)','# \u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}','# \u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()','# \u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e5\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}'],x.w)
A.nW={points:0}
A.nM=new C.P(A.nW,["5 3 19 12 5 21 5 3"],x.w)
A.nR={"\u178f\u17b6\u17c6\u1784":0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":8,"\u1796\u17b7\u178f":9,"\u1798\u17b7\u1793\u1796\u17b7\u178f":10,"\u1791\u1791\u17c1":11,"\u1793\u17b7\u1784":12,"\u17ac":13,"\u1798\u17b7\u1793":14,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":15,"\u179c\u17b7\u1792\u17b8":16,"\u1793\u17c1\u17c7":17,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":18,"\u1790\u17d2\u1798\u17b8":19,"\u1794\u1793\u17d2\u178f\u1796\u17b8":20,"\u1799\u1780":21,get:22,"\u178a\u17b6\u1780\u17cb":23,"\u1780\u17c6\u178e\u178f\u17cb":24,set:25}
A.F=new B.u(3,"let")
A.T=new B.u(4,"print")
A.V=new B.u(5,"ifType")
A.H=new B.u(6,"elseIf")
A.W=new B.u(7,"elseType")
A.X=new B.u(8,"whileType")
A.Y=new B.u(9,"forType")
A.x=new B.u(10,"function")
A.K=new B.u(11,"returnType")
A.au=new B.u(12,"trueType")
A.av=new B.u(13,"falseType")
A.aw=new B.u(14,"nullType")
A.L=new B.u(15,"and")
A.M=new B.u(16,"or")
A.N=new B.u(17,"not")
A.O=new B.u(18,"classType")
A.ax=new B.u(20,"thisType")
A.ay=new B.u(21,"self")
A.az=new B.u(22,"newType")
A.aA=new B.u(23,"extendsType")
A.p=new B.u(24,"getter")
A.o=new B.u(25,"setter")
A.ah=new C.P(A.nR,[A.F,A.T,A.V,A.H,A.W,A.X,A.Y,A.x,A.K,A.au,A.av,A.aw,A.L,A.M,A.N,A.O,A.x,A.ax,A.ay,A.az,A.aA,A.p,A.p,A.o,A.o,A.o],C.b6("P<h,u>"))
A.nT={"\u1794\u1784\u17d2\u17a0\u17b6\u1789":0,"\u1794\u17d2\u179a\u179c\u17c2\u1784":1,"\u1794\u17d2\u179a\u1797\u17c1\u1791":2,"\u1794\u1793\u17d2\u1790\u17c2\u1798":3,"\u1794\u1789\u17d2\u1785\u17bc\u179b":4,"\u178a\u1780\u1785\u17c1\u1789":5,"\u179b\u17bb\u1794":6,"\u1797\u17d2\u1787\u17b6\u1794\u17cb":7,"\u178f\u1798\u17d2\u179a\u17c0\u1794":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1794\u1789\u17d2\u1787\u17b8":9,"\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780":10,"\u1798\u17b6\u1793":11,"\u178a\u17b6\u1785\u17cb\u1781\u17b6\u178f":12,"\u17ac\u179f\u1780\u17b6\u179a\u17c9\u17c1":13,"\u179f\u17d2\u179c\u17d0\u1799\u1782\u17bb\u178e":14,"\u1794\u1784\u17d2\u1782\u178f\u17cb":15,"\u1794\u1784\u17d2\u1782\u178f\u17cb\u1785\u17bb\u17c7":16,"\u1794\u1784\u17d2\u1782\u178f\u17cb\u17a1\u17be\u1784":17,"\u17a2\u178f\u17b7\u1794\u179a\u1798\u17b6":18,"\u17a2\u1794\u17d2\u1794\u1794\u179a\u1798\u17b6":19,"\u1785\u17c3\u178a\u1793\u17d2\u1799":20,"\u1787\u17b6\u179b\u17c1\u1781":21,"\u1787\u17b6\u17a2\u1780\u17d2\u179f\u179a":22,"\u1787\u17b6\u178f\u1780\u17d2\u1780":23,"\u1796\u17bb\u17c7":24,"\u1780\u17b6\u178f\u17cb":25,"\u1787\u17c6\u1793\u17bd\u179f":26,"\u179f\u1798\u17d2\u17a2\u17b6\u178f":27,"\u17a2\u1780\u17d2\u179f\u179a\u1792\u17c6":28,"\u17a2\u1780\u17d2\u179f\u179a\u178f\u17bc\u1785":29,"\u1796\u17c1\u179b\u1793\u17c1\u17c7":30,"\u17a2\u17b6\u1793":31,print:32,len:33,type:34,append:35,insert:36,pop:37,remove:38,join:39,sort:40,reverse:41,indexOf:42,contains:43,abs:44,sqrt:45,pow:46,round:47,floor:48,ceil:49,max:50,min:51,random:52,toNum:53,toInt:54,toStr:55,toBool:56,split:57,substr:58,replace:59,trim:60,upper:61,lower:62,now:63,input:64}
A.om=new B.c8(A.nT,65,x.O)
A.nY={"\u178f\u17b6\u17c6\u1784":0,"\u17a2\u1790\u17c1\u179a":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u179c\u17b7\u1792\u17b8":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":9,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":10,"\u1794\u1784\u17d2\u1780\u17be\u178f":11,"\u1793\u17c1\u17c7":12,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":13,"\u1790\u17d2\u1798\u17b8":14,"\u1794\u1793\u17d2\u178f\u1796\u17b8":15,"\u1799\u1780":16,"\u178a\u17b6\u1780\u17cb":17,"\u1780\u17c6\u178e\u178f\u17cb":18,get:19,set:20,"\u1796\u17b7\u178f":21,"\u1798\u17b7\u1793\u1796\u17b7\u178f":22,"\u1791\u1791\u17c1":23,"\u1793\u17b7\u1784":24,"\u17ac":25,"\u1798\u17b7\u1793":26}
A.on=new B.c8(A.nY,27,x.O)
A.oo=new B.iA(4,"center")
A.oy=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u179a\u17a0\u17d0\u179f:",null)
A.pY=new C.a("ESC",null)
A.q_=new C.a("\u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)",null)
A.qe=new C.a("\u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)",null)
A.rk=new C.a("\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc: ",null)
A.tx=new C.a(" | ",null)
A.tB=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799\u1798\u17c4\u1791\u1793\u1797\u17b6\u1796\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1781\u17d2\u1798\u17c2\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1782\u17d2\u1793\u17b6 | ",null)
A.u8=new C.a("\u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)",null)
A.u9=new C.a("\n",null)
A.uK=new C.a("\u17e1. \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 (Hello World)",null)
A.v2=new C.a("\u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)",null)
A.as=new B.u(0,"number")
A.at=new B.u(1,"string")
A.P=new B.u(19,"method")
A.k=new B.u(2,"identifier")
A.aB=new B.u(26,"plus")
A.Q=new B.u(27,"minus")
A.aC=new B.u(28,"star")
A.aD=new B.u(29,"slash")
A.aE=new B.u(30,"modulo")
A.R=new B.u(31,"assign")
A.aF=new B.u(32,"eq")
A.aG=new B.u(33,"neq")
A.aH=new B.u(34,"lt")
A.aI=new B.u(35,"gt")
A.aJ=new B.u(36,"lte")
A.aK=new B.u(37,"gte")
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
A.w_=C.aB("h")
A.v=new C.bi("#94a3b8")
A.a_=new C.bi("#34d399")
A.wb=new B.a7("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)",!1,null)
A.wc=new B.a7("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)",!1,null)
A.wd=new B.a7("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",!1,null)
A.we=new B.a7("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)",!1,null)
A.wf=new B.a7("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)",!1,null)
A.wg=new B.a7("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)",!1,null)
A.wh=new B.a7("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)",!1,null)
A.wi=new B.a7("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)",!1,null)
A.wj=new B.a7("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)",!1,null)
A.wk=new B.a7("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)",!1,null)
A.wl=new B.a7("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Declaration)",!1,null)
A.wm=new B.a7("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (`\u1794\u1784\u17d2\u1780\u17be\u178f`)",!1,null)
A.wn=new B.a7("ides","Flutter & Web IDEs",!1,null)
A.wo=new B.a7("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",!0,"\u1795\u17d2\u1791\u17b6\u179b\u17cb")
A.wp=new B.a7("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)",!1,null)
A.wq=new B.a7("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)",!1,null)
A.wr=new B.a7("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)",!1,null)
A.w5=new C.bi("#f87171")
A.aN=new C.aT(null,null,null,null,null,A.w5,null,null,null,null,null)
A.aP=new C.aT(null,null,null,null,null,A.a_,null,null,null,null,null)
A.aM=new C.bi("#38bdf8")
A.wu=new C.aT(null,null,null,null,null,A.aM,null,null,A.aa,null,null)
A.bM=new B.eC("flex",4,"flex")
A.b9=new B.hi(2,"center")
A.ww=new C.aT(A.bM,null,null,null,A.b9,null,null,null,null,null,null)
A.bp=new B.fS()
A.aO=new C.aT(null,null,null,null,null,A.aM,null,null,null,A.bp,null)
A.o_={target:0,rel:1}
A.ae=new C.P(A.o_,["_blank","noopener noreferrer"],x.w)
A.uu=new C.a("Releases & Binaries",null)
A.iE=w([A.uu],x.i)
A.wV=new B.R("https://github.com/sengson-great/KhmerLang/releases",null,null,A.aO,A.ae,null,A.iE,null)
A.aj={width:0,height:1,viewBox:2,fill:3}
A.nJ=new C.P(A.aj,["15","15","0 0 24 24","currentColor"],x.w)
A.Bl=new B.h9(null)
A.lG=w([A.Bl],x.i)
A.b7=new B.aY(null,A.nJ,A.lG,null)
A.tC=new C.a("\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",null)
A.lY=w([A.tC],x.i)
A.BH=new B.ad(null,null,A.lY,null)
A.k_=w([A.b7,A.BH],x.i)
A.wW=new B.R("#playground","nav-btn-playground","btn-primary-compact",null,null,null,A.k_,null)
A.uX=new C.a("GitHub Repository",null)
A.jx=w([A.uX],x.i)
A.x_=new B.R(y.b,null,null,A.aO,A.ae,null,A.jx,null)
A.oT=new C.a("\u1785",null)
A.cC=w([A.oT],x.i)
A.A6=new B.w(null,"brand-logo-badge",null,null,null,A.cC,null)
A.vN=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a ",null)
A.vf=new C.a("v1.0.0",null)
A.kh=w([A.vf],x.i)
A.BI=new B.ad("brand-version-badge",null,A.kh,null)
A.dk=w([A.vN,A.BI],x.i)
A.zW=new B.w(null,"brand-title",null,null,null,A.dk,null)
A.ru=new C.a("KhmerChar Programming Language",null)
A.hp=w([A.ru],x.i)
A.zV=new B.w(null,"brand-subtitle",null,null,null,A.hp,null)
A.c4=w([A.zW,A.zV],x.i)
A.A8=new B.w(null,"brand-text",null,null,null,A.c4,null)
A.fh=w([A.A6,A.A8],x.i)
A.x7=new B.R("#intro",null,"brand-link",null,null,null,A.fh,null)
A.nV={target:0,rel:1,"aria-label":2,title:3}
A.nA=new C.P(A.nV,["_blank","noopener noreferrer","GitHub Repository","GitHub"],x.w)
A.nK=new C.P(A.aj,["19","19","0 0 24 24","currentColor"],x.w)
A.t={d:0}
A.nF=new C.P(A.t,["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],x.w)
A.Bj=new B.bp(A.nF,null)
A.lB=w([A.Bj],x.i)
A.C8=new B.aY(null,A.nK,A.lB,null)
A.hd=w([A.C8],x.i)
A.x9=new B.R(y.b,null,"header-action-btn",null,A.nA,null,A.hd,null)
A.rE=new C.a("\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7",null)
A.fR=w([A.rE],x.i)
A.A_=new B.w(null,"toc-title",null,null,null,A.fR,null)
A.pp=new C.a("\u1785\u17bb\u1785\u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17bb\u1780\u179a\u1780\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791",null)
A.l6=w([A.pp],x.i)
A.BM=new B.ad(null,null,A.l6,null)
A.rG=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.fw=w([A.rG],x.i)
A.BE=new B.ad(null,null,A.fw,null)
A.dD=w([A.BM,A.BE],x.i)
A.A0=new B.w(null,"search-modal-footer",null,null,null,A.dD,null)
A.bN=new B.eC("none",0,"none")
A.wt=new C.aT(A.bN,null,null,null,null,null,null,null,null,null,null)
A.A4=new B.w(null,null,A.wt,null,null,A.B,null)
A.AN=new B.h5(null)
A.qb=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u2014 \u179a\u1780\u17d2\u179f\u17b6\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1782\u17d2\u179a\u1794\u17cb\u1799\u17c9\u17b6\u1784 \xa9 2026 \u178a\u17c4\u1799 Veng Chhuong \u1793\u17b7\u1784\u179f\u17a0\u1782\u1798\u1793\u17cd\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",null)
A.iX=w([A.qb],x.i)
A.AP=new B.N(null,null,A.iX,null)
A.oP=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Terminal Output)",null)
A.lb=w([A.oP],x.i)
A.BF=new B.ad("code-output-title",null,A.lb,null)
A.oY=new C.a("\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)",null)
A.d7=w([A.oY],x.i)
A.BG=new B.ad(null,null,A.d7,null)
A.ux=new C.a("\u179b\u17bb\u1794",null)
A.lq=w([A.ux],x.i)
A.BJ=new B.ad(null,null,A.lq,null)
A.oK=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Console Output)",null)
A.hF=w([A.oK],x.i)
A.BK=new B.ad("console-pane-title",null,A.hF,null)
A.pf=new C.a("\u2713 \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 (Check)",null)
A.jc=w([A.pf],x.i)
A.BL=new B.ad(null,null,A.jc,null)
A.C={width:0,height:1,viewBox:2,fill:3,stroke:4,"stroke-width":5}
A.af=new C.P(A.C,["20","20","0 0 24 24","none","currentColor","2"],x.w)
A.nB=new C.P(A.t,["M4 6h16M4 12h16M4 18h16"],x.w)
A.Bf=new B.bp(A.nB,null)
A.ly=w([A.Bf],x.i)
A.C7=new B.aY(null,A.af,A.ly,null)
A.ag=new C.P(A.C,["18","18","0 0 24 24","none","currentColor","2"],x.w)
A.nD=new C.P(A.t,["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],x.w)
A.Bh=new B.bp(A.nD,null)
A.lz=w([A.Bh],x.i)
A.C9=new B.aY("theme-icon-moon",A.ag,A.lz,null)
A.nH=new C.P(A.C,["14","14","0 0 24 24","none","currentColor","2"],x.w)
A.nE=new C.P(A.t,["M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],x.w)
A.Bi=new B.bp(A.nE,null)
A.lA=w([A.Bi],x.i)
A.Ca=new B.aY(null,A.nH,A.lA,null)
A.nI=new C.P(A.C,["16","16","0 0 24 24","none","currentColor","2"],x.w)
A.ai={cx:0,cy:1,r:2}
A.nP=new C.P(A.ai,["11","11","8"],x.w)
A.xe=new B.ek(A.nP,null)
A.nC=new C.P(A.t,["m21 21-4.3-4.3"],x.w)
A.Bg=new B.bp(A.nC,null)
A.ad=w([A.xe,A.Bg],x.i)
A.Cb=new B.aY(null,A.nI,A.ad,null)
A.Cc=new B.aY(null,A.af,A.ad,null)
A.nO=new C.P(A.ai,["12","12","4"],x.w)
A.xd=new B.ek(A.nO,null)
A.nG=new C.P(A.t,["M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"],x.w)
A.Bk=new B.bp(A.nG,null)
A.mN=w([A.xd,A.Bk],x.i)
A.Cd=new B.aY("theme-icon-sun",A.ag,A.mN,null)})();(function staticFields(){$.il=0
$.ds=B.pC()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"qJ","lG",()=>{B.or()
return $.il})})()};
(a=>{a["v10Jx4GIaWeLUT3fNkPPbovOEM0="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
