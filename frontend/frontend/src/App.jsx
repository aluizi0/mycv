// App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  // 1. ESTADO: Aqui ficam os dados do currículo
  // Quando você muda algo aqui, a tela atualiza sozinha!
  const [curriculo, setCurriculo] = useState({
    nome: 'Seu Nome Completo',
    cargo: 'Desenvolvedor Fullstack',
    resumo: 'Apaixonado por tecnologia e soluções criativas...',
    email: 'seu.email@exemplo.com'
  });

  // 2. FUNÇÃO: Atualiza o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurriculo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app-container">
      
      {/* --- LADO ESQUERDO: EDITOR --- */}
      <div className="editor-panel">
        <h2>Editar Informações</h2>
        
        <div className="input-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            name="nome" 
            value={curriculo.nome} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <label>Cargo / Título</label>
          <input 
            type="text" 
            name="cargo" 
            value={curriculo.cargo} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <label>Resumo Profissional</label>
          <textarea 
            rows="4"
            name="resumo" 
            value={curriculo.resumo} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <label>E-mail</label>
          <input 
            type="email" 
            name="email" 
            value={curriculo.email} 
            onChange={handleChange} 
          />
        </div>
      </div>

      {/* --- LADO DIREITO: PAPEL A4 --- */}
      <div className="preview-panel">
        <div className="a4-paper">
          
          <div className="resume-header">
            <h1>{curriculo.nome}</h1>
            <h3>{curriculo.cargo}</h3>
            <p style={{fontSize: '0.9em', color: '#666'}}>{curriculo.email}</p>
          </div>

          <div className="resume-body">
            <h4>Resumo Profissional</h4>
            <p>{curriculo.resumo}</p>
            
            <hr />
            
            {/* Aqui vamos adicionar Experiência e Educação depois */}
            <h4>Experiência</h4>
            <p style={{color: '#999', fontStyle: 'italic'}}>(Adicione experiências no menu ao lado...)</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App