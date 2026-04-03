// 获取DOM元素
const generateBtn = document.getElementById('generateBtn');
const promptInput = document.getElementById('prompt');
const sizeSelect = document.getElementById('size');
const stepsInput = document.getElementById('steps');
const imageContainer = document.getElementById('imageContainer');

// 模拟AI生成（作业演示用，可替换为真实API）
function mockAIGenerate(prompt, size, steps) {
    // 模拟网络请求延迟
    return new Promise((resolve) => {
        setTimeout(() => {
            // 用占位图模拟生成结果（真实项目替换为API返回的图片）
            const [width, height] = size.split('x');
            const imageUrl = `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
            resolve({
                success: true,
                imageUrl: imageUrl,
                prompt: prompt,
                size: size,
                steps: steps
            });
        }, 1500);
    });
}

// 生成按钮点击事件
generateBtn.addEventListener('click', async () => {
    // 获取参数
    const prompt = promptInput.value.trim();
    const size = sizeSelect.value;
    const steps = stepsInput.value;

    // 参数校验
    if (!prompt) {
        alert('请输入提示词！');
        return;
    }

    // 显示加载状态
    imageContainer.innerHTML = '<p>AI生成中，请稍候...</p>';

    try {
        // 调用AI生成（真实项目替换为真实API请求）
        const result = await mockAIGenerate(prompt, size, steps);
        
        // 渲染结果
        imageContainer.innerHTML = `
            <img src="${result.imageUrl}" alt="AI生成的图片">
            <div class="result-info">
                <p>提示词：${result.prompt}</p>
                <p>尺寸：${result.size}</p>
                <p>生成步数：${result.steps}</p>
            </div>
        `;
    } catch (error) {
        imageContainer.innerHTML = `<p style="color: red;">生成失败：${error.message}</p>`;
    }
});