import React, { useState } from 'react';
import { codeSnippets } from '../data/mockData';
import { Code, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const CodeShowcase = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const languageColors = {
    python: 'from-blue-500 to-yellow-500',
    sql: 'from-orange-500 to-red-500'
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Code Samples
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-world code examples from production data pipelines
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 p-1 rounded-lg mb-8">
              {codeSnippets.map((snippet, index) => (
                <TabsTrigger 
                  key={snippet.id} 
                  value={index.toString()}
                  className="text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {snippet.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {codeSnippets.map((snippet, index) => (
              <TabsContent key={snippet.id} value={index.toString()} className="mt-0">
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${languageColors[snippet.language]} flex items-center justify-center`}>
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{snippet.title}</h3>
                        <p className="text-sm text-gray-400 capitalize">{snippet.language}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(snippet.code, snippet.id)}
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-slate-700"
                    >
                      {copiedId === snippet.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Code
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Technologies Demonstrated</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Big Data Processing</h4>
                <p className="text-sm">PySpark, Spark SQL, distributed computing patterns</p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-400 mb-2">Data Modeling</h4>
                <p className="text-sm">DBT, incremental models, dimensional modeling</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Orchestration</h4>
                <p className="text-sm">Apache Airflow, DAG design, task dependencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;