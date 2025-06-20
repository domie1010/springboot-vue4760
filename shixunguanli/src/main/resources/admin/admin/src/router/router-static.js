import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import laoshi from '@/views/modules/laoshi/list'
    import qingjia from '@/views/modules/qingjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yonghuKaoqin from '@/views/modules/yonghuKaoqin/list'
    import yonghuKaoqinList from '@/views/modules/yonghuKaoqinList/list'
    import zuoye from '@/views/modules/zuoye/list'
    import zuoyeTijiao from '@/views/modules/zuoyeTijiao/list'
    import config from '@/views/modules/config/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryQingjia from '@/views/modules/dictionaryQingjia/list'
    import dictionaryQingjiaYesno from '@/views/modules/dictionaryQingjiaYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYonghuKaoqin from '@/views/modules/dictionaryYonghuKaoqin/list'
    import dictionaryYonghuKaoqinList from '@/views/modules/dictionaryYonghuKaoqinList/list'
    import dictionaryZuoye from '@/views/modules/dictionaryZuoye/list'
    import dictionaryZuoyeTijiaoYesno from '@/views/modules/dictionaryZuoyeTijiaoYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryQingjia',
        name: '请假类型',
        component: dictionaryQingjia
    }
    ,{
        path: '/dictionaryQingjiaYesno',
        name: '申请状态',
        component: dictionaryQingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYonghuKaoqin',
        name: '学生考勤类型',
        component: dictionaryYonghuKaoqin
    }
    ,{
        path: '/dictionaryYonghuKaoqinList',
        name: '打卡状态',
        component: dictionaryYonghuKaoqinList
    }
    ,{
        path: '/dictionaryZuoye',
        name: '实训模块类型',
        component: dictionaryZuoye
    }
    ,{
        path: '/dictionaryZuoyeTijiaoYesno',
        name: '提交状态',
        component: dictionaryZuoyeTijiaoYesno
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chengji',
        name: '成绩',
        component: chengji
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/qingjia',
        name: '请假',
        component: qingjia
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/yonghuKaoqin',
        name: '学生考勤',
        component: yonghuKaoqin
      }
    ,{
        path: '/yonghuKaoqinList',
        name: '学生考勤详情',
        component: yonghuKaoqinList
      }
    ,{
        path: '/zuoye',
        name: '实训模块',
        component: zuoye
      }
    ,{
        path: '/zuoyeTijiao',
        name: '实训成果',
        component: zuoyeTijiao
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
