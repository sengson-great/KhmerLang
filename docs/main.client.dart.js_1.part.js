((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
mO(){throw C.c(C.aj("Cannot modify constant Set"))},
nk(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return C.n(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
nj(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.b.bL(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
ng(){return Date.now()},
ni(){var w,v
if($.hW!==0)return
$.hW=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.hW=1e6
$.dd=new B.hV(v)},
cJ:function cJ(){},
bX:function bX(d,e,f){this.a=d
this.b=e
this.$ti=f},
hV:function hV(d){this.a=d},
p7(d){var w=B.nk(d,null)
if(w!=null)return w
throw C.c(C.hu(d,null))},
oT(d){var w=B.nj(d)
if(w!=null)return w
throw C.c(C.hu("Invalid double",d))},
k1(d){return new C.aZ(d)},
i0:function i0(){this.b=this.a=0},
kG(d,e,f){return new B.bd(f,e,d,null)},
pa(d,e,f,g){return new B.Z(e,g,f,d,null)},
b6(d,e,f,g,h,i){return new B.fJ(h,f,i,e,g,d,null)},
fU(d,e,f){return new B.fT(f,e,d,null)},
lL(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
m0(d,e,f,g){var w=null
return new B.P(g,w,e,w,w,f,d,w)},
bw(d,e,f){return new B.a3(e,f,d,null)},
fI:function fI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
fM:function fM(d,e,f){this.d=d
this.w=e
this.a=f},
fP:function fP(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
fO:function fO(d){this.a=d},
a7:function a7(d,e){this.w=d
this.a=e},
b9:function b9(d,e){this.w=d
this.a=e},
fR:function fR(d){this.a=d},
fS:function fS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
a8:function a8(d,e,f){this.c=d
this.w=e
this.a=f},
r:function r(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bd:function bd(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
Z:function Z(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.a=h},
K:function K(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
fW:function fW(d,e,f){this.d=d
this.w=e
this.a=f},
fJ:function fJ(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
e5:function e5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.z=f
_.Q=g
_.at=h
_.ax=i
_.a=j
_.$ti=k},
hB:function hB(d,e,f){this.c=d
this.a=e
this.b=f},
fQ:function fQ(d,e,f){this.f=d
this.x=e
this.a=f},
fT:function fT(d,e,f,g){var _=this
_.d=d
_.e=e
_.Q=f
_.a=g},
fX:function fX(d,e,f,g){var _=this
_.at=d
_.ch=e
_.CW=f
_.a=g},
fY:function fY(d,e,f,g,h){var _=this
_.CW=d
_.cy=e
_.db=f
_.dx=g
_.a=h},
aN:function aN(d,e,f,g){var _=this
_.f=d
_.x=e
_.z=f
_.a=g},
e4:function e4(d,e){this.Q=d
this.a=e},
bb:function bb(d,e){this.y=d
this.a=e},
fV:function fV(d){this.a=d},
cp:function cp(d,e){this.w=d
this.a=e},
cr:function cr(d,e){this.w=d
this.a=e},
cq:function cq(d,e){this.w=d
this.a=e},
as:function as(d,e){this.as=d
this.a=e},
D:function D(d,e){this.w=d
this.a=e},
e:function e(d,e){this.z=d
this.a=e},
P:function P(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.a=k},
f:function f(d,e,f){this.d=d
this.w=e
this.a=f},
a3:function a3(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
a_:function a_(d,e){this.w=d
this.a=e},
em:function em(d,e,f){this.c=d
this.a=e
this.b=f},
fF:function fF(d,e,f){this.a=d
this.b=e
this.c=f},
hc:function hc(d,e){this.a=d
this.b=e},
h0:function h0(d,e){this.a=d
this.b=e},
dP:function dP(d,e){this.b=d
this.c=e},
i4:function i4(d,e){this.a=d
this.b=e},
hs:function hs(d,e){this.a=d
this.b=e},
i5:function i5(){},
fD:function fD(){},
fs:function fs(d,e){this.a=d
this.b=e},
aQ:function aQ(d,e){this.b=d
this.a=e},
fm:function fm(d,e,f,g,h,i,j){var _=this
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
aT:function aT(){},
ah:function ah(){},
eX:function eX(d,e,f,g){var _=this
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
u:function u(){},
eY:function eY(d,e,f){var _=this
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
mC(){return new B.aX(null)},
aX:function aX(d){this.a=d},
cu:function cu(){var _=this
_.e=_.d=!1
_.f="intro"
_.r=!0
_.c=_.a=null},
h9:function h9(d){this.a=d},
h8:function h8(d){this.a=d},
h3:function h3(d){this.a=d},
h2:function h2(d){this.a=d},
h1:function h1(d,e){this.a=d
this.b=e},
h6:function h6(d){this.a=d},
h5:function h5(d){this.a=d},
h7:function h7(d){this.a=d},
h4:function h4(d){this.a=d},
V:function V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fd:function fd(){var _=this
_.f=_.e=_.d=!1
_.r=""
_.w=0
_.x=!1
_.c=_.a=null},
ih:function ih(d){this.a=d},
ii:function ii(d){this.a=d},
ig:function ig(d){this.a=d},
ij:function ij(d){this.a=d},
ik:function ik(d,e){this.a=d
this.b=e},
il:function il(d,e){this.a=d
this.b=e},
im:function im(d){this.a=d},
io:function io(d){this.a=d},
ep:function ep(d){this.a=d},
es:function es(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
hy:function hy(d){this.a=d},
hz:function hz(d){this.a=d},
hA:function hA(d){this.a=d},
c8:function c8(d){this.a=d},
ft:function ft(){var _=this
_.d="hello"
_.e=""
_.f='\u179f\u17bc\u1798\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u1798\u17be\u179b\u179b\u1791\u17d2\u1792\u1795\u179b...'
_.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"
_.w=!1
_.c=_.a=null},
iJ:function iJ(d,e){this.a=d
this.b=e},
iI:function iI(d,e){this.a=d
this.b=e},
iK:function iK(d){this.a=d},
iL:function iL(d,e){this.a=d
this.b=e},
iM:function iM(d,e){this.a=d
this.b=e},
iF:function iF(d,e){this.a=d
this.b=e},
iG:function iG(d,e){this.a=d
this.b=e},
iH:function iH(d){this.a=d},
iO:function iO(d){this.a=d},
iP:function iP(d){this.a=d},
iQ:function iQ(d){this.a=d},
iR:function iR(d){this.a=d},
iS:function iS(d){this.a=d},
iN:function iN(d,e){this.a=d
this.b=e},
cb:function cb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fx:function fx(){this.d=""
this.c=this.a=null},
iW:function iW(){},
iX:function iX(d,e){this.a=d
this.b=e},
iY:function iY(){},
iZ:function iZ(){},
j0:function j0(d){this.a=d},
j1:function j1(d){this.a=d},
j_:function j_(d,e){this.a=d
this.b=e},
j2:function j2(d){this.a=d},
j3:function j3(d){this.a=d},
j4:function j4(d,e){this.a=d
this.b=e},
eV:function eV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
hZ:function hZ(d,e){this.a=d
this.b=e},
a2:function a2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2:function f2(d,e,f){this.c=d
this.d=e
this.a=f},
i3:function i3(d,e){this.a=d
this.b=e},
a5:function a5(d,e){this.a=d
this.b=e},
B:function B(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ea:function ea(d){this.a=d},
ej:function ej(d){this.a=d},
eq:function eq(d){this.a=d},
er:function er(d){this.a=d},
eP:function eP(d){this.a=d},
mb(d){var w=b.G,v=C.X(C.o(w.document).documentElement)
if(v!=null)v.setAttribute("data-theme",d)
C.o(C.o(w.window).localStorage).setItem("khmerlang-doc-theme",d)},
pi(d){C.o(b.G.window).addEventListener("keydown",C.lO(new B.jV(d)))},
jV:function jV(d){this.a=d},
z:function z(){},
db:function db(d){this.a=d},
bI:function bI(d){this.a=d},
bU:function bU(d){this.a=d},
da:function da(){},
cv:function cv(d){this.a=d},
dc:function dc(d){this.a=d},
bh:function bh(d){this.a=d},
dr:function dr(){},
ds:function ds(d,e){this.a=d
this.b=e},
aP:function aP(d,e,f){this.a=d
this.b=e
this.c=f},
cw:function cw(d,e){this.a=d
this.b=e},
c5:function c5(d,e){this.a=d
this.b=e},
d2:function d2(d,e,f){this.a=d
this.b=e
this.c=f},
c0:function c0(d,e){this.a=d
this.b=e},
cR:function cR(d,e,f){this.a=d
this.b=e
this.c=f},
cQ:function cQ(d,e){this.a=d
this.b=e},
d8:function d8(d,e){this.a=d
this.b=e},
du:function du(d,e){this.a=d
this.b=e},
de:function de(d){this.a=d},
cx:function cx(d){this.a=d},
c_:function c_(d,e,f){this.a=d
this.b=e
this.c=f},
dx:function dx(d,e){this.a=d
this.b=e},
cP:function cP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bC:function bC(d,e,f){this.a=d
this.b=e
this.c=f},
cB:function cB(d,e,f){this.a=d
this.b=e
this.c=f},
dh:function dh(d){this.a=d},
cO:function cO(d){this.a=d},
md(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.jm.p(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
fN(d){if(d==null)return"\u1791\u1791\u17c1"
if(C.fH(d))return d?"\u1796\u17b7\u178f":"\u1798\u17b7\u1793\u1796\u17b7\u178f"
if(typeof d=="number")return B.md(d===D.h.bJ(d)?D.f.i(D.h.aJ(d)):D.h.i(d))
if(C.ku(d))return B.md(D.f.i(d))
if(x.j.b(d))return"["+J.kS(d,new B.jF(),x.N).W(0,", ")+"]"
if(x.f.b(d))return"{"+d.gb_().al(0,new B.jG(),x.N).W(0,", ")+"}"
if(d instanceof B.bm)return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a.a+">"
if(d instanceof B.bk)return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a+">"
if(d instanceof B.bl)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+d.a+">"
if(d instanceof B.am)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785 "+d.a+">"
return J.N(d)},
oQ(d){var w=C.A(x.N,x.z),v=new B.jz(d),u=new B.jy(),t=new B.jB(),s=new B.jx()
w.k(0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789",new B.am("\u1794\u1784\u17d2\u17a0\u17b6\u1789",v))
w.k(0,"print",new B.am("print",v))
w.k(0,"\u1794\u17d2\u179a\u179c\u17c2\u1784",new B.am("\u1794\u17d2\u179a\u179c\u17c2\u1784",u))
w.k(0,"len",new B.am("len",u))
w.k(0,"\u1794\u17d2\u179a\u1797\u17c1\u1791",new B.am("\u1794\u17d2\u179a\u1797\u17c1\u1791",t))
w.k(0,"type",new B.am("type",t))
w.k(0,"\u1794\u1793\u17d2\u1790\u17c2\u1798",new B.am("\u1794\u1793\u17d2\u1790\u17c2\u1798",s))
w.k(0,"append",new B.am("append",s))
return new B.bg(w,null)},
jF:function jF(){},
jG:function jG(){},
bg:function bg(d,e){this.a=d
this.b=e},
am:function am(d,e){this.a=d
this.b=e},
bl:function bl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bk:function bk(d,e,f){this.a=d
this.b=e
this.c=f},
bm:function bm(d,e){this.a=d
this.b=e},
jz:function jz(d){this.a=d},
jA:function jA(){},
jy:function jy(){},
jB:function jB(){},
jx:function jx(){},
l5(d,e,f){return new B.hN(d,e,f,null)},
eL(d,e,f){return new B.hT(d,e,f,null)},
M(d){return new B.eT(d,null,null,null)},
cX:function cX(){},
hN:function hN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hT:function hT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT:function eT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQ:function eQ(d){this.a=d},
hC:function hC(d){this.a=d
this.b=$},
hD:function hD(d,e){this.a=d
this.b=e},
hE:function hE(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
hG:function hG(d,e){this.a=d
this.b=e},
l4(d){var w=new B.hM(d)
w.e=d.length
return w},
hM:function hM(d){var _=this
_.a=d
_.b=0
_.d=_.c=1
_.e=$},
eK:function eK(d){this.a=d
this.b=0},
ma(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new C.cd(""),a0=new B.i0()
$.kI()
i=$.dd.$0()
a0.a=i
a0.b=null
w=a0
v=new B.jU(d,null)
u=null
t=null
try{s=B.l4(a1)
r=s.cL()
q=new B.eK(r)
u=q.cK()
t=B.oQ(v)
i=t
h=new B.hC(i)
h.b=i
p=h
o=p.eA(u)
i=w
if(i.b==null)i.b=$.dd.$0()
n=C.A(x.N,x.z)
for(i=t.a,i=new C.aG(i,C.m(i).h("aG<1,2>")).gB(0);i.n();){g=i.d
g.toString
m=g
if(!(m.b instanceof B.am))J.h_(n,m.a,m.b)}i=d.a
g=B.k1(w.gbB())
return new B.cN("success",i.charCodeAt(0)==0?i:i,null,g)}catch(f){i=C.a0(f)
if(i instanceof B.cX){l=i
i=w
if(i.b==null)i.b=$.dd.$0()
i=e!=null
if(i)l.toString
if(i)l.d=e
i=d.a
g=l.bD()
l.cs()
l.toString
l.toString
return new B.cN("error",i.charCodeAt(0)==0?i:i,g,B.k1(w.gbB()))}else{k=i
i=w
if(i.b==null)i.b=$.dd.$0()
j=e!=null&&D.b.gcF(e)?e:"<source>"
i=d.a
g=C.j(k)
C.j(j)
C.j(k)
return new B.cN("error",i.charCodeAt(0)==0?i:i,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+g,B.k1(w.gbB()))}}},
oO(d){var w,v,u,t,s,r,q,p,o,n=null
try{w=B.l4(d)
v=w.cL()
u=new B.eK(v)
t=u.cK()
p=J.aD(v)
if(J.aD(t)!==0)C.ap(C.bu(J.mz(t)).a,null)
return new B.cz("success",p,null)}catch(o){p=C.a0(o)
if(p instanceof B.cX){s=p
p=n!=null
if(p)s.toString
if(p)s.d=n
p=s.bD()
s.cs()
s.toString
s.toString
return new B.cz("error",0,p)}else{r=p
q=n!=null&&D.b.gcF(n)?n:"<source>"
p=C.j(r)
C.j(q)
C.j(r)
return new B.cz("error",0,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+p)}}},
cN:function cN(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.w=g},
cz:function cz(d,e,f){this.a=d
this.b=e
this.d=f},
jU:function jU(d,e){this.a=d
this.b=e},
p:function p(d,e){this.a=d
this.b=e},
ai:function ai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nr(d,e){var w=$.F
if(w===D.e)return C.ki(d,x.M.a(e))
return C.ki(d,x.M.a(w.bx(e)))},
fK(d,e,f,g){return C.A(x.N,x.v)},
cj(d,e,f,g,h,i,j){var w=null
return new C.aK(w,i,h,d,w,e,j,f,g,w,w)},
p1(d){var w,v,u=d.split("\n"),t=C.b([],x.i)
for(w=0;v=u.length,w<v;++w){D.a.D(t,B.ob(u[w]))
if(w<v-1)D.a.j(t,A.nm)}return t},
ob(d){var w,v,u,t,s,r,q,p,o=null
if(D.b.cW(D.b.bL(d),"#")){w=x.i
return C.b([B.bw(C.b([new C.a(d,o)],w),"com",o)],w)}w=x.i
v=C.b([],w)
u=new C.cd("")
for(t=d.length,s=0;s<t;){if(!(s>=0))return C.n(d,s)
r=d[s]
if(r==="#"){t=u.a
if(t.length!==0){D.a.D(v,B.kw(t.charCodeAt(0)==0?t:t))
u.a=""}D.a.j(v,new B.a3("com",o,C.b([new C.a(D.b.ba(d,s),o)],w),o))
break}if(r==='"'||r==="'"){q=u.a
if(q.length!==0){D.a.D(v,B.kw(q.charCodeAt(0)==0?q:q))
u.a=""}p=s+1
for(;;){q=p<t
if(!(q&&d[p]!==r))break
if(!(p<t))return C.n(d,p)
p=d[p]==="\\"&&p+1<t?p+2:p+1}if(q)++p
D.a.j(v,new B.a3("str",o,C.b([new C.a(D.b.aq(d,s,p),o)],w),o))
s=p
continue}u.a+=r;++s}w=u.a
if(w.length!==0)D.a.D(v,B.kw(w.charCodeAt(0)==0?w:w))
return v},
kw(d){var w,v,u,t="(\\s+|[(){}\\[\\],;:=+\\-*/%<>!\u17d4\u17d5\u17d6])",s=C.b([],x.i),r=D.b.cV(d,C.c9(t)),q=C.c9(t).aU(0,d),p=C.az(q,C.m(q).h("i.E"))
for(w=0,v=0;v<r.length;++v){u=r[v]
if(u.length!==0)D.a.j(s,B.oD(u))
if(w<p.length){q=p[w].b
if(0>=q.length)return C.n(q,0)
q=q[0]
D.a.j(s,new C.a(q==null?"":q,null));++w}}return s},
oD(d){var w,v=null
if(A.k9.G(0,d))return B.bw(C.b([new C.a(d,v)],x.i),"kw",v)
else if(A.ka.G(0,d))return B.bw(C.b([new C.a(d,v)],x.i),"builtin",v)
else{w=C.c9("^[\u17e0-\u17e90-9]+(\\.[\u17e0-\u17e90-9]+)?$")
if(w.b.test(d))return B.bw(C.b([new C.a(d,v)],x.i),"num",v)}return new C.a(d,v)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[3],B)
A=c[4]
B.cJ.prototype={
j(d,e){C.m(this).c.a(e)
B.mO()}}
B.bX.prototype={
gl(d){return this.b},
gM(d){return this.b===0},
gB(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new C.bM(w,w.length,v.$ti.h("bM<1>"))},
G(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
B.i0.prototype={
gbB(){var w,v=this.b
if(v==null)v=$.dd.$0()
w=v-this.a
if($.kI()===1e6)return w
return w*1000}}
B.fI.prototype={
q(d){var w=this
return new C.v("aside",w.c,w.d,null,w.f,null,w.w,null)}}
B.fM.prototype={
q(d){var w=null
return new C.v("footer",w,this.d,w,w,w,this.w,w)}}
B.fP.prototype={
q(d){var w=null
return new C.v("header",this.c,this.d,w,w,w,this.w,w)}}
B.fO.prototype={
q(d){var w=null
return new C.v("h1",w,"doc-title",w,w,w,A.fH,w)}}
B.a7.prototype={
q(d){var w=null
return new C.v("h2",w,"section-heading",w,w,w,this.w,w)}}
B.b9.prototype={
q(d){var w=null
return new C.v("h3",w,"sub-heading",w,w,w,this.w,w)}}
B.fR.prototype={
q(d){var w=null
return new C.v("main",w,"docs-main-content",w,w,w,A.dH,w)}}
B.fS.prototype={
q(d){var w=this
return new C.v("nav",w.c,w.d,null,w.f,null,w.w,null)}}
B.a8.prototype={
q(d){var w=null
return new C.v("section",this.c,"doc-section",w,w,w,this.w,w)}}
B.r.prototype={
q(d){var w=this
return new C.v("div",w.c,w.d,w.e,w.f,w.r,w.w,null)}}
B.bd.prototype={
q(d){var w=null
return new C.v("ul",this.c,this.d,w,w,w,this.w,w)}}
B.Z.prototype={
q(d){var w=this,v=x.N
return new C.v("li",null,w.e,w.f,C.A(v,v),w.w,w.x,null)}}
B.K.prototype={
q(d){var w=null
return new C.v("p",w,this.d,this.e,w,w,this.w,w)}}
B.fW.prototype={
q(d){var w=null
return new C.v("pre",w,this.d,w,w,w,this.w,w)}}
B.fJ.prototype={
q(d){var w=this,v=x.N,u=C.A(v,v),t=w.y
if(t!=null)u.D(0,t)
v=C.A(v,x.v)
v.D(0,w.z)
v.D(0,B.fL().$1$1$onClick(null,x.H))
return new C.v("button",w.r,w.w,w.x,u,v,w.Q,null)}}
B.e5.prototype={
q(d){var w,v=this,u=null,t=x.N,s=C.A(t,t)
s.D(0,v.at)
s.k(0,"type",v.c.c)
s.k(0,"value",v.e)
w=B.lL(u)
if(w!=null)s.k(0,"checked",w)
w=B.lL(u)
if(w!=null)s.k(0,"indeterminate",w)
t=C.A(t,x.v)
t.D(0,v.ax)
t.D(0,B.fL().$1$2$onChange$onInput(u,u,v.$ti.c))
return new C.v("input",v.z,v.Q,u,s,t,u,u)}}
B.hB.prototype={
a7(){return"InputType."+this.b}}
B.fQ.prototype={
q(d){var w=null,v=x.N
return new C.v("label",w,w,this.f,C.A(v,v),w,this.x,w)}}
B.fT.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.k(0,"value",this.d)
if(this.e)v.k(0,"selected","")
return new C.v("option",w,w,w,v,w,this.Q,w)}}
B.fX.prototype={
q(d){var w=null,v=x.N,u=C.A(v,x.v)
u.D(0,this.ch)
u.D(0,B.fL().$1$2$onChange$onInput(w,w,x.a))
return new C.v("select",w,this.at,w,C.A(v,v),u,this.CW,w)}}
B.fY.prototype={
q(d){var w,v=this,u=null,t=x.N,s=C.A(t,t)
s.D(0,v.cy)
w=C.A(t,x.v)
w.D(0,v.db)
w.D(0,B.fL().$1$2$onChange$onInput(u,u,t))
return new C.v("textarea",u,v.CW,u,s,w,v.dx,u)}}
B.aN.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.x)
return new C.v("svg",this.f,w,w,v,w,this.z,w)}}
B.e4.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.Q)
return new C.v("circle",w,w,w,v,w,A.z,w)}}
B.bb.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.y)
return new C.v("path",w,w,w,v,w,A.z,w)}}
B.fV.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,A.jA)
return new C.v("polygon",w,w,w,v,w,A.z,w)}}
B.cp.prototype={
q(d){var w=null
return new C.v("table",w,"doc-table",w,w,w,this.w,w)}}
B.cr.prototype={
q(d){var w=null
return new C.v("thead",w,w,w,w,w,this.w,w)}}
B.cq.prototype={
q(d){var w=null
return new C.v("tbody",w,w,w,w,w,this.w,w)}}
B.as.prototype={
q(d){var w=null,v=x.N
return new C.v("th",w,w,w,C.A(v,v),w,this.as,w)}}
B.D.prototype={
q(d){var w=null
return new C.v("tr",w,w,w,w,w,this.w,w)}}
B.e.prototype={
q(d){var w=null,v=x.N
return new C.v("td",w,w,w,C.A(v,v),w,this.z,w)}}
B.P.prototype={
q(d){var w=this,v=x.N,u=C.A(v,v),t=w.Q
if(t!=null)u.D(0,t)
u.k(0,"href",w.c)
v=C.A(v,x.v)
t=w.as
if(t!=null)v.D(0,t)
v.D(0,B.fL().$1$1$onClick(null,x.H))
return new C.v("a",w.x,w.y,w.z,u,v,w.at,null)},
gaa(){return null}}
B.f.prototype={
q(d){var w=null
return new C.v("code",w,this.d,w,w,w,this.w,w)}}
B.a3.prototype={
q(d){var w=null
return new C.v("span",w,this.d,this.e,w,w,this.w,w)}}
B.a_.prototype={
q(d){var w=null
return new C.v("strong",w,w,w,w,w,this.w,w)}}
B.em.prototype={
a7(){return"Display."+this.b}}
B.fF.prototype={
gb9(){var w,v=C.b([],x.s)
v.push("solid")
v.push(this.b.a)
w=this.c
v.push(C.eI(w.b)+w.a)
w=x.N
return C.I(["border",D.a.W(v," ")],w,w)},
$imD:1}
B.hc.prototype={
a7(){return"BorderStyle."+this.b}}
B.h0.prototype={
a7(){return"AlignItems."+this.b}}
B.dP.prototype={
gb9(){var w,v=x.N
v=C.A(v,v)
w=this.b
w=w==null?null:C.eI(w.b)+w.a
if(w!=null)v.k(0,"top",w)
w=this.c
w=w==null?null:C.eI(w.b)+w.a
if(w!=null)v.k(0,"right",w)
return v},
$ike:1}
B.i4.prototype={
a7(){return"TextAlign."+this.b}}
B.hs.prototype={
a7(){return"FontWeight."+this.b}}
B.i5.prototype={}
B.fD.prototype={
gX(){var w=C.b([],x.s)
w.push("none")
return D.a.W(w," ")},
$inq:1}
B.fs.prototype={}
B.aQ.prototype={
a9(){var w=C.bZ(x.h),v=($.a9+1)%16777215
$.a9=v
return new B.fm(null,!1,!1,w,v,this,D.l)}}
B.fm.prototype={
az(){var w=this.f
w.toString
return x.c.a(w).b},
ab(){var w=this.CW.d$
w.toString
return C.mQ(w,null)},
an(d){x.T.a(d)}}
B.aT.prototype={
a9(){var w=this.aX(),v=($.a9+1)%16777215
$.a9=v
v=new B.eX(w,v,this,D.l)
w.c=v
w.sc0(this)
return v}}
B.ah.prototype={
b0(){},
J(d){x.M.a(d).$0()
this.c.cI()},
sc0(d){this.a=C.m(this).h("ah.T?").a(d)}}
B.eX.prototype={
by(){return this.ry.q(this)},
T(){var w=this
if(w.w.c)w.ry.toString
w.ds()
w.bb()},
ds(){try{this.ry.b0()}finally{}this.ry.toString},
am(){var w=this
w.w.toString
if(w.x1){w.ry.toString
w.x1=!1}w.bO()},
ao(d){var w
x.D.a(d)
w=this.ry
w.toString
C.m(w).h("ah.T").a(d)
return!0},
a_(d){x.D.a(d)
this.bf(d)
this.ry.sc0(d)},
aD(d){var w
x.D.a(d)
try{w=this.ry
w.toString
C.m(w).h("ah.T").a(d)}finally{}this.bd(d)},
aj(){this.ry.toString
this.d_()},
aK(){this.be()
this.ry=this.ry.c=null}}
B.u.prototype={
a9(){var w=($.a9+1)%16777215
$.a9=w
return new B.eY(w,this,D.l)}}
B.eY.prototype={
gA(){return x.q.a(C.l.prototype.gA.call(this))},
T(){if(this.w.c)this.r.toString
this.bb()},
ao(d){x.q.a(C.l.prototype.gA.call(this))
return!0},
by(){return x.q.a(C.l.prototype.gA.call(this)).q(this)},
am(){this.w.toString
this.bO()}}
B.aX.prototype={
aX(){return new B.cu()}}
B.cu.prototype={
b0(){var w,v,u,t=this
t.bR()
w=b.G
v=C.bR(C.o(C.o(w.window).localStorage).getItem("khmerlang-doc-theme"))
if(v==null)v="dark"
t.r=v!=="light"
B.mb(v)
B.pi(new B.h9(t))
w=C.W(C.o(C.o(w.window).location).hash)
u=C.po(w,"#","",0)
if(u.length!==0)t.f=u},
dO(){this.J(new B.h3(this))},
dM(){this.J(new B.h2(this))},
dz(d){C.W(d)
this.J(new B.h1(this,d))
C.o(C.o(b.G.window).location).hash=d},
q(d){var w=this,v=null,u=w.r,t=w.d,s=w.f,r=w.gdw(),q=x.i
return new B.aQ(C.b([new B.es(w.gdL(),new B.h6(w),w.gdN(),u,v),new B.r(v,"docs-container",v,v,v,C.b([new B.eV(t,s,r,v),A.t5,new B.f2(s,r,v)],q),v),A.bB,new B.cb(w.e,new B.h7(w),r,v)],q),v)}}
B.V.prototype={
aX(){return new B.fd()}}
B.fd.prototype={
dq(){var w=this,v=w.a.e
C.o(C.o(C.o(C.o(b.G.window).navigator).clipboard).writeText(v))
w.J(new B.ih(w))
B.nr(A.bA,new B.ii(w))},
dr(){var w,v,u,t=this
t.J(new B.ij(t))
try{w=B.ma(t.a.e)
t.J(new B.ik(t,w))}catch(u){v=C.a0(u)
t.J(new B.il(t,v))}},
q(d){var w,v=this,u=null,t=x.i,s=C.b([B.bw(C.b([new C.a(v.a.d,u)],t),"code-card-lang",u),B.bw(C.b([new C.a(v.a.c,u)],t),"code-card-title",u)],t),r=v.d?B.cj(new B.fF(A.b1,A.W,new B.fs("px",1)),A.W,u,u,u,u,u):u,q=x.N,p=x.v,o=C.I(["click",new B.im(v)],q,p)
r=C.b([B.b6(C.b([new C.a(v.d?"\u2713 \u1794\u17b6\u1793\u1785\u1798\u17d2\u179b\u1784!":"\u1785\u1798\u17d2\u179b\u1784",u)],t),u,"btn-code-action btn-copy-code",o,u,r)],t)
o=v.a
w=o.f
if(w==null?o.d==="KHMER":w){o=v.e?C.I(["disabled","true"],q,q):u
p=C.I(["click",new B.io(v)],q,p)
r.push(B.b6(C.b([new C.a(v.e?"\u23f3 \u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a...":"\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a",u)],t),o,"btn-code-action btn-code-run",p,u,u))}s=C.b([new B.r(u,"code-card-meta",u,u,u,s,u),new B.r(u,"code-card-actions",u,u,u,r,u)],t)
r=C.b([],t)
q=v.a
p=q.d
q=q.e
if(p==="KHMER")D.a.D(r,B.p1(q))
else r.push(new C.a(q,u))
s=C.b([new B.r(u,"code-card-header",u,u,u,s,u),new B.r(u,"code-content-wrapper",u,u,u,C.b([new B.fW("code-block",C.b([new B.f("snippet-source",r,u)],t),u)],t),u)],t)
if(v.f){r=B.cj(u,A.t,new C.aB("rem",0.75),u,u,u,u)
r=C.b([A.tX,B.bw(C.b([new C.a(""+v.w+"ms",u)],t),"code-output-time",r)],t)
q=v.x?A.aH:A.aJ
s.push(new B.r(u,"code-output-drawer visible",u,u,u,C.b([new B.r(u,"code-output-header",u,u,u,r,u),new B.r(u,"code-output-body",q,u,u,C.b([new C.a(v.r,u)],t),u)],t),u))}return new B.r(u,"code-card",u,u,u,s,u)}}
B.ep.prototype={
q(d){var w=null,v=x.i
return new B.fM("docs-footer",C.b([A.t7,new B.K(w,B.cj(w,A.t,new C.aB("rem",0.85),w,new B.dP(new C.aB("rem",0.4),w),w,w),C.b([A.mZ,A.pH,A.mU,A.pD],v),w)],v),w)}}
B.es.prototype={
q(d){var w,v=this,u="docs-header",t=null,s="search-trigger-btn",r=x.N,q=C.I(["aria-label","\u1794\u17be\u1780\u1798\u17c9\u17ba\u1793\u17bb\u1799"],r,r),p=x.v,o=C.I(["click",new B.hy(v)],r,p),n=x.i
o=C.b([B.b6(C.b([A.un],n),q,"header-action-btn mobile-menu-toggle",o,"mobile-toggle-btn",t),A.pP],n)
q=C.I(["aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search Docs)"],r,r)
w=C.I(["click",new B.hz(v)],r,p)
w=C.b([B.b6(C.b([A.rk,new B.r(t,"search-kbd-shortcut",t,t,t,C.b([new C.v("kbd",t,t,t,t,t,C.b([new C.a("\u2318",t)],n),t),new C.v("kbd",t,t,t,t,t,C.b([new C.a("K",t)],n),t)],n),t)],n),q,s,w,s,t)],n)
q=C.I(["aria-label","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Mode","title","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Theme"],r,r)
p=C.I(["click",new B.hA(v)],r,p)
r=C.b([],n)
if(v.f)r.push(A.up)
else r.push(A.ut)
return new B.fP(u,u,C.b([new B.r(t,"brand-wrapper",t,t,t,o,t),new B.r(t,"header-center-search",t,t,t,w,t),new B.r(t,"header-actions",t,t,t,C.b([A.pE,B.b6(r,q,"header-action-btn",p,"theme-toggle-btn",t),A.pR],n),t)],n),t)}}
B.c8.prototype={
aX(){return new B.ft()}}
B.ft.prototype={
b0(){this.bR()
this.e=y.n},
dv(d){this.J(new B.iJ(this,d))},
dt(d){this.J(new B.iI(this,d))},
dF(){var w,v,u,t=this
t.J(new B.iK(t))
try{w=B.ma(t.e)
t.J(new B.iL(t,w))}catch(u){v=C.a0(u)
t.J(new B.iM(t,v))}},
d9(){var w,v,u,t=this
try{w=B.oO(t.e)
t.J(new B.iF(t,w))}catch(u){v=C.a0(u)
t.J(new B.iG(t,v))}},
dc(){this.J(new B.iH(this))},
q(d){var w,v,u,t,s=this,r=null,q="rem",p="btn-playground-clear",o="\u1794\u1784\u17d2\u17a0\u17b6\u1789()",n=B.cj(r,A.t,new C.aB(q,0.8),A.a7,r,r,r),m=x.i,l=C.b([A.m2],m),k=x.N,j=x.v,i=C.I(["change",new B.iO(s)],k,j),h=s.d
h=B.fU(C.b([A.nL],m),h==="hello","hello")
w=s.d
w=B.fU(C.b([A.lo],m),w==="math","math")
v=s.d
v=B.fU(C.b([A.nl],m),v==="fibo","fibo")
u=s.d
u=B.fU(C.b([A.nY],m),u==="oop","oop")
t=s.d
t=C.b([new B.fQ(n,l,r),new B.fX("playground-sample-select",i,C.b([h,w,v,u,B.fU(C.b([A.lf],m),t==="grades","grades")],m),r)],m)
u=C.I(["title","\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd"],k,k)
v=C.I(["click",new B.iP(s)],k,j)
v=B.b6(C.b([A.u2],m),u,p,v,r,r)
u=C.I(["title","\u179b\u17bb\u1794\u179b\u1791\u17d2\u1792\u1795\u179b"],k,k)
w=C.I(["click",new B.iQ(s)],k,j)
w=B.b6(C.b([A.uq,A.u0],m),u,p,w,r,r)
u=C.I(["click",new B.iR(s)],k,j)
u=C.b([new B.r(r,r,A.pe,r,r,t,r),new B.r(r,"playground-actions",r,r,r,C.b([v,w,B.b6(C.b([A.aX,A.tY],m),r,"btn-playground-run",u,r,r)],m),r)],m)
w=B.cj(r,A.t,new C.aB(q,0.75),r,new B.dP(r,new C.aB(q,0.25)),r,r)
w=C.b([B.bw(C.b([A.kj],m),r,w),s.K("\u178f\u17b6\u17c6\u1784 ","\u178f\u17b6\u17c6\u1784"),s.K(o,o),s.K("\u1794\u17be () {\n\n}","\u1794\u17be"),s.K("\u17ac\u1794\u17be () {\n\n}","\u17ac\u1794\u17be"),s.K("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n\n}","\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f"),s.K("\u1781\u178e\u17c8 () {\n\n}","\u1781\u178e\u17c8"),s.K("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i < \u17e5; i = i + \u17e1) {\n\n}","\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb"),s.K("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"),s.K("\u178f\u17d2\u179a\u17a1\u1794\u17cb ","\u178f\u17d2\u179a\u17a1\u1794\u17cb"),s.K("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1788\u17d2\u1798\u17c4\u17c7 {\n\n}","\u1790\u17d2\u1793\u17b6\u1780\u17cb"),s.K("\u1794\u1784\u17d2\u1780\u17be\u178f() {\n\n}","\u1794\u1784\u17d2\u1780\u17be\u178f"),s.K("\u179c\u17b7\u1792\u17b8 \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u179c\u17b7\u1792\u17b8"),s.K("\u1793\u17c1\u17c7.","\u1793\u17c1\u17c7."),s.K("\u1790\u17d2\u1798\u17b8 ","\u1790\u17d2\u1798\u17b8"),s.K("\u1794\u1793\u17d2\u178f\u1796\u17b8 ","\u1794\u1793\u17d2\u178f\u1796\u17b8"),s.K("\u1796\u17b7\u178f","\u1796\u17b7\u178f"),s.K("\u1798\u17b7\u1793\u1796\u17b7\u178f","\u1798\u17b7\u1793\u1796\u17b7\u178f"),s.K("\u1791\u1791\u17c1","\u1791\u1791\u17c1"),s.K("\u17d4","\u17d4"),s.K("\u17d5","\u17d5")],m)
j=C.b([new B.fY("playground-textarea",C.I(["spellcheck","false","placeholder","\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u1793\u17c5\u1791\u17b8\u1793\u17c1\u17c7..."],k,k),C.I(["input",new B.iS(s)],k,j),C.b([new C.a(s.e,r)],m),r)],m)
k=B.cj(r,A.t,new C.aB(q,0.75),r,r,r,r)
k=C.b([A.u1,B.bw(C.b([new C.a(s.r,r)],m),r,k)],m)
n=s.w?A.aH:A.aJ
return new B.r(r,"playground-container",r,r,r,C.b([new B.r(r,"playground-toolbar",r,r,r,u,r),new B.r(r,"playground-virtual-keys",r,r,r,w,r),new B.r(r,"playground-grid",r,r,r,C.b([new B.r(r,"playground-editor-pane",r,r,r,j,r),new B.r(r,"playground-console-pane",r,r,r,C.b([new B.r(r,"console-pane-header",r,r,r,k,r),new B.r(r,"console-pane-body",n,r,r,C.b([new C.a(s.f,r)],m),r)],m),r)],m),r)],m),r)},
K(d,e){var w=null,v=C.I(["click",new B.iN(this,d)],x.N,x.v)
return B.b6(C.b([new C.a(e,w)],x.i),w,"vk-btn",v,w,w)}}
B.cb.prototype={
aX(){return new B.fx()},
b2(){return this.d.$0()},
eH(d){return this.e.$1(d)}}
B.fx.prototype={
gdl(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.b.bL(this.d).toLowerCase()
if(d.length===0)return A.a8
w=C.c9("\\s+")
v=C.jX(d,w," ")
u=C.jX(d," ","")
w=x.U
t=C.az(new C.dv(C.b(v.split(" "),x.s),x.Q.a(new B.iW()),w),w.h("i.E"))
s=C.b([],x.V)
for(r=0;r<17;++r){q=A.a8[r]
p=q.b.toLowerCase()
o=C.jX(p," ","")
n=q.c.toLowerCase()
m=q.e.toLowerCase()
l=C.jX(m," ","")
k=q.f.toLowerCase()
j=p+" "+n+" "+q.d.toLowerCase()+" "+m+" "+k
i=o+" "+l
if(D.b.G(p,v)||D.b.G(n,v))h=100
else if(D.b.G(o,u))h=90
else if(D.b.G(j,v))h=70
else h=D.b.G(i,u)?60:0
for(w=t.length,g=0,f=0;f<w;++f){e=t[f]
if(e.length===0)continue
if(D.b.G(p,e)||D.b.G(n,e))g+=3
else if(D.b.G(m,e)||D.b.G(k,e))g+=2
else if(D.b.G(o,e)||D.b.G(l,e))++g}if(w!==0&&g>0){h+=g*15
if(D.a.en(t,new B.iX(j,i)))h+=50}if(h>0)D.a.j(s,new C.dQ(q,h))}D.a.aM(s,new B.iY())
w=x.Z
w=C.az(new C.aa(s,x.g.a(new B.iZ()),w),w.h("a4.E"))
return w},
q(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="search-modal-card",e="search-modal-input",d="search-results-list"
if(!h.a.c)return A.rp
w=h.gdl()
v=x.N
u=x.v
t=C.I(["click",new B.j0(h)],v,u)
s=C.I(["role","dialog","aria-modal","true","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a"],v,v)
r=h.d
q=C.I(["placeholder","\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u17ac\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791\u178a\u17c2\u179b\u1785\u1784\u17cb\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780...","autocomplete","off","autofocus","true"],v,v)
p=C.I(["input",new B.j1(h),"keydown",new B.j2(h)],v,u)
o=C.I(["click",new B.j3(h)],v,u)
n=x.i
o=C.b([A.us,new B.e5(A.bJ,r,e,e,q,p,g,x.e),B.b6(C.b([A.ld],n),g,"search-kbd-esc-btn",o,g,g)],n)
p=C.b([],n)
r=w.length
if(r===0){v=B.cj(g,A.t,g,g,g,new C.dz(new C.aB("rem",1.5)),A.kb)
p.push(B.pa(C.b([new C.a('\u179a\u1780\u1798\u17b7\u1793\u1783\u17be\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb "'+h.d+'" \u17a1\u17be\u1799\u17d4',g)],n),g,g,v))}else for(m=0;m<w.length;w.length===r||(0,C.ak)(w),++m){l=w[m]
q=C.I(["click",new B.j4(h,l)],v,u)
k=C.b([new B.a3(g,g,C.b([new C.a(l.b,g)],n),g),new B.a3("sidebar-badge",g,C.b([new C.a(l.d,g)],n),g)],n)
j=l.f
i=l.c
p.push(new B.Z("search-result-item",g,q,C.b([new B.r(g,"search-result-title",g,g,g,k,g),new B.r(g,"search-result-desc",g,g,g,C.b([new C.a(j.length!==0?i+" \u2014 "+j:i,g)],n),g)],n),g))}return new B.r("search-modal-backdrop","search-modal-backdrop visible",g,g,t,C.b([new B.r(f,f,g,s,g,C.b([new B.r(g,"search-input-header",g,g,g,o,g),B.kG(p,d,d),A.rl],n),g)],n),g)}}
B.eV.prototype={
q(d){var w=this,v=w.c?" mobile-open":"",u=x.N,t=x.W
return new B.fS("docs-sidebar","docs-sidebar"+v,C.I(["aria-label","\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6"],u,u),C.b([w.ad(C.b([A.p8,A.p9,A.oU],t),"\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784 (Getting Started)"),w.ad(C.b([A.p_,A.p1,A.oX],t),"\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 (Language Basics)"),w.ad(C.b([A.oW,A.p0,A.oY],t),"\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a (Control Flow)"),w.ad(C.b([A.p3,A.oZ],t),"\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)"),w.ad(C.b([A.p4,A.oV],t),"\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb (OOP)"),w.ad(C.b([A.p2,A.p5,A.p7,A.p6],t),"\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784")],x.i),null)},
ad(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
x.P.a(d)
w=x.i
v=C.b([new C.a(e,i)],w)
u=C.b([],w)
for(t=d.length,s=x.N,r=x.v,q=this.d,p=0;p<d.length;d.length===t||(0,C.ak)(d),++p){o=d[p]
n=o.a
m=q===n?" active":""
l=C.I(["click",new B.hZ(this,o)],s,r)
k=C.b([],w)
j=o.b
if(o.c)k.push(new B.a3(i,A.pc,C.b([new C.a(j,i)],w),i))
else k.push(new C.a(j,i))
j=o.d
if(j!=null)k.push(new B.a3("sidebar-badge badge-new",i,C.b([new C.a(j,i)],w),i))
u.push(new B.Z(i,i,i,C.b([B.m0(k,"sidebar-nav-link"+m,l,"#"+n)],w),i))}return new B.r(i,"sidebar-nav-group",i,i,i,C.b([new B.r(i,"sidebar-nav-title",i,i,i,v,i),B.kG(u,"sidebar-nav-list",i)],w),i)}}
B.a2.prototype={}
B.f2.prototype={
q(d){var w,v,u,t,s,r,q,p="docs-toc",o="toc-list",n=null,m=x.N,l=C.I(["aria-label","\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7"],m,m),k=x.i,j=C.b([],k)
for(w=x.v,v=this.c,u=0;u<17;++u){t=A.hz[u]
s=t.a
r=v===s?" active":""
q=C.I(["click",new B.i3(this,t)],m,w)
j.push(new B.Z(n,n,n,C.b([B.m0(C.b([new C.a(t.b,n)],k),"toc-link"+r,q,"#"+s)],k),n))}return new B.fI(p,p,l,C.b([A.rj,B.kG(j,o,o)],k),n)}}
B.a5.prototype={}
B.B.prototype={}
B.ea.prototype={
q(d){return A.bE}}
B.ej.prototype={
q(d){return A.bF}}
B.eq.prototype={
q(d){return A.bC}}
B.er.prototype={
q(d){return A.bG}}
B.eP.prototype={
q(d){return A.bD}}
B.z.prototype={}
B.db.prototype={
i(d){return"NumberNode("+C.j(this.a)+")"},
gX(){return this.a}}
B.bI.prototype={
i(d){return'StringNode("'+this.a+'")'},
gX(){return this.a}}
B.bU.prototype={
i(d){return"BooleanNode("+this.a+")"},
gX(){return this.a}}
B.da.prototype={
i(d){return"NullNode()"}}
B.cv.prototype={
i(d){return"ArrayNode("+C.j(this.a)+")"}}
B.dc.prototype={
i(d){return"ObjectNode("+C.j(this.a)+")"}}
B.bh.prototype={
i(d){return"IdentifierNode("+this.a+")"}}
B.dr.prototype={
i(d){return"ThisNode()"}}
B.ds.prototype={
i(d){return"UnaryOpNode("+this.a+", "+this.b.i(0)+")"}}
B.aP.prototype={
i(d){return"BinaryOpNode("+this.a.i(0)+", "+this.b+", "+this.c.i(0)+")"}}
B.cw.prototype={
i(d){return"AssignmentNode("+this.a+", "+this.b.i(0)+")"},
gX(){return this.b}}
B.c5.prototype={
i(d){return"MemberAccessNode("+this.a.i(0)+"."+this.b+")"},
gaa(){return this.a}}
B.d2.prototype={
i(d){return"MemberAssignmentNode("+this.a.i(0)+"."+this.b+" = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
B.c0.prototype={
i(d){return"IndexAccessNode("+this.a.i(0)+"["+this.b.i(0)+"])"},
gaa(){return this.a}}
B.cR.prototype={
i(d){return"IndexAssignmentNode("+this.a.i(0)+"["+this.b.i(0)+"] = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
B.cQ.prototype={
i(d){return"FunctionCallNode("+this.a.i(0)+", "+C.j(this.b)+")"}}
B.d8.prototype={
i(d){return"NewNode("+this.a+", "+C.j(this.b)+")"}}
B.du.prototype={
i(d){return"VarDeclNode("+this.a+", "+C.j(this.b)+")"},
gX(){return this.b}}
B.de.prototype={
i(d){return"PrintNode("+C.j(this.a)+")"}}
B.cx.prototype={
i(d){return"BlockNode("+C.j(this.a)+")"}}
B.c_.prototype={
i(d){return"IfNode("+this.a.i(0)+", "+this.b.i(0)+", else: "+C.j(this.c)+")"}}
B.dx.prototype={
i(d){return"WhileNode("+this.a.i(0)+", "+this.b.i(0)+")"}}
B.cP.prototype={
i(d){var w=this
return"ForNode(init: "+C.j(w.a)+", cond: "+C.j(w.b)+", inc: "+C.j(w.c)+", body: "+w.d.i(0)+")"}}
B.bC.prototype={
i(d){return"FunctionDeclNode("+this.a+"("+C.j(this.b)+"), "+this.c.i(0)+")"}}
B.cB.prototype={
i(d){return"ClassDeclNode("+this.a+" extends "+C.j(this.b)+", methods: "+C.j(this.c)+")"}}
B.dh.prototype={
i(d){return"ReturnNode("+C.j(this.a)+")"},
gX(){return this.a}}
B.cO.prototype={
i(d){return"ExpressionStmtNode("+this.a.i(0)+")"}}
B.bg.prototype={
a0(d){var w=this.a
if(w.S(d))return w.p(0,d)
w=this.b
if(w!=null)return w.a0(d)
throw C.c(B.M("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u17a2\u1790\u17c1\u179a \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' / Undefined variable or function '"+d+"'"))},
cn(d,e){var w=this.a
if(w.S(d)){w.k(0,d,e)
return}w=this.b
if(w!=null){w.cn(d,e)
return}throw C.c(B.M("\u17a2\u1790\u17c1\u179a\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1794\u17b6\u1793\u1794\u17d2\u179a\u1780\u17b6\u179f '"+d+"' / Cannot assign to undeclared variable '"+d+"'"))}}
B.am.prototype={
$1(d){return this.b.$1(x.j.a(d))},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785/BuiltinFunction "+this.a+">"}}
B.bl.prototype={
cp(d){var w=this,v=C.A(x.N,x.z)
v.k(0,"\u1793\u17c1\u17c7",d)
v.k(0,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",d)
return new B.bl(w.a,w.b,w.c,new B.bg(v,w.d))},
$2(d,e){var w,v,u,t,s,r,q,p,o=this
x.j.a(e)
u=J.aW(e)
t=u.gl(e)
s=o.b
r=s.length
if(t!==r){t=o.a
throw C.c(B.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 '"+t+"' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1785\u17c6\u1793\u17bd\u1793 "+r+" \u1794\u17c9\u17bb\u1793\u17d2\u178f\u17c2\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793 "+u.gl(e)+" / Method '"+t+"' expected "+s.length+" arguments, got "+u.gl(e)))}w=new B.bg(C.A(x.N,x.z),o.d)
for(q=0;q<s.length;++q){t=s[q]
r=u.p(e,q)
w.a.k(0,t,r)}try{d.cv(o.c.a,w)}catch(p){u=C.a0(p)
if(u instanceof B.eQ){v=u
return v.a}else throw p}return null},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+this.a+">"}}
B.bk.prototype={
bC(d){var w=this.c
if(w.S(d))return w.p(0,d)
w=this.b
if(w!=null)return w.bC(d)
return null},
cC(d,e){var w,v=new B.bm(this,C.A(x.N,x.z)),u=this.bC("\u1794\u1784\u17d2\u1780\u17be\u178f")
if(u!=null)u.cp(v).$2(d,e)
else if(e.length!==0){w=this.a
throw C.c(B.M("\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+w+"' \u1782\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1794\u1784\u17d2\u1780\u17be\u178f (Constructor) / Class '"+w+"' has no constructor taking arguments"))}return v},
i(d){return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a+">"}}
B.bm.prototype={
a0(d){var w,v=this.b
if(v.S(d))return v.p(0,d)
v=this.a
w=v.bC(d)
if(w!=null)return w.cp(this)
throw C.c(B.M("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a '"+d+"' \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+v.a+"' / Undefined property or method '"+d+"'"))},
i(d){return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a.a+">"}}
B.cX.prototype={
bD(){var w,v=this.b
if(v!=null){w=" [\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb/Line "+C.j(v)
v=this.c
w=(v!=null?w+(", \u1787\u17bd\u179a/Col "+C.j(v)):w)+"]"}else w=""
return"\u1780\u17c6\u17a0\u17bb\u179f/Error"+w+": "+this.a},
cs(){var w,v=this.b
if(v==null)v=1
w=this.c
if(w==null)w=1
return"<source>:"+v+":"+w+": error: "+this.a},
i(d){return this.bD()}}
B.hN.prototype={}
B.hT.prototype={}
B.eT.prototype={}
B.eQ.prototype={}
B.hC.prototype={
eA(d){var w,v,u,t,s
x.t.a(d)
for(w=d.length,v=null,u=0;u<d.length;d.length===w||(0,C.ak)(d),++u){t=d[u]
s=this.b
s===$&&C.af()
v=this.C(t,s)}return v},
C(d,e){var w,v,u,t=this
if(d instanceof B.db)return d.a
if(d instanceof B.bI)return d.a
if(d instanceof B.bU)return d.a
if(d instanceof B.da)return null
if(d instanceof B.cv)return t.dU(d,e)
if(d instanceof B.dc)return t.e5(d,e)
if(d instanceof B.bh)return e.a0(d.a)
if(d instanceof B.dr)return t.e8(d,e)
if(d instanceof B.ds)return t.e9(d,e)
if(d instanceof B.aP)return t.dW(d,e)
if(d instanceof B.cw)return t.dV(d,e)
if(d instanceof B.c5)return t.e2(d,e)
if(d instanceof B.d2)return t.e3(d,e)
if(d instanceof B.c0)return t.e0(d,e)
if(d instanceof B.cR)return t.e1(d,e)
if(d instanceof B.cQ)return t.dZ(d,e)
if(d instanceof B.d8)return t.e4(d,e)
if(d instanceof B.du){w=d.b
v=w!=null?t.C(w,e):null
e.a.k(0,d.a,v)
return v}if(d instanceof B.de)return t.e6(d,e)
if(d instanceof B.cx)return t.cv(d.a,new B.bg(C.A(x.N,x.z),e))
if(d instanceof B.c_)return t.e_(d,e)
if(d instanceof B.dx)return t.ea(d,e)
if(d instanceof B.cP)return t.dY(d,e)
if(d instanceof B.bC){w=d.a
u=new B.bl(w,d.b,d.c,e)
e.a.k(0,w,u)
return u}if(d instanceof B.cB)return t.dX(d,e)
if(d instanceof B.dh)return t.e7(d,e)
if(d instanceof B.cO)return t.C(d.a,e)
throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1790\u17d2\u1793\u17b6\u17c6\u1784 AST \u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Unsupported AST node type: "+C.bu(d).i(0)))},
cv(d,e){var w,v,u,t,s,r=this
x.t.a(d)
t=r.b
t===$&&C.af()
w=t
r.b=e
try{v=null
for(t=d.length,s=0;s<d.length;d.length===t||(0,C.ak)(d),++s){u=d[s]
v=r.C(u,e)}t=v
return t}finally{r.b=x.A.a(w)}},
af(d){var w
if(d!=null){w=J.bs(d)
w=w.P(d,!1)||w.P(d,0)||w.P(d,"")}else w=!0
if(w)return!1
return!0},
dU(d,e){var w=d.a,v=C.ab(w),u=v.h("aa<1,@>")
w=C.az(new C.aa(w,v.h("@(1)").a(new B.hD(this,e)),u),u.h("a4.E"))
return w},
e5(d,e){var w,v,u,t,s=C.A(x.N,x.z)
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.ak)(w),++u){t=w[u]
s.k(0,t.a,this.C(t.b,e))}return s},
e8(d,e){var w,v
try{w=e.a0("\u1793\u17c1\u17c7")
return w}catch(v){try{w=e.a0("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6")
return w}catch(v){w=B.M("\u1796\u17b6\u1780\u17d2\u1799 '\u1793\u17c1\u17c7' \u17ac '\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17b6\u1793\u178f\u17c2\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1793\u17c1\u17c7'/'\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' can only be used inside class methods")
throw C.c(w)}}},
e9(d,e){var w=this.C(d.b,e),v=d.a
if(v==="!"||v==="\u1798\u17b7\u1793")return!this.af(w)
if(v==="-"){if(typeof w=="number")return-w
throw C.c(B.M("\u179f\u1789\u17d2\u1789\u17b6\u178a\u1780 '-' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '-' requires a numeric operand"))}throw C.c(B.M("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a unary \u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+v+"' / Unknown unary operator '"+v+"'"))},
dW(d,e){var w,v,u,t=this,s="' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '",r="' requires numeric operands",q=t.C(d.a,e),p=d.b
if(p==="\u1793\u17b7\u1784"||p==="&&"){if(!t.af(q))return q
return t.C(d.c,e)}if(p==="\u17ac"||p==="||"){if(t.af(q))return q
return t.C(d.c,e)}w=t.C(d.c,e)
if(p==="==")return J.ag(q,w)
if(p==="!=")return!J.ag(q,w)
if(p==="+"){if(typeof q=="string"||typeof w=="string")return B.fN(q)+B.fN(w)
if(typeof q=="number"&&typeof w=="number")return q+w
throw C.c(B.M("\u1780\u17b6\u179a\u1794\u17bc\u1780 '+' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u179b\u17be\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u179f\u179a / '+' requires numbers or strings"))}v=p==="-"
if(v||p==="*"||p==="/"||p==="%"){if(typeof q!="number"||typeof w!="number")throw C.c(B.M("\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a '"+p+s+p+r))
if(v)return q-w
if(p==="*")return q*w
if(p==="/"){if(w===0)throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17c2\u1780\u1793\u17b9\u1784\u179f\u17bc\u1793\u17d2\u1799\u1794\u17b6\u1793\u1791\u17c1 / Division by zero"))
u=q/w
return u===D.h.bJ(u)?D.h.aJ(u):u}if(p==="%")return D.h.cS(q,w)}v=p==="<"
if(v||p===">"||p==="<="||p===">="){if(typeof q!="number"||typeof w!="number")throw C.c(B.M("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794 '"+p+s+p+r))
if(v)return q<w
if(p===">")return q>w
if(p==="<=")return q<=w
if(p===">=")return q>=w}throw C.c(B.M("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+p+"' / Unknown binary operator '"+p+"'"))},
dV(d,e){var w,v,u,t=this.C(d.b,e)
try{e.cn(d.a,t)}catch(v){if(C.a0(v) instanceof B.eT){try{w=e.a0("\u1793\u17c1\u17c7")
if(w instanceof B.bm){w.b.k(0,d.a,t)
return t}}catch(u){}throw v}else throw v}return t},
e2(d,e){var w=this.C(d.a,e)
if(w instanceof B.bm)return w.a0(d.b)
if(x.f.b(w))return w.p(0,d.b)
throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member access on invalid target"))},
e3(d,e){var w=this.C(d.a,e),v=this.C(d.c,e)
if(w instanceof B.bm){w.b.k(0,d.b,v)
return v}if(x.f.b(w)){w.k(0,d.b,v)
return v}throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member assignment on invalid target"))},
e0(d,e){var w,v,u=this.C(d.a,e),t=this.C(d.b,e)
if(x.j.b(u)){if(typeof t!="number")throw C.c(B.M(y.m))
w=D.h.aJ(t)
if(w<0||w>=J.aD(u)){v=""+w
throw C.c(B.M("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}return J.kO(u,w)}if(typeof u=="string"){if(typeof t!="number")throw C.c(B.M("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / String index must be a number"))
w=D.h.aJ(t)
if(w<0||w>=u.length){v=""+w
throw C.c(B.M("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / String index out of bounds ("+v+")"))}if(!(w>=0&&w<u.length))return C.n(u,w)
return u[w]}if(x.f.b(u))return u.p(0,J.N(t))
throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1791\u17b6\u1789\u1799\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable"))},
e1(d,e){var w,v,u=this.C(d.a,e),t=this.C(d.b,e),s=this.C(d.c,e)
if(x.j.b(u)){if(typeof t!="number")throw C.c(B.M(y.m))
w=D.h.aJ(t)
if(w<0||w>=J.aD(u)){v=""+w
throw C.c(B.M("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}J.h_(u,w,s)
return s}if(x.f.b(u)){u.k(0,J.N(t),s)
return s}throw C.c(B.M("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable for assignment"))},
dZ(d,e){var w=this,v=w.C(d.a,e),u=d.b,t=C.ab(u),s=t.h("aa<1,@>"),r=C.az(new C.aa(u,t.h("@(1)").a(new B.hE(w,e)),s),s.h("a4.E"))
if(v instanceof B.bk)return v.cC(w,r)
if(v instanceof B.bl)return v.$2(w,r)
if(v instanceof B.am)return v.b.$1(r)
throw C.c(B.M("\u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u1790\u17d2\u1793\u17b6\u1780\u17cb / Target is not callable"))},
e4(d,e){var w,v,u,t=d.a,s=e.a0(t)
if(!(s instanceof B.bk))throw C.c(B.M("'"+t+"' \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class) \u1791\u17c1 / '"+t+"' is not a class"))
t=d.b
w=C.ab(t)
v=w.h("aa<1,@>")
u=C.az(new C.aa(t,w.h("@(1)").a(new B.hF(this,e)),v),v.h("a4.E"))
return s.cC(this,u)},
dX(d,e){var w,v,u,t,s,r,q,p,o=d.b
if(o!=null){w=e.a0(o)
if(!(w instanceof B.bk))throw C.c(B.M("\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 '"+o+"' \u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Parent class '"+o+"' is not a class"))
v=w}else v=null
u=C.A(x.N,x.n)
for(o=d.c,t=o.length,s=0;s<o.length;o.length===t||(0,C.ak)(o),++s){r=o[s]
q=r.a
u.k(0,q,new B.bl(q,r.b,r.c,e))}o=d.a
p=new B.bk(o,v,u)
e.a.k(0,o,p)
return p},
e6(d,e){var w=d.a,v=C.ab(w),u=v.h("aa<1,@>"),t=C.az(new C.aa(w,v.h("@(1)").a(new B.hG(this,e)),u),u.h("a4.E"))
return x.R.a(e.a0("\u1794\u1784\u17d2\u17a0\u17b6\u1789")).b.$1(t)},
e_(d,e){var w,v=this
if(v.af(v.C(d.a,e)))return v.C(d.b,e)
else{w=d.c
if(w!=null)return v.C(w,e)}return null},
ea(d,e){var w,v,u
for(w=d.a,v=d.b,u=null;this.af(this.C(w,e));)u=this.C(v,e)
return u},
dY(d,e){var w,v,u,t,s,r=this,q=new B.bg(C.A(x.N,x.z),e),p=d.a
if(p!=null)r.C(p,q)
for(p=d.c,w=p!=null,v=d.d,u=d.b,t=u!=null,s=null;;){if(t)if(!r.af(r.C(u,q)))break
s=r.C(v,q)
if(w)r.C(p,q)}return s},
e7(d,e){var w=d.a
throw C.c(new B.eQ(w!=null?this.C(w,e):null))}}
B.hM.prototype={
gl(d){var w=this.e
w===$&&C.af()
return w},
Z(d){var w=this.b+d,v=this.e
v===$&&C.af()
if(w>=v)return""
v=this.a
if(!(w<v.length))return C.n(v,w)
return v[w]},
R(){return this.Z(0)},
F(){var w=this,v=w.R();++w.b
if(v==="\n"){++w.c
w.d=1}else ++w.d
return v},
aS(d){var w,v=d.length
if(v===0)return!1
if(0>=v)return C.n(d,0)
w=d.charCodeAt(0)
return w>=48&&w<=57||A.ab.S(d)},
c9(d){var w,v=d.length
if(v===0)return!1
if(d==="_")return!0
if(0>=v)return C.n(d,0)
w=d.charCodeAt(0)
if(!(w>=65&&w<=90))v=w>=97&&w<=122
else v=!0
if(v)return!0
if(!(w>=6016&&w<=6143))v=w>=6624&&w<=6655
else v=!0
return v},
cL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=C.b([],x.S),a1=x.N,a2=x.d,a3=x.s
for(;;){w=d.b
v=d.e
v===$&&C.af()
if(!(w<v))break
A:{u=d.R()
if(u===" "||u==="\t"||u==="\r"||u==="\n"||u==="\u200b"||u==="\xa0"||u==="\ufeff"){d.F()
break A}if(u!=="#")w=u==="/"&&d.Z(1)==="/"
else w=!0
if(w){for(;;){if(!(d.R().length!==0&&d.R()!=="\n"))break
d.F()}break A}if(u==="/"&&d.Z(1)==="*"){d.F()
d.F()
for(;;){if(d.R().length!==0)w=!(d.R()==="*"&&d.Z(1)==="/")
else w=!1
if(!w)break
d.F()}if(d.R().length!==0){d.F()
d.F()}break A}t=d.c
s=d.d
if(d.aS(u)){r=""
q=!1
for(;;){if(!d.aS(d.R()))w=d.R()==="."&&!q&&d.aS(d.Z(1))
else w=!0
if(!w)break
p=d.F()
if(p===".")q=!0
r+=p}for(w=r.length,o=0,v="";o<w;++o){n=r[o]
m=A.ab.p(0,n)
v+=m==null?n:m}l=v.charCodeAt(0)==0?v:v
D.a.j(a0,new B.ai(A.am,q?B.oT(l):B.p7(l),t,s))
break A}if(u==='"'||u==="'"||u==="\u201c"||u==="\u201d"||u==="\u2018"||u==="\u2019"){k=d.F()
j=k==="\u201c"||k==="\u201d"||k==="\u2018"||k==="\u2019"?A.j0:C.b([k],a3)
i=""
for(;;){if(!(d.R().length!==0&&!D.a.G(j,d.R())))break
p=d.F()
if(p==="\\"){h=d.F()
if(h==="n")i+="\n"
else if(h==="t")i+="\t"
else if(h==="\\")i+="\\"
else{D.a.G(j,h)
i+=h}}else i+=p}if(d.R().length===0)throw C.c(B.l5("String \u1798\u17b7\u1793\u1794\u17b6\u1793\u1794\u17b7\u1791 / Unclosed string literal",t,s))
d.F()
D.a.j(a0,new B.ai(A.an,i,t,s))
break A}if(u==="="&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ai(A.az,"==",t,s))
break A}if(u==="!"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ai(A.aA,"!=",t,s))
break A}if(u==="<"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ai(A.aD,"<=",t,s))
break A}if(u===">"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ai(A.aE,">=",t,s))
break A}if(u==="&"&&d.Z(1)==="&"){d.F()
d.F()
D.a.j(a0,new B.ai(A.I,"&&",t,s))
break A}if(u==="|"&&d.Z(1)==="|"){d.F()
d.F()
D.a.j(a0,new B.ai(A.J,"||",t,s))
break A}g=C.I(["+",A.av,"-",A.M,"*",A.aw,"/",A.ax,"%",A.ay,"=",A.N,"<",A.aB,">",A.aC,"!",A.K,".",A.O,"\uff0e",A.O,"(",A.j,")",A.d,"{",A.w,"}",A.o,"[",A.Q,"]",A.x,",",A.n,";",A.k,"\u17d6",A.F,":",A.F,"\u17d4",A.k],a1,a2)
if(g.S(u)){d.F()
w=g.p(0,u)
w.toString
D.a.j(a0,new B.ai(w,u,t,s))
break A}if(d.c9(u)){f=""
for(;;){if(d.R().length!==0){w=d.R()
w=d.c9(w)||d.aS(w)}else w=!1
if(!w)break
f+=d.F()}if(A.ae.S(f)){w=A.ae.p(0,f)
w.toString
D.a.j(a0,new B.ai(w,f,t,s))}else D.a.j(a0,new B.ai(A.i,f,t,s))
break A}e=d.F()
if(0>=e.length)return C.n(e,0)
throw C.c(B.l5("\u17a2\u1780\u17d2\u179f\u179a/\u179f\u1789\u17d2\u1789\u17b6\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+e+"' (U+"+D.b.cJ(D.f.eW(e.charCodeAt(0),16).toUpperCase(),4,"0")+") / Unexpected character '"+e+"'",t,s))}}D.a.j(a0,new B.ai(A.r,null,d.c,d.d))
return a0}}
B.eK.prototype={
m(){var w=this.b,v=this.a
if(w>=v.length)return D.a.gcH(v)
return v[w]},
v(d){if(D.a.G(x.b.a(d),this.m().a)){this.a5()
return!0}return!1},
a5(){var w,v=this.a,u=this.b,t=v.length
if(!(u<t))return C.n(v,u)
w=v[u]
if(u<t-1)this.b=u+1
return w},
t(d,e){var w,v
if(this.m().a===d)return this.a5()
w=this.m()
v=w.c
throw C.c(B.eL(e+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
cK(){var w,v=C.b([],x.I)
while(this.m().a!==A.r){w=this.cg()
if(w!=null)D.a.j(v,w)}return v},
cg(){var w,v,u,t,s,r,q,p,o=this,n=null,m="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'"
for(w=x.B;o.v(C.b([A.k],w)););if(o.m().a===A.r)return n
if(o.m().a===A.E)return o.cm()
if(o.m().a===A.P)return o.dA()
if(o.m().a===A.R){o.t(A.R,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u17be' / Expected '\u1794\u17be'")
v=o.v(C.b([A.j],w))
u=o.H()
if(v)o.t(A.d,m)
t=o.a6()
if(o.m().a===A.G)s=o.c1()
else s=o.v(C.b([A.S],w))?o.a6():n
return new B.c_(u,t,s)}if(o.m().a===A.T){o.t(A.T,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1781\u178e\u17c8' / Expected '\u1781\u178e\u17c8'")
v=o.v(C.b([A.j],w))
u=o.H()
if(v)o.t(A.d,m)
return new B.dx(u,o.a6())}if(o.m().a===A.U){o.t(A.U,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb' / Expected '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb'")
o.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected '(' in for loop")
if(o.m().a!==A.k)r=o.m().a===A.E?o.cm():o.c3()
else{o.a5()
r=n}u=o.m().a!==A.k?o.H():n
o.t(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ';' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ';'")
q=o.m().a!==A.d?o.H():n
o.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ')'")
return new B.cP(r,u,q,o.a6())}if(o.m().a===A.C||o.m().a===A.D)return o.dm()
if(o.m().a===A.L)return o.da()
if(o.m().a===A.H){o.t(A.H,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17d2\u179a\u17a1\u1794\u17cb' / Expected '\u178f\u17d2\u179a\u17a1\u1794\u17cb'")
p=o.m().a!==A.k&&o.m().a!==A.o&&o.m().a!==A.r?o.H():n
o.v(C.b([A.k],w))
return new B.dh(p)}if(o.m().a===A.w)return o.a6()
return o.c3()},
cm(){var w,v,u,t=this
t.t(A.E,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17b6\u17c6\u1784' / Expected '\u178f\u17b6\u17c6\u1784'")
w=t.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1790\u17c1\u179a / Expected variable name")
v=x.B
u=t.v(C.b([A.N],v))?t.H():null
t.v(C.b([A.k],v))
return new B.du(J.N(w.b),u)},
dA(){var w,v,u=this
u.t(A.P,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u1784\u17d2\u17a0\u17b6\u1789' / Expected '\u1794\u1784\u17d2\u17a0\u17b6\u1789'")
w=C.b([],x.I)
v=x.B
if(u.v(C.b([A.j],v))){if(u.m().a!==A.d){D.a.j(w,u.H())
while(u.v(C.b([A.n],v)))D.a.j(w,u.H())}u.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791 / Expected ')'")}else{D.a.j(w,u.H())
while(u.v(C.b([A.n],v)))D.a.j(w,u.H())}u.v(C.b([A.k],v))
return new B.de(w)},
c1(){var w,v,u,t,s,r=this
r.t(A.G,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17ac\u1794\u17be' / Expected '\u17ac\u1794\u17be'")
w=x.B
v=r.v(C.b([A.j],w))
u=r.H()
if(v)r.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'")
t=r.a6()
if(r.m().a===A.G)s=r.c1()
else s=r.v(C.b([A.S],w))?r.a6():null
return new B.c_(u,t,s)},
dm(){var w,v,u,t,s=this,r=y.c,q=x.B
if(!(s.v(C.b([A.C],q))||s.v(C.b([A.D],q)))){w=s.m()
throw C.c(B.eL("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' \u17ac '\u179c\u17b7\u1792\u17b8' / Expected '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' or '\u179c\u17b7\u1792\u17b8'",w.c,w.d))}v=s.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected function name")
s.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.b([],x.s)
if(s.m().a!==A.d){D.a.j(u,J.N(s.t(A.i,r).b))
while(s.v(C.b([A.n],q)))D.a.j(u,J.N(s.t(A.i,r).b))}s.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
t=s.a6()
return new B.bC(J.N(v.b),u,t)},
da(){var w,v,u,t,s,r,q,p,o,n=this,m=y.c
n.t(A.L,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1790\u17d2\u1793\u17b6\u1780\u17cb' / Expected '\u1790\u17d2\u1793\u17b6\u1780\u17cb'")
w=n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected class name")
v=x.B
u=n.v(C.b([A.au],v))?J.N(n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 / Expected parent class name").b):null
n.t(A.w,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' \u178a\u17be\u1798\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '{' for class body")
t=C.b([],x._)
s=x.s
for(;;){if(!(n.m().a!==A.o&&n.m().a!==A.r))break
if(n.v(C.b([A.D,A.C],v)))r=n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179c\u17b7\u1792\u17b8 / Expected method name")
else if(n.m().a===A.i)r=n.a5()
else{q=n.m()
throw C.c(B.eL("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+C.j(q.b)+"' / Invalid method definition in class",q.c,q.d))}n.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
p=C.b([],s)
if(n.m().a!==A.d){D.a.j(p,J.N(n.t(A.i,m).b))
while(n.v(C.b([A.n],v)))D.a.j(p,J.N(n.t(A.i,m).b))}n.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
o=n.a6()
D.a.j(t,new B.bC(J.N(r.b),p,o))}n.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '}' for class body")
return new B.cB(J.N(w.b),u,t)},
a6(){var w,v,u=this
u.t(A.w,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' / Expected '{'")
w=C.b([],x.I)
for(;;){if(!(u.m().a!==A.o&&u.m().a!==A.r))break
v=u.cg()
if(v!=null)D.a.j(w,v)}u.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1794\u17d2\u179b\u17bb\u1780 / Expected '}'")
return new B.cx(w)},
c3(){var w=this.H()
this.v(C.b([A.k],x.B))
return new B.cO(w)},
H(){var w,v,u=this,t=u.du()
if(u.v(C.b([A.N],x.B))){w=u.H()
if(t instanceof B.bh)return new B.cw(t.a,w)
else if(t instanceof B.c5)return new B.d2(t.a,t.b,w)
else if(t instanceof B.c0)return new B.cR(t.a,t.b,w)
v=u.m()
throw C.c(B.eL("\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Invalid assignment target",v.c,v.d))}return t},
du(){var w,v=this.cb()
for(w=x.B;this.v(C.b([A.J],w));)v=new B.aP(v,"\u17ac",this.cb())
return v},
cb(){var w,v=this.c2()
for(w=x.B;this.v(C.b([A.I],w));)v=new B.aP(v,"\u1793\u17b7\u1784",this.c2())
return v},
c2(){var w=this,v=w.c_()
for(;;){if(!(w.m().a===A.az||w.m().a===A.aA))break
v=new B.aP(v,J.N(w.a5().b),w.c_())}return v},
c_(){var w=this,v=w.ci()
for(;;){if(!(w.m().a===A.aB||w.m().a===A.aC||w.m().a===A.aD||w.m().a===A.aE))break
v=new B.aP(v,J.N(w.a5().b),w.ci())}return v},
ci(){var w=this,v=w.c4()
for(;;){if(!(w.m().a===A.av||w.m().a===A.M))break
v=new B.aP(v,J.N(w.a5().b),w.c4())}return v},
c4(){var w=this,v=w.bt()
for(;;){if(!(w.m().a===A.aw||w.m().a===A.ax||w.m().a===A.ay))break
v=new B.aP(v,J.N(w.a5().b),w.bt())}return v},
bt(){var w,v,u=this
if(u.m().a===A.K||u.m().a===A.M){w=u.a5()
v=u.bt()
return new B.ds(J.N(w.b),v)}return u.d8()},
d8(){var w,v,u,t,s=this,r=s.br()
for(w=x.B,v=x.I;;)if(s.v(C.b([A.j],w))){u=C.b([],v)
if(s.m().a!==A.d){D.a.j(u,s.H())
while(s.v(C.b([A.n],w)))D.a.j(u,s.H())}s.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
r=new B.cQ(r,u)}else if(s.v(C.b([A.O],w)))r=new B.c5(r,J.N(s.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17b6\u1787\u17b7\u1780 / Expected member name after '.'").b))
else if(s.v(C.b([A.Q],w))){t=s.H()
s.t(A.x,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
r=new B.c0(r,t)}else break
return r},
br(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",j="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ':' / Expected ':'",i=x.B
if(l.v(C.b([A.am],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.n(i,w)
return new B.db(C.kq(i[w].b))}if(l.v(C.b([A.an],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.n(i,w)
return new B.bI(J.N(i[w].b))}if(l.v(C.b([A.ao],i)))return A.b0
if(l.v(C.b([A.ap],i)))return A.b_
if(l.v(C.b([A.aq],i)))return A.b8
if(l.v(C.b([A.ar,A.as],i)))return A.ba
if(l.v(C.b([A.i],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.n(i,w)
return new B.bh(J.N(i[w].b))}if(l.v(C.b([A.at],i))){v=l.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 '\u1790\u17d2\u1798\u17b8' / Expected class name after '\u1790\u17d2\u1798\u17b8'")
l.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.b([],x.I)
if(l.m().a!==A.d){D.a.j(u,l.H())
while(l.v(C.b([A.n],i)))D.a.j(u,l.H())}l.t(A.d,k)
return new B.d8(J.N(v.b),u)}if(l.v(C.b([A.j],i))){t=l.H()
l.t(A.d,k)
return t}if(l.v(C.b([A.Q],i))){s=C.b([],x.I)
if(l.m().a!==A.x){D.a.j(s,l.H())
while(l.v(C.b([A.n],i)))D.a.j(s,l.H())}l.t(A.x,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
return new B.cv(s)}if(l.v(C.b([A.w],i))){r=C.b([],x.l)
if(l.m().a!==A.x&&l.m().a!==A.o){q=l.br()
if(q instanceof B.bI)p=q.a
else p=q instanceof B.bh?q.a:q.i(0)
l.t(A.F,j)
w=x.J
D.a.j(r,new C.O(p,l.H(),w))
while(l.v(C.b([A.n],i))){o=l.br()
if(o instanceof B.bI)n=o.a
else n=o instanceof B.bh?o.a:o.i(0)
l.t(A.F,j)
D.a.j(r,new C.O(n,l.H(),w))}}l.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' / Expected '}'")
return new B.dc(r)}m=l.m()
throw C.c(B.eL("\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 / Syntax error near '"+C.j(m.b)+"'",m.c,m.d))}}
B.cN.prototype={}
B.cz.prototype={}
B.p.prototype={
a7(){return"TokenType."+this.b}}
B.ai.prototype={
i(d){var w=this
return"Token("+w.a.i(0)+", "+C.j(w.b)+", "+w.c+":"+w.d+")"}}
var z=a.updateTypes(["@(z)","~()","~(h)","d(+(B,d),+(B,d))","B(+(B,d))","d()","T<h,~(y)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<w?>"])
B.hV.prototype={
$0(){return D.h.ev(1000*this.a.now())},
$S:35}
B.h9.prototype={
$0(){var w=this.a
w.J(new B.h8(w))},
$S:0}
B.h8.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
B.h3.prototype={
$0(){var w=this.a,v=!w.r
w.r=v
B.mb(v?"dark":"light")},
$S:0}
B.h2.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
B.h1.prototype={
$0(){var w=this.a
w.f=this.b
w.d=!1},
$S:0}
B.h6.prototype={
$0(){var w=this.a
w.J(new B.h5(w))},
$S:0}
B.h5.prototype={
$0(){this.a.e=!0},
$S:0}
B.h7.prototype={
$0(){var w=this.a
w.J(new B.h4(w))},
$S:0}
B.h4.prototype={
$0(){this.a.e=!1},
$S:0}
B.ih.prototype={
$0(){this.a.d=!0},
$S:0}
B.ii.prototype={
$0(){var w=this.a
if(w.c!=null)w.J(new B.ig(w))},
$S:0}
B.ig.prototype={
$0(){this.a.d=!1},
$S:0}
B.ij.prototype={
$0(){this.a.e=!0},
$S:0}
B.ik.prototype={
$0(){var w,v,u=this.a
u.e=!1
u.f=!0
w=this.b
u.w=D.f.ag(w.w.a,1000)
v=w.a==="success"
u.x=!v
if(v){w=w.b
u.r=w.length===0?"(\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":w}else{w=w.d
u.r=w==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Unknown Execution Error)":w}},
$S:0}
B.il.prototype={
$0(){var w=this.a
w.e=!1
w.x=w.f=!0
w.r="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.w=0},
$S:0}
B.im.prototype={
$1(d){C.o(d)
return this.a.dq()},
$S:1}
B.io.prototype={
$1(d){C.o(d)
return this.a.dr()},
$S:1}
B.hy.prototype={
$1(d){C.o(d)
return this.a.c.$0()},
$S:1}
B.hz.prototype={
$1(d){C.o(d)
return this.a.d.$0()},
$S:1}
B.hA.prototype={
$1(d){C.o(d)
return this.a.e.$0()},
$S:1}
B.iJ.prototype={
$0(){var w=this.a,v=this.b
w.d=v
v=A.jn.p(0,v)
w.e=v==null?"":v
w.f='\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1795\u17d2\u1791\u17bb\u1780\u17d4 \u1785\u17bb\u1785 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4'
w.w=!1
w.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"},
$S:0}
B.iI.prototype={
$0(){var w=this.a
w.e=w.e+this.b},
$S:0}
B.iK.prototype={
$0(){this.a.r="\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a..."},
$S:0}
B.iL.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r=""+D.f.ag(v.w.a,1000)+"ms"
if(u){v=v.b
w.f=v.length===0?"(\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":v}else{v=v.d
w.f=v==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Execution Error)":v}},
$S:0}
B.iM.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.iF.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r="Syntax Check"
if(u)w.f="\u2713 \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u179b\u17d2\u17a2! (Parsed "+v.b+" tokens cleanly)"
else{v=v.d
w.f="\u2717 \u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u17d6 "+(v==null?"Invalid syntax":v)}},
$S:0}
B.iG.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.iH.prototype={
$0(){var w=this.a
w.f=""
w.r="\u1794\u17b6\u1793\u179f\u1798\u17d2\u17a2\u17b6\u178f"
w.w=!1},
$S:0}
B.iO.prototype={
$1(d){var w=d.gaa()
return this.a.dv(C.j(w==null?null:w.gX()))},
$S:3}
B.iP.prototype={
$1(d){C.o(d)
return this.a.d9()},
$S:1}
B.iQ.prototype={
$1(d){C.o(d)
return this.a.dc()},
$S:1}
B.iR.prototype={
$1(d){C.o(d)
return this.a.dF()},
$S:1}
B.iS.prototype={
$1(d){var w=d.gaa()
w=w==null?null:w.gX()
this.a.e=C.j(w==null?"":w)},
$S:3}
B.iN.prototype={
$1(d){C.o(d)
return this.a.dt(this.b)},
$S:1}
B.iW.prototype={
$1(d){return C.W(d).length!==0},
$S:10}
B.iX.prototype={
$1(d){C.W(d)
return D.b.G(this.a,d)||D.b.G(this.b,d)},
$S:10}
B.iY.prototype={
$2(d,e){var w=x.X
w.a(d)
return D.f.aA(w.a(e).b,d.b)},
$S:z+3}
B.iZ.prototype={
$1(d){return x.X.a(d).a},
$S:z+4}
B.j0.prototype={
$1(d){if(J.ag(d.gaa(),d.gf2()))this.a.a.b2()},
$S:3}
B.j1.prototype={
$1(d){var w=this.a
w.J(new B.j_(w,d))},
$S:3}
B.j_.prototype={
$0(){var w=this.b.gaa()
w=w==null?null:w.gX()
this.a.d=C.j(w==null?"":w)},
$S:0}
B.j2.prototype={
$1(d){if(J.ag(d.gcG(),"Escape"))this.a.a.b2()},
$S:3}
B.j3.prototype={
$1(d){C.o(d)
return this.a.a.b2()},
$S:1}
B.j4.prototype={
$1(d){var w
C.o(d)
w=this.a
w.a.eH(this.b.a)
w.a.b2()},
$S:1}
B.hZ.prototype={
$1(d){C.o(d)
return this.a.e.$1(this.b.a)},
$S:1}
B.i3.prototype={
$1(d){C.o(d)
return this.a.d.$1(this.b.a)},
$S:1}
B.jV.prototype={
$1(d){C.o(d)
if((C.br(d.metaKey)||C.br(d.ctrlKey))&&C.W(d.key)==="k"){d.preventDefault()
this.a.$0()}},
$S:37}
B.jF.prototype={
$1(d){return B.fN(d)},
$S:11}
B.jG.prototype={
$1(d){x.Y.a(d)
return'"'+C.j(d.a)+'": '+B.fN(d.b)},
$S:39}
B.jz.prototype={
$1(d){this.a.$1(J.kS(x.j.a(d),new B.jA(),x.N).W(0," ")+"\n")
return null},
$S:5}
B.jA.prototype={
$1(d){return B.fN(d)},
$S:11}
B.jy.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aW(d)
if(w.gM(d))throw C.c(B.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=w.p(d,0)
if(typeof v=="string")return v.length
if(u.b(v))return J.aD(v)
if(x.f.b(v))return v.gl(v)
throw C.c(B.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u17a2\u1780\u17d2\u179f\u179a \u1794\u1789\u17d2\u1787\u17b8 \u17ac\u179c\u178f\u17d2\u1790\u17bb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires string, array, or object"))},
$S:5}
B.jB.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aW(d)
if(w.gM(d))return"\u1791\u1791\u17c1"
v=w.p(d,0)
if(v==null)return"\u1791\u1791\u17c1"
if(C.fH(v))return"\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6"
if(typeof v=="number")return"\u179b\u17c1\u1781"
if(typeof v=="string")return"\u17a2\u1780\u17d2\u179f\u179a"
if(u.b(v))return"\u1794\u1789\u17d2\u1787\u17b8"
if(x.f.b(v))return"\u179c\u178f\u17d2\u1790\u17bb"
if(v instanceof B.bm)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a.a+")"
if(v instanceof B.bk)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a+")"
return"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"},
$S:5}
B.jx.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.aW(d)
if(w.gl(d)<2)throw C.c(B.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.p(d,0)
u=w.p(d,1)
if(t.b(v)){J.ct(v,u)
return v}throw C.c(B.M("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 (Array) \u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u1793\u17d2\u1790\u17c2\u1798' requires array"))},
$S:5}
B.hD.prototype={
$1(d){return this.a.C(x.F.a(d),this.b)},
$S:z+0}
B.hE.prototype={
$1(d){return this.a.C(x.F.a(d),this.b)},
$S:z+0}
B.hF.prototype={
$1(d){return this.a.C(x.F.a(d),this.b)},
$S:z+0}
B.hG.prototype={
$1(d){return this.a.C(x.F.a(d),this.b)},
$S:z+0}
B.jU.prototype={
$1(d){this.a.a+=d},
$S:7};(function aliases(){var w=B.ah.prototype
w.bR=w.b0})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a.installStaticTearOff
w(B,"ot","ng",5)
var s
v(s=B.cu.prototype,"gdN","dO",1)
v(s,"gdL","dM",1)
u(s,"gdw","dz",2)
t(B,"fL",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["fK",function(){return B.fK(null,null,null,x.z)},function(d){return B.fK(null,null,null,d)},function(d,e){return B.fK(null,d,null,e)},function(d,e,f){return B.fK(d,null,e,f)}],6,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.cJ,C.aS)
w(B.bX,B.cJ)
v(C.cF,[B.hV,B.h9,B.h8,B.h3,B.h2,B.h1,B.h6,B.h5,B.h7,B.h4,B.ih,B.ii,B.ig,B.ij,B.ik,B.il,B.iJ,B.iI,B.iK,B.iL,B.iM,B.iF,B.iG,B.iH,B.j_])
v(C.w,[B.i0,B.fF,B.dP,B.i5,B.fD,B.ah,B.a2,B.a5,B.B,B.z,B.bg,B.am,B.bl,B.bk,B.bm,B.cX,B.eQ,B.hC,B.hM,B.eK,B.cN,B.cz,B.ai])
v(C.k,[B.u,B.aQ,B.aT])
v(B.u,[B.fI,B.fM,B.fP,B.fO,B.a7,B.b9,B.fR,B.fS,B.a8,B.r,B.bd,B.Z,B.K,B.fW,B.fJ,B.e5,B.fQ,B.fT,B.fX,B.fY,B.aN,B.e4,B.bb,B.fV,B.cp,B.cr,B.cq,B.as,B.D,B.e,B.P,B.f,B.a3,B.a_,B.ep,B.es,B.eV,B.f2,B.ea,B.ej,B.eq,B.er,B.eP])
v(C.fk,[B.hB,B.em,B.hc,B.h0,B.i4,B.hs,B.p])
w(B.fs,C.bQ)
w(B.fm,C.bG)
v(C.bW,[B.eX,B.eY])
v(B.aT,[B.aX,B.V,B.c8,B.cb])
v(B.ah,[B.cu,B.fd,B.ft,B.fx])
v(C.aY,[B.im,B.io,B.hy,B.hz,B.hA,B.iO,B.iP,B.iQ,B.iR,B.iS,B.iN,B.iW,B.iX,B.iZ,B.j0,B.j1,B.j2,B.j3,B.j4,B.hZ,B.i3,B.jV,B.jF,B.jG,B.jz,B.jA,B.jy,B.jB,B.jx,B.hD,B.hE,B.hF,B.hG,B.jU])
w(B.iY,C.cG)
v(B.z,[B.db,B.bI,B.bU,B.da,B.cv,B.dc,B.bh,B.dr,B.ds,B.aP,B.cw,B.c5,B.d2,B.c0,B.cR,B.cQ,B.d8,B.du,B.de,B.cx,B.c_,B.dx,B.cP,B.bC,B.cB,B.dh,B.cO])
v(B.cX,[B.hN,B.hT,B.eT])})()
C.lD(b.typeUniverse,JSON.parse('{"cJ":{"aS":["1"],"cc":["1"],"q":["1"],"i":["1"]},"bX":{"cJ":["1"],"aS":["1"],"cc":["1"],"q":["1"],"i":["1"]},"fI":{"u":[],"k":[]},"fM":{"u":[],"k":[]},"fP":{"u":[],"k":[]},"fO":{"u":[],"k":[]},"a7":{"u":[],"k":[]},"b9":{"u":[],"k":[]},"fR":{"u":[],"k":[]},"fS":{"u":[],"k":[]},"a8":{"u":[],"k":[]},"r":{"u":[],"k":[]},"bd":{"u":[],"k":[]},"Z":{"u":[],"k":[]},"K":{"u":[],"k":[]},"fW":{"u":[],"k":[]},"fJ":{"u":[],"k":[]},"e5":{"u":[],"k":[]},"fQ":{"u":[],"k":[]},"fT":{"u":[],"k":[]},"fX":{"u":[],"k":[]},"fY":{"u":[],"k":[]},"aN":{"u":[],"k":[]},"e4":{"u":[],"k":[]},"bb":{"u":[],"k":[]},"fV":{"u":[],"k":[]},"cp":{"u":[],"k":[]},"cr":{"u":[],"k":[]},"cq":{"u":[],"k":[]},"as":{"u":[],"k":[]},"D":{"u":[],"k":[]},"e":{"u":[],"k":[]},"P":{"u":[],"k":[]},"f":{"u":[],"k":[]},"a3":{"u":[],"k":[]},"a_":{"u":[],"k":[]},"fF":{"mD":[]},"dP":{"ke":[]},"fD":{"nq":[]},"fs":{"i8":[]},"aT":{"k":[]},"aQ":{"k":[]},"fm":{"au":[],"l":[],"ad":[]},"eX":{"l":[],"ad":[]},"u":{"k":[]},"eY":{"l":[],"ad":[]},"aX":{"aT":[],"k":[]},"cu":{"ah":["aX"],"ah.T":"aX"},"V":{"aT":[],"k":[]},"fd":{"ah":["V"],"ah.T":"V"},"ep":{"u":[],"k":[]},"es":{"u":[],"k":[]},"c8":{"aT":[],"k":[]},"ft":{"ah":["c8"],"ah.T":"c8"},"cb":{"aT":[],"k":[]},"fx":{"ah":["cb"],"ah.T":"cb"},"eV":{"u":[],"k":[]},"f2":{"u":[],"k":[]},"ea":{"u":[],"k":[]},"ej":{"u":[],"k":[]},"eq":{"u":[],"k":[]},"er":{"u":[],"k":[]},"eP":{"u":[],"k":[]},"bC":{"z":[]},"db":{"z":[]},"bI":{"z":[]},"bU":{"z":[]},"da":{"z":[]},"cv":{"z":[]},"dc":{"z":[]},"bh":{"z":[]},"dr":{"z":[]},"ds":{"z":[]},"aP":{"z":[]},"cw":{"z":[]},"c5":{"z":[]},"d2":{"z":[]},"c0":{"z":[]},"cR":{"z":[]},"cQ":{"z":[]},"d8":{"z":[]},"du":{"z":[]},"de":{"z":[]},"cx":{"z":[]},"c_":{"z":[]},"dx":{"z":[]},"cP":{"z":[]},"cB":{"z":[]},"dh":{"z":[]},"cO":{"z":[]}}'))
var y={n:'# \u17e1. \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',b:"https://github.com/sengson-great/KhmerLang",c:"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a / Expected parameter name",m:"\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1794\u1789\u17d2\u1787\u17b8\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / Array index must be a number"}
var x=(function rtii(){var w=C.b8
return{F:w("z"),R:w("am"),w:w("L<h,h>"),O:w("bX<h>"),h:w("l"),A:w("bg"),c:w("aQ"),I:w("x<z>"),i:w("x<k>"),_:w("x<bC>"),l:w("x<O<h,z>>"),V:w("x<+(B,d)>"),s:w("x<h>"),S:w("x<ai>"),B:w("x<p>"),W:w("x<a2>"),n:w("bl"),t:w("t<z>"),a:w("t<h>"),b:w("t<p>"),P:w("t<a2>"),j:w("t<@>"),J:w("O<h,z>"),Y:w("O<@,@>"),f:w("T<@,@>"),Z:w("aa<+(B,d),B>"),X:w("+(B,d)"),T:w("kc"),g:w("B(+(B,d))"),D:w("aT"),q:w("u"),N:w("h"),d:w("p"),U:w("dv<h>"),Q:w("aM(h)"),z:w("@"),e:w("e5<@>"),H:w("~"),M:w("~()"),v:w("~(y)")}})();(function constants(){var w=a.makeConstList
A.b_=new B.bU(!1)
A.b0=new B.bU(!0)
A.b1=new B.hc(4,"solid")
A.b8=new B.da()
A.x2=new B.i5()
A.ba=new B.dr()
A.bA=new C.aZ(2e6)
A.a7=new B.hs(1,"bold")
A.bB=new B.ep(null)
A.kr=new C.a("\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions) ",null)
A.nB=new C.a("#",null)
A.c=w([A.nB],x.i)
A.pw=new B.P("#functions",null,"heading-anchor",null,null,null,A.c,null)
A.dY=w([A.kr,A.pw],x.i)
A.rx=new B.a7(A.dY,null)
A.lp=new C.a("\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.mB=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.eE=w([A.mB],x.i)
A.Z=new B.f(null,A.eE,null)
A.m4=new C.a(" \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1798\u1780\u179c\u17b7\u1789\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.m3=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb",null)
A.hB=w([A.m3],x.i)
A.aU=new B.f(null,A.hB,null)
A.n2=new C.a(" (return)\u17d6",null)
A.dE=w([A.lp,A.Z,A.m4,A.aU,A.n2],x.i)
A.te=new B.K(null,null,A.dE,null)
A.bo=new B.V("functions.khmer","KHMER",'# \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17bb\u1780\u17c4\u178e\u1780\u17c2\u1784\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u1794\u178e\u17d2\u178f\u17c4\u1799, \u1791\u1791\u17b9\u1784) {\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1794\u178e\u17d2\u178f\u17c4\u1799 * \u1791\u1791\u17b9\u1784\n}\n\n\u178f\u17b6\u17c6\u1784 \u1795\u17d2\u1791\u17c3 = \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u17e1\u17e0, \u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u179f\u179a\u17bb\u1794\u1782\u17ba:", \u1795\u17d2\u1791\u17c3, "\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1780\u17b6\u179a\u17c9\u17c1")',null,null)
A.cu=w([A.rx,A.te,A.bo],x.i)
A.tF=new B.a8("functions",A.cu,null)
A.kQ=new C.a("Recursion (\u1780\u17bc\u178a Fibonacci) ",null)
A.pK=new B.P("#recursion",null,"heading-anchor",null,null,null,A.c,null)
A.iy=w([A.kQ,A.pK],x.i)
A.rz=new B.a7(A.iy,null)
A.lC=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 (Recursive Functions) \u1799\u17c9\u17b6\u1784\u179a\u179b\u17bc\u1793\u17d6",null)
A.fp=w([A.lC],x.i)
A.tw=new B.K(null,null,A.fp,null)
A.bp=new B.V("fibonacci.khmer","KHMER",'# \u1780\u17bc\u178a\u179a\u1780\u179b\u17c1\u1781 Fibonacci \u178f\u17b6\u1798\u1794\u17c2\u1794 Recursive\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}',null,null)
A.h4=w([A.rz,A.tw,A.bp],x.i)
A.tK=new B.a8("recursion",A.h4,null)
A.no=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (Object-Oriented Programming) ",null)
A.pQ=new B.P("#classes",null,"heading-anchor",null,null,null,A.c,null)
A.hP=w([A.no,A.pQ],x.i)
A.rw=new B.a7(A.hP,null)
A.nN=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u178f\u17b6\u1798\u1794\u17c2\u1794 OOP \u1796\u17c1\u1789\u179b\u17c1\u1789\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u1782\u17c6\u179a\u17bc\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.nS=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.c8=w([A.nS],x.i)
A.a1=new B.f(null,A.c8,null)
A.n6=new C.a(" (Class) \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Constructor \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.mF=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(...)",null)
A.fD=w([A.mF],x.i)
A.qu=new B.f(null,A.fD,null)
A.v=new C.a("\u17d4",null)
A.d5=w([A.nN,A.a1,A.n6,A.qu,A.v],x.i)
A.tj=new B.K(null,null,A.d5,null)
A.lc=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.me=new C.a("\u1790\u17d2\u1798\u17b8",null)
A.cq=w([A.me],x.i)
A.aP=new B.f(null,A.cq,null)
A.nX=new C.a(" (New)\u17d6",null)
A.eZ=w([A.lc,A.aP,A.nX],x.i)
A.td=new B.K(null,null,A.eZ,null)
A.bm=new B.V("person_class.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1798\u1793\u17bb\u179f\u17d2\u179f {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7, \u17a2\u17b6\u1799\u17bb) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n        \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb = \u17a2\u17b6\u1799\u17bb\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1787\u1798\u17d2\u179a\u17b6\u1794\u179f\u17bd\u179a! \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7", \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u17a2\u17b6\u1799\u17bb", \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb, "\u1786\u17d2\u1793\u17b6\u17c6")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1 = \u1790\u17d2\u1798\u17b8 \u1798\u1793\u17bb\u179f\u17d2\u179f("\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784", \u17e2\u17e1)\n\u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1.\u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793()',null,null)
A.cK=w([A.rw,A.tj,A.td,A.bm],x.i)
A.tS=new B.a8("classes",A.cK,null)
A.kE=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (OOP Inheritance: `\u1794\u1793\u17d2\u178f\u1796\u17b8`) ",null)
A.pL=new B.P("#inheritance",null,"heading-anchor",null,null,null,A.c,null)
A.ja=w([A.kE,A.pL],x.i)
A.rv=new B.a7(A.ja,null)
A.oy=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Superclass) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17a1\u17be\u1784\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.mT=new C.a("\u1794\u1793\u17d2\u178f\u1796\u17b8",null)
A.f1=w([A.mT],x.i)
A.aT=new B.f(null,A.f1,null)
A.lx=new C.a(" (extends)\u17d4 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 (Subclass) \u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1799\u1780\u179b\u1780\u17d2\u1781\u178e\u17c8\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7 \u1793\u17b7\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u17d6",null)
A.iQ=w([A.oy,A.aT,A.lx],x.i)
A.tm=new B.K(null,null,A.iQ,null)
A.bi=new B.V("inheritance.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n# \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8 \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()',null,null)
A.bZ=w([A.rv,A.tm,A.bi],x.i)
A.tU=new B.a8("inheritance",A.bZ,null)
A.dM=w([A.tF,A.tK,A.tS,A.tU],x.i)
A.bC=new B.aQ(A.dM,null)
A.l1=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Built-in Functions) ",null)
A.pS=new B.P("#builtins",null,"heading-anchor",null,null,null,A.c,null)
A.j7=w([A.l1,A.pS],x.i)
A.rD=new B.a7(A.j7,null)
A.nK=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a\u178a\u17c2\u179b\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1798\u1780\u179f\u17d2\u179a\u17b6\u1794\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1797\u17b6\u179f\u17b6\u17d6",null)
A.fd=w([A.nK],x.i)
A.ts=new B.K(null,null,A.fd,null)
A.lu=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Builtin)",null)
A.iB=w([A.lu],x.i)
A.wk=new B.as(A.iB,null)
A.om=new C.a("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Usage)",null)
A.dt=w([A.om],x.i)
A.wg=new B.as(A.dt,null)
A.ot=new C.a("\u1780\u17b6\u179a\u1796\u1793\u17d2\u1799\u179b\u17cb (Explanation)",null)
A.cx=w([A.ot],x.i)
A.wi=new B.as(A.cx,null)
A.bS=w([A.wk,A.wg,A.wi],x.i)
A.wy=new B.D(A.bS,null)
A.eY=w([A.wy],x.i)
A.wr=new B.cr(A.eY,null)
A.mq=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",null)
A.hG=w([A.mq],x.i)
A.aL=new B.f(null,A.hG,null)
A.fJ=w([A.aL],x.i)
A.uA=new B.e(A.fJ,null)
A.nh=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u1798\u17d2\u179b\u17c3:", x)',null)
A.ds=w([A.nh],x.i)
A.qb=new B.f(null,A.ds,null)
A.cL=w([A.qb],x.i)
A.vD=new B.e(A.cL,null)
A.og=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u178f\u1798\u17d2\u179b\u17c3\u17a2\u1790\u17c1\u179a\u1793\u17c5\u179b\u17be\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 (Standard Output)",null)
A.fk=w([A.og],x.i)
A.w1=new B.e(A.fk,null)
A.dL=w([A.uA,A.vD,A.w1],x.i)
A.wx=new B.D(A.dL,null)
A.lg=new C.a("\u1794\u17d2\u179a\u179c\u17c2\u1784(...)",null)
A.iO=w([A.lg],x.i)
A.qF=new B.f(null,A.iO,null)
A.jc=w([A.qF],x.i)
A.v_=new B.e(A.jc,null)
A.kg=new C.a('\u1794\u17d2\u179a\u179c\u17c2\u1784("\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6")',null)
A.dd=w([A.kg],x.i)
A.ql=new B.f(null,A.dd,null)
A.hZ=w([A.ql],x.i)
A.uP=new B.e(A.hZ,null)
A.n_=new C.a("\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u179c\u17c2\u1784\u178f\u17bd\u17a2\u1780\u17d2\u179f\u179a \u17ac\u1785\u17c6\u1793\u17bd\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784 Array",null)
A.f8=w([A.n_],x.i)
A.vN=new B.e(A.f8,null)
A.jk=w([A.v_,A.uP,A.vN],x.i)
A.wD=new B.D(A.jk,null)
A.kV=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(...)",null)
A.ft=w([A.kV],x.i)
A.pZ=new B.f(null,A.ft,null)
A.fc=w([A.pZ],x.i)
A.vm=new B.e(A.fc,null)
A.mm=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(\u17e1\u17e2\u17e3)",null)
A.iC=w([A.mm],x.i)
A.qM=new B.f(null,A.iC,null)
A.bU=w([A.qM],x.i)
A.uM=new B.e(A.bU,null)
A.o1=new C.a("\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (string, number, boolean, null, class, etc.)",null)
A.hi=w([A.o1],x.i)
A.uX=new B.e(A.hi,null)
A.e5=w([A.vm,A.uM,A.uX],x.i)
A.wI=new B.D(A.e5,null)
A.n1=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(...)",null)
A.iq=w([A.n1],x.i)
A.r_=new B.f(null,A.iq,null)
A.dD=w([A.r_],x.i)
A.uQ=new B.e(A.dD,null)
A.nG=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8)",null)
A.iJ=w([A.nG],x.i)
A.qj=new B.f(null,A.iJ,null)
A.fs=w([A.qj],x.i)
A.vo=new B.e(A.fs,null)
A.nZ=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798\u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8\u1791\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.h7=w([A.nZ],x.i)
A.uL=new B.e(A.h7,null)
A.dC=w([A.uQ,A.vo,A.uL],x.i)
A.wT=new B.D(A.dC,null)
A.hJ=w([A.wx,A.wD,A.wI,A.wT],x.i)
A.uz=new B.cq(A.hJ,null)
A.hA=w([A.wr,A.uz],x.i)
A.uu=new B.cp(A.hA,null)
A.fN=w([A.uu],x.i)
A.rn=new B.r(null,"table-responsive",null,null,null,A.fN,null)
A.fK=w([A.rD,A.ts,A.rn],x.i)
A.tL=new B.a8("builtins",A.fK,null)
A.mt=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd (Tools & IDEs) ",null)
A.pM=new B.P("#ides",null,"heading-anchor",null,null,null,A.c,null)
A.cj=w([A.mt,A.pM],x.i)
A.rG=new B.a7(A.cj,null)
A.mD=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u179a\u17bd\u179b\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u17a2\u17c1\u1780\u17bc\u17a1\u17bc\u179f\u17ca\u17b8 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u179a\u17bd\u1798\u1798\u17b6\u1793\u17a7\u1794\u1780\u179a\u178e\u17cd\u1791\u17c6\u1793\u17be\u1794\u17d7\u1787\u17b6\u1785\u17d2\u179a\u17be\u1793\u17d6",null)
A.ee=w([A.mD],x.i)
A.tt=new B.K(null,null,A.ee,null)
A.ob=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a Khmer IDE (Cross-Platform)\u17d6 ",null)
A.hv=w([A.ob],x.i)
A.u7=new B.a_(A.hv,null)
A.oe=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799 Flutter \u1798\u17b6\u1793\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793 Dart Engine \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u179b\u17be macOS, Windows, Linux \u1793\u17b7\u1784 Web \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb \u1787\u17b6\u1798\u17bd\u1799 Virtual Khmer Keyboard, Tabs, AST Inspector \u1793\u17b7\u1784 Output Console\u17d4",null)
A.eA=w([A.u7,A.oe],x.i)
A.t4=new B.Z(null,null,null,A.eA,null)
A.oo=new C.a("Programiz-Style Web IDE\u17d6 ",null)
A.ey=w([A.oo],x.i)
A.ub=new B.a_(A.ey,null)
A.lV=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798 Programiz \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be Web Browser \u1787\u17b6\u1798\u17bd\u1799 Python Backend Server\u17d4",null)
A.f_=w([A.ub,A.lV],x.i)
A.rS=new B.Z(null,null,null,A.f_,null)
A.mX=new C.a("Command Line Interface (CLI) & REPL\u17d6 ",null)
A.fr=w([A.mX],x.i)
A.ui=new B.a_(A.fr,null)
A.kC=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u1794\u1789\u17d2\u1787\u17b6\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8 Terminal \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u17af\u1780\u179f\u17b6\u179a ",null)
A.o5=new C.a(".khmer",null)
A.eV=w([A.o5],x.i)
A.aQ=new B.f(null,A.eV,null)
A.e4=w([A.ui,A.kC,A.aQ,A.v],x.i)
A.rY=new B.Z(null,null,null,A.e4,null)
A.cv=w([A.t4,A.rS,A.rY],x.i)
A.x0=new B.bd(null,null,A.cv,null)
A.bX=w([A.rG,A.tt,A.x0],x.i)
A.tJ=new B.a8("ides",A.bX,null)
A.nE=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Khmer Syntax Cheat Sheet) ",null)
A.pO=new B.P("#cheat-sheet",null,"heading-anchor",null,null,null,A.c,null)
A.c9=w([A.nE,A.pO],x.i)
A.rF=new B.a7(A.c9,null)
A.n8=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u1799\u17c4\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)\u17d6",null)
A.bW=w([A.n8],x.i)
A.tu=new B.K(null,null,A.bW,null)
A.ll=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Keyword)",null)
A.de=w([A.ll],x.i)
A.wp=new B.as(A.de,null)
A.oz=new C.a("\u179f\u1798\u1798\u17bc\u179b\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Equivalent)",null)
A.fu=w([A.oz],x.i)
A.wf=new B.as(A.fu,null)
A.nJ=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb",null)
A.hF=w([A.nJ],x.i)
A.wn=new B.as(A.hF,null)
A.o_=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1780\u17bc\u178a",null)
A.ci=w([A.o_],x.i)
A.wo=new B.as(A.ci,null)
A.el=w([A.wp,A.wf,A.wn,A.wo],x.i)
A.wU=new B.D(A.el,null)
A.it=w([A.wU],x.i)
A.ws=new B.cr(A.it,null)
A.l8=new C.a("\u178f\u17b6\u17c6\u1784",null)
A.es=w([A.l8],x.i)
A.a0=new B.f(null,A.es,null)
A.j3=w([A.a0],x.i)
A.v4=new B.e(A.j3,null)
A.nk=new C.a("let / var",null)
A.fa=w([A.nk],x.i)
A.q3=new B.f(null,A.fa,null)
A.dm=w([A.q3],x.i)
A.vT=new B.e(A.dm,null)
A.kK=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1790\u17d2\u1798\u17b8",null)
A.i3=w([A.kK],x.i)
A.va=new B.e(A.i3,null)
A.nI=new C.a("\u178f\u17b6\u17c6\u1784 x = \u17e1\u17e0;",null)
A.hQ=w([A.nI],x.i)
A.r3=new B.f(null,A.hQ,null)
A.dK=w([A.r3],x.i)
A.vq=new B.e(A.dK,null)
A.dQ=w([A.v4,A.vT,A.va,A.vq],x.i)
A.wz=new B.D(A.dQ,null)
A.kn=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789",null)
A.fM=w([A.kn],x.i)
A.aO=new B.f(null,A.fM,null)
A.em=w([A.aO],x.i)
A.uD=new B.e(A.em,null)
A.ow=new C.a("print / echo",null)
A.hE=w([A.ow],x.i)
A.qJ=new B.f(null,A.hE,null)
A.j1=w([A.qJ],x.i)
A.vP=new B.e(A.j1,null)
A.lX=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb",null)
A.cQ=w([A.lX],x.i)
A.vS=new B.e(A.cQ,null)
A.ov=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8");',null)
A.fo=w([A.ov],x.i)
A.qh=new B.f(null,A.fo,null)
A.et=w([A.qh],x.i)
A.vy=new B.e(A.et,null)
A.e_=w([A.uD,A.vP,A.vS,A.vy],x.i)
A.wB=new B.D(A.e_,null)
A.kM=new C.a("\u1794\u17be",null)
A.ex=w([A.kM],x.i)
A.a_=new B.f(null,A.ex,null)
A.ev=w([A.a_],x.i)
A.v9=new B.e(A.ev,null)
A.ns=new C.a("if",null)
A.eN=w([A.ns],x.i)
A.qD=new B.f(null,A.eN,null)
A.cS=w([A.qD],x.i)
A.uZ=new B.e(A.cS,null)
A.kR=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c6\u1794\u17bc\u1784",null)
A.cG=w([A.kR],x.i)
A.vd=new B.e(A.cG,null)
A.n4=new C.a("\u1794\u17be (x > \u17e0) { ... }",null)
A.bO=w([A.n4],x.i)
A.r8=new B.f(null,A.bO,null)
A.jd=w([A.r8],x.i)
A.vf=new B.e(A.jd,null)
A.c5=w([A.v9,A.uZ,A.vd,A.vf],x.i)
A.wR=new B.D(A.c5,null)
A.lS=new C.a("\u17ac\u1794\u17be",null)
A.d_=w([A.lS],x.i)
A.aN=new B.f(null,A.d_,null)
A.fw=w([A.aN],x.i)
A.vK=new B.e(A.fw,null)
A.mf=new C.a("else if / elif",null)
A.hr=w([A.mf],x.i)
A.qU=new B.f(null,A.hr,null)
A.dz=w([A.qU],x.i)
A.vE=new B.e(A.dz,null)
A.lF=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",null)
A.fA=w([A.lF],x.i)
A.uN=new B.e(A.fA,null)
A.n3=new C.a("\u17ac\u1794\u17be (x == \u17e0) { ... }",null)
A.f2=w([A.n3],x.i)
A.qs=new B.f(null,A.f2,null)
A.f7=w([A.qs],x.i)
A.vG=new B.e(A.f7,null)
A.dc=w([A.vK,A.vE,A.uN,A.vG],x.i)
A.wO=new B.D(A.dc,null)
A.kd=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",null)
A.f4=w([A.kd],x.i)
A.aR=new B.f(null,A.f4,null)
A.ce=w([A.aR],x.i)
A.v8=new B.e(A.ce,null)
A.na=new C.a("else",null)
A.eJ=w([A.na],x.i)
A.qS=new B.f(null,A.eJ,null)
A.eg=w([A.qS],x.i)
A.uO=new B.e(A.eg,null)
A.mM=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1793\u17c1\u17c7",null)
A.hm=w([A.mM],x.i)
A.vM=new B.e(A.hm,null)
A.ly=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f { ... }",null)
A.cg=w([A.ly],x.i)
A.qd=new B.f(null,A.cg,null)
A.iN=w([A.qd],x.i)
A.vX=new B.e(A.iN,null)
A.il=w([A.v8,A.uO,A.vM,A.vX],x.i)
A.wN=new B.D(A.il,null)
A.np=new C.a("\u1781\u178e\u17c8",null)
A.ck=w([A.np],x.i)
A.X=new B.f(null,A.ck,null)
A.ib=w([A.X],x.i)
A.vp=new B.e(A.ib,null)
A.ok=new C.a("while",null)
A.eS=w([A.ok],x.i)
A.qO=new B.f(null,A.eS,null)
A.dx=w([A.qO],x.i)
A.vw=new B.e(A.dx,null)
A.lB=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c",null)
A.dI=w([A.lB],x.i)
A.vC=new B.e(A.dI,null)
A.mp=new C.a("\u1781\u178e\u17c8 (x > \u17e0) { ... }",null)
A.id=w([A.mp],x.i)
A.qk=new B.f(null,A.id,null)
A.h9=w([A.qk],x.i)
A.vR=new B.e(A.h9,null)
A.dF=w([A.vp,A.vw,A.vC,A.vR],x.i)
A.wt=new B.D(A.dF,null)
A.mw=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",null)
A.hw=w([A.mw],x.i)
A.aS=new B.f(null,A.hw,null)
A.cy=w([A.aS],x.i)
A.we=new B.e(A.cy,null)
A.nj=new C.a("for",null)
A.eM=w([A.nj],x.i)
A.r7=new B.f(null,A.eM,null)
A.fb=w([A.r7],x.i)
A.w0=new B.e(A.fb,null)
A.n5=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1798\u17b6\u1793\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1780\u17c6\u178e\u178f\u17cb",null)
A.cm=w([A.n5],x.i)
A.vx=new B.e(A.cm,null)
A.nn=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i=\u17e0; i<\u17e5; i=i+\u17e1)",null)
A.ij=w([A.nn],x.i)
A.q9=new B.f(null,A.ij,null)
A.jl=w([A.q9],x.i)
A.vB=new B.e(A.jl,null)
A.cU=w([A.we,A.w0,A.vx,A.vB],x.i)
A.wA=new B.D(A.cU,null)
A.ak=new C.a(" / ",null)
A.ny=new C.a("\u179c\u17b7\u1792\u17b8",null)
A.e0=w([A.ny],x.i)
A.qw=new B.f(null,A.e0,null)
A.fx=w([A.Z,A.ak,A.qw],x.i)
A.w6=new B.e(A.fx,null)
A.lk=new C.a("function / def",null)
A.fF=w([A.lk],x.i)
A.qp=new B.f(null,A.fF,null)
A.iA=w([A.qp],x.i)
A.vY=new B.e(A.iA,null)
A.l5=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a",null)
A.c1=w([A.l5],x.i)
A.vW=new B.e(A.c1,null)
A.nM=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17bc\u1780(\u1780, \u1781) { ... }",null)
A.cs=w([A.nM],x.i)
A.qV=new B.f(null,A.cs,null)
A.iu=w([A.qV],x.i)
A.w3=new B.e(A.iu,null)
A.dl=w([A.w6,A.vY,A.vW,A.w3],x.i)
A.wX=new B.D(A.dl,null)
A.iR=w([A.aU],x.i)
A.v7=new B.e(A.iR,null)
A.o3=new C.a("return",null)
A.eQ=w([A.o3],x.i)
A.qH=new B.f(null,A.eQ,null)
A.fn=w([A.qH],x.i)
A.vs=new B.e(A.fn,null)
A.nT=new C.a("\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1796\u17b8\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.dO=w([A.nT],x.i)
A.v6=new B.e(A.dO,null)
A.lK=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb \u1780 + \u1781",null)
A.dN=w([A.lK],x.i)
A.q2=new B.f(null,A.dN,null)
A.fy=w([A.q2],x.i)
A.uF=new B.e(A.fy,null)
A.fX=w([A.v7,A.vs,A.v6,A.uF],x.i)
A.wV=new B.D(A.fX,null)
A.iD=w([A.a1],x.i)
A.vA=new B.e(A.iD,null)
A.mQ=new C.a("class",null)
A.eI=w([A.mQ],x.i)
A.qx=new B.f(null,A.eI,null)
A.hK=w([A.qx],x.i)
A.wd=new B.e(A.hK,null)
A.lN=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP",null)
A.cc=w([A.lN],x.i)
A.vV=new B.e(A.cc,null)
A.lb=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u17b7\u179f\u17d2\u179f { ... }",null)
A.im=w([A.lb],x.i)
A.q1=new B.f(null,A.im,null)
A.j_=w([A.q1],x.i)
A.uI=new B.e(A.j_,null)
A.ik=w([A.vA,A.wd,A.vV,A.uI],x.i)
A.wL=new B.D(A.ik,null)
A.kc=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f",null)
A.bP=w([A.kc],x.i)
A.r2=new B.f(null,A.bP,null)
A.h2=w([A.r2],x.i)
A.vI=new B.e(A.h2,null)
A.n7=new C.a("constructor / __init__",null)
A.c_=w([A.n7],x.i)
A.qY=new B.f(null,A.c_,null)
A.eF=w([A.qY],x.i)
A.uT=new B.e(A.eF,null)
A.lq=new C.a("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u1794\u1784\u17d2\u1780\u17be\u178f\u179c\u178f\u17d2\u1790\u17bb",null)
A.cl=w([A.lq],x.i)
A.wc=new B.e(A.cl,null)
A.km=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) { \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7 }",null)
A.cb=w([A.km],x.i)
A.qv=new B.f(null,A.cb,null)
A.cN=w([A.qv],x.i)
A.vk=new B.e(A.cN,null)
A.fS=w([A.vI,A.uT,A.wc,A.vk],x.i)
A.wC=new B.D(A.fS,null)
A.kw=new C.a("\u1793\u17c1\u17c7",null)
A.fZ=w([A.kw],x.i)
A.qf=new B.f(null,A.fZ,null)
A.oq=new C.a("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",null)
A.j5=w([A.oq],x.i)
A.qB=new B.f(null,A.j5,null)
A.eG=w([A.qf,A.ak,A.qB],x.i)
A.vu=new B.e(A.eG,null)
A.o0=new C.a("this / self",null)
A.hC=w([A.o0],x.i)
A.qN=new B.f(null,A.hC,null)
A.iL=w([A.qN],x.i)
A.v2=new B.e(A.iL,null)
A.kX=new C.a("\u1799\u17c4\u1784\u1791\u17c5\u179b\u17be Object \u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793",null)
A.eX=w([A.kX],x.i)
A.vL=new B.e(A.eX,null)
A.la=new C.a('\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"',null)
A.ef=w([A.la],x.i)
A.r6=new B.f(null,A.ef,null)
A.ho=w([A.r6],x.i)
A.uH=new B.e(A.ho,null)
A.iS=w([A.vu,A.v2,A.vL,A.uH],x.i)
A.wM=new B.D(A.iS,null)
A.j2=w([A.aP],x.i)
A.w_=new B.e(A.j2,null)
A.nR=new C.a("new",null)
A.eP=w([A.nR],x.i)
A.qc=new B.f(null,A.eP,null)
A.fE=w([A.qc],x.i)
A.uB=new B.e(A.fE,null)
A.nx=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.hS=w([A.nx],x.i)
A.vQ=new B.e(A.hS,null)
A.kl=new C.a('\u178f\u17b6\u17c6\u1784 p = \u1790\u17d2\u1798\u17b8 \u179f\u17b7\u179f\u17d2\u179f("\u178f\u17b6\u179a\u17b6")',null)
A.c2=w([A.kl],x.i)
A.qZ=new B.f(null,A.c2,null)
A.cV=w([A.qZ],x.i)
A.uR=new B.e(A.cV,null)
A.cp=w([A.w_,A.uB,A.vQ,A.uR],x.i)
A.wQ=new B.D(A.cp,null)
A.ea=w([A.aT],x.i)
A.vr=new B.e(A.ea,null)
A.nc=new C.a("extends",null)
A.eK=w([A.nc],x.i)
A.qR=new B.f(null,A.eK,null)
A.iK=w([A.qR],x.i)
A.vZ=new B.e(A.iK,null)
A.m8=new C.a("\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Inheritance)",null)
A.h3=w([A.m8],x.i)
A.vg=new B.e(A.h3,null)
A.lL=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1798\u17b6 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c",null)
A.eq=w([A.lL],x.i)
A.qK=new B.f(null,A.eq,null)
A.dV=w([A.qK],x.i)
A.w4=new B.e(A.dV,null)
A.fj=w([A.vr,A.vZ,A.vg,A.w4],x.i)
A.wF=new B.D(A.fj,null)
A.lU=new C.a("\u1796\u17b7\u178f",null)
A.dZ=w([A.lU],x.i)
A.Y=new B.f(null,A.dZ,null)
A.dT=w([A.Y],x.i)
A.a2=new B.e(A.dT,null)
A.oc=new C.a("true",null)
A.eR=w([A.oc],x.i)
A.q7=new B.f(null,A.eR,null)
A.c3=w([A.q7],x.i)
A.w2=new B.e(A.c3,null)
A.mH=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1796\u17b7\u178f",null)
A.cf=w([A.mH],x.i)
A.uE=new B.e(A.cf,null)
A.ku=new C.a("\u178f\u17b6\u17c6\u1784 \u178f\u17d2\u179a\u17bc\u179c = \u1796\u17b7\u178f",null)
A.cI=w([A.ku],x.i)
A.q8=new B.f(null,A.cI,null)
A.jb=w([A.q8],x.i)
A.vl=new B.e(A.jb,null)
A.iM=w([A.a2,A.w2,A.uE,A.vl],x.i)
A.wu=new B.D(A.iM,null)
A.mE=new C.a("\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.hL=w([A.mE],x.i)
A.aM=new B.f(null,A.hL,null)
A.f3=w([A.aM],x.i)
A.vt=new B.e(A.f3,null)
A.nf=new C.a("false",null)
A.eL=w([A.nf],x.i)
A.qq=new B.f(null,A.eL,null)
A.j4=w([A.qq],x.i)
A.wb=new B.e(A.j4,null)
A.nr=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.i1=w([A.nr],x.i)
A.ve=new B.e(A.i1,null)
A.mc=new C.a("\u178f\u17b6\u17c6\u1784 \u1781\u17bb\u179f = \u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.iz=w([A.mc],x.i)
A.pX=new B.f(null,A.iz,null)
A.hq=w([A.pX],x.i)
A.uC=new B.e(A.hq,null)
A.fQ=w([A.vt,A.wb,A.ve,A.uC],x.i)
A.wP=new B.D(A.fQ,null)
A.mK=new C.a("\u1791\u1791\u17c1",null)
A.f5=w([A.mK],x.i)
A.aK=new B.f(null,A.f5,null)
A.hI=w([A.aK],x.i)
A.v0=new B.e(A.hI,null)
A.m_=new C.a("null / none",null)
A.j6=w([A.m_],x.i)
A.qr=new B.f(null,A.j6,null)
A.cR=w([A.qr],x.i)
A.w8=new B.e(A.cR,null)
A.kF=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1791\u1791\u17c1\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",null)
A.h6=w([A.kF],x.i)
A.uW=new B.e(A.h6,null)
A.l9=new C.a("\u178f\u17b6\u17c6\u1784 \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 = \u1791\u1791\u17c1",null)
A.cW=w([A.l9],x.i)
A.qI=new B.f(null,A.cW,null)
A.h0=w([A.qI],x.i)
A.vU=new B.e(A.h0,null)
A.hH=w([A.v0,A.w8,A.uW,A.vU],x.i)
A.ww=new B.D(A.hH,null)
A.hV=w([A.wz,A.wB,A.wR,A.wO,A.wN,A.wt,A.wA,A.wX,A.wV,A.wL,A.wC,A.wM,A.wQ,A.wF,A.wu,A.wP,A.ww],x.i)
A.ux=new B.cq(A.hV,null)
A.iU=w([A.ws,A.ux],x.i)
A.uw=new B.cp(A.iU,null)
A.ct=w([A.uw],x.i)
A.rc=new B.r(null,"table-responsive",null,null,null,A.ct,null)
A.jj=w([A.rF,A.tu,A.rc],x.i)
A.tT=new B.a8("cheat-sheet",A.jj,null)
A.lY=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb (Live Interactive Playground) ",null)
A.pF=new B.P("#playground",null,"heading-anchor",null,null,null,A.c,null)
A.hg=w([A.lY,A.pF],x.i)
A.rJ=new B.a7(A.hg,null)
A.nz=new C.a("\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1780\u17d2\u1793\u17bb\u1784 Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780! \u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u17ac\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1781\u17d2\u179b\u17bd\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780 \u179a\u17bd\u1785\u1785\u17bb\u1785 ",null)
A.nH=new C.a(' "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" ',null)
A.dA=w([A.nH],x.i)
A.u6=new B.a_(A.dA,null)
A.B=new C.a("\u17d6",null)
A.ht=w([A.nz,A.u6,A.B],x.i)
A.tk=new B.K(null,null,A.ht,null)
A.jP=new B.c8(null)
A.bR=w([A.rJ,A.tk,A.jP],x.i)
A.tO=new B.a8("playground",A.bR,null)
A.hd=w([A.tL,A.tJ,A.tT,A.tO],x.i)
A.bD=new B.aQ(A.hd,null)
A.lt=new C.a("\u17a2\u1790\u17c1\u179a \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables & Data Types) ",null)
A.pG=new B.P("#variables",null,"heading-anchor",null,null,null,A.c,null)
A.fz=w([A.lt,A.pG],x.i)
A.ru=new B.a7(A.fz,null)
A.lv=new C.a("\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.ml=new C.a(" (Let) \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u17d4 \u17a2\u1790\u17c1\u179a\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba dynamic-typed \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1795\u17d2\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6 \u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a (String), Boolean, \u17ac Null \u1794\u17b6\u1793\u178a\u17c4\u1799\u179f\u17c1\u179a\u17b8\u17d4",null)
A.e7=w([A.lv,A.a0,A.ml],x.i)
A.to=new B.K(null,null,A.e7,null)
A.lH=new C.a("\u179b\u17c1\u1781 (Numbers): ",null)
A.dy=w([A.lH],x.i)
A.u8=new B.a_(A.dy,null)
A.mi=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb (",null)
A.of=new C.a("10",null)
A.e1=w([A.of],x.i)
A.qo=new B.f(null,A.e1,null)
A.m=new C.a(", ",null)
A.kS=new C.a("3.14",null)
A.fB=w([A.kS],x.i)
A.r4=new B.f(null,A.fB,null)
A.lr=new C.a(") \u1793\u17b7\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (",null)
A.lj=new C.a("\u17e1\u17e0",null)
A.ic=w([A.lj],x.i)
A.qQ=new B.f(null,A.ic,null)
A.mO=new C.a("\u17e3.\u17e1\u17e4",null)
A.eh=w([A.mO],x.i)
A.qm=new B.f(null,A.eh,null)
A.o8=new C.a(")\u17d4",null)
A.fP=w([A.u8,A.mi,A.qo,A.m,A.r4,A.lr,A.qQ,A.m,A.qm,A.o8],x.i)
A.rV=new B.Z(null,null,null,A.fP,null)
A.kp=new C.a("\u17a2\u1780\u17d2\u179f\u179a (Strings): ",null)
A.ih=w([A.kp],x.i)
A.uc=new B.a_(A.ih,null)
A.m5=new C.a("\u179f\u179a\u179f\u17c1\u179a\u1793\u17c5\u1785\u1793\u17d2\u179b\u17c4\u17c7\u179f\u1789\u17d2\u1789\u17b6\u179f\u1798\u17d2\u179a\u1784\u17cb ",null)
A.lW=new C.a('"..."',null)
A.hs=w([A.lW],x.i)
A.qz=new B.f(null,A.hs,null)
A.mV=new C.a(" \u17ac ",null)
A.nw=new C.a("'...'",null)
A.ed=w([A.nw],x.i)
A.q4=new B.f(null,A.ed,null)
A.fh=w([A.uc,A.m5,A.qz,A.mV,A.q4,A.v],x.i)
A.rW=new B.Z(null,null,null,A.fh,null)
A.oa=new C.a("\u1794\u17ca\u17bc\u179b\u17b8\u1793 (Booleans): ",null)
A.ji=w([A.oa],x.i)
A.ud=new B.a_(A.ji,null)
A.al=new C.a("\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.m9=new C.a(" (True) \u1793\u17b7\u1784 ",null)
A.mG=new C.a(" (False)\u17d4",null)
A.co=w([A.ud,A.al,A.Y,A.m9,A.aM,A.mG],x.i)
A.t3=new B.Z(null,null,null,A.co,null)
A.or=new C.a("\u1791\u1791\u17c1 (Null): ",null)
A.d1=w([A.or],x.i)
A.uf=new B.a_(A.d1,null)
A.mk=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u1798\u17d2\u179b\u17c3\u178a\u17c2\u179b\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4",null)
A.eC=w([A.uf,A.al,A.aK,A.mk],x.i)
A.t1=new B.Z(null,null,null,A.eC,null)
A.iF=w([A.rV,A.rW,A.t3,A.t1],x.i)
A.wY=new B.bd(null,null,A.iF,null)
A.bg=new B.V("variables.khmer","KHMER",'# \u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7\n\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"\n\u178f\u17b6\u17c6\u1784 \u17a2\u17b6\u1799\u17bb = \u17e2\u17e1\n\u178f\u17b6\u17c6\u1784 \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f = \u1796\u17b7\u178f\n\u178f\u17b6\u17c6\u1784 \u1780\u17b6\u179a\u1784\u17b6\u179a = \u1791\u1791\u17c1\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1788\u17d2\u1798\u17c4\u17c7:", \u1788\u17d2\u1798\u17c4\u17c7)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17a2\u17b6\u1799\u17bb:", \u17a2\u17b6\u1799\u17bb)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17d2\u1790\u17b6\u1793\u1797\u17b6\u1796\u1787\u17b6\u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f:", \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u179a\u1784\u17b6\u179a\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793:", \u1780\u17b6\u179a\u1784\u17b6\u179a)',null,null)
A.hh=w([A.ru,A.to,A.wY,A.bg],x.i)
A.tP=new B.a8("variables",A.hh,null)
A.lR=new C.a("\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Khmer Numerals & Math) ",null)
A.pU=new B.P("#numerals",null,"heading-anchor",null,null,null,A.c,null)
A.h_=w([A.lR,A.pU],x.i)
A.rK=new B.a7(A.h_,null)
A.kW=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u17a2\u179f\u17d2\u1785\u17b6\u179a\u17d2\u1799\u1794\u17c6\u1795\u17bb\u178f\u179a\u1794\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1782\u17ba\u1780\u17b6\u179a\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a ",null)
A.nO=new C.a("\u17e0, \u17e1, \u17e2, \u17e3, \u17e4, \u17e5, \u17e6, \u17e7, \u17e8, \u17e9",null)
A.df=w([A.nO],x.i)
A.u9=new B.a_(A.df,null)
A.nq=new C.a(" \u1787\u17b6\u179b\u17c1\u1781\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f Lexer \u1793\u17b7\u1784 Parser\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1799\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\u1798\u1780\u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 \u17ac\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794\u1794\u17b6\u1793\u178a\u17c4\u1799\u179a\u179b\u17bc\u1793!",null)
A.dU=w([A.kW,A.u9,A.nq],x.i)
A.ta=new B.K(null,null,A.dU,null)
A.kZ=new C.a("\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Operator)",null)
A.io=w([A.kZ],x.i)
A.wh=new B.as(A.io,null)
A.kN=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 (Description)",null)
A.dn=w([A.kN],x.i)
A.wm=new B.as(A.dn,null)
A.l2=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd (Example)",null)
A.bT=w([A.l2],x.i)
A.wj=new B.as(A.bT,null)
A.lA=new C.a("\u179b\u1791\u17d2\u1792\u1795\u179b (Result)",null)
A.fe=w([A.lA],x.i)
A.wl=new B.as(A.fe,null)
A.d6=w([A.wh,A.wm,A.wj,A.wl],x.i)
A.wW=new B.D(A.d6,null)
A.f9=w([A.wW],x.i)
A.wq=new B.cr(A.f9,null)
A.lm=new C.a("+",null)
A.dw=w([A.lm],x.i)
A.r0=new B.f(null,A.dw,null)
A.cH=w([A.r0],x.i)
A.v3=new B.e(A.cH,null)
A.m6=new C.a("\u1794\u17bc\u1780\u179b\u17c1\u1781 \u17ac\u1797\u17d2\u1787\u17b6\u1794\u17cb\u17a2\u1780\u17d2\u179f\u179a",null)
A.cF=w([A.m6],x.i)
A.vF=new B.e(A.cF,null)
A.o6=new C.a("\u17e1\u17e0 + \u17e5",null)
A.dv=w([A.o6],x.i)
A.qE=new B.f(null,A.dv,null)
A.i2=w([A.qE],x.i)
A.vc=new B.e(A.i2,null)
A.kJ=new C.a("\u17e1\u17e5",null)
A.cz=w([A.kJ],x.i)
A.qa=new B.f(null,A.cz,null)
A.e2=w([A.qa],x.i)
A.w7=new B.e(A.e2,null)
A.fL=w([A.v3,A.vF,A.vc,A.w7],x.i)
A.wG=new B.D(A.fL,null)
A.ko=new C.a("-",null)
A.fI=w([A.ko],x.i)
A.qe=new B.f(null,A.fI,null)
A.hO=w([A.qe],x.i)
A.vj=new B.e(A.hO,null)
A.kB=new C.a("\u178a\u1780\u179b\u17c1\u1781",null)
A.fY=w([A.kB],x.i)
A.uK=new B.e(A.fY,null)
A.mW=new C.a("\u17e2\u17e0 - \u17e7",null)
A.iI=w([A.mW],x.i)
A.qC=new B.f(null,A.iI,null)
A.ew=w([A.qC],x.i)
A.uY=new B.e(A.ew,null)
A.ky=new C.a("\u17e1\u17e3",null)
A.jf=w([A.ky],x.i)
A.pY=new B.f(null,A.jf,null)
A.jh=w([A.pY],x.i)
A.wa=new B.e(A.jh,null)
A.ch=w([A.vj,A.uK,A.uY,A.wa],x.i)
A.wv=new B.D(A.ch,null)
A.kz=new C.a("*",null)
A.bV=w([A.kz],x.i)
A.qP=new B.f(null,A.bV,null)
A.ha=w([A.qP],x.i)
A.vh=new B.e(A.ha,null)
A.nd=new C.a("\u1782\u17bb\u178e\u179b\u17c1\u1781",null)
A.f6=w([A.nd],x.i)
A.vO=new B.e(A.f6,null)
A.li=new C.a("\u17e6 * \u17e4",null)
A.fm=w([A.li],x.i)
A.qG=new B.f(null,A.fm,null)
A.da=w([A.qG],x.i)
A.vv=new B.e(A.da,null)
A.mY=new C.a("\u17e2\u17e4",null)
A.dS=w([A.mY],x.i)
A.r9=new B.f(null,A.dS,null)
A.h1=w([A.r9],x.i)
A.uU=new B.e(A.h1,null)
A.d4=w([A.vh,A.vO,A.vv,A.uU],x.i)
A.wE=new B.D(A.d4,null)
A.kh=new C.a("/",null)
A.fV=w([A.kh],x.i)
A.qn=new B.f(null,A.fV,null)
A.ep=w([A.qn],x.i)
A.uG=new B.e(A.ep,null)
A.kO=new C.a("\u1785\u17c2\u1780\u179b\u17c1\u1781",null)
A.d3=w([A.kO],x.i)
A.w5=new B.e(A.d3,null)
A.lP=new C.a("\u17e5\u17e0 / \u17e2",null)
A.je=w([A.lP],x.i)
A.q5=new B.f(null,A.je,null)
A.cn=w([A.q5],x.i)
A.v1=new B.e(A.cn,null)
A.mL=new C.a("\u17e2\u17e5",null)
A.cO=w([A.mL],x.i)
A.qL=new B.f(null,A.cO,null)
A.dW=w([A.qL],x.i)
A.v5=new B.e(A.dW,null)
A.fg=w([A.uG,A.w5,A.v1,A.v5],x.i)
A.wS=new B.D(A.fg,null)
A.nu=new C.a("%",null)
A.hf=w([A.nu],x.i)
A.qW=new B.f(null,A.hf,null)
A.hX=w([A.qW],x.i)
A.vb=new B.e(A.hX,null)
A.lQ=new C.a("\u179f\u17c6\u178e\u179b\u17cb\u1793\u17c3\u1780\u17b6\u179a\u1785\u17c2\u1780 (Modulo)",null)
A.ii=w([A.lQ],x.i)
A.w9=new B.e(A.ii,null)
A.n9=new C.a("\u17e1\u17e0 % \u17e3",null)
A.dg=w([A.n9],x.i)
A.qg=new B.f(null,A.dg,null)
A.eT=w([A.qg],x.i)
A.uS=new B.e(A.eT,null)
A.kT=new C.a("\u17e1",null)
A.hy=w([A.kT],x.i)
A.q6=new B.f(null,A.hy,null)
A.hl=w([A.q6],x.i)
A.vz=new B.e(A.hl,null)
A.eu=w([A.vb,A.w9,A.uS,A.vz],x.i)
A.wJ=new B.D(A.eu,null)
A.nP=new C.a("==",null)
A.c7=w([A.nP],x.i)
A.qT=new B.f(null,A.c7,null)
A.on=new C.a("!=",null)
A.i4=w([A.on],x.i)
A.q_=new B.f(null,A.i4,null)
A.iY=w([A.qT,A.m,A.q_],x.i)
A.vn=new B.e(A.iY,null)
A.lI=new C.a("\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6, \u1798\u17b7\u1793\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6",null)
A.cA=w([A.lI],x.i)
A.vH=new B.e(A.cA,null)
A.md=new C.a("\u17e5 == \u17e5",null)
A.d8=w([A.md],x.i)
A.q0=new B.f(null,A.d8,null)
A.c4=w([A.q0],x.i)
A.vJ=new B.e(A.c4,null)
A.hM=w([A.vn,A.vH,A.vJ,A.a2],x.i)
A.wH=new B.D(A.hM,null)
A.mr=new C.a("\u1793\u17b7\u1784",null)
A.fO=w([A.mr],x.i)
A.r5=new B.f(null,A.fO,null)
A.lw=new C.a("\u17ac",null)
A.hp=w([A.lw],x.i)
A.qi=new B.f(null,A.hp,null)
A.kG=new C.a("\u1798\u17b7\u1793",null)
A.cB=w([A.kG],x.i)
A.qA=new B.f(null,A.cB,null)
A.hY=w([A.r5,A.m,A.qi,A.m,A.qA],x.i)
A.vi=new B.e(A.hY,null)
A.l6=new C.a("\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6 AND, OR, NOT",null)
A.iX=w([A.l6],x.i)
A.uJ=new B.e(A.iX,null)
A.ls=new C.a("(\u17e5 > \u17e2) \u1793\u17b7\u1784 (\u17e3 < \u17e4)",null)
A.ec=w([A.ls],x.i)
A.qy=new B.f(null,A.ec,null)
A.cd=w([A.qy],x.i)
A.uV=new B.e(A.cd,null)
A.hc=w([A.vi,A.uJ,A.uV,A.a2],x.i)
A.wK=new B.D(A.hc,null)
A.dk=w([A.wG,A.wv,A.wE,A.wS,A.wJ,A.wH,A.wK],x.i)
A.uy=new B.cq(A.dk,null)
A.dp=w([A.wq,A.uy],x.i)
A.uv=new B.cp(A.dp,null)
A.dj=w([A.uv],x.i)
A.rg=new B.r(null,"table-responsive",null,null,null,A.dj,null)
A.bq=new B.V("khmer_math.khmer","KHMER",'# \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1798\u17bd\u1799\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)',null,null)
A.dq=w([A.rK,A.ta,A.rg,A.bq],x.i)
A.tQ=new B.a8("numerals",A.dq,null)
A.o2=new C.a("\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 & \u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb (Punctuations) ",null)
A.pz=new B.P("#punctuations",null,"heading-anchor",null,null,null,A.c,null)
A.fU=w([A.o2,A.pz],x.i)
A.ry=new B.a7(A.fU,null)
A.mA=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u1794\u178f\u17cb\u1794\u17c2\u1793\u178f\u17b6\u1798\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798\u1781\u17d2\u1798\u17c2\u179a \u178a\u17c4\u1799\u17a2\u1793\u17bb\u1789\u17d2\u1789\u17b6\u178f\u17b1\u17d2\u1799\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 \u17ac\u1780\u17c6\u178e\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u17d6",null)
A.is=w([A.mA],x.i)
A.tc=new B.K(null,null,A.is,null)
A.j8=w([A.v],x.i)
A.qX=new B.f(null,A.j8,null)
A.ms=new C.a(" (\u1781\u178e\u17d2\u178c) \u17ac ",null)
A.kt=new C.a(";",null)
A.i5=w([A.kt],x.i)
A.ra=new B.f(null,A.i5,null)
A.mS=new C.a(" (Semicolon)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 (Statement Terminator)\u17d4 \u1780\u17cf\u17a2\u17b6\u1785\u179a\u17c6\u179b\u1784\u1794\u17b6\u1793\u178a\u17c2\u179a\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1785\u17bb\u17c7\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1790\u17d2\u1798\u17b8\u17d4",null)
A.d9=w([A.qX,A.ms,A.ra,A.mS],x.i)
A.t2=new B.Z(null,null,null,A.d9,null)
A.l3=new C.a("\u17d5",null)
A.di=w([A.l3],x.i)
A.r1=new B.f(null,A.di,null)
A.nt=new C.a(" (\u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793)\u17d6 \u179f\u1789\u17d2\u1789\u17b6\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1790\u17b6\u1781\u178e\u17d2\u178c \u17ac\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u17d4",null)
A.d7=w([A.r1,A.nt],x.i)
A.t0=new B.Z(null,null,null,A.d7,null)
A.iv=w([A.B],x.i)
A.qt=new B.f(null,A.iv,null)
A.op=new C.a(" (\u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179b\u17bb\u1780\u1780\u17bc\u178a \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u17d4",null)
A.hD=w([A.qt,A.op],x.i)
A.rZ=new B.Z(null,null,null,A.hD,null)
A.d2=w([A.t2,A.t0,A.rZ],x.i)
A.wZ=new B.bd(null,null,A.d2,null)
A.bu=new B.V("punctuations.khmer","KHMER",'# \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u1781\u178e\u17d2\u178c\u1781\u17d2\u1798\u17c2\u179a (\u17d4)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5\u17d4\n\u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f = "A"\u17d4\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b7\u1793\u17d2\u1791\u17bb:", \u1796\u17b7\u1793\u17d2\u1791\u17bb)\u17d4\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f:", \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f)\u17d4',null,null)
A.dG=w([A.ry,A.tc,A.wZ,A.bu],x.i)
A.tN=new B.a8("punctuations",A.dG,null)
A.hT=w([A.tP,A.tQ,A.tN],x.i)
A.bE=new B.aQ(A.hT,null)
A.ke=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be...\u17ac\u1794\u17be...\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (Conditionals) ",null)
A.pN=new B.P("#conditionals",null,"heading-anchor",null,null,null,A.c,null)
A.ek=w([A.ke,A.pN],x.i)
A.rH=new B.a7(A.ek,null)
A.ol=new C.a("\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u1780\u17bc\u178a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.kH=new C.a(" (if), ",null)
A.mg=new C.a(" (else if), \u1793\u17b7\u1784 ",null)
A.mo=new C.a(" (else)\u17d6",null)
A.he=w([A.ol,A.a_,A.kH,A.aN,A.mg,A.aR,A.mo],x.i)
A.tp=new B.K(null,null,A.he,null)
A.bk=new B.V("conditions.khmer","KHMER",'\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e2\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}',null,null)
A.c0=w([A.rH,A.tp,A.bk],x.i)
A.tR=new B.a8("conditionals",A.c0,null)
A.kv=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loops) ",null)
A.pT=new B.P("#while-loop",null,"heading-anchor",null,null,null,A.c,null)
A.eb=w([A.kv,A.pT],x.i)
A.rA=new B.a7(A.eb,null)
A.aj=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 ",null)
A.mx=new C.a(" (while loop) \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u179f\u17b6\u179a\u17a1\u17be\u1784\u179c\u17b7\u1789\u178a\u179a\u17b6\u1794\u178e\u17b6\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u178f\u17c2\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3 ",null)
A.fv=w([A.aj,A.X,A.mx,A.Y,A.B],x.i)
A.t6=new B.K(null,null,A.fv,null)
A.be=new B.V("while_loop.khmer","KHMER",'# \u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799\u1796\u17b8 \u17e5 \u178a\u179b\u17cb \u17e1\n\u178f\u17b6\u17c6\u1784 \u1785\u17c6\u1793\u17bd\u1793 = \u17e5\n\n\u1781\u178e\u17c8 (\u1785\u17c6\u1793\u17bd\u1793 > \u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799:", \u1785\u17c6\u1793\u17bd\u1793)\n    \u1785\u17c6\u1793\u17bd\u1793 = \u1785\u17c6\u1793\u17bd\u1793 - \u17e1\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\ud83d\ude80 \u1794\u17b6\u1789\u17cb\u1794\u1784\u17d2\u17a0\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799!")',null,null)
A.hk=w([A.rA,A.t6,A.be],x.i)
A.tI=new B.a8("while-loop",A.hk,null)
A.my=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loops) ",null)
A.pC=new B.P("#for-loop",null,"heading-anchor",null,null,null,A.c,null)
A.fl=w([A.my,A.pC],x.i)
A.rB=new B.a7(A.fl,null)
A.lZ=new C.a(" (for loop) \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u178a\u17c2\u179b\u1798\u17b6\u1793\u1780\u17c6\u178e\u178f\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb\u17d6",null)
A.d0=w([A.aj,A.aS,A.lZ],x.i)
A.tn=new B.K(null,null,A.d0,null)
A.bf=new B.V("for_loop.khmer","KHMER",'# \u1798\u17c1\u1782\u17bb\u178e \u17e5\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u178f\u17b6\u179a\u17b6\u1784\u1798\u17c1\u1782\u17bb\u178e \u17e5 ---")\n\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e1; i <= \u17e5; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17e5 x", i, "=", \u17e5 * i)\n}',null,null)
A.hb=w([A.rB,A.tn,A.bf],x.i)
A.tH=new B.a8("for-loop",A.hb,null)
A.fW=w([A.tR,A.tI,A.tH],x.i)
A.bF=new B.aQ(A.fW,null)
A.mJ=new C.a("\u2728 \u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1781\u17d2\u1798\u17c2\u179a\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1782\u17b6\u17c6\u1791\u17d2\u179a OOP \u1796\u17c1\u1789\u179b\u17c1\u1789",null)
A.eU=w([A.mJ],x.i)
A.u4=new B.a3(null,null,A.eU,null)
A.eH=w([A.u4],x.i)
A.rd=new B.r(null,"hero-tag",null,null,null,A.eH,null)
A.lT=new C.a("\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a \u2014 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.fH=w([A.lT],x.i)
A.rt=new B.fO(null)
A.od=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.h8=w([A.od],x.i)
A.aW=new B.a_(A.h8,null)
A.nF=new C.a(" \u1782\u17ba\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u178a\u17c2\u179b\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u1785\u1793\u17b6\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u17d4 \u179c\u17b6\u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179f\u17b7\u1780\u17d2\u179f\u17b6 \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u1794\u17c2\u1794 Object-Oriented Programming (OOP) \u1793\u17b7\u1784\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (\u17e0-\u17e9) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u17d4",null)
A.iV=w([A.aW,A.nF],x.i)
A.ti=new B.K("hero-lead",null,A.iV,null)
A.kI=new C.a("\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179a\u17c0\u1793\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",null)
A.hu=w([A.kI],x.i)
A.px=new B.P("#hello-world",null,"btn-primary-compact",null,null,null,A.hu,null)
A.kL=new C.a("\ud83c\udfae \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u179b\u17be Web Browser",null)
A.hx=w([A.kL],x.i)
A.py=new B.P("#playground",null,"btn-secondary",null,null,null,A.hx,null)
A.cY=w([A.px,A.py],x.i)
A.rh=new B.r(null,"hero-buttons",null,null,null,A.cY,null)
A.fT=w([A.rd,A.rt,A.ti,A.rh],x.i)
A.rm=new B.r(null,"hero-banner",null,null,null,A.fT,null)
A.mP=new C.a("\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Introduction) ",null)
A.pA=new B.P("#intro",null,"heading-anchor",null,null,null,A.c,null)
A.dB=w([A.mP,A.pA],x.i)
A.rE=new B.a7(A.dB,null)
A.oh=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17be\u1798\u17d2\u1794\u17b8\u1780\u17b6\u178f\u17cb\u1794\u1793\u17d2\u1790\u1799\u179a\u1794\u17b6\u17c6\u1784\u1797\u17b6\u179f\u17b6\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u179f\u17d0\u1799\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4 \u179f\u17b7\u179f\u17d2\u179f \u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f \u1793\u17b7\u1784\u17a2\u17d2\u1793\u1780\u179a\u17c0\u1793\u178a\u17c6\u1794\u17bc\u1784\u17a2\u17b6\u1785\u1799\u179b\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u17a2\u17c6\u1796\u17b8\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6\u1793\u17c3\u1780\u17bc\u178a (Logic) \u178f\u17b6\u1798\u179a\u1799\u17c8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1781\u17d2\u1798\u17c2\u179a\u1792\u1798\u17d2\u1798\u1787\u17b6\u178f\u17b7 \u178a\u17bc\u1785\u1787\u17b6 ",null)
A.kk=new C.a(" \u1793\u17b7\u1784 ",null)
A.e9=w([A.oh,A.a0,A.m,A.aO,A.m,A.a_,A.m,A.X,A.m,A.a1,A.kk,A.Z,A.v],x.i)
A.tq=new B.K(null,null,A.e9,null)
A.le=new C.a("\ud83d\udca1",null)
A.iG=w([A.le],x.i)
A.rr=new B.r(null,"callout-icon",null,null,null,A.iG,null)
A.mu=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u1796\u17b7\u179f\u17c1\u179f\u17d6 ",null)
A.ix=w([A.mu],x.i)
A.u5=new B.a_(A.ix,null)
A.mI=new C.a("\u179a\u17b6\u179b\u17cb\u1780\u17bc\u178a\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a\u1793\u17c1\u17c7 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 ",null)
A.ng=new C.a("\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Run)",null)
A.eo=w([A.ng],x.i)
A.um=new B.a_(A.eo,null)
A.nb=new C.a(" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a \u1793\u17b7\u1784\u1791\u179f\u17d2\u179f\u1793\u17b6\u179b\u1791\u17d2\u1792\u1795\u179b\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u179b\u17be Browser \u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb!",null)
A.i6=w([A.u5,A.mI,A.um,A.nb],x.i)
A.rb=new B.r(null,"callout-content",null,null,null,A.i6,null)
A.i_=w([A.rr,A.rb],x.i)
A.ri=new B.r(null,"callout callout-info",null,null,null,A.i_,null)
A.iP=w([A.rE,A.tq,A.ri],x.i)
A.tG=new B.a8("intro",A.iP,null)
A.lM=new C.a("\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Installation & Setup) ",null)
A.pB=new B.P("#install",null,"heading-anchor",null,null,null,A.c,null)
A.iw=w([A.lM,A.pB],x.i)
A.rC=new B.a7(A.iw,null)
A.kq=new C.a("\u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1798\u17bd\u1799 ",null)
A.kf=new C.a(" \u1798\u17b6\u1793\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b \u1793\u17b7\u1784\u179a\u17a0\u17d0\u179f\u17d4 \u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u178f\u17b6\u1798\u179a\u1799\u17c8 ",null)
A.nv=new C.a("Command Line Tool (CLI)",null)
A.dh=w([A.nv],x.i)
A.ug=new B.a_(A.dh,null)
A.oi=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1795\u17d2\u1791\u17b6\u179b\u17cb \u17ac\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 ",null)
A.nW=new C.a("Khmer IDE",null)
A.dr=w([A.nW],x.i)
A.ul=new B.a_(A.dr,null)
A.lz=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u17d4",null)
A.ir=w([A.kq,A.aW,A.kf,A.ug,A.oi,A.ul,A.lz],x.i)
A.tr=new B.K(null,null,A.ir,null)
A.lO=new C.a("\u17e1. \u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792 (Prerequisites)",null)
A.hn=w([A.lO],x.i)
A.rP=new B.b9(A.hn,null)
A.os=new C.a("\u1798\u17bb\u1793\u1796\u17c1\u179b\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u178a\u17c6\u17a1\u17be\u1784 \u179f\u17bc\u1798\u1794\u17d2\u179a\u17b6\u1780\u178a\u1790\u17b6\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1798\u17b6\u1793\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u178a\u17bc\u1785\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u17d6",null)
A.cZ=w([A.os],x.i)
A.tb=new B.K(null,null,A.cZ,null)
A.m1=new C.a("\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u17d6 ",null)
A.iT=w([A.m1],x.i)
A.uk=new B.a_(A.iT,null)
A.lG=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a macOS, Linux, \u1793\u17b7\u1784 Windows (WSL / PowerShell)",null)
A.cr=w([A.uk,A.lG],x.i)
A.rR=new B.Z(null,null,null,A.cr,null)
A.ou=new C.a("Dart SDK (3.0+)\u17d6 ",null)
A.jg=w([A.ou],x.i)
A.uh=new B.a_(A.jg,null)
A.lJ=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a Engine \u1793\u17b7\u1784 Native Compiler \u179a\u1794\u179f\u17cb\u1797\u17b6\u179f\u17b6",null)
A.db=w([A.uh,A.lJ],x.i)
A.rX=new B.Z(null,null,null,A.db,null)
A.lE=new C.a("Git\u17d6 ",null)
A.e8=w([A.lE],x.i)
A.ue=new B.a_(A.e8,null)
A.l7=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u1794\u17d2\u179a\u1797\u1796\u1780\u17bc\u178a \u17ac Releases",null)
A.du=w([A.ue,A.l7],x.i)
A.rU=new B.Z(null,null,null,A.du,null)
A.hU=w([A.rR,A.rX,A.rU],x.i)
A.x_=new B.bd(null,null,A.hU,null)
A.l4=new C.a("\u17e2. \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 CLI \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1791\u17bc\u1791\u17c5 (Universal One-Line Install)",null)
A.cX=w([A.l4],x.i)
A.rQ=new B.b9(A.cX,null)
A.lD=new C.a("\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1782\u17d2\u179a\u1794\u17cb\u179a\u17bc\u1794\u17a2\u17b6\u1785\u178a\u17c6\u17a1\u17be\u1784 ",null)
A.nD=new C.a("khmer",null)
A.eO=w([A.nD],x.i)
A.aV=new B.f(null,A.eO,null)
A.kY=new C.a(" CLI \u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u1781\u17d2\u179b\u17bd\u1793\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u178f\u17c2\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u17d6",null)
A.cM=w([A.lD,A.aV,A.kY],x.i)
A.tg=new B.K(null,null,A.cM,null)
A.bh=new B.V("macOS / Linux (Terminal)","BASH","# \u178a\u17c6\u17a1\u17be\u1784\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u179b\u17be macOS \u1793\u17b7\u1784 Linux (\u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784 PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash",!1,null)
A.br=new B.V("Windows (PowerShell)","POWERSHELL","# \u178a\u17c6\u17a1\u17be\u1784\u179b\u17be Windows \u178f\u17b6\u1798\u179a\u1799\u17c8 PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex",!1,null)
A.bn=new B.V("Dart Toolchain / Native Compilation","DART","# Compile \u1791\u17c5\u1787\u17b6 Native AOT Binary \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# \u17ac\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart run bin/khmer.dart main.khmer",!1,null)
A.nQ=new C.a("\u17e3. \u179a\u1794\u17c0\u1794\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780",null)
A.f0=w([A.nQ],x.i)
A.rL=new B.b9(A.f0,null)
A.m0=new C.a("\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u17be\u1780\u1793\u17d2\u1791\u17bb\u1799 ",null)
A.mb=new C.a("\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17af\u1780\u179f\u17b6\u179a\u1790\u17d2\u1798\u17b8\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f (\u178a\u17bc\u1785\u1787\u17b6 VS Code, Cursor, \u17ac Nano)\u17d6",null)
A.eD=w([A.m0,A.aQ,A.mb],x.i)
A.tv=new B.K(null,null,A.eD,null)
A.bj=new B.V("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6 (my_app.khmer)","KHMER",'\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb"\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb\u1796\u17b7\u1797\u1796\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u1788\u17d2\u1798\u17c4\u17c7)',null,null)
A.mv=new C.a("\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1798\u1780\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 Terminal\u17d6",null)
A.eW=w([A.mv],x.i)
A.t8=new B.K(null,null,A.eW,null)
A.bs=new B.V("Run Your Script","BASH","khmer my_app.khmer",!1,null)
A.o9=new C.a("\u17e4. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Interactive REPL",null)
A.cT=w([A.o9],x.i)
A.rO=new B.b9(A.cT,null)
A.ki=new C.a("\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u17ac\u1782\u178e\u1793\u17b6\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1797\u17d2\u179b\u17b6\u1798\u17d7 \u17a2\u17d2\u1793\u1780\u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 ",null)
A.mC=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1788\u17d2\u1798\u17c4\u17c7\u17af\u1780\u179f\u17b6\u179a\u1793\u17c4\u17c7\u1791\u17c1 \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17be\u1780 Interactive REPL Shell\u17d6",null)
A.iH=w([A.ki,A.aV,A.mC],x.i)
A.tl=new B.K(null,null,A.iH,null)
A.bv=new B.V("Interactive Console","BASH","$ khmer\n\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0.0 REPL\n\u179c\u17b6\u1799 '\u1785\u17b6\u1780\u1785\u17c1\u1789' \u17ac\u1785\u17bb\u1785 Ctrl+D \u178a\u17be\u1798\u17d2\u1794\u17b8\u1785\u17b6\u1780\u1785\u17c1\u1789\u17d4\n\n>>> \u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\"\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794:\", \u1796\u17b7\u1793\u17d2\u1791\u17bb);\n\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794: \u17e9\u17e5\n>>> \u178f\u17b6\u17c6\u1784 \u1791\u17d2\u179c\u17c1\u178a\u1784 = \u1796\u17b7\u1793\u17d2\u1791\u17bb * \u17e2;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1791\u17d2\u179c\u17c1\u178a\u1784);\n\u17e1\u17e9\u17e0",!1,null)
A.mR=new C.a("\u17e5. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u179a\u1794\u17cb Text Editor \u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb (VS Code, Vim, Sublime, Nano)",null)
A.ig=w([A.mR],x.i)
A.rM=new B.b9(A.ig,null)
A.l0=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u1795\u17d2\u178a\u179b\u17cb\u17a7\u1794\u1780\u179a\u178e\u17cd\u1787\u17c6\u1793\u17bd\u1799\u179f\u17d2\u179a\u17b6\u1794\u17cb\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f\u17d6",null)
A.iE=w([A.l0],x.i)
A.t9=new B.K(null,null,A.iE,null)
A.bt=new B.V("Editor Integration Commands","BASH","# \u178a\u17c6\u17a1\u17be\u1784 Syntax Highlighting \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code / Cursor \u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\nkhmer editor vscode\n\n# \u17ac\u1794\u1784\u17d2\u1780\u17be\u178f Config \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Vim / Neovim, Sublime Text, \u17ac GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# \u1798\u17bb\u1781\u1784\u17b6\u179a Live-Reload: \u178f\u17b6\u1798\u178a\u17b6\u1793 \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u1796\u17c1\u179b\u17a2\u17d2\u1793\u1780\u1785\u17bb\u1785 Save \u1780\u17d2\u1793\u17bb\u1784 Editor \u178e\u17b6\u1798\u17bd\u1799\nkhmer watch my_app.khmer\n\n# \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Linter)\nkhmer check my_app.khmer",!1,null)
A.m7=new C.a("\u17e6. \u1787\u1798\u17d2\u179a\u17be\u179f\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798 GUI & Web IDE",null)
A.iW=w([A.m7],x.i)
A.rN=new B.b9(A.iW,null)
A.mN=new C.a("\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Terminal CLI \u17a2\u17d2\u1793\u1780\u1780\u17cf\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u178a\u17c2\u179b\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17d6",null)
A.cE=w([A.mN],x.i)
A.th=new B.K(null,null,A.cE,null)
A.o4=new C.a("Web Playground (\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178f\u17b6\u1798 Web Browser)\u17d6 ",null)
A.e3=w([A.o4],x.i)
A.uj=new B.a_(A.e3,null)
A.lh=new C.a("\u17a2\u17d2\u1793\u1780\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u17a1\u17be\u1799! \u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179a\u1798\u17bc\u179a\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1795\u17d2\u1793\u17c2\u1780 ",null)
A.l_=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb",null)
A.hW=w([A.l_],x.i)
A.pI=new B.P("#playground",null,null,null,null,null,A.hW,null)
A.mn=new C.a(" \u1793\u17c5\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u1793\u17c3\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u179b\u17be Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u17d4",null)
A.fG=w([A.uj,A.lh,A.pI,A.mn],x.i)
A.t_=new B.Z(null,null,null,A.fG,null)
A.ne=new C.a("Khmer IDE (\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Desktop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb macOS / Windows)\u17d6 ",null)
A.c6=w([A.ne],x.i)
A.ua=new B.a_(A.c6,null)
A.oj=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 IDE \u178a\u17be\u1798\u178a\u17c2\u179b\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799 Flutter \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c Virtual Khmer Keypad \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1781\u17d2\u1798\u17c2\u179a\u179a\u17a0\u17d0\u179f, Syntax Highlighting, Tabs \u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u17af\u1780\u179f\u17b6\u179a\u1785\u17d2\u179a\u17be\u1793, AST Visualizer, \u1793\u17b7\u1784 Terminal \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780\u17d4",null)
A.ej=w([A.ua,A.oj],x.i)
A.rT=new B.Z(null,null,null,A.ej,null)
A.eB=w([A.t_,A.rT],x.i)
A.x1=new B.bd(null,null,A.eB,null)
A.en=w([A.rC,A.tr,A.rP,A.tb,A.x_,A.rQ,A.tg,A.bh,A.br,A.bn,A.rL,A.tv,A.bj,A.t8,A.bs,A.rO,A.tl,A.bv,A.rM,A.t9,A.bt,A.rN,A.th,A.x1],x.i)
A.tM=new B.a8("install",A.en,null)
A.ni=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (First Program: \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780) ",null)
A.pJ=new B.P("#hello-world",null,"heading-anchor",null,null,null,A.c,null)
A.fi=w([A.ni,A.pJ],x.i)
A.rI=new B.a7(A.fi,null)
A.mz=new C.a('\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1794\u17d2\u179a\u1796\u17c3\u178e\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179a\u17c0\u1793\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1782\u17ba\u1780\u17b6\u179a\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b6\u1780\u17d2\u1799 "\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780" (Hello World) \u1791\u17c5\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ',null)
A.j9=w([A.mz,A.aL,A.B],x.i)
A.tf=new B.K(null,null,A.j9,null)
A.bl=new B.V("hello_world.khmer","KHMER",'# \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) v1.0")',null,null)
A.cD=w([A.rI,A.tf,A.bl],x.i)
A.tE=new B.a8("hello-world",A.cD,null)
A.dX=w([A.rm,A.tG,A.tM,A.tE],x.i)
A.bG=new B.aQ(A.dX,null)
A.bJ=new B.hB("text",0,"text")
A.k2=new B.B("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)","Introduction & Vision","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","intro overview vision cambodia \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784 \u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7 \u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c6\u1793\u17b7\u178f \u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799 \u17a0\u17c1\u178f\u17bb\u17a2\u17d2\u179c\u17b8 why features \u179b\u1780\u17d2\u1781\u178e\u17c8\u1796\u17b7\u179f\u17c1\u179f khmerlang \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 \u1793\u17b7\u1784\u1785\u1780\u17d2\u1781\u17bb\u179c\u17b7\u179f\u17d0\u1799\u1793\u17c3\u1797\u17b6\u179f\u17b6 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)")
A.k8=new B.B("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)","Installation & Toolchain","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check \u178a\u17c6\u17a1\u17be\u1784 \u17a7\u1794\u1780\u179a\u178e\u17cd \u179a\u17c9\u17b6\u1793\u17cb \u1794\u1789\u17d2\u1787\u17b6 \u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a universal installer one line download \u1791\u17b6\u1789\u1799\u1780 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a khmerchar","\u179a\u1794\u17c0\u1794\u178a\u17c6\u17a1\u17be\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) CLI \u179b\u17be macOS, Linux, Windows")
A.jT=new B.B("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)","First Program","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","hello world \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 \u1794\u1784\u17d2\u17a0\u17b6\u1789 print first program \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 \u1780\u17bc\u178a\u178a\u17c6\u1794\u17bc\u1784 \u179f\u17bd\u179f\u17d2\u178f\u17b8 world script run output \u1785\u17c1\u1789\u179b\u1791\u17d2\u1792\u1795\u179b","\u179f\u179a\u179f\u17c1\u179a\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 \u1794\u1784\u17d2\u17a0\u17b6\u1789()")
A.k_=new B.B("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)","Variables & Data Types","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","variables data types \u178f\u17b6\u17c6\u1784 \u17a2\u1790\u17c1\u179a let var const string number boolean \u1796\u17b7\u178f \u1798\u17b7\u1793\u1796\u17b7\u178f \u1791\u1791\u17c1 null dynamic \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 \u1781\u17d2\u179f\u17c2\u17a2\u1780\u17d2\u179f\u179a \u179b\u17c1\u1781 \u1794\u17ca\u17bc\u179b\u17b8\u1793 true false assignment \u178f\u1798\u17d2\u179b\u17c3","\u1780\u17b6\u179a\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3\u1793\u17b6\u1793\u17b6")
A.jV=new B.B("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)","Khmer Numerals & Math Operators","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","numerals math \u17e0 \u17e1 \u17e2 \u17e3 \u17e4 \u17e5 \u17e6 \u17e7 \u17e8 \u17e9 \u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 modulo \u1793\u17b7\u1784 \u17ac \u1798\u17b7\u1793 operators \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 \u1782\u178e\u17b7\u178f arithmetic addition subtraction multiplication division calculate","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u17e0-\u17e9 \u1793\u17b7\u1784\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1782\u178e\u17b7\u178f\u179c\u17b7\u1791\u17d2\u1799\u17b6")
A.jU=new B.B("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)","Khmer Punctuations","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","punctuations \u1781\u178e\u17d2\u178c \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 \u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785 semicolon statement terminator \u179f\u1789\u17d2\u1789\u17b6 \u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 \u17d5 \u17d6 syntax terminator end line \u1781\u178e\u17d2\u178c \u17d5","\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 (\u17d5) \u1793\u17b7\u1784 semicolon (;)")
A.k1=new B.B("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f","Conditionals (If / Else If / Else)","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","conditionals if else elif \u1794\u17be \u17ac\u1794\u17be \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f logic \u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a branching comparison \u179f\u17d2\u1798\u17be \u1792\u17c6\u1787\u17b6\u1784 \u178f\u17bc\u1785\u1787\u17b6\u1784 compare condition flow","\u1780\u17b6\u179a\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be (if), \u17ac\u1794\u17be (else if), \u1793\u17b7\u1784 \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (else)")
A.jZ=new B.B("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)","While Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","while loop \u1781\u178e\u17c8 \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 iteration repeat cycle loop condition \u1792\u17d2\u179c\u17be\u178a\u178a\u17c2\u179b\u17d7 repeat until loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u178a\u178a\u17c2\u179b\u17d7\u178f\u17b6\u1798\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c")
A.k3=new B.B("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)","For Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","for loop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 count step range iteration \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb loop finite counter \u1787\u17bb\u17c6","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb")
A.k7=new B.B("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)","Function Declaration","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","function \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178f\u17d2\u179a\u17a1\u1794\u17cb return parameters arguments methods \u179c\u17b7\u1792\u17b8 \u1780\u17bc\u178a \u17a0\u17c5 call define \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a \u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb return value","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1793\u17b7\u1784 \u178f\u17d2\u179a\u17a1\u1794\u17cb")
A.jW=new B.B("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)","Recursive Functions & Fibonacci","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","recursion recursive fibonacci \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8 call self \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 fibonacci sequence math recursive algorithm \u1782\u178e\u1793\u17b6","\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1782\u178e\u1793\u17b6\u179b\u17c1\u1781 Fibonacci")
A.jY=new B.B("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (OOP)","Classes & Objects","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","class oop \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1794\u1784\u17d2\u1780\u17be\u178f constructor \u1793\u17c1\u17c7 this \u1790\u17d2\u1798\u17b8 new object instance \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb properties methods fields \u179c\u178f\u17d2\u1790\u17bb","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class), Constructor (\u1794\u1784\u17d2\u1780\u17be\u178f), \u1793\u17b7\u1784 Instance (\u1790\u17d2\u1798\u17b8)")
A.k0=new B.B("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)","Inheritance & Subclasses","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","inheritance extends \u1794\u1793\u17d2\u178f\u1796\u17b8 subclass superclass oop \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 parent child polymorph \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1794\u1793\u17d2\u178f\u1796\u17b8 (extends)")
A.k4=new B.B("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)","Standard Built-in Functions","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","builtins standard functions \u1794\u1784\u17d2\u17a0\u17b6\u1789 \u1794\u17d2\u179a\u179c\u17c2\u1784 \u1794\u17d2\u179a\u1797\u17c1\u1791 \u1794\u1793\u17d2\u1790\u17c2\u1798 length print type push builtin helper utility array list functions \u1794\u1789\u17d2\u1787\u17b8","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u179a\u17b6\u1794\u17cb\u17d7\u178a\u17bc\u1785\u1787\u17b6 \u1794\u1784\u17d2\u17a0\u17b6\u1789(), \u1794\u17d2\u179a\u179c\u17c2\u1784(), \u1794\u17d2\u179a\u1797\u17c1\u1791(), \u1794\u1793\u17d2\u1790\u17c2\u1798()")
A.jX=new B.B("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs (Flutter / Web)","Developer Tools & IDEs","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","ides tools flutter ide web ide vscode editor extension cli terminal syntax highlight theme programiz studio development \u17a7\u1794\u1780\u179a\u178e\u17cd \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a","\u17a7\u1794\u1780\u179a\u178e\u17cd\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a Flutter Desktop/Web IDE \u1793\u17b7\u1784 Extension \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code")
A.k6=new B.B("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)","Syntax Cheat Sheet Table","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","cheat sheet table syntax keywords \u178f\u17b6\u179a\u17b6\u1784 \u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 summary reference \u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u179f\u1784\u17d2\u1781\u17c1\u1794 \u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 full table quick reference cheat-sheet \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd","\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u1793\u17b7\u1784\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c3\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a")
A.k5=new B.B("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","Live Interactive Web Playground","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","playground runner editor live code online ide \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784 \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 run web browser console live interactive interactive test execution output \u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u179b\u17be Web Browser \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb")
A.a8=w([A.k2,A.k8,A.jT,A.k_,A.jV,A.jU,A.k1,A.jZ,A.k3,A.k7,A.jW,A.jY,A.k0,A.k4,A.jX,A.k6,A.k5],C.b8("x<B>"))
A.bI=new B.er(null)
A.aZ=new B.ea(null)
A.bw=new B.ej(null)
A.bH=new B.eq(null)
A.jQ=new B.eP(null)
A.cJ=w([A.bI,A.aZ,A.bw,A.bH,A.jQ],x.i)
A.ro=new B.r(null,"content-wrapper",null,null,null,A.cJ,null)
A.dH=w([A.ro],x.i)
A.z=w([],x.i)
A.pf=new B.a5("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798")
A.ps=new B.a5("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798")
A.ph=new B.a5("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784")
A.pg=new B.a5("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3")
A.pk=new B.a5("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8")
A.pp=new B.a5("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7")
A.pm=new B.a5("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be/\u17ac\u1794\u17be/\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f")
A.pu=new B.a5("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8")
A.pv=new B.a5("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb")
A.pn=new B.a5("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd")
A.pi=new B.a5("recursion","Recursion (Fibonacci)")
A.po=new B.a5("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor")
A.pr=new B.a5("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)")
A.pl=new B.a5("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a")
A.pj=new B.a5("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs")
A.pt=new B.a5("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7")
A.pq=new B.a5("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a")
A.hz=w([A.pf,A.ps,A.ph,A.pg,A.pk,A.pp,A.pm,A.pu,A.pv,A.pn,A.pi,A.po,A.pr,A.pl,A.pj,A.pt,A.pq],C.b8("x<a5>"))
A.j0=w(['"',"'","\u201c","\u201d","\u2018","\u2019"],x.s)
A.jE={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
A.jm=new C.L(A.jE,["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],x.w)
A.jM={"\u17e0":0,"\u17e1":1,"\u17e2":2,"\u17e3":3,"\u17e4":4,"\u17e5":5,"\u17e6":6,"\u17e7":7,"\u17e8":8,"\u17e9":9}
A.ab=new C.L(A.jM,["0","1","2","3","4","5","6","7","8","9"],x.w)
A.jF={hello:0,math:1,fibo:2,oop:3,grades:4}
A.jn=new C.L(A.jF,[y.n,'# \u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)','# \u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}','# \u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()','# \u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e5\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}'],x.w)
A.jH={"\u178f\u17b6\u17c6\u1784":0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":8,"\u1796\u17b7\u178f":9,"\u1798\u17b7\u1793\u1796\u17b7\u178f":10,"\u1791\u1791\u17c1":11,"\u1793\u17b7\u1784":12,"\u17ac":13,"\u1798\u17b7\u1793":14,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":15,"\u179c\u17b7\u1792\u17b8":16,"\u1793\u17c1\u17c7":17,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":18,"\u1790\u17d2\u1798\u17b8":19,"\u1794\u1793\u17d2\u178f\u1796\u17b8":20}
A.E=new B.p(3,"let")
A.P=new B.p(4,"print")
A.R=new B.p(5,"ifType")
A.G=new B.p(6,"elseIf")
A.S=new B.p(7,"elseType")
A.T=new B.p(8,"whileType")
A.U=new B.p(9,"forType")
A.C=new B.p(10,"function")
A.H=new B.p(11,"returnType")
A.ao=new B.p(12,"trueType")
A.ap=new B.p(13,"falseType")
A.aq=new B.p(14,"nullType")
A.I=new B.p(15,"and")
A.J=new B.p(16,"or")
A.K=new B.p(17,"not")
A.L=new B.p(18,"classType")
A.D=new B.p(19,"method")
A.ar=new B.p(20,"thisType")
A.as=new B.p(21,"self")
A.at=new B.p(22,"newType")
A.au=new B.p(23,"extendsType")
A.ae=new C.L(A.jH,[A.E,A.P,A.R,A.G,A.S,A.T,A.U,A.C,A.H,A.ao,A.ap,A.aq,A.I,A.J,A.K,A.L,A.D,A.ar,A.as,A.at,A.au],C.b8("L<h,p>"))
A.jL={points:0}
A.jA=new C.L(A.jL,["5 3 19 12 5 21 5 3"],x.w)
A.jG={"\u178f\u17b6\u17c6\u1784":0,"\u17a2\u1790\u17c1\u179a":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u179c\u17b7\u1792\u17b8":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":9,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":10,"\u1794\u1784\u17d2\u1780\u17be\u178f":11,"\u1793\u17c1\u17c7":12,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":13,"\u1790\u17d2\u1798\u17b8":14,"\u1794\u1793\u17d2\u178f\u1796\u17b8":15,"\u1796\u17b7\u178f":16,"\u1798\u17b7\u1793\u1796\u17b7\u178f":17,"\u1791\u1791\u17c1":18,"\u1793\u17b7\u1784":19,"\u17ac":20,"\u1798\u17b7\u1793":21}
A.k9=new B.bX(A.jG,22,x.O)
A.jJ={"\u1794\u1784\u17d2\u17a0\u17b6\u1789":0,"\u1794\u17d2\u179a\u179c\u17c2\u1784":1,"\u1794\u17d2\u179a\u1797\u17c1\u1791":2,"\u1794\u1793\u17d2\u1790\u17c2\u1798":3,"\u1794\u1789\u17d2\u1785\u17bc\u179b":4,"\u1794\u1798\u17d2\u179b\u17c2\u1784\u179b\u17c1\u1781":5,"\u1794\u1789\u17d2\u1788\u1794\u17cb":6}
A.ka=new B.bX(A.jJ,7,x.O)
A.kb=new B.i4(4,"center")
A.kj=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u179a\u17a0\u17d0\u179f:",null)
A.ld=new C.a("ESC",null)
A.lf=new C.a("\u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)",null)
A.lo=new C.a("\u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)",null)
A.m2=new C.a("\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc: ",null)
A.mU=new C.a(" | ",null)
A.mZ=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799\u1798\u17c4\u1791\u1793\u1797\u17b6\u1796\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1781\u17d2\u1798\u17c2\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1782\u17d2\u1793\u17b6 | ",null)
A.nl=new C.a("\u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)",null)
A.nm=new C.a("\n",null)
A.nL=new C.a("\u17e1. \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 (Hello World)",null)
A.nY=new C.a("\u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)",null)
A.am=new B.p(0,"number")
A.an=new B.p(1,"string")
A.i=new B.p(2,"identifier")
A.av=new B.p(24,"plus")
A.M=new B.p(25,"minus")
A.aw=new B.p(26,"star")
A.ax=new B.p(27,"slash")
A.ay=new B.p(28,"modulo")
A.N=new B.p(29,"assign")
A.az=new B.p(30,"eq")
A.aA=new B.p(31,"neq")
A.aB=new B.p(32,"lt")
A.aC=new B.p(33,"gt")
A.aD=new B.p(34,"lte")
A.aE=new B.p(35,"gte")
A.O=new B.p(36,"dot")
A.j=new B.p(37,"lparen")
A.d=new B.p(38,"rparen")
A.w=new B.p(39,"lbrace")
A.o=new B.p(40,"rbrace")
A.Q=new B.p(41,"lbracket")
A.x=new B.p(42,"rbracket")
A.n=new B.p(43,"comma")
A.k=new B.p(44,"semicolon")
A.F=new B.p(45,"colon")
A.r=new B.p(46,"eof")
A.t=new C.b2("#94a3b8")
A.W=new C.b2("#34d399")
A.oU=new B.a2("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)",!1,null)
A.oV=new B.a2("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)",!1,null)
A.oW=new B.a2("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",!1,null)
A.oX=new B.a2("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)",!1,null)
A.oY=new B.a2("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)",!1,null)
A.oZ=new B.a2("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)",!1,null)
A.p_=new B.a2("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)",!1,null)
A.p0=new B.a2("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)",!1,null)
A.p1=new B.a2("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)",!1,null)
A.p2=new B.a2("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)",!1,null)
A.p3=new B.a2("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Declaration)",!1,null)
A.p4=new B.a2("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (`\u1794\u1784\u17d2\u1780\u17be\u178f`)",!1,null)
A.p5=new B.a2("ides","Flutter & Web IDEs",!1,null)
A.p6=new B.a2("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",!0,"\u1795\u17d2\u1791\u17b6\u179b\u17cb")
A.p7=new B.a2("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)",!1,null)
A.p8=new B.a2("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)",!1,null)
A.p9=new B.a2("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)",!1,null)
A.oO=new C.b2("#f87171")
A.aH=new C.aK(null,null,null,null,null,A.oO,null,null,null,null,null)
A.aJ=new C.aK(null,null,null,null,null,A.W,null,null,null,null,null)
A.aG=new C.b2("#38bdf8")
A.pc=new C.aK(null,null,null,null,null,A.aG,null,null,A.a7,null,null)
A.bx=new B.em("flex",4,"flex")
A.aY=new B.h0(2,"center")
A.pe=new C.aK(A.bx,null,null,null,A.aY,null,null,null,null,null,null)
A.bb=new B.fD()
A.aI=new C.aK(null,null,null,null,null,A.aG,null,null,null,A.bb,null)
A.jO={target:0,rel:1}
A.aa=new C.L(A.jO,["_blank","noopener noreferrer"],x.w)
A.nA=new C.a("Releases & Binaries",null)
A.ff=w([A.nA],x.i)
A.pD=new B.P("https://github.com/sengson-great/KhmerLang/releases",null,null,A.aI,A.aa,null,A.ff,null)
A.ag={width:0,height:1,viewBox:2,fill:3}
A.jx=new C.L(A.ag,["15","15","0 0 24 24","currentColor"],x.w)
A.tD=new B.fV(null)
A.ie=w([A.tD],x.i)
A.aX=new B.aN(null,A.jx,A.ie,null)
A.n0=new C.a("\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",null)
A.ip=w([A.n0],x.i)
A.tZ=new B.a3(null,null,A.ip,null)
A.h5=w([A.aX,A.tZ],x.i)
A.pE=new B.P("#playground","nav-btn-playground","btn-primary-compact",null,null,null,A.h5,null)
A.nV=new C.a("GitHub Repository",null)
A.fR=w([A.nV],x.i)
A.pH=new B.P(y.b,null,null,A.aI,A.aa,null,A.fR,null)
A.kA=new C.a("\u1785",null)
A.ca=w([A.kA],x.i)
A.rq=new B.r(null,"brand-logo-badge",null,null,null,A.ca,null)
A.ox=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a ",null)
A.o7=new C.a("v1.0.0",null)
A.hj=w([A.o7],x.i)
A.u_=new B.a3("brand-version-badge",null,A.hj,null)
A.cC=w([A.ox,A.u_],x.i)
A.rf=new B.r(null,"brand-title",null,null,null,A.cC,null)
A.ma=new C.a("KhmerChar Programming Language",null)
A.er=w([A.ma],x.i)
A.re=new B.r(null,"brand-subtitle",null,null,null,A.er,null)
A.bQ=w([A.rf,A.re],x.i)
A.rs=new B.r(null,"brand-text",null,null,null,A.bQ,null)
A.dJ=w([A.rq,A.rs],x.i)
A.pP=new B.P("#intro",null,"brand-link",null,null,null,A.dJ,null)
A.jK={target:0,rel:1,"aria-label":2,title:3}
A.jo=new C.L(A.jK,["_blank","noopener noreferrer","GitHub Repository","GitHub"],x.w)
A.jy=new C.L(A.ag,["19","19","0 0 24 24","currentColor"],x.w)
A.q={d:0}
A.jt=new C.L(A.q,["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],x.w)
A.tB=new B.bb(A.jt,null)
A.ia=w([A.tB],x.i)
A.uo=new B.aN(null,A.jy,A.ia,null)
A.ei=w([A.uo],x.i)
A.pR=new B.P(y.b,null,"header-action-btn",null,A.jo,null,A.ei,null)
A.mh=new C.a("\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7",null)
A.e6=w([A.mh],x.i)
A.rj=new B.r(null,"toc-title",null,null,null,A.e6,null)
A.A={width:0,height:1,viewBox:2,fill:3,stroke:4,"stroke-width":5}
A.jw=new C.L(A.A,["16","16","0 0 24 24","none","currentColor","2"],x.w)
A.af={cx:0,cy:1,r:2}
A.jD=new C.L(A.af,["11","11","8"],x.w)
A.pW=new B.e4(A.jD,null)
A.jq=new C.L(A.q,["m21 21-4.3-4.3"],x.w)
A.ty=new B.bb(A.jq,null)
A.a9=w([A.pW,A.ty],x.i)
A.ur=new B.aN(null,A.jw,A.a9,null)
A.nU=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search docs)...",null)
A.bY=w([A.nU],x.i)
A.tW=new B.a3(null,null,A.bY,null)
A.dP=w([A.ur,A.tW],x.i)
A.rk=new B.r(null,"search-trigger-content",null,null,null,A.dP,null)
A.kU=new C.a("\u1785\u17bb\u1785\u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17bb\u1780\u179a\u1780\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791",null)
A.hN=w([A.kU],x.i)
A.u3=new B.a3(null,null,A.hN,null)
A.mj=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784 \u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar)",null)
A.dR=w([A.mj],x.i)
A.tV=new B.a3(null,null,A.dR,null)
A.cP=w([A.u3,A.tV],x.i)
A.rl=new B.r(null,"search-modal-footer",null,null,null,A.cP,null)
A.by=new B.em("none",0,"none")
A.pb=new C.aK(A.by,null,null,null,null,null,null,null,null,null,null)
A.rp=new B.r(null,null,A.pb,null,null,A.z,null)
A.t5=new B.fR(null)
A.ln=new C.a("\u1781\u17d2\u1798\u17c2\u179a\u1785\u17b6\u179a (KhmerChar) \u2014 \u179a\u1780\u17d2\u179f\u17b6\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1782\u17d2\u179a\u1794\u17cb\u1799\u17c9\u17b6\u1784 \xa9 2026 \u178a\u17c4\u1799 Veng Chhuong \u1793\u17b7\u1784\u179f\u17a0\u1782\u1798\u1793\u17cd\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",null)
A.fq=w([A.ln],x.i)
A.t7=new B.K(null,null,A.fq,null)
A.kx=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Terminal Output)",null)
A.hR=w([A.kx],x.i)
A.tX=new B.a3("code-output-title",null,A.hR,null)
A.kD=new C.a("\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)",null)
A.cw=w([A.kD],x.i)
A.tY=new B.a3(null,null,A.cw,null)
A.nC=new C.a("\u179b\u17bb\u1794",null)
A.i0=w([A.nC],x.i)
A.u0=new B.a3(null,null,A.i0,null)
A.ks=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Console Output)",null)
A.ez=w([A.ks],x.i)
A.u1=new B.a3("console-pane-title",null,A.ez,null)
A.kP=new C.a("\u2713 \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 (Check)",null)
A.fC=w([A.kP],x.i)
A.u2=new B.a3(null,null,A.fC,null)
A.ac=new C.L(A.A,["20","20","0 0 24 24","none","currentColor","2"],x.w)
A.jp=new C.L(A.q,["M4 6h16M4 12h16M4 18h16"],x.w)
A.tx=new B.bb(A.jp,null)
A.i7=w([A.tx],x.i)
A.un=new B.aN(null,A.ac,A.i7,null)
A.ad=new C.L(A.A,["18","18","0 0 24 24","none","currentColor","2"],x.w)
A.jr=new C.L(A.q,["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],x.w)
A.tz=new B.bb(A.jr,null)
A.i8=w([A.tz],x.i)
A.up=new B.aN("theme-icon-moon",A.ad,A.i8,null)
A.jv=new C.L(A.A,["14","14","0 0 24 24","none","currentColor","2"],x.w)
A.js=new C.L(A.q,["M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],x.w)
A.tA=new B.bb(A.js,null)
A.i9=w([A.tA],x.i)
A.uq=new B.aN(null,A.jv,A.i9,null)
A.us=new B.aN(null,A.ac,A.a9,null)
A.jC=new C.L(A.af,["12","12","4"],x.w)
A.pV=new B.e4(A.jC,null)
A.ju=new C.L(A.q,["M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"],x.w)
A.tC=new B.bb(A.ju,null)
A.iZ=w([A.pV,A.tC],x.i)
A.ut=new B.aN("theme-icon-sun",A.ad,A.iZ,null)})();(function staticFields(){$.hW=0
$.dd=B.ot()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"pA","kI",()=>{B.ni()
return $.hW})})()};
(a=>{a["VpMZjSHBJ018zyqfiwLjWaj926s="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
