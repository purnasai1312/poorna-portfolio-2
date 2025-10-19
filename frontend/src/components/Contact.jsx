import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import { Mail, Linkedin, Github, Globe, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Netlify Forms submission
    const netlifyForm = document.createElement('form');
    netlifyForm.setAttribute('name', 'contact');
    netlifyForm.setAttribute('method', 'POST');
    netlifyForm.setAttribute('data-netlify', 'true');
    netlifyForm.setAttribute('hidden', 'true');
    
    Object.keys(formData).forEach(key => {
      const input = document.createElement('input');
      input.setAttribute('name', key);
      input.setAttribute('value', formData[key]);
      netlifyForm.appendChild(input);
    });
    
    document.body.appendChild(netlifyForm);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(netlifyForm)).toString()
    })
      .then(() => {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      })
      .finally(() => {
        document.body.removeChild(netlifyForm);
      });
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'from-red-500 to-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', value: personalInfo.linkedin, href: `https://${personalInfo.linkedin}`, color: 'from-blue-500 to-blue-600' },
    { icon: Github, label: 'GitHub', value: personalInfo.github, href: `https://${personalInfo.github}`, color: 'from-gray-700 to-gray-900' },
    { icon: Globe, label: 'Website', value: personalInfo.website, href: `https://${personalInfo.website}`, color: 'from-emerald-500 to-teal-500' },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'from-purple-500 to-indigo-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating or discussing data engineering opportunities?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you're looking for a data engineer to join your team or need consulting on your data infrastructure, 
                I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{link.label}</div>
                      <div className="text-white font-medium">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;