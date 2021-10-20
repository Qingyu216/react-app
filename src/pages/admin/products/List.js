import React from 'react'
import {Card, Table, Button, Popconfirm, message} from "antd";

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}

function List(props) {
    const dataSource = [
        {
            id: '1',
            name: '安慕希',
            price: 32
        },
        {
            id: '2',
            name: '特仑苏',
            price: 42
        }, {
            id: '3',
            name: '安慕希',
            price: 32
        },
        {
            id: '4',
            name: '特仑苏',
            price: 42
        }, {
            id: '5',
            name: '安慕希',
            price: 32
        },
        {
            id: '6',
            name: '特仑苏',
            price: 42
        }, {
            id: '7',
            name: '安慕希',
            price: 32
        },
        {
            id: '8',
            name: '特仑苏',
            price: 42
        }, {
            id: '9',
            name: '安慕希',
            price: 32
        },
        {
            id: '10',
            name: '特仑苏',
            price: 42
        }, {
            id: '11',
            name: '安慕希',
            price: 32
        },
        {
            id: '12',
            name: '特仑苏',
            price: 42
        }, {
            id: '13',
            name: '安慕希',
            price: 32
        },
        {
            id: '14',
            name: '特仑苏',
            price: 42
        }, {
            id: '15',
            name: '安慕希',
            price: 32
        },
        {
            id: '16',
            name: '特仑苏',
            price: 42
        }, {
            id: '17',
            name: '安慕希',
            price: 32
        },
        {
            id: '18',
            name: '特仑苏',
            price: 42
        }, {
            id: '19',
            name: '安慕希',
            price: 32
        },
        {
            id: '20',
            name: '特仑苏',
            price: 42
        }, {
            id: '21',
            name: '安慕希',
            price: 32
        },
        {
            id: '22',
            name: '特仑苏',
            price: 42
        }, {
            id: '23',
            name: '安慕希',
            price: 32
        },
        {
            id: '24',
            name: '特仑苏',
            price: 42
        }
    ]
    const columns = [
        {
            title: '序号',
            key: 'id',
            width: 80,
            align: 'center',
            render: (txt, record, index) => txt.id
        }, {
            title: '名字',
            dataIndex: 'name'
        }, {
            title: '价格',
            dataIndex: 'price'
        }, {
            title: '操作',
            width: 200,
            render: ((txt, record, index) => {
                return (
                    <div>
                        <Button type="primary" size="small">修改</Button>
                        <Popconfirm
                            title="确定删除此项？"
                            onConfirm={confirm}
                            onCancel={cancel}
                        >
                            <Button style={{margin: "0 1rem"}} type="danger" size="small">删除</Button>
                        </Popconfirm>
                    </div>
                )
            })
        }
    ]
    return (
        <Card title="商品列表" extra={<Button type="primary" size="small" onClick={() => props.history.push('/admin/products/edit')}>新增</Button>}>
            <Table dataSource={dataSource} columns={columns} bordered rowKey="id"/>
        </Card>
    )
}

export default List
