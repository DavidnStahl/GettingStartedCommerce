function ComponentArt_ComboBox(id){this.DomElementId=id;this.element=this.DomElement=document.getElementById(this.DomElementId);if(window.ComponentArt_Atlas){ComponentArt.Web.UI.ComboBox.initializeBase(this,[this.element]);this.beginUpdate=function(){this._updating=true;};this.endUpdate=function(){this._updating=false;this.Render(true);};this.get_isUpdating=function(){return this._updating;};this.getDescriptor=function(){return _zF0(this.constructor);};}else{this.beginUpdate=function(){this._updating=true;};this.endUpdate=function(){this._updating=false;this.Render(true);};this.get_isUpdating=function(){return this._updating;};}this.ClientControlId=this.Id=id;this.ItemHeight=10;}window.ComponentArt_ComboBox.prototype.PublicProperties=[["CssClass",String],["CallbackFilterDelay",Number],["CallbackFilterMinimumLength",Number],["Id",String,1],["ItemCount",Number],["SelectedIndex",Number,1],["Text",String,1,1],["TextBoxCssClass",String]];window.ComponentArt_ComboBox.prototype.PublicMethods=[["AddItem",,null,[["item",Object],["index",Number]]],["Collapse"],["Disable"],["Dispose"],["Enable"],["Expand"],["Filter",,null,[["filterString",String]]],["FindItemByProperty",,Object,[["propertyName",String],["propertyValue",Object]]],["Focus"],["GetItem",,Object,[["index",Number]]],["GetSelectedItem",,Object],["RemoveAll"],["RemoveItemAt",,null,[["index",Number]]],["SelectItem",,null,[["item",Object]]],["SelectItemByIndex",,null,[["id",String]]],["ToggleExpand"],["UnSelect"]];window.ComponentArt_ComboBox.prototype.PublicEvents=[["BeforeCallback"],["BeforeChange"],["CallbackComplete"],["CallbackError"],["Change"],["Collapse"],["Expand"],["Load"],["Init"]];_zEF(ComponentArt_ComboBox);window.ComponentArt.Web.UI.ComboBox=window.ComponentArt_ComboBox;if(window.ComponentArt_Atlas){ComponentArt.Web.UI.ComboBox.registerClass("ComponentArt.Web.UI.ComboBox",Sys.UI.Control);if(Sys.TypeDescriptor){Sys.TypeDescriptor.addType("componentArtWebUI","comboBox",ComponentArt.Web.UI.ComboBox);}}function ComponentArt_ComboBoxItem(_2){if(window.ComponentArt_Atlas){ComponentArt.Web.UI.ComboBoxItem.initializeBase(this);this.getDescriptor=function(){return _zF0(this.constructor);};}this.Enabled=true;if(_2){this.Data=_2;}else{this.Data=[];}}ComponentArt_ComboBoxItem.prototype.PublicProperties=[["ClientTemplateId"],["CssClass"],["Enabled"],["Id"],["Text"],["Value"]];ComponentArt_ComboBoxItem.prototype.PublicMethods=[["GetProperty",,Object],["SetProperty",,,[["propertyName",String],["propertyValue",Object]]]];_zEF(ComponentArt_ComboBoxItem);window.ComponentArt.Web.UI.ComboBoxItem=window.ComponentArt_ComboBoxItem;if(window.ComponentArt_Atlas){ComponentArt.Web.UI.ComboBoxItem.registerClass("ComponentArt.Web.UI.ComboBoxItem");if(Sys.TypeDescriptor){Sys.TypeDescriptor.addType("componentArtWebUI","comboBoxItem",ComponentArt.Web.UI.ComboBoxItem);}}ComponentArt_ComboBoxItem.prototype.GetProperty=function(_3,_4){for(var i=0;i<this.Data.length;i++){if(this.Data[i][0]==_3){return this.Data[i][1];}}return _4;};ComponentArt_ComboBoxItem.prototype.SetProperty=function(_6,_7){var _8=false;for(var i=0;i<this.Data.length;i++){if(this.Data[i][0]==_6){this.Data[i][1]=_7;_8=true;break;}}if(!_8){this.Data[this.Data.length]=[_6,_7];}this[_6]=_7;};window.ComponentArt_ComboBox.prototype.get_text=function(){var _a=document.getElementById(this.Id+"_Input");return _a?_a.value:"";};window.ComponentArt_ComboBox.prototype.set_text=function(_b){var _c=document.getElementById(this.Id+"_Input");if(_c){_c.value=_b;this.HandleInputChange(true);}};window.ComponentArt_ComboBox.prototype.GetProperty=function(_d){return this[_d];};window.ComponentArt_ComboBox.prototype.SetProperty=function(_e,_f){this[_e]=_f;};window.ComponentArt_ComboBox.prototype.AddItem=function(_10,_11){if(!(_11||_11==0)){_11=this.Data.length;}this.Data=this.Data.slice(0,_11).concat([_10.Data]).concat(this.Data.slice(_11));this.ItemCount++;this.LoadedItemCount++;this.TextCache.length=0;this.CssClasses.length=0;};window.ComponentArt_ComboBox.prototype.Callback=function(url,_13){if(this.CallingBack){return false;}var _14=this;var _15=false;var _16;function Cleanup(){_14.CallingBack=false;_14.HideReloading();if(_14.AutoComplete||_14.AutoHighlight){_14.CompleteAndHighlight();}}function _z19F(){if(_16.readyState&&_16.readyState!=4&&_16.readyState!="complete"){return;}var _17=_15?_16.responseXML:_16;if(_17&&_17.documentElement&&_17.documentElement.childNodes.length==2){var _18=_17.documentElement.childNodes[0];var _19=_17.documentElement.childNodes[1];if(_18.nodeName=="ComboBoxError"){var _1a=_18.firstChild.nodeValue;var _1b=_14.get_events().getHandler("callbackError");if(_1b){_1b(_14,new ComponentArt.Web.UI.ComboBoxCallbackErrorEventArgs(_1a));}else{alert("Callback error:\n"+_1a);}}else{var _1c=_18.firstChild.nodeValue;var _1d=eval(_1c);_14.LoadItems(_1d,_13);_14.LoadParams(_19.childNodes);_14.Render(true);}}else{if(_16.status&&_16.status!=200&&_16.responseText){document.body.innerHTML=_16.responseText;}else{alert("Error loading callback data.");}}Cleanup();var _1b=_14.get_events().getHandler("callbackComplete");if(_1b){_1b(_14,Sys.EventArgs.Empty);}}var _1e=_14.get_events().getHandler("beforeCallback");if(_1e){_1e(_14,Sys.EventArgs.Empty);}this.CallingBack=true;if(window.XMLHttpRequest){_15=true;var _16=new XMLHttpRequest();_16.onreadystatechange=_z19F;_16.open("GET",url,true);_16.send(null);}else{if(document.implementation&&document.implementation.createDocument){_16=document.implementation.createDocument("","",null);_16.onload=_z19F;}else{if(cart_browser_ie){var _1f=this.Id+"_island";var _20=document.getElementById(_1f);if(!_20){_20=document.createElement("xml");_20.id=_1f;document.body.appendChild(_20);}if(_20.XMLDocument){_16=_20.XMLDocument;_16.onreadystatechange=_z19F;}else{return false;}}else{return false;}}}if(!_15){_16.async=true;try{_16.load(url);}catch(ex){Cleanup();alert("Data not loaded: "+(ex.message?ex.message:ex));}}return true;};window.ComponentArt_ComboBox.prototype.Collapse=function(){if(this.Resizing){return;}var _21=document.getElementById(this.Id+"_DropDown");if(_21&&_21.style.display!="none"){_21.style.overflow="hidden";this.CollapseElement=_21;this.CollapseStartTime=(new Date()).getTime();var _22=ComponentArt_GetAdjustedHeight(_21);ComponentArt_ComboBox_CollapseStep(this,_22);}this.Expanded=false;if(this.AutoTheming){var _23=document.getElementById(this.Id+"_DropDiv");if(_23){_23.className=this.AutoThemingCssClassPrefix+"combobox-drop";}}if(this._oldSelectedIndex!=null&&this._oldSelectedIndex!=this.SelectedIndex){if(this.RunningMode==1){for(var i=this.Data.length-1;i>=0;i--){if(this.Data[i]==null||this.Data[i].length<1){this.Data.splice(i,1);}}}if(this.AutoPostBack){this.Postback();}}};window.ComponentArt_ComboBox.prototype.CollapseIfBlurred=function(){if(document.activeElement){var _25=document.getElementById(this.Id+"_DropDown");for(var o=document.activeElement;o.parentNode&&o.parentNode!=document.body;o=o.parentNode){if(o.parentNode==_25){this.Focus();break;}}}if(!this.Focused){this.Collapse();}};window.ComponentArt_ComboBox.prototype.CompleteAndHighlight=function(){var _27=document.getElementById(this.Id+"_Input");if(!_27){return;}if(!_27.value){if(this.SelectedIndex>=0){this.UnSelect();}return;}var _28=_z114(_27);if(!_28){return;}var _29=_27.value.toLowerCase().substring(0,_28);var _2a=false;for(var i=0;i<this.TextCache.length;i++){var _2c=this.TextCache[i];if(_2c&&_2c.toLowerCase().indexOf(_29)==0){if(this.AutoComplete){_27.value=_2c;this.SelectItemByIndex(i);ComponentArt_SetSelectionRange(_27,_29.length,_27.value.length);}if(this.AutoHighlight){if(!this.AutoComplete){this.SelectItemByIndex(i);}this.Expand();}_2a=true;break;}}if(!_2a&&this.SelectedIndex>=0){this.UnSelect();}};window.ComponentArt_ComboBox.prototype.Disable=function(){if(this.element){this.element.disabled=true;}if(this.TextBoxEnabled){var _2d=document.getElementById(this.Id+"_Input");if(_2d){_2d.disabled=true;if(this.TextBoxDisabledCssClass&&this.TextBoxCssClass){_2d.className=this.TextBoxDisabledCssClass;}}}else{var _2e=document.getElementById(this.Id+"_TextBox");if(_2e){if(this.TextBoxDisabledCssClass&&this.TextBoxCssClass){_2e.className=this.TextBoxDisabledCssClass;}}}this.Collapse();if(this.DisabledCssClass&&this.CssClass){this.element.className=this.DisabledCssClass;}this.Disabled=true;};window.ComponentArt_ComboBox.prototype.Dispose=function(){if(window.ComponentArt_Atlas){this.element.control=null;}ComponentArt_Dispose(this);ComponentArt_RemoveKeyHandlers(this);this.CollapseElement=this.ExpandElement=null;var _2f=document.getElementById(this.Id+"_DropDown");_zF3(_2f);if(this.OverlayElement){_zF3(this.OverlayElement);}if(this.CallbackProgressDomObj){_zF3(this.CallbackProgressDomObj);}if(this.ContainerObj){_zF3(this.ContainerObj);}window.ComponentArt_ComboBox_ReLoad=true;};window.ComponentArt_ComboBox.prototype.Enable=function(){if(this.element){this.element.disabled=false;}if(this.TextBoxEnabled){var _30=document.getElementById(this.Id+"_Input");if(_30){_30.disabled=false;if(this.TextBoxDisabledCssClass&&this.TextBoxCssClass){_30.className=this.TextBoxCssClass;}}}else{var _31=document.getElementById(this.Id+"_TextBox");if(_31){if(this.TextBoxDisabledCssClass&&this.TextBoxCssClass){_31.className=this.TextBoxCssClass;}}}if(this.DisabledCssClass&&this.CssClass){this.element.className=this.CssClass;}this.Disabled=false;};window.ComponentArt_ComboBox.prototype.EnsureDomElement=function(){this.element=this.DomElement=document.getElementById(this.DomElementId);};ComponentArt_ComboBox.prototype.findPos=function(obj){var _33=curtop=0;var _34=obj;if(_34.offsetParent){do{_33+=_34.offsetLeft;curtop+=_34.offsetTop;}while(_34=_34.offsetParent);}var _34=obj;if(_34.parentNode){do{_33-=isNaN(_34.scrollLeft)?0:_34.scrollLeft;curtop-=isNaN(_34.scrollTop)?0:_34.scrollTop;}while(_34=_34.parentNode);}return [_33,curtop];};ComponentArt_ComboBox.prototype.getPageScroll=function(){var _35=document.body.scrollLeft;if(_35==0){if(window.pageXOffset){_35=window.pageXOffset;}else{_35=(document.body.parentElement)?document.body.parentElement.scrollLeft:0;}}var _36=document.body.scrollTop;if(_36==0){if(window.pageYOffset){_36=window.pageYOffset;}else{_36=(document.body.parentElement)?document.body.parentElement.scrollTop:0;}}return [_35,_36];};ComponentArt_ComboBox.prototype.Expand=function(){this.EnsureDomElement();var _37=document.getElementById(this.Id+"_DropDown");var _38=document.getElementById(this.Id+"_DropDownContent");if(_37&&_37.style.display=="none"){var _39=this.findPos(this.element);var _3a=this.getPageScroll();var x=_39[0]+_3a[0];var y=_39[1]+_3a[1]+this.element.offsetHeight;_37.style.position="absolute";_37.style.left=x+"px";_37.style.top=y+"px";_37.style.height="";_37.style.visibility="hidden";_37.style.display="";if(!this.DropDownWidth){this.DropDownWidth=ComponentArt_GetAdjustedWidth(this.element);}if(this.DropDownWidth>0){_37.style.width=this.DropDownWidth+"px";}var _3d=ComponentArt_GetAdjustedWidth(_38.parentNode,this.DropDownWidth);_38.style.width=_3d-(this.CacheMapWidth?this.CacheMapWidth:0)+"px";if(!this.DropDownHeight){if(this.HasDropDownContent){this.DropDownHeight=ComponentArt_GetAdjustedHeight(_38);this.ItemHeight=0;}else{if(_38.childNodes.length>this.DropDownPageSize){this.DropDownHeight=_38.childNodes[this.DropDownPageSize].offsetTop;this.ItemHeight=Math.round(this.DropDownHeight/this.DropDownPageSize);}else{this.ItemHeight=ComponentArt_GetAdjustedHeight(_38.firstChild);this.DropDownHeight=this.ItemHeight*this.DropDownPageSize;}}}_38.style.height=this.DropDownHeight+"px";_38.style.overflow="auto";_38.style.overflowX="hidden";var _3e=ComponentArt_GetAdjustedHeight(_37);_37.style.height="1px";_37.style.overflow="hidden";_37.style.visibility="";_37.style.zIndex=90310;this.ExpandStartTime=(new Date()).getTime();this.ExpandElement=_37;this._oldSelectedIndex=this.SelectedIndex;ComponentArt_ComboBox_ExpandStep(this,_3e);}this.Expanded=true;if(this.AutoTheming){var _3f=document.getElementById(this.Id+"_DropDiv");if(_3f){_3f.className=this.AutoThemingCssClassPrefix+"combobox-drop-expanded";}}};window.ComponentArt_ComboBox.prototype.Fetch=function(_40,_41){if(this.IsMvc){var url=this.MvcAjaxUrl?this.MvcAjaxUrl:document.location.href.split("?")[0];var _43=this.CallbackFilterString?this.CallbackFilterString:"";try{var cb=this;var _45=cb.get_events().getHandler("beforeCallback");if(_45){_45(cb,Sys.EventArgs.Empty);}$.ajax({type:"POST",url:url,data:{"Skip":_40,"Take":_41,"Filter":_43},dataType:"json",success:function(msg){var _47=msg.d||msg;if(_47.Data&&_47.Data.length){for(var i=0;i<_47.Data.length;i++){var o=_47.Data[i];var _4a=o;var _4b=o;if(cb.DataTextField){_4a=o[cb.DataTextField];}if(cb.DataValueField){_4b=o[cb.DataValueField];}cb.Data[_40+i]=[["Text",_4a],["Value",_4b]];}}cb.ItemCount=_47.ItemCount;var _4c=cb.get_events().getHandler("callbackComplete");if(_4c){_4c(cb,Sys.EventArgs.Empty);}cb.HideReloading();if(cb.AutoComplete||cb.AutoHighlight){cb.CompleteAndHighlight();}cb.Render(true);}});}catch(ex){}}else{if(this.SoaService){var _4d=this;function FailureCallback(){}function SuccessCallback(_4e,_4f,_50){if(_4e.Data&&_4e.Data.length&&_4d.DataTextField){for(var i=0;i<_4e.Data.length;i++){var _52="";var _53=null;for(var j=0;j<_4e.Data[i].length;j++){if(_4e.Data[i][j].Key==_4d.DataTextField){_52=_4e.Data[i][j].Value;}else{if(_4e.Data[i][j].Key==_4d.DataValueField){_53=_4e.Data[i][j].Value;}}}_4d.Data[_40+i]=[["Text",_52],["Value",_53]];}}_4d.ItemCount=_4e.ItemCount;_4d.HideReloading();if(_4d.AutoComplete||_4d.AutoHighlight){_4d.CompleteAndHighlight();}_4d.Render(true);}var _55={"Offset":_40,"Count":_41,"Columns":[{"Name":this.DataTextField}],"Filters":(this.DataTextField&&this.CallbackFilterString)?[{"Operand":6,"DataFieldName":this.DataTextField,"DataFieldValue":this.CallbackFilterString}]:[],"Tag":this.SoaRequestTag?this.SoaRequestTag:null};var _45=_4d.get_events().getHandler("beforeCallback");if(_45){_45(_4d,Sys.EventArgs.Empty);}var _56=eval(this.SoaService);_56["Select"](_55,SuccessCallback,FailureCallback);}else{var _57=document.getElementById(this.Id+"_CacheMap");if(_57){for(var i=_40;i<_40+_41;i++){this.Data[i]=[];}this.RenderCacheMap(_57);}var url=this.UseClientUrlAsPrefix?(document.location.href+(document.location.href.indexOf("?")>0?"&":"?")+"Cart_"+this.Id+"_Callback=yes"):this.CallbackPrefix;url+="&Cart_"+this.Id+"_Callback_StartIndex="+_40+"&Cart_"+this.Id+"_Callback_NumItems="+_41;if(this.CallbackFilterString){url+="&Cart_"+this.Id+"_Callback_Filter="+encodeURIComponent(this.CallbackFilterString);}this.LoadedItemCount+=_41;while(this.LoadedItemCount>this.CacheSize){this.UnloadStalePage();}this.Callback(url,_40);}}};window.ComponentArt_ComboBox.prototype.Filter=function(_59){if(this.RunningMode==0){this.FilterString=_59.toLowerCase();this.RenderDropDown();return true;}else{if(_59&&this.CallbackFilterString&&_59.indexOf(this.CallbackFilterString)==0&&this.Data.length==this.ItemCount){this.FilterString=_59.toLowerCase();this.CallbackFilterString=_59;this.RenderDropDown();return true;}var _5a=false;var _5b=false;if(this.FilterCache){var _5c=_59.toLowerCase();var _5d=this.CallbackFilterString?this.CallbackFilterString.toLowerCase():"";var _5e=[_5d,this.ItemCount,this.Data.concat()];for(var i=0;i<this.FilterCache.length;i++){if(this.FilterCache[i][0]==_5c){_5a=true;this.CallbackFilterString=_59;this.ItemCount=this.FilterCache[i][1];this.Data=this.FilterCache[i][2].concat();}if(this.FilterCache[i][0]==_5d){_5b=true;}}if(_5e&&!_5b){this.FilterCache=[_5e].concat(this.FilterCache);if(this.FilterCache.length>this.FilterCacheSize){this.FilterCache.length=this.FilterCacheSize;}}}this.FilterString=null;if(_5a){this.RenderDropDown();return true;}else{this.Data.length=0;this.CallbackFilterString=_59;this.ShowReloading();this.Fetch(0,this.DropDownPageSize*2);return false;}}};window.ComponentArt_ComboBox.prototype.FindItemByProperty=function(_60,_61){for(var i=0;i<this.Data.length;i++){var _63=this.GetItem(i);if(_63.GetProperty(_60)==_61){return _63;}}return null;};window.ComponentArt_ComboBox.prototype.Focus=function(){var _64=document.getElementById(this.Id+"_Input");if(_64){try{_64.focus();}catch(ex){}}this.Focused=true;if(this.KeyboardShouldBeEnabled){this.KeyboardEnabled=true;}};window.ComponentArt_ComboBox.prototype.GetClientTemplate=function(sID){if(this.ClientTemplates){for(var i=0;i<this.ClientTemplates.length;i++){if(this.ClientTemplates[i][0]==sID){return this.ClientTemplates[i][1];}}}return null;};window.ComponentArt_ComboBox.prototype.GetItem=function(_67){if(this.Data.length>_67&&_67>=0){var _68=this.Data[_67];if(_68){var _69=new ComponentArt_ComboBoxItem(_68);for(var i=0;i<_68.length;i++){_69[_68[i][0]]=_68[i][1];}if(_69.Text==null){_69.Text="";}_69.ParentComboBox=this;_69.Index=_67;return _69;}else{return null;}}return null;};window.ComponentArt_ComboBox.prototype.GetSelectedItem=function(){if(this.SelectedIndex>=0){return this.GetItem(this.SelectedIndex);}return null;};window.ComponentArt_ComboBox.prototype.HandleBlur=function(e){if(this.CssClass&&this.FocusedCssClass&&this.element){this.element.className=this.CssClass;}if(this.TextBoxFocusedCssClass){if(this.TextBoxEnabled){var _6c=document.getElementById(this.Id+"_Input");if(_6c){_6c.className=this.TextBoxCssClass;}}else{var _6d=document.getElementById(this.Id+"_TextBox");if(_6d){_6d.className=this.TextBoxCssClass;}}}this.Focused=false;if(this.KeyboardEnabled){this.KeyboardShouldBeEnabled=true;this.KeyboardEnabled=false;}if(this.Expanded){setTimeout(this.Id+".CollapseIfBlurred()",100);}};window.ComponentArt_ComboBox.prototype.HandleClick=function(e,o,_70){ComponentArt_CancelEvent(e);this.SelectItemByIndex(_70);this.Collapse();};window.ComponentArt_ComboBox.prototype.HandleDropClick=function(e,o){if(!this.Disabled){if(this.DropActiveImageUrl){o.src=this.DropActiveImageUrl;}this.ToggleExpand();setTimeout(this.Id+".Focus()",10);}return false;};window.ComponentArt_ComboBox.prototype.HandleDropMouseUp=function(e,o){if(this.DropActiveImageUrl){if(this.DropHoverImageUrl){e.src=this.DropHoverImageUrl;}else{e.src=this.DropImageUrl;}}};window.ComponentArt_ComboBox.prototype.HandleFocus=function(){this.EnsureDomElement();window._z137=this;if(this.FocusedCssClass&&this.element){this.element.className=this.FocusedCssClass;}if(this.TextBoxEnabled){var _75=document.getElementById(this.Id+"_Input");_75.select();}if(this.TextBoxFocusedCssClass){if(this.TextBoxEnabled){var _75=document.getElementById(this.Id+"_Input");if(_75){_75.className=this.TextBoxFocusedCssClass;}}else{var _76=document.getElementById(this.Id+"_TextBox");if(_76){_76.className=this.TextBoxFocusedCssClass;}}}this.Focused=true;if(this.KeyboardShouldBeEnabled){this.KeyboardEnabled=true;}};window.ComponentArt_ComboBox.prototype.HandleInputChange=function(_77){var _78=document.getElementById(this.Id+"_Input");this.InputValue=_78.value;var _79=_z114(_78);var _7a=this.GetSelectedItem();if(this.AutoFilter){var _7b=_78.value;_7b=_7b.substring(0,_79);if(this.RunningMode==1){if(_79>0&&_79<this.CallbackFilterMinimumLength){return;}this.Expand();clearTimeout(this.FilterTimeout);this.FilterTimeout=setTimeout("if("+this.Id+".Filter('"+_7b.replace("'","\\'")+"')) {"+this.Id+".CompleteAndHighlight(); }",this.CallbackFilterDelay);return;}else{this.Filter(_7b);this.Expand();}}if(this.AutoComplete||this.AutoHighlight){this.CompleteAndHighlight();}};window.ComponentArt_ComboBox.prototype.HandleInputMouseOut=function(e,o){if(this.TextBoxHoverCssClass){if(this.TextBoxEnabled){var _7e=document.getElementById(this.Id+"_Input");if(_7e){_7e.className=this.TextBoxCssClass;}}else{var _7f=document.getElementById(this.Id+"_TextBox");if(_7f){_7f.className=this.TextBoxCssClass;}}}if(this.DropHoverImageUrl){var _80=document.getElementById(this.Id+"_DropImage");if(_80){_80.src=this.DropImageUrl;}}if(this.CssClass&&this.HoverCssClass&&this.element&&this.element.className.indexOf(" "+this.HoverCssClass)>0){this.element.className=this.CssClass;}};window.ComponentArt_ComboBox.prototype.HandleInputMouseOver=function(e,o){if(this.TextBoxHoverCssClass){if(this.TextBoxEnabled){var _83=document.getElementById(this.Id+"_Input");if(_83&&_83.className==this.TextBoxCssClass){_83.className+=" "+this.TextBoxHoverCssClass;}}else{var _84=document.getElementById(this.Id+"_TextBox");if(_84&&_84.className==this.TextBoxCssClass){_84.className+=" "+this.TextBoxHoverCssClass;}}}if(this.DropHoverImageUrl){var _85=document.getElementById(this.Id+"_DropImage");if(_85){_85.src=this.DropHoverImageUrl;}}if(this.CssClass&&this.HoverCssClass&&this.element&&this.element.className==this.CssClass){this.element.className+=" "+this.HoverCssClass;}};window.ComponentArt_ComboBox.prototype.HandleItemMouseOver=function(e,o,_88){try{if(ComponentArt_Contains(o,ComponentArt_FromElement(e))){return;}}catch(ex){}o.className+=" "+this.CssClasses[_88].Hover;};window.ComponentArt_ComboBox.prototype.HandleItemMouseOut=function(e,o,_8b){try{if(ComponentArt_Contains(o,ComponentArt_ToElement(e))){return;}}catch(ex){}o.className=this.CssClasses[_8b].Base;};window.ComponentArt_ComboBox.prototype.HandleKeyPress=function(e,o){var _8e=cart_browser_ie?e.keyCode:e.which;if(_8e==8){var _8f=_z114(o);var _90=_z111(o);if(_90>_8f){var _91=_8f;if(_91>1){o.value=o.value.substring(0,_91-1);ComponentArt_SetSelectionRange(o,_91-1,o.value.length);}else{o.value="";ComponentArt_SetSelectionRange(o,0,0);}ComponentArt_CancelEvent(e);}}else{if(_8e==13){if(this.AutoComplete||this.AutoHighlight){this.CompleteAndHighlight();}this.Collapse();ComponentArt_CancelEvent(e);return;}else{if(_8e==40){this.HandleScroll();return;}else{if(_8e==38){return;}else{if(_8e==9){return;}else{if(_8e==16||_8e==17||_8e==18||_8e==19||_8e==20){return;}}}}}}setTimeout(this.Id+".HandleInputChange()",1);};window.ComponentArt_ComboBox.prototype.HandleMouseDown=function(e,o){ComponentArt_CancelEvent(e);if(this.ResizeArea){_zE8=this;var _94=document.getElementById(this.Id+"_DropDown");var _95=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;var _96=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;_zE9=document.createElement("table");_zE9.cellSpacing=100;_zE9.style.position="absolute";_zE9.style.zIndex=100000;_zE9.style.left=(_95-100)+"px";_zE9.style.top=(_96-100)+"px";_zE9.style.cursor=this.DropDownResizingMode=="Corner"?"se-resize":"s-resize";_zE9.appendChild(document.createElement("tbody"));_zE9.firstChild.appendChild(document.createElement("tr"));_zE9.firstChild.firstChild.appendChild(document.createElement("td"));document.body.insertBefore(_zE9,document.body.firstChild);if(this.DropDownResizingStyle=="Outline"){_zEA=null;_zEB=document.createElement("div");_zEB.style.zIndex=90211;_zEB.style.border="1px solid #505050";_zEB.style.position="absolute";_zEB.style.top=_z87(_94)+"px";_zEB.style.left=_z86(_94)+"px";_zEB.style.height=ComponentArt_GetAdjustedHeight(_94)+"px";_zEB.style.width=ComponentArt_GetAdjustedWidth(_94)+"px";document.body.insertBefore(_zEB,document.body.firstChild);}else{_zEA=document.getElementById(this.Id+"_DropDownContent");_zEB=_94;}_zEC=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;_zED=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;this.Resizing=true;var _97=document.getElementById(this.Id+"_CacheMap");if(_97){_97.innerHTML="";}_zE9.onmousemove=_zE6;_zE9.onmouseup=_zE7;}setTimeout(this.Id+".Focus()",10);return false;};window.ComponentArt_ComboBox.prototype.HandleMouseMove=function(e,o){var _9a=15;if(this.Resizing){return true;}else{var _9b=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;var _9c=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;var _9d=this.DropDownHeight;var _9e=this.DropDownWidth;if(this.DropDownResizingMode!="Off"){var _9f=document.getElementById(this.Id+"_DropDown");if(_9f){_9d=ComponentArt_GetAdjustedHeight(_9f);}}if(this.DropDownResizingMode=="Corner"){if(Math.abs(_9b-(this.DropDownX+_9e))<_9a&&Math.abs(_9c-(this.DropDownY+_9d))<_9a){this.ResizeArea=true;o.style.cursor="se-resize";}}else{if(this.DropDownResizingMode=="Bottom"){if(Math.abs(_9c-(this.DropDownY+_9d))<_9a){this.ResizeArea=true;o.style.cursor="s-resize";}}}}};window.ComponentArt_ComboBox.prototype.HandleMouseOut=function(e,o){this.ResizeArea=false;o.style.cursor="";};window.ComponentArt_ComboBox.prototype.HandleMouseUp=function(e,o){if(this.Scrolling){clearTimeout(this.FetchTimeout);this.HandleScrollFetch();}};window.ComponentArt_ComboBox.prototype.HandleScroll=function(){if(this.RunningMode!=1){return;}var o=document.getElementById(this.Id+"_DropDownContent");this.Scrolling=true;var _a5=Math.round((o.scrollTop*(this.ItemCount-1))/(o.scrollHeight-o.offsetHeight));clearTimeout(this.FetchTimeout);if(_a5>=0&&_a5<this.ItemCount){var _a6=Math.floor(_a5/this.DropDownPageSize);this.PageViews[_a6]=++this.PageViewOrder;this.ScrollIndex=_a5;this.FetchTimeout=setTimeout(this.Id+".HandleScrollFetch()",500);}};window.ComponentArt_ComboBox.prototype.HandleScrollFetch=function(){this.Scrolling=false;var _a7=0;for(var i=0;i<this.Data.length;i++){if(this.Data[i]!=null){_a7++;}}if(this.ItemCount<=_a7){return;}if(this.KeyboardIndex==0&&this.SelectedIndex!=0){this.ScrollIndex-=this.DropDownPageSize;}var _a9=this.ScrollIndex;var _aa=this.DropDownPageSize*2;var _ab=_a9-_a9%this.DropDownPageSize;var _ac=_ab+this.DropDownPageSize;if(!this.Data[_a9]||!this.Data[_ab]||!this.Data[_ac]){var _ad=!this.Data[_a9]?_a9:!this.Data[_ab]?_ab:_ac;var _ae=_ad;for(var i=0;i<_aa&&_ae>0;i++){if(this.Data[_ae-1]){break;}_ae--;}var _af=_ad;for(var i=0;i<_aa&&_af<this.ItemCount;i++){if(this.Data[_af]){break;}_af++;}this.Fetch(_ae,_af-_ae);}};window.ComponentArt_ComboBox.prototype.HideOverlay=function(){if(this.OverlayElement){this.OverlayElement.style.display="none";}};window.ComponentArt_ComboBox.prototype.HideReloading=function(){if(this.CallbackProgressDomObj){this.CallbackProgressDomObj.style.display="none";}};window.ComponentArt_ComboBox.prototype.Initialize=function(){_z132(this);if(this.EnableViewState){ComponentArt_ClientStateControls[ComponentArt_ClientStateControls.length]=this;}this.element.style.visibility="";this.PageViews=[1];this.PageViewOrder=1;this.LoadedItemCount=this.Data.length;this.TextCache=[];this.CssClasses=[];if(this.AutoFilter){this.FilterCache=[];}var _b0=this.get_events().getHandler("init");if(_b0){_b0(this,Sys.EventArgs.Empty);}var _b1=document.getElementById(this.Id+"_Input");if(_b1){_b1.style.width="1px";_b1.style.visibility="hidden";_b1.style.display="";var _b2=ComponentArt_GetAdjustedWidth(_b1.parentNode)+ComponentArt_GetAdjustedWidth(_b1,0);if(_b2>10){_b1.style.width=_b2+"px";}else{if(this.Width){_b1.style.width=this.Width+"px";}}_b1.style.visibility="";_b1.ComponentArtInput=true;_b1.autocomplete="off";_b1.onsubmit=ComponentArt_CancelEvent;}var _b3=document.createElement("div");_b3.style.position="absolute";document.body.insertBefore(_b3,document.body.firstChild);this.ContainerObj=_b3;this.Initialized=true;if(this.ClientRenderCondition){ComponentArt_WaitOnCondition(this.ClientRenderCondition,this.Id+".InitialRender()");}else{this.InitialRender();}if(this.SoaService){this.Fetch(0,this.DropDownPageSize);}else{if(this.EnableViewState){this.SaveData();}}};window.ComponentArt_ComboBox.prototype.InitialRender=function(){this.Render(true);if(!window.cart_combobox_donotplacedropdowninbody){var _b4=document.getElementById(this.Id+"_DropDown");if(_b4){_zF3(_b4);var _b5=document.forms.length>0?document.forms[0]:document.body;_b5.insertBefore(_b4,_b5.firstChild);}}var _b6=document.getElementById(this.Id+"_DropDownContent");if(_b6){var _b7=function(){arguments.callee.ComboBox.HandleScroll();};_b7.ComboBox=this;_b6.onscroll=_b7;var _b7=function(){arguments.callee.ComboBox.Focus();};_b7.ComboBox=this;_b6.onfocus=_b7;}if(!this.Enabled){this.Disable();}var _b8=this.get_events().getHandler("load");if(_b8){_b8(this,Sys.EventArgs.Empty);}if(this.KeyboardEnabled){this.KeyboardShouldBeEnabled=true;this.KeyboardEnabled=false;}this.Rendered=true;};window.ComponentArt_ComboBox.prototype.LoadItems=function(_b9,_ba){if(_b9.length>0){for(var i=0;i<_b9.length;i++){this.Data[_ba+i]=_b9[i];var _bc=Math.floor((_ba+i)/this.DropDownPageSize);this.PageViews[_bc]=++this.PageViewOrder;}}};window.ComponentArt_ComboBox.prototype.LoadParams=function(_bd){for(var _be=0;_be<_bd.length;_be++){var _bf=_bd.item(_be);var _c0=_bf.nodeName;var _c1=_bf.firstChild?_bf.firstChild.nodeValue:null;this[_c0]=_c1;}};window.ComponentArt_ComboBox.prototype.RemoveAll=function(){this.Data.length=0;this.ItemCount=0;this.LoadedItemCount=0;this.TextCache.length=0;this.CssClasses.length=0;};window.ComponentArt_ComboBox.prototype.RemoveItemAt=function(_c2){if(_c2>=0&&_c2<this.Data.length){this.Data=this.Data.slice(0,_c2).concat(this.Data.slice(_c2+1));this.ItemCount--;this.LoadedItemCount--;this.TextCache.length=0;this.CssClasses.length=0;}};window.ComponentArt_ComboBox.prototype.Render=function(_c3){this.element=this.DomElement=document.getElementById(this.DomElementId);if(this.element){this.element.className=this.CssClass;}if(this.TextBoxClientTemplateId){var _c4=document.getElementById(this.Id+"_TextBox");if(_c4){var _c5=this.GetClientTemplate(this.TextBoxClientTemplateId);if(_c5){var _c6=ComponentArt_InstantiateClientTemplate(_c5,this,this.GetSelectedItem());if(_c6){var _c7="#$InputBox";if(_c6.indexOf(_c7)>=0){var _c8=document.getElementById(this.Id+"_Input");if(_c8){if(this.InputBox){this.RestoreInputBox();}var _c9="<div id=\""+this.Id+"_InputBoxPlaceHolder\" style=\"overflow:hidden;height:"+_c8.offsetHeight+"px;width:"+_c8.offsetWidth+"px;\">&nbsp;</div>";_c6=_c6.replace(_c7,_c9);var _ca=document.createElement("div");_ca.innerHTML=_c9;this.ContainerObj.appendChild(_c8.parentNode.replaceChild(_ca,_c8));this.InputBox=_c8;}}_c4.innerHTML=_c6;if(this.InputBox){clearTimeout(this.RestoreInputBoxTimeout);this.RestoreInputBoxTimeout=setTimeout(this.Id+".RestoreInputBox()",0);}}}}}else{if(this.TextBoxEnabled){var _c8=document.getElementById(this.Id+"_Input");if(_c8){_c8.className=this.TextBoxCssClass;}}else{var _c4=document.getElementById(this.Id+"_TextBox");if(_c4){_c4.className=this.TextBoxCssClass;}}}var _cb=document.getElementById(this.Id+"_CacheMap");if(_cb){this.RenderCacheMap(_cb);}if(_c3){this.RenderDropDown();}};window.ComponentArt_ComboBox.prototype.RenderCacheMap=function(_cc){var _cd=["<table width=\""+this.CacheMapWidth+"\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];for(var i=0;i<_cc.offsetHeight;i++){var _cf=this.Data[Math.round((i*this.ItemCount)/_cc.offsetHeight)];var _d0=_cf?(_cf.length==0?this.CacheMapLoadingColor:this.CacheMapLoadedColor):this.CacheMapNotLoadedColor;_cd[_cd.length]="<tr><td height=\"1\" bgcolor=\""+_d0+"\"></td></tr>";}_cd[_cd.length]="</table>";_cc.innerHTML=_cd.join("");};window.ComponentArt_ComboBox.prototype.RenderDropDown=function(){if(this.HasDropDownContent){return;}var _d1=document.getElementById(this.Id+"_DropDownContent");if(_d1){var _d2=0;var _d3=[];for(var i=0;i<this.ItemCount;i++){var _d5=i<this.Data.length?this.GetItem(i):null;if(_d5){this.TextCache[i]=_d5.Text;if(!this.FilterString||(this.FilterString&&this.TextCache[i].toLowerCase().indexOf(this.FilterString)==0)){if(_d2>0){this.RenderMissingItems(_d3,_d2);_d2=0;}this.RenderItem(_d5,_d3);}}else{_d2++;}}if(_d2>0){this.RenderMissingItems(_d3,_d2);_d2=0;}_d1.innerHTML=_d3.join("");}};window.ComponentArt_ComboBox.prototype.RenderItem=function(_d6,_d7){var _d8=_d6.CssClass?_d6.CssClass:this.ItemCssClass;if(!_d6.Enabled&&this.DisabledItemCssClass){_d8+=" "+this.DisabledItemCssClass;}if(this.SelectedItemCssClass&&_d6.Index==this.SelectedIndex){_d8+=" "+this.SelectedItemCssClass;}var _d9=this.SelectedItemHoverCssClass&&_d6.Index==this.SelectedIndex?this.SelectedItemHoverCssClass:this.ItemHoverCssClass;this.CssClasses[_d6.Index]={"Base":_d8,"Hover":_d9};_d7[_d7.length]="<div style=\"white-space: nowrap;\" id=\""+this.Id+"_item_"+_d6.Index+"\"";if(_d8){_d7[_d7.length]=" class=\""+_d8+"\"";}if(_d6.Enabled){if(_d9){_d7[_d7.length]=" onmouseover=\""+this.Id+".HandleItemMouseOver(event,this, "+_d6.Index+");\"";_d7[_d7.length]=" onmouseout=\""+this.Id+".HandleItemMouseOut(event,this, "+_d6.Index+");\"";}_d7[_d7.length]=" onclick=\""+this.Id+".HandleClick(event,this,"+_d6.Index+")\"";}_d7[_d7.length]=" onmousedown=\"ComponentArt_CancelEvent(event)\"><nobr>";var _da=_d6.ClientTemplateId?_d6.ClientTemplateId:this.ItemClientTemplateId;if(_da){var _db=this.GetClientTemplate(_da);if(_db){var _dc=ComponentArt_InstantiateClientTemplate(_db,this,_d6);if(_dc){_d7[_d7.length]=_dc;}}}else{_d7[_d7.length]=_d6.Text;}_d7[_d7.length]="</nobr></div>";};window.ComponentArt_ComboBox.prototype.RenderMissingItem=function(_dd){_dd[_dd.length]="<div style=\"visibility:hidden;overflow:hidden;\" class=\""+this.ItemCssClass+"\">&nbsp;</div>";};window.ComponentArt_ComboBox.prototype.RenderMissingItems=function(_de,_df){_de[_de.length]="<div style=\"visibility:hidden;overflow:hidden;height:"+(_df*this.ItemHeight)+"px;\">&nbsp;</div>";};window.ComponentArt_ComboBox.prototype.RestoreInputBox=function(){if(this.InputBox){var _e0=document.getElementById(this.Id+"_InputBoxPlaceHolder");if(_e0){_e0.parentNode.replaceChild(this.InputBox,_e0);this.InputBox.focus();this.InputBox=null;}else{clearTimeout(this.RestoreInputBoxTimeout);this.RestoreInputBoxTimeout=setTimeout(this.Id+".RestoreInputBox()",10);}}};window.ComponentArt_ComboBox.prototype.SaveData=function(){var _e1=document.getElementById(this.Id+"_Data");if(_e1){_e1.value=ComponentArt_ArrayToXml(this.Data,true);}};window.ComponentArt_ComboBox.prototype.ScrollIntoView=function(_e2){var _e3=document.getElementById(this.Id+"_item_"+_e2);var _e4=document.getElementById(this.Id+"_DropDownContent");if(_e3){if(_e3.offsetTop+_e3.offsetHeight>_e4.scrollTop+_e4.offsetHeight||_e3.offsetTop<_e4.scrollTop){_e4.scrollTop=_e3.offsetTop;}}};window.ComponentArt_ComboBox.prototype.SelectItem=function(_e5,_e6){if(!_e5.Enabled){return;}var _e7=_e5.Index;if(_e7==this.SelectedIndex){return;}if(!_e6){var _e8=this.get_events().getHandler("beforeChange");if(_e8){var _e9=new Sys.CancelEventArgs();_e8(this,_e9);if(_e9.get_cancel()){return;}}}if(this.SelectedItemCssClass){if(this.SelectedIndex>=0){var _ea=this.GetItem(this.SelectedIndex);if(_ea){var _eb=_ea.CssClass?_ea.CssClass:this.ItemCssClass;if(this.CssClasses[this.SelectedIndex]){this.CssClasses[this.SelectedIndex].Base=_eb;if(this.ItemHoverCssClass){this.CssClasses[this.SelectedIndex].Hover=_eb+" "+this.ItemHoverCssClass;}}var _ec=document.getElementById(this.Id+"_item_"+this.SelectedIndex);if(_ec){_ec.className=_eb;}}}if(this.CssClasses[_e7]){this.CssClasses[_e7].Base+=" "+this.SelectedItemCssClass;if(this.SelectedHoverCssClass){this.CssClasses[_e7].Hover+=" "+this.SelectedHoverCssClass;}var _ed=document.getElementById(this.Id+"_item_"+_e7);if(_ed){_ed.className=this.CssClasses[_e7].Base;}}}this._oldSelectedIndex=this.SelectedIndex;this.SelectedIndex=_e7;var _ee=document.getElementById(this.Id+"_SelectedIndex");if(_ee){_ee.value=_e7;}var _ef=document.getElementById(this.Id+"_SelectedText");if(_ef){_ef.value=_e5.Text;}var _f0=document.getElementById(this.Id+"_SelectedValue");if(_f0){_f0.value=_e5.Value;}var _f1=document.getElementById(this.Id+"_Input");if(_f1){_f1.value=_e5.Text;}this.Render();this.ScrollIntoView(_e7);if(!_e6){var _e8=this.get_events().getHandler("change");if(_e8){_e8(this,Sys.EventArgs.Empty);}}};window.ComponentArt_ComboBox.prototype.SelectItemByIndex=function(_f2){var _f3=this.GetItem(_f2);if(_f3){this.SelectItem(_f3);}};window.ComponentArt_ComboBox.prototype.ShowOverlay=function(){if(!cart_browser_ie){return;}var _f4=document.getElementById(this.Id+"_DropDown");if(!this.OverlayElement){var _f5=document.createElement("iframe");_f5.src="javascript:false";_f5.style.position="absolute";if(cart_browser_ie){_f5.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";}else{_f5.style.opacity=0;_f5.style.setProperty("-moz-opacity",0,"");}_f4.parentNode.insertBefore(_f5,_f4);this.OverlayElement=_f5;}this.OverlayElement.style.top=_f4.style.top;this.OverlayElement.style.left=_f4.style.left;this.OverlayElement.style.width=_f4.offsetWidth+"px";this.OverlayElement.style.height=_f4.offsetHeight+"px";this.OverlayElement.style.display="";};window.ComponentArt_ComboBox.prototype.ShowReloading=function(){var _f6=document.getElementById(this.Id+"_DropDownContent");_f6.innerHTML="";if(!this.Expanded){return;}if(!this.CallbackProgressDomObj){this.CallbackProgressDomObj=document.createElement("div");this.CallbackProgressDomObj.style.position="absolute";this.CallbackProgressDomObj.style.display="none";this.CallbackProgressDomObj.style.textAlign="center";if(this.LoadingClientTemplateId){var _f7=this.GetClientTemplate(this.LoadingClientTemplateId);if(_f7){var _f8=ComponentArt_InstantiateClientTemplate(_f7,this,null);if(_f8){this.CallbackProgressDomObj.innerHTML=_f8;}}}else{this.CallbackProgressDomObj.innerHTML=this.LoadingText;}document.body.insertBefore(this.CallbackProgressDomObj,document.body.firstChild);}var _f6=document.getElementById(this.Id+"_DropDownContent");if(_f6){this.CallbackProgressDomObj.style.top=_z87(_f6)+"px";this.CallbackProgressDomObj.style.left=_z86(_f6)+"px";this.CallbackProgressDomObj.style.width=ComponentArt_GetAdjustedWidth(_f6)+"px";this.CallbackProgressDomObj.style.height=ComponentArt_GetAdjustedHeight(_f6)+"px";this.CallbackProgressDomObj.style.zIndex=_f6.style.zIndex+1;this.CallbackProgressDomObj.style.display="";}};window.ComponentArt_ComboBox.prototype.ToggleExpand=function(){if(this.Expanded){this.Collapse();}else{this.Expand();}};window.ComponentArt_ComboBox.prototype.UnloadStalePage=function(){var _f9=this.PageViews.slice().sort(function(a,b){return (!a?1:!b?-1:a-b);});var _fc=_f9[0];for(var i=0;i<this.PageViews.length;i++){if(this.PageViews[i]==_fc){this.PageViews[i]=null;var _fe=i*this.DropDownPageSize;var _ff=_fe+this.DropDownPageSize;for(var j=_fe;j<_ff;j++){this.Data[j]=null;}this.LoadedItemCount-=(_ff-_fe);break;}}};window.ComponentArt_ComboBox.prototype.UnSelect=function(){if(this.SelectedItemCssClass){if(this.SelectedIndex>=0){var _101=this.GetItem(this.SelectedIndex);if(_101){var _102=_101.CssClass?_101.CssClass:this.ItemCssClass;this.CssClasses[this.SelectedIndex].Base=_102;if(this.ItemHoverCssClass){this.CssClasses[this.SelectedIndex].Hover=_102+" "+this.ItemHoverCssClass;}var _103=document.getElementById(this.Id+"_item_"+this.SelectedIndex);if(_103){_103.className=_102;}}}}this.SelectedIndex=-1;var _104=document.getElementById(this.Id+"_SelectedIndex");if(_104){_104.value=-1;}var _105=document.getElementById(this.Id+"_SelectedText");if(_105){_105.value="";}var _106=document.getElementById(this.Id+"_SelectedValue");if(_106){_106.value="";}this.Render();this.ScrollIntoView(0);var _107=this.get_events().getHandler("change");if(_107){_107(this,Sys.EventArgs.Empty);}};window.ComponentArt_ComboBox_Kernel_Loaded=true;