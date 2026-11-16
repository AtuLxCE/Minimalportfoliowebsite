const toolkit = [
  { category: "Language & retrieval", tools: "Transformers, LangChain, LLMs, RAG" },
  { category: "Model development", tools: "PyTorch, TensorFlow, Scikit-learn, XGBoost" },
  { category: "Cloud & deployment", tools: "GCP, Azure, AWS, Docker, Kubernetes, CI/CD" },
  { category: "Experiment tracking", tools: "MLflow, Weights & Biases" },
  { category: "Languages", tools: "Python, SQL, JavaScript, C++, Rust" },
];

export function Skills() {
  return (
    <section id="skills" className="toolkit-section page-width">
      <div><p className="eyebrow">04 / TOOLKIT</p><h2>What I work with.</h2></div>
      <dl className="toolkit-list">{toolkit.map((item) => <div key={item.category}><dt>{item.category}</dt><dd>{item.tools}</dd></div>)}</dl>
    </section>
  );
}
