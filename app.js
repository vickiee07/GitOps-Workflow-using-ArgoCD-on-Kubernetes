const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("🚀 GitOps Workflow with ArgoCD & Kubernetes is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
