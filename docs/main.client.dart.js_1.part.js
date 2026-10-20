((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
mA(){throw C.c(C.ai("Cannot modify constant Set"))},
n5(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return C.o(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
n4(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.b.bK(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
n1(){return Date.now()},
n3(){var w,v
if($.hR!==0)return
$.hR=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.hR=1e6
$.d8=new B.hQ(v)},
cD:function cD(){},
bV:function bV(d,e,f){this.a=d
this.b=e
this.$ti=f},
hQ:function hQ(d){this.a=d},
oW(d){var w=B.n5(d,null)
if(w!=null)return w
throw C.c(C.hp(d,null))},
oI(d){var w=B.n4(d)
if(w!=null)return w
throw C.c(C.hp("Invalid double",d))},
jS(d){return new C.aX(d)},
hW:function hW(){this.b=this.a=0},
kt(d,e,f){return new B.bc(f,e,d,null)},
oZ(d,e,f,g){return new B.Y(e,g,f,d,null)},
b4(d,e,f,g,h,i){return new B.fE(h,f,i,e,g,d,null)},
fP(d,e,f){return new B.fO(f,e,d,null)},
lx(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
lN(d,e,f,g){var w=null
return new B.O(g,w,e,w,w,f,d,w)},
bu(d,e,f){return new B.a3(e,f,d,null)},
fD:function fD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
fH:function fH(d,e,f){this.d=d
this.w=e
this.a=f},
fK:function fK(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
fJ:function fJ(d){this.a=d},
a6:function a6(d,e){this.w=d
this.a=e},
b8:function b8(d,e){this.w=d
this.a=e},
fM:function fM(d){this.a=d},
fN:function fN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
a7:function a7(d,e,f){this.c=d
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
bc:function bc(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
Y:function Y(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.x=g
_.a=h},
J:function J(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
fR:function fR(d,e,f){this.d=d
this.w=e
this.a=f},
fE:function fE(d,e,f,g,h,i,j){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
e_:function e_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.z=f
_.Q=g
_.at=h
_.ax=i
_.a=j
_.$ti=k},
hw:function hw(d,e,f){this.c=d
this.a=e
this.b=f},
fL:function fL(d,e,f){this.f=d
this.x=e
this.a=f},
fO:function fO(d,e,f,g){var _=this
_.d=d
_.e=e
_.Q=f
_.a=g},
fS:function fS(d,e,f,g){var _=this
_.at=d
_.ch=e
_.CW=f
_.a=g},
fT:function fT(d,e,f,g,h){var _=this
_.CW=d
_.cy=e
_.db=f
_.dx=g
_.a=h},
aL:function aL(d,e,f,g){var _=this
_.f=d
_.x=e
_.z=f
_.a=g},
dZ:function dZ(d,e){this.Q=d
this.a=e},
ba:function ba(d,e){this.y=d
this.a=e},
fQ:function fQ(d){this.a=d},
ck:function ck(d,e){this.w=d
this.a=e},
cm:function cm(d,e){this.w=d
this.a=e},
cl:function cl(d,e){this.w=d
this.a=e},
ap:function ap(d,e){this.as=d
this.a=e},
C:function C(d,e){this.w=d
this.a=e},
d:function d(d,e){this.z=d
this.a=e},
O:function O(d,e,f,g,h,i,j,k){var _=this
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
Z:function Z(d,e){this.w=d
this.a=e},
eh:function eh(d,e,f){this.c=d
this.a=e
this.b=f},
fA:function fA(d,e,f){this.a=d
this.b=e
this.c=f},
h7:function h7(d,e){this.a=d
this.b=e},
fW:function fW(d,e){this.a=d
this.b=e},
dL:function dL(d,e){this.b=d
this.c=e},
i_:function i_(d,e){this.a=d
this.b=e},
hn:function hn(d,e){this.a=d
this.b=e},
i0:function i0(){},
fy:function fy(){},
fn:function fn(d,e){this.a=d
this.b=e},
aO:function aO(d,e){this.b=d
this.a=e},
fh:function fh(d,e,f,g,h,i,j){var _=this
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
aR:function aR(){},
ag:function ag(){},
eS:function eS(d,e,f,g){var _=this
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
eT:function eT(d,e,f){var _=this
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
mo(){return new B.aV(null)},
aV:function aV(d){this.a=d},
cp:function cp(){var _=this
_.e=_.d=!1
_.f="intro"
_.r=!0
_.c=_.a=null},
h4:function h4(d){this.a=d},
h3:function h3(d){this.a=d},
fZ:function fZ(d){this.a=d},
fY:function fY(d){this.a=d},
fX:function fX(d,e){this.a=d
this.b=e},
h1:function h1(d){this.a=d},
h0:function h0(d){this.a=d},
h2:function h2(d){this.a=d},
h_:function h_(d){this.a=d},
V:function V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f8:function f8(){var _=this
_.f=_.e=_.d=!1
_.r=""
_.w=0
_.x=!1
_.c=_.a=null},
ib:function ib(d){this.a=d},
ic:function ic(d){this.a=d},
ia:function ia(d){this.a=d},
id:function id(d){this.a=d},
ie:function ie(d,e){this.a=d
this.b=e},
ig:function ig(d,e){this.a=d
this.b=e},
ih:function ih(d){this.a=d},
ii:function ii(d){this.a=d},
ek:function ek(d){this.a=d},
en:function en(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ht:function ht(d){this.a=d},
hu:function hu(d){this.a=d},
hv:function hv(d){this.a=d},
c5:function c5(d){this.a=d},
fo:function fo(){var _=this
_.d="hello"
_.e=""
_.f='\u179f\u17bc\u1798\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u1798\u17be\u179b\u179b\u1791\u17d2\u1792\u1795\u179b...'
_.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"
_.w=!1
_.c=_.a=null},
iE:function iE(d,e){this.a=d
this.b=e},
iD:function iD(d,e){this.a=d
this.b=e},
iF:function iF(d){this.a=d},
iG:function iG(d,e){this.a=d
this.b=e},
iH:function iH(d,e){this.a=d
this.b=e},
iA:function iA(d,e){this.a=d
this.b=e},
iB:function iB(d,e){this.a=d
this.b=e},
iC:function iC(d){this.a=d},
iJ:function iJ(d){this.a=d},
iK:function iK(d){this.a=d},
iL:function iL(d){this.a=d},
iM:function iM(d){this.a=d},
iN:function iN(d){this.a=d},
iI:function iI(d,e){this.a=d
this.b=e},
c7:function c7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fs:function fs(){this.d=""
this.c=this.a=null},
iQ:function iQ(d){this.a=d},
iS:function iS(d){this.a=d},
iT:function iT(d){this.a=d},
iR:function iR(d,e){this.a=d
this.b=e},
iU:function iU(d){this.a=d},
iV:function iV(d){this.a=d},
iW:function iW(d,e){this.a=d
this.b=e},
eQ:function eQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
hU:function hU(d,e){this.a=d
this.b=e},
a1:function a1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eY:function eY(d,e,f){this.c=d
this.d=e
this.a=f},
hZ:function hZ(d,e){this.a=d
this.b=e},
a4:function a4(d,e){this.a=d
this.b=e},
U:function U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4:function e4(d){this.a=d},
ee:function ee(d){this.a=d},
el:function el(d){this.a=d},
em:function em(d){this.a=d},
eK:function eK(d){this.a=d},
lW(d){var w=b.G,v=C.W(C.n(w.document).documentElement)
if(v!=null)v.setAttribute("data-theme",d)
C.n(C.n(w.window).localStorage).setItem("khmerlang-doc-theme",d)},
p7(d){C.n(b.G.window).addEventListener("keydown",C.lA(new B.jN(d)))},
jN:function jN(d){this.a=d},
y:function y(){},
d6:function d6(d){this.a=d},
bH:function bH(d){this.a=d},
bS:function bS(d){this.a=d},
d5:function d5(){},
cq:function cq(d){this.a=d},
d7:function d7(d){this.a=d},
bg:function bg(d){this.a=d},
dm:function dm(){},
dn:function dn(d,e){this.a=d
this.b=e},
aN:function aN(d,e,f){this.a=d
this.b=e
this.c=f},
cr:function cr(d,e){this.a=d
this.b=e},
c2:function c2(d,e){this.a=d
this.b=e},
cY:function cY(d,e,f){this.a=d
this.b=e
this.c=f},
bZ:function bZ(d,e){this.a=d
this.b=e},
cL:function cL(d,e,f){this.a=d
this.b=e
this.c=f},
cK:function cK(d,e){this.a=d
this.b=e},
d3:function d3(d,e){this.a=d
this.b=e},
dq:function dq(d,e){this.a=d
this.b=e},
d9:function d9(d){this.a=d},
cs:function cs(d){this.a=d},
bY:function bY(d,e,f){this.a=d
this.b=e
this.c=f},
dt:function dt(d,e){this.a=d
this.b=e},
cJ:function cJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bB:function bB(d,e,f){this.a=d
this.b=e
this.c=f},
cw:function cw(d,e,f){this.a=d
this.b=e
this.c=f},
dd:function dd(d){this.a=d},
cI:function cI(d){this.a=d},
lY(d){var w,v,u,t,s
for(w=d.length,v=0,u="";v<w;++v){t=d[v]
s=A.jl.p(0,t)
u+=s==null?t:s}return u.charCodeAt(0)==0?u:u},
fI(d){if(d==null)return"\u1791\u1791\u17c1"
if(C.fC(d))return d?"\u1796\u17b7\u178f":"\u1798\u17b7\u1793\u1796\u17b7\u178f"
if(typeof d=="number")return B.lY(d===D.h.bI(d)?D.f.i(D.h.aI(d)):D.h.i(d))
if(C.ki(d))return B.lY(D.f.i(d))
if(x.j.b(d))return"["+J.kE(d,new B.jx(),x.N).W(0,", ")+"]"
if(x.f.b(d))return"{"+d.gaY().al(0,new B.jy(),x.N).W(0,", ")+"}"
if(d instanceof B.bl)return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a.a+">"
if(d instanceof B.bj)return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+d.a+">"
if(d instanceof B.bk)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+d.a+">"
if(d instanceof B.aj)return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785 "+d.a+">"
return J.M(d)},
oF(d){var w=C.A(x.N,x.z),v=new B.jr(d),u=new B.jq(),t=new B.jt(),s=new B.jp()
w.k(0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789",new B.aj("\u1794\u1784\u17d2\u17a0\u17b6\u1789",v))
w.k(0,"print",new B.aj("print",v))
w.k(0,"\u1794\u17d2\u179a\u179c\u17c2\u1784",new B.aj("\u1794\u17d2\u179a\u179c\u17c2\u1784",u))
w.k(0,"len",new B.aj("len",u))
w.k(0,"\u1794\u17d2\u179a\u1797\u17c1\u1791",new B.aj("\u1794\u17d2\u179a\u1797\u17c1\u1791",t))
w.k(0,"type",new B.aj("type",t))
w.k(0,"\u1794\u1793\u17d2\u1790\u17c2\u1798",new B.aj("\u1794\u1793\u17d2\u1790\u17c2\u1798",s))
w.k(0,"append",new B.aj("append",s))
return new B.bf(w,null)},
jx:function jx(){},
jy:function jy(){},
bf:function bf(d,e){this.a=d
this.b=e},
aj:function aj(d,e){this.a=d
this.b=e},
bk:function bk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bj:function bj(d,e,f){this.a=d
this.b=e
this.c=f},
bl:function bl(d,e){this.a=d
this.b=e},
jr:function jr(d){this.a=d},
js:function js(){},
jq:function jq(){},
jt:function jt(){},
jp:function jp(){},
kS(d,e,f){return new B.hI(d,e,f,null)},
eG(d,e,f){return new B.hO(d,e,f,null)},
L(d){return new B.eO(d,null,null,null)},
cS:function cS(){},
hI:function hI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hO:function hO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eO:function eO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eL:function eL(d){this.a=d},
hx:function hx(d){this.a=d
this.b=$},
hy:function hy(d,e){this.a=d
this.b=e},
hz:function hz(d,e){this.a=d
this.b=e},
hA:function hA(d,e){this.a=d
this.b=e},
hB:function hB(d,e){this.a=d
this.b=e},
kR(d){var w=new B.hH(d)
w.e=d.length
return w},
hH:function hH(d){var _=this
_.a=d
_.b=0
_.d=_.c=1
_.e=$},
eF:function eF(d){this.a=d
this.b=0},
lV(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new C.c9(""),a0=new B.hW()
$.kv()
i=$.d8.$0()
a0.a=i
a0.b=null
w=a0
v=new B.jM(d,null)
u=null
t=null
try{s=B.kR(a1)
r=s.cH()
q=new B.eF(r)
u=q.cG()
t=B.oF(v)
i=t
h=new B.hx(i)
h.b=i
p=h
o=p.eu(u)
i=w
if(i.b==null)i.b=$.d8.$0()
n=C.A(x.N,x.z)
for(i=t.a,i=new C.aE(i,C.m(i).h("aE<1,2>")).gC(0);i.n();){g=i.d
g.toString
m=g
if(!(m.b instanceof B.aj))J.fV(n,m.a,m.b)}i=d.a
g=B.jS(w.gbz())
return new B.cH("success",i.charCodeAt(0)==0?i:i,null,g)}catch(f){i=C.a_(f)
if(i instanceof B.cS){l=i
i=w
if(i.b==null)i.b=$.d8.$0()
i=e!=null
if(i)l.toString
if(i)l.d=e
i=d.a
g=l.bC()
l.co()
l.toString
l.toString
return new B.cH("error",i.charCodeAt(0)==0?i:i,g,B.jS(w.gbz()))}else{k=i
i=w
if(i.b==null)i.b=$.d8.$0()
j=e!=null&&D.b.gcB(e)?e:"<source>"
i=d.a
g=C.j(k)
C.j(j)
C.j(k)
return new B.cH("error",i.charCodeAt(0)==0?i:i,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+g,B.jS(w.gbz()))}}},
oD(d){var w,v,u,t,s,r,q,p,o,n=null
try{w=B.kR(d)
v=w.cH()
u=new B.eF(v)
t=u.cG()
p=J.aB(v)
if(J.aB(t)!==0)C.am(C.bs(J.ml(t)).a,null)
return new B.cu("success",p,null)}catch(o){p=C.a_(o)
if(p instanceof B.cS){s=p
p=n!=null
if(p)s.toString
if(p)s.d=n
p=s.bC()
s.co()
s.toString
s.toString
return new B.cu("error",0,p)}else{r=p
q=n!=null&&D.b.gcB(n)?n:"<source>"
p=C.j(r)
C.j(q)
C.j(r)
return new B.cu("error",0,"\u1780\u17c6\u17a0\u17bb\u179f\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792/System Error: "+p)}}},
cH:function cH(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.w=g},
cu:function cu(d,e,f){this.a=d
this.b=e
this.d=f},
jM:function jM(d,e){this.a=d
this.b=e},
p:function p(d,e){this.a=d
this.b=e},
ah:function ah(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ne(d,e){var w=$.E
if(w===D.e)return C.k6(d,x.M.a(e))
return C.k6(d,x.M.a(w.bv(e)))},
fF(d,e,f,g){return C.A(x.N,x.v)},
ce(d,e,f,g,h,i,j){var w=null
return new C.aJ(w,i,h,d,w,e,j,f,g,w,w)},
oQ(d){var w,v,u=d.split("\n"),t=C.b([],x.i)
for(w=0;v=u.length,w<v;++w){D.a.D(t,B.o_(u[w]))
if(w<v-1)D.a.j(t,A.nj)}return t},
o_(d){var w,v,u,t,s,r,q,p,o=null
if(D.b.cS(D.b.bK(d),"#")){w=x.i
return C.b([B.bu(C.b([new C.a(d,o)],w),"com",o)],w)}w=x.i
v=C.b([],w)
u=new C.c9("")
for(t=d.length,s=0;s<t;){if(!(s>=0))return C.o(d,s)
r=d[s]
if(r==="#"){t=u.a
if(t.length!==0){D.a.D(v,B.kj(t.charCodeAt(0)==0?t:t))
u.a=""}D.a.j(v,new B.a3("com",o,C.b([new C.a(D.b.b8(d,s),o)],w),o))
break}if(r==='"'||r==="'"){q=u.a
if(q.length!==0){D.a.D(v,B.kj(q.charCodeAt(0)==0?q:q))
u.a=""}p=s+1
for(;;){q=p<t
if(!(q&&d[p]!==r))break
if(!(p<t))return C.o(d,p)
p=d[p]==="\\"&&p+1<t?p+2:p+1}if(q)++p
D.a.j(v,new B.a3("str",o,C.b([new C.a(D.b.aq(d,s,p),o)],w),o))
s=p
continue}u.a+=r;++s}w=u.a
if(w.length!==0)D.a.D(v,B.kj(w.charCodeAt(0)==0?w:w))
return v},
kj(d){var w,v,u,t="(\\s+|[(){}\\[\\],;:=+\\-*/%<>!\u17d4\u17d5\u17d6])",s=C.b([],x.i),r=D.b.cR(d,C.dc(t)),q=C.dc(t).aS(0,d),p=C.aG(q,C.m(q).h("i.E"))
for(w=0,v=0;v<r.length;++v){u=r[v]
if(u.length!==0)D.a.j(s,B.os(u))
if(w<p.length){q=p[w].b
if(0>=q.length)return C.o(q,0)
q=q[0]
D.a.j(s,new C.a(q==null?"":q,null));++w}}return s},
os(d){var w,v=null
if(A.k8.K(0,d))return B.bu(C.b([new C.a(d,v)],x.i),"kw",v)
else if(A.k9.K(0,d))return B.bu(C.b([new C.a(d,v)],x.i),"builtin",v)
else{w=C.dc("^[\u17e0-\u17e90-9]+(\\.[\u17e0-\u17e90-9]+)?$")
if(w.b.test(d))return B.bu(C.b([new C.a(d,v)],x.i),"num",v)}return new C.a(d,v)}},A
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[3],B)
A=c[4]
B.cD.prototype={
j(d,e){C.m(this).c.a(e)
B.mA()}}
B.bV.prototype={
gl(d){return this.b},
gM(d){return this.b===0},
gC(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new C.bL(w,w.length,v.$ti.h("bL<1>"))},
K(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
B.hW.prototype={
gbz(){var w,v=this.b
if(v==null)v=$.d8.$0()
w=v-this.a
if($.kv()===1e6)return w
return w*1000}}
B.fD.prototype={
q(d){var w=this
return new C.v("aside",w.c,w.d,null,w.f,null,w.w,null)}}
B.fH.prototype={
q(d){var w=null
return new C.v("footer",w,this.d,w,w,w,this.w,w)}}
B.fK.prototype={
q(d){var w=null
return new C.v("header",this.c,this.d,w,w,w,this.w,w)}}
B.fJ.prototype={
q(d){var w=null
return new C.v("h1",w,"doc-title",w,w,w,A.dG,w)}}
B.a6.prototype={
q(d){var w=null
return new C.v("h2",w,"section-heading",w,w,w,this.w,w)}}
B.b8.prototype={
q(d){var w=null
return new C.v("h3",w,"sub-heading",w,w,w,this.w,w)}}
B.fM.prototype={
q(d){var w=null
return new C.v("main",w,"docs-main-content",w,w,w,A.dL,w)}}
B.fN.prototype={
q(d){var w=this
return new C.v("nav",w.c,w.d,null,w.f,null,w.w,null)}}
B.a7.prototype={
q(d){var w=null
return new C.v("section",this.c,"doc-section",w,w,w,this.w,w)}}
B.r.prototype={
q(d){var w=this
return new C.v("div",w.c,w.d,w.e,w.f,w.r,w.w,null)}}
B.bc.prototype={
q(d){var w=null
return new C.v("ul",this.c,this.d,w,w,w,this.w,w)}}
B.Y.prototype={
q(d){var w=this,v=x.N
return new C.v("li",null,w.e,w.f,C.A(v,v),w.w,w.x,null)}}
B.J.prototype={
q(d){var w=null
return new C.v("p",w,this.d,this.e,w,w,this.w,w)}}
B.fR.prototype={
q(d){var w=null
return new C.v("pre",w,this.d,w,w,w,this.w,w)}}
B.fE.prototype={
q(d){var w=this,v=x.N,u=C.A(v,v),t=w.y
if(t!=null)u.D(0,t)
v=C.A(v,x.v)
v.D(0,w.z)
v.D(0,B.fG().$1$1$onClick(null,x.H))
return new C.v("button",w.r,w.w,w.x,u,v,w.Q,null)}}
B.e_.prototype={
q(d){var w,v=this,u=null,t=x.N,s=C.A(t,t)
s.D(0,v.at)
s.k(0,"type",v.c.c)
s.k(0,"value",v.e)
w=B.lx(u)
if(w!=null)s.k(0,"checked",w)
w=B.lx(u)
if(w!=null)s.k(0,"indeterminate",w)
t=C.A(t,x.v)
t.D(0,v.ax)
t.D(0,B.fG().$1$2$onChange$onInput(u,u,v.$ti.c))
return new C.v("input",v.z,v.Q,u,s,t,u,u)}}
B.hw.prototype={
a7(){return"InputType."+this.b}}
B.fL.prototype={
q(d){var w=null,v=x.N
return new C.v("label",w,w,this.f,C.A(v,v),w,this.x,w)}}
B.fO.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.k(0,"value",this.d)
if(this.e)v.k(0,"selected","")
return new C.v("option",w,w,w,v,w,this.Q,w)}}
B.fS.prototype={
q(d){var w=null,v=x.N,u=C.A(v,x.v)
u.D(0,this.ch)
u.D(0,B.fG().$1$2$onChange$onInput(w,w,x.a))
return new C.v("select",w,this.at,w,C.A(v,v),u,this.CW,w)}}
B.fT.prototype={
q(d){var w,v=this,u=null,t=x.N,s=C.A(t,t)
s.D(0,v.cy)
w=C.A(t,x.v)
w.D(0,v.db)
w.D(0,B.fG().$1$2$onChange$onInput(u,u,t))
return new C.v("textarea",u,v.CW,u,s,w,v.dx,u)}}
B.aL.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.x)
return new C.v("svg",this.f,w,w,v,w,this.z,w)}}
B.dZ.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.Q)
return new C.v("circle",w,w,w,v,w,A.y,w)}}
B.ba.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,this.y)
return new C.v("path",w,w,w,v,w,A.y,w)}}
B.fQ.prototype={
q(d){var w=null,v=x.N
v=C.A(v,v)
v.D(0,A.jz)
return new C.v("polygon",w,w,w,v,w,A.y,w)}}
B.ck.prototype={
q(d){var w=null
return new C.v("table",w,"doc-table",w,w,w,this.w,w)}}
B.cm.prototype={
q(d){var w=null
return new C.v("thead",w,w,w,w,w,this.w,w)}}
B.cl.prototype={
q(d){var w=null
return new C.v("tbody",w,w,w,w,w,this.w,w)}}
B.ap.prototype={
q(d){var w=null,v=x.N
return new C.v("th",w,w,w,C.A(v,v),w,this.as,w)}}
B.C.prototype={
q(d){var w=null
return new C.v("tr",w,w,w,w,w,this.w,w)}}
B.d.prototype={
q(d){var w=null,v=x.N
return new C.v("td",w,w,w,C.A(v,v),w,this.z,w)}}
B.O.prototype={
q(d){var w=this,v=x.N,u=C.A(v,v),t=w.Q
if(t!=null)u.D(0,t)
u.k(0,"href",w.c)
v=C.A(v,x.v)
t=w.as
if(t!=null)v.D(0,t)
v.D(0,B.fG().$1$1$onClick(null,x.H))
return new C.v("a",w.x,w.y,w.z,u,v,w.at,null)},
gaa(){return null}}
B.f.prototype={
q(d){var w=null
return new C.v("code",w,this.d,w,w,w,this.w,w)}}
B.a3.prototype={
q(d){var w=null
return new C.v("span",w,this.d,this.e,w,w,this.w,w)}}
B.Z.prototype={
q(d){var w=null
return new C.v("strong",w,w,w,w,w,this.w,w)}}
B.eh.prototype={
a7(){return"Display."+this.b}}
B.fA.prototype={
gb7(){var w,v=C.b([],x.s)
v.push("solid")
v.push(this.b.a)
w=this.c
v.push(C.eD(w.b)+w.a)
w=x.N
return C.H(["border",D.a.W(v," ")],w,w)},
$imp:1}
B.h7.prototype={
a7(){return"BorderStyle."+this.b}}
B.fW.prototype={
a7(){return"AlignItems."+this.b}}
B.dL.prototype={
gb7(){var w,v=x.N
v=C.A(v,v)
w=this.b
w=w==null?null:C.eD(w.b)+w.a
if(w!=null)v.k(0,"top",w)
w=this.c
w=w==null?null:C.eD(w.b)+w.a
if(w!=null)v.k(0,"right",w)
return v},
$ik3:1}
B.i_.prototype={
a7(){return"TextAlign."+this.b}}
B.hn.prototype={
a7(){return"FontWeight."+this.b}}
B.i0.prototype={}
B.fy.prototype={
gX(){var w=C.b([],x.s)
w.push("none")
return D.a.W(w," ")},
$ind:1}
B.fn.prototype={}
B.aO.prototype={
a9(){var w=C.bX(x.h),v=($.a8+1)%16777215
$.a8=v
return new B.fh(null,!1,!1,w,v,this,D.l)}}
B.fh.prototype={
az(){var w=this.f
w.toString
return x.c.a(w).b},
ab(){var w=this.CW.d$
w.toString
return C.mC(w,null)},
an(d){x.T.a(d)}}
B.aR.prototype={
a9(){var w=this.aW(),v=($.a8+1)%16777215
$.a8=v
v=new B.eS(w,v,this,D.l)
w.c=v
w.sc0(this)
return v}}
B.ag.prototype={
aZ(){},
I(d){x.M.a(d).$0()
this.c.cE()},
sc0(d){this.a=C.m(this).h("ag.T?").a(d)}}
B.eS.prototype={
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
C.m(w).h("ag.T").a(d)
return!0},
a_(d){x.D.a(d)
this.bd(d)
this.ry.sc0(d)},
aC(d){var w
x.D.a(d)
try{w=this.ry
w.toString
C.m(w).h("ag.T").a(d)}finally{}this.bb(d)},
aj(){this.ry.toString
this.cW()},
aJ(){this.bc()
this.ry=this.ry.c=null}}
B.u.prototype={
a9(){var w=($.a8+1)%16777215
$.a8=w
return new B.eT(w,this,D.l)}}
B.eT.prototype={
gA(){return x.q.a(C.l.prototype.gA.call(this))},
S(){if(this.w.c)this.r.toString
this.b9()},
ao(d){x.q.a(C.l.prototype.gA.call(this))
return!0},
bw(){return x.q.a(C.l.prototype.gA.call(this)).q(this)},
am(){this.w.toString
this.bO()}}
B.aV.prototype={
aW(){return new B.cp()}}
B.cp.prototype={
aZ(){var w,v,u,t=this
t.bR()
w=b.G
v=C.bP(C.n(C.n(w.window).localStorage).getItem("khmerlang-doc-theme"))
if(v==null)v="dark"
t.r=v!=="light"
B.lW(v)
B.p7(new B.h4(t))
w=C.a2(C.n(C.n(w.window).location).hash)
u=C.pb(w,"#","",0)
if(u.length!==0)t.f=u},
dJ(){this.I(new B.fZ(this))},
dH(){this.I(new B.fY(this))},
ds(d){C.a2(d)
this.I(new B.fX(this,d))
C.n(C.n(b.G.window).location).hash=d},
q(d){var w=this,v=null,u=w.r,t=w.d,s=w.f,r=w.gdr(),q=x.i
return new B.aO(C.b([new B.en(w.gdG(),new B.h1(w),w.gdI(),u,v),new B.r(v,"docs-container",v,v,v,C.b([new B.eQ(t,s,r,v),A.t4,new B.eY(s,r,v)],q),v),A.bA,new B.c7(w.e,new B.h2(w),r,v)],q),v)}}
B.V.prototype={
aW(){return new B.f8()}}
B.f8.prototype={
di(){var w=this,v=w.a.e
C.n(C.n(C.n(C.n(b.G.window).navigator).clipboard).writeText(v))
w.I(new B.ib(w))
B.ne(A.bz,new B.ic(w))},
dj(){var w,v,u,t=this
t.I(new B.id(t))
try{w=B.lV(t.a.e)
t.I(new B.ie(t,w))}catch(u){v=C.a_(u)
t.I(new B.ig(t,v))}},
q(d){var w,v=this,u=null,t=x.i,s=C.b([B.bu(C.b([new C.a(v.a.d,u)],t),"code-card-lang",u),B.bu(C.b([new C.a(v.a.c,u)],t),"code-card-title",u)],t),r=v.d?B.ce(new B.fA(A.b0,A.V,new B.fn("px",1)),A.V,u,u,u,u,u):u,q=x.N,p=x.v,o=C.H(["click",new B.ih(v)],q,p)
r=C.b([B.b4(C.b([new C.a(v.d?"\u2713 \u1794\u17b6\u1793\u1785\u1798\u17d2\u179b\u1784!":"\u1785\u1798\u17d2\u179b\u1784",u)],t),u,"btn-code-action btn-copy-code",o,u,r)],t)
o=v.a
w=o.f
if(w==null?o.d==="KHMER":w){o=v.e?C.H(["disabled","true"],q,q):u
p=C.H(["click",new B.ii(v)],q,p)
r.push(B.b4(C.b([new C.a(v.e?"\u23f3 \u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a...":"\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a",u)],t),o,"btn-code-action btn-code-run",p,u,u))}s=C.b([new B.r(u,"code-card-meta",u,u,u,s,u),new B.r(u,"code-card-actions",u,u,u,r,u)],t)
r=C.b([],t)
q=v.a
p=q.d
q=q.e
if(p==="KHMER")D.a.D(r,B.oQ(q))
else r.push(new C.a(q,u))
s=C.b([new B.r(u,"code-card-header",u,u,u,s,u),new B.r(u,"code-content-wrapper",u,u,u,C.b([new B.fR("code-block",C.b([new B.f("snippet-source",r,u)],t),u)],t),u)],t)
if(v.f){r=B.ce(u,A.r,new C.az("rem",0.75),u,u,u,u)
r=C.b([A.tW,B.bu(C.b([new C.a(""+v.w+"ms",u)],t),"code-output-time",r)],t)
q=v.x?A.aG:A.aI
s.push(new B.r(u,"code-output-drawer visible",u,u,u,C.b([new B.r(u,"code-output-header",u,u,u,r,u),new B.r(u,"code-output-body",q,u,u,C.b([new C.a(v.r,u)],t),u)],t),u))}return new B.r(u,"code-card",u,u,u,s,u)}}
B.ek.prototype={
q(d){var w=null,v=x.i
return new B.fH("docs-footer",C.b([A.t8,new B.J(w,B.ce(w,A.r,new C.az("rem",0.85),w,new B.dL(new C.az("rem",0.4),w),w,w),C.b([A.mW,A.pG,A.mR,A.pC],v),w)],v),w)}}
B.en.prototype={
q(d){var w,v=this,u="docs-header",t=null,s="search-trigger-btn",r=x.N,q=C.H(["aria-label","\u1794\u17be\u1780\u1798\u17c9\u17ba\u1793\u17bb\u1799"],r,r),p=x.v,o=C.H(["click",new B.ht(v)],r,p),n=x.i
o=C.b([B.b4(C.b([A.um],n),q,"header-action-btn mobile-menu-toggle",o,"mobile-toggle-btn",t),A.pN],n)
q=C.H(["aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search Docs)"],r,r)
w=C.H(["click",new B.hu(v)],r,p)
w=C.b([B.b4(C.b([A.rk,new B.r(t,"search-kbd-shortcut",t,t,t,C.b([new C.v("kbd",t,t,t,t,t,C.b([new C.a("\u2318",t)],n),t),new C.v("kbd",t,t,t,t,t,C.b([new C.a("K",t)],n),t)],n),t)],n),q,s,w,s,t)],n)
q=C.H(["aria-label","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Mode","title","\u1794\u17d2\u178f\u17bc\u179a Dark/Light Theme"],r,r)
p=C.H(["click",new B.hv(v)],r,p)
r=C.b([],n)
if(v.f)r.push(A.uo)
else r.push(A.us)
return new B.fK(u,u,C.b([new B.r(t,"brand-wrapper",t,t,t,o,t),new B.r(t,"header-center-search",t,t,t,w,t),new B.r(t,"header-actions",t,t,t,C.b([A.pD,B.b4(r,q,"header-action-btn",p,"theme-toggle-btn",t),A.pQ],n),t)],n),t)}}
B.c5.prototype={
aW(){return new B.fo()}}
B.fo.prototype={
aZ(){this.bR()
this.e=y.h},
dq(d){this.I(new B.iE(this,d))},
dl(d){this.I(new B.iD(this,d))},
dA(){var w,v,u,t=this
t.I(new B.iF(t))
try{w=B.lV(t.e)
t.I(new B.iG(t,w))}catch(u){v=C.a_(u)
t.I(new B.iH(t,v))}},
d5(){var w,v,u,t=this
try{w=B.oD(t.e)
t.I(new B.iA(t,w))}catch(u){v=C.a_(u)
t.I(new B.iB(t,v))}},
d7(){this.I(new B.iC(this))},
q(d){var w,v,u,t,s=this,r=null,q="rem",p="btn-playground-clear",o="\u1794\u1784\u17d2\u17a0\u17b6\u1789()",n=B.ce(r,A.r,new C.az(q,0.8),A.a6,r,r,r),m=x.i,l=C.b([A.m2],m),k=x.N,j=x.v,i=C.H(["change",new B.iJ(s)],k,j),h=s.d
h=B.fP(C.b([A.nI],m),h==="hello","hello")
w=s.d
w=B.fP(C.b([A.lm],m),w==="math","math")
v=s.d
v=B.fP(C.b([A.ni],m),v==="fibo","fibo")
u=s.d
u=B.fP(C.b([A.nX],m),u==="oop","oop")
t=s.d
t=C.b([new B.fL(n,l,r),new B.fS("playground-sample-select",i,C.b([h,w,v,u,B.fP(C.b([A.le],m),t==="grades","grades")],m),r)],m)
u=C.H(["title","\u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd"],k,k)
v=C.H(["click",new B.iK(s)],k,j)
v=B.b4(C.b([A.u1],m),u,p,v,r,r)
u=C.H(["title","\u179b\u17bb\u1794\u179b\u1791\u17d2\u1792\u1795\u179b"],k,k)
w=C.H(["click",new B.iL(s)],k,j)
w=B.b4(C.b([A.up,A.u_],m),u,p,w,r,r)
u=C.H(["click",new B.iM(s)],k,j)
u=C.b([new B.r(r,r,A.pd,r,r,t,r),new B.r(r,"playground-actions",r,r,r,C.b([v,w,B.b4(C.b([A.aW,A.tX],m),r,"btn-playground-run",u,r,r)],m),r)],m)
w=B.ce(r,A.r,new C.az(q,0.75),r,new B.dL(r,new C.az(q,0.25)),r,r)
w=C.b([B.bu(C.b([A.ki],m),r,w),s.J("\u178f\u17b6\u17c6\u1784 ","\u178f\u17b6\u17c6\u1784"),s.J(o,o),s.J("\u1794\u17be () {\n\n}","\u1794\u17be"),s.J("\u17ac\u1794\u17be () {\n\n}","\u17ac\u1794\u17be"),s.J("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n\n}","\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f"),s.J("\u1781\u178e\u17c8 () {\n\n}","\u1781\u178e\u17c8"),s.J("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i < \u17e5; i = i + \u17e1) {\n\n}","\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb"),s.J("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"),s.J("\u178f\u17d2\u179a\u17a1\u1794\u17cb ","\u178f\u17d2\u179a\u17a1\u1794\u17cb"),s.J("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1788\u17d2\u1798\u17c4\u17c7 {\n\n}","\u1790\u17d2\u1793\u17b6\u1780\u17cb"),s.J("\u1794\u1784\u17d2\u1780\u17be\u178f() {\n\n}","\u1794\u1784\u17d2\u1780\u17be\u178f"),s.J("\u179c\u17b7\u1792\u17b8 \u1788\u17d2\u1798\u17c4\u17c7() {\n\n}","\u179c\u17b7\u1792\u17b8"),s.J("\u1793\u17c1\u17c7.","\u1793\u17c1\u17c7."),s.J("\u1790\u17d2\u1798\u17b8 ","\u1790\u17d2\u1798\u17b8"),s.J("\u1794\u1793\u17d2\u178f\u1796\u17b8 ","\u1794\u1793\u17d2\u178f\u1796\u17b8"),s.J("\u1796\u17b7\u178f","\u1796\u17b7\u178f"),s.J("\u1798\u17b7\u1793\u1796\u17b7\u178f","\u1798\u17b7\u1793\u1796\u17b7\u178f"),s.J("\u1791\u1791\u17c1","\u1791\u1791\u17c1"),s.J("\u17d4","\u17d4"),s.J("\u17d5","\u17d5")],m)
j=C.b([new B.fT("playground-textarea",C.H(["spellcheck","false","placeholder","\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u1793\u17c5\u1791\u17b8\u1793\u17c1\u17c7..."],k,k),C.H(["input",new B.iN(s)],k,j),C.b([new C.a(s.e,r)],m),r)],m)
k=B.ce(r,A.r,new C.az(q,0.75),r,r,r,r)
k=C.b([A.u0,B.bu(C.b([new C.a(s.r,r)],m),r,k)],m)
n=s.w?A.aG:A.aI
return new B.r(r,"playground-container",r,r,r,C.b([new B.r(r,"playground-toolbar",r,r,r,u,r),new B.r(r,"playground-virtual-keys",r,r,r,w,r),new B.r(r,"playground-grid",r,r,r,C.b([new B.r(r,"playground-editor-pane",r,r,r,j,r),new B.r(r,"playground-console-pane",r,r,r,C.b([new B.r(r,"console-pane-header",r,r,r,k,r),new B.r(r,"console-pane-body",n,r,r,C.b([new C.a(s.f,r)],m),r)],m),r)],m),r)],m),r)},
J(d,e){var w=null,v=C.H(["click",new B.iI(this,d)],x.N,x.v)
return B.b4(C.b([new C.a(e,w)],x.i),w,"vk-btn",v,w,w)}}
B.c7.prototype={
aW(){return new B.fs()},
b0(){return this.d.$0()},
eB(d){return this.e.$1(d)}}
B.fs.prototype={
gdf(){var w,v=D.b.bK(this.d).toLowerCase()
if(v.length===0)return A.a7
w=x.o
w=C.aG(new C.dr(A.a7,x.W.a(new B.iQ(v)),w),w.h("i.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="search-modal-card",h="search-modal-input",g="search-results-list"
if(!k.a.c)return A.rp
w=k.gdf()
v=x.N
u=x.v
t=C.H(["click",new B.iS(k)],v,u)
s=C.H(["role","dialog","aria-modal","true","aria-label","\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a"],v,v)
r=k.d
q=C.H(["placeholder","\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 \u17ac\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791\u178a\u17c2\u179b\u1785\u1784\u17cb\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780...","autocomplete","off","autofocus","true"],v,v)
p=C.H(["input",new B.iT(k),"keydown",new B.iU(k)],v,u)
o=C.H(["click",new B.iV(k)],v,u)
n=x.i
o=C.b([A.ur,new B.e_(A.bI,r,h,h,q,p,j,x.Z),B.b4(C.b([A.lc],n),j,"search-kbd-esc-btn",o,j,j)],n)
p=C.b([],n)
r=w.length
if(r===0){v=B.ce(j,A.r,j,j,j,new C.dv(new C.az("rem",1.5)),A.ka)
p.push(B.oZ(C.b([new C.a('\u179a\u1780\u1798\u17b7\u1793\u1783\u17be\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb "'+k.d+'" \u17a1\u17be\u1799\u17d4',j)],n),j,j,v))}else for(m=0;m<w.length;w.length===r||(0,C.aq)(w),++m){l=w[m]
p.push(new B.Y("search-result-item",j,C.H(["click",new B.iW(k,l)],v,u),C.b([new B.r(j,"search-result-title",j,j,j,C.b([new B.a3(j,j,C.b([new C.a(l.b,j)],n),j),new B.a3("sidebar-badge",j,C.b([new C.a(l.d,j)],n),j)],n),j),new B.r(j,"search-result-desc",j,j,j,C.b([new C.a(l.c,j)],n),j)],n),j))}return new B.r("search-modal-backdrop","search-modal-backdrop visible",j,j,t,C.b([new B.r(i,i,j,s,j,C.b([new B.r(j,"search-input-header",j,j,j,o,j),B.kt(p,g,g),A.rl],n),j)],n),j)}}
B.eQ.prototype={
q(d){var w=this,v=w.c?" mobile-open":"",u=x.N,t=x.V
return new B.fN("docs-sidebar","docs-sidebar"+v,C.H(["aria-label","\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6"],u,u),C.b([w.ad(C.b([A.p7,A.p8,A.oT],t),"\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784 (Getting Started)"),w.ad(C.b([A.oZ,A.p0,A.oW],t),"\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7 (Language Basics)"),w.ad(C.b([A.oV,A.p_,A.oX],t),"\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a (Control Flow)"),w.ad(C.b([A.p2,A.oY],t),"\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)"),w.ad(C.b([A.p3,A.oU],t),"\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb (OOP)"),w.ad(C.b([A.p1,A.p4,A.p6,A.p5],t),"\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784")],x.i),null)},
ad(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
x.P.a(d)
w=x.i
v=C.b([new C.a(e,i)],w)
u=C.b([],w)
for(t=d.length,s=x.N,r=x.v,q=this.d,p=0;p<d.length;d.length===t||(0,C.aq)(d),++p){o=d[p]
n=o.a
m=q===n?" active":""
l=C.H(["click",new B.hU(this,o)],s,r)
k=C.b([],w)
j=o.b
if(o.c)k.push(new B.a3(i,A.pb,C.b([new C.a(j,i)],w),i))
else k.push(new C.a(j,i))
j=o.d
if(j!=null)k.push(new B.a3("sidebar-badge badge-new",i,C.b([new C.a(j,i)],w),i))
u.push(new B.Y(i,i,i,C.b([B.lN(k,"sidebar-nav-link"+m,l,"#"+n)],w),i))}return new B.r(i,"sidebar-nav-group",i,i,i,C.b([new B.r(i,"sidebar-nav-title",i,i,i,v,i),B.kt(u,"sidebar-nav-list",i)],w),i)}}
B.a1.prototype={}
B.eY.prototype={
q(d){var w,v,u,t,s,r,q,p="docs-toc",o="toc-list",n=null,m=x.N,l=C.H(["aria-label","\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7"],m,m),k=x.i,j=C.b([],k)
for(w=x.v,v=this.c,u=0;u<17;++u){t=A.hs[u]
s=t.a
r=v===s?" active":""
q=C.H(["click",new B.hZ(this,t)],m,w)
j.push(new B.Y(n,n,n,C.b([B.lN(C.b([new C.a(t.b,n)],k),"toc-link"+r,q,"#"+s)],k),n))}return new B.fD(p,p,l,C.b([A.ri,B.kt(j,o,o)],k),n)}}
B.a4.prototype={}
B.U.prototype={}
B.e4.prototype={
q(d){return A.bF}}
B.ee.prototype={
q(d){return A.bD}}
B.el.prototype={
q(d){return A.bE}}
B.em.prototype={
q(d){return A.bC}}
B.eK.prototype={
q(d){return A.bB}}
B.y.prototype={}
B.d6.prototype={
i(d){return"NumberNode("+C.j(this.a)+")"},
gX(){return this.a}}
B.bH.prototype={
i(d){return'StringNode("'+this.a+'")'},
gX(){return this.a}}
B.bS.prototype={
i(d){return"BooleanNode("+this.a+")"},
gX(){return this.a}}
B.d5.prototype={
i(d){return"NullNode()"}}
B.cq.prototype={
i(d){return"ArrayNode("+C.j(this.a)+")"}}
B.d7.prototype={
i(d){return"ObjectNode("+C.j(this.a)+")"}}
B.bg.prototype={
i(d){return"IdentifierNode("+this.a+")"}}
B.dm.prototype={
i(d){return"ThisNode()"}}
B.dn.prototype={
i(d){return"UnaryOpNode("+this.a+", "+this.b.i(0)+")"}}
B.aN.prototype={
i(d){return"BinaryOpNode("+this.a.i(0)+", "+this.b+", "+this.c.i(0)+")"}}
B.cr.prototype={
i(d){return"AssignmentNode("+this.a+", "+this.b.i(0)+")"},
gX(){return this.b}}
B.c2.prototype={
i(d){return"MemberAccessNode("+this.a.i(0)+"."+this.b+")"},
gaa(){return this.a}}
B.cY.prototype={
i(d){return"MemberAssignmentNode("+this.a.i(0)+"."+this.b+" = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
B.bZ.prototype={
i(d){return"IndexAccessNode("+this.a.i(0)+"["+this.b.i(0)+"])"},
gaa(){return this.a}}
B.cL.prototype={
i(d){return"IndexAssignmentNode("+this.a.i(0)+"["+this.b.i(0)+"] = "+this.c.i(0)+")"},
gaa(){return this.a},
gX(){return this.c}}
B.cK.prototype={
i(d){return"FunctionCallNode("+this.a.i(0)+", "+C.j(this.b)+")"}}
B.d3.prototype={
i(d){return"NewNode("+this.a+", "+C.j(this.b)+")"}}
B.dq.prototype={
i(d){return"VarDeclNode("+this.a+", "+C.j(this.b)+")"},
gX(){return this.b}}
B.d9.prototype={
i(d){return"PrintNode("+C.j(this.a)+")"}}
B.cs.prototype={
i(d){return"BlockNode("+C.j(this.a)+")"}}
B.bY.prototype={
i(d){return"IfNode("+this.a.i(0)+", "+this.b.i(0)+", else: "+C.j(this.c)+")"}}
B.dt.prototype={
i(d){return"WhileNode("+this.a.i(0)+", "+this.b.i(0)+")"}}
B.cJ.prototype={
i(d){var w=this
return"ForNode(init: "+C.j(w.a)+", cond: "+C.j(w.b)+", inc: "+C.j(w.c)+", body: "+w.d.i(0)+")"}}
B.bB.prototype={
i(d){return"FunctionDeclNode("+this.a+"("+C.j(this.b)+"), "+this.c.i(0)+")"}}
B.cw.prototype={
i(d){return"ClassDeclNode("+this.a+" extends "+C.j(this.b)+", methods: "+C.j(this.c)+")"}}
B.dd.prototype={
i(d){return"ReturnNode("+C.j(this.a)+")"},
gX(){return this.a}}
B.cI.prototype={
i(d){return"ExpressionStmtNode("+this.a.i(0)+")"}}
B.bf.prototype={
a0(d){var w=this.a
if(w.R(d))return w.p(0,d)
w=this.b
if(w!=null)return w.a0(d)
throw C.c(B.L("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u17a2\u1790\u17c1\u179a \u17ac\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '"+d+"' / Undefined variable or function '"+d+"'"))},
cj(d,e){var w=this.a
if(w.R(d)){w.k(0,d,e)
return}w=this.b
if(w!=null){w.cj(d,e)
return}throw C.c(B.L("\u17a2\u1790\u17c1\u179a\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1794\u17b6\u1793\u1794\u17d2\u179a\u1780\u17b6\u179f '"+d+"' / Cannot assign to undeclared variable '"+d+"'"))}}
B.aj.prototype={
$1(d){return this.b.$1(x.j.a(d))},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1794\u1784\u17d2\u1780\u17be\u178f\u179f\u17d2\u179a\u17c1\u1785/BuiltinFunction "+this.a+">"}}
B.bk.prototype={
cl(d){var w=this,v=C.A(x.N,x.z)
v.k(0,"\u1793\u17c1\u17c7",d)
v.k(0,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",d)
return new B.bk(w.a,w.b,w.c,new B.bf(v,w.d))},
$2(d,e){var w,v,u,t,s,r,q,p,o=this
x.j.a(e)
u=J.aU(e)
t=u.gl(e)
s=o.b
r=s.length
if(t!==r){t=o.a
throw C.c(B.L("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 '"+t+"' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1785\u17c6\u1793\u17bd\u1793 "+r+" \u1794\u17c9\u17bb\u1793\u17d2\u178f\u17c2\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793 "+u.gl(e)+" / Method '"+t+"' expected "+s.length+" arguments, got "+u.gl(e)))}w=new B.bf(C.A(x.N,x.z),o.d)
for(q=0;q<s.length;++q){t=s[q]
r=u.p(e,q)
w.a.k(0,t,r)}try{d.cr(o.c.a,w)}catch(p){u=C.a_(p)
if(u instanceof B.eL){v=u
return v.a}else throw p}return null},
i(d){return"<\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd/\u179c\u17b7\u1792\u17b8 "+this.a+">"}}
B.bj.prototype={
bB(d){var w=this.c
if(w.R(d))return w.p(0,d)
w=this.b
if(w!=null)return w.bB(d)
return null},
cw(d,e){var w,v=new B.bl(this,C.A(x.N,x.z)),u=this.bB("\u1794\u1784\u17d2\u1780\u17be\u178f")
if(u!=null)u.cl(v).$2(d,e)
else if(e.length!==0){w=this.a
throw C.c(B.L("\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+w+"' \u1782\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1794\u1784\u17d2\u1780\u17be\u178f (Constructor) / Class '"+w+"' has no constructor taking arguments"))}return v},
i(d){return"<\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a+">"}}
B.bl.prototype={
a0(d){var w,v=this.b
if(v.R(d))return v.p(0,d)
v=this.a
w=v.bB(d)
if(w!=null)return w.cl(this)
throw C.c(B.L("\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a '"+d+"' \u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+v.a+"' / Undefined property or method '"+d+"'"))},
i(d){return"<\u179c\u178f\u17d2\u1790\u17bb\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb "+this.a.a+">"}}
B.cS.prototype={
bC(){var w,v=this.b
if(v!=null){w=" [\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb/Line "+C.j(v)
v=this.c
w=(v!=null?w+(", \u1787\u17bd\u179a/Col "+C.j(v)):w)+"]"}else w=""
return"\u1780\u17c6\u17a0\u17bb\u179f/Error"+w+": "+this.a},
co(){var w,v=this.b
if(v==null)v=1
w=this.c
if(w==null)w=1
return"<source>:"+v+":"+w+": error: "+this.a},
i(d){return this.bC()}}
B.hI.prototype={}
B.hO.prototype={}
B.eO.prototype={}
B.eL.prototype={}
B.hx.prototype={
eu(d){var w,v,u,t,s
x.t.a(d)
for(w=d.length,v=null,u=0;u<d.length;d.length===w||(0,C.aq)(d),++u){t=d[u]
s=this.b
s===$&&C.ae()
v=this.B(t,s)}return v},
B(d,e){var w,v,u,t=this
if(d instanceof B.d6)return d.a
if(d instanceof B.bH)return d.a
if(d instanceof B.bS)return d.a
if(d instanceof B.d5)return null
if(d instanceof B.cq)return t.dP(d,e)
if(d instanceof B.d7)return t.e0(d,e)
if(d instanceof B.bg)return e.a0(d.a)
if(d instanceof B.dm)return t.e3(d,e)
if(d instanceof B.dn)return t.e4(d,e)
if(d instanceof B.aN)return t.dR(d,e)
if(d instanceof B.cr)return t.dQ(d,e)
if(d instanceof B.c2)return t.dY(d,e)
if(d instanceof B.cY)return t.dZ(d,e)
if(d instanceof B.bZ)return t.dW(d,e)
if(d instanceof B.cL)return t.dX(d,e)
if(d instanceof B.cK)return t.dU(d,e)
if(d instanceof B.d3)return t.e_(d,e)
if(d instanceof B.dq){w=d.b
v=w!=null?t.B(w,e):null
e.a.k(0,d.a,v)
return v}if(d instanceof B.d9)return t.e1(d,e)
if(d instanceof B.cs)return t.cr(d.a,new B.bf(C.A(x.N,x.z),e))
if(d instanceof B.bY)return t.dV(d,e)
if(d instanceof B.dt)return t.e5(d,e)
if(d instanceof B.cJ)return t.dT(d,e)
if(d instanceof B.bB){w=d.a
u=new B.bk(w,d.b,d.c,e)
e.a.k(0,w,u)
return u}if(d instanceof B.cw)return t.dS(d,e)
if(d instanceof B.dd)return t.e2(d,e)
if(d instanceof B.cI)return t.B(d.a,e)
throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u17a2\u1793\u17bb\u179c\u178f\u17d2\u178f\u1790\u17d2\u1793\u17b6\u17c6\u1784 AST \u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Unsupported AST node type: "+C.bs(d).i(0)))},
cr(d,e){var w,v,u,t,s,r=this
x.t.a(d)
t=r.b
t===$&&C.ae()
w=t
r.b=e
try{v=null
for(t=d.length,s=0;s<d.length;d.length===t||(0,C.aq)(d),++s){u=d[s]
v=r.B(u,e)}t=v
return t}finally{r.b=x.A.a(w)}},
af(d){var w
if(d!=null){w=J.bq(d)
w=w.U(d,!1)||w.U(d,0)||w.U(d,"")}else w=!0
if(w)return!1
return!0},
dP(d,e){var w=d.a,v=C.ab(w),u=v.h("aa<1,@>")
w=C.aG(new C.aa(w,v.h("@(1)").a(new B.hy(this,e)),u),u.h("a9.E"))
return w},
e0(d,e){var w,v,u,t,s=C.A(x.N,x.z)
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.aq)(w),++u){t=w[u]
s.k(0,t.a,this.B(t.b,e))}return s},
e3(d,e){var w,v
try{w=e.a0("\u1793\u17c1\u17c7")
return w}catch(v){try{w=e.a0("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6")
return w}catch(v){w=B.L("\u1796\u17b6\u1780\u17d2\u1799 '\u1793\u17c1\u17c7' \u17ac '\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1794\u17b6\u1793\u178f\u17c2\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1793\u17c1\u17c7'/'\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6' can only be used inside class methods")
throw C.c(w)}}},
e4(d,e){var w=this.B(d.b,e),v=d.a
if(v==="!"||v==="\u1798\u17b7\u1793")return!this.af(w)
if(v==="-"){if(typeof w=="number")return-w
throw C.c(B.L("\u179f\u1789\u17d2\u1789\u17b6\u178a\u1780 '-' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '-' requires a numeric operand"))}throw C.c(B.L("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a unary \u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+v+"' / Unknown unary operator '"+v+"'"))},
dR(d,e){var w,v,u,t=this,s="' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u179b\u17c1\u1781 / '",r="' requires numeric operands",q=t.B(d.a,e),p=d.b
if(p==="\u1793\u17b7\u1784"||p==="&&"){if(!t.af(q))return q
return t.B(d.c,e)}if(p==="\u17ac"||p==="||"){if(t.af(q))return q
return t.B(d.c,e)}w=t.B(d.c,e)
if(p==="==")return J.ar(q,w)
if(p==="!=")return!J.ar(q,w)
if(p==="+"){if(typeof q=="string"||typeof w=="string")return B.fI(q)+B.fI(w)
if(typeof q=="number"&&typeof w=="number")return q+w
throw C.c(B.L("\u1780\u17b6\u179a\u1794\u17bc\u1780 '+' \u17a2\u17b6\u1785\u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u179b\u17be\u179b\u17c1\u1781 \u17ac\u17a2\u1780\u17d2\u179f\u179a / '+' requires numbers or strings"))}v=p==="-"
if(v||p==="*"||p==="/"||p==="%"){if(typeof q!="number"||typeof w!="number")throw C.c(B.L("\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a '"+p+s+p+r))
if(v)return q-w
if(p==="*")return q*w
if(p==="/"){if(w===0)throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17c2\u1780\u1793\u17b9\u1784\u179f\u17bc\u1793\u17d2\u1799\u1794\u17b6\u1793\u1791\u17c1 / Division by zero"))
u=q/w
return u===D.h.bI(u)?D.h.aI(u):u}if(p==="%")return D.h.cO(q,w)}v=p==="<"
if(v||p===">"||p==="<="||p===">="){if(typeof q!="number"||typeof w!="number")throw C.c(B.L("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794 '"+p+s+p+r))
if(v)return q<w
if(p===">")return q>w
if(p==="<=")return q<=w
if(p===">=")return q>=w}throw C.c(B.L("\u179f\u1789\u17d2\u1789\u17b6\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+p+"' / Unknown binary operator '"+p+"'"))},
dQ(d,e){var w,v,u,t=this.B(d.b,e)
try{e.cj(d.a,t)}catch(v){if(C.a_(v) instanceof B.eO){try{w=e.a0("\u1793\u17c1\u17c7")
if(w instanceof B.bl){w.b.k(0,d.a,t)
return t}}catch(u){}throw v}else throw v}return t},
dY(d,e){var w=this.B(d.a,e)
if(w instanceof B.bl)return w.a0(d.b)
if(x.f.b(w))return w.p(0,d.b)
throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1785\u17bc\u179b\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member access on invalid target"))},
dZ(d,e){var w=this.B(d.a,e),v=this.B(d.c,e)
if(w instanceof B.bl){w.b.k(0,d.b,v)
return v}if(x.f.b(w)){w.k(0,d.b,v)
return v}throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u179f\u1798\u17b6\u1787\u17b7\u1780 '"+d.b+"' \u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Member assignment on invalid target"))},
dW(d,e){var w,v,u=this.B(d.a,e),t=this.B(d.b,e)
if(x.j.b(u)){if(typeof t!="number")throw C.c(B.L(y.m))
w=D.h.aI(t)
if(w<0||w>=J.aB(u)){v=""+w
throw C.c(B.L("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}return J.kB(u,w)}if(typeof u=="string"){if(typeof t!="number")throw C.c(B.L("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / String index must be a number"))
w=D.h.aI(t)
if(w<0||w>=u.length){v=""+w
throw C.c(B.L("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u17a2\u1780\u17d2\u179f\u179a\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / String index out of bounds ("+v+")"))}if(!(w>=0&&w<u.length))return C.o(u,w)
return u[w]}if(x.f.b(u))return u.p(0,J.M(t))
throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1791\u17b6\u1789\u1799\u1780\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable"))},
dX(d,e){var w,v,u=this.B(d.a,e),t=this.B(d.b,e),s=this.B(d.c,e)
if(x.j.b(u)){if(typeof t!="number")throw C.c(B.L(y.m))
w=D.h.aI(t)
if(w<0||w>=J.aB(u)){v=""+w
throw C.c(B.L("\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u179f\u1796\u17d2\u179a\u17c6\u178a\u17c2\u1793 ("+v+") / Index out of bounds ("+v+")"))}J.fV(u,w,s)
return s}if(x.f.b(u)){u.k(0,J.M(t),s)
return s}throw C.c(B.L("\u1798\u17b7\u1793\u17a2\u17b6\u1785\u1780\u17c6\u178e\u178f\u17cb\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u179b\u17be\u1794\u17d2\u179a\u1797\u17c1\u1791\u1793\u17c1\u17c7\u1794\u17b6\u1793\u1791\u17c1 / Target is not indexable for assignment"))},
dU(d,e){var w=this,v=w.B(d.a,e),u=d.b,t=C.ab(u),s=t.h("aa<1,@>"),r=C.aG(new C.aa(u,t.h("@(1)").a(new B.hz(w,e)),s),s.h("a9.E"))
if(v instanceof B.bj)return v.cw(w,r)
if(v instanceof B.bk)return v.$2(w,r)
if(v instanceof B.aj)return v.b.$1(r)
throw C.c(B.L("\u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u1790\u17d2\u1793\u17b6\u1780\u17cb / Target is not callable"))},
e_(d,e){var w,v,u,t=d.a,s=e.a0(t)
if(!(s instanceof B.bj))throw C.c(B.L("'"+t+"' \u1798\u17b7\u1793\u1798\u17c2\u1793\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb (Class) \u1791\u17c1 / '"+t+"' is not a class"))
t=d.b
w=C.ab(t)
v=w.h("aa<1,@>")
u=C.aG(new C.aa(t,w.h("@(1)").a(new B.hA(this,e)),v),v.h("a9.E"))
return s.cw(this,u)},
dS(d,e){var w,v,u,t,s,r,q,p,o=d.b
if(o!=null){w=e.a0(o)
if(!(w instanceof B.bj))throw C.c(B.L("\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 '"+o+"' \u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Parent class '"+o+"' is not a class"))
v=w}else v=null
u=C.A(x.N,x.n)
for(o=d.c,t=o.length,s=0;s<o.length;o.length===t||(0,C.aq)(o),++s){r=o[s]
q=r.a
u.k(0,q,new B.bk(q,r.b,r.c,e))}o=d.a
p=new B.bj(o,v,u)
e.a.k(0,o,p)
return p},
e1(d,e){var w=d.a,v=C.ab(w),u=v.h("aa<1,@>"),t=C.aG(new C.aa(w,v.h("@(1)").a(new B.hB(this,e)),u),u.h("a9.E"))
return x.X.a(e.a0("\u1794\u1784\u17d2\u17a0\u17b6\u1789")).b.$1(t)},
dV(d,e){var w,v=this
if(v.af(v.B(d.a,e)))return v.B(d.b,e)
else{w=d.c
if(w!=null)return v.B(w,e)}return null},
e5(d,e){var w,v,u
for(w=d.a,v=d.b,u=null;this.af(this.B(w,e));)u=this.B(v,e)
return u},
dT(d,e){var w,v,u,t,s,r=this,q=new B.bf(C.A(x.N,x.z),e),p=d.a
if(p!=null)r.B(p,q)
for(p=d.c,w=p!=null,v=d.d,u=d.b,t=u!=null,s=null;;){if(t)if(!r.af(r.B(u,q)))break
s=r.B(v,q)
if(w)r.B(p,q)}return s},
e2(d,e){var w=d.a
throw C.c(new B.eL(w!=null?this.B(w,e):null))}}
B.hH.prototype={
gl(d){var w=this.e
w===$&&C.ae()
return w},
Z(d){var w=this.b+d,v=this.e
v===$&&C.ae()
if(w>=v)return""
v=this.a
if(!(w<v.length))return C.o(v,w)
return v[w]},
P(){return this.Z(0)},
F(){var w=this,v=w.P();++w.b
if(v==="\n"){++w.c
w.d=1}else ++w.d
return v},
aQ(d){var w,v=d.length
if(v===0)return!1
if(0>=v)return C.o(d,0)
w=d.charCodeAt(0)
return w>=48&&w<=57||A.aa.R(d)},
c7(d){var w,v=d.length
if(v===0)return!1
if(d==="_")return!0
if(0>=v)return C.o(d,0)
w=d.charCodeAt(0)
if(!(w>=65&&w<=90))v=w>=97&&w<=122
else v=!0
if(v)return!0
if(!(w>=6016&&w<=6143))v=w>=6624&&w<=6655
else v=!0
return v},
cH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=C.b([],x.Q),a1=x.N,a2=x.d,a3=x.s
for(;;){w=d.b
v=d.e
v===$&&C.ae()
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
m=A.aa.p(0,n)
v+=m==null?n:m}l=v.charCodeAt(0)==0?v:v
D.a.j(a0,new B.ah(A.al,q?B.oI(l):B.oW(l),t,s))
break A}if(u==='"'||u==="'"||u==="\u201c"||u==="\u201d"||u==="\u2018"||u==="\u2019"){k=d.F()
j=k==="\u201c"||k==="\u201d"||k==="\u2018"||k==="\u2019"?A.iY:C.b([k],a3)
i=""
for(;;){if(!(d.P().length!==0&&!D.a.K(j,d.P())))break
p=d.F()
if(p==="\\"){h=d.F()
if(h==="n")i+="\n"
else if(h==="t")i+="\t"
else if(h==="\\")i+="\\"
else{D.a.K(j,h)
i+=h}}else i+=p}if(d.P().length===0)throw C.c(B.kS("String \u1798\u17b7\u1793\u1794\u17b6\u1793\u1794\u17b7\u1791 / Unclosed string literal",t,s))
d.F()
D.a.j(a0,new B.ah(A.am,i,t,s))
break A}if(u==="="&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ah(A.ay,"==",t,s))
break A}if(u==="!"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ah(A.az,"!=",t,s))
break A}if(u==="<"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ah(A.aC,"<=",t,s))
break A}if(u===">"&&d.Z(1)==="="){d.F()
d.F()
D.a.j(a0,new B.ah(A.aD,">=",t,s))
break A}if(u==="&"&&d.Z(1)==="&"){d.F()
d.F()
D.a.j(a0,new B.ah(A.H,"&&",t,s))
break A}if(u==="|"&&d.Z(1)==="|"){d.F()
d.F()
D.a.j(a0,new B.ah(A.I,"||",t,s))
break A}g=C.H(["+",A.au,"-",A.L,"*",A.av,"/",A.aw,"%",A.ax,"=",A.M,"<",A.aA,">",A.aB,"!",A.J,".",A.N,"\uff0e",A.N,"(",A.j,")",A.d,"{",A.v,"}",A.o,"[",A.P,"]",A.w,",",A.n,";",A.k,"\u17d6",A.E,":",A.E,"\u17d4",A.k],a1,a2)
if(g.R(u)){d.F()
w=g.p(0,u)
w.toString
D.a.j(a0,new B.ah(w,u,t,s))
break A}if(d.c7(u)){f=""
for(;;){if(d.P().length!==0){w=d.P()
w=d.c7(w)||d.aQ(w)}else w=!1
if(!w)break
f+=d.F()}if(A.ad.R(f)){w=A.ad.p(0,f)
w.toString
D.a.j(a0,new B.ah(w,f,t,s))}else D.a.j(a0,new B.ah(A.i,f,t,s))
break A}e=d.F()
if(0>=e.length)return C.o(e,0)
throw C.c(B.kS("\u17a2\u1780\u17d2\u179f\u179a/\u179f\u1789\u17d2\u1789\u17b6\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb '"+e+"' (U+"+D.b.cF(D.f.eQ(e.charCodeAt(0),16).toUpperCase(),4,"0")+") / Unexpected character '"+e+"'",t,s))}}D.a.j(a0,new B.ah(A.q,null,d.c,d.d))
return a0}}
B.eF.prototype={
m(){var w=this.b,v=this.a
if(w>=v.length)return D.a.gcD(v)
return v[w]},
v(d){if(D.a.K(x.b.a(d),this.m().a)){this.a5()
return!0}return!1},
a5(){var w,v=this.a,u=this.b,t=v.length
if(!(u<t))return C.o(v,u)
w=v[u]
if(u<t-1)this.b=u+1
return w},
t(d,e){var w,v
if(this.m().a===d)return this.a5()
w=this.m()
v=w.c
throw C.c(B.eG(e+" (\u1794\u17b6\u1793\u1787\u17bd\u1794/Found '"+C.j(w.b)+"' \u1793\u17c5\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb "+v+")",v,w.d))},
cG(){var w,v=C.b([],x.I)
while(this.m().a!==A.q){w=this.cd()
if(w!=null)D.a.j(v,w)}return v},
cd(){var w,v,u,t,s,r,q,p,o=this,n=null,m="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'"
for(w=x.B;o.v(C.b([A.k],w)););if(o.m().a===A.q)return n
if(o.m().a===A.D)return o.ci()
if(o.m().a===A.O)return o.dt()
if(o.m().a===A.Q){o.t(A.Q,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u17be' / Expected '\u1794\u17be'")
v=o.v(C.b([A.j],w))
u=o.G()
if(v)o.t(A.d,m)
t=o.a6()
if(o.m().a===A.F)s=o.c1()
else s=o.v(C.b([A.R],w))?o.a6():n
return new B.bY(u,t,s)}if(o.m().a===A.S){o.t(A.S,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1781\u178e\u17c8' / Expected '\u1781\u178e\u17c8'")
v=o.v(C.b([A.j],w))
u=o.G()
if(v)o.t(A.d,m)
return new B.dt(u,o.a6())}if(o.m().a===A.T){o.t(A.T,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb' / Expected '\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb'")
o.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected '(' in for loop")
if(o.m().a!==A.k)r=o.m().a===A.D?o.ci():o.c3()
else{o.a5()
r=n}u=o.m().a!==A.k?o.G():n
o.t(A.k,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ';' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ';'")
q=o.m().a!==A.d?o.G():n
o.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1780\u17d2\u1793\u17bb\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb / Expected ')'")
return new B.cJ(r,u,q,o.a6())}if(o.m().a===A.B||o.m().a===A.C)return o.dg()
if(o.m().a===A.K)return o.d6()
if(o.m().a===A.G){o.t(A.G,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17d2\u179a\u17a1\u1794\u17cb' / Expected '\u178f\u17d2\u179a\u17a1\u1794\u17cb'")
p=o.m().a!==A.k&&o.m().a!==A.o&&o.m().a!==A.q?o.G():n
o.v(C.b([A.k],w))
return new B.dd(p)}if(o.m().a===A.v)return o.a6()
return o.c3()},
ci(){var w,v,u,t=this
t.t(A.D,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u178f\u17b6\u17c6\u1784' / Expected '\u178f\u17b6\u17c6\u1784'")
w=t.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1790\u17c1\u179a / Expected variable name")
v=x.B
u=t.v(C.b([A.M],v))?t.G():null
t.v(C.b([A.k],v))
return new B.dq(J.M(w.b),u)},
dt(){var w,v,u=this
u.t(A.O,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1794\u1784\u17d2\u17a0\u17b6\u1789' / Expected '\u1794\u1784\u17d2\u17a0\u17b6\u1789'")
w=C.b([],x.I)
v=x.B
if(u.v(C.b([A.j],v))){if(u.m().a!==A.d){D.a.j(w,u.G())
while(u.v(C.b([A.n],v)))D.a.j(w,u.G())}u.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791 / Expected ')'")}else{D.a.j(w,u.G())
while(u.v(C.b([A.n],v)))D.a.j(w,u.G())}u.v(C.b([A.k],v))
return new B.d9(w)},
c1(){var w,v,u,t,s,r=this
r.t(A.F,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17ac\u1794\u17be' / Expected '\u17ac\u1794\u17be'")
w=x.B
v=r.v(C.b([A.j],w))
u=r.G()
if(v)r.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' \u1794\u17b7\u1791\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c / Expected ')'")
t=r.a6()
if(r.m().a===A.F)s=r.c1()
else s=r.v(C.b([A.R],w))?r.a6():null
return new B.bY(u,t,s)},
dg(){var w,v,u,t,s=this,r=y.c,q=x.B
if(!(s.v(C.b([A.B],q))||s.v(C.b([A.C],q)))){w=s.m()
throw C.c(B.eG("\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' \u17ac '\u179c\u17b7\u1792\u17b8' / Expected '\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd' or '\u179c\u17b7\u1792\u17b8'",w.c,w.d))}v=s.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd / Expected function name")
s.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.b([],x.s)
if(s.m().a!==A.d){D.a.j(u,J.M(s.t(A.i,r).b))
while(s.v(C.b([A.n],q)))D.a.j(u,J.M(s.t(A.i,r).b))}s.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
t=s.a6()
return new B.bB(J.M(v.b),u,t)},
d6(){var w,v,u,t,s,r,q,p,o,n=this,m=y.c
n.t(A.K,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '\u1790\u17d2\u1793\u17b6\u1780\u17cb' / Expected '\u1790\u17d2\u1793\u17b6\u1780\u17cb'")
w=n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected class name")
v=x.B
u=n.v(C.b([A.at],v))?J.M(n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 / Expected parent class name").b):null
n.t(A.v,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' \u178a\u17be\u1798\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '{' for class body")
t=C.b([],x._)
s=x.s
for(;;){if(!(n.m().a!==A.o&&n.m().a!==A.q))break
if(n.v(C.b([A.C,A.B],v)))r=n.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179c\u17b7\u1792\u17b8 / Expected method name")
else if(n.m().a===A.i)r=n.a5()
else{q=n.m()
throw C.c(B.eG("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u1780\u17d2\u1793\u17bb\u1784\u1790\u17d2\u1793\u17b6\u1780\u17cb '"+C.j(q.b)+"' / Invalid method definition in class",q.c,q.d))}n.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
p=C.b([],s)
if(n.m().a!==A.d){D.a.j(p,J.M(n.t(A.i,m).b))
while(n.v(C.b([A.n],v)))D.a.j(p,J.M(n.t(A.i,m).b))}n.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
o=n.a6()
D.a.j(t,new B.bB(J.M(r.b),p,o))}n.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1790\u17d2\u1793\u17b6\u1780\u17cb / Expected '}' for class body")
return new B.cw(J.M(w.b),u,t)},
a6(){var w,v,u=this
u.t(A.v,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '{' / Expected '{'")
w=C.b([],x.I)
for(;;){if(!(u.m().a!==A.o&&u.m().a!==A.q))break
v=u.cd()
if(v!=null)D.a.j(w,v)}u.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' \u1794\u17b7\u1791\u1794\u17d2\u179b\u17bb\u1780 / Expected '}'")
return new B.cs(w)},
c3(){var w=this.G()
this.v(C.b([A.k],x.B))
return new B.cI(w)},
G(){var w,v,u=this,t=u.dm()
if(u.v(C.b([A.M],x.B))){w=u.G()
if(t instanceof B.bg)return new B.cr(t.a,w)
else if(t instanceof B.c2)return new B.cY(t.a,t.b,w)
else if(t instanceof B.bZ)return new B.cL(t.a,t.b,w)
v=u.m()
throw C.c(B.eG("\u1780\u17b6\u179a\u1780\u17c6\u178e\u178f\u17cb\u178f\u1798\u17d2\u179b\u17c3\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c / Invalid assignment target",v.c,v.d))}return t},
dm(){var w,v=this.c9()
for(w=x.B;this.v(C.b([A.I],w));)v=new B.aN(v,"\u17ac",this.c9())
return v},
c9(){var w,v=this.c2()
for(w=x.B;this.v(C.b([A.H],w));)v=new B.aN(v,"\u1793\u17b7\u1784",this.c2())
return v},
c2(){var w=this,v=w.c_()
for(;;){if(!(w.m().a===A.ay||w.m().a===A.az))break
v=new B.aN(v,J.M(w.a5().b),w.c_())}return v},
c_(){var w=this,v=w.ce()
for(;;){if(!(w.m().a===A.aA||w.m().a===A.aB||w.m().a===A.aC||w.m().a===A.aD))break
v=new B.aN(v,J.M(w.a5().b),w.ce())}return v},
ce(){var w=this,v=w.c4()
for(;;){if(!(w.m().a===A.au||w.m().a===A.L))break
v=new B.aN(v,J.M(w.a5().b),w.c4())}return v},
c4(){var w=this,v=w.br()
for(;;){if(!(w.m().a===A.av||w.m().a===A.aw||w.m().a===A.ax))break
v=new B.aN(v,J.M(w.a5().b),w.br())}return v},
br(){var w,v,u=this
if(u.m().a===A.J||u.m().a===A.L){w=u.a5()
v=u.br()
return new B.dn(J.M(w.b),v)}return u.d4()},
d4(){var w,v,u,t,s=this,r=s.bp()
for(w=x.B,v=x.I;;)if(s.v(C.b([A.j],w))){u=C.b([],v)
if(s.m().a!==A.d){D.a.j(u,s.G())
while(s.v(C.b([A.n],w)))D.a.j(u,s.G())}s.t(A.d,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'")
r=new B.cK(r,u)}else if(s.v(C.b([A.N],w)))r=new B.c2(r,J.M(s.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17b6\u1787\u17b7\u1780 / Expected member name after '.'").b))
else if(s.v(C.b([A.P],w))){t=s.G()
s.t(A.w,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
r=new B.bZ(r,t)}else break
return r},
bp(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ')' / Expected ')'",j="\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ':' / Expected ':'",i=x.B
if(l.v(C.b([A.al],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.o(i,w)
return new B.d6(C.ke(i[w].b))}if(l.v(C.b([A.am],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.o(i,w)
return new B.bH(J.M(i[w].b))}if(l.v(C.b([A.an],i)))return A.b_
if(l.v(C.b([A.ao],i)))return A.aZ
if(l.v(C.b([A.ap],i)))return A.b7
if(l.v(C.b([A.aq,A.ar],i)))return A.b9
if(l.v(C.b([A.i],i))){i=l.a
w=l.b-1
if(!(w>=0&&w<i.length))return C.o(i,w)
return new B.bg(J.M(i[w].b))}if(l.v(C.b([A.as],i))){v=l.t(A.i,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1796\u17b8 '\u1790\u17d2\u1798\u17b8' / Expected class name after '\u1790\u17d2\u1798\u17b8'")
l.t(A.j,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '(' / Expected '('")
u=C.b([],x.I)
if(l.m().a!==A.d){D.a.j(u,l.G())
while(l.v(C.b([A.n],i)))D.a.j(u,l.G())}l.t(A.d,k)
return new B.d3(J.M(v.b),u)}if(l.v(C.b([A.j],i))){t=l.G()
l.t(A.d,k)
return t}if(l.v(C.b([A.P],i))){s=C.b([],x.I)
if(l.m().a!==A.w){D.a.j(s,l.G())
while(l.v(C.b([A.n],i)))D.a.j(s,l.G())}l.t(A.w,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 ']' / Expected ']'")
return new B.cq(s)}if(l.v(C.b([A.v],i))){r=C.b([],x.l)
if(l.m().a!==A.w&&l.m().a!==A.o){q=l.bp()
if(q instanceof B.bH)p=q.a
else p=q instanceof B.bg?q.a:q.i(0)
l.t(A.E,j)
w=x.J
D.a.j(r,new C.N(p,l.G(),w))
while(l.v(C.b([A.n],i))){o=l.bp()
if(o instanceof B.bH)n=o.a
else n=o instanceof B.bg?o.a:o.i(0)
l.t(A.E,j)
D.a.j(r,new C.N(n,l.G(),w))}}l.t(A.o,"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793 '}' / Expected '}'")
return new B.d7(r)}m=l.m()
throw C.c(B.eG("\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 / Syntax error near '"+C.j(m.b)+"'",m.c,m.d))}}
B.cH.prototype={}
B.cu.prototype={}
B.p.prototype={
a7(){return"TokenType."+this.b}}
B.ah.prototype={
i(d){var w=this
return"Token("+w.a.i(0)+", "+C.j(w.b)+", "+w.c+":"+w.d+")"}}
var z=a.updateTypes(["@(y)","~()","~(h)","aT(U)","e()","S<h,~(x)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<w?>"])
B.hQ.prototype={
$0(){return D.h.eo(1000*this.a.now())},
$S:35}
B.h4.prototype={
$0(){var w=this.a
w.I(new B.h3(w))},
$S:0}
B.h3.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
B.fZ.prototype={
$0(){var w=this.a,v=!w.r
w.r=v
B.lW(v?"dark":"light")},
$S:0}
B.fY.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
B.fX.prototype={
$0(){var w=this.a
w.f=this.b
w.d=!1},
$S:0}
B.h1.prototype={
$0(){var w=this.a
w.I(new B.h0(w))},
$S:0}
B.h0.prototype={
$0(){this.a.e=!0},
$S:0}
B.h2.prototype={
$0(){var w=this.a
w.I(new B.h_(w))},
$S:0}
B.h_.prototype={
$0(){this.a.e=!1},
$S:0}
B.ib.prototype={
$0(){this.a.d=!0},
$S:0}
B.ic.prototype={
$0(){var w=this.a
if(w.c!=null)w.I(new B.ia(w))},
$S:0}
B.ia.prototype={
$0(){this.a.d=!1},
$S:0}
B.id.prototype={
$0(){this.a.e=!0},
$S:0}
B.ie.prototype={
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
B.ig.prototype={
$0(){var w=this.a
w.e=!1
w.x=w.f=!0
w.r="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.w=0},
$S:0}
B.ih.prototype={
$1(d){C.n(d)
return this.a.di()},
$S:1}
B.ii.prototype={
$1(d){C.n(d)
return this.a.dj()},
$S:1}
B.ht.prototype={
$1(d){C.n(d)
return this.a.c.$0()},
$S:1}
B.hu.prototype={
$1(d){C.n(d)
return this.a.d.$0()},
$S:1}
B.hv.prototype={
$1(d){C.n(d)
return this.a.e.$0()},
$S:1}
B.iE.prototype={
$0(){var w=this.a,v=this.b
w.d=v
v=A.jm.p(0,v)
w.e=v==null?"":v
w.f='\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1795\u17d2\u1791\u17bb\u1780\u17d4 \u1785\u17bb\u1785 "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4'
w.w=!1
w.r="\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"},
$S:0}
B.iD.prototype={
$0(){var w=this.a
w.e=w.e+this.b},
$S:0}
B.iF.prototype={
$0(){this.a.r="\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a..."},
$S:0}
B.iG.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r=""+D.f.ag(v.w.a,1000)+"ms"
if(u){v=v.b
w.f=v.length===0?"(\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1787\u17c4\u1782\u1787\u17d0\u1799\u178a\u17c4\u1799\u1782\u17d2\u1798\u17b6\u1793 stdout)":v}else{v=v.d
w.f=v==null?"\u1780\u17c6\u17a0\u17bb\u179f\u1798\u17b7\u1793\u179f\u17d2\u1782\u17b6\u179b\u17cb (Execution Error)":v}},
$S:0}
B.iH.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.iA.prototype={
$0(){var w=this.a,v=this.b,u=v.a==="success"
w.w=!u
w.r="Syntax Check"
if(u)w.f="\u2713 \u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c\u179b\u17d2\u17a2! (Parsed "+v.b+" tokens cleanly)"
else{v=v.d
w.f="\u2717 \u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u17d6 "+(v==null?"Invalid syntax":v)}},
$S:0}
B.iB.prototype={
$0(){var w=this.a
w.w=!0
w.f="\u1780\u17c6\u17a0\u17bb\u179f\u17d6 "+C.j(this.b)
w.r="\u1780\u17c6\u17a0\u17bb\u179f"},
$S:0}
B.iC.prototype={
$0(){var w=this.a
w.f=""
w.r="\u1794\u17b6\u1793\u179f\u1798\u17d2\u17a2\u17b6\u178f"
w.w=!1},
$S:0}
B.iJ.prototype={
$1(d){var w=d.gaa()
return this.a.dq(C.j(w==null?null:w.gX()))},
$S:3}
B.iK.prototype={
$1(d){C.n(d)
return this.a.d5()},
$S:1}
B.iL.prototype={
$1(d){C.n(d)
return this.a.d7()},
$S:1}
B.iM.prototype={
$1(d){C.n(d)
return this.a.dA()},
$S:1}
B.iN.prototype={
$1(d){var w=d.gaa()
w=w==null?null:w.gX()
this.a.e=C.j(w==null?"":w)},
$S:3}
B.iI.prototype={
$1(d){C.n(d)
return this.a.dl(this.b)},
$S:1}
B.iQ.prototype={
$1(d){var w
x.R.a(d)
w=this.a
return D.b.K(d.b.toLowerCase(),w)||D.b.K(d.c.toLowerCase(),w)||D.b.K(d.d.toLowerCase(),w)||D.b.K(d.e.toLowerCase(),w)},
$S:z+3}
B.iS.prototype={
$1(d){if(J.ar(d.gaa(),d.geX()))this.a.a.b0()},
$S:3}
B.iT.prototype={
$1(d){var w=this.a
w.I(new B.iR(w,d))},
$S:3}
B.iR.prototype={
$0(){var w=this.b.gaa()
w=w==null?null:w.gX()
this.a.d=C.j(w==null?"":w)},
$S:0}
B.iU.prototype={
$1(d){if(J.ar(d.gcC(),"Escape"))this.a.a.b0()},
$S:3}
B.iV.prototype={
$1(d){C.n(d)
return this.a.a.b0()},
$S:1}
B.iW.prototype={
$1(d){var w
C.n(d)
w=this.a
w.a.eB(this.b.a)
w.a.b0()},
$S:1}
B.hU.prototype={
$1(d){C.n(d)
return this.a.e.$1(this.b.a)},
$S:1}
B.hZ.prototype={
$1(d){C.n(d)
return this.a.d.$1(this.b.a)},
$S:1}
B.jN.prototype={
$1(d){C.n(d)
if((C.bp(d.metaKey)||C.bp(d.ctrlKey))&&C.a2(d.key)==="k"){d.preventDefault()
this.a.$0()}},
$S:36}
B.jx.prototype={
$1(d){return B.fI(d)},
$S:10}
B.jy.prototype={
$1(d){x.Y.a(d)
return'"'+C.j(d.a)+'": '+B.fI(d.b)},
$S:38}
B.jr.prototype={
$1(d){this.a.$1(J.kE(x.j.a(d),new B.js(),x.N).W(0," ")+"\n")
return null},
$S:5}
B.js.prototype={
$1(d){return B.fI(d)},
$S:10}
B.jq.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aU(d)
if(w.gM(d))throw C.c(B.L("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1798\u17bd\u1799"))
v=w.p(d,0)
if(typeof v=="string")return v.length
if(u.b(v))return J.aB(v)
if(x.f.b(v))return v.gl(v)
throw C.c(B.L("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u17d2\u179a\u179c\u17c2\u1784' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u17a2\u1780\u17d2\u179f\u179a \u1794\u1789\u17d2\u1787\u17b8 \u17ac\u179c\u178f\u17d2\u1790\u17bb\u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u17d2\u179a\u179c\u17c2\u1784' requires string, array, or object"))},
$S:5}
B.jt.prototype={
$1(d){var w,v,u=x.j
u.a(d)
w=J.aU(d)
if(w.gM(d))return"\u1791\u1791\u17c1"
v=w.p(d,0)
if(v==null)return"\u1791\u1791\u17c1"
if(C.fC(v))return"\u178f\u1780\u17d2\u1780\u179c\u17b7\u1791\u17d2\u1799\u17b6"
if(typeof v=="number")return"\u179b\u17c1\u1781"
if(typeof v=="string")return"\u17a2\u1780\u17d2\u179f\u179a"
if(u.b(v))return"\u1794\u1789\u17d2\u1787\u17b8"
if(x.f.b(v))return"\u179c\u178f\u17d2\u1790\u17bb"
if(v instanceof B.bl)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a.a+")"
if(v instanceof B.bj)return"\u1790\u17d2\u1793\u17b6\u1780\u17cb("+v.a+")"
return"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd"},
$S:5}
B.jp.prototype={
$1(d){var w,v,u,t=x.j
t.a(d)
w=J.aU(d)
if(w.gl(d)<2)throw C.c(B.L("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u178f\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a \u17e2 \u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a (\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb)"))
v=w.p(d,0)
u=w.p(d,1)
if(t.b(v)){J.co(v,u)
return v}throw C.c(B.L("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd '\u1794\u1793\u17d2\u1790\u17c2\u1798' \u1794\u17d2\u179a\u17be\u1794\u17b6\u1793\u178f\u17c2\u1787\u17b6\u1798\u17bd\u1799\u1794\u1789\u17d2\u1787\u17b8 (Array) \u1794\u17c9\u17bb\u178e\u17d2\u178e\u17c4\u17c7 / '\u1794\u1793\u17d2\u1790\u17c2\u1798' requires array"))},
$S:5}
B.hy.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
B.hz.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
B.hA.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
B.hB.prototype={
$1(d){return this.a.B(x.F.a(d),this.b)},
$S:z+0}
B.jM.prototype={
$1(d){this.a.a+=d},
$S:7};(function aliases(){var w=B.ag.prototype
w.bR=w.aZ})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a.installStaticTearOff
w(B,"oh","n1",4)
var s
v(s=B.cp.prototype,"gdI","dJ",1)
v(s,"gdG","dH",1)
u(s,"gdr","ds",2)
t(B,"fG",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["fF",function(){return B.fF(null,null,null,x.z)},function(d){return B.fF(null,null,null,d)},function(d,e){return B.fF(null,d,null,e)},function(d,e,f){return B.fF(d,null,e,f)}],5,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.cD,C.aQ)
w(B.bV,B.cD)
v(C.cA,[B.hQ,B.h4,B.h3,B.fZ,B.fY,B.fX,B.h1,B.h0,B.h2,B.h_,B.ib,B.ic,B.ia,B.id,B.ie,B.ig,B.iE,B.iD,B.iF,B.iG,B.iH,B.iA,B.iB,B.iC,B.iR])
v(C.w,[B.hW,B.fA,B.dL,B.i0,B.fy,B.ag,B.a1,B.a4,B.U,B.y,B.bf,B.aj,B.bk,B.bj,B.bl,B.cS,B.eL,B.hx,B.hH,B.eF,B.cH,B.cu,B.ah])
v(C.k,[B.u,B.aO,B.aR])
v(B.u,[B.fD,B.fH,B.fK,B.fJ,B.a6,B.b8,B.fM,B.fN,B.a7,B.r,B.bc,B.Y,B.J,B.fR,B.fE,B.e_,B.fL,B.fO,B.fS,B.fT,B.aL,B.dZ,B.ba,B.fQ,B.ck,B.cm,B.cl,B.ap,B.C,B.d,B.O,B.f,B.a3,B.Z,B.ek,B.en,B.eQ,B.eY,B.e4,B.ee,B.el,B.em,B.eK])
v(C.ff,[B.hw,B.eh,B.h7,B.fW,B.i_,B.hn,B.p])
w(B.fn,C.bO)
w(B.fh,C.bF)
v(C.bU,[B.eS,B.eT])
v(B.aR,[B.aV,B.V,B.c5,B.c7])
v(B.ag,[B.cp,B.f8,B.fo,B.fs])
v(C.aW,[B.ih,B.ii,B.ht,B.hu,B.hv,B.iJ,B.iK,B.iL,B.iM,B.iN,B.iI,B.iQ,B.iS,B.iT,B.iU,B.iV,B.iW,B.hU,B.hZ,B.jN,B.jx,B.jy,B.jr,B.js,B.jq,B.jt,B.jp,B.hy,B.hz,B.hA,B.hB,B.jM])
v(B.y,[B.d6,B.bH,B.bS,B.d5,B.cq,B.d7,B.bg,B.dm,B.dn,B.aN,B.cr,B.c2,B.cY,B.bZ,B.cL,B.cK,B.d3,B.dq,B.d9,B.cs,B.bY,B.dt,B.cJ,B.bB,B.cw,B.dd,B.cI])
v(B.cS,[B.hI,B.hO,B.eO])})()
C.lq(b.typeUniverse,JSON.parse('{"cD":{"aQ":["1"],"c8":["1"],"q":["1"],"i":["1"]},"bV":{"cD":["1"],"aQ":["1"],"c8":["1"],"q":["1"],"i":["1"]},"fD":{"u":[],"k":[]},"fH":{"u":[],"k":[]},"fK":{"u":[],"k":[]},"fJ":{"u":[],"k":[]},"a6":{"u":[],"k":[]},"b8":{"u":[],"k":[]},"fM":{"u":[],"k":[]},"fN":{"u":[],"k":[]},"a7":{"u":[],"k":[]},"r":{"u":[],"k":[]},"bc":{"u":[],"k":[]},"Y":{"u":[],"k":[]},"J":{"u":[],"k":[]},"fR":{"u":[],"k":[]},"fE":{"u":[],"k":[]},"e_":{"u":[],"k":[]},"fL":{"u":[],"k":[]},"fO":{"u":[],"k":[]},"fS":{"u":[],"k":[]},"fT":{"u":[],"k":[]},"aL":{"u":[],"k":[]},"dZ":{"u":[],"k":[]},"ba":{"u":[],"k":[]},"fQ":{"u":[],"k":[]},"ck":{"u":[],"k":[]},"cm":{"u":[],"k":[]},"cl":{"u":[],"k":[]},"ap":{"u":[],"k":[]},"C":{"u":[],"k":[]},"d":{"u":[],"k":[]},"O":{"u":[],"k":[]},"f":{"u":[],"k":[]},"a3":{"u":[],"k":[]},"Z":{"u":[],"k":[]},"fA":{"mp":[]},"dL":{"k3":[]},"fy":{"nd":[]},"fn":{"i3":[]},"aR":{"k":[]},"aO":{"k":[]},"fh":{"at":[],"l":[],"ad":[]},"eS":{"l":[],"ad":[]},"u":{"k":[]},"eT":{"l":[],"ad":[]},"aV":{"aR":[],"k":[]},"cp":{"ag":["aV"],"ag.T":"aV"},"V":{"aR":[],"k":[]},"f8":{"ag":["V"],"ag.T":"V"},"ek":{"u":[],"k":[]},"en":{"u":[],"k":[]},"c5":{"aR":[],"k":[]},"fo":{"ag":["c5"],"ag.T":"c5"},"c7":{"aR":[],"k":[]},"fs":{"ag":["c7"],"ag.T":"c7"},"eQ":{"u":[],"k":[]},"eY":{"u":[],"k":[]},"e4":{"u":[],"k":[]},"ee":{"u":[],"k":[]},"el":{"u":[],"k":[]},"em":{"u":[],"k":[]},"eK":{"u":[],"k":[]},"bB":{"y":[]},"d6":{"y":[]},"bH":{"y":[]},"bS":{"y":[]},"d5":{"y":[]},"cq":{"y":[]},"d7":{"y":[]},"bg":{"y":[]},"dm":{"y":[]},"dn":{"y":[]},"aN":{"y":[]},"cr":{"y":[]},"c2":{"y":[]},"cY":{"y":[]},"bZ":{"y":[]},"cL":{"y":[]},"cK":{"y":[]},"d3":{"y":[]},"dq":{"y":[]},"d9":{"y":[]},"cs":{"y":[]},"bY":{"y":[]},"dt":{"y":[]},"cJ":{"y":[]},"cw":{"y":[]},"dd":{"y":[]},"cI":{"y":[]}}'))
var y={h:'# \u17e1. \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb KhmerLang v1.0")',b:"https://github.com/sengson-great/KhmerLang",c:"\u178f\u17d2\u179a\u17bc\u179c\u1798\u17b6\u1793\u1788\u17d2\u1798\u17c4\u17c7\u1794\u17c9\u17b6\u179a\u17c9\u17b6\u1798\u17c9\u17c2\u178f\u17d2\u179a / Expected parameter name",m:"\u179f\u1793\u17d2\u1791\u179f\u17d2\u179f\u1793\u17cd\u1794\u1789\u17d2\u1787\u17b8\u178f\u17d2\u179a\u17bc\u179c\u178f\u17c2\u1787\u17b6\u179b\u17c1\u1781 / Array index must be a number"}
var x=(function rtii(){var w=C.b7
return{F:w("y"),X:w("aj"),w:w("K<h,h>"),O:w("bV<h>"),h:w("l"),A:w("bf"),c:w("aO"),I:w("z<y>"),i:w("z<k>"),_:w("z<bB>"),l:w("z<N<h,y>>"),s:w("z<h>"),Q:w("z<ah>"),B:w("z<p>"),V:w("z<a1>"),n:w("bk"),t:w("t<y>"),a:w("t<h>"),b:w("t<p>"),P:w("t<a1>"),j:w("t<@>"),J:w("N<h,y>"),Y:w("N<@,@>"),f:w("S<@,@>"),T:w("k1"),R:w("U"),D:w("aR"),q:w("u"),N:w("h"),d:w("p"),o:w("dr<U>"),W:w("aT(U)"),z:w("@"),Z:w("e_<@>"),H:w("~"),M:w("~()"),v:w("~(x)")}})();(function constants(){var w=a.makeConstList
A.aZ=new B.bS(!1)
A.b_=new B.bS(!0)
A.b0=new B.h7(4,"solid")
A.b7=new B.d5()
A.x2=new B.i0()
A.b9=new B.dm()
A.bz=new C.aX(2e6)
A.a6=new B.hn(1,"bold")
A.bA=new B.ek(null)
A.l0=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Built-in Functions) ",null)
A.nx=new C.a("#",null)
A.c=w([A.nx],x.i)
A.pR=new B.O("#builtins",null,"heading-anchor",null,null,null,A.c,null)
A.j6=w([A.l0,A.pR],x.i)
A.rC=new B.a6(A.j6,null)
A.nW=new C.a("KhmerLang \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a\u178a\u17c2\u179b\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1798\u1780\u179f\u17d2\u179a\u17b6\u1794\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1797\u17b6\u179f\u17b6\u17d6",null)
A.fX=w([A.nW],x.i)
A.tg=new B.J(null,null,A.fX,null)
A.lu=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Builtin)",null)
A.iA=w([A.lu],x.i)
A.wj=new B.ap(A.iA,null)
A.ol=new C.a("\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb (Usage)",null)
A.dx=w([A.ol],x.i)
A.wf=new B.ap(A.dx,null)
A.os=new C.a("\u1780\u17b6\u179a\u1796\u1793\u17d2\u1799\u179b\u17cb (Explanation)",null)
A.cy=w([A.os],x.i)
A.wh=new B.ap(A.cy,null)
A.bP=w([A.wj,A.wf,A.wh],x.i)
A.wx=new B.C(A.bP,null)
A.eW=w([A.wx],x.i)
A.wq=new B.cm(A.eW,null)
A.mo=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789(...)",null)
A.hC=w([A.mo],x.i)
A.aK=new B.f(null,A.hC,null)
A.fI=w([A.aK],x.i)
A.uz=new B.d(A.fI,null)
A.nd=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u1798\u17d2\u179b\u17c3:", x)',null)
A.dw=w([A.nd],x.i)
A.qa=new B.f(null,A.dw,null)
A.cM=w([A.qa],x.i)
A.vC=new B.d(A.cM,null)
A.og=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u17a2\u178f\u17d2\u1790\u1794\u1791 \u17ac\u178f\u1798\u17d2\u179b\u17c3\u17a2\u1790\u17c1\u179a\u1793\u17c5\u179b\u17be\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 (Standard Output)",null)
A.fi=w([A.og],x.i)
A.w0=new B.d(A.fi,null)
A.dO=w([A.uz,A.vC,A.w0],x.i)
A.ww=new B.C(A.dO,null)
A.lf=new C.a("\u1794\u17d2\u179a\u179c\u17c2\u1784(...)",null)
A.iN=w([A.lf],x.i)
A.qE=new B.f(null,A.iN,null)
A.jb=w([A.qE],x.i)
A.uZ=new B.d(A.jb,null)
A.kf=new C.a('\u1794\u17d2\u179a\u179c\u17c2\u1784("\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6")',null)
A.dh=w([A.kf],x.i)
A.qk=new B.f(null,A.dh,null)
A.hV=w([A.qk],x.i)
A.uO=new B.d(A.hV,null)
A.mX=new C.a("\u1782\u178e\u1793\u17b6\u1794\u17d2\u179a\u179c\u17c2\u1784\u178f\u17bd\u17a2\u1780\u17d2\u179f\u179a \u17ac\u1785\u17c6\u1793\u17bd\u1793\u1792\u17b6\u178f\u17bb\u1780\u17d2\u1793\u17bb\u1784 Array",null)
A.f6=w([A.mX],x.i)
A.vM=new B.d(A.f6,null)
A.jj=w([A.uZ,A.uO,A.vM],x.i)
A.wC=new B.C(A.jj,null)
A.kU=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(...)",null)
A.fq=w([A.kU],x.i)
A.pY=new B.f(null,A.fq,null)
A.fa=w([A.pY],x.i)
A.vl=new B.d(A.fa,null)
A.mk=new C.a("\u1794\u17d2\u179a\u1797\u17c1\u1791(\u17e1\u17e2\u17e3)",null)
A.iB=w([A.mk],x.i)
A.qL=new B.f(null,A.iB,null)
A.bR=w([A.qL],x.i)
A.uL=new B.d(A.bR,null)
A.o1=new C.a("\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (string, number, boolean, null, class, etc.)",null)
A.hc=w([A.o1],x.i)
A.uW=new B.d(A.hc,null)
A.e6=w([A.vl,A.uL,A.uW],x.i)
A.wH=new B.C(A.e6,null)
A.mZ=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(...)",null)
A.ip=w([A.mZ],x.i)
A.qZ=new B.f(null,A.ip,null)
A.dI=w([A.qZ],x.i)
A.uP=new B.d(A.dI,null)
A.nE=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798(\u1794\u1789\u17d2\u1787\u17b8, \u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8)",null)
A.iH=w([A.nE],x.i)
A.qi=new B.f(null,A.iH,null)
A.fp=w([A.qi],x.i)
A.vn=new B.d(A.fp,null)
A.nY=new C.a("\u1794\u1793\u17d2\u1790\u17c2\u1798\u1792\u17b6\u178f\u17bb\u1790\u17d2\u1798\u17b8\u1791\u17c5\u1785\u17bb\u1784\u1794\u1789\u17d2\u1785\u1794\u17cb\u1793\u17c3\u1794\u1789\u17d2\u1787\u17b8 Array",null)
A.h4=w([A.nY],x.i)
A.uK=new B.d(A.h4,null)
A.dH=w([A.uP,A.vn,A.uK],x.i)
A.wS=new B.C(A.dH,null)
A.hF=w([A.ww,A.wC,A.wH,A.wS],x.i)
A.uy=new B.cl(A.hF,null)
A.hu=w([A.wq,A.uy],x.i)
A.ut=new B.ck(A.hu,null)
A.fL=w([A.ut],x.i)
A.rm=new B.r(null,"table-responsive",null,null,null,A.fL,null)
A.hL=w([A.rC,A.tg,A.rm],x.i)
A.tJ=new B.a7("builtins",A.hL,null)
A.ms=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd (Tools & IDEs) ",null)
A.pL=new B.O("#ides",null,"heading-anchor",null,null,null,A.c,null)
A.cj=w([A.ms,A.pL],x.i)
A.rF=new B.a6(A.cj,null)
A.kV=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u1798\u17d2\u179a\u17bd\u179b\u178a\u179b\u17cb\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u17a2\u17c1\u1780\u17bc\u17a1\u17bc\u179f\u17ca\u17b8 KhmerLang \u179a\u17bd\u1798\u1798\u17b6\u1793\u17a7\u1794\u1780\u179a\u178e\u17cd\u1791\u17c6\u1793\u17be\u1794\u17d7\u1787\u17b6\u1785\u17d2\u179a\u17be\u1793\u17d6",null)
A.ez=w([A.kV],x.i)
A.tl=new B.J(null,null,A.ez,null)
A.o3=new C.a("KhmerLang Flutter IDE (Cross-Platform)\u17d6 ",null)
A.de=w([A.o3],x.i)
A.uk=new B.Z(A.de,null)
A.oe=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799 Flutter \u1798\u17b6\u1793\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793 Dart Engine \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780 \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u179b\u17be macOS, Windows, Linux \u1793\u17b7\u1784 Web \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb \u1787\u17b6\u1798\u17bd\u1799 Virtual Khmer Keyboard, Tabs, AST Inspector \u1793\u17b7\u1784 Output Console\u17d4",null)
A.fA=w([A.uk,A.oe],x.i)
A.rS=new B.Y(null,null,null,A.fA,null)
A.on=new C.a("Programiz-Style Web IDE\u17d6 ",null)
A.ev=w([A.on],x.i)
A.u9=new B.Z(A.ev,null)
A.lV=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798 Programiz \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be Web Browser \u1787\u17b6\u1798\u17bd\u1799 Python Backend Server\u17d4",null)
A.eY=w([A.u9,A.lV],x.i)
A.rR=new B.Y(null,null,null,A.eY,null)
A.mU=new C.a("Command Line Interface (CLI) & REPL\u17d6 ",null)
A.fo=w([A.mU],x.i)
A.ug=new B.Z(A.fo,null)
A.kA=new C.a("\u17a7\u1794\u1780\u179a\u178e\u17cd\u1794\u1789\u17d2\u1787\u17b6\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8 Terminal \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u17af\u1780\u179f\u17b6\u179a ",null)
A.o6=new C.a(".khmer",null)
A.eS=w([A.o6],x.i)
A.aP=new B.f(null,A.eS,null)
A.u=new C.a("\u17d4",null)
A.e5=w([A.ug,A.kA,A.aP,A.u],x.i)
A.rY=new B.Y(null,null,null,A.e5,null)
A.hB=w([A.rS,A.rR,A.rY],x.i)
A.wY=new B.bc(null,null,A.hB,null)
A.cK=w([A.rF,A.tl,A.wY],x.i)
A.tM=new B.a7("ides",A.cK,null)
A.nB=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u179f\u1784\u17d2\u1781\u17c1\u1794\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Khmer Syntax Cheat Sheet) ",null)
A.pO=new B.O("#cheat-sheet",null,"heading-anchor",null,null,null,A.c,null)
A.ca=w([A.nB,A.pO],x.i)
A.rE=new B.a6(A.ca,null)
A.ow=new C.a("\u178f\u17b6\u179a\u17b6\u1784\u1799\u17c4\u1784\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang)\u17d6",null)
A.eT=w([A.ow],x.i)
A.td=new B.J(null,null,A.eT,null)
A.lk=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Keyword)",null)
A.di=w([A.lk],x.i)
A.wo=new B.ap(A.di,null)
A.oy=new C.a("\u179f\u1798\u1798\u17bc\u179b\u17a2\u1784\u17cb\u1782\u17d2\u179b\u17c1\u179f (Equivalent)",null)
A.fr=w([A.oy],x.i)
A.we=new B.ap(A.fr,null)
A.nH=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 \u1793\u17b7\u1784\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb",null)
A.hz=w([A.nH],x.i)
A.wm=new B.ap(A.hz,null)
A.o_=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1780\u17bc\u178a",null)
A.ci=w([A.o_],x.i)
A.wn=new B.ap(A.ci,null)
A.ek=w([A.wo,A.we,A.wm,A.wn],x.i)
A.wT=new B.C(A.ek,null)
A.iq=w([A.wT],x.i)
A.wr=new B.cm(A.iq,null)
A.l7=new C.a("\u178f\u17b6\u17c6\u1784",null)
A.ep=w([A.l7],x.i)
A.a_=new B.f(null,A.ep,null)
A.j0=w([A.a_],x.i)
A.v3=new B.d(A.j0,null)
A.nh=new C.a("let / var",null)
A.f8=w([A.nh],x.i)
A.q2=new B.f(null,A.f8,null)
A.dr=w([A.q2],x.i)
A.vS=new B.d(A.dr,null)
A.kI=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1790\u17d2\u1798\u17b8",null)
A.i0=w([A.kI],x.i)
A.v9=new B.d(A.i0,null)
A.nG=new C.a("\u178f\u17b6\u17c6\u1784 x = \u17e1\u17e0;",null)
A.hN=w([A.nG],x.i)
A.r2=new B.f(null,A.hN,null)
A.dN=w([A.r2],x.i)
A.vp=new B.d(A.dN,null)
A.dT=w([A.v3,A.vS,A.v9,A.vp],x.i)
A.wy=new B.C(A.dT,null)
A.km=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789",null)
A.fK=w([A.km],x.i)
A.aN=new B.f(null,A.fK,null)
A.el=w([A.aN],x.i)
A.uC=new B.d(A.el,null)
A.ov=new C.a("print / echo",null)
A.hy=w([A.ov],x.i)
A.qI=new B.f(null,A.hy,null)
A.iZ=w([A.qI],x.i)
A.vO=new B.d(A.iZ,null)
A.lX=new C.a("\u1794\u1784\u17d2\u17a0\u17b6\u1789\u179b\u1791\u17d2\u1792\u1795\u179b\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb",null)
A.cQ=w([A.lX],x.i)
A.vR=new B.d(A.cQ,null)
A.ou=new C.a('\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8");',null)
A.fm=w([A.ou],x.i)
A.qg=new B.f(null,A.fm,null)
A.eq=w([A.qg],x.i)
A.vx=new B.d(A.eq,null)
A.e_=w([A.uC,A.vO,A.vR,A.vx],x.i)
A.wA=new B.C(A.e_,null)
A.kK=new C.a("\u1794\u17be",null)
A.eu=w([A.kK],x.i)
A.Z=new B.f(null,A.eu,null)
A.es=w([A.Z],x.i)
A.v8=new B.d(A.es,null)
A.np=new C.a("if",null)
A.eK=w([A.np],x.i)
A.qC=new B.f(null,A.eK,null)
A.cT=w([A.qC],x.i)
A.uY=new B.d(A.cT,null)
A.kP=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u178a\u17c6\u1794\u17bc\u1784",null)
A.cG=w([A.kP],x.i)
A.vc=new B.d(A.cG,null)
A.n1=new C.a("\u1794\u17be (x > \u17e0) { ... }",null)
A.bN=w([A.n1],x.i)
A.r7=new B.f(null,A.bN,null)
A.jc=w([A.r7],x.i)
A.ve=new B.d(A.jc,null)
A.c5=w([A.v8,A.uY,A.vc,A.ve],x.i)
A.wQ=new B.C(A.c5,null)
A.lT=new C.a("\u17ac\u1794\u17be",null)
A.d3=w([A.lT],x.i)
A.aM=new B.f(null,A.d3,null)
A.ft=w([A.aM],x.i)
A.vJ=new B.d(A.ft,null)
A.me=new C.a("else if / elif",null)
A.hm=w([A.me],x.i)
A.qT=new B.f(null,A.hm,null)
A.dD=w([A.qT],x.i)
A.vD=new B.d(A.dD,null)
A.lF=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb",null)
A.fz=w([A.lF],x.i)
A.uM=new B.d(A.fz,null)
A.n0=new C.a("\u17ac\u1794\u17be (x == \u17e0) { ... }",null)
A.f0=w([A.n0],x.i)
A.qr=new B.f(null,A.f0,null)
A.f5=w([A.qr],x.i)
A.vF=new B.d(A.f5,null)
A.dg=w([A.vJ,A.vD,A.uM,A.vF],x.i)
A.wN=new B.C(A.dg,null)
A.kc=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",null)
A.f2=w([A.kc],x.i)
A.aQ=new B.f(null,A.f2,null)
A.ce=w([A.aQ],x.i)
A.v7=new B.d(A.ce,null)
A.n6=new C.a("else",null)
A.eG=w([A.n6],x.i)
A.qR=new B.f(null,A.eG,null)
A.ef=w([A.qR],x.i)
A.uN=new B.d(A.ef,null)
A.mJ=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1793\u17c1\u17c7",null)
A.hh=w([A.mJ],x.i)
A.vL=new B.d(A.hh,null)
A.ly=new C.a("\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f { ... }",null)
A.cg=w([A.ly],x.i)
A.qc=new B.f(null,A.cg,null)
A.iM=w([A.qc],x.i)
A.vW=new B.d(A.iM,null)
A.ik=w([A.v7,A.uN,A.vL,A.vW],x.i)
A.wM=new B.C(A.ik,null)
A.nm=new C.a("\u1781\u178e\u17c8",null)
A.ck=w([A.nm],x.i)
A.W=new B.f(null,A.ck,null)
A.ia=w([A.W],x.i)
A.vo=new B.d(A.ia,null)
A.oj=new C.a("while",null)
A.eP=w([A.oj],x.i)
A.qN=new B.f(null,A.eP,null)
A.dB=w([A.qN],x.i)
A.vv=new B.d(A.dB,null)
A.lC=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1795\u17d2\u1791\u17c0\u1784\u1795\u17d2\u1791\u17b6\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c",null)
A.dM=w([A.lC],x.i)
A.vB=new B.d(A.dM,null)
A.mn=new C.a("\u1781\u178e\u17c8 (x > \u17e0) { ... }",null)
A.ic=w([A.mn],x.i)
A.qj=new B.f(null,A.ic,null)
A.h5=w([A.qj],x.i)
A.vQ=new B.d(A.h5,null)
A.dK=w([A.vo,A.vv,A.vB,A.vQ],x.i)
A.ws=new B.C(A.dK,null)
A.mv=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb",null)
A.hp=w([A.mv],x.i)
A.aR=new B.f(null,A.hp,null)
A.cz=w([A.aR],x.i)
A.wd=new B.d(A.cz,null)
A.nf=new C.a("for",null)
A.eJ=w([A.nf],x.i)
A.r6=new B.f(null,A.eJ,null)
A.f9=w([A.r6],x.i)
A.w_=new B.d(A.f9,null)
A.n2=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6\u1798\u17b6\u1793\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u1780\u17c6\u178e\u178f\u17cb",null)
A.cn=w([A.n2],x.i)
A.vw=new B.d(A.cn,null)
A.nk=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i=\u17e0; i<\u17e5; i=i+\u17e1)",null)
A.ii=w([A.nk],x.i)
A.q8=new B.f(null,A.ii,null)
A.jk=w([A.q8],x.i)
A.vA=new B.d(A.jk,null)
A.cW=w([A.wd,A.w_,A.vw,A.vA],x.i)
A.wz=new B.C(A.cW,null)
A.mz=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.eB=w([A.mz],x.i)
A.Y=new B.f(null,A.eB,null)
A.aj=new C.a(" / ",null)
A.nv=new C.a("\u179c\u17b7\u1792\u17b8",null)
A.e0=w([A.nv],x.i)
A.qv=new B.f(null,A.e0,null)
A.fu=w([A.Y,A.aj,A.qv],x.i)
A.w5=new B.d(A.fu,null)
A.lj=new C.a("function / def",null)
A.fF=w([A.lj],x.i)
A.qo=new B.f(null,A.fF,null)
A.iz=w([A.qo],x.i)
A.vX=new B.d(A.iz,null)
A.l4=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a",null)
A.c1=w([A.l4],x.i)
A.vV=new B.d(A.c1,null)
A.nJ=new C.a("\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1794\u17bc\u1780(\u1780, \u1781) { ... }",null)
A.cu=w([A.nJ],x.i)
A.qU=new B.f(null,A.cu,null)
A.ir=w([A.qU],x.i)
A.w2=new B.d(A.ir,null)
A.dq=w([A.w5,A.vX,A.vV,A.w2],x.i)
A.wW=new B.C(A.dq,null)
A.m3=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb",null)
A.hv=w([A.m3],x.i)
A.aT=new B.f(null,A.hv,null)
A.iP=w([A.aT],x.i)
A.v6=new B.d(A.iP,null)
A.o4=new C.a("return",null)
A.eN=w([A.o4],x.i)
A.qG=new B.f(null,A.eN,null)
A.fl=w([A.qG],x.i)
A.vr=new B.d(A.fl,null)
A.nQ=new C.a("\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1796\u17b8\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd",null)
A.dQ=w([A.nQ],x.i)
A.v5=new B.d(A.dQ,null)
A.lL=new C.a("\u178f\u17d2\u179a\u17a1\u1794\u17cb \u1780 + \u1781",null)
A.dP=w([A.lL],x.i)
A.q1=new B.f(null,A.dP,null)
A.fw=w([A.q1],x.i)
A.uE=new B.d(A.fw,null)
A.fU=w([A.v6,A.vr,A.v5,A.uE],x.i)
A.wU=new B.C(A.fU,null)
A.nP=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.c9=w([A.nP],x.i)
A.a0=new B.f(null,A.c9,null)
A.iC=w([A.a0],x.i)
A.vz=new B.d(A.iC,null)
A.mN=new C.a("class",null)
A.eF=w([A.mN],x.i)
A.qw=new B.f(null,A.eF,null)
A.hG=w([A.qw],x.i)
A.wc=new B.d(A.hG,null)
A.lO=new C.a("\u1794\u17d2\u179a\u1780\u17b6\u179f\u1790\u17d2\u1793\u17b6\u1780\u17cb OOP",null)
A.cc=w([A.lO],x.i)
A.vU=new B.d(A.cc,null)
A.la=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u17b7\u179f\u17d2\u179f { ... }",null)
A.il=w([A.la],x.i)
A.q0=new B.f(null,A.il,null)
A.iX=w([A.q0],x.i)
A.uH=new B.d(A.iX,null)
A.ij=w([A.vz,A.wc,A.vU,A.uH],x.i)
A.wK=new B.C(A.ij,null)
A.kb=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f",null)
A.bO=w([A.kb],x.i)
A.r1=new B.f(null,A.bO,null)
A.h0=w([A.r1],x.i)
A.vH=new B.d(A.h0,null)
A.n4=new C.a("constructor / __init__",null)
A.bY=w([A.n4],x.i)
A.qX=new B.f(null,A.bY,null)
A.eC=w([A.qX],x.i)
A.uS=new B.d(A.eC,null)
A.lp=new C.a("\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u1794\u1784\u17d2\u1780\u17be\u178f\u179c\u178f\u17d2\u1790\u17bb",null)
A.cm=w([A.lp],x.i)
A.wb=new B.d(A.cm,null)
A.kl=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) { \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7 }",null)
A.cb=w([A.kl],x.i)
A.qu=new B.f(null,A.cb,null)
A.cO=w([A.qu],x.i)
A.vj=new B.d(A.cO,null)
A.fQ=w([A.vH,A.uS,A.wb,A.vj],x.i)
A.wB=new B.C(A.fQ,null)
A.kv=new C.a("\u1793\u17c1\u17c7",null)
A.fW=w([A.kv],x.i)
A.qe=new B.f(null,A.fW,null)
A.op=new C.a("\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6",null)
A.j4=w([A.op],x.i)
A.qA=new B.f(null,A.j4,null)
A.eD=w([A.qe,A.aj,A.qA],x.i)
A.vt=new B.d(A.eD,null)
A.o0=new C.a("this / self",null)
A.hw=w([A.o0],x.i)
A.qM=new B.f(null,A.hw,null)
A.iJ=w([A.qM],x.i)
A.v1=new B.d(A.iJ,null)
A.kW=new C.a("\u1799\u17c4\u1784\u1791\u17c5\u179b\u17be Object \u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793",null)
A.eV=w([A.kW],x.i)
A.vK=new B.d(A.eV,null)
A.l9=new C.a('\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"',null)
A.ee=w([A.l9],x.i)
A.r5=new B.f(null,A.ee,null)
A.hj=w([A.r5],x.i)
A.uG=new B.d(A.hj,null)
A.iQ=w([A.vt,A.v1,A.vK,A.uG],x.i)
A.wL=new B.C(A.iQ,null)
A.md=new C.a("\u1790\u17d2\u1798\u17b8",null)
A.cs=w([A.md],x.i)
A.aO=new B.f(null,A.cs,null)
A.j_=w([A.aO],x.i)
A.vZ=new B.d(A.j_,null)
A.nO=new C.a("new",null)
A.eM=w([A.nO],x.i)
A.qb=new B.f(null,A.eM,null)
A.fE=w([A.qb],x.i)
A.uA=new B.d(A.fE,null)
A.nu=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb",null)
A.hP=w([A.nu],x.i)
A.vP=new B.d(A.hP,null)
A.kk=new C.a('\u178f\u17b6\u17c6\u1784 p = \u1790\u17d2\u1798\u17b8 \u179f\u17b7\u179f\u17d2\u179f("\u178f\u17b6\u179a\u17b6")',null)
A.c2=w([A.kk],x.i)
A.qY=new B.f(null,A.c2,null)
A.cY=w([A.qY],x.i)
A.uQ=new B.d(A.cY,null)
A.cr=w([A.vZ,A.uA,A.vP,A.uQ],x.i)
A.wP=new B.C(A.cr,null)
A.mQ=new C.a("\u1794\u1793\u17d2\u178f\u1796\u17b8",null)
A.f_=w([A.mQ],x.i)
A.aS=new B.f(null,A.f_,null)
A.e9=w([A.aS],x.i)
A.vq=new B.d(A.e9,null)
A.n8=new C.a("extends",null)
A.eH=w([A.n8],x.i)
A.qQ=new B.f(null,A.eH,null)
A.iI=w([A.qQ],x.i)
A.vY=new B.d(A.iI,null)
A.m8=new C.a("\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Inheritance)",null)
A.h1=w([A.m8],x.i)
A.vf=new B.d(A.h1,null)
A.lM=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1798\u17b6 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c",null)
A.eo=w([A.lM],x.i)
A.qJ=new B.f(null,A.eo,null)
A.dW=w([A.qJ],x.i)
A.w3=new B.d(A.dW,null)
A.fh=w([A.vq,A.vY,A.vf,A.w3],x.i)
A.wE=new B.C(A.fh,null)
A.lU=new C.a("\u1796\u17b7\u178f",null)
A.dZ=w([A.lU],x.i)
A.X=new B.f(null,A.dZ,null)
A.dV=w([A.X],x.i)
A.a1=new B.d(A.dV,null)
A.od=new C.a("true",null)
A.eO=w([A.od],x.i)
A.q6=new B.f(null,A.eO,null)
A.c3=w([A.q6],x.i)
A.w1=new B.d(A.c3,null)
A.mE=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1796\u17b7\u178f",null)
A.cf=w([A.mE],x.i)
A.uD=new B.d(A.cf,null)
A.kt=new C.a("\u178f\u17b6\u17c6\u1784 \u178f\u17d2\u179a\u17bc\u179c = \u1796\u17b7\u178f",null)
A.cI=w([A.kt],x.i)
A.q7=new B.f(null,A.cI,null)
A.ja=w([A.q7],x.i)
A.vk=new B.d(A.ja,null)
A.iL=w([A.a1,A.w1,A.uD,A.vk],x.i)
A.wt=new B.C(A.iL,null)
A.mB=new C.a("\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.hH=w([A.mB],x.i)
A.aL=new B.f(null,A.hH,null)
A.f1=w([A.aL],x.i)
A.vs=new B.d(A.f1,null)
A.nb=new C.a("false",null)
A.eI=w([A.nb],x.i)
A.qp=new B.f(null,A.eI,null)
A.j1=w([A.qp],x.i)
A.wa=new B.d(A.j1,null)
A.no=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1794\u17ca\u17bc\u179b\u17b8\u1793\u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.hZ=w([A.no],x.i)
A.vd=new B.d(A.hZ,null)
A.mb=new C.a("\u178f\u17b6\u17c6\u1784 \u1781\u17bb\u179f = \u1798\u17b7\u1793\u1796\u17b7\u178f",null)
A.iy=w([A.mb],x.i)
A.pW=new B.f(null,A.iy,null)
A.hl=w([A.pW],x.i)
A.uB=new B.d(A.hl,null)
A.fO=w([A.vs,A.wa,A.vd,A.uB],x.i)
A.wO=new B.C(A.fO,null)
A.mH=new C.a("\u1791\u1791\u17c1",null)
A.f3=w([A.mH],x.i)
A.aJ=new B.f(null,A.f3,null)
A.hE=w([A.aJ],x.i)
A.v_=new B.d(A.hE,null)
A.m_=new C.a("null / none",null)
A.j5=w([A.m_],x.i)
A.qq=new B.f(null,A.j5,null)
A.cS=w([A.qq],x.i)
A.w7=new B.d(A.cS,null)
A.kD=new C.a("\u178f\u1798\u17d2\u179b\u17c3\u1791\u1791\u17c1\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799",null)
A.h3=w([A.kD],x.i)
A.uV=new B.d(A.h3,null)
A.l8=new C.a("\u178f\u17b6\u17c6\u1784 \u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799 = \u1791\u1791\u17c1",null)
A.cZ=w([A.l8],x.i)
A.qH=new B.f(null,A.cZ,null)
A.fZ=w([A.qH],x.i)
A.vT=new B.d(A.fZ,null)
A.hD=w([A.v_,A.w7,A.uV,A.vT],x.i)
A.wv=new B.C(A.hD,null)
A.hR=w([A.wy,A.wA,A.wQ,A.wN,A.wM,A.ws,A.wz,A.wW,A.wU,A.wK,A.wB,A.wL,A.wP,A.wE,A.wt,A.wO,A.wv],x.i)
A.uw=new B.cl(A.hR,null)
A.iS=w([A.wr,A.uw],x.i)
A.uv=new B.ck(A.iS,null)
A.cv=w([A.uv],x.i)
A.rb=new B.r(null,"table-responsive",null,null,null,A.cv,null)
A.iK=w([A.rE,A.td,A.rb],x.i)
A.tR=new B.a7("cheat-sheet",A.iK,null)
A.lY=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb (Live Interactive Playground) ",null)
A.pE=new B.O("#playground",null,"heading-anchor",null,null,null,A.c,null)
A.hb=w([A.lY,A.pE],x.i)
A.rI=new B.a6(A.hb,null)
A.lt=new C.a("\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a KhmerLang \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1780\u17d2\u1793\u17bb\u1784 Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780! \u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc \u17ac\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1781\u17d2\u179b\u17bd\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780 \u179a\u17bd\u1785\u1785\u17bb\u1785 ",null)
A.nF=new C.a(' "\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)" ',null)
A.dE=w([A.nF],x.i)
A.u5=new B.Z(A.dE,null)
A.A=new C.a("\u17d6",null)
A.hX=w([A.lt,A.u5,A.A],x.i)
A.tt=new B.J(null,null,A.hX,null)
A.jO=new B.c5(null)
A.iv=w([A.rI,A.tt,A.jO],x.i)
A.tP=new B.a7("playground",A.iv,null)
A.c_=w([A.tJ,A.tM,A.tR,A.tP],x.i)
A.bB=new B.aO(A.c_,null)
A.mG=new C.a("\u2728 \u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1781\u17d2\u1798\u17c2\u179a\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1782\u17b6\u17c6\u1791\u17d2\u179a OOP \u1796\u17c1\u1789\u179b\u17c1\u1789",null)
A.eR=w([A.mG],x.i)
A.u3=new B.a3(null,null,A.eR,null)
A.eE=w([A.u3],x.i)
A.rd=new B.r(null,"hero-tag",null,null,null,A.eE,null)
A.oc=new C.a("\u17af\u1780\u179f\u17b6\u179a\u178e\u17c2\u1793\u17b6\u17c6\u1795\u17d2\u179b\u17bc\u179c\u1780\u17b6\u179a \u2014 \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang)",null)
A.dG=w([A.oc],x.i)
A.rs=new B.fJ(null)
A.nL=new C.a("KhmerLang (\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a)",null)
A.fv=w([A.nL],x.i)
A.aV=new B.Z(A.fv,null)
A.nC=new C.a(" \u1782\u17ba\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u17b8\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f\u1781\u17d2\u1796\u179f\u17cb\u178a\u17c2\u179b\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u179a\u1785\u1793\u17b6\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799\u179c\u17b6\u1780\u17d2\u1799\u179f\u1796\u17d2\u1791 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u17d4 \u179c\u17b6\u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179f\u17b7\u1780\u17d2\u179f\u17b6 \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u1794\u17c2\u1794 Object-Oriented Programming (OOP) \u1793\u17b7\u1784\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (\u17e0-\u17e9) \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u17d4",null)
A.ht=w([A.aV,A.nC],x.i)
A.tn=new B.J("hero-lead",null,A.ht,null)
A.kG=new C.a("\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179a\u17c0\u1793\u17a5\u17a1\u17bc\u179c\u1793\u17c1\u17c7",null)
A.ho=w([A.kG],x.i)
A.pw=new B.O("#hello-world",null,"btn-primary-compact",null,null,null,A.ho,null)
A.kJ=new C.a("\ud83c\udfae \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u179b\u17be Web Browser",null)
A.hq=w([A.kJ],x.i)
A.px=new B.O("#playground",null,"btn-secondary",null,null,null,A.hq,null)
A.d1=w([A.pw,A.px],x.i)
A.rf=new B.r(null,"hero-buttons",null,null,null,A.d1,null)
A.i2=w([A.rd,A.rs,A.tn,A.rf],x.i)
A.rh=new B.r(null,"hero-banner",null,null,null,A.i2,null)
A.mM=new C.a("\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Introduction) ",null)
A.pz=new B.O("#intro",null,"heading-anchor",null,null,null,A.c,null)
A.dF=w([A.mM,A.pz],x.i)
A.rD=new B.a6(A.dF,null)
A.nD=new C.a("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17be\u1798\u17d2\u1794\u17b8\u1780\u17b6\u178f\u17cb\u1794\u1793\u17d2\u1790\u1799\u179a\u1794\u17b6\u17c6\u1784\u1797\u17b6\u179f\u17b6\u1780\u17d2\u1793\u17bb\u1784\u179c\u17b7\u179f\u17d0\u1799\u179c\u17b7\u1791\u17d2\u1799\u17b6\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1780\u17bb\u17c6\u1796\u17d2\u1799\u17bc\u1791\u17d0\u179a\u1793\u17c5\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6\u17d4 \u179f\u17b7\u179f\u17d2\u179f \u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f \u1793\u17b7\u1784\u17a2\u17d2\u1793\u1780\u179a\u17c0\u1793\u178a\u17c6\u1794\u17bc\u1784\u17a2\u17b6\u1785\u1799\u179b\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u17a2\u17c6\u1796\u17b8\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6\u1793\u17c3\u1780\u17bc\u178a (Logic) \u178f\u17b6\u1798\u179a\u1799\u17c8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1781\u17d2\u1798\u17c2\u179a\u1792\u1798\u17d2\u1798\u1787\u17b6\u178f\u17b7 \u178a\u17bc\u1785\u1787\u17b6 ",null)
A.m=new C.a(", ",null)
A.kj=new C.a(" \u1793\u17b7\u1784 ",null)
A.c8=w([A.nD,A.a_,A.m,A.aN,A.m,A.Z,A.m,A.W,A.m,A.a0,A.kj,A.Y,A.u],x.i)
A.tc=new B.J(null,null,A.c8,null)
A.ld=new C.a("\ud83d\udca1",null)
A.iE=w([A.ld],x.i)
A.rr=new B.r(null,"callout-icon",null,null,null,A.iE,null)
A.mt=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u1796\u17b7\u179f\u17c1\u179f\u17d6 ",null)
A.iw=w([A.mt],x.i)
A.u4=new B.Z(A.iw,null)
A.mF=new C.a("\u179a\u17b6\u179b\u17cb\u1780\u17bc\u178a\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u17af\u1780\u179f\u17b6\u179a\u1793\u17c1\u17c7 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1785\u17bb\u1785\u1794\u17ca\u17bc\u178f\u17bb\u1784 ",null)
A.nc=new C.a("\u25b7 \u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Run)",null)
A.em=w([A.nc],x.i)
A.ul=new B.Z(A.em,null)
A.n7=new C.a(" \u178a\u17be\u1798\u17d2\u1794\u17b8\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a \u1793\u17b7\u1784\u1791\u179f\u17d2\u179f\u1793\u17b6\u179b\u1791\u17d2\u1792\u1795\u179b\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u179b\u17be Browser \u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb!",null)
A.i5=w([A.u4,A.mF,A.ul,A.n7],x.i)
A.ra=new B.r(null,"callout-content",null,null,null,A.i5,null)
A.hW=w([A.rr,A.ra],x.i)
A.rg=new B.r(null,"callout callout-info",null,null,null,A.hW,null)
A.bS=w([A.rD,A.tc,A.rg],x.i)
A.tS=new B.a7("intro",A.bS,null)
A.lN=new C.a("\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Installation & Setup) ",null)
A.pA=new B.O("#install",null,"heading-anchor",null,null,null,A.c,null)
A.iu=w([A.lN,A.pA],x.i)
A.rB=new B.a6(A.iu,null)
A.kp=new C.a("\u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1798\u17bd\u1799 ",null)
A.ke=new C.a(" \u1798\u17b6\u1793\u1797\u17b6\u1796\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b \u1793\u17b7\u1784\u179a\u17a0\u17d0\u179f\u17d4 \u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784\u178f\u17b6\u1798\u179a\u1799\u17c8 ",null)
A.ns=new C.a("Command Line Tool (CLI)",null)
A.dl=w([A.ns],x.i)
A.ue=new B.Z(A.dl,null)
A.oh=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1795\u17d2\u1791\u17b6\u179b\u17cb \u17ac\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 ",null)
A.nT=new C.a("Khmer IDE",null)
A.dv=w([A.nT],x.i)
A.uj=new B.Z(A.dv,null)
A.lz=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u17d4",null)
A.hA=w([A.kp,A.aV,A.ke,A.ue,A.oh,A.uj,A.lz],x.i)
A.to=new B.J(null,null,A.hA,null)
A.lP=new C.a("\u17e1. \u178f\u1798\u17d2\u179a\u17bc\u179c\u1780\u17b6\u179a\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792 (Prerequisites)",null)
A.hi=w([A.lP],x.i)
A.rO=new B.b8(A.hi,null)
A.or=new C.a("\u1798\u17bb\u1793\u1796\u17c1\u179b\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u178a\u17c6\u17a1\u17be\u1784 \u179f\u17bc\u1798\u1794\u17d2\u179a\u17b6\u1780\u178a\u1790\u17b6\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1798\u17b6\u1793\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u178a\u17bc\u1785\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u17d6",null)
A.d2=w([A.or],x.i)
A.t7=new B.J(null,null,A.d2,null)
A.m1=new C.a("\u1794\u17d2\u179a\u1796\u17d0\u1793\u17d2\u1792\u1794\u17d2\u179a\u178f\u17b7\u1794\u178f\u17d2\u178f\u17b7\u1780\u17b6\u179a\u17d6 ",null)
A.iR=w([A.m1],x.i)
A.ui=new B.Z(A.iR,null)
A.lG=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a macOS, Linux, \u1793\u17b7\u1784 Windows (WSL / PowerShell)",null)
A.ct=w([A.ui,A.lG],x.i)
A.rQ=new B.Y(null,null,null,A.ct,null)
A.ot=new C.a("Dart SDK (3.0+)\u17d6 ",null)
A.jg=w([A.ot],x.i)
A.uf=new B.Z(A.jg,null)
A.lK=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a Engine \u1793\u17b7\u1784 Native Compiler \u179a\u1794\u179f\u17cb\u1797\u17b6\u179f\u17b6",null)
A.df=w([A.uf,A.lK],x.i)
A.rX=new B.Y(null,null,null,A.df,null)
A.lE=new C.a("Git\u17d6 ",null)
A.e8=w([A.lE],x.i)
A.uc=new B.Z(A.e8,null)
A.l6=new C.a("\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1791\u17b6\u1789\u1799\u1780\u1794\u17d2\u179a\u1797\u1796\u1780\u17bc\u178a \u17ac Releases",null)
A.dy=w([A.uc,A.l6],x.i)
A.rU=new B.Y(null,null,null,A.dy,null)
A.hQ=w([A.rQ,A.rX,A.rU],x.i)
A.x_=new B.bc(null,null,A.hQ,null)
A.l3=new C.a("\u17e2. \u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 CLI \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1791\u17bc\u1791\u17c5 (Universal One-Line Install)",null)
A.d0=w([A.l3],x.i)
A.rP=new B.b8(A.d0,null)
A.lD=new C.a("\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1782\u17d2\u179a\u1794\u17cb\u179a\u17bc\u1794\u17a2\u17b6\u1785\u178a\u17c6\u17a1\u17be\u1784 ",null)
A.nz=new C.a("khmer",null)
A.eL=w([A.nz],x.i)
A.aU=new B.f(null,A.eL,null)
A.kX=new C.a(" CLI \u179b\u17be\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u179a\u1794\u179f\u17cb\u1781\u17d2\u179b\u17bd\u1793\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u178f\u17b6\u1798\u179a\u1799\u17c8\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u178f\u17c2\u1798\u17bd\u1799\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u17d6",null)
A.cN=w([A.lD,A.aU,A.kX],x.i)
A.te=new B.J(null,null,A.cN,null)
A.bg=new B.V("macOS / Linux (Terminal)","BASH","# \u178a\u17c6\u17a1\u17be\u1784\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u179b\u17be macOS \u1793\u17b7\u1784 Linux (\u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784 PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash",!1,null)
A.br=new B.V("Windows (PowerShell)","POWERSHELL","# \u178a\u17c6\u17a1\u17be\u1784\u179b\u17be Windows \u178f\u17b6\u1798\u179a\u1799\u17c8 PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex",!1,null)
A.bn=new B.V("Dart Toolchain / Native Compilation","DART","# Compile \u1791\u17c5\u1787\u17b6 Native AOT Binary \u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# \u17ac\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb\ndart run bin/khmer.dart main.khmer",!1,null)
A.nN=new C.a("\u17e3. \u179a\u1794\u17c0\u1794\u1794\u1784\u17d2\u1780\u17be\u178f \u1793\u17b7\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780",null)
A.eZ=w([A.nN],x.i)
A.rK=new B.b8(A.eZ,null)
A.m0=new C.a("\u17af\u1780\u179f\u17b6\u179a\u1780\u17bc\u178a\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17d2\u179a\u17be\u1780\u1793\u17d2\u1791\u17bb\u1799 ",null)
A.ma=new C.a("\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17af\u1780\u179f\u17b6\u179a\u1790\u17d2\u1798\u17b8\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f (\u178a\u17bc\u1785\u1787\u17b6 VS Code, Cursor, \u17ac Nano)\u17d6",null)
A.eA=w([A.m0,A.aP,A.ma],x.i)
A.tu=new B.J(null,null,A.eA,null)
A.bj=new B.V("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6 (my_app.khmer)","KHMER",'\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u17a2\u17d2\u1793\u1780\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb"\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb\u1796\u17b7\u1797\u1796\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u1787\u17b6\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8", \u1788\u17d2\u1798\u17c4\u17c7)',null,null)
A.mu=new C.a("\u1794\u1793\u17d2\u1791\u17b6\u1794\u17cb\u1798\u1780\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17af\u1780\u179f\u17b6\u179a\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784 Terminal\u17d6",null)
A.eU=w([A.mu],x.i)
A.t6=new B.J(null,null,A.eU,null)
A.bs=new B.V("Run Your Script","BASH","khmer my_app.khmer",!1,null)
A.oa=new C.a("\u17e4. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Interactive REPL",null)
A.cV=w([A.oa],x.i)
A.rN=new B.b8(A.cV,null)
A.kh=new C.a("\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u17a2\u17d2\u1793\u1780\u1785\u1784\u17cb\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u17ac\u1782\u178e\u1793\u17b6\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1797\u17d2\u179b\u17b6\u1798\u17d7 \u17a2\u17d2\u1793\u1780\u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6 ",null)
A.mA=new C.a(" \u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u1794\u1789\u17d2\u1787\u17b6\u1780\u17cb\u1788\u17d2\u1798\u17c4\u17c7\u17af\u1780\u179f\u17b6\u179a\u1793\u17c4\u17c7\u1791\u17c1 \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17be\u1780 Interactive REPL Shell\u17d6",null)
A.iF=w([A.kh,A.aU,A.mA],x.i)
A.ti=new B.J(null,null,A.iF,null)
A.bl=new B.V("Interactive Console","BASH","$ khmer\n\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) v1.0.0 REPL\n\u179c\u17b6\u1799 '\u1785\u17b6\u1780\u1785\u17c1\u1789' \u17ac\u1785\u17bb\u1785 Ctrl+D \u178a\u17be\u1798\u17d2\u1794\u17b8\u1785\u17b6\u1780\u1785\u17c1\u1789\u17d4\n\n>>> \u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\"\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794:\", \u1796\u17b7\u1793\u17d2\u1791\u17bb);\n\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u179a\u17bb\u1794: \u17e9\u17e5\n>>> \u178f\u17b6\u17c6\u1784 \u1791\u17d2\u179c\u17c1\u178a\u1784 = \u1796\u17b7\u1793\u17d2\u1791\u17bb * \u17e2;\n>>> \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1791\u17d2\u179c\u17c1\u178a\u1784);\n\u17e1\u17e9\u17e0",!1,null)
A.mO=new C.a("\u17e5. \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb\u1787\u17b6\u1798\u17bd\u1799\u1782\u17d2\u179a\u1794\u17cb Text Editor \u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb (VS Code, Vim, Sublime, Nano)",null)
A.ie=w([A.mO],x.i)
A.rL=new B.b8(A.ie,null)
A.nV=new C.a("KhmerLang CLI \u1795\u17d2\u178a\u179b\u17cb\u17a7\u1794\u1780\u179a\u178e\u17cd\u1787\u17c6\u1793\u17bd\u1799\u179f\u17d2\u179a\u17b6\u1794\u17cb\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1797\u17d2\u1787\u17b6\u1794\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb Text Editor \u178e\u17b6\u1798\u17bd\u1799\u178a\u17c2\u179b\u17a2\u17d2\u1793\u1780\u1796\u17c1\u1789\u1785\u17b7\u178f\u17d2\u178f\u17d6",null)
A.cX=w([A.nV],x.i)
A.tv=new B.J(null,null,A.cX,null)
A.bt=new B.V("Editor Integration Commands","BASH","# \u178a\u17c6\u17a1\u17be\u1784 Syntax Highlighting \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb VS Code / Cursor \u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\nkhmer editor vscode\n\n# \u17ac\u1794\u1784\u17d2\u1780\u17be\u178f Config \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb Vim / Neovim, Sublime Text, \u17ac GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# \u1798\u17bb\u1781\u1784\u17b6\u179a Live-Reload: \u178f\u17b6\u1798\u178a\u17b6\u1793 \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u1796\u17c1\u179b\u17a2\u17d2\u1793\u1780\u1785\u17bb\u1785 Save \u1780\u17d2\u1793\u17bb\u1784 Editor \u178e\u17b6\u1798\u17bd\u1799\nkhmer watch my_app.khmer\n\n# \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799\u1780\u17c6\u17a0\u17bb\u179f\u179c\u17c1\u1799\u17d2\u1799\u17b6\u1780\u179a\u178e\u17cd\u178a\u17c4\u1799\u1798\u17b7\u1793\u1794\u17b6\u1785\u17cb\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a (Linter)\nkhmer check my_app.khmer",!1,null)
A.m7=new C.a("\u17e6. \u1787\u1798\u17d2\u179a\u17be\u179f\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798 GUI & Web IDE",null)
A.iT=w([A.m7],x.i)
A.rM=new B.b8(A.iT,null)
A.mK=new C.a("\u1780\u17d2\u179a\u17c5\u1796\u17b8\u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u1794\u17d2\u179a\u17b6\u179f\u17cb Terminal CLI \u17a2\u17d2\u1793\u1780\u1780\u17cf\u17a2\u17b6\u1785\u1787\u17d2\u179a\u17be\u179f\u179a\u17be\u179f\u1794\u179a\u17b7\u179f\u17d2\u1790\u17b6\u1793\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u178a\u17c2\u179b\u1784\u17b6\u1799\u179f\u17d2\u179a\u17bd\u179b\u1794\u17c6\u1795\u17bb\u178f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17d6",null)
A.cE=w([A.mK],x.i)
A.tf=new B.J(null,null,A.cE,null)
A.o5=new C.a("Web Playground (\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1797\u17d2\u179b\u17b6\u1798\u17d7\u178f\u17b6\u1798 Web Browser)\u17d6 ",null)
A.e4=w([A.o5],x.i)
A.uh=new B.Z(A.e4,null)
A.lg=new C.a("\u17a2\u17d2\u1793\u1780\u1798\u17b7\u1793\u1785\u17b6\u17c6\u1794\u17b6\u1785\u17cb\u178a\u17c6\u17a1\u17be\u1784\u17a2\u17d2\u179c\u17b8\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u17a1\u17be\u1799! \u1782\u17d2\u179a\u17b6\u1793\u17cb\u178f\u17c2\u179a\u1798\u17bc\u179a\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1795\u17d2\u1793\u17c2\u1780 ",null)
A.l_=new C.a("\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb",null)
A.hS=w([A.l_],x.i)
A.pH=new B.O("#playground",null,null,null,null,null,A.hS,null)
A.ml=new C.a(" \u1793\u17c5\u1781\u17b6\u1784\u1780\u17d2\u179a\u17c4\u1798\u1793\u17c3\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7 \u178a\u17be\u1798\u17d2\u1794\u17b8\u179f\u179a\u179f\u17c1\u179a \u1793\u17b7\u1784\u179a\u17c9\u17b6\u1793\u17cb\u1780\u17bc\u178a\u1781\u17d2\u1798\u17c2\u179a\u179b\u17be Browser \u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780\u1794\u17b6\u1793\u1797\u17d2\u179b\u17b6\u1798\u17d7\u17d4",null)
A.fG=w([A.uh,A.lg,A.pH,A.ml],x.i)
A.t_=new B.Y(null,null,null,A.fG,null)
A.na=new C.a("Khmer IDE (\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 Desktop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb macOS / Windows)\u17d6 ",null)
A.c6=w([A.na],x.i)
A.u8=new B.Z(A.c6,null)
A.oi=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8 IDE \u178a\u17be\u1798\u178a\u17c2\u179b\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u1787\u17b6\u1798\u17bd\u1799 Flutter \u1795\u17d2\u178a\u179b\u17cb\u1793\u17bc\u179c Virtual Khmer Keypad \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u179c\u17b6\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u1781\u17d2\u1798\u17c2\u179a\u179a\u17a0\u17d0\u179f, Syntax Highlighting, Tabs \u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u17af\u1780\u179f\u17b6\u179a\u1785\u17d2\u179a\u17be\u1793, AST Visualizer, \u1793\u17b7\u1784 Terminal \u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u179a\u17bb\u1780\u17d4",null)
A.ei=w([A.u8,A.oi],x.i)
A.rT=new B.Y(null,null,null,A.ei,null)
A.ex=w([A.t_,A.rT],x.i)
A.x0=new B.bc(null,null,A.ex,null)
A.du=w([A.rB,A.to,A.rO,A.t7,A.x_,A.rP,A.te,A.bg,A.br,A.bn,A.rK,A.tu,A.bj,A.t6,A.bs,A.rN,A.ti,A.bl,A.rL,A.tv,A.bt,A.rM,A.tf,A.x0],x.i)
A.tO=new B.a7("install",A.du,null)
A.ne=new C.a("\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (First Program: \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780) ",null)
A.pI=new B.O("#hello-world",null,"heading-anchor",null,null,null,A.c,null)
A.fg=w([A.ne,A.pI],x.i)
A.rH=new B.a6(A.fg,null)
A.my=new C.a('\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1794\u17d2\u179a\u1796\u17c3\u178e\u17b8\u178a\u17c6\u1794\u17bc\u1784\u1782\u17c1\u1794\u1784\u17d2\u17a2\u179f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1780\u17b6\u179a\u179a\u17c0\u1793\u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a \u1782\u17ba\u1780\u17b6\u179a\u1794\u1784\u17d2\u17a0\u17b6\u1789\u1796\u17b6\u1780\u17d2\u1799 "\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780" (Hello World) \u1791\u17c5\u179b\u17be\u17a2\u17c1\u1780\u17d2\u179a\u1784\u17cb \u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ',null)
A.j8=w([A.my,A.aK,A.A],x.i)
A.tb=new B.J(null,null,A.j8,null)
A.bi=new B.V("hello_world.khmer","KHMER",'# \u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784\u179a\u1794\u179f\u17cb\u1781\u17d2\u1789\u17bb\u17c6\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780!")\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb KhmerLang v1.0")',null,null)
A.j3=w([A.rH,A.tb,A.bi],x.i)
A.tE=new B.a7("hello-world",A.j3,null)
A.cD=w([A.rh,A.tS,A.tO,A.tE],x.i)
A.bC=new B.aO(A.cD,null)
A.kd=new C.a("\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be...\u17ac\u1794\u17be...\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f (Conditionals) ",null)
A.pM=new B.O("#conditionals",null,"heading-anchor",null,null,null,A.c,null)
A.ej=w([A.kd,A.pM],x.i)
A.rG=new B.a6(A.ej,null)
A.ok=new C.a("\u1780\u17b6\u179a\u179f\u1798\u17d2\u179a\u17c1\u1785\u1785\u17b7\u178f\u17d2\u178f\u1780\u17d2\u1793\u17bb\u1784\u1780\u17bc\u178a\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u178a\u17c4\u1799\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.kF=new C.a(" (if), ",null)
A.mf=new C.a(" (else if), \u1793\u17b7\u1784 ",null)
A.mm=new C.a(" (else)\u17d6",null)
A.h9=w([A.ok,A.Z,A.kF,A.aM,A.mf,A.aQ,A.mm],x.i)
A.tp=new B.J(null,null,A.h9,null)
A.bk=new B.V("conditions.khmer","KHMER",'\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e2\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}',null,null)
A.bZ=w([A.rG,A.tp,A.bk],x.i)
A.tN=new B.a7("conditionals",A.bZ,null)
A.ku=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loops) ",null)
A.pS=new B.O("#while-loop",null,"heading-anchor",null,null,null,A.c,null)
A.eb=w([A.ku,A.pS],x.i)
A.rz=new B.a6(A.eb,null)
A.ai=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 ",null)
A.mw=new C.a(" (while loop) \u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u1780\u17bc\u178a\u179f\u17b6\u179a\u17a1\u17be\u1784\u179c\u17b7\u1789\u178a\u179a\u17b6\u1794\u178e\u17b6\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u1793\u17c5\u178f\u17c2\u1798\u17b6\u1793\u178f\u1798\u17d2\u179b\u17c3 ",null)
A.fs=w([A.ai,A.W,A.mw,A.X,A.A],x.i)
A.t5=new B.J(null,null,A.fs,null)
A.bd=new B.V("while_loop.khmer","KHMER",'# \u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799\u1796\u17b8 \u17e5 \u178a\u179b\u17cb \u17e1\n\u178f\u17b6\u17c6\u1784 \u1785\u17c6\u1793\u17bd\u1793 = \u17e5\n\n\u1781\u178e\u17c8 (\u1785\u17c6\u1793\u17bd\u1793 > \u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179a\u17b6\u1794\u17cb\u1790\u1799\u1780\u17d2\u179a\u17c4\u1799:", \u1785\u17c6\u1793\u17bd\u1793)\n    \u1785\u17c6\u1793\u17bd\u1793 = \u1785\u17c6\u1793\u17bd\u1793 - \u17e1\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\ud83d\ude80 \u1794\u17b6\u1789\u17cb\u1794\u1784\u17d2\u17a0\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799!")',null,null)
A.hf=w([A.rz,A.t5,A.bd],x.i)
A.tI=new B.a7("while-loop",A.hf,null)
A.mx=new C.a("\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loops) ",null)
A.pB=new B.O("#for-loop",null,"heading-anchor",null,null,null,A.c,null)
A.fj=w([A.mx,A.pB],x.i)
A.rA=new B.a6(A.fj,null)
A.lZ=new C.a(" (for loop) \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u179a\u17b6\u1794\u17cb\u1785\u17c6\u1793\u17bd\u1793\u1787\u17bb\u17c6\u178a\u17c2\u179b\u1798\u17b6\u1793\u1780\u17c6\u178e\u178f\u17cb\u1785\u17d2\u1794\u17b6\u179f\u17cb\u179b\u17b6\u179f\u17cb\u17d6",null)
A.d4=w([A.ai,A.aR,A.lZ],x.i)
A.tm=new B.J(null,null,A.d4,null)
A.be=new B.V("for_loop.khmer","KHMER",'# \u1798\u17c1\u1782\u17bb\u178e \u17e5\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u178f\u17b6\u179a\u17b6\u1784\u1798\u17c1\u1782\u17bb\u178e \u17e5 ---")\n\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e1; i <= \u17e5; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17e5 x", i, "=", \u17e5 * i)\n}',null,null)
A.h7=w([A.rA,A.tm,A.be],x.i)
A.tG=new B.a7("for-loop",A.h7,null)
A.fT=w([A.tN,A.tI,A.tG],x.i)
A.bD=new B.aO(A.fT,null)
A.kq=new C.a("\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions) ",null)
A.pv=new B.O("#functions",null,"heading-anchor",null,null,null,A.c,null)
A.dY=w([A.kq,A.pv],x.i)
A.rw=new B.a6(A.dY,null)
A.lo=new C.a("\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.m4=new C.a(" \u1793\u17b7\u1784\u1794\u1789\u17d2\u1787\u17bc\u1793\u178f\u1798\u17d2\u179b\u17c3\u178f\u17d2\u179a\u17a1\u1794\u17cb\u1798\u1780\u179c\u17b7\u1789\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.n_=new C.a(" (return)\u17d6",null)
A.dJ=w([A.lo,A.Y,A.m4,A.aT,A.n_],x.i)
A.ta=new B.J(null,null,A.dJ,null)
A.bo=new B.V("functions.khmer","KHMER",'# \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17bb\u1780\u17c4\u178e\u1780\u17c2\u1784\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u1794\u178e\u17d2\u178f\u17c4\u1799, \u1791\u1791\u17b9\u1784) {\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u1794\u178e\u17d2\u178f\u17c4\u1799 * \u1791\u1791\u17b9\u1784\n}\n\n\u178f\u17b6\u17c6\u1784 \u1795\u17d2\u1791\u17c3 = \u1782\u178e\u1793\u17b6\u1795\u17d2\u1791\u17c3(\u17e1\u17e0, \u17e5)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u17d2\u1791\u17c3\u1780\u17d2\u179a\u17a1\u17b6\u179f\u179a\u17bb\u1794\u1782\u17ba:", \u1795\u17d2\u1791\u17c3, "\u1798\u17c9\u17c2\u178f\u17d2\u179a\u1780\u17b6\u179a\u17c9\u17c1")',null,null)
A.cw=w([A.rw,A.ta,A.bo],x.i)
A.tF=new B.a7("functions",A.cw,null)
A.kO=new C.a("Recursion (\u1780\u17bc\u178a Fibonacci) ",null)
A.pJ=new B.O("#recursion",null,"heading-anchor",null,null,null,A.c,null)
A.ix=w([A.kO,A.pJ],x.i)
A.ry=new B.a6(A.ix,null)
A.ln=new C.a("KhmerLang \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u17a0\u17c5\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784 (Recursive Functions) \u1799\u17c9\u17b6\u1784\u179a\u179b\u17bc\u1793\u17d6",null)
A.cL=w([A.ln],x.i)
A.tr=new B.J(null,null,A.cL,null)
A.bp=new B.V("fibonacci.khmer","KHMER",'# \u1780\u17bc\u178a\u179a\u1780\u179b\u17c1\u1781 Fibonacci \u178f\u17b6\u1798\u1794\u17c2\u1794 Recursive\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}',null,null)
A.fn=w([A.ry,A.tr,A.bp],x.i)
A.tQ=new B.a7("recursion",A.fn,null)
A.nl=new C.a("\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (Object-Oriented Programming) ",null)
A.pP=new B.O("#classes",null,"heading-anchor",null,null,null,A.c,null)
A.hM=w([A.nl,A.pP],x.i)
A.rv=new B.a6(A.hM,null)
A.lA=new C.a("KhmerLang \u1782\u17b6\u17c6\u1791\u17d2\u179a\u1780\u17b6\u179a\u179f\u179a\u179f\u17c1\u179a\u1794\u17d2\u179a\u17bc\u1780\u17d2\u179a\u17b6\u1798\u178f\u17b6\u1798\u1794\u17c2\u1794 OOP \u1796\u17c1\u1789\u179b\u17c1\u1789\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1794\u1784\u17d2\u1780\u17be\u178f\u1782\u17c6\u179a\u17bc\u1790\u17d2\u1793\u17b6\u1780\u17cb\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.n3=new C.a(" (Class) \u1793\u17b7\u1784\u1794\u1784\u17d2\u1780\u17be\u178f Constructor \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be ",null)
A.mC=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f(...)",null)
A.fD=w([A.mC],x.i)
A.qt=new B.f(null,A.fD,null)
A.e1=w([A.lA,A.a0,A.n3,A.qt,A.u],x.i)
A.tj=new B.J(null,null,A.e1,null)
A.lb=new C.a("\u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u1784\u17d2\u1780\u17be\u178f Instance \u1790\u17d2\u1798\u17b8\u1793\u17c3\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.nU=new C.a(" (New)\u17d6",null)
A.eX=w([A.lb,A.aO,A.nU],x.i)
A.t9=new B.J(null,null,A.eX,null)
A.bm=new B.V("person_class.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1798\u1793\u17bb\u179f\u17d2\u179f {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7, \u17a2\u17b6\u1799\u17bb) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n        \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb = \u17a2\u17b6\u1799\u17bb\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1787\u1798\u17d2\u179a\u17b6\u1794\u179f\u17bd\u179a! \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7", \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u17a2\u17b6\u1799\u17bb", \u1793\u17c1\u17c7.\u17a2\u17b6\u1799\u17bb, "\u1786\u17d2\u1793\u17b6\u17c6")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1 = \u1790\u17d2\u1798\u17b8 \u1798\u1793\u17bb\u179f\u17d2\u179f("\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784", \u17e2\u17e1)\n\u1794\u17bb\u1782\u17d2\u1782\u179b\u17e1.\u178e\u17c2\u1793\u17b6\u17c6\u1781\u17d2\u179b\u17bd\u1793()',null,null)
A.bT=w([A.rv,A.tj,A.t9,A.bm],x.i)
A.tD=new B.a7("classes",A.bT,null)
A.kC=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (OOP Inheritance: `\u1794\u1793\u17d2\u178f\u1796\u17b8`) ",null)
A.pK=new B.O("#inheritance",null,"heading-anchor",null,null,null,A.c,null)
A.j9=w([A.kC,A.pK],x.i)
A.ru=new B.a6(A.j9,null)
A.ox=new C.a("\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1 (Superclass) \u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1792\u17d2\u179c\u17be\u17a1\u17be\u1784\u178a\u17c4\u1799\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.lx=new C.a(" (extends)\u17d4 \u1790\u17d2\u1793\u17b6\u1780\u17cb\u1780\u17bc\u1793 (Subclass) \u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1799\u1780\u179b\u1780\u17d2\u1781\u178e\u17c8\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7 \u1793\u17b7\u1784\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u1796\u17b8\u1790\u17d2\u1793\u17b6\u1780\u17cb\u1798\u17c1\u178a\u17c4\u1799\u179f\u17d2\u179c\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u17d6",null)
A.iO=w([A.ox,A.aS,A.lx],x.i)
A.tk=new B.J(null,null,A.iO,null)
A.bh=new B.V("inheritance.khmer","KHMER",'\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n# \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1796\u17b8 \u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()',null,null)
A.bX=w([A.ru,A.tk,A.bh],x.i)
A.tT=new B.a7("inheritance",A.bX,null)
A.i3=w([A.tF,A.tQ,A.tD,A.tT],x.i)
A.bE=new B.aO(A.i3,null)
A.ls=new C.a("\u17a2\u1790\u17c1\u179a \u1793\u17b7\u1784\u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables & Data Types) ",null)
A.pF=new B.O("#variables",null,"heading-anchor",null,null,null,A.c,null)
A.fx=w([A.ls,A.pF],x.i)
A.rt=new B.a6(A.fx,null)
A.lv=new C.a("\u1793\u17c5\u1780\u17d2\u1793\u17bb\u1784\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1799\u17be\u1784\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.kT=new C.a(" (Let) \u178a\u17be\u1798\u17d2\u1794\u17b8\u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u17d4 \u17a2\u1790\u17c1\u179a\u1780\u17d2\u1793\u17bb\u1784 KhmerLang \u1782\u17ba dynamic-typed \u1798\u17b6\u1793\u1793\u17d0\u1799\u1790\u17b6\u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1795\u17d2\u1791\u17bb\u1780\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u1787\u17b6 \u179b\u17c1\u1781, \u17a2\u1780\u17d2\u179f\u179a (String), Boolean, \u17ac Null \u1794\u17b6\u1793\u178a\u17c4\u1799\u179f\u17c1\u179a\u17b8\u17d4",null)
A.it=w([A.lv,A.a_,A.kT],x.i)
A.th=new B.J(null,null,A.it,null)
A.lH=new C.a("\u179b\u17c1\u1781 (Numbers): ",null)
A.dC=w([A.lH],x.i)
A.u6=new B.Z(A.dC,null)
A.mh=new C.a("\u1782\u17b6\u17c6\u1791\u17d2\u179a\u1791\u17b6\u17c6\u1784\u179b\u17c1\u1781\u17a2\u17b6\u179a\u17c9\u17b6\u1794\u17cb (",null)
A.of=new C.a("10",null)
A.e2=w([A.of],x.i)
A.qn=new B.f(null,A.e2,null)
A.kQ=new C.a("3.14",null)
A.fB=w([A.kQ],x.i)
A.r3=new B.f(null,A.fB,null)
A.lq=new C.a(") \u1793\u17b7\u1784\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (",null)
A.li=new C.a("\u17e1\u17e0",null)
A.ib=w([A.li],x.i)
A.qP=new B.f(null,A.ib,null)
A.mL=new C.a("\u17e3.\u17e1\u17e4",null)
A.eg=w([A.mL],x.i)
A.ql=new B.f(null,A.eg,null)
A.o9=new C.a(")\u17d4",null)
A.fN=w([A.u6,A.mh,A.qn,A.m,A.r3,A.lq,A.qP,A.m,A.ql,A.o9],x.i)
A.rV=new B.Y(null,null,null,A.fN,null)
A.ko=new C.a("\u17a2\u1780\u17d2\u179f\u179a (Strings): ",null)
A.ig=w([A.ko],x.i)
A.ua=new B.Z(A.ig,null)
A.m5=new C.a("\u179f\u179a\u179f\u17c1\u179a\u1793\u17c5\u1785\u1793\u17d2\u179b\u17c4\u17c7\u179f\u1789\u17d2\u1789\u17b6\u179f\u1798\u17d2\u179a\u1784\u17cb ",null)
A.lW=new C.a('"..."',null)
A.hn=w([A.lW],x.i)
A.qy=new B.f(null,A.hn,null)
A.mS=new C.a(" \u17ac ",null)
A.nt=new C.a("'...'",null)
A.ed=w([A.nt],x.i)
A.q3=new B.f(null,A.ed,null)
A.ff=w([A.ua,A.m5,A.qy,A.mS,A.q3,A.u],x.i)
A.rW=new B.Y(null,null,null,A.ff,null)
A.ob=new C.a("\u1794\u17ca\u17bc\u179b\u17b8\u1793 (Booleans): ",null)
A.ji=w([A.ob],x.i)
A.ub=new B.Z(A.ji,null)
A.ak=new C.a("\u1794\u17d2\u179a\u17be\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 ",null)
A.m9=new C.a(" (True) \u1793\u17b7\u1784 ",null)
A.mD=new C.a(" (False)\u17d4",null)
A.cq=w([A.ub,A.ak,A.X,A.m9,A.aL,A.mD],x.i)
A.t3=new B.Y(null,null,null,A.cq,null)
A.oq=new C.a("\u1791\u1791\u17c1 (Null): ",null)
A.d5=w([A.oq],x.i)
A.ud=new B.Z(A.d5,null)
A.mj=new C.a(" \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u1798\u17d2\u179b\u17c3\u178a\u17c2\u179b\u1782\u17d2\u1798\u17b6\u1793\u1791\u17b7\u1793\u17d2\u1793\u1793\u17d0\u1799\u17d4",null)
A.ey=w([A.ud,A.ak,A.aJ,A.mj],x.i)
A.t1=new B.Y(null,null,null,A.ey,null)
A.iD=w([A.rV,A.rW,A.t3,A.t1],x.i)
A.wX=new B.bc(null,null,A.iD,null)
A.bf=new B.V("variables.khmer","KHMER",'# \u1794\u17d2\u179a\u1780\u17b6\u179f\u17a2\u1790\u17c1\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7\n\u178f\u17b6\u17c6\u1784 \u1788\u17d2\u1798\u17c4\u17c7 = "\u179c\u17c9\u17c1\u1784\u1788\u17bd\u1784"\n\u178f\u17b6\u17c6\u1784 \u17a2\u17b6\u1799\u17bb = \u17e2\u17e1\n\u178f\u17b6\u17c6\u1784 \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f = \u1796\u17b7\u178f\n\u178f\u17b6\u17c6\u1784 \u1780\u17b6\u179a\u1784\u17b6\u179a = \u1791\u1791\u17c1\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1788\u17d2\u1798\u17c4\u17c7:", \u1788\u17d2\u1798\u17c4\u17c7)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u17a2\u17b6\u1799\u17bb:", \u17a2\u17b6\u1799\u17bb)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u179f\u17d2\u1790\u17b6\u1793\u1797\u17b6\u1796\u1787\u17b6\u1793\u17b7\u179f\u17d2\u179f\u17b7\u178f:", \u1787\u17b6\u179f\u17b7\u179f\u17d2\u179f)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1780\u17b6\u179a\u1784\u17b6\u179a\u1794\u1785\u17d2\u1785\u17bb\u1794\u17d2\u1794\u1793\u17d2\u1793:", \u1780\u17b6\u179a\u1784\u17b6\u179a)',null,null)
A.je=w([A.rt,A.th,A.wX,A.bf],x.i)
A.tK=new B.a7("variables",A.je,null)
A.lS=new C.a("\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Khmer Numerals & Math) ",null)
A.pT=new B.O("#numerals",null,"heading-anchor",null,null,null,A.c,null)
A.fY=w([A.lS,A.pT],x.i)
A.rJ=new B.a6(A.fY,null)
A.kY=new C.a("\u1785\u17c6\u178e\u17bb\u1785\u17a2\u179f\u17d2\u1785\u17b6\u179a\u17d2\u1799\u1794\u17c6\u1795\u17bb\u178f\u179a\u1794\u179f\u17cb KhmerLang \u1782\u17ba\u1780\u17b6\u179a\u1782\u17b6\u17c6\u1791\u17d2\u179a\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a ",null)
A.nK=new C.a("\u17e0, \u17e1, \u17e2, \u17e3, \u17e4, \u17e5, \u17e6, \u17e7, \u17e8, \u17e9",null)
A.dj=w([A.nK],x.i)
A.u7=new B.Z(A.dj,null)
A.nn=new C.a(" \u1787\u17b6\u179b\u17c1\u1781\u1796\u17b7\u178f\u1794\u17d2\u179a\u17b6\u1780\u178a\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u179a\u17b7\u178f Lexer \u1793\u17b7\u1784 Parser\u17d4 \u17a2\u17d2\u1793\u1780\u17a2\u17b6\u1785\u1799\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\u1798\u1780\u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 \u17ac\u1794\u17d2\u179a\u17c0\u1794\u1792\u17c0\u1794\u1794\u17b6\u1793\u178a\u17c4\u1799\u179a\u179b\u17bc\u1793!",null)
A.ea=w([A.kY,A.u7,A.nn],x.i)
A.tq=new B.J(null,null,A.ea,null)
A.kZ=new C.a("\u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Operator)",null)
A.im=w([A.kZ],x.i)
A.wg=new B.ap(A.im,null)
A.kL=new C.a("\u17a2\u178f\u17d2\u1790\u1793\u17d0\u1799 (Description)",null)
A.ds=w([A.kL],x.i)
A.wl=new B.ap(A.ds,null)
A.l1=new C.a("\u17a7\u1791\u17b6\u17a0\u179a\u178e\u17cd (Example)",null)
A.bQ=w([A.l1],x.i)
A.wi=new B.ap(A.bQ,null)
A.lB=new C.a("\u179b\u1791\u17d2\u1792\u1795\u179b (Result)",null)
A.fc=w([A.lB],x.i)
A.wk=new B.ap(A.fc,null)
A.d9=w([A.wg,A.wl,A.wi,A.wk],x.i)
A.wV=new B.C(A.d9,null)
A.f7=w([A.wV],x.i)
A.wp=new B.cm(A.f7,null)
A.ll=new C.a("+",null)
A.dA=w([A.ll],x.i)
A.r_=new B.f(null,A.dA,null)
A.cH=w([A.r_],x.i)
A.v2=new B.d(A.cH,null)
A.m6=new C.a("\u1794\u17bc\u1780\u179b\u17c1\u1781 \u17ac\u1797\u17d2\u1787\u17b6\u1794\u17cb\u17a2\u1780\u17d2\u179f\u179a",null)
A.cF=w([A.m6],x.i)
A.vE=new B.d(A.cF,null)
A.o7=new C.a("\u17e1\u17e0 + \u17e5",null)
A.dz=w([A.o7],x.i)
A.qD=new B.f(null,A.dz,null)
A.i_=w([A.qD],x.i)
A.vb=new B.d(A.i_,null)
A.kH=new C.a("\u17e1\u17e5",null)
A.cA=w([A.kH],x.i)
A.q9=new B.f(null,A.cA,null)
A.e3=w([A.q9],x.i)
A.w6=new B.d(A.e3,null)
A.fJ=w([A.v2,A.vE,A.vb,A.w6],x.i)
A.wF=new B.C(A.fJ,null)
A.kn=new C.a("-",null)
A.fH=w([A.kn],x.i)
A.qd=new B.f(null,A.fH,null)
A.hK=w([A.qd],x.i)
A.vi=new B.d(A.hK,null)
A.kz=new C.a("\u178a\u1780\u179b\u17c1\u1781",null)
A.fV=w([A.kz],x.i)
A.uJ=new B.d(A.fV,null)
A.mT=new C.a("\u17e2\u17e0 - \u17e7",null)
A.iG=w([A.mT],x.i)
A.qB=new B.f(null,A.iG,null)
A.et=w([A.qB],x.i)
A.uX=new B.d(A.et,null)
A.kx=new C.a("\u17e1\u17e3",null)
A.jf=w([A.kx],x.i)
A.pX=new B.f(null,A.jf,null)
A.jh=w([A.pX],x.i)
A.w9=new B.d(A.jh,null)
A.ch=w([A.vi,A.uJ,A.uX,A.w9],x.i)
A.wu=new B.C(A.ch,null)
A.ky=new C.a("*",null)
A.bV=w([A.ky],x.i)
A.qO=new B.f(null,A.bV,null)
A.h6=w([A.qO],x.i)
A.vg=new B.d(A.h6,null)
A.n9=new C.a("\u1782\u17bb\u178e\u179b\u17c1\u1781",null)
A.f4=w([A.n9],x.i)
A.vN=new B.d(A.f4,null)
A.lh=new C.a("\u17e6 * \u17e4",null)
A.fk=w([A.lh],x.i)
A.qF=new B.f(null,A.fk,null)
A.dd=w([A.qF],x.i)
A.vu=new B.d(A.dd,null)
A.mV=new C.a("\u17e2\u17e4",null)
A.dU=w([A.mV],x.i)
A.r8=new B.f(null,A.dU,null)
A.h_=w([A.r8],x.i)
A.uT=new B.d(A.h_,null)
A.d8=w([A.vg,A.vN,A.vu,A.uT],x.i)
A.wD=new B.C(A.d8,null)
A.kg=new C.a("/",null)
A.fS=w([A.kg],x.i)
A.qm=new B.f(null,A.fS,null)
A.en=w([A.qm],x.i)
A.uF=new B.d(A.en,null)
A.kM=new C.a("\u1785\u17c2\u1780\u179b\u17c1\u1781",null)
A.d7=w([A.kM],x.i)
A.w4=new B.d(A.d7,null)
A.lQ=new C.a("\u17e5\u17e0 / \u17e2",null)
A.jd=w([A.lQ],x.i)
A.q4=new B.f(null,A.jd,null)
A.cp=w([A.q4],x.i)
A.v0=new B.d(A.cp,null)
A.mI=new C.a("\u17e2\u17e5",null)
A.cP=w([A.mI],x.i)
A.qK=new B.f(null,A.cP,null)
A.dX=w([A.qK],x.i)
A.v4=new B.d(A.dX,null)
A.fe=w([A.uF,A.w4,A.v0,A.v4],x.i)
A.wR=new B.C(A.fe,null)
A.nr=new C.a("%",null)
A.ha=w([A.nr],x.i)
A.qV=new B.f(null,A.ha,null)
A.hT=w([A.qV],x.i)
A.va=new B.d(A.hT,null)
A.lR=new C.a("\u179f\u17c6\u178e\u179b\u17cb\u1793\u17c3\u1780\u17b6\u179a\u1785\u17c2\u1780 (Modulo)",null)
A.ih=w([A.lR],x.i)
A.w8=new B.d(A.ih,null)
A.n5=new C.a("\u17e1\u17e0 % \u17e3",null)
A.dk=w([A.n5],x.i)
A.qf=new B.f(null,A.dk,null)
A.eQ=w([A.qf],x.i)
A.uR=new B.d(A.eQ,null)
A.kR=new C.a("\u17e1",null)
A.hr=w([A.kR],x.i)
A.q5=new B.f(null,A.hr,null)
A.hg=w([A.q5],x.i)
A.vy=new B.d(A.hg,null)
A.er=w([A.va,A.w8,A.uR,A.vy],x.i)
A.wI=new B.C(A.er,null)
A.nM=new C.a("==",null)
A.c7=w([A.nM],x.i)
A.qS=new B.f(null,A.c7,null)
A.om=new C.a("!=",null)
A.i1=w([A.om],x.i)
A.pZ=new B.f(null,A.i1,null)
A.iV=w([A.qS,A.m,A.pZ],x.i)
A.vm=new B.d(A.iV,null)
A.lJ=new C.a("\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6, \u1798\u17b7\u1793\u179f\u17d2\u1798\u17be\u1782\u17d2\u1793\u17b6",null)
A.cB=w([A.lJ],x.i)
A.vG=new B.d(A.cB,null)
A.mc=new C.a("\u17e5 == \u17e5",null)
A.db=w([A.mc],x.i)
A.q_=new B.f(null,A.db,null)
A.c4=w([A.q_],x.i)
A.vI=new B.d(A.c4,null)
A.hI=w([A.vm,A.vG,A.vI,A.a1],x.i)
A.wG=new B.C(A.hI,null)
A.mq=new C.a("\u1793\u17b7\u1784",null)
A.fM=w([A.mq],x.i)
A.r4=new B.f(null,A.fM,null)
A.lw=new C.a("\u17ac",null)
A.hk=w([A.lw],x.i)
A.qh=new B.f(null,A.hk,null)
A.kE=new C.a("\u1798\u17b7\u1793",null)
A.cC=w([A.kE],x.i)
A.qz=new B.f(null,A.cC,null)
A.hU=w([A.r4,A.m,A.qh,A.m,A.qz],x.i)
A.vh=new B.d(A.hU,null)
A.l5=new C.a("\u178f\u1780\u17d2\u1780\u179c\u17b7\u1787\u17d2\u1787\u17b6 AND, OR, NOT",null)
A.iU=w([A.l5],x.i)
A.uI=new B.d(A.iU,null)
A.lr=new C.a("(\u17e5 > \u17e2) \u1793\u17b7\u1784 (\u17e3 < \u17e4)",null)
A.ec=w([A.lr],x.i)
A.qx=new B.f(null,A.ec,null)
A.cd=w([A.qx],x.i)
A.uU=new B.d(A.cd,null)
A.h8=w([A.vh,A.uI,A.uU,A.a1],x.i)
A.wJ=new B.C(A.h8,null)
A.dp=w([A.wF,A.wu,A.wD,A.wR,A.wI,A.wG,A.wJ],x.i)
A.ux=new B.cl(A.dp,null)
A.dt=w([A.wp,A.ux],x.i)
A.uu=new B.ck(A.dt,null)
A.dn=w([A.uu],x.i)
A.re=new B.r(null,"table-responsive",null,null,null,A.dn,null)
A.bq=new B.V("khmer_math.khmer","KHMER",'# \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1798\u17bd\u1799\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)',null,null)
A.d_=w([A.rJ,A.tq,A.re,A.bq],x.i)
A.tL=new B.a7("numerals",A.d_,null)
A.o2=new C.a("\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 & \u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb (Punctuations) ",null)
A.py=new B.O("#punctuations",null,"heading-anchor",null,null,null,A.c,null)
A.fR=w([A.o2,A.py],x.i)
A.rx=new B.a6(A.fR,null)
A.ng=new C.a("KhmerLang \u1794\u178f\u17cb\u1794\u17c2\u1793\u178f\u17b6\u1798\u179a\u1785\u1793\u17b6\u1794\u17d0\u1791\u17d2\u1798\u1781\u17d2\u1798\u17c2\u179a \u178a\u17c4\u1799\u17a2\u1793\u17bb\u1789\u17d2\u1789\u17b6\u178f\u17b1\u17d2\u1799\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7\u1781\u17d2\u1798\u17c2\u179a\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 \u17ac\u1780\u17c6\u178e\u178f\u17cb\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c\u17d6",null)
A.fb=w([A.ng],x.i)
A.ts=new B.J(null,null,A.fb,null)
A.j7=w([A.u],x.i)
A.qW=new B.f(null,A.j7,null)
A.mr=new C.a(" (\u1781\u178e\u17d2\u178c) \u17ac ",null)
A.ks=new C.a(";",null)
A.i4=w([A.ks],x.i)
A.r9=new B.f(null,A.i4,null)
A.mP=new C.a(" (Semicolon)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1794\u1789\u17d2\u1785\u1794\u17cb\u1794\u17d2\u179a\u1799\u17c4\u1782 (Statement Terminator)\u17d4 \u1780\u17cf\u17a2\u17b6\u1785\u179a\u17c6\u179b\u1784\u1794\u17b6\u1793\u178a\u17c2\u179a\u1794\u17d2\u179a\u179f\u17b7\u1793\u1794\u17be\u1785\u17bb\u17c7\u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1790\u17d2\u1798\u17b8\u17d4",null)
A.dc=w([A.qW,A.mr,A.r9,A.mP],x.i)
A.t2=new B.Y(null,null,null,A.dc,null)
A.l2=new C.a("\u17d5",null)
A.dm=w([A.l2],x.i)
A.r0=new B.f(null,A.dm,null)
A.nq=new C.a(" (\u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793)\u17d6 \u179f\u1789\u17d2\u1789\u17b6\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1790\u17b6\u1781\u178e\u17d2\u178c \u17ac\u1794\u1789\u17d2\u1785\u1794\u17cb\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u17d4",null)
A.da=w([A.r0,A.nq],x.i)
A.t0=new B.Y(null,null,null,A.da,null)
A.is=w([A.A],x.i)
A.qs=new B.f(null,A.is,null)
A.oo=new C.a(" (\u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785)\u17d6 \u1794\u17d2\u179a\u17be\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17c6\u178e\u178f\u17cb\u1794\u17d2\u179b\u17bb\u1780\u1780\u17bc\u178a \u17ac\u179c\u17b7\u1792\u17b8\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a\u17d4",null)
A.hx=w([A.qs,A.oo],x.i)
A.rZ=new B.Y(null,null,null,A.hx,null)
A.d6=w([A.t2,A.t0,A.rZ],x.i)
A.wZ=new B.bc(null,null,A.d6,null)
A.bu=new B.V("punctuations.khmer","KHMER",'# \u1780\u17b6\u179a\u1794\u17d2\u179a\u17be\u179f\u1789\u17d2\u1789\u17b6\u1781\u178e\u17d2\u178c\u1781\u17d2\u1798\u17c2\u179a (\u17d4)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e9\u17e5\u17d4\n\u178f\u17b6\u17c6\u1784 \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f = "A"\u17d4\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b7\u1793\u17d2\u1791\u17bb:", \u1796\u17b7\u1793\u17d2\u1791\u17bb)\u17d4\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f:", \u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f)\u17d4',null,null)
A.cR=w([A.rx,A.ts,A.wZ,A.bu],x.i)
A.tH=new B.a7("punctuations",A.cR,null)
A.c0=w([A.tK,A.tL,A.tH],x.i)
A.bF=new B.aO(A.c0,null)
A.bI=new B.hw("text",0,"text")
A.bH=new B.em(null)
A.aY=new B.e4(null)
A.bv=new B.ee(null)
A.bG=new B.el(null)
A.jP=new B.eK(null)
A.cJ=w([A.bH,A.aY,A.bv,A.bG,A.jP],x.i)
A.ro=new B.r(null,"content-wrapper",null,null,null,A.cJ,null)
A.dL=w([A.ro],x.i)
A.k0=new B.U("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)","Introduction & Vision","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","intro overview vision cambodia \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 \u1782\u17c4\u179b\u1794\u17c6\u178e\u1784")
A.k4=new B.U("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)","Installation & Toolchain","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check")
A.k7=new B.U("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)","First Program","\ud83d\ude80 \u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u178a\u17c6\u1794\u17bc\u1784","hello world \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 \u1794\u1784\u17d2\u17a0\u17b6\u1789 print first program")
A.k6=new B.U("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)","Variables & Data Types","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","variables data types \u178f\u17b6\u17c6\u1784 \u17a2\u1790\u17c1\u179a let string number boolean \u1796\u17b7\u178f \u1798\u17b7\u1793\u1796\u17b7\u178f \u1791\u1791\u17c1 null dynamic")
A.jV=new B.U("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)","Khmer Numerals & Math Operators","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","numerals math \u17e0 \u17e1 \u17e2 \u17e3 \u17e4 \u17e5 \u17e6 \u17e7 \u17e8 \u17e9 \u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a \u1794\u17bc\u1780 \u178a\u1780 \u1782\u17bb\u178e \u1785\u17c2\u1780 modulo \u1793\u17b7\u1784 \u17ac \u1798\u17b7\u1793")
A.k1=new B.U("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)","Khmer Punctuations","\ud83d\udca1 \u1798\u17bc\u179b\u178a\u17d2\u178b\u17b6\u1793\u1782\u17d2\u179a\u17b9\u17c7","punctuations \u1781\u178e\u17d2\u178c \u1794\u179a\u17b7\u1799\u17c4\u179f\u17b6\u1793 \u1782\u17bc\u179f\u1796\u17b8\u179a\u1785\u17bb\u1785 semicolon statement terminator")
A.k3=new B.U("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f","Conditionals (If / Else If / Else)","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","conditionals if else elif \u1794\u17be \u17ac\u1794\u17be \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f logic \u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c")
A.jY=new B.U("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)","While Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","while loop \u1781\u178e\u17c8 \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 iteration repeat")
A.jZ=new B.U("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)","For Loops","\ud83d\udd00 \u179b\u17c6\u17a0\u17bc\u179a\u1780\u17b6\u179a\u1784\u17b6\u179a","for loop \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb \u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 count step range")
A.jW=new B.U("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Functions)","Function Declaration","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","function \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u178f\u17d2\u179a\u17a1\u1794\u17cb return parameters arguments methods \u179c\u17b7\u1792\u17b8")
A.k_=new B.U("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)","Recursive Functions & Fibonacci","\u26a1 \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd","recursion recursive fibonacci \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8 call self \u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u1781\u17d2\u179b\u17bd\u1793\u17af\u1784")
A.k2=new B.U("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (OOP)","Classes & Objects","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","class oop \u1790\u17d2\u1793\u17b6\u1780\u17cb \u1794\u1784\u17d2\u1780\u17be\u178f constructor \u1793\u17c1\u17c7 this \u1790\u17d2\u1798\u17b8 new object instance")
A.k5=new B.U("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793\u1790\u17d2\u1793\u17b6\u1780\u17cb (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)","Inheritance & Subclasses","\ud83c\udfdb\ufe0f \u179f\u179a\u179f\u17c1\u179a\u1780\u17bc\u178a\u178f\u17b6\u1798\u179c\u178f\u17d2\u1790\u17bb","inheritance extends \u1794\u1793\u17d2\u178f\u1796\u17b8 subclass superclass oop \u1794\u1793\u17d2\u178f\u179c\u17c1\u1793")
A.jT=new B.U("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)","Standard Built-in Functions","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","builtins standard functions \u1794\u1784\u17d2\u17a0\u17b6\u1789 \u1794\u17d2\u179a\u179c\u17c2\u1784 \u1794\u17d2\u179a\u1797\u17c1\u1791 \u1794\u1793\u17d2\u1790\u17c2\u1798 length print type push")
A.jU=new B.U("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs (Flutter / Web)","Developer Tools & IDEs","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","ides tools flutter ide web ide vscode editor extension cli terminal")
A.jX=new B.U("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)","Syntax Cheat Sheet Table","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","cheat sheet table syntax keywords \u178f\u17b6\u179a\u17b6\u1784 \u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 summary reference")
A.jS=new B.U("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a\u1795\u17d2\u1791\u17b6\u179b\u17cb","Live Interactive Web Playground","\ud83d\udee0\ufe0f \u17a7\u1794\u1780\u179a\u178e\u17cd & \u17af\u1780\u179f\u17b6\u179a\u1799\u17c4\u1784","playground runner editor live code online ide \u179f\u17b6\u1780\u179b\u17d2\u1794\u1784 \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799 run web")
A.a7=w([A.k0,A.k4,A.k7,A.k6,A.jV,A.k1,A.k3,A.jY,A.jZ,A.jW,A.k_,A.k2,A.k5,A.jT,A.jU,A.jX,A.jS],C.b7("z<U>"))
A.y=w([],x.i)
A.pe=new B.a4("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798")
A.pr=new B.a4("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798")
A.pg=new B.a4("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784")
A.pf=new B.a4("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3")
A.pj=new B.a4("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8")
A.po=new B.a4("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7")
A.pl=new B.a4("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be/\u17ac\u1794\u17be/\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f")
A.pt=new B.a4("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8")
A.pu=new B.a4("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb")
A.pm=new B.a4("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd")
A.ph=new B.a4("recursion","Recursion (Fibonacci)")
A.pn=new B.a4("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor")
A.pq=new B.a4("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)")
A.pk=new B.a4("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a")
A.pi=new B.a4("ides","\u17a7\u1794\u1780\u179a\u178e\u17cd & IDEs")
A.ps=new B.a4("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7")
A.pp=new B.a4("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a")
A.hs=w([A.pe,A.pr,A.pg,A.pf,A.pj,A.po,A.pl,A.pt,A.pu,A.pm,A.ph,A.pn,A.pq,A.pk,A.pi,A.ps,A.pp],C.b7("z<a4>"))
A.iY=w(['"',"'","\u201c","\u201d","\u2018","\u2019"],x.s)
A.jD={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}
A.jl=new C.K(A.jD,["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],x.w)
A.jL={"\u17e0":0,"\u17e1":1,"\u17e2":2,"\u17e3":3,"\u17e4":4,"\u17e5":5,"\u17e6":6,"\u17e7":7,"\u17e8":8,"\u17e9":9}
A.aa=new C.K(A.jL,["0","1","2","3","4","5","6","7","8","9"],x.w)
A.jE={hello:0,math:1,fibo:2,oop:3,grades:4}
A.jm=new C.K(A.jE,[y.h,'# \u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)\n\u178f\u17b6\u17c6\u1784 \u1780 = \u17e1\u17e5\n\u178f\u17b6\u17c6\u1784 \u1781 = \u17e5\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1794\u17bc\u1780:", \u1780 + \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u178a\u1780:", \u1780 - \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1782\u17bb\u178e:", \u1780 * \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1795\u179b\u1785\u17c2\u1780:", \u1780 / \u1781)\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17be \u1780 \u1792\u17c6\u1787\u17b6\u1784 \u1781 \u17ac\u1791\u17c1?", \u1780 > \u1781)','# \u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)\n\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n) {\n    \u1794\u17be (n <= \u17e0) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e0\n    }\n    \u1794\u17be (n == \u17e1) {\n        \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17e1\n    }\n    \u178f\u17d2\u179a\u17a1\u1794\u17cb \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e1) + \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(n - \u17e2)\n}\n\n\u1794\u1784\u17d2\u17a0\u17b6\u1789("--- \u179b\u17c6\u178a\u17b6\u1794\u17cb Fibonacci \u1796\u17b8 \u17e0 \u178a\u179b\u17cb \u17e7 ---")\n\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (\u178f\u17b6\u17c6\u1784 i = \u17e0; i <= \u17e7; i = i + \u17e1) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("F(", i, ") =", \u17a0\u17d2\u179c\u17b8\u1794\u17bc\u178e\u17b6\u1788\u17b8(i))\n}','# \u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u179f\u178f\u17d2\u179c {\n    \u1794\u1784\u17d2\u1780\u17be\u178f(\u1788\u17d2\u1798\u17c4\u17c7) {\n        \u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7 = \u1788\u17d2\u1798\u17c4\u17c7\n    }\n\n    \u179c\u17b7\u1792\u17b8 \u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1780\u17c6\u1796\u17bb\u1784\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784...")\n    }\n}\n\n\u1790\u17d2\u1793\u17b6\u1780\u17cb \u1786\u17d2\u1780\u17c2 \u1794\u1793\u17d2\u178f\u1796\u17b8 \u179f\u178f\u17d2\u179c {\n    \u179c\u17b7\u1792\u17b8 \u1796\u17d2\u179a\u17bb\u179f() {\n        \u1794\u1784\u17d2\u17a0\u17b6\u1789(\u1793\u17c1\u17c7.\u1788\u17d2\u1798\u17c4\u17c7, "\u1796\u17d2\u179a\u17bb\u179f: \u179c\u17bc\u179f! \u179c\u17bc\u179f!")\n    }\n}\n\n\u178f\u17b6\u17c6\u1784 \u1782\u17bc\u1782\u17b8 = \u1790\u17d2\u1798\u17b8 \u1786\u17d2\u1780\u17c2("\u1782\u17bc\u1782\u17b8")\n\u1782\u17bc\u1782\u17b8.\u1792\u17d2\u179c\u17be\u179f\u17c6\u17a1\u17c1\u1784()\n\u1782\u17bc\u1782\u17b8.\u1796\u17d2\u179a\u17bb\u179f()','# \u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)\n\u178f\u17b6\u17c6\u1784 \u1796\u17b7\u1793\u17d2\u1791\u17bb = \u17e8\u17e5\n\n\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e9\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f A \u2014 \u179b\u17d2\u17a2\u1794\u17d2\u179a\u179f\u17be\u179a\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e8\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f B \u2014 \u179b\u17d2\u17a2\u178e\u17b6\u179f\u17cb!")\n} \u17ac\u1794\u17be (\u1796\u17b7\u1793\u17d2\u1791\u17bb >= \u17e7\u17e0) {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u1793\u17b7\u1791\u17d2\u1791\u17c1\u179f C \u2014 \u179b\u17d2\u17a2\u1794\u1784\u17d2\u1782\u17bd\u179a!")\n} \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f {\n    \u1794\u1784\u17d2\u17a0\u17b6\u1789("\u178f\u17d2\u179a\u17bc\u179c\u1781\u17b7\u178f\u1781\u17c6\u1794\u17d2\u179a\u17b9\u1784\u1794\u17d2\u179a\u17c2\u1784\u1794\u1793\u17d2\u1790\u17c2\u1798\u1791\u17c0\u178f!")\n}'],x.w)
A.jG={"\u178f\u17b6\u17c6\u1784":0,"\u1794\u1784\u17d2\u17a0\u17b6\u1789":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":8,"\u1796\u17b7\u178f":9,"\u1798\u17b7\u1793\u1796\u17b7\u178f":10,"\u1791\u1791\u17c1":11,"\u1793\u17b7\u1784":12,"\u17ac":13,"\u1798\u17b7\u1793":14,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":15,"\u179c\u17b7\u1792\u17b8":16,"\u1793\u17c1\u17c7":17,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":18,"\u1790\u17d2\u1798\u17b8":19,"\u1794\u1793\u17d2\u178f\u1796\u17b8":20}
A.D=new B.p(3,"let")
A.O=new B.p(4,"print")
A.Q=new B.p(5,"ifType")
A.F=new B.p(6,"elseIf")
A.R=new B.p(7,"elseType")
A.S=new B.p(8,"whileType")
A.T=new B.p(9,"forType")
A.B=new B.p(10,"function")
A.G=new B.p(11,"returnType")
A.an=new B.p(12,"trueType")
A.ao=new B.p(13,"falseType")
A.ap=new B.p(14,"nullType")
A.H=new B.p(15,"and")
A.I=new B.p(16,"or")
A.J=new B.p(17,"not")
A.K=new B.p(18,"classType")
A.C=new B.p(19,"method")
A.aq=new B.p(20,"thisType")
A.ar=new B.p(21,"self")
A.as=new B.p(22,"newType")
A.at=new B.p(23,"extendsType")
A.ad=new C.K(A.jG,[A.D,A.O,A.Q,A.F,A.R,A.S,A.T,A.B,A.G,A.an,A.ao,A.ap,A.H,A.I,A.J,A.K,A.C,A.aq,A.ar,A.as,A.at],C.b7("K<h,p>"))
A.jK={points:0}
A.jz=new C.K(A.jK,["5 3 19 12 5 21 5 3"],x.w)
A.jF={"\u178f\u17b6\u17c6\u1784":0,"\u17a2\u1790\u17c1\u179a":1,"\u1794\u17be":2,"\u17ac\u1794\u17be":3,"\u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f":4,"\u1781\u178e\u17c8":5,"\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb":6,"\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd":7,"\u179c\u17b7\u1792\u17b8":8,"\u178f\u17d2\u179a\u17a1\u1794\u17cb":9,"\u1790\u17d2\u1793\u17b6\u1780\u17cb":10,"\u1794\u1784\u17d2\u1780\u17be\u178f":11,"\u1793\u17c1\u17c7":12,"\u1781\u17d2\u179b\u17bd\u1793\u179c\u17b6":13,"\u1790\u17d2\u1798\u17b8":14,"\u1794\u1793\u17d2\u178f\u1796\u17b8":15,"\u1796\u17b7\u178f":16,"\u1798\u17b7\u1793\u1796\u17b7\u178f":17,"\u1791\u1791\u17c1":18,"\u1793\u17b7\u1784":19,"\u17ac":20,"\u1798\u17b7\u1793":21}
A.k8=new B.bV(A.jF,22,x.O)
A.jI={"\u1794\u1784\u17d2\u17a0\u17b6\u1789":0,"\u1794\u17d2\u179a\u179c\u17c2\u1784":1,"\u1794\u17d2\u179a\u1797\u17c1\u1791":2,"\u1794\u1793\u17d2\u1790\u17c2\u1798":3,"\u1794\u1789\u17d2\u1785\u17bc\u179b":4,"\u1794\u1798\u17d2\u179b\u17c2\u1784\u179b\u17c1\u1781":5,"\u1794\u1789\u17d2\u1788\u1794\u17cb":6}
A.k9=new B.bV(A.jI,7,x.O)
A.ka=new B.i_(4,"center")
A.ki=new C.a("\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7\u179a\u17a0\u17d0\u179f:",null)
A.lc=new C.a("ESC",null)
A.le=new C.a("\u17e5. \u1782\u178e\u1793\u17b6\u1796\u17b7\u1793\u17d2\u1791\u17bb\u179f\u17b7\u179f\u17d2\u179f (Grading System)",null)
A.lm=new C.a("\u17e2. \u1782\u178e\u1793\u17b6\u1795\u179b\u1794\u17bc\u1780\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a (Khmer Math)",null)
A.m2=new C.a("\u1780\u17bc\u178a\u1782\u17c6\u179a\u17bc: ",null)
A.mR=new C.a(" | ",null)
A.mW=new C.a("\u1794\u1784\u17d2\u1780\u17be\u178f\u17a1\u17be\u1784\u178a\u17c4\u1799\u1798\u17c4\u1791\u1793\u1797\u17b6\u1796\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1781\u17d2\u1798\u17c2\u179a\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb\u1782\u17d2\u1793\u17b6 | ",null)
A.ni=new C.a("\u17e3. \u179a\u1780\u179b\u17c1\u1781 Fibonacci (Recursion)",null)
A.nj=new C.a("\n",null)
A.nI=new C.a("\u17e1. \u179f\u17bd\u179f\u17d2\u178f\u17b8\u1796\u17b7\u1797\u1796\u179b\u17c4\u1780 (Hello World)",null)
A.nX=new C.a("\u17e4. OOP \u179f\u178f\u17d2\u179c \u1793\u17b7\u1784 \u1786\u17d2\u1780\u17c2 (Inheritance)",null)
A.al=new B.p(0,"number")
A.am=new B.p(1,"string")
A.i=new B.p(2,"identifier")
A.au=new B.p(24,"plus")
A.L=new B.p(25,"minus")
A.av=new B.p(26,"star")
A.aw=new B.p(27,"slash")
A.ax=new B.p(28,"modulo")
A.M=new B.p(29,"assign")
A.ay=new B.p(30,"eq")
A.az=new B.p(31,"neq")
A.aA=new B.p(32,"lt")
A.aB=new B.p(33,"gt")
A.aC=new B.p(34,"lte")
A.aD=new B.p(35,"gte")
A.N=new B.p(36,"dot")
A.j=new B.p(37,"lparen")
A.d=new B.p(38,"rparen")
A.v=new B.p(39,"lbrace")
A.o=new B.p(40,"rbrace")
A.P=new B.p(41,"lbracket")
A.w=new B.p(42,"rbracket")
A.n=new B.p(43,"comma")
A.k=new B.p(44,"semicolon")
A.E=new B.p(45,"colon")
A.q=new B.p(46,"eof")
A.r=new C.b0("#94a3b8")
A.V=new C.b0("#34d399")
A.oT=new B.a1("hello-world","\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u178a\u17c6\u1794\u17bc\u1784 (Hello World)",!1,null)
A.oU=new B.a1("inheritance","\u1780\u17b6\u179a\u1794\u1793\u17d2\u178f\u179c\u17c1\u1793 (`\u1794\u1793\u17d2\u178f\u1796\u17b8`)",!1,null)
A.oV=new B.a1("conditionals","\u179b\u1780\u17d2\u1781\u1781\u178e\u17d2\u178c \u1794\u17be / \u17ac\u1794\u17be / \u1795\u17d2\u179f\u17c1\u1784\u1791\u17c0\u178f",!1,null)
A.oW=new B.a1("punctuations","\u179f\u1789\u17d2\u1789\u17b6\u179c\u178e\u17d2\u178e\u1799\u17bb\u178f\u17d2\u178f\u17b7 (Punctuations)",!1,null)
A.oX=new B.a1("for-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb (For Loop)",!1,null)
A.oY=new B.a1("recursion","Recursion (\u1780\u17bc\u178a Fibonacci)",!1,null)
A.oZ=new B.a1("variables","\u17a2\u1790\u17c1\u179a & \u1794\u17d2\u179a\u1797\u17c1\u1791\u178f\u1798\u17d2\u179b\u17c3 (Variables)",!1,null)
A.p_=new B.a1("while-loop","\u179a\u1784\u17d2\u179c\u17b7\u179b\u1787\u17bb\u17c6 \u1781\u178e\u17c8 (While Loop)",!1,null)
A.p0=new B.a1("numerals","\u179b\u17c1\u1781\u1781\u17d2\u1798\u17c2\u179a & \u1794\u17d2\u179a\u1798\u17b6\u178e\u179c\u17b7\u1792\u17b8 (Math)",!1,null)
A.p1=new B.a1("builtins","\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd\u179f\u17d2\u178a\u1784\u17cb\u178a\u17b6\u179a (Builtins)",!1,null)
A.p2=new B.a1("functions","\u1780\u17b6\u179a\u1794\u1784\u17d2\u1780\u17be\u178f\u17a2\u1793\u17bb\u1782\u1798\u1793\u17cd (Declaration)",!1,null)
A.p3=new B.a1("classes","\u1790\u17d2\u1793\u17b6\u1780\u17cb & Constructor (`\u1794\u1784\u17d2\u1780\u17be\u178f`)",!1,null)
A.p4=new B.a1("ides","Flutter & Web IDEs",!1,null)
A.p5=new B.a1("playground","\ud83c\udfae \u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",!0,"\u1795\u17d2\u1791\u17b6\u179b\u17cb")
A.p6=new B.a1("cheat-sheet","\u178f\u17b6\u179a\u17b6\u1784\u1796\u17b6\u1780\u17d2\u1799\u1782\u1793\u17d2\u179b\u17b9\u17c7 (Cheat Sheet)",!1,null)
A.p7=new B.a1("intro","\u179f\u17c1\u1785\u1780\u17d2\u178f\u17b8\u1795\u17d2\u178f\u17be\u1798 (Overview)",!1,null)
A.p8=new B.a1("install","\u1780\u17b6\u179a\u178a\u17c6\u17a1\u17be\u1784 & \u1780\u17b6\u179a\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178f\u17be\u1798 (Setup)",!1,null)
A.oN=new C.b0("#f87171")
A.aG=new C.aJ(null,null,null,null,null,A.oN,null,null,null,null,null)
A.aI=new C.aJ(null,null,null,null,null,A.V,null,null,null,null,null)
A.aF=new C.b0("#38bdf8")
A.pb=new C.aJ(null,null,null,null,null,A.aF,null,null,A.a6,null,null)
A.bw=new B.eh("flex",4,"flex")
A.aX=new B.fW(2,"center")
A.pd=new C.aJ(A.bw,null,null,null,A.aX,null,null,null,null,null,null)
A.ba=new B.fy()
A.aH=new C.aJ(null,null,null,null,null,A.aF,null,null,null,A.ba,null)
A.jN={target:0,rel:1}
A.a9=new C.K(A.jN,["_blank","noopener noreferrer"],x.w)
A.nw=new C.a("Releases & Binaries",null)
A.fd=w([A.nw],x.i)
A.pC=new B.O("https://github.com/sengson-great/KhmerLang/releases",null,null,A.aH,A.a9,null,A.fd,null)
A.af={width:0,height:1,viewBox:2,fill:3}
A.jw=new C.K(A.af,["15","15","0 0 24 24","currentColor"],x.w)
A.tC=new B.fQ(null)
A.id=w([A.tC],x.i)
A.aW=new B.aL(null,A.jw,A.id,null)
A.mY=new C.a("\u179f\u17b6\u1780\u179b\u17d2\u1794\u1784\u1780\u17bc\u178a",null)
A.io=w([A.mY],x.i)
A.tY=new B.a3(null,null,A.io,null)
A.h2=w([A.aW,A.tY],x.i)
A.pD=new B.O("#playground","nav-btn-playground","btn-primary-compact",null,null,null,A.h2,null)
A.nS=new C.a("GitHub Repository",null)
A.fP=w([A.nS],x.i)
A.pG=new B.O(y.b,null,null,A.aH,A.a9,null,A.fP,null)
A.nA=new C.a("\u1780",null)
A.fy=w([A.nA],x.i)
A.rn=new B.r(null,"brand-logo-badge",null,null,null,A.fy,null)
A.mi=new C.a("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a ",null)
A.o8=new C.a("v1.0.0",null)
A.he=w([A.o8],x.i)
A.tZ=new B.a3("brand-version-badge",null,A.he,null)
A.hd=w([A.mi,A.tZ],x.i)
A.rc=new B.r(null,"brand-title",null,null,null,A.hd,null)
A.mp=new C.a("Khmer Programming Language",null)
A.bU=w([A.mp],x.i)
A.rj=new B.r(null,"brand-subtitle",null,null,null,A.bU,null)
A.co=w([A.rc,A.rj],x.i)
A.rq=new B.r(null,"brand-text",null,null,null,A.co,null)
A.j2=w([A.rn,A.rq],x.i)
A.pN=new B.O("#intro",null,"brand-link",null,null,null,A.j2,null)
A.jJ={target:0,rel:1,"aria-label":2,title:3}
A.jn=new C.K(A.jJ,["_blank","noopener noreferrer","GitHub Repository","GitHub"],x.w)
A.jx=new C.K(A.af,["19","19","0 0 24 24","currentColor"],x.w)
A.p={d:0}
A.js=new C.K(A.p,["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],x.w)
A.tA=new B.ba(A.js,null)
A.i9=w([A.tA],x.i)
A.un=new B.aL(null,A.jx,A.i9,null)
A.eh=w([A.un],x.i)
A.pQ=new B.O(y.b,null,"header-action-btn",null,A.jn,null,A.eh,null)
A.mg=new C.a("\u1798\u17b6\u178f\u17b7\u1780\u17b6\u1791\u17c6\u1796\u17d0\u179a\u1793\u17c1\u17c7",null)
A.e7=w([A.mg],x.i)
A.ri=new B.r(null,"toc-title",null,null,null,A.e7,null)
A.z={width:0,height:1,viewBox:2,fill:3,stroke:4,"stroke-width":5}
A.jv=new C.K(A.z,["16","16","0 0 24 24","none","currentColor","2"],x.w)
A.ae={cx:0,cy:1,r:2}
A.jC=new C.K(A.ae,["11","11","8"],x.w)
A.pV=new B.dZ(A.jC,null)
A.jp=new C.K(A.p,["m21 21-4.3-4.3"],x.w)
A.tx=new B.ba(A.jp,null)
A.a8=w([A.pV,A.tx],x.i)
A.uq=new B.aL(null,A.jv,A.a8,null)
A.nR=new C.a("\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u17af\u1780\u179f\u17b6\u179a (Search docs)...",null)
A.bW=w([A.nR],x.i)
A.tV=new B.a3(null,null,A.bW,null)
A.dR=w([A.uq,A.tV],x.i)
A.rk=new B.r(null,"search-trigger-content",null,null,null,A.dR,null)
A.kS=new C.a("\u1785\u17bb\u1785\u178a\u17be\u1798\u17d2\u1794\u17b8\u179a\u17bb\u1780\u179a\u1780\u178a\u17c4\u1799\u1795\u17d2\u1791\u17b6\u179b\u17cb\u1791\u17c5\u1780\u17b6\u1793\u17cb\u1794\u17d2\u179a\u1792\u17b6\u1793\u1794\u1791",null)
A.hJ=w([A.kS],x.i)
A.u2=new B.a3(null,null,A.hJ,null)
A.nZ=new C.a("KhmerLang Docs Search",null)
A.cU=w([A.nZ],x.i)
A.tU=new B.a3(null,null,A.cU,null)
A.dS=w([A.u2,A.tU],x.i)
A.rl=new B.r(null,"search-modal-footer",null,null,null,A.dS,null)
A.bx=new B.eh("none",0,"none")
A.pa=new C.aJ(A.bx,null,null,null,null,null,null,null,null,null,null)
A.rp=new B.r(null,null,A.pa,null,null,A.y,null)
A.t4=new B.fM(null)
A.lI=new C.a("\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (KhmerLang) \u2014 \u179a\u1780\u17d2\u179f\u17b6\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1782\u17d2\u179a\u1794\u17cb\u1799\u17c9\u17b6\u1784 \xa9 2026 \u178a\u17c4\u1799 Veng Chhuong \u1793\u17b7\u1784\u179f\u17a0\u1782\u1798\u1793\u17cd\u17a2\u17d2\u1793\u1780\u17a2\u1797\u17b7\u179c\u178c\u17d2\u178d\u1793\u17cd\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",null)
A.cl=w([A.lI],x.i)
A.t8=new B.J(null,null,A.cl,null)
A.kw=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Terminal Output)",null)
A.hO=w([A.kw],x.i)
A.tW=new B.a3("code-output-title",null,A.hO,null)
A.kB=new C.a("\u25b7 \u178a\u17c6\u178e\u17be\u1780\u17b6\u179a\u1780\u17bc\u178a (Run)",null)
A.cx=w([A.kB],x.i)
A.tX=new B.a3(null,null,A.cx,null)
A.ny=new C.a("\u179b\u17bb\u1794",null)
A.hY=w([A.ny],x.i)
A.u_=new B.a3(null,null,A.hY,null)
A.kr=new C.a("\u179f\u17d2\u1790\u17b6\u1793\u17b8\u1799\u179b\u1791\u17d2\u1792\u1795\u179b (Console Output)",null)
A.ew=w([A.kr],x.i)
A.u0=new B.a3("console-pane-title",null,A.ew,null)
A.kN=new C.a("\u2713 \u1796\u17b7\u1793\u17b7\u178f\u17d2\u1799 (Check)",null)
A.fC=w([A.kN],x.i)
A.u1=new B.a3(null,null,A.fC,null)
A.ab=new C.K(A.z,["20","20","0 0 24 24","none","currentColor","2"],x.w)
A.jo=new C.K(A.p,["M4 6h16M4 12h16M4 18h16"],x.w)
A.tw=new B.ba(A.jo,null)
A.i6=w([A.tw],x.i)
A.um=new B.aL(null,A.ab,A.i6,null)
A.ac=new C.K(A.z,["18","18","0 0 24 24","none","currentColor","2"],x.w)
A.jq=new C.K(A.p,["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],x.w)
A.ty=new B.ba(A.jq,null)
A.i7=w([A.ty],x.i)
A.uo=new B.aL("theme-icon-moon",A.ac,A.i7,null)
A.ju=new C.K(A.z,["14","14","0 0 24 24","none","currentColor","2"],x.w)
A.jr=new C.K(A.p,["M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],x.w)
A.tz=new B.ba(A.jr,null)
A.i8=w([A.tz],x.i)
A.up=new B.aL(null,A.ju,A.i8,null)
A.ur=new B.aL(null,A.ab,A.a8,null)
A.jB=new C.K(A.ae,["12","12","4"],x.w)
A.pU=new B.dZ(A.jB,null)
A.jt=new C.K(A.p,["M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"],x.w)
A.tB=new B.ba(A.jt,null)
A.iW=w([A.pU,A.tB],x.i)
A.us=new B.aL("theme-icon-sun",A.ac,A.iW,null)})();(function staticFields(){$.hR=0
$.d8=B.oh()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"pn","kv",()=>{B.n3()
return $.hR})})()};
(a=>{a["anF8Kc/QChBeBnrUVuZqClxVyIE="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
