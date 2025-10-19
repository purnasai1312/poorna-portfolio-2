import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const TerminalWindow = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalCommands = [
    { command: '$ whoami', output: 'poorna-sai-dumpa' },
    { command: '$ cat skills.txt', output: 'Python | SQL | PySpark | Airflow | DBT' },
    { command: '$ ls cloud-platforms/', output: 'AWS    GCP    Azure' },
    { command: '$ experience --years', output: '5+ years across Healthcare, Finance, Manufacturing, Retail' },
    { command: '$ echo $EXPERTISE', output: 'End-to-end Data Pipelines | ETL/ELT | Data Warehousing | BI' },
    { command: '$ current_role', output: 'Data Engineer @ Mayo Clinic | BigQuery | PySpark | HIPAA' }
  ];

  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % terminalCommands.length);
        setCurrentText('');
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    const fullCommand = terminalCommands[currentLine].command;
    if (currentText.length < fullCommand.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullCommand.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLine, isTyping]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terminal Snapshot
            </h2>
            <p className="text-xl text-gray-400">
              A quick look at my data engineering profile
            </p>
          </div>

          <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-400 font-mono">poorna@data-engineer:~</span>
              </div>
              <Terminal className="w-4 h-4 text-gray-500" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm space-y-4 min-h-[400px]">
              {terminalCommands.slice(0, currentLine).map((cmd, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-blue-400">{cmd.command}</span>
                  </div>
                  <div className="text-gray-300 pl-6">{cmd.output}</div>
                </div>
              ))}

              {/* Current typing line */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-blue-400">{currentText}</span>
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse"></span>
                </div>
                {!isTyping && (
                  <div className="text-gray-300 pl-6 animate-fade-in">
                    {terminalCommands[currentLine].output}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-emerald-400 font-mono">Tip:</span> This terminal auto-updates to showcase my skills and experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalWindow;