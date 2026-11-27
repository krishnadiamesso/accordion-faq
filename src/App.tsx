import './App.css'
import {useState} from "react";

interface Faq {
    id: number
    question: string
    answer: string
}

interface FaqItemProps {
    faq: Faq
    isOpen: boolean
    onToggle: () => void
}

const FaqItem = ({faq, isOpen, onToggle}: FaqItemProps) => {
    return (
        <section
            aria-labelledby={`faq-${faq.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
        >
            <h2
                id={`faq-${faq.id}`}
                className="text-lg font-semibold leading-snug text-slate-900"
            >
                <button
                    className="flex w-full items-center justify-between gap-4 rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
                    aria-controls={`faq-answer-${faq.id}`}
                    type="button" onClick={onToggle} aria-expanded={isOpen}>
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="shrink-0 text-indigo-600">{isOpen ? "−" : "+"}</span>
                </button>
            </h2>

            <p
                id={`faq-answer-${faq.id}`}
                hidden={!isOpen}
                className="mt-3 text-base leading-relaxed text-slate-600">
                {faq.answer}
            </p>
        </section>
    )
}

const faqs: Faq[] = [
    {
        id: 1,
        question: "Do I need programming experience to get started?",
        answer:
            "No experience is required. Our beginner courses introduce the basics through short lessons and practical exercises.",
    },
    {
        id: 2,
        question: "Can I learn at my own pace?",
        answer:
            "Absolutely. There are no fixed schedules or deadlines. You can pause, revisit lessons, and continue whenever it suits you.",
    },
    {
        id: 3,
        question: "Will I build real projects?",
        answer:
            "Yes! Each course includes hands-on projects that help you apply what you learn and build your portfolio.",
    },
    {
        id: 4,
        question: "What if I get stuck during a lesson?",
        answer:
            "You can ask questions in our community, compare approaches with other learners, and get guidance from course mentors.",
    },
];

function App() {
    const [openFaqId, setOpenFaqId] = useState<number | null>(null)

    function handleToggle(id: number) {
        setOpenFaqId(currentId => currentId === id ? null : id)
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-2xl">
                <header className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                        A little help getting started
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Frequently asked questions
                    </h1>

                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        Everything you need to know before starting your learning journey.
                    </p>
                </header>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <FaqItem key={faq.id} faq={faq} isOpen={openFaqId === faq.id}
                                 onToggle={() => handleToggle(faq.id)}/>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-slate-500">
                    Learn at your pace. Build something you’re proud of.
                </p>
            </div>
        </main>
    );
}

export default App
