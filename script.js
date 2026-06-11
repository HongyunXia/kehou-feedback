const knowledgeGroups = [
  ["初中", "初一", "语文", [
    ["记叙文阅读内容概括", "中考现代文阅读基础能力", "能读懂文章大意，但概括容易遗漏人物、事件或结果", "建议按人物、事件、原因、结果四要素梳理文章"],
    ["古诗词意象与情感", "中考古诗鉴赏常见考点", "能背诵诗句，但对意象和情感之间的联系理解不够深", "建议积累常见意象，并结合关键词分析情感"],
    ["作文选材与细节描写", "中考作文基础能力", "素材较真实，但细节描写不够充分，文章感染力不足", "建议围绕动作、语言、心理补充具体细节"]
  ]],
  ["初中", "初二", "语文", [
    ["现代文阅读人物形象分析", "中考记叙文阅读常见设问", "答案容易停留在概括层面，缺少文本依据", "建议按照性格特点、具体情节、表达效果三步组织答案"],
    ["说明文说明方法与作用", "中考说明文阅读高频考点", "能识别说明方法，但作用表述容易套话", "建议结合说明对象特点和段落内容作答"],
    ["文言文实词与句子翻译", "中考文言文阅读基础考点", "实词积累不够稳定，翻译时容易漏补省略成分", "建议整理高频实词并坚持逐句翻译训练"]
  ]],
  ["初中", "初三", "语文", [
    ["议论文论点与论证方法", "中考议论文阅读核心考点", "能找到观点，但对论据如何支撑观点分析不够完整", "建议用观点、论据、论证效果的结构整理答案"],
    ["小说情节作用分析", "中考文学类文本综合题", "能概括情节，但忽略与人物、主题、结构的联系", "建议从内容和结构两个角度分层作答"],
    ["中考作文审题立意", "中考作文拉分关键", "立意容易泛化，材料关键词抓取不够精准", "建议先圈定关键词，再确定中心和素材"]
  ]],
  ["高中", "高一", "语文", [
    ["文言文断句与翻译", "高考文言文阅读基础能力", "句式和语境判断不够稳定，翻译容易直译生硬", "建议结合语法结构、上下文和固定句式训练"],
    ["现代诗歌意象赏析", "高中语文鉴赏能力基础", "能感受情绪，但表达缺少术语和文本依据", "建议从意象、手法、情感三个维度组织答案"],
    ["议论文段落论证", "高中作文议论表达基础", "观点较明确，但论证展开不够充分", "建议补充事实论据和因果分析链条"]
  ]],
  ["高中", "高二", "语文", [
    ["文学类文本叙事技巧", "高考文学类文本常见考点", "能读懂情节，但对叙事视角和叙事节奏分析不够细", "建议结合具体段落分析技巧对主题的作用"],
    ["信息类文本筛选整合", "高考信息类文本阅读核心能力", "信息定位可以完成，但整合概括不够简洁准确", "建议训练同义转述和分层归纳"],
    ["作文论证结构优化", "高考作文发展等级相关能力", "论点之间层次感不足，段落推进略显平面", "建议使用递进式或对照式结构搭建全文"]
  ]],
  ["高中", "高三", "语文", [
    ["高考小说人物与主题综合", "高考文学类文本综合题", "答案点能想到，但缺少题干意识和分值意识", "建议按题干关键词拆分答题角度"],
    ["诗歌表达技巧鉴赏", "高考古诗鉴赏高频考点", "能识别手法，但手法、内容、效果之间衔接不够自然", "建议固定使用手法、诗句内容、情感效果三步法"],
    ["任务驱动型作文立意", "高考作文审题与表达核心能力", "材料关系分析不够深入，容易只抓单一关键词", "建议先厘清材料对象、矛盾和价值取向"]
  ]],
  ["初中", "初一", "数学", [
    ["有理数运算与符号判断", "中考数与式基础能力", "符号意识不够稳定，混合运算顺序容易出错", "建议每天进行少量限时口算和错因归类"],
    ["一元一次方程应用题", "中考方程模型基础", "设未知数和等量关系建立不够熟练", "建议用题干关键词找等量关系，再列方程"],
    ["几何初步与角度计算", "中考几何推理基础", "图形关系观察不够细，角度转换容易漏条件", "建议养成标图、找关系、写依据的习惯"]
  ]],
  ["初中", "初二", "数学", [
    ["一次函数图像与性质", "中考函数基础考点", "图像、解析式和实际意义之间对应不够稳定", "建议用表格、图像、解析式互相转化训练"],
    ["全等三角形判定", "中考几何证明基础", "条件匹配容易混乱，证明顺序不够清晰", "建议先标注已知条件，再确定判定方法"],
    ["分式方程与应用", "中考方程与实际问题考点", "容易忘记检验，实际问题单位关系处理不够细", "建议列方程后固定做验根和回代解释"]
  ]],
  ["初中", "初三", "数学", [
    ["二次函数图像与性质", "中考函数综合题高频考点", "容易把顶点、对称轴和开口方向分开记，不能结合图像整体分析", "建议用典型图像配合解析式反复对应，并加强含参数和实际应用题训练"],
    ["相似三角形判定与性质", "中考几何证明与线段计算核心考点", "辅助线意识不足，证明顺序容易跳步", "建议先训练找对应角和对应边，再做综合证明题"],
    ["圆的切线与角度证明", "中考压轴几何常见考点", "半径、切线和圆周角关系调用不够主动", "建议积累切线证明模型和圆中角关系模型"],
    ["统计概率与数据分析", "中考基础题稳定得分点", "平均数、中位数、方差等概念容易机械套用", "建议结合具体情境理解每个统计量的意义"]
  ]],
  ["高中", "高一", "数学", [
    ["集合与常用逻辑用语", "高考数学基础概念考点", "条件关系和集合运算容易受符号影响", "建议用数轴或韦恩图辅助判断"],
    ["函数单调性与奇偶性", "高考函数主线基础", "定义理解不够扎实，证明过程容易跳步", "建议先回到定义，再结合图像判断"],
    ["三角函数图像与性质", "高考三角函数核心考点", "周期、相位和图像变换对应不够熟练", "建议用五点法和图像平移规律巩固"]
  ]],
  ["高中", "高二", "数学", [
    ["数列通项与求和", "高考数列核心题型", "通项公式和求和方法选择不够稳定", "建议区分等差、等比、裂项、错位相减等模型"],
    ["立体几何线面关系", "高考空间想象与证明考点", "空间关系判断依赖直觉，证明依据不够规范", "建议用判定定理和性质定理搭建证明链"],
    ["圆锥曲线方程与性质", "高考解析几何重点模块", "计算量较大时容易丢条件或算错", "建议先明确几何量，再进行代数转化"]
  ]],
  ["高中", "高三", "数学", [
    ["导数与函数综合", "高考数学压轴核心", "分类讨论和参数范围处理不够严谨", "建议先分析单调区间，再结合极值和端点判断"],
    ["概率统计与分布列", "高考概率统计常见题型", "事件关系和随机变量取值列举不够完整", "建议先画树状图或表格，再计算概率"],
    ["解析几何综合运算", "高考计算与转化能力考点", "设点、联立和韦达定理衔接不够顺", "建议固定解题流程并控制代数运算细节"]
  ]],
  ["初中", "初一", "英语", [
    ["一般现在时与主谓一致", "中考语法基础考点", "第三人称单数和助动词使用容易混淆", "建议用句型转换训练巩固谓语变化"],
    ["名词、代词与冠词", "中考基础语法常见考点", "可数不可数和代词指代判断不够细", "建议结合语境判断词性和数量关系"],
    ["阅读细节定位", "中考阅读理解基础能力", "能读懂大意，但定位题容易被近义表达干扰", "建议先看题干关键词，再回文定位"]
  ]],
  ["初中", "初二", "英语", [
    ["宾语从句", "中考语法填空、句型转换和写作常用考点", "语序、人称和时态呼应容易混淆", "建议每天做少量改写和翻译练习，形成从句语序意识"],
    ["比较级与最高级", "中考语法选择常见考点", "比较对象和标志词判断不够准确", "建议结合 than、the、范围短语等信号词训练"],
    ["完形填空上下文推断", "中考完形填空核心能力", "容易只看单句意思，忽略前后逻辑", "建议训练转折、因果、递进等逻辑词判断"]
  ]],
  ["初中", "初三", "英语", [
    ["被动语态", "中考语法综合高频考点", "时态和被动结构容易分开判断，导致形式错误", "建议先判断时态，再套用 be done 结构"],
    ["阅读主旨大意题", "中考阅读理解拉分题型", "容易抓住局部细节，忽略文章整体观点", "建议关注首尾段和段落主题句"],
    ["中考书面表达结构", "中考作文核心能力", "内容点能写出，但句式重复、衔接不足", "建议使用开头、主体、结尾三段式并积累连接词"]
  ]],
  ["高中", "高一", "英语", [
    ["定语从句关系词选择", "高考语法填空和长难句理解基础考点", "先行词、从句成分和关系词功能对应不稳定", "建议先判断先行词，再分析从句缺少的成分，最后确定关系词"],
    ["非谓语动词基础", "高考语法填空核心考点", "谓语和非谓语区分不够清晰", "建议先判断句中是否已有谓语，再确定非谓语形式"],
    ["阅读理解事实细节题", "高考阅读基础题型", "定位后对同义替换识别不够敏感", "建议积累常见同义表达并回到原文核对"]
  ]],
  ["高中", "高二", "英语", [
    ["名词性从句", "高考语法与写作高级句式", "从句类型和连接词功能容易混淆", "建议从句子成分入手判断主语、宾语、表语或同位语从句"],
    ["完形填空语篇逻辑", "高考完形填空核心能力", "词义辨析可以完成，但语篇情感线索把握不足", "建议结合上下文语气和动作发展判断选项"],
    ["应用文写作", "高考英语写作基础题型", "内容完整性尚可，但语气和格式细节需提升", "建议积累邀请、建议信、感谢信等常用表达"]
  ]],
  ["高中", "高三", "英语", [
    ["阅读七选五篇章结构", "高考阅读七选五重点题型", "能理解句意，但对段落衔接和指代关系判断不够稳", "建议关注代词、连接词和段落主题一致性"],
    ["读后续写情节推进", "高考写作拉分题型", "情节能续上，但动作描写和情绪变化不够自然", "建议用动作、心理、环境三类细节推动情节"],
    ["语法填空综合", "高考英语稳定得分模块", "词性转换、谓语时态和非谓语判断容易混在一起", "建议先分析句子结构，再判断考点类型"]
  ]],
  ["初中", "初二", "物理", [
    ["声现象与物态变化", "中考物理基础概念考点", "概念记忆可以完成，但现象解释不够准确", "建议结合生活情境解释物理原因"],
    ["光的反射与折射", "中考光学作图与实验考点", "作图规范和角度关系容易出错", "建议固定法线、入射角、反射角的作图步骤"],
    ["质量密度与测量", "中考实验与计算基础", "公式会用，但单位换算和实验步骤不够细", "建议加强单位换算和实验误差分析"]
  ]],
  ["初中", "初三", "物理", [
    ["力和运动综合", "中考力学核心考点", "受力分析不够完整，运动状态和力的关系容易混淆", "建议先判断研究对象和运动状态，再画受力图"],
    ["压强与浮力", "中考力学综合计算高频考点", "液体压强、浮力和受力平衡关系容易混用", "建议分清公式适用条件并画受力示意图"],
    ["欧姆定律与电路分析", "中考电学核心模块", "串并联关系和电表示数变化判断不够稳定", "建议先等效电路，再判断电流电压关系"]
  ]],
  ["高中", "高一", "物理", [
    ["匀变速直线运动", "高考力学基础模型", "公式选择和正负号处理不够稳定", "建议画运动过程图并统一正方向"],
    ["牛顿第二定律综合应用", "高考力学基础模型和综合计算起点", "受力分析不完整，列方程时方向和对象容易混乱", "建议固定使用受力图、研究对象、正方向、方程四步法"],
    ["机械能守恒与动能定理", "高考能量观点核心考点", "过程选择和做功正负判断容易出错", "建议先确定研究过程，再判断外力做功情况"]
  ]],
  ["高中", "高二", "物理", [
    ["电场强度与电势能", "高考电场核心概念", "场强、电势和电势能之间关系容易混淆", "建议结合电场线和等势面理解物理意义"],
    ["闭合电路欧姆定律", "高考电学计算常见模型", "内外电路关系和功率变化判断不够稳", "建议先画等效电路，再列整体和局部方程"],
    ["磁场与带电粒子运动", "高考电磁综合题基础", "洛伦兹力方向和圆周运动半径公式使用不够熟练", "建议训练左手定则和几何轨迹分析"]
  ]],
  ["高中", "高三", "物理", [
    ["动量守恒与碰撞模型", "高考力学综合压轴常见模型", "系统选择和守恒条件判断不够严谨", "建议先判断外力冲量，再列动量守恒方程"],
    ["电磁感应综合", "高考电磁学重点模块", "感应电流方向、能量转化和电路计算衔接不够顺", "建议按磁通量变化、楞次定律、电路计算三步处理"],
    ["实验数据处理", "高考实验题稳定得分点", "图像斜率、截距和误差来源分析不够清楚", "建议训练读图、拟合和单位意义分析"]
  ]],
  ["初中", "初三", "化学", [
    ["物质构成与化学式", "中考化学基础概念考点", "元素、分子、原子和离子概念容易混淆", "建议结合微观示意图理解概念差异"],
    ["化学方程式书写与计算", "中考化学核心基础", "配平、质量关系和题干信息提取不够稳定", "建议先写准方程式，再按质量守恒列比例"],
    ["酸碱盐性质与转化", "中考化学综合推断常见模块", "物质性质记忆零散，转化关系不够清晰", "建议整理常见离子反应和沉淀、气体、颜色特征"]
  ]],
  ["高中", "高一", "化学", [
    ["物质的量及其计算", "高考化学计算基础", "n、m、V、c 之间转化不够熟练", "建议先写出核心公式，再统一单位代入"],
    ["氧化还原反应", "高考化学反应原理基础", "化合价变化和电子转移方向判断不够稳定", "建议用升失氧、降得还的思路标注变化"],
    ["离子反应与离子方程式", "高考化学基础必考点", "离子拆写和反应条件判断容易出错", "建议先判断强弱电解质，再检查电荷和原子守恒"]
  ]],
  ["高中", "高二", "化学", [
    ["化学平衡移动", "高考化学反应原理核心考点", "压强、温度、浓度变化对平衡的影响容易机械记忆", "建议结合勒夏特列原理解释原因，并配合图像题训练"],
    ["弱电解质电离平衡", "高考水溶液综合题基础", "电离平衡、水解和平衡常数关系容易混淆", "建议用平衡移动观点分析浓度变化"],
    ["原电池与电解池", "高考电化学核心模块", "电极判断和电子、离子移动方向不够稳定", "建议先判断反应类型，再确定正负极或阴阳极"]
  ]],
  ["高中", "高三", "化学", [
    ["有机物结构与性质", "高考有机化学核心考点", "官能团性质和反应类型对应不够稳定", "建议整理官能团、典型反应和条件三列表"],
    ["化学实验方案评价", "高考实验探究能力重点", "实验目的、变量控制和现象解释联系不够紧", "建议按目的、操作、现象、结论四步分析"],
    ["工业流程题信息提取", "高考化学综合题高频题型", "流程信息多时容易忽略除杂目的和条件控制", "建议逐步标注原料、目标产物、杂质和关键操作"]
  ]]
];

const knowledgeBase = knowledgeGroups.flatMap(([stage, grade, subject, topics]) =>
  topics.map(([topic, exam, weak, advice]) => createKnowledgeItem(stage, grade, subject, topic, exam, weak, advice))
);

knowledgeBase.push(...[
  ["初中", "初一", "语文", "病句辨析与修改", "中考语言运用基础题", "常见语病类型识别不够熟，修改时容易只凭语感", "建议按搭配不当、成分残缺、语序不当、重复赘余分类训练"],
  ["初中", "初二", "语文", "标题含义与作用", "中考现代文阅读高频题", "能说出表层意思，但深层含义和结构作用容易遗漏", "建议从内容、人物、主题和线索四个角度思考"],
  ["初中", "初三", "语文", "语言赏析与表达效果", "中考阅读赏析类题型", "能找到优美语句，但赏析时手法和效果连接不够紧", "建议固定使用手法、内容、情感或人物效果的答题结构"],
  ["高中", "高一", "语文", "修辞手法与表达效果", "高中语文阅读鉴赏基础", "手法识别可以完成，但作用分析较泛", "建议结合具体语境说明描写对象和情感指向"],
  ["高中", "高二", "语文", "论证严密性分析", "高考信息类与论述类文本能力", "能找到论点，但对论证前提和逻辑关系把握不够准", "建议圈画关联词并梳理论证链条"],
  ["高中", "高三", "语文", "文言虚词与特殊句式", "高考文言文阅读稳定考点", "虚词意义和倒装、省略句判断不够稳定", "建议结合句子成分和上下文语境判断"],
  ["初中", "初一", "数学", "整式加减与合并同类项", "中考代数运算基础", "符号和括号处理不够细，合并项时容易漏项", "建议先标同类项，再按符号整体移动"],
  ["初中", "初二", "数学", "勾股定理及逆定理", "中考几何计算基础考点", "能套公式，但直角三角形条件识别不够主动", "建议先寻找直角、边长关系和平方关系"],
  ["初中", "初三", "数学", "韦达定理与根的判别式", "中考二次方程与函数综合考点", "判别式、根与系数关系使用场景容易混淆", "建议区分有无实根、两根关系和参数范围三类问题"],
  ["高中", "高一", "数学", "指数函数与对数函数", "高考基本初等函数核心", "底数范围、单调性和定义域判断不够稳定", "建议结合图像比较大小并重视定义域"],
  ["高中", "高二", "数学", "空间向量与立体几何", "高考立体几何计算重要方法", "向量建系和坐标计算容易出现方向错误", "建议先选好原点和坐标轴，再写点坐标与法向量"],
  ["高中", "高三", "数学", "函数零点与不等式证明", "高考函数综合拉分点", "零点存在性和单调性结合不够熟练", "建议先分析函数构造，再利用导数和端点符号判断"],
  ["初中", "初一", "英语", "一般过去时", "中考时态基础考点", "动词过去式变化和时间状语匹配不够稳定", "建议积累不规则动词并做句型转换训练"],
  ["初中", "初二", "英语", "状语从句", "中考复合句核心考点", "连接词含义和主从句时态关系容易混淆", "建议按时间、条件、原因、结果分类整理"],
  ["初中", "初三", "英语", "短文填空词性判断", "中考综合语言运用题型", "能读懂句意，但词性和固定搭配判断不够细", "建议先分析空格成分，再结合上下文确定词形"],
  ["高中", "高一", "英语", "形容词副词比较结构", "高考语法填空基础点", "比较对象和修饰关系判断不够准确", "建议抓标志词并核对句子成分"],
  ["高中", "高二", "英语", "概要写作信息提炼", "高中英语综合表达能力", "能找出信息，但压缩和转述能力不足", "建议练习用同义表达合并重复信息"],
  ["高中", "高三", "英语", "完形填空熟词生义", "高考完形填空拉分点", "容易按词汇常见义选择，忽略语境中的特殊含义", "建议结合上下文动作、情绪和逻辑重新判断词义"],
  ["初中", "初二", "物理", "凸透镜成像规律", "中考光学实验与作图高频点", "物距、像距和成像性质对应不够熟", "建议用成像表格和光路图一起记忆"],
  ["初中", "初三", "物理", "电功率与动态电路", "中考电学综合计算重点", "滑动变阻器变化对电表示数影响判断不稳", "建议先画等效电路，再判断电阻、电流和功率变化"],
  ["初中", "初三", "物理", "热量计算与比热容", "中考热学基础计算", "公式会背，但吸放热对象和单位换算容易出错", "建议先明确研究对象，再统一单位代入"],
  ["高中", "高一", "物理", "曲线运动与平抛运动", "高考运动合成分解基础模型", "水平和竖直方向运动规律容易混用", "建议按两个方向分别列式，再用时间关联"],
  ["高中", "高二", "物理", "楞次定律与右手定则", "高考电磁感应基础考点", "感应电流方向判断步骤不够固定", "建议先判磁通量变化，再用楞次定律确定阻碍方向"],
  ["高中", "高三", "物理", "交流电与变压器", "高考电磁学常见考点", "有效值、峰值和匝数比关系容易混淆", "建议区分瞬时值表达式和有效值计算"],
  ["初中", "初三", "化学", "金属活动性顺序", "中考金属与酸盐反应考点", "置换反应条件和现象判断不够稳", "建议结合活动性顺序和溶液颜色变化训练"],
  ["初中", "初三", "化学", "气体制取与检验", "中考化学实验高频点", "发生装置、收集方法和检验步骤容易混淆", "建议按反应物状态、反应条件和气体性质选择装置"],
  ["高中", "高一", "化学", "元素周期律", "高考物质结构基础考点", "原子半径、电负性和金属性变化规律容易混记", "建议结合周期表位置和核外电子排布理解"],
  ["高中", "高二", "化学", "沉淀溶解平衡", "高考水溶液综合题重点", "溶度积表达式和沉淀转化方向判断不够稳定", "建议用离子浓度积与 Ksp 的大小关系判断"],
  ["高中", "高三", "化学", "有机合成路线推断", "高考有机综合压轴常见题", "官能团转化和反应条件对应不够熟练", "建议按碳骨架变化和官能团变化两条线分析"],
  ["高中", "高三", "化学", "化学反应速率图像", "高考反应原理图像题", "图像斜率、平台和条件改变的意义判断不够准", "建议先读坐标轴，再分析变化趋势和外界条件"]
].map(([stage, grade, subject, topic, exam, weak, advice]) =>
  createKnowledgeItem(stage, grade, subject, topic, exam, weak, advice)
));

if (Array.isArray(window.detailedKnowledgeRows)) {
  const existingKeys = new Set(knowledgeBase.map((item) => `${item.stage}|${item.grade}|${item.subject}|${item.topic}`));
  window.detailedKnowledgeRows.forEach(([stage, grade, subject, topic, exam, weak, advice]) => {
    const key = `${stage}|${grade}|${subject}|${topic}`;
    if (!existingKeys.has(key)) {
      knowledgeBase.push(createKnowledgeItem(stage, grade, subject, topic, exam, weak, advice));
      existingKeys.add(key);
    }
  });
}

function createKnowledgeItem(stage, grade, subject, topic, exam, weak, advice) {
  const aliases = buildAliases(topic, subject);
  return {
    stage,
    grade,
    subject,
    topic,
    exam,
    weak,
    advice,
    aliases,
    searchText: [stage, grade, subject, topic, exam, weak, advice, ...aliases].join(" ").toLowerCase()
  };
}

function buildAliases(topic, subject) {
  const aliases = [subject];
  const rules = [
    [/二次函数|一次函数|导数|函数/, ["函数", "图像", "性质", "解析式", "参数"]],
    [/相似|全等|圆|几何|线面|立体/, ["几何", "证明", "辅助线", "角度", "线段"]],
    [/方程|分式|数列|解析几何/, ["计算", "模型", "应用题", "综合题"]],
    [/统计|概率|分布列/, ["概率", "统计", "数据", "随机变量"]],
    [/文言|实词|翻译|断句/, ["文言文", "翻译", "实词", "虚词", "断句"]],
    [/阅读|小说|说明文|议论文|信息类|文学类/, ["阅读", "文本", "概括", "赏析", "答题"]],
    [/作文|写作|续写/, ["作文", "写作", "审题", "立意", "结构"]],
    [/从句|语态|非谓语|语法/, ["语法", "句型", "时态", "长难句"]],
    [/阅读|完形|七选五/, ["阅读", "完形", "语篇", "上下文", "主旨"]],
    [/力|运动|牛顿|动量|机械能|压强|浮力/, ["力学", "受力分析", "运动过程", "模型"]],
    [/电场|电路|欧姆|电磁|磁场/, ["电学", "电路", "电磁", "电流", "电压"]],
    [/实验|数据/, ["实验", "图像", "误差", "探究"]],
    [/化学式|方程式|离子|氧化还原/, ["化学方程式", "离子", "配平", "守恒"]],
    [/平衡|电离|电解|原电池/, ["反应原理", "平衡", "电化学", "图像"]],
    [/有机|流程|实验/, ["有机", "实验", "流程", "官能团", "推断"]]
  ];
  rules.forEach(([pattern, words]) => {
    if (pattern.test(topic)) aliases.push(...words);
  });
  return unique(aliases);
}

const subjectDefaults = {
  "语文": {
    topic: "阅读理解与答题规范",
    exam: "中高考阅读表达基础能力",
    weak: "答案容易缺少文本依据和层次",
    advice: "建议强化关键词定位和分点作答"
  },
  "数学": {
    topic: "函数与方程综合训练",
    exam: "中高考数学核心题型",
    weak: "遇到变式题时思路转换不够快",
    advice: "建议加强基础模型和典型题复盘"
  },
  "英语": {
    topic: "阅读理解与语法综合",
    exam: "中高考英语综合能力考点",
    weak: "细节定位和句子结构分析还需加强",
    advice: "建议坚持词汇积累和长难句拆分"
  },
  "物理": {
    topic: "模型建立与计算训练",
    exam: "中高考物理综合应用能力",
    weak: "物理过程分析和公式选择不够稳定",
    advice: "建议先画图分析过程，再代入公式计算"
  },
  "化学": {
    topic: "反应原理与题型训练",
    exam: "中高考化学核心基础",
    weak: "概念理解和题目信息提取需要更细致",
    advice: "建议结合方程式、实验现象和题干条件综合判断"
  },
  "生物": {
    topic: "生命活动与结构功能",
    exam: "中高考生物核心基础",
    weak: "概念之间的层级关系和过程分析还需要更清晰",
    advice: "建议结合结构、功能和过程图示进行复盘"
  },
  "地理": {
    topic: "区域认知与综合分析",
    exam: "中高考地理综合能力考点",
    weak: "区域定位、成因分析和图表信息提取还需加强",
    advice: "建议结合地图、材料和关键词梳理自然与人文要素"
  },
  "科学": {
    topic: "科学综合概念与实验探究",
    exam: "初中科学综合应用考点",
    weak: "跨模块概念联系和实验变量分析还不够稳定",
    advice: "建议按生命、物质、运动、地球宇宙模块分类复习"
  }
};

const state = {
  mastery: "扎实",
  scoreLevel: "良好",
  state: "专注积极",
  homework: "完成较好",
  participation: "主动回应",
  habit: "步骤规范",
  output: "能独立完成",
  tone: "balanced",
  variant: 0,
  selectedTopics: [],
  block: "教材同步"
};

const WORKER_AI_ENDPOINT = "https://kehou-feedback-ai.2407495199.workers.dev";
const STUDENT_NAME_HISTORY_KEY = "feedbackStudentNameHistory";
const ACCESS_CODE_HISTORY_KEY = "feedbackAccessCodeHistory";
const STUDENT_PROFILE_KEY = "feedbackStudentProfiles";
const INPUT_HISTORY_LIMIT = 12;
const STUDENT_PROFILE_LIMIT = 120;

const els = {
  studentName: document.querySelector("#studentNameInput"),
  accessCode: document.querySelector("#accessCodeInput"),
  studentNameHistory: document.querySelector("#studentNameHistoryList"),
  accessCodeHistory: document.querySelector("#accessCodeHistoryList"),
  studentNameHistoryChips: document.querySelector("#studentNameHistoryChips"),
  accessCodeHistoryChips: document.querySelector("#accessCodeHistoryChips"),
  lessonDate: document.querySelector("#lessonDateInput"),
  lessonTime: document.querySelector("#lessonTimeInput"),
  blockSelect: document.querySelector("#blockSelect"),
  blockSummaryValue: document.querySelector("#blockSummaryValue"),
  topicSearch: document.querySelector("#topicSearchInput"),
  customTopic: document.querySelector("#customTopicInput"),
  boardImage: document.querySelector("#boardImageInput"),
  boardDropZone: document.querySelector("#boardDropZone"),
  boardPreview: document.querySelector("#boardPreview"),
  boardText: document.querySelector("#boardTextInput"),
  recognizeBoard: document.querySelector("#recognizeBoardBtn"),
  clearBoard: document.querySelector("#clearBoardBtn"),
  boardStatus: document.querySelector("#boardStatus"),
  matchList: document.querySelector("#matchList"),
  stage: document.querySelector("#stageSelect"),
  grade: document.querySelector("#gradeSelect"),
  subject: document.querySelector("#subjectSelect"),
  topic: document.querySelector("#topicSelect"),
  selectedTopicList: document.querySelector("#selectedTopicList"),
  topicBrief: document.querySelector("#topicBrief"),
  result: document.querySelector("#resultText"),
  generate: document.querySelector("#generateBtn"),
  polish: document.querySelector("#polishBtn"),
  copy: document.querySelector("#copyBtn"),
  reset: document.querySelector("#resetBtn"),
  history: document.querySelector("#historyList"),
  todayCount: document.querySelector("#todayCount"),
  clearHistory: document.querySelector("#clearHistoryBtn"),
  qualityTip: document.querySelector("#qualityTip"),
  authScreen: document.querySelector("#authScreen"),
  appShell: document.querySelector("#appShell"),
  authTitle: document.querySelector("#authTitle"),
  authSubtitle: document.querySelector("#authSubtitle"),
  loginTab: document.querySelector("#loginTab"),
  registerTab: document.querySelector("#registerTab"),
  authForm: document.querySelector("#authForm"),
  authAccount: document.querySelector("#authAccountInput"),
  authPhone: document.querySelector("#authPhoneInput"),
  authPassword: document.querySelector("#authPasswordInput"),
  authConfirm: document.querySelector("#authConfirmInput"),
  authPhoneField: document.querySelector("#authPhoneField"),
  authConfirmField: document.querySelector("#authConfirmField"),
  authMessage: document.querySelector("#authMessage"),
  authSubmit: document.querySelector("#authSubmitBtn"),
  qrThumb: document.querySelector("#qrThumbBtn"),
  qrModal: document.querySelector("#qrModal"),
  qrModalClose: document.querySelector("#qrModalClose"),
  qrModalCloseBtn: document.querySelector("#qrModalCloseBtn"),
  sideQr: document.querySelector("#sideQrBtn"),
  registerNotice: document.querySelector("#registerNoticeModal"),
  registerNoticeBackdrop: document.querySelector("#registerNoticeBackdrop"),
  registerNoticeConfirm: document.querySelector("#registerNoticeConfirm"),
  mobileMenu: document.querySelector("#mobileMenuBtn"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  changePassword: document.querySelector("#changePasswordBtn"),
  logout: document.querySelector("#logoutBtn"),
  studentManager: document.querySelector("#studentManagerPanel"),
  feedbackPanels: document.querySelectorAll('[data-view-panel="feedback"]'),
  workbenchItems: document.querySelectorAll(".workbench-item"),
  managedStudentName: document.querySelector("#managedStudentNameInput"),
  managedStudentStage: document.querySelector("#managedStudentStageSelect"),
  managedStudentGrade: document.querySelector("#managedStudentGradeSelect"),
  managedStudentSubject: document.querySelector("#managedStudentSubjectSelect"),
  addStudent: document.querySelector("#addStudentBtn"),
  studentList: document.querySelector("#studentList")
};

let boardImageFiles = [];
let authMode = "login";
let authLoading = false;
let currentTeacherSession = null;
let profileSyncTimer = 0;
let registerNoticeShown = false;

const TEACHER_SESSION_KEY = "feedbackTeacherSession";
const REGISTER_NOTICE_KEY = "feedbackRegisterNoticeShown";

function unique(values) {
  return [...new Set(values)].filter(Boolean);
}

function fillSelect(select, values, selectedValue) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
  if (selectedValue && values.includes(selectedValue)) {
    select.value = selectedValue;
  }
}

function setAuthMessage(message, isSuccess = false) {
  if (!els.authMessage) return;
  els.authMessage.textContent = message || "";
  els.authMessage.classList.toggle("success", Boolean(isSuccess));
}

function setAuthLoading(isLoading) {
  authLoading = isLoading;
  if (els.authSubmit) {
    els.authSubmit.disabled = isLoading;
    els.authSubmit.textContent = isLoading
      ? "处理中..."
      : (authMode === "register" ? "注册并进入" : "登录工作台");
  }
  els.loginTab?.toggleAttribute("disabled", isLoading);
  els.registerTab?.toggleAttribute("disabled", isLoading);
}

async function requestTeacherAuth(payload) {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }
  if (!response.ok || !data.ok) {
    throw new Error(data.message || "账号服务暂时不可用");
  }
  return data;
}

function showAppForTeacher(account, token) {
  currentTeacherSession = {
    account,
    token,
    loginAt: Date.now()
  };
  localStorage.setItem(TEACHER_SESSION_KEY, JSON.stringify(currentTeacherSession));
  els.authScreen?.classList.add("auth-hidden");
  els.appShell?.classList.remove("app-locked");
  els.appShell?.removeAttribute("aria-hidden");
  const currentModule = document.querySelector(".workbench-user strong");
  if (currentModule && account) {
    currentModule.textContent = account;
  }
  loadCloudProfile();
}

function showAuthScreen() {
  currentTeacherSession = null;
  setDrawerOpen(false);
  els.authScreen?.classList.remove("auth-hidden");
  els.appShell?.classList.add("app-locked");
  els.appShell?.setAttribute("aria-hidden", "true");
}

function refreshModalLock() {
  const hasOpenModal = Boolean(
    (els.qrModal && !els.qrModal.hidden) ||
    (els.registerNotice && !els.registerNotice.hidden)
  );
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function openQrModal() {
  if (!els.qrModal) return;
  els.qrModal.hidden = false;
  refreshModalLock();
  els.qrModalCloseBtn?.focus();
}

function closeQrModal() {
  if (!els.qrModal) return;
  els.qrModal.hidden = true;
  refreshModalLock();
  (els.sideQr || els.qrThumb)?.focus();
}

function openRegisterNotice() {
  if (!els.registerNotice) return;
  els.registerNotice.hidden = false;
  refreshModalLock();
  els.registerNoticeConfirm?.focus();
}

function closeRegisterNotice() {
  if (!els.registerNotice) return;
  els.registerNotice.hidden = true;
  refreshModalLock();
  els.registerTab?.focus();
}

function showRegisterNoticeOnce() {
  if (registerNoticeShown || sessionStorage.getItem(REGISTER_NOTICE_KEY) === "1") return;
  registerNoticeShown = true;
  sessionStorage.setItem(REGISTER_NOTICE_KEY, "1");
  openRegisterNotice();
}

function getTeacherToken() {
  return currentTeacherSession?.token || "";
}

function readJsonStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function getLocalProfile() {
  return {
    studentNames: readInputHistory(STUDENT_NAME_HISTORY_KEY),
    accessCodes: readInputHistory(ACCESS_CODE_HISTORY_KEY),
    feedbackHistory: readJsonStorage("feedbackHistory", []),
    students: getStudentProfiles()
  };
}

function mergeUniqueLists(localValues, cloudValues) {
  return unique([...(localValues || []), ...(cloudValues || [])]).slice(0, INPUT_HISTORY_LIMIT);
}

function mergeFeedbackHistory(localItems, cloudItems) {
  const seen = new Set();
  return [...(localItems || []), ...(cloudItems || [])]
    .filter((item) => {
      const key = `${item?.time || ""}|${item?.student || ""}|${item?.text || ""}`;
      if (!item || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
}

function normalizeStudentProfile(student) {
  const source = student && typeof student === "object" ? student : {};
  const name = String(source.name || "").trim();
  if (!name) return null;
  return {
    id: String(source.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    name,
    stage: String(source.stage || "初中").trim(),
    grade: String(source.grade || "").trim(),
    subject: String(source.subject || "").trim(),
    updatedAt: Number(source.updatedAt) || Date.now()
  };
}

function getStudentProfiles() {
  const raw = readJsonStorage(STUDENT_PROFILE_KEY, []);
  return Array.isArray(raw)
    ? raw.map(normalizeStudentProfile).filter(Boolean).slice(0, STUDENT_PROFILE_LIMIT)
    : [];
}

async function saveStudentProfiles(students, shouldSync = true) {
  const normalized = mergeStudentProfiles(students, []);
  localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(normalized));
  renderStudentList();
  if (shouldSync) return syncTeacherProfileNow();
  return true;
}

function mergeStudentProfiles(localItems, cloudItems) {
  const map = new Map();
  [...(cloudItems || []), ...(localItems || [])]
    .map(normalizeStudentProfile)
    .filter(Boolean)
    .forEach((student) => {
      const key = `${student.name}|${student.stage}|${student.grade}|${student.subject}`;
      const existing = map.get(key);
      if (!existing || student.updatedAt >= existing.updatedAt) {
        map.set(key, student);
      }
    });
  return [...map.values()]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, STUDENT_PROFILE_LIMIT);
}

async function loadCloudProfile() {
  const token = getTeacherToken();
  if (!token) return;
  try {
    const data = await requestTeacherAuth({ action: "getProfile", token });
    const profile = data.profile || {};
    const localProfile = getLocalProfile();
    const studentNames = mergeUniqueLists(localProfile.studentNames, profile.studentNames);
    const accessCodes = mergeUniqueLists(localProfile.accessCodes, profile.accessCodes);
    const feedbackHistory = mergeFeedbackHistory(localProfile.feedbackHistory, profile.feedbackHistory);
    const students = mergeStudentProfiles(localProfile.students, profile.students);
    localStorage.setItem(STUDENT_NAME_HISTORY_KEY, JSON.stringify(studentNames));
    localStorage.setItem(ACCESS_CODE_HISTORY_KEY, JSON.stringify(accessCodes));
    localStorage.setItem("feedbackHistory", JSON.stringify(feedbackHistory.slice(0, 8)));
    localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(students));
    renderInputHistories();
    renderStudentList();
    renderHistory();
    syncTeacherProfileDebounced(200);
  } catch {
    // 账号资料同步失败时保留本地记录，避免影响核心生成流程。
  }
}

function syncTeacherProfileDebounced(delay = 800) {
  const token = getTeacherToken();
  if (!token) return;
  clearTimeout(profileSyncTimer);
  profileSyncTimer = setTimeout(() => {
    syncTeacherProfileNow();
  }, delay);
}

async function syncTeacherProfileNow() {
  const token = getTeacherToken();
  if (!token) return false;
  clearTimeout(profileSyncTimer);
  try {
    await requestTeacherAuth({
      action: "saveProfile",
      token,
      profile: getLocalProfile()
    });
    return true;
  } catch {
    return false;
  }
}

async function changeTeacherPassword() {
  const token = getTeacherToken();
  if (!token) return;
  const oldPassword = prompt("请输入当前密码");
  if (oldPassword === null) return;
  const newPassword = prompt("请输入新密码（至少 8 位）");
  if (newPassword === null) return;
  if (newPassword.length < 8) {
    alert("新密码至少 8 位");
    return;
  }
  const confirmPassword = prompt("请再次输入新密码");
  if (confirmPassword === null) return;
  if (newPassword !== confirmPassword) {
    alert("两次输入的新密码不一致");
    return;
  }
  try {
    await requestTeacherAuth({ action: "changePassword", token, oldPassword, newPassword });
    alert("密码已修改，请重新登录");
    await logoutTeacher();
  } catch (error) {
    alert(error.message || "修改密码失败，请稍后再试");
  }
}

async function logoutTeacher() {
  const token = getTeacherToken();
  if (token) {
    requestTeacherAuth({ action: "logout", token }).catch(() => {});
  }
  localStorage.removeItem(TEACHER_SESSION_KEY);
  currentTeacherSession = null;
  showAuthScreen();
}

function setDrawerOpen(isOpen) {
  document.body.classList.toggle("drawer-open", isOpen);
  els.mobileMenu?.setAttribute("aria-expanded", String(isOpen));
  if (els.drawerBackdrop) {
    els.drawerBackdrop.hidden = !isOpen;
  }
}

function setWorkbenchView(view) {
  const isStudents = view === "students";
  els.studentManager?.classList.toggle("view-hidden", !isStudents);
  els.feedbackPanels?.forEach((panel) => panel.classList.toggle("view-hidden", isStudents));
  els.workbenchItems?.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  if (isStudents) renderStudentList();
  setDrawerOpen(false);
}

function bindMobileDrawer() {
  els.mobileMenu?.addEventListener("click", () => {
    setDrawerOpen(!document.body.classList.contains("drawer-open"));
  });
  els.drawerBackdrop?.addEventListener("click", () => setDrawerOpen(false));
  els.workbenchItems?.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.dataset.soon) {
        alert(item.dataset.soon);
        setDrawerOpen(false);
        return;
      }
      if (item.dataset.view) {
        setWorkbenchView(item.dataset.view);
        return;
      }
      setDrawerOpen(false);
    });
  });
  els.changePassword?.addEventListener("click", changeTeacherPassword);
  els.logout?.addEventListener("click", logoutTeacher);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      setDrawerOpen(false);
    }
  });
}

function applyAuthMode(mode) {
  authMode = mode;
  const isRegister = mode === "register";
  els.loginTab?.classList.toggle("active", !isRegister);
  els.registerTab?.classList.toggle("active", isRegister);
  if (els.authTitle) els.authTitle.textContent = isRegister ? "创建老师账号" : "老师工作台";
  if (els.authSubtitle) {
    els.authSubtitle.textContent = isRegister
      ? "注册成功后自动进入工作台。"
      : "请使用已注册账号登录，未注册请先切换到注册。";
  }
  if (els.authSubmit) els.authSubmit.textContent = isRegister ? "注册并进入" : "登录工作台";
  if (els.authPhoneField) els.authPhoneField.hidden = !isRegister;
  if (els.authConfirmField) els.authConfirmField.hidden = !isRegister;
  if (els.authPassword) els.authPassword.autocomplete = isRegister ? "new-password" : "current-password";
  if (els.authConfirm) els.authConfirm.value = "";
  setAuthMessage(isRegister ? "" : "还没有账号的老师，请先点击右侧「注册」。");
  if (isRegister) showRegisterNoticeOnce();
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (authLoading) return;
  const account = els.authAccount?.value.trim() || "";
  const phone = els.authPhone?.value.trim() || "";
  const password = els.authPassword?.value || "";
  const confirmPassword = els.authConfirm?.value || "";

  if (!account) {
    setAuthMessage("请先输入账号。");
    return;
  }
  if (password.length < 8) {
    setAuthMessage("密码至少 8 位。");
    return;
  }

  if (authMode === "register") {
    if (password !== confirmPassword) {
      setAuthMessage("两次输入的密码不一致。");
      return;
    }
    try {
      setAuthLoading(true);
      const data = await requestTeacherAuth({ action: "register", account, phone, password });
      setAuthMessage("注册成功，正在进入工作台。", true);
      showAppForTeacher(data.account, data.token);
    } catch (error) {
      setAuthMessage(error.message || "注册失败，请稍后再试。");
    } finally {
      setAuthLoading(false);
    }
    return;
  }

  try {
    setAuthLoading(true);
    const data = await requestTeacherAuth({ action: "login", account, password });
    setAuthMessage("登录成功，正在进入工作台。", true);
    showAppForTeacher(data.account, data.token);
  } catch (error) {
    setAuthMessage(error.message || "登录失败，请先确认账号是否已注册。");
  } finally {
    setAuthLoading(false);
  }
}

function bindAuthEvents() {
  els.loginTab?.addEventListener("click", () => {
    if (!authLoading) applyAuthMode("login");
  });
  els.registerTab?.addEventListener("click", () => {
    if (!authLoading) applyAuthMode("register");
  });
  els.authForm?.addEventListener("submit", handleAuthSubmit);
  els.qrThumb?.addEventListener("click", openQrModal);
  els.sideQr?.addEventListener("click", openQrModal);
  els.qrModalClose?.addEventListener("click", closeQrModal);
  els.qrModalCloseBtn?.addEventListener("click", closeQrModal);
  els.registerNoticeBackdrop?.addEventListener("click", closeRegisterNotice);
  els.registerNoticeConfirm?.addEventListener("click", closeRegisterNotice);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (els.registerNotice && !els.registerNotice.hidden) {
      closeRegisterNotice();
      return;
    }
    if (els.qrModal && !els.qrModal.hidden) {
      closeQrModal();
    }
  });
  applyAuthMode("login");

  try {
    const session = JSON.parse(localStorage.getItem(TEACHER_SESSION_KEY) || "null");
    if (session?.token) {
      requestTeacherAuth({ action: "session", token: session.token })
        .then((data) => showAppForTeacher(data.account, data.token || session.token))
        .catch(() => {
          localStorage.removeItem(TEACHER_SESSION_KEY);
          showAuthScreen();
        });
    } else {
      localStorage.removeItem(TEACHER_SESSION_KEY);
      showAuthScreen();
    }
  } catch {
    localStorage.removeItem(TEACHER_SESSION_KEY);
    showAuthScreen();
  }
}

function boot() {
  bindAuthEvents();
  bindMobileDrawer();
  if (els.lessonDate) els.lessonDate.value = getTodayInputValue();
  if (els.accessCode) els.accessCode.value = localStorage.getItem("feedbackAccessCode") || "";
  renderInputHistories();
  fillSelect(els.stage, unique(knowledgeBase.map((item) => item.stage)), "初中");
  updateGrades("初中", "初三");
  updateSubjects("初中", "初三", "数学");
  updateTopics("初中", "初三", "数学");
  initStudentManager();
  bindEvents();
  renderHistory();
}

function updateGrades(stage, selected) {
  fillSelect(els.grade, getGradesForStage(stage), selected);
}

function updateSubjects(stage, grade, selected) {
  fillSelect(els.subject, getSubjectsForStageGrade(stage, grade), selected);
}

function getGradesForStage(stage) {
  return unique(knowledgeBase.filter((item) => item.stage === stage).map((item) => item.grade));
}

function getSubjectsForStageGrade(stage, grade) {
  const exact = knowledgeBase.filter((item) => item.stage === stage && item.grade === grade).map((item) => item.subject);
  const fallbackSubjects = stage === "小学"
    ? ["语文", "数学", "英语"]
    : stage === "初中"
      ? ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "科学", "历史", "政治"]
      : ["语文", "数学", "英语", "物理", "化学", "生物", "地理"];
  return unique([...exact, ...fallbackSubjects]);
}

function initStudentManager() {
  if (!els.managedStudentStage) return;
  fillSelect(els.managedStudentStage, unique(knowledgeBase.map((item) => item.stage)), els.stage?.value || "初中");
  updateManagedStudentGrades(els.grade?.value || "初三");
  updateManagedStudentSubjects(els.subject?.value || "数学");
  renderStudentList();
}

function updateManagedStudentGrades(selected) {
  if (!els.managedStudentStage || !els.managedStudentGrade) return;
  fillSelect(els.managedStudentGrade, getGradesForStage(els.managedStudentStage.value), selected);
}

function updateManagedStudentSubjects(selected) {
  if (!els.managedStudentStage || !els.managedStudentGrade || !els.managedStudentSubject) return;
  fillSelect(
    els.managedStudentSubject,
    getSubjectsForStageGrade(els.managedStudentStage.value, els.managedStudentGrade.value),
    selected
  );
}

function renderStudentList() {
  if (!els.studentList) return;
  const students = getStudentProfiles();
  if (!students.length) {
    els.studentList.innerHTML = `<div class="student-empty">还没有学生档案。先录入常用学生，后续生成反馈时可直接选用。</div>`;
    return;
  }
  els.studentList.innerHTML = students.map((student) => `
    <div class="student-card" data-id="${escapeHtml(student.id)}">
      <button class="student-card-main" type="button" data-action="select">
        <strong>${escapeHtml(student.name)}</strong>
        <span>${escapeHtml(student.stage)} · ${escapeHtml(student.grade)} · ${escapeHtml(student.subject)}</span>
      </button>
      <button class="student-delete" type="button" data-action="delete">删除</button>
    </div>
  `).join("");
}

async function addManagedStudent() {
  const student = normalizeStudentProfile({
    name: els.managedStudentName?.value,
    stage: els.managedStudentStage?.value,
    grade: els.managedStudentGrade?.value,
    subject: els.managedStudentSubject?.value,
    updatedAt: Date.now()
  });
  if (!student) {
    alert("请先填写学生姓名");
    return;
  }
  const students = getStudentProfiles().filter((item) => {
    return !(
      item.name === student.name &&
      item.stage === student.stage &&
      item.grade === student.grade &&
      item.subject === student.subject
    );
  });
  const originalText = els.addStudent?.textContent || "";
  if (els.addStudent) {
    els.addStudent.disabled = true;
    els.addStudent.textContent = "保存中...";
  }
  const synced = await saveStudentProfiles([student, ...students]);
  rememberInputValue(STUDENT_NAME_HISTORY_KEY, student.name);
  renderInputHistories();
  if (els.managedStudentName) els.managedStudentName.value = "";
  if (els.addStudent) {
    els.addStudent.disabled = false;
    els.addStudent.textContent = originalText || "保存学生";
  }
  if (!synced && getTeacherToken()) {
    alert("学生已保存在本机，但云端同步失败。请检查网络或重新登录后再试。");
  }
}

function selectManagedStudent(student) {
  if (!student) return;
  if (els.studentName) els.studentName.value = student.name;
  if (els.stage) {
    els.stage.value = student.stage;
    updateGrades(student.stage, student.grade);
    updateSubjects(student.stage, student.grade, student.subject);
    updateTopics(student.stage, student.grade, student.subject);
  }
  rememberInputValue(STUDENT_NAME_HISTORY_KEY, student.name);
  renderInputHistories();
  setWorkbenchView("feedback");
}

function applyStudentProfileByName(name) {
  const normalizedName = String(name || "").trim();
  if (!normalizedName) return false;
  const candidates = getStudentProfiles().filter((student) => student.name === normalizedName);
  if (!candidates.length) return false;
  const currentMatch = candidates.find((student) =>
    student.stage === els.stage?.value &&
    student.grade === els.grade?.value &&
    student.subject === els.subject?.value
  );
  const student = currentMatch || candidates[0];
  if (els.stage) {
    els.stage.value = student.stage;
    updateGrades(student.stage, student.grade);
    updateSubjects(student.stage, student.grade, student.subject);
    updateTopics(student.stage, student.grade, student.subject);
  }
  return true;
}

async function deleteManagedStudent(studentId) {
  const students = getStudentProfiles().filter((student) => student.id !== studentId);
  const synced = await saveStudentProfiles(students);
  if (!synced && getTeacherToken()) {
    alert("本机已删除，但云端同步失败。其他设备可能仍会看到该学生。");
  }
}

function updateTopics(stage, grade, subject, selected) {
  const matches = getScopedTopics(stage, grade, subject);
  const topics = matches.map((item) => item.topic);
  const fallbackTopic = subjectDefaults[subject]?.topic || "本节课重点内容";
  fillSelect(els.topic, unique([...topics, fallbackTopic]), selected);
  const availableTopics = new Set(unique([...topics, fallbackTopic]));
  state.selectedTopics = state.selectedTopics.filter((topic) => availableTopics.has(topic));
  if (selected && availableTopics.has(selected) && !state.selectedTopics.includes(selected)) {
    state.selectedTopics = [selected];
  }
  renderMatches();
  renderTopicBrief();
}

function getScopedTopics(stage = els.stage.value, grade = els.grade.value, subject = els.subject.value) {
  return knowledgeBase.filter((item) => item.stage === stage && item.grade === grade && item.subject === subject);
}

function renderMatches() {
  const query = els.topicSearch.value.trim().toLowerCase();
  const scoped = query ? getSearchScope(query) : getScopedTopics();
  const results = query
    ? scoped
        .map((item) => ({ item, score: scoreTopic(item, query) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map((entry) => entry.item)
    : scoped.slice(0, 6);

  if (!results.length) {
    els.matchList.innerHTML = `
      <div class="match-empty">
        未找到匹配知识点，可换用更短关键词，例如“函数”“翻译”“电路”“平衡”“作文”。
      </div>
    `;
    return;
  }

  els.matchList.innerHTML = results.map((item) => `
    <button class="match-card${state.selectedTopics.includes(item.topic) ? " active" : ""}" type="button" data-topic="${item.topic}">
      <strong>${item.topic}</strong>
      <span>${item.exam}</span>
    </button>
  `).join("");

  els.matchList.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      const topicList = getScopedTopics().map((item) => item.topic);
      fillSelect(els.topic, unique([button.dataset.topic, ...topicList, ...scoped.map((item) => item.topic)]), button.dataset.topic);
      toggleSelectedTopic(button.dataset.topic);
      renderMatches();
      renderTopicBrief();
    });
  });
}

function scoreTopic(item, query) {
  const tokens = query.split(/[\s,，、;；]+/).filter(Boolean);
  const relatedBoost = getRelatedBoost(item, query);
  const blockBoost = getBlockBoost(item);
  return tokens.reduce((score, token) => {
    if (item.topic.toLowerCase().includes(token)) score += 8;
    if (item.exam.toLowerCase().includes(token)) score += 4;
    if (item.weak.toLowerCase().includes(token)) score += 3;
    if (item.advice.toLowerCase().includes(token)) score += 2;
    if (item.aliases.some((word) => word.toLowerCase().includes(token) || token.includes(word.toLowerCase()))) score += 5;
    if (item.searchText.includes(token)) score += 1;
    return score;
  }, relatedBoost + blockBoost);
}

function getSearchScope(query) {
  const exact = getScopedTopics();
  const sameStage = knowledgeBase.filter((item) =>
    item.stage === els.stage.value && item.subject === els.subject.value
  );
  const sameSubject = knowledgeBase.filter((item) => item.subject === els.subject.value);
  const candidates = uniqueItems([...exact, ...sameStage, ...sameSubject]);
  const hasScopedHit = exact.some((item) => scoreTopic(item, query) > 0);
  return hasScopedHit ? candidates : uniqueItems([...sameStage, ...sameSubject]);
}

function uniqueItems(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.stage}|${item.grade}|${item.subject}|${item.topic}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getRelatedBoost(item, query) {
  const relationMap = [
    {
      keywords: ["分式方程增根", "增根", "验根"],
      topics: ["分式方程验根与增根", "分式方程与应用", "分式有意义和值为零条件"]
    },
    {
      keywords: ["实验探究题", "实验探究", "探究题"],
      topics: ["实验探究题", "实验方案设计与评价", "常见仪器与基本操作", "气密性检查与装置连接", "氧气、二氧化碳检验与验满"]
    },
    {
      keywords: ["浮力计算", "浮力", "漂浮", "悬浮"],
      topics: ["阿基米德原理", "浮沉条件", "密度公式与单位换算", "压强公式", "液体压强"]
    },
    {
      keywords: ["二次函数压轴", "二次函数", "抛物线"],
      topics: ["二次函数三种解析式", "二次函数顶点与对称轴", "二次函数最值与实际应用", "二次函数与几何综合"]
    },
    {
      keywords: ["电解池", "原电池", "电化学"],
      topics: ["原电池原理与电极反应式", "电解池原理与电镀电解精炼", "金属腐蚀与防护"]
    },
    {
      keywords: ["文言翻译", "文言文翻译", "翻译"],
      topics: ["文言特殊句式", "文言长句翻译", "文言实词多义项", "文言虚词：之其而以于为"]
    }
  ];
  return relationMap.some((group) =>
    group.keywords.some((keyword) => query.includes(keyword)) && group.topics.includes(item.topic)
  ) ? 10 : 0;
}

function getBlockBoost(item) {
  const blockWords = {
    "教材同步": ["课本", "单元", "基础", "例题", "随堂", "教材", "课内", "定义", "概念"],
    "专题突破": ["专题", "重难点", "易错", "高频", "专项", "综合", "核心", "压轴", "难点"],
    "题型集训": ["题型", "选择", "填空", "解答", "实验", "阅读", "完形", "真题", "计算", "应用"],
    "错题精讲": ["错", "错因", "易错", "变式", "薄弱", "混淆", "遗漏", "不稳", "不熟"],
    "应试提分": ["模板", "技巧", "规范", "考场", "冲刺", "答题", "表达", "公式", "步骤"]
  }[state.block] || [];

  return blockWords.reduce((score, word) => {
    return score + (item.searchText.includes(word) ? 2 : 0);
  }, 0);
}

function toggleSelectedTopic(topic) {
  if (!topic) return;
  if (state.selectedTopics.includes(topic)) {
    state.selectedTopics = state.selectedTopics.filter((item) => item !== topic);
  } else {
    state.selectedTopics = unique([...state.selectedTopics, topic]);
  }
}

function getSelectedTopicItems() {
  const selected = state.selectedTopics;
  return selected.map((topic) => {
    return knowledgeBase.find((item) =>
      item.stage === els.stage.value &&
      item.grade === els.grade.value &&
      item.subject === els.subject.value &&
      item.topic === topic
    ) || {
      stage: els.stage.value,
      grade: els.grade.value,
      subject: els.subject.value,
      ...subjectDefaults[els.subject.value],
      topic
    };
  });
}

function getFallbackTopicData() {
  return knowledgeBase.find((item) =>
    item.stage === els.stage.value &&
    item.grade === els.grade.value &&
    item.subject === els.subject.value &&
    item.topic === els.topic.value
  ) || {
    stage: els.stage.value,
    grade: els.grade.value,
    subject: els.subject.value,
    ...subjectDefaults[els.subject.value],
    topic: els.topic.value
  };
}

function renderSelectedTopics() {
  if (!els.selectedTopicList) return;
  const customTopic = getCustomTopic();
  if (customTopic) {
    els.selectedTopicList.innerHTML = `
      <div class="custom-topic-note">已填写自定义授课知识点，生成时将优先使用这里的内容，内置知识点不用再选择。</div>
    `;
    return;
  }

  if (!state.selectedTopics.length) {
    els.selectedTopicList.innerHTML = `<div class="selected-topic-empty">可从上方匹配结果中多选知识点。</div>`;
    return;
  }

  els.selectedTopicList.innerHTML = state.selectedTopics.map((topic) => `
    <button class="selected-topic-chip" type="button" data-topic="${topic}" title="点击取消选择">${topic}<span>×</span></button>
  `).join("");

  els.selectedTopicList.querySelectorAll(".selected-topic-chip").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSelectedTopic(button.dataset.topic);
      renderMatches();
      renderTopicBrief();
    });
  });
}

function getTopicData() {
  const selectedItems = getSelectedTopicItems();
  const base = { ...(selectedItems[0] || getFallbackTopicData()) };
  if (selectedItems.length > 1) {
    base.topic = selectedItems.map((item) => item.topic).join("、");
    base.exam = unique(selectedItems.map((item) => item.exam)).join("；");
    base.weak = unique(selectedItems.map((item) => item.weak)).join("；");
    base.advice = unique(selectedItems.map((item) => item.advice)).join("；");
  }
  const customTopic = getCustomTopic();
  if (!customTopic) return base;
  const boardContent = getBoardContent();
  return {
    ...base,
    topic: customTopic,
    baseTopic: "",
    exam: boardContent ? "教师上传板书/讲义识别内容" : `${base.exam}；教师自定义授课内容`,
    weak: "需结合本节课实际内容判断具体掌握情况",
    advice: "课后围绕本节课实际讲授内容完成复盘、订正和同类练习"
  };
}

function renderTopicBrief() {
  if (!els.topicBrief) {
    renderSelectedTopics();
    return;
  }
  const data = getTopicData();
  renderSelectedTopics();
  els.topicBrief.innerHTML = `
    <strong>${data.exam}</strong>
    <span>常见薄弱点：${data.weak}</span>
  `;
}

function bindEvents() {
  els.studentName?.addEventListener("change", () => {
    rememberInputValue(STUDENT_NAME_HISTORY_KEY, els.studentName.value);
    applyStudentProfileByName(els.studentName.value);
    renderInputHistories();
  });

  els.studentName?.addEventListener("input", () => {
    applyStudentProfileByName(els.studentName.value);
  });

  els.stage.addEventListener("change", () => {
    updateGrades(els.stage.value);
    updateSubjects(els.stage.value, els.grade.value);
    updateTopics(els.stage.value, els.grade.value, els.subject.value);
  });

  els.grade.addEventListener("change", () => {
    updateSubjects(els.stage.value, els.grade.value, els.subject.value);
    updateTopics(els.stage.value, els.grade.value, els.subject.value);
  });

  els.subject.addEventListener("change", () => {
    updateTopics(els.stage.value, els.grade.value, els.subject.value);
  });

  els.managedStudentStage?.addEventListener("change", () => {
    updateManagedStudentGrades();
    updateManagedStudentSubjects();
  });

  els.managedStudentGrade?.addEventListener("change", () => {
    updateManagedStudentSubjects();
  });

  els.addStudent?.addEventListener("click", addManagedStudent);

  els.studentList?.addEventListener("click", (event) => {
    const card = event.target.closest(".student-card");
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!card || !action) return;
    const studentId = card.dataset.id;
    if (action === "delete") {
      deleteManagedStudent(studentId);
      return;
    }
    const student = getStudentProfiles().find((item) => item.id === studentId);
    selectManagedStudent(student);
  });

  els.blockSelect.addEventListener("click", (event) => {
    const button = event.target.closest(".block-option");
    if (!button) return;
    els.blockSelect.querySelectorAll(".block-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.block = button.dataset.block;
    updateBlockSummary();
    button.closest("details")?.removeAttribute("open");
    renderMatches();
    renderTopicBrief();
  });

  els.topicSearch.addEventListener("input", renderMatches);

  els.customTopic?.addEventListener("input", () => {
    renderMatches();
    renderTopicBrief();
  });

  els.boardImage?.addEventListener("change", handleBoardImageChange);
  bindBoardDropZone();
  els.boardText?.addEventListener("input", () => {
    renderMatches();
    renderTopicBrief();
  });
  els.recognizeBoard?.addEventListener("click", recognizeBoardImage);
  els.clearBoard?.addEventListener("click", clearBoardRecognition);

  els.accessCode?.addEventListener("input", () => {
    localStorage.setItem("feedbackAccessCode", els.accessCode.value.trim());
  });

  els.accessCode?.addEventListener("change", () => {
    localStorage.setItem("feedbackAccessCode", els.accessCode.value.trim());
    rememberInputValue(ACCESS_CODE_HISTORY_KEY, els.accessCode.value);
    renderInputHistories();
  });

  els.topic.addEventListener("change", () => {
    if (els.topic.value && !state.selectedTopics.includes(els.topic.value)) {
      state.selectedTopics = unique([...state.selectedTopics, els.topic.value]);
    }
    renderMatches();
    renderTopicBrief();
  });

  document.querySelectorAll(".choice-group").forEach((group) => {
    group.addEventListener("click", (event) => {
      if (!event.target.classList.contains("choice")) return;
      group.querySelectorAll(".choice").forEach((button) => button.classList.remove("active"));
      event.target.classList.add("active");
      state[group.dataset.key] = event.target.dataset.value;
      if (group.dataset.key === "tone") state.variant = 0;
    });
  });

  els.generate.addEventListener("click", () => handleGenerate(false));

  els.polish.addEventListener("click", () => handleGenerate(true));

  els.copy.addEventListener("click", copyResult);
  els.reset.addEventListener("click", resetForm);
  els.clearHistory.addEventListener("click", () => {
    localStorage.removeItem("feedbackHistory");
    renderHistory();
  });

  bindInputHistoryChips(els.studentNameHistoryChips, els.studentName, (value) => {
    applyStudentProfileByName(value);
  });
  bindInputHistoryChips(els.accessCodeHistoryChips, els.accessCode, (value) => {
    localStorage.setItem("feedbackAccessCode", value);
  });
}

async function handleGenerate(isRewrite) {
  if (isRewrite) {
    state.variant += 1;
  } else {
    state.variant = 0;
  }

  setGenerating(true);

  try {
    rememberCurrentInputs();
    if (!getAccessCode()) {
      throw new Error("未填写AI授权码");
    }
    const text = await generateFeedbackByAI();
    els.result.value = text;
    saveHistory(text);
  } catch (error) {
    const text = generateFeedback();
    els.result.value = text;
    saveHistory(text);
    els.qualityTip.textContent = `AI生成暂时不可用，已自动使用本地规则生成备用反馈。原因：${error.message || "接口返回异常"}`;
  } finally {
    setGenerating(false);
  }
}

function readInputHistory(key) {
  try {
    const values = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(values) ? values.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function rememberInputValue(key, value) {
  const cleanValue = String(value || "").trim();
  if (!cleanValue) return;
  const history = readInputHistory(key).filter((item) => item !== cleanValue);
  history.unshift(cleanValue);
  localStorage.setItem(key, JSON.stringify(history.slice(0, INPUT_HISTORY_LIMIT)));
  syncTeacherProfileDebounced();
}

function rememberCurrentInputs() {
  rememberInputValue(STUDENT_NAME_HISTORY_KEY, els.studentName?.value);
  rememberInputValue(ACCESS_CODE_HISTORY_KEY, els.accessCode?.value);
  if (els.accessCode?.value.trim()) {
    localStorage.setItem("feedbackAccessCode", els.accessCode.value.trim());
  }
  renderInputHistories();
}

function renderInputHistories() {
  const studentNames = readInputHistory(STUDENT_NAME_HISTORY_KEY);
  const accessCodes = readInputHistory(ACCESS_CODE_HISTORY_KEY);
  const students = getStudentProfiles();
  renderStudentNameDatalist(els.studentNameHistory, studentNames, students);
  renderDatalist(els.accessCodeHistory, accessCodes);
  renderStudentProfileChips(els.studentNameHistoryChips, studentNames, students);
  renderHistoryChips(els.accessCodeHistoryChips, accessCodes);
}

function renderDatalist(list, values) {
  if (!list) return;
  list.innerHTML = values.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
}

function renderStudentNameDatalist(list, names, students) {
  if (!list) return;
  const studentOptions = (students || []).map((student) => (
    `<option value="${escapeHtml(student.name)}" label="${escapeHtml(`${student.grade} · ${student.subject}`)}"></option>`
  ));
  const nameOptions = (names || [])
    .filter((name) => !(students || []).some((student) => student.name === name))
    .map((name) => `<option value="${escapeHtml(name)}"></option>`);
  list.innerHTML = [...studentOptions, ...nameOptions].join("");
}

function renderHistoryChips(container, values) {
  if (!container) return;
  container.innerHTML = values.slice(0, 5).map((value) => (
    `<button type="button" data-value="${escapeHtml(value)}">${escapeHtml(value)}</button>`
  )).join("");
}

function renderStudentProfileChips(container, names, students) {
  if (!container) return;
  const studentButtons = (students || []).slice(0, 8).map((student) => `
    <button class="student-profile-chip" type="button" data-student-id="${escapeHtml(student.id)}" data-value="${escapeHtml(student.name)}">
      <strong>${escapeHtml(student.name)}</strong>
      <span>${escapeHtml(student.grade)} · ${escapeHtml(student.subject)}</span>
    </button>
  `);
  const studentNames = new Set((students || []).map((student) => student.name));
  const historyButtons = (names || [])
    .filter((name) => !studentNames.has(name))
    .slice(0, 5)
    .map((name) => `<button type="button" data-value="${escapeHtml(name)}">${escapeHtml(name)}</button>`);
  container.innerHTML = [...studentButtons, ...historyButtons].join("");
}

function bindInputHistoryChips(container, input, afterPick) {
  if (!container || !input) return;
  container.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-value]");
    if (!button) return;
    if (button.dataset.studentId) {
      const student = getStudentProfiles().find((item) => item.id === button.dataset.studentId);
      if (student) {
        selectManagedStudent(student);
        return;
      }
    }
    input.value = button.dataset.value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    if (afterPick) afterPick(button.dataset.value);
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function handleBoardImageChange() {
  await loadBoardFiles(els.boardImage?.files);
}

function bindBoardDropZone() {
  if (!els.boardDropZone) return;
  ["dragenter", "dragover"].forEach((eventName) => {
    els.boardDropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.boardDropZone.classList.add("drag-over");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    els.boardDropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.boardDropZone.classList.remove("drag-over");
    });
  });
  els.boardDropZone.addEventListener("drop", async (event) => {
    await loadBoardFiles(event.dataTransfer?.files);
  });
}

async function loadBoardFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
  if (!files.length) {
    setBoardStatus("请上传图片格式的板书或讲义资料。", true);
    return;
  }

  boardImageFiles = [...boardImageFiles, ...files];
  renderBoardPreviews();
  setBoardStatus(`已上传${boardImageFiles.length}张图片，正在调用AI识别...`);
  await recognizeBoardImage();
}

async function recognizeBoardImage() {
  if (!boardImageFiles.length) {
    setBoardStatus("请先拍照、上传或拖拽板书图片。", true);
    return;
  }
  if (!getAccessCode()) {
    setBoardStatus("请先填写AI授权码，再使用图片智能识别。", true);
    return;
  }

  setBoardRecognizing(true);
  try {
    const images = [];
    for (let index = 0; index < boardImageFiles.length; index += 1) {
      setBoardStatus(`正在压缩第${index + 1}/${boardImageFiles.length}张图片...`);
      images.push({
        name: boardImageFiles[index].name || `page-${index + 1}.jpg`,
        dataUrl: await imageFileToDataUrl(boardImageFiles[index])
      });
    }
    setBoardStatus("正在由AI识别板书/讲义内容...");
    const text = await recognizeBoardByAI(images);
    if (!text) {
      setBoardStatus("AI未识别到清晰内容，可以重新拍摄更清楚的图片或手动输入。", true);
      return;
    }
    els.boardText.value = text;
    setBoardStatus("AI识别完成，内容已作为本节课授课资料参与反馈生成。");
    renderMatches();
    renderTopicBrief();
  } catch {
    setBoardStatus("AI识别失败，请检查视觉AI配置、网络或图片清晰度，也可直接粘贴课堂资料文字。", true);
  } finally {
    setBoardRecognizing(false);
  }
}

async function recognizeBoardByAI(images) {
  const response = await fetch("/api/vision", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accessCode: getAccessCode(),
      stage: els.stage.value,
      grade: els.grade.value,
      subject: els.subject.value,
      images
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "图片AI识别失败");
  }
  return normalizeBoardText(data.text || "");
}

function imageFileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 1280;
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
      URL.revokeObjectURL(image.src);
    };
    image.onerror = reject;
    image.src = URL.createObjectURL(file);
  });
}

function renderBoardPreviews() {
  if (!els.boardPreview) return;
  els.boardPreview.innerHTML = boardImageFiles.map((file, index) => (
    `<figure>
      <img src="${URL.createObjectURL(file)}" alt="板书第${index + 1}页">
      <figcaption>第${index + 1}页</figcaption>
    </figure>`
  )).join("");
  els.boardPreview.hidden = !boardImageFiles.length;
}

function normalizeBoardText(text) {
  return String(text)
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n")
    .trim();
}

function setBoardStatus(text, isError = false) {
  if (!els.boardStatus) return;
  els.boardStatus.textContent = text;
  els.boardStatus.classList.toggle("error", isError);
}

function setBoardRecognizing(isRecognizing) {
  if (els.recognizeBoard) {
    els.recognizeBoard.disabled = isRecognizing;
    els.recognizeBoard.textContent = isRecognizing ? "识别中..." : "重新识别";
  }
}

function clearBoardRecognition() {
  boardImageFiles = [];
  if (els.boardImage) els.boardImage.value = "";
  if (els.boardPreview) {
    els.boardPreview.hidden = true;
    els.boardPreview.innerHTML = "";
  }
  if (els.boardText) els.boardText.value = "";
  setBoardStatus("图片由AI智能识别；带识别内容生成反馈时，本次消耗4次AI授权额度。");
  renderMatches();
  renderTopicBrief();
}

function updateBlockSummary() {
  if (els.blockSummaryValue) els.blockSummaryValue.textContent = state.block;
}

function setGenerating(isGenerating) {
  els.generate.disabled = isGenerating;
  els.polish.disabled = isGenerating;
  els.generate.textContent = isGenerating ? "生成中..." : "一键生成反馈";
  els.polish.textContent = isGenerating ? "改写中..." : "换一种说法";
}

async function generateFeedbackByAI() {
  const payload = buildAIPayload();
  const endpoints = getAIEndpoints();
  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      return await requestAIEndpoint(endpoint, payload);
    } catch (error) {
      lastError = error;
      if (!isNetworkFetchError(error)) break;
    }
  }

  throw lastError || new Error("AI接口连接失败");
}

async function requestAIEndpoint(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.feedback) {
    throw new Error(data.error || data.raw?.error?.message || "AI生成失败");
  }

  els.qualityTip.textContent = data.usage
    ? `已通过AI生成反馈，本次消耗 ${data.usage.cost || 1} 次，授权码累计已用 ${data.usage.used}/${data.usage.limit} 次。`
    : "已通过AI结合课堂信息、知识点、表现细节和课后要求生成反馈。";
  return data.feedback;
}

function getAIEndpoints() {
  if (location.hostname.endsWith("pages.dev")) {
    return ["/api/feedback", WORKER_AI_ENDPOINT];
  }
  return [WORKER_AI_ENDPOINT];
}

function isNetworkFetchError(error) {
  return /Failed to fetch|Load failed|NetworkError/i.test(error?.message || "");
}

function buildAIPayload() {
  const data = getTopicData();
  const profile = buildFeedbackProfile(data);
  const customTopic = getCustomTopic();
  const boardContent = getBoardContent();
  const boardFirst = Boolean(boardContent);
  const manualTopic = els.customTopic?.value.trim() || "";
  const boardContext = inferBoardLearningContext(boardContent, data.subject);
  const effectiveSubject = boardFirst && boardContext.subject ? boardContext.subject : data.subject;
  const effectiveTopic = boardFirst
    ? (manualTopic || boardContext.topic || truncateText(boardContent, 80))
    : data.topic;

  return {
    studentName: getStudentName(),
    accessCode: getAccessCode(),
    stage: data.stage,
    grade: data.grade,
    subject: effectiveSubject,
    lessonDate: getLessonDateText(),
    lessonTime: getLessonTimeText(),
    lessonMeta: getLessonMetaText(),
    block: state.block,
    knowledgePoints: boardFirst ? [effectiveTopic] : getKnowledgePointNames(data),
    baseTopic: customTopic || boardFirst ? "" : data.baseTopic || "",
    customTopic: boardFirst ? manualTopic : customTopic,
    boardContent,
    topic: effectiveTopic,
    inferredSubject: boardContext.subject || "",
    inferredKnowledgePoint: boardContext.topic || "",
    exam: customTopic || boardFirst ? "" : data.exam,
    weakness: profile.weakness,
    advice: profile.advice,
    mastery: state.mastery,
    scoreLevel: state.scoreLevel,
    classroomState: state.state,
    homework: state.homework,
    participation: state.participation,
    habit: state.habit,
    output: state.output,
    tone: state.tone,
    issueLabel: profile.issue.label,
    issueReason: profile.issue.reason,
    issueManifest: profile.issue.manifest,
    classTask: profile.classTask,
    variant: state.variant
  };
}

function getAccessCode() {
  return els.accessCode?.value.trim() || "";
}

function getCustomTopic() {
  const manual = els.customTopic?.value.trim() || "";
  const boardContent = getBoardContent();
  return [
    manual ? `教师填写：${manual}` : "",
    boardContent ? `板书/资料识别：${truncateText(boardContent, 520)}` : ""
  ].filter(Boolean).join("；");
}

function getBoardContent() {
  return els.boardText?.value.trim() || "";
}

function inferSubjectFromBoard(text) {
  return inferBoardLearningContext(text).subject;
}

function inferBoardLearningContext(text, fallbackSubject = "") {
  const value = String(text || "").trim();
  if (!value) return { subject: "", topic: "" };

  const englishLetters = (value.match(/[A-Za-z]/g) || []).length;
  const chineseChars = (value.match(/[\u4e00-\u9fa5]/g) || []).length;
  const rules = [
    {
      subject: "英语",
      pattern: /\b(grammar|vocabulary|reading|writing|sentence|tense|verb|noun|adjective|pronoun|cloze|translation|listen|speak|unit|lesson|text|word|phrase|present|past|future|perfect|passive)\b/i,
      topics: [
        [/tense|present|past|future|perfect|时态|一般现在|一般过去|现在进行|将来时/i, "英语时态与句型运用"],
        [/reading|text|passage|阅读|理解/i, "英语阅读理解"],
        [/word|phrase|vocabulary|单词|短语|词汇/i, "英语词汇与短语积累"],
        [/writing|作文|书面表达/i, "英语书面表达"],
        [/grammar|sentence|verb|noun|pronoun|语法|句型|从句/i, "英语语法与句型"]
      ]
    },
    {
      subject: "数学",
      pattern: /函数|方程|不等式|几何|三角形|圆|坐标|解析式|抛物线|顶点|对称轴|因式分解|分式|根式|概率|统计|导数|数列|向量|集合|x\s*[+=<>]|y\s*=|[a-z]\^?2|π|sin|cos|tan/i,
      topics: [
        [/二次函数|抛物线|顶点|对称轴|开口|解析式/i, "二次函数图像与性质"],
        [/一次函数|正比例|反比例|函数图像/i, "函数图像与性质"],
        [/一元一次方程|二元一次|鸡兔同笼|方程组/i, "方程建模与应用"],
        [/几何|三角形|圆|相似|全等/i, "几何图形与证明"],
        [/导数|单调|极值|最值/i, "导数及其应用"]
      ]
    },
    {
      subject: "语文",
      pattern: /文言|古诗|阅读理解|修辞|作文|记叙文|说明文|议论文|字词|病句|标点|人物形象|中心思想|段意|默写/,
      topics: [
        [/文言|实词|虚词|翻译/i, "文言文阅读与翻译"],
        [/古诗|诗词|意象|情感/i, "古诗词鉴赏"],
        [/作文|写作|立意|选材/i, "作文审题与表达"],
        [/阅读|人物形象|中心思想|段意/i, "现代文阅读理解"]
      ]
    },
    {
      subject: "物理",
      pattern: /速度|密度|压强|浮力|电路|电流|电压|电阻|欧姆|功率|力学|受力|光的|透镜|磁场|电磁|动能|机械能|牛顿|加速度|动量/,
      topics: [
        [/电路|电流|电压|电阻|欧姆|功率/i, "电路与欧姆定律"],
        [/压强|浮力|阿基米德/i, "压强与浮力"],
        [/受力|牛顿|加速度|运动/i, "力与运动"],
        [/光|透镜|成像/i, "光学与透镜成像"]
      ]
    },
    {
      subject: "化学",
      pattern: /化学式|方程式|氧化|还原|酸|碱|盐|溶液|离子|元素|原子|分子|金属|有机物|实验室制取|CO2|O2|NaCl|HCl|NaOH/,
      topics: [
        [/酸|碱|盐|中和|pH/i, "酸碱盐性质与应用"],
        [/方程式|配平|化学式/i, "化学方程式书写与计算"],
        [/氧化|还原|离子/i, "氧化还原与离子反应"],
        [/实验|制取|检验/i, "化学实验与物质检验"]
      ]
    },
    {
      subject: "生物",
      pattern: /细胞|生态|光合作用|呼吸作用|遗传|基因|染色体|植物|动物|人体|消化|循环|神经|免疫|传染病|生物圈|DNA/,
      topics: [
        [/细胞|显微镜|组织|器官/i, "细胞结构与生命层次"],
        [/光合作用|呼吸作用|蒸腾/i, "绿色植物三大生理作用"],
        [/遗传|基因|染色体|DNA/i, "遗传与变异"],
        [/人体|消化|循环|神经|免疫/i, "人体生命活动调节"]
      ]
    },
    {
      subject: "地理",
      pattern: /经纬|地图|地球|气候|降水|地形|河流|人口|城市|农业|工业|区域|板块|洋流|等高线|中国地理|世界地理/,
      topics: [
        [/经纬|地图|等高线/i, "地球与地图"],
        [/气候|降水|气温|季风/i, "气候类型与成因"],
        [/地形|河流|资源|区域/i, "区域自然与人文地理"],
        [/农业|工业|城市|人口/i, "人文地理区位分析"]
      ]
    },
    {
      subject: "历史",
      pattern: /朝代|秦汉|隋唐|宋元|明清|鸦片战争|辛亥|五四|抗日|改革开放|工业革命|文艺复兴|世界大战|冷战|史前|夏商周/,
      topics: [
        [/秦汉|隋唐|宋元|明清|朝代/i, "中国古代史阶段特征"],
        [/鸦片战争|辛亥|五四|抗日|解放战争/i, "中国近代史重大事件"],
        [/改革开放|新中国|社会主义/i, "中国现代史发展线索"],
        [/工业革命|世界大战|冷战|文艺复兴/i, "世界近现代史"]
      ]
    },
    {
      subject: "政治",
      pattern: /道德与法治|宪法|法律|权利|义务|规则|责任|国家利益|民主|法治|改革开放|共同富裕|核心价值观|民族团结|生命|友谊|青春/,
      topics: [
        [/宪法|权利|义务|国家机构/i, "宪法与公民权利义务"],
        [/规则|责任|诚信|国家利益/i, "社会规则与责任担当"],
        [/民主|法治|改革开放|共同富裕/i, "民主法治与国家发展"],
        [/生命|友谊|青春|情绪/i, "成长心理与生命教育"]
      ]
    }
  ];

  let matched = rules.find((rule) => rule.pattern.test(value));
  if (!matched && englishLetters >= Math.max(20, chineseChars * 0.8)) {
    matched = rules[0];
  }

  const subject = matched?.subject || fallbackSubject || "";
  const topic = inferTopicFromRules(value, matched) || extractBoardTopic(value, subject);
  return { subject, topic };
}

function inferTopicFromRules(text, rule) {
  if (!rule?.topics) return "";
  const hit = rule.topics.find(([pattern]) => pattern.test(text));
  return hit ? hit[1] : "";
}

function extractBoardTopic(text, subject = "") {
  const cleaned = String(text || "")
    .replace(/第\s*\d+\s*页/g, "")
    .replace(/[【】[\]()*#]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const lines = cleaned.split(/[。；;：:\n]/).map((line) => line.trim()).filter(Boolean);
  const meaningful = lines.find((line) => line.length >= 4 && line.length <= 36) || lines[0] || cleaned;
  const topic = truncateText(meaningful || "", 36);
  return topic || (subject ? `${subject}课堂重点内容` : "板书识别课堂重点内容");
}

function getKnowledgePointNames(data = getTopicData()) {
  const customTopic = getCustomTopic();
  if (customTopic) return [customTopic];
  return state.selectedTopics.length ? [...state.selectedTopics] : [data.topic];
}

function generateFeedback() {
  const data = getTopicData();
  const studentName = getStudentName();
  const profile = buildFeedbackProfile(data);
  const opening = buildOpening(studentName);
  const courseIntro = buildCourseIntro(studentName, data);
  const scoreInsight = buildScoreInsight();
  const blockContext = buildBlockContext(data);
  const highlight = buildConcreteHighlight(data, profile);
  const issue = buildPreciseIssue(data, profile);
  const homework = buildGroundedHomework(data, profile);
  const teachingPlan = buildTeachingPlan(data, profile);
  const ending = buildGrowthEnding(profile);

  els.qualityTip.textContent = `已结合“${state.block}”“${data.topic}”“${profile.issue.label}”“${state.participation}”生成，内容包含课堂亮点、问题根源、课后检查和后续授课安排。`;
  return formatFeedback({
    data,
    opening,
    courseIntro,
    scoreInsight,
    blockContext,
    highlight,
    issue,
    homework,
    teachingPlan,
    ending
  });
}

function pick(options) {
  return options[state.variant % options.length];
}

function formatFeedback(parts) {
  const title = `${parts.data.subject} 课程课堂反馈`;
  const meta = getLessonMetaText();
  const content = `${parts.courseIntro}${parts.blockContext}${parts.scoreInsight}`;
  const feedback = `${parts.highlight}${parts.issue}${state.tone === "short" ? "" : parts.teachingPlan}`;
  const homework = `${parts.homework}${parts.ending}`;
  const header = meta ? `${title}\n${meta}` : title;

  if (state.tone === "short") {
    return formatShortFeedback(parts, header);
  }
  return `${header}\n①上课内容⭐\n${content}\n②课程反馈⭐\n${feedback}\n③课后作业⭐\n${homework}`;
}

function formatShortFeedback(parts, header) {
  const topic = truncateText(parts.data.topic || parts.data.customTopic || "本节知识点", 14);
  const issue = truncateText(parts.data.issueLabel || parts.data.weakness || "方法运用", 10);
  return `${header}\n①上课内容⭐\n学习${topic}，梳理核心方法。\n②课程反馈⭐\n课堂能跟上节奏，${issue}还需加强。\n③课后作业⭐\n订正错题，复盘同类题思路，后续继续巩固。`;
}

function truncateText(text, maxLength) {
  const value = String(text || "").trim();
  return value.length > maxLength ? `${value.slice(0, maxLength)}…` : value;
}

function getTodayInputValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getLessonDateText() {
  const value = els.lessonDate?.value || getTodayInputValue();
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  return `${year}年${Number(month)}月${Number(day)}日`;
}

function getLessonTimeText() {
  return els.lessonTime?.value.trim() || "";
}

function getLessonMetaText() {
  return [getLessonDateText(), getLessonTimeText()].filter(Boolean).join(" ");
}

function buildOpening(name) {
  return `${name}家长您好`;
}

function buildCourseIntro(name, data) {
  return pick([
    `今天${name}主要学习“${data.topic}”，课堂中结合练习看了掌握情况。`,
    `本节课围绕“${data.topic}”讲练，重点看孩子的理解和运用。`,
    `今天的${data.subject}重点放在“${data.topic}”，课堂中结合题目做了巩固。`,
    `本次课主要处理“${data.topic}”这一块，并观察孩子的课堂完成情况。`,
    `今天带${name}梳理了“${data.topic}”，同时看了相关题型的处理。`,
    `本节课围绕“${data.topic}”做了针对练习，重点看方法是否能落到题目中。`
  ]);
}

function buildScoreInsight() {
  const text = {
    "优秀": [
      "孩子对本节内容的承接能力较好，课堂中更适合在速度、规范和综合迁移上继续拉高要求。",
      "孩子具备继续拔高的基础，课堂中重点要把会做的题写得更完整、更有条理。",
      "孩子整体基础不错，后续训练不只停留在会做，还要关注综合题里的审题精度和表达质量。"
    ],
    "良好": [
      "孩子有一定基础，但还需要把易错环节和变式题处理得更扎实。",
      "孩子能够承接本节内容，本节课重点是把方法真正落到题目里。",
      "目前孩子基础可以承接新内容，后续要减少会听不会独立做、会做但细节丢分的情况。"
    ],
    "一般": [
      "孩子更需要先把基础概念、典型步骤和课后订正落实好，再逐步提升难度。",
      "孩子当前更适合先补清基础卡点，课堂中要多关注听懂之后能否独立复现。",
      "目前孩子需要把基础题的准确率先提上来，后续再逐步过渡到综合题和变式题训练。"
    ]
  }[state.scoreLevel];

  return text ? pick(text) : "";
}

function buildBlockContext(data) {
  const text = {
    "教材同步": [
      `这部分内容主要对接校内课堂学习，课堂中也同步关注了课本单元知识点、课中重难点和随堂练习。`,
      `本节课更偏教材同步，重点帮助孩子把课内正在学习的内容梳理清楚，并把课堂练习中的问题及时巩固。`,
      `课程安排上以校内进度为基础，围绕课本知识、课堂重难点和基础练习做了针对性整理。`
    ],
    "专题突破": [
      `本节课更偏专题突破，围绕${data.subject}中的模块重难点、易错点和高频考点做了集中训练。`,
      `今天的训练重点不是简单复习，而是把这一专题中的方法入口、常见陷阱和高频考法放在一起梳理。`,
      `课堂中针对该模块的易错环节进行了拆解，帮助孩子建立更清晰的题型意识和方法意识。`
    ],
    "题型集训": [
      `本节课以题型训练为主，重点帮助孩子熟悉相关题型的审题方式、解题步骤和常见设问。`,
      `今天主要通过题型集训来巩固方法，让孩子在练习中熟悉题目变化和作答节奏。`,
      `课堂上围绕典型题和变式题进行训练，重点提升孩子看到题目后快速判断考点和方法的能力。`
    ],
    "错题精讲": [
      `本节课重点围绕错题精讲展开，通过错因分析和同类变式练习帮助孩子找到问题根源。`,
      `今天不是简单订正错题，而是带孩子回看错误产生的原因，并用同类题帮助他把薄弱点补上。`,
      `课堂中重点拆解了孩子容易出错的环节，帮助他区分是知识点不熟、审题不细，还是方法迁移不到位。`
    ],
    "应试提分": [
      `本节课更侧重应试提分，主要训练答题模板、解题技巧和考场规范表达。`,
      `今天的课堂目标更偏向考试应用，重点帮助孩子把会的内容写对、写全，并尽量减少非知识性失分。`,
      `课堂中结合应试要求梳理了答题步骤和规范表达，让孩子在考试场景中把会的内容完整呈现出来。`
    ]
  }[state.block];
  return text ? pick(text) : "";
}

function buildFeedbackProfile(data) {
  const issue = getLearningIssue();
  return {
    issue,
    lens: getSubjectLens(data),
    type: getTypeProfile(data),
    plan: buildPersonalizedHomePlan(data),
    classTask: getClassDetail(data),
    weakness: cleanFeedbackText(data.weak),
    advice: cleanFeedbackText(data.advice)
  };
}

function cleanFeedbackText(text) {
  return String(text || "").trim().replace(/[。；;，,、\s]+$/g, "");
}

function getLearningIssue() {
  if (state.mastery === "需要巩固" && state.output === "需课后巩固") {
    return {
      label: "不会",
      root: "方法入口还没有真正固定，听讲时能跟上，但自己起步时缺少抓手",
      action: "先把基础入口和第一步判断补清楚"
    };
  }
  if (state.output === "提示后完成") {
    return {
      label: "迁移弱",
      root: "对常规题有理解，但题目条件变化后，模型和方法不能马上迁移",
      action: "把老师提示过的第一步变成孩子自己的判断习惯"
    };
  }
  if (state.habit === "审题需慢") {
    return {
      label: "粗心",
      root: "审题标记和题干回看不够，关键信息没有稳定进入解题过程",
      action: "先训练圈条件、看设问、再落笔"
    };
  }
  if (state.habit === "细节需稳" || state.homework === "部分错误") {
    return {
      label: "不稳",
      root: "步骤检查和细节复核还没有形成习惯，会做的内容没有稳定转化成得分",
      action: "把订正重点放在过程复核和同类错误归类上"
    };
  }
  if (state.mastery === "基本掌握" || state.homework === "需督促") {
    return {
      label: "不熟",
      root: "概念和步骤已经建立，但练习量和复盘质量还不够，独立完成时容易慢半拍",
      action: "用短时高质量复盘提升熟练度"
    };
  }
  return {
    label: "提升型",
    root: "基础吸收较好，下一步要把速度、规范和变式迁移继续拉上来",
    action: "从常规题过渡到变式题和综合应用"
  };
}

function buildConcreteHighlight(data, profile) {
  const focusDetail = {
    "专注积极": [
      `孩子今天进入状态较快，讲到“${data.topic}”里的${profile.lens.entryPoint}时，能马上把注意力放到题目关键信息上。`,
      `课堂讲解转入练习时，孩子跟进比较及时，能边听边对照“${data.topic}”的关键步骤。`,
      `今天孩子听讲比较集中，老师提醒看${profile.lens.entryPoint}时，他能及时回到题目本身。`,
      `孩子今天投入度比较好，处理${profile.classTask}时能持续跟住老师的分析。`,
      `课堂中孩子反应比较快，能把注意力放在“${data.topic}”的关键条件上。`
    ],
    "状态稳定": [
      `孩子今天能跟住课堂节奏，讲解“${data.topic}”时卡住后经过提醒也能接着往下想。`,
      `本节课孩子没有明显掉队，老师带着拆${profile.lens.entryPoint}时，他能把主要信息跟下来。`,
      `课堂中孩子状态保持得住，处理${profile.classTask}时能持续投入。`,
      `今天孩子能跟住主要讲解，遇到不确定的地方也愿意继续尝试。`,
      `孩子本节课能按老师节奏完成基础环节。`
    ],
    "偶尔分神": [
      `孩子中途有过注意力起伏，但老师把任务拉回到“${data.topic}”后，他能重新进入练习。`,
      `今天孩子偶尔会慢半拍，不过提醒他回看${profile.lens.entryPoint}后，能继续配合完成课堂任务。`,
      `课堂专注度还需要拉长一些，但孩子被点到关键步骤后，会愿意重新跟着老师梳理。`,
      `孩子中途有分神情况，提醒后能回到${profile.classTask}上，后续还要练持续专注。`,
      `今天孩子注意力有起伏，但被拉回任务后，仍能继续完成基础分析。`
    ]
  }[state.state];

  const interactionDetail = {
    "主动回应": [
      `互动时他愿意先说自己的判断，尤其在${profile.type.strong}上能主动给出思路。`,
      `老师追问解题入口时，孩子能尝试表达“为什么这样做”，不是只等老师给答案。`,
      `问到关键条件时，孩子有主动回应，说明课堂上是在跟着思考。`,
      `互动环节孩子愿意参与，能围绕${profile.lens.entryPoint}说出自己的判断。`,
      `孩子在问答中比较愿意配合，能把部分课堂思路表达出来。`
    ],
    "跟随思路": [
      `互动中孩子更偏跟随型，但沿着老师的追问可以补出关键步骤。`,
      `主动表达还不算多，不过老师把问题拆开后，他能顺着思路把答案往前推。`,
      `课堂问答里孩子能够跟住老师的分析链条，说明理解过程是有参与的。`,
      `孩子主动发言不多，但经过引导能接上${profile.lens.entryPoint}。`,
      `老师分步追问时，孩子能跟着补出关键判断。`
    ],
    "需要带动": [
      `互动上还需要老师多带一带，但点到具体问题后，孩子能给出回应。`,
      `孩子表达思路时还偏谨慎，经过提示后能说出部分判断依据。`,
      `课堂参与感还要继续培养，不过在老师放慢追问后，孩子能跟着完成基础分析。`,
      `孩子目前还不太主动表达，需要老师把问题拆细后再回应。`,
      `互动中孩子偏被动，但提示到位后能配合完成思路梳理。`
    ]
  }[state.participation];

  const outputBrief = {
    "能独立完成": pick([
      `练习中${profile.type.strong}完成度不错。`,
      `基础题能独立推进，说明课堂内容有吸收。`,
      `常规题处理比较顺，后续可以增加变化。`
    ]),
    "提示后完成": pick([
      `遇到${profile.type.weak}时，提示后能继续推进。`,
      `部分题需要点一下入口，方法调用还要再练。`,
      `提示后能做下去，说明理解有基础，但独立迁移还要继续练。`
    ]),
    "需课后巩固": pick([
      `独立完成${profile.type.weak}时还会停顿。`,
      `部分题目离开提示后容易卡在第一步。`,
      `基础方法还需要通过订正和同类题补牢。`
    ])
  }[state.output];

  return `${pick(focusDetail)}${pick(interactionDetail)}${outputBrief}`;
}

function buildPreciseIssue(data, profile) {
  const manifest = getIssueManifest(profile);
  if (profile.issue.label === "提升型") {
    return pick([
      `孩子基础环节掌握到位，下一步重点放在${profile.type.weak}，尤其要盯${profile.lens.checkPoint}。`,
      `孩子对常规题的吸收可以肯定，后面要突破${profile.type.weak}，不能只停留在基础题。`,
      `孩子常规题表现不错，后续要通过${profile.type.weak}提升综合应用能力，并继续关注过程规范。`,
      `这节课基础面完成度不错，下一步重点是把速度、规范和变式迁移拉上来，避免综合题失分。`
    ]);
  }
  return pick([
    `目前问题更接近“${profile.issue.label}”：${manifest}，根源在于${profile.issue.root}。`,
    `今天的薄弱点集中在${profile.weakness}，表现为${manifest}。`,
    `这节课的卡点比较明确：${profile.issue.label}，主要是${profile.issue.root}。`,
    `孩子不是完全没有思路，关键是${profile.issue.root}，所以${profile.type.weak}还需要继续练。`,
    `这部分问题要先抓${profile.lens.entryPoint}，否则遇到变化条件时容易再次卡住。`,
    `从课堂练习看，${manifest}，后续需要把${profile.issue.action}落到题目里。`
  ]);
}

function getIssueManifest(profile) {
  const manifests = {
    "不会": `处理${profile.classTask}时，对${profile.lens.entryPoint}还没有稳定入口，离开老师提示后容易不知道先看哪里`,
    "不熟": `基础题能跟着做，但到${profile.type.weak}时步骤衔接慢，说明方法还没有练到自动化`,
    "不稳": `常规思路能理解，但${profile.lens.checkPoint}容易漏，导致会做的题也出现反复错误`,
    "粗心": `题干限制、关键词或计算细节回看不够，容易把会做的题做丢分`,
    "迁移弱": `能处理${profile.type.strong}，但遇到${profile.type.weak}时，第一步判断和方法迁移明显变慢`
  };
  return manifests[profile.issue.label] || `需要把${profile.type.weak}继续练熟`;
}

function buildGroundedHomework(data, profile) {
  const homeworkRange = getHomeworkRange(data, profile);
  const parentCheck = profile.plan.parentFocus;
  return pick([
    `课后作业以${homeworkRange}为主，家长重点看${parentCheck}，不需要额外追求题量。`,
    `今晚围绕“${data.topic}”做定点复盘，练习范围放在${homeworkRange}，完成后让孩子说明${profile.plan.check}。`,
    `课后先处理课堂中卡住的同类内容，再完成${homeworkRange}，家长只需确认${parentCheck}。`,
    `这部分先落实${profile.issue.action}，作业范围控制在${homeworkRange}，订正后重点检查${profile.plan.check}。`,
    `回家后不用盲目多刷，围绕“${data.topic}”完成${homeworkRange}，重点看方法是否能独立复现。`,
    `建议把课堂错题范围重新梳理一遍，再配合同类变式练习做验证，家长关注孩子能否说清错因。`,
    `课后复盘重点看${profile.lens.checkPoint}，作业类型以错题订正、基础巩固和同类迁移练习为主。`
  ]);
}

function getHomeworkRange(data, profile) {
  const byBlock = {
    "教材同步": "校内同步知识点复习、课堂错题订正和基础巩固练习",
    "专题突破": "专题方法复盘、易错点整理和同类变式练习",
    "题型集训": "同类题型训练、审题步骤复盘和规范作答练习",
    "错题精讲": "课堂错题订正、错因归类和同类错点迁移练习",
    "应试提分": "答题规范复盘、限时思路训练和易失分点检查"
  };
  const base = byBlock[state.block] || "课堂内容复盘、错题订正和同类练习";
  return `${base}，重点围绕“${data.topic}”和${profile.type.weak}`;
}

function buildTeachingPlan(data, profile) {
  const blockFocus = getBlockTeachingFocus();
  return pick([
    `后续先巩固${profile.type.strong}，再带${profile.type.weak}，并检查${profile.lens.checkPoint}。`,
    `下节课先查复盘，再做“${blockFocus}”变式，看孩子能否独立找入口。`,
    `接下来继续围绕“${data.topic}”练第一步判断，并及时看迁移效果。`,
    `后面会围绕${profile.issue.label}这个卡点做小步训练，再用同类题验证。`,
    `下节课会重点看孩子能否独立抓住${profile.lens.entryPoint}，再用一题变式检查掌握情况。`,
    `后续会把${profile.lens.method}拆细，帮助孩子把老师提示转化成自己的固定步骤。`,
    `接下来会继续用典型题回收${profile.type.weak}，观察孩子能否独立完成。`
  ]);
}

function getBlockTeachingFocus() {
  const focus = {
    "教材同步": "回扣课本例题和校内同类题",
    "专题突破": "同一模型分层变式",
    "题型集训": "审题、步骤和规范表达分段训练",
    "错题精讲": "从错因回到同类变式",
    "应试提分": "限时训练和得分点规范"
  };
  return focus[state.block] || "基础入口到变式应用";
}

function buildGrowthEnding(profile) {
  if (state.tone === "strict") {
    return pick([
      `后面把${profile.issue.action}落实好，提升会更实在。`,
      `我会继续跟进，也请家长帮忙看复盘质量。`,
      `这部分需要及时巩固，避免同类题反复丢分。`
    ]);
  }
  if (state.tone === "warm") {
    return pick([
      `孩子今天愿意跟着调整，这一点值得肯定。`,
      `方法再练熟一些，孩子会更有信心。`,
      `孩子今天有投入，后面保持这个节奏会更好。`
    ]);
  }
  return pick([
    `后续我会继续针对这个卡点跟进，帮助孩子把方法用得更熟。`,
    `按这个方向练，孩子的进步会更容易被看见，也更容易保持住。`,
    `把复盘落实好，孩子做同类题会更有把握。`,
    `后面继续盯住这一点，孩子处理题目时会更有底气。`,
    `这节课的问题比较清楚，后续训练会更有方向，也更容易见到效果。`
  ]);
}

function buildLearning(data) {
  if (state.mastery === "扎实") {
    return pick([
      `从${data.grade}${data.subject}当前学习要求看，孩子能够较快抓住“${data.topic}”的关键思路，基础概念和典型题处理得比较到位。`,
      `孩子今天对“${data.topic}”的核心方法理解得比较到位，课堂练习里的基础题做得比较顺。`,
      `孩子对今天的主要内容吸收较好，能够把课堂讲解的方法运用到“${data.topic}”的常规题中。`
    ]);
  }
  if (state.mastery === "基本掌握") {
    return pick([
      `孩子对“${data.topic}”的基础内容已经能理解，常规题型跟着课堂思路可以完成，但自己独立迁移时还需要再稳一稳。`,
      `孩子本节课能理解“${data.topic}”的主要方法，基础题推进比较顺利，遇到条件变化较多的题目时还需要多一些练习巩固。`,
      `目前孩子对该知识点已有初步掌握，课堂上经过提示可以完成思路转换，后续重点是提高独立运用能力。`
    ]);
  }
  return pick([
    `孩子目前能听懂“${data.topic}”课堂讲解的大方向，但真正自己下笔处理题目时，细节应用还不够熟练。`,
    `孩子对“${data.topic}”还处在建立方法的阶段，听讲能跟上，但自己独立处理题目时容易卡在关键步骤。`,
    `今天的内容对孩子来说仍有一定难度，课堂上能够理解老师讲解，但课后还需要通过基础题把方法固定下来。`
  ]);
}

function buildPerformance(data) {
  const stateText = {
    "专注积极": [
      `今天上课时孩子进入状态比较快，在“${data.topic}”的讲解和练习中能跟住老师的提问节奏。`,
      `今天孩子的上课状态比较积极，注意力保持得不错，对“${data.topic}”相关问题也能及时跟进。`,
      `课堂中孩子进入状态较快，听讲、记录和练习之间的切换比较顺畅，整体学习投入度较好。`
    ],
    "状态稳定": [
      "孩子今天能跟住主要讲解节奏，遇到不确定的地方，提醒一下也能继续往下做。",
      "孩子今天的学习状态能保持住，虽然主动性还有提升空间，但课堂节奏基本能够跟住。",
      "本节课孩子整体表现稳定，对老师讲解的内容能够保持跟随，关键环节经过提醒后也能继续完成。"
    ],
    "偶尔分神": [
      "孩子今天中途偶尔会走神，不过提醒后能回到课堂任务上，后面还需要继续练习持续专注。",
      "孩子今天上课过程中偶尔会有分神，经过提醒可以调整回来，后续建议继续拉长课堂专注时间。",
      "课堂中孩子有时需要老师拉回注意力，说明持续专注度还可以再加强，不过提醒后能继续配合完成学习任务。"
    ]
  }[state.state];

  const participationText = {
    "主动回应": [
      "课堂互动中，孩子愿意主动回应问题，也能尝试表达自己的思路，这一点对知识吸收很有帮助。",
      "互动环节孩子参与感较强，能主动说出自己的判断，说明他不是被动听课，而是在跟着思考。",
      "今天孩子在问答环节比较愿意配合，也能把部分解题想法表达出来。"
    ],
    "跟随思路": [
      "课堂互动中，孩子多数时候能跟随老师思路完成分析，虽然主动表达不算特别多，但理解过程是在线的。",
      "老师带着分析时，孩子能一步步跟上，主动发言不多，但练习反馈能看出思路基本接得上。",
      "孩子在课堂上更多是跟随型参与，经过引导可以说出关键步骤，后续可以继续鼓励他多表达。"
    ],
    "需要带动": [
      "课堂互动中，孩子目前还需要老师多一些引导和带动，主动表达意识可以继续加强。",
      "孩子课堂上还偏被动一些，通常需要老师点拨后才会回应，后续可以慢慢训练主动思考和主动提问。",
      "孩子今天在表达自己思路时还不够主动，需要老师多次引导，建议后续继续加强课堂参与感。"
    ]
  }[state.participation];

  const habitText = {
    "步骤规范": [
      "学习习惯上，孩子本节课的书写和步骤相对规范，能够按照课堂要求整理关键过程。",
      "从课堂练习看，孩子的过程意识比较好，能按步骤推进，这对后续稳定得分很重要。",
      "孩子今天在记录和作答时比较注意规范性，关键步骤保留得较完整。"
    ],
    "细节需稳": [
      "学习习惯上，孩子对主要方法能理解，但细节处理还需要更细一些，尤其要减少因粗心造成的失分。",
      "孩子方法上能跟住，但细节处还需要再仔细，比如条件使用、步骤衔接和结果检查都要落实到位。",
      "本节课孩子在大方向上没有太大问题，主要是细节质量还需要继续打磨。"
    ],
    "审题需慢": [
      "学习习惯上，孩子需要在审题时再慢一点，先看清条件和设问，再进入解题或作答。",
      "孩子今天有些题目不是不会，而是审题时关键信息抓得不够准，建议先圈条件再动笔。",
      "审题习惯还需要继续训练，尤其是题干限制条件、设问方向和隐含信息要看完整。"
    ]
  }[state.habit];

  const outputText = {
    "能独立完成": [
      "今天基础练习完成度不错，部分题目已经能够独立做出来，说明本节内容有比较明确的吸收。",
      "练习反馈看，孩子能够独立处理一部分题目，说明课堂方法已经开始内化。",
      "今天孩子的课堂产出比较扎实，基础题能够较顺利完成，后续可以逐步增加题目变化。"
    ],
    "提示后完成": [
      "练习时孩子经过老师提示，大部分题目可以继续完成，说明方法能理解，只是独立迁移还需要再练。",
      "练习中孩子经过提示可以把题目做下去，说明不是完全没有思路，关键是要把提示转化为自己的解题习惯。",
      "今天部分题目孩子需要老师点一下方法入口，后续重点是提升独立判断考点的能力。"
    ],
    "需课后巩固": [
      "今天有些题目孩子还没有完全吃透，课后最好把课堂例题和错题重新梳理一遍。",
      "练习反馈看，孩子对本节内容还需要更多基础巩固，课后复盘会比较关键。",
      "今天部分题目的完成度还会反复，需要通过课后订正和同类练习把方法补牢。"
    ]
  }[state.output];

  const homeworkText = {
    "完成较好": [
      "作业与练习反馈看，基础部分完成较好，可以在保持准确率的基础上适当增加变式训练。",
      "练习完成情况整体不错，说明孩子课上吸收较及时，后续可以在稳定基础题的同时训练综合应用。",
      "从作业情况看，孩子完成度较好，接下来重点是提高速度和变式题适应能力。"
    ],
    "部分错误": [
      "作业与练习反馈看，部分错误主要集中在细节判断、步骤规范或知识迁移上，需要通过订正把问题暴露清楚。",
      "练习里有一些错误并不是完全不会，而是细节和方法迁移还没有真正落实，建议订正时写清楚错因。",
      "作业中存在部分错误，后续需要把这些错误归类，避免同类问题反复出现。"
    ],
    "需督促": [
      "作业与练习反馈看，完成质量还需要继续督促，建议课后先保证基础练习按时完成，再逐步提高准确率。",
      "课后还需要家长适当提醒，先把基础任务完成到位，再谈速度和难度提升。",
      "作业完成质量目前还需要提升，建议家长帮助孩子固定复习和订正时间。"
    ]
  }[state.homework];

  return `${pick(stateText)}${pick(participationText)}${pick(habitText)}${pick(outputText)}${pick(homeworkText)}`;
}

function buildLearningDiagnosis(data) {
  const subjectLens = getSubjectLens(data);
  const reason = inferLearningReason();
  const classDetail = getClassDetail(data);
  return pick([
    `孩子不是单纯“不会”，更主要是${reason}。后面做${classDetail}时，先抓${subjectLens.entryPoint}，再按${subjectLens.method}推进，准确率会更有保障。`,
    `孩子能听懂课堂讲解，但从听懂到独立完成还差一点转化。针对“${data.topic}”，后续重点练${subjectLens.entryPoint}和${subjectLens.checkPoint}。`,
    `今天的提升点比较明确：把${subjectLens.method}固定下来，再用小变式检验是否会用，比单纯多刷题更有效。`
  ]);
}

function buildTypeProfile(data) {
  const profile = getTypeProfile(data);
  if (state.mastery === "扎实" && state.output === "能独立完成") {
    return pick([
      `目前孩子在${profile.strong}上完成度不错，后续可以把训练重点放到${profile.weak}上，进一步拉开层次。`,
      `今天能看出孩子对${profile.strong}接受较快，接下来需要用${profile.weak}来提升综合运用能力。`
    ]);
  }
  if (state.output === "提示后完成" || state.mastery === "基本掌握") {
    return pick([
      `目前孩子比较能跟上${profile.strong}，但遇到${profile.weak}时还需要老师点一下方法入口。`,
      `孩子在${profile.strong}上已有基础，薄弱点主要集中在${profile.weak}，后面会重点带着练。`
    ]);
  }
  return pick([
    `现在孩子更适合先从${profile.strong}建立信心，再逐步过渡到${profile.weak}。`,
    `这节课看下来，${profile.strong}可以作为切入口，${profile.weak}需要慢慢补，不急着上难度。`
  ]);
}

function getTypeProfile(data) {
  const topic = data.topic;
  const bySubject = {
    "语文": {
      strong: topic.includes("作文") ? "素材梳理和基础表达" : "文本信息定位和基础概括题",
      weak: topic.includes("文言") ? "特殊句式翻译和关键词落实" : topic.includes("诗") ? "手法、情感和诗句内容的衔接" : "深层含义、表达效果和分点作答"
    },
    "数学": {
      strong: topic.includes("函数") ? "基础图像和常规解析式题" : topic.includes("几何") || topic.includes("圆") || topic.includes("相似") ? "基础图形关系识别题" : "常规计算和基础模型题",
      weak: topic.includes("函数") ? "含参数、最值和函数几何综合题" : topic.includes("几何") || topic.includes("圆") || topic.includes("相似") ? "辅助线、证明顺序和综合线段计算" : "变式条件和综合应用题"
    },
    "英语": {
      strong: topic.includes("阅读") ? "细节定位和基础理解题" : topic.includes("写作") ? "内容要点覆盖" : "基础语法识别题",
      weak: topic.includes("从句") || topic.includes("语法") ? "长句结构和连接词选择" : topic.includes("完形") ? "上下文逻辑和熟词生义" : "同义替换、语篇逻辑和表达准确度"
    },
    "物理": {
      strong: topic.includes("电") ? "基础电路关系判断" : topic.includes("力") || topic.includes("运动") ? "基础受力和运动过程分析" : "基础概念和公式代入题",
      weak: topic.includes("电") ? "动态电路、能量转化和综合计算" : topic.includes("力") || topic.includes("运动") ? "多过程受力、临界条件和综合模型" : "情境变化下的公式选择和单位检查"
    },
    "化学": {
      strong: topic.includes("实验") ? "基础实验现象识别" : topic.includes("有机") ? "官能团识别" : "基础概念和常规方程式",
      weak: topic.includes("平衡") ? "图像分析和平衡移动判断" : topic.includes("实验") ? "实验方案评价和变量控制" : "条件变化、离子关系和综合推断"
    }
  };
  return bySubject[data.subject] || bySubject["数学"];
}

function buildPracticePlan(data) {
  const plan = buildPersonalizedHomePlan(data);
  const homeAction = getHomeAction(data);
  return pick([
    `课后建议围绕“${data.topic}”做得更具体一些：${homeAction}，再安排${plan.task}。完成后重点看${plan.check}，不要只看答案对错。`,
    `今晚不用盲目多刷题，可以先处理今天最卡的那类题。建议孩子${homeAction}，再用${plan.task}做一次验证，家长可以重点关注${plan.parentFocus}。`,
    `回家后重点不要放在“看一遍就算复习”，而是让孩子把“${data.topic}”中今天出错或停顿的地方重新处理一遍：${homeAction}。之后${plan.task}，如果${plan.check}能过关，说明今天内容落地得更扎实。`,
    `这部分课后不需要机械刷很多题，更适合做一次有针对性的巩固：先${homeAction}，再${plan.task}。过程中重点盯住${plan.parentFocus}，这样比单纯增加题量更有效。`
  ]);
}

function stableIndex(seed, length, offset = 0) {
  if (!length) return 0;
  let total = offset + state.variant * 7;
  for (let i = 0; i < seed.length; i += 1) total += seed.charCodeAt(i) * (i + 3);
  return Math.abs(total) % length;
}

function chooseBySeed(options, seed, offset = 0) {
  return options[stableIndex(seed, options.length, offset)];
}

function buildPersonalizedHomePlan(data) {
  const seed = [
    data.stage,
    data.grade,
    data.subject,
    data.topic,
    state.block,
    state.mastery,
    state.homework,
    state.habit,
    state.output,
    state.participation
  ].join("|");
  const subjectPlan = getSubjectPlanPool(data);
  const difficultyPlan = getDifficultyPlanPool(data);
  const blockPlan = getBlockPlanPool(data);
  const task = chooseBySeed([
    ...subjectPlan.tasks,
    ...difficultyPlan.tasks,
    ...blockPlan.tasks
  ], seed, 11);
  const check = chooseBySeed([
    ...subjectPlan.checks,
    ...difficultyPlan.checks,
    ...blockPlan.checks
  ], seed, 23);
  const parentFocus = chooseBySeed([
    ...subjectPlan.parentFocus,
    ...difficultyPlan.parentFocus,
    ...blockPlan.parentFocus
  ], seed, 37);
  return { task, check, parentFocus };
}

function getSubjectPlanPool(data) {
  const weak = data.weak.replace(/[。；;，,]$/, "");
  const pools = {
    "语文": {
      tasks: [
        `挑一小段同类阅读材料，只写答题思路和原文依据，不急着追求完整长答案`,
        `把课堂中涉及的关键词、句子依据和答题角度整理成一张小清单`,
        `重写今天最不顺的一道题答案，要求每一点都能在原文中找到依据`,
        `找一段相关文本做精读，圈出能支撑答案的词句，再口头说出理由`
      ],
      checks: [
        `答案是否每一点都有文本依据`,
        `表达是否分层，是否把原因、特点和作用说清楚`,
        `有没有只写结论却缺少文章内容支撑`,
        `题干要求是否看准，答题角度是否跑偏`
      ],
      parentFocus: [
        `孩子是否能说出答案来自原文哪里`,
        `答案有没有分点写清楚`,
        `是否把题干中的关键词圈出来`,
        `订正时有没有补上遗漏角度`
      ]
    },
    "数学": {
      tasks: [
        `重做课堂中卡顿的那类题，再换一个条件相近的小变式检查方法是否还能用`,
        `把“${data.topic}”涉及的公式、图形关系或解题入口整理到错题旁边`,
        `搭配一类基础题和一类变式题，重点写清第一步为什么这样做`,
        `把今天的错题按“条件没读全、模型没选准、计算细节”做一次归类`
      ],
      checks: [
        `已知条件是否全部用上`,
        `第一步方法入口是否能独立找到`,
        `计算符号、取值范围和最终结论是否一致`,
        `遇到条件变化时是否还能判断用哪个模型`
      ],
      parentFocus: [
        `孩子是否先写条件再动笔计算`,
        `错题旁边有没有写出错因`,
        `是否能独立说出第一步为什么这样做`,
        `订正后是否又做了一道相近变式`
      ]
    },
    "英语": {
      tasks: [
        `把课堂错题中的句子拆成主干和修饰成分，再整理相关词性或固定搭配`,
        `找一组同考点小题，先说出判断依据，再写答案`,
        `把今天遇到的易混词、时态或从句连接词整理成例句`,
        `做一小段同主题阅读，重点圈出同义替换和上下文提示词`
      ],
      checks: [
        `句子主干是否找准`,
        `时态、语态、词性和搭配是否前后一致`,
        `答案是否有上下文依据`,
        `有没有只凭语感选择而没有判断理由`
      ],
      parentFocus: [
        `孩子是否能说出选择答案的理由`,
        `错题是否整理了关键词和固定搭配`,
        `是否能把句子主干划出来`,
        `订正时有没有回到上下文检查`
      ]
    },
    "物理": {
      tasks: [
        `把课堂错题重新画出过程图或受力图，再写清每个公式的使用条件`,
        `找一类同模型题，只要求先完成审题、画图和列式，不急着算结果`,
        `把“${data.topic}”涉及的物理量、单位和公式关系整理成一行对照`,
        `重做今天卡住的题，重点标出研究对象和过程变化`
      ],
      checks: [
        `研究对象是否选对`,
        `图是否能对应题目过程`,
        `公式条件、单位和方向是否一致`,
        `结果是否符合物理情境`
      ],
      parentFocus: [
        `孩子有没有先画图再计算`,
        `单位换算是否单独检查`,
        `是否能说出公式为什么适用`,
        `错题有没有标出卡住的物理过程`
      ]
    },
    "化学": {
      tasks: [
        `把课堂涉及的物质、条件、现象和结论整理成一张反应关系表`,
        `重写相关方程式或离子方程式，重点检查配平、条件和守恒`,
        `找一类同类实验或推断题，先写判断依据，再写答案`,
        `把“${data.topic}”中的易混概念和典型现象各整理一个例子`
      ],
      checks: [
        `反应条件是否写完整`,
        `方程式是否满足原子守恒和电荷守恒`,
        `实验现象和结论是否对应`,
        `物质类别、离子或官能团判断是否准确`
      ],
      parentFocus: [
        `孩子是否能说出判断依据`,
        `方程式有没有配平并写条件`,
        `实验题是否区分了现象和结论`,
        `错题旁边有没有整理易混物质或概念`
      ]
    }
  };
  return pools[data.subject] || pools["数学"];
}

function getDifficultyPlanPool(data) {
  const pools = {
    "扎实": {
      tasks: [
        `做一组小变式，重点训练速度和规范表达`,
        `把课堂方法迁移到条件稍有变化的题目中，检查是否还能独立完成`,
        `尝试处理一类综合性更强的题，重点看思路是否连贯`
      ],
      checks: [
        `速度提升后步骤是否仍然完整`,
        `变式条件出现后方法是否用得准`,
        `会做的题是否写得规范`
      ],
      parentFocus: [
        `孩子是否因为求快省略关键步骤`,
        `变式题是否能独立完成`,
        `答案过程是否清楚`
      ]
    },
    "基本掌握": {
      tasks: [
        `先做基础巩固，再补一组条件变化不大的同类题`,
        `把课堂例题遮住答案重做一遍，再完成一组相近练习`,
        `针对今天卡顿的步骤做专项小练，题量不需要多，但要写清过程`
      ],
      checks: [
        `离开提示后是否还能找到方法入口`,
        `基础题正确率是否稳定`,
        `同类题是否还会在同一步卡住`
      ],
      parentFocus: [
        `孩子是否依赖提示`,
        `基础题是否能独立完成`,
        `订正后是否能说出错因`
      ]
    },
    "需要巩固": {
      tasks: [
        `先回到最基础的同类题，把方法步骤补完整`,
        `只处理课堂中最核心的错点，先保证真正弄懂`,
        `把课堂例题重新做一遍，重点写清每一步依据`
      ],
      checks: [
        `基础概念是否说得清`,
        `关键步骤是否还需要提醒`,
        `同一类错误是否重复出现`
      ],
      parentFocus: [
        `孩子是否按时完成基础订正`,
        `是否能把课堂例题重新做出来`,
        `有没有把不会的地方标出来`
      ]
    }
  };
  return pools[state.mastery] || pools["基本掌握"];
}

function getBlockPlanPool(data) {
  const pools = {
    "教材同步": {
      tasks: [
        `回到课本或校内讲义中找对应例题，完成一次对照订正`,
        `把课堂知识点和校内作业中同类题对应起来复习`,
        `优先处理校内同步练习里与“${data.topic}”相关的错题`
      ],
      checks: [`课本例题是否会独立复现`, `校内作业同类题是否订正到位`, `基础概念是否没有遗漏`],
      parentFocus: [`校内作业同类题是否还错`, `课本例题是否能重新讲出来`, `订正是否写了原因`]
    },
    "专题突破": {
      tasks: [
        `把今天专题中的方法入口和易错条件整理到一起`,
        `挑出最容易错的小点做针对性练习`,
        `把同类题按照考法分成基础、变式和综合三类`
      ],
      checks: [`易错条件是否能识别`, `方法入口是否稳定`, `专题内不同题型是否能区分`],
      parentFocus: [`孩子是否整理了易错条件`, `变式题是否还要提醒`, `能否说出这类题的突破口`]
    },
    "题型集训": {
      tasks: [
        `按同一题型做短时训练，重点看审题和步骤是否稳定`,
        `挑出今天最典型的一题，复盘它的设问方式和作答路径`,
        `用限时方式完成少量同类题，训练考试节奏`
      ],
      checks: [`题型特征是否能一眼识别`, `作答步骤是否稳定`, `限时下是否仍能保持准确`],
      parentFocus: [`孩子是否能说出这是什么题型`, `是否按步骤完成`, `限时练习是否明显慌乱`]
    },
    "错题精讲": {
      tasks: [
        `把错题旁边补上错因和正确入口，再做一道相近题验证`,
        `按错因把题目分成审题、方法、细节三类`,
        `只盯住今天最典型的一道错题，把它讲清楚再延伸`
      ],
      checks: [`错因是否写具体`, `同类变式是否还能做对`, `订正是否不是只抄答案`],
      parentFocus: [`错题旁边有没有错因`, `是否做了相近题验证`, `孩子能否讲清这题错在哪里`]
    },
    "应试提分": {
      tasks: [
        `按考试要求重写一遍关键步骤或答题表达`,
        `把容易丢分的格式、单位、术语或步骤单独检查一遍`,
        `用一道典型题练习规范表达，重点减少非知识性失分`
      ],
      checks: [`答案是否符合考试规范`, `关键步骤是否完整`, `有没有因为表达或格式失分`],
      parentFocus: [`孩子是否省略步骤`, `格式和表达是否规范`, `是否检查了容易丢分的细节`]
    }
  };
  return pools[state.block] || pools["教材同步"];
}

function getHomeAction(data) {
  const weakFocus = data.weak.replace(/[。；;，,]$/, "");
  const actions = {
    "语文": {
      default: `回到原文圈出对应依据，把答案按“关键词、文本依据、表达效果”重新整理一遍`,
      "审题需慢": `先重读题干，圈出“概括、赏析、作用、情感”等要求，再回原文找依据`,
      "细节需稳": `把课堂答案和参考思路对照，补全遗漏角度，尤其注意${weakFocus}`,
      "提示后完成": `找一段同类材料，先独立写出答题角度，再对照课堂方法修改表达`
    },
    "数学": {
      default: `把课堂例题中的已知条件、所用公式和关键步骤重新写一遍，尤其注意${weakFocus}`,
      "审题需慢": `先圈已知条件和设问目标，再画图或列式，避免一看到题就直接计算`,
      "细节需稳": `重做今天出错的计算或证明步骤，重点检查符号、范围、单位和结论是否对应题意`,
      "提示后完成": `遮住课堂答案，自己重新找方法入口，看能否独立列出第一步`
    },
    "英语": {
      default: `把相关句子重新拆成主干、修饰成分和关键词，整理出本节易错搭配或语法点`,
      "审题需慢": `先看题干要求和上下文逻辑，再判断词性、时态或选项含义`,
      "细节需稳": `把错题中的时态、语态、词性和固定搭配逐项标出来，避免凭语感作答`,
      "提示后完成": `找一组同类题，先独立判断句子结构，再核对课堂方法`
    },
    "物理": {
      default: `把题目中的研究对象、物理过程和公式条件重新标出来，必要时补画受力图或过程图`,
      "审题需慢": `先明确研究对象和已知量，再判断用力学、电学、热学还是实验模型`,
      "细节需稳": `重算课堂错题，重点检查单位换算、正负方向、公式适用条件和结果量纲`,
      "提示后完成": `不看答案重新画图，先写出物理过程和公式来源，再代入数据`
    },
    "化学": {
      default: `把涉及的物质类别、反应条件、实验现象或方程式重新整理一遍，尤其注意${weakFocus}`,
      "审题需慢": `先圈出题目中的物质、条件和现象，再判断反应原理或实验目的`,
      "细节需稳": `重写相关方程式或离子关系，检查配平、条件、守恒和现象是否一致`,
      "提示后完成": `找一类同类推断或实验题，先独立写出反应依据，再对照课堂思路修正`
    }
  };
  const subjectActions = actions[data.subject] || actions["数学"];
  return subjectActions[state.habit] || subjectActions[state.output] || subjectActions.default;
}

function inferLearningReason() {
  if (state.habit === "审题需慢") return "审题时关键信息提取还不够细";
  if (state.habit === "细节需稳") return "方法会用，但细节检查和步骤衔接还不够稳";
  if (state.output === "提示后完成") return "方法入口需要提示，独立迁移能力还在建立";
  if (state.output === "需课后巩固") return "基础方法尚未完全固定，需要课后及时复盘";
  if (state.participation === "需要带动") return "课堂主动思考和表达还需要继续带动";
  if (state.homework === "部分错误") return "练习中的错点比较集中，需要通过订正暴露问题";
  if (state.homework === "需督促") return "课后落实质量还需要提升";
  return "需要继续提升变式题中的速度和准确率";
}

function getSubjectLens(data) {
  const lenses = {
    "语文": {
      entryPoint: "题干关键词和文本依据",
      method: "先定位原文、再概括要点、最后组织分点表达",
      checkPoint: "答案是否有依据、角度是否完整、表达是否分层"
    },
    "数学": {
      entryPoint: "已知条件、隐含关系和公式模型",
      method: "先画图或列式，再确定模型，最后检查计算与范围",
      checkPoint: "条件是否用全、步骤是否完整、结果是否符合题意"
    },
    "英语": {
      entryPoint: "句子结构、关键词和上下文逻辑",
      method: "先判断句子成分，再结合语境选择词形或答案",
      checkPoint: "时态语态、词性搭配和上下文逻辑是否一致"
    },
    "物理": {
      entryPoint: "研究对象、物理过程和受力或能量关系",
      method: "先画过程图或受力图，再选公式并统一单位",
      checkPoint: "对象是否选准、公式条件是否满足、单位是否统一"
    },
    "化学": {
      entryPoint: "物质类别、反应条件和实验现象",
      method: "先判断反应原理，再写准方程式或离子关系",
      checkPoint: "条件是否完整、守恒是否满足、现象与结论是否对应"
    }
  };
  return lenses[data.subject] || lenses["数学"];
}

function getClassDetail(data) {
  const details = {
    "教材同步": `处理课本例题和随堂练习`,
    "专题突破": `遇到${data.subject}专题中的变式题`,
    "题型集训": `完成同类题型训练`,
    "错题精讲": `回看错题和同类变式`,
    "应试提分": `按考试要求组织答案或步骤`
  };
  return details[state.block] || `完成课堂练习`;
}

function buildWeakness(data) {
  if (state.mastery === "扎实" && state.homework === "完成较好") {
    return pick([
      `目前需要继续提升的是综合题中的速度和表达规范，避免会做但过程不够严谨。`,
      `接下来可以把训练重点放在综合题的完整度上，尤其注意表达完整和步骤严谨。`,
      `目前孩子基础掌握较好，后续更需要关注变式题中的思路迁移和作答规范。`
    ]);
  }
  if (state.tone === "strict") {
    return pick([
      `需要重点提醒的是：${data.weak}。如果这部分不及时巩固，后面遇到综合题时容易反复失分。`,
      `目前比较需要重视的问题是：${data.weak}。这类问题如果不及时处理，后续会影响题目完成质量。`,
      `这节课暴露出的关键问题是：${data.weak}。建议课后务必完成订正，不能只停留在听懂。`
    ]);
  }
  return pick([
    `本节课暴露出的主要薄弱点是：${data.weak}。这个问题并不难纠正，关键是课后要把方法固定下来。`,
    `孩子目前最需要补的一块是：${data.weak}。后面练习时有意识地盯住这一点，提升会比较明显。`,
    `今天比较明显的问题集中在：${data.weak}。这部分建议不要只看答案，要把思路过程重新梳理一遍。`
  ]);
}

function buildAdvice(data) {
  const blockAdvicePool = {
    "教材同步": [
      "课后建议先回看课本例题和课堂笔记，再完成对应随堂练习。",
      "回家后可以先把今天的课本知识点重新过一遍，再针对课堂练习中的问题做订正。",
      "建议课后把校内同步内容和今天课堂例题对照复习，确保基础部分不留漏洞。"
    ],
    "专题突破": [
      "课后建议把同类题型集中复盘，重点记录易错条件和方法入口。",
      "建议课后围绕这一专题做一组同类小练，重点观察题目条件变化时方法是否还能用准。",
      "这类专题最重要的是形成方法框架，课后可以把今天讲到的易错点单独整理出来。"
    ],
    "题型集训": [
      "课后建议按题型整理解题步骤，训练审题、列式和规范作答的完整度。",
      "建议课后继续做一组同类型练习，重点训练看到题目后快速判断考点和答题路径。",
      "题型训练需要保持手感，课后可以做一组短时同类练习，提高速度和准确率。"
    ],
    "错题精讲": [
      "课后建议把错题原因写清楚，再用同类变式做一次验证。",
      "建议课后不要只改答案，而是把错因、正确思路和同类提醒写在错题旁边。",
      "这部分建议用错题带动复习，先弄清楚为什么错，再通过变式题确认是否真正掌握。"
    ],
    "应试提分": [
      "课后建议整理答题模板和规范表达，限时完成一组对应题型训练。",
      "建议课后重点巩固答题步骤和考试规范，避免因为表达不完整或步骤缺失而失分。",
      "这类内容要服务于考试得分，课后可以按模板再练一遍，强化速度、规范和准确度。"
    ]
  }[state.block] || "";
  const blockAdvice = Array.isArray(blockAdvicePool) ? pick(blockAdvicePool) : "";
  if (state.tone === "warm") {
    return `${blockAdvice}${data.advice}。今天是有推进的，继续保持会更有把握。`;
  }
  if (state.tone === "strict") {
    return `${blockAdvice}${data.advice}。这部分建议家长也适当关注完成质量。`;
  }
  return `${blockAdvice}${data.advice}。`;
}

function buildEnding() {
  if (state.tone === "warm") {
    return pick([
      "孩子本节课的努力是能看到的，只要把薄弱点一点点补起来，后面会更有信心。",
      "孩子今天是有投入的，也能看到进步，后面继续保持这个节奏，会越来越稳。",
      "今天课堂中的积极变化值得肯定，后面我们会继续帮孩子把方法练熟，把信心建立起来。"
    ]);
  }
  if (state.tone === "strict") {
    return pick([
      "下节课我会继续跟进这部分掌握情况，只要课后订正能落实，孩子后面是能追上来的。",
      "后续我会继续盯着这块训练，也请家长帮忙关注订正质量，先把薄弱环节补稳。",
      "这部分内容需要及时巩固，下节课会继续看效果，处理好之后孩子做综合题会轻松一些。"
    ]);
  }
  return pick([
    "后续课程中，我会继续结合典型题带孩子练，帮助他把方法用得更熟、更准。",
    "接下来会继续围绕孩子的薄弱环节做针对性训练，基础巩固后提升会更明显。",
    "后面我会继续关注孩子在这一块的掌握变化，只要按现在的方向练，做同类题会更有把握。"
  ]);
}

function saveHistory(text) {
  incrementTodayCount();
  const data = getTopicData();
  const item = {
    student: getStudentName(),
    subject: els.subject.value,
    topic: getKnowledgePointNames(data).join("、"),
    text,
    time: new Date().toLocaleString("zh-CN", { hour12: false })
  };
  const history = JSON.parse(localStorage.getItem("feedbackHistory") || "[]");
  history.unshift(item);
  localStorage.setItem("feedbackHistory", JSON.stringify(history.slice(0, 8)));
  renderHistory();
  syncTeacherProfileDebounced();
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDailyCount() {
  try {
    const data = JSON.parse(localStorage.getItem("feedbackDailyCount") || "{}");
    return data.date === getTodayKey() ? Number(data.count) || 0 : 0;
  } catch {
    return 0;
  }
}

function incrementTodayCount() {
  const count = getDailyCount() + 1;
  localStorage.setItem("feedbackDailyCount", JSON.stringify({
    date: getTodayKey(),
    count
  }));
  els.todayCount.textContent = count;
}

function getStudentName() {
  return els.studentName.value.trim() || "这位同学";
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("feedbackHistory") || "[]");
  els.todayCount.textContent = getDailyCount();
  els.history.innerHTML = "";

  if (!history.length) {
    els.history.innerHTML = `<p class="empty">暂无记录。生成后的反馈会自动保存在这里，方便老师回看和复制。</p>`;
    return;
  }

  history.forEach((item) => {
    const card = document.createElement("article");
    card.className = "history-card";
    card.innerHTML = `
      <div>
        <strong>${item.student} · ${item.subject}</strong>
        <span>${item.topic}｜${item.time}</span>
      </div>
      <p>${item.text}</p>
    `;
    card.addEventListener("click", () => {
      els.result.value = item.text;
    });
    els.history.appendChild(card);
  });
}

async function copyResult() {
  if (!els.result.value.trim()) return;
  try {
    await navigator.clipboard.writeText(els.result.value);
    els.copy.textContent = "已复制";
    setTimeout(() => { els.copy.textContent = "复制"; }, 1200);
  } catch {
    els.result.select();
    document.execCommand("copy");
  }
}

function resetForm() {
  els.studentName.value = "";
  if (els.lessonDate) els.lessonDate.value = getTodayInputValue();
  if (els.lessonTime) els.lessonTime.value = "";
  els.topicSearch.value = "";
  if (els.customTopic) els.customTopic.value = "";
  clearBoardRecognition();
  els.result.value = "";
  state.variant = 0;
  state.selectedTopics = [];
  state.block = "教材同步";
  els.blockSelect.querySelectorAll(".block-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.block === state.block);
  });
  updateBlockSummary();
  document.querySelectorAll(".choice-group").forEach((group) => {
    const defaults = {
      mastery: "扎实",
      scoreLevel: "良好",
      state: "专注积极",
      homework: "完成较好",
      participation: "主动回应",
      habit: "步骤规范",
      output: "能独立完成",
      tone: "balanced"
    };
    const defaultValue = defaults[group.dataset.key];
    const first = group.querySelector(defaultValue ? `.choice[data-value="${defaultValue}"]` : ".choice") || group.querySelector(".choice");
    group.querySelectorAll(".choice").forEach((button) => button.classList.remove("active"));
    first.classList.add("active");
    state[group.dataset.key] = first.dataset.value;
  });
  renderMatches();
  els.qualityTip.textContent = "系统会结合知识点、课堂表现、问题类型和课后检查要求生成反馈，减少空泛套话。";
}

boot();
