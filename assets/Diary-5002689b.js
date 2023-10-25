import{n as T,j as p,d as I,_ as Te,r as C,x as X,f as Ce,h as At,P as B}from"./index-f3c6991e.js";import{T as qt}from"./TitlePage-104f08a4.js";function Dt(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}const Gt=T.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Xt=T.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,re=T.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${e=>e.highlighted?"#E6533C":"rgba(239, 237, 232, 0.05)"};
  border-radius: 12px;
  border: 1px solid
    ${e=>(e.highlighted,"rgba(239, 237, 232, 0.2)")};
  ${e=>e.caloriesOverConsumed&&"border-color: #E9101D"};
  ${e=>e.caloriesOverBurned&&"border-color: #3CBF61"};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`,ae=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,oe=T.svg`
  width: 20px;
  height: 20px;
  fill: #ef8964;
`,ie=T.h2`
  font-size: 12px;
  line-height: ${16/12};
  color: ${e=>e.highlighted?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)"};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: ${18/12};
  }
`,se=T.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20/18};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32/24};
  }
`,Qt=T.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Vt=T.div`
  width: 24px;
  height: 24px;
  background-color: #efa082;
  border-radius: 50%;
`,zt=T.svg`
  width: 24px;
  height: 24px;
`,Kt=T.p`
  font-size: 14px;
  line-height: ${18/14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24/16};
  }
`;function Jt(){return p.jsxs(Gt,{children:[p.jsxs(Xt,{children:[p.jsxs(re,{highlighted:!0,children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#food`})}),p.jsx(ie,{highlighted:!0,children:"Daily calory intake"})]}),p.jsx(se,{children:"2200"})]}),p.jsxs(re,{highlighted:!0,children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#dumbbell`})}),p.jsx(ie,{highlighted:!0,children:"Daily norm of sports"})]}),p.jsx(se,{children:"110 min"})]}),p.jsxs(re,{children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#apple`})}),p.jsx(ie,{children:"Calories consumed"})]}),p.jsx(se,{children:"707"})]}),p.jsxs(re,{children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#fire`})}),p.jsx(ie,{children:"Calories burned"})]}),p.jsx(se,{children:"855"})]}),p.jsxs(re,{caloriesOverConsumed:!0,children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#bubble`})}),p.jsx(ie,{children:"The rest of the calories"})]}),p.jsx(se,{children:"1493"})]}),p.jsxs(re,{caloriesOverBurned:!0,children:[p.jsxs(ae,{children:[p.jsx(oe,{children:p.jsx("use",{href:`${I}#running`})}),p.jsx(ie,{children:"The rest of sports"})]}),p.jsx(se,{children:"85 min"})]})]}),p.jsxs(Qt,{children:[p.jsx(Vt,{children:p.jsx(zt,{children:p.jsx("use",{href:`${I}#exclamation-mark`})})}),p.jsx(Kt,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})}function Zt(){return p.jsx("div",{children:"ExercisesTable component"})}function en(){return p.jsxs(p.Fragment,{children:[p.jsx("div",{children:"DayExercises component"}),p.jsx(Zt,{})]})}function tn(){return p.jsx("div",{children:"ProductsTable component"})}function nn(){return p.jsxs(p.Fragment,{children:[p.jsx("div",{children:"DayProducts component"}),p.jsx(tn,{})]})}function S(e){if(e===null||e===!0||e===!1)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function w(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function _(e){w(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||Te(e)==="object"&&n==="[object Date]"?new Date(e.getTime()):typeof e=="number"||n==="[object Number]"?new Date(e):((typeof e=="string"||n==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function j(e,n){w(2,arguments);var t=_(e),r=S(n);return isNaN(r)?new Date(NaN):(r&&t.setDate(t.getDate()+r),t)}function L(e,n){w(2,arguments);var t=_(e),r=S(n);if(isNaN(r))return new Date(NaN);if(!r)return t;var a=t.getDate(),o=new Date(t.getTime());o.setMonth(t.getMonth()+r+1,0);var i=o.getDate();return a>=i?o:(t.setFullYear(o.getFullYear(),o.getMonth(),a),t)}function rn(e,n){w(2,arguments);var t=_(e).getTime(),r=S(n);return new Date(t+r)}var an={};function Q(){return an}function $(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=Q(),c=S((t=(r=(a=(o=n==null?void 0:n.weekStartsOn)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:d.weekStartsOn)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=_(e),m=v.getDay(),g=(m<c?7:0)+m-c;return v.setDate(v.getDate()-g),v.setHours(0,0,0,0),v}function te(e){return w(1,arguments),$(e,{weekStartsOn:1})}function on(e){w(1,arguments);var n=_(e),t=n.getFullYear(),r=new Date(0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);var a=te(r),o=new Date(0);o.setFullYear(t,0,4),o.setHours(0,0,0,0);var i=te(o);return n.getTime()>=a.getTime()?t+1:n.getTime()>=i.getTime()?t:t-1}function sn(e){w(1,arguments);var n=on(e),t=new Date(0);t.setFullYear(n,0,4),t.setHours(0,0,0,0);var r=te(t);return r}function ye(e){var n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),e.getTime()-n.getTime()}function ce(e){w(1,arguments);var n=_(e);return n.setHours(0,0,0,0),n}var ln=864e5;function A(e,n){w(2,arguments);var t=ce(e),r=ce(n),a=t.getTime()-ye(t),o=r.getTime()-ye(r);return Math.round((a-o)/ln)}function Ge(e,n){w(2,arguments);var t=S(n),r=t*7;return j(e,r)}function un(e,n){w(2,arguments);var t=S(n);return L(e,t*12)}function dn(e){w(1,arguments);var n;if(e&&typeof e.forEach=="function")n=e;else if(Te(e)==="object"&&e!==null)n=Array.prototype.slice.call(e);else return new Date(NaN);var t;return n.forEach(function(r){var a=_(r);(t===void 0||t<a||isNaN(Number(a)))&&(t=a)}),t||new Date(NaN)}function cn(e){w(1,arguments);var n;if(e&&typeof e.forEach=="function")n=e;else if(Te(e)==="object"&&e!==null)n=Array.prototype.slice.call(e);else return new Date(NaN);var t;return n.forEach(function(r){var a=_(r);(t===void 0||t>a||isNaN(a.getDate()))&&(t=a)}),t||new Date(NaN)}function P(e,n){w(2,arguments);var t=ce(e),r=ce(n);return t.getTime()===r.getTime()}function ze(e){return w(1,arguments),e instanceof Date||Te(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function fn(e){if(w(1,arguments),!ze(e)&&typeof e!="number")return!1;var n=_(e);return!isNaN(Number(n))}function be(e,n){w(2,arguments);var t=_(e),r=_(n),a=t.getFullYear()-r.getFullYear(),o=t.getMonth()-r.getMonth();return a*12+o}var vn=6048e5;function hn(e,n,t){w(2,arguments);var r=$(e,t),a=$(n,t),o=r.getTime()-ye(r),i=a.getTime()-ye(a);return Math.round((o-i)/vn)}function Ke(e){w(1,arguments);var n=_(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function W(e){w(1,arguments);var n=_(e);return n.setDate(1),n.setHours(0,0,0,0),n}function mn(e){w(1,arguments);var n=_(e),t=new Date(0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Je(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=Q(),c=S((t=(r=(a=(o=n==null?void 0:n.weekStartsOn)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:d.weekStartsOn)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=_(e),m=v.getDay(),g=(m<c?-7:0)+6-(m-c);return v.setDate(v.getDate()+g),v.setHours(23,59,59,999),v}function _t(e){return w(1,arguments),Je(e,{weekStartsOn:1})}function pn(e,n){w(2,arguments);var t=S(n);return rn(e,-t)}var gn=864e5;function xn(e){w(1,arguments);var n=_(e),t=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var r=n.getTime(),a=t-r;return Math.floor(a/gn)+1}function Me(e){w(1,arguments);var n=1,t=_(e),r=t.getUTCDay(),a=(r<n?7:0)+r-n;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function Ct(e){w(1,arguments);var n=_(e),t=n.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var a=Me(r),o=new Date(0);o.setUTCFullYear(t,0,4),o.setUTCHours(0,0,0,0);var i=Me(o);return n.getTime()>=a.getTime()?t+1:n.getTime()>=i.getTime()?t:t-1}function yn(e){w(1,arguments);var n=Ct(e),t=new Date(0);t.setUTCFullYear(n,0,4),t.setUTCHours(0,0,0,0);var r=Me(t);return r}var bn=6048e5;function wn(e){w(1,arguments);var n=_(e),t=Me(n).getTime()-yn(n).getTime();return Math.round(t/bn)+1}function Ne(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=Q(),c=S((t=(r=(a=(o=n==null?void 0:n.weekStartsOn)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:d.weekStartsOn)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=_(e),m=v.getUTCDay(),g=(m<c?7:0)+m-c;return v.setUTCDate(v.getUTCDate()-g),v.setUTCHours(0,0,0,0),v}function kt(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=_(e),c=d.getUTCFullYear(),v=Q(),m=S((t=(r=(a=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&r!==void 0?r:(l=v.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,m),g.setUTCHours(0,0,0,0);var D=Ne(g,n),x=new Date(0);x.setUTCFullYear(c,0,m),x.setUTCHours(0,0,0,0);var k=Ne(x,n);return d.getTime()>=D.getTime()?c+1:d.getTime()>=k.getTime()?c:c-1}function Dn(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=Q(),c=S((t=(r=(a=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:d.firstWeekContainsDate)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),v=kt(e,n),m=new Date(0);m.setUTCFullYear(v,0,c),m.setUTCHours(0,0,0,0);var g=Ne(m,n);return g}var _n=6048e5;function Cn(e,n){w(1,arguments);var t=_(e),r=Ne(t,n).getTime()-Dn(t,n).getTime();return Math.round(r/_n)+1}function M(e,n){for(var t=e<0?"-":"",r=Math.abs(e).toString();r.length<n;)r="0"+r;return t+r}var kn={y:function(n,t){var r=n.getUTCFullYear(),a=r>0?r:1-r;return M(t==="yy"?a%100:a,t.length)},M:function(n,t){var r=n.getUTCMonth();return t==="M"?String(r+1):M(r+1,2)},d:function(n,t){return M(n.getUTCDate(),t.length)},a:function(n,t){var r=n.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(n,t){return M(n.getUTCHours()%12||12,t.length)},H:function(n,t){return M(n.getUTCHours(),t.length)},m:function(n,t){return M(n.getUTCMinutes(),t.length)},s:function(n,t){return M(n.getUTCSeconds(),t.length)},S:function(n,t){var r=t.length,a=n.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,r-3));return M(o,t.length)}};const G=kn;var le={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Mn={G:function(n,t,r){var a=n.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(n,t,r){if(t==="yo"){var a=n.getUTCFullYear(),o=a>0?a:1-a;return r.ordinalNumber(o,{unit:"year"})}return G.y(n,t)},Y:function(n,t,r,a){var o=kt(n,a),i=o>0?o:1-o;if(t==="YY"){var s=i%100;return M(s,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):M(i,t.length)},R:function(n,t){var r=Ct(n);return M(r,t.length)},u:function(n,t){var r=n.getUTCFullYear();return M(r,t.length)},Q:function(n,t,r){var a=Math.ceil((n.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return M(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(n,t,r){var a=Math.ceil((n.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return M(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(n,t,r){var a=n.getUTCMonth();switch(t){case"M":case"MM":return G.M(n,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(n,t,r){var a=n.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return M(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(n,t,r,a){var o=Cn(n,a);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):M(o,t.length)},I:function(n,t,r){var a=wn(n);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):M(a,t.length)},d:function(n,t,r){return t==="do"?r.ordinalNumber(n.getUTCDate(),{unit:"date"}):G.d(n,t)},D:function(n,t,r){var a=xn(n);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):M(a,t.length)},E:function(n,t,r){var a=n.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(n,t,r,a){var o=n.getUTCDay(),i=(o-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return M(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(n,t,r,a){var o=n.getUTCDay(),i=(o-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return M(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(n,t,r){var a=n.getUTCDay(),o=a===0?7:a;switch(t){case"i":return String(o);case"ii":return M(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(n,t,r){var a=n.getUTCHours(),o=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(n,t,r){var a=n.getUTCHours(),o;switch(a===12?o=le.noon:a===0?o=le.midnight:o=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,t,r){var a=n.getUTCHours(),o;switch(a>=17?o=le.evening:a>=12?o=le.afternoon:a>=4?o=le.morning:o=le.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,t,r){if(t==="ho"){var a=n.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return G.h(n,t)},H:function(n,t,r){return t==="Ho"?r.ordinalNumber(n.getUTCHours(),{unit:"hour"}):G.H(n,t)},K:function(n,t,r){var a=n.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},k:function(n,t,r){var a=n.getUTCHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},m:function(n,t,r){return t==="mo"?r.ordinalNumber(n.getUTCMinutes(),{unit:"minute"}):G.m(n,t)},s:function(n,t,r){return t==="so"?r.ordinalNumber(n.getUTCSeconds(),{unit:"second"}):G.s(n,t)},S:function(n,t){return G.S(n,t)},X:function(n,t,r,a){var o=a._originalDate||n,i=o.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return dt(i);case"XXXX":case"XX":return J(i);case"XXXXX":case"XXX":default:return J(i,":")}},x:function(n,t,r,a){var o=a._originalDate||n,i=o.getTimezoneOffset();switch(t){case"x":return dt(i);case"xxxx":case"xx":return J(i);case"xxxxx":case"xxx":default:return J(i,":")}},O:function(n,t,r,a){var o=a._originalDate||n,i=o.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ut(i,":");case"OOOO":default:return"GMT"+J(i,":")}},z:function(n,t,r,a){var o=a._originalDate||n,i=o.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ut(i,":");case"zzzz":default:return"GMT"+J(i,":")}},t:function(n,t,r,a){var o=a._originalDate||n,i=Math.floor(o.getTime()/1e3);return M(i,t.length)},T:function(n,t,r,a){var o=a._originalDate||n,i=o.getTime();return M(i,t.length)}};function ut(e,n){var t=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(o===0)return t+String(a);var i=n||"";return t+String(a)+i+M(o,2)}function dt(e,n){if(e%60===0){var t=e>0?"-":"+";return t+M(Math.abs(e)/60,2)}return J(e,n)}function J(e,n){var t=n||"",r=e>0?"-":"+",a=Math.abs(e),o=M(Math.floor(a/60),2),i=M(a%60,2);return r+o+t+i}const Nn=Mn;var ct=function(n,t){switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Mt=function(n,t){switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},On=function(n,t){var r=n.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return ct(n,t);var i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ct(a,t)).replace("{{time}}",Mt(o,t))},Tn={p:Mt,P:On};const Sn=Tn;var En=["D","DD"],jn=["YY","YYYY"];function Pn(e){return En.indexOf(e)!==-1}function Wn(e){return jn.indexOf(e)!==-1}function ft(e,n,t){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(n,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(n,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(n,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Yn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ln=function(n,t,r){var a,o=Yn[n];return typeof o=="string"?a=o:t===1?a=o.one:a=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};const Fn=Ln;function Re(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var Rn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},In={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$n={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Un={date:Re({formats:Rn,defaultWidth:"full"}),time:Re({formats:In,defaultWidth:"full"}),dateTime:Re({formats:$n,defaultWidth:"full"})};const Hn=Un;var Bn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},An=function(n,t,r,a){return Bn[n]};const qn=An;function me(e){return function(n,t){var r=t!=null&&t.context?String(t.context):"standalone",a;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=t!=null&&t.width?String(t.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(n):n;return a[u]}}var Gn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Xn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Qn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Vn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},zn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Kn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Jn=function(n,t){var r=Number(n),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Zn={ordinalNumber:Jn,era:me({values:Gn,defaultWidth:"wide"}),quarter:me({values:Xn,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:me({values:Qn,defaultWidth:"wide"}),day:me({values:Vn,defaultWidth:"wide"}),dayPeriod:me({values:zn,defaultWidth:"wide",formattingValues:Kn,defaultFormattingWidth:"wide"})};const er=Zn;function pe(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=n.match(a);if(!o)return null;var i=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?nr(s,function(c){return c.test(i)}):tr(s,function(c){return c.test(i)}),u;u=e.valueCallback?e.valueCallback(l):l,u=t.valueCallback?t.valueCallback(u):u;var d=n.slice(i.length);return{value:u,rest:d}}}function tr(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function nr(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function rr(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.match(e.matchPattern);if(!r)return null;var a=r[0],o=n.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=t.valueCallback?t.valueCallback(i):i;var s=n.slice(a.length);return{value:i,rest:s}}}var ar=/^(\d+)(th|st|nd|rd)?/i,or=/\d+/i,ir={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},sr={any:[/^b/i,/^(a|c)/i]},lr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ur={any:[/1/i,/2/i,/3/i,/4/i]},dr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},cr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},mr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pr={ordinalNumber:rr({matchPattern:ar,parsePattern:or,valueCallback:function(n){return parseInt(n,10)}}),era:pe({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:sr,defaultParseWidth:"any"}),quarter:pe({matchPatterns:lr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:pe({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),day:pe({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:vr,defaultParseWidth:"any"}),dayPeriod:pe({matchPatterns:hr,defaultMatchWidth:"any",parsePatterns:mr,defaultParseWidth:"any"})};const gr=pr;var xr={code:"en-US",formatDistance:Fn,formatLong:Hn,formatRelative:qn,localize:er,match:gr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ze=xr;var yr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,br=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wr=/^'([^]*?)'?$/,Dr=/''/g,_r=/[a-zA-Z]/;function V(e,n,t){var r,a,o,i,s,l,u,d,c,v,m,g,D,x,k,N,U,z;w(2,arguments);var fe=String(n),Y=Q(),K=(r=(a=t==null?void 0:t.locale)!==null&&a!==void 0?a:Y.locale)!==null&&r!==void 0?r:Ze,ve=S((o=(i=(s=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(u=t.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:Y.firstWeekContainsDate)!==null&&i!==void 0?i:(c=Y.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(ve>=1&&ve<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var he=S((m=(g=(D=(x=t==null?void 0:t.weekStartsOn)!==null&&x!==void 0?x:t==null||(k=t.locale)===null||k===void 0||(N=k.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&D!==void 0?D:Y.weekStartsOn)!==null&&g!==void 0?g:(U=Y.locale)===null||U===void 0||(z=U.options)===null||z===void 0?void 0:z.weekStartsOn)!==null&&m!==void 0?m:0);if(!(he>=0&&he<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!K.localize)throw new RangeError("locale must contain localize property");if(!K.formatLong)throw new RangeError("locale must contain formatLong property");var ne=_(e);if(!fn(ne))throw new RangeError("Invalid time value");var Ee=ye(ne),je=pn(ne,Ee),Pe={firstWeekContainsDate:ve,weekStartsOn:he,locale:K,_originalDate:ne},We=fe.match(br).map(function(E){var R=E[0];if(R==="p"||R==="P"){var y=Sn[R];return y(E,K.formatLong)}return E}).join("").match(yr).map(function(E){if(E==="''")return"'";var R=E[0];if(R==="'")return Cr(E);var y=Nn[R];if(y)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Wn(E)&&ft(E,n,String(e)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Pn(E)&&ft(E,n,String(e)),y(je,E,K.localize,Pe);if(R.match(_r))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return E}).join("");return We}function Cr(e){var n=e.match(wr);return n?n[1].replace(Dr,"'"):e}function kr(e){w(1,arguments);var n=_(e),t=n.getFullYear(),r=n.getMonth(),a=new Date(0);return a.setFullYear(t,r+1,0),a.setHours(0,0,0,0),a.getDate()}var Mr=6048e5;function Nr(e){w(1,arguments);var n=_(e),t=te(n).getTime()-sn(n).getTime();return Math.round(t/Mr)+1}function Or(e){w(1,arguments);var n=_(e),t=n.getTime();return t}function Tr(e){return w(1,arguments),Math.floor(Or(e)/1e3)}function Sr(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=_(e),c=d.getFullYear(),v=Q(),m=S((t=(r=(a=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&r!==void 0?r:(l=v.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setFullYear(c+1,0,m),g.setHours(0,0,0,0);var D=$(g,n),x=new Date(0);x.setFullYear(c,0,m),x.setHours(0,0,0,0);var k=$(x,n);return d.getTime()>=D.getTime()?c+1:d.getTime()>=k.getTime()?c:c-1}function Er(e,n){var t,r,a,o,i,s,l,u;w(1,arguments);var d=Q(),c=S((t=(r=(a=(o=n==null?void 0:n.firstWeekContainsDate)!==null&&o!==void 0?o:n==null||(i=n.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:d.firstWeekContainsDate)!==null&&r!==void 0?r:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),v=Sr(e,n),m=new Date(0);m.setFullYear(v,0,c),m.setHours(0,0,0,0);var g=$(m,n);return g}var jr=6048e5;function Pr(e,n){w(1,arguments);var t=_(e),r=$(t,n).getTime()-Er(t,n).getTime();return Math.round(r/jr)+1}function Wr(e){w(1,arguments);var n=_(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(0,0,0,0),n}function Yr(e,n){return w(1,arguments),hn(Wr(e),W(e),n)+1}function Xe(e,n){w(2,arguments);var t=_(e),r=_(n);return t.getTime()>r.getTime()}function Nt(e,n){w(2,arguments);var t=_(e),r=_(n);return t.getTime()<r.getTime()}function Qe(e,n){return Qe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qe(e,n)}function et(e,n){w(2,arguments);var t=_(e),r=_(n);return t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()}function Lr(e,n){w(2,arguments);var t=_(e),r=_(n);return t.getFullYear()===r.getFullYear()}function Ie(e,n){w(2,arguments);var t=S(n);return j(e,-t)}function $e(e,n){w(2,arguments);var t=_(e),r=S(n),a=t.getFullYear(),o=t.getDate(),i=new Date(0);i.setFullYear(a,r,15),i.setHours(0,0,0,0);var s=kr(i);return t.setMonth(r,Math.min(o,s)),t}function vt(e,n){w(2,arguments);var t=_(e),r=S(n);return isNaN(t.getTime())?new Date(NaN):(t.setFullYear(r),t)}var h=function(){return h=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},h.apply(this,arguments)};function Fr(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Ot(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,o;r<a;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}var Tt={exports:{}},ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht;function Rr(){if(ht)return ge;ht=1;var e=X,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(s,l,u){var d,c={},v=null,m=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(m=l.ref);for(d in l)r.call(l,d)&&!o.hasOwnProperty(d)&&(c[d]=l[d]);if(s&&s.defaultProps)for(d in l=s.defaultProps,l)c[d]===void 0&&(c[d]=l[d]);return{$$typeof:n,type:s,key:v,ref:m,props:c,_owner:a.current}}return ge.Fragment=t,ge.jsx=i,ge.jsxs=i,ge}Tt.exports=Rr();var f=Tt.exports;function we(e){return e.mode==="multiple"}function De(e){return e.mode==="range"}function Se(e){return e.mode==="single"}var Ir={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"};function $r(e,n){return V(e,"LLLL y",n)}function Ur(e,n){return V(e,"d",n)}function Hr(e,n){return V(e,"LLLL",n)}function Br(e){return"".concat(e)}function Ar(e,n){return V(e,"cccccc",n)}function qr(e,n){return V(e,"yyyy",n)}var Gr=Object.freeze({__proto__:null,formatCaption:$r,formatDay:Ur,formatMonthCaption:Hr,formatWeekNumber:Br,formatWeekdayName:Ar,formatYearCaption:qr}),Xr=function(e,n,t){return V(e,"do MMMM (EEEE)",t)},Qr=function(){return"Month: "},Vr=function(){return"Go to next month"},zr=function(){return"Go to previous month"},Kr=function(e,n){return V(e,"cccc",n)},Jr=function(e){return"Week n. ".concat(e)},Zr=function(){return"Year: "},ea=Object.freeze({__proto__:null,labelDay:Xr,labelMonthDropdown:Qr,labelNext:Vr,labelPrevious:zr,labelWeekNumber:Jr,labelWeekday:Kr,labelYearDropdown:Zr});function ta(){var e="buttons",n=Ir,t=Ze,r={},a={},o=1,i={},s=new Date;return{captionLayout:e,classNames:n,formatters:Gr,labels:ea,locale:t,modifiersClassNames:r,modifiers:a,numberOfMonths:o,styles:i,today:s,mode:"default"}}function na(e){var n=e.fromYear,t=e.toYear,r=e.fromMonth,a=e.toMonth,o=e.fromDate,i=e.toDate;return r?o=W(r):n&&(o=new Date(n,0,1)),a?i=Ke(a):t&&(i=new Date(t,11,31)),{fromDate:o?ce(o):void 0,toDate:i?ce(i):void 0}}var St=C.createContext(void 0);function ra(e){var n,t=e.initialProps,r=ta(),a=na(t),o=a.fromDate,i=a.toDate,s=(n=t.captionLayout)!==null&&n!==void 0?n:r.captionLayout;s!=="buttons"&&(!o||!i)&&(s="buttons");var l;(Se(t)||we(t)||De(t))&&(l=t.onSelect);var u=h(h(h({},r),t),{captionLayout:s,classNames:h(h({},r.classNames),t.classNames),components:h({},t.components),formatters:h(h({},r.formatters),t.formatters),fromDate:o,labels:h(h({},r.labels),t.labels),mode:t.mode||r.mode,modifiers:h(h({},r.modifiers),t.modifiers),modifiersClassNames:h(h({},r.modifiersClassNames),t.modifiersClassNames),onSelect:l,styles:h(h({},r.styles),t.styles),toDate:i});return f.jsx(St.Provider,h({value:u},{children:e.children}))}function O(){var e=C.useContext(St);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}function Et(e){var n=O(),t=n.locale,r=n.classNames,a=n.styles,o=n.formatters.formatCaption;return f.jsx("div",h({className:r.caption_label,style:a.caption_label,"aria-live":"polite",role:"presentation",id:e.id},{children:o(e.displayMonth,{locale:t})}))}function aa(e){return f.jsx("svg",h({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},e,{children:f.jsx("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function jt(e){var n,t,r=e.onChange,a=e.value,o=e.children,i=e.caption,s=e.className,l=e.style,u=O(),d=(t=(n=u.components)===null||n===void 0?void 0:n.IconDropdown)!==null&&t!==void 0?t:aa;return f.jsxs("div",h({className:s,style:l},{children:[f.jsx("span",h({className:u.classNames.vhidden},{children:e["aria-label"]})),f.jsx("select",h({name:e.name,"aria-label":e["aria-label"],className:u.classNames.dropdown,style:u.styles.dropdown,value:a,onChange:r},{children:o})),f.jsxs("div",h({className:u.classNames.caption_label,style:u.styles.caption_label,"aria-hidden":"true"},{children:[i,f.jsx(d,{className:u.classNames.dropdown_icon,style:u.styles.dropdown_icon})]}))]}))}function oa(e){var n,t=O(),r=t.fromDate,a=t.toDate,o=t.styles,i=t.locale,s=t.formatters.formatMonthCaption,l=t.classNames,u=t.components,d=t.labels.labelMonthDropdown;if(!r)return f.jsx(f.Fragment,{});if(!a)return f.jsx(f.Fragment,{});var c=[];if(Lr(r,a))for(var v=W(r),m=r.getMonth();m<=a.getMonth();m++)c.push($e(v,m));else for(var v=W(new Date),m=0;m<=11;m++)c.push($e(v,m));var g=function(x){var k=Number(x.target.value),N=$e(W(e.displayMonth),k);e.onChange(N)},D=(n=u==null?void 0:u.Dropdown)!==null&&n!==void 0?n:jt;return f.jsx(D,h({name:"months","aria-label":d(),className:l.dropdown_month,style:o.dropdown_month,onChange:g,value:e.displayMonth.getMonth(),caption:s(e.displayMonth,{locale:i})},{children:c.map(function(x){return f.jsx("option",h({value:x.getMonth()},{children:s(x,{locale:i})}),x.getMonth())})}))}function ia(e){var n,t=e.displayMonth,r=O(),a=r.fromDate,o=r.toDate,i=r.locale,s=r.styles,l=r.classNames,u=r.components,d=r.formatters.formatYearCaption,c=r.labels.labelYearDropdown,v=[];if(!a)return f.jsx(f.Fragment,{});if(!o)return f.jsx(f.Fragment,{});for(var m=a.getFullYear(),g=o.getFullYear(),D=m;D<=g;D++)v.push(vt(mn(new Date),D));var x=function(N){var U=vt(W(t),Number(N.target.value));e.onChange(U)},k=(n=u==null?void 0:u.Dropdown)!==null&&n!==void 0?n:jt;return f.jsx(k,h({name:"years","aria-label":c(),className:l.dropdown_year,style:s.dropdown_year,onChange:x,value:t.getFullYear(),caption:d(t,{locale:i})},{children:v.map(function(N){return f.jsx("option",h({value:N.getFullYear()},{children:d(N,{locale:i})}),N.getFullYear())})}))}function sa(e,n){var t=C.useState(e),r=t[0],a=t[1],o=n===void 0?r:n;return[o,a]}function la(e){var n=e.month,t=e.defaultMonth,r=e.today,a=n||t||r||new Date,o=e.toDate,i=e.fromDate,s=e.numberOfMonths,l=s===void 0?1:s;if(o&&be(o,a)<0){var u=-1*(l-1);a=L(o,u)}return i&&be(a,i)<0&&(a=i),W(a)}function ua(){var e=O(),n=la(e),t=sa(n,e.month),r=t[0],a=t[1],o=function(i){var s;if(!e.disableNavigation){var l=W(i);a(l),(s=e.onMonthChange)===null||s===void 0||s.call(e,l)}};return[r,o]}function da(e,n){for(var t=n.reverseMonths,r=n.numberOfMonths,a=W(e),o=W(L(a,r)),i=be(o,a),s=[],l=0;l<i;l++){var u=L(a,l);s.push(u)}return t&&(s=s.reverse()),s}function ca(e,n){if(!n.disableNavigation){var t=n.toDate,r=n.pagedNavigation,a=n.numberOfMonths,o=a===void 0?1:a,i=r?o:1,s=W(e);if(!t)return L(s,i);var l=be(t,e);if(!(l<o))return L(s,i)}}function fa(e,n){if(!n.disableNavigation){var t=n.fromDate,r=n.pagedNavigation,a=n.numberOfMonths,o=a===void 0?1:a,i=r?o:1,s=W(e);if(!t)return L(s,-i);var l=be(s,t);if(!(l<=0))return L(s,-i)}}var Pt=C.createContext(void 0);function va(e){var n=O(),t=ua(),r=t[0],a=t[1],o=da(r,n),i=ca(r,n),s=fa(r,n),l=function(c){return o.some(function(v){return et(c,v)})},u=function(c,v){l(c)||(v&&Nt(c,v)?a(L(c,1+n.numberOfMonths*-1)):a(c))},d={currentMonth:r,displayMonths:o,goToMonth:a,goToDate:u,previousMonth:s,nextMonth:i,isDateDisplayed:l};return f.jsx(Pt.Provider,h({value:d},{children:e.children}))}function _e(){var e=C.useContext(Pt);if(!e)throw new Error("useNavigation must be used within a NavigationProvider");return e}function mt(e){var n,t=O(),r=t.classNames,a=t.styles,o=t.components,i=_e().goToMonth,s=function(d){i(L(d,e.displayIndex?-e.displayIndex:0))},l=(n=o==null?void 0:o.CaptionLabel)!==null&&n!==void 0?n:Et,u=f.jsx(l,{id:e.id,displayMonth:e.displayMonth});return f.jsxs("div",h({className:r.caption_dropdowns,style:a.caption_dropdowns},{children:[f.jsx("div",h({className:r.vhidden},{children:u})),f.jsx(oa,{onChange:s,displayMonth:e.displayMonth}),f.jsx(ia,{onChange:s,displayMonth:e.displayMonth})]}))}function ha(e){return f.jsx("svg",h({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:f.jsx("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function ma(e){return f.jsx("svg",h({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:f.jsx("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var Oe=C.forwardRef(function(e,n){var t=O(),r=t.classNames,a=t.styles,o=[r.button_reset,r.button];e.className&&o.push(e.className);var i=o.join(" "),s=h(h({},a.button_reset),a.button);return e.style&&Object.assign(s,e.style),f.jsx("button",h({},e,{ref:n,type:"button",className:i,style:s}))});function pa(e){var n,t,r=O(),a=r.dir,o=r.locale,i=r.classNames,s=r.styles,l=r.labels,u=l.labelPrevious,d=l.labelNext,c=r.components;if(!e.nextMonth&&!e.previousMonth)return f.jsx(f.Fragment,{});var v=u(e.previousMonth,{locale:o}),m=[i.nav_button,i.nav_button_previous].join(" "),g=d(e.nextMonth,{locale:o}),D=[i.nav_button,i.nav_button_next].join(" "),x=(n=c==null?void 0:c.IconRight)!==null&&n!==void 0?n:ma,k=(t=c==null?void 0:c.IconLeft)!==null&&t!==void 0?t:ha;return f.jsxs("div",h({className:i.nav,style:s.nav},{children:[!e.hidePrevious&&f.jsx(Oe,h({name:"previous-month","aria-label":v,className:m,style:s.nav_button_previous,disabled:!e.previousMonth,onClick:e.onPreviousClick},{children:a==="rtl"?f.jsx(x,{className:i.nav_icon,style:s.nav_icon}):f.jsx(k,{className:i.nav_icon,style:s.nav_icon})})),!e.hideNext&&f.jsx(Oe,h({name:"next-month","aria-label":g,className:D,style:s.nav_button_next,disabled:!e.nextMonth,onClick:e.onNextClick},{children:a==="rtl"?f.jsx(k,{className:i.nav_icon,style:s.nav_icon}):f.jsx(x,{className:i.nav_icon,style:s.nav_icon})}))]}))}function pt(e){var n=O().numberOfMonths,t=_e(),r=t.previousMonth,a=t.nextMonth,o=t.goToMonth,i=t.displayMonths,s=i.findIndex(function(g){return et(e.displayMonth,g)}),l=s===0,u=s===i.length-1,d=n>1&&(l||!u),c=n>1&&(u||!l),v=function(){r&&o(r)},m=function(){a&&o(a)};return f.jsx(pa,{displayMonth:e.displayMonth,hideNext:d,hidePrevious:c,nextMonth:a,previousMonth:r,onPreviousClick:v,onNextClick:m})}function ga(e){var n,t=O(),r=t.classNames,a=t.disableNavigation,o=t.styles,i=t.captionLayout,s=t.components,l=(n=s==null?void 0:s.CaptionLabel)!==null&&n!==void 0?n:Et,u;return a?u=f.jsx(l,{id:e.id,displayMonth:e.displayMonth}):i==="dropdown"?u=f.jsx(mt,{displayMonth:e.displayMonth,id:e.id}):i==="dropdown-buttons"?u=f.jsxs(f.Fragment,{children:[f.jsx(mt,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id}),f.jsx(pt,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id})]}):u=f.jsxs(f.Fragment,{children:[f.jsx(l,{id:e.id,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),f.jsx(pt,{displayMonth:e.displayMonth,id:e.id})]}),f.jsx("div",h({className:r.caption,style:o.caption},{children:u}))}function xa(e){var n=O(),t=n.footer,r=n.styles,a=n.classNames.tfoot;return t?f.jsx("tfoot",h({className:a,style:r.tfoot},{children:f.jsx("tr",{children:f.jsx("td",h({colSpan:8},{children:t}))})})):f.jsx(f.Fragment,{})}function ya(e,n,t){for(var r=t?te(new Date):$(new Date,{locale:e,weekStartsOn:n}),a=[],o=0;o<7;o++){var i=j(r,o);a.push(i)}return a}function ba(){var e=O(),n=e.classNames,t=e.styles,r=e.showWeekNumber,a=e.locale,o=e.weekStartsOn,i=e.ISOWeek,s=e.formatters.formatWeekdayName,l=e.labels.labelWeekday,u=ya(a,o,i);return f.jsxs("tr",h({style:t.head_row,className:n.head_row},{children:[r&&f.jsx("td",{style:t.head_cell,className:n.head_cell}),u.map(function(d,c){return f.jsx("th",h({scope:"col",className:n.head_cell,style:t.head_cell,"aria-label":l(d,{locale:a})},{children:s(d,{locale:a})}),c)})]}))}function wa(){var e,n=O(),t=n.classNames,r=n.styles,a=n.components,o=(e=a==null?void 0:a.HeadRow)!==null&&e!==void 0?e:ba;return f.jsx("thead",h({style:r.head,className:t.head},{children:f.jsx(o,{})}))}function Da(e){var n=O(),t=n.locale,r=n.formatters.formatDay;return f.jsx(f.Fragment,{children:r(e.date,{locale:t})})}var tt=C.createContext(void 0);function _a(e){if(!we(e.initialProps)){var n={selected:void 0,modifiers:{disabled:[]}};return f.jsx(tt.Provider,h({value:n},{children:e.children}))}return f.jsx(Ca,{initialProps:e.initialProps,children:e.children})}function Ca(e){var n=e.initialProps,t=e.children,r=n.selected,a=n.min,o=n.max,i=function(u,d,c){var v,m;(v=n.onDayClick)===null||v===void 0||v.call(n,u,d,c);var g=!!(d.selected&&a&&(r==null?void 0:r.length)===a);if(!g){var D=!!(!d.selected&&o&&(r==null?void 0:r.length)===o);if(!D){var x=r?Ot([],r,!0):[];if(d.selected){var k=x.findIndex(function(N){return P(u,N)});x.splice(k,1)}else x.push(u);(m=n.onSelect)===null||m===void 0||m.call(n,x,u,d,c)}}},s={disabled:[]};r&&s.disabled.push(function(u){var d=o&&r.length>o-1,c=r.some(function(v){return P(v,u)});return!!(d&&!c)});var l={selected:r,onDayClick:i,modifiers:s};return f.jsx(tt.Provider,h({value:l},{children:t}))}function nt(){var e=C.useContext(tt);if(!e)throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");return e}function ka(e,n){var t=n||{},r=t.from,a=t.to;return r&&a?P(a,e)&&P(r,e)?void 0:P(a,e)?{from:a,to:void 0}:P(r,e)?void 0:Xe(r,e)?{from:e,to:a}:{from:r,to:e}:a?Xe(e,a)?{from:a,to:e}:{from:e,to:a}:r?Nt(e,r)?{from:e,to:r}:{from:r,to:e}:{from:e,to:void 0}}var rt=C.createContext(void 0);function Ma(e){if(!De(e.initialProps)){var n={selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}};return f.jsx(rt.Provider,h({value:n},{children:e.children}))}return f.jsx(Na,{initialProps:e.initialProps,children:e.children})}function Na(e){var n=e.initialProps,t=e.children,r=n.selected,a=r||{},o=a.from,i=a.to,s=n.min,l=n.max,u=function(m,g,D){var x,k;(x=n.onDayClick)===null||x===void 0||x.call(n,m,g,D);var N=ka(m,r);(k=n.onSelect)===null||k===void 0||k.call(n,N,m,g,D)},d={range_start:[],range_end:[],range_middle:[],disabled:[]};if(o?(d.range_start=[o],i?(d.range_end=[i],P(o,i)||(d.range_middle=[{after:o,before:i}])):d.range_end=[o]):i&&(d.range_start=[i],d.range_end=[i]),s&&(o&&!i&&d.disabled.push({after:Ie(o,s-1),before:j(o,s-1)}),o&&i&&d.disabled.push({after:o,before:j(o,s-1)}),!o&&i&&d.disabled.push({after:Ie(i,s-1),before:j(i,s-1)})),l){if(o&&!i&&(d.disabled.push({before:j(o,-l+1)}),d.disabled.push({after:j(o,l-1)})),o&&i){var c=A(i,o)+1,v=l-c;d.disabled.push({before:Ie(o,v)}),d.disabled.push({after:j(i,v)})}!o&&i&&(d.disabled.push({before:j(i,-l+1)}),d.disabled.push({after:j(i,l-1)}))}return f.jsx(rt.Provider,h({value:{selected:r,onDayClick:u,modifiers:d}},{children:t}))}function at(){var e=C.useContext(rt);if(!e)throw new Error("useSelectRange must be used within a SelectRangeProvider");return e}function ke(e){return Array.isArray(e)?Ot([],e,!0):e!==void 0?[e]:[]}function Oa(e){var n={};return Object.entries(e).forEach(function(t){var r=t[0],a=t[1];n[r]=ke(a)}),n}var F;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(F||(F={}));var Ta=F.Selected,H=F.Disabled,Sa=F.Hidden,Ea=F.Today,Ue=F.RangeEnd,He=F.RangeMiddle,Be=F.RangeStart,ja=F.Outside;function Pa(e,n,t){var r,a=(r={},r[Ta]=ke(e.selected),r[H]=ke(e.disabled),r[Sa]=ke(e.hidden),r[Ea]=[e.today],r[Ue]=[],r[He]=[],r[Be]=[],r[ja]=[],r);return e.fromDate&&a[H].push({before:e.fromDate}),e.toDate&&a[H].push({after:e.toDate}),we(e)?a[H]=a[H].concat(n.modifiers[H]):De(e)&&(a[H]=a[H].concat(t.modifiers[H]),a[Be]=t.modifiers[Be],a[He]=t.modifiers[He],a[Ue]=t.modifiers[Ue]),a}var Wt=C.createContext(void 0);function Wa(e){var n=O(),t=nt(),r=at(),a=Pa(n,t,r),o=Oa(n.modifiers),i=h(h({},a),o);return f.jsx(Wt.Provider,h({value:i},{children:e.children}))}function Yt(){var e=C.useContext(Wt);if(!e)throw new Error("useModifiers must be used within a ModifiersProvider");return e}function Ya(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function La(e){return!!(e&&typeof e=="object"&&"from"in e)}function Fa(e){return!!(e&&typeof e=="object"&&"after"in e)}function Ra(e){return!!(e&&typeof e=="object"&&"before"in e)}function Ia(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function $a(e,n){var t,r=n.from,a=n.to;if(r&&a){var o=A(a,r)<0;o&&(t=[a,r],r=t[0],a=t[1]);var i=A(e,r)>=0&&A(a,e)>=0;return i}return a?P(a,e):r?P(r,e):!1}function Ua(e){return ze(e)}function Ha(e){return Array.isArray(e)&&e.every(ze)}function Ba(e,n){return n.some(function(t){if(typeof t=="boolean")return t;if(Ua(t))return P(e,t);if(Ha(t))return t.includes(e);if(La(t))return $a(e,t);if(Ia(t))return t.dayOfWeek.includes(e.getDay());if(Ya(t)){var r=A(t.before,e),a=A(t.after,e),o=r>0,i=a<0,s=Xe(t.before,t.after);return s?i&&o:o||i}return Fa(t)?A(e,t.after)>0:Ra(t)?A(t.before,e)>0:typeof t=="function"?t(e):!1})}function ot(e,n,t){var r=Object.keys(n).reduce(function(o,i){var s=n[i];return Ba(e,s)&&o.push(i),o},[]),a={};return r.forEach(function(o){return a[o]=!0}),t&&!et(e,t)&&(a.outside=!0),a}function Aa(e,n){for(var t=W(e[0]),r=Ke(e[e.length-1]),a,o,i=t;i<=r;){var s=ot(i,n),l=!s.disabled&&!s.hidden;if(!l){i=j(i,1);continue}if(s.selected)return i;s.today&&!o&&(o=i),a||(a=i),i=j(i,1)}return o||a}var qa=365;function Lt(e,n){var t=n.moveBy,r=n.direction,a=n.context,o=n.modifiers,i=n.retry,s=i===void 0?{count:0,lastFocused:e}:i,l=a.weekStartsOn,u=a.fromDate,d=a.toDate,c=a.locale,v={day:j,week:Ge,month:L,year:un,startOfWeek:function(x){return a.ISOWeek?te(x):$(x,{locale:c,weekStartsOn:l})},endOfWeek:function(x){return a.ISOWeek?_t(x):Je(x,{locale:c,weekStartsOn:l})}},m=v[t](e,r==="after"?1:-1);r==="before"&&u?m=dn([u,m]):r==="after"&&d&&(m=cn([d,m]));var g=!0;if(o){var D=ot(m,o);g=!D.disabled&&!D.hidden}return g?m:s.count>qa?s.lastFocused:Lt(m,{moveBy:t,direction:r,context:a,modifiers:o,retry:h(h({},s),{count:s.count+1})})}var Ft=C.createContext(void 0);function Ga(e){var n=_e(),t=Yt(),r=C.useState(),a=r[0],o=r[1],i=C.useState(),s=i[0],l=i[1],u=Aa(n.displayMonths,t),d=a??(s&&n.isDateDisplayed(s))?s:u,c=function(){l(a),o(void 0)},v=function(x){o(x)},m=O(),g=function(x,k){if(a){var N=Lt(a,{moveBy:x,direction:k,context:m,modifiers:t});P(a,N)||(n.goToDate(N,a),v(N))}},D={focusedDay:a,focusTarget:d,blur:c,focus:v,focusDayAfter:function(){return g("day","after")},focusDayBefore:function(){return g("day","before")},focusWeekAfter:function(){return g("week","after")},focusWeekBefore:function(){return g("week","before")},focusMonthBefore:function(){return g("month","before")},focusMonthAfter:function(){return g("month","after")},focusYearBefore:function(){return g("year","before")},focusYearAfter:function(){return g("year","after")},focusStartOfWeek:function(){return g("startOfWeek","before")},focusEndOfWeek:function(){return g("endOfWeek","after")}};return f.jsx(Ft.Provider,h({value:D},{children:e.children}))}function it(){var e=C.useContext(Ft);if(!e)throw new Error("useFocusContext must be used within a FocusProvider");return e}function Xa(e,n){var t=Yt(),r=ot(e,t,n);return r}var st=C.createContext(void 0);function Qa(e){if(!Se(e.initialProps)){var n={selected:void 0};return f.jsx(st.Provider,h({value:n},{children:e.children}))}return f.jsx(Va,{initialProps:e.initialProps,children:e.children})}function Va(e){var n=e.initialProps,t=e.children,r=function(o,i,s){var l,u,d;if((l=n.onDayClick)===null||l===void 0||l.call(n,o,i,s),i.selected&&!n.required){(u=n.onSelect)===null||u===void 0||u.call(n,void 0,o,i,s);return}(d=n.onSelect)===null||d===void 0||d.call(n,o,o,i,s)},a={selected:n.selected,onDayClick:r};return f.jsx(st.Provider,h({value:a},{children:t}))}function Rt(){var e=C.useContext(st);if(!e)throw new Error("useSelectSingle must be used within a SelectSingleProvider");return e}function za(e,n){var t=O(),r=Rt(),a=nt(),o=at(),i=it(),s=i.focusDayAfter,l=i.focusDayBefore,u=i.focusWeekAfter,d=i.focusWeekBefore,c=i.blur,v=i.focus,m=i.focusMonthBefore,g=i.focusMonthAfter,D=i.focusYearBefore,x=i.focusYearAfter,k=i.focusStartOfWeek,N=i.focusEndOfWeek,U=function(y){var b,Ye,Le,Fe;Se(t)?(b=r.onDayClick)===null||b===void 0||b.call(r,e,n,y):we(t)?(Ye=a.onDayClick)===null||Ye===void 0||Ye.call(a,e,n,y):De(t)?(Le=o.onDayClick)===null||Le===void 0||Le.call(o,e,n,y):(Fe=t.onDayClick)===null||Fe===void 0||Fe.call(t,e,n,y)},z=function(y){var b;v(e),(b=t.onDayFocus)===null||b===void 0||b.call(t,e,n,y)},fe=function(y){var b;c(),(b=t.onDayBlur)===null||b===void 0||b.call(t,e,n,y)},Y=function(y){var b;(b=t.onDayMouseEnter)===null||b===void 0||b.call(t,e,n,y)},K=function(y){var b;(b=t.onDayMouseLeave)===null||b===void 0||b.call(t,e,n,y)},ve=function(y){var b;(b=t.onDayPointerEnter)===null||b===void 0||b.call(t,e,n,y)},he=function(y){var b;(b=t.onDayPointerLeave)===null||b===void 0||b.call(t,e,n,y)},ne=function(y){var b;(b=t.onDayTouchCancel)===null||b===void 0||b.call(t,e,n,y)},Ee=function(y){var b;(b=t.onDayTouchEnd)===null||b===void 0||b.call(t,e,n,y)},je=function(y){var b;(b=t.onDayTouchMove)===null||b===void 0||b.call(t,e,n,y)},Pe=function(y){var b;(b=t.onDayTouchStart)===null||b===void 0||b.call(t,e,n,y)},We=function(y){var b;(b=t.onDayKeyUp)===null||b===void 0||b.call(t,e,n,y)},E=function(y){var b;switch(y.key){case"ArrowLeft":y.preventDefault(),y.stopPropagation(),t.dir==="rtl"?s():l();break;case"ArrowRight":y.preventDefault(),y.stopPropagation(),t.dir==="rtl"?l():s();break;case"ArrowDown":y.preventDefault(),y.stopPropagation(),u();break;case"ArrowUp":y.preventDefault(),y.stopPropagation(),d();break;case"PageUp":y.preventDefault(),y.stopPropagation(),y.shiftKey?D():m();break;case"PageDown":y.preventDefault(),y.stopPropagation(),y.shiftKey?x():g();break;case"Home":y.preventDefault(),y.stopPropagation(),k();break;case"End":y.preventDefault(),y.stopPropagation(),N();break}(b=t.onDayKeyDown)===null||b===void 0||b.call(t,e,n,y)},R={onClick:U,onFocus:z,onBlur:fe,onKeyDown:E,onKeyUp:We,onMouseEnter:Y,onMouseLeave:K,onPointerEnter:ve,onPointerLeave:he,onTouchCancel:ne,onTouchEnd:Ee,onTouchMove:je,onTouchStart:Pe};return R}function Ka(){var e=O(),n=Rt(),t=nt(),r=at(),a=Se(e)?n.selected:we(e)?t.selected:De(e)?r.selected:void 0;return a}function Ja(e){return Object.values(F).includes(e)}function Za(e,n){var t=[e.classNames.day];return Object.keys(n).forEach(function(r){var a=e.modifiersClassNames[r];if(a)t.push(a);else if(Ja(r)){var o=e.classNames["day_".concat(r)];o&&t.push(o)}}),t}function eo(e,n){var t=h({},e.styles.day);return Object.keys(n).forEach(function(r){var a;t=h(h({},t),(a=e.modifiersStyles)===null||a===void 0?void 0:a[r])}),t}function to(e,n,t){var r,a,o,i=O(),s=it(),l=Xa(e,n),u=za(e,l),d=Ka(),c=!!(i.onDayClick||i.mode!=="default");C.useEffect(function(){var Y;l.outside||s.focusedDay&&c&&P(s.focusedDay,e)&&((Y=t.current)===null||Y===void 0||Y.focus())},[s.focusedDay,e,t,c,l.outside]);var v=Za(i,l).join(" "),m=eo(i,l),g=!!(l.outside&&!i.showOutsideDays||l.hidden),D=(o=(a=i.components)===null||a===void 0?void 0:a.DayContent)!==null&&o!==void 0?o:Da,x=f.jsx(D,{date:e,displayMonth:n,activeModifiers:l}),k={style:m,className:v,children:x,role:"gridcell"},N=s.focusTarget&&P(s.focusTarget,e)&&!l.outside,U=s.focusedDay&&P(s.focusedDay,e),z=h(h(h({},k),(r={disabled:l.disabled,role:"gridcell"},r["aria-selected"]=l.selected,r.tabIndex=U||N?0:-1,r)),u),fe={isButton:c,isHidden:g,activeModifiers:l,selectedDays:d,buttonProps:z,divProps:k};return fe}function no(e){var n=C.useRef(null),t=to(e.date,e.displayMonth,n);return t.isHidden?f.jsx("div",{role:"gridcell"}):t.isButton?f.jsx(Oe,h({name:"day",ref:n},t.buttonProps)):f.jsx("div",h({},t.divProps))}function ro(e){var n=e.number,t=e.dates,r=O(),a=r.onWeekNumberClick,o=r.styles,i=r.classNames,s=r.locale,l=r.labels.labelWeekNumber,u=r.formatters.formatWeekNumber,d=u(Number(n),{locale:s});if(!a)return f.jsx("span",h({className:i.weeknumber,style:o.weeknumber},{children:d}));var c=l(Number(n),{locale:s}),v=function(m){a(n,t,m)};return f.jsx(Oe,h({name:"week-number","aria-label":c,className:i.weeknumber,style:o.weeknumber,onClick:v},{children:d}))}function ao(e){var n,t,r=O(),a=r.styles,o=r.classNames,i=r.showWeekNumber,s=r.components,l=(n=s==null?void 0:s.Day)!==null&&n!==void 0?n:no,u=(t=s==null?void 0:s.WeekNumber)!==null&&t!==void 0?t:ro,d;return i&&(d=f.jsx("td",h({className:o.cell,style:a.cell},{children:f.jsx(u,{number:e.weekNumber,dates:e.dates})}))),f.jsxs("tr",h({className:o.row,style:a.row},{children:[d,e.dates.map(function(c){return f.jsx("td",h({className:o.cell,style:a.cell,role:"presentation"},{children:f.jsx(l,{displayMonth:e.displayMonth,date:c})}),Tr(c))})]}))}function gt(e,n,t){for(var r=t!=null&&t.ISOWeek?_t(n):Je(n,t),a=t!=null&&t.ISOWeek?te(e):$(e,t),o=A(r,a),i=[],s=0;s<=o;s++)i.push(j(a,s));var l=i.reduce(function(u,d){var c=t!=null&&t.ISOWeek?Nr(d):Pr(d,t),v=u.find(function(m){return m.weekNumber===c});return v?(v.dates.push(d),u):(u.push({weekNumber:c,dates:[d]}),u)},[]);return l}function oo(e,n){var t=gt(W(e),Ke(e),n);if(n!=null&&n.useFixedWeeks){var r=Yr(e,n);if(r<6){var a=t[t.length-1],o=a.dates[a.dates.length-1],i=Ge(o,6-r),s=gt(Ge(o,1),i,n);t.push.apply(t,s)}}return t}function io(e){var n,t,r,a=O(),o=a.locale,i=a.classNames,s=a.styles,l=a.hideHead,u=a.fixedWeeks,d=a.components,c=a.weekStartsOn,v=a.firstWeekContainsDate,m=a.ISOWeek,g=oo(e.displayMonth,{useFixedWeeks:!!u,ISOWeek:m,locale:o,weekStartsOn:c,firstWeekContainsDate:v}),D=(n=d==null?void 0:d.Head)!==null&&n!==void 0?n:wa,x=(t=d==null?void 0:d.Row)!==null&&t!==void 0?t:ao,k=(r=d==null?void 0:d.Footer)!==null&&r!==void 0?r:xa;return f.jsxs("table",h({id:e.id,className:i.table,style:s.table,role:"grid","aria-labelledby":e["aria-labelledby"]},{children:[!l&&f.jsx(D,{}),f.jsx("tbody",h({className:i.tbody,style:s.tbody},{children:g.map(function(N){return f.jsx(x,{displayMonth:e.displayMonth,dates:N.dates,weekNumber:N.weekNumber},N.weekNumber)})})),f.jsx(k,{displayMonth:e.displayMonth})]}))}function so(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var lo=so()?C.useLayoutEffect:C.useEffect,Ae=!1,uo=0;function xt(){return"react-day-picker-".concat(++uo)}function co(e){var n,t=e??(Ae?xt():null),r=C.useState(t),a=r[0],o=r[1];return lo(function(){a===null&&o(xt())},[]),C.useEffect(function(){Ae===!1&&(Ae=!0)},[]),(n=e??a)!==null&&n!==void 0?n:void 0}function fo(e){var n,t,r=O(),a=r.dir,o=r.classNames,i=r.styles,s=r.components,l=_e().displayMonths,u=co(r.id?"".concat(r.id,"-").concat(e.displayIndex):void 0),d=r.id?"".concat(r.id,"-grid-").concat(e.displayIndex):void 0,c=[o.month],v=i.month,m=e.displayIndex===0,g=e.displayIndex===l.length-1,D=!m&&!g;a==="rtl"&&(n=[m,g],g=n[0],m=n[1]),m&&(c.push(o.caption_start),v=h(h({},v),i.caption_start)),g&&(c.push(o.caption_end),v=h(h({},v),i.caption_end)),D&&(c.push(o.caption_between),v=h(h({},v),i.caption_between));var x=(t=s==null?void 0:s.Caption)!==null&&t!==void 0?t:ga;return f.jsxs("div",h({className:c.join(" "),style:v},{children:[f.jsx(x,{id:u,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),f.jsx(io,{id:d,"aria-labelledby":u,displayMonth:e.displayMonth})]}),e.displayIndex)}function vo(e){var n=O(),t=n.classNames,r=n.styles;return f.jsx("div",h({className:t.months,style:r.months},{children:e.children}))}function ho(e){var n,t,r=e.initialProps,a=O(),o=it(),i=_e(),s=C.useState(!1),l=s[0],u=s[1];C.useEffect(function(){a.initialFocus&&o.focusTarget&&(l||(o.focus(o.focusTarget),u(!0)))},[a.initialFocus,l,o.focus,o.focusTarget,o]);var d=[a.classNames.root,a.className];a.numberOfMonths>1&&d.push(a.classNames.multiple_months),a.showWeekNumber&&d.push(a.classNames.with_weeknumber);var c=h(h({},a.styles.root),a.style),v=Object.keys(r).filter(function(g){return g.startsWith("data-")}).reduce(function(g,D){var x;return h(h({},g),(x={},x[D]=r[D],x))},{}),m=(t=(n=r.components)===null||n===void 0?void 0:n.Months)!==null&&t!==void 0?t:vo;return f.jsx("div",h({className:d.join(" "),style:c,dir:a.dir,id:a.id,nonce:r.nonce,title:r.title,lang:r.lang},v,{children:f.jsx(m,{children:i.displayMonths.map(function(g,D){return f.jsx(fo,{displayIndex:D,displayMonth:g},D)})})}))}function mo(e){var n=e.children,t=Fr(e,["children"]);return f.jsx(ra,h({initialProps:t},{children:f.jsx(va,{children:f.jsx(Qa,h({initialProps:t},{children:f.jsx(_a,h({initialProps:t},{children:f.jsx(Ma,h({initialProps:t},{children:f.jsx(Wa,{children:f.jsx(Ga,{children:n})})}))}))}))})}))}function po(e){return f.jsx(mo,h({},e,{children:f.jsx(ho,{initialProps:e})}))}function It(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Qe(e,n)}function go(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function xo(e,n){e.classList?e.classList.add(n):go(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function yt(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function yo(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=yt(e.className,n):e.setAttribute("class",yt(e.className&&e.className.baseVal||"",n))}const bt={disabled:!1},$t=X.createContext(null);var Ut=function(n){return n.scrollTop},xe="unmounted",Z="exited",ee="entering",de="entered",Ve="exiting",q=function(e){It(n,e);function n(r,a){var o;o=e.call(this,r,a)||this;var i=a,s=i&&!i.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?s?(l=Z,o.appearStatus=ee):l=de:r.unmountOnExit||r.mountOnEnter?l=xe:l=Z,o.state={status:l},o.nextCallback=null,o}n.getDerivedStateFromProps=function(a,o){var i=a.in;return i&&o.status===xe?{status:Z}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(a){var o=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==ee&&i!==de&&(o=ee):(i===ee||i===de)&&(o=Ve)}this.updateStatus(!1,o)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var a=this.props.timeout,o,i,s;return o=i=s=a,a!=null&&typeof a!="number"&&(o=a.exit,i=a.enter,s=a.appear!==void 0?a.appear:i),{exit:o,enter:i,appear:s}},t.updateStatus=function(a,o){if(a===void 0&&(a=!1),o!==null)if(this.cancelNextCallback(),o===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Ce.findDOMNode(this);i&&Ut(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:xe})},t.performEnter=function(a){var o=this,i=this.props.enter,s=this.context?this.context.isMounting:a,l=this.props.nodeRef?[s]:[Ce.findDOMNode(this),s],u=l[0],d=l[1],c=this.getTimeouts(),v=s?c.appear:c.enter;if(!a&&!i||bt.disabled){this.safeSetState({status:de},function(){o.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:ee},function(){o.props.onEntering(u,d),o.onTransitionEnd(v,function(){o.safeSetState({status:de},function(){o.props.onEntered(u,d)})})})},t.performExit=function(){var a=this,o=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:Ce.findDOMNode(this);if(!o||bt.disabled){this.safeSetState({status:Z},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Ve},function(){a.props.onExiting(s),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:Z},function(){a.props.onExited(s)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(a,o){o=this.setNextCallback(o),this.setState(a,o)},t.setNextCallback=function(a){var o=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,o.nextCallback=null,a(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},t.onTransitionEnd=function(a,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:Ce.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=l[0],d=l[1];this.props.addEndListener(u,d)}a!=null&&setTimeout(this.nextCallback,a)},t.render=function(){var a=this.state.status;if(a===xe)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var s=Dt(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return X.createElement($t.Provider,{value:null},typeof i=="function"?i(a,s):X.cloneElement(X.Children.only(i),s))},n}(X.Component);q.contextType=$t;q.propTypes={};function ue(){}q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ue,onEntering:ue,onEntered:ue,onExit:ue,onExiting:ue,onExited:ue};q.UNMOUNTED=xe;q.EXITED=Z;q.ENTERING=ee;q.ENTERED=de;q.EXITING=Ve;const bo=q;var wo=function(n,t){return n&&t&&t.split(" ").forEach(function(r){return xo(n,r)})},qe=function(n,t){return n&&t&&t.split(" ").forEach(function(r){return yo(n,r)})},lt=function(e){It(n,e);function n(){for(var r,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return r=e.call.apply(e,[this].concat(o))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(s,l){var u=r.resolveArguments(s,l),d=u[0],c=u[1];r.removeClasses(d,"exit"),r.addClass(d,c?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(s,l)},r.onEntering=function(s,l){var u=r.resolveArguments(s,l),d=u[0],c=u[1],v=c?"appear":"enter";r.addClass(d,v,"active"),r.props.onEntering&&r.props.onEntering(s,l)},r.onEntered=function(s,l){var u=r.resolveArguments(s,l),d=u[0],c=u[1],v=c?"appear":"enter";r.removeClasses(d,v),r.addClass(d,v,"done"),r.props.onEntered&&r.props.onEntered(s,l)},r.onExit=function(s){var l=r.resolveArguments(s),u=l[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(s)},r.onExiting=function(s){var l=r.resolveArguments(s),u=l[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(s)},r.onExited=function(s){var l=r.resolveArguments(s),u=l[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(s)},r.resolveArguments=function(s,l){return r.props.nodeRef?[r.props.nodeRef.current,s]:[s,l]},r.getClassNames=function(s){var l=r.props.classNames,u=typeof l=="string",d=u&&l?l+"-":"",c=u?""+d+s:l[s],v=u?c+"-active":l[s+"Active"],m=u?c+"-done":l[s+"Done"];return{baseClassName:c,activeClassName:v,doneClassName:m}},r}var t=n.prototype;return t.addClass=function(a,o,i){var s=this.getClassNames(o)[i+"ClassName"],l=this.getClassNames("enter"),u=l.doneClassName;o==="appear"&&i==="done"&&u&&(s+=" "+u),i==="active"&&a&&Ut(a),s&&(this.appliedClasses[o][i]=s,wo(a,s))},t.removeClasses=function(a,o){var i=this.appliedClasses[o],s=i.base,l=i.active,u=i.done;this.appliedClasses[o]={},s&&qe(a,s),l&&qe(a,l),u&&qe(a,u)},t.render=function(){var a=this.props;a.classNames;var o=Dt(a,["classNames"]);return X.createElement(bo,At({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(X.Component);lt.defaultProps={classNames:""};lt.propTypes={};const Do=lt,_o=T.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`,Co=T.div`
  position: absolute;
  left: 0;
  ${({positionCalendar:e})=>({[e]:"calc(100% + 10px)"})}

  .rdp {
    width: 215px;
    border-radius: 8px;
    padding: 14px;
    margin: 0;
    background-color: #ef8964;
  }

  .calendar-header {
    position: relative;
    margin-bottom: 14px;
    text-align: center;
  }

  .current-month-title {
    user-select: none;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
  }

  .month-title-dropdown {
    margin-right: 10px;
  }

  .year-title-dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .calendar-nav-button-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .calendar-nav-icon {
    color: #efede8;
    height: 10px;
    width: 10px;
  }

  .days-wrapper {
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    display: flex;
    flex-direction: column;
    gap: 11px;
    padding-top: 14px;
  }

  .name-days-of-week-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .name-days-of-week {
    user-select: none;
    width: 16px;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
  }

  .days-of-month-wrapper {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .days-of-month-row {
    display: flex;
    justify-content: space-between;
  }

  .day-of-month {
    user-select: none;
    width: 16px;
    position: relative;
    z-index: 1;
    border: none;
    background-color: transparent;
    padding: 0;
    color: #efede8;
    font-size: 14px;
    line-height: 1.29%;
    letter-spacing: -0.28px;
    cursor: pointer;

    ::after {
      transition:
        background-color 300ms ease-in-out,
        box-shadow 150ms ease-in-out;
      content: '';
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
    }

    &:not(button[disabled]):not(.days-of-month-outside):hover {
      ::after {
        background-color: #040404;
        box-shadow:
          0 0 10px 1px #efede8,
          inset 0 0 2px 1px #efede8;
      }
    }
  }

  .day-of-month[disabled] svg,
  .days-of-month-disabled,
  .days-of-month-outside {
    color: rgba(239, 237, 232, 0.2);
    cursor: not-allowed;
  }

  .day-selected {
    position: relative;
    z-index: 0;

    ::after {
      content: '';
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-shadow:
        0 0 10px 1px #efede8,
        inset 0 0 2px 1px #efede8;
      background-color: #040404;
      position: absolute;
    }
  }
`,ko=T(Co)`
  &.day-picker-wrapper-enter {
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({positionCalendar:e})=>e==="top"?"-50px":" 50px"}
      );
  }

  &.day-picker-wrapper-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0px);
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  /* Для зникнення */
  &.day-picker-wrapper-exit {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }

  &.day-picker-wrapper-exit-active {
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({positionCalendar:e})=>e==="top"?"-50px":" 50px"}
      );
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
`,Mo={months:"months",head:"head",day:"day",button_reset:"button_reset",day_today:"day_today",nav_button:"nav_button",cell:"cell",caption:"calendar-header",caption_label:"current-month-title",nav:"calendar-nav-button-wrapper",nav_icon:"calendar-nav-icon",dropdown_month:"month-title-dropdown",dropdown_year:"year-title-dropdown",table:"days-wrapper",head_row:"name-days-of-week-wrapper",head_cell:"name-days-of-week",tbody:"days-of-month-wrapper",row:"days-of-month-row",button:"day-of-month",day_disabled:"days-of-month-disabled",day_outside:"days-of-month-outside",day_selected:"day-selected"};function Ht({inputText:e,...n}){const[t,r]=C.useState(!1),[a,o]=C.useState("bottom"),i=C.useRef(null),s=C.useRef(null),l=u=>{window.innerHeight-u.target.getBoundingClientRect().bottom<250?o("bottom"):o("top"),r(v=>!v)};return C.useEffect(()=>{const u=d=>{i.current&&!i.current.contains(d.target)&&s.current&&!s.current.contains(d.target)&&r(!1)};return document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}},[]),p.jsxs(p.Fragment,{children:[p.jsxs(_o,{ref:i,onClick:l,children:[p.jsx("p",{className:"calendar-input-text",children:e}),p.jsx("svg",{className:"calendar-svg",children:p.jsx("use",{href:I+"#calendar"})})]}),p.jsx(Do,{in:t,nodeRef:s,timeout:300,classNames:"day-picker-wrapper",unmountOnExit:!0,children:p.jsx(ko,{ref:s,positionCalendar:a,children:p.jsx(po,{mode:"single",locale:Ze,weekStartsOn:1,showOutsideDays:!0,classNames:Mo,...n})})})]})}Ht.propTypes={inputText:B.string.isRequired,dayPickerProps:B.shape({selected:B.instanceOf(Date).isRequired,onSelect:B.func.isRequired,fromDate:B.instanceOf(Date),toDate:B.instanceOf(Date),captionLayout:B.string})};const No=T.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,Oo=T.div`
  width: 125px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 161px;
  }

  div:hover > .calendar-svg,
  div:hover > .calendar-input-text {
    transform: scale(1.02);
    stroke: #efede8;
    color: #ef8964;
  }

  .calendar-svg {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .calendar-input-text {
    user-select: none;
    font-size: 18px;
    font-weight: 700;
    transition:
      color 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`,wt=T.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: #efede8;
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: #ef8964;
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: rgba(239, 237, 232, 0.2);
  }
`;function Bt({selectedDate:e,setSelectedDate:n}){const t=new Date(2023,9,18,10,58),r=()=>{const i=new Date(e);i.setDate(e.getDate()-1),n(i)},a=()=>{const i=new Date(e);i.setDate(e.getDate()+1),n(i)},o=e.toDateString()===t.toDateString();return p.jsxs(No,{children:[p.jsx(Oo,{children:p.jsx(Ht,{inputText:V(e,"dd/MM/yyyy"),selected:e,onSelect:n,fromDate:t})}),p.jsxs("div",{children:[p.jsx(wt,{disabled:o,onClick:r,children:p.jsx("svg",{children:p.jsx("use",{href:I+"#nav-arrow-left"})})}),p.jsx(wt,{onClick:a,children:p.jsx("svg",{children:p.jsx("use",{href:I+"#nav-arrow-right"})})})]})]})}Bt.propTypes={selectedDate:B.instanceOf(Date).isRequired,setSelectedDate:B.func.isRequired};const To=T.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,So=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`,Eo=T.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,jo=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;function Yo(){const[e,n]=C.useState(new Date);return p.jsxs(To,{children:[p.jsxs(So,{children:[p.jsx(qt,{text:"Diary"}),p.jsx(Bt,{selectedDate:e,setSelectedDate:n})]}),p.jsxs(Eo,{children:[p.jsx(Jt,{}),p.jsxs(jo,{children:[p.jsx(nn,{}),p.jsx(en,{})]})]})]})}export{Yo as Diary};
