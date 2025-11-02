import Form from "../ui/form"
import Info from "../ui/info"

export default function ContactGrid() {
    return(
        <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            <Info />
            <Form />
            </div>
        </section>
    )
}