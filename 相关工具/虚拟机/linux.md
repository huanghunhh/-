# linux

## 网络

[VMware 安装 Centos7 超详细过程（图文）](https://blog.csdn.net/babyxue/article/details/80970526)

[NAT 模式和桥接模式实现局域网其他物理机器与 Vmware 虚拟机互相访问](https://blog.csdn.net/davidhzq/article/details/102539914)

[浅谈 VMware 的 NAT 模式](https://blog.csdn.net/wang1171405487/article/details/81943868)

VMnet1 网口对应的是仅主机模式

VMnet8 网口对应的是 NAT 模式

VMnet0 网口对应的是桥接模式（不需要配置）

主机上 VMnet 的配置

![image-20210405194649496](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405195649.png)

编辑虚拟机的虚拟网络

![image-20210405194900888](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405195655.png)

与主机设置的 VMnet 要处于同一个网段

![image-20210405195616570](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405195659.png)



设置 ip 地址

![image-20210405203338977](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405203343.png)

![image-20210405203832718](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405203834.png)

yum 的下载源

![image-20210405202134825](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405202136.png)

安装 gcc

![image-20210405202358306](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405202400.png)

## gcc 的使用

[在 Linux（Ubuntu 版）下编写运行 C 语言程序](https://blog.csdn.net/qq_31125955/article/details/79343498)

[Linux 下 gcc 的使用](https://blog.csdn.net/weixin_39411321/article/details/85216850)

- 单个文件一步形成 exe 文件

  ```shell
  gcc -o main main.c # 生成 exe 文件
  ./main # 运行
  ```

  

- 多个文件一步形成 exe 文件

  ```shell
  gcc -o main main1.c main2.c main3.c # 生成 exe 文件
  ./main # 运行
  ```

## makefile

[makefile 从入门到放弃 —— 博主吐血整理的笔记](https://blog.csdn.net/weixin_44895651/article/details/106396694)

[Makefile 教程（绝对经典，所有问题看这一篇足够了）](https://blog.csdn.net/weixin_38391755/article/details/80380786)

[跟我一起写 Makefile（一）](https://blog.csdn.net/haoel/article/details/2886)

## 问题实例

### 哲学家进餐问题

[【操作系统实验】Linux 环境下用进程实现哲学家进餐问题 ——C 语言完整代码 + 详细实验报告](https://blog.csdn.net/qq_44528283/article/details/115125474)

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/sem.h>
#include <sys/types.h>

#define MAX_BUFFER_SIZE 5
#define SHM_MODE 0600
#define SEM_MODE 0600

#define mutex 5
#define true 1
#define room 6

int chopstick[5] = {0,1,2,3,4};
int sem_id = -1;
pid_t philosopher;

//P操作
void Wait(int sem_id,int sem_num)
{
    struct sembuf buf;
    buf.sem_num = sem_num;
    buf.sem_op = -1;
    buf.sem_flg = SEM_UNDO;

    if(semop(sem_id,&buf,1) < 0)
    {
        perror("wait failed");
        exit(1);
    }
}

//V操作
void Signal(int sem_id,int sem_num)
{
    struct sembuf buf;
    buf.sem_num = sem_num;
    buf.sem_op = 1;
    buf.sem_flg = SEM_UNDO;

    if(semop(sem_id,&buf,1) < 0)
    {
        perror("signal failed");
        exit(1);
    }
}

void think(int i)
{
    printf("the philosopher of %d is thinking(pid is %d)\n",i,getpid());
}

void eat(int i)
{
    printf("the philosopher of %d is eating(pid is %d)\n",i,getpid());
}

void Philosophers1(int sem_id,int i)
{
    int j;
    for(j=0;j<2;j++){
        think(i);
        Wait(sem_id,room); 
        Wait(sem_id,chopstick[i]); 
        Wait(sem_id,chopstick[(i+1)%5]); 
        eat(i);
        Signal(sem_id,chopstick[i]); 
        Signal(sem_id,chopstick[(i+1)%5]); 
        printf("the process of %d(pid is %d,ppid is %d)has finished eating\n",i,getpid(),getppid());
        Signal(sem_id,room); 
        fflush(stdout);
    }
    exit(0);
}

int main()
{
    int i = 0;

    if((sem_id = semget(IPC_PRIVATE,7,SEM_MODE)) < 0)
    {                                               
        perror("create semaphore failed! \n");
        exit(1);
    }

    if(semctl(sem_id,mutex,SETVAL,1) == -1)
    {
        perror("sem set value error! \n");
        exit(1);
    }
    for(i=0;i<5;i++){
        if(semctl(sem_id,chopstick[i],SETVAL,1) == -1)
        {
            perror("sem set value error! \n");
            exit(1);
        }
    }
    if(semctl(sem_id,room,SETVAL,4) == -1)
    {
        perror("sem set value error! \n");
        exit(1);
    }

    for(i=0;i<5;i++){
        philosopher = fork();
        if(philosopher < 0){
            perror("the fork failed");
            exit(1);
        }
        else if(philosopher == 0){
            Philosophers1(sem_id,i);       
        }
    }
    while (wait(0) != -1);
    shmctl(sem_id,IPC_RMID,0);
    printf("finish!!!\n");
    fflush(stdout);
    exit(0);
    return 0;
}

```

[哲学家进餐问题（linux 下 C/C++ 源码）](https://blog.csdn.net/csdn96087/article/details/84729776)

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <pthread.h>

pthread_mutex_t m[5];

void* tfn(void *arg)
{
	int i = (int)arg;
	int left,right;
	if(i == 4){
		//防止震荡现象发生。
		left = 0;
		right = i;
	}
	else{
		left = i;
		right = i+1;
	}
	while (1) {
		pthread_mutex_lock(&m[left]);
		int ret = pthread_mutex_trylock(&m[right]); 	
		if(ret != 0){
			//尝试拿右手筷子失败，把左手的筷子释放
			pthread_mutex_unlock(&m[left]);
			printf("哲学家%d没有抢到筷子...\n",i);
			continue;
		}
		//拿到了两支筷子
		//吃面
		printf("哲学家%d正在吃面...\n",i);
		//吃完面，释放筷子.
		pthread_mutex_unlock(&m[left]);
		pthread_mutex_unlock(&m[right]);
		//sleep(1);
	}
}

int main()
{
	pthread_t pth[5];
	//初始化五把锁
	for(int i = 0;i < 5;i++){
		pthread_mutex_init(&m[i],NULL);
	}
	//创建5个线程，相当于5个哲学家
	for(int i = 0;i < 5;i++){
		pthread_create(&pth[i],NULL,tfn,(void*)i);
	}
	//回收子线程
	for(int i = 0;i < 5;i++){
		pthread_join(pth[i],NULL);
	}
	//退出
	pthread_exit(NULL);
	
}

```

```shell
gcc -std=c99 -o main main.c -lpthread
# -std=c99 使用 c99 模式编译
# -lpthread 必须加上 - lpthread，不然会报错，找不到线程的相关函数，gcc 自身没有连接线程
```

![image-20210403235938661](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%9B%B8%E5%85%B3%E5%B7%A5%E5%85%B7/%E8%99%9A%E6%8B%9F%E6%9C%BA/20210405204236.png)