# 羽衣尘的个人网站

## 使用 vite 脚手架

## 关于自定义 pages 域名，

前端打包后的文件在 doc 目录里（不用默认的 dist 目录是因为 pages 目录默认只能是 root 或 docs 目录），
CNAME 里存放自定义域名信息，通过 actions 打包需要在 build 完成后复制一份到 docs 目录，详细参考代码中的`main.yml`配置

## 使用 gist 管理文章

这里使用了 github api

token 生成入口 GitHub setting -> developer setting -> Personal access tokens

## 坑

- vite 中使用 lazy 动态 import 组件，需要`index.jsx`结尾，而且不支持`${'post/edit'}/index.jsx`, 不然本地运行可以，部署就会报错 [issue](https://github.com/vitejs/vite/issues/2130)
