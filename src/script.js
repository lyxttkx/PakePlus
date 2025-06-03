const gridWidth = 5;
const gridHeight = 4;
const cellSize = 60 + 4; // 60px + 4px gap

// 物品数据
const items = [
  // 科恩比
  { name: "科恩币", w: 1, h: 1, rarity: "white", img: "img/科币.png" },

  // 小紫
  { name: "伞绳", w: 2, h: 2, rarity: "purple", img: "img/紫/伞绳.png" },
  { name: "石膏雕像", w: 2, h: 3, rarity: "purple", img: "img/紫/石膏雕像.png" },
  { name: "便携链锯", w: 3, h: 2, rarity: "purple", img: "img/紫/便携链锯.png" },
  { name: "测光表", w: 1, h: 1, rarity: "purple", img: "img/紫/测光表.png" },
  { name: "测距望远镜", w: 2, h: 1, rarity: "purple", img: "img/紫/测距望远镜.png" },
  { name: "电台", w: 2, h: 1, rarity: "purple", img: "img/紫/电台.png" },
  { name: "发条小汽车", w: 1, h: 1, rarity: "purple", img: "img/紫/发条小汽车.png" },
  { name: "工艺品猎刀", w: 3, h: 1, rarity: "purple", img: "img/紫/工艺品猎刀.png" },
  { name: "鼓风机", w: 2, h: 2, rarity: "purple", img: "img/紫/鼓风机.png" },
  { name: "固态硬盘", w: 1, h: 1, rarity: "purple", img: "img/紫/固态硬盘.png" },
  { name: "怀表", w: 1, h: 1, rarity: "purple", img: "img/紫/怀表.png" },
  { name: "缓降器", w: 1, h: 1, rarity: "purple", img: "img/紫/缓降器.png" },
  { name: "机械硬盘", w: 1, h: 1, rarity: "purple", img: "img/紫/机械硬盘.png" },
  { name: "机油", w: 1, h: 2, rarity: "purple", img: "img/紫/机油.png" },
  { name: "机油壶", w: 2, h: 1, rarity: "purple", img: "img/紫/机油壶.png" },
  { name: "检测仪", w: 2, h: 1, rarity: "purple", img: "img/紫/检测仪.png" },
  { name: "镜头", w: 1, h: 1, rarity: "purple", img: "img/紫/镜头.png" },
  { name: "耐冲击硬胶", w: 2, h: 2, rarity: "purple", img: "img/紫/耐冲击硬胶.png" },
  { name: "内存条", w: 1, h: 1, rarity: "purple", img: "img/紫/内存条.png" },
  { name: "炮弹", w: 1, h: 2, rarity: "purple", img: "img/紫/炮弹.png" },
  { name: "平衡仪", w: 1, h: 1, rarity: "purple", img: "img/紫/平衡仪.png" },
  { name: "气象分析仪", w: 1, h: 2, rarity: "purple", img: "img/紫/气象分析仪.png" },
  { name: "通枪工具组", w: 1, h: 2, rarity: "purple", img: "img/紫/通枪工具组.png" },
  { name: "无线对讲机", w: 1, h: 2, rarity: "purple", img: "img/紫/无线对讲机.png" },
  { name: "硝化棉", w: 2, h: 2, rarity: "purple", img: "img/紫/硝化棉.png" },
  { name: "芯片处理器", w: 1, h: 1, rarity: "purple", img: "img/紫/芯片处理器.png" },
  { name: "银片手链", w: 1, h: 1, rarity: "purple", img: "img/紫/银片手链.png" },
  { name: "游戏卡带", w: 1, h: 1, rarity: "purple", img: "img/紫/游戏卡带.png" },
  { name: "CPU", w: 1, h: 1, rarity: "purple", img: "img/紫/CPU.png" },

  // 小金
  { name: "UPS电源", w: 2, h: 2, rarity: "gold", img: "img/金/UPS电源.png" },
  { name: "唱片机", w: 2, h: 2, rarity: "gold", img: "img/金/唱片机.png" },
  { name: "金色手机", w: 1, h: 1, rarity: "gold", img: "img/金/金色手机.png" },
  { name: "装饰手杖", w: 1, h: 3, rarity: "gold", img: "img/金/装饰手杖.png" },
  { name: "专用电池组", w: 4, h: 2, rarity: "gold", img: "img/金/专用电池组.png" },
  { name: "维修手册", w: 2, h: 1, rarity: "gold", img: "img/金/维修手册.png" },
  { name: "天线", w: 2, h: 2, rarity: "gold", img: "img/金/天线.png" },
  { name: "摄影机", w: 2, h: 2, rarity: "gold", img: "img/金/摄影机.png" },
  { name: "奢华茶具", w: 2, h: 2, rarity: "gold", img: "img/金/奢华茶具.png" },
  { name: "汽车蓄电池", w: 3, h: 2, rarity: "gold", img: "img/金/汽车蓄电池.png" },
  { name: "金手镯", w: 1, h: 1, rarity: "gold", img: "img/金/金手镯.png" },
  { name: "金魔方", w: 1, h: 1, rarity: "gold", img: "img/金/金魔方.png" },
  { name: "金块", w: 1, h: 2, rarity: "gold", img: "img/金/金块.png" },
  { name: "金杯", w: 1, h: 2, rarity: "gold", img: "img/金/金杯.png" },
  { name: "宫廷银器", w: 2, h: 2, rarity: "gold", img: "img/金/宫廷银器.png" },
  { name: "钻戒", w: 1, h: 1, rarity: "gold", img: "img/金/钻戒.png" },

  // 大金
  { name: "宝石项链", w: 2, h: 2, rarity: "red", img: "img/红/宝石项链.png" },
  { name: "古董茶壶", w: 2, h: 2, rarity: "red", img: "img/红/古董茶壶.png" },
  { name: "金狮雕像", w: 3, h: 2, rarity: "red", img: "img/红/金狮雕像.png" },
  { name: "理想国", w: 3, h: 2, rarity: "red", img: "img/红/理想国.png" },
  { name: "盘蛇金像", w: 2, h: 2, rarity: "red", img: "img/红/盘蛇金像.png" },
  { name: "热成像模块", w: 2, h: 1, rarity: "red", img: "img/红/热成像模块.png" },
  { name: "盛宴雕塑", w: 2, h: 3, rarity: "red", img: "img/红/盛宴雕塑.png" },
  { name: "花瓶", w: 2, h: 2, rarity: "red", img: "img/红/花瓶.png" },
  { name: "机密文件", w: 2, h: 1, rarity: "jimi", img: "img/红/机密文件.png" },
  { name: "机密文件", w: 1, h: 1, rarity: "jimi", img: "img/私货/1.1.png" },
  { name: "机密文件", w: 2, h: 2, rarity: "jimi", img: "img/私货/2.2.png" }
];

// 按稀有度分组物品
const itemsByRarity = {
  white: items.filter(item => item.rarity === "white"),
  purple: items.filter(item => item.rarity === "purple"),
  gold: items.filter(item => item.rarity === "gold"),
  gold1: items.filter(item => item.rarity === "gold1"),
  red: items.filter(item => item.rarity === "red"),
  jimi: items.filter(item => item.rarity === "jimi")
};

// 稀有度权重配置
const rarityWeights = {
  white: 0.3,   // 30%概率为科恩比
  purple: 0.6,  // 60%概率为小紫
  gold: 0.1,   // 10%概率为小金
  red: 0.02,   // 2%概率为大金
  jimi: 0.0001   // 0.01%概率为机密
};

let placedItems = [];
let occupied = [];

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  for (let i = 0; i < gridHeight * gridWidth; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
}

function refreshItems() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  createGrid();
  occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false));
  placedItems = [];

  const itemCount = Math.floor(Math.random() * 4) + 3; // 3~6个物品
  let placed = 0;
  let tries = 0;

  while (placed < itemCount && tries < 100) {
    const item = selectItemByRarity();
    
    const pos = findSpace(item, occupied);
    if (pos) {
      for (let dy = 0; dy < item.h; dy++) {
        for (let dx = 0; dx < item.w; dx++) {
          occupied[pos.y + dy][pos.x + dx] = true;
        }
      }
      placedItems.push({ ...item, x: pos.x, y: pos.y });
      placed++;
    }
    tries++;
  }
}

function selectItemByRarity() {
  const rand = Math.random();
  let cumulativeWeight = 0;
  let selectedRarity = null;

  for (const [rarity, weight] of Object.entries(rarityWeights)) {
    cumulativeWeight += weight;
    if (rand <= cumulativeWeight) {
      selectedRarity = rarity;
      break;
    }
  }

  const itemsOfRarity = itemsByRarity[selectedRarity];
  return itemsOfRarity[Math.floor(Math.random() * itemsOfRarity.length)];
}

function showItemFrames() {
  const grid = document.getElementById("grid");
  placedItems.forEach(item => {
    for (let dy = 0; dy < item.h; dy++) {
      for (let dx = 0; dx < item.w; dx++) {
        const index = (item.y + dy) * gridWidth + (item.x + dx);
        grid.children[index].classList.add("frame");
      }
    }
  });
}

function openSafeSequentially() {
  refreshItems();
  createGrid();
  showItemFrames();
  const grid = document.getElementById("grid");
  let i = 0;

  function placeNext() {
    if (i >= placedItems.length) {
      dimUnusedCells();
      return;
    }
    
    const item = placedItems[i];
    const block = document.createElement("div");
    block.className = "item-block";
    
    // 创建搜索图标
    const searchIcon = document.createElement("div");
    searchIcon.className = "search-icon";
    searchIcon.style.left = `${item.x * cellSize + (item.w * cellSize - 4) / 2 - 10}px`;
    searchIcon.style.top = `${item.y * cellSize + (item.h * cellSize - 4) / 2 - 10}px`;
    grid.appendChild(searchIcon);
    
    // 如果是金色或更高稀有度，添加闪光效果
    const shouldFlash = ["gold", "gold1", "red", "jimi"].includes(item.rarity);
    
    setTimeout(() => {
      // 移除搜索图标
      searchIcon.remove();
      
      if (shouldFlash) {
        const flash = document.createElement("div");
        flash.className = "flash";
        flash.style.left = `${item.x * cellSize}px`;
        flash.style.top = `${item.y * cellSize}px`;
        flash.style.width = `${item.w * cellSize - 4}px`;
        flash.style.height = `${item.h * cellSize - 4}px`;
        grid.appendChild(flash);
        
        // 闪光结束后移除并显示物品
        setTimeout(() => {
          flash.remove();
          showItem();
        }, 300);
      } else {
        showItem();
      }
      
      function showItem() {
        const img = document.createElement("img");
        img.className = "item-img";
        img.src = item.img;
        img.alt = item.name;
        block.appendChild(img);
        
        block.style.width = `${item.w * cellSize - 4}px`;
        block.style.height = `${item.h * cellSize - 4}px`;
        block.style.left = `${item.x * cellSize}px`;
        block.style.top = `${item.y * cellSize}px`;
        block.style.background = getRarityColor(item.rarity);
        
        grid.appendChild(block);
        
        // 清除 frame 边框
        for (let dy = 0; dy < item.h; dy++) {
          for (let dx = 0; dx < item.w; dx++) {
            const index = (item.y + dy) * gridWidth + (item.x + dx);
            grid.children[index].classList.remove("frame");
          }
        }
      }
    }, 500); // 搜索动画持续0.5秒
    i++;
    setTimeout(placeNext, 1200); // 每次延迟1.2秒
  }

  setTimeout(placeNext, 1200); // 首次延迟1.2秒
}

function getRarityColor(rarity) {
  switch (rarity) {
    case "white": return "#ffffff";
    case "purple": return "#d9b3ff";
    case "gold": return "#ffe066";
    case "gold1": return "#ffe066";
    case "red": return "#ff6666";
    case "jimi": return "#ff6666";
    default: return "#ffffff";
  }
}

function dimUnusedCells() {
  const grid = document.getElementById("grid");
  const cells = grid.querySelectorAll(".cell");
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      if (!occupied[y][x]) {
        const index = y * gridWidth + x;
        cells[index].classList.add("dimmed");
      }
    }
  }
}

function findSpace(item, occupied) {
  for (let y = 0; y <= gridHeight - item.h; y++) {
    for (let x = 0; x <= gridWidth - item.w; x++) {
      let fits = true;
      for (let dy = 0; dy < item.h && fits; dy++) {
        for (let dx = 0; dx < item.w; dx++) {
          if (occupied[y + dy][x + dx]) {
            fits = false;
            break;
          }
        }
      }
      if (fits) return { x, y };
    }
  }
  return null;
}

// 初始只加载网格，不自动刷新
createGrid();