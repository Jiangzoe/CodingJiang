# Dockerfile文件
- `FROM`会拉去一些镜像来到我们的本地 跨机器安装时很方便
- `WORKDIR` 设置镜像中的工作目录
- `COPY` 拷贝文件
- `RUN` 安装node包
- `EXPOSE` 暴露端口
- `CMD` 运行起来


# docker 
- 根据Dockerfile 构建镜像
  `docker build -t image-name .`
- 