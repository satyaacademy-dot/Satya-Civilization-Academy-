import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import contactBg from '../assets/images/contact-bg.jpg';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/27e4bc91204dcc0fa11257e71c4e79e6', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-md">
                Have questions about our programs or want to get involved? We'd love to hear from you.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <a href="mailto:akashsatya.community@gmail.com" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
                    akashsatya.community@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <a href="tel:+919975577966" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
                    +91 99755 77966
                  </a>
                </div>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-green-200"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We will get back to you soon.</p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 text-sm font-medium text-green-800 underline hover:text-green-900"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Your Name"
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Your Email"
                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="Subject (Optional)"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      placeholder="Your Message..."
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
            <img 
              src={contactBg} 
              alt="Tall trees in black and white" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
