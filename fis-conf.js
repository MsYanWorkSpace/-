/*
* ��ĿĿ¼
* components   (�������ڲ���д��һЩ���к���)
*       --common
*           --host-config.js    �����õ���IP��
*           --url.js    ��������Ŀ��ҳ��·����
*           --common.js     ��һЩ�����ܺ����װ��
*       --widget    ���������һЩ�����
* lib   (��������ⲿ��ȡ�Ŀ�,��jquery��bootstr)
*       --js
*       --styles
* views  (ҳ��)
* */


/*
������Ŀ��������ͬһ��������Ŀ¼���ж����Ŀ�����Խ�·���ӵ���Ŀ����
eg��www/ ��Ŀ¼
      --���� ��Ŀ¼
     --����  ��Ŀ¼
�������϶�Ӧ�µ�ĳ����ĿΪ
     fis.config.set('project',"����/��Ŀ��");
*/
fis.config.set('project',"demo1");

/*
 * ����rquireģ��·��
 * */
fis.hook('amd',{
    /*baseUrl: './',*/
    paths: {
        $:"lib/js/jQuery.2.1.4.min",
        avalon:"lib/js/avalon.shim"
    },
    shim: {
        /* 'comp/2-0/2-0.js': {
         deps: ['jquery'],
         exports: 'myFunc'
         }*/
    }
});

//�� fis3 ��������ָ��Ŀ¼
/*fis.match('**', {
   deploy: fis.plugin('local-deliver', {
         to: 'e:\\website\\AppServ\\www\\'
   })
 })*/
