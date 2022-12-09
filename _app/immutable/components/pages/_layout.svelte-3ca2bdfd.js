import{C as ge,S as ue,i as fe,s as he,a as L,k as d,D as te,c as B,l as _,m as h,E as le,h as o,n as r,F as de,b as q,G as n,H as F,f as H,g as be,t as J,d as ke,I as _e,J as Ee,K as we,L as re,M as $e,q as ve,r as me,B as pe,N as Ie,w as xe,x as ye,y as De,O as Ve,P as Se,Q as ze,z as Ae}from"../../chunks/index-d9f3c58c.js";function ae(c,{delay:e=0,duration:l=400,easing:a=ge}={}){const i=+getComputedStyle(c).opacity;return{delay:e,duration:l,easing:a,css:s=>`opacity: ${s*i}`}}function se(c,e,l){const a=c.slice();return a[6]=e[l],a}function ne(c,e,l){const a=c.slice();return a[6]=e[l],a}function oe(c){let e,l,a,i,s,t,f,E,k,x,V,j,T,z,S,y,C,D,A,M=c[1],m=[];for(let p=0;p<M.length;p+=1)m[p]=ce(ne(c,M,p));return{c(){e=d("div"),l=d("div"),a=L(),i=d("div"),s=d("div"),t=d("ul");for(let p=0;p<m.length;p+=1)m[p].c();f=L(),E=d("div"),k=d("button"),x=d("div"),V=d("img"),T=L(),z=d("button"),S=d("i"),this.h()},l(p){e=_(p,"DIV",{});var I=h(e);l=_(I,"DIV",{class:!0}),h(l).forEach(o),a=B(I),i=_(I,"DIV",{class:!0});var v=h(i);s=_(v,"DIV",{class:!0});var N=h(s);t=_(N,"UL",{class:!0});var G=h(t);for(let $=0;$<m.length;$+=1)m[$].l(G);G.forEach(o),N.forEach(o),f=B(v),E=_(v,"DIV",{class:!0});var g=h(E);k=_(g,"BUTTON",{class:!0});var P=h(k);x=_(P,"DIV",{class:!0});var w=h(x);V=_(w,"IMG",{src:!0,alt:!0}),w.forEach(o),P.forEach(o),T=B(g),z=_(g,"BUTTON",{class:!0});var u=h(z);S=_(u,"I",{class:!0}),h(S).forEach(o),u.forEach(o),g.forEach(o),v.forEach(o),I.forEach(o),this.h()},h(){r(l,"class","absolute top-0 left-0 w-screen h-full backdrop-blur-lg z-10"),r(t,"class","menu bg-base-100 w-[100vw-24px] p-2 rounded-box shadow-xl"),r(s,"class","w-screen"),de(V.src,j="https://unavatar.io/SlenPlayz")||r(V,"src",j),r(V,"alt","Profile photo"),r(x,"class","bg-neutral-focus text-neutral-content rounded-full w-10 ring ring-offset-base-100 ring-offset-1"),r(k,"class","avatar placeholder"),r(S,"class","fa-solid fa-xmark"),r(z,"class","btn btn-circle hover:rotate-90"),r(E,"class","p-8 flex items-center justify-between"),r(i,"class","fixed z-20 bottom-0 right-0")},m(p,I){q(p,e,I),n(e,l),n(e,a),n(e,i),n(i,s),n(s,t);for(let v=0;v<m.length;v+=1)m[v].m(t,null);n(i,f),n(i,E),n(E,k),n(k,x),n(x,V),n(E,T),n(E,z),n(z,S),C=!0,D||(A=[F(l,"click",Ee(c[2])),F(z,"click",c[4])],D=!0)},p(p,I){if(I&3){M=p[1];let v;for(v=0;v<M.length;v+=1){const N=ne(p,M,v);m[v]?m[v].p(N,I):(m[v]=ce(N),m[v].c(),m[v].m(t,null))}for(;v<m.length;v+=1)m[v].d(1);m.length=M.length}},i(p){C||(we(()=>{y||(y=re(e,ae,{duration:100},!0)),y.run(1)}),C=!0)},o(p){y||(y=re(e,ae,{duration:100},!1)),y.run(0),C=!1},d(p){p&&o(e),_e(m,p),p&&y&&y.end(),D=!1,$e(A)}}}function ce(c){let e,l,a=c[6].name+"",i,s,t,f;return{c(){e=d("li"),l=d("a"),i=ve(a),s=L(),this.h()},l(E){e=_(E,"LI",{});var k=h(e);l=_(k,"A",{href:!0});var x=h(l);i=me(x,a),x.forEach(o),s=B(k),k.forEach(o),this.h()},h(){r(l,"href",c[6].path)},m(E,k){q(E,e,k),n(e,l),n(l,i),n(e,s),t||(f=F(l,"click",c[3]),t=!0)},p:pe,d(E){E&&o(e),t=!1,f()}}}function ie(c){let e,l,a=c[6].name+"",i;return{c(){e=d("a"),l=d("a"),i=ve(a),this.h()},l(s){e=_(s,"A",{href:!0,class:!0});var t=h(e);l=_(t,"A",{href:!0});var f=h(l);i=me(f,a),f.forEach(o),t.forEach(o),this.h()},h(){r(l,"href",c[6].path),r(e,"href",c[6].path),r(e,"class","btn btn-ghost rounded-lg ml-1 mr-1")},m(s,t){q(s,e,t),n(e,l),n(l,i)},p:pe,d(s){s&&o(e)}}}function Le(c){let e,l,a,i,s,t,f,E,k,x,V,j,T,z,S,y,C,D,A,M,m,p,I,v,N,G,g=c[0]&&oe(c),P=c[1],w=[];for(let u=0;u<P.length;u+=1)w[u]=ie(se(c,P,u));return{c(){g&&g.c(),e=L(),l=d("div"),a=d("div"),i=d("div"),s=d("label"),t=te("svg"),f=te("path"),E=L(),k=d("a"),x=d("div"),V=d("div"),j=d("img"),z=L(),S=d("div"),y=d("ul");for(let u=0;u<w.length;u+=1)w[u].c();C=L(),D=d("div"),A=d("a"),M=L(),m=d("a"),p=L(),I=d("a"),this.h()},l(u){g&&g.l(u),e=B(u),l=_(u,"DIV",{class:!0});var $=h(l);a=_($,"DIV",{class:!0});var b=h(a);i=_(b,"DIV",{class:!0});var O=h(i);s=_(O,"LABEL",{tabindex:!0,class:!0});var Q=h(s);t=le(Q,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var R=h(t);f=le(R,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),h(f).forEach(o),R.forEach(o),Q.forEach(o),O.forEach(o),E=B(b),k=_(b,"A",{href:!0,class:!0});var W=h(k);x=_(W,"DIV",{class:!0});var X=h(x);V=_(X,"DIV",{class:!0});var Y=h(V);j=_(Y,"IMG",{src:!0}),Y.forEach(o),X.forEach(o),W.forEach(o),b.forEach(o),z=B($),S=_($,"DIV",{class:!0});var Z=h(S);y=_(Z,"UL",{class:!0});var ee=h(y);for(let K=0;K<w.length;K+=1)w[K].l(ee);ee.forEach(o),Z.forEach(o),C=B($),D=_($,"DIV",{class:!0});var U=h(D);A=_(U,"A",{target:!0,rel:!0,href:!0,class:!0}),h(A).forEach(o),M=B(U),m=_(U,"A",{target:!0,rel:!0,href:!0,class:!0}),h(m).forEach(o),p=B(U),I=_(U,"A",{target:!0,rel:!0,href:!0,class:!0}),h(I).forEach(o),U.forEach(o),$.forEach(o),this.h()},h(){r(f,"stroke-linecap","round"),r(f,"stroke-linejoin","round"),r(f,"stroke-width","2"),r(f,"d","M4 6h16M4 12h8m-8 6h16"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"class","h-5 w-5"),r(t,"fill","none"),r(t,"viewBox","0 0 24 24"),r(t,"stroke","currentColor"),r(s,"tabindex","0"),r(s,"class","btn btn-ghost lg:hidden"),r(i,"class","dropdown"),de(j.src,T="https://unavatar.io/SlenPlayz")||r(j,"src",T),r(V,"class","w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1"),r(x,"class","avatar"),r(k,"href","/"),r(k,"class","btn btn-ghost normal-case text-xl"),r(a,"class","navbar-start"),r(y,"class","flex"),r(S,"class","navbar-center hidden lg:flex"),r(A,"target","_blank"),r(A,"rel","noreferrer"),r(A,"href","https://twitter.com/slenplayz"),r(A,"class","fa-brands fa-twitter mr-3 text-2xl"),r(m,"target","_blank"),r(m,"rel","noreferrer"),r(m,"href","https://www.instagram.com/slenplayz/"),r(m,"class","fa-brands fa-instagram mr-3 text-2xl"),r(I,"target","_blank"),r(I,"rel","noreferrer"),r(I,"href","https://github.com/SlenPlayz"),r(I,"class","fa-brands fa-github mr-3 text-2xl"),r(D,"class","navbar-end"),r(l,"class","navbar bg-base-100")},m(u,$){g&&g.m(u,$),q(u,e,$),q(u,l,$),n(l,a),n(a,i),n(i,s),n(s,t),n(t,f),n(a,E),n(a,k),n(k,x),n(x,V),n(V,j),n(l,z),n(l,S),n(S,y);for(let b=0;b<w.length;b+=1)w[b].m(y,null);n(l,C),n(l,D),n(D,A),n(D,M),n(D,m),n(D,p),n(D,I),v=!0,N||(G=F(s,"click",c[5]),N=!0)},p(u,[$]){if(u[0]?g?(g.p(u,$),$&1&&H(g,1)):(g=oe(u),g.c(),H(g,1),g.m(e.parentNode,e)):g&&(be(),J(g,1,1,()=>{g=null}),ke()),$&2){P=u[1];let b;for(b=0;b<P.length;b+=1){const O=se(u,P,b);w[b]?w[b].p(O,$):(w[b]=ie(O),w[b].c(),w[b].m(y,null))}for(;b<w.length;b+=1)w[b].d(1);w.length=P.length}},i(u){v||(H(g),v=!0)},o(u){J(g),v=!1},d(u){g&&g.d(u),u&&o(e),u&&o(l),_e(w,u),N=!1,G()}}}function Be(c,e,l){let a=!1;return[a,[{name:"Home",path:"/"},{name:"Projects",path:"/projects"}],()=>l(0,a=!a),()=>l(0,a=!a),()=>l(0,a=!a),()=>l(0,a=!0)]}class Me extends ue{constructor(e){super(),fe(this,e,Be,Le,he,{})}}function Ne(c){let e,l,a;e=new Me({});const i=c[3].default,s=Ie(i,c,c[2],null);return{c(){xe(e.$$.fragment),l=L(),s&&s.c()},l(t){ye(e.$$.fragment,t),l=B(t),s&&s.l(t)},m(t,f){De(e,t,f),q(t,l,f),s&&s.m(t,f),a=!0},p(t,[f]){s&&s.p&&(!a||f&4)&&Ve(s,i,t,t[2],a?ze(i,t[2],f,null):Se(t[2]),null)},i(t){a||(H(e.$$.fragment,t),H(s,t),a=!0)},o(t){J(e.$$.fragment,t),J(s,t),a=!1},d(t){Ae(e,t),t&&o(l),s&&s.d(t)}}}function Pe(c,e,l){let{$$slots:a={},$$scope:i}=e;const s=!0,t="always";return c.$$set=f=>{"$$scope"in f&&l(2,i=f.$$scope)},[s,t,i,a]}class Ce extends ue{constructor(e){super(),fe(this,e,Pe,Ne,he,{prerender:0,trailingSlash:1})}get prerender(){return this.$$.ctx[0]}get trailingSlash(){return this.$$.ctx[1]}}export{Ce as default};
