import { motion } from "framer-motion";

const ThankYou = () => {
    
    return (
        <div className="h-full w-full rounded-xl bg-slate-800 border border-slate-700 p-8 flex flex-col justify-center">

            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-slate-100 text-left"
            >
                Thank you!
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-slate-400 text-left"
            >
                Your message has been received. I’ll get back to you soon.
            </motion.p>

            <div className="mt-8 space-y-4 text-left border-t border-slate-700">
                <a
                    href="https://wa.me/917051015197"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:underline mt-4 block"
                >
                    Message me on WhatsApp →
                </a>

                <div className="flex gap-4 text-slate-400 ">
                    <a className="bg-slate-950 py-2 border border-slate-600 rounded-sm px-4" href="https://linkedin.com/in/yourprofile">LinkedIn</a>
                    <a className="bg-slate-950 py-2 border border-slate-600 rounded-sm px-4" href="https://github.com/yourprofile">GitHub</a>
                </div>

                
            </div>

        </div>
    );
};

export default ThankYou;




