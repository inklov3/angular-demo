export default function () {
    return [
        {
            title: '教师管理',
            open: true,
            children: [
                {
                    title: '教师管理',
                    link: '/admin/teacher-manager',
                }, {
                    title: '批量导入',
                    link: '/admin/teacher-manager',
                },
            ],
            link: '/admin/teacher-manager',
            menuIcon: 'icon icon-console',
        },
        {
            title: '学生管理',
            open: false,
            children: [
                {
                    title: '学生管理',
                    link: '/pages/getting-started/sample',
                }, {
                    title: '批量导入',
                    link: '/pages/getting-started/sample',
                },
            ],
            link: '/pages/getting-started',
            menuIcon: 'icon icon-console',
        },
    ]
}
