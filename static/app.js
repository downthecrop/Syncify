(function(){"use strict";var t={3282:function(t,e,a){var n=a(5130),s=a(6768),i=a(4232);const o={id:"app"},l={class:"container",style:{"margin-left":"270px"}},r=(0,s.Lk)("h1",null,"Music Streamer",-1),u={key:1,"aria-label":"breadcrumb"},c={class:"breadcrumb"},d=["onClick"],h={id:"nav-list",class:"list-group"},g={class:"d-flex align-items-center"},p=["onClick"],m={class:"truncate"},y=(0,s.Lk)("br",null,null,-1),v={key:0,class:"ml-2"},f=["onClick"],k=["onClick"];function b(t,e,a,b,S,w){const P=(0,s.g2)("notifications"),A=(0,s.g2)("NavSidebar"),L=(0,s.g2)("AudioPlayer"),x=(0,s.g2)("PlaylistUI");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(P,{position:"top right"}),(0,s.bF)(A,{onNavigate:w.navigate},null,8,["onNavigate"]),(0,s.Lk)("div",l,[r,S.navigationHistory.length>1?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>w.goBack&&w.goBack(...t)),class:"btn btn-secondary mb-3"},"Back")):(0,s.Q3)("",!0),S.navigationHistory.length?((0,s.uX)(),(0,s.CE)("nav",u,[(0,s.Lk)("ol",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(S.navigationHistory,((t,e)=>((0,s.uX)(),(0,s.CE)("li",{class:"breadcrumb-item",key:e},[(0,s.Lk)("a",{href:"#",onClick:(0,n.D$)((t=>w.navigateToBreadcrumb(e)),["prevent"])},(0,i.v_)(t.view)+(0,i.v_)(t.name?": "+t.name:""),9,d)])))),128))])])):(0,s.Q3)("",!0),(0,s.Lk)("ul",h,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(S.displayItems,(t=>((0,s.uX)(),(0,s.CE)("li",{key:t.name,class:"list-group-item border-0 d-flex justify-content-between align-items-center"},[(0,s.Lk)("div",g,[(0,s.Lk)("a",{href:"#",onClick:(0,n.D$)((e=>w.handleNavigation(t)),["prevent"]),class:"nav-link d-inline-flex align-items-center"},[(0,s.Lk)("i",{class:(0,i.C4)([w.getIconClass(S.currentView,t.isDirectory),"mr-2"])},null,2),(0,s.Lk)("span",m,(0,i.v_)(t.name),1)],8,p),y,w.isSongView?((0,s.uX)(),(0,s.CE)("small",v,(0,i.v_)(t.path),1)):(0,s.Q3)("",!0)]),w.isSongView?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:e=>w.addToPlaylist(t),class:"btn btn-primary btn-sm"},"Add to Playlist",8,f)):(0,s.Q3)("",!0),w.isAlbumView?((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:e=>w.addAlbumToPlaylist(t.name),class:"btn btn-secondary btn-sm"},"Add Album to Playlist",8,k)):(0,s.Q3)("",!0)])))),128))])]),(0,s.bF)(L,{ref:"audioPlayer",audioSrc:S.audioSrc,metadata:S.metadata,onEnded:w.handleSongEnded,onNext:w.handleNextTrack,onPrevious:w.handlePreviousTrack},null,8,["audioSrc","metadata","onEnded","onNext","onPrevious"]),(0,s.bF)(x,{playSong:w.playSong,nextSong:w.nextSong,previousSong:w.previousSong},null,8,["playSong","nextSong","previousSong"])])}a(4114),a(3375),a(9225),a(3972),a(9209),a(5714),a(7561),a(6197);const S={class:"nav-sidebar"},w={class:"nav flex-column"},P=["onClick"];function A(t,e,a,o,l,r){return(0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("ul",w,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.links,(t=>((0,s.uX)(),(0,s.CE)("li",{class:"nav-item",key:t.name},[(0,s.Lk)("a",{class:(0,i.C4)(["nav-link",{active:t.active}]),href:"#",onClick:(0,n.D$)((e=>r.navigate(t.name)),["prevent"])},[(0,s.Lk)("i",{class:(0,i.C4)(t.icon)},null,2),(0,s.eW)(" "+(0,i.v_)(t.name),1)],10,P)])))),128))])])}var L={data(){return{links:[{name:"All",href:"#",icon:"fas fa-list"},{name:"Artists",href:"#",icon:"fas fa-user"},{name:"Albums",href:"#",icon:"fas fa-record-vinyl"},{name:"Directory",href:"#",icon:"fas fa-folder"}]}},methods:{navigate(t){console.log("navigate",t),this.$emit("navigate",t)}}},x=a(1241);const C=(0,x.A)(L,[["render",A]]);var E=C;const T={class:"audio-player-container"},I={class:"audio-player"},V={class:"audio-info"},D=["src"],H={class:"track-info"},X={class:"track-title"},$={class:"track-artist"},O={class:"audio-controls"},_={class:"control-buttons"},N=(0,s.Lk)("i",{class:"fas fa-backward"},null,-1),M=[N],U=(0,s.Lk)("i",{class:"fas fa-forward"},null,-1),j=[U],F={class:"audio-progress"},R={class:"time"},K={class:"time"},B={class:"volume-control"},Q=["src"];function Y(t,e,a,o,l,r){return(0,s.uX)(),(0,s.CE)("div",T,[(0,s.Lk)("div",I,[(0,s.Lk)("div",V,[(0,s.Lk)("img",{src:l.albumCover,alt:"Album Cover",class:"cover"},null,8,D),(0,s.Lk)("div",H,[(0,s.Lk)("span",X,(0,i.v_)(a.metadata.title),1),(0,s.Lk)("span",$,(0,i.v_)(a.metadata.artist),1)])]),(0,s.Lk)("div",O,[(0,s.Lk)("div",_,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.previousTrack&&r.previousTrack(...t)),class:"control-btn"},M),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>r.toggleShuffle&&r.toggleShuffle(...t)),class:"control-btn"},[(0,s.Lk)("i",{class:(0,i.C4)({"fas fa-random":l.isShuffle,"fas fa-backward":!l.isShuffle})},null,2)]),(0,s.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>r.togglePlay&&r.togglePlay(...t)),class:"control-btn"},[(0,s.Lk)("i",{class:(0,i.C4)({"fas fa-pause":l.isPlaying,"fas fa-play":!l.isPlaying})},null,2)]),(0,s.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>r.toggleRepeat&&r.toggleRepeat(...t)),class:"control-btn"},[(0,s.Lk)("i",{class:(0,i.C4)({"fas fa-redo":l.isRepeat,"fas fa-forward":!l.isRepeat})},null,2)]),(0,s.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>r.nextTrack&&r.nextTrack(...t)),class:"control-btn"},j)]),(0,s.Lk)("div",F,[(0,s.Lk)("span",R,(0,i.v_)(l.currentTime),1),(0,s.bo)((0,s.Lk)("input",{type:"range","onUpdate:modelValue":e[5]||(e[5]=t=>l.seek=t),onInput:e[6]||(e[6]=(...t)=>r.seekAudio&&r.seekAudio(...t)),class:"seek-bar"},null,544),[[n.Jo,l.seek]]),(0,s.Lk)("span",K,(0,i.v_)(l.duration),1)])]),(0,s.Lk)("div",B,[(0,s.bo)((0,s.Lk)("input",{type:"range","onUpdate:modelValue":e[7]||(e[7]=t=>l.volume=t),onInput:e[8]||(e[8]=(...t)=>r.changeVolume&&r.changeVolume(...t)),class:"volume-bar"},null,544),[[n.Jo,l.volume]])])]),(0,s.Lk)("audio",{ref:"audioPlayer",src:a.audioSrc,onTimeupdate:e[9]||(e[9]=(...t)=>r.updateTime&&r.updateTime(...t)),onLoadedmetadata:e[10]||(e[10]=(...t)=>r.updateDuration&&r.updateDuration(...t)),onLoadeddata:e[11]||(e[11]=(...t)=>r.onLoadedData&&r.onLoadedData(...t)),onPlay:e[12]||(e[12]=(...t)=>r.onPlay&&r.onPlay(...t)),onEnded:e[13]||(e[13]=(...t)=>r.onEnded&&r.onEnded(...t)),onError:e[14]||(e[14]=(...t)=>r.handleError&&r.handleError(...t))}," Your browser does not support the audio element. ",40,Q)])}var J={props:["audioSrc","metadata"],data(){return{albumCover:"https://pbs.twimg.com/media/FPx0VtLX0AcOSK3.jpg:large",isPlaying:!1,isShuffle:!1,isRepeat:!1,seek:0,currentTime:"0:00",duration:"2:07",volume:100,isLoaded:!1}},watch:{audioSrc(t){if(t){const t=this.$refs.audioPlayer;this.isLoaded=!1,t.pause(),t.load()}}},methods:{togglePlay(){const t=this.$refs.audioPlayer;t.paused&&this.isLoaded?(t.play(),this.isPlaying=!0):(t.pause(),this.isPlaying=!1)},toggleShuffle(){this.isShuffle=!this.isShuffle},toggleRepeat(){this.isRepeat=!this.isRepeat},onPlay(){this.isLoaded=!0,this.isPlaying=!0},onLoadedData(){this.isLoaded=!0,this.$refs.audioPlayer.play(),this.isPlaying=!0},updateTime(){const t=this.$refs.audioPlayer;t&&(this.currentTime=this.formatTime(t.currentTime),this.seek=t.currentTime/t.duration*100)},updateDuration(){const t=this.$refs.audioPlayer;t&&(this.duration=this.formatTime(t.duration))},formatTime(t){const e=Math.floor(t/60),a=Math.floor(t%60);return`${e}:${a<10?"0":""}${a}`},seekAudio(){const t=this.$refs.audioPlayer;t&&(t.currentTime=this.seek/100*t.duration)},changeVolume(){const t=this.$refs.audioPlayer;t&&(t.volume=this.volume/100)},handleError(t){console.error("Error loading audio:",t)},onEnded(){this.$emit("ended")},nextTrack(){this.$emit("next")},previousTrack(){this.$emit("previous")}}};const W=(0,x.A)(J,[["render",Y]]);var q=W;const z=t=>((0,s.Qi)("data-v-76369d6e"),t=t(),(0,s.jt)(),t),G={key:0,class:"playlist-popup"},Z={class:"playlist-header"},tt=z((()=>(0,s.Lk)("h3",null,"Playlist Manager",-1))),et={class:"button-group"},at={class:"playlist-body"},nt=["onClick"];function st(t,e,a,n,o,l){const r=(0,s.g2)("draggable");return(0,s.uX)(),(0,s.CE)(s.FK,null,[n.isOpen?((0,s.uX)(),(0,s.CE)("div",G,[(0,s.Lk)("div",Z,[tt,(0,s.Lk)("div",et,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>n.playPlaylist&&n.playPlaylist(...t)),class:"btn btn-sm"},"Play"),(0,s.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>n.savePlaylist&&n.savePlaylist(...t)),class:"btn btn-sm"},"Save Playlist"),(0,s.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>n.shufflePlaylist&&n.shufflePlaylist(...t)),class:"btn btn-sm"},"Shuffle"),(0,s.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>n.handleAddItem&&n.handleAddItem(...t)),class:"btn btn-sm"},"Add"),(0,s.Lk)("button",{onClick:e[4]||(e[4]=t=>n.isOpen=!1),class:"btn btn-sm"},"X")])]),(0,s.Lk)("div",at,[(0,s.bF)(r,{modelValue:n.playlist,"onUpdate:modelValue":e[5]||(e[5]=t=>n.playlist=t),onEnd:n.onDragEnd,tag:"ul"},{item:(0,s.k6)((({element:t,index:e})=>[((0,s.uX)(),(0,s.CE)("li",{key:e,class:"list-item"},[(0,s.eW)((0,i.v_)(t.name)+" ",1),(0,s.Lk)("button",{onClick:t=>n.removeItem(e)},"Remove",8,nt)]))])),_:1},8,["modelValue","onEnd"])])])):(0,s.Q3)("",!0),n.isOpen?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:1,class:"open-popup-button",onClick:e[6]||(e[6]=t=>n.isOpen=!0)}," Open Playlist Manager "))],64)}var it=a(144),ot=a(1527),lt=a.n(ot);const rt=(0,it.KR)([]),ut=t=>{rt.value.push(t)};var ct={props:{playSong:Function,nextSong:Function,previousSong:Function},components:{draggable:lt()},setup(t){const e=(0,it.KR)(!1),a=(0,it.KR)(""),n=(0,it.KR)(-1),i=()=>{ut({name:a.value,index:rt.value.length}),a.value=""},o=t=>{rt.value.splice(t,1)},l=()=>{},r=()=>{console.log("Playist sees the new next event!"),n.value<rt.value.length-1&&(n.value++,t.playSong(rt.value[n.value].index))},u=()=>{n.value>0&&(n.value--,t.playSong(rt.value[n.value].index))},c=()=>{n.value=0,t.playSong(rt.value[n.value].index)},d=()=>{console.log("Saving playlist:",rt.value)},h=()=>{for(let t=rt.value.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[rt.value[t],rt.value[e]]=[rt.value[e],rt.value[t]]}};return(0,s.wB)(n,((e,a)=>{e!==a&&e<rt.value.length&&t.playSong(rt.value[e].index)})),(0,s.wB)(rt,(()=>{n.value>=rt.value.length&&(n.value=rt.value.length-1)})),(0,s.sV)((()=>{this.$on("next",r),this.$on("previous",u)})),(0,s.hi)((()=>{this.$off("next",r),this.$off("previous",u)})),{isOpen:e,newItem:a,playlist:rt,handleAddItem:i,removeItem:o,onDragEnd:l,playPlaylist:c,savePlaylist:d,shufflePlaylist:h,playNextSong:r,playPreviousSong:u}}};const dt=(0,x.A)(ct,[["render",st],["__scopeId","data-v-76369d6e"]]);var ht=dt,gt=a(7910),pt={components:{NavSidebar:E,AudioPlayer:q,PlaylistUI:ht},data(){return{songs:[],currentView:"songs",displayItems:[],navigationHistory:[],socket:null,audioSrc:"",metadata:{title:"Unknown Title",artist:"Unknown Artist",album:"Unknown Album",year:"Unknown Year"},currentPlaylist:[],currentIndex:-1}},computed:{isSongView(){return"songs"===this.currentView||"all"===this.currentView},isAlbumView(){return"albums"===this.currentView}},methods:{async fetchSongs(){try{const t=await fetch("http://localhost:5000/songs"),e=await t.json();this.songs=e.songs.map(((t,e)=>{const a=t.path.split("/"),n=t.name.replace(/(\.m4a|\.mp3|\.flac)+$/i,"");return{...t,name:n,artist:a[a.length-2]||"Unknown Artist",album:a[a.length-1]||"Unknown Album",path:t.path,index:e}})),this.displayAllSongs()}catch(t){console.error("Error fetching songs:",t)}},buildDirectoryStructure(){const t={};return this.songs.forEach((e=>{const a=e.path.split("/");let n=t;a.forEach(((t,e)=>{n[t]||(n[t]={name:t,path:a.slice(0,e+1).join("/"),isDirectory:!0,children:{}}),n=n[t].children}))})),t},traverseDirectory(t,e=""){if(!t)return[];const a=Object.values(t);return e&&this.updateNavigationHistory({view:"Directory",name:e}),a},displayDirectory(t=""){this.currentView="directory";const e=this.buildDirectoryStructure();let a=e;if(t){const e=t.split("/");e.forEach((t=>{a[t]&&(a=a[t].children)}))}this.displayItems=this.traverseDirectory(a,t)},playSong(t){this.$notify("Attempting to play song: "+t),this.socket.emit("play_song",{index:t})},handlePlaySong(t){this.audioSrc=`http://localhost:5000/stream?url=${encodeURIComponent(t.url)}`,this.fetchMetadata(this.audioSrc)},async fetchMetadata(t){try{const e=await fetch(t,{method:"HEAD"});this.metadata.title=e.headers.get("X-Metadata-Title")||"Unknown Title",this.metadata.artist=e.headers.get("X-Metadata-Artist")||"Unknown Artist",this.metadata.album=e.headers.get("X-Metadata-Album")||"Unknown Album",this.metadata.year=e.headers.get("X-Metadata-Year")||"Unknown Year"}catch(e){console.error("Error fetching metadata:",e)}},displayAlbums(){this.currentView="albums";const t=[...new Set(this.songs.map((t=>t.album)))];this.displayItems=t.map((t=>({name:t}))),this.updateNavigationHistory({view:"Albums"})},displaySongs(t){this.currentView="songs",this.displayItems=this.songs.filter((e=>e.album===t)),this.updateNavigationHistory({view:"Songs",name:t})},displayAllSongs(){this.currentView="all",this.displayItems=this.songs.map(((t,e)=>({...t,index:e}))),this.updateNavigationHistory({view:"All Songs"})},displayArtists(){this.currentView="artists";const t=[...new Set(this.songs.map((t=>t.artist)))];this.displayItems=t.map((t=>({name:t}))),this.updateNavigationHistory({view:"Artists"})},displayArtistAlbums(t){this.currentView="albums";const e=[...new Set(this.songs.filter((e=>e.artist===t)).map((t=>t.album)))];this.displayItems=e.map((t=>({name:t}))),this.updateNavigationHistory({view:"Albums",name:t})},handleNavigation(t){t.isDirectory?this.displayDirectory(t.path):"albums"===this.currentView?this.displaySongs(t.name):"songs"===this.currentView||"all"===this.currentView?this.playSong(t.index):"artists"===this.currentView&&this.displayArtistAlbums(t.name)},goBack(){if(this.navigationHistory.length>1){this.navigationHistory.pop();const t=this.navigationHistory[this.navigationHistory.length-1];this.restoreView(t.view,t.name)}},restoreView(t,e){switch(t){case"All Songs":this.displayAllSongs();break;case"Artists":this.displayArtists();break;case"Albums":e?this.displayArtistAlbums(e):this.displayAlbums();break;case"Songs":e&&(this.currentView="songs",this.displayItems=this.songs.filter((t=>t.album===e)));break;case"Directory":this.displayDirectory(e);break}},navigate(t){this.navigationHistory=[],"All"===t?this.displayAllSongs():"Artists"===t?this.displayArtists():"Albums"===t?this.displayAlbums():"Directory"===t&&this.displayDirectory()},navigateToBreadcrumb(t){this.navigationHistory=this.navigationHistory.slice(0,t+1);const e=this.navigationHistory[t];this.restoreView(e.view,e.name)},updateNavigationHistory(t){0!==this.navigationHistory.length&&this.navigationHistory[this.navigationHistory.length-1].view===t.view&&this.navigationHistory[this.navigationHistory.length-1].name===t.name||this.navigationHistory.push(t)},getIconClass(t,e){if(e)return"fas fa-folder";switch(t){case"albums":return"fas fa-folder";case"artists":return"fas fa-microphone";case"songs":case"all":return"fas fa-music";default:return"fas fa-music"}},addToPlaylist(t){ut({name:t.name,index:t.index})},addAlbumToPlaylist(t){const e=this.songs.filter((e=>e.album===t));e.forEach((t=>ut({name:t.name,index:t.index})))},songEnded(){this.currentIndex<this.currentPlaylist.length-1&&(this.currentIndex++,this.playSong(this.currentPlaylist[this.currentIndex].index))},handleSongEnded(){console.log("Song is over..."),this.songEnded()},handleNextTrack(){console.log("Trying to play next..."),this.currentIndex<this.currentPlaylist.length-1&&(this.currentIndex++,this.playSong(this.currentPlaylist[this.currentIndex].index))},handlePreviousTrack(){console.log("Trying to play previous..."),this.currentIndex>0&&(this.currentIndex--,this.playSong(this.currentPlaylist[this.currentIndex].index))},nextSong(){this.handleNextTrack()},previousSong(){this.handlePreviousTrack()}},mounted(){this.socket=gt.Ay.connect("http://localhost:5000"),this.socket.on("connect",(()=>{console.log("Connected to server")})),this.socket.on("play_song",this.handlePlaySong),this.fetchSongs()}};const mt=(0,x.A)(pt,[["render",b]]);var yt=mt,vt=a(7278);const ft=(0,n.Ef)(yt);ft.use(vt.Ay),ft.mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,i){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],i=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(l=!1,i<o&&(o=i));if(l){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,o=n[0],l=n[1],r=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var c=r(a)}for(e&&e(n);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},n=self["webpackChunkmusic_streamer"]=self["webpackChunkmusic_streamer"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(3282)}));n=a.O(n)})();
//# sourceMappingURL=..\static\app.js.map