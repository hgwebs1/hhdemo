const axios = require('axios');

exports.handler = async (event) => {
  const { command, codespaceName, token } = JSON.parse(event.body);
  
  try {
    // GitHub Codespaces execute API call
    const res = await axios.post(
      `https://api.github.com/user/codespaces/${codespaceName}/operations/execute`,
      { command: command },
      { headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' } }
    );
    return { statusCode: 200, body: JSON.stringify({ output: res.data.output || "Command executed." }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to execute" }) };
  }
};
