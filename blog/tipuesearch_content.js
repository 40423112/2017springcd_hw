var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About","tags":"misc"},{"text":"創立 fossil小組 在個別加入所屬小組 在設定fossil前，先進入chrome 設定proxy，網址是 140.130.17.4 連接埠是3128，再到進階裡面改掉自己IPV4之後就可以成功設定proxy，接下來去 Fossil SCM 簡介 複製老師start.bat蓋掉自己的原先的檔案，在CMD裡面打指令 fossil init xxxx.fossil 創立一個fossil後在記下密碼。 重新設定fossil後，在已經設定好了IPV4也成功開啟，但經過老師切換掉我們的螢幕幾分鐘後，在按下重新整理之後就開不起來，在經過檢查後所有的設定都沒變，所以我使用 ipconfig /all 指令回去看我IPV4有沒有變動，在經過檢查後還是沒有任何變化 ，所以我只好重新建立一個fossil。 今天老師在fossil創了個別小組，之後加入自己所屬的小組 ag3 。 今天還教我們如何使用fossil 的指令 fossil sql -R xxxxxx.fossil 這個指令可以顯示fossil的密碼","url":"./xie-tong-chan-pin-she-ji-shi-xi-w4.html","title":"協同產品設計實習 w4","tags":"作業"},{"text":"設定 fossil 今天一開始重新設定了fossil，在設定fossil前，先進入chrome 設定proxy，網址是 140.130.17.4 連接埠是3128，再到進階裡面改掉自己IPV4之後就可以成功設定proxy。 接下來去 Fossil SCM 簡介 複製老師start.bat 蓋掉自己的原先的檔案，在CMD裡面打指令 fossil init xxxx.fossil 創立一個fossil後在記下密碼。 BLOG網址 _2017_03_20_21_31_42_135 from 吳欣奕 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-w3.html","title":"協同產品設計實習 w3","tags":"作業"},{"text":"fourbar 使用 solvespace 繪製 四連桿機構 _2017_03_20_20_56_18_732 from 吳欣奕 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-w1.html","title":"協同產品設計實習 w1","tags":"作業"},{"text":"課程總結 9/21 四連桿機構 錄製_2017_01_13_15_00_10_259 from 吳欣奕 on Vimeo . 9/22 筆記 9/22筆記 1.創2016fallcadp_hw 將readme打勾 格式:python 加密:agpl 新增gh-pages分支 進入setting 點branches 將master變更為gh-pages update 2.git clone 2016fallcadp_hw cd 2016fallcadp_hw git branch git checkout gh-pages git branch 3.學號.github.io 將README打勾 格式:python 加密:agpl 點選create new file 打入index.html 點commit new file 4.創 2016fallcadp_ag6 將README打勾 格式:python 加密:agpl 將2016fallcadp_ag100 clone cd 2016fallcadp_ag100 git branch git checkout gh-pages git branch git submodule add -b gh-pages https://github.com/學號/2016fallcp_ag6 學號 git staus(檢查) 依序將隊友的資料夾加入 個人BLOG 個人作業網誌 設定PROXY git config --global https.proxy http://proxy.mde.tw:3128 git config --global http.proxy http://proxy.mde.tw:3128 如何把組員Hw拉回組的倉儲 git clone 2016fallcpa cd 2016fallcpa git submodule add -b gh-pages https://github.com/學號/2016fallcp_ag6 學號 (表示要追蹤子模組的 gh-pages branch) git submodule init,利用 git submodule update git pull origin gh-pages --recurse-submodules git submodule foreach \"(git checkout gh-pages; git pull)&\" git submodule update --init --recursive 10/27 solvespace 錄製_2016_10_06_01_40_51_166 from 吳欣奕 on Vimeo . 11/17 四連桿機構 11/24 利用sovlespace功能 1.parts(零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出) 錄製_2017_01_13_14_44_06_340 from 吳欣奕 on Vimeo . Extrude (除料) 錄製_2017_01_13_14_48_41_541 from 吳欣奕 on Vimeo . Lathe (旋轉繞行長出或除料) 錄製_2017_01_13_14_51_45_140 from 吳欣奕 on Vimeo . Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) ---- 四連桿:利用線架構完成四連桿模擬後, 將 3D 零件以點重合, 點在面與點在線上約束各連桿後完成. 2. Assembly (零件組立) 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用 12/1 組合圖 12/15 利用 solvespace 組裝3D列印機 PNG Solvespace 錄製_2017_01_13_14_32_32_884 from 吳欣奕 on Vimeo . 12/22 由小組分別組裝各個零件後在一起組裝錄製組裝影片 錄製_2017_01_13_14_39_16_673 from 吳欣奕 on Vimeo .","url":"./dian-nao-fu-zhu-she-ji-shi-xi-ke-cheng-zong-jie.html","title":"電腦輔助設計實習課程總結","tags":"作業"},{"text":"Onshape 3D-列印機組裝 分組由 40423116 拍攝影片","url":"./1222-zuo-ye.html","title":"12/22 作業","tags":"作業"},{"text":"3D-PRINT PNG Solvespace","url":"./1215-zuo-ye.html","title":"12/15 作業","tags":"作業"},{"text":"組合圖","url":"./121-zuo-ye.html","title":"12/1 作業","tags":"作業"},{"text":"sovlespace sovlespace 1.parts(零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出) Extrude (除料) Lathe (旋轉繞行長出或除料) Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) ---- 四連桿:利用線架構完成四連桿模擬後, 將 3D 零件以點重合, 點在面與點在線上約束各連桿後完成. 2. Assembly (零件組立) 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用","url":"./1124zuo-ye.html","title":"11/24作業","tags":"作業"},{"text":"四連桿機構 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"fourbar1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./si-lian-gan-ji-gou.html","title":"四連桿機構","tags":"上課筆記"},{"text":"solvespace 錄製_2016_10_06_01_40_51_166 from 吳欣奕 on Vimeo .","url":"./40423112.html","title":"40423112","tags":"作業"},{"text":"9/22筆記 9/22筆記 1.創2016fallcadp_hw 將README打勾 格式:python 加密:agpl 新增gh-pages分支 進入setting 點branches 將master變更為gh-pages update 2.git clone 2016fallcadp_hw cd 2016fallcadp_hw git branch git checkout gh-pages git branch 3.學號.github.io 將README打勾 格式:python 加密:agpl 點選create new file 打入index.html 點commit new file 4.創 2016fallcadp_ag6 將README打勾 格式:python 加密:agpl 將2016fallcadp_ag100 clone cd 2016fallcadp_ag100 git branch git checkout gh-pages git branch git submodule add -b gh-pages https://github.com/學號/2016fallcp_ag6 學號 git staus(檢查) 依序將隊友的資料夾加入 個人BLOG 個人作業網誌 設定PROXY git config --global https.proxy http://proxy.mde.tw:3128 git config --global http.proxy http://proxy.mde.tw:3128 如何把組員Hw拉回組的倉儲 git clone 2016fallcpa cd 2016fallcpa git submodule add -b gh-pages https://github.com/學號/2016fallcp_ag6 學號 (表示要追蹤子模組的 gh-pages branch) git submodule init,利用 git submodule update git pull origin gh-pages --recurse-submodules git submodule foreach \"(git checkout gh-pages; git pull)&\" git submodule update --init --recursive","url":"./shang-ke-bi-ji.html","title":"上課筆記","tags":"上課筆記"},{"text":"四連桿機構","url":"./1027zuo-ye.html","title":"10/27作業","tags":"作業"}]};