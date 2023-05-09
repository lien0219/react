import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Space, Divider } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  addNode,
  deleteNode,
  addEdge,
  deleteEdge,
} from "../store/actions/graphData";

const Page1 = () => {
  const dispatch = useDispatch();
  const [nodeId, setNodeId] = useState("");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const handleAddNode = () => {
    if (!nodeId) return;
    dispatch(
      addNode({
        id: nodeId,
        label: nodeId,
        x: Math.random() * 800,
        y: Math.random() * 600,
      })
    );
    setNodeId("");
  };

  const handleDeleteNode = () => {
    if (!nodeId) return;
    dispatch(deleteNode(nodeId));
    setNodeId("");
  };

  const handleAddEdge = () => {
    if (!source || !target) return;
    dispatch(addEdge({ source, target }));
    setSource("");
    setTarget("");
  };

  const handleDeleteEdge = () => {
    if (!source || !target) return;
    dispatch(deleteEdge({ source, target }));
    setSource("");
    setTarget("");
  };

  return (
    <div>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="Node ID"
            value={nodeId}
            onChange={(e) => setNodeId(e.target.value)}
          />
        </Form.Item>
        <Space>
          <Button icon={<PlusOutlined />} onClick={handleAddNode}>
            添加节点
          </Button>
          <Button icon={<MinusCircleOutlined />} onClick={handleDeleteNode}>
            删除节点
          </Button>
        </Space>
      </Form>

      <Divider />

      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="Source ID"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Target ID"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </Form.Item>
        <Space>
          <Button icon={<PlusOutlined />} onClick={handleAddEdge}>
            添加边
          </Button>
          <Button icon={<MinusCircleOutlined />} onClick={handleDeleteEdge}>
            删除边
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default Page1;
