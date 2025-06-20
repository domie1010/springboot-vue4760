const base = {
    get() {
        return {
            url : "http://localhost:8080/shixunguanli/",
            name: "shixunguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shixunguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "实训管理系统"
        } 
    }
}
export default base
