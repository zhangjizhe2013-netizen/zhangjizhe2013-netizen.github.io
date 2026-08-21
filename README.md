# Ji-Zhe Zhang 个人学术主页

这是一个为 GitHub Pages 准备的中英双语静态网站，不需要安装任何编程环境。

## 网站内容

- 中英双语切换，自动记住访客的语言选择
- 个人简介、研究方向、代表性论文、教育与科研经历
- Google Scholar、ORCID、GitHub 和邮箱入口
- 在线 CV 与 PDF 下载
- 适配电脑、平板和手机

## 发布到 GitHub Pages

1. 登录 GitHub，点击右上角 `+`，选择 **New repository**。
2. Repository name 必须填写：`zhangjizhe2013-netizen.github.io`。
3. 选择 **Public**，不要勾选自动创建 README，然后点击 **Create repository**。
4. 在新仓库页面点击 **uploading an existing file**。
5. 将本文件夹内的所有文件和 `assets` 文件夹一起上传，而不是只上传压缩包。
6. 填写提交说明，例如 `Create academic homepage`，点击 **Commit changes**。
7. 打开仓库的 **Settings → Pages**：
   - Source 选择 **Deploy from a branch**；
   - Branch 选择 `main` 和 `/ (root)`；
   - 点击 **Save**。
8. 等待约 1–3 分钟后访问：<https://zhangjizhe2013-netizen.github.io/>。

## 后续替换头像

当前首页使用高清动漫头像。如需换成个人照片：

1. 将照片裁成接近正方形，命名为 `profile.jpg`；
2. 放入 `assets` 文件夹；
3. 在 `index.html` 中查找 `assets/profile-madoka.webp`，替换为 `assets/profile.jpg`；
4. 再次上传并覆盖 GitHub 仓库中的文件。

## 更新论文或个人信息

- 网页正文：修改 `index.html`
- 页面样式：修改 `styles.css`
- 双语切换和菜单：`script.js`
- 在线 CV：修改 `cv.html`
- PDF CV：替换 `assets/Ji-Zhe_Zhang_CV.pdf`

每次修改后把相应文件上传到同一个 GitHub 仓库并提交，网页会自动更新。
