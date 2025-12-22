import React from "react";
import { useState, useEffect } from "react";
import "./Contact.css";

const ContactForm = ({
    formData,
    setFormData,
    onSuccess,
    error,
    setError,
    setSuccess,
}) => {
    const [savedUser, setSavedUser] = useState(null);
    const [showSuggestion, setShowSuggestion] = useState(null);
    const [loading, setLoading] = useState(false);

    // Load saved user once
    useEffect(() => {
        const stored = localStorage.getItem("contactUser");
        if (stored) {
            try {
                setSavedUser(JSON.parse(stored));
            } catch {
                localStorage.removeItem("contactUser");
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // Save suggestion data only after success
            localStorage.setItem(
                "contactUser",
                JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                })
            );

            setSuccess("Message sent successfully");
            onSuccess(); // triggers flip in parent
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="h-full w-full rounded-xl bg-slate-800 border border-slate-700 p-8 space-y-6"
        >
            {/* NAME */}
            <div className="relative">
                <label className="block text-sm text-slate-400 mb-1">Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() =>
                        savedUser?.name && setShowSuggestion("name")
                    }
                    onBlur={() =>
                        setTimeout(() => setShowSuggestion(null), 120)
                    }
                    className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700"
                />

                {showSuggestion === "name" && savedUser?.name && (
                    <div
                        className="
              absolute left-0 top-full mt-1 z-20 w-full
              cursor-pointer rounded-md bg-slate-900
              border border-slate-700 px-3 py-2
              text-sm text-slate-400 hover:bg-slate-800
            "
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                            setFormData({ ...formData, name: savedUser.name });
                            setShowSuggestion(null);
                        }}
                    >
                        Use previous name: <strong>{savedUser.name}</strong>
                    </div>
                )}
            </div>

            {/* EMAIL */}
            <div className="relative">
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() =>
                        savedUser?.email && setShowSuggestion("email")
                    }
                    onBlur={() =>
                        setTimeout(() => setShowSuggestion(null), 120)
                    }
                    className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700"
                />

                {showSuggestion === "email" && savedUser?.email && (
                    <div
                        className="
              absolute left-0 top-full mt-1 z-20 w-full
              cursor-pointer rounded-md bg-slate-900
              border border-slate-700 px-3 py-2
              text-sm text-slate-400 hover:bg-slate-800
            "
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                            setFormData({ ...formData, email: savedUser.email });
                            setShowSuggestion(null);
                        }}
                    >
                        Use previous email: <strong>{savedUser.email}</strong>
                    </div>
                )}
            </div>

            {/* MESSAGE */}
            <div>
                <label className="block text-sm text-slate-400 mb-1">Message</label>
                <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700"
                />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className={`
                contactButton px-6 py-3 rounded-md font-medium transition mt-5 duration-250
                ${loading
                        ? "bg-indigo-400 cursor-not-allowed"
                        : "bg-indigo-500 hover:bg-indigo-400"
                    }
                    text-slate-900
        `}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
};

export default ContactForm;
