/*
				    .ooooo.          ooo. .oo.     .ooooo.    oooo d8b
				   d88" `88b         `888P"Y88b   d88" `88b   `888""8P
				   888888888  88888   888   888   888   888    888
				   888        88888   888   888   888   888    888       
				   `"88888"          o888o o888o  `Y8bod8P"   d888b      

***********************************************************************************************************
Copyright 2015 by E-Nor Inc.
Author: Mohamed Adel
Universal Federated Analytics: Google Analytics Government Wide Site Usage Measurement.
02/26/2015 Version: 1.03
***********************************************************************************************************/

_mHostName=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];var oCONFIG={VERSION:"20150226 v1.03 - Universal Analytics",AGENCY:"",SUB_AGENCY:"",USE_MAIN_CUSTOM_DIMENSIONS:true,USE_PARALLEL_CUSTOM_DIMENSIONS:false,MAIN_AGENCY_CUSTOM_DIMENSION_SLOT:"dimension1",MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT:"dimension2",MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT:"dimension3",PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT:"dimension1",PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT:"dimension2",PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT:"dimension3",SEARCH_PARAMS:"q|querytext|nasaInclude|k|QT|",HOST_DOMAIN_OR:_mHostName,GWT_UAID:["UA-33523145-1"],COOKIE_TIMEOUT:24,ANONYMIZE_IP:true,YOUTUBE:true,AUTOTRACKER:true,EXTS:"doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar",SUBDOMAIN_BASED:true,DOUNBLECLICK_LINK:false,ENHANCED_LINK:false,FORCE_SSL:true,OPTOUT_PAGE:false,PUA_NAME:"GSA_ENOR"};function _initElements(){var d=document.getElementById("_fed_an_ua_tag").getAttribute("src");d=d.replace(/\?/g,"&");var e=d.split("&");for(var b=1;b<e.length;b++){_thisElement=e[b].toLowerCase();if(_thisElement.split("=")[0]=="agency"){oCONFIG.AGENCY=_thisElement.split("=")[1].toUpperCase()}else{if(_thisElement.split("=")[0]=="subagency"){oCONFIG.SUB_AGENCY=_thisElement.split("=")[1].toUpperCase()}else{if(_thisElement.split("=")[0]=="sp"){oCONFIG.SEARCH_PARAMS+=_thisElement.replace(/(b|,)/g,"|").split("=")[1]}else{if(_thisElement.split("=")[0]=="exts"){oCONFIG.EXTS+="|"+_thisElement.split("=")[1].replace(",","|")}else{if(_thisElement.split("=")[0]=="yt"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.YOUTUBE=("true"==_thisElement)?true:!("false"==_thisElement)}else{if(_thisElement.split("=")[0]=="sdor"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.SUBDOMAIN_BASED=("true"==_thisElement)?true:!("false"==_thisElement)}else{if(_thisElement.split("=")[0]=="dclink"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.DOUNBLECLICK_LINK=("true"==_thisElement)?true:false}else{if(_thisElement.indexOf("pua")>-1){_thisElement=_thisElement.split("=")[1];var a=_thisElement.split(",");for(var g=0;g<a.length;g++){if(_isValidUANum(a[g])){oCONFIG.GWT_UAID[g+1]=a[g].toUpperCase()}}}else{if(_thisElement.split("=")[0]=="enhlink"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.ENHANCED_LINK=("true"==_thisElement)?true:false}else{if(_thisElement.split("=")[0]=="autotracker"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.AUTOTRACKER=("true"==_thisElement)?true:!("false"==_thisElement)}else{if(_thisElement.split("=")[0]=="optout"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.OPTOUT_PAGE=("true"==_thisElement)?true:false}else{if(_thisElement.split("=")[0]=="fedagencydim"){oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="fedsubagencydim"){oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="fedversiondim"){oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="palagencydim"){oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="palsubagencydim"){oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="palversiondim"){oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT=_thisElement.split("=")[1].toLowerCase();if(oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT.indexOf("dimension")==-1){oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT="dimension"+oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT}}else{if(_thisElement.split("=")[0]=="maincd"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS=("true"==_thisElement)?true:!("false"==_thisElement)}else{if(_thisElement.split("=")[0]=="parallelcd"){_thisElement=_unionParams(_thisElement.split("=")[1]);oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS=("true"==_thisElement)?true:false}else{if(_thisElement.split("=")[0]=="cto"){oCONFIG.COOKIE_TIMEOUT=parseInt(_thisElement.split("=")[1])}}}}}}}}}}}}}}}}}}}}}if(oCONFIG.SUBDOMAIN_BASED){var c="";try{c=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}([^.\/]+\.)[^.\/]{2,4})|(([^.\/]+\.)([^.\/]+\.)[^.\/]{2,4}([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]}catch(f){c="www."+document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]}oCONFIG.HOST_DOMAIN_OR=c}oCONFIG.AGENCY=oCONFIG.AGENCY||"unspecified:"+oCONFIG.HOST_DOMAIN_OR;oCONFIG.SUB_AGENCY=oCONFIG.SUB_AGENCY||(""+oCONFIG.HOST_DOMAIN_OR);oCONFIG.SUB_AGENCY=oCONFIG.AGENCY+" - "+oCONFIG.SUB_AGENCY;oCONFIG.COOKIE_TIMEOUT=CookieTimeoutCalc_Months(oCONFIG.COOKIE_TIMEOUT)}_initElements();function _sendCustomDimension(d,a){if(d!=""&&a!=""){d=d.split(",");for(var b=0;b<d.length;b++){if(d[b].indexOf("dimension")==1){d[b]="dimension"+d[b]}}for(var c=0;c<oCONFIG.GWT_UAID.length;c++){if(c==0){if(d[0]!="dimension0"){ga("GSA_ENOR0.set",d[0],a)}}else{if(d[1]!=undefined&&d[1]!="dimension0"){ga(oCONFIG.PUA_NAME+c+".set",d[1],a)}}}}}function _sendCustomMetrics(d,a){if(d!=""&&a!=""){d=d.split(",");for(var b=0;b<d.length;b++){if(d[b].indexOf("metric")==1){d[b]="metric"+d[b]}}for(var c=0;c<oCONFIG.GWT_UAID.length;c++){if(c==0){if(d[0]!="dimension0"){ga("GSA_ENOR0.set",d[0],a)}}else{if(d[1]!=undefined&&d[1]!="metric0"){ga(oCONFIG.PUA_NAME+c+".set",d[1],a)}}}}}function _sendEvent(d,a,c,b){if(d!=""&&a!=""){if(b==""){b=0}if(c==""){c==""}for(var e=0;e<oCONFIG.GWT_UAID.length;e++){if(e==0){ga("GSA_ENOR0.send","event",d,a,c,b)}else{ga(oCONFIG.PUA_NAME+e+".send","event",d,a,c,b)}}}}function _sendPageview(b,c){if(b!=""){for(var a=0;a<oCONFIG.GWT_UAID.length;a++){if(a==0){if(c!=""){ga("GSA_ENOR0.set","title",c)}else{ga("GSA_ENOR0.set","title",document.title)}ga("GSA_ENOR0.send","pageview",b)}else{if(c!=""){ga(oCONFIG.PUA_NAME+a+".set","title",c)}else{ga(oCONFIG.PUA_NAME+a+".set","title",document.title)}ga(oCONFIG.PUA_NAME+a+".send","pageview",b)}}}}function gas(g,c,d,f,e,b,a){if(g==undefined){g=""}if(c==undefined){c=""}if(d==undefined){d=""}if(f==undefined){f=""}if(e==undefined){e=""}if(b==undefined){b=""}if(a==undefined){a=""}if(c=="event"){if(b==""||isNaN(b)){b="0"}_sendEvent(d,f,e,parseInt(b))}else{if(c=="pageview"){_sendPageview(d,f)}else{if(c.indexOf("dimension")>-1){_sendCustomDimension(c,d)}else{if(c.indexOf("metric")>-1){_sendCustomMetrics(c,d)}}}}}function _URIHandler(a){var b=new RegExp("([?&])("+oCONFIG.SEARCH_PARAMS+")(=[^&]*)","i");if(b.test(a)){a=a.replace(b,"$1query$3")}return a}(function(f,c,h,e,b,d,j){f.GoogleAnalyticsObject=b;f[b]=f[b]||function(){(f[b].q=f[b].q||[]).push(arguments)},f[b].l=1*new Date();d=c.createElement(h),j=c.getElementsByTagName(h)[0];d.async=1;d.src=e;j.parentNode.insertBefore(d,j)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");for(var dpv=0;dpv<oCONFIG.GWT_UAID.length;dpv++){var _adjPageUri=_URIHandler(document.location.pathname+document.location.search+document.location.hash);if(dpv==0){if(oCONFIG.OPTOUT_PAGE){window["ga-disable-"+oCONFIG.GWT_UAID[dpv]]=true}if(!oCONFIG.SUBDOMAIN_BASED){ga("create",oCONFIG.GWT_UAID[dpv],oCONFIG.HOST_DOMAIN_OR,{name:"GSA_ENOR0",allowLinker:true,cookieExpires:parseInt(oCONFIG.COOKIE_TIMEOUT)});ga("GSA_ENOR0.require","linker");ga("GSA_ENOR0.linker:autoLink",[oCONFIG.HOST_DOMAIN_OR])}else{var _ObtHostName="";try{_ObtHostName=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}([^.\/]+\.)[^.\/]{2,4})|(([^.\/]+\.)([^.\/]+\.)[^.\/]{2,4}([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]}catch(domError){_ObtHostName=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]}ga("create",oCONFIG.GWT_UAID[dpv],_ObtHostName,{name:"GSA_ENOR0",cookieExpires:parseInt(oCONFIG.COOKIE_TIMEOUT)})}if(oCONFIG.ANONYMIZE_IP){ga("GSA_ENOR0.set","anonymizeIp",oCONFIG.ANONYMIZE_IP)}if(oCONFIG.DOUNBLECLICK_LINK){ga("GSA_ENOR0.require","displayfeatures")}if(oCONFIG.ENHANCED_LINK){ga("GSA_ENOR0.require","linkid","linkid.js")}if(oCONFIG.FORCE_SSL){ga("GSA_ENOR0.set","forceSSL",true)}if(oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS){ga("GSA_ENOR0.set",oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.AGENCY);ga("GSA_ENOR0.set",oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.SUB_AGENCY);ga("GSA_ENOR0.set",oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT,oCONFIG.VERSION)}ga("GSA_ENOR0.send","pageview",_adjPageUri)}else{if(oCONFIG.OPTOUT_PAGE){window["ga-disable-"+oCONFIG.GWT_UAID[dpv]]=true}if(!oCONFIG.SUBDOMAIN_BASED){ga("create",oCONFIG.GWT_UAID[dpv],oCONFIG.HOST_DOMAIN_OR,{name:oCONFIG.PUA_NAME+dpv,allowLinker:true,cookieExpires:parseInt(oCONFIG.COOKIE_TIMEOUT)});ga(oCONFIG.PUA_NAME+dpv+".require","linker");ga(oCONFIG.PUA_NAME+dpv+".linker:autoLink",[oCONFIG.HOST_DOMAIN_OR])}else{ga("create",oCONFIG.GWT_UAID[dpv],oCONFIG.HOST_DOMAIN_OR,{name:oCONFIG.PUA_NAME+dpv,cookieExpires:parseInt(oCONFIG.COOKIE_TIMEOUT)})}if(oCONFIG.ANONYMIZE_IP){ga(oCONFIG.PUA_NAME+dpv+".set","anonymizeIp",oCONFIG.ANONYMIZE_IP)}if(oCONFIG.DOUNBLECLICK_LINK){ga(oCONFIG.PUA_NAME+dpv+".require","displayfeatures")}if(oCONFIG.ENHANCED_LINK){ga(oCONFIG.PUA_NAME+dpv+".require","linkid","linkid.js")}if(oCONFIG.FORCE_SSL){ga(oCONFIG.PUA_NAME+dpv+".set","forceSSL",true)}if(oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS){ga(oCONFIG.PUA_NAME+dpv+".set",oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.AGENCY);ga(oCONFIG.PUA_NAME+dpv+".set",oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.SUB_AGENCY);ga(oCONFIG.PUA_NAME+dpv+".set",oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT,oCONFIG.VERSION)}if(document.title.search(/404|not found/i)!==-1){var vpv404="/vpv404/"+_adjPageUri;_adjPageUri=vpv404.replace(/\/\//g,"/")+"/"+document.referrer}ga(oCONFIG.PUA_NAME+dpv+".send","pageview",_adjPageUri)}}function _initAutoTracker(){var l={DEBUGGING_MODE:true,TRACK_OUTBOUND_DOWNLOADS:true,TRACK_OUTBOUND_EMAILS:true,DOWNLOADS_EXTs:oCONFIG.EXTS,WEBSITE_HOSTNAME:oCONFIG.HOST_DOMAIN_OR,EMAIL_CATEGORY:"Mailto",DOWNLOADS_CATEGORY:"Downloads",TELEPHONE_CATEGORY:"Telephone Clicks",OUTBOUND_LINK_CATEGORY:"Outbound",OUTBOUND_DOWNLOAD_CATEGORY:"Outbound Downloads",OUTBOUND_EMAIL_CATEGORY:"Outbound MailTo",};var h=document.getElementsByTagName("a");for(var i=0;i<h.length;i++){try{var e=h[i].getAttribute("href");var b=h[i];var a=b.hostname;var g=b.href.split(a)[1].split(/[#?&?]/)[0];var f=b.protocol;if(!a.match(/(.*)\.(.*)\.(.*)/g)){a="www."+a}var j=f+"//"+a+g;if(a!=""&&g!=""&&a!="www."){if(a.toLowerCase().indexOf(l.WEBSITE_HOSTNAME)>-1){_isDownload(g,l.DOWNLOADS_EXTs)==true?_addEventListener(b,l.DEBUGGING_MODE,l.DOWNLOADS_CATEGORY,_getDownloadExt(g,l.DOWNLOADS_EXTs),j,0):false}else{_isDownload(g,l.DOWNLOADS_EXTs)&&l.TRACK_OUTBOUND_DOWNLOADS==true?_addEventListener(b,l.DEBUGGING_MODE,l.OUTBOUND_DOWNLOAD_CATEGORY,_getDownloadExt(g,l.DOWNLOADS_EXTs),j,0):_addEventListener(b,l.DEBUGGING_MODE,l.OUTBOUND_LINK_CATEGORY,a,g,0)}}else{if(_isEmailAddr(e)){var d=_getEmailAddr(e);var c=_getEmailAddrHost(d);if(l.WEBSITE_HOSTNAME.replace("www.","")==c){_addEventListener(b,l.DEBUGGING_MODE,l.EMAIL_CATEGORY,d,"",0)}else{if(c.indexOf(l.WEBSITE_HOSTNAME)>-1){_addEventListener(b,l.DEBUGGING_MODE,l.EMAIL_CATEGORY,d,"",0)}else{if(l.TRACK_OUTBOUND_EMAILS){_addEventListener(b,l.DEBUGGING_MODE,l.OUTBOUND_EMAIL_CATEGORY,d,"",0)}}}}else{if(_isTelNum(e)){_addEventListener(b,l.DEBUGGING_MODE,l.TELEPHONE_CATEGORY,_getTelNum(e),"",0)}}}}catch(k){}}}function _isDownload(b,a){if(b.toLowerCase().match(new RegExp("^(.*)("+a+")(.*)$"))!=null){return true}else{return false}}function _getDownloadExt(b,a){return b.toLowerCase().match(new RegExp(".("+a+")"))[0].replace(".","")}function _isEmailAddr(a){if(a.toLowerCase().match(/^mailto\:[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/g)){return true}else{return false}}function _getEmailAddr(a){return a.toLowerCase().match(/[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})/g).toString()}function _getEmailAddrHost(a){return a.toString().split("@")[1]}function _isTelNum(a){if(a.toLowerCase().match(/^tel\:(.*)([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g)){return true}else{return false}}function _getTelNum(b){var a=b.toLowerCase().match(/^tel\:(.*)([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g).toString();return a.toString().replace("tel:","")}function _unionParams(a){if(a=="true"||a=="on"||a=="yes"||a=="1"){return"true"}else{if(a=="false"||a=="off"||a=="no"||a=="0"){return"false"}else{return a}}}function _isValidUANum(c){c=c.toLowerCase();var b=/^ua\-([0-9]+)\-[0-9]+$/;var a=c.match(b);if(a!=null&&a.length>0){return true}else{return false}}function _addEventListener(a,b,d,c,f,e){if(b==true){var g=a.getAttribute("onmousedown");a.setAttribute("onmousedown","_sendEvent('"+d+"','"+c+"','"+f+"',"+e+");"+(g!=null?g:""))}else{if(b==false){a.addEventListener("mousedown",function(){_sendEvent(d,c,f,e)})}}}var tag=document.createElement("script");tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var videoArray=new Array();var playerArray=new Array();var _f33=false;var _f66=false;var _f90=false;function youtube_parser(b){var c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;var a=b.match(c);if(a&&a[2].length==11){return a[2]}else{}}function IsYouTube(b){var c=/^.*((youtu.be\/)|(\/v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;var a=b.match(c);if(a!=null&&a.length>0){return true}else{return false}}function YTUrlHandler(a){stAdd="";adFlag=false;if(a.indexOf("https")==-1){a=a.replace("http","https")}if(a.indexOf("?")==-1){stAdd="?flag=1"}if(a.indexOf("enablejsapi")==-1){stAdd+="&enablejsapi=1";adFlag=true}if(a.indexOf("origin")==-1){stAdd+="&origin="+document.location.host;adFlag=true}if(adFlag==true){return a+stAdd}else{return a}}function _initYouTubeTracker(){var a=document.getElementsByTagName("iframe");var c=0;for(var b=0;b<a.length;b++){_thisVideoObj=a[b];var e=_thisVideoObj.src;if(IsYouTube(e)){_thisVideoObj.src=YTUrlHandler(e);var d=youtube_parser(e);_thisVideoObj.setAttribute("id",d);videoArray[c]=d;c++}}}function onYouTubeIframeAPIReady(){for(var a=0;a<videoArray.length;a++){playerArray[a]=new YT.Player(videoArray[a],{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}}function onPlayerReady(a){}function onPlayerStateChange(c){var d=c.target.getVideoUrl();var b=youtube_parser(d);if(c.data==YT.PlayerState.PLAYING){_thisDuration=((c.target.getCurrentTime()/c.target.getDuration())*100).toFixed();if(_thisDuration==0){_f33=false;_f66=false;_f90=false}_sendEvent("YouTube Video","play",d,0)}else{if(c.data==YT.PlayerState.ENDED){_sendEvent("YouTube Video","finish",d,0)}else{if(c.data==YT.PlayerState.PAUSED){_sendEvent("YouTube Video","pause",d,0);var a=((c.target.getCurrentTime()/c.target.getDuration())*100).toFixed();if(a<100){var e=((c.target.getCurrentTime()/c.target.getDuration())*100).toFixed();if(e>0&&e<=33&&_f33==false){_sendEvent("YouTube Video","33%",d,0)}else{if(e>0&&e<=66&&_f66==false){_sendEvent("YouTube Video","66%",d,0)}else{if(e>0&&e<=90&&_f90==false){_sendEvent("YouTube Video","90%",d,0)}}}}}}}}function _initIdAssigner(){var c=document.getElementsByTagName("a");for(var a=0;a<c.length;a++){var b=c[a].getAttribute("id");if(b==null||b==""){c[a].setAttribute("id","anch_"+a)}}}function CookieTimeoutCalc_Months(b){var a=60*60*24*30.416667;return a*b}document.addEventListener("DOMContentLoaded",function(){oCONFIG.ENHANCED_LINK==true?_initIdAssigner():"";oCONFIG.AUTOTRACKER==true?_initAutoTracker():"";oCONFIG.YOUTUBE==true?_initYouTubeTracker():""});