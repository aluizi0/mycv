// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Se der erro nos ícones, rode: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './App.css'; 

function App() {
  const [personalData, setPersonalData] = useState({
    nome: 'Seu Nome Completo',
    titulo: 'Cargo / Função',
    contato: 'email@exemplo.com | (11) 99999-9999'
  });

  const [sections, setSections] = useState([
    { id: 1, title: 'Idiomas', content: 'Inglês - Avançado' },
    { id: 2, title: 'Experiência Profissional', content: 'Empresa X (2020 - Atual)\n- Desenvolvimento de sistemas...' },
    { id: 3, title: 'Conhecimentos Específicos', content: 'React, Bootstrap, Docker' },
    { id: 4, title: 'Formação Acadêmica', content: 'Sistemas de Informação' }
  ]);

  const handlePersonalChange = (e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  
  const handleSectionChange = (id, field, value) => {
    setSections(sections.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const addSection = () => {
    setSections([...sections, { id: Date.now(), title: 'Nova Seção', content: '' }]);
  };

  const removeSection = (id) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container-fluid vh-100 overflow-hidden">
      <div className="row h-100">
        
        {/* === ESQUERDA: EDITOR === */}
        <div className="col-md-4 bg-dark text-white h-100 overflow-auto p-4">
          <div className="d-flex justify-content-between mb-4">
            <h4>Editor</h4>
            <button className="btn btn-success btn-sm" onClick={handlePrint}>
              <FontAwesomeIcon icon={faFilePdf} /> Baixar PDF
            </button>
          </div>

          <div className="mb-3">
            <label className="text-warning small fw-bold">DADOS PESSOAIS</label>
            <input className="form-control mb-2 bg-secondary text-white border-0" name="nome" placeholder="Nome" value={personalData.nome} onChange={handlePersonalChange} />
            <input className="form-control mb-2 bg-secondary text-white border-0" name="titulo" placeholder="Cargo" value={personalData.titulo} onChange={handlePersonalChange} />
            <input className="form-control bg-secondary text-white border-0" name="contato" placeholder="Contato" value={personalData.contato} onChange={handlePersonalChange} />
          </div>

          <hr className="border-secondary" />

          {sections.map((section) => (
            <div key={section.id} className="mb-3 p-3 border border-secondary rounded">
              <div className="d-flex justify-content-between mb-2">
                <input 
                  className="form-control form-control-sm bg-dark text-info fw-bold border-0" 
                  value={section.title} 
                  onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)}
                />
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeSection(section.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <textarea 
                className="form-control bg-secondary text-white border-0" 
                rows="3"
                value={section.content} 
                onChange={(e) => handleSectionChange(section.id, 'content', e.target.value)}
              />
            </div>
          ))}

          <button className="btn btn-outline-primary w-100 mt-2" onClick={addSection}>
            <FontAwesomeIcon icon={faPlus} /> Adicionar Seção
          </button>
        </div>

        {/* === DIREITA: PREVIEW === */}
        <div className="col-md-8 bg-secondary bg-opacity-25 h-100 overflow-auto d-flex justify-content-center p-5">
          
          {/* AQUI ESTÁ O TRUQUE: style={{ backgroundColor: 'white' }} DIRETO NA DIV */}
          <div 
            style={{
              backgroundColor: 'white', 
              width: '210mm', 
              minHeight: '297mm', 
              padding: '20mm',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              color: 'black'
            }}
          >
            <div className="text-center mb-4 border-bottom pb-3" style={{borderColor: '#333'}}>
              <h1 className="fw-bold mb-0" style={{color: 'black'}}>{personalData.nome}</h1>
              <p className="fs-5 mb-0 text-muted">{personalData.titulo}</p>
              <p className="small text-secondary">{personalData.contato}</p>
            </div>

            {sections.map((section) => (
              <div key={section.id} className="mb-4">
                <h5 className="fw-bold text-uppercase border-bottom pb-1" style={{color: '#2c3e50'}}>
                  {section.title}
                </h5>
                <div style={{whiteSpace: 'pre-line', color: '#333'}}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;