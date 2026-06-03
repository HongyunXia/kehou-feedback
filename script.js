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
  }
};

const state = {
  mastery: "扎实",
  state: "专注积极",
  homework: "完成较好",
  participation: "主动回应",
  habit: "步骤规范",
  output: "能独立完成",
  tone: "balanced",
  variant: 0,
  selectedTopic: "",
  block: "教材同步"
};

const els = {
  studentName: document.querySelector("#studentNameInput"),
  blockSelect: document.querySelector("#blockSelect"),
  topicSearch: document.querySelector("#topicSearchInput"),
  matchList: document.querySelector("#matchList"),
  stage: document.querySelector("#stageSelect"),
  grade: document.querySelector("#gradeSelect"),
  subject: document.querySelector("#subjectSelect"),
  topic: document.querySelector("#topicSelect"),
  topicBrief: document.querySelector("#topicBrief"),
  teacherNote: document.querySelector("#teacherNote"),
  result: document.querySelector("#resultText"),
  generate: document.querySelector("#generateBtn"),
  polish: document.querySelector("#polishBtn"),
  copy: document.querySelector("#copyBtn"),
  reset: document.querySelector("#resetBtn"),
  history: document.querySelector("#historyList"),
  todayCount: document.querySelector("#todayCount"),
  clearHistory: document.querySelector("#clearHistoryBtn"),
  qualityTip: document.querySelector("#qualityTip")
};

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

function boot() {
  fillSelect(els.stage, unique(knowledgeBase.map((item) => item.stage)), "初中");
  updateGrades("初中", "初三");
  updateSubjects("初中", "初三", "数学");
  updateTopics("初中", "初三", "数学");
  bindEvents();
  renderHistory();
}

function updateGrades(stage, selected) {
  fillSelect(els.grade, unique(knowledgeBase.filter((item) => item.stage === stage).map((item) => item.grade)), selected);
}

function updateSubjects(stage, grade, selected) {
  const exact = knowledgeBase.filter((item) => item.stage === stage && item.grade === grade).map((item) => item.subject);
  fillSelect(els.subject, unique([...exact, "语文", "数学", "英语", "物理", "化学"]), selected);
}

function updateTopics(stage, grade, subject, selected) {
  const matches = getScopedTopics(stage, grade, subject);
  const topics = matches.map((item) => item.topic);
  const fallbackTopic = subjectDefaults[subject]?.topic || "本节课重点内容";
  fillSelect(els.topic, unique([...topics, fallbackTopic]), selected);
  state.selectedTopic = els.topic.value;
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
    <button class="match-card${item.topic === els.topic.value ? " active" : ""}" type="button" data-topic="${item.topic}">
      <strong>${item.topic}</strong>
      <span>${item.exam}</span>
    </button>
  `).join("");

  els.matchList.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => {
      const topicList = getScopedTopics().map((item) => item.topic);
      fillSelect(els.topic, unique([button.dataset.topic, ...topicList, ...scoped.map((item) => item.topic)]), button.dataset.topic);
      state.selectedTopic = button.dataset.topic;
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

function getTopicData() {
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

function renderTopicBrief() {
  const data = getTopicData();
  els.topicBrief.innerHTML = `
    <strong>${data.exam}</strong>
    <span>常见薄弱点：${data.weak}</span>
  `;
}

function bindEvents() {
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

  els.blockSelect.addEventListener("click", (event) => {
    const button = event.target.closest(".block-option");
    if (!button) return;
    els.blockSelect.querySelectorAll(".block-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.block = button.dataset.block;
    renderMatches();
    renderTopicBrief();
  });

  els.topicSearch.addEventListener("input", renderMatches);

  els.topic.addEventListener("change", () => {
    state.selectedTopic = els.topic.value;
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

  els.generate.addEventListener("click", () => {
    state.variant = 0;
    const text = generateFeedback();
    els.result.value = text;
    saveHistory(text);
  });

  els.polish.addEventListener("click", () => {
    state.variant += 1;
    const text = generateFeedback();
    els.result.value = text;
    saveHistory(text);
  });

  els.copy.addEventListener("click", copyResult);
  els.reset.addEventListener("click", resetForm);
  els.clearHistory.addEventListener("click", () => {
    localStorage.removeItem("feedbackHistory");
    renderHistory();
  });
}

function generateFeedback() {
  const data = getTopicData();
  const note = els.teacherNote.value.trim();
  const studentName = getStudentName();
  const opening = buildOpening(studentName);
  const courseIntro = buildCourseIntro(studentName, data);
  const blockContext = buildBlockContext(data);
  const learning = buildLearning(data);
  const performance = buildPerformance(data);
  const diagnosis = buildLearningDiagnosis(data);
  const weak = buildWeakness(data);
  const advice = buildAdvice(data, note);
  const practice = buildPracticePlan(data, note);
  const ending = buildEnding();

  els.qualityTip.textContent = `已结合“${state.block}”“${data.topic}”“${state.mastery}”“${state.homework}”生成，可继续编辑或复制。`;
  return formatFeedback({
    opening,
    courseIntro,
    blockContext,
    learning,
    performance,
    diagnosis,
    weak,
    advice,
    practice,
    ending
  });
}

function pick(options) {
  return options[state.variant % options.length];
}

function formatFeedback(parts) {
  if (state.tone === "short") {
    return `${parts.opening}，${parts.courseIntro}${parts.performance}${parts.diagnosis}${parts.weak}${parts.practice}`;
  }
  return `${parts.opening}，${parts.courseIntro}${parts.blockContext}${parts.learning}${parts.performance}${parts.diagnosis}${parts.weak}${parts.advice}${parts.practice}${parts.ending}`;
}

function buildOpening(name) {
  return `${name}家长您好`;
}

function buildCourseIntro(name, data) {
  return pick([
    `今天${name}的${data.subject}课主要围绕“${data.topic}”展开，课堂内容与${data.exam}联系较紧。`,
    `本节课带${name}重点学习了“${data.topic}”这一部分内容，并结合${data.exam}做了针对性讲解。`,
    `今天课堂上，${name}主要完成了“${data.topic}”的讲解与练习，重点关注其在${data.exam}中的应用。`,
    `本次课程围绕“${data.topic}”进行梳理和训练，同时结合${data.exam}帮助孩子理解这一部分的考查方式。`,
    `今天的${data.subject}学习重点放在“${data.topic}”上，课堂中穿插了基础梳理和典型题分析。`
  ]);
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
      `课堂中结合应试要求梳理了答题步骤和规范表达，让孩子在考试场景中能更稳定地发挥。`
    ]
  }[state.block];
  return text ? pick(text) : "";
}

function buildLearning(data) {
  if (state.mastery === "扎实") {
    return pick([
      `从${data.grade}${data.subject}当前学习要求看，孩子能够较快抓住“${data.topic}”的关键思路，基础概念和典型题处理得比较稳。`,
      `孩子今天对“${data.topic}”的核心方法理解得比较到位，课堂练习里的基础题做得比较顺。`,
      `孩子对今天的主要内容吸收较好，能够把课堂讲解的方法运用到“${data.topic}”的常规题中。`
    ]);
  }
  if (state.mastery === "基本掌握") {
    return pick([
      `孩子对“${data.topic}”的基础内容已经能理解，常规题型跟着课堂思路可以完成，但自己独立迁移时还需要再稳一稳。`,
      `孩子本节课能理解“${data.topic}”的主要方法，基础题推进比较顺利，遇到条件变化较多的题目时还需要多一些练习巩固。`,
      `目前孩子对该知识点已有初步掌握，课堂上经过提示可以完成思路转换，后续重点是提高独立运用的稳定性。`
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
      "孩子今天上课状态比较稳，主要讲解节奏能跟上，遇到不确定的地方，提醒一下也能继续往下做。",
      "孩子今天的学习状态比较平稳，虽然主动性还有提升空间，但课堂节奏基本能够跟住。",
      "本节课孩子整体表现稳定，对老师讲解的内容能够保持跟随，关键环节经过提醒后也能继续完成。"
    ],
    "偶尔分神": [
      "孩子今天中途偶尔会走神，不过提醒后能回到课堂任务上，后面还需要继续练习持续专注。",
      "孩子今天上课过程中偶尔会有分神，经过提醒可以调整回来，后续建议继续培养更稳定的课堂专注习惯。",
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
      "学习习惯上，孩子对主要方法能理解，但细节处理还需要更稳一些，尤其要减少因粗心造成的失分。",
      "孩子方法上能跟住，但细节处还需要再仔细，比如条件使用、步骤衔接和结果检查都要更稳。",
      "本节课孩子在大方向上没有太大问题，主要是细节稳定性还需要继续打磨。"
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
      "今天部分题目的完成度还不够稳定，需要通过课后订正和同类练习把方法补牢。"
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
      "练习里有一些错误并不是完全不会，而是细节和方法迁移还不够稳定，建议订正时写清楚错因。",
      "作业中存在部分错误，后续需要把这些错误归类，避免同类问题反复出现。"
    ],
    "需督促": [
      "作业与练习反馈看，完成质量还需要继续督促，建议课后先保证基础练习按时完成，再逐步提高准确率。",
      "课后还需要家长适当提醒，先把基础任务完成到位，再谈速度和难度提升。",
      "作业完成质量目前还不够稳定，建议家长帮助孩子固定复习和订正时间。"
    ]
  }[state.homework];

  return `${pick(stateText)}${pick(participationText)}${pick(habitText)}${pick(outputText)}${pick(homeworkText)}`;
}

function buildLearningDiagnosis(data) {
  const subjectLens = getSubjectLens(data);
  const reason = inferLearningReason();
  const classDetail = getClassDetail(data);
  return pick([
    `结合今天的课堂表现看，孩子不是单纯“不会”，更主要是${reason}。在${classDetail}时，如果能先抓住${subjectLens.entryPoint}，再按${subjectLens.method}推进，准确率会更稳定。`,
    `今天比较有价值的学情信号是：孩子能接受课堂讲解，但从听懂到独立完成之间还需要一个转化过程。针对“${data.topic}”，后续要重点训练${subjectLens.entryPoint}和${subjectLens.checkPoint}，避免同类题反复依赖提醒。`,
    `从当堂练习反馈看，孩子目前的提升点比较明确：先把${subjectLens.method}固定下来，再通过少量变式题检查是否真正会用。这样比单纯增加题量更有效，也更适合${data.grade}阶段的学习节奏。`
  ]);
}

function buildPracticePlan(data, note) {
  const subjectLens = getSubjectLens(data);
  const task = getPracticeTask(data);
  const noteText = note ? `结合老师补充的情况，课后还可以特别留意“${note}”这一点。` : "";
  return pick([
    `课后不建议只泛泛复习，建议按“三步”落实：先用3分钟复述“${data.topic}”的核心方法，再订正今天出错或卡顿的题目，最后完成${task}。${noteText}`,
    `今晚复习可以更具体一些：第一步回看课堂例题，标出${subjectLens.entryPoint}；第二步把错误原因写在题旁；第三步做${task}，重点看是否还能独立完成。${noteText}`,
    `建议课后把训练量控制得精一点，不追求多刷题，重点完成${task}。完成后让孩子自己说一遍${subjectLens.checkPoint}，能说清楚，说明今天内容基本落地。${noteText}`
  ]);
}

function inferLearningReason() {
  if (state.habit === "审题需慢") return "审题时关键信息提取还不够细";
  if (state.habit === "细节需稳") return "方法会用，但细节检查和步骤衔接还不够稳";
  if (state.output === "提示后完成") return "方法入口需要提示，独立迁移能力还在建立";
  if (state.output === "需课后巩固") return "基础方法尚未完全固定，需要课后及时复盘";
  if (state.participation === "需要带动") return "课堂主动思考和表达还需要继续带动";
  if (state.homework === "部分错误") return "练习中的错点比较集中，需要通过订正暴露问题";
  if (state.homework === "需督促") return "课后落实质量还不够稳定";
  return "需要继续提升变式题中的速度和稳定性";
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

function getPracticeTask(data) {
  const tasks = {
    "扎实": `2道中等变式题，重点训练速度和表达规范`,
    "基本掌握": `3道同类基础题加1道变式题，重点看方法能否独立迁移`,
    "需要巩固": `3道基础巩固题，先保证步骤完整和正确率`
  };
  const base = tasks[state.mastery] || tasks["基本掌握"];
  if (state.homework === "部分错误") return `${base}，并把错题按“审题、方法、计算/表达”归类`;
  if (state.homework === "需督促") return `${base}，家长可协助检查是否按时完成和订正`;
  return base;
}

function buildWeakness(data) {
  if (state.mastery === "扎实" && state.homework === "完成较好") {
    return pick([
      `目前需要继续提升的是综合题中的速度和表达规范，避免会做但过程不够严谨。`,
      `接下来可以把训练重点放在综合题的稳定性上，尤其注意表达完整和步骤严谨。`,
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

function buildAdvice(data, note) {
  const extra = note ? `另外，老师观察到：${note}` : "";
  const blockAdvicePool = {
    "教材同步": [
      "课后建议先回看课本例题和课堂笔记，再完成对应随堂练习。",
      "回家后可以先把今天的课本知识点重新过一遍，再针对课堂练习中的问题做订正。",
      "建议课后把校内同步内容和今天课堂例题对照复习，确保基础部分不留漏洞。"
    ],
    "专题突破": [
      "课后建议把同类题型集中复盘，重点记录易错条件和方法入口。",
      "建议课后围绕这一专题再做几道同类题，重点观察题目条件变化时方法是否还能用准。",
      "这类专题最重要的是形成方法框架，课后可以把今天讲到的易错点单独整理出来。"
    ],
    "题型集训": [
      "课后建议按题型整理解题步骤，训练审题、列式和规范作答的稳定性。",
      "建议课后继续做一组同类型练习，重点训练看到题目后快速判断考点和答题路径。",
      "题型训练需要保持手感，课后可以限时完成几道同类题，提高速度和准确率。"
    ],
    "错题精讲": [
      "课后建议把错题原因写清楚，再完成两到三道同类变式题。",
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
    return `${blockAdvice}${data.advice}。${extra}整体看今天是有推进的，继续保持会更稳。`;
  }
  if (state.tone === "strict") {
    return `${blockAdvice}${data.advice}。${extra}这部分建议家长也适当关注完成质量。`;
  }
  return `${blockAdvice}${data.advice}。${extra}`;
}

function buildEnding() {
  if (state.tone === "warm") {
    return pick([
      "孩子本节课的努力是能看到的，接下来把薄弱环节补扎实，学习信心也会更足。",
      "孩子今天是有投入的，也能看到一些进步，后面继续保持这个节奏，会越来越稳。",
      "今天课堂中的积极变化值得肯定，后面我们会继续帮助孩子把方法练熟、把信心建立起来。"
    ]);
  }
  if (state.tone === "strict") {
    return pick([
      "下节课会继续检查这部分掌握情况，并针对易错题型做进一步训练，也请家长协助关注课后落实情况。",
      "后续我会继续跟进这部分掌握情况，也建议家长督促孩子把订正和巩固练习落实到位。",
      "这部分内容需要及时巩固，下节课会继续检查效果，避免问题积累到后面的综合题中。"
    ]);
  }
  return pick([
    "后续课程中，我们会继续结合典型题进行训练，帮助孩子把方法用得更熟、更准。",
    "接下来会继续围绕孩子的薄弱环节做针对性训练，帮助他逐步提升稳定性。",
    "后面我会继续关注孩子在这一块的掌握变化，课堂上也会安排相应的巩固和变式练习。"
  ]);
}

function saveHistory(text) {
  incrementTodayCount();
  const item = {
    student: getStudentName(),
    subject: els.subject.value,
    topic: els.topic.value,
    text,
    time: new Date().toLocaleString("zh-CN", { hour12: false })
  };
  const history = JSON.parse(localStorage.getItem("feedbackHistory") || "[]");
  history.unshift(item);
  localStorage.setItem("feedbackHistory", JSON.stringify(history.slice(0, 8)));
  renderHistory();
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
  els.topicSearch.value = "";
  els.teacherNote.value = "";
  els.result.value = "";
  state.variant = 0;
  state.block = "教材同步";
  els.blockSelect.querySelectorAll(".block-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.block === state.block);
  });
  document.querySelectorAll(".choice-group").forEach((group) => {
    const first = group.querySelector(".choice");
    group.querySelectorAll(".choice").forEach((button) => button.classList.remove("active"));
    first.classList.add("active");
    state[group.dataset.key] = first.dataset.value;
  });
  renderMatches();
  els.qualityTip.textContent = "系统会结合知识点、考点、薄弱项和课堂表现生成反馈，避免空泛套话。";
}

boot();
