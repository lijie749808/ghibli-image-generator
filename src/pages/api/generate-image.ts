// 创建一个 API 端点来处理图像生成请求

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  // 处理请求并返回生成的图像
  res.status(200).json({ imageUrl: 'https://example.com/generated-image.jpg' });
}
