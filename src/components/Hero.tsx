import { Github, Linkedin, Mail, Download, MessageCircle, ArrowDown } from 'lucide-react';

export default function Hero() {
    // Debug Supabase env variables
  useEffect(() => {
    console.log("SUPABASE_URL =", import.meta.env.VITE_SUPABASE_URL);
    console.log("SUPABASE_ANON_KEY=", import.meta.env.VITE_SUPABASE_ANON_KEY);
  }, []);
  
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-14 px-6 relative overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse" />
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="animate-scale-in w-32 h-32 rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://qhglpmoavnpwjkbyyilr.supabase.co/storage/v1/object/public/portfolio/portfolio-image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="animate-slide-up text-5xl md:text-6xl font-bold tracking-tight">
            👋🏼 I'm TAN ZU SENG
          </h1>
          <p className="animate-slide-up text-xl md:text-2xl text-blue-200 max-w-2xl font-light">
            Fresh Graduate in Computer Science (AI)
          </p>
          <p className="animate-slide-up text-lg text-slate-300 max-w-3xl leading-relaxed">
            Enthusiastic about developing AI system to solve real-world problems.
            Specialized in AI, machine learning, computer vision, Big Data and building
            full-stack solutions powered by modern web technologies and cloud platforms.
          </p>
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://qhglpmoavnpwjkbyyilr.supabase.co/storage/v1/object/public/portfolio/TanZuSeng_CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="w-5 h-5" />
              View CV
            </a>
            <a
              href="https://wa.me/60183137025"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/zseng0912"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tan-zu-seng-315197274/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:zseng0912@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-300" />
        </div>
      </div>
    </section>
  );
}
