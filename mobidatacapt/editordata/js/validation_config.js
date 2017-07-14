function ValidationConfig(){this.validation_config={};this.plugins_config={js:[],css:[]};this.date_formats_RFC={US_SLASHED:"mm/dd/yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1123:"D, d M yy",COOKIE:"D, dd M yy",DATE_CUSTOM_1:"dd/mm/yy",DATE_CUSTOM_2:"yy/mm/dd",DATE_CUSTOM_3:"mm-dd-yy",DATE_CUSTOM_4:"dd-mm-yy",DATE_CUSTOM_5:"dd.mm.yy",DATE_CUSTOM_6:"dd.mm.y",DATE_CUSTOM_7:"dd:mm:yy",DATE_CUSTOM_8:"dd.MM y",DATE_CUSTOM_9:"dd.MM"};this.reg_exp_defaults={};this.reg_exp_defaults[_("Alphanumeric")]="/[0-9a-z]/i";this.reg_exp_defaults[_("Only Numbers")]="/^[0-9]+$/";this.reg_exp_defaults[_("Only Letters")]="/^[a-z]+$/i";this.reg_exp_defaults[_("No White Spaces")]="/^[\\S]+$/";this.reg_exp_defaults[_("Bank Routing Number (USA)")]="/^[0-9]{9}$/";this.reg_exp_defaults[_("Bank Account Number (USA)")]="/^[0-9]{8,16}$/";this.reg_exp_defaults[_("eBay Item ID")]="/^\\d{12}$/";this.reg_exp_defaults[_("ZIP Code (USA)")]="/^[0-9]{5}$/";this.reg_exp_defaults[_("Only Upper case")]="/^[A-Z]+$/";this.reg_exp_defaults[_("Only Lower case")]="/^[a-z]+$/";this.reg_exp_defaults[_("Custom")]="";this.html_defaults={};this.html_defaults[_("Hyperlink")]='<a href="http://www.coffeecup.com/" target="_blank">Your custom HTML</a>';this.html_defaults[_("Unordered list")]="<ul><li>List Item 1<br />List Item New Line</li><li>List Item 2</li><li>List Item 3</li></ul>";this.html_defaults[_("Ordered list")]="<ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol>";this.html_defaults[_("Block quotes")]='<blockquote> Getting to work on your website is lightning quick thanks to a wide range of start options. You can create new HTML or CSS files from scratch, or get a jumpstart on a pro design by launching a new project from an existing theme or layout. <small>Someone Famous, <cite title="Cite Source">Cite Source</cite></small></blockquote>';this.html_defaults[_("Table")]="<table><tbody> <tr><th>table heading 1</th><th>table heading 2</th></tr> <tr><td>row 1, cell 1</td><td>row 1, cell 2</td></tr> <tr> <td>row 2, cell 1</td><td>row 2, cell 2</td></tr> <tr><td>row 3, cell 1</td><td>row 3, cell 2</td></tr> <tr><td>row 4, cell 1</td><td>row 4, cell 2</td></tr></tbody></table>";this.html_defaults[_("Override Styles")]="<style>\n#docContainer {\n background-color:#f6eccf;\n border-top:10px solid #e8dcc0;\n border-right:10px solid #e8dcc0;\n border-bottom:10px solid #e8dcc0;\n border-left:10px solid #e8dcc0;\n border-radius:0;\n box-shadow:none;\n}\n#docContainer input, #docContainer textarea, #docContainer select {\n background-color:#fff;\n display:inline-block;\n margin-bottom:9px;\n font-size:15px !important;\n color:#333;\n border:3px solid #e8dcc0;\n border-radius:0 !important;\n}\n#docContainer input, #docContainer textarea {\n padding:8px 6px !important;\n}\n#docContainer select {\n padding:6px !important;\n}\n#docContainer .fb-form-header {\n background-color:#f6eccf;\n margin-bottom:10px;\n}\n#docContainer  .fb-footer {\n background-color:#f6eccf;\n}\n#docContainer  .fb-footer input, #docContainer .fb-item div input, #docContainer .fb-item div textarea, #docContainer .fb-item div select {\n border:3px solid #e8dcc0;\n}\n#docContainer .fb-item label {\n background-color:transparent;\n color:#666;\n font-size:15px;\n font-weight:normal;\n}\n#fb-submit-button {\n background-image:none !important;\n background-color:#666 !important;\n color:#fff !important;\n font-weight:bold;\n font-size:15px;\n height:40px;\n}\n#fb-submit-button:hover {\n background-color:#9a886f !important;\n}\n</style>"}ValidationConfig.prototype.get_RFC_from_DateFormat=function(a){if(arguments.length!=1){return""}for(RFC in this.date_formats_RFC){if(this.date_formats_RFC[RFC]==a){return RFC}}return""};ValidationConfig.prototype.normalize_name=function(a){a=fb_utils.replaceString(a,"'","\\'");a=fb_utils.replaceString(a," ","_");a=fb_utils.replaceString(a,".","_");return a};ValidationConfig.prototype.get_config_value=function(b,a){if(arguments.length!=2){return""}if(typeof this.validation_config[b]=="undefined"||this.validation_config[b]===null){return""}if(typeof this.validation_config[b][a]=="undefined"||this.validation_config[b][a]===null){return""}return fb_utils.cloneObject(this.validation_config[b][a])};ValidationConfig.prototype.get_config_subtype=function(c,b,a){if(arguments.length!=3){return""}if(typeof this.validation_config[c]=="undefined"||this.validation_config[c]===null){return""}if(typeof this.validation_config[c][b]=="undefined"||this.validation_config[c][b]===null){return""}if(typeof this.validation_config[c][b][a]=="undefined"||this.validation_config[c][b][a]===null){return""}return fb_utils.cloneObject(this.validation_config[c][b][a])};ValidationConfig.prototype.get_config_id=function(a){if(arguments.length!=1){return{}}if(typeof this.validation_config[a]=="undefined"||this.validation_config[a]===null){return{}}return fb_utils.cloneObject(this.validation_config[a])};ValidationConfig.prototype.get_config=function(){if(arguments.length!==0){return false}return fb_utils.cloneObject(this.validation_config)};ValidationConfig.prototype.set_config_type=function(c,a,b){if(arguments.length!=3){return false}if(b===""){this.remove_config_type(c,a);return true}if(typeof this.validation_config[c]=="undefined"||this.validation_config[c]===null){this.validation_config[c]={}}this.validation_config[c][a]=fb_utils.cloneObject(b);return true};ValidationConfig.prototype.set_config_subtype=function(d,b,a,c){if(arguments.length!=4){return false}if(typeof this.validation_config[d]=="undefined"||this.validation_config[d]===null){this.validation_config[d]={}}if(typeof this.validation_config[d][b]=="undefined"||this.validation_config[d][b]===null){this.validation_config[d][b]={}}this.validation_config[d][b][a]=fb_utils.cloneObject(c);return true};ValidationConfig.prototype.set_config_subsubtype=function(e,b,a,d,c){if(arguments.length!=5){return false}if(typeof this.validation_config[e]=="undefined"||this.validation_config[e]===null){this.validation_config[e]={}}if(typeof this.validation_config[e][b]=="undefined"||this.validation_config[e][b]===null){this.validation_config[e][b]={}}if(typeof this.validation_config[e][b][a]=="undefined"||this.validation_config[e][b][a]===null){this.validation_config[e][b][a]={}}if(c===""){this.remove_config_subtype(e,b,a,d);return true}this.validation_config[e][b][a][d]=fb_utils.cloneObject(c);return true};ValidationConfig.prototype.get_config_subsubtype=function(d,b,a,c){if(arguments.length!=4){return""}if(typeof this.validation_config[d]=="undefined"||this.validation_config[d]===null){return""}if(typeof this.validation_config[d][b]=="undefined"||this.validation_config[d][b]===null){return""}if(typeof this.validation_config[d][b][a]=="undefined"||this.validation_config[d][b][a]===null){return""}if(typeof this.validation_config[d][b][a][c]=="undefined"||this.validation_config[d][b][a][c]===null){return""}return fb_utils.cloneObject(this.validation_config[d][b][a][c])};ValidationConfig.prototype.set_config_id=function(b,a){if(arguments.length!=2){return false}this.remove_config_id(b);for(type in a){this.set_config_type(b,type,a[type])}return true};ValidationConfig.prototype.set_config=function(a){if(arguments.length!=1){return false}if(typeof a=="undefined"||a===null){return false}this.validation_config=fb_utils.cloneObject(a);return true};ValidationConfig.prototype.remove_config_type=function(b,a){if(arguments.length!=2){return false}if(typeof this.validation_config[b]=="undefined"||this.validation_config[b]===null){return false}if(typeof this.validation_config[b][a]=="undefined"||this.validation_config[b][a]===null){return false}return delete this.validation_config[b][a]};ValidationConfig.prototype.remove_config_subtype=function(c,b,a){if(arguments.length!=3){return false}if(typeof this.validation_config[c]=="undefined"||this.validation_config[c]===null){return false}if(typeof this.validation_config[c][b]=="undefined"||this.validation_config[c][b]===null){return false}if(typeof this.validation_config[c][b][a]=="undefined"||this.validation_config[c][b][a]===null){return false}return delete this.validation_config[c][b][a]};ValidationConfig.prototype.remove_config_id=function(a){if(arguments.length!=1){return false}return delete this.validation_config[a]};ValidationConfig.prototype.remove_config=function(){if(arguments.length!==0){return false}this.validation_config={};return true};ValidationConfig.prototype.set_date_config=function(c){if(arguments.length!=1){return false}if(typeof this.validation_config[c]=="undefined"||this.validation_config[c]===null){return false}if(typeof this.validation_config[c]["date"]=="undefined"||this.validation_config[c]["date"]===null){return false}if(typeof this.validation_config[c]["date_config"]=="undefined"||this.validation_config[c]["date_config"]===null){return false}$("#"+c).attr("id","").removeClass("hasDatepicker").removeData("datepicker").unbind().attr("id",c).datepicker();for(var a in this.validation_config[c]["date_config"]){if(this.validation_config[c]["date_config"].hasOwnProperty(a)){var b=this.validation_config[c]["date_config"][a];if(b){if(a=="dateFormat"){b=this.date_formats_RFC[b]}else{if(a=="minDate"||a=="maxDate"){b=new Date(b)}}$("#"+c).datepicker("option",a,b)}}}return true};ValidationConfig.prototype.get_json=function(){if(arguments.length!==0){return""}return JSON.stringify(this.validation_config)};ValidationConfig.prototype.set_json=function(a){if(typeof a=="undefined"||a===null||typeof a!="string"){return false}this.validation_config=JSON.parse(a);return true};ValidationConfig.prototype.get_json_for_client=function(){var a={};for(var c in this.validation_config){if(this.validation_config.hasOwnProperty(c)){var k={};for(var m in this.validation_config[c]){if(m=="equalTo"){var d={};d[m]="#"+c;a[this.validation_config[c][m]]=d;continue}else{if(m=="date"){if(this.validation_config[c]["date_config"]["dateFormat"]=="ISO_8601"){k.dateISO=this.validation_config[c][m]}else{k[m]=this.validation_config[c][m]}}else{if(m=="date_config"){var f={};for(var e in this.validation_config[c][m]){if(e=="dateFormat"){f[e]=this.date_formats_RFC[this.validation_config[c][m][e]]}else{f[e]=this.validation_config[c][m][e]}}k[m]=f}else{if(m=="captcha_status"){var l=false;if(this.validation_config[c][m]=="automatic"||this.validation_config[c][m]=="manual"){l=true}k.captcha=l}else{if(m=="sigpad_status"){var h=false;if(this.validation_config[c][m]=="enable"){h=true}k.sigpad=h}else{if(m=="accept"){k[m]=fb_utils.replaceString(this.validation_config[c][m],",","|");var o=k[m].split("|");for(var g=0;g<o.length;g++){if(o[g].charAt(0)=="."){o[g]=o[g].substring(1)}}k[m]=o.join("|")}else{if(m=="phone"){k[this.validation_config[c][m]]=true}else{if(m=="regex_config"){var b=this.validation_config[c][m].value;k[m]=b}else{if(m=="decimals"){var b=this.validation_config[c][m];if(b==0){b="zero"}k[m]=b}else{if(m=="messages"){var b=this.validation_config[c][m];b=fb_utils.replaceString(b,"\r","");b=fb_utils.replaceString(b,"\n","");b=fb_utils.replaceString(b,"\\","\\\\");k[m]=b}else{if(m!="label"&&m!="label_equal"&&m!="checkbox"&&m!="attach"&&m!="files"&&m!="database"&&m!="public_key"&&m!="private_key"&&m!="fieldtype"&&m!="maxbytes"&&m!="theme"&&m!="contactList"&&m!="html_contents"){k[m]=typeof this.validation_config[c][m]=="string"?fb_utils.replaceString(this.validation_config[c][m],"\\","\\\\"):this.validation_config[c][m]}}}}}}}}}}}}a[c]=k}}var n=fb_utils.replaceString(JSON.stringify(a),"\\","\\\\");n=fb_utils.replaceString(n,"'","\\'");var j=" var data_validation = '"+n+"';";j+="\n var data_jsplugins = '"+JSON.stringify(this.plugins_config.js)+"';";j+="\n var data_cssplugins = '"+JSON.stringify(this.plugins_config.css)+"';";return j};ValidationConfig.prototype.get_json_for_server=function(){var s={};for(var p in this.validation_config){if(this.validation_config.hasOwnProperty(p)){var t={};if(this.validation_config[p].hasOwnProperty("html_contents")||p=="fb-submit-button"||(p!="reCaptcha"&&p!="sigpad"&&p!="_special"&&!$("#"+p).length)){continue}else{if(p=="reCaptcha"){var k=this.validation_config[p]["captcha_status"];var x=this.validation_config[p]["theme"]||"recaptchav2-light";if(k=="none"||typeof k=="undefined"){continue}for(var h in this.validation_config[p]){var u=this.validation_config[p][h];if(h=="captcha_status"){t.captcha=k}else{if(h=="messages"){t[h]=u}else{if(k=="manual"){t[h]=fb_utils.replaceString(u,"'","\\'")}}}}t.fieldtype="captcha";t.version=x.indexOf("recaptchav2")==0?"v2":"v1";s[p]=t}else{if(p=="sigpad"){var b=this.validation_config[p]["sigpad_status"];if(b=="none"||typeof b=="undefined"){continue}for(var h in this.validation_config[p]){var u=this.validation_config[p][h];if(h=="sigpad_status"){t.sigpad=b}}t.fieldtype="sigpad";t.label=this.validation_config[p]["label"];s[p]=t}else{if(p=="_special"){s[p]=this.validation_config[p]}else{var z=$("#"+p).attr("name");if(z.substr(z.length-2,z.length)=="[]"){z=z.substr(0,z.length-2)}z=fb_utils.replaceString(z,"'","\\'");z=fb_utils.replaceString(z," ","_");z=fb_utils.replaceString(z,".","_");var o=false;for(var h in this.validation_config[p]){if(h=="checkbox"){o=true}if(o&&h=="minlength_checkbox"){t.number_required=this.validation_config[p][h]}else{if(h=="equalTo"){var y=fb_utils.replaceString($("#"+this.validation_config[p][h]).attr("name")," ","_");y=fb_utils.replaceString(y,".","_");y=fb_utils.replaceString(y,"'","\\'");y=y.toLowerCase();t[h]=y}else{if(h=="accept"){t[h]=fb_utils.replaceString(this.validation_config[p][h],",","|");var m=t[h].split("|");for(var v=0;v<m.length;v++){if(m[v].charAt(0)=="."){m[v]=m[v].substring(1)}}t[h]=m.join("|")}else{if(h=="date_config"){var n={};for(var w in this.validation_config[p][h]){if(w=="minDate"||w=="maxDate"){var l=new Date(this.validation_config[p][h][w]);var q=new Date(Date.UTC(l.getFullYear(),l.getMonth(),l.getDate()));n[w]=q.getTime()/1000}else{n[w]=this.validation_config[p][h][w]}}t[h]=n}else{if(h=="maxbytes"){t[h]=this.validation_config[p][h]*1024}else{if(h=="regex_config"){t[h]=this.validation_config[p][h].value}else{if(h=="messages"){var d=this.validation_config[p][h];d=fb_utils.replaceString(d,"\r","");d=fb_utils.replaceString(d,"\n","");t[h]=d}else{var u=this.validation_config[p][h];if(typeof(u)=="string"){t[h]=fb_utils.replaceString(u,"'","\\'")}else{t[h]=u}}}}}}}}}if(this.validation_config[p]["fieldtype"]=="checkbox"||this.validation_config[p]["fieldtype"]=="radiogroup"){var a=[];var e=$("input[name='"+$("#"+p).attr("name")+"']").get();for(var v=0;v<e.length;v++){a.push(jQuery.trim(fb_utils.htmlDecode($(e[v]).attr("value"))))}t.values=a}else{if(this.validation_config[p]["fieldtype"]=="dropdown"||this.validation_config[p]["fieldtype"]=="listbox"){var a=[];var g=$("#"+p+" option").get();for(var v=0;v<g.length;v++){a.push(jQuery.trim(fb_utils.htmlDecode($(g[v]).attr("value"))))}t.values=a}}s[z]=t}}}}}}var f=$("#docContainer input[type=hidden]").get();for(v=0;v<f.length;v++){s[f[v].name]={fieldtype:"hidden",maxbytes:1024,database:true,required:true}}var j=fb_utils.sortVisualByName(s);var r={};for(var v in j){r[v.toLowerCase()]=s[v]}var c=JSON.stringify(r);return c};ValidationConfig.prototype.get_conditional_json_for_server=function(){var b=fb_conditionals.get_rules_for_server();var a=JSON.stringify(b);return a};ValidationConfig.prototype.get_conditional_names=function(){var b=[];for(var c in this.validation_config){if(!this.validation_config[c].hasOwnProperty("html_contents")||c!="fb-submit-button"&&c!="reCaptcha"&&c!="sigpad"&&this.validation_config.hasOwnProperty(c)&&$("#"+c).length){var a=$("#"+c).attr("name");if(!a||!a.length||!($("#"+c).is("select")||$("#"+c).is("input")||$("#"+c).is("textarea"))){continue}if(a.substr(a.length-2,a.length)=="[]"){a=a.substr(0,a.length-2)}b.push(this.normalize_name(a))}}return b};ValidationConfig.prototype.get_conditional_values=function(d){var f=$('[name="'+d+'"]').attr("id")?$('[name="'+d+'"]').attr("id"):$('[name="'+d+'[]"]').attr("id");if(!this.validation_config.hasOwnProperty(f)){return[]}if(this.validation_config[f]["fieldtype"]=="checkbox"||this.validation_config[f]["fieldtype"]=="radiogroup"){var b=[];var a=$("input[name='"+$("#"+f).attr("name")+"']").get();for(var e=0;e<a.length;e++){b.push(jQuery.trim(fb_utils.htmlDecode($(a[e]).attr("value"))))}return b}else{if(this.validation_config[f]["fieldtype"]=="dropdown"||this.validation_config[f]["fieldtype"]=="listbox"){var b=[];var c=$("#"+f+" option").get();for(var e=0;e<c.length;e++){b.push(jQuery.trim(fb_utils.htmlDecode($(c[e]).attr("value"))))}return b}else{var b=[];b.push("");return b}}return[]};ValidationConfig.prototype.get_all_names=function(a){var e=[];for(var g in this.validation_config){if(!this.validation_config[g].hasOwnProperty("html_contents")&&g!="fb-submit-button"&&g!="reCaptcha"&&g!="sigpad"&&this.validation_config.hasOwnProperty(g)&&$("#"+g).length){var b=$("#"+g).attr("name");if(!b.length){continue}if(b.substr(b.length-2,b.length)=="[]"){b=b.substr(0,b.length-2)}e.push(this.normalize_name(b))}}var f=a;if(f){for(var g in pPaymentsConfig.get_config()){if(g!="fb-submit-button"&&g!="reCaptcha"&&g!="sigpad"&&this.validation_config.hasOwnProperty(g)&&$("#"+g).length&&pPaymentsConfig.get_config_value(g,"type")!="none"&&pPaymentsConfig.get_config_value(g,"type")!="cart_multiplier"){var b=$("#"+g).attr("name");if(!b.length){continue}if(b.substr(b.length-2,b.length)=="[]"){b=b.substr(0,b.length-2)}e.push(this.normalize_name(b+_("_price")));e.push(this.normalize_name(b+_("_invoicetext")))}}}var d=$("#docContainer input:hidden").get();for(var c=0;c<d.length;c++){if(d[c].name!=undefined&&d[c].name!=""){e.push(this.normalize_name(d[c].name))}}e.push(_("_form_results_"));e.push(_("_submitted_"));e.push(_("_fromaddress_"));if(f){e.push(_("_form_price_"));e.push(_("_form_invoicetext_"));e.push(_("_cart_summary_"));e.push(_("_cart_total_"))}return e};ValidationConfig.prototype.get_email_names=function(){var a=[];for(var d in this.validation_config){if(this.validation_config.hasOwnProperty(d)){if(this.validation_config[d]["email"]){var c=d.substr(0,d.indexOf("_"));var b=true;if(this.validation_config.conditionalRules!=undefined){if(this.validation_config.conditionalRules.hasOwnProperty(c)){b=false}}if(b){a.push(this.normalize_name($("#"+d).attr("name")))}}}}return a};ValidationConfig.prototype.get_contactlist_names=function(){var a=[];for(var b in this.validation_config){if(this.validation_config.hasOwnProperty(b)){if(this.validation_config[b]["contactList"]){a.push(this.normalize_name($("#"+b).attr("name")))}}}return a};ValidationConfig.prototype.set_plugins=function(b,a){this.plugins_config.js=b;this.plugins_config.css=a};var pValidationConfig=new ValidationConfig();