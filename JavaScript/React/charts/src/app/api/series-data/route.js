export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const option = searchParams.get('option');

    const exampleData = [
        { name: '搜索引擎', value: 1048 },
        { name: '直接访问', value: 735 },
        { name: '邮件营销', value: 580 },
        { name: '联盟广告', value: 484 },
        { name: '视频广告', value: 300 }
    ];

    const exampleBarLineData = [
        {
            name: '日期1',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            name: '邮件营销',
            data: [120, 200, 150, 80, 70, 110, 130]
        },
        {
            name: '联盟广告',
            data: [60, 80, 70, 90, 110, 130, 150]
        },
        {
            name: '搜索引擎',
            data: [320, 332, 301, 334, 470, 330, 320]
        },
        {
            name: '搜索引擎1',
            data: [320, 332, 301, 334, 470, 330, 320]
        }
    ];

    if (option === 'option1') {
        return new Response(JSON.stringify(exampleData), { status: 200 });
    } else if (option === 'option2') {
        return new Response(JSON.stringify(exampleBarLineData), { status: 200 });
    } else {
        return new Response(JSON.stringify({ error: 'Invalid option' }), { status: 400 });
    }
}
