/**
 * ... 
 * @info salvo.mariniello@gmail.com
   
   Copyright 2014  Salvo mariniello of copyright owner
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */


window["ISCLICK"]=0;
window["rtimeIfram"]=null;
window["rtime"]=null;
window["verificaTime"]=function(){}; 
  
 function Ckoi(){ }
 Ckoi.prototype.navigatore = {
 create:function(opt) {
	 
		 
		this.option={
		background:"#ddd",
		position:"absolute",
		top:"10%",
		left:"40%",
		width:"100%",
		padding:"0px",
		textColor:"#000000",
		textBackground:"#ccc",	
		textFontWeight:"bold",
		textPadding:"0px",
		textFontSize:"15px",
		buttonColor:"#ffffff",
		buttonBackground:"#222",
		buttonFontSize:"14px",
		buttonFontWeight:"bold",
		buttonPadding:"10px",
		buttonWidth:"auto",
		buttonHeight:"auto",
		buttonBorderRadius:"10px"
		};
		 
		if(opt.option){
		    this.option = Ckoi.prototype.utility.extend(this.option, opt.option)
		 }
		if(!opt.action){
	     opt["action"]=function(r){};
		 }
		 
		var txt="";
		this.btn=[];
		if(opt.message){txt=opt.message;}
		if(opt.button){this.btn=opt.button;}
		this.b = Ckoi.prototype.utility.getById("e-navigatore"); //box;
		this.nb = document.createElement("div");
		this.ns = document.createElement("div");
		
		this.bt_evt=[];
		
		
		
		this.addEventList=function(objc_,evt,function_){
			if (objc_.attachEvent) {
				objc_.attachEvent("on"+evt, function_);
			} else if (objc_.addEventListener) {
				objc_.addEventListener(evt, function_, false);
			} else {
				objc_["on"+evt] = function_;
			}
				
			};
			
			this.addClassName=function(objc){
				if (objc.attachEvent) {
					objc.className='navBtn';
				} else if (objc.addEventListener) {
					objc.setAttribute('class','navBtn');
				}
				};
			
			if(this.btn.length>=1){
			this.bt_evt=[];
			for(var i=0;i<this.btn.length;i++){
			this.bt_evt.push({c:function(){ return function(){opt.action(eval("this.id"))}},l:this.btn[i].label,v:this.btn[i].val}); 
			} 
			
			}
			
			if(this.bt_evt.length>=1){
			    
				this.ns.style.color = this.option.textColor;
			    this.ns.style.background=this.option.textBackground;
				this.ns.style.fontSize=this.option.textFontSize;
			    this.ns.style.fontWeight = this.option.textFontWeight;
				this.ns.style.padding=this.option.textPadding;
			    this.ns.setAttribute("id","text");
			    this.ns.innerHTML = txt; 
				this.nb.appendChild(this.ns);
				
				for(j=0;j<this.bt_evt.length;j++){ 
				
				var button_ = document.createElement("input");	    
			    button_.setAttribute("id", ""+this.bt_evt[j].v);
			    button_.setAttribute("type", "button");
			    button_.setAttribute("value", this.bt_evt[j].l);
			    button_.style.color = this.option.buttonColor;
				button_.style.background=this.option.buttonBackground;  
				button_.style.fontSize=this.option.buttonFontSize;
				button_.style.fontWeight=this.option.buttonFontWeight;
				button_.style.padding=this.option.buttonPadding;
				button_.style.width=this.option.buttonWidth;
				button_.style.height=this.option.buttonHeight;
				button_.style.borderRadius=this.option.buttonBorderRadius;
			    this.addClassName(button_);
				this.nb.appendChild(button_);
			    this.addEventList(button_,"click",this.bt_evt[j].c());
				
				}
				
				this.nb.style.background=this.option.background;
				this.nb.style.position=this.option.position;
				this.nb.style.top=this.option.top;
				this.nb.style.left=this.option.left;
				this.nb.style.width=this.option.width;
				this.nb.style.padding=this.option.padding;
			    this.nb.setAttribute("id","e-navigatore");
				var parent = this.b.parentNode;
			    newChild = parent.replaceChild(this.nb,this.b);

				} else {

				this.ns.style.color = this.option.textColor;
			    this.ns.style.background=this.option.textBackground;
				this.ns.style.fontSize=this.option.textFontSize;
			    this.ns.style.fontWeight = this.option.textFontWeight;
				this.ns.style.padding=this.option.textPadding;
			    this.ns.setAttribute("id","text");
			     
				this.ns.innerHTML=txt;
			    this.nb.style.background=this.option.background;
			    this.nb.setAttribute("id","e-navigatore");
			    this.nb.appendChild(this.ns);
			    var parent = this.b.parentNode;
			    newChild = parent.replaceChild(this.nb,this.b);
	 
			}

	}  
 }

Ckoi.prototype.template = { navigatore: Ckoi.prototype.navigatore, utility: Ckoi.prototype.utility }

 
 ajax$ = function(action) {
	 if(ISCLICK==0){
	     return new Ckoi().ajax.execute(action);
	 }
};
 
navigatore$=function(opt){
    return new Ckoi().navigatore.create(opt);
	}


Ckoi.prototype.ajax = {
	 httpReq:function() {
	var XHR = null, browserUtente = navigator.userAgent.toUpperCase();
	if (typeof (XMLHttpRequest) === "function"
			|| typeof (XMLHttpRequest) === "object")
		XHR = new XMLHttpRequest();
	else if (window.ActiveXObject && browserUtente.indexOf("MSIE 4") < 0) {
		if (browserUtente.indexOf("MSIE 5") < 0)
			XHR = new ActiveXObject("Msxml2.XMLHTTP");
		else
			XHR = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (XHR == null || XHR == undefined) {
		ISCLICK = 0;
	}
	return XHR;
},
  execute:function(action_) {
	
	ISCLICK=1;
	
	 
		var action = {
			url : null,
			param : null,
			id : "page-wrap",
			formId : null,
			success : null,
			error : null,
			header : [{
				key : "Content-Type",
				val : "application/x-www-form-urlencoded"
			}],
			start : null,
			method : "get",
			async : true,
			response : null,
			dataType : "TEXT",
			code : null,
			iframe : null
			 
		};


action = Ckoi.prototype.utility.extend(action, action_)
	   
	   if (!action.url) {
			 
		   
		}else{
		
	this.start(action);
		
		}	
		
},
  start:function(action) {
	this.action = action;
	var this_ = this;
	if (!action.iframe) {
		this.init(this.action);
	} else {
    Ckoi.prototype.evalframe(this.action, undefined);
	}

},
	init:function(action) {
 
	if (!action.start) {
	action.start = '<div style="position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:170;background:#EEEEEC url(\'./img/page-loader.gif\') no-repeat center center; text-align:center;"> </div>';
	}

	var ajx = this.httpReq(),
	element = Ckoi.prototype.utility.getById(action.id), 
	uink = true;
	if (ajx) {
		uink = false;
			try {
		if (action.formId) {

			action.param = action.param === "" ? action.param : action.param
					+ "&";

			action.param += Ckoi.prototype.utility.serializeForm(action.formId);

		}
		 
		if (action.method && action.method.toUpperCase() === "POST") {
			ajx.open(action.method, action.url, action.async);
			 
		} else {
			ajx.open(action.method, action.url + "?" + action.param + "&g="
					+ Math.floor(Math.random() * 99999), action.async);
			 
		}
		
		

		for ( var j = 0; j < action.header.length; j++) {
			ajx.setRequestHeader(action.header[j].key, action.header[j].val);

		}
	
		ajx.onreadystatechange = this.onreadystatechange(ajx,element,action);

		if (action.method && action.method.toUpperCase() === "POST") {
			if (action.param || action.formId) {
				ajx.send(action.param);
			} else {
				ajx.send(null);
			}

		} else {
			ajx.send(null);

		}
		
		}catch (e) {
			uink = true;
		}
	}
	
 
	return uink;

},
	onreadystatechange:function(ajx,element,action) {
	
	var data = "";
	var	risError="";
	var	risError0="";	
	var dateAct = new Date();
	var startTime = dateAct.getTime();
	var maxAt = 2;
 
		if (ajx.readyState == 4) {
				if (ajx.status == 200) {
			  return this.eventComplete(ajx);
	 
				} else{
					
					 ISCLICK=0;
		 
					risError = "Impossibile effettuare l'operazione richiesta.<br />"
							+ "Errore riscontrato: " + ajx.status;
				if (action.error) {
					action.error(risError);
				}
				if (action.response) {
					action.response(ajx);
				}
				if (action.code) {
					action.code(ajx.status);
				}
				if (element) {
					element.innerHTML = risError;
				}
				if (rtime != null) {
					window.clearTimeout(rtime);
					rtime=null;
					verificaTime=function(){};
				}
				
				}
				
			} else {
				
		 
				if (element) {
					element.innerHTML = action.start;
				}

	if (maxAt < 1000) {

	    maxAt = maxAt * 1000;
						verificaTime = function() {
						    dateAct = new Date();
						    if ((dateAct.getTime() - startTime) > maxAt) {
							window.clearTimeout(rtime);
							rtime=null;
							ajx.onreadystatechange = function() {
								return;
							};

							ajx.abort();
							ajx=null;
							 
							ISCLICK = 0;
							verificaTime=function(){};
							element.innerHTML=" ";

							return Ckoi.prototype.evalframe(action, undefined);
						}

					 
						else {
							if (rtime != null) {
								window.clearTimeout(rtime);
							}

							rtime = setTimeout(verificaTime, 100);
						}

					};

					verificaTime();
				}

				 
			}
		},
		
		eventComplete:function(ajx){
			
			 ISCLICK=0;
					 
					if (ajx.responseText || ajx.responseXML) {
						if (rtime != null) {
							window.clearTimeout(rtime);
							rtime=null;
							verificaTime=function(){};
						}
						
						 
						if (action.dataType.toUpperCase() == "JSON") {
							data = eval(ajx.responseText);
						} 
						if (action.dataType.toUpperCase() == "TEXT") {
							data = ajx.responseText;
						}
						if (action.dataType.toUpperCase() == "XML") {
							data = ajx.responseXML;
						}
				

						if (element) {
							element.innerHTML = data;
						}
						
						if (action.success) {
							action.success(data);
						}
						if (action.response) {
							action.response(ajx);
						}
						if (action.code) {
							action.code(ajx.status);
						}
						 

					} else {
						 ISCLICK=0;
						 
						risError0 = "Errore nella richiesta al server";
						if (action.error) {
							action.error(risError0);
						}
						if (action.response) {
							action.response(ajx);
						}
						if (action.code) {
							action.code(ajx.status);
						}
						
				        if (element) {
							element.innerHTML = risError0;
						}
				        if (rtime != null) {
							window.clearTimeout(rtime);
							rtime=null;
							verificaTime=function(){};
						}
				  
					}	

			return ISCLICK;
						
			}

	 
	 };


Ckoi.prototype.utility = { 
		getById:function(id_elemento) {
		var elemento=null;
		if (document.getElementById)
			elemento = document.getElementById(id_elemento);
		else
			elemento = document.all[id_elemento];
		return elemento;
		},
		isObj:function(obj){
	    return obj && obj.constructor && obj.constructor.name === 'Object';	
		},
		extend:function(dest,source){
		 for (var property in source) {
			    if (this.isObj(dest[property]) && this.isObj(source[property])) {
			    	dest[property] = dest[property] || {};
			      arguments.callee(dest[property], source[property]);
			    } else {
			    	if(source[property])
					dest[property] = source[property];
			    }
			  }
			  return dest;	
},
	serializeForm:function(formId) {

	    var form = Ckoi.prototype.utility.getById(formId);
	var qstr = "";

	this.GetElemValue = function(name, value) {
		qstr += (qstr.length > 0 ? "&" : "")
				+ escape(name).replace(/\+/g, "%2B") + "="
				+ escape(value ? value : "").replace(/\+/g, "%2B");
		 
	};

	if (form != null || form != undefined) {

		var elemArray = form.elements;

		if (elemArray != null || elemArray != undefined && elemArray.length > 0) {
			 
			for ( var i = 0; i < elemArray.length; i++) {
				var element = elemArray[i];
				 
				if (element.type) {
					var elemType = element.type.toUpperCase();
					 
					var elemName = element.name;
					 
					if (elemName) {
						if (elemType == "TEXT" || elemType == "TEXTAREA"
								|| elemType == "PASSWORD"
								|| elemType == "BUTTON" || elemType == "RESET"
								|| elemType == "SUBMIT" || elemType == "FILE"
								|| elemType == "IMAGE" || elemType == "HIDDEN")
							this.GetElemValue(elemName, element.value);
						else if (elemType == "CHECKBOX" && element.checked)
							this.GetElemValue(elemName,
									element.value ? element.value : "On");
						else if (elemType == "RADIO" && element.checked)
							this.GetElemValue(elemName, element.value);
						else if (elemType.indexOf("SELECT") != -1)
							for ( var j = 0; j < element.options.length; j++) {
								var option = element.options[j];
								if (option.selected)
									this.GetElemValue(elemName,
											option.value ? option.value
													: option.text);
							}
					}
				}
			}
		}
	}
	 
	return qstr;
}




	}

Ckoi.prototype.evalframe = function (action, elements) {
	    ISCLICK = 1;
	    var element = null;
	    var preload = null;
	    var ISSUCCESS = false;

	    if (rtimeIfram != null) {
	        window.clearTimeout(rtimeIfram);
	        rtimeIfram = null;
	    }
	    if (!action.start || action.start === "") {
	        action.start = '<div style="position:fixed;left:0px;top:0px;width:100%;height:100%; z-index:170;background:#EEEEEC url(\'./img/page-loader.gif\') no-repeat center center; text-align:center;"> </div>';
	    }

	    preload = Ckoi.prototype.utility.getById("preload");
	    if (!preload) {
	        preload = top.document.getElementById("preload");
	    }

	    if (!elements) {
	        element = Ckoi.prototype.utility.getById(action.id);
	    } else {
	        element = elements;
	    }
	    if (!element) {
	        element = top.document.getElementById(action.id);
	    }
	    if (!element) {
	        element = document.createElement("div");
	        element.setAttribute("id", action.id);
	        element.style.width = "100%";
	        element.style.height = "100%";
	        document.body.appendChild(element);
	    }
	    if (!preload) {
	        preload = document.createElement("div");
	        preload.setAttribute("id", "preload");
	        preload.style.width = "100%";
	        preload.style.height = "100%";
	        element.appendChild(preload);
	    }


	    uink = false;

	    if (action.formId) {

	        action.param = action.param === "" ? action.param : action.param + "&";

	        action.param += getquerystring(action.formId);
	        action.url += "?" + action.param;
	    } else {
	        action.url += "?" + action.param + "&g="
				+ Math.floor(Math.random() * 99999);
	    }
	    preload.innerHTML = action.start;
	    preload.style.visibility = "visible";

	    var iframe = document.createElement("iframe");

	    iframe.src = action.url;
	    iframe.scrolling = "auto";
	    iframe.style.height = "90%";
	    iframe.style.width = "100%";
	    iframe.style.border = "0px";
	    iframe.setAttribute("id", "eframe");

	    if (navigator.userAgent.indexOf("MSIE") > -1 && !window.opera) {
	        iframe.onreadystatechange = function () {

	            if (iframe.readyState == "complete") {
	                ISCLICK = 0;
	                try {
	                    if (iframe.contentWindow) {
	                        var documents = iframe.contentWindow.document;
	                        element.innerHTML = iframe.contentWindow.document.body.innerHTML;

	                        if (action.success != "") {
	                            action.success(documents);
	                        }
	                        if (action.response != "") {
	                            action.response(documents);
	                        }

	                    } else { ISSUCCESS = true; }
	                    preload.innerHTML = "";
	                    preload.style.visibility = "hidden";

	                } catch (e) {
	                    preload.innerHTML = "";
	                    preload.style.visibility = "hidden";
	                } finally {
	                    ISCLICK = 0;
	                }

	            }
	        };

	    } else {
	        iframe.onload = function () {
	            try {
	                ISCLICK = 0;
	                if (iframe.contentDocument) {
	                    var documents = iframe.contentDocument;
	                    element.innerHTML = iframe.contentDocument.body.innerHTML;

	                    if (action.success) {

	                        action.success(documents);
	                    }
	                    if (action.response) {
	                        action.response(documents);
	                    }
	                } else { ISSUCCESS = true; }
	                preload.innerHTML = "";
	                preload.style.visibility = "hidden";

	            } catch (e) {
	                preload.innerHTML = "";
	                preload.style.visibility = "hidden";
	                ISCLICK = 0;
	            } finally {
	                ISCLICK = 0;
	            }

	        };
	    }



	    element.innerHTML = "";
	    element.appendChild(iframe);
	    
	    if (ISSUCCESS && action.success) {
	        action.success({});
	    }


	    return uink;
	}
 
