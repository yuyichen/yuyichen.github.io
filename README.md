# 羽衣尘的个人网站

## 使用vite脚手架


## 关于自定义pages 域名，
前端打包后的文件在doc目录里（不用默认的dist目录是因为pages目录默认只能是root或docs目录），
CNAME里存放自定义域名信息，通过actions打包需要在build完成后复制一份到docs目录，详细参考代码中的`main.yml`配置
## 使用gist管理文章
这里使用了github api

token生成入口 GitHub setting -> developer setting -> Personal access tokens

## 坑
* vite 中使用lazy 动态import组件，需要`index.jsx`结尾，而且不支持`${'post/edit'}/index.jsx`, 不然本地运行可以，部署就会报错 [issue](https://github.com/vitejs/vite/issues/2130)
