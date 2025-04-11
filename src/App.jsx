import { useState } from 'react';

export default function App() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState({
    decision: '',
    reason: '',
    reflection: '',
    date: new Date().toISOString().split('T')[0]
  });

  const addLog = () => {
    setLogs([...logs, input]);
    setInput({
      decision: '',
      reason: '',
      reflection: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const deleteLog = (index) => {
    setLogs(logs.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>📝 결정 회고 메모</h2>
     <textarea
  placeholder="🧠 어떤 결정을 했나요?"
  rows="3"
  style={{ width: '100%', resize: 'vertical' }}
  value={input.decision}
  onChange={(e) => setInput({ ...input, decision: e.target.value })}
/>

<textarea
  placeholder="❓ 왜 그렇게 했나요?"
  rows="3"
  style={{ width: '100%', resize: 'vertical' }}
  value={input.reason}
  onChange={(e) => setInput({ ...input, reason: e.target.value })}
/>

<textarea
  placeholder="🔁 다음엔 어떻게 할까요?"
  rows="3"
  style={{ width: '100%', resize: 'vertical' }}
  value={input.reflection}
  onChange={(e) => setInput({ ...input, reflection: e.target.value })}
/><br/>
      <input type='date' value={input.date} onChange={(e) => setInput({...input, date: e.target.value})} /><br/>
      <button onClick={addLog}>기록하기</button>

      {logs.map((log, i) => (
        <div key={i} style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
          <p><strong>🧠 결정:</strong> {log.decision}</p>
          <p><strong>❓ 이유:</strong> {log.reason}</p>
          <p><strong>🔁 다음엔:</strong> {log.reflection}</p>
          <p>{log.date}</p>
          <button onClick={() => deleteLog(i)}>🗑 삭제하기</button>
        </div>
      ))}
    </div>
  );
}
