import{u as i,g as l,i as n,w as s,a as t,N as e,b as o,t as r,d as a,h as c}from"./index-a824f4f4.js";import{A as d}from"./ArticleList-0bd7ed55.js";const v=r('<div class="profile-page"><div class="user-info"><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><img class="user-img" alt=""><h4></h4><p></p></div></div></div></div><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><div class="articles-toggle"><ul class="nav nav-pills outline-active"><li class="nav-item"></li><li class="nav-item"></li></ul></div></div></div></div></div>',29),u=r('<i class="ion-gear-a"></i>',2),f=r('<button class="btn btn-sm action-btn"><i class="ion-plus-round"></i>  </button>',4),g=["active","href"],h=["articles","totalPagesCount"],m=["children"];a(["click"]);export default r=>{const[a,{setPage:b,loadArticles:p,unfollow:C,follow:w}]=i(),{location:x}=l(),S=i=>{i.preventDefault(),a.profile.following?C():w()},_=i=>{b(i),p()},$=()=>a.currentUser&&r.username===a.currentUser.username;return function(){const i=v.cloneNode(!0),l=i.firstChild,b=l.firstChild.firstChild.firstChild,p=b.firstChild,C=p.nextSibling,w=C.nextSibling,P=l.nextSibling.firstChild.firstChild,k=P.firstChild.firstChild.firstChild,A=k.nextSibling;C.textContent=r.username;const y=C.firstChild;return n(w,()=>{var i;return null===(i=a.profile)||void 0===i?void 0:i.bio}),n(b,(()=>{const i=s(()=>$());return()=>i()&&t(e,{route:"settings",class:"btn btn-sm btn-outline-secondary action-btn",children:()=>[u.cloneNode(!0)," Edit Profile Settings"]},m)})(),null),n(b,(()=>{const i=s(()=>a.token&&!$());return()=>i()&&function(){const i=f.cloneNode(!0),l=i.firstChild.nextSibling.nextSibling;return i.__click=S,n(i,()=>{var i;return(null===(i=a.profile)||void 0===i?void 0:i.following)?"Unfollow":"Follow"},l),n(i,()=>{var i;return null===(i=a.profile)||void 0===i?void 0:i.username},null),o(()=>{var l,n;return c(i,{"btn-secondary":null===(l=a.profile)||void 0===l?void 0:l.following,"btn-outline-secondary":!(null===(n=a.profile)||void 0===n?void 0:n.following)})}),i}()})(),null),n(k,t(e,{class:"nav-link",active:()=>x().includes("/favorites")?0:1,href:()=>"@"+r.username,children:"My Articles"},g)),n(A,t(e,{class:"nav-link",active:()=>x().includes("/favorites"),href:()=>`@${r.username}/favorites`,children:"Favorited Articles"},g)),n(P,t(d,{articles:()=>Object.values(a.articles),totalPagesCount:()=>a.totalPagesCount,onSetPage:_},h),null),o(i=>{var l;const n=null===(l=a.profile)||void 0===l?void 0:l.image,s=r.username;return n!==i._v$&&(p.src=i._v$=n),s!==i._v$2&&(y.data=i._v$2=s),i},{_v$:void 0,_v$2:void 0}),i}()};
