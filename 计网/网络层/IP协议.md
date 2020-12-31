# 网络层 - IP协议

- 简介

  在因特网模型中，主要的网络协议是**网际协议**(InternetProtocol IP)

## 网际互联

- 简介

  ![两台主机之间的链路](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/logicalAddressing/image-20201229150614495.png)
  
  网络的物理层和数据链路层在本地运行，这两层共同负责网络相邻节点间的数据传递
  
  ![image-20201229151725889](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229151725889.png)
  
  R1 如何知道应该从 f3 接口将其发送出去？
  
  为了解决通过多条链路进行传递的问题，设计了网络层（也称互联网络层），负责主机间的传递，还负责通过路由器或交换机对分组进行路由选择
  
  ![互联网中的网络层](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229151907037.png)
  
  增加了网络层的同一互联网络
  
  ![源端、路由器端和目的端的网络层](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229154315530.png)
  
  ![网络层解释](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229154543730.png)
  
  ![分组交换网络](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229154811384.png)
  
  因特网中的网络层交换是利用数据报分组交换方法来实现的
  
  ![无连接的服务](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229154919148.png)
  
  因特网的网络层通信是无连接的

## IPv4

- 简介

  ![TCP/IP协议族](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229155110580.png)

  IPv4 不可靠的无连接数据报协议

  尽力传递：IPv4 不提供差错控制或流量控制，假定底层是不可靠的，因此尽力传输到目的地，但没有保证

  使用数据报的分组交换网的无连接协议

### 数据报

IPv4 的分组称为**数据报**

![IPv4数据报格式](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229201538046.png)

4 * 5 字节

1. 4bit版本号 4bit头长 8bit服务类型 16bit总长 - 基本信息

2. 分段 16bit标识 3bit标记 13bit偏移 - 分段信息

3. 8bit生存 8bit协议 16bit检验和 - 其他信息

4. 32bit源IP地址 - 地址信息

5. 32bit目的IP 地址 - 地址信息

- 版本 4bit

  目前版本是 4

- 头部长度 4bit

  单位：4字节

  定义数据报头部的总长度

  必需的，因为头部长度可变（因为有选项）

  头部长度20-60 个字节（5-15 0101-1111）

- 服务 8bit

  以前名为服务类型，现称为差分服务

- 总长度 16bit

  单位：1字节

  定义了一个以字节计的 IPv4 数据报的总长度（头部加上数据）

  数据长度 = 总长度 - 头部长度

  IPv4 数据报长度限制 $2^{16} - 1 = 65535$

- 标识 16bit

  用于分段

- 标记 3bit

  用于分段

- 分段偏移 13bit

  用于分段

- 生存时间 8bit

  控制一个数据报所通过路由器的最大跳数（路由器数）

  当路由器接收到一个数据报时，先将此字段的值减 1，如果减 1 后此字段的值为 0，路由器就丢弃该数据报

- 协议 8bit

  定义了使用此 IPv4 层服务的高层协议，高层一些协议的数据能够封装到 IPv4 数据报中

  ![协议字段](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229174232444.png)

- 校验和 16bit

- 源地址 32bit

  定义了源端的 IPv4 地址

  在 IPv4 数据报从源主机到目的主机传输期间，这个字段保持不变

- 目的地址 32bit

  定义了目的端的 IPv4 地址

  在 IPv4 数据报从源主机到目的主机传输期间，这个字段保持不变

![字段求解示例](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229192512949.png)

### 服务详解

![image-20201229171751216](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229171751216.png)

- 服务类型

  3位优先位 + 4位服务类型 + 1位未使用

  **优先位**定义了数据报的优先级，最低优先值的数据报首先被丢弃

  **服务类型**

  ![服务类型](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229172753478.png)

  ![应用的服务类型默认值](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229172843407.png)

- 差分服务

  6位码点 + 2位未使用

  ![差分服务](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229173039211.png)

### 分段详解

- 最大传输单元

  每个数据链路层协议都有自己的帧格式，定义了一个字段中数据字段的最大长度，即当数据报封装成帧时，该数据报的总长度必须小于这个最大数据长度

  ![最大传输单元](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229193049069.png)

  让 IPv4 数据报的最大长度取最大传输单元 65535 字节

  此时，对其他物理网络，就需要对数据报进行分割，这个过程称为分段，分段可能有多次

  源端通常不对 IPv4 分组进行分段，传输层将数据分割成能适合在数据链路层所用 IPv4 的长度

  数据报的分段可由主机或其路径上的路由器进行，但数据报的重组只能在目的主机上进行

  数据报被分段后，三个字段必须改变：标志，分段偏移和总长度。而，不管是否进行分段，校验和的值总是重新计算

- 相关字段

  + 标识 16bit

    标识唯一定义数据报

    所有分段都有与原始的数据报相同的标识号

    有助于在目的端重组数据报，目的端知道将所有具有相同标识值的分段必须重组成一个数据报

  + 标记 3bit

    ![标记字段](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229195813495.png)

    第一位：保留

    第二位：不分段位，1-不能将该数据报进行分段（如果太长不能物理网络则丢弃该数据报，并向源主机发送一个 ICMP 差错报文），0-根据需要对数据报进行分段

    第三位：多分段位，1-此数据报不是最后的分段，后面还有，0-这是最后一个或唯一的分段

  + 分段偏移 13bit

    ![分段示例](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229200850696.png)

    表示分段在整个数据报中的相对位置，是在原始数据报中的数据偏移量

    单位：8 字节（为了表示更多的数据）

    将数据报进行分段的主机或路由器必须这样选择每个分段的长度，即第一个字节编号能被 8 整除

    ![分段示例](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229201758039.png)

    所有分段的偏移量所表示的位置都相对于原始的数据

    ![image-20201229201916108](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229201916108.png)

- 解题示例

	![分段解题示例](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229201953512.png)
	
	偏移是指相对数据的，不算头部

### 校验和

- 简介

  只对头部进行，而不在数据部分进行

  校验和只对发生变化的部分进行校验，而每经过一个路由器，IPv4 数据报的头部就要改变一下，但数据部分不改变

- 计算示例

  ![校验和的计算](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229204337272.png)

  计算：首先，将校验和字段置为0。然后，将整个头部划分为16位的部分，并将各部分相加。将计算结果（和）取反码，插入到校验和字段中。

### 选项

- 简介

  ![image-20201229205327776](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229205327776.png)

  ![选项解读](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229211659540.png)

  选项字段用于网络测试和调试，不是必须的，但选项处理是 IPv4 数据报必需的部分

## IPv6

- 简介

  ![image-20201229212033724](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229212033724.png)

  IPv4 的缺点

  IPv6、下一代网际协议(IPng)

- 优点

  ![IPv6的优点](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229212939941.png)

### 分组格式

- 简介

  ![image-20201229213425832](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229213425832.png)

  基本头部：40 字节

  有效载荷：可选的扩展头部 + 来自上层的数据

- 基本头部

  ![IPv6数据报的格式](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229213816897.png)

  + 版本

    版本号 6

  + 优先级

    定义了当发生通信量拥塞时的分组的优先级

  + 流标号

    对特殊的数据流提供专门处理

  + 有效载荷长度

    定义了包括基本头部在内的 IP 数据报的总长度

  + 下一个头部 8bit

    定义了数据报中跟随在基本头部之后的头部，是 IP 所使用的可选的扩展头部，或是上层协议的头部

    在 IPv4 中称为协议

    ![image-20201229213942300](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229213942300.png)
  
  + 跳数限制
  
    在 IPv4 中为生存时间 TTL
  
  + 源地址
  
    识别数据报的原始源端
  
  + 目的地址
  
    识别数据报的最终目的地
  
  IPv6 的其他部分 略

## IPv4 到 IPv6 的过渡

- 简介

  ![三种过渡策略](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229234256427.png)

- 双协议栈

  ![image-20201229234407551](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229234407551.png)

  同时运行 IPv4 和 IPv6

- 隧道技术

  ![image-20201229234424612](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229234424612.png)

  IPv6 封装成 IPv4

- 头部转换

  ![image-20201229234437798](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229234437798.png)

  IPv6 的头部转换成 IPv4 的头部

  ![头部转换](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/networkLayer/image-20201229234854328.png)