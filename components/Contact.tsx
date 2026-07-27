import { Mail, Phone, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="w-full py-32 flex flex-col items-center justify-center text-center px-4" id="contact">
      <div className="bg-[#202020] px-5 py-2 rounded-full mb-8">
        <span className="text-[#d1d5db] font-semibold text-sm tracking-wide">Get in touch</span>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-normal text-[#202020] max-w-xl mb-16 leading-relaxed">
        {"What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."}
      </h2>

      <div className="flex flex-col gap-8 items-center w-full max-w-2xl">
        {/* Email */}
        <div className="flex items-center gap-4 md:gap-8 group w-full justify-center">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
            <Mail className="w-6 h-6 text-[#202020]" />
          </div>
          <p className="text-2xl md:text-4xl font-bold text-[#202020] tracking-tight">kamyarfaz@gmail.com</p>
          <button 
            onClick={() => copyToClipboard('kamyarfaz@gmail.com', true)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Copy Email"
          >
            {copiedEmail ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-400 hover:text-black" />}
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 md:gap-8 group w-full justify-center">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
             <Phone className="w-6 h-6 text-[#202020]" />
          </div>
          <p className="text-2xl md:text-4xl font-bold text-[#202020] tracking-tight">+39 351 871 8630</p>
          <button 
            onClick={() => copyToClipboard('+39 351 871 8630', false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Copy Phone"
          >
             {copiedPhone ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-400 hover:text-black" />}
          </button>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <p className="text-gray-500 text-sm font-medium">You may also find me on these platforms!</p>
        <div className="flex gap-6">
             <a href="https://github.com/kamyarfaz" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-black">
                <Github className="w-5 h-5" />
             </a>
             <a href="http://www.linkedin.com/in/kamyarfaz" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
             </a>
             {/* <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
             </a> */}
        </div>
      </div>
    </section>
  );
}
