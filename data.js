// ──────────────────────────────────────────
// 中国历史时间轴 · 数据层
// 字段说明：
//   dynastyData      — 主时间轴朝代节点
//   subTimelineData  — 次级时间轴断代事件（按朝代 ID 索引）
//   key_figures      — 核心历史人物
//   artifacts        — 代表性文物 / 出土遗迹
// ──────────────────────────────────────────

const dynastyData = [
  { id: 'shennong',   name: '三皇五帝',   start: '约前3000', end: '约前2070', pos: 2, isMyth: true },
  { id: 'xia',        name: '夏',         start: '约前2070', end: '约前1600', pos: 6  },
  { id: 'shang',      name: '商',         start: '约前1600', end: '约前1046', pos: 10 },
  { id: 'xizhou',     name: '西周',       start: '约前1046', end: '前771',    pos: 14 },
  { id: 'dongzhou',   name: '东周',       start: '前770',    end: '前221',    pos: 18 },
  { id: 'qin',        name: '秦',         start: '前221',    end: '前207',    pos: 22 },
  { id: 'xihan',      name: '西汉',       start: '前202',    end: '公元9',    pos: 26 },
  { id: 'xin',        name: '新朝',       start: '公元9',    end: '23',       pos: 30 },
  { id: 'donghan',    name: '东汉',       start: '25',       end: '220',      pos: 34 },
  { id: 'sanguo',     name: '三国',       start: '220',      end: '280',      pos: 39 },
  { id: 'xijin',      name: '西晋',       start: '265',      end: '316',      pos: 43 },
  { id: 'dongjin',    name: '东晋十六国', start: '317',      end: '420',      pos: 47 },
  { id: 'nanbei',     name: '南北朝',     start: '420',      end: '589',      pos: 51 },
  { id: 'sui',        name: '隋',         start: '581',      end: '618',      pos: 55 },
  { id: 'tang',       name: '唐',         start: '618',      end: '907',      pos: 59 },
  { id: 'wudai',      name: '五代十国',   start: '907',      end: '960',      pos: 64 },
  { id: 'beisong',    name: '北宋',       start: '960',      end: '1127',     pos: 68 },
  { id: 'nansong',    name: '南宋',       start: '1127',     end: '1279',     pos: 72 },
  { id: 'jin',        name: '金',         start: '1115',     end: '1234',     pos: 76 },
  { id: 'yuan',       name: '元',         start: '1271',     end: '1368',     pos: 80 },
  { id: 'ming',       name: '明',         start: '1368',     end: '1644',     pos: 85 },
  { id: 'qing',       name: '清',         start: '1644',     end: '1912',     pos: 90 },
  { id: 'minguo',     name: '中华民国',   start: '1912',     end: '1949',     pos: 95 },
  { id: 'zhongguo',   name: '中华人民共和国', start: '1949', end: '至今',    pos: 99 },
];

const subTimelineData = {
  shennong: [
    {
      name: '燧人氏',
      era: '约前5000',
      desc: '传说燧人氏钻木取火，教民熟食，结束了"茹毛饮血"的时代，被尊为三皇之首。考古学表明，人类对火的系统掌控可追溯至旧石器时代晚期——北京周口店遗址已发现厚达数米的灰烬层；进入新石器时代后，裴李岗文化（约前6000—前5000）的先民已将火广泛用于制陶、农耕与聚落取暖，火的管理与文明演进深度绑定。',
      key_figures: ['燧人氏'],
      artifacts: ['周口店灰烬层遗迹', '裴李岗文化陶窑遗址']
    },
    {
      name: '伏羲氏',
      era: '约前4500',
      desc: '伏羲创八卦以通神明之德，结绳为网以教佃渔，制嫁娶之礼以正人伦，被视为华夏人文始祖。从考古学看，贾湖遗址（约前7000—前5500）出土的刻符龟甲已显现原始符号系统的萌芽，骨笛的七声音阶暗示早期仪式活动的高度复杂化；仰韶文化（约前5000—前3000）半坡类型的鱼纹、网纹彩陶则直观印证了渔猎经济在新石器时代中期的主导地位。',
      key_figures: ['伏羲', '女娲'],
      artifacts: ['贾湖刻符龟甲', '贾湖骨笛', '仰韶文化半坡鱼纹彩陶盆']
    },
    {
      name: '女娲氏',
      era: '约前4000',
      desc: '女娲抟土造人、炼五色石补天、断鳌足以立四极，是华夏神话中最核心的创世母神。现代学者多将其理解为母系氏族时代集体记忆的神话折射——仰韶文化早期的多人二次合葬墓、大地湾遗址（约前5800—前3000）地面绘制的人物形象、红山文化（约前4700—前2900）东山嘴与牛河梁的"女神庙"及孕妇陶塑像，均昭示着新石器时代中晚期普遍存在的女性崇拜与生殖崇拜。',
      key_figures: ['女娲', '伏羲'],
      artifacts: ['红山文化孕妇陶塑像', '牛河梁女神头像', '大地湾地画', '仰韶文化尖底瓶']
    },
    {
      name: '神农氏',
      era: '约前3500',
      desc: '神农尝百草以疗民疾，制耒耜以教天下耕种，日中为市以通有无，被奉为农业与医药之祖。考古学中，长江流域的河姆渡文化（约前5000—前3300）已发现近七十吨人工栽培稻遗存与骨耜；黄河流域的仰韶文化半坡遗址出土了大量石磨盘、石镰及粟类碳化物；跨湖桥遗址（约前6000—前5400）更出土了最早的草药煎煮陶釜残片，印证了采集—农耕转型期先民对植物药性的早期探索。',
      key_figures: ['炎帝（神农氏）', '赤松子'],
      artifacts: ['河姆渡骨耜', '河姆渡稻谷堆积层', '半坡遗址石磨盘', '跨湖桥草药陶釜残片', '仰韶文化彩陶人面鱼纹盆']
    },
    {
      name: '黄帝',
      era: '约前2700',
      desc: '黄帝轩辕氏修德振兵、抚万民、度四方，于阪泉三战而后胜炎帝，于涿鹿擒杀蚩尤，被诸侯尊为天子，是华夏统一国家雏形的神话投射。仓颉造字、嫘祖养蚕、岐伯论医、大挠作甲子、伶伦定律吕，构成了中华文明体系性建构的传说叙事。考古学对应阶段为龙山文化（约前3000—前1900）与红山文化晚期——红山文化C形玉龙标志着龙图腾崇拜的成熟；仰韶文化濮阳西水坡M45号墓出土的蚌塑龙虎北斗图，则是最早的"四象"天文学实证；甘肃秦安大地湾F901号大型房址（约前3000）已具备"前堂后室"的宫室雏形。',
      key_figures: ['黄帝（轩辕氏）', '嫘祖', '仓颉', '岐伯', '风后', '力牧', '常先', '大鸿', '伶伦', '大挠'],
      artifacts: ['红山文化C形碧玉龙', '濮阳西水坡蚌塑龙虎墓', '大地湾F901大型房址', '仰韶文化花瓣纹彩陶', '龙山文化蛋壳黑陶杯']
    },
    {
      name: '颛顼',
      era: '约前2500',
      desc: '颛顼高阳氏"绝地天通"——命重、黎分掌天地，禁绝民间巫觋随意沟通鬼神，将宗教祭祀权力收归部落联盟首领，是中国史上最早的宗教集权改革。又制《颛顼历》，以孟春为岁首，开后世历法体系之先河。考古学层面，龙山文化时期（约前3000—前1900）大型祭祀中心的出现、山西陶寺遗址（约前2300—前1900）观象台的营建，以及良渚文化（约前3300—前2000）玉琮上的神人兽面纹所体现的通天仪式，均为"绝地天通"式权力垄断提供了器物佐证。',
      key_figures: ['颛顼（高阳氏）', '重', '黎', '共工'],
      artifacts: ['龙山文化玉琮', '良渚文化神人兽面纹玉琮', '陶寺遗址观象台']
    },
    {
      name: '帝喾',
      era: '约前2400',
      desc: '帝喾高辛氏"顺天之义，知民之急"，"仁而威，惠而信，修身而天下服"，被《史记》列为黄帝曾孙、商周共祖。其四妃——姜嫄生弃（周祖）、简狄生契（商祖）、庆都生尧、常仪生挚——的谱系叙事，实质上反映了龙山时代晚期各区域文化集团间的政治联姻与血缘整合。文献中帝喾"历日月而迎送之"的天文观测传统，在陶寺、石峁等龙山时代大型聚落的系统性天象观测设施中得到呼应。',
      key_figures: ['帝喾（高辛氏）', '姜嫄', '简狄', '庆都', '常仪', '弃（后稷）', '契'],
      artifacts: ['陶寺遗址朱书扁壶', '石峁遗址玉人头像', '龙山文化黑陶罍']
    },
    {
      name: '尧',
      era: '约前2300',
      desc: '尧"其仁如天，其知如神"，首创禅让——不以天下私其子丹朱，而咨询四岳择舜继位，被儒家奉为"天下为公"的典范。又命羲和四兄弟分赴四方观测日月星辰以定四时岁功，制定一年三百有六旬有六日之历。考古学上，陶寺遗址（约前2300—前1900，晋南）被多数学者认定为"尧都平阳"——其天象观测台以夯土柱缝观测日出方位确定二十个节令，M22号王级大墓出土的圭表组合、玉璇玑、彩绘蟠龙纹陶盘及朱书"文尧"扁壶，为尧舜时代从"传说"走向"信史"提供了关键线索。',
      key_figures: ['尧（陶唐氏）', '羲和', '羲仲', '羲叔', '和仲', '和叔', '鲧', '驩兜', '四岳', '许由'],
      artifacts: ['陶寺遗址观象台', '陶寺朱书扁壶', '彩绘蟠龙纹陶盘', '陶寺M22圭表', '陶寺铜铃']
    },
    {
      name: '舜',
      era: '约前2200',
      desc: '舜以孝德闻于天下，尧举之于畎亩之中，历山之人让畔，雷泽之人让居，河滨之器不苦窳。摄政后流四凶、举八元八恺，命禹平水土、弃播百谷、契敷五教、皋陶作刑、伯夷典三礼，开创了中国最早的职官体系雏形。禅位于禹，终成三代之序。考古学对应阶段为陶寺遗址中晚期至龙山文化末——陶寺晚期M22大墓虽已遭盗扰仍出土大量玉器、漆木器，暗示社会分层与权力世袭倾向的加剧；同时期的陕北石峁古城（约前2300—前1800）以石墙、瓮城、玉器窖藏和燔祭坑，展示了北方集团与中原集团的激烈竞争，正是"舜流四凶""禹征三苗"等文献所载部落战争的历史背景。',
      key_figures: ['舜（有虞氏）', '禹', '皋陶', '契', '后稷', '伯夷', '夔', '龙', '垂', '益', '四岳', '商均'],
      artifacts: ['陶寺遗址M22玉兽面', '石峁古城石雕人面', '石峁玉器窖藏', '龙山文化黑陶高柄杯', '陶寺M22漆木器遗存']
    },
  ],
  xia: [
    { name: '禹',       era: '约前2070', desc: '治水功成·建夏',        key_figures: ['禹', '启'],        artifacts: ['二里头遗址'] },
    { name: '启',       era: '',         desc: '家天下·世袭始',        key_figures: ['启', '有扈氏'],    artifacts: [] },
    { name: '太康失国', era: '',         desc: '后羿代夏',             key_figures: ['太康', '后羿', '寒浞'], artifacts: [] },
    { name: '少康中兴', era: '',         desc: '复国·夏道复兴',        key_figures: ['少康'],           artifacts: [] },
    { name: '桀',       era: '约前1600', desc: '暴虐亡国·商汤伐夏',    key_figures: ['桀', '商汤', '妺喜'], artifacts: [] },
  ],
  shang: [
    { name: '商汤',     era: '约前1600', desc: '伐夏建商·作汤誓',      key_figures: ['商汤', '伊尹'],    artifacts: ['汤誓'] },
    { name: '盘庚',     era: '约前1300', desc: '迁都于殷·中兴商朝',    key_figures: ['盘庚'],           artifacts: ['殷墟遗址', '甲骨文'] },
    { name: '武丁',     era: '约前1250', desc: '武丁盛世·妇好征伐',    key_figures: ['武丁', '妇好', '傅说'], artifacts: ['后母戊鼎', '妇好墓'] },
    { name: '纣王',     era: '约前1075', desc: '暴虐失国·牧野之战',    key_figures: ['帝辛', '妲己', '比干'], artifacts: [] },
  ],
  xizhou: [
    { name: '武王伐纣', era: '约前1046', desc: '牧野之战·周朝建立',    key_figures: ['武王', '姜子牙', '周公'], artifacts: ['利簋'] },
    { name: '周公摄政', era: '',         desc: '制礼作乐·分封诸侯',    key_figures: ['周公旦', '召公奭'], artifacts: ['周礼'] },
    { name: '成康之治', era: '',         desc: '刑措不用·天下安宁',    key_figures: ['成王', '康王'],    artifacts: [] },
    { name: '国人暴动', era: '前841',    desc: '厉王出奔·共和行政',    key_figures: ['厉王', '召穆公'],  artifacts: ['遂公盨'] },
    { name: '宣王中兴', era: '前827',    desc: '北伐猃狁·南征荆蛮',    key_figures: ['宣王', '尹吉甫'],  artifacts: ['兮甲盘'] },
    { name: '幽王',     era: '前781',    desc: '烽火戏诸侯·犬戎灭周',  key_figures: ['幽王', '褒姒'],    artifacts: [] },
  ],
  dongzhou: [
    { name: '春秋时期', era: '前770-前476', type: 'group', subId: 'chunqiu' },
    { name: '战国时期', era: '前475-前221', type: 'group', subId: 'zhanguo' },
  ],
  qin: [
    { name: '秦始皇',   era: '前221',    desc: '统一六国·始称皇帝',    key_figures: ['嬴政', '李斯', '王翦'], artifacts: ['秦始皇陵', '秦诏版'] },
    { name: '废分封',   era: '',         desc: '行郡县·书同文·车同轨',  key_figures: ['李斯'],           artifacts: ['琅琊台刻石', '秦权'] },
    { name: '焚书坑儒', era: '前213',    desc: '李斯献策·思想统制',    key_figures: ['李斯', '扶苏'],    artifacts: [] },
    { name: '始皇驾崩', era: '前210',    desc: '沙丘之变·赵高专权',    key_figures: ['嬴政', '赵高', '李斯'], artifacts: [] },
    { name: '陈胜起义', era: '前209',    desc: '大泽乡揭竿·天下响应',   key_figures: ['陈胜', '吴广', '项梁'], artifacts: [] },
    { name: '秦亡',     era: '前207',    desc: '刘邦入关·子婴献玺',    key_figures: ['子婴', '刘邦', '项羽'], artifacts: [] },
    { name: '楚汉争霸', era: '前206-前202', desc: '项羽分封十八路诸侯·刘邦暗度陈仓·垓下之围', key_figures: ['项羽', '刘邦', '韩信', '张良', '萧何'], artifacts: [] },
  ],
  xihan: [
    { name: '刘邦建汉', era: '前202',    desc: '楚汉争霸·定都长安',    key_figures: ['刘邦', '萧何', '韩信'], artifacts: ['汉并天下瓦当'] },
    { name: '文景之治', era: '前180-前141', desc: '轻徭薄赋·与民休息', key_figures: ['文帝', '景帝', '贾谊'], artifacts: ['马王堆帛书'] },
    { name: '汉武帝',   era: '前141-前87',  desc: '独尊儒术·开疆拓土', key_figures: ['刘彻', '卫青', '霍去病'], artifacts: [] },
    { name: '张骞出使', era: '前138',    desc: '凿空西域·丝绸之路',    key_figures: ['张骞', '汉武帝'],   artifacts: ['丝绸之路遗迹'] },
    { name: '昭宣中兴', era: '前87-前49', desc: '吏治清明·匈奴来朝',   key_figures: ['宣帝', '霍光'],    artifacts: [] },
    { name: '王莽篡汉', era: '公元9',    desc: '外戚代汉·西汉亡',      key_figures: ['王莽', '孺子婴'],  artifacts: [] },
  ],
  xin: [
    { name: '王莽称帝', era: '公元9',    desc: '代汉立新·托古改制',    key_figures: ['王莽'],           artifacts: ['新莽铜嘉量'] },
    { name: '王田私属', era: '',         desc: '禁奴婢买卖·土地国有',   key_figures: ['王莽'],           artifacts: [] },
    { name: '绿林赤眉', era: '17',       desc: '饥民起义·天下大乱',    key_figures: ['王匡', '樊崇'],    artifacts: [] },
    { name: '新朝覆灭', era: '23',       desc: '义军入长安·王莽被杀',   key_figures: ['王莽', '刘秀'],    artifacts: [] },
  ],
  donghan: [
    { name: '光武中兴', era: '25',       desc: '刘秀称帝·定都洛阳',    key_figures: ['刘秀', '邓禹'],    artifacts: [] },
    { name: '明章之治', era: '57-88',    desc: '吏治清明·佛法东传',    key_figures: ['明帝', '章帝'],    artifacts: ['白马寺'] },
    { name: '蔡伦造纸', era: '105',      desc: '改进造纸术·文化传播',   key_figures: ['蔡伦'],           artifacts: ['蔡侯纸'] },
    { name: '张衡地动仪', era: '132',    desc: '候风地动仪·科技巅峰',   key_figures: ['张衡'],           artifacts: ['地动仪复原模型'] },
    { name: '黄巾起义', era: '184',      desc: '张角太平道·天下大乱',   key_figures: ['张角', '张宝', '张梁'], artifacts: [] },
    { name: '汉室衰亡', era: '220',      desc: '曹丕篡汉·献帝禅让',    key_figures: ['献帝', '曹丕', '董卓'], artifacts: [] },
  ],
  sanguo: [
    { name: '官渡之战', era: '200',      desc: '曹操破袁绍·统一北方',   key_figures: ['曹操', '袁绍', '许攸'], artifacts: [] },
    { name: '赤壁之战', era: '208',      desc: '孙刘联兵·天下三分',    key_figures: ['周瑜', '诸葛亮', '曹操'], artifacts: [] },
    { name: '三国鼎立', era: '220-222',  desc: '曹魏·蜀汉·孙吴',       key_figures: ['曹丕', '刘备', '孙权'], artifacts: [] },
    { name: '诸葛亮北伐', era: '228-234', desc: '六出祁山·鞠躬尽瘁',   key_figures: ['诸葛亮', '姜维', '司马懿'], artifacts: ['出师表'] },
    { name: '司马篡魏', era: '265',      desc: '司马炎代魏·晋朝始',    key_figures: ['司马炎', '司马昭'], artifacts: [] },
    { name: '吴亡·三分归晋', era: '280', desc: '王濬楼船下益州',        key_figures: ['孙皓', '王濬', '杜预'], artifacts: [] },
  ],
  xijin: [
    { name: '太康盛世', era: '280',      desc: '统一全国·短暂繁荣',    key_figures: ['司马炎'],         artifacts: [] },
    { name: '八王之乱', era: '291-306',  desc: '宗室相残·国力耗尽',    key_figures: ['司马伦', '司马颖', '贾南风'], artifacts: [] },
    { name: '永嘉之乱', era: '311',      desc: '匈奴攻陷洛阳·怀帝被俘', key_figures: ['怀帝', '刘渊', '石勒'], artifacts: [] },
    { name: '西晋灭亡', era: '316',      desc: '愍帝出降·衣冠南渡',    key_figures: ['愍帝', '刘曜'],    artifacts: [] },
  ],
  dongjin: [
    { name: '司马睿建东晋', era: '317',  desc: '定都建康·偏安江南',    key_figures: ['司马睿', '王导'],  artifacts: [] },
    { name: '淝水之战',   era: '383',    desc: '谢安破苻坚·草木皆兵',  key_figures: ['谢安', '谢玄', '苻坚'], artifacts: [] },
    { name: '五胡十六国', era: '304-439', desc: '匈奴·羯·鲜卑·氐·羌',  key_figures: ['石勒', '苻坚', '拓跋珪'], artifacts: [] },
    { name: '刘裕代晋',   era: '420',    desc: '刘裕建宋·东晋亡',      key_figures: ['刘裕'],           artifacts: [] },
  ],
  nanbei: [
    { name: '南北朝对峙', era: '420-589', desc: '南朝宋齐梁陈·北朝魏齐周', key_figures: ['刘裕', '萧道成', '拓跋焘'], artifacts: [] },
    { name: '北魏孝文帝', era: '471-499', desc: '迁都洛阳·汉化改革',    key_figures: ['拓跋宏', '冯太后'], artifacts: ['龙门石窟'] },
    { name: '六镇起义',   era: '523',    desc: '军阀崛起·北魏分裂',    key_figures: ['尔朱荣', '高欢', '宇文泰'], artifacts: [] },
    { name: '杨坚代周',   era: '581',    desc: '北周静帝禅位·隋朝始',  key_figures: ['杨坚', '静帝'],    artifacts: [] },
    { name: '隋灭陈',     era: '589',    desc: '南北统一·三百年分裂终结', key_figures: ['杨广', '陈叔宝'], artifacts: [] },
  ],
  sui: [
    { name: '开皇之治', era: '581-600',  desc: '杨坚改革·府兵均田',    key_figures: ['杨坚', '高颎'],    artifacts: [] },
    { name: '科举制创立', era: '605',     desc: '分科取士·打破门阀',    key_figures: ['杨广'],           artifacts: [] },
    { name: '大运河',     era: '605-610', desc: '贯通南北·连接五水',    key_figures: ['杨广', '宇文恺'],  artifacts: ['大运河'] },
    { name: '炀帝暴政',   era: '',        desc: '三征高丽·民怨沸腾',    key_figures: ['杨广'],           artifacts: [] },
    { name: '隋朝覆亡',   era: '618',     desc: '李渊入长安·隋亡',     key_figures: ['杨广', '李渊', '宇文化及'], artifacts: [] },
  ],
  tang: [
    { name: '李渊建唐',   era: '618',     desc: '削平群雄·统一天下',    key_figures: ['李渊', '李世民', '李建成'], artifacts: [] },
    { name: '贞观之治',   era: '627-649', desc: '太宗李世民·万国来朝',  key_figures: ['李世民', '魏征', '房玄龄'], artifacts: ['昭陵六骏'] },
    { name: '武则天称帝', era: '690',     desc: '改国号为周·唯一女皇',  key_figures: ['武则天', '狄仁杰'], artifacts: ['乾陵无字碑'] },
    { name: '开元盛世',   era: '713-741', desc: '玄宗·李杜文章·盛极一时', key_figures: ['李隆基', '姚崇', '宋璟'], artifacts: [] },
    { name: '安史之乱',   era: '755-763', desc: '安禄山反·由盛转衰',    key_figures: ['安禄山', '郭子仪', '杨贵妃'], artifacts: [] },
    { name: '唐末乱世',   era: '875-907', desc: '黄巢起义·朱温篡唐',    key_figures: ['黄巢', '朱温'],    artifacts: [] },
  ],
  wudai: [
    { name: '五代更迭',   era: '907-960',    desc: '梁唐晋汉周·五十四年五朝换', key_figures: ['朱温', '李存勖', '石敬瑭'], artifacts: [] },
    { name: '十国割据',   era: '902-979',    desc: '南方九国加北汉·各据一方', key_figures: ['李煜', '钱镠'], artifacts: [] },
    { name: '幽云十六州', era: '936',        desc: '石敬瑭割地·燕云入辽',    key_figures: ['石敬瑭', '耶律德光'], artifacts: [] },
    { name: '后周改革',   era: '951-960',    desc: '柴荣励精图治·赵匡胤陈桥兵变', key_figures: ['柴荣', '赵匡胤'], artifacts: [] },
  ],
  beisong: [
    { name: '陈桥兵变',   era: '960',      desc: '黄袍加身·杯酒释兵权',    key_figures: ['赵匡胤', '赵普'],  artifacts: [] },
    { name: '澶渊之盟',   era: '1004',     desc: '宋辽和议·百年和平',      key_figures: ['真宗', '寇准'],    artifacts: [] },
    { name: '庆历新政',   era: '1043',     desc: '范仲淹改革·先天下之忧',   key_figures: ['范仲淹', '欧阳修'], artifacts: ['岳阳楼记'] },
    { name: '王安石变法', era: '1069',     desc: '富国强兵·新旧党争',      key_figures: ['王安石', '司马光', '苏轼'], artifacts: [] },
    { name: '靖康之耻',   era: '1127',     desc: '金灭北宋·徽钦二帝北狩',   key_figures: ['徽宗', '钦宗', '李纲'], artifacts: ['清明上河图'] },
  ],
  nansong: [
    { name: '赵构建南宋', era: '1127',     desc: '定都临安·偏安江南',      key_figures: ['赵构', '宗泽'],    artifacts: [] },
    { name: '岳飞北伐',   era: '1140',     desc: '直捣黄龙·莫须有之冤',    key_figures: ['岳飞', '秦桧', '韩世忠'], artifacts: ['满江红'] },
    { name: '隆兴和议',   era: '1164',     desc: '宋金再和·叔侄之称',      key_figures: ['孝宗'],           artifacts: [] },
    { name: '宋学兴盛',   era: '',         desc: '朱熹理学·陆九渊心学',     key_figures: ['朱熹', '陆九渊'],  artifacts: ['四书章句集注'] },
    { name: '宋元战争',   era: '1235-1279', desc: '忽必烈南征·崖山蹈海',   key_figures: ['文天祥', '陆秀夫', '张世杰'], artifacts: [] },
  ],
  jin: [
    { name: '完颜阿骨打建金', era: '1115',   desc: '反辽建金·定都会宁府',    key_figures: ['完颜阿骨打', '完颜宗翰', '完颜宗望'], artifacts: [] },
    { name: '灭辽',           era: '1125',   desc: '联宋灭辽·辽天祚帝被俘',  key_figures: ['完颜宗翰', '完颜宗望', '辽天祚帝'], artifacts: [] },
    { name: '靖康之变',       era: '1127',   desc: '南下攻宋·徽钦二帝北狩',  key_figures: ['完颜宗望', '完颜宗翰', '徽宗', '钦宗'], artifacts: [] },
    { name: '绍兴和议',       era: '1141',   desc: '杀岳飞·宋称臣纳贡·划淮而治', key_figures: ['完颜宗弼', '秦桧', '宋高宗'], artifacts: [] },
    { name: '海陵王南侵',     era: '1161',   desc: '完颜亮倾国南征·采石之战败亡', key_figures: ['完颜亮', '虞允文'], artifacts: [] },
    { name: '大定之治',       era: '1161-1189', desc: '金世宗与民休息·北疆安定', key_figures: ['金世宗（完颜雍）'], artifacts: [] },
    { name: '蒙古攻金',       era: '1211-1234', desc: '野狐岭之战·中都陷落·蔡州城破金亡', key_figures: ['金哀宗', '成吉思汗', '窝阔台', '拖雷'], artifacts: [] },
  ],
  yuan: [
    { name: '忽必烈建元', era: '1271',     desc: '取易经·大元',            key_figures: ['忽必烈', '刘秉忠'], artifacts: [] },
    { name: '灭南宋',     era: '1279',     desc: '崖山海战·陆秀夫负帝投海', key_figures: ['陆秀夫', '张弘范'], artifacts: [] },
    { name: '行省制度',   era: '',         desc: '全国设行省·影响至今',     key_figures: ['忽必烈'],         artifacts: [] },
    { name: '马可波罗',   era: '1275-1292', desc: '游记传世·沟通东西',     key_figures: ['马可波罗', '忽必烈'], artifacts: ['马可波罗游记'] },
    { name: '红巾军起义', era: '1351',     desc: '元末民变·天下动荡',      key_figures: ['韩山童', '刘福通', '朱元璋'], artifacts: [] },
    { name: '元亡',       era: '1368',     desc: '朱元璋北伐·顺帝北逃',    key_figures: ['朱元璋', '徐达', '顺帝'], artifacts: [] },
  ],
  ming: [
    { name: '洪武之治',   era: '1368-1398', desc: '朱元璋开国·废丞相设内阁', key_figures: ['朱元璋', '刘基', '李善长'], artifacts: [] },
    { name: '永乐盛世',   era: '1402-1424', desc: '朱棣迁都北京·修永乐大典', key_figures: ['朱棣', '解缙', '郑和'], artifacts: ['永乐大典', '故宫'] },
    { name: '郑和下西洋', era: '1405-1433', desc: '七下西洋·远达非洲',      key_figures: ['郑和', '朱棣'],    artifacts: ['郑和宝船模型'] },
    { name: '万历中兴',   era: '1573-1582', desc: '张居正一条鞭法改革',     key_figures: ['张居正', '万历帝'], artifacts: [] },
    { name: '崇祯亡国',   era: '1644',      desc: '李自成破北京·清军入关', key_figures: ['崇祯帝', '李自成', '吴三桂'], artifacts: [] },
  ],
  qing: [
    { name: '清兵入关',   era: '1644',      desc: '吴三桂引清·顺治定鼎',    key_figures: ['多尔衮', '顺治帝', '吴三桂'], artifacts: [] },
    { name: '康乾盛世',   era: '1661-1796',  desc: '康熙·雍正·乾隆·疆域辽阔', key_figures: ['康熙', '雍正', '乾隆'], artifacts: ['四库全书', '圆明园'] },
    { name: '鸦片战争',   era: '1840',       desc: '英国东来·签订南京条约',  key_figures: ['林则徐', '道光帝'], artifacts: ['虎门炮台'] },
    { name: '洋务运动',   era: '1861-1895',  desc: '师夷长技·甲午一战成空',  key_figures: ['李鸿章', '张之洞', '左宗棠'], artifacts: ['江南制造总局'] },
    { name: '戊戌变法',   era: '1898',       desc: '百日维新·康梁变法',      key_figures: ['光绪帝', '康有为', '梁启超'], artifacts: [] },
    { name: '辛亥革命',   era: '1911',       desc: '武昌起义·终结帝制',      key_figures: ['孙中山', '黄兴', '袁世凯'], artifacts: ['武昌起义军政府旧址'] },
  ],
  minguo: [
    { name: '中华民国建立', era: '1912',     desc: '孙中山就任临时大总统',    key_figures: ['孙中山', '袁世凯'], artifacts: ['中华民国临时约法'] },
    { name: '北伐战争',     era: '1926-1928', desc: '国民革命军统一中国',     key_figures: ['蒋介石', '周恩来', '叶挺'], artifacts: [] },
    { name: '十年建设',     era: '1927-1937', desc: '南京国民政府·黄金十年',  key_figures: ['蒋介石'],         artifacts: [] },
    { name: '抗日战争',     era: '1937-1945', desc: '全面抗战·十四年浴血',    key_figures: ['毛泽东', '蒋介石', '朱德'], artifacts: [] },
    { name: '国共内战',     era: '1945-1949', desc: '决定中国命运之战',        key_figures: ['毛泽东', '蒋介石'], artifacts: [] },
  ],
  zhongguo: [
    { name: '开国大典', era: '1949',      desc: '中华人民共和国成立',        key_figures: ['毛泽东', '周恩来', '朱德'], artifacts: ['五星红旗'] },
    { name: '改革开放', era: '1978',      desc: '十一届三中全会·经济腾飞',   key_figures: ['邓小平'],         artifacts: [] },
    { name: '港澳回归', era: '1997-1999', desc: '香港·澳门回归祖国',        key_figures: ['江泽民', '董建华'], artifacts: [] },
    { name: '加入世贸', era: '2001',      desc: '融入全球经济体系',          key_figures: ['江泽民', '朱镕基'], artifacts: [] },
    { name: '新时代',   era: '2012',      desc: '中华民族复兴之路',          key_figures: ['习近平'],         artifacts: [] },
  ],
};

// ──────────────────────────────────────────
// 三级事件时间轴（子时代内的详细事件）
// ──────────────────────────────────────────
const eventTimelineData = {
  chunqiu: [
    { name: '平王东迁',   era: '前770',      desc: '定都洛邑·东周始',        key_figures: ['周平王'],             artifacts: [] },
    { name: '繻葛之战',   era: '前707',      desc: '郑庄公箭射周桓王·王权衰落', key_figures: ['郑庄公', '周桓王'],  artifacts: [] },
    { name: '齐桓公称霸', era: '前685-前643', desc: '管仲改革·尊王攘夷·九合诸侯', key_figures: ['齐桓公', '管仲'], artifacts: [] },
    { name: '城濮之战',   era: '前632',      desc: '晋文公退避三舍·大败楚军', key_figures: ['晋文公', '楚成王', '先轸'], artifacts: [] },
    { name: '楚庄王问鼎', era: '前606',      desc: '饮马黄河·问鼎中原',      key_figures: ['楚庄王', '孙叔敖'],   artifacts: [] },
    { name: '弭兵之会',   era: '前546',      desc: '晋楚平分霸权·四十年和平', key_figures: ['向戌', '赵武'],         artifacts: [] },
    { name: '孔子周游列国', era: '前497-前484', desc: '儒家始祖·删述六经',   key_figures: ['孔子', '子路', '子贡', '颜回'], artifacts: ['论语'] },
    { name: '吴越争霸',   era: '前494-前473', desc: '夫差北上·勾践卧薪尝胆',  key_figures: ['夫差', '勾践', '范蠡', '文种'], artifacts: ['越王勾践剑'] },
  ],
  zhanguo: [
    { name: '三家分晋',   era: '前403',      desc: '韩赵魏列为诸侯·战国始',  key_figures: ['韩虔', '赵籍', '魏斯', '周威烈王'], artifacts: [] },
    { name: '商鞅变法',   era: '前356-前338', desc: '废井田·开阡陌·秦国富强', key_figures: ['商鞅', '秦孝公'],      artifacts: ['商鞅方升'] },
    { name: '桂陵/马陵之战', era: '前353-前341', desc: '孙膑围魏救赵·庞涓自刎', key_figures: ['孙膑', '庞涓', '田忌'], artifacts: [] },
    { name: '张仪连横',   era: '前328-前309', desc: '以横破纵·秦取巴蜀汉中',  key_figures: ['张仪', '秦惠文王', '司马错'], artifacts: [] },
    { name: '赵武灵王胡服骑射', era: '前307', desc: '军事改革·北驱林胡楼烦',   key_figures: ['赵武灵王'],           artifacts: [] },
    { name: '长平之战',   era: '前260',      desc: '白起坑杀赵卒四十万·秦霸天下', key_figures: ['白起', '赵括', '廉颇'], artifacts: [] },
    { name: '百家争鸣',   era: '',           desc: '儒墨道法兵名阴阳·稷下学宫', key_figures: ['孟子', '荀子', '庄子', '韩非', '墨子', '公孙龙'], artifacts: [] },
    { name: '屈原投江',   era: '前278',      desc: '秦拔郢都·楚辞绝唱',      key_figures: ['屈原', '楚顷襄王'],    artifacts: ['楚辞·离骚'] },
    { name: '荆轲刺秦',   era: '前227',      desc: '风萧萧兮易水寒·图穷匕见', key_figures: ['荆轲', '燕太子丹', '嬴政'], artifacts: [] },
    { name: '秦灭六国',   era: '前230-前221', desc: '十年横扫韩赵魏楚燕齐·天下一统', key_figures: ['嬴政', '王翦', '王贲', '李斯'], artifacts: [] },
  ],
};
