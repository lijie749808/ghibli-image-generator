import React, { useState } from 'react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleGenerateClick = () => {
    // 模拟 API 调用
    // 实际应用中，这里应该调用真实的 API
    setImage('https://example.com/generated-image.jpg'); // 使用 setImage
  };

  const handleDownloadClick = () => {
    // Download image
  };

  return (
    <div>
      <input type="text" value={prompt} onChange={handlePromptChange} />
      <button onClick={handleGenerateClick}>Generate</button>
      {image && <img src={image} alt="Generated" />}
      <button onClick={handleDownloadClick}>Download</button>
    </div>
  );
};

export default ImageGenerator;
