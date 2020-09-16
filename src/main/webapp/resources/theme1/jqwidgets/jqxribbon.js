/*
jQWidgets v10.1.2 (2020-Sep)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxRibbon","",{});a.extend(a.jqx._jqxRibbon.prototype,{defineInstance:function(){var b={width:null,height:"auto",mode:"default",position:"top",selectedIndex:-1,selectionMode:"click",popupCloseMode:"click",animationType:"fade",animationDelay:400,scrollPosition:"both",disabled:false,rtl:false,scrollStep:10,scrollDelay:30,reorder:false,initContent:null,_roundedCorners:true,_removeByDrag:false,_suppressReorder:true,events:["select","unselect","change","_removeByDrag","reorder"]};if(this===a.jqx._jqxRibbon.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;if(b.host.css("display")==="none"||document.body.contains(b.element)===false){b._initiallyHidden=true}b._browser=a.jqx.browser;if(b.mode!=="popup"&&b.selectedIndex===-1){b.selectedIndex=0}b._originalHTML=b.element.innerHTML;b._render(true)},render:function(){this._render()},refresh:function(b){if(b!==true){this._render()}},destroy:function(){var b=this;b._removeHandlers();b.host.remove()},selectAt:function(b){this._selectAt(b)},clearSelection:function(){if(this.selectedIndex!==-1){this._clearSelection()}},disableAt:function(b){var c=this;c._items[b]._disabled=true;a(c._items[b]).addClass(c.toThemeProperty("jqx-fill-state-disabled"));if(b===c.selectedIndex){c._clearSelection()}},enableAt:function(b){var c=this;c._items[b]._disabled=false;a(c._items[b]).removeClass(c.toThemeProperty("jqx-fill-state-disabled"))},hideAt:function(b){var c=this;c._items[b].style.display="none";c._checkScrollButtons();if(b===c.selectedIndex){c._clearSelection()}else{c._updatePositions()}},showAt:function(b){var c=this;if(c._orientation==="horizontal"){c._items[b].style.display="inline-block"}else{c._items[b].style.display="inherit"}c._checkScrollButtons();c._updatePositions()},val:function(b){var c=this;if(b){c._selectAt(b)}else{return c.selectedIndex}},addAt:function(h,d){var g=this,k="jqx-ribbon-item jqx-ribbon-item-"+g.position,b="jqx-widget-content jqx-ribbon-content-section jqx-ribbon-content-section-"+g.position;g._removeHandlers();var f=document.createElement("li");f.innerHTML=d.title;var c=document.createElement("div");if(typeof d.content==="string"){c.innerHTML=d.content}else{if(d.content.length!==undefined){try{if(window.$!==undefined&&d.content instanceof window.$){a(c).append(d.content)}else{if(a.isArray(d.content)){for(var e=0;e<d.content.length;e++){d.content[e].appendTo(c)}}else{while(d.content.length>0){c.appendChild(d.content[0])}}}}catch(j){}}else{c.appendChild(d.content)}}switch(g.position){case"top":k+=" jqx-rc-t";b+=" jqx-rc-b";break;case"bottom":k+=" jqx-rc-b";b+=" jqx-rc-t";break;case"left":k+=" jqx-rc-l";b+=" jqx-rc-r";break;case"right":k+=" jqx-rc-r";b+=" jqx-rc-l";break}if(g.mode==="popup"){b+=" jqx-ribbon-content-section-popup jqx-ribbon-content-section-"+g._orientation+"-popup"}if(g.rtl===true){k+=" jqx-ribbon-item-rtl"}f.className=g.toThemeProperty(k);c.className=g.toThemeProperty(b);if(g._items.length-1>=h){g._headerElement.insertBefore(f,g._items[h]);g._contentElement.insertBefore(c,g._contentSections[h])}else{g._headerElement.appendChild(f);g._contentElement.appendChild(c)}g._updateItems();g._addHandlers();g._checkScrollButtons();if(h<=g.selectedIndex&&g.selectedIndex<g._items.length-1){g.selectedIndex++}g._updatePositions();if(g.selectedIndex<0){return}g._suppressSelectionEvents=true;g._selectAt(g.selectedIndex,g.selectedIndex,true)},removeAt:function(b){var c=this;if(b===c.selectedIndex){c._clearSelection()}a(c._items[b]).remove();a(c._contentSections[b]).remove();c._updateItems(true);c._updatePositions();c._checkScrollButtons()},updateAt:function(b,c){var e=this,d=e._items[b];d.innerHTML=c.newTitle;e._contentSections[b].innerHTML=c.newContent;d._isInitialized=false;if(e.initContent&&b===e.selectedIndex){e.initContent(b);d._isInitialized=true}e._updatePositions()},setPopupLayout:function(c,g,e,b){var f=this,d=f._contentSections[c];if(f.mode==="popup"){if(!d.getAttribute("data-width")){if(d.style.width){d.setAttribute("data-width",d.style.width)}if(d.style.height){d.setAttribute("data-height",d.style.height)}}if(e){d.style.width=f._toPx(e)}if(b){d.style.height=f._toPx(b)}d._layout=g;f._positionContent(c)}},propertiesChangedHandler:function(d,b,c){if(c&&c.width&&c.height&&Object.keys(c).length===2){d.element.style.width=d._toPx(d.width);d.element.style.height=d._toPx(d.height);d._updateSize()}},propertyChangedHandler:function(d,f,h,g){if(d.batchUpdate&&d.batchUpdate.width&&d.batchUpdate.height&&Object.keys(d.batchUpdate).length===2){return}if(g!==h){switch(f){case"width":case"height":d.element.style[f]=d._toPx(g);d._updateSize();break;case"position":d._render();break;case"mode":d._contentElement.style.width="auto";d._removeHandlers(null,h);d._render();break;case"selectedIndex":d._selectAt(g,h);break;case"selectionMode":d._removeHandlers(h);d._addHandlers();break;case"scrollPosition":var b=d._scrollButtonNear;var k=d._scrollButtonFar;a(b).removeClass(d.toThemeProperty("jqx-ribbon-scrollbutton-"+h+" jqx-rc-tr jqx-rc-bl jqx-rc-tl"));a(k).removeClass(d.toThemeProperty("jqx-ribbon-scrollbutton-"+h+" jqx-rc-tr jqx-rc-bl jqx-rc-br"));b.className+=" "+d.toThemeProperty("jqx-ribbon-scrollbutton-"+g);k.className+=" "+d.toThemeProperty("jqx-ribbon-scrollbutton-"+g);d._scrollButtonRc(b,k);d._checkScrollButtons();d._updatePositions();break;case"disabled":if(g===true){d._removeHandlers();d.element.className+=" "+d.toThemeProperty("jqx-fill-state-disabled")}else{d.host.removeClass(d.toThemeProperty("jqx-fill-state-disabled"));d._addHandlers()}break;case"theme":a.jqx.utilities.setTheme(h,g,d.host);break;case"rtl":if(g===true){d._headerElement.className+=" "+d.toThemeProperty("jqx-ribbon-header-rtl");for(var e=0;e<d._items.length;e++){d._items[e].className+=" "+d.toThemeProperty("jqx-ribbon-item-rtl")}}else{d._header.removeClass(d.toThemeProperty("jqx-ribbon-header-rtl"));for(var c=0;c<d._items.length;c++){a(d._items[c]).removeClass(d.toThemeProperty("jqx-ribbon-item-rtl"))}}d._positionSelectionToken(d.selectedIndex);break}}},_raiseEvent:function(g,e){var c=this.events[g];var f=new a.Event(c);f.owner=this;f.args=e;var b;try{b=this.host.trigger(f)}catch(d){}return b},_render:function(c){var d=this;if(c!==true){d._removeHandlers()}d._selectionTokenOffsetY=0;switch(d._browser.browser){case"mozilla":d._browserWidthRtlFlag=0;d._browserScrollRtlFlag=1;d._selectionTokenOffsetX=1;break;case"msie":d._browserWidthRtlFlag=0;d._browserScrollRtlFlag=-1;if(d._browser.version==="8.0"){d._selectionTokenOffsetX=1}else{if(d._browser.version==="7.0"){d._selectionTokenOffsetX=0;if(d.mode==="popup"&&(d.position==="bottom"||d.position==="right")){d._selectionTokenOffsetY=2}}else{d._selectionTokenOffsetX=0}}break;default:d._browserWidthRtlFlag=1;d._browserScrollRtlFlag=1;d._selectionTokenOffsetX=0}if(c===true){var b=d.host.children();d._headerElement=b[0];d._header=a(b[0]);d._contentElement=b[1];d._content=a(b[1]);d._checkStructure(b);d._refreshBarPosition()}d._headerElement.style["float"]="none";d._contentElement.style.padding="0px";d.element.style.width=d._toPx(d.width);d.element.style.height=d._toPx(d.height);if(d.position==="bottom"||d.position==="right"){d.element.insertBefore(d._contentElement,d._headerElement)}if(d.position==="top"||d.position==="bottom"){d._orientation="horizontal"}else{d._orientation="vertical"}if(d.position==="right"){d._headerElement.style["float"]="right"}else{if(d.position==="left"){d._headerElement.style["float"]="left"}}d._contentSections=d._content.children();a.each(d._contentSections,function(){if(this.getAttribute("data-width")){this.style.width=this.getAttribute("data-width");this.style.height=this.getAttribute("data-height");this.removeAttribute("data-width");this.removeAttribute("data-height")}});if(c===true){d._selectionToken=document.createElement("div");d._selectionToken.className=d.toThemeProperty("jqx-widget-content jqx-ribbon-selection-token jqx-ribbon-selection-token-"+d.position);d.element.appendChild(d._selectionToken)}d._updateItems();if(d._initiallyHidden!==true){d._addClasses()}if(c===true){d._appendScrollButtons();d._checkScrollButtons()}d._allowSelection=true;if(d.selectedIndex!==-1){d._items[d.selectedIndex].className+=" "+d.toThemeProperty("jqx-widget-content jqx-ribbon-item-selected");d._positionSelectionToken(d.selectedIndex);d._contentSections[d.selectedIndex].style.display="block";if(d.initContent){d.initContent(d.selectedIndex);d._items[d.selectedIndex]._isInitialized=true}}if(!d.disabled){d._addHandlers()}else{d.element.className+=" "+d.toThemeProperty("jqx-fill-state-disabled")}a.jqx.utilities.resize(d.host,function(){if(d._initiallyHidden){d._initiallyHidden=false;d._addClasses();if(d.selectedIndex!==-1){d._items[d.selectedIndex].className+=" "+d.toThemeProperty("jqx-widget-content jqx-ribbon-item-selected")}}d._updateSize(true)});if(d.mode==="popup"&&d.theme!==""){setTimeout(function(){d._positionPopup();d._positionSelectionToken(d.selectedIndex)},30)}},_updateSize:function(b){var c=this;if(c._browser.version==="7.0"&&c._browser.browser==="msie"){if(c._orientation==="horizontal"){c._header.css("width",(c.host.width()-parseInt(c._header.css("padding-left"),10)-parseInt(c._header.css("padding-right"),10)-parseInt(c._header.css("border-left-width"),10)-parseInt(c._header.css("border-right-width"),10)));c._contentSections.width(c._content.width()-parseInt(c._contentSections.css("border-left-width"),10)-parseInt(c._contentSections.css("border-right-width"),10)-parseInt(c._contentSections.css("padding-left"),10)-parseInt(c._contentSections.css("padding-right"),10));if(c.mode==="default"&&typeof c.height==="string"&&c.height.indexOf("%")!==-1){c._contentSections.height(c._content.height()-c._header.height()-parseInt(c._contentSections.css("border-bottom-width"),10)-parseInt(c._contentSections.css("border-top-width"),10)-1)}}else{c._header.css("height",(c.host.height()-parseInt(c._header.css("padding-top"),10)-parseInt(c._header.css("padding-bottom"),10)-parseInt(c._header.css("border-top-width"),10)-parseInt(c._header.css("border-bottom-width"),10)));c._contentSections.height(c._content.height()-parseInt(c._contentSections.css("border-top-width"),10)-parseInt(c._contentSections.css("border-bottom-width"),10)-parseInt(c._contentSections.css("padding-top"),10)-parseInt(c._contentSections.css("padding-bottom"),10));if(c.mode==="default"&&typeof c.width==="string"&&c.height.indexOf("%")!==-1){var d=c.position==="left"?parseInt(c._contentSections.css("border-left-width"),10)+parseInt(c._contentSections.css("border-right-width"),10)+1:0;c._contentSections.width(c._content.width()-c._header.width()-d)}}}c._checkScrollButtons(true);c._updatePositions(undefined,b);if(c.mode==="popup"){c._positionPopup()}c._refreshBarPosition()},_stopAnimation:function(){var c=this;if(!c._allowSelection){c.selectedIndex=c._animatingIndex;var b=a(c._contentSections[c._animatingIndex]);c._initAnimate(b);b.animate("finish");c._clearSelection(true,c._animatingIndex);c._allowSelection=true}},_refreshBarPosition:function(){var c=this;if(!this.bar){var b=a("<span></span>");a(this.host).append(b);b.addClass(this.toThemeProperty("jqx-tabs-bar"));this.bar=b}setTimeout(function(){var f=parseInt(a(c._headerElement).css("left"),10)-c._headerElement.scrollLeft;var e=parseInt(a(c._headerElement).css("top"),10)-c._headerElement.scrollTop;var d=c._animatingIndex!==undefined?c._animatingIndex:c.selectedIndex;if(!c._items[d]){return}if(!c.bar){return}if(c.position==="top"||c.position==="bottom"){c.bar.css("left",c._items[d].offsetLeft+f);if(c.position==="top"){c.bar.css("top",c._items[d].offsetTop+e+c._items[d].offsetHeight)}else{c.bar.css("top",e)}c.bar.width(a(c._items[d]).outerWidth()-2);c.bar.removeClass(c.toThemeProperty("vertical"))}else{if(c.position==="left"){c.bar.css("left",c._items[d].offsetLeft+f+c._items[d].offsetWidth)}else{c.bar.css("left",c._items[d].offsetLeft+f)}c.bar.css("top",e+c._items[d].offsetTop);c.bar.height(a(c._items[d]).outerHeight()-2);c.bar.addClass(c.toThemeProperty("vertical"))}})},_selectAt:function(g,j,k){var f=this;if(j===undefined){j=f.selectedIndex}if(g!==j||k===true){f._stopAnimation();f._refreshBarPosition();if(f._allowSelection){f._animatingIndex=g;if(f.selectedIndex!==-1){f._clearSelection(true,j)}f._allowSelection=false;f._selecting=g;if(f.selectionMode==="click"){a(f._items[g]).removeClass(f.toThemeProperty("jqx-fill-state-hover jqx-ribbon-item-hover"))}if(f.mode==="popup"&&f._roundedCorners){f._header.removeClass(f.toThemeProperty("jqx-rc-all"));var b,d;switch(f.position){case"top":b="jqx-rc-t";d="jqx-rc-b";break;case"bottom":b="jqx-rc-b";d="jqx-rc-t";break;case"left":b="jqx-rc-l";d="jqx-rc-r";break;case"right":b="jqx-rc-r";d="jqx-rc-l";break}f._headerElement.className+=" "+f.toThemeProperty(b);for(var e=0;e<f._items.length;e++){f._items[e].className+=" "+f.toThemeProperty(b);f._contentSections[e].className+=" "+f.toThemeProperty(d)}}f._items[g].className+=" "+f.toThemeProperty("jqx-widget-content jqx-ribbon-item-selected");f._selectionToken.style.display="block";f._updatePositions(g);var c;switch(f.animationType){case"fade":c=a(f._contentSections[g]);f._initAnimate(c);if(c.css("display")==="none"){c.fadeIn({duration:f.animationDelay,complete:function(){f._animationComplete(g,j)}})}else{c.fadeOut({duration:f.animationDelay,complete:function(){f._animationComplete(g,j)}})}break;case"slide":c=a(f._contentSections[g]);var h=f.position;if(h==="top"){h="up"}else{if(h==="bottom"){h="down"}}f.slideAnimation=f._slide(c,{mode:"show",direction:h,duration:f.animationDelay},g,j);break;case"none":f._contentSections[g].style.display="block";f._animationComplete(g,j);break}}else{}}},_clearSelection:function(c,f){var d=this;if(d.mode==="popup"){if(d._roundedCorners){d._headerElement.className+=" "+d.toThemeProperty("jqx-rc-all")}}d._selecting=-1;if(f===undefined){f=d.selectedIndex}a(d._items[f]).removeClass(d.toThemeProperty("jqx-widget-content jqx-ribbon-item-selected"));d._selectionToken.style.display="none";if(c!==true&&d.animationType!=="none"){var b=a(d._contentSections[f]);if(d.animationType==="fade"){d._initAnimate(b);b.fadeOut({duration:d.animationDelay,complete:function(){d._clearSelectionComplete(f)}})}else{if(d.animationType==="slide"){var e=d.position;if(e==="top"){e="up"}else{if(e==="bottom"){e="down"}}d._stopAnimation();f=d.selectedIndex;d.slideAnimation=d._slide(b,{mode:"hide",direction:e,duration:d.animationDelay},f);d.selectedIndex=-1}}}else{if(f===-1){return}d._contentSections[f].style.display="none";d._clearSelectionComplete(f,c)}},_addHandlers:function(){var g=this,t=g.element.id,h=false,n;function r(j){var k=g._closest(j.target,"li"),i=k._index;if(!g._items[i]._disabled){if(i!==g.selectedIndex){g._selectAt(i)}else{if(g.mode==="popup"){if(g.popupCloseMode!=="none"){k.className+=" "+g.toThemeProperty("jqx-fill-state-hover jqx-ribbon-item-hover");g._clearSelection()}}}}}function b(m){if(g.reorder===true&&h===true){var i=g._closest(m.target,"li")._index,l=g._items[n].innerHTML,k=g._contentSections[n].childNodes,j=[];while(k.length>0){j.push(a(k[0]).detach())}g._suppressSelectionEvents=true;g._oldReorderIndex=n;g.removeAt(n);g.clearSelection();g.addAt(i,{title:l,content:j});g.selectAt(i);setTimeout(function(){a(g._items[i]).trigger("mousedown")},0)}else{var E=g._closest(m.target,"li");if(B(E._index)){E.className+=" "+g.toThemeProperty("jqx-fill-state-hover jqx-ribbon-item-hover")}}}function s(i){var j=g._closest(i.target,"li");if(B(j._index)){a(j).removeClass(g.toThemeProperty("jqx-fill-state-hover jqx-ribbon-item-hover"))}}function o(i){if(i.target.nodeName==="#document"){return}var j=g._closest(i.target,"li");if((g.reorder===true||g._removeByDrag===true)&&j._index===g.selectedIndex){h=true;n=j._index;j.style.cursor="move"}}function C(){if(g.popupCloseMode==="mouseLeave"&&g.mode==="popup"){g._clearSelection()}}function c(j){var i=g._closest(j.target,"li")._index;if(!g._items[i]._disabled&&i!==g.selectedIndex){g._selectAt(i)}}function x(j){var i=g._closest(j.target,"li")._index;if(!g._items[i]._disabled){if(g.mode==="popup"){if(g.popupCloseMode!=="none"){g._clearSelection()}}}}function D(){if(g.popupCloseMode==="mouseLeave"&&g.mode==="popup"){g._clearSelection()}}var d=function(m){if(g.popupCloseMode==="click"&&g.mode==="popup"&&g.selectedIndex!==-1){if(m.target.tagName==="svg"){return}var l=g._closest(m.target,undefined,"jqx-ribbon");if(l!==undefined&&l.getAttribute("id")!==t){g._clearSelection();return}if(m.target.className===undefined||m.target.className.indexOf("jqx-ribbon-content-popup")!==-1){g._clearSelection();return}if(a(m.target).ischildof(g.host)){return}var k=false;var j=[],i=function(E){if(E.parentElement){j.push(E.parentElement);i(E.parentElement)}};i(m.target);a.each(j,function(){if(this.className!==undefined){if(this.className.indexOf){if(this.className.indexOf("jqx-ribbon")!==-1){k=true;return false}if(this.className.indexOf("jqx-ribbon")!==-1){if(t===this.id){k=true}return false}}}});if(!k){g._clearSelection()}}};if(g.selectionMode==="click"){var B=function(i){return((g._selecting!==i&&g._allowSelection===false)||((g._selecting===-1||g.selectedIndex!==i)&&g._allowSelection===true))&&!g._items[i]._disabled};for(var z=0;z<g._items.length;z++){var f=g._items[z];g.addHandler(f,"click.ribbon"+t,r);g.addHandler(f,"mouseenter.ribbon"+t,b);g.addHandler(f,"mouseleave.ribbon"+t,s);g.addHandler(f,"mousedown.ribbon"+t,o)}if(g.mode==="popup"){g.addHandler(g.host,"mouseleave.ribbon"+t,function(){if(g.popupCloseMode==="mouseLeave"&&g.mode==="popup"){g._clearSelection()}});for(var y=0;y<g._contentSections.length;y++){g.addHandler(g._contentSections[y],"mouseleave.ribbon"+t,C)}g.addHandler(a(document),"mousedown.ribbon"+t,function(i){d(i)})}if(g._removeByDrag===true){for(var A=0;A<g._items.length;A++){g._items[A].className+=" "+g.toThemeProperty("jqx-ribbon-item-docking-layout")}}g.addHandler(document,"mouseup.ribbon"+t,function(){h=false;for(var j=0;j<g._items.length;j++){g._items[j].style.cursor=""}});g.addHandler(g._header,"mouseleave.ribbon"+t,function(i){if(g._removeByDrag===true&&h===true){g._raiseEvent("3",{draggedIndex:n,x:i.pageX,y:i.pageY});if(g._items.length>1){g.removeAt(n)}h=false;i.target.style.cursor=""}})}else{if(g.selectionMode==="hover"){for(var w=0;w<g._items.length;w++){var p=g._items[w];g.addHandler(p,"mouseenter.ribbon"+t,c);if(g.mode==="popup"){g.addHandler(p,"click.ribbon"+t,x)}}if(g.mode==="popup"){g.addHandler(g.host,"mouseleave.ribbon"+t,function(){if(g.popupCloseMode==="mouseLeave"&&g.mode==="popup"){g._clearSelection()}});for(var v=0;v<g._contentSections.length;v++){g.addHandler(g._contentSections,"mouseleave.ribbon"+t,D)}g.addHandler(a(document),"mousedown.ribbon"+t,function(i){d(i)})}}}var e=a.jqx.mobile.isTouchDevice(),u,q;if(e){u="touchstart";q="touchend"}else{u="mousedown";q="mouseup"}g.addHandler(g._scrollButtonNear,u+".ribbon"+t,function(){if(g._orientation==="horizontal"){g._timeoutNear=setInterval(function(){var j=g._headerElement.scrollLeft,i=(g.rtl&&g._browser.browser==="msie")?-1:1;g._headerElement.scrollLeft=j-g.scrollStep*i;g._updatePositions()},g.scrollDelay)}else{g._timeoutNear=setInterval(function(){var i=g._headerElement.scrollTop;g._headerElement.scrollTop=i-g.scrollStep;g._updatePositions()},g.scrollDelay)}return false});g.addHandler(g._scrollButtonFar,u+".ribbon"+t,function(){if(g._orientation==="horizontal"){g._timeoutFar=setInterval(function(){var j=g._headerElement.scrollLeft,i=(g.rtl&&g._browser.browser==="msie")?-1:1;g._headerElement.scrollLeft=j+g.scrollStep*i;g._updatePositions()},g.scrollDelay)}else{g._timeoutFar=setInterval(function(){var i=g._headerElement.scrollTop;g._headerElement.scrollTop=i+g.scrollStep;g._updatePositions()},g.scrollDelay)}return false});g.addHandler(a(document),q+".ribbon"+t,function(){clearInterval(g._timeoutNear);clearInterval(g._timeoutFar)})},_removeHandlers:function(j,f){var g=this,b=g.element.id;if(!j){j=g.selectionMode}if(!f){f=g.mode}for(var e=0;e<g._items.length;e++){var h=g._items[e];g.removeHandler(h,"mouseenter.ribbon"+b);if(j==="click"){g.removeHandler(h,"click.ribbon"+b);g.removeHandler(h,"mouseleave.ribbon"+b);g.removeHandler(h,"mousedown.ribbon"+b)}}if(j==="click"){g.removeHandler(document,"mouseup.ribbon"+b);g.removeHandler(g._header,"mouseleave.ribbon"+b)}else{if(j==="hover"&&f==="popup"){g.removeHandler(g.host,"mouseleave.ribbon"+b)}}var d=a.jqx.mobile.isTouchDevice(),c,k;if(d){c="touchstart";k="touchend"}else{c="mousedown";k="mouseup"}g.removeHandler(g._scrollButtonNear,c+".ribbon"+b);g.removeHandler(g._scrollButtonFar,c+".ribbon"+b);g.removeHandler(a(document),k+".ribbon"+b)},_checkStructure:function(c){var d=this;var f=c.length;if(f!==2){throw new Error("jqxRibbon: Invalid HTML structure. You need to add a ul and a div to the widget container.")}var b=d._header.children().length;var e=d._content.children().length;if(b!==e){throw new Error("jqxRibbon: Invalid HTML structure. For each list item you must have a corresponding div element.")}},_addClasses:function(){var j=this,f="jqx-widget-content jqx-ribbon-content-section jqx-ribbon-content-section-"+j.position,e="jqx-widget-content jqx-ribbon-content jqx-ribbon-content-"+j._orientation,c="jqx-widget-header jqx-disableselect jqx-ribbon-header jqx-ribbon-header-"+j._orientation,m="jqx-ribbon-item jqx-ribbon-item-"+j.position,b="jqx-widget jqx-ribbon";j._content.removeClass();j._header.removeClass(j.toThemeProperty("jqx-rc-all jqx-widget-header jqx-disableselect jqx-rc-t jqx-rc-b jqx-rc-l jqx-rc-r jqx-rc-all jqx-ribbon-header-"+j._orientation+"-popup jqx-ribbon-header-bottom jqx-ribbon-header-auto jqx-ribbon-header-right jqx-ribbon-header-rtl"));j.host.removeClass();if(j._roundedCorners){switch(j.position){case"top":c+=" jqx-rc-t";m+=" jqx-rc-t";f+=" jqx-rc-b";break;case"bottom":c+=" jqx-rc-b";m+=" jqx-rc-b";f+=" jqx-rc-t";break;case"left":c+=" jqx-rc-l";m+=" jqx-rc-l";f+=" jqx-rc-r";break;case"right":c+=" jqx-rc-r";m+=" jqx-rc-r";f+=" jqx-rc-l";break}}else{switch(j.position){case"top":m+=" jqx-rc-t";break;case"bottom":m+=" jqx-rc-b";break;case"left":m+=" jqx-rc-l";break;case"right":m+=" jqx-rc-r";break}}if(j.rtl===true){c+=" jqx-ribbon-header-rtl";m+=" jqx-ribbon-item-rtl"}j.element.className+=" "+j.toThemeProperty(b);j._headerElement.className+=" "+j.toThemeProperty(c);j._contentElement.className+=" "+j.toThemeProperty(e);for(var h=0;h<j._items.length;h++){var d=a(j._contentSections[h]),k=a(j._items[h]);d.removeClass();k.removeClass(j.toThemeProperty("jqx-fill-state-disabled jqx-ribbon-item-rtl jqx-widget-content jqx-ribbon-item-selected jqx-rc-t jqx-rc-b jqx-rc-l jqx-rc-r jqx-ribbon-item-docking-layout jqx-ribbon-item jqx-ribbon-item-"+j.position));if(j.mode==="popup"){f+=" jqx-ribbon-content-section-popup jqx-ribbon-content-popup-"+j.position+" jqx-ribbon-content-section-"+j._orientation+"-popup"}j._contentSections[h].className+=" "+j.toThemeProperty(f);j._items[h].className+=" "+j.toThemeProperty(m)}var n,g;if(j.mode==="popup"){if(j.selectedIndex===-1){if(j._roundedCorners){j.element.className+=" "+j.toThemeProperty("jqx-rc-all");j._headerElement.className+=" "+j.toThemeProperty("jqx-rc-all")}}j.element.className+=" "+j.toThemeProperty("jqx-ribbon-popup");j._headerElement.className+=" "+j.toThemeProperty("jqx-ribbon-header-"+j._orientation+"-popup");j._contentElement.className+=" "+j.toThemeProperty("jqx-ribbon-content-popup");j._positionPopup()}else{if(j._orientation==="horizontal"){if(j.height!=="auto"){g=j._headerElement.offsetHeight;if(j.position==="top"){j._contentElement.style.paddingTop=j._toPx(g)}else{j._headerElement.className+=" "+j.toThemeProperty("jqx-ribbon-header-bottom")}}else{j._headerElement.className+=" "+j.toThemeProperty("jqx-ribbon-header-auto")}}else{if(j._orientation==="vertical"){if(j.width!=="auto"){n=j._headerElement.offsetWidth;if(j.position==="left"){j._contentElement.style.paddingLeft=j._toPx(n)}else{j._headerElement.className+=" "+j.toThemeProperty("jqx-ribbon-header-right");j._contentElement.style.paddingRight=j._toPx(n)}}else{j.element.className+=" "+j.toThemeProperty("jqx-ribbon-auto");j._headerElement.className+=" "+j.toThemeProperty("jqx-ribbon-header-auto");j._contentElement.className+=" "+j.toThemeProperty("jqx-ribbon-content-auto-width")}}}this.host.addClass("jqx-tabs-header-position-"+this.position)}a(j._headerElement).addClass(j.toThemeProperty("jqx-ribbon-header-"+j.position));if(j._browser.version==="7.0"&&j._browser.browser==="msie"){if(j._orientation==="horizontal"){j._header.css("width",(j.host.width()-parseInt(j._header.css("padding-left"),10)-parseInt(j._header.css("padding-right"),10)-parseInt(j._header.css("border-left-width"),10)-parseInt(j._header.css("border-right-width"),10)));j._items.height(j._items.height()-parseInt(j._items.css("padding-top"),10)-parseInt(j._items.css("padding-bottom"),10)-parseInt(j._items.css("border-top-width"),10)-parseInt(j._items.css("border-bottom-width"),10));j._contentSections.width(j._contentSections.width()-parseInt(j._contentSections.css("border-left-width"),10)-parseInt(j._contentSections.css("border-right-width"),10)-parseInt(j._contentSections.css("padding-left"),10)-parseInt(j._contentSections.css("padding-right"),10));if(j.mode==="default"){if(j.height!=="auto"){if(j.position==="top"){j._contentSections.css("padding-top",g)}else{j._contentSections.css("padding-bottom",g)}j._content.css("height",j.host.height()+2);j._contentSections.css("height",j._content.height()-parseInt(j._contentSections.css("border-bottom-width"),10)-parseInt(j._contentSections.css("border-top-width"),10)-1)}}else{}}else{var l;if(j.position==="left"){j._contentElement.className+=" "+j.toThemeProperty("jqx-ribbon-content-left");l=parseInt(j._contentSections.css("border-left-width"),10)+parseInt(j._contentSections.css("border-right-width"),10)+1}else{j._contentElement.className+=" "+j.toThemeProperty("jqx-ribbon-content-right");l=0}j._header.css("height",(j.host.height()-parseInt(j._header.css("padding-top"),10)-parseInt(j._header.css("padding-bottom"),10)-parseInt(j._header.css("border-top-width"),10)-parseInt(j._header.css("border-bottom-width"),10)));j._items.width(j._items.width()-parseInt(j._items.css("padding-left"),10)-parseInt(j._items.css("padding-right"),10)-parseInt(j._items.css("border-left-width"),10)-parseInt(j._items.css("border-right-width"),10));j._contentSections.height(j._contentSections.height()-parseInt(j._contentSections.css("border-top-width"),10)-parseInt(j._contentSections.css("border-bottom-width"),10)-parseInt(j._contentSections.css("padding-top"),10)-parseInt(j._contentSections.css("padding-bottom"),10));if(j.mode==="default"){if(j.width!=="auto"){if(j.position==="left"){j._contentSections.css("padding-left",n)}else{j._contentSections.css("padding-right",n)}j._contentSections.width(j._content.width()-j._header.width()-l)}}else{}}}if(j.position==="bottom"){j._content.css("padding-bottom",g)}},_positionPopup:function(){var c=this;var b=(c._browser.version==="7.0"&&c._browser.browser==="msie");switch(c.position){case"top":c._contentElement.style.top=c._toPx(c._headerElement.offsetHeight);break;case"bottom":if(!b){c._contentElement.style.bottom=c._toPx(c._headerElement.offsetHeight)}else{c._contentElement.style.bottom=c._toPx(c._height(c._headerElement))}break;case"left":c._contentElement.style.left=c._toPx(c._headerElement.offsetWidth);break;case"right":c._contentElement.style.right=c._header.outerWidth()+"px";break}},_appendScrollButtons:function(){var e=this,d=(e._orientation==="horizontal")?["left","right"]:["up","down"];function c(h,i,g){h.className=e.toThemeProperty("jqx-ribbon-scrollbutton jqx-ribbon-scrollbutton-"+e.position+" jqx-ribbon-scrollbutton-"+e.scrollPosition+" jqx-widget-header "+i);h.innerHTML='<div class="'+e.toThemeProperty("jqx-ribbon-scrollbutton-inner "+g)+'"></div>';if(e._orientation==="horizontal"){h.style.height=e._toPx(e._height(e._headerElement))}else{h.style.width=e._toPx(e._width(e._headerElement))}e.element.appendChild(h)}var b=document.createElement("div");c(b,"jqx-ribbon-scrollbutton-lt","jqx-icon-arrow-"+d[0]);var f=document.createElement("div");c(f,"jqx-ribbon-scrollbutton-rb","jqx-icon-arrow-"+d[1]);e._scrollButtonRc(b,f);e._scrollButtonNear=b;e._scrollButtonFar=f;if(!e.roundedCorners){return}switch(e.position){case"top":case"bottom":b.style.marginLeft="-1px";f.style.marginRight="-1px";break;case"right":case"left":b.style.marginTop="-1px";f.style.marginBottom="-1px";break}},_scrollButtonRc:function(b,d){var c=this;if(!c.roundedCorners){return}switch(c.position){case"top":if(c.scrollPosition!=="far"){b.className+=" "+c.toThemeProperty("jqx-rc-tl")}if(c.scrollPosition!=="near"){d.className+=" "+c.toThemeProperty("jqx-rc-tr")}break;case"bottom":if(c.scrollPosition!=="far"){b.className+=" "+c.toThemeProperty("jqx-rc-bl")}if(c.scrollPosition!=="near"){d.className+=" "+c.toThemeProperty("jqx-rc-br")}break;case"left":if(c.scrollPosition!=="far"){b.className+=" "+c.toThemeProperty("jqx-rc-tl")}if(c.scrollPosition!=="near"){d.className+=" "+c.toThemeProperty("jqx-rc-bl")}break;case"right":if(c.scrollPosition!=="far"){b.className+=" "+c.toThemeProperty("jqx-rc-tr")}if(c.scrollPosition!=="near"){d.className+=" "+c.toThemeProperty("jqx-rc-br")}break}},_updateItems:function(c){function b(){if(f._items[e]._index===f.selectedIndex){f.selectedIndex=e}}var f=this;f._items=f._header.children();f._contentSections=f._content.children();for(var e=0;e<f._items.length;e++){var d=f._items[e];d.setAttribute("unselectable","on");if(d._index===undefined){d._disabled=false;d._isInitialized=false;f._contentSections[e]._layout="default"}if(c===true){b()}d._index=e;if(c!==true){b()}if(f._contentSections[e]){f._contentSections[e]._index=e}}},_positionContent:function(h){var g=this,f=g._contentSections[h],c,m,n,j,b,l;if(g._orientation==="horizontal"){c=g.element.offsetWidth;m=g.host.offset().left;n=g._items[h].offsetWidth;j=a(g._items[h]).offset().left;b=f.offsetWidth||parseInt(f.style.width,10);l="left"}else{c=g.element.offsetHeight;m=g.host.offset().top;n=g._items[h].offsetHeight;j=a(g._items[h]).offset().top;b=f.offsetHeight||parseInt(f.style.height,10);l="top"}var e=function(i){if(i<0){i=0}else{if(i+b>c){i=c-b}}f.style[l]=g._toPx(i)};var k;switch(f._layout){case"near":k=j-m;e(k);break;case"far":k=j-m-(b-n);e(k);break;case"center":k=j-m-(b-n)/2;e(k);break;default:if(g.position==="right"){for(var d=0;d<g._contentSections.length;d++){g._contentSections[d].style.right="1px"}}else{f.style[l]=""}}},_checkScrollButtons:function(b){var f=this;var d=0;a.each(f._items,function(){var k=a(this);if(k.css("display")!=="none"){d+=(f._orientation==="horizontal")?k.outerWidth(true):k.outerHeight(true)}});var i=f._orientation==="horizontal"?["margin-left","margin-right"]:["margin-top","margin-bottom"];var h=(f._orientation==="horizontal")?f._width(f._headerElement):f._height(f._headerElement);if(!f._itemMargins){f._itemMargins=[];f._itemMargins.push(a(f._items[0]).css(i[0]));f._itemMargins.push(a(f._items[f._items.length-1]).css(i[1]))}if(d>h){f._scrollButtonNear.style.display="block";f._scrollButtonFar.style.display="block";var g=f.rtl?f._itemMargins[0]:17;var e=f.rtl?f._itemMargins[0]:17;switch(f.scrollPosition){case"near":e=0;g=34;break;case"far":e=34;g=17;break}if(f._items[0]){f._items[0].style[i[0]]=f._toPx(g)}if(f._items[f._items.length-1]){f._items[f._items.length-1].style[i[1]]=f._toPx(e)}}else{if(f._items[0]){f._items[0].style[i[0]]=f._toPx(f._itemMargins[0])}if(f._items[f._items.length-1]){f._items[f._items.length-1].style[i[1]]=f._toPx(f._itemMargins[1])}f._scrollButtonNear.style.display="none";f._scrollButtonFar.style.display="none"}if(b===true){if(f._orientation==="horizontal"){var j=f._toPx(f._height(f._headerElement));f._scrollButtonNear.style.height=j;f._scrollButtonFar.style.height=j}else{var c=f._toPx(f._width(f._headerElement));f._scrollButtonNear.style.width=c;f._scrollButtonFar.style.width=c}}},_positionSelectionToken:function(i){var h=this;if(i!==-1){var e=a(h._items[i]);if(e.length===0){return}var j,b,d,k,g;if(h._orientation==="horizontal"){var f,m;if(h.rtl===true){if(h._browserWidthRtlFlag===1){f=h._headerElement.scrollWidth-h._headerElement.clientWidth}else{f=0}m=h._browserScrollRtlFlag}else{f=0;m=1}d=e[0].offsetLeft+f-h._headerElement.scrollLeft*m-h._selectionTokenOffsetX+2;g=h._headerElement.offsetHeight-1;var c=h._width(e[0])+parseInt(e.css("padding-left"),10)+parseInt(e.css("padding-right"),10);if(h.position==="top"){j=g-h._selectionTokenOffsetY;b=""}else{j="";b=g-h._selectionTokenOffsetY}h._selectionToken.style.top=h._toPx(j);h._selectionToken.style.bottom=h._toPx(b);h._selectionToken.style.left=h._toPx(d);h._selectionToken.style.width=h._toPx(c)}else{j=e[0].offsetTop-h._headerElement.scrollTop-h._selectionTokenOffsetX+2;g=h._headerElement.offsetWidth-1;var l=h._height(e[0])+parseInt(e.css("padding-top"),10)+parseInt(e.css("padding-bottom"),10);if(h.position==="left"){d=g-h._selectionTokenOffsetY;k=""}else{d="";k=g-h._selectionTokenOffsetY}h._selectionToken.style.top=h._toPx(j);h._selectionToken.style.left=h._toPx(d);h._selectionToken.style.right=h._toPx(k);h._selectionToken.style.height=h._toPx(l)}}},_updatePositions:function(c,b){var d=this;if(isNaN(c)){if(b===true&&d._selecting!==null&&d._selecting>=0){c=d._selecting}else{c=d.selectedIndex}}if(c!==-1){d._positionSelectionToken(c);if(d.mode==="popup"&&d._contentSections[c]._layout!=="default"){d._positionContent(c)}if(d.mode==="popup"&&(d.position==="left"||d.position==="right")){d._contentElement.style.width="auto";var e=d._contentSections[c].style.width&&d._contentSections[c].style.width.indexOf("%")>=0;if(e){d._contentElement.style.width=d._toPx(d._width(d._contentSections[c])-d._width(d._headerElement))}else{d._contentElement.style.width=d._toPx(d._width(d._contentSections[c]))}}d._refreshBarPosition()}},_animationComplete:function(c,e){var d=this,b=e!==-1?e:null;d._contentElement.style.pointerEvents="auto";d.selectedIndex=c;if(d._suppressSelectionEvents!==true){d._raiseEvent("0",{selectedIndex:c});d._raiseEvent("2",{unselectedIndex:b,selectedIndex:c})}else{if(d._suppressReorder!==true&&d._oldReorderIndex!==undefined&&c!==d._oldReorderIndex){d._raiseEvent("4",{newIndex:c,oldIndex:d._oldReorderIndex})}d._suppressSelectionEvents=false;d._suppressReorder=false}if(d.initContent&&d._items[c]._isInitialized===false){d.initContent(c);d._items[c]._isInitialized=true}d._allowSelection=true;d._selecting=null;d._refreshBarPosition()},_clearSelectionComplete:function(d,b){var c=this;c._selecting=null;if(d===undefined){d=c.selectedIndex}if(d!==-1){c._contentElement.style.pointerEvents="none";if(c._suppressSelectionEvents!==true){c._raiseEvent("1",{unselectedIndex:d})}}if(b!==true){c.selectedIndex=-1}},_slide:function(f,e,n,s){var m=this;if(!m.activeAnimations){m.activeAnimations=[]}if(m.activeAnimations.length>0){for(var k=0;k<m.activeAnimations.length;k++){m.activeAnimations[k].clearQueue();m.activeAnimations[k].finish()}}else{f.clearQueue();f.animate("finish")}var h="ui-effects-";var d={save:function(u,v){for(var o=0;o<v.length;o++){if(v[o]!==null&&u.length>0){u.data(h+v[o],u[0].style[v[o]])}}},restore:function(u,w){var v,o;for(o=0;o<w.length;o++){if(w[o]!==null){v=u.data(h+w[o]);if(v===undefined){v=""}u.css(w[o],v)}}},createWrapper:function(o){if(o.parent().is(".ui-effects-wrapper")){return o.parent()}var u={width:o.outerWidth(true),height:o.outerHeight(true),"float":o.css("float")},x=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:o.width(),height:o.height()},w=document.activeElement;try{w.id}catch(v){w=document.body}o.wrap(x);if(o[0]===w||a.contains(o[0],w)){a(w).focus()}x=o.parent();if(o.css("position")==="static"){x.css({position:"relative"});o.css({position:"relative"})}else{a.extend(u,{position:o.css("position"),zIndex:o.css("z-index")});a.each(["top","left","bottom","right"],function(y,z){u[z]=o.css(z);if(isNaN(parseInt(u[z],10))){u[z]="auto"}});o.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}o.css(i);return x.css(u).show()},removeWrapper:function(i){var o=document.activeElement;if(i.parent().is(".ui-effects-wrapper")){i.parent().replaceWith(i);if(i[0]===o||a.contains(i[0],o)){a(o).focus()}}return i}};var q=["position","top","bottom","left","right","width","height"],l=e.mode,t=l==="show",r=e.direction||"left",g=(r==="up"||r==="down")?"top":"left",c=(r==="up"||r==="left"),b,j={};d.save(f,q);f.show();b=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);d.createWrapper(f).css({overflow:"hidden"});if(t){f.css(g,c?(isNaN(b)?"-"+b:-b):b)}j[g]=(t?(c?"+=":"-="):(c?"-=":"+="))+b;var p=function(){f.clearQueue();f.stop(true,true)};m.activeAnimations.push(f);f.animate(j,{duration:e.duration,easing:e.easing,complete:function(){m.activeAnimations.pop(f);if(l==="show"){m._animationComplete(n,s)}else{if(l==="hide"){f.hide();m._clearSelectionComplete(n)}}d.restore(f,q);d.removeWrapper(f)}});return p},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}},_width:function(e){var b=a(e),g=b.css("border-left-width"),c=b.css("border-right-width"),d=parseInt(b.css("padding-left"),10),i=parseInt(b.css("padding-right"),10),h=b.css("display")==="none"?true:false;if(h){e.style.display="block"}if(g.indexOf("px")===-1){g=1}else{g=parseInt(g,10)}if(c.indexOf("px")===-1){c=1}else{c=parseInt(c,10)}var f=e.offsetWidth-(g+c+d+i);if(h){e.style.display="none"}return Math.max(0,f)},_height:function(e){var c=a(e),h=c.css("border-top-width"),d=c.css("border-bottom-width"),f=parseInt(c.css("padding-top"),10),g=parseInt(c.css("padding-bottom"),10);if(h.indexOf("px")===-1){h=1}else{h=parseInt(h,10)}if(d.indexOf("px")===-1){d=1}else{d=parseInt(d,10)}var b=e.offsetHeight-(h+d+f+g);return Math.max(0,b)},_closest:function(d,f,c){if(f){if(d.nodeName.toLowerCase()===f){return d}var b=d.parentNode;while(b!==null&&b.nodeName!=="#document"){if(b.nodeName.toLowerCase()===f){return b}b=b.parentNode}}if(c){if((" "+d.className+" ").replace(/[\n\t]/g," ").indexOf(" "+c+" ")>-1){return d}var e=d.parentNode;while(e!==null&&e.nodeName!=="#document"){if((" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(" "+c+" ")>-1){return e}e=e.parentNode}}},_initAnimate:function(b){if(b.initAnimate){if(b.animate){return}b.initAnimate()}}})})(jqxBaseFramework);

