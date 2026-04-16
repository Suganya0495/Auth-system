const registerUser = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "test",
        password: "123456"
      })
    });

    const data = await res.json();   // 🔥 THIS IS REQUIRED
    console.log("Response:", data);
    alert(data.message || data.error);
  } catch (err) {
    console.log("Error:", err);
  }
};