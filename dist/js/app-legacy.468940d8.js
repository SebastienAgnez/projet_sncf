(function(){"use strict";var e={2281:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var a=r(9963),n=r(6252),i=r(8954),s=r(5028),o=r(795),u=(0,n._)("h1",null,"SATISF'RETARD",-1),c=(0,n.Uk)(" Vous souhaitez faire un "),d=(0,n._)("b",null,"court",-1),l=(0,n.Uk)(" voyage ? Le temps d'un week-end ? Vous ne voulez pas trop "),f=(0,n._)("b",null,"attendre",-1),p=(0,n.Uk)(" votre train en "),v=(0,n._)("b",null,"retard",-1),h=(0,n.Uk)("... "),m=(0,n._)("br",null,null,-1),g=(0,n._)("b",{class:"logo"},"Satisf'retard",-1),C=(0,n.Uk)(" permet de consulter les "),_=(0,n._)("b",null,"retards",-1),b=(0,n.Uk)(" des trains sur un trajet choisi et de connaître les "),w=(0,n._)("b",null,"causes",-1),D=(0,n.Uk)(" des retards de votre trajet selon le mois choisi. "),k=(0,n._)("br",null,null,-1),y=(0,n.Uk)(" Notre petit plus nous vous permettons de connaître la "),x=(0,n._)("b",null,"satisfaction",-1),B=(0,n.Uk)(" des clients... "),L=(0,n._)("footer",{class:"text-center"},[(0,n._)("div",{class:"copyright text-center"}," © 2021 Copyright : AGNEZ Sébastien - BACQUET Manon ")],-1);function A(e,t,r,a,A,j){var P=(0,n.up)("BarChart"),S=(0,n.up)("PieChart"),z=(0,n.up)("SatisfactionClients");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o.K,{class:"titre"},{default:(0,n.w5)((function(){return[u]})),_:1}),(0,n.Wm)(o.K,{class:"container infos"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"texte mx-auto pa-4"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[c,d,l,f,p,v,h,m,g,C,_,b,w,D,k,y,x,B]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(P),(0,n.Wm)(S),(0,n.Wm)(z),L],64)}var j=r(8534),P=r(4648),S=(r(5666),r(1539),r(4747),r(3577)),z=r(9246),W=r(7889),F=r(7695),U=r(6334),O={class:"BarChart"},M=(0,n.Uk)("Retard d'un trajet TGV en ligne directe"),E={method:"post"},R={class:"input-group mb-3"},T=(0,n._)("label",{class:"input-group-text",for:"gareDepart"},"Départ",-1),Z=(0,n._)("option",{selected:"",disabled:""},"Choisissez votre gare de départ",-1),G=["textContent"],K=(0,n._)("label",{class:"input-group-text",for:"gareArrivee"},"Arrivée",-1),q=(0,n._)("option",{selected:"",disabled:""},"Choisissez votre gare d'arrivée",-1),N=["textContent"],V=(0,n._)("label",{class:"input-group-text",for:"annee"},"Années",-1),J=(0,n._)("option",{selected:"",disabled:""},"Choisissez l'année",-1),H=(0,n._)("option",{value:"2021"},"2021",-1),Y=(0,n._)("option",{value:"2020"},"2020",-1),I=(0,n._)("option",{value:"2019"},"2019",-1),$=(0,n._)("option",{value:"2018"},"2018",-1),Q=[J,H,Y,I,$],X=(0,n.Uk)(" Valider ");function ee(e,t,r,u,c,d){var l=(0,n.up)("BarChart",!0);return(0,n.wg)(),(0,n.iD)("div",O,[(0,n.Wm)(o.K,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"pa-3 chart",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W.k,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-choix"},{default:(0,n.w5)((function(){return[M]})),_:1})]})),_:1}),(0,n._)("form",E,[(0,n._)("div",R,[T,(0,n.wy)((0,n._)("select",{class:"form-select",id:"gareDepart",name:"depart","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.depart=t}),onChange:t[1]||(t[1]=function(t){return e.correspondingLines(t)})},[Z,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.gareD,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,G)})),128))],544),[[a.bM,e.depart]]),K,(0,n.wy)((0,n._)("select",{class:"form-select",id:"gareArrivee",name:"arrivee","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.arrivee=t})},[q,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.arrivalCorrespondence,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,N)})),128))],512),[[a.bM,e.arrivee]]),V,(0,n.wy)((0,n._)("select",{class:"form-select",id:"annee",name:"annee","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.annee=t})},Q,512),[[a.bM,e.annee]])]),"Choisissez votre gare d'arrivée"!=e.arrivee&&"Choisissez l'année"!=e.annee?((0,n.wg)(),(0,n.j4)(U.h,{key:0,class:"justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(z.T,{onClick:d.doBarChart,class:"mt-4",variant:"outlined",rounded:"",text:""},{default:(0,n.w5)((function(){return[X]})),_:1},8,["onClick"])]})),_:1})):(0,n.kq)("",!0)])]})),_:1})]})),_:1}),e.verifBarBool?((0,n.wg)(),(0,n.j4)(o.K,{key:0,class:"bar-chart"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"chart pa-3",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-chart"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Nombre de trains en retard (en %) pour le trajet : "+(0,S.zw)(e.depart)+" - "+(0,S.zw)(e.arrivee),1)]})),_:1}),(0,n.Wm)(l,{chartData:e.dataBarChart},null,8,["chartData"])]})),_:1})]})),_:1})]})),_:1})):(0,n.kq)("",!0)])}var te=r(5957),re=r(8637),ae=r(3109),ne=r(2728);ne.Chart.register.apply(ne.Chart,(0,te.Z)(ne.registerables));var ie={name:"Home",components:{BarChart:ae.BarChart},data:function(){return{depart:"Choisissez votre gare de départ",arrivee:"Choisissez votre gare d'arrivée",annee:"Choisissez l'année"}},computed:(0,P.Z)({},(0,re.Se)(["gareD","retardDepart","retardArrivee","departLate","arriveeLate","trainsPrevus","retards","moyenneLate","arrivalCorrespondence","dateCorrespondence","dataBarChart","dataLates","verifBarBool"])),methods:(0,P.Z)((0,P.Z)({},(0,re.nv)(["correspondingLines","correspondingDates","correspondingLates","moyenneRetard"])),{},{doBarChart:function(){var e=this.depart,t=this.arrivee,r=this.annee;this.correspondingDates({depart:e,arrivee:t}),this.correspondingLates({depart:e,arrivee:t}),this.moyenneRetard({annee:r})}})},se=r(3744);const oe=(0,se.Z)(ie,[["render",ee]]);var ue=oe,ce={class:"PieChart"},de=(0,n.Uk)("Causes des retards"),le={method:"post"},fe={class:"input-group mb-3"},pe=(0,n._)("label",{class:"input-group-text",for:"gareDepart"},"Départ",-1),ve=(0,n._)("option",{selected:"",disabled:""},"Choisissez votre gare de départ",-1),he=["textContent"],me=(0,n._)("label",{class:"input-group-text",for:"gareArrivee"},"Arrivée",-1),ge=(0,n._)("option",{selected:"",disabled:""},"Choisissez votre gare d'arrivée",-1),Ce=["textContent"],_e=(0,n._)("span",{class:"choix-mois input-group-text"},"Mois-Années",-1),be=(0,n._)("option",{selected:"",disabled:""},"Choisissez le mois et l'année",-1),we=["textContent"],De=(0,n.Uk)(" Valider ");function ke(e,t,r,u,c,d){var l=(0,n.up)("PieChart",!0);return(0,n.wg)(),(0,n.iD)("div",ce,[e.seenCauses?((0,n.wg)(),(0,n.j4)(o.K,{key:0,class:"Causes_retard"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"pa-3 chart",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-choix"},{default:(0,n.w5)((function(){return[de]})),_:1})]})),_:1}),(0,n._)("form",le,[(0,n._)("div",fe,[pe,(0,n.wy)((0,n._)("select",{class:"form-select",id:"gareDepart",name:"departCause","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.departCause=t}),onChange:t[1]||(t[1]=function(t){return e.correspondingLines(t)})},[ve,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.gareD,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,he)})),128))],544),[[a.bM,e.departCause]]),me,(0,n.wy)((0,n._)("select",{class:"form-select",id:"gareArrivee",name:"arriveeCause","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.arriveeCause=t})},[ge,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.arrivalCorrespondence,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,Ce)})),128))],512),[[a.bM,e.arriveeCause]]),_e,(0,n.wy)((0,n._)("select",{class:"form-select",name:"dateCause","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.dateCause=t})},[be,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.dateCorrespondence,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,we)})),128))],512),[[a.bM,e.dateCause]])]),"Choisissez le mois et l'année"!=e.dateCause&&"Choisissez votre gare d'arrivée"!=e.arriveeCause?((0,n.wg)(),(0,n.j4)(U.h,{key:0,class:"justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(z.T,{onClick:d.doPieChart,class:"mt-4",variant:"outlined",rounded:"",text:""},{default:(0,n.w5)((function(){return[De]})),_:1},8,["onClick"])]})),_:1})):(0,n.kq)("",!0)])]})),_:1})]})),_:1})):(0,n.kq)("",!0),e.verifCauseBool?((0,n.wg)(),(0,n.j4)(o.K,{key:1,class:"piechart-chart"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"pa-3 chart",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-chart"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Pourcentage des causes de retard : "+(0,S.zw)(e.departCause)+" - "+(0,S.zw)(e.arriveeCause)+" - "+(0,S.zw)(e.dateCause),1)]})),_:1}),(0,n.Wm)(l,{chartData:e.dataPieChart},null,8,["chartData"])]})),_:1})]})),_:1})]})),_:1})):(0,n.kq)("",!0)])}r(4916),r(3123);ne.Chart.register.apply(ne.Chart,(0,te.Z)(ne.registerables));var ye={name:"Home",components:{PieChart:ae.PieChart},data:function(){return{departCause:"Choisissez votre gare de départ",arriveeCause:"Choisissez votre gare d'arrivée",dateCause:"Choisissez le mois et l'année"}},computed:(0,P.Z)({},(0,re.Se)(["gareD","dateGares","arrivalCorrespondence","dateCorrespondence","dataFields","verifCauseBool","dataPieChart","seenCauses"])),methods:(0,P.Z)((0,P.Z)({},(0,re.nv)(["correspondingLines","causeRetByGare"])),{},{doPieChart:function(){var e=this.departCause,t=this.arriveeCause,r=this.dateCause;r=this.dateEnChiffre(r),this.causeRetByGare({departCause:e,arriveeCause:t,dateCause:r})},dateEnChiffre:function(e){var t;switch(e=e.split(" "),e[0]){case"Janvier":t=e[1]+"-01";break;case"Février":t=e[1]+"-02";break;case"Mars":t=e[1]+"-03";break;case"Avril":t=e[1]+"-04";break;case"Mai":t=e[1]+"-05";break;case"Juin":t=e[1]+"-06";break;case"Juillet":t=e[1]+"-07";break;case"Août":t=e[1]+"-08";break;case"Septembre":t=e[1]+"-09";break;case"Octobre":t=e[1]+"-10";break;case"Novembre":t=e[1]+"-11";break;case"Décembre":t=e[1]+"-12";break}return t}})};const xe=(0,se.Z)(ye,[["render",ke]]);var Be=xe,Le=function(e){return(0,n.dD)("data-v-9e8b77b4"),e=e(),(0,n.Cn)(),e},Ae={class:"SatisfactionClients"},je=(0,n.Uk)("Satisfaction"),Pe={method:"post"},Se={class:"input-group"},ze=Le((function(){return(0,n._)("span",{class:"input-group-text choix-mois"},"Mois-Années",-1)})),We=Le((function(){return(0,n._)("option",{selected:"",disabled:""},"Choisissez le mois et l'année",-1)})),Fe=["textContent"],Ue=Le((function(){return(0,n._)("span",{class:"input-group-text border-droit choix-mois"},"Indicateurs",-1)})),Oe=Le((function(){return(0,n._)("option",{selected:"",disabled:""},"Choisissez votre indicateur",-1)})),Me=["textContent"],Ee=(0,n.Uk)(" Valider "),Re=(0,n.Uk)("Satisfaction Client"),Te={key:0},Ze={key:0,class:"fond-satisf"},Ge=Le((function(){return(0,n._)("span",{class:"material-icons emoticonsGood"},"insert_emoticon",-1)})),Ke={class:"note"},qe={key:1,class:"fond-satisf"},Ne=Le((function(){return(0,n._)("span",{class:"material-icons emoticonsNeutral"},"sentiment_neutral",-1)})),Ve={class:"note"},Je={key:2,class:"fond-satisf"},He=Le((function(){return(0,n._)("span",{class:"material-icons emoticonsBad"},"mood_bad",-1)})),Ye={class:"note"};function Ie(e,t,r,u,c,d){var l=this;return(0,n.wg)(),(0,n.iD)("div",Ae,[e.seenSatisf?((0,n.wg)(),(0,n.j4)(o.K,{key:0,class:"Satisfaction"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"pa-3 chart",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-choix"},{default:(0,n.w5)((function(){return[je]})),_:1})]})),_:1}),(0,n._)("form",Pe,[(0,n._)("div",Se,[ze,(0,n.wy)((0,n._)("select",{class:"form-select",name:"date","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.date=t})},[We,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.dateCorrespondence,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,Fe)})),128))],512),[[a.bM,e.date]]),Ue,(0,n.wy)((0,n._)("select",{class:"form-select",id:"indicateurs",name:"indicateurSelect","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.indicateurSelect=t})},[Oe,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.indicateurs,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e,textContent:(0,S.zw)(e)},null,8,Me)})),128))],512),[[a.bM,e.indicateurSelect]])]),"Choisissez votre indicateur"!=e.indicateurSelect&&"Choisissez le mois et l'année"!=e.date?((0,n.wg)(),(0,n.j4)(U.h,{key:0,class:"justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(z.T,{class:"mt-4",variant:"outlined",onClick:d.doSatisf,rounded:"",text:""},{default:(0,n.w5)((function(){return[Ee]})),_:1},8,["onClick"])]})),_:1})):(0,n.kq)("",!0)])]})),_:1})]})),_:1})):(0,n.kq)("",!0),e.satisfaction?((0,n.wg)(),(0,n.j4)(o.K,{key:1,class:"smiley-satisf"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i._,{class:"pa-3 chart",variant:"outlined"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.B,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(F.E,{class:"titre-chart"},{default:(0,n.w5)((function(){return[Re]})),_:1}),e.satisfaction?((0,n.wg)(),(0,n.iD)("span",Te,[10>=l.satisfaction&&l.satisfaction>6.5?((0,n.wg)(),(0,n.iD)("div",Ze,[Ge,(0,n._)("div",Ke,(0,S.zw)(e.satisfaction)+" / 10",1)])):6.5>=l.satisfaction&&l.satisfaction>4?((0,n.wg)(),(0,n.iD)("div",qe,[Ne,(0,n._)("div",Ve,(0,S.zw)(e.satisfaction)+" / 10",1)])):4>=l.satisfaction&&l.satisfaction>=0?((0,n.wg)(),(0,n.iD)("div",Je,[He,(0,n._)("div",Ye,(0,S.zw)(e.satisfaction)+" / 10",1)])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)]})),_:1})]})),_:1})]})),_:1})):(0,n.kq)("",!0)])}var $e={name:"SatisfactionClients",data:function(){return{indicateurSelect:"Choisissez votre indicateur",date:"Choisissez le mois et l'année"}},computed:(0,P.Z)({},(0,re.Se)(["satisfaction","indicateurs","dateCorrespondence","seenSatisf"])),methods:(0,P.Z)((0,P.Z)({},(0,re.nv)(["satisfByDate"])),{},{doSatisf:function(){var e=this.indicateurSelect,t=this.date;t=this.dateEnChiffre(t),this.satisfByDate({indicateurSelect:e,date:t})},dateEnChiffre:function(e){var t;switch(e=e.split(" "),e[0]){case"Janvier":t=e[1]+"-01";break;case"Février":t=e[1]+"-02";break;case"Mars":t=e[1]+"-03";break;case"Avril":t=e[1]+"-04";break;case"Mai":t=e[1]+"-05";break;case"Juin":t=e[1]+"-06";break;case"Juillet":t=e[1]+"-07";break;case"Août":t=e[1]+"-08";break;case"Septembre":t=e[1]+"-09";break;case"Octobre":t=e[1]+"-10";break;case"Novembre":t=e[1]+"-11";break;case"Décembre":t=e[1]+"-12";break}return t}})};const Qe=(0,se.Z)($e,[["render",Ie],["__scopeId","data-v-9e8b77b4"]]);var Xe=Qe,et=r(9669),tt=r.n(et),rt={name:"App",components:{BarChart:ue,PieChart:Be,SatisfactionClients:Xe},computed:(0,P.Z)({},(0,re.Se)(["gareD","gareA","dateGares","retardDepart","retardArrivee","trainsPrevus","indicateurs","infos","gareDepDate","gareArrDate","dataFields"])),mounted:function(){var e=this;return(0,j.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,tt().get("https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee");case 2:return r=t.sent,r.data.records.forEach((function(t){var r=t.fields.gare_depart,a=t.fields.gare_arrivee,n=t.fields.date;e.gareD.push(r),e.gareA.push(a),e.gareDepDate.push(r),e.gareArrDate.push(a),e.dateGares.push(n),e.retardDepart.push(t.fields.nb_train_depart_retard),e.retardArrivee.push(t.fields.nb_train_retard_arrivee),e.trainsPrevus.push(t.fields.nb_train_prevu),e.dataFields.push(t.fields)})),e.$store.dispatch("withoutDoublonDeparts"),e.$store.dispatch("withoutDoublonCorrespondence"),t.next=8,tt().get("https://data.sncf.com/api/records/1.0/search/?dataset=barometre-notes-dopinion-sncf-gmv&q=&rows=5500&sort=column_1&facet=column_1&facet=column_2");case 8:a=t.sent,a.data.records.forEach((function(t){e.infos.push(t),e.indicateurs.push(t.fields.column_2)})),e.$store.dispatch("whithoutDoublonIndicators");case 11:case"end":return t.stop()}}),t)})))()}};const at=(0,se.Z)(rt,[["render",A]]);var nt=at,it=(r(6977),r(7042),r(6005)),st={retardDepart:[],departLate:[],retardArrivee:[],arriveeLate:[],trainsPrevus:[],trierTrainsPrevus:[],retards:[],infos:[],arrivalCorrespondence:[],arrivalCorrespondencePie:[],gareD:[],gareA:[],gareDepDate:[],gareArrDate:[],dateGares:[],indicateurs:[],satisfaction:null,dateCorrespondence:[],moyenneLate:null,dataFields:[],verifCauseBool:null,verifBarBool:null,dataBarChart:{labels:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],datasets:[{data:[],backgroundColor:["#f6d4c9","#f0b8a5","#e78d6f","#e1714c","#b45a3c","#703826"]}]},dataPieChart:{labels:["Causes externes","Cause gestion gare","Cause gestion trafic","Causes infrastructures","Cause matériel roulant","Cause prise en charge voyageurs"],datasets:[{label:"",data:[],backgroundColor:["#a5ddf0","#6fc9e7","#4cbce1","#35839d","#1e4b5a"]}]},posDate:[],dataLates:[],seenCauses:!1,seenSatisf:!1},ot={retardDepart:function(e){return e.retardDepart},retardArrivee:function(e){return e.retardArrivee},departLate:function(e){return e.departLate},arriveeLate:function(e){return e.arriveeLate},trainsPrevus:function(e){return e.trainsPrevus},retards:function(e){return e.retards},gareD:function(e){return e.gareD},gareA:function(e){return e.gareA},gareDepDate:function(e){return e.gareDepDate},gareArrDate:function(e){return e.gareArrDate},dateGares:function(e){return e.dateGares},indicateurs:function(e){return e.indicateurs},infos:function(e){return e.infos},satisfaction:function(e){return e.satisfaction},arrivalCorrespondence:function(e){return e.arrivalCorrespondence},arrivalCorrespondencePie:function(e){return e.arrivalCorrespondence},dateCorrespondence:function(e){return e.dateCorrespondence},moyenneLate:function(e){return e.moyenneLate},dataFields:function(e){return e.dataFields},verifCauseBool:function(e){return e.verifCauseBool},verifBarBool:function(e){return e.verifBarBool},dataPieChart:function(e){return e.dataPieChart},dataBarChart:function(e){return e.dataBarChart},dataLates:function(e){return e.dataLates},seenCauses:function(e){return e.seenCauses},seenSatisf:function(e){return e.seenSatisf}},ut={correspondingLines:function(e,t){e.arrivalCorrespondence=[];for(var r=0;r<e.gareDepDate.length;r++)e.gareDepDate[r]==t.target.value&&e.arrivalCorrespondence.push(e.gareA[r]);e.arrivalCorrespondence=it.jj(e.arrivalCorrespondence)},correspondingDates:function(e,t){var r=t.depart,a=t.arrivee,n=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],i=[];e.dateCorrespondence=[];for(var s=0;s<e.gareDepDate.length;s++)if(e.gareDepDate[s]==r&&e.gareArrDate[s]==a){var o=new Date(e.dateGares[s]),u=o.getFullYear();i.push(u);var c=n[o.getMonth()],d=c+" "+u;e.dateCorrespondence.push(d)}e.posDate=[];for(var l=0;l<e.dateCorrespondence.length;l++)"2020"==i[l]&&e.posDate.push(l)},correspondingLates:function(e,t){var r=t.depart,a=t.arrivee;e.departLate=[],e.arriveeLate=[],e.trierTrainsPrevus=[];for(var n=0;n<e.gareDepDate.length;n++)e.gareDepDate[n]==r&&e.gareArrDate[n]==a&&(e.departLate.push(e.retardDepart[n]),e.arriveeLate.push(e.retardArrivee[n]),e.trierTrainsPrevus.push(e.trainsPrevus[n]))},moyenneRetard:function(e,t){e.moyenneLate=0,e.dataLates=[];for(var r=0;r<e.departLate.length;r++)e.moyenneLate=(e.departLate[r]+e.arriveeLate[r])/e.trierTrainsPrevus[r],isNaN(e.moyenneLate)?e.moyenneLate=0:e.moyenneLate>1&&(e.moyenneLate=1),e.dataLates.push((100*e.moyenneLate).toFixed(0));e.dataLates=e.dataLates.reverse(),e.dataBarChart.datasets[0].data=[];var a=t.annee;if("2018"==a)for(var n=e.dataLates.slice(0,12),i=0;i<n.length;i++)e.dataBarChart.datasets[0].data.push(n[i]);else if("2019"==a)for(var s=e.dataLates.slice(12,24),o=0;o<s.length;o++)e.dataBarChart.datasets[0].data.push(s[o]);else if("2020"==a)for(var u=e.dataLates.slice(24,36),c=0;c<u.length;c++)e.dataBarChart.datasets[0].data.push(u[c]);else if("2021"==a)for(var d=e.dataLates.slice(36,42),l=0;l<d.length;l++)e.dataBarChart.datasets[0].data.push(d[l]);e.verifBarBool=1,e.seenCauses=!0},satisfByDate:function(e,t){e.satisfaction=null,e.infos.forEach((function(r){if(t.date==r.fields.column_1&&t.indicateurSelect==r.fields.column_2){var a=r.fields.column_4,n=r.fields.column_3,i=(a+n)/2;e.satisfaction=i.toFixed(1)}}))},causeRetByGare:function(e,t){var r=t.departCause,a=t.arriveeCause,n=t.dateCause;e.dataPieChart.datasets[0].data=[];for(var i=0;i<e.dataFields.length;i++)e.gareDepDate[i]==r&&e.gareArrDate[i]==a&&e.dateGares[i]==n&&(e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_externe.toFixed(1)),e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_gestion_gare.toFixed(1)),e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_gestion_trafic.toFixed(1)),e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_infra.toFixed(1)),e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_materiel_roulant.toFixed(1)),e.dataPieChart.datasets[0].data.push(e.dataFields[i].prct_cause_prise_en_charge_voyageurs.toFixed(1)));e.verifCauseBool=1,e.seenSatisf=!0},withoutDoublonDeparts:function(e){e.gareD=it.jj(e.gareD)},withoutDoublonCorrespondence:function(e){e.arrivalCorrespondence=it.jj(e.arrivalCorrespondence)},whithoutDoublonIndicators:function(e){e.indicateurs=it.jj(e.indicateurs)}},ct={correspondingLines:function(e,t){var r=e.commit;r("correspondingLines",t)},correspondingDates:function(e,t){var r=e.commit;r("correspondingDates",t)},correspondingLates:function(e,t){var r=e.commit;r("correspondingLates",t)},moyenneRetard:function(e,t){var r=e.commit;r("moyenneRetard",t)},satisfByDate:function(e,t){var r=e.commit;r("satisfByDate",t)},causeRetByGare:function(e,t){var r=e.commit;r("causeRetByGare",t)},withoutDoublonDeparts:function(e,t){var r=e.commit;r("withoutDoublonDeparts",t)},withoutDoublonCorrespondence:function(e,t){var r=e.commit;r("withoutDoublonCorrespondence",t)},whithoutDoublonIndicators:function(e,t){var r=e.commit;r("whithoutDoublonIndicators",t)}},dt=(0,re.MT)({state:st,getters:ot,mutations:ut,actions:ct}),lt=(r(9773),r(3249)),ft=(0,lt.Rd)();r(8783),r(3948);function pt(){return vt.apply(this,arguments)}function vt(){return vt=(0,j.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(461).then(r.t.bind(r,5933,23));case 2:t=e.sent,t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}});case 4:case"end":return e.stop()}}),e)}))),vt.apply(this,arguments)}r(7024);pt();var ht=(0,a.ri)(nt);ht.use(dt),ht.use(ft),ht.mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,i){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],i=e[d][2];for(var o=!0,u=0;u<a.length;u++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[u])}))?a.splice(u--,1):(o=!1,i<s&&(s=i));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"===typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"===typeof a.then)return a}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&n&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){s[e]=function(){return a[e]}}));return s["default"]=function(){return a},r.d(i,s),i}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/webfontloader-legacy.70d1fedf.js"}}(),function(){r.miniCssF=function(e){return"css/"+{143:"app",998:"chunk-vendors"}[e]+"."+{143:"a4ac3265",998:"41cb8e1f"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="projet_sncf:";r.l=function(a,n,i,s){if(e[a])e[a].push(n);else{var o,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+i){o=l;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+i),o.src=a),e[a]=[n];var f=function(t,r){o.onerror=o.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/projet_sncf/"}(),function(){var e={143:0};r.f.j=function(t,a){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(r,a){n=e[t]=[r,a]}));a.push(n[2]=i);var s=r.p+r.u(t),o=new Error,u=function(a){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,n[1](o)}};r.l(s,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,s=a[0],o=a[1],u=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(u)var d=u(r)}for(t&&t(a);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0;return r.O(d)},a=self["webpackChunkprojet_sncf"]=self["webpackChunkprojet_sncf"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2281)}));a=r.O(a)})();
//# sourceMappingURL=app-legacy.468940d8.js.map