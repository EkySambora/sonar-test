(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(r,e,o){var content=o(179);"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,o(21).default)("907f7b68",content,!0,{sourceMap:!1})},178:function(r,e,o){"use strict";var t=o(168);o.n(t).a},179:function(r,e,o){(e=o(20)(!1)).push([r.i,".cover{width:400px;min-height:100vh;box-sizing:border-box;display:flex;align-items:center;margin:auto;padding:20px}.cover .box{box-shadow:0 1px 14px -11px #000;width:inherit}.cover .box .form-title{background-color:#9c3d42;color:#fff;padding:20px;text-align:center;font-size:20px;border-radius:5px 5px 0 0}.cover .box .form{margin:40px auto}.cover .box .form input{display:block;width:90%;margin:auto}.cover .box .form input[type=text]{margin:20px auto 5px}.cover .box .form input[type=password]{margin:5px auto}.cover .box .form input[type=password],.cover .box .form input[type=text]{padding:15px;font-size:16px;outline:none;border-radius:5px;border:1px solid #ccc}.cover .box .form span{padding-left:20px;color:red}.cover .box .form .button{background-color:#9c3d42;width:90%;color:#fff;margin:25px auto;padding:15px;font-size:16px;outline:none;border-radius:5px;cursor:pointer;text-align:center}.cover .box .form .button:hover{box-shadow:-1px -1px 4px -1px rgba(0,0,0,.75);background-color:#9c3d42;transition:all .5s}",""]),r.exports=e},181:function(r,e,o){"use strict";o.r(e);o(102);var t={head:function(){return{title:"Login"}},data:function(){return{username:"",password:"",errorStateUsername:!1,errorStatePassword:!1,errorMsgUsername:"",erroMsgPassword:""}},computed:{getUser:function(){return this.$store.state.user}},methods:{validationUsername:function(){if(""==this.username)this.errorStateUsername=!0,this.errorMsgUsername="Tidak Boleh Kosong";else if(this.username!=this.getUser.username)this.errorStateUsername=!0,this.errorMsgUsername="Username Salah";else if(this.username.indexOf(" ")>=0)this.errorStateUsername=!0,this.errorMsgUsername="Tidak Boleh Ada Spasi";else{if(!(this.username.length>=20))return this.errorStateUsername=!1,this.errorMsgUsername="",!0;this.errorStateUsername=!0,this.errorMsgUsername="Tidak Boleh Lebih dari 20"}},validationPassword:function(){if(""==this.password)this.errorStatePassword=!0,this.erroMsgPassword="Tidak Boleh Kosong";else if(this.password!=this.getUser.password)this.errorStatePassword=!0,this.erroMsgPassword="Password Salah";else if(this.password.indexOf(" ")>=0)this.errorStatePassword=!0,this.erroMsgPassword="Tidak Boleh Ada Spasi";else{if(!(this.password.length>=6))return this.errorStatePassword=!1,this.erroMsgPassword="",!0;this.errorStatePassword=!0,this.erroMsgPassword="Tidak Boleh Lebih dari 6"}},login:function(){if(this.validationUsername()&&this.validationPassword()){var data={username:this.username,password:this.password};this.$store.dispatch("setAuth",!0),this.$store.dispatch("setUser",data),this.$nuxt.$router.push({path:"/"})}}}},n=(o(178),o(7)),component=Object(n.a)(t,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"cover"},[o("div",{staticClass:"box"},[o("div",{staticClass:"form-title"},[r._v("\n            Sign in\n        ")]),r._v(" "),o("div",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:r.username,expression:"username"}],style:r.errorStateUsername?"border-color:red;":"border-color:#cccccc;margin: 20px auto;",attrs:{type:"text",placeholder:"username",autofocus:""},domProps:{value:r.username},on:{input:[function(e){e.target.composing||(r.username=e.target.value)},r.validationUsername]}}),r._v(" "),r.errorStateUsername?o("span",[r._v(r._s(r.errorMsgUsername))]):r._e(),r._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:r.password,expression:"password"}],style:r.errorStatePassword?"border-color:red;":"border-color:#cccccc;margin: 20px auto;",attrs:{type:"password",placeholder:"password",autofocus:""},domProps:{value:r.password},on:{input:[function(e){e.target.composing||(r.password=e.target.value)},r.validationPassword],keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.login(e)}}}),r._v(" "),r.errorStatePassword?o("span",[r._v(r._s(r.erroMsgPassword))]):r._e(),r._v(" "),o("div",{staticClass:"button",on:{click:r.login}},[r._v("Login")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);