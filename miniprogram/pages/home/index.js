const yaml = require('js-yaml');

Page({

    onLoad: function (options) {
        const fs = wx.getFileSystemManager()

        fs.open({
            filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
            flag: 'a+',
            success(res) {
                // 写入文件
                fs.write({
                    fd: res.fd,
                    data: 'some text',
                    success(res) {
                        console.log(res.bytesWritten)
                    }
                })
            }
        })

        try {
            const res = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
            console.log(res)
        } catch (e) {
            console.log(e)
        }

        try {
            const doc = yaml.safeLoad(fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0))
            console.log(doc)
        } catch (e) {
            console.log(e)
        }
    },

})