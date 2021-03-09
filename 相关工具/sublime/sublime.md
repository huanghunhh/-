# sublime

## 配置 C++ 编译环境

![image-20210303125741163](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/相关工具/sublime/20210303125913.png)

```json
{
    // "shell_cmd": "make"
    "encoding": "cp936", // 确保编译时不会乱码（中文路径）
    "working_dir": "$file_path",
    "shell_cmd": "g++ -Wall -std=c++0x \"$file_name\" -o \"$file_base_name\"",
    "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
    "selector": "source.cpp",

    "variants": 
    [
        {   
            "name": "MyRun",
            "shell_cmd": "g++ -Wall -std=c++0x  \"$file\" -o \"$file_base_name\" && \"${file_path}/${file_base_name}\""
        },
        {   
            "name": "MyRunInCmd",
            "shell_cmd": "g++ -Wall -std=c++0x  \"$file\" -o \"$file_base_name\" && start cmd /c \"\"${file_path}/${file_base_name}\" & pause \""
        }
    ]
}


```

## channels 配置 channel_v3 文件

![image-20210309092607115](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/相关工具/sublime/image-20210309092607115.png)

[解决 sublime package control 出现 There are no packages available for installation](https://blog.csdn.net/zknxx/article/details/52685094)

[package control: install 提示 There Are No Packages Available For Installation](https://blog.csdn.net/Burgess_Lee/article/details/73848369)

