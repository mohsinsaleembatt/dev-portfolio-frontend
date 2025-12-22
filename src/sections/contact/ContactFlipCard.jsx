// // import { motion } from "framer-motion";
// // import ContactForm from "./ContactForm";
// // import ThankYou from "./ThankYou";

// // const ContactFlipCard = ({ isSubmitted, setIsSubmitted }) => {

// //     const [isSubmitted, setIsSubmitted] = useState(false);

// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         message: "",
// //     });

// //     const [error, setError] = useState("");
// //     const [success, setSuccess] = useState("");

// //     const handleReset = () => {
// //         setIsSubmitted(false);     // flip back to form
// //         setFormData({
// //             name: "",
// //             email: "",
// //             message: "",
// //         });
// //         setError("");
// //         setSuccess("");
// //     };


// //     return (
// //         <div className="relative perspective">
// //             <motion.div
// //                 className="relative w-full rounded-2xl h-[420px] text-slate-400"
// //                 animate={{
// //                     rotateY: isSubmitted ? -200 : 0,
// //                     boxShadow: isSubmitted
// //                         ? "-30px 30px 50px rgba(255,255,255,0.1)"
// //                         : "0 1px 10px rgba(255,255,255,0.2)",
// //                 }}
// //                 transition={{
// //                     duration: 0.9,
// //                     ease: [1, 0.0, 0.5, 1], // material-like curve
// //                 }}
// //                 style={{
// //                     transformStyle: "preserve-3d",
// //                     transformOrigin: "center",
// //                 }}
// //             >

// //                 {/* FRONT */}
// //                 <div className="absolute inset-0 backface-hidden">
// //                     <ContactForm onSuccess={() => setIsSubmitted(true)} />
// //                 </div>

// //                 {/* BACK */}
// //                 <div className="absolute inset-0 rotate-y-180 backface-hidden">
// //                     <ThankYou />
// //                     <button
// //                         onClick={handleReset}
// //                         className="
// //                          mt-6
// //                          text-sm
// //                          text-accent-primary
// //                          hover:text-accent-hover
// //                          underline
// //                          transition
// //                          cursor-pointer
// //                          "
// //                     >
// //                         Send another message
// //                     </button>

// //                 </div>

// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default ContactFlipCard;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import ContactForm from "./ContactForm";
// import ThankYou from "./ThankYou";

// const ContactFlipCard = () => {
//     // 🔹 Flip state lives HERE (single source of truth)
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     // 🔹 Form state
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     // 🔹 Reset handler (used by "Send another message")
//     const handleReset = () => {
//         setIsSubmitted(false);
//         setFormData({
//             name: "",
//             email: "",
//             message: "",
//         });
//         setError("");
//         setSuccess("");
//     };

//     return (
//         // 🔹 Perspective must be defined explicitly
//         <div className="relative w-full [perspective:1200px]">
//             <motion.div
//                 className="relative w-full h-[420px] rounded-2xl text-slate-400"
//                 animate={{
//                     rotateY: isSubmitted ? -190 : 0,
//                 }}
//                 transition={{
//                     duration: 0.9,
//                     ease: [1, 0.0, 0.5, 1], // material-like curve
//                 }}
//                 style={{
//                     transformStyle: "preserve-3d",
//                     transformOrigin: "center",
//                 }}
//             >
//                 {/* FRONT — FORM */}
//                 <div className="absolute inset-0 backface-hidden">
//                     <ContactForm
//                         formData={formData}
//                         setFormData={setFormData}
//                         onSuccess={() => setIsSubmitted(true)}
//                         error={error}
//                         setError={setError}
//                         setSuccess={setSuccess}
//                     />
//                 </div>

//                 {/* BACK — THANK YOU */}
//                 <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
//                     <ThankYou />

//                     <button
//                         onClick={handleReset}
//                         className="
//                          mt-6
//                          text-sm
//                          underline
//                          text-accent-primary
//                          hover:text-accent-hover
//                          transition
//                          cursor-pointer
//             "
//                     >
//                         Send another message
//                     </button>
//                 </div>
//             </motion.div>
//         </div >
//     );
// };






// export default ContactFlipCard;
// // import { motion } from "framer-motion";
// // import ContactForm from "./ContactForm";
// // import ThankYou from "./ThankYou";

// // const ContactFlipCard = ({ isSubmitted, setIsSubmitted }) => {

// //     const [isSubmitted, setIsSubmitted] = useState(false);

// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         message: "",
// //     });

// //     const [error, setError] = useState("");
// //     const [success, setSuccess] = useState("");

// //     const handleReset = () => {
// //         setIsSubmitted(false);     // flip back to form
// //         setFormData({
// //             name: "",
// //             email: "",
// //             message: "",
// //         });
// //         setError("");
// //         setSuccess("");
// //     };


// //     return (
// //         <div className="relative perspective">
// //             <motion.div
// //                 className="relative w-full rounded-2xl h-[420px] text-slate-400"
// //                 animate={{
// //                     rotateY: isSubmitted ? -200 : 0,
// //                     boxShadow: isSubmitted
// //                         ? "-30px 30px 50px rgba(255,255,255,0.1)"
// //                         : "0 1px 10px rgba(255,255,255,0.2)",
// //                 }}
// //                 transition={{
// //                     duration: 0.9,
// //                     ease: [1, 0.0, 0.5, 1], // material-like curve
// //                 }}
// //                 style={{
// //                     transformStyle: "preserve-3d",
// //                     transformOrigin: "center",
// //                 }}
// //             >

// //                 {/* FRONT */}
// //                 <div className="absolute inset-0 backface-hidden">
// //                     <ContactForm onSuccess={() => setIsSubmitted(true)} />
// //                 </div>

// //                 {/* BACK */}
// //                 <div className="absolute inset-0 rotate-y-180 backface-hidden">
// //                     <ThankYou />
// //                     <button
// //                         onClick={handleReset}
// //                         className="
// //                          mt-6
// //                          text-sm
// //                          text-accent-primary
// //                          hover:text-accent-hover
// //                          underline
// //                          transition
// //                          cursor-pointer
// //                          "
// //                     >
// //                         Send another message
// //                     </button>

// //                 </div>

// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default ContactFlipCard;




import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ThankYou from "./ThankYou";

const ContactFlipCard = () => {
    // 🔹 Flip state lives HERE (single source of truth)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isSubmitted) {
                handleReset();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isSubmitted]);


    // 🔹 Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // 🔹 Reset handler (used by "Send another message")
    const handleReset = () => {
        setIsSubmitted(false);
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        setError("");
        setSuccess("");
    };

    return (
        // 🔹 Perspective must be defined explicitly
        <div className="relative w-full [perspective:1200px]">
            <motion.div
                className="relative w-full h-[420px] rounded-2xl text-slate-400"
                animate={{
                    rotateY: isSubmitted ? -190 : 0,
                }}
                transition={{
                    duration: isMobile ? 0.5 : 0.9,
                    ease: [1, 0.0, 0.5, 1], // material-like curve
                }}
                style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center",
                }}
            >
                {/* FRONT — FORM */}
                <div className="absolute inset-0 backface-hidden">
                    <ContactForm
                        formData={formData}
                        setFormData={setFormData}
                        onSuccess={() => setIsSubmitted(true)}
                        error={error}
                        setError={setError}
                        setSuccess={setSuccess}
                    />
                </div>

                {/* BACK — THANK YOU */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                    <ThankYou />

                    <button
                        onClick={handleReset}
                        className="
                         mt-6
                         text-sm
                         underline
                         text-accent-primary
                         hover:text-accent-hover
                         transition
                         cursor-pointer
            "
                    >
                        Send another message
                    </button>
                </div>
            </motion.div>
        </div >
    );
};

export default ContactFlipCard;
