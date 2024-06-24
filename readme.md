# 補充

## 連結分享
圖片相關

[Unsplash](https://unsplash.com/)
[Picsum](https://picsum.photos)

配色相關
[Color Hunt](https://colorhunt.co/)
[Collors](https://coolors.co/)


## Git 版本控制

### 安裝Git
https://git-scm.com/
### 設定-git config
檢查設定
```
git config --list
```
設定/修改使用者
```
git config --global user.name "你的名子"
```
設定/修改EMAIL
```
git config --global user.email "你的EMAIL"
```
檢查使用者
```
git config --global user.name 
```
### Git初始化
先移到要版本控制的資料夾內並且執行:
```
git init
```

### 常用指令
| Windows | Mac / Linux | 說明 |
| --------| -------- | -------- |
| cd      | cd       | 切換目錄     |
| mkdir   | mkdir    | 新增資料夾     |
| rmdir   | rmdir    | 移除資料夾     |
| dir     | ls       | 查看資料夾     |
| echo >> | touch    | 新增檔案     |
| del     | rm       | 刪除檔案 |
| cls     |clear     | 清除畫面     |
| cd      |pwd       | 列出目前路徑 |
-**

### Working、Staging & Repository
查看檔案狀態
```
git status
```
加入追蹤(tracked)
```
git add .
```
> 「add .」是將所有資料加入追蹤，也可以使用「add 檔案名稱」

加入儲存庫
```
git commit -m "message"
```
> -m 指的是message。在commit的時候一定要有-m，否則無法commit

### 連線遠端
git remote
```bash=
git remote add origin master 遠端位置
```

git push
```bash=
git push origin master
```
若要將該位置設定為主要推送位置可加入參數-u，之後推送就可以省略origin master
```bash=
git push origin master -u
```
### 紀錄
Git 紀錄
```
git log
```
Git紀錄用一行顯示
```
git log --oneline
```
查看所有紀錄
```
git reflog
```
or
```
git log -g
```
### 分支
查詢分支
```bash=
git branch

git branch -a
#近端與遠端
```
新增分支
```bash=
git branch 分支名稱
```
移除分支
```bash=
git branch 分支名稱 -d
```
切換分支
```bash=
git checkout 分支名稱
```
合併分支
``` bash=
git merge 分支名稱
```
### 標籤
查詢標籤
```bash=
git tag
```
新增標籤
```bash=
git tag 標籤名稱
```
移除標籤
```bash=
git tag 標籤名稱 -d
```
上傳標籤
```bash=
git push origin master --tags
```

### 從集結區移除檔案
將myTxt.txt檔從集結區移除
```bash=
git rm --cached myTxt.txt
```
移除所有集結區的檔案
```bash=
git rm --cached -r .
```
### 還原
在還沒追蹤之前，將內容還原成上一次修改的狀態
```bash=
git checkout index.html
```
回復上一次的commit
* 使用cmd
```bash=
git reset HEAD~1 --hard
```
> `~1`代表回復上一個版本，`~2`代表回復上兩個版本

* 使用git bash
```bash=
git reset HEAD^
```
### 回到特定版本
```bash=
git reset --hard 版本號
```
### 下載
當遠端檔案比本地檔案新的時候，可使用pull更新本地檔案
```bash=
git pull origin master
```
若push時有用-u，則可省略 origin master
```bash=
git pull
```
### 取得儲存庫
當電腦內沒有你的專案時，可用clone將專案複製下來
```bash=
git clone 儲存庫位置
```
