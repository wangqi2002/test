# uaclient

## 简要介绍

>   您可以在本插件中发现常规opcua所需要的功能,并且帮助您连接opcua server并且将数据归档到**数据库**之中,这有别于常见的opcua client软件:
>
>   1.   连接server
>   2.   创建session
>   3.   订阅node
>   4.   查看节点attributes
>
>   不止基础连接/读写,我们还提供以下功能:
>
>   *   详尽的connection/session/subscription配置
>   *   易于理解并且美观的ui界面
>   *   自动/手动归档到高性能sqlite数据库中
>       *   自动的数据库命名
>       *   手动选择数据库名称
>       *   自动创建表
>   *   本地存储的便携数据库,您可以随时备份/转移设备
>
>   我想我们有必要给您介绍我们的数据库结构:
>
>   *   不同于通常,我们以时间戳作为数据的"索引"
>   *   所以您可以看到数据库的键是node节点的nodeId+displayName
>   *   所以存放在我们数据库中的仅仅只有statusCode为good的节点value

## 界面使用

![9月14日](https://pic-store-hhj.oss-cn-beijing.aliyuncs.com/img/9月14日.gif)

1.   初始化并且连接
     *   点击主菜单,选择opcua然后点击连接,选择配置,最后连接服务器成功

2.   读取节点
     *   点击左边address下的节点,然后您会在右边看到输出

3.   初始化数据库
     *   点击右边数据库选项并且配置

4.   查看报告
     *   点击主侧边栏下部分的报告选项,然后查看log

## 配置介绍

### 初始化客户端(client)

#### 1.connection address

*   endpoint url(ua tcp/ua https)

#### 2.security policy

决定您是否要签名并加密

*   none

*   sign and encrypt
*   sign

#### 3.message security mode

决定消息加密方式,前提是您必须选择encrypt

*   Basic128Rsa15
*   Basic256
*   Basic256sha256
*   Aes128sha256RsaOaep
*   Aes256sha256RsaPss
*   None

#### 4.authentication settings

验证身份设置,通常需要您的server同意才可通过

*   anonymous
    *   匿名

*   username & password
    *   用户名/密码模式

*   certificate
    *   证书模式


#### 5.session name

*   名字(string)

### 初始化订阅(subscrption)

1.   选择节点
     *   从address里面选择您想要订阅的节点并且拖动到中间主要区域中
2.   publishing interval
     *   发布间隔
3.   life time count
     *   生命周期计数
4.   max keep alive count
     *   配置keep alive 报文最大数目
5.   max notification per publish
     *   每次发布最多通知数据量
6.   priority
     *   订阅优先级

### 初始化数据库(database)

1.   输入表名称自动创建格式
2.   从点击开始归档

### 初始化证书(certificates)

输入您的证书所需的信息

## 订阅区

1.   Server
     *   opcua 服务器的名称
2.   NodeId
     *   节点ID
3.   DisplayName
     *   节点名字
4.   Value
     *   节点值
5.   DataType
     *   数据类型
6.   SourceTimestamp
     *   数据来源的时间戳
7.   StatusCode
     *   Good/Bad表示节点状态

## 数据库功能

>   *   数据库采用sqlite,以便于您进行携带和转移
>
>   *   位置位于您软件安装目录下resource/default/your_project中
>
>   *   数据库的格式和内容由您决定
>
>   *   数据库读取功能已在计划中

## 日志系统

>   日志的分类：infomation，warn，error
>
>   *   并不打印所有日志，而是一部分,完整的日志在应用安装目录的client.data/logs下
>   *   如果是报错会以醒目的红色来进行告警
>   *   information ：常规信息和参数
>       warn、error：警告和报错



## 与其他组件联动

>   由于本插件可以通过sqlite数据库来保存数据,所以您可以通过其他的软件或者例如我们提供的easy-report插件来将数据提取出以进行操作
>
>   如果您安装了easy-report插件
>
>   那么您可以通过该插件:
>
>   *   导出数据到插件中
>   *   通过筛选器配置来进行数据的筛选和聚类分析的添加
>   *   .........或者更多操作,这不是本篇教程的重点
>
>   希望您可以通过上面所举的例子理解:
>
>   您可以通过操作数据库来让您的opcua的节点数据变得可持续化/可操作化/甚至是可以通过其他软件的可视化

## 关于证书与openssh

>   由于生成证书您需要openssh,下面我们提供openssh的官网:[OpenSSH](https://www.openssh.com/)
>
>   从windows10开始系统已经自带openssh,windows10之前的版本请您自行下载并且在默认路径安装openssh

## 待开发

1. 更多配置选项
2. 更加稳定的连接
3. 会话恢复
4. 证书的创建、信任
