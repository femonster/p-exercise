var str = '';
//type 运行: cng lng lcng 停运：scng slng slcng
var Items = [
	{"siteNum":"1","siteType":"slng","siteName":"张西河站","Level":"二级","siteAddress":"天镇县301省道张西河乡史家窑村东500米","company":"国新利用","Time":"2016.12","num":"4","info":"手续办理中"},
	{"siteNum":"2","siteType":"lng","siteName":"阳高夏家场站","Level":"二级","siteAddress":"阳高县北徐屯乡夏家场村S301省道旁","company":"国新利用","Time":"2020.6","num":"4","info":"手续不全"},
 	{"siteNum":"3","siteType":"lng","siteName":"神泉堡站","Level":"三级","siteAddress":"大同阳高县东小村镇孙启庄村，109国道北侧","company":"国新利用","Time":"2015.3","num":"4","info":"手续不全"},
	{"siteNum":"4","siteType":"slng","siteName":"新荣北站","Level":"二级","siteAddress":"大同市新荣区前井村北S204省道","company":"国新利用","Time":"2017.4","num":"4","info":"手续不全"},
	{"siteNum":"5","siteType":"slng","siteName":"双官屯站","Level":"二级","siteAddress":"大同市左云县张家场乡双官屯村西，109国道北侧","company":"国新利用","Time":"待运行","num":"4","info":"手续不全"},
	{"siteNum":"6","siteType":"slng","siteName":"三十里铺站","Level":"二级","siteAddress":"大同市大同县三十里铺东，301省道北侧","company":"国新利用","Time":"2016.11","num":"4","info":"手续不全"},
	{"siteNum":"7","siteType":"slng","siteName":"南窑站","Level":"三级","siteAddress":"怀仁市南窑村S206省道旁","company":"国新利用","Time":"未运行","num":"2","info":"手续不全"},
	//{"siteNum":"8","siteType":"lcng","siteName":"朔州北周庄镇站","Level":"二级","siteAddress":"山阴县067县道与206省道交叉口东150米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"9","siteType":"slcng","siteName":"朔州古城镇站","Level":"二级","siteAddress":"朔州市山阴县G336","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"10","siteType":"slng","siteName":"东坊城站","Level":"二级","siteAddress":"大同市浑源县东坊城乡郭家庄村，303省道南侧","company":"国新利用","Time":"2015.12","num":"2","info":"手续不全"},
	//
	//{"siteNum":"11","siteType":"lng","siteName":"东坊城站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"12","siteType":"slcng","siteName":"西沟站","Level":"二级","siteAddress":"朔州市山阴县G336","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"13","siteType":"lng","siteName":"灵丘古之河站","Level":"二级","siteAddress":"大同市灵丘县古之河村S336省道旁","company":"国新利用","Time":"2016.8","num":"4","info":"手续不全"},
	{"siteNum":"14","siteType":"slng","siteName":"西鄯河站","Level":"二级","siteAddress":"山阴县安荣乡西鄯河村S206省道北侧","company":"国新利用","Time":"2021.7.8","num":"4","info":"手续不全"},
	{"siteNum":"15","siteType":"lng","siteName":"金山铺站","Level":"二级","siteAddress":"繁峙县金山铺乡牛叫河村108国道路南","company":"国新利用","Time":"2020.7","num":"4","info":"手续不全"},
	{"siteNum":"16","siteType":"lng","siteName":"神堂堡站","Level":"三级","siteAddress":"繁峙县神堂堡乡红崖村108国道路南","company":"国新利用","Time":"2016.10","num":"2","info":"手续不全"},
	{"siteNum":"17","siteType":"lng","siteName":"东留属站","Level":"三级","siteAddress":"代县枣林镇东留属村108国道南","company":"国新利用","Time":"2015.10","num":"4","info":"手续不全"},
	{"siteNum":"18","siteType":"lng","siteName":"七里铺站","Level":"二级","siteAddress":"代县阳明堡镇七里铺村G108国道路南","company":"国新利用","Time":"2015.2.8","num":"4","info":"手续不全"},
	{"siteNum":"19","siteType":"lng","siteName":"阳明堡站","Level":"二级","siteAddress":"代县阳明堡108国道路北","company":"国新利用","Time":"2016.10","num":"4","info":"手续不全"},
	{"siteNum":"20","siteType":"lng","siteName":"西关站","Level":"二级","siteAddress":"代县上官镇外环路108国道路南","company":"国新利用","Time":"2017.6","num":"4","info":"手续不全"},
	//
	{"siteNum":"21","siteType":"lng","siteName":"阳方口站","Level":"二级","siteAddress":"宁武县阳方口镇翼家庄村206省道","company":"国新利用","Time":"2016.10.31","num":"4","info":"手续不全"},
	//删{"siteNum":"138","siteType":"lng","siteName":"阳方村站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"22","siteType":"slcng","siteName":"神池义井站","Level":"2级","siteAddress":"神池县太平庄乡省道S305南侧","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"23","siteType":"lng","siteName":"五寨县三岔站","Level":"2级","siteAddress":"忻州市五寨县三岔镇","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"24","siteType":"lng","siteName":"丈子沟站","Level":"二级","siteAddress":"五寨县韩家楼乡丈子沟村省宝县公路G338国道旁","company":"国新利用","Time":"2016.11","num":"4","info":"手续不全"},
	{"siteNum":"25","siteType":"lng","siteName":"小河头站","Level":"二级","siteAddress":"五寨县小河头乡小河头村209国道西","company":"国新利用","Time":"2016.11","num":"4","info":"手续不全"},
	//删{"siteNum":"26","siteType":"cng","siteName":"五寨前所站","Level":"2级","siteAddress":"忻州市五寨县马五线","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"27","siteType":"lng","siteName":"保德站","Level":"三级","siteAddress":"保德县站高速出口连接与沿黄公路交汇处","company":"燃气集团","Time":"2016.1","num":"二机二枪","info":"手续不全"},
	//删{"siteNum":"28","siteType":"lng","siteName":"保德桥头站","Level":"2级","siteAddress":"忻州市保德县神保线","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"29","siteType":"slng","siteName":"神木敏盖兔站","Level":"三级","siteAddress":"榆林市神木县大柳塔镇敏盖兔村G336国道旁","company":"国新利用","Time":"2019.4","num":"2","info":"车流量少"},
	{"siteNum":"30","siteType":"lng","siteName":"燕峁站","Level":"三级","siteAddress":"榆林市神木县店塔镇燕峁村G338国道旁","company":"国新利用","Time":"2018.4","num":"2","info":"手续不全"},
	//
	{"siteNum":"31","siteType":"slng","siteName":"凤凰塔站","Level":"2级","siteAddress":"榆林市神木县沙峁镇凤凰塔村神盘公路省道旁","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"32","siteType":"lng","siteName":"忻州安塘站","Level":"2级","siteAddress":"忻州市岢岚县G209","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"33","siteType":"lng","siteName":"忻州西会站","Level":"2级","siteAddress":"忻州市岢岚县G209（呼北线）","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"34","siteType":"lng","siteName":"岢岚县五里水站","Level":"2级","siteAddress":"忻州市岢岚县五里水村神舟高速口","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"35","siteType":"slng","siteName":"原平大牛站","Level":"2级","siteAddress":"原平大牛镇太忻线","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"36","siteType":"slcng","siteName":"五台县石咀站","Level":"2级","siteAddress":"山西省忻州市五台县怀镇","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"37","siteType":"lng","siteName":"高洪口站","Level":"二级","siteAddress":"五台县高洪口S310省道路南","company":"国新利用","Time":"2015","num":"4","info":"手续不全"},
	//删{"siteNum":"38","siteType":"lng","siteName":"阳泉北峪口站","Level":"2级","siteAddress":"孟县闫贾线","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"39","siteType":"cng","siteName":"忻州和平街站","Level":"2级","siteAddress":"忻府区和平西街与通岗北路交叉口往北","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"40","siteType":"cng","siteName":"忻州光明街站","Level":"2级","siteAddress":"忻州市忻府区","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//
	//删{"siteNum":"41","siteType":"slcng","siteName":"利润村油气站","Level":"2级","siteAddress":"忻州市静乐县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"42","siteType":"scng","siteName":"静乐胡家沟站","Level":"2级","siteAddress":"静乐县神裕沟乡胡家沟村","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"43","siteType":"scng","siteName":"岚县赵朝舍站","Level":"2级","siteAddress":"岚县赵朝舍村","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"44","siteType":"slcng","siteName":"岚县下会站","Level":"2级","siteAddress":"岚县252省道附近","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"45","siteType":"lng","siteName":"大㿻站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"46","siteType":"lng","siteName":"故县村站","Level":"2级","siteAddress":"阳曲县东黄水镇故县村","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"47","siteType":"lng","siteName":"白家庄站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"48","siteType":"lcng","siteName":"寿阳县站","Level":"2级","siteAddress":"晋中市寿阳县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"49","siteType":"lng","siteName":"阳泉东梁站","Level":"2级","siteAddress":"阳泉市盂县314省道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"50","siteType":"slcng","siteName":"寿阳县付家垴站","Level":"2级","siteAddress":"寿阳县付家垴村","company":"国新利用","Time":"","num":"","info":"手续不全"},
//
	{"siteNum":"51","siteType":"lng","siteName":"东杜站","Level":"二级","siteAddress":"盂县路家村镇东杜村2016省道西","company":"国新利用","Time":"2016.1.13","num":"3","info":"手续不全"},
	//删{"siteNum":"52","siteType":"lng","siteName":"阳泉阳盂路站","Level":"2级","siteAddress":"阳泉市盂县S214","company":"国新利用","Time":"","num":"","info":"手续不全"},
 	//删{"siteNum":"53","siteType":"lng","siteName":"巨城站","Level":"1级","siteAddress":"平定县巨城镇水峪村307复线南","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"54","siteType":"lng","siteName":"阳泉娘子关站","Level":"2级","siteAddress":"平定县S307","company":"用电超标","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"55","siteType":"scng","siteName":"南庄站","Level":"2级","siteAddress":"平定县广阳路南庄村口南一公里市政公路旁","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"56","siteType":"lcng","siteName":"阳泉平定西外环站","Level":"2级","siteAddress":"平定县冠山镇西外环路杨家沟段","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"57","siteType":"lng","siteName":"冠山站","Level":"2级","siteAddress":"平定县冠山镇南磛石村东307国道南","company":"国新利用","Time":"2015.10","num":"3","info":"手续不全"},
	//删{"siteNum":"58","siteType":"lng","siteName":"阳泉西效站","Level":"二级","siteAddress":"山西","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"59","siteType":"scng","siteName":"太原钢园路站","Level":"CNG标准站","siteAddress":"尖草坪区钢园路15号","company":"燃气集团","Time":"2011.04","num":"8枪","info":"手续不全"},
	//删{"siteNum":"60","siteType":"scng","siteName":"西温庄站","Level":"CNG母站+标准站","siteAddress":"小店区西温庄武洛街","company":"燃气集团","Time":"2007.11","num":"8枪","info":"手续不全"},
	//
	//删{"siteNum":"61","siteType":"scng","siteName":"太原化章街站","Level":"三级","siteAddress":"小店区化章街10号","company":"国新利用","Time":"2013.4","num":"4","info":"手续不全"},
	//删{"siteNum":"62","siteType":"slng","siteName":"景尚站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"63","siteType":"slng","siteName":"寿阳县西洛站","Level":"2级","siteAddress":"晋中市寿阳县317省道南100米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"64","siteType":"slcng","siteName":"古交市站","Level":"2级","siteAddress":"古交市G241国道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"65","siteType":"lng","siteName":"义望站","Level":"2级","siteAddress":"吕梁市交城县夏家营镇义望村G307国道旁","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"66","siteType":"lng","siteName":"牛家堡站","Level":"二级","siteAddress":"晋中市祁县东观镇牛家堡村208国道","company":"国新利用","Time":"2015.10.8","num":"4","info":"手续不全"},
	{"siteNum":"67","siteType":"lng","siteName":"东观站","Level":"三级","siteAddress":"晋中市祁县东观镇东观村108国道","company":"国新利用","Time":"2015.8","num":"4","info":"手续不全"},
	//删{"siteNum":"68","siteType":"lcng","siteName":"太谷范村站","Level":"2级","siteAddress":"榆次区太古街161号","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"69","siteType":"lcng","siteName":"阳泉昔阳新源站","Level":"2级","siteAddress":"昔阳县G207","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"70","siteType":"lng","siteName":"柳林母站","Level":"CNG母站","siteAddress":"吕梁市柳林县八盘山村G307","company":"燃气集团","Time":"2014.01","num":"5枪","info":"手续不全"},
	//
	//删{"siteNum":"71","siteType":"lng","siteName":"南大井站","Level":"2级","siteAddress":"中阳县枝柯镇南大井村S340省道路南","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"72","siteType":"lng","siteName":"中阳城北站","Level":"2级","siteAddress":"吕梁市中阳县G209","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"73","siteType":"slng","siteName":"祁县昭馀站","Level":"二级","siteAddress":"晋中市祁县G108（京昆线）","company":"国新利用","Time":"2013.12","num":"4","info":"手续不全"},
	{"siteNum":"74","siteType":"slng","siteName":"高城站","Level":"二级","siteAddress":"祁县城赵镇高城村村口南200米东，108国道东侧","company":"国新利用","Time":"2016.7","num":"4","info":"手续不全"},
	{"siteNum":"75","siteType":"lng","siteName":"河北村站","Level":"二级","siteAddress":"汾阳市栗家庄乡河北村S340省道","company":"国新利用","Time":"2016.11","num":"4","info":"手续不全"},
	//删{"siteNum":"76","siteType":"scng","siteName":"吕梁司马站","Level":"2级","siteAddress":"孝义市243省道东100米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"77","siteType":"lng","siteName":"吕梁南姚站","Level":"2级","siteAddress":"吕梁市孝义市S243","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"78","siteType":"lng","siteName":"城赵站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"79","siteType":"lng","siteName":"平遥液化108站","Level":"2级","siteAddress":"晋中市平遥县371县道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"80","siteType":"lng","siteName":"平遥液化平泰站","Level":"2级","siteAddress":"晋中市平遥县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//
	{"siteNum":"81","siteType":"slng","siteName":"榆林站","Level":"二级","siteAddress":"晋中市祁县东观镇榆林村208国道","company":"国新利用","Time":"2014.10","num":"6","info":"手续不全"},
	{"siteNum":"82","siteType":"slng","siteName":"谷峪口站","Level":"二级","siteAddress":"祁县来远镇谷峪口村G208国道东侧","company":"国新利用","Time":"2016.10 ","num":"6","info":"手续不全"},
	{"siteNum":"83","siteType":"sclng","siteName":"榆社县站","Level":"2级","siteAddress":"榆社县G519（东子线）","company":"国新利用","Time":"","num":""},
	{"siteNum":"84","siteType":"lng","siteName":"鱼跃口站","Level":"三级","siteAddress":"左权县辽阳镇鱼跃口村往北207国道旁","company":"燃气集团","Time":"2017.03","num":"CNG二机四枪 / LNG二机二枪","info":"手续不全"},
	//删{"siteNum":"85","siteType":"lng","siteName":"南白村站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"86","siteType":"slng","siteName":"新店站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"87","siteType":"slng","siteName":"虒亭站","Level":"三级","siteAddress":"长治市襄垣县G208（二长线）","company":"国新利用","Time":"2015.11","num":"2","info":"手续不全"},
	//删{"siteNum":"88","siteType":"lng","siteName":"霍州液化灵石站","Level":"2级","siteAddress":"霍州市西张北村","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"89","siteType":"lng","siteName":"霍州液化许村站","Level":"2级","siteAddress":"霍州市108国道与108国道交叉口东北方向130米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"90","siteType":"scng","siteName":"临汾乔家湾站","Level":"2级","siteAddress":"临汾市蒲罗克县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//
	//删{"siteNum":"91","siteType":"lng","siteName":"临汾古阳站","Level":"2级","siteAddress":"临汾市古县古阳镇323省道白素村附近","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"92","siteType":"slng","siteName":"李元站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	{"siteNum":"93","siteType":"lng","siteName":"襄垣站","Level":"LNG三级","siteAddress":"长治市襄垣县","company":"燃气集团","Time":"2015.7","num":"二机二枪","info":"手续不全"},
	{"siteNum":"94","siteType":"lng","siteName":"夏店坡底站","Level":"三级","siteAddress":"夏店镇夏店村208国道","company":"国新利用","Time":"2018","num":"2","info":"手续不全"},
	{"siteNum":"95","siteType":"lng","siteName":"襄垣站","Level":"二级","siteAddress":"襄垣县长安大道与208国道交叉口东300米","company":"国新利用","Time":"2014.11","num":"2+2","info":"手续不全"},
	//删{"siteNum":"96","siteType":"lng","siteName":"中联山西襄垣站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"97","siteType":"lng","siteName":"屯留常西站","Level":"2级","siteAddress":"长治市襄垣县G208（二长线）","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"98","siteType":"lng","siteName":"仵桥站","Level":"二级","siteAddress":"长治市黎城县黎侯镇仵桥村G309国道路东","company":"国新利用","Time":"2016.12.16","num":"4","info":"手续不全"},
	//删{"siteNum":"99","siteType":"slng","siteName":"远东宏城站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"100","siteType":"slcng","siteName":"南浒站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//
	//删{"siteNum":"101","siteType":"lcng","siteName":"黎岭站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"102","siteType":"slng","siteName":"长治县荫城站","Level":"2级","siteAddress":"长治市上党区S226（长陵线）","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"103","siteType":"lng","siteName":"长治县南宋站","Level":"2级","siteAddress":"长治市上党区G208（锡海线）","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"104","siteType":"slng","siteName":"高村站","Level":"二级","siteAddress":"长治市上党区郝家庄乡高村S326省道下行线路北","company":"国新利用","Time":"2017.11","num":"4","info":"修路"},
	//删{"siteNum":"105","siteType":"lng","siteName":"旧县站","Level":"2级","siteAddress":"古县旧县镇309国道北50米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"106","siteType":"slng","siteName":"临汾土门站","Level":"2级","siteAddress":"尧都区土门高速口往东800米路南","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"107","siteType":"lcng","siteName":"临汾西环站","Level":"2级","siteAddress":"尧都区屯里镇沟上西大街临汾城北汽车站","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"108","siteType":"slcng","siteName":"张庄站","Level":"2级","siteAddress":"侯马市G108国道","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"109","siteType":"lng","siteName":"河津站","Level":"二级","siteAddress":"河津市城区街道河津中学西850米","company":"燃气集团","Time":"","num":"","info":"手续不全"},
	{"siteNum":"110","siteType":"lng","siteName":"河津西站","Level":"二级","siteAddress":"运城市河津市阳村乡西辛封村G108国道附近","company":"国新利用","Time":"2019.7.22","num":"4","info":"手续不全"},
	//
	//删{"siteNum":"111","siteType":"lcng","siteName":"河津站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//删{"siteNum":"112","siteType":"cng","siteName":"河津市209国道站","Level":"2级","siteAddress":"樊家庄村口处","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"113","siteType":"slcng","siteName":"万荣县薛李站","Level":"2级","siteAddress":"万荣县薛李村西高速口","company":"国新利用","Time":"","num":""},
	//{"siteNum":"114","siteType":"scng","siteName":"新绛县煤化工业园站","Level":"2级","siteAddress":"新绛县三泉镇北社村南","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"115","siteType":"lcng","siteName":"新绛县108国道站","Level":"2级","siteAddress":"新绛县G108国道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"116","siteType":"slng","siteName":"新绛站","Level":"2级","siteAddress":"运城市新绛县古交镇桥西村G108国道旁","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"117","siteType":"scng","siteName":"稷山县杨赵液化站","Level":"2级","siteAddress":"稷山县G108国道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"118","siteType":"slng","siteName":"曲沃立恒钢厂站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	{"siteNum":"119","siteType":"lng","siteName":"秦岗站","Level":"二级","siteAddress":"临汾市曲沃县史村镇秦岗村S331省道路南","company":"国新利用","Time":"2017.5","num":"4","info":"手续不全"},
	//删{"siteNum":"120","siteType":"slcng","siteName":"曲沃高显站","Level":"2级","siteAddress":"侯马市G108（京昆线）","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//
	//{"siteNum":"121","siteType":"slcng","siteName":"临汾张庄站","Level":"2级","siteAddress":"侯马市G108国道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"122","siteType":"lng","siteName":"秦岗站","Level":"2级","siteAddress":"山西","company":"用电超标","Time":"","num":""},
	{"siteNum":"123","siteType":"slng","siteName":"牢寨站","Level":"二级","siteAddress":"临汾市翼城县隆化镇牢寨村S331省道路南","company":"国新利用","Time":"2017.8","num":"4","info":"手续未办理"},
	//删{"siteNum":"124","siteType":"lng","siteName":"沁水龙港站","Level":"2级","siteAddress":"沁水县331省道南100米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"125","siteType":"lcng","siteName":"晋城大宁站","Level":"2级","siteAddress":"晋城市阳城县八芹线北50米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"126","siteType":"slcng","siteName":"下孔站","Level":"2级","siteAddress":"晋城市阳城县332省道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"127","siteType":"lcng","siteName":"泽州县李寨站","Level":"2级","siteAddress":"晋城市泽州县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"128","siteType":"slng","siteName":"泽州县巴公镇站","Level":"2级","siteAddress":"晋城市泽州县龙司线与巴马路交叉口往南70米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//{"siteNum":"129","siteType":"slcng","siteName":"金村站","Level":"2级","siteAddress":"晋城市泽州县","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"130","siteType":"slng","siteName":"犁川站","Level":"2级","siteAddress":"山西","company":"国新利用","Time":"","num":""},
	//
	//删{"siteNum":"131","siteType":"lcng","siteName":"万荣县薛李站","Level":"2级","siteAddress":"万荣县薛李村西高速口","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"132","siteType":"lcng","siteName":"闻喜县丁店村站","Level":"2级","siteAddress":"闻喜县桐城镇丁村店","company":"国新利用","Time":"","num":"","info":"手续不全"},
	{"siteNum":"133","siteType":"lng","siteName":"夏县站","Level":"二级","siteAddress":"运城市夏县水头镇西下晁村S235省道旁","company":"国新利用","Time":"2019.11.14","num":"4","info":"手续不全"},
	{"siteNum":"134","siteType":"lcng","siteName":"垣曲县西峰山站","Level":"二级","siteAddress":"垣曲县古毛线","company":"国新城燃","Time":"2016.1","num":"4","info":"手续不全"},
	//{"siteNum":"135","siteType":"scng","siteName":"运城市陶村站","Level":"2级","siteAddress":"盐湖区广丰路与235省道交叉口西南200米","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"136","siteType":"slng","siteName":"永济站","Level":"2级","siteAddress":"永济市赵杏村小风县乡道","company":"国新利用","Time":"","num":"","info":"手续不全"},
	//删{"siteNum":"137","siteType":"lcng","siteName":"平陆县开发区站","Level":"2级","siteAddress":"平陆县经济开发区盘南村209国道东","company":"国新利用","Time":"","num":"","info":"手续不全"},

]
$.each(Items,function (i, item) {
    str = '<li id='+'point'+item.siteNum+' class='+item.siteType+'>'+
        '<div class="point"></div>'+
//	    '<div class="name">'+item.siteNum+'</div>'+
        '<div class="tooltip">'+
        '<h1 class="text-center f180 fcblue">'+item.siteName+'</h1>'+
        '<table class="table"><tr>'+
        '<td class="sname">站点地址:</td>'+
        '<td >'+item.siteAddress+'</td></tr><tr>'+
        '<td>隶属公司:</td>'+
        '<td >'+item.company+'</td></tr><tr>'+
        '<td>站点等级:</td>'+
        '<td >'+item.Level+'</td></tr><tr>'+
        '<td>建成时间:</td>'+
        '<td >'+item.Time+'</td></tr><tr>'+
         '<td>加液机数量:</td>'+
        '<td >'+item.num+'</td></tr>';
    // 
    if(item.siteType=='slng'||item.siteType=='scng'||item.siteType=='slcng'){
     		str=str+'<tr><td>停用原因：</td>'+
     		 '<td >'+item.info+'</td></tr>'
     	};
     //
     str=str+'</table></div></li>';
    $('#mapPoint').append(str);
   

});