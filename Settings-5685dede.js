import{u as e,c as t,i as s,a as i,b as r,t as o,d as l}from"./index.js";import{L as a}from"./ListErrors-3e768b81.js";const n=o('<div class="settings-page"><div class="container page"><div class="row"><div class="col-md-6 offset-md-3 col-xs-12"><h1 class="text-xs-center">Your Settings</h1><form><fieldset><fieldset class="form-group"><input class="form-control" type="text" placeholder="URL of profile picture"></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="text" placeholder="Your Name"></fieldset><fieldset class="form-group"><textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="text" placeholder="Email"></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="password" placeholder="Password"></fieldset><button class="btn btn-lg btn-primary pull-xs-right" type="submit">Update Settings</button></fieldset></form><hr><button class="btn btn-outline-danger">Or click here to logout.</button></div></div></div></div>',35);l(["click"]);export default()=>{const[o,{logout:l,updateUser:d}]=e(),[c,v]=t({image:o.currentUser.image||"",username:o.currentUser.username,bio:o.currentUser.bio||"",email:o.currentUser.email,password:""}),u=e=>t=>v(e,t.target.value),g=e=>{e.preventDefault();const t=Object.assign({},c);t.password||delete t.password,t.image||delete t.image,v({updatingUser:!0}),d(t).then(()=>location.hash="/@"+t.username).catch(e=>v({errors:e})).finally(()=>v({updatingUser:!1}))};return(()=>{const e=n.cloneNode(!0),t=e.firstChild.firstChild.firstChild,o=t.firstChild.nextSibling,d=o.firstChild.firstChild,v=d.firstChild,f=d.nextSibling,p=f.firstChild,m=f.nextSibling,_=m.firstChild,b=m.nextSibling,h=b.firstChild,$=b.nextSibling,x=$.firstChild,U=$.nextSibling,C=o.nextSibling.nextSibling;return s(t,i(a,{get errors(){return c.errors}}),o),o.onsubmit=g,v.onchange=u("image"),p.onchange=u("username"),_.onchange=u("bio"),h.onchange=u("email"),x.onchange=u("password"),C.__click=()=>(l(),location.hash="/"),r(e=>{const t=c.image,s=c.updatingUser,i=c.username,r=c.updatingUser,o=c.bio,l=c.updatingUser,a=c.email,n=c.updatingUser,d=c.password,u=c.updatingUser,g=c.updatingUser;return t!==e._v$&&(v.value=e._v$=t),s!==e._v$2&&(v.disabled=e._v$2=s),i!==e._v$3&&(p.value=e._v$3=i),r!==e._v$4&&(p.disabled=e._v$4=r),o!==e._v$5&&(_.value=e._v$5=o),l!==e._v$6&&(_.disabled=e._v$6=l),a!==e._v$7&&(h.value=e._v$7=a),n!==e._v$8&&(h.disabled=e._v$8=n),d!==e._v$9&&(x.value=e._v$9=d),u!==e._v$10&&(x.disabled=e._v$10=u),g!==e._v$11&&(U.disabled=e._v$11=g),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),e})()};